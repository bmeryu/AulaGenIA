const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('./functions/serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'aulagenia.firebasestorage.app'
});

const bucket = admin.storage().bucket();

// IDs to remove from Education segment (not delete, just remove prioridadSegmento.Educación)
const idsToRemoveFromEducation = [14, 32, 34, 35, 39, 40, 73, 103, 108, 111];

async function updatePrompts() {
    try {
        // 1. Download current prompts from Firebase
        console.log('📥 Downloading current prompts from Firebase...');
        const [contents] = await bucket.file('private/prompts_db.json').download();
        let prompts = JSON.parse(contents.toString('utf-8'));
        console.log(`   Current: ${prompts.length} prompts`);

        // 2. Count current education prompts
        const eduBefore = prompts.filter(p => p.prioridadSegmento && p.prioridadSegmento['Educación']).length;
        console.log(`   Education before: ${eduBefore}`);

        // 3. Remove Education from the 10 irrelevant cases
        console.log('🗑️ Removing Education priority from 10 irrelevant cases...');
        let removedCount = 0;
        prompts = prompts.map(p => {
            if (idsToRemoveFromEducation.includes(p.id) && p.prioridadSegmento && p.prioridadSegmento['Educación']) {
                delete p.prioridadSegmento['Educación'];
                console.log(`   Removed Education from ID ${p.id}: ${p.title}`);
                removedCount++;
            }
            return p;
        });
        console.log(`   Removed from ${removedCount} cases`);

        // 4. Add new education cases
        console.log('➕ Adding 10 new education cases...');
        const newCases = require('./nuevos_casos_educacion_2.json');
        prompts = [...prompts, ...newCases];
        console.log(`   Added ${newCases.length} new cases`);

        // 5. Count final education prompts
        const eduAfter = prompts.filter(p => p.prioridadSegmento && p.prioridadSegmento['Educación']).length;
        console.log(`   Education after: ${eduAfter}`);
        console.log(`   Total prompts: ${prompts.length}`);

        // 6. Save locally
        fs.writeFileSync('./prompts_db.json', JSON.stringify(prompts, null, 2), 'utf8');
        console.log('💾 Saved locally to prompts_db.json');

        // 7. Upload to Firebase (private folder)
        console.log('☁️ Uploading to Firebase Storage (private/prompts_db.json)...');
        await bucket.file('private/prompts_db.json').save(JSON.stringify(prompts, null, 2), {
            metadata: { contentType: 'application/json' }
        });

        console.log('✅ DONE!');
        console.log(`   Final: ${prompts.length} prompts total`);
        console.log(`   Education: ${eduAfter} (was ${eduBefore}, removed ${removedCount}, added ${newCases.length})`);

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        process.exit();
    }
}

updatePrompts();
