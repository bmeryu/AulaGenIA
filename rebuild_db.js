const fs = require('fs');
const crypto = require('crypto');

console.log("Iniciando regeneración de prompts_db.js desde fuente raw...");

// --- LECTURA FUENTE ---
let rawContent = fs.readFileSync('100casosrefinado.txt', 'utf8');

// Limpieza para poder hacer eval()
// Quitamos el export default del final
rawContent = rawContent.replace('export default prompts_db;', '');
// Quitamos posibles imports si los hubiera (no hay)

// Definimos variable global para capturar el eval
global.prompts_db = [];

// Ejecutamos el contenido. Esto poblará global.prompts_db
// Nota: El archivo contiene "const prompts_db = [...]".
// Al evaludarse en global scope debería funcionar si quitamos el const o usamos vm.
// Hack simple: reemplazar "const prompts_db =" por "global.prompts_db ="
rawContent = rawContent.replace(/const\s+prompts_db\s*=\s*\[/, 'global.prompts_db = [');

try {
    eval(rawContent);
} catch (e) {
    console.error("Error evaluando fuente:", e);
    process.exit(1);
}

console.log(`Fuente cargada: ${global.prompts_db.length} casos encontrados.`);

// --- CONFIG ENCRIPTACIÓN ---
const PASSWORD = "AGIA2025";
const SALT = "salsapicante"; // Hardcoded salt para consistencia simple, idealmente random pero usamos fix para compatibilidad o simplicidad
// En el script anterior native_encrypt usamos crypto.pbkdf2Sync estándar.

function encrypt(text) {
    if (!text) return "";
    // Derivar clave
    const key = crypto.pbkdf2Sync(PASSWORD, SALT, 1000, 32, 'sha256');
    // IV aleatorio
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    // Formato: IV:CIPHERTEXT
    return iv.toString('base64') + ":" + encrypted;
}

// --- HELPERS ---
function computeDifficulty(hh) {
    if (!hh) return "Intermedio";
    const val = parseInt(hh);
    if (hh.includes("m")) {
        if (val <= 30) return "Básico";
        if (val <= 90) return "Intermedio";
        return "Avanzado";
    }
    if (hh.includes("h")) return "Avanzado";
    return "Intermedio";
}

const iconMap = {
    "Productividad Ninja": "bolt",
    "Ventas & Persuasión": "attach_money",
    "Contenido & Redes": "share",
    "Finanzas Inteligentes": "savings",
    "Legal & Formalización": "gavel",
    "Diseño & Arte Digital": "palette",
    "Tecnología & Herramientas": "terminal",
    "Estrategia & Lanzamiento": "rocket_launch"
};

// --- TRANSFORMACIÓN ---
const finalCases = global.prompts_db.map(c => {
    // 1. Separar Resultado Básico de Diagnóstico de Error
    let badResp = c.resultado_basico || "";
    let analysis = ""; // Nuevo campo para [ERROR IDENTIFICADO]

    // Buscamos el separador
    const separator = "[ERROR IDENTIFICADO]:";
    if (badResp.includes(separator)) {
        const parts = badResp.split(separator);
        badResp = parts[0].trim(); // El texto del resultado simulado
        analysis = parts[1].trim(); // El análisis del error
    }

    // 2. Encriptar el Prompt Maestro
    const encryptedPrompt = encrypt(c.prompt_maestro);

    // 3. Construir Objeto Final
    return {
        id: c.id,
        category: c.categoria,
        title: c.nombre_caso,
        icon: iconMap[c.categoria] || "lightbulb",

        // Mapeamos 'valor_comercial' a 'problem' porque es la descripción del valor
        problem: c.valor_comercial,

        badPrompt: c.prompt_basico,
        badResponsePreview: badResp,     // Texto limpio
        badResponseAnalysis: analysis,   // Causa del error (NUEVO)

        agiaPromptTagged: encryptedPrompt, // ENCRIPTADO

        // Otros campos
        exampleTip: `Nivel: ${c.diagnostico}`, // Usamos diagnostico (Platino/Oro) como tip visual si se quiere
        validationTip: c.validacion,
        previewResponse: c.resultado_maestro,
        suggestedAI: c.ia_recomendada,

        locked: true,
        isTool: false,
        difficulty: computeDifficulty(c.hh_ahorradas),

        metadata: {
            score: c.score,
            diagnosis: c.diagnostico,
            technique: c.tecnica_ingenieria,
            timeSaved: c.hh_ahorradas
        }
    };
});

// --- ESCRITURA ---
const fileContent = `// Base de Datos de Prompts - Generada Automáticamente (Encrypted)
// Fecha: ${new Date().toISOString()}
// Total Casos: ${finalCases.length}

const casesData = ${JSON.stringify(finalCases, null, 4)};
`;

fs.writeFileSync('prompts_db.js', fileContent);
console.log("prompts_db.js generado exitosamente.");
