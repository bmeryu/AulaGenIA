// ===============================
// index.js â Aula GenIA Â· LÃ³gica de Servidor Completa v3 (con CORS)
// ===============================

const { onCall, HttpsError, onRequest } = require("firebase-functions/v2/https");
const { onDocumentWritten, onDocumentCreated } = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { MercadoPagoConfig, Preference, Payment } = require("mercadopago");
const { sendUnifiedWelcomeEmail } = require("./emailTemplates");

admin.initializeApp();

const mercadoPagoToken = defineSecret("MERCADOPAGO_TOKEN");
const hotmartToken = defineSecret("HOTMART_TOKEN");
const mailjetApiKey = defineSecret("MAILJET_API_KEY");
const mailjetSecretKey = defineSecret("MAILJET_SECRET_KEY");
const ga4ApiSecret = defineSecret("GA4_API_SECRET");

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
            // â ï¸ TEST MODE ACTIVE (Remove in Prod)
            // ⚠️ TEST MODE ACTIVE (Remove in Prod)
            // test_event_code: 'TEST68724',
            access_token: META_ACCESS_TOKEN
        };

        // Log PII-safe payload for debugging
        console.log(`ð¡ Sending CAPI Event: ${eventName}`, {
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
            console.error(`â Meta CAPI Error (${eventName}):`, result.error);
        } else {
            console.log(`â Meta CAPI Success (${eventName}):`, result);
        }
        return result;
    } catch (error) {
        console.error(`â Meta CAPI Exception (${eventName}):`, error);
        return null;
    }
}

// =======================================================================================
// GA4 MEASUREMENT PROTOCOL (Server-Side Tracking)
// =======================================================================================
const GA4_MEASUREMENT_ID = 'G-X500LE6Z8X';

/**
 * Send event to GA4 via Measurement Protocol (Server-Side)
 * Bypasses ad blockers for critical events like Purchase
 */
async function sendGA4ServerEvent(clientId, eventName, eventParams) {
    try {
        const apiSecret = ga4ApiSecret.value();
        const response = await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${apiSecret}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    client_id: clientId, // Firebase UID
                    events: [{
                        name: eventName,
                        params: eventParams
                    }]
                })
            }
        );

        if (response.ok) {
            console.log(`â GA4 Server Event: ${eventName}`);
            return true;
        } else {
            console.error(`â GA4 API Error (${eventName}):`, await response.text());
            return false;
        }
    } catch (error) {
        console.error(`â GA4 Server Event Exception (${eventName}):`, error);
        return false;
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
        // Extract the first IPv6 IP from x-forwarded-for if available, otherwise fallback to IPv4
        let ip = request.rawRequest.ip;
        const forwardedFor = request.rawRequest.headers['x-forwarded-for'];

        if (forwardedFor) {
            const ips = forwardedFor.split(',').map(i => i.trim());
            // Try to find an IPv6 address (contains a colon)
            const ipv6 = ips.find(i => i.includes(':'));
            // If IPv6 found, use it; otherwise use the first IP (likely IPv4)
            ip = ipv6 || ips[0];
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

        // IP Extraction (IPv6 Friendly) - Prioritize IPv6
        let ip = request.rawRequest.ip;
        const forwardedFor = request.rawRequest.headers['x-forwarded-for'];

        if (forwardedFor) {
            const ips = forwardedFor.split(',').map(i => i.trim());
            // Try to find an IPv6 address (contains a colon)
            const ipv6 = ips.find(i => i.includes(':'));
            // If IPv6 found, use it; otherwise use the first IP
            ip = ipv6 || ips[0];
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
// FUNCIÃN 1: Crear Preferencia de Pago (Soluciona el error de CORS)(DESCUENTO)
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

        // Precio base dinÃ¡mico segÃºn el curso
        let basePrice = 120; // Default legacy

        if (courseId === 'ia-aplicada-starter') {
            basePrice = 15;
        } else if (courseId === 'ia-aplicada-esencial') {
            basePrice = 45; // Nuevo Ref Price indicado por usuario
        }
        let finalPrice = basePrice;
        let discountAmount = 0;

        // Intentar buscar cupÃ³n por ID o por CÃ³digo
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

            // Si no se encontrÃ³ por ID y tenemos cÃ³digo, buscar por cÃ³digo
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
                            throw new HttpsError('failed-precondition', 'El cupÃ³n LANZAMIENTO solo aplica al programa Starter.');
                        }
                        couponData = {
                            code: 'LANZAMIENTO',
                            discountType: 'fixed',
                            discountValue: 10, // 15 - 10 = 5
                        };
                    } else if (code === 'FUNDADOR') {
                        // FUNDADOR solo para Esencial
                        if (courseId !== 'ia-aplicada-esencial') {
                            throw new HttpsError('failed-precondition', 'El cupÃ³n FUNDADOR solo aplica al programa Esencial.');
                        }
                        couponData = {
                            code: 'FUNDADOR',
                            discountType: 'fixed',
                            discountValue: 20, // 45 - 20 = 25
                        };
                    } else if (code === 'UPGRADESTARTER') {
                        // UPGRADESTARTER solo para Esencial
                        if (courseId !== 'ia-aplicada-esencial') {
                            throw new HttpsError('failed-precondition', 'El cupÃ³n UPGRADESTARTER solo aplica al programa Esencial.');
                        }
                        couponData = {
                            code: 'UPGRADESTARTER',
                            discountType: 'fixed',
                            discountValue: 30, // 45 - 30 = 15
                        };
                    }
                }
            }

            // Aplicar descuento si se encontrÃ³ cupÃ³n
            if (couponData) {
                // Calcular descuento
                if (couponData.discountType === 'percentage') {
                    discountAmount = (basePrice * couponData.discountValue) / 100;
                } else {
                    discountAmount = Math.min(couponData.discountValue, basePrice);
                }

                finalPrice = Math.max(0, basePrice - discountAmount);
                console.log(`CupÃ³n aplicado: ${couponData.code}, Descuento: $${discountAmount}, Precio final: $${finalPrice}`);
            } else if (couponId || couponCode) {
                // Si se intentÃ³ usar cupÃ³n pero no se encontrÃ³
                console.warn(`CupÃ³n no encontrado: ID=${couponId}, Code=${couponCode}`);
                throw new HttpsError('not-found', 'El cupÃ³n indicado no es vÃ¡lido o ha expirado.');
            }

        } catch (error) {
            console.error('Error aplicando cupÃ³n:', error);
            // Re-lanzar error para que el usuario sepa que fallÃ³ el cupÃ³n
            if (error instanceof HttpsError) throw error;
            throw new HttpsError('internal', 'Error al procesar el cupÃ³n de descuento.');
        }

        const courseDetails = {
            title: "Curso IA Aplicada Â· Esencial",
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
            binary_mode: true, // AprobaciÃ³n inmediata o rechazo (sin estado pendiente)
            notification_url: notificationUrl,
            external_reference: `${userId}_${courseId}`,

            metadata: {
                couponId: couponId || null,
                originalPrice: basePrice,
                discountAmount: discountAmount
            },

            // â CONFIGURACIÃN ADICIONAL
            expires: false
        };

        try {
            const pref = await preferenceClient.create({ body: preferenceBody });
            console.log("Preferencia de Mercado Pago creada con Ã©xito:", { id: pref.id });
            return { init_point: pref.init_point, id: pref.id };
        } catch (error) {
            console.error("Error al crear la preferencia de Mercado Pago:", error);
            throw new HttpsError("internal", "No se pudo generar el link de pago.");
        }
    },
);

// =======================================================================================
// FUNCIÃN 2: Webhook para recibir notificaciones de pago
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
            console.log("NotificaciÃ³n de Webhook ignorada (no es un pago):", { type, action });
            return res.status(200).send("Ignored");
        }

        const payment = await paymentClient.get({ id: paymentId });
        console.log("Pago recibido vÃ­a Webhook:", {
            id: paymentId,
            status: payment.status,
            external_reference: payment.external_reference,
        });

        if (payment.status === "approved") {
            const externalReference = payment.external_reference || "";
            const [userId, courseId] = externalReference.split("_");

            if (!userId || !courseId) {
                throw new Error(`Referencia externa invÃ¡lida: ${externalReference}`);
            }

            await admin.firestore().collection("users").doc(userId).set({
                enrollments: { [courseId]: true },
            }, { merge: true });

            console.log(`Acceso al curso ${courseId} concedido al usuario ${userId}`);

            // =================================================================
            // GA4 SERVER-SIDE PURCHASE EVENT (Phase 3 - Bypass Ad Blockers)
            // =================================================================
            /* â¸ï¸ Re-habilitar cuando el secret estÃ© configurado
            try {
                await sendGA4ServerEvent(
                    userId, // Firebase UID as client_id
                    'purchase',
                    {
                        transaction_id: paymentId.toString(),
                        value: payment.transaction_amount || 0,
                        currency: payment.currency_id || 'USD',
                        items: [{
                            item_id: courseId,
                            item_name: courseId === 'ia-aplicada-starter' ? 'Pack Starter' : 'Programa Esencial',
                            price: payment.transaction_amount || 0,
                            quantity: 1
                        }]
                    }
                );
            } catch (ga4Error) {
                console.error('GA4 server event failed (non-blocking):', ga4Error);
            }
            */

            // =================================================================
            // NUEVO: LÃ³gica de seguimiento de cupones
            // =================================================================
            try {
                // Mercado Pago devuelve metadata en snake_case (coupon_id) o camelCase segÃºn la versiÃ³n.
                // Revisamos ambas por seguridad. Y 'metadata' viene dentro de 'payment'.
                const metadata = payment.metadata || {};
                const couponId = metadata.coupon_id || metadata.couponId; // MP suele normalizar a snake_case

                if (couponId) {
                    console.log(`Procesando uso de cupÃ³n: ${couponId}`);
                    const couponRef = admin.firestore().collection('coupons').doc(couponId);

                    await couponRef.update({
                        currentUses: admin.firestore.FieldValue.increment(1)
                    });
                    console.log(`CupÃ³n ${couponId} actualizado (+1 uso).`);
                } else {
                    console.log("No se detectÃ³ uso de cupÃ³n en la metadata del pago.");
                }
            } catch (couponError) {
                console.error("Error al actualizar el uso del cupÃ³n:", couponError);
                // No lanzamos error para no fallar el webhook completo, ya que el curso se entregÃ³
            }
            // =================================================================
        }

        return res.status(200).send("OK");
    } catch (err) {
        console.error("Error crÃ­tico en el webhook de Mercado Pago:", err);
        return res.status(500).send("Error");
    }
});

// =======================================================================================
// FUNCIÃN 3: Activar curso manualmente (Para Administradores)
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
// FUNCIÃN 4: Resetear progreso (Administrador)
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
// FUNCIÃN 5: Completar curso al 100% (Administrador)
// =======================================================================================
exports.completeCourseForUser = onCall(async (request) => {
    const adminUIDs = ['L2FWh01btKWW8lB5HotJXjXRtMf2'];

    if (!request.auth || !adminUIDs.includes(request.auth.uid)) {
        throw new HttpsError('permission-denied', 'Debes ser un administrador para ejecutar esta acciÃ³n.');
    }

    const { userEmail, courseId } = request.data || {};

    if (!userEmail || !courseId) {
        throw new HttpsError('invalid-argument', 'Faltan los parÃ¡metros "userEmail" y "courseId".');
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
            throw new HttpsError('not-found', `El curso con ID "${courseId}" no se encontrÃ³ en la configuraciÃ³n.`);
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
        throw new HttpsError('internal', 'OcurriÃ³ un error en el servidor.');
    }
});

// =======================================================================================
// FUNCIÃN 6: Generar Certificado Seguro (Backend Authority - V2)
// =======================================================================================
exports.generateCertificate = onCall(async (request) => {
    if (!request.auth) {
        throw new HttpsError('unauthenticated', 'Debes iniciar sesiÃ³n para obtener tu certificado.');
    }
    const uid = request.auth.uid;
    const courseId = request.data.courseId || 'ia-aplicada-esencial';
    const userDisplayName = request.auth.token.name || 'Alumno';
    const COURSE_CONFIG = {
        'ia-aplicada-esencial': {
            title: 'IA Aplicada Â· Esencial',
            totalLessons: 20
        }
    };
    // REPLICAR CONFIG PARA STARTER
    COURSE_CONFIG['ia-aplicada-starter'] = {
        title: 'IA Aplicada Â· Starter',
        totalLessons: 20
    };
    const courseInfo = COURSE_CONFIG[courseId];
    if (!courseInfo) {
        throw new HttpsError('not-found', 'El curso solicitado no existe o no tiene certificaciÃ³n habilitada.');
    }
    try {
        const db = admin.firestore();
        const progressDoc = await db.collection('userProgress').doc(uid).get();
        if (!progressDoc.exists) {
            throw new HttpsError('failed-precondition', 'No se encontrÃ³ progreso para este usuario.');
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
        // if (!request.auth) throw new HttpsError('unauthenticated', 'Debes iniciar sesiÃ³n');

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
                        throw new HttpsError('failed-precondition', 'El cupÃ³n LANZAMIENTO solo aplica al programa Starter.');
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
                        throw new HttpsError('failed-precondition', 'El cupÃ³n FUNDADOR solo aplica al programa Esencial.');
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
                        throw new HttpsError('failed-precondition', 'El cupÃ³n UPGRADESTARTER solo aplica al programa Esencial.');
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

                throw new HttpsError('not-found', 'CupÃ³n invÃ¡lido');
            }

            const couponDoc = snapshot.docs[0];
            const coupon = couponDoc.data();
            const now = admin.firestore.Timestamp.now();

            if (coupon.validFrom > now || coupon.validUntil < now) {
                throw new HttpsError('failed-precondition', 'CupÃ³n expirado');
            }

            if (coupon.currentUses >= coupon.maxUses) {
                throw new HttpsError('resource-exhausted', 'CupÃ³n agotado');
            }

            // Verificar uso por usuario (solo si hay usuario autenticado)
            if (userId) {
                const usageSnapshot = await admin.firestore()
                    .collection('coupon_usage')
                    .where('couponId', '==', couponDoc.id)
                    .where('userId', '==', userId)
                    .get();

                if (usageSnapshot.size >= coupon.maxUsesPerUser) {
                    throw new HttpsError('failed-precondition', 'Ya usaste este cupÃ³n');
                }
            }

            // Valida coincidencia de curso (si el cupÃ³n tiene restricciÃ³n)
            if (coupon.applicableTo && Array.isArray(coupon.applicableTo) && coupon.applicableTo.length > 0) {
                // Si la lista tiene "true" o está vacÃ­a, es global (comportamiento legacy/error usuario)
                // Pero si tiene IDs de cursos, verificamos.
                const hasValidIds = coupon.applicableTo.some(id => id !== "true" && typeof id === 'string');
                if (hasValidIds && !coupon.applicableTo.includes(courseId)) {
                    throw new HttpsError('failed-precondition', 'Este cupÃ³n no es vÃ¡lido para este curso.');
                }
            }

            let originalPrice = 120;
            if (courseId === 'ia-aplicada-starter') originalPrice = 15;
            if (courseId === 'ia-aplicada-esencial') originalPrice = 45;

            // Asegurar tipos numÃ©ricos (Firestore puede devolver strings si se ingresÃ³ mal)
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

            // â VERIFICAR ALLOWLIST (Lista blanca para admins/testers)
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
                            console.log(`ð Acceso concedido vÃ­a Allowlist para: ${request.auth.token.email}`);
                        }
                    }
                } catch (allowError) {
                    console.error('Error verificando allowlist:', allowError);
                }
            }

            // El usuario tiene acceso si tiene enrollment O si está en la allowlist
            const finalAccess = hasEnrollment || isAllowed;

            // â FREEMIUM MODEL ACTIVADO: NO bloqueamos si no hay enrollment
            // (Se eliminÃ³ el bloque if (!hasEnrollment) throw...)

            // â FREEMIUM MODEL ACTIVADO: NO bloqueamos si no hay enrollment
            // Pero SÃ requiere autenticaciÃ³n (verificado en lÃ­nea 490-492)

            // USAR BUCKET EXPLÃCITO (Confirmado por imagen del usuario)
            const bucketName = 'aulagenia.firebasestorage.app';
            console.log(`ðª£ Initializing Storage bucket: ${bucketName}`);
            const bucket = admin.storage().bucket(bucketName);

            console.log('ð¦ Attempting to download: private/prompts_db.json');
            let contents;
            try {
                [contents] = await bucket.file('private/prompts_db.json').download();
                console.log('â File downloaded successfully, size:', contents.length, 'bytes');
            } catch (storageError) {
                console.error('â Storage download failed on primary bucket:', {
                    bucket: bucketName,
                    code: storageError.code,
                    message: storageError.message
                });

                // Intento Fallback con nombre comÃºn (por si acaso config interna difiere)
                try {
                    console.log('â ï¸ Trying fallback bucket: aulagenia.appspot.com');
                    const fallbackBucket = admin.storage().bucket('aulagenia.appspot.com');
                    [contents] = await fallbackBucket.file('private/prompts_db.json').download();
                    console.log('â File downloaded successfully from FALLBACK bucket');
                } catch (fallbackError) {
                    console.error('â Fallback Storage failed:', fallbackError.message);
                    // Lanzamos error claro para debugging
                    throw new HttpsError('internal', `Storage error (${bucketName}): ${storageError.message}`);
                }
            }

            console.log('ð¾ Logging download to Firestore...');
            // CRITICAL FIX: Ensure hasEnrollment is not undefined, as Firestore might throw
            // If undefined (no enrollment), default to false
            const safeHasEnrollment = !!finalAccess;

            await admin.firestore().collection('promptsDownloads').add({
                userId: request.auth.uid,
                email: request.auth.token.email || 'unknown',
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
                hasEnrollment: safeHasEnrollment
            }).catch(err => console.error('â ï¸ Failed to log download (non-fatal):', err));

            console.log('ð Parsing JSON data...');
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
    // Agregar mÃ¡s productos aquí cuando se creen:
    // 'ID_ESENCIAL': 'ia-aplicada-esencial'
};

/**
 * Webhook para recibir notificaciones de compra de Hotmart
 * URL: https://[region]-aulagenia.cloudfunctions.net/hotmartWebhook
 */
exports.hotmartWebhook = onRequest({ secrets: [hotmartToken, mailjetApiKey, mailjetSecretKey] }, async (req, res) => {
    try {
        // Hotmart envÃ­a el token en el header para verificaciÃ³n
        const receivedToken = req.headers['x-hotmart-hottok'];
        const expectedToken = hotmartToken.value().trim();

        // Verificar autenticidad del webhook
        if (receivedToken !== expectedToken) {
            console.error("â Token de Hotmart invÃ¡lido", { received: receivedToken ? 'present' : 'missing' });
            return res.status(401).send("Unauthorized");
        }

        const data = req.body;
        const event = data.event || data.status;

        console.log("ð¦ Evento Hotmart recibido:", { event, data: JSON.stringify(data).substring(0, 500) });

        // Solo procesamos compras aprobadas
        if (event === "PURCHASE_APPROVED" || event === "PURCHASE_COMPLETE" || event === "PURCHASE_BILLET_PRINTED") {
            // Hotmart puede enviar datos en diferentes estructuras segÃºn la versiÃ³n del webhook
            const buyerEmail = data.buyer?.email || data.data?.buyer?.email || data.email;
            const productId = String(data.product?.id || data.data?.product?.id || data.prod);
            const transactionId = data.transaction || data.data?.purchase?.transaction || data.purchase?.transaction;

            if (!buyerEmail) {
                console.error("â Email del comprador no encontrado en webhook Hotmart");
                return res.status(400).send("Missing buyer email");
            }

            // Mapear producto Hotmart -> courseId de tu sistema
            const courseId = HOTMART_PRODUCT_MAP[productId] || 'ia-aplicada-starter';

            console.log(`ð Procesando compra Hotmart: ${buyerEmail} -> ${courseId} (Product: ${productId})`);

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

                console.log(`â Acceso Hotmart concedido (usuario existente): ${buyerEmail} -> ${courseId}`);

            } catch (authError) {
                // Usuario no existe - CREAR AUTOMÃTICAMENTE
                if (authError.code === 'auth/user-not-found') {
                    console.log(`ð Creando nuevo usuario para: ${buyerEmail}`);

                    try {
                        // Obtener nombre del comprador si está disponible
                        const buyerName = data.buyer?.name || data.data?.buyer?.name || 'Estudiante';

                        // Crear usuario en Firebase Auth con contraseÃ±a temporal
                        const tempPassword = Math.random().toString(36).slice(-12) + 'Aa1!';
                        const newUser = await admin.auth().createUser({
                            email: buyerEmail,
                            password: tempPassword,
                            displayName: buyerName,
                            emailVerified: false
                        });

                        console.log(`â Usuario creado: ${newUser.uid}`);

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

                        // Generar link de reset de contraseÃ±a
                        const resetLink = await admin.auth().generatePasswordResetLink(buyerEmail, {
                            url: 'https://aulagenia.cl/acceso.html?from=hotmart'
                        });

                        console.log(`ð Link de reset generado para: ${buyerEmail}`);

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

                        console.log(`â Compra Hotmart procesada(usuario nuevo): ${buyerEmail} -> ${courseId}`);

                    } catch (createError) {
                        console.error("â Error creando usuario:", createError);
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
                    console.error("â Error buscando usuario:", authError);
                    throw authError;
                }
            }
        } else if (event === "REFUND" || event === "PURCHASE_REFUNDED" || event === "CHARGEBACK") {
            // Manejar reembolsos - opcional pero recomendado
            const buyerEmail = data.buyer?.email || data.data?.buyer?.email;
            console.log(`â ï¸ Reembolso / Chargeback detectado para: ${buyerEmail}`);
            // AquÃ­ podrÃ­as desactivar el acceso si lo deseas
        } else {
            console.log(`â¹ï¸ Evento Hotmart ignorado(no relevante): ${event}`);
        }

        return res.status(200).send("OK");
    } catch (err) {
        console.error("â Error crÃ­tico en webhook Hotmart:", err);
        return res.status(500).send("Error");
    }
});

/**
 * FunciÃ³n para verificar y activar compras pendientes de Hotmart
 * Se llama cuando un usuario se registra o inicia sesiÃ³n
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

                // Marcar como procesado (no eliminar para auditorÃ­a)
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

            console.log(`â Compras pendientes activadas para ${userEmail}: `, coursesActivated);

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
// SYSTEMA DE PAGOS FLOW (CHILE) - INTEGRACIÃN PRODUCCIÃN
// =======================================================================================

// Credenciales (SANDBOX - TESTING)
// ⚠️ REVERTIR A PRODUCCIÓN ANTES DE PUSH A MAIN
const FLOW_API_KEY = "1F31D9A0-28D7-4EA6-80F3-4E87LF908EE0";
const FLOW_SECRET_KEY = "49e7033c82fb239c10ea111192b6c069b1231faf";
const FLOW_API_URL = "https://sandbox.flow.cl/api";

// Helper para firmar parÃ¡metros (HMAC SHA256) (Importado globalmente arriba, reutilizamos)
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
        console.log('â createFlowPayment invoked.');

        // 1. Validar Usuario
        const userEmail = request.auth ? request.auth.token.email : request.data.email;
        if (!userEmail) {
            console.error('â Missing email');
            throw new HttpsError('invalid-argument', 'Se requiere email para generar el pago.');
        }

        const courseId = request.data.courseId || 'ia-aplicada-starter';
        console.log('ð¦ Course:', courseId, 'User:', userEmail);

        // 2. Configurar Orden
        // 2. Configurar Orden (Max 45 chars) -> Usamos Timestamp base36 + Random
        // Ej: starter-lzz7j2 (timestamp) - a1b2 (random)
        const shortId = Date.now().toString(36);
        const randomSuffix = Math.random().toString(36).substring(2, 6);
        const commerceOrder = `start-${shortId}-${randomSuffix}`;
        const includeBump = request.data.includeBump || false;
        const hiddenCoupon = request.data.hiddenCoupon || false;

        console.log('ð Payment Params:', { includeBump, hiddenCoupon, email: userEmail });

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

        // 3. ParÃ¡metros Flow
        const params = {
            apiKey: FLOW_API_KEY,
            commerceOrder: commerceOrder,
            subject: subject,
            currency: 'CLP',
            amount: amount,
            email: userEmail,
            paymentMethod: 9, // 9 = Webpay / Todos
            urlConfirmation: 'https://flowwebhook-3kbbtamy5q-uc.a.run.app',
            urlReturn: `https://flowreturnredirect-3kbbtamy5q-uc.a.run.app?email=${encodeURIComponent(userEmail)}&orderId=${commerceOrder}&amount=${amount}`,
        };

        // =================================================================
        // META CAPI: INITIATE CHECKOUT (CRITICAL FIX FOR DISCREPANCY)
        // =================================================================
        // Enviamos el evento aquí para capturar a TODOS los usuarios (Auth y Guest)
        // que realmente inician el proceso de pago.
        try {
            const { fbp, fbc, userAgent, eventId, nombre } = request.data;
            let ip = request.rawRequest.ip;
            const forwardedFor = request.rawRequest.headers['x-forwarded-for'];
            if (forwardedFor) ip = forwardedFor.split(',')[0].trim();
            else if (!ip) ip = request.rawRequest.socket.remoteAddress;

            // Extraer nombre y apellido
            const nameParts = (nombre || '').split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            await sendMetaCAPIEvent('InitiateCheckout', {
                eventId: eventId, // ID compartido con Pixel (generado en landing)
                customData: {
                    value: 0, // Changed to 0 to fix ROAS inflation (Optimization Signal Only)
                    currency: 'CLP',
                    content_ids: ['ia-aplicada-starter'],
                    content_category: 'Course',
                    order_id: commerceOrder
                }
            }, {
                fbp, fbc, userAgent, ip,
                email: userEmail,
                firstName: firstName,
                lastName: lastName
            }, { url: 'https://aulagenia.cl/landing-nuevo.html' }); // URL fija o dinÃ¡mica si se envÃ­a

        } catch (capiError) {
            console.error('â ï¸ CAPI InitiateCheckout failed in createFlowPayment (non-blocking):', capiError);
        }


        // 4. Firmar
        try {
            params.s = signFlowParams(params);
        } catch (signError) {
            console.error('â Error signing params:', signError);
            throw new HttpsError('internal', 'Error criptogrÃ¡fico al firmar.');
        }

        try {
            // 5. Enviar Request
            const formData = new URLSearchParams();
            for (const key in params) {
                formData.append(key, params[key]);
            }

            // GUARDAR ESTADO PENDIENTE (CRUCIAL PARA WEBHOOK)
            // GUARDAR EN SALES (NUEVA COLECCIÃN UNIFICADA)
            await admin.firestore().collection('sales').doc(commerceOrder).set({
                email: userEmail,
                courseId: courseId,
                amount: amount,
                // flowOrder se recibe en la respuesta inmediata o webhook, lo dejamos opcional aquí
                status: 'INITIATED',
                enrollmentStatus: 'PENDING',
                userId: request.auth ? request.auth.uid : null, // Opcional si no hay auth
                leadId: request.data.leadId || null, // ID del lead si viene del formulario
                nombre: request.data.nombre || null, // Guardar nombre para CAPI (CreateFlowPayment)
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
            // ð FIRE CAPI: INITIATE CHECKOUT
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
            console.log('ð Sending request to Flow:', FLOW_API_URL + '/payment/create');

            const response = await fetch(`${FLOW_API_URL}/payment/create`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            // Leer respuesta como texto primero para evitar fallos de JSON parsing
            const rawText = await response.text();
            console.log('ð© Flow Response (Raw):', rawText);

            let data;
            try {
                data = JSON.parse(rawText);
            } catch (jsonError) {
                console.error('â Failed to parse Flow response JSON:', jsonError);
                throw new HttpsError('internal', 'Respuesta invÃ¡lida de Flow (No JSON): ' + rawText.substring(0, 100));
            }

            if (!response.ok || !data.token) {
                console.error('â Flow API Error Response:', data);
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
            console.error('â Error in createFlowPayment execution:', error);
            if (error instanceof HttpsError) throw error;
            throw new HttpsError('internal', 'Error generando el pago Flow: ' + error.message);
        }
    }
);

exports.flowWebhook = onRequest({ secrets: [mailjetApiKey, mailjetSecretKey, ga4ApiSecret] }, async (req, res) => {
    try {
        console.log('ð Flow Webhook (Body):', req.body);
        const token = req.body.token;

        if (!token) return res.status(400).send('No token');

        // 1. Consultar estado 
        const params = { apiKey: FLOW_API_KEY, token: token };
        params.s = signFlowParams(params);

        const query = new URLSearchParams(params).toString();
        const statusResponse = await fetch(`${FLOW_API_URL}/payment/getStatus?${query}`);
        const statusData = await statusResponse.json();

        console.log('ð Estado Flow:', statusData);

        // 2. Validar (2 = Pagada)
        // 2. Validar (2 = Pagada)
        if (statusData.status === 2) {
            const commerceOrder = statusData.commerceOrder;
            const salesRef = admin.firestore().collection('sales').doc(commerceOrder);

            // RECUPERAR DATOS DE SALES
            let userEmail, courseId, userId;
            let saleData = {};

            try {
                // Leer de Firestore (ColecciÃ³n Unificada)
                const docSnap = await salesRef.get();
                if (docSnap.exists) {
                    saleData = docSnap.data();
                    userEmail = saleData.email;
                    courseId = saleData.courseId;
                    userId = saleData.userId;
                    console.log('ð Datos recuperados de SALES:', { userEmail, courseId });
                } else {
                    console.error('â ï¸ No se encontrÃ³ la orden en SALES:', commerceOrder);
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
                console.error('â Error leyendo Firestore en Webhook:', dbError);
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
                                console.log(`ð¤ Usuario no registrado (${userEmail}). Venta queda en estado PAID (Pending Delivery).`);
                                // No hacemos nada mÃ¡s, el onUserCreated se encargarÃ¡
                            } else {
                                throw authError;
                            }
                        }
                    }

                    if (targetUid) {
                        // Enrolar usuario
                        await admin.firestore().collection("users").doc(targetUid).set({
                            enrollments: { [courseId]: true },
                            flowStatus: 'PAID' // Flag opcional
                        }, { merge: true });

                        console.log(`â [FLOW] Acceso concedido a ${targetUid} para ${courseId}`);

                        // =================================================================
                        // GA4 SERVER-SIDE PURCHASE EVENT (Phase 3 - Correct Hook: Flow)
                        // =================================================================
                        try {
                            const params = {
                                transaction_id: commerceOrder,
                                value: statusData.amount || 0,
                                currency: 'CLP', // Flow es CLP
                                items: [{
                                    item_id: courseId,
                                    item_name: courseId === 'ia-aplicada-starter' ? 'Pack Starter' : 'Programa Esencial',
                                    price: statusData.amount || 0,
                                    quantity: 1
                                }]
                            };

                            await sendGA4ServerEvent(targetUid, 'purchase', params);
                        } catch (ga4Error) {
                            console.error('GA4 server event failed (non-blocking):', ga4Error);
                        }

                        // Marcar venta como DELIVERED
                        await salesRef.update({
                            enrollmentStatus: 'DELIVERED',
                            userId: targetUid,
                            deliveredAt: admin.firestore.FieldValue.serverTimestamp()
                        });

                        console.log(`â Curso ${courseId} activado para ${userEmail} (UID: ${targetUid}) - Status: DELIVERED`);
                    }

                    // ============================================
                    // ð FIRE CAPI: PURCHASE
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
                        console.error('â Error sending Purchase CAPI:', capiError);
                    }

                    // ============================================
                    // EMAIL DE BIENVENIDA (Unified System)
                    // ============================================
                    try {
                        const Mailjet = require('node-mailjet');
                        const mailjetClient = Mailjet.apiConnect(
                            mailjetApiKey.value(),
                            mailjetSecretKey.value()
                        );

                        // Determinar si es Pack PRO
                        const paidAmount = saleData.amount || 0;
                        const isPro = paidAmount >= 14000;

                        // Obtener nombre del usuario
                        let buyerName = 'Estudiante Aula GenIA';
                        try {
                            const userRecord = await admin.auth().getUserByEmail(userEmail);
                            if (userRecord.displayName && !userRecord.displayName.includes('@')) {
                                buyerName = userRecord.displayName;
                            }
                        } catch (e) {
                            console.log('No se pudo obtener nombre para el email, usando default.');
                        }

                        // Enviar usando sistema unificado
                        await sendUnifiedWelcomeEmail({
                            email: userEmail,
                            name: buyerName,
                            isPro: isPro,
                            paidAmount: paidAmount,
                            resetLink: null, // No reset link for sales (user creates password on access)
                            mailjetClient: mailjetClient
                        });

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
            console.log(`â¹ï¸ No pending sales found for new user ${email}`);
            return;
        }

        const batch = admin.firestore().batch();
        const userRef = admin.firestore().collection('users').doc(user.uid);

        // Preparar actualizaciÃ³n de usuario (enrollment)
        // PodrÃ­a haber mÃºltiples compras pendientes (raro, pero posible)
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
                console.log(`â Found pending sale ${doc.id} for course ${sale.courseId}`);
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
            console.log(`â Auto - enrolled user ${email} from sales collection.`);
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

        console.log(`ð Redirecting Flow POST to GET: ${targetUrl.toString()}`);
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
// Note: Email templates are now in emailTemplates.js (sendUnifiedWelcomeEmail)
// =======================================================================================

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
            return console.log('ð« Trigger: No data or sendWelcomeEmail not true');
        }

        // 2. Prevenir loops: si ya se envió, salir
        if (newData.welcomeEmailSent) {
            return console.log('â Trigger: Email ya enviado previamente.');
        }

        console.log('â¡ Trigger: Detectado sendWelcomeEmail=true para', email);

        try {
            // 3. Generar Link de Reset
            // Estrategia: Intentar crear el usuario si no existe (Pattern Idempotente)

            let userRecord;
            try {
                userRecord = await admin.auth().getUserByEmail(email);
            } catch (e) {
                if (e.code === 'auth/user-not-found') {
                    console.log('ð¤ Creando usuario desde Trigger Allowlist...');
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

            // 4. Enviar Correo usando sistema unificado
            const Mailjet = require('node-mailjet');
            const mailjetClient = Mailjet.apiConnect(
                mailjetApiKey.value(),
                mailjetSecretKey.value()
            );

            // Determinar si es PRO basado en cursos del allowlist
            const isPro = newData.courses && newData.courses.includes('ia-aplicada-esencial');

            await sendUnifiedWelcomeEmail({
                email: email,
                name: userRecord.displayName || 'Estudiante',
                isPro: isPro,
                resetLink: resetLink,
                mailjetClient: mailjetClient
            });

            // 5. Actualizar documento para no re-enviar
            await event.data.after.ref.set({
                welcomeEmailSent: true,
                sendWelcomeEmail: false, // Reset flag
                emailSentAt: admin.firestore.FieldValue.serverTimestamp()
            }, { merge: true });

            console.log('â Trigger: Email flow completado para', email);

        } catch (error) {
            console.error('â Trigger Error:', error);
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
        console.log(`â¡ Admin Tool: Agregando ${email} a allowlist con trigger...`);
        await db.collection('allowlist').doc(email).set({
            active: true,
            courses: ['ia-aplicada-esencial', 'ia-aplicada-starter'],
            addedAt: admin.firestore.FieldValue.serverTimestamp(),
            note: 'Added via Admin Tool (Restored)',
            sendWelcomeEmail: true, // Esto dispara el TRIGGER
            welcomeEmailSent: false
        }, { merge: true });

        res.send(`â Success! Updated ${email} in Allowlist. Trigger should fire now.`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error: ' + error.message);
    }
});

// =======================================================================================
// ADMIN: Resend Welcome Email (for Sales)
// Usage: /resendWelcomeEmail?email=user@example.com&key=admin_key
// =======================================================================================
exports.resendWelcomeEmail = onRequest(
    { secrets: [mailjetApiKey, mailjetSecretKey] },
    async (req, res) => {
        // Security check
        if (req.query.key !== 'temp_admin_key_123') {
            return res.status(403).send('Forbidden');
        }

        const email = req.query.email;
        if (!email) {
            return res.status(400).send('Missing email parameter');
        }

        const db = admin.firestore();

        try {
            console.log(`📧 Resend: Buscando venta para ${email}...`);

            // 1. Buscar en sales collection (query simple para evitar índice compuesto)
            const salesQuery = await db.collection('sales')
                .where('email', '==', email)
                .limit(10)
                .get();

            // Filtrar por DELIVERED manualmente
            let deliveredSales = [];
            salesQuery.docs.forEach(doc => {
                const data = doc.data();
                if (data.enrollmentStatus === 'DELIVERED') {
                    deliveredSales.push({ id: doc.id, ...data });
                }
            });

            let isPro = false;
            let paidAmount = 0;
            let source = 'unknown';

            if (deliveredSales.length > 0) {
                const saleData = deliveredSales[0];
                paidAmount = saleData.amount || 0;
                isPro = paidAmount >= 14000;
                source = 'sales';
                console.log(`✅ Encontrada venta: $${paidAmount}, isPro: ${isPro}`);
            } else {
                // 2. Si no hay venta, buscar en allowlist
                const allowlistDoc = await db.collection('allowlist').doc(email).get();
                if (allowlistDoc.exists) {
                    const allowData = allowlistDoc.data();
                    isPro = allowData.courses && allowData.courses.includes('ia-aplicada-esencial');
                    source = 'allowlist';
                    console.log(`✅ Encontrado en allowlist, isPro: ${isPro}`);
                } else {
                    return res.status(404).send(`No se encontró venta ni registro de allowlist para: ${email}`);
                }
            }

            // 3. Obtener nombre del usuario
            let userName = 'Estudiante';
            try {
                const userRecord = await admin.auth().getUserByEmail(email);
                if (userRecord.displayName && !userRecord.displayName.includes('@')) {
                    userName = userRecord.displayName;
                }
            } catch (e) {
                console.log('No se pudo obtener nombre, usando default.');
            }

            // 4. Enviar email usando sistema unificado
            const Mailjet = require('node-mailjet');
            const mailjetClient = Mailjet.apiConnect(
                mailjetApiKey.value(),
                mailjetSecretKey.value()
            );

            await sendUnifiedWelcomeEmail({
                email: email,
                name: userName,
                isPro: isPro,
                paidAmount: paidAmount,
                resetLink: null,
                mailjetClient: mailjetClient
            });

            res.send(`
                <html>
                <body style="font-family: sans-serif; padding: 2rem; text-align: center;">
                    <h1>✅ Email Reenviado</h1>
                    <p><strong>Destinatario:</strong> ${email}</p>
                    <p><strong>Tipo:</strong> ${isPro ? 'PRO' : 'Starter'}</p>
                    <p><strong>Fuente:</strong> ${source}</p>
                    <p><strong>Monto:</strong> $${paidAmount}</p>
                    <hr>
                    <a href="javascript:history.back()">← Volver</a>
                </body>
                </html>
            `);

        } catch (error) {
            console.error('❌ Error en resendWelcomeEmail:', error);
            res.status(500).send('Error: ' + error.message);
        }
    }
);

// =======================================================================================
// FUNCIÓN 7: Notificación de Nuevo Lead (Admin Alert)
// =======================================================================================
exports.notifyNewLead = onDocumentCreated(
    {
        document: "leads/{leadId}",
        secrets: [mailjetApiKey, mailjetSecretKey],
        region: "us-central1"
    },
    async (event) => {
        const snapshot = event.data;
        if (!snapshot) {
            console.log("No data associated with the event");
            return;
        }
        const data = snapshot.data();
        const leadId = event.params.leadId;

        console.log(`🔔 Nuevo Lead detectado: ${leadId}`, data);

        const email = data.email || "No email";
        const nombre = data.nombre || "Sin nombre";
        const source = data.source || "Desconocido";

        // Time with TZ support (requires Intl) or just UTC
        const time = new Date().toISOString();

        try {
            const Mailjet = require('node-mailjet');
            const mailjet = Mailjet.apiConnect(
                mailjetApiKey.value(),
                mailjetSecretKey.value()
            );

            const result = await mailjet
                .post("send", { 'version': 'v3.1' })
                .request({
                    "Messages": [
                        {
                            "From": {
                                "Email": "hola@aulagenia.cl",
                                "Name": "Aula GenIA Notificaciones"
                            },
                            "To": [
                                { "Email": "hola@aulagenia.cl", "Name": "Admin" },
                                { "Email": "bmeryu@gmail.com", "Name": "Bernardita Mery" }
                            ],
                            "Subject": `🔔 Nuevo Lead: ${nombre} (${email})`,
                            "HTMLPart": `
                                <h3>¡Nuevo Lead Generado! 🚀</h3>
                                <p>Se ha registrado un nuevo intento de compra o registro.</p>
                                <ul>
                                    <li><strong>Email:</strong> ${email}</li>
                                    <li><strong>Nombre:</strong> ${nombre}</li>
                                    <li><strong>Fecha:</strong> ${time}</li>
                                    <li><strong>Origen:</strong> ${source}</li>
                                    <li><strong>ID:</strong> ${leadId}</li>
                                </ul>
                                <p>Revisa el dashboard de Firebase o Stripe/Flow para más detalles.</p>
                            `
                        }
                    ]
                });

            console.log(`✅ Notificación de lead enviada para ${email}`);
        } catch (error) {
            console.error("❌ Error enviando notificación de lead:", error);
        }
    }
);

// =======================================================================================
// MANTENIMIENTO: Limpiar Leads de Prueba (HTTP Trigger)
// =======================================================================================
exports.cleanTestLeads = onRequest(async (req, res) => {
    // Seguridad básica vía URL param
    // Uso: https://us-central1-aulagenia.cloudfunctions.net/cleanTestLeads?key=borrar123
    const key = req.query.key;
    if (key !== 'borrar123') {
        return res.status(403).send('Acceso denegado. Faltan permisos.');
    }

    try {
        const db = admin.firestore();
        const leadsRef = db.collection('leads');
        const salesRef = db.collection('sales');

        // Términos a buscar (Actualizado)
        const terms = ['aulagenia', 'bmery', 'aiplushie', 'capivairal', 'ardillavairal'];

        let deletedLeads = 0;
        let deletedSales = 0;
        const batch = db.batch();
        let batchCount = 0;

        // 1. Limpiar LEADS
        const leadsSnapshot = await leadsRef.get();
        let processedLeads = 0;

        leadsSnapshot.docs.forEach(doc => {
            const data = doc.data();
            const email = (data.email || '').toLowerCase();
            const nombre = (data.nombre || '').toLowerCase();

            const matches = terms.some(term => email.includes(term) || nombre.includes(term));

            if (matches) {
                batch.delete(doc.ref);
                batchCount++;
                deletedLeads++;
            }
            processedLeads++;
        });

        // 2. Limpiar SALES
        const salesSnapshot = await salesRef.get();
        let processedSales = 0;

        salesSnapshot.docs.forEach(doc => {
            const data = doc.data();
            const email = (data.email || '').toLowerCase();
            // Sales might use 'contact_email' or 'payer_email' depending on provider, but 'email' is standard in our conversions
            // Let's check typical fields just in case
            const payerEmail = (data.payer_email || '').toLowerCase();

            const matches = terms.some(term => email.includes(term) || payerEmail.includes(term));

            if (matches) {
                batch.delete(doc.ref);
                batchCount++;
                deletedSales++;
            }
            processedSales++;
        });

        if (batchCount > 0) {
            await batch.commit();
        }

        res.send(`
            <html>
                <body style="font-family: sans-serif; padding: 2rem;">
                    <h1>✅ Limpieza Completada</h1>
                    <h2>Resumen:</h2>
                    <ul>
                        <li><strong>Leads Eliminados:</strong> ${deletedLeads} (de ${processedLeads} analizados)</li>
                        <li><strong>Ventas Eliminadas:</strong> ${deletedSales} (de ${processedSales} analizadas)</li>
                        <li><strong>Total Eliminado:</strong> ${deletedLeads + deletedSales}</li>
                    </ul>
                    <hr>
                    <p><strong>Criterios de eliminación (email o nombre contiene):</strong></p>
                    <ul>
                        ${terms.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </body>
            </html>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno: ' + error.message);
    }
});
