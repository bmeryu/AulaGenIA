const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Initialize Firebase Admin
const serviceAccount = require('./functions/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'aulagenia.firebasestorage.app'
});

const bucket = admin.storage().bucket();

async function uploadPrompts() {
    try {
        // 1. Read existing prompts
        console.log('📖 Reading existing prompts...');
        const existingPrompts = require('./prompts_db_temp.json');
        console.log(`   Found ${existingPrompts.length} existing prompts`);

        // 2. Read new prompts
        console.log('📖 Reading new prompts...');
        const newPrompts = require('./nuevos_casos_educacion.json');
        console.log(`   Found ${newPrompts.length} new prompts`);

        // 3. Merge prompts
        console.log('🔀 Merging prompts...');
        const mergedPrompts = [...existingPrompts, ...newPrompts];
        console.log(`   Total: ${mergedPrompts.length} prompts`);

        // 4. Count education prompts
        const eduCount = mergedPrompts.filter(p =>
            p.category === 'Educación' ||
            (p.prioridadSegmento && p.prioridadSegmento['Educación'])
        ).length;
        console.log(`   Education prompts: ${eduCount}`);

        // 5. Save merged file locally
        const mergedPath = path.join(__dirname, 'prompts_db_merged.json');
        fs.writeFileSync(mergedPath, JSON.stringify(mergedPrompts, null, 4), 'utf8');
        console.log('💾 Saved merged file locally');

        // 6. Upload to Firebase Storage
        console.log('☁️ Uploading to Firebase Storage...');
        const file = bucket.file('prompts_db.json');
        await file.save(JSON.stringify(mergedPrompts, null, 2), {
            metadata: {
                contentType: 'application/json',
            },
        });

        console.log('✅ Upload complete!');
        console.log(`   New total: ${mergedPrompts.length} prompts`);
        console.log(`   Education: ${eduCount} prompts`);

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        process.exit();
    }
}

uploadPrompts();
