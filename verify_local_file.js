const fs = require('fs');

try {
    const rawData = fs.readFileSync('prompts_db.json', 'utf8');
    const data = JSON.parse(rawData);

    console.log("=== VERIFICACIÓN DETALLADA ===\n");

    // Check a few specific IDs
    const testIDs = [63, 64, 65, 1, 12, 100];

    console.log("MUESTRA DE DESCRIPTIONS:");
    testIDs.forEach(id => {
        const item = data.find(p => p.id === id);
        if (item) {
            const desc = item.description || 'UNDEFINED';
            const preview = desc.substring(0, 50);
            console.log(`ID ${id}: "${preview}${desc.length > 50 ? '...' : ''}"`);
        }
    });

    console.log("\n=== ESTADÍSTICAS ===");
    const withDesc = data.filter(p => p.description && p.description.trim() !== "").length;
    const withoutDesc = data.filter(p => !p.description || p.description.trim() === "").length;

    console.log(`Total: ${data.length}`);
    console.log(`Con description: ${withDesc}`);
    console.log(`Sin description: ${withoutDesc}`);

    // Show file stats
    const stats = fs.statSync('prompts_db.json');
    console.log(`\nTamaño archivo: ${stats.size} bytes`);
    console.log(`Última modificación: ${stats.mtime}`);

} catch (error) {
    console.error("Error:", error);
}
