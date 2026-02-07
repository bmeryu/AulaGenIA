const fs = require('fs');
const casesData = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));

// Casos modificados por campo
const modificados = {
    solutionPlus: [2, 5, 19, 21, 22, 36, 40],
    fineTuning_verticalMatrix: [173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227],
    exampleTip_validationTip: [74, 77, 78, 79, 81, 102, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227]
};

console.log("=== CASOS MEJORADOS POR CAMPO ===\n");

console.log("--- solutionPlus (expandido) - 7 casos ---");
modificados.solutionPlus.forEach(id => {
    const c = casesData.find(x => x.id === id);
    if (c) console.log(`• ${c.title}`);
});

console.log("\n--- fineTuning + verticalMatrix - 55 casos ---");
modificados.fineTuning_verticalMatrix.forEach(id => {
    const c = casesData.find(x => x.id === id);
    if (c) console.log(`• ${c.title}`);
});

console.log("\n--- exampleTip + validationTip - 61 casos ---");
modificados.exampleTip_validationTip.forEach(id => {
    const c = casesData.find(x => x.id === id);
    if (c) console.log(`• ${c.title}`);
});
