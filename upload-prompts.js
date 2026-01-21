/**
 * Script para subir prompts_db.json a Firebase Storage
 * ASEGURANDO encoding UTF-8 correcto
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Inicializar Firebase Admin
const serviceAccount = require('./functions/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'aulagenia.firebasestorage.app'
});

const bucket = admin.storage().bucket();

async function uploadPromptsDB() {
    try {
        console.log('📂 Leyendo prompts_db.json local...');

        // Leer el archivo como UTF-8
        const localFilePath = path.join(__dirname, 'prompts_db.json');
        const fileContent = fs.readFileSync(localFilePath, 'utf-8');

        console.log('✅ Archivo leído correctamente (UTF-8)');
        console.log(`📊 Tamaño: ${fileContent.length} caracteres`);

        // Verificar que el JSON es válido
        const jsonData = JSON.parse(fileContent);
        console.log(`✅ JSON válido: ${jsonData.length} prompts encontrados`);

        // Subir a Firebase Storage con metadata UTF-8 explícita
        const file = bucket.file('private/prompts_db.json');

        console.log('☁️  Subiendo a Firebase Storage...');

        await file.save(fileContent, {
            metadata: {
                contentType: 'application/json; charset=utf-8',
                cacheControl: 'no-cache'
            }
        });

        console.log('✅ Archivo subido exitosamente con encoding UTF-8!');
        console.log('🔗 Ruta: private/prompts_db.json');

        // Verificar que se subió correctamente
        console.log('\n🔍 Verificando encoding...');
        const [downloadedContent] = await file.download();
        const downloadedText = downloadedContent.toString('utf-8');
        const downloadedJson = JSON.parse(downloadedText);

        // Buscar un texto con acento para verificar
        const testPrompt = downloadedJson.find(p => p.title.includes('Correos'));
        if (testPrompt) {
            console.log('✅ Verificación exitosa:');
            console.log(`   Título: ${testPrompt.title}`);
            console.log(`   Categoría: ${testPrompt.category}`);
        }

        console.log('\n✨ ¡Proceso completado! Los acentos deberían verse correctamente ahora.');
        process.exit(0);

    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

uploadPromptsDB();
