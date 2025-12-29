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
    storageBucket: 'aulagenia-e44b4.appspot.com' // Reemplaza con tu bucket
});

async function uploadPromptsToStorage() {
    try {
        console.log('📤 Subiendo prompts_db.js a Firebase Storage...');

        // Leer datos de prompts_db.js
        const promptsPath = path.join(__dirname, '..', 'prompts_db.js');
        let promptsContent = fs.readFileSync(promptsPath, 'utf-8');

        // Extraer solo el array casesData (quitar export, etc)
        const match = promptsContent.match(/const\s+casesData\s*=\s*(\[[\s\S]*?\]);/);
        if (!match) {
            throw new Error('No se pudo extraer casesData de prompts_db.js');
        }

        const casesDataStr = match[1];
        const casesData = eval(casesDataStr); // SOLO para migración, no uses eval en producción normal

        console.log(`✅ Encontrados ${casesData.length} prompts`);

        // Subir a Storage
        const bucket = admin.storage().bucket();
        const file = bucket.file('private/prompts_data.json');

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

        console.log('✅ Prompts subidos exitosamente a Storage en /private/prompts_data.json');
        console.log('🔒 Archivo configurado como privado (solo accesible vía Cloud Functions)');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

uploadPromptsToStorage();
