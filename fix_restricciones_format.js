/**
 * Script para CORREGIR el formato de RESTRICCIONES
 * Cambia \\n\\n por saltos de línea reales
 */

const fs = require('fs');

const PROMPTS_FILE = 'c:\\Users\\Mole-PC\\Documents\\GitHub\\AulaGenIA\\prompts_db.json';

console.log('📂 Leyendo archivo...');

const fileContent = fs.readFileSync(PROMPTS_FILE, 'utf8');
const casesData = JSON.parse(fileContent);

let corregidos = 0;

casesData.forEach(caso => {
    if (!caso.agiaPromptTagged) return;

    // Buscar el patrón mal escapado: \\n\\nRESTRICCIONES:\\n-
    if (caso.agiaPromptTagged.includes('\\n\\nRESTRICCIONES:')) {
        // Reemplazar \\n por \n real
        caso.agiaPromptTagged = caso.agiaPromptTagged
            .replace(/\\n\\nRESTRICCIONES:\\n/g, '\n\nRESTRICCIONES:\n')
            .replace(/\\n- /g, '\n- ');

        corregidos++;
        console.log(`✅ ID ${caso.id}: ${caso.title.substring(0, 45)}...`);
    }
});

console.log(`\n📈 RESUMEN: ${corregidos} casos corregidos`);

fs.writeFileSync(PROMPTS_FILE, JSON.stringify(casesData, null, 2), 'utf8');
console.log('💾 Archivo guardado');
