const fs = require('fs');
const crypto = require('crypto');

console.log("Iniciando regeneración ROBUSTA...");

let rawContent = fs.readFileSync('100casosrefinado.txt', 'utf8');

// Normalizar saltos de línea
rawContent = rawContent.replace(/\r\n/g, '\n');

// Eliminar cabecera y cierre
rawContent = rawContent.replace(/export default prompts_db;/, '');
rawContent = rawContent.replace(/const prompts_db = \[/, '');
// Fix: remove closing bracket and semicolon more aggressively at the end
rawContent = rawContent.replace(/\];\s*export default prompts_db;?/, '');
rawContent = rawContent.replace(/\];\s*$/, '');

// Split por "},"
// Esto nos dará fragmentos de objetos "  { ... "
// El último puede no tener coma.
const blocks = rawContent.split(/},\s*\n/);

console.log(`Bloques detectados (aprox): ${blocks.length}`);

// config encriptacion
const PASSWORD = "AGIA2025";
const SALT = "salsapicante";
function encrypt(text) {
    if (!text) return "";
    const key = crypto.pbkdf2Sync(PASSWORD, SALT, 1000, 32, 'sha256');
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return iv.toString('base64') + ":" + encrypted;
}

const finalCases = [];
const errors = [];

blocks.forEach((block, index) => {
    let cleanBlock = block.trim();
    if (!cleanBlock) return;

    // Asegurar que empieza con {
    if (!cleanBlock.startsWith('{')) {
        // A veces queda basura o comentarios
        const firstBrace = cleanBlock.indexOf('{');
        if (firstBrace === -1) return;
        cleanBlock = cleanBlock.substring(firstBrace);
    }

    // Asegurar que termina con }
    // Pero si tiene ] al final (ultimo bloque), quitarlo
    cleanBlock = cleanBlock.replace(/\];?\s*$/, '');

    if (!cleanBlock.endsWith('}')) {
        cleanBlock += '}';
    }

    // Intentar evaluar
    try {
        const obj = eval(`(${cleanBlock})`);
        processCase(obj);
    } catch (e) {
        console.warn(`Error en bloque ${index}: ${e.message}`);
        // Intento de auto-fix: escapar comillas dobles dentro de valores "..."
        // Regex naive: buscar "..." y dentro reemplazar " por \"
        // Es complejo con regex.
        // Haremos un reporte manual mejor.
        // O un fix sucio para "victoria"
        if (e.message.includes("victoria")) {
            console.log("Intentando fix para 'victoria'...");
            cleanBlock = cleanBlock.replace(/victoria"/g, 'victoria\\"'); // Ejemplo hipotético
            // Mejor: Buscar la línea con "victoria" y escapar comillas
        }

        errors.push({ index, block: cleanBlock.substring(0, 50) + "...", error: e.message });
    }
});

function processCase(c) {
    let badResp = c.resultado_basico || "";
    let analysis = "";
    const separator = "[ERROR IDENTIFICADO]:";
    if (badResp.includes(separator)) {
        const parts = badResp.split(separator);
        badResp = parts[0].trim();
        analysis = parts[1].trim();
    }

    // Compute icon/difficulty helpers ... (simplificado para brevedad, copiar del script anterior si necesario o usar defaults)

    finalCases.push({
        id: c.id,
        category: c.categoria,
        title: c.nombre_caso,
        icon: "lightbulb", // Simplificado
        problem: c.valor_comercial,
        badPrompt: c.prompt_basico,
        badResponsePreview: badResp,
        badResponseAnalysis: analysis,
        agiaPromptTagged: c.prompt_maestro, // Encrypt disabled by user request
        previewResponse: c.resultado_maestro,
        metadata: { score: c.score }
        // Agrego campos mínimos requeridos por la app para que no rompa
    });
}

const fileContent = `const casesData = ${JSON.stringify(finalCases, null, 4)};\nexport default casesData;`;
fs.writeFileSync('prompts_db.js', fileContent);

console.log(`Generados ${finalCases.length} casos válidos.`);
console.log(`Errores: ${errors.length}`);
if (errors.length > 0) console.log(errors);
