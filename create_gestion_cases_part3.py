"""
Parte 3: Crear casos 11-15 (RRHH + Operaciones)
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

max_id = max(c['id'] for c in data)
next_id = max_id + 1

nuevos_casos = [
    {
        "id": next_id,
        "title": "Programa de Beneficios: Diseña Paquete que Retiene Talento",
        "category": "RRHH & Equipos",
        "description": "Diseño de programa de beneficios competitivo con presupuesto limitado",
        "problem": "Tu competencia ofrece gym, seguro, horario flexible. Tú solo ofreces sueldo. Tu mejor talento se va por $100K de diferencia.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "RRHH & Equipos"},
        "agiaPromptTagged": "ROL:\\nEres un Consultor de Compensaciones y Beneficios para Pymes chilenas.\\n\\nCONTEXTO:\\nNúmero de empleados: [Ej: 15]\\nPresupuesto mensual para beneficios: [Ej: $500.000 total]\\nBeneficios actuales: [Lista]\\nProblemas de retención: [Qué cargos se van]\\n\\nMETA:\\nDiseña un programa de beneficios que maximice retención con el presupuesto disponible.\\n\\nFORMATO:\\n**BENEFICIOS PROPUESTOS:**\\n| Beneficio | Costo/persona | Impacto en retención |\\n\\n**IMPLEMENTACIÓN:**\\n- Proveedor sugerido\\n- Comunicación al equipo\\n\\n**ROI ESPERADO:**\\n- Costo de rotación actual: $X\\n- Ahorro proyectado: $Y\\n\\nRESTRICCIONES:\\n- Priorizar beneficios con alto impacto y bajo costo\\n- Incluir beneficios no monetarios (flexibilidad, reconocimiento)\\n- Considerar aspectos tributarios (beneficios exentos)",
        "badPrompt": "Qué beneficios puedo dar a mis empleados",
        "badResponsePreview": "Puedes ofrecer seguro de salud, bonos, días libres adicionales...",
        "badResponseAnalysis": "Lista genérica sin considerar presupuesto, priorización ni ROI.",
        "previewResponse": "**PROGRAMA DE BENEFICIOS - PRESUPUESTO $500K/MES**\\n\\n**ALTO IMPACTO + BAJO COSTO:**\\n| Viernes corto (salir 14:00) | $0 | Alto |\\n| Día cumpleaños libre | $0 | Medio |\\n| Home office 2 días/sem | $0 | Alto |\\n\\n**INVERSIÓN MODERADA:**\\n| Seguro complementario | $15K/pers | Alto |\\n| Convenio gimnasio | $8K/pers | Medio |\\n| Aguinaldos (Fiestas Patrias/Navidad) | $50K/pers x2 | Alto |\\n\\n**DISTRIBUCIÓN MENSUAL (15 personas):**\\n- Seguro: $225.000\\n- Gimnasio: $120.000\\n- Reserva aguinaldos: $100.000\\n- Celebraciones: $55.000\\n**Total: $500.000**\\n\\n**ROI:**\\n- Costo reemplazo 1 persona: $2M (reclutamiento + capacitación)\\n- Si retienes 2 personas/año: Ahorro $4M",
        "verticalMatrix": [
            {"rubro": "Tecnología", "contexto": "Talento escaso", "ajuste": "Enfatizar flexibilidad y desarrollo profesional"},
            {"rubro": "Retail", "contexto": "Alta rotación", "ajuste": "Beneficios inmediatos (descuentos, adelanto sueldo)"},
            {"rubro": "Servicios profesionales", "contexto": "Burnout", "ajuste": "Días de salud mental, horarios flexibles"},
            {"rubro": "Manufactura", "contexto": "Trabajo físico", "ajuste": "Seguros, kinesiología, transporte"},
            {"rubro": "Startup", "contexto": "Equity", "ajuste": "Stock options o phantom shares"}
        ],
        "fineTuning": [
            "Comunicación: 'Crea el email para anunciar el nuevo programa de beneficios'",
            "Encuesta: 'Diseña encuesta para saber qué beneficios valoran más'",
            "Tributario: 'Cuáles beneficios no pagan impuestos en Chile'"
        ],
        "metadata": {"score": 94, "technique": "Total Rewards Design"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 1,
        "title": "Acta de Amonestación Laboral: Protege tu Empresa Legalmente",
        "category": "RRHH & Equipos",
        "description": "Documento de amonestación que cumple requisitos legales chilenos",
        "problem": "Tienes un empleado problemático pero no has documentado nada. Si lo despides, te demanda. Si no lo despides, contamina al equipo.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "RRHH & Equipos"},
        "agiaPromptTagged": "ROL:\\nEres un Abogado Laboralista chileno especializado en relaciones laborales y documentación de faltas.\\n\\nCONTEXTO:\\nNombre trabajador: [X]\\nCargo: [X]\\nFalta cometida: [Describir situación con fechas]\\nFaltas previas: [Primera vez / Reincidente]\\n\\nMETA:\\nRedacta un acta de amonestación que cumpla requisitos legales y proteja a la empresa.\\n\\nFORMATO:\\n**ACTA DE AMONESTACIÓN**\\n\\n1. Identificación (empresa, trabajador, fecha)\\n2. Descripción de los hechos\\n3. Normativa infringida (Reglamento Interno, Contrato, Código del Trabajo)\\n4. Amonestación formal\\n5. Advertencia de consecuencias\\n6. Firma trabajador + testigos\\n\\nRESTRICCIONES:\\n- Lenguaje objetivo, sin juicios de valor\\n- Citar artículos específicos del Reglamento\\n- Incluir espacio para descargos del trabajador",
        "badPrompt": "Escribe una carta de amonestación",
        "badResponsePreview": "Estimado trabajador, por medio de la presente se le amonesta por su mal comportamiento...",
        "badResponseAnalysis": "Lenguaje vago, sin estructura legal, sin cita de normativa, fácil de impugnar.",
        "previewResponse": "**ACTA DE AMONESTACIÓN ESCRITA**\\n\\n**I. IDENTIFICACIÓN**\\nEmpresa: [Razón Social], RUT [X]\\nTrabajador: [Nombre Completo], RUT [X], Cargo: [X]\\nFecha: [DD/MM/AAAA]\\n\\n**II. HECHOS**\\nCon fecha [X], el trabajador [describir hechos objetivamente].\\nTestigos: [Nombres si aplica].\\n\\n**III. NORMATIVA INFRINGIDA**\\n- Art. [X] del Reglamento Interno de Orden, Higiene y Seguridad\\n- Cláusula [X] del Contrato de Trabajo\\n\\n**IV. AMONESTACIÓN**\\nSe aplica AMONESTACIÓN ESCRITA, dejando constancia en su carpeta personal.\\n\\n**V. ADVERTENCIA**\\nLa reiteración de esta conducta podrá dar lugar a la terminación del contrato por la causal del Art. 160 N°7 del Código del Trabajo.\\n\\n**VI. DESCARGOS**\\nEl trabajador puede presentar descargos por escrito en un plazo de 48 horas.\\n\\n**VII. FIRMAS**\\n_______________  _______________  _______________\\nTrabajador       RR.HH.          Testigo",
        "verticalMatrix": [
            {"rubro": "Retail", "contexto": "Faltante de caja", "ajuste": "Citar procedimiento de arqueo y diferencia detectada"},
            {"rubro": "Manufactura", "contexto": "Seguridad", "ajuste": "Citar norma de seguridad específica violada"},
            {"rubro": "Oficina", "contexto": "Atrasos", "ajuste": "Adjuntar registro de marcaciones"},
            {"rubro": "Servicios", "contexto": "Trato a cliente", "ajuste": "Incluir reclamo formal del cliente"},
            {"rubro": "Tecnología", "contexto": "Uso indebido recursos", "ajuste": "Citar política de uso de equipos"}
        ],
        "fineTuning": [
            "Descargos: 'El trabajador presentó descargos [X], cómo respondo'",
            "Escalamiento: 'Ya tiene 2 amonestaciones, puedo despedirlo?'",
            "Verbal: 'Cuándo basta con amonestación verbal vs escrita'"
        ],
        "metadata": {"score": 95, "technique": "HR Legal Documentation"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 2,
        "title": "SLA de Servicios Internos: IT, RRHH, Finanzas Responden Rápido",
        "category": "Operaciones & Procesos",
        "description": "Acuerdos de nivel de servicio para áreas de soporte interno",
        "problem": "Pediste un reporte a Finanzas hace 5 días y nada. IT no responde tickets. RRHH pierde documentos. Nadie tiene tiempos de respuesta.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Operaciones & Procesos"},
        "agiaPromptTagged": "ROL:\\nEres un Consultor de Operaciones especializado en diseño de SLAs internos.\\n\\nCONTEXTO:\\nÁreas de soporte: [IT, RRHH, Finanzas, Legal]\\nProblemas actuales: [Ej: Tickets sin respuesta, retrasos en informes]\\nVolumen aproximado: [Ej: 50 solicitudes/mes a IT]\\n\\nMETA:\\nDiseña SLAs internos que establezcan tiempos de respuesta y métricas de cumplimiento.\\n\\nFORMATO:\\n**SLA por Área:**\\n\\n| Área | Tipo Solicitud | Tiempo Respuesta | Tiempo Resolución |\\n|------|----------------|------------------|-------------------|\\n\\n**Proceso de Escalamiento:**\\n- Si no responde en X tiempo: [Acción]\\n\\n**Métricas Mensuales:**\\n- ...\\n\\nRESTRICCIONES:\\n- Tiempos realistas (no prometer lo imposible)\\n- Definir qué cuenta como 'respuesta' vs 'resolución'\\n- Incluir excepciones (vacaciones, cierre mensual)",
        "badPrompt": "Cómo hago que IT responda más rápido",
        "badResponsePreview": "Puedes hablar con el jefe de IT para que priorice tus solicitudes...",
        "badResponseAnalysis": "Solución ad-hoc sin sistema, sin métricas, sin accountability.",
        "previewResponse": "**SLA DE SERVICIOS INTERNOS**\\n\\n**TECNOLOGÍA (IT):**\\n| Urgente (sistema caído) | 30 min | 4 horas |\\n| Normal (nuevo acceso) | 4 horas | 24 horas |\\n| Mejora (nueva funcionalidad) | 48 horas | Según backlog |\\n\\n**RECURSOS HUMANOS:**\\n| Certificado/Carta | 24 horas | 48 horas |\\n| Liquidación corregida | 4 horas | 24 horas |\\n| Consulta beneficios | 4 horas | 24 horas |\\n\\n**FINANZAS:**\\n| Pago urgente proveedor | 4 horas | 24 horas |\\n| Informe ad-hoc | 24 horas | 72 horas |\\n| Reembolso | 48 horas | 5 días hábiles |\\n\\n**ESCALAMIENTO:**\\n- Sin respuesta en 1.5x el tiempo: Email a jefe de área + CC Gerencia\\n- Sin resolución en 2x: Reunión de crisis\\n\\n**MÉTRICAS MENSUALES:**\\n- % cumplimiento SLA por área\\n- Tiempo promedio de respuesta\\n- Top 5 solicitudes más frecuentes",
        "verticalMatrix": [
            {"rubro": "Multilocal", "contexto": "Sucursales remotas", "ajuste": "SLA diferenciado por complejidad de acceso"},
            {"rubro": "Manufactura", "contexto": "Parada de línea", "ajuste": "Urgente = impacto en producción"},
            {"rubro": "Servicios financieros", "contexto": "Regulación", "ajuste": "SLA de cumplimiento normativo prioritario"},
            {"rubro": "Retail", "contexto": "Temporada alta", "ajuste": "SLA más exigente en Nov-Dic"},
            {"rubro": "Startup", "contexto": "Equipo pequeño", "ajuste": "Una persona, múltiples SLAs"}
        ],
        "fineTuning": [
            "Métricas: 'Diseña un dashboard para trackear cumplimiento de SLAs'",
            "Comunicación: 'Crea el memo para anunciar los nuevos SLAs al equipo'",
            "Herramienta: 'Qué sistema simple puedo usar para gestionar tickets internos'"
        ],
        "metadata": {"score": 94, "technique": "Internal SLA Design"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": False
    },
    {
        "id": next_id + 3,
        "title": "Manual de Procedimientos: Cualquiera Puede Hacer tu Trabajo",
        "category": "Operaciones & Procesos",
        "description": "Documentación de procesos para estandarización y continuidad",
        "problem": "Solo María sabe hacer las facturas. Solo Pedro sabe del sistema. Si se enferman, la empresa para. Tu conocimiento está en cabezas, no en papel.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Operaciones & Procesos"},
        "agiaPromptTagged": "ROL:\\nEres un Consultor de Procesos especializado en documentación de SOPs (Standard Operating Procedures).\\n\\nCONTEXTO:\\nProceso a documentar: [Ej: Proceso de facturación mensual]\\nResponsable actual: [Nombre]\\nFrecuencia: [Diario/Semanal/Mensual]\\nHerramientas usadas: [Sistemas, planillas]\\n\\nMETA:\\nCrea un manual de procedimientos que permita a cualquier persona ejecutar el proceso sin errores.\\n\\nFORMATO:\\n**NOMBRE DEL PROCESO:**\\n\\n**1. OBJETIVO:**\\n**2. ALCANCE:**\\n**3. RESPONSABLE:**\\n**4. FRECUENCIA:**\\n**5. PREREQUISITOS:**\\n**6. PASO A PASO:**\\n   6.1 [Acción] → [Resultado esperado]\\n   6.2 ...\\n**7. ERRORES COMUNES Y SOLUCIONES:**\\n**8. DOCUMENTOS RELACIONADOS:**\\n\\nRESTRICCIONES:\\n- Cada paso debe ser ejecutable por alguien nuevo\\n- Incluir screenshots donde sea útil\\n- Definir qué hacer si algo falla",
        "badPrompt": "Documenta el proceso de facturación",
        "badResponsePreview": "El proceso de facturación consiste en generar las facturas del mes...",
        "badResponseAnalysis": "Descripción narrativa, no ejecutable, sin pasos concretos ni manejo de errores.",
        "previewResponse": "**MANUAL: PROCESO DE FACTURACIÓN MENSUAL**\\n\\n**1. OBJETIVO:** Generar y enviar facturas a clientes antes del día 5 de cada mes.\\n\\n**2. ALCANCE:** Todos los servicios prestados en el mes anterior.\\n\\n**3. RESPONSABLE:** Asistente Administrativo\\n\\n**4. FRECUENCIA:** Mensual (días 1-3)\\n\\n**5. PREREQUISITOS:**\\n- Acceso a sistema Nubox (usuario: admin)\\n- Lista de servicios prestados (Excel compartido)\\n- Datos actualizados de clientes\\n\\n**6. PASO A PASO:**\\n\\n6.1 Exportar servicios prestados del sistema\\n    → Ir a Reportes > Servicios > Mes anterior > Exportar Excel\\n    → Resultado: Archivo 'servicios_MMYYYY.xlsx'\\n\\n6.2 Validar montos con encargados de área\\n    → Enviar Excel a jefes de área\\n    → Esperar confirmación (máx 24h)\\n\\n6.3 Generar facturas en Nubox\\n    → Ventas > Nueva Factura > Cargar desde Excel\\n    → Verificar: RUT, monto, glosa\\n\\n6.4 Enviar por email al cliente\\n    → Usar plantilla 'Factura Mensual'\\n    → CC a cobranza@empresa.cl\\n\\n**7. ERRORES COMUNES:**\\n- RUT inválido → Verificar en SII\\n- Cliente sin email → Llamar para solicitar\\n- Monto no cuadra → Escalar a jefe de área",
        "verticalMatrix": [
            {"rubro": "Servicios", "contexto": "Facturación por proyecto", "ajuste": "Incluir validación de % avance"},
            {"rubro": "Retail", "contexto": "Muchas transacciones", "ajuste": "Proceso automatizado con excepciones manuales"},
            {"rubro": "Construcción", "contexto": "Estados de pago", "ajuste": "Workflow de aprobación múltiple"},
            {"rubro": "SaaS", "contexto": "Facturación recurrente", "ajuste": "Verificar renovaciones y upgrades"},
            {"rubro": "Exportación", "contexto": "Factura electrónica", "ajuste": "Incluir documentos aduaneros"}
        ],
        "fineTuning": [
            "Video: 'Describe los pasos para que pueda grabar un video tutorial'",
            "Checklist: 'Convierte el manual en un checklist imprimible'",
            "Capacitación: 'Diseña una sesión de 30 min para entrenar a un reemplazo'"
        ],
        "metadata": {"score": 95, "technique": "SOP Documentation"},
        "suggestedAI": "Claude",
        "locked": False,
        "isStarPrompt": True
    },
    {
        "id": next_id + 4,
        "title": "Inventario de Activos Fijos: Control Total del Patrimonio",
        "category": "Operaciones & Procesos",
        "description": "Sistema de registro y control de activos fijos de la empresa",
        "problem": "No sabes cuántos computadores tienes, dónde están, ni si funcionan. Compras duplicados. Pierdes activos. El contador te pregunta por depreciación y no sabes.",
        "prioridadSegmento": {"Gestión & Adm.": 1},
        "categoriaSegmento": {"Gestión & Adm.": "Operaciones & Procesos"},
        "agiaPromptTagged": "ROL:\\nEres un Controller de Activos Fijos con experiencia en Pymes chilenas.\\n\\nCONTEXTO:\\nTipo de activos: [Ej: Computadores, muebles, vehículos, maquinaria]\\nCantidad aproximada: [Ej: 50 items]\\nSistema actual: [Ninguno / Excel básico / Software]\\n\\nMETA:\\nCrea un sistema de inventario de activos fijos con control de ubicación, estado y depreciación.\\n\\nFORMATO:\\n**ESTRUCTURA DE REGISTRO:**\\n| Campo | Descripción | Ejemplo |\\n\\n**PROCESO DE CONTROL:**\\n1. Alta de activo\\n2. Asignación\\n3. Verificación periódica\\n4. Baja\\n\\n**PLANTILLA DE INVENTARIO:**\\n[Estructura Excel/Sheets]\\n\\nRESTRICCIONES:\\n- Código único por activo\\n- Responsable asignado obligatorio\\n- Cálculo automático de depreciación",
        "badPrompt": "Necesito controlar los activos de la empresa",
        "badResponsePreview": "Puedes hacer una lista de todos los activos con nombre y ubicación...",
        "badResponseAnalysis": "Lista simple sin estructura, sin depreciación, sin procesos de control.",
        "previewResponse": "**SISTEMA DE CONTROL DE ACTIVOS FIJOS**\\n\\n**ESTRUCTURA DE REGISTRO:**\\n| Código | Descripción | Categoría | Fecha compra | Valor | Ubicación | Responsable | Estado | Depreciación |\\n| AF-001 | MacBook Pro 14' | Computadores | 15/01/2024 | $2.500.000 | Oficina central | Juan Pérez | Operativo | $625.000/año |\\n\\n**PROCESO DE ALTA:**\\n1. Recibir factura de compra\\n2. Generar código (AF-XXX)\\n3. Etiquetar físicamente el activo\\n4. Registrar en inventario\\n5. Asignar a responsable (firma de recepción)\\n\\n**VERIFICACIÓN SEMESTRAL:**\\n- Conteo físico vs registro\\n- Validar estado (Operativo/Mantenimiento/Baja)\\n- Fotografía de activos de alto valor\\n\\n**DEPRECIACIÓN AUTOMÁTICA:**\\n- Computadores: 3 años lineal\\n- Muebles: 7 años\\n- Vehículos: 7 años\\n- Maquinaria: 10 años\\n\\n**BAJA DE ACTIVO:**\\n- Autorización gerencia\\n- Documentar destino (venta/donación/desecho)\\n- Actualizar registro contable",
        "verticalMatrix": [
            {"rubro": "Tecnología", "contexto": "Equipos de alto valor", "ajuste": "Incluir número de serie y garantía"},
            {"rubro": "Manufactura", "contexto": "Maquinaria", "ajuste": "Agregar plan de mantenimiento preventivo"},
            {"rubro": "Retail", "contexto": "Múltiples sucursales", "ajuste": "Control por ubicación con transferencias"},
            {"rubro": "Transporte", "contexto": "Flota vehicular", "ajuste": "Incluir km, revisiones técnicas, seguros"},
            {"rubro": "Oficina", "contexto": "Mobiliario", "ajuste": "Fotografía de estado para arriendos"}
        ],
        "fineTuning": [
            "Etiquetas: 'Diseña el formato de etiqueta para pegar en cada activo'",
            "Conteo: 'Crea una pauta para hacer el conteo físico semestral'",
            "Depreciación: 'Genera la tabla de depreciación para enviar al contador'"
        ],
        "metadata": {"score": 94, "technique": "Fixed Asset Management"},
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

# Verificar cuántos casos tiene Gestión ahora
gestion_count = 0
for c in data:
    if any('Gesti' in k for k in c.get('prioridadSegmento', {}).keys()):
        gestion_count += 1

print(f"Casos en Gestión & Adm.: {gestion_count}")
