const admin = require('firebase-admin');

// Intentar inicializar con credenciales por defecto (ADC)
try {
    admin.initializeApp();
} catch (e) {
    console.error("Error inicializando app:", e);
}

const db = admin.firestore();

async function trigger() {
    console.log("Iniciando trigger para bmeryu@gmail.com...");
    try {
        await db.collection('allowlist').doc('bmeryu@gmail.com').set({
            sendWelcomeEmail: true,
            welcomeEmailSent: false, // Force re-send
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log("✅ Documento actualizado. El trigger debería dispararse.");
    } catch (error) {
        console.error("❌ Error escribiendo en Firestore:", error);
    }
}

trigger();
