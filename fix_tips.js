const fs = require('fs');
const casesData = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));

const templates = {
    "Educación": {
        exampleTip: "Diseño Instruccional + Estándares MINEDUC. Aplica principios pedagógicos probados.",
        validationTip: "¿El material cumple con los objetivos de aprendizaje y es aplicable en el aula?"
    },
    "Legal & Profesional": {
        exampleTip: "Formato Procesal Chileno + Jurisprudencia. Estructura para tribunales y colegios profesionales.",
        validationTip: "¿El documento cumple requisitos formales y podría presentarse ante la institución?"
    },
    "Gestión & Adm.": {
        exampleTip: "Gestión Documental + Estándares Corporativos. Formato ejecutivo para toma de decisiones.",
        validationTip: "¿El documento es claro, completo y listo para el contexto organizacional?"
    },
    "Operaciones & Procesos": {
        exampleTip: "Optimización de Procesos + Automatización. Metodología para eliminar cuellos de botella.",
        validationTip: "¿El proceso optimizado es implementable y genera ahorro real?"
    },
    "Otros / Análisis": {
        exampleTip: "Análisis Estratégico + Diagnóstico Rápido. Framework para evaluar y definir acciones.",
        validationTip: "¿El análisis identifica problemas reales y propone acciones concretas?"
    }
};

const gen = {
    exampleTip: "Metodología AGIA + Estructura Profesional. Técnicas probadas para resultados de calidad.",
    validationTip: "¿El resultado es profesional, completo y listo para usar?"
};

let mod = 0;
casesData.forEach(c => {
    let changed = false;
    if (!c.exampleTip || c.exampleTip.length < 10) {
        c.exampleTip = (templates[c.category] || gen).exampleTip;
        changed = true;
    }
    if (!c.validationTip || c.validationTip.length < 10) {
        c.validationTip = (templates[c.category] || gen).validationTip;
        changed = true;
    }
    if (changed) {
        mod++;
        console.log("ID " + c.id + ": " + c.title.substring(0, 40));
    }
});

console.log("\nTotal: " + mod + " casos modificados");
fs.writeFileSync('prompts_db.json', JSON.stringify(casesData, null, 2), 'utf8');
console.log("Guardado OK");
