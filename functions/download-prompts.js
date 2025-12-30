const admin = require('firebase-admin');
const fs = require('fs');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'aulagenia.firebasestorage.app'
});

const bucket = admin.storage().bucket();
const file = bucket.file('private/prompts_db.json');

console.log('Descargando prompts_db.json...');

file.download({ destination: '../prompts_db_temp.json' })
    .then(() => {
        console.log('✅ Archivo descargado como prompts_db_temp.json');

        // Leer y mostrar los prompts desbloqueados
        const data = JSON.parse(fs.readFileSync('../prompts_db_temp.json', 'utf8'));
        const unlocked = data.filter(p => !p.locked);

        console.log(`\n📊 Total de prompts: ${data.length}`);
        console.log(`🔓 Prompts desbloqueados: ${unlocked.length}`);
        console.log('\n🔓 Lista de prompts BÁSICOS (desbloqueados):');
        unlocked.forEach((p, i) => {
            console.log(`${i + 1}. [ID: ${p.id}] ${p.title}`);
        });
    })
    .catch(err => {
        console.error('❌ Error:', err.message);
    });
