const admin = require('firebase-admin');

// Load service account key found in directory
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function getTodayLeads() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    console.log(`Querying 'sales' created since: ${today.toISOString()}`);

    try {
        const salesSnapshot = await db.collection('sales')
            .where('createdAt', '>=', today)
            .get();

        if (salesSnapshot.empty) {
            console.log('No new sales/leads found for today.');
        } else {
            console.log(`Found ${salesSnapshot.size} new entries (Leads/Sales):`);
            salesSnapshot.forEach(doc => {
                const data = doc.data();
                const time = data.createdAt && data.createdAt.toDate ? data.createdAt.toDate().toLocaleTimeString() : 'Unknown Time';
                console.log(`[${time}] ${data.email || 'No Email'} - Status: ${data.status} - Amount: ${data.amount}`);
                if (data.capiData) {
                    console.log(`   CAPI IP: ${data.capiData.ip}`);
                }
            });
        }
    } catch (error) {
        console.error("Error querying sales:", error);
    }
}

getTodayLeads();
