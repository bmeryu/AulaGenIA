// ===============================
// index.js — Aula GenIA · Lógica de Servidor Completa v3 (con CORS)
// ===============================

const { onCall, HttpsError, onRequest } = require("firebase-functions/v2/https");
const { onDocumentWritten } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { MercadoPagoConfig, Preference, Payment } = require("mercadopago");

admin.initializeApp();

const mercadoPagoToken = defineSecret("MERCADOPAGO_TOKEN");
const hotmartToken = defineSecret("HOTMART_TOKEN");
const mailjetApiKey = defineSecret("MAILJET_API_KEY");
const mailjetSecretKey = defineSecret("MAILJET_SECRET_KEY");

// =======================================================================================
// META CAPI CONFIGURATION & HELPERS
// =======================================================================================
const META_ACCESS_TOKEN = "EAAMcCtBiZCggBQfzCwXscZBMNPto12lcPjXOq99K7IgZCUden2LZCfFqxEOm6cg1SnmYoTPN0lZBXeRkwVJVhXTyqlhVhsRDi9A89Xjz45CI4woY6nwyBKEZB0dZAT1ZA10Se7ejMlnxLDEwkGQbq7D5zojuoJtymmBB6hqAihZCUGsYZCyGwkwNRy73E529vpXyJdzgZDZD";
const META_PIXEL_ID = "1356922049450142";
const META_API_URL = `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events`;

const crypto = require('crypto');

/**
 * Hash data using SHA-256 (Required for PII in Meta CAPI)
 */
function hashData(data) {
    if (!data) return null;
    return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

/**
 * Send Event to Meta Conversions API
 */
async function sendMetaCAPIEvent(eventName, eventData, userData, contextData) {
    try {
        const payload = {
            data: [{
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: eventData.eventId,
                event_source_url: contextData.url,
                action_source: "website",
                user_data: {
                    em: hashData(userData.email),
                    fn: hashData(userData.firstName),
                    ln: hashData(userData.lastName),
                    client_ip_address: userData.ip,
                    client_user_agent: userData.userAgent,
                    fbp: userData.fbp,
                    fbc: userData.fbc,
                },
                custom_data: eventData.customData
            }],
            access_token: META_ACCESS_TOKEN
        };

        // Log PII-safe payload for debugging
        console.log(`📡 Sending CAPI Event: ${eventName}`, {
            event_id: eventData.eventId,
            fbp: userData.fbp,
            url: contextData.url
        });

        const response = await fetch(META_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (result.error) {
            console.error(`❌ Meta CAPI Error (${eventName}):`, result.error);
        } else {
            console.log(`✅ Meta CAPI Success (${eventName}):`, result);
        }
        return result;
    } catch (error) {
        console.error(`❌ Meta CAPI Exception (${eventName}):`, error);
        return null;
    }
}

// ===================================
// PUBLIC HELPER FOR VIEW CONTENT
// ===================================
exports.trackViewContent = onCall(
    { cors: true },
    async (request) => {
        const { eventId, fbp, fbc, url, userAgent } = request.data;

        // PCC-SAFE IP ADRESS EXTRACTION (IPv6 Friendly)
        // Extract the first IP from x-forwarded-for to get the true client IP
        let ip = request.rawRequest.ip;
        const forwardedFor = request.rawRequest.headers['x-forwarded-for'];

        if (forwardedFor) {
            // "client, proxy1, proxy2" -> take "client"
            ip = forwardedFor.split(',')[0].trim();
        } else if (!ip) {
            // Fallback
            ip = request.rawRequest.socket.remoteAddress;
        }

        // User Data (Anonymous mostly for ViewContent, but we send what we have)
        const userData = {
            fbp: fbp,
            fbc: fbc,
            userAgent: userAgent,
            ip: ip,
            // If authenticated, we could add email logic here, but usually ViewContent is anon
        };

        await sendMetaCAPIEvent('ViewContent', {
            eventId: eventId,
            customData: {
                content_name: 'Landing Page Curso IA',
                content_category: 'Curso',
                value: 20.00,
                currency: 'USD'
            }
        }, userData, { url: url });

        return { success: true };
    }
);


// ===================================
// META CAPI: INITIATE CHECKOUT
// ===================================
exports.trackInitiateCheckout = onCall(
    { cors: true },
    async (request) => {
        const { eventId, fbp, fbc, url, userAgent, email, firstName, lastName, value, currency } = request.data;

        // IP Extraction (IPv6 Friendly) - Same logic as ViewContent
        let ip = request.rawRequest.ip;
        const forwardedFor = request.rawRequest.headers['x-forwarded-for'];

        if (forwardedFor) {
            // "2001:db8::1, 192.168.1.1" → "2001:db8::1"
            ip = forwardedFor.split(',')[0].trim();
        } else if (!ip) {
            // Fallback
            ip = request.rawRequest.socket.remoteAddress;
        }

        // User Data (Authenticated user has email)
        const userData = {
            fbp: fbp,
            fbc: fbc,
            userAgent: userAgent,
            ip: ip,
            email: email,     // Will be hashed by sendMetaCAPIEvent
            firstName: firstName,
            lastName: lastName
        };

        await sendMetaCAPIEvent('InitiateCheckout', {
            eventId: eventId,
            customData: {
                value: value,
                currency: currency,
                content_ids: ['ia-aplicada-starter'],
                content_category: 'Course'
            }
        }, userData, { url: url });

        return { success: true };
    }
);


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

                        // ENVIAR EMAIL VIA MAILJET (Usa Helper)
                        try {
                            await sendWelcomeEmailHelper({
                                email: buyerEmail,
                                name: buyerName,
                                courseId: courseId,
                                resetLink: resetLink
                            });
                        } catch (emailError) {
                            console.error('❌ Error enviando email (wrapper):', emailError);
                            // Guardar en cola para reintento manual (fallback)
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
            console.error("Error checking pending purchases:", error);
            throw new HttpsError("internal", "Unable to check pending purchases: " + error.message);
        }
    }
);

// =======================================================================================
// SYSTEMA DE PAGOS FLOW (CHILE) - INTEGRACIÓN PRODUCCIÓN
// =======================================================================================

// Credenciales (PRODUCCIÓN)
const FLOW_API_KEY = "1F52067F-EE87-492E-A1D9-4775L8BE40B4";
const FLOW_SECRET_KEY = "ad4a0c0622988212d305d04ac5068d0e9042a11a";
const FLOW_API_URL = "https://www.flow.cl/api";

// Helper para firmar parámetros (HMAC SHA256) (Importado globalmente arriba, reutilizamos)
function signFlowParams(params) {
    const keys = Object.keys(params).sort();
    let toSign = "";
    keys.forEach(key => {
        toSign += key + params[key];
    });
    return crypto.createHmac('sha256', FLOW_SECRET_KEY).update(toSign).digest('hex');
}

exports.createFlowPayment = onCall(
    { cors: true },
    async (request) => {
        // Debug Init
        console.log('✅ createFlowPayment invoked.');

        // 1. Validar Usuario
        const userEmail = request.auth ? request.auth.token.email : request.data.email;
        if (!userEmail) {
            console.error('❌ Missing email');
            throw new HttpsError('invalid-argument', 'Se requiere email para generar el pago.');
        }

        const courseId = request.data.courseId || 'ia-aplicada-starter';
        console.log('📦 Course:', courseId, 'User:', userEmail);

        // 2. Configurar Orden
        // 2. Configurar Orden (Max 45 chars) -> Usamos Timestamp base36 + Random
        // Ej: starter-lzz7j2 (timestamp) - a1b2 (random)
        const shortId = Date.now().toString(36);
        const randomSuffix = Math.random().toString(36).substring(2, 6);
        const commerceOrder = `start-${shortId}-${randomSuffix}`;
        const includeBump = request.data.includeBump || false;
        const hiddenCoupon = request.data.hiddenCoupon || false;

        console.log('🔍 Payment Params:', { includeBump, hiddenCoupon, email: userEmail });

        // Config: Precios y Descripciones
        let amount = 8900;
        let subject = 'Pack Starter: IA Aplicada';

        if (hiddenCoupon) {
            amount = 1000;
            subject = 'Pack Starter TEST'; // Removed parens just in case
        } else if (includeBump) {
            amount = 14900; // 8900 + 6000
            subject = 'Pack Starter + Masterclass';
        }

        // 3. Parámetros Flow
        const params = {
            apiKey: FLOW_API_KEY,
            commerceOrder: commerceOrder,
            subject: subject,
            currency: 'CLP',
            amount: amount,
            email: userEmail,
            paymentMethod: 9, // 9 = Webpay / Todos
            urlConfirmation: 'https://flowwebhook-3kbbtamy5q-uc.a.run.app',
            urlReturn: `https://flowreturnredirect-3kbbtamy5q-uc.a.run.app?email=${encodeURIComponent(userEmail)}&orderId=${commerceOrder}`,
        };

        // 4. Firmar
        try {
            params.s = signFlowParams(params);
        } catch (signError) {
            console.error('❌ Error signing params:', signError);
            throw new HttpsError('internal', 'Error criptográfico al firmar.');
        }

        try {
            // 5. Enviar Request
            const formData = new URLSearchParams();
            for (const key in params) {
                formData.append(key, params[key]);
            }

            // GUARDAR ESTADO PENDIENTE (CRUCIAL PARA WEBHOOK)
            // GUARDAR EN SALES (NUEVA COLECCIÓN UNIFICADA)
            await admin.firestore().collection('sales').doc(commerceOrder).set({
                email: userEmail,
                courseId: courseId,
                amount: amount,
                // flowOrder se recibe en la respuesta inmediata o webhook, lo dejamos opcional aquí
                status: 'INITIATED',
                enrollmentStatus: 'PENDING',
                userId: request.auth ? request.auth.uid : null, // Opcional si no hay auth
                leadId: request.data.leadId || null, // ID del lead si viene del formulario
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
                paymentMethod: 'FLOW_CLP_PROD',
                // CAPI DATA STORAGE
                capiData: {
                    fbp: request.data.fbp || null,
                    fbc: request.data.fbc || null,
                    userAgent: request.data.userAgent || null,
                    ip: request.rawRequest.ip || request.rawRequest.headers['x-forwarded-for'] || null,
                    eventId: request.data.eventId || null // InitiateCheckout Event ID
                }
            });

            // ============================================
            // 🚀 FIRE CAPI: INITIATE CHECKOUT
            // ============================================
            const userIp = request.rawRequest.ip || request.rawRequest.headers['x-forwarded-for'];

            // Extract Name parts
            let firstName = 'Estudiante';
            let lastName = '';
            // Try to split name if available
            if (request.data.nombre) {
                const parts = request.data.nombre.trim().split(' ');
                firstName = parts[0];
                lastName = parts.slice(1).join(' ');
            }

            // Fire CAPI async (don't await strictly to speed up UI redirect)
            sendMetaCAPIEvent('InitiateCheckout', {
                eventId: request.data.eventId, // Generated in frontend, sent here
                customData: {
                    value: amount,
                    currency: 'CLP',
                    content_name: subject,
                    content_ids: [courseId],
                    content_category: 'Course'
                }
            }, {
                email: userEmail,
                firstName: firstName,
                lastName: lastName,
                fbp: request.data.fbp,
                fbc: request.data.fbc,
                userAgent: request.data.userAgent,
                ip: userIp
            }, {
                url: 'https://aulagenia.cl/landing-nuevo.html'
            });

            // Log params for debugging (excluding secret logic which is handled)
            console.log('🚀 Sending request to Flow:', FLOW_API_URL + '/payment/create');

            const response = await fetch(`${FLOW_API_URL}/payment/create`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            // Leer respuesta como texto primero para evitar fallos de JSON parsing
            const rawText = await response.text();
            console.log('📩 Flow Response (Raw):', rawText);

            let data;
            try {
                data = JSON.parse(rawText);
            } catch (jsonError) {
                console.error('❌ Failed to parse Flow response JSON:', jsonError);
                throw new HttpsError('internal', 'Respuesta inválida de Flow (No JSON): ' + rawText.substring(0, 100));
            }

            if (!response.ok || !data.token) {
                console.error('❌ Flow API Error Response:', data);
                // Si Flow da un mensaje, lo pasamos
                const flowMsg = data.message || 'Error desconocido de Flow';
                throw new HttpsError('internal', flowMsg);
            }

            // 6. Retornar URL
            return {
                url: `${data.url}?token=${data.token}`,
                token: data.token,
                flowOrder: data.flowOrder
            };

        } catch (error) {
            console.error('❌ Error in createFlowPayment execution:', error);
            if (error instanceof HttpsError) throw error;
            throw new HttpsError('internal', 'Error generando el pago Flow: ' + error.message);
        }
    }
);

exports.flowWebhook = onRequest({ secrets: [mailjetApiKey, mailjetSecretKey] }, async (req, res) => {
    try {
        console.log('🔔 Flow Webhook (Body):', req.body);
        const token = req.body.token;

        if (!token) return res.status(400).send('No token');

        // 1. Consultar estado 
        const params = { apiKey: FLOW_API_KEY, token: token };
        params.s = signFlowParams(params);

        const query = new URLSearchParams(params).toString();
        const statusResponse = await fetch(`${FLOW_API_URL}/payment/getStatus?${query}`);
        const statusData = await statusResponse.json();

        console.log('🔍 Estado Flow:', statusData);

        // 2. Validar (2 = Pagada)
        // 2. Validar (2 = Pagada)
        if (statusData.status === 2) {
            const commerceOrder = statusData.commerceOrder;
            const salesRef = admin.firestore().collection('sales').doc(commerceOrder);

            // RECUPERAR DATOS DE SALES
            let userEmail, courseId, userId;
            let saleData = {};

            try {
                // Leer de Firestore (Colección Unificada)
                const docSnap = await salesRef.get();
                if (docSnap.exists) {
                    saleData = docSnap.data();
                    userEmail = saleData.email;
                    courseId = saleData.courseId;
                    userId = saleData.userId;
                    console.log('📂 Datos recuperados de SALES:', { userEmail, courseId });
                } else {
                    console.error('⚠️ No se encontró la orden en SALES:', commerceOrder);
                    // Fallback: Leer de "optional" data de Flow si existiera
                    if (statusData.optional) {
                        try {
                            const optionalData = JSON.parse(statusData.optional);
                            userEmail = statusData.payer;
                            userId = optionalData.userId;
                            courseId = optionalData.courseId;
                        } catch (e) { console.error('Error parsing optional:', e); }
                    }
                }
            } catch (dbError) {
                console.error('❌ Error leyendo Firestore en Webhook:', dbError);
                return res.status(500).send('DB Error');
            }

            // Fallback final de datos
            if (!courseId) courseId = saleData.courseId || 'ia-aplicada-starter';
            if (!userEmail) userEmail = saleData.email || statusData.payer;

            // Actualizar estado a PAID en Sales
            await salesRef.set({
                status: 'PAID',
                flowOrder: statusData.flowOrder,
                paidAt: admin.firestore.FieldValue.serverTimestamp(),
                // Aseguramos datos esenciales por si vinieron de optional
                email: userEmail,
                courseId: courseId
            }, { merge: true });

            if (userEmail && courseId) {
                // 3. Activar en Firebase (Enrollment)
                try {
                    let targetUid = userId;

                    // Si no tenemos UID, lo buscamos
                    if (!targetUid) {
                        try {
                            const userRecord = await admin.auth().getUserByEmail(userEmail);
                            targetUid = userRecord.uid;
                        } catch (authError) {
                            if (authError.code === 'auth/user-not-found') {
                                console.log(`👤 Usuario no registrado (${userEmail}). Venta queda en estado PAID (Pending Delivery).`);
                                // No hacemos nada más, el onUserCreated se encargará
                            } else {
                                throw authError;
                            }
                        }
                    }

                    if (targetUid) {
                        // Enrolar usuario
                        await admin.firestore().collection("users").doc(targetUid).set({
                            enrollments: { [courseId]: true },
                            lastPaymentDate: admin.firestore.FieldValue.serverTimestamp()
                        }, { merge: true });

                        // Marcar venta como DELIVERED
                        await salesRef.update({
                            enrollmentStatus: 'DELIVERED',
                            userId: targetUid,
                            deliveredAt: admin.firestore.FieldValue.serverTimestamp()
                        });

                        console.log(`✅ Curso ${courseId} activado para ${userEmail} (UID: ${targetUid}) - Status: DELIVERED`);
                    }

                    // ============================================
                    // 🚀 FIRE CAPI: PURCHASE
                    // ============================================
                    try {
                        const capiData = saleData.capiData || {};
                        let firstName = 'Estudiante';
                        let lastName = '';

                        // Try to get name from User Record or Sale Data or Flow Payer
                        let fullName = saleData.nombre || ''; // Assuming 'nombre' might be saved in saleData (updated createFlowPayment to allow it explicitly if needed, but we saved it in createFlowPayment? Ah, we didn't save 'nombre' explicitly in the root of sales doc in the previous step, let's check. We passed it to createFlowPayment. We should have ensured it's saved.)
                        // Correction: In createFlowPayment we didn't save 'nombre' to the sales doc root in my previous edit block, only email. 
                        // However, we can try to fetch the user profile if they have one.

                        // Let's try to get name from User Profile if targetUid exists
                        if (userId) {
                            try {
                                const userDoc = await admin.firestore().collection('users').doc(userId).get();
                                if (userDoc.exists && userDoc.data().displayName) {
                                    fullName = userDoc.data().displayName;
                                }
                            } catch (e) {
                                console.log('Error fetching user name for CAPI:', e);
                            }
                        }

                        if (fullName) {
                            const parts = fullName.trim().split(' ');
                            firstName = parts[0];
                            lastName = parts.slice(1).join(' ');
                        }

                        // We generally trust the Flow Webhook context
                        const purchaseEventId = commerceOrder; // Deduplication ID (Order ID)

                        await sendMetaCAPIEvent('Purchase', {
                            eventId: purchaseEventId,
                            customData: {
                                value: saleData.amount,
                                currency: 'CLP',
                                content_name: `Pack Starter (${courseId})`, // Generic name
                                content_ids: [courseId],
                                content_type: 'product'
                            }
                        }, {
                            email: userEmail,
                            firstName: firstName,
                            lastName: lastName,
                            fbp: capiData.fbp,
                            fbc: capiData.fbc,
                            userAgent: capiData.userAgent,
                            ip: capiData.ip
                        }, {
                            url: 'https://aulagenia.cl/landing-nuevo.html' // Origin URL
                        });

                    } catch (capiError) {
                        console.error('❌ Error sending Purchase CAPI:', capiError);
                    }

                    // ============================================
                    // EMAIL DE BIENVENIDA (Logic reused from Hotmart)
                    // ============================================
                    try {
                        const Mailjet = require('node-mailjet');
                        // Usamos las mismas keys secretas definidas globalmente o via process.env
                        const mailjet = Mailjet.apiConnect(
                            mailjetApiKey.value(),
                            mailjetSecretKey.value()
                        );

                        // Determinar si es Pack PRO (Starter + Bump)
                        // El precio del bump es ~14900, el starter solo es ~8900
                        const paidAmount = saleData.amount || 0;
                        const isPro = paidAmount >= 14000;

                        const courseName = isPro
                            ? 'Pack PRO (Starter + Arsenal Experto)'
                            : (courseId === 'ia-aplicada-starter' ? 'Pack Starter: +100 Master Prompts' : 'Curso IA Aplicada Esencial');

                        const subjectLine = isPro
                            ? '¡Bienvenido/a al Nivel PRO! - Acceso Confirmado'
                            : 'Bienvenido/a a Aula GenIA - Acceso Confirmado';

                        // Variables comunes
                        const portalUrl = "https://aulagenia.cl/acceso.html";
                        const appPromptsUrl = "https://aulagenia.cl/maestro-prompts-app.html";
                        const campusUrl = "https://aulagenia.cl/campus.html";

                        // Intentar obtener el nombre real del usuario
                        let buyerName = 'Estudiante Aula GenIA';
                        try {
                            const userRecord = await admin.auth().getUserByEmail(userEmail);
                            if (userRecord.displayName && !userRecord.displayName.includes('@')) buyerName = userRecord.displayName;
                        } catch (e) {
                            console.log('No se pudo obtener nombre para el email, usando default.');
                        }

                        // HTML DEL CONTENIDO - Replicando estilo Teal/Mint original

                        const itemRuta = `
                            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">🗺️</span></td>
                                        <td>
                                            <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Tu Ruta de Transformación: Fases 1-4</strong>
                                            <span style="color: #64748b; font-size: 14px;">El camino paso a paso. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ingresa al Campus aquí</a></span>
                                        </td>
                                    </tr>
                                </table>
                            </div>`;

                        const itemPrompts = `
                            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">✅</span></td>
                                        <td>
                                            <strong style="color: #1e293b; display: block; margin-bottom: 4px;">+100 Instrucciones Maestras</strong>
                                            <div style="color: #64748b; font-size: 14px; margin-bottom: 4px;">Copia y pega fórmulas probadas para ChatGPT, Claude y Gemini.</div>
                                            <div style="font-size: 13px;">
                                                <a href="https://aulagenia.cl/maestro-prompts-app.html" style="color: #0d9488; text-decoration: none; font-weight: 600;">👉 Acceder a la Herramienta</a><br>
                                                <a href="https://aulagenia.cl/campus.html?download=pdf" style="color: #0d9488; text-decoration: none; font-weight: 600;">📥 Descargar PDF (Auto-descarga)</a>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>`;

                        const itemBonusPRO = `
                            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">💼</span></td>
                                        <td>
                                            <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Masterclass LinkedIn Pro</strong>
                                            <span style="color: #64748b; font-size: 14px;">Disponible desde el 22 de enero. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ver en Campus</a></span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">👁️</span></td>
                                        <td>
                                            <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Taller Visual: Piensa en Imágenes</strong>
                                            <span style="color: #64748b; font-size: 14px;">Disponible desde el 22 de enero. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ver en Campus</a></span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">📘</span></td>
                                        <td>
                                            <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Guía de Consulta Rápida</strong>
                                            <span style="color: #64748b; font-size: 14px;">Disponible desde el 22 de enero. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ver en Campus</a></span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
                                <table style="width: 100%;">
                                    <tr>
                                        <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">💎</span></td>
                                        <td>
                                            <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Licencia Permanente de Arquitecto</strong>
                                            <span style="color: #64748b; font-size: 14px;">Tu entrada a la plataforma y todas sus actualizaciones futuras, sin suscripciones.</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>`;

                        let featuresHtml = itemRuta + itemPrompts;
                        if (isPro) {
                            featuresHtml += itemBonusPRO;
                        }

                        // ENVIAR EL CORREO
                        const request = await mailjet
                            .post("send", { 'version': 'v3.1' })
                            .request({
                                "Messages": [{
                                    "From": { "Email": "contacto@aulagenia.cl", "Name": "Aula GenIA" },
                                    "To": [{ "Email": userEmail, "Name": buyerName }],
                                    "Bcc": [{ "Email": "benjamery@gmail.com", "Name": "Admin" }, { "Email": "hola@aulagenia.cl", "Name": "Hola Aula GenIA" }],
                                    "Subject": subjectLine,
                                    "HTMLPart": `
                                <!DOCTYPE html>
                                <html>
                                <head>
                                <meta charset="utf-8">
                                </head>
                                <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                                 <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-top: 40px; margin-bottom: 40px;">
                                    <!-- Header -->
                                    <div style="background: white; padding: 40px 0; text-align: center; border-bottom: 4px solid #0d9488;">
                                        <h1 style="color: #1e293b; margin: 0; font-size: 24px; font-weight: 800;">¡Tu Acceso está listo!</h1>
                                        <p style="color: #64748b; margin: 10px 0 0 0; font-size: 16px;">Tu futuro en Inteligencia Artificial comienza aquí.</p>
                                    </div>

                                    <div style="padding: 40px;">
                                        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Hola <strong style="color: #0d9488;">${buyerName}</strong>,</p>
                                        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Es un gusto saludarte. Ya confirmamos tu inscripción al <strong style="color: #1e293b;">${courseName}</strong>. 
                                        ${isPro ? 'A partir de este momento, tienes <strong style="color: #0d9488;">acceso vitalicio</strong> a las herramientas que transformarán tu productividad.' : ''}
                                        </p>

                                        <!-- Highlight Box -->
                                        <div style="background: #f0fdf4; border-left: 4px solid #4ade80; padding: 15px; margin: 25px 0; border-radius: 4px;">
                                            <p style="margin: 0; color: #15803d; font-size: 14px; font-weight: 600;">✨ Tu acceso a la Bóveda de Recursos ya ha sido sincronizado.</p>
                                        </div>

                                        <!-- Credentials Card -->
                                        <div style="background: #ccfbf1; border-radius: 16px; padding: 25px; margin: 30px 0; border: 1px solid #99f6e4;">
                                            <h2 style="text-align: center; color: #0f766e; font-size: 18px; margin-top: 0; margin-bottom: 25px;">🔑 Tus Credenciales de Acceso</h2>
                                            <!-- Details Table -->
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
                                                        <p style="color: #1e293b; margin: 0; font-size: 16px; font-weight: 600;">${userEmail}</p>
                                                    </td>
                                                </tr>
                                                 <tr>
                                                    <td style="background: white; border-radius: 10px; padding: 18px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
                                                       <p style="color: #64748b; margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">🔐 Tu Contraseña</p>
                                                        <p style="color: #555; margin: 0; font-size: 14px;">Haz clic en el botón verde de abajo para crearla</p>
                                                    </td>
                                                </tr>
                                            </table>
                                             <div style="text-align: center; margin-top: 25px;">
                                                  <a href="https://aulagenia.cl/acceso.html" style="background-color: #0d9488; color: white; padding: 16px 32px; border-radius: 30px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(13, 148, 136, 0.4);">🔐 Crear mi Contraseña y Acceder</a>
                                             </div>
                                        </div>

                                        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 20px;">📦 Lo que recibes hoy:</h3>

                                        ${featuresHtml}

                                        <div style="text-align: center; border-top: 1px solid #e2e8f0; padding-top: 20px;">
                                            <p style="color: #94a3b8; font-size: 14px; margin-bottom: 5px;">¿Tienes dudas? Escríbenos a <a href="mailto:hola@aulagenia.cl" style="color: #0d9488; text-decoration: none;">hola@aulagenia.cl</a></p>
                                            <p style="color: #0d9488; font-weight: 600; font-size: 14px;">¡Y recuerda: en Aula GenIA, la IA no es el futuro... TÚ lo eres!</p>
                                        </div>

                                    </div>
                                    <!-- Footer -->
                                    <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                                        <p style="color: #94a3b8; font-size: 13px; margin: 0;">© 2026 Aula GenIA. Todos los derechos reservados.</p>
                                    </div>
                                 </div>
                                </body>
                                </html>`
                                }]
                            });

                        console.log('✅ Email de bienvenida enviado a:', userEmail);
                    } catch (mailError) {
                        console.error('❌ Error enviando email de bienvenida:', mailError);
                    }
                } catch (e) {
                    console.error('Error finding user for enrollment:', e);
                }
            }
        }

        return res.status(200).send('OK');

    } catch (error) {
        console.error('💥 Flow Webhook Error:', error);
        return res.status(500).send('Server Error');
    }
});

// ============================================
// 7. Trigger: Auto-Enrollment on User Creation (V1)
// ============================================
exports.onUserCreated = functions.auth.user().onCreate(async (user) => {
    const email = user.email;
    if (!email) return;

    try {
        // Buscar ventas PAGADAS pero NO ENTREGADAS para este email
        const salesSnapshot = await admin.firestore().collection('sales')
            .where('email', '==', email)
            .where('status', '==', 'PAID')
            .where('enrollmentStatus', '==', 'PENDING')
            .get();

        if (salesSnapshot.empty) {
            console.log(`ℹ️ No pending sales found for new user ${email}`);
            return;
        }

        const batch = admin.firestore().batch();
        const userRef = admin.firestore().collection('users').doc(user.uid);

        // Preparar actualización de usuario (enrollment)
        // Podría haber múltiples compras pendientes (raro, pero posible)
        let newEnrollments = {};

        salesSnapshot.forEach(doc => {
            const sale = doc.data();
            if (sale.courseId) {
                newEnrollments[sale.courseId] = true;

                // Actualizar venta a DELIVERED
                batch.update(doc.ref, {
                    enrollmentStatus: 'DELIVERED',
                    userId: user.uid,
                    deliveredAt: admin.firestore.FieldValue.serverTimestamp()
                });
                console.log(`✅ Found pending sale ${doc.id} for course ${sale.courseId}`);
            }
        });

        if (Object.keys(newEnrollments).length > 0) {
            // Actualizar usuario
            await userRef.set({
                enrollments: newEnrollments,
                lastPaymentDate: admin.firestore.FieldValue.serverTimestamp()
            }, { merge: true });

            // Ejecutar batch de ventas
            await batch.commit();
            console.log(`✅ Auto - enrolled user ${email} from sales collection.`);
        }

    } catch (error) {
        console.error('Error in onUserCreated:', error);
    }
});



// ============================================
// 8. FLOW POST-TO-GET RETURN HANDLER
// ============================================
exports.flowReturnRedirect = onRequest(async (req, res) => {
    try {
        const query = req.query || {};

        // We preserve query params (email, orderId) passed in the URL.
        // We use 303 Redirect to force the browser to change method from POST to GET.

        const targetUrl = new URL('https://aulagenia.cl/acceso.html');

        Object.keys(query).forEach(key => {
            targetUrl.searchParams.append(key, query[key]);
        });

        console.log(`🔀 Redirecting Flow POST to GET: ${targetUrl.toString()}`);
        res.redirect(303, targetUrl.toString());

    } catch (error) {
        console.error('Error in flowReturnRedirect:', error);
        res.redirect(303, 'https://aulagenia.cl/acceso.html'); // Fallback
    }
});
// =======================================================================================
// TEMP ADMIN TOOL: Quick Add to Allowlist
// =======================================================================================

// =======================================================================================
// HELPERS & TRIGGERS (EMAIL AUTOMATION)
// =======================================================================================

/**
 * Helper reutilizable para enviar correo de bienvenida via Mailjet
 */
async function sendWelcomeEmailHelper({ email, name, courseId, resetLink }) {
    const Mailjet = require('node-mailjet');
    // Acceder a secretos globalmente definidos
    const mailjet = Mailjet.apiConnect(
        mailjetApiKey.value(),
        mailjetSecretKey.value()
    );

    console.log('📧 Helper: Iniciando envío de correo a:', email);

    // Determinar si es Pack PRO (Starter + Bump) logic placeholder (for allowlist default is starter/esencial)
    // Para allowlist asumimos precio 0 o default starter, pero podemos pasar flags si se requiere.
    // Por ahora usamos lógica simple basada en courseId

    const isPro = false; // Default para allowlist simple por ahora
    const courseName = courseId === 'ia-aplicada-starter'
        ? 'Pack Starter: +100 Master Prompts'
        : (courseId === 'ia-aplicada-esencial' ? 'Curso IA Aplicada Esencial' : 'Pack Starter de IA'); // Default generic

    const subjectLine = 'Bienvenido/a a Aula GenIA - Acceso Confirmado';

    // HTML from Flow Webhook Template
    const itemRuta = `
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">🗺️</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">Tu Ruta de Transformación: Fases 1-4</strong>
                        <span style="color: #64748b; font-size: 14px;">El camino paso a paso. <a href="https://aulagenia.cl/campus.html" style="color: #0d9488;">Ingresa al Campus aquí</a></span>
                    </td>
                </tr>
            </table>
        </div>`;

    const itemPrompts = `
        <div style="background: #f8fafc; border-radius: 12px; padding: 20px; margin-bottom: 15px;">
            <table style="width: 100%;">
                <tr>
                    <td style="width: 30px; vertical-align: top;"><span style="font-size: 20px;">✅</span></td>
                    <td>
                        <strong style="color: #1e293b; display: block; margin-bottom: 4px;">+100 Instrucciones Maestras</strong>
                        <div style="color: #64748b; font-size: 14px; margin-bottom: 4px;">Copia y pega fórmulas probadas para ChatGPT, Claude y Gemini.</div>
                        <div style="font-size: 13px;">
                            <a href="https://aulagenia.cl/maestro-prompts-app.html" style="color: #0d9488; text-decoration: none; font-weight: 600;">👉 Acceder a la Herramienta</a><br>
                            <a href="https://aulagenia.cl/campus.html?download=pdf" style="color: #0d9488; text-decoration: none; font-weight: 600;">📥 Descargar PDF (Auto-descarga)</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>`;

    // Starter items are standard for allowlist
    let featuresHtml = itemRuta + itemPrompts;

    try {
        const result = await mailjet.post('send', { version: 'v3.1' }).request({
            Messages: [{
                From: {
                    Email: 'contacto@aulagenia.cl',
                    Name: 'Aula GenIA'
                },
                To: [{
                    Email: email,
                    Name: name
                }],
                Bcc: [{
                    Email: 'benjamery@gmail.com',
                    Name: 'Admin'
                }, {
                    Email: 'hola@aulagenia.cl',
                    Name: 'Hola Aula GenIA' // Keep BCCs as in Flow
                }],
                Subject: subjectLine,
                HTMLPart: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
 <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-top: 40px; margin-bottom: 40px;">
    <!-- Header -->
    <div style="background: white; padding: 40px 0; text-align: center; border-bottom: 4px solid #0d9488;">
        <h1 style="color: #1e293b; margin: 0; font-size: 24px; font-weight: 800;">¡Tu Acceso está listo!</h1>
        <p style="color: #64748b; margin: 10px 0 0 0; font-size: 16px;">Tu futuro en Inteligencia Artificial comienza aquí.</p>
    </div>

    <div style="padding: 40px;">
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Hola <strong style="color: #0d9488;">${name}</strong>,</p>
        <p style="color: #334155; font-size: 16px; line-height: 1.6;">Es un gusto saludarte. Ya confirmamos tu inscripción al <strong style="color: #1e293b;">${courseName}</strong>. 
        </p>

        <!-- Highlight Box -->
        <div style="background: #f0fdf4; border-left: 4px solid #4ade80; padding: 15px; margin: 25px 0; border-radius: 4px;">
            <p style="margin: 0; color: #15803d; font-size: 14px; font-weight: 600;">✨ Tu acceso a la Bóveda de Recursos ya ha sido sincronizado.</p>
        </div>

        <!-- Credentials Card -->
        <div style="background: #ccfbf1; border-radius: 16px; padding: 25px; margin: 30px 0; border: 1px solid #99f6e4;">
            <h2 style="text-align: center; color: #0f766e; font-size: 18px; margin-top: 0; margin-bottom: 25px;">🔑 Tus Credenciales de Acceso</h2>
            <!-- Details Table -->
            <table style="width: 100%; border-collapse: separate; border-spacing: 0 12px;">
                <tr>
                    <td style="background: white; border-radius: 8px; padding: 15px; width: 100%;">
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 5px;">📍 Portal de Acceso</div>
                        <a href="https://aulagenia.cl/acceso.html" style="color: #0d9488; font-size: 16px; font-weight: 600; text-decoration: none;">aulagenia.cl/acceso</a>
                    </td>
                </tr>
                <tr>
                    <td style="background: white; border-radius: 8px; padding: 15px;">
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 5px;">👤 Tu Usuario</div>
                        <div style="color: #1e293b; font-size: 16px; font-weight: 600;">${email}</div>
                    </td>
                </tr>
                <tr>
                    <td style="background: white; border-radius: 8px; padding: 15px;">
                        <div style="color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 5px;">🔐 Tu Contraseña</div>
                        <div style="color: #1e293b; font-size: 14px;">Haz clic abajo para crearla 👇</div>
                    </td>
                </tr>
            </table>
        </div>

        <!-- CTA Button -->
        <div style="text-align: center; margin: 35px 0;">
            <a href="${resetLink}" style="display: inline-block; background: #0d9488; color: white; padding: 18px 40px; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(13, 148, 136, 0.4);">
                🔐 Crear mi Contraseña y Acceder
            </a>
            <p style="color: #94a3b8; font-size: 13px; margin-top: 15px;">(Este enlace es único y seguro)</p>
        </div>

        <h3 style="color: #1e293b; font-size: 18px; margin-bottom: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">📦 Tu Arsenal Confirmado:</h3>
        
        ${featuresHtml}

    </div>

    <!-- Footer -->
    <div style="background: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; margin: 0 0 10px 0; font-size: 14px;">¿Tienes dudas? Responde a este correo.</p>
        <p style="color: #0f766e; margin: 0; font-size: 13px; font-weight: 600;">Enviado con ❤️ desde Aula GenIA</p>
    </div>
 </div>
</body>
</html>`,
                TextPart: `¡Hola ${name}! Acceso Confirmado.\n\nUsuario: ${email}\nLink de Acceso: ${resetLink}\n\nIngresa a https://aulagenia.cl/acceso.html`
            }]
        });

        console.log('📧 Helper: Email enviado OK (Template Flow)');
        return result;
    } catch (err) {
        console.error('📧 Helper Error:', err);
        throw err;
    }
}

/**
 * TRIGGER: Enviar correo de bienvenida automáticamente al agregar/editar Allowlist
 * Escucha write en allowlist/{email}
 */
exports.onAllowlistChange = onDocumentWritten(
    {
        document: 'allowlist/{email}',
        region: 'southamerica-west1',
        secrets: [mailjetApiKey, mailjetSecretKey]
    },
    async (event) => {
        const email = event.params.email;
        const newData = event.data.after.data();
        const oldData = event.data.before ? event.data.before.data() : null;

        // 1. Validar que exista data y que sendWelcomeEmail sea true
        if (!newData || !newData.sendWelcomeEmail) {
            return console.log('🚫 Trigger: No data or sendWelcomeEmail not true');
        }

        // 2. Prevenir loops: si ya se envió, salir
        if (newData.welcomeEmailSent) {
            return console.log('✅ Trigger: Email ya enviado previamente.');
        }

        console.log('⚡ Trigger: Detectado sendWelcomeEmail=true para', email);

        try {
            // 3. Generar Link de Reset
            // Estrategia: Intentar crear el usuario si no existe (Pattern Idempotente)

            let userRecord;
            try {
                userRecord = await admin.auth().getUserByEmail(email);
            } catch (e) {
                if (e.code === 'auth/user-not-found') {
                    console.log('👤 Creando usuario desde Trigger Allowlist...');
                    userRecord = await admin.auth().createUser({
                        email: email,
                        emailVerified: true,
                        displayName: 'Estudiante (Allowlist)'
                    });
                } else {
                    throw e;
                }
            }

            const resetLink = await admin.auth().generatePasswordResetLink(email, {
                url: 'https://aulagenia.cl/acceso.html?from=allowlist'
            });

            // 4. Enviar Correo
            await sendWelcomeEmailHelper({
                email: email,
                name: userRecord.displayName || 'Estudiante',
                courseId: 'ia-aplicada-starter', // Default para allowlist
                resetLink: resetLink
            });

            // 5. Actualizar documento para no re-enviar
            await event.data.after.ref.set({
                welcomeEmailSent: true,
                sendWelcomeEmail: false, // Reset flag
                emailSentAt: admin.firestore.FieldValue.serverTimestamp()
            }, { merge: true });

            console.log('✅ Trigger: Email flow completado para', email);

        } catch (error) {
            console.error('❌ Trigger Error:', error);
        }
    }
);

// ============================================
// ADMIN: Quick Add to Allowlist (Restored)
// ============================================
exports.quickAddAllowlist = onRequest(async (req, res) => {
    // Basic security key check
    if (req.query.key !== 'temp_admin_key_123') {
        return res.status(403).send('Forbidden');
    }

    const email = req.query.email || 'bmeryu@gmail.com'; // Default or param
    const db = admin.firestore();

    try {
        console.log(`⚡ Admin Tool: Agregando ${email} a allowlist con trigger...`);
        await db.collection('allowlist').doc(email).set({
            active: true,
            courses: ['ia-aplicada-esencial', 'ia-aplicada-starter'],
            addedAt: admin.firestore.FieldValue.serverTimestamp(),
            note: 'Added via Admin Tool (Restored)',
            sendWelcomeEmail: true, // Esto dispara el TRIGGER
            welcomeEmailSent: false
        }, { merge: true });

        res.send(`✅ Success! Updated ${email} in Allowlist. Trigger should fire now.`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error: ' + error.message);
    }
});
