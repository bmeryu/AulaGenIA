const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

/**
 * Cloud Function para obtener datos de prompts de forma segura
 * Solo usuarios con enrollment activo pueden acceder
 */
exports.getPromptsData = functions.https.onCall(async (data, context) => {
    // 1. Verificar autenticación (solo login requerido ahora)
    if (!context.auth) {
        throw new functions.https.HttpsError(
            'unauthenticated',
            'Debes estar autenticado para acceder a los prompts'
        );
    }

    try {
        // 2. Obtener datos del usuario (para verificar enrollment solo para stats)
        const userDoc = await admin.firestore()
            .collection('users')
            .doc(context.auth.uid)
            .get();

        const userData = userDoc.exists ? userDoc.data() : {};
        const courseId = 'ia-aplicada-esencial';
        const oldCourseId = 'inteligencia-aplicada';

        const hasEnrollment = userData.enrollments &&
            (userData.enrollments[courseId] === true ||
                userData.enrollments[oldCourseId] === true);

        // 3. Leer datos desde Firebase Storage
        const bucket = admin.storage().bucket();
        const file = bucket.file('private/prompts_db.json');

        const [contents] = await file.download();
        const promptsData = JSON.parse(contents.toString('utf-8'));

        // 4. Registrar acceso (opcional, para analytics)
        await admin.firestore().collection('promptsDownloads').add({
            userId: context.auth.uid,
            email: context.auth.token.email || 'unknown',
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
            action: 'getPromptsData',
            hasEnrollment: hasEnrollment
        });

        console.log(`Prompts data entregado a usuario: ${context.auth.uid}, enrollment: ${hasEnrollment}`);

        return {
            success: true,
            data: promptsData,
            hasEnrollment: hasEnrollment, // Cliente decide qué mostrar
            message: 'Datos cargados correctamente'
        };

    } catch (error) {
        console.error('Error en getPromptsData:', error);

        // Si es un error de Firebase Functions, re-lanzarlo
        if (error.code && error.code.startsWith('functions/')) {
            throw error;
        }

        // Otros errores
        throw new functions.https.HttpsError(
            'internal',
            'Error al obtener los datos. Intenta nuevamente.'
        );
    }
});
