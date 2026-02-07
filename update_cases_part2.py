import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    231: {
        "badPrompt": "Dame ideas para vender más en mi checkout.",
        "badResponsePreview": "Puedes ofrecer envío gratis, agregar productos relacionados, mostrar descuentos por volumen, usar urgencia con contadores...",
        "badResponseAnalysis": "Lista genérica sin estrategia. No explica CÓMO implementar Order Bumps psicológicamente efectivos ni optimizar la secuencia de upsells.",
        "agiaPromptTagged": """ROL:
Eres un Especialista en Optimización de Checkout y Order Bumps. Dominas la psicología del momento de compra y maximización de ticket promedio.

CONTEXTO:
Producto principal: [Ej: Curso Online de Excel - $49.000]
Ticket promedio actual: [Ej: $49.000]
Tipo de checkout: [Ej: Hotmart / WooCommerce / Shopify]
Perfil del comprador: [Ej: Profesionales 25-40 años que quieren mejorar en su trabajo]

META:
Diseña 3 Order Bumps y 1 Upsell post-compra que aumenten el ticket 30%+.

FORMATO:
**ORDER BUMP 1:** (Complemento pequeño - bajo fricción)
**ORDER BUMP 2:** (Acelerador - ahorra tiempo)
**ORDER BUMP 3:** (Garantía extendida o soporte)
**UPSELL POST-COMPRA:** (Solo aparece DESPUÉS de pagar)

RESTRICCIONES:
- Order Bumps máximo 30% del precio principal
- Upsell puede ser 50-100% del precio
- Explica el copy exacto para cada checkbox
- Incluye la psicología detrás de cada oferta""",
        "previewResponse": """**ESTRATEGIA DE ORDER BUMPS + UPSELL**

**ORDER BUMP 1 - Plantillas Listas ($9.900):**
☑️ "Sí, agrega 47 plantillas Excel profesionales listas para usar (Ahorra 20 horas de trabajo)"
*Psicología: Gratificación inmediata - no tienen que crear nada, solo usar*

**ORDER BUMP 2 - Acceso de por Vida ($14.900):**
☑️ "Sí, quiero acceso de por vida + actualizaciones futuras (Valor normal: $29.900)"
*Psicología: Elimina el miedo de 'perder acceso' - seguridad*

**ORDER BUMP 3 - Soporte VIP ($19.900):**
☑️ "Sí, incluyo 30 días de soporte prioritario por WhatsApp con el instructor"
*Psicología: Reduce riesgo percibido - 'si me trabo, tengo ayuda'*

**UPSELL POST-COMPRA ($47.000):**
"¡Compra confirmada! 🎉 Oferta única de 10 minutos: Accede a la Masterclass Avanzada de Macros (incluye 12 automatizaciones prediseñadas). Precio normal: $97.000 → Solo hoy: $47.000"
*Psicología: Ya pagó = barrera mental quebrada + urgencia real*

**PROYECCIÓN:**
- Sin bumps: $49.000
- Con 40% de conversión en Bump 1+2: $58.840 (+20%)
- Con Upsell (15% conversión): $65.890 (+34%)""",
        "verticalMatrix": [
            {"rubro": "E-commerce Físico", "contexto": "Tienda de ropa", "ajuste": "Bump 1: 'Seguro de envío por $1.990'. Bump 2: 'Envoltorio de regalo premium $2.490'."},
            {"rubro": "SaaS y Software", "contexto": "Suscripción mensual", "ajuste": "Bump: 'Paga anual y ahorra 2 meses'. Upsell: 'Plan Team para 5 usuarios'."},
            {"rubro": "Servicios Profesionales", "contexto": "Consultoría", "ajuste": "Bump: 'Grabación de la sesión + transcripción'. Upsell: 'Paquete de 4 sesiones'."},
            {"rubro": "Salud y Fitness", "contexto": "Programa de entrenamiento", "ajuste": "Bump 1: 'Plan de alimentación personalizado'. Bump 2: 'Acceso a grupo VIP de WhatsApp'."},
            {"rubro": "Educación Online", "contexto": "Curso digital", "ajuste": "Bump: 'Kit de plantillas/recursos'. Upsell: 'Mentoría grupal mensual'."}
        ],
        "fineTuning": [
            "Precio: Dile: 'Mi producto cuesta $X, ajusta los bumps proporcionalmente.'",
            "Plataforma: Dile: 'Uso [Hotmart/Shopify/etc], dame el copy exacto para esa plataforma.'",
            "Nicho: Dile: 'Mi nicho es [X], personaliza los ejemplos para mi audiencia.'",
            "Cantidad: Dile: 'Solo quiero 1 bump y 1 upsell, elimina el resto.'"
        ],
        "metadata": {"score": 90, "technique": "Order Bump Psychology + One-Click Upsell"},
        "suggestedAI": "ChatGPT / Claude"
    },
    232: {
        "badPrompt": "Dame un script para cuando el cliente dice 'debo consultarlo'.",
        "badResponsePreview": "Responde: 'Entiendo, es una decisión importante. ¿Cuándo crees que podrías tener una respuesta? Te llamo la próxima semana.'",
        "badResponseAnalysis": "Acepta la objeción sin cuestionarla. Pierde el control de la venta y ahora depende de que el prospecto lo llame (spoiler: no lo hará).",
        "agiaPromptTagged": """ROL:
Eres un Coach de Ventas especializado en Manejo de Objeciones. Dominas la técnica del 'Isolation Play' para desmontar la excusa de 'debo consultarlo'.

CONTEXTO:
Producto/Servicio: [Ej: Seguro de vida]
Precio: [Ej: $89.000/mes]
A quién dice que debe consultar: [Ej: A su esposa]
Etapa de la venta: [Ej: Ya mostré beneficios, está interesado pero pone esta excusa]

META:
Genera un script de 4 pasos para desbloquear esta objeción SIN presionar.

FORMATO:
**PASO 1:** Validar (no pelear)
**PASO 2:** Aislar la objeción (¿es la única?)
**PASO 3:** Pre-cerrar (si él/ella dice que sí, ¿tú dices que sí?)
**PASO 4:** Facilitar (ofrecer ayuda para la consulta)

RESTRICCIONES:
- Nunca hagas sentir mal al prospecto por consultar
- No presiones con urgencia falsa
- Usa preguntas, no afirmaciones
- El objetivo es que el cierre ocurra HOY, no 'la próxima semana'""",
        "previewResponse": """**SCRIPT OBJECIÓN "DEBO CONSULTARLO"**

**PASO 1 - VALIDAR:**
"Totalmente, Carlos. Es una decisión importante y tiene sentido conversarlo. Déjame preguntarte algo rápido..."

**PASO 2 - AISLAR:**
"Aparte de consultarlo con tu señora, ¿hay algo más que te esté frenando? ¿El precio te hace sentido? ¿El producto en sí te convence?"

*[Si dice "sí, solo es eso", sigue al paso 3. Si menciona otra objeción, resuelve primero esa]*

**PASO 3 - PRE-CERRAR:**
"Perfecto. Entonces, si tu señora dice que está bien... ¿tú personalmente quieres avanzar con esto?"

*[Espera respuesta. Si dice SÍ, tienes un pre-cierre]*

**PASO 4 - FACILITAR:**
"Mira, te propongo algo. ¿Qué tal si la llamas ahora y lo conversamos los tres? Así puedo responder cualquier duda que ella tenga directamente. ¿Tienes 5 minutos para eso?"

*Alternativa si no puede llamar:*
"¿Qué te parece si te preparo un resumen de 1 página con los puntos clave para que ella lo vea esta noche? Mañana a las 10am te llamo para cerrar."

*[Recupera control del timing]*""",
        "verticalMatrix": [
            {"rubro": "Seguros y Finanzas", "contexto": "Póliza o inversión", "ajuste": "Paso 4: 'Puedo enviar un video de 2 min explicándole a ella los beneficios clave.'"},
            {"rubro": "Sector Inmobiliario", "contexto": "Compra/arriendo", "ajuste": "Paso 3: 'Si ella dice que sí, ¿agendaríamos la firma esta semana?'"},
            {"rubro": "B2B / Empresarial", "contexto": "Debe consultar al jefe", "ajuste": "Paso 4: 'Preparo una propuesta de 1 página que puedas mostrarle. ¿Qué puntos le importan más a él?'"},
            {"rubro": "Educación Online", "contexto": "Inversión en curso", "ajuste": "Paso 2: '¿Ella tiene alguna preocupación específica con los cursos online?'"},
            {"rubro": "Servicios del Hogar", "contexto": "Remodelación", "ajuste": "Paso 4: '¿Podemos hacer una videollamada rápida con los dos para mostrarles el diseño?'"}
        ],
        "fineTuning": [
            "Persona: Dile: 'El prospecto dice que debe consultar a [persona específica], ajusta el script.'",
            "Contexto: Dile: 'Estoy vendiendo [X] por [canal], adapta el tono.'",
            "Resistencia: Dile: 'El prospecto parece muy cerrado, dame una versión más suave.'",
            "Virtual: Dile: 'La venta es por Zoom/teléfono, ajusta el paso de la llamada a tres.'"
        ],
        "metadata": {"score": 93, "technique": "Isolation Play + Trial Close"},
        "suggestedAI": "Claude / ChatGPT"
    },
    233: {
        "badPrompt": "Hazme una propuesta comercial para un cliente.",
        "badResponsePreview": "PROPUESTA COMERCIAL\n\nEmpresa: [Tu empresa]\nCliente: [Cliente]\n\n1. Alcance del proyecto\n2. Entregables\n3. Cronograma\n4. Inversión: $X\n5. Términos y condiciones...",
        "badResponseAnalysis": "Propuesta burocrática de 5 páginas que nadie lee. No vende, no diferencia, no crea urgencia. El cliente la guarda 'para revisarla' y nunca responde.",
        "agiaPromptTagged": """ROL:
Eres un Consultor de Propuestas Comerciales de Alto Impacto. Tu especialidad es crear documentos de 1 página que se firman en 48 horas.

CONTEXTO:
Servicio a ofrecer: [Ej: Desarrollo de sitio web e-commerce]
Cliente: [Ej: Tienda de ropa que quiere vender online]
Problema principal del cliente: [Ej: Pierden ventas porque no tienen tienda online]
Inversión propuesta: [Ej: $2.500.000]
Competencia: [Ej: Freelancers que cobran $500.000]

META:
Crea una propuesta de 1 página que cierre sin necesidad de reunión de seguimiento.

FORMATO:
**SECCIÓN 1:** El Problema (costo de no actuar)
**SECCIÓN 2:** La Solución (qué incluye, en términos de resultado)
**SECCIÓN 3:** Inversión (con 3 opciones ancladas)
**SECCIÓN 4:** Garantía + Próximo Paso

RESTRICCIONES:
- Máximo 1 página (500 palabras)
- No uses jerga técnica
- Incluye el ROI proyectado
- Cierra con una sola acción clara (no 'contáctanos')""",
        "previewResponse": """**PROPUESTA DE 1 PÁGINA**

---

**EL PROBLEMA QUE ESTÁS RESOLVIENDO**
Cada día sin tienda online, pierdes clientes que buscan en Google y compran en tu competencia. Con un ticket promedio de $45.000 y 5 ventas perdidas/día = **$6.750.000/mes que no estás capturando.**

---

**LA SOLUCIÓN: Tu Tienda Online en 21 Días**
✅ Sitio web profesional con carrito de compras
✅ Integración con Webpay para pagos con tarjeta
✅ Diseño optimizado para celular (70% de tu tráfico)
✅ Capacitación para que manejes tú mismo los productos
✅ 30 días de soporte post-lanzamiento

---

**OPCIONES DE INVERSIÓN**

| Plan | Incluye | Inversión | ROI Esperado |
|------|---------|-----------|--------------|
| **Básico** | Solo diseño web | $1.200.000 | 2x en 6 meses |
| **⭐ Recomendado** | Web + Pasarela + Capacitación | **$2.500.000** | **5x en 4 meses** |
| **Premium** | Todo + Campaña Ads inicial | $4.000.000 | 8x en 3 meses |

---

**NUESTRA GARANTÍA**
Si tu tienda no está online y funcionando en 21 días, te devolvemos el 100% de tu inversión.

---

**PRÓXIMO PASO**
Firma este documento y deposita el 50% ($1.250.000) para reservar tu espacio en nuestro calendario de Marzo.

**Firma cliente: _________________ Fecha: _______**

*¿Preguntas? WhatsApp directo: [número]*""",
        "verticalMatrix": [
            {"rubro": "Agencias de Marketing", "contexto": "Propuesta de retainer", "ajuste": "Sección 1: Cuánto pierden en leads no capturados. Formato: Paquete mensual con métricas garantizadas."},
            {"rubro": "Consultores Independientes", "contexto": "Proyecto puntual", "ajuste": "Sección 3: Usa precio por día/hora vs. proyecto completo para anclar valor."},
            {"rubro": "Servicios Profesionales", "contexto": "Asesoría legal/contable", "ajuste": "Sección 4: Garantía de respuesta en 24h + revisiones ilimitadas."},
            {"rubro": "Constructoras e Inmobiliarias", "contexto": "Proyecto de remodelación", "ajuste": "Sección 1: Costo de retraso en ocupar el espacio (arriendos perdidos)."},
            {"rubro": "Tecnología y SaaS", "contexto": "Implementación de software", "ajuste": "Sección 2: Enfoca en horas ahorradas, no features del software."}
        ],
        "fineTuning": [
            "Formato: Dile: 'Hazla en formato visual/diseño, no solo texto.'",
            "Precio: Dile: 'Mi servicio cuesta $X, ajusta las opciones proporcionalmente.'",
            "Industria: Dile: 'Mi cliente es de [industria], personaliza el dolor y el ROI.'",
            "Urgencia: Dile: 'Agrega un elemento de escasez o deadline.'"
        ],
        "metadata": {"score": 91, "technique": "One-Page Proposal + Anchored Pricing"},
        "suggestedAI": "ChatGPT / Claude"
    },
    234: {
        "badPrompt": "Dame estrategias para conseguir clientes B2B en LinkedIn.",
        "badResponsePreview": "1. Optimiza tu perfil. 2. Publica contenido de valor. 3. Conecta con tu audiencia ideal. 4. Envía mensajes personalizados. 5. Usa Sales Navigator...",
        "badResponseAnalysis": "Consejos vagos que todos conocen. No hay sistema paso a paso, no hay scripts, no hay métricas. El usuario termina igual que antes: sin leads.",
        "agiaPromptTagged": """ROL:
Eres un Especialista en Social Selling B2B y LinkedIn Outreach. Diseñas sistemas de prospección que generan 5+ leads calificados por semana.

CONTEXTO:
Tu servicio/producto: [Ej: Consultoría de Transformación Digital para Pymes]
Cliente ideal (cargo): [Ej: Gerentes Generales de empresas de 20-100 empleados]
Industria objetivo: [Ej: Retail y Distribución]
Conexiones actuales en LinkedIn: [Ej: 500]

META:
Diseña un sistema semanal de prospección que genere 5 leads B2B calificados por semana.

FORMATO:
**DÍA 1-2:** Preparación y optimización
**DÍA 3-4:** Conexión y primer contacto
**DÍA 5:** Seguimiento y calificación
**SCRIPTS:** Mensajes exactos para cada etapa
**MÉTRICAS:** KPIs a trackear

RESTRICCIONES:
- Sin spam ni mensajes masivos
- Máximo 30 minutos diarios de trabajo
- No requiere LinkedIn Premium (aunque ayuda)
- Scripts conversacionales, no vendedores""",
        "previewResponse": """**SISTEMA LINKEDIN 5 LEADS/SEMANA**

**DÍA 1-2: PREPARACIÓN**
- Búsqueda: Gerente General + Retail + Chile (filtro por ubicación)
- Extraer 50 perfiles que cumplan el criterio
- Revisar sus últimas publicaciones/actividades

**DÍA 3-4: CONEXIÓN + PRIMER CONTACTO**

*Solicitud de conexión (sin nota):*
Solo envía la solicitud. Las notas genéricas reducen aceptación.

*Mensaje después de aceptar (espera 24h):*
"Hola [Nombre], gracias por conectar. Vi que lideras [Empresa] en el sector retail. Estoy trabajando con gerentes del rubro en [tema específico]. ¿Es algo que tienen en radar para este año o están enfocados en otras prioridades?"

*[Pregunta abierta, no vende nada aún]*

**DÍA 5: SEGUIMIENTO**

*Si responde con interés:*
"Qué bueno. Tengo un diagnóstico gratuito de 15 min donde analizo [problema específico] de tu empresa. ¿Te sirve agendarlo esta semana? [link Calendly]"

*Si no responde en 4 días:*
"[Nombre], ¿llegó mi mensaje anterior? No quiero ser spam, solo saber si este tema está en tu radar o no."

**MÉTRICAS SEMANALES:**
- 50 solicitudes enviadas
- 20 conexiones aceptadas (40%)
- 10 respuestas a primer mensaje (50%)
- 5 llamadas agendadas (25%)
- 1-2 propuestas enviadas""",
        "verticalMatrix": [
            {"rubro": "SaaS y Tecnología", "contexto": "Venta a CTOs", "ajuste": "Mensaje: 'Vi que están escalando el equipo de tech. ¿Cómo están manejando [problema técnico común]?'"},
            {"rubro": "Consultoría Estratégica", "contexto": "Venta a CEOs", "ajuste": "Pregunta de calificación: '¿Cuál es el objetivo #1 de la empresa para este semestre?'"},
            {"rubro": "Servicios Financieros", "contexto": "Venta a CFOs", "ajuste": "Mensaje: '¿En tu empresa están optimizando flujo de caja este año o es tema resuelto?'"},
            {"rubro": "RRHH y Capacitación", "contexto": "Venta a Gerentes de RRHH", "ajuste": "Pregunta: '¿Cómo están manejando la retención de talento clave este año?'"},
            {"rubro": "Marketing y Publicidad", "contexto": "Venta a CMOs", "ajuste": "Mensaje: 'Vi tu última campaña de [X]. ¿Están midiendo el CAC o enfocados en branding?'"}
        ],
        "fineTuning": [
            "Volumen: Dile: 'Quiero hacer outreach más agresivo, aumenta a 20 leads/semana.'",
            "Premium: Dile: 'Tengo Sales Navigator, integra esas funciones.'",
            "Industria: Dile: 'Mi cliente ideal es [cargo] en [industria], personaliza los mensajes.'",
            "Tiempo: Dile: 'Solo tengo 15 min/día para LinkedIn, simplifica el sistema.'"
        ],
        "metadata": {"score": 88, "technique": "Social Selling Funnel + Permission-Based Prospecting"},
        "suggestedAI": "ChatGPT / Claude"
    }
}

count = 0
for case in data:
    if case['id'] in updates:
        case.update(updates[case['id']])
        count += 1
        print(f"Actualizado ID {case['id']}: {case['title']}")

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\n{count} casos actualizados.")
