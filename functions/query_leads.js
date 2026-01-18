const admin = require('firebase-admin');

// Initialize app - assuming we are running efficiently
// Since we are running locally, we need credentials.
// However, we can try to use the default app if we are logged in with 'gcloud auth application-default login'.
// If not, we might fail.
// BUT, the user asked "indicame q leads", implying I should know.
// I will try to use the `firebase-admin` from the functions directory.

// Initialize with application default credentials
try {
    admin.initializeApp();
} catch (e) {
    if (!admin.apps.length) {
        // Try with service account if available (rarely is for agent)
        // fallback to error
        console.error("Could not initialize admin:", e);
        process.exit(1);
    }
}

const db = admin.firestore();

async function getTodayLeads() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    console.log(`Querying leads since ${today.toISOString()}...`);

    try {
        // Query 'sales' collection for entries created today
        const salesSnapshot = await db.collection('sales')
            .where('createdAt', '>=', today)
            .get();

        if (salesSnapshot.empty) {
            console.log('No leads/sales found for today.');
            return;
        }

        console.log(`Found ${salesSnapshot.size} entries today:`);
        salesSnapshot.forEach(doc => {
            const data = doc.data();
            console.log(`- ID: ${doc.id}, Email: ${data.email}, Status: ${data.status}, Time: ${data.createdAt.toDate ? data.createdAt.toDate().toISOString() : data.createdAt}`);
        });

    } catch (error) {
        console.error("Error querying sales:", error);
    }
}

getTodayLeads();
