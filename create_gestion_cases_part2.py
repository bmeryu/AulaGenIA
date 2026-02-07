"""
Parte 2: Crear casos 6-10 (Finanzas + RRHH)
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

max_id = max(c['id'] for c in data)
next_id = max_id + 1

nuevos_casos = [
    {
        "id": next_id,
        "title": "Proyección de Ventas: Predice los Próximos 6 Meses",
        "category": "Finanzas & Cash Flow",
        "description": "Modelo de proyección de ingresos basado en histórico y pipeline",
        "problem": "Planificas gastos sin saber cuánto vas a vender. Un mes bueno te hace contratar, un mes malo te deja sin caja para pagar.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Finanzas & Cash Flow"},
        "agiaPromptTagged": "ROL:\\nEres un Analista de Revenue especializado en proyecciones de ventas para Pymes.\\n\\nCONTEXTO:\\nVentas últimos 12 meses: [Lista de montos]\\nPipeline actual: [Negocios en curso con probabilidad]\\nEstacionalidad: [Ej: Dic-Ene baja 40%]\\n\\nMETA:\\nCrea una proyección de ventas para los próximos 6 meses con 3 escenarios.\\n\\nFORMATO:\\n| Mes | Pesimista | Base | Optimista |\\n| Ene | $X | $Y | $Z |\\n...\\n\\n**Supuestos clave:**\\n- ...\\n\\n**Acciones para escenario optimista:**\\n- ...\\n\\nRESTRICCIONES:\\n- Pesimista = histórico - 20%\\n- Base = tendencia actual\\n- Optimista = si cierro 80% del pipeline",
        "badPrompt": "Cuánto voy a vender el próximo mes",
        "badResponsePreview": "Basándome en tus datos, probablemente vendas similar al mes pasado...",
        "badResponseAnalysis": "Proyección simplista sin metodología ni escenarios para planificar.",
        "previewResponse": "**PROYECCIÓN DE VENTAS 6 MESES**\\n\\n| Mes | Pesimista | Base | Optimista |\\n|-----|-----------|------|-----------|\\n| Feb | $8M | $10M | $12M |\\n| Mar | $9M | $11M | $14M |\\n| Abr | $7M | $9M | $11M |\\n| May | $8M | $10M | $13M |\\n| Jun | $6M | $8M | $10M |\\n| Jul | $5M | $7M | $9M |\\n\\n**Supuestos:**\\n- Estacionalidad: Jul baja 30%\\n- Pipeline: 3 negocios grandes ($15M) pueden cerrar Mar-Abr\\n\\n**Para Optimista:**\\n1. Cerrar propuesta Cliente A antes del 15/Feb\\n2. Reactivar 5 prospectos dormidos\\n3. Campaña de upselling a clientes actuales",
        "verticalMatrix": [
            {"rubro": "SaaS", "contexto": "MRR predecible", "ajuste": "Usar cohortes de retención para proyectar churn"},
            {"rubro": "Retail", "contexto": "Alta estacionalidad", "ajuste": "Comparar con mismo mes año anterior"},
            {"rubro": "Servicios B2B", "contexto": "Proyectos grandes", "ajuste": "Ponderar por probabilidad de cierre"},
            {"rubro": "E-commerce", "contexto": "Tráfico variable", "ajuste": "Correlacionar con inversión en ads"},
            {"rubro": "Consultoría", "contexto": "Pipeline largo", "ajuste": "Incluir tiempo promedio de cierre"}
        ],
        "fineTuning": [
            "Estacionalidad: 'Analiza mi histórico y detecta patrones estacionales'",
            "Pipeline: 'Asigna probabilidades a cada negocio en mi pipeline'",
            "Acciones: 'Qué debo hacer esta semana para alcanzar el escenario optimista'"
        ],
        "metadata": {"score": 95, "technique": "Sales Forecasting"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 1,
        "title": "Cobro de Facturas Vencidas: Recupera $2M en 7 Días",
        "category": "Finanzas & Cash Flow",
        "description": "Protocolo de escalamiento para cobranza efectiva sin perder clientes",
        "problem": "Tienes $5M en facturas vencidas y te da vergüenza cobrar. Mientras tanto, tú pagas a 30 días y te pagan a 90. Tu caja sufre.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Finanzas & Cash Flow"},
        "agiaPromptTagged": "ROL:\\nEres un Especialista en Cobranza Comercial que sabe cobrar sin perder la relación.\\n\\nCONTEXTO:\\nFacturas vencidas: [Lista con monto, días mora, cliente]\\nRelación con cliente: [Estratégico/Normal/Nuevo]\\nHistorial de pago: [Siempre paga tarde / Primera vez]\\n\\nMETA:\\nCrea un protocolo de cobranza con mensajes y acciones para cada nivel de escalamiento.\\n\\nFORMATO:\\n**NIVEL 1 (1-15 días):** Recordatorio amable\\n- Mensaje: ...\\n- Canal: Email\\n\\n**NIVEL 2 (16-30 días):** Llamada directa\\n- Script: ...\\n\\n**NIVEL 3 (31-60 días):** Carta formal\\n- Texto: ...\\n\\n**NIVEL 4 (61+ días):** Acción legal\\n- Pasos: ...\\n\\nRESTRICCIONES:\\n- Tono profesional, nunca agresivo\\n- Ofrecer facilidades de pago\\n- Documentar cada contacto",
        "badPrompt": "Escribe un mail para cobrar una factura",
        "badResponsePreview": "Estimado cliente, le recordamos que tiene una factura pendiente...",
        "badResponseAnalysis": "Un solo mensaje genérico sin estrategia de escalamiento ni seguimiento.",
        "previewResponse": "**PROTOCOLO DE COBRANZA - ESCALAMIENTO**\\n\\n**NIVEL 1 (Día 1-15): Email Amable**\\n'Hola [Nombre], espero estés bien. Te escribo porque la factura #1234 por $X venció el [fecha]. ¿Podrías confirmarme cuándo estará lista? Si hay algún tema con el servicio, conversemos.'\\n\\n**NIVEL 2 (Día 16-30): Llamada**\\nScript: 'Hola [Nombre], seguimiento de mi email. Entiendo que a veces las cosas se atrasan. ¿Hay algo que pueda hacer para facilitar el pago? Podemos dividir en 2 cuotas.'\\n\\n**NIVEL 3 (Día 31-60): Carta Formal**\\n'Estimado [Nombre], lamentamos informar que la factura #1234 acumula [X] días de mora. De no regularizar en 7 días, suspenderemos el servicio y transferiremos a cobranza externa.'\\n\\n**NIVEL 4 (Día 61+):**\\n1. Suspensión de servicio\\n2. Carta notarial\\n3. Derivación a cobranza judicial",
        "verticalMatrix": [
            {"rubro": "Servicios recurrentes", "contexto": "Cliente mensual", "ajuste": "Suspensión de servicio como palanca"},
            {"rubro": "Proyectos", "contexto": "Entregable pendiente", "ajuste": "Retener última etapa hasta pago"},
            {"rubro": "Retail B2B", "contexto": "Compras frecuentes", "ajuste": "Bloquear próximos pedidos"},
            {"rubro": "Freelance", "contexto": "Cliente ocasional", "ajuste": "Siguiente proyecto con 50% anticipado"},
            {"rubro": "Manufactura", "contexto": "Pedidos grandes", "ajuste": "Seguro de crédito para montos altos"}
        ],
        "fineTuning": [
            "Mensajes: 'Crea 5 variaciones del email nivel 1 para diferentes tonos'",
            "Negociación: 'Si el cliente pide descuento por pagar, ¿qué ofrezco?'",
            "Legal: 'Redacta la carta notarial para el nivel 4'"
        ],
        "metadata": {"score": 96, "technique": "Collection Escalation"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": True
    },
    {
        "id": next_id + 2,
        "title": "Conciliación Bancaria: De 3 Horas a 20 Minutos",
        "category": "Finanzas & Cash Flow",
        "description": "Proceso automatizado para cuadrar banco con sistema contable",
        "problem": "Cada mes pierdes 3 horas cuadrando el banco. Siempre hay diferencias misteriosas que nadie sabe explicar. El contador te presiona.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Finanzas & Cash Flow"},
        "agiaPromptTagged": "ROL:\\nEres un Controller con expertise en conciliación bancaria automatizada.\\n\\nCONTEXTO:\\nBanco: [Ej: BancoEstado, Santander]\\nSistema contable: [Ej: Nubox, Softland]\\nVolumen mensual: [Ej: 200 movimientos]\\n\\nMETA:\\nCrea un proceso de conciliación que reduzca el tiempo de 3 horas a 20 minutos.\\n\\nFORMATO:\\n1. **Preparación** (5 min)\\n   - Descargar cartola\\n   - Exportar libro banco\\n\\n2. **Matching automático** (10 min)\\n   - Fórmula/proceso\\n\\n3. **Partidas pendientes** (5 min)\\n   - Cómo identificar\\n   - Cómo resolver\\n\\nRESTRICCIONES:\\n- Usar solo herramientas disponibles (Excel/Sheets)\\n- Incluir validación de cuadratura\\n- Documentar partidas no cuadradas",
        "badPrompt": "Cómo hago una conciliación bancaria",
        "badResponsePreview": "La conciliación bancaria consiste en comparar el saldo del banco con el saldo contable...",
        "badResponseAnalysis": "Explicación teórica sin proceso práctico ni automatización.",
        "previewResponse": "**PROCESO CONCILIACIÓN BANCARIA - 20 MIN**\\n\\n**PASO 1: PREPARACIÓN (5 min)**\\n- Descargar cartola formato Excel\\n- Exportar libro banco del sistema\\n- Verificar: mismo período, misma cuenta\\n\\n**PASO 2: MATCHING AUTOMÁTICO (10 min)**\\n```excel\\n=BUSCARV(A2, LibroBanco!A:C, 3, FALSO)\\n```\\n- Columna auxiliar: Si coincide = 'OK'\\n- Filtrar solo los que dicen 'ERROR'\\n\\n**PASO 3: PARTIDAS PENDIENTES (5 min)**\\nCausas comunes:\\n- Cheques girados no cobrados → Normal, documentar\\n- Depósito en tránsito → Verificar día siguiente\\n- Error de digitación → Corregir en sistema\\n\\n**VALIDACIÓN FINAL:**\\nSaldo banco - Cheques pendientes + Depósitos tránsito = Saldo libros\\nDiferencia aceptable: < $1.000",
        "verticalMatrix": [
            {"rubro": "Retail", "contexto": "Múltiples medios de pago", "ajuste": "Separar conciliación por: efectivo, tarjetas, transferencias"},
            {"rubro": "E-commerce", "contexto": "Pasarelas de pago", "ajuste": "Incluir conciliación de Transbank/PayPal"},
            {"rubro": "Servicios", "contexto": "Facturación diferida", "ajuste": "Considerar desfase entre factura y pago"},
            {"rubro": "Construcción", "contexto": "Estados de pago", "ajuste": "Tracking de retenciones y garantías"},
            {"rubro": "Multiempresa", "contexto": "Varias cuentas", "ajuste": "Consolidar en una sola planilla maestra"}
        ],
        "fineTuning": [
            "Fórmulas: 'Dame las fórmulas exactas para matching en Excel'",
            "Errores: 'Lista los 10 errores más comunes en conciliación y cómo evitarlos'",
            "Automatización: 'Crea un script para descargar cartola automáticamente'"
        ],
        "metadata": {"score": 94, "technique": "Bank Reconciliation"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 3,
        "title": "Plan de Sucesión: Prepara tu Reemplazo en 90 Días",
        "category": "RRHH & Equipos",
        "description": "Proceso para desarrollar sucesores de roles críticos",
        "problem": "Si tu gerente estrella renuncia mañana, tu empresa colapsa. No tienes plan B. Dependes de personas, no de procesos.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "RRHH & Equipos"},
        "agiaPromptTagged": "ROL:\\nEres un Consultor de Gestión del Talento especializado en planes de sucesión para Pymes.\\n\\nCONTEXTO:\\nRol crítico: [Ej: Gerente de Operaciones]\\nTitular actual: [Nombre, antigüedad]\\nCandidatos internos: [Lista de posibles sucesores]\\n\\nMETA:\\nCrea un plan de sucesión de 90 días que prepare al sucesor sin desestabilizar la operación.\\n\\nFORMATO:\\n**MES 1: Documentación**\\n- Semana 1-2: [Actividades]\\n- Semana 3-4: [Actividades]\\n\\n**MES 2: Transferencia**\\n- ...\\n\\n**MES 3: Autonomía**\\n- ...\\n\\n**Métricas de éxito:**\\n- ...\\n\\nRESTRICCIONES:\\n- El titular debe liberar 20% de su tiempo para mentoring\\n- Incluir contingencia si sucesor no está listo\\n- Documentar conocimiento tácito (lo que no está escrito)",
        "badPrompt": "Cómo preparo un sucesor para un cargo",
        "badResponsePreview": "Para preparar un sucesor debes identificar candidatos, capacitarlos y hacer seguimiento...",
        "badResponseAnalysis": "Consejos genéricos sin plan concreto, tiempos ni entregables.",
        "previewResponse": "**PLAN DE SUCESIÓN - 90 DÍAS**\\n\\n**MES 1: DOCUMENTACIÓN**\\n- Sem 1: Mapear todas las funciones del rol\\n- Sem 2: Documentar procesos críticos (SOP)\\n- Sem 3: Identificar stakeholders clave\\n- Sem 4: Grabar sesiones de trabajo real\\n\\n**MES 2: TRANSFERENCIA**\\n- Sem 5: Sucesor observa (shadowing)\\n- Sem 6: Sucesor ejecuta con supervisión\\n- Sem 7: Sucesor lidera, titular observa\\n- Sem 8: Sucesor maneja crisis simulada\\n\\n**MES 3: AUTONOMÍA**\\n- Sem 9-10: Sucesor solo, check-ins diarios\\n- Sem 11-12: Check-ins semanales\\n- Fin: Evaluación formal de competencias\\n\\n**MÉTRICAS:**\\n- 100% de procesos documentados\\n- 0 escalamientos críticos en sem 11-12\\n- Aprobación de stakeholders clave",
        "verticalMatrix": [
            {"rubro": "Ventas", "contexto": "Gerente comercial", "ajuste": "Incluir traspaso de relaciones con clientes clave"},
            {"rubro": "Operaciones", "contexto": "Jefe de planta", "ajuste": "Énfasis en seguridad y protocolos de emergencia"},
            {"rubro": "Finanzas", "contexto": "Controller", "ajuste": "Accesos a sistemas, claves, poderes bancarios"},
            {"rubro": "Tecnología", "contexto": "CTO/DevOps", "ajuste": "Documentar arquitectura y accesos críticos"},
            {"rubro": "Fundador", "contexto": "Dueño operativo", "ajuste": "Separar rol de dueño vs rol de gerente"}
        ],
        "fineTuning": [
            "Assessment: 'Crea una evaluación para medir si el sucesor está listo'",
            "Documentación: 'Lista todo lo que el titular debe documentar antes de irse'",
            "Contingencia: 'Si el sucesor falla, cuál es el plan B inmediato'"
        ],
        "metadata": {"score": 95, "technique": "Succession Planning"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 4,
        "title": "Encuesta Clima Laboral: Diagnóstico Real en 48 Horas",
        "category": "RRHH & Equipos",
        "description": "Diseño y análisis de encuesta de clima organizacional",
        "problem": "No sabes qué piensa tu equipo. Los problemas explotan de sorpresa. Renuncias inesperadas. Conflictos que no viste venir.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "RRHH & Equipos"},
        "agiaPromptTagged": "ROL:\\nEres un Psicólogo Organizacional especializado en diagnóstico de clima laboral.\\n\\nCONTEXTO:\\nTamaño empresa: [Ej: 25 empleados]\\nProblemas sospechados: [Ej: rotación alta, ausentismo]\\nEncuestas previas: [Sí/No, resultados]\\n\\nMETA:\\nDiseña una encuesta de clima laboral de 15 preguntas que entregue diagnóstico accionable.\\n\\nFORMATO:\\n**ENCUESTA (15 preguntas):**\\nDimensión 1: Liderazgo\\n1. [Pregunta] - Escala 1-5\\n2. ...\\n\\n**ANÁLISIS DE RESULTADOS:**\\n- Cómo interpretar\\n- Benchmarks\\n- Alertas rojas\\n\\n**PLAN DE ACCIÓN:**\\n- Si Liderazgo < 3: hacer X\\n- ...\\n\\nRESTRICCIONES:\\n- Anónima y confidencial\\n- Preguntas sin sesgo\\n- Incluir 1 pregunta abierta",
        "badPrompt": "Haz una encuesta de clima laboral",
        "badResponsePreview": "Pregunta 1: ¿Estás satisfecho con tu trabajo? Pregunta 2: ¿Te llevas bien con tus compañeros?...",
        "badResponseAnalysis": "Preguntas genéricas sin dimensiones ni plan de acción con los resultados.",
        "previewResponse": "**ENCUESTA CLIMA LABORAL - 15 PREGUNTAS**\\n\\n**LIDERAZGO (1-5):**\\n1. Mi jefe directo me da feedback útil\\n2. Las decisiones de la gerencia son transparentes\\n3. Me siento escuchado cuando doy ideas\\n\\n**DESARROLLO (1-5):**\\n4. Tengo oportunidades de crecer aquí\\n5. Recibo capacitación para hacer mejor mi trabajo\\n6. Sé cuál es mi plan de carrera\\n\\n**AMBIENTE (1-5):**\\n7. Hay buen ambiente entre compañeros\\n8. Los conflictos se resuelven de forma justa\\n9. Me siento parte de un equipo\\n\\n**COMPENSACIÓN (1-5):**\\n10. Mi sueldo es justo para lo que hago\\n11. Los beneficios son competitivos\\n12. Reconocen mi buen desempeño\\n\\n**BIENESTAR (1-5):**\\n13. Puedo equilibrar trabajo y vida personal\\n14. Mi carga de trabajo es razonable\\n15. (Abierta) ¿Qué cambiarías de la empresa?\\n\\n**ALERTAS ROJAS:**\\n- Cualquier dimensión < 3.0\\n- Pregunta 4 o 6 < 2.5 = riesgo fuga",
        "verticalMatrix": [
            {"rubro": "Startup", "contexto": "Equipo joven", "ajuste": "Incluir preguntas sobre propósito y flexibilidad"},
            {"rubro": "Manufactura", "contexto": "Operarios", "ajuste": "Énfasis en seguridad y condiciones físicas"},
            {"rubro": "Retail", "contexto": "Alta rotación", "ajuste": "Preguntas sobre inducción y primeros 90 días"},
            {"rubro": "Servicios profesionales", "contexto": "Burnout", "ajuste": "Énfasis en carga de trabajo y balance"},
            {"rubro": "Multilocal", "contexto": "Equipos distribuidos", "ajuste": "Preguntas por sucursal para comparar"}
        ],
        "fineTuning": [
            "Análisis: 'Tengo estos resultados [pega datos], interprétalos'",
            "Acción: 'Mi dimensión Liderazgo salió 2.3, qué hago concretamente'",
            "Comunicación: 'Cómo comunico los resultados al equipo sin generar pánico'"
        ],
        "metadata": {"score": 94, "technique": "Climate Survey"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    }
]

data.extend(nuevos_casos)

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Creados 5 casos nuevos (IDs {next_id}-{next_id+4})")
print(f"Total casos ahora: {len(data)}")
