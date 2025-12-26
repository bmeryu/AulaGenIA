const fs = require('fs');

console.log("Starting metadata merge...");

// 1. Read Raw Data (The rich source)
// Hack to load the array from text
let rawText = fs.readFileSync('100casosrefinado.txt', 'utf8');
rawText = rawText.replace('export default prompts_db;', '');
rawText = rawText.replace(/const\s+prompts_db\s*=\s*\[/, 'global.rawPrompts = [');

try {
    eval(rawText);
} catch (e) {
    console.error("Error parsing raw file:", e);
    process.exit(1);
}

// 2. Read Current DB (The user's working file)
let dbText = fs.readFileSync('prompts_db.js', 'utf8');
// We need to extract the array part to parse it, or eval it similarly
let dbContent = dbText.replace(/export default casesData;/, '');
dbContent = dbContent.replace(/const\s+casesData\s*=\s*/, 'global.currentCases = ');
// Remove trailing semicolon if present roughly
dbContent = dbContent.replace(/;\s*$/, '');

try {
    eval(dbContent);
} catch (e) {
    console.error("Error parsing current DB:", e);
    // Fallback: try to find the array start
    process.exit(1);
}

console.log(`Loaded ${global.rawPrompts.length} raw cases and ${global.currentCases.length} current cases.`);

// 3. Merge Loop
let updates = 0;
global.currentCases.forEach(currentCase => {
    const rawCase = global.rawPrompts.find(r => r.id === currentCase.id);

    if (rawCase) {
        // Suggested AI
        if (!currentCase.suggestedAI && rawCase.ia_recomendada) {
            currentCase.suggestedAI = rawCase.ia_recomendada;
            updates++;
        }

        // Validation Tip
        if (!currentCase.validationTip && rawCase.validacion) {
            currentCase.validationTip = rawCase.validacion;
        }

        // Example Tip -> Getting 'Technique' here as it is more useful!
        // User asked for "Idea de Uso", and 'tecnica_ingenieria' fits well as a "Tip"
        if (!currentCase.exampleTip && rawCase.tecnica_ingenieria) {
            currentCase.exampleTip = rawCase.tecnica_ingenieria;
        }

        // Metadata Score (if missing)
        if (!currentCase.metadata) currentCase.metadata = {};
        if (!currentCase.metadata.score && rawCase.score) {
            currentCase.metadata.score = rawCase.score;
        }

        // Also ensure technique is in metadata just in case
        if (rawCase.tecnica_ingenieria) {
            currentCase.metadata.technique = rawCase.tecnica_ingenieria;
        }
    }
});

console.log(`Merged metadata for ${updates} cases.`);

// 4. Save Back
const newFileContent = `// Base de Datos de Prompts - Generada Automáticamente (Encrypted)
// Fecha: ${new Date().toISOString()}
// Total Casos: ${global.currentCases.length}

const casesData = ${JSON.stringify(global.currentCases, null, 4)};
`;

fs.writeFileSync('prompts_db.js', newFileContent);
console.log("prompts_db.js updated successfully.");
