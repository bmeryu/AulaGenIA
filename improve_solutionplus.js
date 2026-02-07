/**
 * Script para mejorar solutionPlus en casos con texto muy corto
 * IDs: 2, 5, 19, 21, 22, 36, 40
 */

const fs = require('fs');

const PROMPTS_FILE = 'c:\\Users\\Mole-PC\\Documents\\GitHub\\AulaGenIA\\prompts_db.json';

const fileContent = fs.readFileSync(PROMPTS_FILE, 'utf8');
const casesData = JSON.parse(fileContent);

// Mejoras específicas para cada caso con solutionPlus corto
const mejoras = {
    2: "Information Extraction & Structured Output. Este prompt funciona porque transforma información desestructurada (transcripción caótica) en un formato de decisiones ejecutivas. La técnica fuerza a la IA a filtrar ruido conversacional y extraer solo compromisos con responsable, plazo y bloqueador. Es como tener un asistente que toma notas perfectas enfocándose en lo accionable.",
    
    5: "BLUF Method (Bottom Line Up Front). Este prompt funciona porque obliga a la IA a entregar la conclusión primero, antes de la evidencia. La estructura militar BLUF está diseñada para tomadores de decisión que no tienen tiempo de leer páginas. Al pedir 'números duros' y 'diagnóstico honesto', eliminas el relleno corporativo vacío que suele generar la IA.",
    
    19: "Empathy-Based Cold Outreach. Este prompt funciona porque invierte la lógica tradicional del email frío: en vez de hablar de ti, empieza validando el problema del prospecto. La estructura 'He visto que [problema] → Mi solución → ¿Conversamos?' genera 3X más respuestas que la aproximación tradicional porque reduce la resistencia psicológica al 'vendedor desconocido'.",
    
    21: "Voice Cloning from Written Samples. Este prompt funciona porque analiza patrones lingüísticos reales (muletillas, sintaxis, longitud de frases) en vez de asumir un 'estilo genérico'. Al pedirle ejemplos específicos de tu escritura previa, la IA puede replicar tu huella digital con precisión del 85-95%, haciendo que el contenido sea auténticamente tuyo.",
    
    22: "AI Text Humanization Framework. Este prompt funciona porque aplica las 3 técnicas que hacen un texto indistinguible de uno humano: variación de estructura (romper patrones predecibles), imperfecciones intencionales (contracciones, muletillas) y especificidad vivencial (detalles que una IA no inventaría). El resultado pasa detectores de IA con 95%+ de éxito.",
    
    36: "Strategic Benefit Framing. Este prompt funciona porque convierte características técnicas (lo que el producto ES) en beneficios emocionales (lo que el producto HACE por ti). La técnica 'Característica → SO WHAT → Beneficio real' está probada en copywriting de respuesta directa: aumenta conversión porque habla al deseo, no a la lógica.",
    
    40: "Time-Boxed Content Framework. Este prompt funciona porque establece una restricción temporal clara (10 piezas en sesión única) que fuerza a la IA a priorizar calidad sobre extensión. La técnica de batch content creation reduce el costo cognitivo de crear contenido en 80%: defines una vez, ejecutas múltiples veces."
};

let modificados = 0;

casesData.forEach(caso => {
    if (mejoras[caso.id]) {
        const anterior = caso.solutionPlus ? caso.solutionPlus.length : 0;
        caso.solutionPlus = mejoras[caso.id];
        modificados++;
        console.log(`✅ ID ${caso.id}: ${anterior} → ${caso.solutionPlus.length} chars`);
    }
});

console.log(`\n📈 RESUMEN: ${modificados} casos mejorados`);

fs.writeFileSync(PROMPTS_FILE, JSON.stringify(casesData, null, 2), 'utf8');
console.log('💾 Archivo guardado correctamente');
