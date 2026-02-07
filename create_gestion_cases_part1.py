"""
Paso 1: Remover segmento Gestión de casos duplicados
Paso 2: Crear 15 casos nuevos con estructura completa
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Paso 1: Remover Gestión de duplicados
duplicados = [67, 83, 84, 92]
for c in data:
    if c['id'] in duplicados:
        ps = c.get('prioridadSegmento', {})
        cs = c.get('categoriaSegmento', {})
        # Remover Gestión
        if 'Gestión & Adm.' in ps:
            del ps['Gestión & Adm.']
            print(f"Removido Gestión de ID {c['id']}: {c['title'][:40]}")
        if 'Gestión & Adm.' in cs:
            del cs['Gestión & Adm.']

# Obtener siguiente ID disponible
max_id = max(c['id'] for c in data)
next_id = max_id + 1
print(f"\nSiguiente ID disponible: {next_id}")

# Paso 2: Crear 15 casos nuevos
nuevos_casos = [
    {
        "id": next_id,
        "title": "Bandeja Email Zero: Procesa 100 Correos en 30 Min",
        "category": "Productividad",
        "description": "Sistema para mantener inbox en cero sin perder correos importantes",
        "problem": "Tu bandeja tiene 2.847 correos sin leer. Pierdes oportunidades enterradas y vives con ansiedad. Necesitas un sistema, no más fuerza de voluntad.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Productividad"},
        "agiaPromptTagged": "ROL:\\nEres un Consultor de Productividad Personal especializado en gestión de email para ejecutivos y dueños de empresa.\\n\\nCONTEXTO:\\nTipo de correos: [Ej: 60% internos, 30% clientes, 10% proveedores]\\nVolumen diario: [Ej: 80 correos nuevos/día]\\nHerramienta: [Gmail/Outlook]\\n\\nMETA:\\nCrea un sistema de procesamiento de email que permita inbox zero en 30 minutos diarios.\\n\\nFORMATO:\\n1. **Reglas de Clasificación Automática** (filtros)\\n2. **Bloques de Tiempo** (cuándo revisar)\\n3. **Protocolo de Respuesta Rápida** (templates)\\n4. **Sistema de Seguimiento** (pendientes)\\n\\nRESTRICCIONES:\\n- Máximo 3 revisiones de email al día\\n- Toda respuesta en menos de 5 líneas\\n- Delegar todo lo que tome más de 2 minutos responder",
        "badPrompt": "Dame tips para organizar mi correo",
        "badResponsePreview": "Aquí tienes algunos tips: 1) Revisa tu correo regularmente, 2) Usa carpetas, 3) Responde rápido...",
        "badResponseAnalysis": "Tips genéricos sin sistema concreto. No resuelve el problema de fondo: falta de proceso.",
        "previewResponse": "**SISTEMA EMAIL ZERO - 30 MIN/DÍA**\\n\\n**1. FILTROS AUTOMÁTICOS:**\\n- @miempresa.cl → Carpeta TEAM (revisar 2x/día)\\n- Facturas/Boletas → Carpeta CONTABILIDAD (1x/semana)\\n- Newsletter → Carpeta LEER DESPUÉS (viernes 17:00)\\n\\n**2. BLOQUES DE REVISIÓN:**\\n- 09:00 (15 min) - Urgentes de ayer noche\\n- 14:00 (10 min) - Seguimiento mañana\\n- 17:30 (5 min) - Cierre del día\\n\\n**3. TEMPLATES RÁPIDOS:**\\n- ACK: 'Recibido. Te confirmo antes de [fecha].'\\n- DELEGAR: 'CC a [nombre] quien te ayudará con esto.'\\n- NO: 'Gracias por pensar en mí. En este momento no puedo.'",
        "verticalMatrix": [
            {"rubro": "Consultoría", "contexto": "Múltiples clientes", "ajuste": "Prioriza por valor de cliente, no por orden de llegada"},
            {"rubro": "Retail", "contexto": "Reclamos y pedidos", "ajuste": "Filtro automático por 'reclamo' → respuesta en 2h"},
            {"rubro": "Servicios B2B", "contexto": "Propuestas y cotizaciones", "ajuste": "Todo con '$' en asunto → Carpeta DINERO → revisar primero"},
            {"rubro": "Startups", "contexto": "Inversionistas", "ajuste": "Dominio de VC conocidos → Notificación push inmediata"},
            {"rubro": "Agencias", "contexto": "Múltiples proyectos", "ajuste": "Prefijo [PROYECTO] en asunto obligatorio para filtrar"}
        ],
        "fineTuning": [
            "Filtros: 'Dame 5 reglas de filtrado para Gmail basadas en mi contexto'",
            "Templates: 'Crea 10 respuestas predefinidas para mis correos más frecuentes'",
            "Delegación: 'Identifica qué correos debería delegar y a quién'"
        ],
        "metadata": {"score": 94, "technique": "Inbox Zero + Time Blocking"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 1,
        "title": "Automatiza Reportes Semanales: De 4 Horas a 15 Min",
        "category": "Productividad",
        "description": "Plantillas y flujos para generar reportes recurrentes automáticamente",
        "problem": "Cada lunes gastas 4 horas armando el mismo reporte de siempre. Copias, pegas, formulas rotas. Tiempo que podrías usar en decisiones, no en PowerPoints.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Productividad"},
        "agiaPromptTagged": "ROL:\\nEres un Especialista en Automatización de Reportería empresarial.\\n\\nCONTEXTO:\\nTipo de reporte: [Ej: Ventas semanales por vendedor]\\nFuentes de datos: [Ej: Excel exportado de CRM + Banco]\\nDestinatarios: [Ej: Gerente General, 3 jefes de área]\\n\\nMETA:\\nDiseña un sistema de reportería automatizada que reduzca el tiempo de 4 horas a 15 minutos.\\n\\nFORMATO:\\n1. **Template Maestro** (estructura fija)\\n2. **Fuentes de Datos** (qué se conecta dónde)\\n3. **Automatización** (fórmulas/scripts)\\n4. **Distribución** (envío automático)\\n\\nRESTRICCIONES:\\n- Debe funcionar con herramientas que ya tenga (Excel, Sheets)\\n- Máximo 3 clics para actualizar\\n- Incluir validación de datos para evitar errores",
        "badPrompt": "Haz un template de reporte semanal",
        "badResponsePreview": "Aquí tienes un template básico con columnas para fecha, descripción y monto...",
        "badResponseAnalysis": "Template estático que no resuelve el problema de automatización ni ahorra tiempo real.",
        "previewResponse": "**SISTEMA DE REPORTERÍA AUTOMATIZADA**\\n\\n**1. TEMPLATE MAESTRO (Google Sheets):**\\n- Pestaña DATOS: Importa automático desde CRM (=IMPORTRANGE)\\n- Pestaña CÁLCULOS: Fórmulas que se actualizan solas\\n- Pestaña REPORTE: Visualización lista para presentar\\n\\n**2. FLUJO DE ACTUALIZACIÓN:**\\n```\\nLunes 08:00 → Script exporta CRM\\nLunes 08:05 → Sheet actualiza automático\\nLunes 08:10 → Email sale a destinatarios\\n```\\n\\n**3. VALIDACIONES:**\\n- Si ventas < semana anterior → Celda ROJA\\n- Si faltan datos → Alerta por email",
        "verticalMatrix": [
            {"rubro": "Ventas", "contexto": "Pipeline semanal", "ajuste": "Incluye gráfico de embudo con conversión por etapa"},
            {"rubro": "Operaciones", "contexto": "KPIs de producción", "ajuste": "Semáforo visual: verde/amarillo/rojo por métrica"},
            {"rubro": "Finanzas", "contexto": "Flujo de caja", "ajuste": "Proyección rolling de 4 semanas"},
            {"rubro": "RRHH", "contexto": "Asistencia/licencias", "ajuste": "Alertas automáticas si ausencias > 10%"},
            {"rubro": "Marketing", "contexto": "Métricas de campaña", "ajuste": "Comparativo vs semana anterior con %"}
        ],
        "fineTuning": [
            "Fórmulas: 'Dame las 10 fórmulas de Excel/Sheets más útiles para reportes'",
            "Scripts: 'Crea un script de Google Apps Script para envío automático'",
            "Visualización: 'Diseña un dashboard de 1 página con los KPIs clave'"
        ],
        "metadata": {"score": 95, "technique": "Report Automation"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 2,
        "title": "Matriz Eisenhower IA: Prioriza 50 Tareas en 5 Min",
        "category": "Productividad",
        "description": "Sistema de priorización inteligente basado en urgencia e importancia",
        "problem": "Tu lista de pendientes tiene 50 items y no sabes por dónde empezar. Todo parece urgente. Terminas apagando incendios y lo importante nunca avanza.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Productividad"},
        "agiaPromptTagged": "ROL:\\nEres un Coach de Productividad Ejecutiva especializado en priorización estratégica.\\n\\nCONTEXTO:\\nLista de tareas: [Pega tu lista de 50 pendientes]\\nRol: [Ej: Gerente de Operaciones]\\nMeta trimestral: [Ej: Reducir costos 15%]\\n\\nMETA:\\nClasifica todas las tareas en la Matriz Eisenhower y crea un plan de acción.\\n\\nFORMATO:\\n| Cuadrante | Tareas | Acción |\\n|-----------|--------|--------|\\n| URGENTE + IMPORTANTE | X tareas | HACER HOY |\\n| IMPORTANTE no urgente | X tareas | AGENDAR |\\n| URGENTE no importante | X tareas | DELEGAR |\\n| Ni urgente ni importante | X tareas | ELIMINAR |\\n\\nRESTRICCIONES:\\n- Máximo 3 tareas en 'Hacer Hoy'\\n- Todo lo delegable debe tener nombre asignado\\n- Si no aporta a la meta trimestral → Cuadrante 4",
        "badPrompt": "Ayúdame a organizar mis tareas",
        "badResponsePreview": "Claro, te sugiero hacer una lista y ordenarla por prioridad...",
        "badResponseAnalysis": "Consejo genérico sin metodología ni criterio de clasificación.",
        "previewResponse": "**MATRIZ EISENHOWER - TUS 50 TAREAS**\\n\\n**CUADRANTE 1: HACER HOY (3)**\\n1. Reunión con banco (vence crédito)\\n2. Responder oferta de cliente grande\\n3. Firmar contrato proveedor\\n\\n**CUADRANTE 2: AGENDAR (12)**\\n- Revisar estructura de costos → Miércoles 10:00\\n- Entrevistar candidato senior → Jueves 15:00\\n- Planificar Q2 → Viernes bloque 3h\\n\\n**CUADRANTE 3: DELEGAR (18)**\\n- Actualizar web → María (Marketing)\\n- Cotizar insumos → Pedro (Compras)\\n- Preparar informe mensual → Ana (Asistente)\\n\\n**CUADRANTE 4: ELIMINAR (17)**\\n- Revisar redes sociales de competencia\\n- Leer newsletter acumulados\\n- Reorganizar archivos antiguos",
        "verticalMatrix": [
            {"rubro": "Gerencia General", "contexto": "Múltiples áreas", "ajuste": "Urgente = impacto en caja. Importante = alineado a estrategia anual"},
            {"rubro": "Ventas", "contexto": "Pipeline activo", "ajuste": "Urgente = cierre este mes. Importante = cliente >$10M"},
            {"rubro": "Operaciones", "contexto": "Producción diaria", "ajuste": "Urgente = afecta entrega. Importante = reduce costo"},
            {"rubro": "RRHH", "contexto": "Gestión de personas", "ajuste": "Urgente = legal/vencimiento. Importante = retención talento"},
            {"rubro": "Finanzas", "contexto": "Cierre mensual", "ajuste": "Urgente = vencimiento tributario. Importante = optimización fiscal"}
        ],
        "fineTuning": [
            "Delegación: 'Para cada tarea delegable, sugiere a quién y cómo comunicarlo'",
            "Eliminación: 'Convénceme de por qué puedo eliminar cada tarea del cuadrante 4'",
            "Bloqueo: 'Crea bloques de tiempo en mi calendario para las tareas del cuadrante 2'"
        ],
        "metadata": {"score": 96, "technique": "Eisenhower Matrix"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": True
    },
    {
        "id": next_id + 3,
        "title": "Checklist Cierre Mensual: 0 Errores en 2 Horas",
        "category": "Operaciones & Procesos",
        "description": "Proceso estandarizado de cierre contable y administrativo mensual",
        "problem": "El cierre de mes es un caos. Siempre falta algo, descubres errores tarde, y el contador te odia. Necesitas un proceso, no heroísmo.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Operaciones & Procesos"},
        "agiaPromptTagged": "ROL:\\nEres un Controller Financiero con 15 años de experiencia en cierres contables de empresas medianas.\\n\\nCONTEXTO:\\nTipo de empresa: [Ej: Servicios, 20 empleados]\\nSistema contable: [Ej: Nubox/Softland/SAP]\\nÁreas involucradas: [Ej: Ventas, Compras, RRHH, Banco]\\n\\nMETA:\\nCrea un checklist de cierre mensual que garantice 0 errores y se complete en máximo 2 horas.\\n\\nFORMATO:\\n**DÍA 1-3 del mes:**\\n[ ] Tarea 1 - Responsable - Tiempo estimado\\n[ ] Tarea 2...\\n\\n**DÍA 4-5:**\\n[ ] Validaciones cruzadas\\n\\n**DÍA 6:**\\n[ ] Cierre definitivo\\n\\nRESTRICCIONES:\\n- Cada tarea con responsable único\\n- Incluir validación de cada paso\\n- Alertas tempranas de errores comunes",
        "badPrompt": "Dame una lista de cosas para el cierre de mes",
        "badResponsePreview": "Para el cierre de mes debes: revisar ventas, cuadrar banco, ver gastos...",
        "badResponseAnalysis": "Lista genérica sin orden, tiempos, responsables ni validaciones.",
        "previewResponse": "**CHECKLIST CIERRE MENSUAL**\\n\\n**DÍA 1-2 (Recopilación):**\\n[ ] Exportar ventas del sistema → Ana → 15 min\\n[ ] Descargar cartola bancaria → Pedro → 5 min\\n[ ] Recopilar facturas proveedores → María → 30 min\\n[ ] Validar: Total ventas = Depósitos + Crédito\\n\\n**DÍA 3 (Conciliación):**\\n[ ] Cuadrar banco vs sistema → 45 min\\n[ ] Identificar partidas pendientes → 20 min\\n[ ] Validar: Diferencia < $10.000\\n\\n**DÍA 4 (Revisión):**\\n[ ] Revisar gastos vs presupuesto → 30 min\\n[ ] Provisiones pendientes → 15 min\\n[ ] Validar: Gastos extraordinarios justificados\\n\\n**DÍA 5 (Cierre):**\\n[ ] Generar balance preliminar → 10 min\\n[ ] Aprobar con gerencia → 15 min\\n[ ] Enviar a contador → 5 min",
        "verticalMatrix": [
            {"rubro": "Retail", "contexto": "Alto volumen transaccional", "ajuste": "Cuadre de caja diario antes del cierre mensual"},
            {"rubro": "Servicios", "contexto": "Facturación por proyecto", "ajuste": "Validar % avance vs facturación emitida"},
            {"rubro": "Manufactura", "contexto": "Inventarios", "ajuste": "Incluir conteo físico y ajuste de inventario"},
            {"rubro": "Restaurantes", "contexto": "Propinas y múltiples cajas", "ajuste": "Conciliar cada punto de venta por separado"},
            {"rubro": "E-commerce", "contexto": "Múltiples pasarelas", "ajuste": "Cuadrar Transbank + PayPal + MercadoPago"}
        ],
        "fineTuning": [
            "Errores: 'Lista los 10 errores más comunes en cierres y cómo prevenirlos'",
            "Automatización: 'Qué pasos puedo automatizar con macros o scripts'",
            "Responsables: 'Crea una matriz RACI para el proceso de cierre'"
        ],
        "metadata": {"score": 95, "technique": "Checklist Methodology"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": True
    },
    {
        "id": next_id + 4,
        "title": "Análisis Gastos Fijos vs Variables: Encuentra $500K Ocultos",
        "category": "Finanzas & Cash Flow",
        "description": "Clasificación inteligente de gastos para optimizar estructura de costos",
        "problem": "No sabes cuánto DEBES gastar vs cuánto ELIGES gastar. Todo parece 'necesario' hasta que la caja aprieta y recortas a ciegas.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Finanzas & Cash Flow"},
        "agiaPromptTagged": "ROL:\\nEres un Analista de Costos especializado en optimización de estructura de gastos para Pymes.\\n\\nCONTEXTO:\\nListado de gastos mensuales: [Pega tu listado]\\nIngresos promedio mensual: [Ej: $15.000.000]\\nIndustria: [Ej: Servicios profesionales]\\n\\nMETA:\\nClasifica cada gasto como FIJO o VARIABLE, identifica gastos ocultos y propón ahorros.\\n\\nFORMATO:\\n**GASTOS FIJOS (inevitables):**\\n| Ítem | Monto | % del ingreso |\\n\\n**GASTOS VARIABLES (ajustables):**\\n| Ítem | Monto | Potencial ahorro |\\n\\n**GASTOS OCULTOS (suscripciones olvidadas, duplicados):**\\n| Ítem | Acción | Ahorro anual |\\n\\nRESTRICCIONES:\\n- Fijo = no puedo dejar de pagar sin cerrar el negocio\\n- Variable = puedo reducir o eliminar sin impacto crítico\\n- Incluir % de cada categoría sobre ingresos",
        "badPrompt": "Analiza mis gastos",
        "badResponsePreview": "Tus gastos incluyen arriendo, sueldos, servicios básicos...",
        "badResponseAnalysis": "Solo lista gastos sin clasificar, sin análisis de optimización ni ahorros concretos.",
        "previewResponse": "**ANÁLISIS DE ESTRUCTURA DE COSTOS**\\n\\n**GASTOS FIJOS (62% de ingresos - $9.3M):**\\n| Arriendo oficina | $1.500.000 | 10% |\\n| Sueldos + cargas | $6.000.000 | 40% |\\n| Software base | $300.000 | 2% |\\n| Seguros | $200.000 | 1.3% |\\n\\n**GASTOS VARIABLES (25% - $3.75M):**\\n| Marketing digital | $800.000 | Reducible a $500K |\\n| Viáticos | $400.000 | Política de tope |\\n| Horas extra | $600.000 | Automatizable |\\n\\n**GASTOS OCULTOS DETECTADOS ($187K/mes):**\\n| Zoom Pro (nadie usa) | Cancelar | $180K/año |\\n| Dominio duplicado | Cancelar | $50K/año |\\n| Slack (también Teams) | Elegir 1 | $1.2M/año |\\n\\n**POTENCIAL AHORRO ANUAL: $2.2M**",
        "verticalMatrix": [
            {"rubro": "Oficina física", "contexto": "Arriendo alto", "ajuste": "Evaluar modelo híbrido para reducir m2"},
            {"rubro": "E-commerce", "contexto": "Costos logísticos", "ajuste": "Variable = envíos. Negociar volumen"},
            {"rubro": "Agencia", "contexto": "Mucho freelance", "ajuste": "Analizar punto de equilibrio para contratar fijo"},
            {"rubro": "Manufactura", "contexto": "Materia prima", "ajuste": "Variable por excelencia. Stock mínimo"},
            {"rubro": "SaaS", "contexto": "Infraestructura cloud", "ajuste": "Revisar consumo real vs provisionado"}
        ],
        "fineTuning": [
            "Benchmark: 'Compara mi estructura de costos con el promedio de mi industria'",
            "Escenarios: 'Si mis ventas bajan 30%, qué gastos corto primero'",
            "Suscripciones: 'Audita todas mis suscripciones de software y recomienda consolidar'"
        ],
        "metadata": {"score": 96, "technique": "Cost Structure Analysis"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": True
    }
]

# Guardar progreso parcial (primeros 5 casos)
print(f"\nCreados {len(nuevos_casos)} casos nuevos (IDs {next_id}-{next_id+4})")
print("Continuando con los siguientes 10 casos...")

# Agregar a data
data.extend(nuevos_casos)

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nGuardado parcial. Total casos ahora: {len(data)}")
