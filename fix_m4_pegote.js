// Script para corregir el problema "Pegote" en Módulo 4
// El base_html NO debe tener el bloque verde - solo cada segment

const fs = require('fs');

let content = fs.readFileSync('resources_db.js', 'utf8');

// =============================================
// 1. CORREGIR glosario-m4v1: Quitar bloque verde del base_html
// =============================================
// Buscar el patrón del bloque verde en base_html de glosario-m4v1 y quitarlo
content = content.replace(
    /("glosario-m4v1"[\s\S]*?base_html:\s*`[\s\S]*?)<section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">\s*<h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda<\/h4>\s*<p class="text-white font-medium text-lg italic">"Un Arquitecto no construye todo de golpe\. Primero dise[ñn]a el plano, luego pone ladrillo a ladrillo\."<\/p>\s*<\/section>\s*<div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del M[óo]dulo 4 - Video 1\. AulaGenIA 2025\.<\/div>\s*<\/article>\s*`,/,
    '$1</article>\n    `,'
);

// =============================================
// 2. CORREGIR fuentes-autoridad-4: Quitar bloque verde del base_html  
// =============================================
content = content.replace(
    /("fuentes-autoridad-4"[\s\S]*?base_html:\s*`[\s\S]*?)<section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">\s*<h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M[áa]xima AulaGenIA<\/h4>\s*<p class="text-white font-medium text-lg italic">"El Arquitecto no solo dise[ñn]a los planos[\s\S]*?<\/p>\s*<\/section>\s*<div class="text-center text-xs text-slate-500 pt-2">Material exclusivo[\s\S]*?<\/div>\s*<\/article>\s*`,/,
    '$1</article>\n    `,'
);

// =============================================
// 3. CORREGIR mapa-arquitecto: Quitar bloque verde del base_html
// =============================================
content = content.replace(
    /("mapa-arquitecto"[\s\S]*?base_html:\s*`[\s\S]*?)<section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">\s*<h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M[áa]xima AulaGenIA<\/h4>\s*<p class="text-white font-medium text-lg italic">"No permitas que la IA se maree[\s\S]*?<\/p>\s*<\/section>\s*<div class="text-center text-xs text-slate-500 pt-2">Material oficial[\s\S]*?<\/div>\s*<\/article>\s*`,/,
    '$1</article>\n    `,'
);

// =============================================
// 4. CORREGIR glosario-m4v2: Quitar bloque verde del base_html
// =============================================
content = content.replace(
    /("glosario-m4v2"[\s\S]*?base_html:\s*`[\s\S]*?)<section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">\s*<h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">[¡!]?Felicitaciones[¡!]?<\/h4>\s*<p class="text-white font-medium text-lg italic">"Has completado el vocabulario[\s\S]*?<\/p>\s*<\/section>\s*<div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del M[óo]dulo 4[\s\S]*?<\/div>\s*<\/article>\s*`,/,
    '$1</article>\n    `,'
);

// =============================================
// 5. CORREGIR "¿Tarea o Proyecto?": module: 2 -> module: 4
// =============================================
content = content.replace(
    /("tarea-o-proyecto"[\s\S]*?)module: 2,/,
    '$1module: 4,'
);

// También corregir los pies de página que dicen "Módulo 2" -> "Módulo 4"
content = content.replace(
    /Checklist Complejidad para Negocios - Módulo 2\./g,
    'Checklist Complejidad para Negocios - Módulo 4.'
);
content = content.replace(
    /Checklist Complejidad para Profesionales - Módulo 2\./g,
    'Checklist Complejidad para Profesionales - Módulo 4.'
);
content = content.replace(
    /Checklist Complejidad para Gestión - Módulo 2\./g,
    'Checklist Complejidad para Gestión - Módulo 4.'
);
content = content.replace(
    /Checklist Complejidad para Educación - Módulo 2\./g,
    'Checklist Complejidad para Educación - Módulo 4.'
);

fs.writeFileSync('resources_db.js', content, 'utf8');

console.log('✅ Correcciones de pegote aplicadas');
console.log('✅ "¿Tarea o Proyecto?" movido a Módulo 4');
