import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    235: {
        "badPrompt": "Ayúdame a responder a un cliente que se quejó.",
        "badResponsePreview": "Estimado cliente, lamentamos los inconvenientes causados. Tomaremos medidas para que no vuelva a ocurrir. Esperamos seguir contando con su preferencia.",
        "badResponseAnalysis": "Respuesta robótica y genérica. No reconoce el problema específico, no ofrece solución concreta, no transforma la experiencia negativa en oportunidad de fidelizar.",
        "agiaPromptTagged": """ROL:
Eres un Especialista en Service Recovery y Gestión de Crisis con Clientes. Transformas quejas furiosas en oportunidades de fidelización y recompra.

CONTEXTO:
Queja recibida: [Ej: "El producto llegó roto y nadie me responde hace 3 días. Pésimo servicio, nunca más compro aquí."]
Canal: [Ej: Comentario público en Instagram]
Historial del cliente: [Ej: Primera compra, ticket de $45.000]
Tu capacidad de compensación: [Ej: Puedo dar hasta 30% de descuento o envío gratis]

META:
Genera una respuesta de 3 pasos que transforme la queja en recompra.

FORMATO:
**PASO 1:** Reconocimiento inmediato + Disculpa genuina
**PASO 2:** Solución concreta + Compensación
**PASO 3:** Puente a la recompra

RESTRICCIONES:
- Si es público, responde público Y privado
- Nunca excuses ni culpes a terceros (proveedor, correo, etc.)
- Primero la disculpa, LUEGO la solución
- Incluye un gesto inesperado (over-deliver)""",
        "previewResponse": """**RESPUESTA A QUEJA FURIOSA**

**RESPUESTA PÚBLICA (Instagram/RRSS):**
"María, tienes toda la razón en estar molesta. Esto no debería haber pasado y menos que te dejáramos esperando 3 días. Te voy a escribir al privado ahora mismo para solucionarlo personalmente. Gracias por darnos la oportunidad de arreglarlo. — [Tu nombre]"

**MENSAJE PRIVADO:**

**PASO 1 - RECONOCIMIENTO:**
"María, soy [Nombre], dueño de [Empresa]. Primero que todo: lo siento. No hay excusa para que tu producto llegara roto y menos que nadie te respondiera. Eso no es el servicio que queremos dar."

**PASO 2 - SOLUCIÓN + COMPENSACIÓN:**
"Esto es lo que voy a hacer ahora mismo:
1. Te envío un producto nuevo HOY por Starken express, sin costo.
2. Te devuelvo el 100% de tu compra a tu cuenta.
3. Te dejo un cupón de 40% para tu próxima compra (código: MARIAVIP).
Total: producto gratis + plata de vuelta + descuento. Es lo mínimo."

**PASO 3 - PUENTE A RECOMPRA:**
"Sé que recuperar tu confianza toma tiempo. Si me das otra oportunidad, te prometo que esta vez va a ser diferente. ¿Me confirmas tu dirección para el reenvío?"

*[Resultado: Cliente pasa de 1 estrella a 5 estrellas y cuenta la historia de cómo lo arreglaron]*""",
        "verticalMatrix": [
            {"rubro": "E-commerce y Retail", "contexto": "Producto dañado/tardío", "ajuste": "Compensación: Reenvío express + cupón para siguiente compra. Gesto extra: Producto adicional de regalo."},
            {"rubro": "Restaurantes y Food", "contexto": "Mala experiencia de servicio", "ajuste": "Compensación: Invitación a volver con cena gratis + mensaje del chef. Gesto extra: Postre de cortesía al llegar."},
            {"rubro": "Servicios Profesionales", "contexto": "Trabajo mal ejecutado", "ajuste": "Compensación: Corrección sin costo + horas adicionales gratis. Gesto extra: Llamada personal del director."},
            {"rubro": "Hotelería y Turismo", "contexto": "Habitación no cumplió expectativas", "ajuste": "Compensación: Upgrade + noche gratis en próxima visita. Gesto extra: Amenidades de cortesía durante estadía."},
            {"rubro": "SaaS y Tecnología", "contexto": "Bug o caída de servicio", "ajuste": "Compensación: Crédito de 1 mes gratis + acceso a feature premium. Gesto extra: Llamada del CEO para pedir feedback."}
        ],
        "fineTuning": [
            "Tono: Dile: 'El cliente está FURIOSO, necesito un tono más empático y humilde.'",
            "Límite: Dile: 'Solo puedo compensar hasta $X, ajusta la oferta.'",
            "Canal: Dile: 'La queja llegó por [WhatsApp/Email/Presencial], ajusta el formato.'",
            "Público: Dile: 'Es un influencer con X seguidores, sube el nivel de compensación.'"
        ],
        "metadata": {"score": 94, "technique": "Service Recovery Paradox + Over-Delivery"},
        "suggestedAI": "Claude / ChatGPT"
    },
    236: {
        "badPrompt": "Dame un pitch corto para presentarme en networking.",
        "badResponsePreview": "Hola, soy Juan de Empresa X. Nos dedicamos a ofrecer soluciones integrales de marketing digital para empresas que buscan crecer en el mundo online. Si te interesa, contáctame.",
        "badResponseAnalysis": "Pitch olvidable y genérico. No dice qué problema resuelve, no genera curiosidad, no tiene gancho. Nadie va a pedir la tarjeta después de esto.",
        "agiaPromptTagged": """ROL:
Eres un Experto en Elevator Pitch y Networking Estratégico. Diseñas presentaciones de 30 segundos que consiguen tarjetas y reuniones.

CONTEXTO:
Tu nombre: [Ej: Carlos]
Tu profesión/negocio: [Ej: Consultor de Ventas B2B]
Tu cliente ideal: [Ej: Dueños de Pymes que venden servicios profesionales]
Tu resultado principal: [Ej: Duplico sus ventas en 90 días sin contratar vendedores]
Evento donde lo usarás: [Ej: Afterwork de la Cámara de Comercio]

META:
Crea un pitch de 30 segundos usando la fórmula XYZ que genere la pregunta "¿Cómo lo haces?"

FORMATO:
**VERSIÓN A:** Fórmula XYZ (Ayudo a X a lograr Y mediante Z)
**VERSIÓN B:** Fórmula Problema-Resultado
**VERSIÓN C:** Fórmula de Historia Rápida
**PREGUNTA DE CIERRE:** Para obtener la tarjeta

RESTRICCIONES:
- Máximo 30 segundos hablado (70 palabras)
- Debe generar curiosidad, no explicar todo
- Incluir un número o resultado específico
- Terminar con pregunta, no declaración""",
        "previewResponse": """**PITCH DE 30 SEGUNDOS - 3 VERSIONES**

**VERSIÓN A (XYZ):**
"Soy Carlos. Ayudo a dueños de Pymes de servicios a duplicar sus ventas en 90 días sin contratar vendedores ni gastar en publicidad. Básicamente, convierto a tu equipo actual en una máquina de cerrar. ¿Tú tienes equipo de ventas o vendes tú mismo?"

**VERSIÓN B (Problema-Resultado):**
"¿Sabes ese dolor de depender 100% de ti para las ventas de tu empresa? Yo resuelvo eso. El último cliente que ayudé pasó de $20 millones a $45 millones mensuales en 3 meses - y él dejó de vender. ¿Tú cuánto de tu tiempo dedicas a vender?"

**VERSIÓN C (Historia Rápida):**
"El mes pasado un dueño de consultora me dijo: 'Trabajo 12 horas al día y no puedo crecer.' 90 días después trabaja 6 horas y factura el doble. Eso es lo que hago. ¿A qué te dedicas tú?"

**PREGUNTA DE CIERRE (para obtener tarjeta):**
"Me interesa tu negocio. ¿Me das tu tarjeta y te mando un artículo que acabo de escribir sobre [tema relacionado]?"

*[La excusa del artículo justifica pedir el contacto]*""",
        "verticalMatrix": [
            {"rubro": "Coaching y Desarrollo Personal", "contexto": "Evento de emprendimiento", "ajuste": "Versión B: 'El 80% de mis clientes estaban quemados antes de llegar. Ahora trabajan la mitad y ganan el doble.'"},
            {"rubro": "Servicios Financieros", "contexto": "Reunión de empresarios", "ajuste": "Versión A: 'Ayudo a dueños de negocios a pagar 40% menos impuestos sin hacer nada ilegal.'"},
            {"rubro": "Tecnología y Software", "contexto": "Demo day o meetup tech", "ajuste": "Versión C: Contar historia de un cliente que automatizó X horas semanales."},
            {"rubro": "Sector Inmobiliario", "contexto": "Evento de corredores", "ajuste": "Versión A: 'Ayudo a corredores a cerrar propiedades sobre $300M sin depender de portales.'"},
            {"rubro": "Salud y Bienestar", "contexto": "Feria de wellness", "ajuste": "Versión B: '¿Sabes ese dolor de espalda que llevas años arrastrando? Yo lo resuelvo en 8 sesiones.'"}
        ],
        "fineTuning": [
            "Duración: Dile: 'Necesito un pitch de 15 segundos para presentación rápida.'",
            "Contexto: Dile: 'Lo usaré en [evento específico], ajusta el tono.'",
            "Resultado: Dile: 'Mi resultado principal no es claro, ayúdame a definirlo.'",
            "Seguimiento: Dile: 'Dame también un mensaje de WhatsApp para enviar después del evento.'"
        ],
        "metadata": {"score": 87, "technique": "XYZ Formula + Curiosity Gap"},
        "suggestedAI": "ChatGPT / Claude"
    },
    237: {
        "badPrompt": "Dame preguntas para una reunión de ventas con un cliente.",
        "badResponsePreview": "Aquí tienes preguntas: ¿Cuál es tu presupuesto? ¿Para cuándo lo necesitas? ¿Quién toma las decisiones? ¿Qué proveedores has considerado?",
        "badResponseAnalysis": "Preguntas transaccionales que ponen al prospecto a la defensiva. Parece interrogatorio. No descubren el dolor real ni construyen confianza. El cliente se cierra.",
        "agiaPromptTagged": """ROL:
Eres un Coach de Ventas Consultivas especializado en el método socrático. Diseñas diagnósticos que hacen que el cliente se venda solo.

CONTEXTO:
Tu producto/servicio: [Ej: Implementación de CRM]
Cliente potencial: [Ej: Gerente Comercial de distribuidora con 15 vendedores]
Problema que probablemente tiene: [Ej: Pierde seguimiento de prospectos, vendedores trabajan desorganizados]
Reunión: [Ej: Primera reunión de diagnóstico, 30 minutos]

META:
Diseña una secuencia de 10 preguntas que lleven al cliente a descubrir que necesita tu solución.

FORMATO:
**BLOQUE 1:** Preguntas de Situación (entender su mundo)
**BLOQUE 2:** Preguntas de Problema (encontrar el dolor)
**BLOQUE 3:** Preguntas de Implicación (amplificar el dolor)
**BLOQUE 4:** Preguntas de Necesidad-Beneficio (proyectar la solución)

RESTRICCIONES:
- Nunca menciones tu producto hasta el final
- Usa la técnica del silencio después de cada pregunta
- Las preguntas deben fluir como conversación, no interrogatorio
- El cliente debe llegar a la conclusión de comprar SOLO""",
        "previewResponse": """**DIAGNÓSTICO SOCRÁTICO - 10 PREGUNTAS**

**BLOQUE 1: SITUACIÓN (Minuto 0-5)**
1. "Cuéntame, ¿cómo funciona hoy el proceso de ventas de tu equipo? Desde que llega un lead hasta que se cierra."
2. "¿Cómo hacen seguimiento de los prospectos actualmente? ¿Excel, WhatsApp, de memoria?"
3. "¿Cuántos leads reciben al mes aproximadamente y cuántos se convierten en venta?"

**BLOQUE 2: PROBLEMA (Minuto 5-12)**
4. "Si tuvieras que identificar el punto donde más se pierden prospectos en ese proceso, ¿cuál sería?"
5. "Cuando un vendedor se va o falta, ¿qué pasa con sus prospectos activos?"
6. "¿Cómo sabes hoy si un vendedor está siguiendo bien a sus prospectos o los está dejando enfriar?"

**BLOQUE 3: IMPLICACIÓN (Minuto 12-20)**
7. "Si hiciéramos cuentas rápidas... esos prospectos que se pierden por falta de seguimiento, ¿cuánto representan en pesos al mes?"
8. "¿Qué impacto tiene en ti personalmente tener que estar encima del equipo para que hagan seguimiento?"
9. "¿Cuánto tiempo llevan con este problema? ¿Ha empeorado?"

**BLOQUE 4: NECESIDAD-BENEFICIO (Minuto 20-28)**
10. "Si existiera una forma de que tú pudieras ver en tiempo real qué está haciendo cada vendedor con cada prospecto, ¿cómo cambiaría tu día a día?"

*[Después de la respuesta, recién ahí introduces tu solución]*

**CIERRE:**
"Lo que me describes es exactamente para lo que diseñamos [producto]. ¿Quieres que te muestre cómo funcionaría en tu caso específico?"\"\"\",
        "verticalMatrix": [
            {"rubro": "SaaS y Tecnología", "contexto": "Venta de software", "ajuste": "Bloque 3: '¿Cuántas horas semanales pierde tu equipo en tareas que un sistema podría hacer automáticamente?'"},
            {"rubro": "Consultoría Estratégica", "contexto": "Proyecto de mejora", "ajuste": "Bloque 1: 'Si pudieras resolver UN solo problema de tu operación este trimestre, ¿cuál elegirías?'"},
            {"rubro": "Seguros y Finanzas", "contexto": "Asesoría financiera", "ajuste": "Bloque 2: '¿Qué pasaría con tu familia/empresa si [riesgo específico] ocurriera mañana?'"},
            {"rubro": "Capacitación y RRHH", "contexto": "Programa de formación", "ajuste": "Bloque 3: '¿Cuánto les cuesta en productividad cada empleado que no está bien entrenado?'"},
            {"rubro": "Marketing y Publicidad", "contexto": "Servicio de agencia", "ajuste": "Bloque 4: 'Si pudieras rastrear exactamente de dónde viene cada peso de venta, ¿cómo usarías esa información?'"}
        ],
        "fineTuning": [
            "Duración: Dile: 'La reunión es de 15 minutos, reduce a 5 preguntas clave.'",
            "Virtual: Dile: 'Es por Zoom, adapta para mantener atención en pantalla.'",
            "Industria: Dile: 'Mi cliente es de [industria], personaliza los dolores.'",
            "Objeciones: Dile: 'Agrega preguntas para anticipar la objeción de [precio/tiempo/etc].'"
        ],
        "metadata": {"score": 95, "technique": "Socratic Selling + SPIN Questions"},
        "suggestedAI": "Claude / ChatGPT"
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

print(f"\n{count} casos actualizados. ¡TOTAL: 10 casos completos!")
