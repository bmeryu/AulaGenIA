/**
 * Identificar casos con exampleTip/validationTip genéricos y corregirlos con contenido único
 */

const fs = require('fs');
const casesData = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));

// Textos genéricos que usamos (error)
const genericos = [
    "Diseño Instruccional + Estándares MINEDUC. Aplica principios pedagógicos probados.",
    "Formato Procesal Chileno + Jurisprudencia. Estructura para tribunales y colegios profesionales.",
    "Gestión Documental + Estándares Corporativos. Formato ejecutivo para toma de decisiones.",
    "Optimización de Procesos + Automatización. Metodología para eliminar cuellos de botella.",
    "Análisis Estratégico + Diagnóstico Rápido. Framework para evaluar y definir acciones.",
    "Metodología AGIA + Estructura Profesional. Técnicas probadas para resultados de calidad."
];

const casosGenericos = casesData.filter(c =>
    genericos.some(g => c.exampleTip?.includes(g.substring(0, 30)))
);

console.log(`Casos con exampleTip genérico: ${casosGenericos.length}\n`);
casosGenericos.forEach(c => {
    console.log(`ID ${c.id}: ${c.title}`);
    console.log(`   Category: ${c.category}`);
    console.log(`   exampleTip: ${c.exampleTip?.substring(0, 60)}...`);
    console.log('');
});
