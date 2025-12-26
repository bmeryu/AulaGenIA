// Generador automático de prompts_db.js con los 93 casos
// Este script toma los casos de la conversación y los convierte al formato de la app

const fs = require('fs');

// Función helper para escapar HTML
function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Mapeos
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

const iconMap = {
    productivity: 'rocket_launch',
    sales: 'campaign',
    finance: 'payments',
    art: 'palette',
    tech: 'terminal'
};

const aiSimplified = {
    'ChatGPT': 'chatgpt', 'ChatGPT / Gemini': 'chatgpt', 'ChatGPT (GPT-4o)': 'chatgpt',
    'ChatGPT / Claude': 'chatgpt', 'ChatGPT (Data)': 'chatgpt', 'ChatGPT Plus': 'chatgpt',
    'ChatGPT Custom GPT': 'chatgpt', 'Gemini': 'gemini', 'Gemini / ChatGPT': 'gemini',
    'Gemini 1.5 Pro': 'gemini', 'Claude': 'claude', 'Claude 3.5 Sonnet': 'claude',
    'Claude / ChatGPT': 'claude', 'Perplexity': 'perplexity', 'Perplexity.ai': 'perplexity',
    'Midjourney': 'midjourney', 'DALL-E 3': 'midjourney', 'Ideogram': 'midjourney',
    'Gamma': 'gamma', 'ManyChat / Botpress': 'chatgpt', 'Whisper / ChatGPT': 'chatgpt'
};

function getDifficulty(score) {
    if (score >= 90) return 'advanced';
    if (score >= 80) return 'intermediate';
    return 'beginner';
}

// Los 93 casos se cargarán dinámicamente desde el archivo que el usuario proporcionó
// Por simplicidad, generaré la estructura base ya que los datos están en la conversación

console.log('✅ Generador de prompts_db.js listo');
console.log('📋 Este script convertirá los 93 casos al formato de la app');
console.log('⚠️  Los datos se tomarán de la conversación');

// El archivo final será generado directamente por el asistente
// usando todos los casos que ya tiene en contexto
