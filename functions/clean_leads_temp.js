
// =======================================================================================
// MANTENIMIENTO: Limpiar Leads de Prueba
// =======================================================================================
exports.cleanTestLeads = onCall(async (request) => {
    // Seguridad básica: Solo permitir si el usuario está autenticado (o es admin, si prefieres)
    if (!request.auth) {
        throw new HttpsError('unauthenticated', 'Debes estar autenticado.');
    }

    const db = admin.firestore();
    const leadsRef = db.collection('leads');

    // Términos a buscar
    const terms = ['aulagenia', 'bmery'];
    let deletedCount = 0;

    // Firestore no soporta "contains" nativo eficientemente para batch delete sin indexar todo texto.
    // Lo haremos iterando (seguro para volúmenes moderados).
    const snapshot = await leadsRef.get();

    const batch = db.batch();
    let batchCount = 0;

    snapshot.docs.forEach(doc => {
        const data = doc.data();
        const email = (data.email || '').toLowerCase();

        // Verificar si contiene alguno de los términos
        const matches = terms.some(term => email.includes(term));

        if (matches) {
            batch.delete(doc.ref);
            batchCount++;
            deletedCount++;
        }
    });

    if (batchCount > 0) {
        await batch.commit();
    }

    return {
        success: true,
        message: `Se eliminaron ${deletedCount} leads de prueba.`,
        deletedCount
    };
});
