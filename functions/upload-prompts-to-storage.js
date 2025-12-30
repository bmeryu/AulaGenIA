/**
 * Script para subir prompts_db.js a Firebase Storage (privado)
 * Ejecutar: node upload-prompts-to-storage.js
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Inicializar Firebase Admin con credenciales del proyecto
const serviceAccount = require('./serviceAccountKey.json'); // Descarga esto desde Firebase Console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'aulagenia.firebasestorage.app'
});

async function uploadPromptsToStorage() {
    try {
        console.log('📤 Subiendo prompts_db.json a Firebase Storage...');

        // Leer datos de prompts_db.json
        const promptsPath = path.join(__dirname, '..', 'prompts_db.json');
        let promptsContent = fs.readFileSync(promptsPath, 'utf-8');

        // Parsear JSON directamente
        const casesData = JSON.parse(promptsContent);

        console.log(`✅ Encontrados ${casesData.length} prompts`);

        // Subir a Storage
        const bucket = admin.storage().bucket();
        const file = bucket.file('private/prompts_db.json');

        await file.save(JSON.stringify(casesData), {
            metadata: {
                contentType: 'application/json',
                cacheControl: 'private, max-age=0',
                metadata: {
                    uploadedAt: new Date().toISOString(),
                    version: '1.0'
                }
            }
        });

        console.log('✅ Prompts subidos exitosamente a Storage en /private/prompts_db.json');
        console.log('🔒 Archivo configurado como privado (solo accesible vía Cloud Functions)');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

uploadPromptsToStorage();
