// Script de conversión: 100casosrefinado.txt → prompts_db.js
// Preserva TODA la información del formato original

const fs = require('fs');

// Mapeo de categorías al formato de la app
const categoryMap = {
  'Productividad Ninja': 'productivity',
  'Ventas & Persuasión': 'sales',
  'Estrategia & Lanzamiento': 'sales',
  'Finanzas Personales': 'finance',
  'Marketing de Contenidos': 'sales',
  'Arte & Diseño': 'art',
  'Tecnología & Dev': 'tech',
  'Educación': 'education',
  'Lifestyle & Wellness': 'life',
  'Comunicación Profesional': 'productivity'
};

// Mapeo de categoría a icono
const iconMap = {
  'productivity': 'rocket_launch',
  'sales': 'campaign',
  'finance': 'payments',
  'art': 'palette',
  'tech': 'terminal',
  'education': 'school',
  'life': 'self_improvement'
};

// Mapeo de IA recomendada
const aiMap = {
  'ChatGPT': 'chatgpt',
  'ChatGPT / Gemini': 'chatgpt',
  'ChatGPT (GPT-4o)': 'chatgpt',
  'ChatGPT (GPT-4o) / Perplexity': 'chatgpt',
  'Gemini': 'gemini',
  'Claude': 'claude',
  'Perplexity': 'perplexity',
  'Midjourney': 'midjourney',
  'DALL-E': 'midjourney',
  'Gamma': 'gamma'
};

// Leer el archivo fuente
const content = fs.readFileSync('casos_temp.txt', 'utf16le');

// Extraer el array de casos (buscar desde "const prompts_db = [" hasta "];")
const startMarker = 'const prompts_db = [';
const endMarker = '];';
const startIndex = content.indexOf(startMarker) + startMarker.length;
const endIndex = content.lastIndexOf(endMarker);
const casesArrayString = content.substring(startIndex, endIndex);

// Evaluar el array (usar Function para evitar eval directo)
const casos = new Function('return [' + casesArrayString + ']')();

console.log(`✅ ${casos.length} casos cargados del archivo original`);

// Convertir cada caso al nuevo formato
const convertedCases = casos.map(caso => {
  const category = categoryMap[caso.categoria] || 'productivity';
  const icon = iconMap[category];
  const suggestedAI = aiMap[caso.ia_recomendada] || 'chatgpt';
  
  // Determinar dificultad basada en score
  let difficulty = 'beginner';
  if (caso.score >= 90) difficulty = 'advanced';
  else if (caso.score >= 80) difficulty = 'intermediate';
  
  // Construir el objeto en el nuevo formato
  return {
    id: caso.id,
    category: category,
    title: caso.nombre_caso,
    icon: icon,
    problem: `${caso.categoria}: ${caso.valor_comercial || 'Optimización de procesos'}. Score: ${caso.score} (${caso.diagnostico})`,
    badPrompt: caso.prompt_basico,
    badResponsePreview: `<div class="text-xs text-slate-500 italic">"${caso.resultado_basico.split('\\n\\n[ERROR')[0].trim()}"</div>`,
    agiaPromptTagged: caso.prompt_maestro, // SIN ENCRIPTAR por ahora para que puedas ver
    exampleTip: caso.tecnica_ingenieria,
    validationTip: caso.validacion,
    previewResponse: formatearResultado(caso.resultado_maestro),
    suggestedAI: suggestedAI,
    locked: false,
    isTool: false,
    difficulty: difficulty,
    metadata: {
      hh_ahorradas: caso.hh_ahorradas,
      diagnostico: caso.diagnostico,
      score: caso.score
    }
  };
});

// Función para formatear el resultado maestro como HTML simple
function formatearResultado(resultado) {
  if (!resultado) return '<div class="text-xs">Sin resultado disponible.</div>';
  
  // Si tiene formato de tabla markdown, convertirlo
  if (resultado.includes('|')) {
    return `<div class="text-xs overflow-x-auto"><pre class="font-mono whitespace-pre-wrap">${escaparHTML(resultado)}</pre></div>`;
  }
  
  // Si es texto simple, envolverlo en div
  return `<div class="text-xs text-slate-700">${escaparHTML(resultado)}</div>`;
}

function escaparHTML(texto) {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Generar el archivo prompts_db.js
const fileHeader = `// ==========================================
// 🧠 BÓVEDA DE PROMPTS AGIA 3.0 - REFINADO (101 CASOS)
// Versión: Texto Plano (Pre-Encriptación)
// Total Casos: ${convertedCases.length}
// Fuente: 100casosrefinado.txt
// ==========================================

const allCases = `;

const fileFooter = `;\n\nexport default allCases;`;

const outputContent = fileHeader + JSON.stringify(convertedCases, null, 2) + fileFooter;

// Escribir el nuevo archivo
fs.writeFileSync('prompts_db.js', outputContent, 'utf8');

console.log(`✅ Archivo prompts_db.js generado con ${convertedCases.length} casos`);
console.log(`⚠️  NOTA: Los prompts están SIN ENCRIPTAR. Ejecuta el siguiente paso para aplicar seguridad.`);
