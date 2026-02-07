/**
 * Script para corregir masivamente OBJETIVO → META en prompts_db.json
 * AulaGenIA - Corrección de casos Módulo 5
 */

const fs = require('fs');
const path = require('path');

const PROMPTS_FILE = 'c:\\Users\\Mole-PC\\Documents\\GitHub\\AulaGenIA\\prompts_db.json';

console.log('📂 Leyendo archivo:', PROMPTS_FILE);

// Leer el archivo
const fileContent = fs.readFileSync(PROMPTS_FILE, 'utf8');
const casesData = JSON.parse(fileContent);

console.log(`📊 Total de casos encontrados: ${casesData.length}`);

let modificados = 0;
let sinCambio = 0;

// Procesar cada caso
casesData.forEach((caso, index) => {
    if (caso.agiaPromptTagged) {
        const original = caso.agiaPromptTagged;

        // Reemplazar OBJETIVO: por META: (con dos puntos)
        let modified = original.replace(/OBJETIVO:/g, 'META:');

        // También reemplazar OBJETIVO sin dos puntos al inicio de línea
        modified = modified.replace(/\\nOBJETIVO\\n/g, '\\nMETA\\n');
        modified = modified.replace(/\\nOBJETIVO /g, '\\nMETA ');

        if (modified !== original) {
            caso.agiaPromptTagged = modified;
            modificados++;
            console.log(`✅ ID ${caso.id}: "${caso.title.substring(0, 50)}..." - Corregido`);
        } else {
            sinCambio++;
        }
    }
});

console.log('\\n📈 RESUMEN:');
console.log(`   ✅ Casos modificados: ${modificados}`);
console.log(`   ⏭️ Sin cambio (ya tenían META o no tenían OBJETIVO): ${sinCambio}`);
console.log(`   📊 Total procesados: ${casesData.length}`);

// Guardar el archivo modificado
fs.writeFileSync(PROMPTS_FILE, JSON.stringify(casesData, null, 2), 'utf8');
console.log('\\n💾 Archivo guardado exitosamente');
