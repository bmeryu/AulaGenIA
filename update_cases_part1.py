import json

# Cargar datos existentes
with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Diccionario con campos completos para cada caso
updates = {
    228: {
        "badPrompt": "Dame un script para vender caro sin dar descuento.",
        "badResponsePreview": "Aquí tienes un script: 'Entiendo que el precio le parece alto, pero le aseguro que la calidad lo vale'. Usa esto cuando te pidan rebaja.",
        "badResponseAnalysis": "Es un script genérico que no ataca la psicología del precio. El cliente sigue viendo 'caro'. No hay técnica de anclaje ni reencuadre del valor.",
        "agiaPromptTagged": """ROL:
Eres un Estratega de Pricing y Negociación B2B. Dominas la psicología del precio y las técnicas de anclaje para cerrar ventas premium.

CONTEXTO:
Producto/Servicio: [Ej: Consultoría de Transformación Digital]
Precio actual: [Ej: $5.000.000]
Objeción típica: [Ej: "Es muy caro, encontré algo más barato"]
Competencia barata: [Ej: Freelancers a $800.000]

META:
Genera un script de 3 pasos para defender tu precio premium sin ceder un peso.

FORMATO:
**1. REENCUADRE DEL CONTEXTO** (Cambia la conversación de precio a inversión)
**2. TÉCNICA DE ANCLAJE** (Presenta un escenario peor primero)
**3. CIERRE DE VALOR** (Pregunta que hace al cliente venderse solo)

RESTRICCIONES:
- Nunca menciones "descuento" ni "podemos ver el precio"
- Usa la Técnica del Precio-Dolor (mostrar el costo de NO hacerlo)
- Incluye una pregunta de cierre tipo Columbo""",
        "previewResponse": """**SCRIPT DE CIERRE SIN DESCUENTO**

**1. REENCUADRE DEL CONTEXTO:**
"Entiendo. Antes de hablar de precio, déjame preguntarte algo: ¿Cuánto te está costando cada mes que este problema sigue sin resolver? Si pierdes 2 clientes al mes por [problema], son $X.000.000 anuales. Mi servicio cuesta $5M una vez."

**2. TÉCNICA DE ANCLAJE:**
"Te cuento lo que veo en empresas que eligen la opción barata: en 6 meses vuelven a llamar porque el freelancer desapareció, perdieron los cambios, y ahora pagan el doble para arreglar el desastre. Les sale $12M. Conmigo: $5M, una vez."

**3. CIERRE DE VALOR:**
"Basándote en lo que hemos hablado... ¿Ves este proyecto como un gasto que quieres minimizar, o como una inversión que debe funcionar a la primera?"

*[Silencio - dejar que responda]*""",
        "verticalMatrix": [
            {"rubro": "Sector Inmobiliario", "contexto": "Corretaje premium", "ajuste": "Ancla con la pérdida por vender mal: 'Si vendes $10M bajo tasación, mi comisión de $3M te ahorró $7M'."},
            {"rubro": "Salud y Bienestar", "contexto": "Tratamiento especializado", "ajuste": "Ancla con tratamientos fallidos: '¿Cuánto llevas gastado en soluciones que no funcionaron?'"},
            {"rubro": "Legal y Profesional", "contexto": "Asesoría legal", "ajuste": "Ancla con el costo de una demanda: 'Un contrato mal hecho puede costarte $50M en juicio'."},
            {"rubro": "Tecnología y Software", "contexto": "Desarrollo a medida", "ajuste": "Ancla con el costo de migrar después: 'Rehacer un sistema mal hecho cuesta 3x más'."},
            {"rubro": "Educación y Formación", "contexto": "Capacitación ejecutiva", "ajuste": "Ancla con errores de gerencia: 'Un mal líder te cuesta su sueldo x10 en rotación'."}
        ],
        "fineTuning": [
            "Tono: ¿Muy agresivo? Dile: 'Hazlo más consultivo, como un doctor que recomienda, no vende.'",
            "Números: ¿Necesitas cifras? Dile: 'Agrega proyecciones financieras realistas para una empresa de $X facturación.'",
            "Objeción específica: ¿El cliente dice otra cosa? Dile: 'Adapta el script para la objeción: [objeción exacta].'",
            "Industria: ¿Otro sector? Dile: 'Reescríbelo para [industria] con ejemplos de ese mercado.'"
        ],
        "metadata": {"score": 92, "technique": "Price Anchoring + Columbo Close"},
        "suggestedAI": "Claude / ChatGPT"
    },
    229: {
        "badPrompt": "Escríbeme un email para recuperar un cliente perdido.",
        "badResponsePreview": "Asunto: ¡Te extrañamos! Hola [Nombre], hace tiempo que no hablamos. ¿Cómo estás? Me encantaría saber si podemos ayudarte en algo nuevo...",
        "badResponseAnalysis": "Email genérico que parece spam. No hay gancho, no hay urgencia, no hay razón para responder. El prospecto lo ignora como todos los emails de 'te extrañamos'.",
        "agiaPromptTagged": """ROL:
Eres un Especialista en Reactivación de Prospectos Fríos. Dominas la técnica del "9-Word Email" y estrategias de outreach de alto impacto.

CONTEXTO:
Nombre del prospecto: [Ej: Carlos]
Último contacto: [Ej: Hace 4 meses, quedó en "pensarlo"]
Producto/Servicio que le ofreciste: [Ej: Software de gestión de inventario]
Razón probable del ghosteo: [Ej: Posiblemente eligió competencia o lo postergó]

META:
Genera una secuencia de 3 emails ultra-cortos para reactivar al prospecto en 48 horas.

FORMATO:
**EMAIL 1 (Día 1):** 9 palabras máximo - solo pregunta directa
**EMAIL 2 (Día 2):** Seguimiento breve si no responde
**EMAIL 3 (Día 3):** Cierre con "última oportunidad"

RESTRICCIONES:
- Email 1 máximo 9 palabras (la técnica)
- Sin presentaciones largas ni "¿cómo estás?"
- Tono: curioso, no desesperado
- No adjuntes nada, no metas links""",
        "previewResponse": """**SECUENCIA DE REACTIVACIÓN 48H**

**EMAIL 1 (Día 1) - El 9-Word Email:**
Asunto: Carlos, ¿sigues buscando resolver [problema de inventario]?

Cuerpo: (vacío o solo "Avísame")

---

**EMAIL 2 (Día 2) - Follow-up:**
Asunto: RE: Carlos, ¿sigues buscando...

"Carlos, no sé si viste mi email ayer. ¿Esto sigue siendo prioridad para ti o lo postergaron?"

---

**EMAIL 3 (Día 3) - Cierre:**
Asunto: Cierro tu archivo

"Carlos, voy a asumir que esto ya no es prioridad y cerrar tu expediente. Si me equivoco, responde 'ACTIVO' y lo retomamos."

*[Esta técnica tiene 30-40% de respuesta porque activa el FOMO]*""",
        "verticalMatrix": [
            {"rubro": "Servicios Profesionales", "contexto": "Propuesta de consultoría pendiente", "ajuste": "Email 1: '¿Sigues necesitando ayuda con [problema específico del proyecto]?'"},
            {"rubro": "SaaS y Tecnología", "contexto": "Demo que nunca cerró", "ajuste": "Email 3: 'Voy a desactivar tu cuenta trial. ¿La reactivamos o la cierro?'"},
            {"rubro": "Sector Inmobiliario", "contexto": "Comprador que desapareció", "ajuste": "Email 1: '¿Seguiste buscando depto en [zona] o ya encontraste?'"},
            {"rubro": "Educación y Formación", "contexto": "Lead de curso que no inscribió", "ajuste": "Email 3: 'Cierro las inscripciones el viernes. ¿Cuento contigo o libero tu cupo?'"},
            {"rubro": "Salud y Bienestar", "contexto": "Paciente que no agendó", "ajuste": "Email 1: '¿Pudiste resolver el [dolor/problema] o sigue pendiente?'"}
        ],
        "fineTuning": [
            "Canal: ¿Necesitas WhatsApp? Dile: 'Adapta la secuencia para mensajes de WhatsApp, más informales.'",
            "Tono: ¿Muy directo? Dile: 'Suaviza el Email 3, menos confrontacional.'",
            "Contexto: Dile: 'El prospecto me ghosteó después de [situación específica], ajusta el mensaje.'",
            "Timing: ¿Otro ritmo? Dile: 'Extiéndelo a 5 días, un email cada día y medio.'"
        ],
        "metadata": {"score": 89, "technique": "9-Word Email + Break-Up Email"},
        "suggestedAI": "ChatGPT / Claude"
    },
    230: {
        "badPrompt": "Dame un script para vender por WhatsApp.",
        "badResponsePreview": "¡Hola! 👋 ¿Cómo estás? Te escribo de [Empresa]. Tenemos una promoción increíble este mes. ¿Te interesa saber más? Mira nuestro catálogo...",
        "badResponseAnalysis": "Mensaje spam que cualquiera ignora. Parece copiado y pegado. No hay personalización, el cliente siente que es uno más de una lista masiva.",
        "agiaPromptTagged": """ROL:
Eres un Experto en Ventas Conversacionales por WhatsApp. Dominas el arte de cerrar en chat sin parecer vendedor.

CONTEXTO:
Producto/Servicio: [Ej: Curso de Marketing Digital]
Precio: [Ej: $197.000]
Lead: [Ej: Preguntó por el curso en Instagram, le pasé mi WhatsApp]
Objeción esperada: [Ej: "Está caro" o "Lo pienso"]

META:
Crea un script de 3 mensajes que lleven al cierre natural.

FORMATO:
**MENSAJE 1:** Validación + Pregunta de diagnóstico (no vendas aún)
**MENSAJE 2:** Puente emocional + Introducción de solución
**MENSAJE 3:** Cierre con urgencia suave + CTA

RESTRICCIONES:
- Máximo 3 líneas por mensaje (nadie lee muros)
- Usa emojis con moderación (1-2 por mensaje)
- No mandes audios largos ni PDFs
- Incluye una pregunta en cada mensaje para mantener la conversación""",
        "previewResponse": """**SCRIPT WHATSAPP 3 MENSAJES**

**MENSAJE 1 - Diagnóstico:**
"Hola [Nombre] 👋 Vi que te interesó el curso. Antes de contarte, ¿qué es lo que más te está costando ahora con tu marketing? Así te digo si esto es para ti o no."

*[Esperar respuesta - CLAVE: no avanzar sin que conteste]*

**MENSAJE 2 - Puente:**
"Entiendo perfecto eso de [repetir su dolor]. La mayoría llega igual. Lo que hace diferente este curso es que en 4 semanas ya tienes tu primera campaña vendiendo, no solo teoría 📈 ¿Te sirve si te cuento cómo funciona?"

**MENSAJE 3 - Cierre:**
"Mira, el precio normal es $250.000 pero esta semana está a $197.000 porque estamos llenando el grupo de Marzo. Quedan 4 cupos. ¿Te guardo uno o prefieres esperar a la próxima fecha?"

*[Cierre con escasez real + opción binaria]*""",
        "verticalMatrix": [
            {"rubro": "Coaching y Mentoring", "contexto": "Programa de acompañamiento", "ajuste": "Mensaje 1: '¿Qué es lo que más te tiene trabado ahora que te hizo buscar ayuda?'"},
            {"rubro": "E-commerce y Retail", "contexto": "Producto físico premium", "ajuste": "Mensaje 3: 'Este modelo se agota rápido. ¿Te lo reservo o lo dejo para el siguiente que pregunte?'"},
            {"rubro": "Servicios del Hogar", "contexto": "Cotización de servicio", "ajuste": "Mensaje 2: 'La mayoría que nos contacta tiene [problema común]. ¿Es tu caso también?'"},
            {"rubro": "Profesionales Independientes", "contexto": "Asesoría/Consulta", "ajuste": "Mensaje 3: 'Mi agenda de Marzo está casi llena. ¿Agendamos para esta semana o la próxima?'"},
            {"rubro": "Fitness y Bienestar", "contexto": "Programa de entrenamiento", "ajuste": "Mensaje 1: '¿Qué resultado específico buscas? ¿Bajar de peso, tonificar, o sentirte con más energía?'"}
        ],
        "fineTuning": [
            "Tono: ¿Muy vendedor? Dile: 'Hazlo más conversacional, como si hablara con un conocido.'",
            "Largo: ¿Mensajes muy largos? Dile: 'Reduce cada mensaje a máximo 2 líneas.'",
            "Objeción: Dile: 'Agrega respuesta para cuando diga: [objeción específica].'",
            "Precio: Dile: 'No quiero mencionar precio por chat, cierra para una llamada.'"
        ],
        "metadata": {"score": 91, "technique": "Conversational Selling + SPIN Questions"},
        "suggestedAI": "ChatGPT / Claude"
    }
}

# Actualizar casos existentes
count = 0
for case in data:
    if case['id'] in updates:
        case.update(updates[case['id']])
        count += 1
        print(f"Actualizado ID {case['id']}: {case['title']}")

# Guardar
with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\n{count} casos actualizados con campos completos.")
