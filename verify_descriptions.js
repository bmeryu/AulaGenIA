const fs = require('fs');

try {
    const rawData = fs.readFileSync('prompts_db.json', 'utf8');
    const data = JSON.parse(rawData);

    console.log("=== VERIFICACIÓN DE DESCRIPTIONS ===\n");

    // Check legal prompts (IDs 63-71)
    const legalIDs = [63, 64, 65, 67, 68, 71];

    console.log("LEGAL & FORMALIZACIÓN:");
    legalIDs.forEach(id => {
        const item = data.find(p => p.id === id);
        if (item) {
            console.log(`ID ${id}: "${item.description || 'UNDEFINED'}"`);
        } else {
            console.log(`ID ${id}: NOT FOUND`);
        }
    });

    console.log("\n=== RESUMEN GENERAL ===");
    let empty = 0;
    let filled = 0;

    data.forEach(item => {
        if (!item.description || item.description.trim() === "") {
            empty++;
        } else {
            filled++;
        }
    });

    console.log(`Total prompts: ${data.length}`);
    console.log(`Descriptions llenas: ${filled}`);
    console.log(`Descriptions vacías: ${empty}`);

} catch (error) {
    console.error("Error:", error);
}
