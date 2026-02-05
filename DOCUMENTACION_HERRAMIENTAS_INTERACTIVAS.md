# 📚 Documentación: Sistema de Herramientas Interactivas AulaGenIA

> **Versión:** 2.1  
> **Última actualización:** Enero 2025  
> **Autor:** Equipo AulaGenIA

---

## 1. Visión General

El sistema de herramientas interactivas de AulaGenIA permite mostrar contenido educativo dinámico dentro del campus virtual, adaptado al perfil profesional del usuario (Negocios & Ventas, Legal & Profesional, Gestión & Adm., Educación).

### Componentes Principales

```
┌─────────────────────────────────────────────────────────────┐
│                     CAMPUS (index.html)                      │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │              campus-curso-ia-v2.js                       │ │
│  │  - Lógica de navegación del curso                       │ │
│  │  - Renderizado de lecciones y módulos                   │ │
│  │  - Visor de recursos interactivos (inline)              │ │
│  └─────────────────────────────────────────────────────────┘ │
│                            ▼                                 │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                  resources_db.js                         │ │
│  │  - Base de datos de todos los recursos                  │ │
│  │  - HTML base + segmentos por perfil                     │ │
│  │  - Metadatos (tipo, módulo, color, ícono)               │ │
│  └─────────────────────────────────────────────────────────┘ │
│                            ▼                                 │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │            Archivos HTML Externos (opcionales)           │ │
│  │  - glosario-interactivo.html                            │ │
│  │  - maestro-prompts-app.html                             │ │
│  │  - (otros materiales interactivos standalone)           │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Arquitectura de Archivos

### 2.1 Archivos Core

| Archivo | Propósito |
|---------|-----------|
| `campus-curso-ia-v2.js` | Lógica principal del campus, navegación, visor de recursos |
| `resources_db.js` | Base de datos de recursos con HTML y segmentación |
| `index.html` | Página principal del campus |

### 2.2 Archivos de Materiales Interactivos Standalone

| Archivo | Módulo | Descripción |
|---------|--------|-------------|
| `glosario-interactivo.html` | M1 | Glosario gamificado con 6 pilares y simulador de casos |
| `maestro-prompts-app.html` | M3 | (si existe) Herramienta de construcción de prompts |

---

## 3. Estructura de `resources_db.js`

### 3.1 Anatomía de un Recurso

```javascript
"nombre-del-recurso": {
  meta: {
    type: "guide" | "glossary" | "infographic" | "interactive" | "quiz",
    title: "Título visible",
    subtitle: "Descripción corta",
    icon: "nombre-lucide-icon",      // Ej: "book", "layers", "gamepad-2"
    color: "teal" | "emerald" | "amber" | "indigo" | "purple" | "blue" | "cyan" | "red",
    module: 1,                        // Número de módulo (0=onboarding, 1-4)
    pdfFallback: "gs://..."           // Opcional: PDF si no carga el recurso
  },
  base_html: `
    <article class="space-y-6">
      <!-- HTML base que se muestra a TODOS los usuarios -->
    </article>
  `,
  segments: {
    "Negocios & Ventas": `<div><!-- Contenido extra para este perfil --></div>`,
    "Legal & Profesional": `<div><!-- Contenido extra para este perfil --></div>`,
    "Gestión & Adm.": `<div><!-- Contenido extra para este perfil --></div>`,
    "Educación": `<div><!-- Contenido extra para este perfil --></div>`
  }
}
```

### 3.2 Tipos de Recursos

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `guide` | Guía o manual extenso | "El Arte de la Persuasión" |
| `glossary` | Glosario de términos | "Glosario M1-V1" |
| `infographic` | Infografía visual | "Receta WOW" |
| `interactive` | Material HTML embebido | "Glosario Interactivo" |
| `quiz` | Test o evaluación | "Test de Diagnóstico" |

### 3.3 Colores Disponibles

```javascript
const colors = {
  teal:    { bg: 'bg-teal-100',    border: 'border-teal-400',    icon: 'text-teal-600' },
  emerald: { bg: 'bg-emerald-100', border: 'border-emerald-400', icon: 'text-emerald-600' },
  amber:   { bg: 'bg-amber-100',   border: 'border-amber-400',   icon: 'text-amber-600' },
  indigo:  { bg: 'bg-indigo-100',  border: 'border-indigo-400',  icon: 'text-indigo-600' },
  purple:  { bg: 'bg-purple-100',  border: 'border-purple-400',  icon: 'text-purple-600' },
  blue:    { bg: 'bg-blue-100',    border: 'border-blue-400',    icon: 'text-blue-600' },
  cyan:    { bg: 'bg-cyan-100',    border: 'border-cyan-400',    icon: 'text-cyan-600' },
  red:     { bg: 'bg-red-100',     border: 'border-red-400',     icon: 'text-red-600' }
};
```

---

## 4. Flujo de Renderizado

### 4.1 Flujo Completo

```
1. Usuario navega a un módulo
         ▼
2. campus-curso-ia-v2.js llama a renderInteractiveResources(moduleIndex)
         ▼
3. Se filtran recursos de resources_db.js por meta.module === moduleIndex
         ▼
4. Se generan botones para cada recurso
         ▼
5. Usuario hace clic en un recurso
         ▼
6. openResourceViewer(resourceId) obtiene el perfil del localStorage
         ▼
7. getRenderedResource(resourceId, userProfile) combina:
   - base_html (contenido para todos)
   - segments[userProfile] (contenido específico del perfil)
         ▼
8. El HTML combinado se inyecta en el visor inline
         ▼
9. Se inicializan íconos Lucide: lucide.createIcons()
```

### 4.2 Mapeo de Recursos a Lecciones

En `campus-curso-ia-v2.js` existe un `slugMap` que conecta nombres de recursos en lecciones con IDs de recursos:

```javascript
const slugMap = {
  // MÓDULO 1
  'Glosario 1.1': 'glosario-m1v1',
  'Guía: 6 Pilares de la IA': '6-pilares-ia',
  '🎮 Glosario Interactivo Aplicado': 'glosario-interactivo-aplicado',
  // ... más mapeos
};
```

---

## 5. Cómo Agregar un Nuevo Material Interactivo

### 5.1 Opción A: Recurso Inline (HTML dentro de resources_db.js)

**Cuándo usar:** Para contenido estático o semi-dinámico que no requiere JavaScript complejo.

```javascript
// En resources_db.js, agregar:
"mi-nuevo-recurso": {
  meta: {
    type: "guide",
    title: "Mi Nuevo Recurso",
    subtitle: "Descripción breve",
    icon: "star",
    color: "purple",
    module: 2
  },
  base_html: `
    <article class="space-y-6">
      <section class="bg-purple-50 rounded-xl p-6">
        <h2 class="text-xl font-bold">Título</h2>
        <p>Contenido...</p>
      </section>
    </article>
  `,
  segments: {}
}
```

### 5.2 Opción B: Recurso Embebido (iframe a HTML externo)

**Cuándo usar:** Para aplicaciones interactivas complejas con JavaScript propio (gamificación, simuladores, etc.)

**Paso 1:** Crear el archivo HTML standalone

```html
<!-- mi-app-interactiva.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi App Interactiva</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Otros recursos... -->
</head>
<body>
  <!-- Tu aplicación completa aquí -->
  <script>
    // Tu lógica JavaScript
  </script>
</body>
</html>
```

**Paso 2:** Agregar entrada en resources_db.js

```javascript
"mi-app-interactiva": {
  meta: {
    type: "interactive",
    title: "🎮 Mi App Interactiva",
    subtitle: "Descripción de la experiencia",
    icon: "gamepad-2",
    color: "cyan",
    module: 2
  },
  base_html: `
    <div class="rounded-xl overflow-hidden border-2 border-slate-200 shadow-lg" style="height: 750px;">
      <iframe src="mi-app-interactiva.html" 
              style="width: 100%; height: 100%; border: none;" 
              allow="fullscreen"
              title="Mi App Interactiva">
      </iframe>
    </div>
  `,
  segments: {}
}
```

**Paso 3:** Agregar al slugMap en campus-curso-ia-v2.js

```javascript
// Buscar el slugMap y agregar:
'🎮 Mi App Interactiva': 'mi-app-interactiva',
```

---

## 6. Segmentación por Perfil Profesional

### 6.1 Perfiles Disponibles

| Perfil | Clave en localStorage | Descripción |
|--------|----------------------|-------------|
| Negocios & Ventas | `"Negocios & Ventas"` | Marketing, consultoría, ventas |
| Legal & Profesional | `"Legal & Profesional"` | Abogados, auditores, contadores |
| Gestión & Adm. | `"Gestión & Adm."` | Operaciones, RRHH, administración |
| Educación | `"Educación"` | Docentes, capacitadores |

### 6.2 Cómo se Obtiene el Perfil

```javascript
const userProfile = localStorage.getItem('userSegment') || 'Negocios & Ventas';
```

### 6.3 Ejemplo de Segmentación

```javascript
"mi-recurso": {
  base_html: `<p>Esto lo ven TODOS los usuarios.</p>`,
  segments: {
    "Negocios & Ventas": `
      <div class="bg-blue-50 p-4 rounded-lg">
        <h4>Para Vendedores:</h4>
        <p>Usa este concepto para cerrar más ventas...</p>
        <div class="prompt-block">
          <button onclick="copyResourcePrompt(this)">Copiar</button>
          <p>Prompt específico para ventas...</p>
        </div>
      </div>
    `,
    "Legal & Profesional": `
      <div class="bg-amber-50 p-4 rounded-lg">
        <h4>Para Profesionales Legales:</h4>
        <p>Aplica este concepto en contratos...</p>
      </div>
    `
  }
}
```

---

## 7. Funciones Clave en campus-curso-ia-v2.js

### 7.1 Funciones Principales

| Función | Propósito |
|---------|-----------|
| `getRenderedResource(resourceId, userProfile)` | Combina base_html + segment del perfil |
| `openResourceViewer(resourceId)` | Abre el visor inline con el recurso |
| `closeResourceViewer()` | Cierra el visor y vuelve al listado |
| `renderInteractiveResources(moduleIndex)` | Renderiza botones de recursos del módulo |
| `copyResourcePrompt(button)` | Copia el texto del prompt al clipboard |
| `getResourceSlug(resourceName)` | Mapea nombre de recurso a su ID |

### 7.2 Botón Copiar Prompt

Para agregar un prompt copiable en un recurso:

```html
<div class="prompt-block bg-slate-800 rounded-lg p-3">
  <button onclick="copyResourcePrompt(this)" 
          class="float-right bg-teal-500 text-white text-xs px-2 py-1 rounded">
    Copiar
  </button>
  <p class="text-white text-sm">
    Tu prompt aquí...
  </p>
</div>
```

---

## 8. Estilo y Diseño

### 8.1 Clases Tailwind Comunes

```html
<!-- Sección con gradiente (cabecera de recurso) -->
<section class="bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl p-6 border border-purple-200">

<!-- Tarjeta blanca con hover -->
<div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">

<!-- Bloque de código/prompt -->
<div class="bg-slate-800 rounded-lg p-3">
  <p class="text-white text-sm italic">Texto del prompt...</p>
</div>

<!-- Sección de cierre (máxima/regla de oro) -->
<section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
  <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
  <p class="text-white font-medium text-lg italic">"Tu frase aquí..."</p>
</section>
```

### 8.2 Íconos (Lucide)

Los íconos usan la librería Lucide. Después de inyectar HTML, siempre llamar:

```javascript
if (window.lucide) lucide.createIcons();
```

Íconos comunes: `book`, `layers`, `sparkles`, `gamepad-2`, `key`, `life-buoy`, `map`, `terminal-square`, `brain-circuit`, `puzzle`, `eye`, `ghost`

---

## 9. Ejemplo Completo: Glosario Interactivo Aplicado

### Flujo del Material

1. **Usuario** navega al Módulo 1
2. Ve el botón "🎮 Glosario Interactivo Aplicado" en Recursos Interactivos
3. Hace clic → se abre el visor con un iframe
4. El iframe carga `glosario-interactivo.html`
5. El HTML standalone tiene:
   - Selección de área profesional
   - 6 tarjetas de pilares con analogías
   - Simulador de casos con feedback
   - Efecto confetti al acertar

### Estructura del Archivo HTML Standalone

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- CDNs: Tailwind, Lucide, Confetti, Google Fonts -->
  <style>
    /* Estilos personalizados: aurora, glass, animaciones */
  </style>
</head>
<body>
  <header><!-- Logo, breadcrumb --></header>
  <main id="app"><!-- Contenido dinámico --></main>
  <footer><!-- Copyright --></footer>
  
  <script>
    // 1. DEFINICIONES (generalConcepts, contentDB por segmento)
    // 2. ESTADO (step, selectedSegment, activeCard, etc.)
    // 3. RENDER (función que inyecta HTML según estado)
    // 4. VISTAS (renderActivation, renderSegmentation, renderGlossary, renderSimulator, renderConclusion)
    // 5. FUNCIONES DE CONTROL (nextStep, selectSegment, evaluateStrategy, etc.)
  </script>
</body>
</html>
```

---

## 10. Troubleshooting

| Problema | Solución |
|----------|----------|
| El recurso no aparece en el módulo | Verificar que `meta.module` coincida con el índice del módulo |
| El segmento no se muestra | Verificar que la clave del segmento coincida exactamente (ej: `"Negocios & Ventas"` no `"Negocios y Ventas"`) |
| Los íconos no cargan | Llamar `lucide.createIcons()` después de inyectar HTML |
| El iframe no carga | Verificar que el archivo HTML esté en la raíz del proyecto |
| El botón copiar no funciona | Asegurar que el botón esté dentro de un `.prompt-block` con un `<p>` |

---

## 11. Resumen de Archivos por Módulo

| Módulo | Recursos Principales | Tipo |
|--------|---------------------|------|
| 0 (Onboarding) | guia-acceso-chatgpt, guia-acceso-gemini, guia-acceso-grok | guide |
| 1 | 6-pilares-ia, glosario-m1v1/v2/v3, infografia-rol-copiloto, **glosario-interactivo-aplicado** | guide, glossary, interactive |
| 2 | guia-maestra-herramientas, caminos-expertos, test-diagnostico-ruta | guide, quiz |
| 3 | infografia-receta-wow, plantilla-prompt-wow, arte-persuasion, codigo-frases-poder, kit-primeros-auxilios | infographic, guide |
| 4 | mapa-arquitecto, caso-practico-0-10k, glosario-m4v1/v2 | guide, glossary |

---

**¿Preguntas?** Contactar al equipo de desarrollo de AulaGenIA.
