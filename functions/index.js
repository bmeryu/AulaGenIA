// ===============================
// index.js — Aula GenIA · Lógica de Servidor Completa v3 (con CORS)
// ===============================

const { onCall, HttpsError, onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const { MercadoPagoConfig, Preference, Payment } = require("mercadopago");

admin.initializeApp();

const mercadoPagoToken = defineSecret("MERCADOPAGO_TOKEN");
const hotmartToken = defineSecret("HOTMART_TOKEN");
const mailjetApiKey = defineSecret("MAILJET_API_KEY");
const mailjetSecretKey = defineSecret("MAILJET_SECRET_KEY");

// =======================================================================================
// FUNCIÓN 1: Crear Preferencia de Pago (Soluciona el error de CORS)(DESCUENTO)
// =======================================================================================
exports.createMercadoPagoPreference = onCall(
    {
        secrets: [mercadoPagoToken],
        cors: true,
    },
    async (request) => {
        if (!request.auth) {
            throw new HttpsError("unauthenticated", "Debes estar autenticado para comprar.");
        }

        const tokenValue = mercadoPagoToken.value().trim();
        const client = new MercadoPagoConfig({ accessToken: tokenValue });
        const preferenceClient = new Preference(client);

        const { courseId, couponId, couponCode } = request.data || {};
        if (!courseId) {
            throw new HttpsError("invalid-argument", "Falta el ID del curso ('courseId').");
        }

        const userId = request.auth.uid;
        const userEmail = request.auth.token.email;

        // Precio base dinámico según el curso
        let basePrice = 120; // Default legacy

        if (courseId === 'ia-aplicada-starter') {
            basePrice = 15;
        } else if (courseId === 'ia-aplicada-esencial') {
            basePrice = 45; // Nuevo Ref Price indicado por usuario
        }
        let finalPrice = basePrice;
        let discountAmount = 0;

        // Intentar buscar cupón por ID o por Código
        let couponDoc = null;
        let couponData = null;

        try {
            if (couponId) {
                const doc = await admin.firestore().collection('coupons').doc(couponId).get();
                if (doc.exists) {
                    couponDoc = doc;
                    couponData = doc.data();
                }
            }

            // Si no se encontró por ID y tenemos código, buscar por código
            if (!couponData && couponCode) {
                const snapshot = await admin.firestore()
                    .collection('coupons')
                    .where('code', '==', couponCode.toUpperCase())
                    .limit(1)
                    .get();

                if (!snapshot.empty) {
                    couponDoc = snapshot.docs[0];
                    couponData = couponDoc.data();
                } else {
                    // FALLBACK: Hardcoded Launch Coupons for Payment
                    const code = couponCode.toUpperCase();
                    if (code === 'LANZAMIENTO') {
                        // LANZAMIENTO solo para Starter
                        if (courseId !== 'ia-aplicada-starter') {
                            throw new HttpsError('failed-precondition', 'El cupón LANZAMIENTO solo aplica al programa Starter.');
                        }
                        couponData = {
                            code: 'LANZAMIENTO',
                            discountType: 'fixed',
                            discountValue: 10, // 15 - 10 = 5
                        };
                    } else if (code === 'FUNDADOR') {
                        // FUNDADOR solo para Esencial
                        if (courseId !== 'ia-aplicada-esencial') {
                            throw new HttpsError('failed-precondition', 'El cupón FUNDADOR solo aplica al programa Esencial.');
                        }
                        couponData = {
                            code: 'FUNDADOR',
                            discountType: 'fixed',
                            discountValue: 20, // 45 - 20 = 25
                        };
                    } else if (code === 'UPGRADESTARTER') {
                        // UPGRADESTARTER solo para Esencial
                        if (courseId !== 'ia-aplicada-esencial') {
                            throw new HttpsError('failed-precondition', 'El cupón UPGRADESTARTER solo aplica al programa Esencial.');
                        }
                        couponData = {
                            code: 'UPGRADESTARTER',
                            discountType: 'fixed',
                            discountValue: 30, // 45 - 30 = 15
                        };
                    }
                }
            }

            // Aplicar descuento si se encontró cupón
            if (couponData) {
                // Calcular descuento
                if (couponData.discountType === 'percentage') {
                    discountAmount = (basePrice * couponData.discountValue) / 100;
                } else {
                    discountAmount = Math.min(couponData.discountValue, basePrice);
                }

                finalPrice = Math.max(0, basePrice - discountAmount);
                console.log(`Cupón aplicado: ${couponData.code}, Descuento: $${discountAmount}, Precio final: $${finalPrice}`);
            } else if (couponId || couponCode) {
                // Si se intentó usar cupón pero no se encontró
                console.warn(`Cupón no encontrado: ID=${couponId}, Code=${couponCode}`);
                throw new HttpsError('not-found', 'El cupón indicado no es válido o ha expirado.');
            }

        } catch (error) {
            console.error('Error aplicando cupón:', error);
            // Re-lanzar error para que el usuario sepa que falló el cupón
            if (error instanceof HttpsError) throw error;
            throw new HttpsError('internal', 'Error al procesar el cupón de descuento.');
        }

        const courseDetails = {
            title: "Curso IA Aplicada · Esencial",
            priceUSD: finalPrice,
        };

        const notificationUrl = "https://mercadopagowebhook-3kbbtamy5q-uc.a.run.app";

        // Extraer nombre y apellido del usuario autenticado
        const name = request.auth.token.name || "Alumno GenIA";
        const nameParts = name.trim().split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(" ") || "Estudiante";

        const preferenceBody = {
            items: [{
                id: courseId,
                title: courseDetails.title,
                description: "Curso completo de Inteligencia Artificial Generativa - Aula GenIA",
                category_id: "learnings",
                quantity: 1,
                unit_price: courseDetails.priceUSD,
                currency_id: "USD",
            }],
            payer: {
                email: userEmail,
                first_name: firstName,
                last_name: lastName
            },
            back_urls: {
                success: "https://aulagenia.cl/pago-exitoso.html",
                failure: "https://aulagenia.cl/pago-fallido.html",
                pending: "https://aulagenia.cl/pago-pendiente.html",
            },
            auto_return: "approved",
            binary_mode: true, // Aprobación inmediata o rechazo (sin estado pendiente)
            notification_url: notificationUrl,
            external_reference: `${userId}_${courseId}`,

            metadata: {
                couponId: couponId || null,
                originalPrice: basePrice,
                discountAmount: discountAmount
            },

            // ✅ CONFIGURACIÓN ADICIONAL
            expires: false
        };

        try {
            const pref = await preferenceClient.create({ body: preferenceBody });
            console.log("Preferencia de Mercado Pago creada con éxito:", { id: pref.id });
            return { init_point: pref.init_point, id: pref.id };
        } catch (error) {
            console.error("Error al crear la preferencia de Mercado Pago:", error);
            throw new HttpsError("internal", "No se pudo generar el link de pago.");
        }
    },
);

// =======================================================================================
// FUNCIÓN 2: Webhook para recibir notificaciones de pago
// =======================================================================================
exports.mercadoPagoWebhook = onRequest({ secrets: [mercadoPagoToken] }, async (req, res) => {
    try {
        const tokenValue = mercadoPagoToken.value().trim();
        const client = new MercadoPagoConfig({ accessToken: tokenValue });
        const paymentClient = new Payment(client);

        const type = req.query.type || req.body.type || "";
        const action = req.body.action || "";
        const paymentId = req.body.data?.id;

        const isPaymentNotification = type === "payment" || action.startsWith("payment.");
        if (!isPaymentNotification || !paymentId) {
            console.log("Notificación de Webhook ignorada (no es un pago):", { type, action });
            return res.status(200).send("Ignored");
        }

        const payment = await paymentClient.get({ id: paymentId });
        console.log("Pago recibido vía Webhook:", {
            id: paymentId,
            status: payment.status,
            external_reference: payment.external_reference,
        });

        if (payment.status === "approved") {
            const externalReference = payment.external_reference || "";
            const [userId, courseId] = externalReference.split("_");

            if (!userId || !courseId) {
                throw new Error(`Referencia externa inválida: ${externalReference}`);
            }

            await admin.firestore().collection("users").doc(userId).set({
                enrollments: { [courseId]: true },
            }, { merge: true });

            console.log(`Acceso al curso ${courseId} concedido al usuario ${userId}`);

            // =================================================================
            // NUEVO: Lógica de seguimiento de cupones
            // =================================================================
            try {
                // Mercado Pago devuelve metadata en snake_case (coupon_id) o camelCase según la versión.
                // Revisamos ambas por seguridad. Y 'metadata' viene dentro de 'payment'.
                const metadata = payment.metadata || {};
                const couponId = metadata.coupon_id || metadata.couponId; // MP suele normalizar a snake_case

                if (couponId) {
                    console.log(`Procesando uso de cupón: ${couponId}`);
                    const couponRef = admin.firestore().collection('coupons').doc(couponId);

                    await couponRef.update({
                        currentUses: admin.firestore.FieldValue.increment(1)
                    });
                    console.log(`Cupón ${couponId} actualizado (+1 uso).`);
                } else {
                    console.log("No se detectó uso de cupón en la metadata del pago.");
                }
            } catch (couponError) {
                console.error("Error al actualizar el uso del cupón:", couponError);
                // No lanzamos error para no fallar el webhook completo, ya que el curso se entregó
            }
            // =================================================================
        }

        return res.status(200).send("OK");
    } catch (err) {
        console.error("Error crítico en el webhook de Mercado Pago:", err);
        return res.status(500).send("Error");
    }
});

// =======================================================================================
// FUNCIÓN 3: Activar curso manualmente (Para Administradores)
// =======================================================================================
exports.grantCourseAccess = onCall(async (request) => {
    const adminUIDs = ["L2FWh01btKWW8lB5HotJXjXRtMf2"];

    if (!request.auth || !adminUIDs.includes(request.auth.uid)) {
        throw new HttpsError("permission-denied", "Solo administradores.");
    }

    const { email, courseId } = request.data || {};
    if (!email || !courseId) {
        throw new HttpsError("invalid-argument", "Faltan 'email' y/o 'courseId'.");
    }

    try {
        const userRecord = await admin.auth().getUserByEmail(email);
        await admin.firestore().collection("users").doc(userRecord.uid).set({
            enrollments: { [courseId]: true },
        }, { merge: true });

        return { status: "success", message: `Curso '${courseId}' activado para ${email}.` };
    } catch (error) {
        console.error("Error en grantCourseAccess:", error);
        throw new HttpsError("unknown", `Error: ${error.message}`);
    }
});

// =======================================================================================
// FUNCIÓN 4: Resetear progreso (Administrador)
// =======================================================================================
exports.resetCourseProgress = onCall(async (request) => {
    const adminUIDs = ["L2FWh01btKWW8lB5HotJXjXRtMf2"];

    if (!request.auth || !adminUIDs.includes(request.auth.uid)) {
        throw new HttpsError("permission-denied", "Solo administradores.");
    }

    const { userEmail, courseId } = request.data || {};
    if (!userEmail || !courseId) {
        throw new HttpsError("invalid-argument", "Faltan 'userEmail' y/o 'courseId'.");
    }

    try {
        const userRecord = await admin.auth().getUserByEmail(userEmail);
        const userId = userRecord.uid;
        const progressRef = admin.firestore().collection("userProgress").doc(userId);

        await progressRef.set({
            [courseId]: {
                completedLessons: [],
                unlockedBadges: [],
                currentLessonId: null,
            },
        }, { merge: true });

        return { status: "success", message: `Progreso de '${courseId}' reseteado para ${userEmail}.` };
    } catch (error) {
        console.error("Error en resetCourseProgress:", error);
        throw new HttpsError("unknown", `Error: ${error.message}`);
    }
});

// =======================================================================================
// FUNCIÓN 5: Completar curso al 100% (Administrador)
// =======================================================================================
exports.completeCourseForUser = onCall(async (request) => {
    const adminUIDs = ['L2FWh01btKWW8lB5HotJXjXRtMf2'];

    if (!request.auth || !adminUIDs.includes(request.auth.uid)) {
        throw new HttpsError('permission-denied', 'Debes ser un administrador para ejecutar esta acción.');
    }

    const { userEmail, courseId } = request.data || {};

    if (!userEmail || !courseId) {
        throw new HttpsError('invalid-argument', 'Faltan los parámetros "userEmail" y "courseId".');
    }

    try {
        const userRecord = await admin.auth().getUserByEmail(userEmail);
        const userId = userRecord.uid;

        const ALL_COURSES_DATA = {
            'ia-aplicada-esencial': {
                modules: [
                    { lessons: [{ id: '0-1' }, { id: 'q-0' }] },
                    { lessons: [{ id: '1-1' }, { id: 'q-1' }] },
                    { lessons: [{ id: '2-1' }, { id: 'q-2' }] },
                    { lessons: [{ id: '3-1' }, { id: 'q-3' }] },
                    { lessons: [{ id: '4-1' }, { id: '4-2' }, { id: 'q-4' }] },
                    { lessons: [{ id: '5-1' }, { id: 'q-5' }] }
                ]
            }
        };

        // REPLICAR DATA PARA STARTER (Mismo contenido)
        ALL_COURSES_DATA['ia-aplicada-starter'] = ALL_COURSES_DATA['ia-aplicada-esencial'];

        const courseData = ALL_COURSES_DATA[courseId];
        if (!courseData) {
            throw new HttpsError('not-found', `El curso con ID "${courseId}" no se encontró en la configuración.`);
        }

        const allLessonIds = courseData.modules.flatMap(m => m.lessons.map(l => l.id));

        const progressRef = admin.firestore().collection('userProgress').doc(userId);

        await progressRef.set({
            [courseId]: {
                completedLessons: allLessonIds,
                currentLessonId: allLessonIds[allLessonIds.length - 1]
            }
        }, { merge: true });

        return { message: `El progreso del curso '${courseId}' fue completado al 100% para ${userEmail}.` };

    } catch (error) {
        console.error("Error completando el curso:", error);
        if (error.code === 'auth/user-not-found') {
            throw new HttpsError('not-found', `El usuario con email ${userEmail} no fue encontrado.`);
        }
        throw new HttpsError('internal', 'Ocurrió un error en el servidor.');
    }
});

// =======================================================================================
// FUNCIÓN 6: Generar Certificado Seguro (Backend Authority - V2)
// =======================================================================================
exports.generateCertificate = onCall(async (request) => {
    if (!request.auth) {
        throw new HttpsError('unauthenticated', 'Debes iniciar sesión para obtener tu certificado.');
    }
    const uid = request.auth.uid;
    const courseId = request.data.courseId || 'ia-aplicada-esencial';
    const userDisplayName = request.auth.token.name || 'Alumno';
    const COURSE_CONFIG = {
        'ia-aplicada-esencial': {
            title: 'IA Aplicada · Esencial',
            totalLessons: 20
        }
    };
    // REPLICAR CONFIG PARA STARTER
    COURSE_CONFIG['ia-aplicada-starter'] = {
        title: 'IA Aplicada · Starter',
        totalLessons: 20
    };
    const courseInfo = COURSE_CONFIG[courseId];
    if (!courseInfo) {
        throw new HttpsError('not-found', 'El curso solicitado no existe o no tiene certificación habilitada.');
    }
    try {
        const db = admin.firestore();
        const progressDoc = await db.collection('userProgress').doc(uid).get();
        if (!progressDoc.exists) {
            throw new HttpsError('failed-precondition', 'No se encontró progreso para este usuario.');
        }
        const userData = progressDoc.data();
        const courseProgress = userData[courseId];
        if (!courseProgress || !courseProgress.completedLessons) {
            throw new HttpsError('failed-precondition', 'No has iniciado este curso.');
        }
        const completedCount = new Set(courseProgress.completedLessons).size;
        const hasPassedExam = courseProgress.completedLessons.includes('final-exam');
        const isComplete = hasPassedExam || completedCount >= (courseInfo.totalLessons - 2);
        if (!isComplete) {
            throw new HttpsError(
                'failed-precondition',
                `Curso incompleto. Tienes ${completedCount}/${courseInfo.totalLessons} lecciones y no has aprobado el examen.`
            );
        }
        const certificateId = `${uid}_${courseId}`;
        const certificatePath = `artifacts/aulagenia-app/public/data/certificates/${certificateId}`;
        const certRef = db.doc(certificatePath);
        const certificateData = {
            studentName: userDisplayName,
            programName: courseInfo.title,
            completionDate: new Date().toLocaleDateString('es-CL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }),
            issuedAt: new Date().toISOString(),
            certificateId: certificateId,
            userId: uid,
            programId: courseId,
            verified: true
        };
        await certRef.set(certificateData);
        return {
            success: true,
            certificateId: certificateId,
            message: 'Certificado generado exitosamente.'
        };
    } catch (error) {
        console.error('Error generando certificado:', error);
        if (error instanceof HttpsError) throw error;
        throw new HttpsError('internal', 'Error interno del servidor.');
    }
});

// ============================================
// SISTEMA DE CUPONES DE DESCUENTO
// ============================================

exports.validateCoupon = onCall(
    {
        cors: true,
    },
    async (request) => {
        // Permitimos validar sin auth para mostrar precios en landing
        // if (!request.auth) throw new HttpsError('unauthenticated', 'Debes iniciar sesión');

        const { couponCode, courseId } = request.data;
        const userId = request.auth ? request.auth.uid : null;

        try {
            const snapshot = await admin.firestore()
                .collection('coupons')
                .where('code', '==', couponCode.toUpperCase())
                .where('active', '==', true)
                .limit(1)
                .get();

            if (snapshot.empty) {
                // FALLBACK: Hardcoded Launch Coupons if not in DB
                const code = couponCode.toUpperCase();
                if (code === 'LANZAMIENTO') {
                    // LANZAMIENTO solo para Starter
                    if (courseId !== 'ia-aplicada-starter') {
                        throw new HttpsError('failed-precondition', 'El cupón LANZAMIENTO solo aplica al programa Starter.');
                    }
                    return {
                        valid: true,
                        couponId: 'HARDCODED_LANZAMIENTO',
                        code: 'LANZAMIENTO',
                        discountType: 'fixed',
                        discountValue: 10,
                        discountAmount: 10,
                        originalPrice: 15,
                        finalPrice: 5
                    };
                }
                if (code === 'FUNDADOR') {
                    // FUNDADOR solo para Esencial
                    if (courseId !== 'ia-aplicada-esencial') {
                        throw new HttpsError('failed-precondition', 'El cupón FUNDADOR solo aplica al programa Esencial.');
                    }
                    return {
                        valid: true,
                        couponId: 'HARDCODED_FUNDADOR',
                        code: 'FUNDADOR',
                        discountType: 'fixed',
                        discountValue: 20,
                        discountAmount: 20,
                        originalPrice: 45,
                        finalPrice: 25
                    };
                }
                if (code === 'UPGRADESTARTER') {
                    // UPGRADESTARTER solo para Esencial
                    if (courseId !== 'ia-aplicada-esencial') {
                        throw new HttpsError('failed-precondition', 'El cupón UPGRADESTARTER solo aplica al programa Esencial.');
                    }
                    return {
                        valid: true,
                        couponId: 'HARDCODED_UPGRADE',
                        code: 'UPGRADESTARTER',
                        discountType: 'fixed',
                        discountValue: 30,
                        discountAmount: 30,
                        originalPrice: 45,
                        finalPrice: 15
                    };
                }

                throw new HttpsError('not-found', 'Cupón inválido');
            }

            const couponDoc = snapshot.docs[0];
            const coupon = couponDoc.data();
            const now = admin.firestore.Timestamp.now();

            if (coupon.validFrom > now || coupon.validUntil < now) {
                throw new HttpsError('failed-precondition', 'Cupón expirado');
            }

            if (coupon.currentUses >= coupon.maxUses) {
                throw new HttpsError('resource-exhausted', 'Cupón agotado');
            }

            // Verificar uso por usuario (solo si hay usuario autenticado)
            if (userId) {
                const usageSnapshot = await admin.firestore()
                    .collection('coupon_usage')
                    .where('couponId', '==', couponDoc.id)
                    .where('userId', '==', userId)
                    .get();

                if (usageSnapshot.size >= coupon.maxUsesPerUser) {
                    throw new HttpsError('failed-precondition', 'Ya usaste este cupón');
                }
            }

            // Valida coincidencia de curso (si el cupón tiene restricción)
            if (coupon.applicableTo && Array.isArray(coupon.applicableTo) && coupon.applicableTo.length > 0) {
                // Si la lista tiene "true" o está vacía, es global (comportamiento legacy/error usuario)
                // Pero si tiene IDs de cursos, verificamos.
                const hasValidIds = coupon.applicableTo.some(id => id !== "true" && typeof id === 'string');
                if (hasValidIds && !coupon.applicableTo.includes(courseId)) {
                    throw new HttpsError('failed-precondition', 'Este cupón no es válido para este curso.');
                }
            }

            let originalPrice = 120;
            if (courseId === 'ia-aplicada-starter') originalPrice = 15;
            if (courseId === 'ia-aplicada-esencial') originalPrice = 45;

            // Asegurar tipos numéricos (Firestore puede devolver strings si se ingresó mal)
            const discountVal = Number(coupon.discountValue);
            let discountAmount = 0;

            if (coupon.discountType === 'percentage') {
                discountAmount = (originalPrice * discountVal) / 100;
            } else {
                discountAmount = discountVal;
            }

            const finalPrice = Math.max(0, originalPrice - discountAmount);

            return {
                valid: true,
                couponId: couponDoc.id,
                code: coupon.code,
                discountType: coupon.discountType,
                discountValue: discountVal,
                discountAmount: Number(discountAmount), // Force Number
                originalPrice: Number(originalPrice),
                finalPrice: Number(finalPrice)
            };

        } catch (error) {
            console.error('Error validating coupon:', error);
            throw error;
        }
    }
);

exports.createCoupon = onCall(
    {
        cors: true,
    },
    async (request) => {
        if (!request.auth) {
            throw new HttpsError('unauthenticated', 'No autenticado');
        }

        const { code, discountType, discountValue, maxUses, validUntil } = request.data;

        const couponData = {
            code: code.toUpperCase(),
            discountType: discountType,
            discountValue: discountValue,
            maxUses: maxUses || 100,
            currentUses: 0,
            maxUsesPerUser: 1,
            validFrom: admin.firestore.Timestamp.now(),
            validUntil: admin.firestore.Timestamp.fromDate(new Date(validUntil)),
            validUntil: admin.firestore.Timestamp.fromDate(new Date(validUntil)),
            applicableTo: ['ia-aplicada-esencial', 'ia-aplicada-starter'],
            active: true,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            createdBy: request.auth.uid
        };

        await admin.firestore().collection('coupons').add(couponData);

        return { success: true, code: code.toUpperCase() };
    }
);

// ============================================
// APP PROMPTS
// ============================================
exports.getPromptsData = onCall(
    {
        cors: true,
    },
    async (request) => {
        if (!request.auth) {
            throw new HttpsError('unauthenticated', 'Debes estar autenticado');
        }
        try {
            const userDoc = await admin.firestore()
                .collection('users')
                .doc(request.auth.uid)
                .get();

            const userData = userDoc.exists ? userDoc.data() : {};
            const courseId = 'ia-aplicada-esencial';
            const oldCourseId = 'inteligencia-aplicada';

            const hasEnrollment = userData.enrollments &&
                (userData.enrollments[courseId] === true ||
                    userData.enrollments[oldCourseId] === true);

            // ✅ VERIFICAR ALLOWLIST (Lista blanca para admins/testers)
            let isAllowed = false;
            if (!hasEnrollment && request.auth.token.email) {
                try {
                    const allowDoc = await admin.firestore().collection('allowlist').doc(request.auth.token.email).get();
                    if (allowDoc.exists) {
                        const allowData = allowDoc.data();
                        const allowedCourses = allowData.courses || [];
                        // Verificar si está activo y tiene acceso a este curso (o al ID antiguo)
                        if (allowData.active === true &&
                            (allowedCourses.includes(courseId) || allowedCourses.includes(oldCourseId))) {
                            isAllowed = true;
                            console.log(`🔓 Acceso concedido vía Allowlist para: ${request.auth.token.email}`);
                        }
                    }
                } catch (allowError) {
                    console.error('Error verificando allowlist:', allowError);
                }
            }

            // El usuario tiene acceso si tiene enrollment O si está en la allowlist
            const finalAccess = hasEnrollment || isAllowed;

            // ✅ FREEMIUM MODEL ACTIVADO: NO bloqueamos si no hay enrollment
            // (Se eliminó el bloque if (!hasEnrollment) throw...)

            // ✅ FREEMIUM MODEL ACTIVADO: NO bloqueamos si no hay enrollment
            // Pero SÍ requiere autenticación (verificado en línea 490-492)

            // USAR BUCKET EXPLÍCITO (Confirmado por imagen del usuario)
            const bucketName = 'aulagenia.firebasestorage.app';
            console.log(`🪣 Initializing Storage bucket: ${bucketName}`);
            const bucket = admin.storage().bucket(bucketName);

            console.log('📦 Attempting to download: private/prompts_db.json');
            let contents;
            try {
                [contents] = await bucket.file('private/prompts_db.json').download();
                console.log('✅ File downloaded successfully, size:', contents.length, 'bytes');
            } catch (storageError) {
                console.error('❌ Storage download failed on primary bucket:', {
                    bucket: bucketName,
                    code: storageError.code,
                    message: storageError.message
                });

                // Intento Fallback con nombre común (por si acaso config interna difiere)
                try {
                    console.log('⚠️ Trying fallback bucket: aulagenia.appspot.com');
                    const fallbackBucket = admin.storage().bucket('aulagenia.appspot.com');
                    [contents] = await fallbackBucket.file('private/prompts_db.json').download();
                    console.log('✅ File downloaded successfully from FALLBACK bucket');
                } catch (fallbackError) {
                    console.error('❌ Fallback Storage failed:', fallbackError.message);
                    // Lanzamos error claro para debugging
                    throw new HttpsError('internal', `Storage error (${bucketName}): ${storageError.message}`);
                }
            }

            console.log('💾 Logging download to Firestore...');
            // CRITICAL FIX: Ensure hasEnrollment is not undefined, as Firestore might throw
            // If undefined (no enrollment), default to false
            const safeHasEnrollment = !!finalAccess;

            await admin.firestore().collection('promptsDownloads').add({
                userId: request.auth.uid,
                email: request.auth.token.email || 'unknown',
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
                hasEnrollment: safeHasEnrollment
            }).catch(err => console.error('⚠️ Failed to log download (non-fatal):', err));

            console.log('📝 Parsing JSON data...');
            const parsedData = JSON.parse(contents.toString('utf-8'));

            return {
                success: true,
                data: parsedData,
                hasEnrollment: safeHasEnrollment // Frontend usa esto para desbloquear lo premium
            };

        } catch (error) {
            console.error('Error en getPromptsData:', error);
            if (error instanceof HttpsError) throw error;
            throw new HttpsError('internal', 'Error al obtener datos');
        }
    }
);

// =======================================================================================
// SISTEMA DE PAGOS HOTMART
// =======================================================================================

/**
 * Mapeo de Product IDs de Hotmart a Course IDs internos
 * Product ID 6932550 = Curso IA Aplicada Starter
 */
const HOTMART_PRODUCT_MAP = {
    '6932550': 'ia-aplicada-starter',
    // Agregar más productos aquí cuando se creen:
    // 'ID_ESENCIAL': 'ia-aplicada-esencial'
};

/**
 * Webhook para recibir notificaciones de compra de Hotmart
 * URL: https://[region]-aulagenia.cloudfunctions.net/hotmartWebhook
 */
exports.hotmartWebhook = onRequest({ secrets: [hotmartToken, mailjetApiKey, mailjetSecretKey] }, async (req, res) => {
    try {
        // Hotmart envía el token en el header para verificación
        const receivedToken = req.headers['x-hotmart-hottok'];
        const expectedToken = hotmartToken.value().trim();

        // Verificar autenticidad del webhook
        if (receivedToken !== expectedToken) {
            console.error("❌ Token de Hotmart inválido", { received: receivedToken ? 'present' : 'missing' });
            return res.status(401).send("Unauthorized");
        }

        const data = req.body;
        const event = data.event || data.status;

        console.log("📦 Evento Hotmart recibido:", { event, data: JSON.stringify(data).substring(0, 500) });

        // Solo procesamos compras aprobadas
        if (event === "PURCHASE_APPROVED" || event === "PURCHASE_COMPLETE" || event === "PURCHASE_BILLET_PRINTED") {
            // Hotmart puede enviar datos en diferentes estructuras según la versión del webhook
            const buyerEmail = data.buyer?.email || data.data?.buyer?.email || data.email;
            const productId = String(data.product?.id || data.data?.product?.id || data.prod);
            const transactionId = data.transaction || data.data?.purchase?.transaction || data.purchase?.transaction;

            if (!buyerEmail) {
                console.error("❌ Email del comprador no encontrado en webhook Hotmart");
                return res.status(400).send("Missing buyer email");
            }

            // Mapear producto Hotmart -> courseId de tu sistema
            const courseId = HOTMART_PRODUCT_MAP[productId] || 'ia-aplicada-starter';

            console.log(`🔄 Procesando compra Hotmart: ${buyerEmail} -> ${courseId} (Product: ${productId})`);

            // Buscar usuario por email en Firebase Auth
            try {
                const userRecord = await admin.auth().getUserByEmail(buyerEmail);

                // Usuario existe - activar curso inmediatamente
                await admin.firestore().collection("users").doc(userRecord.uid).set({
                    enrollments: { [courseId]: true },
                    paymentProvider: 'hotmart',
                    hotmartTransactionId: transactionId,
                    hotmartPurchaseDate: admin.firestore.FieldValue.serverTimestamp()
                }, { merge: true });

                console.log(`✅ Acceso Hotmart concedido (usuario existente): ${buyerEmail} -> ${courseId}`);

            } catch (authError) {
                // Usuario no existe - CREAR AUTOMÁTICAMENTE
                if (authError.code === 'auth/user-not-found') {
                    console.log(`📝 Creando nuevo usuario para: ${buyerEmail}`);

                    try {
                        // Obtener nombre del comprador si está disponible
                        const buyerName = data.buyer?.name || data.data?.buyer?.name || 'Estudiante';

                        // Crear usuario en Firebase Auth con contraseña temporal
                        const tempPassword = Math.random().toString(36).slice(-12) + 'Aa1!';
                        const newUser = await admin.auth().createUser({
                            email: buyerEmail,
                            password: tempPassword,
                            displayName: buyerName,
                            emailVerified: false
                        });

                        console.log(`✅ Usuario creado: ${newUser.uid}`);

                        // Activar el curso para el nuevo usuario
                        await admin.firestore().collection("users").doc(newUser.uid).set({
                            enrollments: { [courseId]: true },
                            paymentProvider: 'hotmart',
                            hotmartTransactionId: transactionId,
                            hotmartPurchaseDate: admin.firestore.FieldValue.serverTimestamp(),
                            displayName: buyerName,
                            email: buyerEmail,
                            createdVia: 'hotmart-webhook'
                        }, { merge: true });

                        // Generar link de reset de contraseña
                        const resetLink = await admin.auth().generatePasswordResetLink(buyerEmail, {
                            url: 'https://aulagenia.cl/acceso.html?from=hotmart'
                        });

                        console.log(`🔗 Link de reset generado para: ${buyerEmail}`);

                        // ENVIAR EMAIL VIA MAILJET
                        try {
                            const Mailjet = require('node-mailjet');
                            const mailjet = Mailjet.apiConnect(
                                mailjetApiKey.value(),
                                mailjetSecretKey.value()
                            );

                            const courseName = courseId === 'ia-aplicada-starter'
                                ? 'Kit Starter: +100 Master Prompts'
                                : 'Curso IA Aplicada Esencial';

                            await mailjet.post('send', { version: 'v3.1' }).request({
                                Messages: [{
                                    From: {
                                        Email: 'hola@aulagenia.cl',
                                        Name: 'Aula GenIA'
                                    },
                                    To: [{
                                        Email: buyerEmail,
                                        Name: buyerName
                                    }],
                                    Bcc: [{
                                        Email: 'hola@aulagenia.cl',
                                        Name: 'Aula GenIA Admin'
                                    }],
                                    Subject: `¡Bienvenido/a Aula GenIA!`,
                                    HTMLPart: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        
        <!-- Header con gradiente -->
        <div style="background: linear-gradient(135deg, #0d9488 0%, #14b8a6 50%, #2dd4bf 100%); padding: 40px 30px; text-align: center;">
            <img src="https://aulagenia.cl/Logo_AGIA.png" alt="Aula GenIA" style="max-width: 120px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Bienvenidos a Aula GenIA</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Tu Futuro en Inteligencia Artificial comienza Aquí</p>
        </div>
        
        <!-- Contenido principal -->
        <div style="padding: 40px 30px;">
            <p style="font-size: 18px; color: #333; margin-bottom: 20px;">
                Hola <strong style="color: #0d9488;">${buyerName}</strong>,
            </p>
            
            <p style="font-size: 16px; color: #555; line-height: 1.7; margin-bottom: 25px;">
                Es un gusto saludarte. Ya confirmamos tu inscripción al <strong>Kit Starter + Fórmulas Maestras</strong>. 
                A partir de este momento, tienes <strong style="color: #0d9488;">acceso vitalicio</strong> a las herramientas que transformarán tu productividad.
            </p>
            
            <div style="background: #f0fdfa; border-left: 4px solid #14b8a6; padding: 15px 20px; margin-bottom: 30px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0; color: #0d9488; font-weight: 600;">✨ Tu acceso a la Bóveda de Recursos ya ha sido sincronizado.</p>
            </div>
            
            <!-- Credenciales -->
            <div style="background: linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px; border: 2px solid #99f6e4;">
                <h2 style="color: #0d9488; margin: 0 0 25px 0; font-size: 20px; text-align: center;">🔑 Tus Credenciales de Acceso</h2>
                
                <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
                    <tr>
                        <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                            <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">📍 Portal de Acceso</p>
                            <a href="https://aulagenia.cl/acceso.html" style="color: #0d9488; font-size: 16px; font-weight: 600; text-decoration: none;">aulagenia.cl/acceso</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                            <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">👤 Tu Usuario</p>
                            <p style="color: #1e293b; margin: 0; font-size: 16px; font-weight: 600;">${buyerEmail}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                            <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">🔐 Tu Contraseña</p>
                            <p style="color: #1e293b; margin: 0; font-size: 14px;">Haz clic en el botón verde de abajo para crearla</p>
                        </td>
                    </tr>
                </table>
            </div>
            
            <!-- Botón CTA -->
            <div style="text-align: center; margin-bottom: 35px;">
                <a href="${resetLink}" style="display: inline-block; background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); color: white; padding: 18px 40px; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(20, 184, 166, 0.4);">
                    🔐 Crear mi Contraseña y Acceder
                </a>
            </div>
            
            <!-- Lo que recibes -->
            <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 20px;">📦 Lo que recibes hoy:</h3>
            
            <div style="margin-bottom: 15px; padding: 15px; background: #f8fafc; border-radius: 10px; display: flex; align-items: flex-start;">
                <span style="font-size: 24px; margin-right: 15px;">✅</span>
                <div>
                    <strong style="color: #1e293b;">+100 Instrucciones Maestras</strong>
                    <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Copia y pega fórmulas probadas para ChatGPT, Claude y Gemini. <a href="https://aulagenia.cl/maestro-prompts-app.html" style="color: #14b8a6;">Accede aquí</a></p>
                </div>
            </div>
            
            <div style="margin-bottom: 15px; padding: 15px; background: #f8fafc; border-radius: 10px; display: flex; align-items: flex-start;">
                <span style="font-size: 24px; margin-right: 15px;">🚀</span>
                <div>
                    <strong style="color: #1e293b;">Ahorro de Tiempo</strong>
                    <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Recupera hasta 10 horas de tu semana automatizando tareas repetitivas. <a href="https://aulagenia.cl/campus.html" style="color: #14b8a6;">Accede aquí</a></p>
                </div>
            </div>
            
            <div style="margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 10px; display: flex; align-items: flex-start;">
                <span style="font-size: 24px; margin-right: 15px;">💎</span>
                <div>
                    <strong style="color: #1e293b;">Licencia Permanente de Arquitecto</strong>
                    <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Tu entrada a la plataforma y todas sus actualizaciones futuras, sin suscripciones.</p>
                </div>
            </div>
            
        </div>
        
        <!-- Footer -->
        <div style="background: #f8fafc; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">¿Tienes dudas? Escríbenos a <a href="mailto:hola@aulagenia.cl" style="color: #14b8a6;">hola@aulagenia.cl</a></p>
            <p style="color: #0d9488; margin: 0; font-size: 13px; font-weight: 600;">¡Y recuerda: en Aula GenIA, la IA no es el futuro… TÚ lo eres!</p>
        </div>
        
    </div>
</body>
</html>
                                    `,
                                    TextPart: `¡Hola ${buyerName}! Bienvenido/a a la élite de la IA.

Tu inscripción al Kit Starter + Fórmulas Maestras está confirmada.

🔑 TUS CREDENCIALES:
Portal: https://aulagenia.cl/acceso.html
Usuario: ${buyerEmail}
Contraseña: Crea tu contraseña aquí: ${resetLink}

📦 LO QUE RECIBES:
- +100 Instrucciones Maestras para ChatGPT, Claude y Gemini
- Ecosistema de Automatización
- Acceso Vitalicio

¿Dudas? Escríbenos a hola@aulagenia.cl`
                                }]
                            });

                            console.log(`✉️ Email enviado exitosamente a: ${buyerEmail}`);

                            // Guardar registro del email enviado
                            await admin.firestore().collection("emailsSent").add({
                                to: buyerEmail,
                                type: 'welcome-hotmart',
                                courseId: courseId,
                                sentAt: admin.firestore.FieldValue.serverTimestamp(),
                                status: 'sent'
                            });

                        } catch (emailError) {
                            console.error('❌ Error enviando email:', emailError);
                            // Guardar en cola para reintento manual
                            await admin.firestore().collection("emailQueue").add({
                                to: buyerEmail,
                                template: 'welcome-hotmart',
                                data: { name: buyerName, courseId, resetLink },
                                status: 'failed',
                                error: emailError.message,
                                createdAt: admin.firestore.FieldValue.serverTimestamp()
                            });
                        }

                        console.log(`✅ Compra Hotmart procesada(usuario nuevo): ${buyerEmail} -> ${courseId}`);

                    } catch (createError) {
                        console.error("❌ Error creando usuario:", createError);
                        // Fallback: guardar en cola pendiente
                        await admin.firestore().collection("pendingHotmartPurchases").add({
                            email: buyerEmail.toLowerCase(),
                            courseId: courseId,
                            productId: productId,
                            transactionId: transactionId,
                            event: event,
                            error: createError.message,
                            createdAt: admin.firestore.FieldValue.serverTimestamp(),
                            processed: false
                        });
                    }
                } else {
                    console.error("❌ Error buscando usuario:", authError);
                    throw authError;
                }
            }
        } else if (event === "REFUND" || event === "PURCHASE_REFUNDED" || event === "CHARGEBACK") {
            // Manejar reembolsos - opcional pero recomendado
            const buyerEmail = data.buyer?.email || data.data?.buyer?.email;
            console.log(`⚠️ Reembolso / Chargeback detectado para: ${buyerEmail}`);
            // Aquí podrías desactivar el acceso si lo deseas
        } else {
            console.log(`ℹ️ Evento Hotmart ignorado(no relevante): ${event}`);
        }

        return res.status(200).send("OK");
    } catch (err) {
        console.error("❌ Error crítico en webhook Hotmart:", err);
        return res.status(500).send("Error");
    }
});

/**
 * Función para verificar y activar compras pendientes de Hotmart
 * Se llama cuando un usuario se registra o inicia sesión
 */
exports.checkPendingHotmartPurchase = onCall(
    {
        cors: true,
    },
    async (request) => {
        if (!request.auth) {
            throw new HttpsError("unauthenticated", "Debes estar autenticado.");
        }

        const userEmail = request.auth.token.email;
        if (!userEmail) {
            return { found: false, message: "No email associated with account" };
        }

        try {
            // Buscar compras pendientes para este email
            const pendingSnap = await admin.firestore()
                .collection("pendingHotmartPurchases")
                .where("email", "==", userEmail.toLowerCase())
                .where("processed", "==", false)
                .get();

            if (pendingSnap.empty) {
                return { found: false };
            }

            // Activar todos los cursos pendientes
            const batch = admin.firestore().batch();
            const userRef = admin.firestore().collection("users").doc(request.auth.uid);

            let enrollments = {};
            let coursesActivated = [];

            pendingSnap.docs.forEach(doc => {
                const data = doc.data();
                enrollments[data.courseId] = true;
                coursesActivated.push(data.courseId);

                // Marcar como procesado (no eliminar para auditoría)
                batch.update(doc.ref, {
                    processed: true,
                    processedAt: admin.firestore.FieldValue.serverTimestamp(),
                    processedUserId: request.auth.uid
                });
            });

            // Actualizar usuario con enrollments
            batch.set(userRef, {
                enrollments,
                paymentProvider: 'hotmart'
            }, { merge: true });

            await batch.commit();

            console.log(`✅ Compras pendientes activadas para ${userEmail}: `, coursesActivated);

            return {
                found: true,
                coursesActivated: coursesActivated,
                message: `Se activaron ${coursesActivated.length} curso(s)`
            };

        } catch (error) {
            console.error('Error verificando compras pendientes de Hotmart:', error);
            throw new HttpsError('internal', 'Error al verificar compras pendientes');
        }
    }
);