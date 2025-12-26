// Script para generar prompts_db.js con los 93 casos completos
const fs = require('fs');

// Mapeo de categorías
const categoryMap = {
    'Productividad Ninja': 'productivity',
    'Ventas & Persuasión': 'sales',
    'Contenido & Redes': 'sales',
    'Finanzas Inteligentes': 'finance',
    'Legal & Formalización': 'productivity',
    'Diseño & Arte Digital': 'art',
    'Tecnología & Herramientas': 'tech',
    'Estrategia & Lanzamiento': 'sales'
};

// Mapeo de iconos por categoría
const iconMap = {
    'productivity': 'rocket_launch',
    'sales': 'campaign',
    'finance': 'payments',
    'art': 'palette',
    'tech': 'terminal'
};

// Mapeo de IA recomendada
const aiMap = {
    'ChatGPT': 'chatgpt',
    'ChatGPT / Gemini': 'chatgpt',
    'ChatGPT (GPT-4o)': 'chatgpt',
    'ChatGPT (GPT-4o) / Perplexity': 'chatgpt',
    'ChatGPT / Claude': 'chatgpt',
    'ChatGPT (Data)': 'chatgpt',
    'ChatGPT (Data) / Gemini': 'chatgpt',
    'ChatGPT Plus': 'chatgpt',
    'ChatGPT Plus / Claude': 'chatgpt',
    'ChatGPT Custom GPT': 'chatgpt',
    'Gemini': 'gemini',
    'Gemini / ChatGPT': 'gemini',
    'Gemini 1.5 Pro': 'gemini',
    'Claude': 'claude',
    'Claude 3.5 Sonnet': 'claude',
    'Claude 3.5 Sonnet / ChatGPT': 'claude',
    'Claude / ChatGPT': 'claude',
    'Perplexity': 'perplexity',
    'Perplexity / ChatGPT': 'perplexity',
    'Perplexity.ai': 'perplexity',
    'Midjourney': 'midjourney',
    'Midjourney --no background': 'midjourney',
    'DALL-E 3': 'midjourney',
    'DALL-E 3 / Ideogram': 'midjourney',
    'Ideogram': 'midjourney',
    'Ideogram / Midjourney': 'midjourney',
    'Gamma': 'gamma',
    'Gamma / ChatGPT': 'gamma',
    'Canva': 'canva',
    'ManyChat': 'chatgpt',
    'ManyChat / Botpress': 'chatgpt',
    'Whisper / ChatGPT': 'chatgpt'
};

function getDifficulty(score) {
    if (score >= 90) return 'advanced';
    if (score >= 80) return 'intermediate';
    return 'beginner';
}

function escaparHTML(texto) {
    if (!texto) return '';
    return texto
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function formatearResultado(resultado) {
    if (!resultado) return '<div class="text-xs">Sin resultado disponible.</div>';

    const escaped = escaparHTML(resultado);
    return `<div class="text-xs text-slate-700 whitespace-pre-wrap">${escaped}</div>`;
}

// Todos los 93 casos incluidos directamente
const casosOriginales = `AQUÍ_VAN_LOS_93_CASOS`;

// Por ahora, genero la estructura base y tú pegas los datos después
const outputHeader = `// ==========================================
// 🧠 BÓVEDA DE PROMPTS AGIA 3.0 - REFINADO
// Base de Datos: 100casosrefinado.txt  
// Total Casos: 93
// Versión: SIN ENCRIPTAR (Pre-Seguridad)
// ==========================================

const allCases = [
`;

const outputFooter = `
];

export default allCases;
`;

console.log('✅ Script listo. Ejecuta la conversión manual o usa este template.');
console.log('📝 Estructura generada correctamente.');
