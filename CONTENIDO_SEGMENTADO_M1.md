# Contenido Segmentado - Módulo 1: Fundamentos
> Propuesta de contenido específico por perfil profesional

---

## 📚 Recurso: `6-pilares-ia` (Hablando el Idioma de la IA)

### Concepto: EL PROMPT (La Instrucción)

| Perfil | Analogía Profesional | Prompt Copiable | Caso de Uso |
|--------|---------------------|-----------------|-------------|
| **Negocios & Ventas** | *"Es el Briefing que le das a tu agencia: si dices 'haz algo creativo', fallan. Si entregas la estrategia clara con KPIs, ejecutan perfecto."* | `Actúa como un consultor de ventas B2B con 15 años de experiencia. Mi empresa vende [PRODUCTO] a [AUDIENCIA]. Necesito un correo de prospección en frío de máximo 100 palabras que genere curiosidad sin sonar agresivo. Evita clichés como "solución integral".` | Vendedor que debe enviar 50 emails de prospección y necesita personalizar cada uno rápidamente |
| **Legal & Profesional** | *"Es la Instrucción Jurídica al tribunal: ambigüedad = error. La IA es literal, como un juez que interpreta la ley al pie de la letra."* | `Actúa como un abogado especialista en derecho laboral chileno. Analiza el siguiente extracto de un contrato de trabajo y lista las cláusulas que podrían ser impugnables según el Código del Trabajo. Cita los artículos relevantes. [PEGAR EXTRACTO]` | Abogado revisando contratos en masa y necesita identificar riesgos rápidamente |
| **Gestión & Administración** | *"Es el Procedimiento Operativo (SOP): si le dices 'ordena esto', lo hará mal. Si le das el proceso paso a paso, ejecuta perfecto."* | `Actúa como asistente administrativo experto. Tengo 20 facturas desordenadas. Necesito que crees una tabla Excel con columnas: Proveedor, RUT, Monto Neto, IVA, Total, Fecha. Formato: solo números sin símbolos. Empieza con los headers.` | Asistente que debe organizar documentos contables para cierre mensual |
| **Educación & Capacitación** | *"Es la Rúbrica de Evaluación que le entregas al estudiante: si la instrucción es vaga, la respuesta será vaga."* | `Actúa como un profesor de [ASIGNATURA] para estudiantes de [NIVEL]. Crea una actividad de 15 minutos que enseñe [CONCEPTO] usando aprendizaje activo. Incluye: objetivo, materiales, pasos y forma de evaluar. Evita actividades pasivas como "leer y responder".` | Docente preparando clase y necesita actividades innovadoras rápidamente |

---

### Concepto: LLM (El Cerebro)

| Perfil | Analogía Profesional | Prompt Copiable | Caso de Uso |
|--------|---------------------|-----------------|-------------|
| **Negocios & Ventas** | *"Es un Consultor Senior que ha leído todos los estudios de mercado del mundo, pero nunca ha visitado a un cliente real. Sabe mucho, pero no conoce TU negocio."* | `Eres un analista de mercado senior. Mi empresa está en el sector [INDUSTRIA]. Dame 5 tendencias globales 2024-2025 que podrían afectar mi negocio. Para cada una: describe la tendencia, el impacto potencial y una acción recomendada.` | Director comercial preparando presentación de estrategia anual |
| **Legal & Profesional** | *"Es un Paralegal rapidísimo que leyó toda la jurisprudencia existente, pero no tiene ética ni criterio profesional. Sabe buscar, tú decides qué sirve."* | `Actúa como asistente legal especializado. Necesito un resumen de los principios jurídicos que aplican a [CASO/SITUACIÓN] en la legislación chilena. Lista las normas relevantes y su interpretación mayoritaria en la doctrina.` | Abogado investigando jurisprudencia para un caso complejo |
| **Gestión & Administración** | *"Es un Asistente Ejecutivo incansable que redacta perfecto y trabaja 24/7, pero no conoce la cultura de tu empresa ni las preferencias de tu jefe."* | `Actúa como asistente ejecutivo senior. Redacta un correo formal para [DESTINATARIO] informando sobre [TEMA]. Tono: profesional pero cercano. Máximo 150 palabras. Mi nombre es [TU NOMBRE] y mi cargo es [CARGO].` | Secretaria ejecutiva con múltiples correos urgentes que redactar |
| **Educación & Capacitación** | *"Es un Bibliotecario que memorizó todos los libros de la biblioteca, pero nunca ha dado una clase ni conoce a tus estudiantes."* | `Eres un experto en pedagogía de [ASIGNATURA]. Tengo estudiantes de [NIVEL] con dificultades en [TEMA]. Sugiere 3 estrategias didácticas diferentes para abordar este contenido, explicando por qué funcionaría cada una.` | Profesor buscando nuevas metodologías para contenido difícil |

---

### Concepto: TOKENS (Las Piezas)

| Perfil | Analogía Profesional | Prompt Copiable | Caso de Uso |
|--------|---------------------|-----------------|-------------|
| **Negocios & Ventas** | *"Es tu Presupuesto de Campaña: cada sílaba cuesta. Si gastas todo en la introducción, no queda presupuesto para el cierre de venta."* | `Necesito que resumas el siguiente texto en exactamente 50 palabras, manteniendo los 3 puntos clave de valor para el cliente. [PEGAR TEXTO]` | Ejecutivo que necesita condensar propuesta de 10 páginas en un pitch de 2 minutos |
| **Legal & Profesional** | *"Es como las Fojas de un expediente judicial: tienes un límite físico por página. Si tu demanda es muy larga, el tribunal no la lee completa."* | `Resume el siguiente documento legal en máximo 200 palabras. Estructura: (1) Partes involucradas, (2) Hechos relevantes, (3) Pretensiones principales, (4) Fundamentos de derecho clave. [PEGAR DOCUMENTO]` | Abogado que debe revisar expediente de 500 páginas antes de audiencia |
| **Gestión & Administración** | *"Es un Post-it: no puedes escribir la historia de tu vida ahí. Usa el espacio para lo esencial."* | `Condensa las siguientes 10 tareas en una lista de 5 prioridades máximas para hoy. Criterio: impacto + urgencia. Formato: bullet points simples. [LISTAR TAREAS]` | Asistente organizando agenda del ejecutivo con múltiples pendientes |
| **Educación & Capacitación** | *"Es el Límite de Palabras de un ensayo: si gastas todo en la introducción, no hay desarrollo ni conclusión."* | `Tengo 45 minutos de clase. Necesito un plan de lección sobre [TEMA] con: 5 min intro, 25 min desarrollo, 10 min cierre, 5 min evaluación. Solo dame los puntos clave de cada sección, no el contenido completo.` | Docente planificando clase con tiempo limitado |

---

### Concepto: CONTEXTO (La Memoria / Ventana de Contexto)

| Perfil | Analogía Profesional | Prompt Copiable | Caso de Uso |
|--------|---------------------|-----------------|-------------|
| **Negocios & Ventas** | *"Es una Sala de Reuniones con capacidad limitada: si metes a 50 personas hablando distintos temas a la vez, nadie entiende nada."* | `Antes de continuar, déjame darte contexto relevante para esta conversación: Mi empresa es [NOMBRE], vendemos [PRODUCTO/SERVICIO], nuestro cliente ideal es [PERFIL], y el problema que resolvemos es [PROBLEMA]. Tenlo en cuenta para todas mis preguntas siguientes.` | Vendedor iniciando sesión de trabajo con IA para múltiples tareas comerciales |
| **Legal & Profesional** | *"Es el Expediente Judicial: si es demasiado grueso, el asistente olvida la demanda inicial cuando llega a las pruebas."* | `Vamos a trabajar en el caso [NOMBRE CASO]. Contexto esencial: (1) Tipo de causa: [MATERIA], (2) Cliente: [DEMANDANTE/DEMANDADO], (3) Contraparte: [DATOS], (4) Estado procesal: [ETAPA]. Mantén este contexto para toda nuestra conversación.` | Abogado trabajando un caso complejo en múltiples sesiones con IA |
| **Gestión & Administración** | *"Es tu Bandeja de Entrada del correo: si intentas leer 500 correos a la vez, colapsas. Procesa de a grupos."* | `Voy a darte información sobre nuestra empresa para que me ayudes mejor: Rubro: [SECTOR], Tamaño: [N° empleados], Mi rol: [CARGO], Mis principales responsabilidades: [LISTA]. Recuerda esto para todas mis consultas.` | Asistente configurando un "asistente personal" de IA para tareas recurrentes |
| **Educación & Capacitación** | *"Es la Pizarra del aula: si la llenas de contenido sin borrar, los estudiantes pierden el hilo de la clase."* | `Enseño [ASIGNATURA] a estudiantes de [NIVEL/EDAD]. Mi estilo es [TRADICIONAL/INNOVADOR/MIXTO]. Prefiero actividades [INDIVIDUALES/GRUPALES]. Mantén este contexto de mi perfil docente en todas tus sugerencias.` | Profesor personalizando las respuestas de la IA a su estilo pedagógico |

---

### Concepto: MULTIMODALIDAD (Los Sentidos)

| Perfil | Analogía Profesional | Prompt Copiable | Caso de Uso |
|--------|---------------------|-----------------|-------------|
| **Negocios & Ventas** | *"Tu analista ahora tiene Ojos: le muestras una foto de la góndola vacía y te dice qué productos reponer. Le subes un logo y te crea variaciones."* | `[SUBIR IMAGEN DE PRODUCTO] Analiza esta imagen de nuestro producto. Identifica: (1) Puntos fuertes visuales, (2) Áreas de mejora en packaging/presentación, (3) Cómo se compara con estándares de la industria.` | Gerente de producto evaluando packaging antes de lanzamiento |
| **Legal & Profesional** | *"Ahora puedes subir la Foto de un Contrato firmado a mano y la IA te alerta de las cláusulas riesgosas que un scanner normal no detectaría."* | `[SUBIR FOTO DE DOCUMENTO] Este es un documento legal escrito a mano/escaneado. (1) Transcribe el contenido textual, (2) Identifica fechas, nombres y montos, (3) Señala cualquier parte ilegible o ambigua.` | Abogado procesando documentos antiguos o manuscritos |
| **Gestión & Administración** | *"Le subes la Foto de una Factura arrugada y la pasa a Excel automáticamente. Adiós al tipeo manual."* | `[SUBIR FOTO DE FACTURA] Extrae de esta factura: Proveedor, RUT, Número de factura, Fecha, Monto neto, IVA, Total. Formato: tabla limpia lista para copiar a Excel.` | Contador digitalizando facturas físicas para contabilidad |
| **Educación & Capacitación** | *"La IA tiene ojos: subes la Foto de un Ejercicio resuelto a mano por un estudiante y te ayuda a identificar errores y dar feedback."* | `[SUBIR FOTO DE EJERCICIO] Este es un ejercicio de [ASIGNATURA] resuelto por un estudiante de [NIVEL]. (1) ¿Está correcto? (2) Si hay errores, identifícalos y explica el error conceptual. (3) Sugiere cómo retroalimentar al estudiante.` | Profesor corrigiendo pruebas escritas a mano |

---

### Concepto: ALUCINACIÓN (El Error)

| Perfil | Analogía Profesional | Prompt Copiable | Caso de Uso |
|--------|---------------------|-----------------|-------------|
| **Negocios & Ventas** | *"Es un Vendedor Desesperado que inventa cifras de crecimiento solo para que el directorio le sonría. Suena convincente, pero miente."* | `Dame estadísticas sobre [TEMA/INDUSTRIA]. IMPORTANTE: Para cada dato, indica si es un hecho verificable con fecha/fuente, o si es una estimación tuya. Si no tienes datos confiables, dilo explícitamente.` | Director comercial preparando presentación y necesita datos verificables |
| **Legal & Profesional** | *"Es un Abogado Junior citando una ley derogada hace 10 años con total seguridad. Suena experto, pero el caso se pierde."* | `Necesito información sobre [NORMA/LEY]. Para cada artículo o principio que cites: (1) Indica la fuente exacta, (2) Confirma si está vigente a 2024, (3) Si no estás 100% seguro, adviértelo.` | Abogado verificando información legal antes de presentar escrito |
| **Gestión & Administración** | *"Es un Pasante que rellena una celda vacía de Excel con un número inventado para que el reporte se vea completo."* | `Necesito que completes esta información: [DATOS]. Si algún dato no lo tienes o no estás seguro, escribe "VERIFICAR" en lugar de inventar. Prefiero espacios vacíos a datos falsos.` | Analista preparando reporte que será revisado por gerencia |
| **Educación & Capacitación** | *"Es ese Alumno que inventa una respuesta en el examen con total seguridad, esperando que el profesor no se dé cuenta."* | `Dame información sobre [TEMA EDUCATIVO]. Para cada afirmación: indica si es un hecho académico establecido, una teoría en debate, o tu interpretación. Si algo es controversial, menciona las diferentes posturas.` | Docente verificando contenido antes de enseñarlo |

---

## 📚 Próximos Recursos a Segmentar (Módulo 1)

- [ ] `mitos-derribados-ia` - Desarmando los Mitos de la IA
- [ ] `infografia-rol-copiloto` - Infografía: El Rol del Copiloto
- [ ] `dentro-copiloto-1` - ¿Qué hay dentro del Copiloto?
- [ ] `listado-verificacion-m1` - Listado de Verificación
- [ ] `glosario-m1v1` - Glosario de Iniciación
- [ ] `glosario-m1v2` - Glosario de Conceptos Generativos
- [ ] `glosario-m1v3` - Glosario de Ingeniería de Instrucciones

---

## ✅ Formato de Implementación en resources_db.js

```javascript
"6-pilares-ia": {
  meta: { ... },
  base_html: `...contenido común...`,
  segments: {
    "Negocios & Ventas": `
      <div class="segment-specific">
        <h4>Para tu sector: Negocios</h4>
        <div class="analogy">...</div>
        <div class="prompt-block">...</div>
        <div class="use-case">...</div>
      </div>
    `,
    "Legal & Profesional": `...`,
    "Gestión & Administración": `...`,
    "Educación & Capacitación": `...`
  }
}
```

---

*Documento generado por el equipo AulaGenIA - Diseño Instruccional*
*Fecha: 2025-01-25*
