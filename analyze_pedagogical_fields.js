/**
 * ANÁLISIS de campos solutionPlus, fineTuning, verticalMatrix
 * Identifica casos que necesitan mejoras
 */

const fs = require('fs');

const PROMPTS_FILE = 'c:\\Users\\Mole-PC\\Documents\\GitHub\\AulaGenIA\\prompts_db.json';

const fileContent = fs.readFileSync(PROMPTS_FILE, 'utf8');
const casesData = JSON.parse(fileContent);

console.log('📊 ANÁLISIS DE CAMPOS PEDAGÓGICOS\n');
console.log('='.repeat(60));

const stats = {
    sinSolutionPlus: [],
    solutionPlusCorto: [],
    sinFineTuning: [],
    fineTuningCorto: [],
    sinVerticalMatrix: [],
    verticalMatrixCorto: []
};

casesData.forEach(caso => {
    const id = caso.id;
    const title = caso.title ? caso.title.substring(0, 40) : 'Sin título';

    // solutionPlus: debe explicar POR QUÉ funciona
    if (!caso.solutionPlus) {
        stats.sinSolutionPlus.push({ id, title });
    } else if (caso.solutionPlus.length < 100) {
        stats.solutionPlusCorto.push({ id, title, len: caso.solutionPlus.length });
    }

    // fineTuning: array de ajustes que el usuario puede hacer
    if (!caso.fineTuning || !Array.isArray(caso.fineTuning)) {
        stats.sinFineTuning.push({ id, title });
    } else if (caso.fineTuning.length < 3) {
        stats.fineTuningCorto.push({ id, title, count: caso.fineTuning.length });
    }

    // verticalMatrix: adaptación a otros rubros
    if (!caso.verticalMatrix || !Array.isArray(caso.verticalMatrix)) {
        stats.sinVerticalMatrix.push({ id, title });
    } else if (caso.verticalMatrix.length < 3) {
        stats.verticalMatrixCorto.push({ id, title, count: caso.verticalMatrix.length });
    }
});

console.log('\n🔴 SIN solutionPlus:', stats.sinSolutionPlus.length);
stats.sinSolutionPlus.slice(0, 10).forEach(c => console.log(`   ID ${c.id}: ${c.title}`));

console.log('\n🟡 solutionPlus MUY CORTO (<100 chars):', stats.solutionPlusCorto.length);
stats.solutionPlusCorto.slice(0, 10).forEach(c => console.log(`   ID ${c.id}: ${c.len} chars`));

console.log('\n🔴 SIN fineTuning:', stats.sinFineTuning.length);
stats.sinFineTuning.slice(0, 10).forEach(c => console.log(`   ID ${c.id}: ${c.title}`));

console.log('\n🟡 fineTuning CORTO (<3 items):', stats.fineTuningCorto.length);

console.log('\n🔴 SIN verticalMatrix:', stats.sinVerticalMatrix.length);
stats.sinVerticalMatrix.slice(0, 10).forEach(c => console.log(`   ID ${c.id}: ${c.title}`));

console.log('\n🟡 verticalMatrix CORTO (<3 rubros):', stats.verticalMatrixCorto.length);

console.log('\n📈 RESUMEN TOTAL:');
console.log(`   Total casos: ${casesData.length}`);
console.log(`   Necesitan solutionPlus: ${stats.sinSolutionPlus.length + stats.solutionPlusCorto.length}`);
console.log(`   Necesitan fineTuning: ${stats.sinFineTuning.length + stats.fineTuningCorto.length}`);
console.log(`   Necesitan verticalMatrix: ${stats.sinVerticalMatrix.length + stats.verticalMatrixCorto.length}`);

// Guardar IDs para procesamiento
const idsNecesitanMejora = {
    solutionPlus: [...stats.sinSolutionPlus.map(c => c.id), ...stats.solutionPlusCorto.map(c => c.id)],
    fineTuning: [...stats.sinFineTuning.map(c => c.id), ...stats.fineTuningCorto.map(c => c.id)],
    verticalMatrix: [...stats.sinVerticalMatrix.map(c => c.id), ...stats.verticalMatrixCorto.map(c => c.id)]
};

console.log('\n📝 IDs que necesitan mejora en solutionPlus:', idsNecesitanMejora.solutionPlus.join(', '));
