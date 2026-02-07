/**
 * Script para identificar casos SIN RESTRICCIONES en prompts_db.json
 * AulaGenIA - Análisis de casos
 */

const fs = require('fs');

const PROMPTS_FILE = 'c:\\Users\\Mole-PC\\Documents\\GitHub\\AulaGenIA\\prompts_db.json';

const fileContent = fs.readFileSync(PROMPTS_FILE, 'utf8');
const casesData = JSON.parse(fileContent);

console.log('📊 ANÁLISIS DE RESTRICCIONES EN CASOS\n');
console.log('='.repeat(60));

const sinRestricciones = [];
const conRestricciones = [];

casesData.forEach(caso => {
    if (caso.agiaPromptTagged) {
        // Buscar si tiene RESTRICCIONES o RESTRICCIÓN
        const tieneRestricciones =
            caso.agiaPromptTagged.includes('RESTRICCIONES:') ||
            caso.agiaPromptTagged.includes('RESTRICCIONES\\n') ||
            caso.agiaPromptTagged.includes('RESTRICCIÓN:') ||
            caso.agiaPromptTagged.includes('RESTRICCION:');

        if (!tieneRestricciones) {
            sinRestricciones.push({
                id: caso.id,
                title: caso.title,
                category: caso.category
            });
        } else {
            conRestricciones.push(caso.id);
        }
    }
});

// Ordenar por ID para ver rangos
sinRestricciones.sort((a, b) => a.id - b.id);

console.log('\n🔴 CASOS SIN RESTRICCIONES (' + sinRestricciones.length + ' casos):\n');
sinRestricciones.forEach(c => {
    console.log(`   ID ${c.id}: [${c.category}] ${c.title.substring(0, 50)}...`);
});

console.log('\n📈 RESUMEN:');
console.log(`   ✅ Con RESTRICCIONES: ${conRestricciones.length}`);
console.log(`   🔴 Sin RESTRICCIONES: ${sinRestricciones.length}`);
console.log(`   📊 Total: ${casesData.length}`);

// Identificar rangos de IDs sin restricciones
if (sinRestricciones.length > 0) {
    const idsMin = Math.min(...sinRestricciones.map(c => c.id));
    const idsMax = Math.max(...sinRestricciones.map(c => c.id));
    console.log(`\n   📍 Rango de IDs afectados: ${idsMin} - ${idsMax}`);
}
