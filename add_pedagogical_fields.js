/**
 * Script para agregar fineTuning y verticalMatrix a casos que no los tienen
 * Casos identificados: IDs 173-227 (principalmente Educación y Legal)
 */

const fs = require('fs');

const PROMPTS_FILE = 'c:\\Users\\Mole-PC\\Documents\\GitHub\\AulaGenIA\\prompts_db.json';

const fileContent = fs.readFileSync(PROMPTS_FILE, 'utf8');
const casesData = JSON.parse(fileContent);

console.log('📂 Procesando casos sin fineTuning/verticalMatrix...\n');

// Templates por categoría
const templates = {
    "Educación": {
        fineTuning: [
            "Nivel: ¿Otro nivel? Dile: 'Adapta para [básica/media/universitario].'",
            "Extensión: ¿Muy largo? Dile: 'Versión resumida de 1 página.'",
            "Formato: ¿Para imprimir? Dile: 'Optimiza para impresión A4.'",
            "Contexto: ¿Realidad específica? Dile: 'Es escuela [rural/vulnerable/bilingüe].'"
        ],
        verticalMatrix: [
            { rubro: "Básica", contexto: "1° a 6° básico", ajuste: "Lenguaje simple, actividades lúdicas" },
            { rubro: "Media", contexto: "7° a 4° medio", ajuste: "Mayor profundidad, preparación pruebas" },
            { rubro: "Universitario", contexto: "Educación superior", ajuste: "Rigor académico, citaciones" },
            { rubro: "Técnico-Profesional", contexto: "Formación TP", ajuste: "Enfoque práctico, competencias laborales" },
            { rubro: "Educación Especial", contexto: "NEE/PIE", ajuste: "Adecuaciones curriculares, DUA" }
        ]
    },
    "Legal & Profesional": {
        fineTuning: [
            "Urgencia: ¿Plazo corto? Dile: 'Versión simplificada, solo lo esencial.'",
            "Cliente: ¿Para explicar a cliente? Dile: 'Agrega resumen ejecutivo en lenguaje simple.'",
            "Jurisdicción: Dile: 'Ajusta para [Tribunal/Corte/Arbitraje].'",
            "Confidencial: Dile: 'Agregar cláusula de confidencialidad.'"
        ],
        verticalMatrix: [
            { rubro: "Civil", contexto: "Litigios civiles", ajuste: "Foco en CPC, plazos legales" },
            { rubro: "Laboral", contexto: "Derecho del trabajo", ajuste: "Código del Trabajo, jurisprudencia DT" },
            { rubro: "Tributario", contexto: "Materias SII", ajuste: "Circular SII, plazos fiscales" },
            { rubro: "Familia", contexto: "Tribunales de Familia", ajuste: "Interés superior del niño, mediación" },
            { rubro: "Comercial", contexto: "Derecho empresarial", ajuste: "Sociedades, contratos comerciales" }
        ]
    },
    "Gestión & Adm.": {
        fineTuning: [
            "Formato: ¿Para presentación? Dile: 'Agrega versión ejecutiva de 1 slide.'",
            "Audiencia: ¿Para gerencia? Dile: 'Foco en impacto financiero y decisiones.'",
            "Confidencial: Dile: 'Marcar como documento interno confidencial.'",
            "Urgencia: ¿Para hoy? Dile: 'Solo los puntos críticos, máximo 1 página.'"
        ],
        verticalMatrix: [
            { rubro: "Pyme", contexto: "Empresas pequeñas", ajuste: "Procesos simples, recursos limitados" },
            { rubro: "Corporativo", contexto: "Empresas grandes", ajuste: "Compliance, gobernanza, auditoría" },
            { rubro: "Startup", contexto: "Empresas emergentes", ajuste: "Agilidad, escalabilidad, inversores" },
            { rubro: "Público", contexto: "Sector público", ajuste: "Normativa pública, transparencia" },
            { rubro: "ONG", contexto: "Sin fines de lucro", ajuste: "Donantes, impacto social, rendición" }
        ]
    }
};

// Template genérico para categorías no mapeadas
const templateGenerico = {
    fineTuning: [
        "Extensión: ¿Muy largo? Dile: 'Versión resumida, máximo 1 página.'",
        "Tono: ¿Muy formal? Dile: 'Más cercano y conversacional.'",
        "Formato: ¿Otro formato? Dile: 'Entrégalo como [tabla/bullets/párrafos].'",
        "Contexto: ¿Sector específico? Dile: 'Adapta para [industria/rubro].'"
    ],
    verticalMatrix: [
        { rubro: "Pymes", contexto: "Pequeñas empresas", ajuste: "Simplicidad, recursos limitados" },
        { rubro: "Corporativo", contexto: "Grandes empresas", ajuste: "Procesos formales, compliance" },
        { rubro: "Freelance", contexto: "Profesionales independientes", ajuste: "Agilidad, marca personal" },
        { rubro: "Educación", contexto: "Sector educativo", ajuste: "Enfoque pedagógico" },
        { rubro: "Salud", contexto: "Sector salud", ajuste: "Regulaciones sanitarias, pacientes" }
    ]
};

let modificados = 0;

casesData.forEach(caso => {
    let cambios = false;

    // Agregar fineTuning si no existe o está vacío
    if (!caso.fineTuning || !Array.isArray(caso.fineTuning) || caso.fineTuning.length === 0) {
        const template = templates[caso.category] || templateGenerico;
        caso.fineTuning = template.fineTuning;
        cambios = true;
    }

    // Agregar verticalMatrix si no existe o está vacío
    if (!caso.verticalMatrix || !Array.isArray(caso.verticalMatrix) || caso.verticalMatrix.length === 0) {
        const template = templates[caso.category] || templateGenerico;
        caso.verticalMatrix = template.verticalMatrix;
        cambios = true;
    }

    if (cambios) {
        modificados++;
        console.log(`✅ ID ${caso.id}: [${caso.category}] ${caso.title.substring(0, 45)}...`);
    }
});

console.log(`\n📈 RESUMEN: ${modificados} casos modificados`);

fs.writeFileSync(PROMPTS_FILE, JSON.stringify(casesData, null, 2), 'utf8');
console.log('💾 Archivo guardado correctamente');
