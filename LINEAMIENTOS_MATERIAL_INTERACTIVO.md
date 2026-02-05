# 📋 LINEAMIENTOS PARA MATERIAL INTERACTIVO - AulaGenIA

Este documento define las reglas y estándares obligatorios para la creación y edición de materiales interactivos en `resources_db.js`.

---

## 1. ESTRUCTURA DE RECURSOS SEGMENTADOS

### Regla Principal: "Body-Integrated Segmentation"

El contenido segmentado debe **integrarse ANTES** del bloque verde de cierre, NO después.

#### ❌ INCORRECTO (Contenido Pegado / "Pegote"):
```
base_html: `
  <article>
    [contenido base]
    <section class="bg-gradient-to-r from-teal-500...">  <!-- Bloque verde -->
      <h4>Máxima AulaGenIA</h4>
      <p>"Frase inspiradora..."</p>
    </section>
  </article>
`,
segments: {
  "Negocios": `
    <section>
      [contenido segmentado aparece DESPUÉS del verde - MAL]
    </section>
  `
}
```

#### ✅ CORRECTO (Integración Coherente):
```
base_html: `
  <article>
    [contenido base común para todos los segmentos]
  </article>
`,
segments: {
  "Negocios": `
    <section>
      [contenido específico del segmento]
    </section>
    <section class="bg-gradient-to-r from-teal-500...">  <!-- Bloque verde -->
      <h4>Máxima AulaGenIA</h4>
      <p>"Frase inspiradora..."</p>
    </section>
    <div class="text-center text-xs...">Pie de página</div>
  </article>
  `
}
```

**Resumen**: El bloque verde SIEMPRE cierra el documento, y cada segment debe incluirlo al final.

---

## 2. TERMINOLOGÍA DE MARCA (Brand Terminology)

### Regla: "Máxima AulaGenIA" vs "Regla de Oro"

| ❌ PROHIBIDO | ✅ OBLIGATORIO |
|-------------|----------------|
| "La Regla de Oro" | "Máxima AulaGenIA" |
| "REGLA DE ORO" | "MÁXIMA AULAGENIA" |
| "Regla de oro" | "Máxima AulaGenIA" |

**Aplicación**: En TODOS los bloques verdes de cierre y cualquier referencia a frases inspiradoras del curso.

---

## 3. ESTILO VISUAL DE BLOQUES

### 3.1 Bloque Verde de Cierre (Obligatorio en cada segment)
```html
<section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
  <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
  <p class="text-white font-medium text-lg italic">"[Frase inspiradora del video]"</p>
</section>
```

### 3.2 Pie de Página (Obligatorio al final)
```html
<div class="text-center text-xs text-slate-500 pt-2">
  [Nombre del Recurso] para [Segmento] - Módulo [X]. AulaGenIA 2025.
</div>
</article>
```

### 3.3 Cajas de Prompts Copiables (Estilo actualizado)
```html
<div class="bg-[COLOR]-50 rounded-xl p-4 border border-[COLOR]-200">
  <h4 class="font-bold text-[COLOR]-800 mb-2">[Título]</h4>
  <div class="prompt-block bg-slate-800 rounded-lg p-3">
    <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-[COLOR]-500 hover:bg-[COLOR]-600 text-white px-2 py-1 rounded">
      <i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar
    </button>
    <p class="text-white text-sm italic">"[Texto del prompt]"</p>
  </div>
  <p class="text-xs text-[COLOR]-700 mt-2">[Explicación de cuándo usar]</p>
</div>
```

**Colores por categoría**:
- Reproche Táctico: `red`
- Presión de Éxito: `amber`
- Desafío Crítico: `blue`
- General: `teal` o `purple`

---

## 4. ADAPTACIÓN POR SEGMENTO ("Traje a Medida")

Cada recurso debe tener 4 segments con contenido adaptado:

| Segment | Enfoque | Ejemplos Típicos |
|---------|---------|------------------|
| **Negocios & Ventas** | Comercial, ventas, negociación | CEO, cliente, propuesta, cierre |
| **Legal & Profesional** | Técnico, normativo, documentos | Dictamen, norma, auditoría, certificación |
| **Gestión & Administración** | Operativo, equipos, procesos | Comunicado, reporte, equipo, gerencia |
| **Educación & Capacitación** | Pedagógico, aula, estudiantes | Clase, alumno, actividad, rúbrica |

### Reglas de Adaptación:
1. **Analogías diferentes** para cada segmento (no repetir)
2. **Prompts específicos** con contexto del segmento
3. **Vocabulario apropiado** al sector
4. **Casos de uso relevantes** para cada profesión

---

## 5. ESTRUCTURA DE CAMPOS

### Campos obligatorios en `meta`:
```javascript
meta: {
  type: "guide" | "glossary" | "worksheet" | "template" | "infographic" | "interactive",
  title: "Título del Recurso",
  subtitle: "Descripción breve - Módulo X: Video Y",
  icon: "nombre-icono-lucide",
  color: "color-tailwind",
  module: 0-4,
  pdfFallback: "gs://aulagenia.firebasestorage.app/[archivo].pdf"  // opcional
}
```

---

## 6. CHECKLIST DE REVISIÓN

Antes de hacer push, verificar:

- [ ] El bloque verde está **al final de cada segment**, no en `base_html`
- [ ] Dice "Máxima AulaGenIA", NO "Regla de Oro"
- [ ] Cada segment tiene pie de página con nombre correcto
- [ ] Los prompts usan cajas con colores (no fondo negro simple)
- [ ] El contenido está adaptado para cada segmento
- [ ] No hay contenido "pegado" después del bloque verde

---

## 7. RECURSOS PENDIENTES DE CORRECCIÓN

Los siguientes recursos aún pueden tener el problema de estructura:

### Módulo 1:
- `infografia-rol-copiloto` (el de la imagen - verificar)
- Otros recursos con segments

### Módulo 2:
- Verificar todos los recursos con segments

### Verificar con este comando:
```powershell
# Buscar recursos con bloque verde en base_html seguido de segments
Select-String -Path "resources_db.js" -Pattern "from-teal-500" -Context 0,5 | Where-Object { $_.Context.PostContext -match "segments:" }
```

---

## 8. HISTORIAL DE CORRECCIONES

### Ya corregidos ✅:
- `glosario-m3v3`
- `kit-primeros-auxilios`
- `mi-primer-prompt-wow`
- `plantilla-prompt-wow`
- `arte-persuasion`
- `codigo-frases-poder`
- `diccionario-verbos-poder`
- `instrucciones-alta-fidelidad`
- `guia-acceso-gemini-image`
- `guia-acceso-chatgpt`
- `guia-acceso-gemini`

### Pendientes por verificar:
- Recursos del Módulo 1 con segments
- Recursos del Módulo 2 con segments

---

*Documento generado: 2026-01-26*
*Última actualización: Sesión actual*
