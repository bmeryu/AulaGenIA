// Script para verificar el contenido real del archivo en Firebase Storage
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'aulagenia.firebasestorage.app'
});

async function verifyStorageFile() {
    try {
        console.log('📥 Descargando prompts_db.json desde Firebase Storage...\n');

        const bucket = admin.storage().bucket();
        const file = bucket.file('private/prompts_db.json');

        const [contents] = await file.download();
        const data = JSON.parse(contents.toString('utf-8'));

        console.log('=== VERIFICACIÓN DE FIREBASE STORAGE ===\n');

        // Check specific IDs
        const testIDs = [63, 64, 65, 1, 12, 100];

        console.log('MUESTRA DE DESCRIPTIONS:');
        testIDs.forEach(id => {
            const item = data.find(p => p.id === id);
            if (item) {
                const desc = item.description || 'UNDEFINED';
                console.log(`ID ${id}: "${desc.substring(0, 50)}${desc.length > 50 ? '...' : ''}"`);
            }
        });

        console.log('\n=== ESTADÍSTICAS ===');
        const withDesc = data.filter(p => p.description && p.description.trim() !== "").length;
        const withoutDesc = data.filter(p => !p.description || p.description.trim() === "").length;

        console.log(`Total prompts: ${data.length}`);
        console.log(`Con description: ${withDesc}`);
        console.log(`Sin description: ${withoutDesc}`);

        // Get file metadata
        const [metadata] = await file.getMetadata();
        console.log(`\nÚltima modificación: ${metadata.updated}`);
        console.log(`Tamaño: ${metadata.size} bytes`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

verifyStorageFile();
