const casesData = [
    {
        "id": 1,
        "category": "Productividad Ninja",
        "title": "El Filtra-Correos: De Caos a Inbox Zero",
        "icon": "lightbulb",
        "problem": "Control total del flujo de comunicación diaria y priorización de clientes.",
        "badPrompt": "Resume mis correos pendientes y dime qué es importante.",
        "badResponsePreview": "Tienes 10 correos nuevos. 3 son de clientes preguntando por pedidos, 2 son facturas de servicios y el resto es spam de LinkedIn y promociones de viajes. Deberías revisar los de los clientes primero para que no se molesten.",
        "badResponseAnalysis": "La IA actúa como un simple lector pasivo. No ofrece acciones concretas, no redacta borradores y mezcla lo urgente con lo informativo sin un criterio de negocio real.",
        "agiaPromptTagged": "1. ROL: Actúa como un Asistente Ejecutivo de Alta Dirección.\n2. CONTEXTO:\n   📎 ADJUNTO: Captura de pantalla de mi bandeja de entrada con los últimos 15 correos.\n   Mi negocio: [Venta de productos online / Servicios / etc.]\n   Prioridades del día: [Pagos pendientes, consultas de clientes, envíos]\n3. META: Categorizar cada correo por urgencia y redactar borrador de respuesta listo para enviar.\n4. RESTRICCIONES:\n   - Clasifica en: \"Responder HOY\", \"Delegar\", \"Archivar\".\n   - Tono: Profesional pero cercano (estilo chileno).\n   - Máximo 3 líneas por respuesta.\n5. FORMATO: Tabla con columnas: [Remitente] | [Resumen] | [Acción + Borrador].",
        "previewResponse": "| Remitente | Resumen Crítico | Acción Sugerida |\n| :--- | :--- | :--- |\n| Juan Pérez (Cliente) | Reclamo por retraso en envío Starken. El cliente suena molesto por falta de tracking. | **Responder Hoy:** \"Hola Juan, te pido mil disculpas por el retraso. El envío está en tránsito y aquí tienes el número de seguimiento...\" |\n| Tesorería Municipal | Aviso de pago de patentes comerciales vence este viernes. | **Delegar:** Enviar a Contabilidad para pago inmediato y evitar multas. |\n| Newsletter IA | Resumen de novedades de la semana. | **Informativo:** Archivar para lectura de fin de semana. |",
        "suggestedAI": "ChatGPT Plus",
        "exampleTip": "Usa esto cuando tengas +20 correos sin leer y poco tiempo.",
        "validationTip": "Verifica que la prioridad asignada coincida con la fecha de vencimiento real.",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 2,
        "category": "Productividad Ninja",
        "title": "Ninja de Actas: De Reunión Eterna a Tareas Claras",
        "icon": "lightbulb",
        "problem": "Sistematización de decisiones para eliminar el 'reunionismo' improductivo.",
        "badPrompt": "Haz un resumen de esta transcripción de reunión.",
        "badResponsePreview": "En la reunión hablaron sobre el nuevo logo y que se van a juntar el próximo jueves. Pedro dijo que no tiene el Excel listo aún y María mencionó que hay que llamar a los proveedores pronto para el evento.",
        "badResponseAnalysis": "El resultado es un párrafo narrativo que obliga al usuario a volver a leerlo todo para encontrar los hitos. No asigna responsables, no define plazos claros ni identifica bloqueadores.",
        "agiaPromptTagged": "1. ROL: Eres un Project Manager experto en metodologías Ágiles.\n2. CONTEXTO:\n   🎤 ADJUNTO: Audio de la reunión (o transcripción automática de Zoom/Meet).\n   Participantes: [Nombres y cargos]\n   Objetivo de la reunión: [Definir campaña de verano]\n3. META: Extraer SOLO las decisiones tomadas y tareas asignadas con responsables.\n4. RESTRICCIONES:\n   - Ignora la charla social, solo hechos.\n   - Identifica bloqueadores que impiden avanzar.\n   - Tono ejecutivo, sin relleno.\n5. FORMATO: Resumen (1 frase) + Lista Decisiones + Tabla Tareas [Tarea|Responsable|Plazo|Bloqueador].",
        "previewResponse": "**Resumen Ejecutivo:** Se posterga el lanzamiento de la campaña de verano para el 15 de enero debido a falta de stock de insumos básicos.\n\n**Decisiones Clave:**\n- Se cancela la contratación de la agencia de influencers por falta de presupuesto.\n- Se prioriza la atención al cliente vía WhatsApp mediante un bot automatizado para descongestionar correos.\n\n**Tabla de Tareas:**\n| Tarea | Responsable | Plazo | Bloqueador |\n| :--- | :--- | :--- | :--- |\n| Ajustar presupuesto Excel | Pedro | Lunes | Falta reporte de ventas de Noviembre. |\n| Contactar proveedor Starken | María | Hoy | Ninguno. |",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 4,
        "category": "Productividad Ninja",
        "title": "Sintetizador de PDF: De 50 páginas a 5 minutos",
        "icon": "lightbulb",
        "problem": "Ahorro masivo en lectura técnica. Permite tomar decisiones rápidas sin parálisis informativa.",
        "badPrompt": "Resume este documento largo.",
        "badResponsePreview": "El documento es un informe legal sobre la nueva ley de teletrabajo en Chile. Explica las obligaciones del empleador en cuanto a seguridad, salud y los anexos que deben firmar los trabajadores remotos.",
        "badResponseAnalysis": "Resumen genérico y 'enciclopédico'. No indica costos monetarios, fechas límite de implementación ni cambios específicos que el dueño de la pyme deba firmar hoy mismo.",
        "agiaPromptTagged": "1. ROL: Analista de Inteligencia con capacidad de síntesis extrema.\n2. CONTEXTO:\n   📄 ADJUNTO: PDF del documento legal/técnico (o copia del texto).\n   Mi situación: Soy dueño de Pyme con [X] empleados.\n   Lo que me importa: Costos, multas, fechas límite.\n3. META: Extraer SOLO lo que me afecta directamente y debo hacer esta semana.\n4. RESTRICCIONES:\n   - Máximo 300 palabras.\n   - Sin jerga legal, explícalo como si fuera un café con un amigo.\n   - Destaca montos en pesos chilenos.\n5. FORMATO: 'La Carnecita' (resumen en 3 líneas) + Tabla Riesgos/Oportunidades.",
        "previewResponse": "**La Carnecita:** El nuevo reglamento exige el pago proporcional de servicios (luz e internet). Costo estimado: $15.000/mes adicionales por cada empleado en modalidad 100% remota.\n\n**Análisis de Impacto para la Pyme:**\n| Riesgo | Oportunidad |\n| :--- | :--- |\n| Multas graves de la Dirección del Trabajo si no hay anexo firmado antes de fin de mes. | Reducción potencial del 30% en costos fijos de oficina física (arriendo y aseo). |\n| Necesidad de fiscalizar el derecho a desconexión (12 horas continuas). | Atractivo para retención de talento joven que valora la flexibilidad. |",
        "metadata": {
            "score": 96
        }
    },
    {
        "id": 5,
        "category": "Productividad Ninja",
        "title": "Informe Sin Relleno: Redacción Ejecutiva BLUF",
        "icon": "lightbulb",
        "problem": "Autoridad y respeto al tiempo del socio. Informes que se leen y generan impacto.",
        "badPrompt": "Escribe un informe de ventas.",
        "badResponsePreview": "Durante el mes pasado, las ventas subieron un 10%. Estamos muy contentos con el equipo de ventas porque se esforzaron mucho. Esperamos seguir así el próximo mes y mejorar los gastos que fueron normales.",
        "badResponseAnalysis": "Redacción amateur y emocional. No hay datos comparativos duros, no hay diagnóstico de problemas raíz y carece de un plan de acción concreto con responsables.",
        "agiaPromptTagged": "1. ROL: Consultor Estratégico Senior. 2. CONTEXTO: Ventas: $50M (Meta $60M). Gastos: $20M. 3. META: Reporte con método BLUF. 4. RESTRICCIONES: Sin adjetivos vacíos. Tono ejecutivo directo. 5. FORMATO: Conclusión -> 3 Insights -> 2 Pasos a seguir.",
        "previewResponse": "**RESUMEN EJECUTIVO (BLUF):** No se alcanzó la meta de ventas mensual por un déficit del 16% ($10M), provocado principalmente por la caída del canal retail, aunque el margen neto de la operación se mantuvo saludable en 60%.\n\n**Insights Clave:**\n- El canal digital creció un 22%, lo que compensó parcialmente la caída de ventas físicas.\n- El costo de adquisición (CAC) en Facebook Ads subió un 5% este mes.\n- La tasa de retención de clientes actuales subió al 85% gracias al nuevo programa de lealtad.\n\n**Pasos a seguir:**\n1. Reasignar el 40% del presupuesto de retail a pauta digital de forma inmediata.\n2. Lanzar campaña de reactivación para clientes inactivos este lunes a las 09:00 AM.",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 7,
        "category": "Productividad Ninja",
        "title": "Traductor Legal: Auditor de 'Letra Pequeña'",
        "icon": "lightbulb",
        "problem": "Seguridad ante contratos abusivos. Ahorro en consultas legales preventivas.",
        "badPrompt": "Dime qué dice este contrato.",
        "badResponsePreview": "Este es un contrato de arriendo de local comercial por un periodo de 12 meses renovables. Dice que tienes que pagar 500 mil pesos al mes, dejar un mes de garantía y que no puedes hacer ruidos molestos.",
        "badResponseAnalysis": "Ignora por completo las cláusulas de salida anticipada, las multas por mora excesiva, las condiciones de devolución de garantía y la legalidad de las cláusulas según la ley chilena vigente.",
        "agiaPromptTagged": "1. ROL: Abogado experto Chile. 2. CONTEXTO: Cláusulas contrato arriendo local comercial. 3. META: Identificar abusos y fechas críticas. 4. RESTRICCIONES: Tono café (explicación directa). 5. FORMATO: Semáforo de Riesgo.",
        "previewResponse": "🔴 **Riesgo Rojo:** La cláusula 4 permite al arrendador entrar al local sin previo aviso para \"inspección\". Esto es abusivo. Exige agregar \"previo aviso escrito de 24h y en horario hábil\".\n🟡 **Riesgo Amarillo:** El reajuste es trimestral por IPC. Lo estándar en Chile para pymes es semestral o anual. Esto podría asfixiar tu flujo de caja si la inflación sube de golpe.\n🟢 **Punto Seguro:** La cláusula de término anticipado es justa: aviso de 60 días sin multas adicionales, lo que te da flexibilidad si el local no rinde.",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 8,
        "category": "Productividad Ninja",
        "title": "Presentaciones Express: Storytelling TED",
        "icon": "lightbulb",
        "problem": "Presentaciones que no aburren y cierran tratos rápidamente.",
        "badPrompt": "Hazme una presentación de marketing.",
        "badResponsePreview": "Slide 1: Título. Slide 2: Qué es marketing. Slide 3: Nuestras redes sociales. Slide 4: Por qué elegirnos. Slide 5: Gracias y contacto.",
        "badResponseAnalysis": "Estructura plana, académica y aburrida. No utiliza técnicas de persuasión, no identifica el problema del cliente ni crea una narrativa que mantenga al espectador despierto.",
        "agiaPromptTagged": "1. ROL: Diseñador Storytelling. 2. CONTEXTO: IA en teletrabajo para dueños de negocio estresados. 3. META: 7 diapositivas alto impacto. 4. RESTRICCIONES: Max 20 palabras por slide. 5. FORMATO: [Slide] | [Título] | [Guion] | [Sugerencia Visual].",
        "previewResponse": "Slide 1: **\"Tu negocio no necesita más horas, necesita mejores herramientas\"**. Guion: \"Hoy vengo a mostrarles cómo recuperar 2 horas de su vida cada día sin contratar a nadie más\". Visual: Foto de un dueño de negocio cerrando su laptop con una sonrisa a las 5 PM.\nSlide 2: **\"El costo del 'yo lo hago todo'\"**. Guion: \"Hacerlo todo manual te está costando más caro que una multa del SII. Estás perdiendo tiempo de estrategia por hacer tareas de robot\". Visual: Un reloj de arena llenándose de papeles de oficina.",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 10,
        "category": "Productividad Ninja",
        "title": "Limpieza de Excel: Normalizador de Datos",
        "icon": "lightbulb",
        "problem": "Convierte datos basura en activos listos para el CRM. Elimina error humano.",
        "badPrompt": "Arregla esta lista de nombres.",
        "badResponsePreview": "Aquí tienes los nombres ordenados: Juan Pérez +56912345678, Maria Paz 98765432, Pedro Picapiedra Santiago.",
        "badResponseAnalysis": "Solo copia los datos. No estandariza los prefijos telefónicos, no separa nombres de apellidos en columnas distintas y no entrega un formato importable (CSV o Tabla) para herramientas de venta.",
        "agiaPromptTagged": "1. ROL: Experto en organizar contactos de clientes.\n2. CONTEXTO:\n   📊 ADJUNTO: Excel o captura con mi lista de contactos desordenados.\n   Origen: Contactos de feria, WhatsApp, tarjetas de presentación.\n   Destino: Ordenarlos para usarlos en [HubSpot / Clientify / Google Contacts / Excel].\n3. META: Limpiar y organizar todos los datos para poder usarlos fácilmente.\n4. RESTRICCIONES:\n   - Teléfonos en formato chileno: +56 9 XXXX XXXX.\n   - Separar Nombre y Apellido en columnas distintas.\n   - Marcar datos incompletos como 'Revisar'.\n5. FORMATO: Tabla lista para copiar y pegar en Excel.",
        "previewResponse": "```csv\nNombre,Apellido,Telefono,Ciudad,Status\nJuan,Perez,+56 9 1234 5678,Santiago,Nuevo\nMaria,Paz,+56 9 8765 4321,Concepcion,Nuevo\nPedro,Picapiedra,+56 9 9988 7766,Valparaiso,Filtro\n```\n*(Nota: Datos listos para copiar y pegar en Excel > Datos > Texto en columnas).*",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 11,
        "category": "Ventas & Persuasión",
        "title": "Cold Email B2B: El Abre-Puertas Estratégico",
        "icon": "lightbulb",
        "problem": "Generación de reuniones reales con tomadores de decisión. ROI directo.",
        "badPrompt": "Escribe un correo para vender mi software.",
        "badResponsePreview": "Hola, somos ContaPro. Tenemos un software de contabilidad muy rápido y seguro que usan muchas empresas en Chile. ¿Le gustaría agendar una reunión para mostrarle nuestros planes y precios? Saludos.",
        "badResponseAnalysis": "El correo es egocéntrico (habla de 'nosotros'). No identifica un dolor real del cliente (como el miedo a las multas) y suena a spam genérico que se va directo a la papelera.",
        "agiaPromptTagged": "1. ROL: Experto en escribir correos de primer contacto que consiguen reuniones.\n2. CONTEXTO:\n   🎯 Mi servicio: [Ej: Software de contabilidad para Pymes]\n   Problema que resuelvo: [Ej: Evita errores manuales que generan multas del SII]\n   Cliente ideal: [Ej: Contadores y dueños de Pymes en Chile]\n3. META: Crear correo que consiga una REUNIÓN (no vender el producto directo).\n4. RESTRICCIONES:\n   - Máximo 100 palabras (nadie lee correos largos).\n   - Asunto en minúsculas, sin emojis (evita ir a spam).\n   - Empieza mostrando que entiendes su problema.\n5. FORMATO: [Asunto del correo] + [Cuerpo listo para enviar].",
        "previewResponse": "**Asunto:** duda con tu último f29\n\n**Cuerpo:**\n\"Hola [Nombre], gestionar el IVA en Excel funciona... hasta que el SII detecta una inconsistencia y te llega una notificación de multa de 10 UTM por un simple error de dedo.\n\nHe visto que muchas pymes en Chile pierden sus 'lucas' y su tranquilidad por este proceso manual.\n\nEn ContaPro automatizamos esa conciliación para que duermas tranquilo. ¿Te sobran 7 minutos el jueves para mostrarte cómo evitar ese dolor de cabeza?\"",
        "metadata": {
            "score": 95
        }
    },
    {
        "id": 12,
        "category": "Ventas & Persuasión",
        "title": "Ads: Freno de Scroll (Copy Directo)",
        "icon": "lightbulb",
        "badPrompt": "Texto para anuncio de zapatillas.",
        "badResponsePreview": "¡RunPro! Las mejores zapatillas de running del mercado. Cómodas, duraderas y con estilo. Compra ahora con envío gratis a todo Chile. No te las pierdas.",
        "badResponseAnalysis": "Copy plano y débil. No apela a un beneficio específico ni resuelve un problema (como el dolor articular), no crea una imagen mental de deseo y el llamado a la acción es genérico.",
        "agiaPromptTagged": "1. ROL: Media Buyer Senior. 2. CONTEXTO: Zapatillas gel para corredores con dolor rodilla. 3. META: 3 variaciones AIDA. 4. RESTRICCIONES: Gancho < 40 carac. 5. FORMATO: Lista numerada con [Gancho] | [Cuerpo] | [CTA].",
        "previewResponse": "1. **Variación Empatía:**\n   - **Gancho:** 🛑 ¿Tus rodillas crujen al correr?\n   - **Cuerpo:** No es tu edad, es el impacto del asfalto. Las nuevas RunPro absorben el golpe para que vuelvas a disfrutar del running sin dolor desde el primer kilómetro.\n   - **CTA:** Quiero correr sin dolor.\n\n2. **Variación Beneficio:**\n   - **Gancho:** Corre 5km más este domingo.\n   - **Cuerpo:** Tecnología de rebote en gel que cuida tus articulaciones mientras superas tus metas. La comodidad que tus pies pedían.\n   - **CTA:** Ver modelos en oferta.",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 13,
        "category": "Ventas & Persuasión",
        "title": "Ficha de Producto: El Vendedor Sensorial",
        "icon": "lightbulb",
        "badPrompt": "Describe esta cafetera.",
        "badResponsePreview": "Esta cafetera es de acero inoxidable de alta calidad. Tiene capacidad para 1 litro de café y mantiene el calor por mucho tiempo. Es fácil de lavar y queda bien en cualquier cocina.",
        "badResponseAnalysis": "Se enfoca solo en las características técnicas (material, capacidad). No vende la experiencia, el aroma ni el placer de tomar un café perfecto, perdiendo la conexión emocional con el comprador.",
        "agiaPromptTagged": "1. ROL: Experto en Neuromarketing y Copywriting Sensorial.\n2. CONTEXTO:\n   📷 ADJUNTO: Foto del producto (o link de la tienda).\n   Producto: Cafetera de lujo italiana.\n   Público: Amantes del café que buscan una experiencia premium en casa.\n3. META: Crear descripción que VENDA la experiencia, no solo las características.\n4. RESTRICCIONES:\n   - Usa lenguaje sensorial (olores, sonidos, texturas).\n   - Evita tecnicismos aburridos.\n   - Máximo 100 palabras.\n5. FORMATO: Título llamativo + Descripción emocional.",
        "previewResponse": "**Tu Barista Personal en Casa.**\n\"Imagina despertar con el sonido del vapor y el aroma profundo del grano recién molido inundando tu cocina. Esta cafetera de acero quirúrgico no solo hace café; preserva cada nota sensorial para que tu segunda taza esté tan humeante y perfecta como la primera. Siente la textura del espresso perfecto cada mañana.\"",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 14,
        "category": "Ventas & Persuasión",
        "title": "Guion TikTok/Reels: Viralidad con Cierre",
        "icon": "lightbulb",
        "badPrompt": "Idea de video para mi curso de IA.",
        "badResponsePreview": "Hola a todos, soy experto en IA y hoy les quiero contar que mi curso es muy bueno. Van a aprender a usar ChatGPT para ahorrar tiempo. El link está en mi biografía, inscríbanse hoy mismo.",
        "badResponseAnalysis": "Empieza con un 'Hola' (muerte instantánea en redes), no tiene un gancho visual/auditivo polémico y el llamado a la acción es prematuro.",
        "agiaPromptTagged": "1. ROL: Guionista Viral. 2. CONTEXTO: Emprendedores colapsados que no llegan a fin de mes. 3. META: Guion 30s. 4. RESTRICCIONES: Gancho polémico 0-3s. Prohibido 'Hola'. 5. FORMATO: Tabla Visual/Audio.",
        "previewResponse": "| Tiempo | Visual | Audio (Guion) |\n| :--- | :--- | :--- |\n| 0-3s | Texto: TRABAJAR MÁS NO ES UN LOGRO. | \"Si estás orgulloso de tus 12 horas diarias, tienes un problema de herramientas, no de tiempo.\" |\n| 3-15s | Captura de pantalla de automatización en vivo. | \"Mientras tú respondes 'precio' 50 veces, este bot ya cerró 3 ventas. Te enseño cómo.\" |\n| 15-30s | Cara a cámara con energía. | \"La IA no te va a quitar el puesto, te va a quitar el estrés. Comenta 'MAESTRO' y te envío el temario.\" |",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 16,
        "category": "Ventas & Persuasión",
        "title": "Landing Page Hero: Promesa de Valor",
        "icon": "lightbulb",
        "badPrompt": "Título para mi página web de agencia de marketing.",
        "badResponsePreview": "Agencia Creative: Hacemos marketing digital, SEO, SEM y manejo de redes sociales para empresas en Santiago de Chile. Contáctanos para un presupuesto gratuito.",
        "badResponseAnalysis": "Se enfoca en los servicios (qué haces) y no en el resultado (qué logra el cliente). Es una presentación institucional aburrida que no detiene al visitante.",
        "agiaPromptTagged": "1. ROL: Copywriter CRO (Conversión). 2. CONTEXTO: Agencia Google Ads para E-commerce de moda. 3. META: H1/H2 de transformación. 4. RESTRICCIONES: H1 max 12 palabras. 5. FORMATO: H1 + H2 + CTA.",
        "previewResponse": "**H1:** Deja de \"donar\" dinero a Google y empieza a vender de verdad.\n**H2:** Auditamos tus campañas actuales, tapamos las fugas de presupuesto y escalamos solo lo que te deja utilidad neta en el bolsillo.\n**CTA:** Quiero mi Auditoría de Fugas Gratuitas.",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 17,
        "category": "Ventas & Persuasión",
        "title": "Google Ads Copy: CTR Máximo",
        "icon": "lightbulb",
        "badPrompt": "Anuncio para dentista.",
        "badResponsePreview": "Clínica Dental Pro. Los mejores dentistas de la ciudad. Hacemos limpieza, caries y ortodoncia. Pide tu hora al teléfono 1234567.",
        "badResponseAnalysis": "El anuncio no ataca un problema específico del usuario. Carece de un incentivo económico claro (como evaluación gratis) y no utiliza palabras de acción potentes.",
        "agiaPromptTagged": "1. ROL: Especialista SEM. 2. CONTEXTO: Implantes Dentales en Chile (Comuna Las Condes). 3. META: 3 títulos y 2 descripciones. 4. RESTRICCIONES: Incluye beneficio económico. 5. FORMATO: Lista.",
        "previewResponse": "**Título 1:** Recupera tu Sonrisa: Evaluación $0.\n**Título 2:** Implantes Dentales en Cuotas Aquí.\n**Título 3:** Especialistas en Tecnología Sin Dolor.\n**Descripción:** Deja de ocultar tu risa. Tecnología de punta y planes de pago a tu medida en Las Condes. Agenda tu evaluación hoy.",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 18,
        "category": "Ventas & Persuasión",
        "title": "Lead Magnet Hook: Imán de Suscriptores",
        "icon": "lightbulb",
        "badPrompt": "Título para un PDF gratis sobre finanzas personales.",
        "badResponsePreview": "Guía gratuita de finanzas personales. Aprende a ahorrar dinero, invertir en la bolsa y mejorar tu futuro financiero hoy mismo. Descarga gratis.",
        "badResponseAnalysis": "Título aburrido y predecible. No genera urgencia ni curiosidad, y suena a contenido que se puede encontrar en cualquier blog gratuito.",
        "agiaPromptTagged": "1. ROL: Content Marketer. 2. CONTEXTO: Planilla Excel para detectar fugas de dinero en el hogar. 3. META: Título magnético. 4. RESTRICCIONES: Usa números o miedo. 5. FORMATO: 5 opciones + Gancho social.",
        "previewResponse": "**Opción Ganadora:** La Planilla \"Anti-Fugas\" que los bancos no quieren que uses.\n**Gancho Social:** \"He analizado 100 cartolas bancarias y el 90% de las personas pierde $50k mensuales sin saberlo. Esta planilla los encuentra por ti.\"",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 19,
        "category": "Ventas & Persuasión",
        "title": "Manejo Objeciones: El 'Cierre' Perfecto",
        "icon": "lightbulb",
        "badPrompt": "Qué decir si un cliente me dice que mi asesoría es muy cara.",
        "badResponsePreview": "Dile que nuestro servicio es de alta calidad, que tenemos mucha experiencia y que los materiales que usamos son premium. También puedes ofrecerle un pequeño descuento.",
        "badResponseAnalysis": "Respuesta defensiva que valida la idea de que es 'caro'. No compara el costo con la pérdida de no actuar ni utiliza la psicología de inversión.",
        "agiaPromptTagged": "1. ROL: Sales Closer Senior. 2. CONTEXTO: Asesoría de $300k vs curso de $50k. 3. META: Reencuadrar como inversión. 4. RESTRICCIONES: Técnica Siente-Sintieron-Encontraron. 5. FORMATO: Guion directo.",
        "previewResponse": "\"Entiendo perfectamente... muchos de mis clientes actuales sintieron lo mismo al ver el valor inicial. Lo que encontraron es que mi asesoría no es un gasto, sino un seguro para no perder los $5 millones que hoy tienes parados en stock. ¿Prefieres ahorrarte esos $300k o recuperar los $5 millones?\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 20,
        "category": "Ventas & Persuasión",
        "title": "Carrito Abandonado: Recuperación Humana",
        "icon": "lightbulb",
        "badPrompt": "Correo para alguien que dejó productos en el carrito.",
        "badResponsePreview": "Hola, vimos que dejaste productos en tu carrito de compras. Vuelve pronto a nuestra tienda para finalizar tu pedido antes de que se agote el stock disponible.",
        "badResponseAnalysis": "Tono robótico y corporativo. No ofrece un incentivo real ni genera una conexión emocional con la marca local.",
        "agiaPromptTagged": "1. ROL: Copywriter Ecommerce. 2. CONTEXTO: Ropa de diseño independiente chileno. 3. META: Recuperar usando cercanía. 4. RESTRICCIONES: Beneficio extra (Starken gratis). 5. FORMATO: Asunto + Cuerpo.",
        "previewResponse": "**Asunto:** se nos va tu chaqueta... 🧥\n**Cuerpo:**\n\"Hola [Nombre], pasaba por aquí para avisarte que esa chaqueta es una de las últimas 3 que nos quedan en el taller. Como sé que te gustó, te habilité envío gratis por Starken solo por hoy para que no te quedes con las ganas. ¿Te la envío?\"",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 21,
        "category": "Ventas & Persuasión",
        "title": "Negociador High-Ticket: Subida de Precios",
        "icon": "lightbulb",
        "badPrompt": "Cómo le digo a mis clientes que voy a subir los precios.",
        "badResponsePreview": "Estimados clientes, debido al aumento de los costos de los insumos y la inflación en Chile, nos vemos en la obligación de subir nuestros precios un 10% a partir del próximo mes. Esperamos su comprensión.",
        "badResponseAnalysis": "Se basa en problemas del vendedor (inflación) y no en el valor entregado. Suena a una mala noticia en lugar de una evolución del servicio.",
        "agiaPromptTagged": "1. ROL: Experto Negociación. 2. CONTEXTO: Asesoría IA de $500k a $1.5M mensuales. 3. META: Reestructurar oferta como una oportunidad. 4. RESTRICCIONES: Usa Anclaje de Precios. 5. FORMATO: Guion + Estructura.",
        "previewResponse": "\"Al comparar los $1.5M de mi asesoría con el sueldo de un analista senior que cuesta $12M al año y rinde la mitad, mi tarifa no es un costo, es un ahorro operativo del 87% de flujo para tu empresa.\"",
        "metadata": {
            "score": 98
        }
    },
    {
        "id": 22,
        "category": "Ventas & Persuasión",
        "title": "Negociador Avanzado: Venta ROI",
        "icon": "lightbulb",
        "badPrompt": "Cómo subo precios sin perder clientes.",
        "badResponsePreview": "Dile a tus clientes que tienes mucha más experiencia ahora y que tus certificaciones nuevas avalan el nuevo precio. Ofréceles un descuento si se quedan un año más.",
        "badResponseAnalysis": "Foco interno ('mis certificaciones'). Al cliente no le importan tus títulos, le importa cuánto dinero le haces ganar o ahorrar.",
        "agiaPromptTagged": "1. ROL: Psicólogo de Precios. 2. CONTEXTO: Consultoría que ahorra 20h semanales al dueño. 3. META: Posicionar vs costo de NO resolver. 4. RESTRICCIONES: Foco total en retorno. 5. FORMATO: Guion maestro.",
        "previewResponse": "**Estrategia:** \"Cada semana que pasas sin este sistema, estás 'quemando' $800k en horas de gestión que podrías usar para cerrar nuevos negocios. Mi fee es una pequeña fracción de ese incendio que vamos a apagar hoy.\"",
        "metadata": {
            "score": 99
        }
    },
    {
        "id": 23,
        "category": "Ventas & Persuasión",
        "title": "Manejador 'Tengo que pensarlo'",
        "icon": "lightbulb",
        "badPrompt": "Qué le digo a un cliente que dice que lo tiene que pensar.",
        "badResponsePreview": "Está bien, no hay problema. Avíseme cuando tome una decisión y yo le envío el contrato. Quedo atento a sus noticias, muchas gracias.",
        "badResponseAnalysis": "Rinde la venta de inmediato. No indaga en la duda real ni ayuda al cliente a superar el miedo natural al cambio.",
        "agiaPromptTagged": "1. ROL: Experto en cierre de ventas.\n2. CONTEXTO:\n   📱 ADJUNTO: Captura de la conversación de WhatsApp donde el cliente dijo 'lo voy a pensar'.\n   Mi producto/servicio: [Descripción breve]\n   Precio: [$ que coticé]\n3. META: Crear respuesta que descubra la duda REAL sin sonar agresivo.\n4. RESTRICCIONES:\n   - Usa preguntas que lo hagan reflexionar (no presionar).\n   - Tono amigable, no vendedor desesperado.\n   - Máximo 3 mensajes de WhatsApp.\n5. FORMATO: Respuesta lista para copiar y enviar.",
        "previewResponse": "\"Entiendo, es una decisión importante. Solo para claridad mía: ¿Lo tienes que pensar por un tema de presupuesto o hay algo en la implementación que todavía te genera dudas?\" (Esto fuerza a la verdad y permite cerrar).",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 24,
        "category": "Ventas & Persuasión",
        "title": "Guionista VSL: Venta en Video",
        "icon": "lightbulb",
        "badPrompt": "Guion para un video largo de mi producto.",
        "badResponsePreview": "Hola, este es mi producto. Sirve para limpiar alfombras de forma profesional. Tenemos los mejores químicos y máquinas. Compra ahora en nuestra web con un 10% de descuento.",
        "badResponseAnalysis": "Empieza vendiendo el producto y no la solución a un problema doloroso. No genera una conexión emocional ni utiliza pruebas de resultados antes de pedir el dinero.",
        "agiaPromptTagged": "1. ROL: Copywriter VSL Senior. 2. CONTEXTO: Dueños de casa con alfombras manchadas por mascotas. 3. META: Guion 2 min. 4. RESTRICCIONES: Frases cortas. Llave de curiosidad inicial. 5. FORMATO: Guion locución.",
        "previewResponse": "**Guion Maestro:**\n\"¿Has dejado de invitar gente a tu casa por vergüenza a esa mancha en la alfombra que parece imposible de sacar? Intentaste con jabón, con vinagre... y solo quedó peor. Hoy te voy a mostrar el secreto que las empresas de limpieza no quieren que sepas para dejar tu casa como nueva en 15 minutos.\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 26,
        "category": "Ventas & Persuasión",
        "title": "Creador Garantías de Hierro",
        "icon": "lightbulb",
        "badPrompt": "Escribe una garantía de 30 días para mi curso.",
        "badResponsePreview": "Ofrecemos una garantía de satisfacción total de 30 días. Si no te gusta el curso, puedes pedir la devolución de tu dinero sin preguntas.",
        "badResponseAnalysis": "Es una política de devolución estándar, no una garantía de 'Hierro'. No asume un riesgo real por parte del vendedor ni elimina el miedo al fracaso del cliente.",
        "agiaPromptTagged": "1. ROL: Experto en Mitigación de Riesgos de Venta. 2. CONTEXTO: Servicio de limpieza industrial para Pymes. 3. META: Crear una garantía por RESULTADOS. 4. RESTRICCIONES: El vendedor debe asumir una penalización si falla. 5. FORMATO: Texto web persuasivo.",
        "previewResponse": "**Garantía de Brillo o Pago Yo:** \"Si después de nuestro servicio de limpieza no sientes que tu oficina está más impecable que el día que la inauguraste, no solo te devolvemos el 100% de tu dinero, sino que te pagamos el servicio con nuestra competencia de tu elección. Así de seguros estamos de nuestro equipo.\"",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 27,
        "category": "Ventas & Persuasión",
        "title": "Psicología: El Efecto Señuelo",
        "icon": "lightbulb",
        "badPrompt": "Ayúdame a poner precios a mis planes: uno básico y uno pro.",
        "badResponsePreview": "Plan Básico: $10.000 (Incluye 5 funciones). Plan Pro: $25.000 (Incluye todo). Elige el que más te convenga.",
        "badResponseAnalysis": "El salto de precio es muy grande y no hay un incentivo psicológico para elegir el Pro. El usuario tenderá a elegir el más barato por defecto.",
        "agiaPromptTagged": "1. ROL: Arquitecto de Decisiones de Compra. 2. CONTEXTO: Software de gestión. 3. META: Diseñar un tercer plan 'Señuelo'. 4. RESTRICCIONES: El señuelo debe hacer que el Pro parezca una ganga. 5. FORMATO: Tabla de 3 precios.",
        "previewResponse": "| Plan | Precio | Valor Percibido |\n| :--- | :--- | :--- |\n| **Básico** | $15.000 | Lo mínimo para operar. |\n| **Premium (Señuelo)** | $35.000 | Solo algunas funciones extra (Poca conveniencia). |\n| **Elite Pro** | **$37.000** | **Acceso total e ilimitado. Por solo $2.000 más que el Premium, te llevas todo.** |\n*(Nota: El 80% de tus clientes elegirá el Elite Pro porque el Premium lo hace ver irresistible).*",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 28,
        "category": "Ventas & Persuasión",
        "title": "La Escalera de Valor (Aumenta LTV)",
        "icon": "lightbulb",
        "badPrompt": "Qué más puedo vender después de mi curso básico de cocina.",
        "badResponsePreview": "Podrías vender un curso de cocina avanzada, un set de cuchillos profesional o una sesión de preguntas y respuestas en vivo.",
        "badResponseAnalysis": "Sugiere productos aislados. No diseña una escalera donde cada producto resuelva el nuevo problema que generó el anterior, perdiendo la oportunidad de retener al cliente de por vida.",
        "agiaPromptTagged": "1. ROL: Estratega de Crecimiento (Growth). 2. CONTEXTO: E-book inicial de $5k sobre panadería. 3. META: Diseñar camino hasta servicio de $1M. 4. RESTRICCIONES: Cada paso debe ser la solución lógica al éxito del paso anterior. 5. FORMATO: Diagrama de Escalera.",
        "previewResponse": "**Escalera de Valor Aula GenIA:**\n1. **Gancho ($5k):** E-book \"Pan de Masa Madre en 3 pasos\". (Resuelve el 'cómo empezar').\n2. **Ascenso ($45k):** Curso en video \"Domina los fermentos\". (Resuelve el 'cómo ser constante').\n3. **Continuidad ($150k):** Suscripción mensual \"Insumos Premium a tu puerta\". (Resuelve el 'dónde compro').\n4. **High-Ticket ($1.5M):** Mentoría 1-a-1 \"Monta tu propia panadería artesanal\". (Resuelve el 'cómo vivo de esto').",
        "metadata": {
            "score": 95
        }
    },
    {
        "id": 29,
        "category": "Ventas & Persuasión",
        "title": "Cierre por Escasez Real",
        "icon": "lightbulb",
        "badPrompt": "Escribe un post diciendo que quedan pocos cupos.",
        "badResponsePreview": "¡Últimos cupos disponibles! Inscríbete ahora antes de que se acaben y te quedes fuera de esta gran oportunidad. No digas que no te avisamos.",
        "badResponseAnalysis": "Urgencia falsa y genérica. Suena a presión de vendedor desesperado y no justifica por qué los cupos son limitados, lo que genera desconfianza.",
        "agiaPromptTagged": "1. ROL: Especialista en Psicología de la Urgencia. 2. CONTEXTO: Workshop de IA para 20 personas. Quedan 4. 3. META: Mensaje de escasez honesta. 4. RESTRICCIONES: Justifica la limitación por calidad de soporte. 5. FORMATO: Email de cierre.",
        "previewResponse": "**Asunto:** Solo quedan 4 sillas (literalmente)\n\"Hola [Nombre], para asegurar que cada asistente salga del workshop con su propio bot configurado por mis manos, limité el grupo a 20 personas. En este momento solo quedan 4 cupos disponibles. Una vez que se llenen, cerramos inscripciones para darles el 100% de nuestra atención. ¿Te sumas?\"",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 30,
        "category": "Ventas & Persuasión",
        "title": "Propuestas Irresistibles (Resultados)",
        "icon": "lightbulb",
        "badPrompt": "Haz una propuesta para llevar las redes sociales de un restaurante.",
        "badResponsePreview": "Propuesta de Community Manager: $400.000/mes. Incluye 12 posts mensuales, 20 stories y responder comentarios. Usaremos buenos hashtags.",
        "badResponseAnalysis": "Vende horas de trabajo y entregables (posts). Al dueño del restaurante no le interesan los posts, le interesa que las mesas estén llenas los martes por la noche.",
        "agiaPromptTagged": "1. ROL: Consultor de Negocios Senior. 2. CONTEXTO: Restaurante con mesas vacías entre semana. 3. META: 'Hoja de ruta al éxito'. 4. RESTRICCIONES: Vende resultados (clientes nuevos), no entregables. 5. FORMATO: Título Impacto + Diagnóstico + Solución.",
        "previewResponse": "**Plan de Llenado de Mesas para [Restaurante]:** \"Mi objetivo no es postear fotos lindas, es traer 40 clientes nuevos calificados cada martes y miércoles usando anuncios de IA geolocalizados. Mi propuesta se paga sola con los primeros 10 platos vendidos. ¿Hablamos de cómo llenar tu local?\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 32,
        "category": "Contenido & Redes",
        "title": "El Pulpo de Contenidos: Omnipresencia",
        "icon": "lightbulb",
        "problem": "Omnipresencia digital con un solo esfuerzo inicial. Coherencia de marca.",
        "badPrompt": "Dame 5 ideas de posts sobre IA.",
        "badResponsePreview": "1. Qué es la IA. 2. Cómo usar ChatGPT. 3. El futuro de los robots. 4. Herramientas útiles. 5. Ventajas para empresas.",
        "badResponseAnalysis": "Ideas vagas y desconectadas. No adapta el contenido a los formatos específicos de cada red social ni aprovecha una idea central para maximizar el alcance.",
        "agiaPromptTagged": "1. ROL: Estratega Contenido Multiplataforma. 2. CONTEXTO: Idea Base: [Cómo ahorrar 2h al día con IA]. 3. META: 5 formatos adaptados. 4. RESTRICCIONES: Tono autoridad. 5. FORMATO: Tabla por plataforma.",
        "previewResponse": "| Plataforma | Formato | Ángulo de Contenido |\n| :--- | :--- | :--- |\n| **LinkedIn** | Artículo | El impacto financiero de ahorrar 10h a la semana por empleado. |\n| **TikTok** | Tutorial | \"Mira cómo hice este informe de 2h en 15 segundos\" (Pantalla compartida). |\n| **Instagram** | Carrusel | 5 prompts que puedes copiar y pegar hoy mismo. |\n| **X (Twitter)** | Hilo | El hilo definitivo sobre las herramientas que están matando el Excel manual. |",
        "metadata": {
            "score": 96
        }
    },
    {
        "id": 33,
        "category": "Contenido & Redes",
        "title": "Guionista de Tutoriales: Autoridad",
        "icon": "lightbulb",
        "badPrompt": "Escribe un guion enseñando a usar Canva.",
        "badResponsePreview": "Hola, hoy les enseñaré a usar Canva. Primero abran la cuenta, elijan una plantilla de redes sociales, cambien el texto por el suyo y guarden el archivo.",
        "badResponseAnalysis": "Demasiado básico y aburrido. No resuelve un problema específico del usuario ni ofrece un 'truco' que genere autoridad inmediata.",
        "agiaPromptTagged": "1. ROL: Creador Edutainment. 2. CONTEXTO: Crear un logo profesional en 3 min. 3. META: Guion 60s victoria rápida. 4. RESTRICCIONES: Gancho de dolor de tiempo inicial. 5. FORMATO: Guion Habla-Cámara.",
        "previewResponse": "\"¿Sigues pagando $200k por logos que parecen hechos en Paint? Deja de perder lucas. Abre Canva, busca 'estilos' y mira cómo esta paleta profesional transforma tu marca en 3 segundos. Aquí te explico el truco que los diseñadores no quieren que sepas...\"",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 34,
        "category": "Contenido & Redes",
        "title": "Titulares Magnéticos: Clics Éticos",
        "icon": "lightbulb",
        "badPrompt": "Títulos para un artículo sobre productividad.",
        "badResponsePreview": "Cómo ser más productivo. 10 consejos para trabajar mejor. La importancia de la organización en la oficina moderna.",
        "badResponseAnalysis": "Títulos \"de enciclopedia\". No generan curiosidad ni prometen un beneficio específico o contra-intuitivo que incite al clic inmediato.",
        "agiaPromptTagged": "1. ROL: Copywriter de Titulares Magnéticos. 2. CONTEXTO: Errores comunes al usar ChatGPT en Pymes. 3. META: 10 opciones que obliguen al clic. 4. RESTRICCIONES: Fórmulas de curiosidad. 5. FORMATO: Lista numerada.",
        "previewResponse": "1. El error en ChatGPT que le está dando datos falsos a tu negocio (y cómo arreglarlo).\n2. Por qué tu Pyme está perdiendo dinero cada vez que usas un prompt de una sola línea.\n3. 5 formas en que la IA te está haciendo trabajar MÁS sin que te des cuenta.",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 35,
        "category": "Contenido & Redes",
        "title": "Carruseles Virales: Narrativa Visual",
        "icon": "lightbulb",
        "badPrompt": "Dame ideas para un carrusel de 10 fotos sobre ventas.",
        "badResponsePreview": "Foto 1: Título. Foto 2: Conoce a tu cliente. Foto 3: Escucha activa. Foto 4: Maneja objeciones... Foto 10: Sígueme para más consejos.",
        "badResponseAnalysis": "Es una lista de consejos sueltos. No hay una progresión narrativa que invite a deslizar (swipe) ni un gancho emocional que convierta el post en algo 'guardable'.",
        "agiaPromptTagged": "1. ROL: Diseñador UX de Social Media. 2. CONTEXTO: Automatizar ventas con WhatsApp e IA. 3. META: 7 slides para ser 'Guardado'. 4. RESTRICCIONES: Gancho visual fuerte en Slide 1. 5. FORMATO: Tabla descriptiva.",
        "previewResponse": "| Slide | Visual | Texto Hook |\n| :--- | :--- | :--- |\n| **1** | Imagen de un celular explotando de notificaciones. | Tu WhatsApp no debería ser una cárcel (y así es como recuperas tu libertad). |\n| **2** | Texto grande: \"Precio?\" escrito 50 veces. | Respondes lo mismo todo el día y no cierras nada. El problema no es tu producto, es tu proceso. |\n| **3** | Diagrama simple de un bot. | Mira cómo este flujo de 3 pasos califica al cliente mientras tú duermes. |",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 36,
        "category": "Contenido & Redes",
        "title": "Blog Post Humanizado: SEO con Alma",
        "icon": "lightbulb",
        "badPrompt": "Escribe un artículo de blog sobre cómo la IA ayuda a las personas.",
        "badResponsePreview": "En la era digital actual, la inteligencia artificial se ha convertido en una herramienta clave. Exploremos cómo esta tecnología está transformando el vasto mundo del trabajo...",
        "badResponseAnalysis": "Uso excesivo de clichés de IA ('En el vasto mundo', 'Exploremos', 'Clave'). Suena robótico y aburrido, lo que aleja al lector humano de inmediato.",
        "agiaPromptTagged": "1. ROL: Redactor SEO Senior tono humano. 2. CONTEXTO: Historia real de cómo ahorré 4 horas el martes pasado. 3. META: Artículo que Google ame pero personas disfruten. 4. RESTRICCIONES: Prohibido usar 'Exploremos' o 'En la era digital'. 5. FORMATO: Título SEO + Cuerpo.",
        "previewResponse": "**Título:** Del colapso a la calma: El martes que la IA me devolvió 4 horas de vida.\n\"Eran las 11 PM y todavía tenía 50 correos pendientes. Sentía ese nudo en el estómago que todo dueño de Pyme conoce. Pero en lugar de resignarme a otra noche sin dormir, probé algo distinto...\"",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 39,
        "category": "Contenido & Redes",
        "title": "Reciclador de Videos: Clips Virales",
        "icon": "lightbulb",
        "badPrompt": "Dime qué partes de mi video sirven para sacar clips de TikTok.",
        "badResponsePreview": "Usa el minuto 02:15 donde explicas el primer consejo y el minuto 05:40 cuando hablas del cierre. Esas partes son buenas porque resumes el contenido principal.",
        "badResponseAnalysis": "La IA no identifica el 'Hook' (gancho) inicial ni el valor de retención. No ofrece títulos virales para el clip ni explica por qué ese fragmento funcionaría de forma independiente fuera de contexto.",
        "agiaPromptTagged": "1. ROL: Editor de Videos Virales especializado en TikTok/Reels.\n2. CONTEXTO:\n   🎥 ADJUNTO: Video de mi clase/podcast de 10 minutos (o link de YouTube).\n   Tema del video: [Ej: Cómo cobrar más sin perder clientes]\n   Plataforma destino: TikTok / Instagram Reels.\n3. META: Identificar los 3 mejores momentos para crear clips virales de 30-60 segundos.\n4. RESTRICCIONES:\n   - Dame tiempos exactos (minuto:segundo).\n   - Cada clip debe funcionar SOLO, sin ver el video completo.\n   - Sugiere títulos que generen curiosidad o controversia.\n5. FORMATO: Lista con [Tiempo Inicio-Fin] | [Título Viral] | [Por qué funciona].",
        "previewResponse": "Clip 1: \"El mito de la IA gratis\". Inicio: 01:20. Fin: 02:10. Por qué: Genera controversia.",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 40,
        "category": "Contenido & Redes",
        "title": "Consultor de Lead Magnets: Imán Pro",
        "icon": "lightbulb",
        "badPrompt": "Qué regalo para que se suscriban a mi lista de correos.",
        "badResponsePreview": "Puedes regalar un E-book de 20 páginas sobre tu industria, un código de descuento del 5% para su primera compra o una charla gratuita de 15 minutos por Zoom.",
        "badResponseAnalysis": "Propone incentivos de baja fricción o alta carga cognitiva (nadie quiere leer 20 páginas). No resuelve un problema específico e inmediato (\"victoria rápida\") del usuario.",
        "agiaPromptTagged": "1. ROL: Estratega Marketing Atracción. 2. CONTEXTO: Emprendedores estresados. 3. META: 3 regalos resuelvan dolor inmediato. 4. RESTRICCIONES: Consumo en <10 min. 5. FORMATO: Nombre + Valor + Función.",
        "previewResponse": "\"La Caja de Herramientas Anti-Estrés: 10 links directos a IAs que hacen el trabajo sucio.\"",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 41,
        "category": "Contenido & Redes",
        "title": "Calendario Editorial Estratégico",
        "icon": "lightbulb",
        "badPrompt": "Hazme un calendario de contenido para redes sociales de enero.",
        "badResponsePreview": "Lunes: Frase motivacional. Martes: Tip de tu negocio. Miércoles: Foto de tu equipo. Jueves: TBT de un evento. Viernes: Oferta especial de fin de semana. Sábado: Descanso.",
        "badResponseAnalysis": "Contenido \"de relleno\" sin arco narrativo. No existe una progresión que prepare al cliente para la venta (calentamiento) ni considera el contexto local (ej: el \"caos de marzo\" en Chile o las vacaciones de enero).",
        "agiaPromptTagged": "1. ROL: Content Strategist Senior. 2. CONTEXTO: Marzo en Chile (caos tacos/gastos). 3. META: Calendario 4 semanas con arco narrativo. 4. RESTRICCIONES: Equilibrio 40/30/30. 5. FORMATO: Tabla detallada.",
        "previewResponse": "Semana 1: Empatía con el caos de marzo. Semana 2: Tutorial organizador. Semana 3: Venta Aula GenIA.",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 42,
        "category": "Contenido & Redes",
        "title": "Extractor de ADN de Voz: Clonación",
        "icon": "lightbulb",
        "badPrompt": "Analiza cómo escribo según estos textos que te pego.",
        "badResponsePreview": "Tu estilo de escritura es profesional, amable y organizado. Utilizas párrafos cortos y te diriges al lector de forma directa. Se nota que tienes experiencia en tu rubro.",
        "badResponseAnalysis": "Análisis superficial. No detecta muletillas, no identifica el ritmo de las oraciones (cortas vs largas), no analiza el uso de humor/sarcasmo ni el vocabulario específico que el usuario suele evitar o repetir.",
        "agiaPromptTagged": "1. ROL: Ghostwriter experto. 2. CONTEXTO: 5 párrafos reales tuyos. 3. META: Extraer ADN de escritura. 4. RESTRICCIONES: Ritmo, vocabulario y muletillas a evitar. 5. FORMATO: Guía de Estilo.",
        "previewResponse": "Análisis: Usas analogías de fútbol, frases cortas directas y tuteas al lector siempre.",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 43,
        "category": "Contenido & Redes",
        "title": "ADN de Voz Avanzado: Huella",
        "icon": "lightbulb",
        "badPrompt": "Dime qué palabras uso más para sonar siempre igual.",
        "badResponsePreview": "Usas mucho las palabras 'importante', 'clientes', 'negocio' y 'oportunidad'. Si las sigues usando, la gente reconocerá tu estilo de inmediato en los correos.",
        "badResponseAnalysis": "Se enfoca en palabras de contenido y no en palabras funcionales o estructuras. No crea una 'huella' lingüística que sirva para que la IA escriba por el usuario sin ser detectada.",
        "agiaPromptTagged": "1. ROL: Ghostwriter experto + Analista Lingüístico. 2. CONTEXTO: Muestras variadas de texto. 3. META: Extraer ADN profundo. 4. RESTRICCIONES: Formalidad, sarcasmo y longitud frases. 5. FORMATO: Guía exhaustiva.",
        "previewResponse": "Guía que identifica que jamás usas la palabra 'fundamental' y prefieres 'clave'.",
        "metadata": {
            "score": 95
        }
    },
    {
        "id": 44,
        "category": "Contenido & Redes",
        "title": "Des-Robotizador: Humanización",
        "icon": "lightbulb",
        "badPrompt": "Reescribe este texto para que no parezca hecho por una IA.",
        "badResponsePreview": "Aquí tienes una versión más natural: Hola amigos, hoy quiero contarles que la inteligencia artificial es una gran ayuda para todos nosotros en el mundo de hoy. Es muy buena.",
        "badResponseAnalysis": "Mantiene la estructura de 'Hola amigos', carece de anécdotas, no usa jerga local y sigue pareciendo un texto de relleno generado por una máquina, solo que más corto.",
        "agiaPromptTagged": "1. ROL: Editor Jefe detector de IA. 2. CONTEXTO: Texto genérico robótico. 3. META: Reescribir eliminando 'En el vasto mundo', 'Exploremos'. 4. RESTRICCIONES: Tono café chileno. 5. FORMATO: Texto Humanizado.",
        "previewResponse": "\"Oye, te cuento: la IA no es para el futuro, es para que hoy mismo dejes de sufrir con el Excel...\"",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 46,
        "category": "Contenido & Redes",
        "title": "Ghostwriter de LinkedIn: Autoridad",
        "icon": "lightbulb",
        "badPrompt": "Escribe un post para LinkedIn sobre mi nuevo proyecto Aula GenIA.",
        "badResponsePreview": "Estoy muy feliz de compartir que he lanzado Aula GenIA. Es una plataforma donde aprenderán sobre inteligencia artificial. Espero que les guste mucho y me sigan para más actualizaciones.",
        "badResponseAnalysis": "El post es puramente informativo y egocéntrico. No ofrece valor al lector, no utiliza el formato de LinkedIn (espaciado) y no genera una conversación o debate profesional.",
        "agiaPromptTagged": "1. ROL: Ghostwriter de CEOs. 2. CONTEXTO: Lanzamiento que ahorra tiempo a pymes. 3. META: Post autoridad con humildad. 4. RESTRICCIONES: Párrafos de una línea. Pregunta reflexión. 5. FORMATO: Gancho-Cuerpo-Cierre.",
        "previewResponse": "\"¿Sabías que el 70% de los dueños de pyme trabaja 12h pero solo 4 son rentables? Hoy lanzo...\"",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 47,
        "category": "Contenido & Redes",
        "title": "Storytelling: De Hechos a Historias",
        "icon": "lightbulb",
        "badPrompt": "Cuenta la historia de cómo fundé mi pastelería.",
        "badResponsePreview": "Empecé en 2024 en la cocina de mi casa. Al principio no tenía clientes, pero luego hice un Instagram y me empezó a ir bien. Ahora tengo un local en el centro y soy feliz.",
        "badResponseAnalysis": "Narrativa lineal y aburrida. No hay conflicto, no hay vulnerabilidad ni detalles sensoriales que conecten con la audiencia a un nivel emocional.",
        "agiaPromptTagged": "1. ROL: Guionista experto Viaje del Héroe. 2. CONTEXTO: Hecho vulnerable real. 3. META: Historia inspiradora conecte emocionalmente. 4. RESTRICCIONES: Olores, sonidos, dudas. 5. FORMATO: Historia 3 actos.",
        "previewResponse": "\"Miré mi horno viejo, las cuentas por pagar y sentí un nudo. Ese fue el día que...\"",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 53,
        "category": "Finanzas Inteligentes",
        "title": "Detector de Fugas de Dinero: Auditoría",
        "icon": "lightbulb",
        "problem": "Recuperación inmediata de flujo de caja. La app se paga sola aquí.",
        "badPrompt": "Analiza mis gastos de la tarjeta de crédito y dime en qué puedo ahorrar.",
        "badResponsePreview": "Gastaste mucho en restaurantes, Uber y suscripciones de streaming. Mi consejo es que cocines más en casa y revises si realmente usas todas las plataformas que pagas.",
        "badResponseAnalysis": "Análisis genérico. No detecta cobros duplicados, no identifica \"gastos vampiro\" específicos de software y no prioriza el ahorro según el impacto en el flujo de caja del negocio.",
        "agiaPromptTagged": "1. ROL: Auditor Financiero especializado en Pymes.\n2. CONTEXTO:\n   🏦 ADJUNTO: Captura de mi cartola bancaria o lista de cargos de tarjeta de crédito (oculta datos sensibles).\n   Período: Últimos 3 meses.\n   Mi negocio: [Tipo de negocio y tamaño].\n3. META: Encontrar gastos 'vampiro', cobros duplicados y suscripciones olvidadas.\n4. RESTRICCIONES:\n   - Clasifica cada gasto en: Crítico, Necesario, Prescindible.\n   - Calcula cuánto pierdo al año por cada fuga.\n   - Sugiere alternativas más baratas.\n5. FORMATO: Informe de Fugas con montos anualizados.",
        "previewResponse": "\"Pierdes $1.2M al año en: Canva+Adobe ($240k) y comisiones bancarias ($84k).\"",
        "metadata": {
            "score": 95
        }
    },
    {
        "id": 54,
        "category": "Finanzas Inteligentes",
        "title": "Simulador de Precios: Rentabilidad",
        "icon": "lightbulb",
        "badPrompt": "A cuánto debo vender mi torta si me cuesta 10 lucas los ingredientes.",
        "badResponsePreview": "Deberías venderla a 20 o 30 mil pesos para que tengas un buen margen de ganancia. Recuerda sumar el costo de la luz y el gas que usaste.",
        "badResponseAnalysis": "Ignora por completo el IVA (19% en Chile), las comisiones de Transbank/Flow, el costo de la hora del dueño y el punto de equilibrio para cubrir costos fijos (arriendo, patente).",
        "agiaPromptTagged": "1. ROL: Consultor Pricing. 2. CONTEXTO: Costos fijos, meta sueldo líquido. 3. META: Precio real considerando IVA y comisiones. 4. RESTRICCIONES: Explica Punto Equilibrio. 5. FORMATO: Desglose + Escenarios.",
        "previewResponse": "\"Tu precio mínimo debe ser $72.900 para recibir tu sueldo meta tras IVA y pasarela.\"",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 55,
        "category": "Finanzas Inteligentes",
        "title": "Traductor SII: Control Tributario",
        "icon": "lightbulb",
        "badPrompt": "Explícame este reporte del SII y dime qué significa.",
        "badResponsePreview": "El reporte indica que tienes varias facturas emitidas y recibidas este mes. Dice que el monto total a pagar por el formulario 29 es de $145.000 pesos.",
        "badResponseAnalysis": "El resultado solo repite los números sin explicarlos. No desglosa cuánto de IVA cobraste (Débito) vs cuánto pagaste en compras (Crédito), no menciona el PPM (pago provisional mensual) ni avisa si tienes multas pendientes.",
        "agiaPromptTagged": "1. ROL: Contador Auditor experto en tributación chilena.\n2. CONTEXTO:\n   📸 ADJUNTO: Captura de pantalla de mi reporte del SII (Formulario 29 o propuesta).\n   Mi situación: Soy [Pyme / Profesional independiente] con boletas/facturas.\n3. META: Explicar EN SIMPLE cuánto debo pagar, por qué y cuándo vence.\n4. RESTRICCIONES:\n   - Cero tecnicismos, explícalo como si fuera un café con un amigo.\n   - Desglosa el IVA y el PPM por separado.\n   - Avisa si hay algo raro o multas pendientes.\n5. FORMATO: Resumen 'Lo que debes pagar este mes' + Alertas.",
        "previewResponse": "\"Este mes pagas $145.000: El desglose real es $120.000 de IVA (vendiste más de lo que compraste) y $25.000 de PPM (tu ahorro obligatorio para el impuesto a la renta anual). Recuerda pagar antes del 20 si emites facturas electrónicas.\"",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 56,
        "category": "Finanzas Inteligentes",
        "title": "Analista Rentabilidad: ¿Hora vs Dinero?",
        "icon": "lightbulb",
        "badPrompt": "Dime cuál de mis productos es mejor basándote en mis ventas.",
        "badResponsePreview": "El Producto A vendió 100 unidades y el Producto B vendió 50. Por lo tanto, el Producto A es mucho mejor para tu negocio y deberías enfocarte en él.",
        "badResponseAnalysis": "Solo analiza volumen de ventas. Ignora el margen de contribución, el tiempo de ejecución y el costo de oportunidad. El Producto A podría estar dándote pérdidas si requiere demasiadas horas de trabajo manual.",
        "agiaPromptTagged": "1. ROL: Experto en análisis de rentabilidad de productos.\n2. CONTEXTO:\n   📊 ADJUNTO: Excel con mis productos, precios, costos y tiempo que me toma hacer cada uno.\n   Mi negocio: [Ej: Pastelería / Servicios de diseño / Cursos online].\n3. META: Calcular cuánto gano POR HORA de trabajo en cada producto para saber cuál priorizar.\n4. RESTRICCIONES:\n   - Considera costos ocultos (empaque, luz, post-venta).\n   - Identifica productos que parecen buenos pero me quitan mucho tiempo.\n   - Dame recomendación: eliminar, mantener o potenciar.\n5. FORMATO: Tabla comparativa + Veredicto final.",
        "previewResponse": "\"En el Producto A ganas $8.000/h líquida. En el Producto B ganas $2.000/h debido a la post-venta. Aunque vendas más del B, te está quitando 10 veces más tiempo de vida.\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 57,
        "category": "Finanzas Inteligentes",
        "title": "Pitch Bancario: Crédito Aprobado",
        "icon": "lightbulb",
        "badPrompt": "Ayúdame a escribir un correo para pedir un préstamo de 5 millones al banco.",
        "badResponsePreview": "Hola, necesito un crédito de 5 millones para comprar máquinas nuevas para mi pyme. Siempre pago a tiempo y mi negocio está creciendo. Quedo atento a su respuesta.",
        "badResponseAnalysis": "Tono informal y carente de respaldo. No menciona el ROI (retorno de la inversión: cuánto ganarás por cada peso invertido), la capacidad de repago (cuánto puedes pagar al mes), el EBITDA (la ganancia real del negocio antes de impuestos) ni cómo el crédito mejorará tus números.",
        "agiaPromptTagged": "1. ROL: Ex-Agente Bancario Senior. 2. CONTEXTO: Monto $5M, Destino: Maquinaria, Ventas anuales: $60M. 3. META: Justificación técnica para aprobación de crédito. 4. RESTRICCIONES: Foco en Capacidad Repago y ROI. 5. FORMATO: Resumen Ejecutivo Bancario.",
        "previewResponse": "\"Proyectamos un 35% de incremento en la capacidad productiva. Con un margen operativo actual del 45%, la cobertura de deuda se mantiene en niveles de bajo riesgo para la institución.\"",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 58,
        "category": "Finanzas Inteligentes",
        "title": "Calculadora de 'Sueldo de Dueño'",
        "icon": "lightbulb",
        "badPrompt": "Cuánto dinero puedo sacar de mi empresa si gané 3 millones este mes.",
        "badResponsePreview": "Puedes sacar unos 1.5 millones para tu sueldo personal y dejar el otro 1.5 millones en la cuenta de la empresa para pagar los gastos que vengan el próximo mes.",
        "badResponseAnalysis": "Sugerencia peligrosa. No considera el IVA por pagar (19% de tus ventas que debes al Estado), el PPM (pago provisional mensual: un ahorro obligatorio para tu declaración anual), las imposiciones de los empleados ni el fondo de reserva para emergencias.",
        "agiaPromptTagged": "1. ROL: Consultor Finanzas Personales para Emprendedores. 2. CONTEXTO: Ventas, Insumos y Gastos fijos. 3. META: Sueldo máximo seguro. 4. RESTRICCIONES: Reserva imprevistos (20%) + Impuestos. 5. FORMATO: Plan de Retiro Mensual.",
        "previewResponse": "\"Tu sueldo seguro es de $1.050.000 líquido. Si retiras más, comprometes el flujo de caja operativo de los próximos 90 días ante cualquier caída en la demanda.\"",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 59,
        "category": "Finanzas Inteligentes",
        "title": "Logística: Ahorro Envío Chile",
        "icon": "lightbulb",
        "badPrompt": "Qué empresa me conviene más para enviar mis productos a regiones en Chile.",
        "badResponsePreview": "Starken es muy bueno para bultos grandes y Blue Express funciona bien para cosas más pequeñas. Chilexpress es rápido pero más caro. Deberías comparar precios en sus páginas.",
        "badResponseAnalysis": "Información de conocimiento general. No menciona convenios para pymes (como el de Starken o Envíame), no optimiza según el volumen de despacho mensual ni sugiere técnicas de packaging para bajar de peso volumétrico.",
        "agiaPromptTagged": "1. ROL: Experto Logística Chile. 2. CONTEXTO: Producto (Joyas), Volumen (50 envíos/mes) y Destinos. 3. META: Estrategia para reducir costos de envío en 20%. 4. RESTRICCIONES: Convenios vigentes. 5. FORMATO: Tabla Comparativa + Tip Packaging.",
        "previewResponse": "\"Usa Blue Express para RM a través de plataformas integradoras. Inscríbete hoy en 'Pyme Starken' para obtener un 20% de descuento automático por volumen. Ahorro real: $1.200 por envío.\"",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 60,
        "category": "Finanzas Inteligentes",
        "title": "Analista de 'Membresías Vampiro'",
        "icon": "lightbulb",
        "badPrompt": "Revisa mi lista de programas y dime qué puedo cancelar para ahorrar plata.",
        "badResponsePreview": "Podrías cancelar Zoom si usas la versión gratuita y revisar si realmente necesitas Netflix en la oficina. También mira tu cuenta bancaria por si hay seguros que no conoces.",
        "badResponseAnalysis": "Análisis superficial. No detecta que estés pagando dos programas que hacen lo mismo (ej. Google Workspace y Microsoft 365) ni sugiere alternativas gratuitas o pagos únicos en vez de suscripciones mensuales.",
        "agiaPromptTagged": "1. ROL: Consultor Eficiencia TI. 2. CONTEXTO: Suscripciones actuales (Shopify, Klaviyo, Canva, Adobe). 3. META: Eliminar software redundante. 4. RESTRICCIONES: Alternativas unificadas. 5. FORMATO: Plan de Limpieza Tech.",
        "previewResponse": "\"Cancela Klaviyo si tienes menos de 1.000 leads, usa el marketing nativo de Shopify. Cancela Adobe Express, Canva Pro ya cubre esas necesidades. Ahorro anual: $320.000.\"",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 61,
        "category": "Finanzas Inteligentes",
        "title": "Simulador: ¿Puedo contratar?",
        "icon": "lightbulb",
        "badPrompt": "Quiero contratar un asistente por 500 mil pesos, ¿mis ventas alcanzan?",
        "badResponsePreview": "Si tienes el dinero en la cuenta ahora mismo, puedes hacerlo. Solo asegúrate de que el asistente sea productivo y te ayude a vender más para que se pague solo.",
        "badResponseAnalysis": "Error crítico de cálculo. No considera el 'Costo Empresa' real (lo que pagas extra por cada empleado: gratificación, AFP, salud, seguro de accidentes y vacaciones), que en Chile es aproximadamente un 25-30% más que el sueldo.",
        "agiaPromptTagged": "1. ROL: CFO para Startups. 2. CONTEXTO: Sueldo líquido $500k, Ventas actuales y Margen. 3. META: Viabilidad real y nueva meta de ventas. 4. RESTRICCIONES: Considerar Costo Empresa real. 5. FORMATO: Análisis SÍ/NO.",
        "previewResponse": "\"NO ahora. Tu costo real por ese asistente será de $680.000. Necesitas subir tus ventas mensuales a $5.8M para que la contratación no destruya tu utilidad neta.\"",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 63,
        "category": "Legal & Formalización",
        "title": "Constitución Empresa: Paso a Paso",
        "icon": "lightbulb",
        "badPrompt": "Dime los pasos para crear una empresa en el portal de Tu Empresa en un Día.",
        "badResponsePreview": "Entra a la página, elige el tipo de empresa, llena el formulario con tus datos y los de tus socios, y luego ve a una notaría para firmar el documento final.",
        "badResponseAnalysis": "Omite detalles críticos: no explica la diferencia entre SpA (Sociedad por Acciones: más flexible) y Ltda (Limitada: más tradicional), no menciona el capital inicial que piden los bancos para abrirte una cuenta, ni cómo sacar tu RUT de empresa en el SII (Servicio de Impuestos Internos).",
        "agiaPromptTagged": "1. ROL: Abogado Corporativo Chile. 2. CONTEXTO: Emprendimiento de servicios con 1 socio. 3. META: Guía paso a paso técnica. 4. RESTRICCIONES: Explicar SpA vs Ltda y costos de firma. 5. FORMATO: Guía + Tabla comparativa.",
        "previewResponse": "\"Recomiendo SpA por su facilidad para vender acciones a futuro. Pasos: 1. Redacción de estatutos (ojo con el objeto social amplio). 2. Firma con Clave Única ($15k). 3. Inicio actividades SII.\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 64,
        "category": "Legal & Formalización",
        "title": "Registro Marca: INAPI Estratégico",
        "icon": "lightbulb",
        "badPrompt": "Cómo registro mi nombre de marca en Chile.",
        "badResponsePreview": "Debes ir a la página de INAPI, buscar si el nombre está disponible, pagar las tasas correspondientes y esperar unos meses a que te den el certificado de registro.",
        "badResponseAnalysis": "No identifica las 'Clases Niza' (las categorías en que debes registrar tu marca: ropa, comida, servicios, etc.). Podrías registrar tu marca en la categoría equivocada y quedar desprotegido ante competidores de tu mismo rubro.",
        "agiaPromptTagged": "1. ROL: Especialista en Propiedad Intelectual. 2. CONTEXTO: Marca de ropa online. 3. META: Determinar Clases Niza correctas y riesgos de rebote. 4. RESTRICCIONES: Explicar costo en UTM. 5. FORMATO: Lista de Clases Sugeridas.",
        "previewResponse": "\"Debes registrar en Clase 25 (Vestuario) y Clase 35 (Venta online). Ojo: si tu nombre es muy genérico, INAPI te lo va a rechazar por falta de distintividad. Costo: 3 UTM.\"",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 65,
        "category": "Legal & Formalización",
        "title": "Contrato Trabajo: Seguridad Pyme",
        "icon": "lightbulb",
        "badPrompt": "Escribe un contrato de trabajo simple para un vendedor.",
        "badResponsePreview": "Contrato de Trabajo: El empleador contrata al trabajador como vendedor. El sueldo será de $500.000 más comisiones. El horario es de lunes a viernes. Firma aquí.",
        "badResponseAnalysis": "Contrato legalmente débil en Chile. No incluye la cláusula de gratificación legal (el bono obligatorio que debes pagar al trabajador), no define bien cómo se calculan las comisiones ni protege los datos de tus clientes si el vendedor se va a la competencia.",
        "agiaPromptTagged": "1. ROL: Abogado Laboral Chile. 2. CONTEXTO: Vendedor B2B con manejo de datos sensibles. 3. META: Borrador contrato robusto. 4. RESTRICCIONES: Incluir gratificación legal y confidencialidad. 5. FORMATO: Documento legal estructurado.",
        "previewResponse": "Borrador con cláusulas específicas de gratificación mensual del 25%, jornada 44h (Ley 40h progresiva) y blindaje sobre el robo de base de datos de clientes.",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 66,
        "category": "Estrategia & Lanzamiento",
        "title": "Naming Maestro: Marcas Pegajosas",
        "icon": "lightbulb",
        "problem": "Creación de activos de marca memorables y registrables (ahorro en rebranding futuro).",
        "badPrompt": "Dame 10 nombres para mi marca de ropa de yoga.",
        "badResponsePreview": "1. YogaStyle. 2. ZenWear. 3. Respirar Yoga. 4. FlexiRopa. 5. Paz Interior. 6. YogaMundo. 7. Loto Ropa. 8. Equilibrio. 9. Namaste. 10. Om Wear.",
        "badResponseAnalysis": "Nombres genéricos, aburridos y probablemente ya registrados en INAPI. No tienen un concepto de marca detrás ni una sonoridad que los haga memorables o fáciles de pronunciar.",
        "agiaPromptTagged": "1. ROL: Experto en Naming y Branding. 2. CONTEXTO: Ropa de yoga para cuerpos reales (inclusiva). 3. META: 10 nombres originales y potentes. 4. RESTRICCIONES: Evitar palabras trilladas como 'Zen' o 'Yoga'. 5. FORMATO: Lista + Significado + Disponibilidad .cl.",
        "previewResponse": "**1. Calma Real:** Evoca honestidad y pausa.\n**2. Cuerpo Vivo:** Enfocado en el movimiento y vitalidad.\n**3. Raíz:** Conexión con la tierra. Nombres cortos, de dos sílabas, fáciles de recordar.",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 67,
        "category": "Legal & Formalización",
        "title": "Acuerdo NDA: Protege tus Ideas",
        "icon": "lightbulb",
        "badPrompt": "Escribe un papel para que alguien firme y no me robe mi idea de negocio.",
        "badResponsePreview": "Yo, [Nombre], prometo no contarle a nadie la idea de [Tu Nombre] ni usarla para mi propio beneficio. Si lo hago, tendré que pagar una multa de 1 millón de pesos.",
        "badResponseAnalysis": "Documento sin validez ejecutiva. No define qué se considera 'Información Confidencial', no establece jurisdicción ni incluye excepciones estándar, lo que lo hace fácil de anular en un juicio.",
        "agiaPromptTagged": "1. ROL: Abogado de Negocios y Startups. 2. CONTEXTO: Revelación de algoritmo de IA a socio potencial. 3. META: NDA mutuo con multa disuasoria real. 4. RESTRICCIONES: Definición técnica de confidencialidad. 5. FORMATO: 1 página legal.",
        "previewResponse": "Contrato breve pero letal que define multas de 500 UF por incumplimiento y establece a Santiago de Chile como la jurisdicción para arbitraje inmediato.",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 68,
        "category": "Legal & Formalización",
        "title": "Régimen Tributario: SII Óptimo",
        "icon": "lightbulb",
        "badPrompt": "Qué régimen del SII es mejor para una pyme que recién empieza.",
        "badResponsePreview": "El Régimen ProPyme General es el que usa la mayoría de las empresas en Chile. Te permite llevar contabilidad completa y pagar impuestos según tus utilidades anuales.",
        "badResponseAnalysis": "Recomendación a ciegas. No menciona el régimen 'ProPyme Transparente' (14D8), que puede ahorrar millones en impuestos finales al socio si la empresa tiene utilidades pero el socio no tiene otros ingresos altos.",
        "agiaPromptTagged": "1. ROL: Contador Tributario Senior. 2. CONTEXTO: Ventas proyectadas $20M y perfil de ingresos del socio. 3. META: Comparar 14D3 vs 14D8. 4. RESTRICCIONES: Foco en ahorro de caja inmediata. 5. FORMATO: Veredicto Estratégico.",
        "previewResponse": "\"Para tu nivel de ventas, el Régimen 14D8 (Transparente) es el ganador: la empresa paga $0 impuesto corporativo y tú solo tributas en tu Global Complementario.\"",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 71,
        "category": "Legal & Formalización",
        "title": "Anexo Teletrabajo: Ley Chile",
        "icon": "lightbulb",
        "badPrompt": "Escribe un anexo para que mi empleado trabaje desde su casa.",
        "badResponsePreview": "A partir de hoy, el trabajador podrá realizar sus labores desde su domicilio particular. Debe cumplir con el mismo horario y estar disponible por WhatsApp y correo electrónico.",
        "badResponseAnalysis": "Incumple la Ley de Teletrabajo. No establece el derecho a desconexión de 12 horas, no asigna el pago de costos operacionales (internet/luz) ni define las medidas de seguridad y salud laboral necesarias.",
        "agiaPromptTagged": "1. ROL: Abogado Laboral experto. 2. CONTEXTO: Modalidad 100% remota para administrativo. 3. META: Cumplir Ley 21.220. 4. RESTRICCIONES: Derecho a desconexión y asignación de costos. 5. FORMATO: Documento Anexo Legal.",
        "previewResponse": "Anexo legal que estipula una asignación mensual de $20.000 por teletrabajo (exenta de impuestos) y garantiza el derecho a desconexión total entre las 19:00 y las 07:00 AM.",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 73,
        "category": "Diseño & Arte Digital",
        "title": "Diseño de Logo: Identidad Visual",
        "icon": "lightbulb",
        "badPrompt": "Hazme una idea de logo para una panadería que se llama 'El Trigal'.",
        "badResponsePreview": "Un dibujo de una espiga de trigo amarilla con un círculo de color café alrededor y el nombre escrito abajo con letras normales.",
        "badResponseAnalysis": "El resultado es un cliché visual de los años 90. No considera estilos modernos (minimalismo, isotipo), paletas de colores técnicos (HEX) ni la versatilidad necesaria para redes sociales y etiquetas.",
        "agiaPromptTagged": "1. ROL: Director Arte Senior experto en branding. \n2. CONTEXTO: Marca 'El Trigal', panadería artesanal de masa madre. Estilo: [Minimalista/Nórdico]. \n3. META: Crear un prompt técnico para IA generativa de imágenes. \n4. RESTRICCIONES: Evitar saturación. Colores tierra. Sin sombras realistas. \n5. FORMATO: Prompt en inglés optimizado para Midjourney/Ideogram.",
        "previewResponse": "\"Minimalist logo for artisanal bakery 'El Trigal', wheat stalk silhouette, organic shapes, earthy tones #5D4037 and #F5F5DC, vector style, flat design, white background, high contrast, professional typography --v 6.0\"",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 74,
        "category": "Operaciones & Procesos",
        "title": "Arquitecto No-Code: Automatización Zapier",
        "icon": "lightbulb",
        "problem": "Eliminación de horas hombre en traslado de datos manuales.",
        "badPrompt": "Cómo conecto mi formulario de Google con mi WhatsApp.",
        "badResponsePreview": "Puedes usar una aplicación como Zapier. Tienes que crear una cuenta, seleccionar Google Forms como origen y luego buscar una integración con WhatsApp para enviar el mensaje.",
        "badResponseAnalysis": "Respuesta genérica. No explica la lógica de los datos (mapeo de campos), no advierte sobre los costos de la API de WhatsApp ni sugiere alternativas más baratas para Pymes (como usar Sheets de intermedio).",
        "agiaPromptTagged": "1. ROL: Ingeniero Automatización No-Code. 2. CONTEXTO: Lead llena formulario -> Quiero alerta en mi celular. 3. META: Diseño de flujo lógico paso a paso. 4. RESTRICCIONES: Mapeo de variables. 5. FORMATO: Trigger -> Filtro -> Acción.",
        "previewResponse": "**Workflow Sugerido:**\n1. **Trigger:** Nueva respuesta en Google Forms.\n2. **Action (Google Sheets):** Crear fila nueva (Respaldo).\n3. **Action (Pushbullet/Slack):** Enviar notificación \"¡Nuevo Cliente: [Nombre]!\" (Es gratis, a diferencia de la API oficial de WhatsApp).",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 75,
        "category": "Operaciones & Procesos",
        "title": "Filtro Inteligente de Prospectos (Scoring)",
        "icon": "lightbulb",
        "problem": "Focalización del equipo de ventas en clientes con dinero y urgencia.",
        "badPrompt": "Dime quiénes de estos clientes son mejores para venderles.",
        "badResponsePreview": "Los que tienen empresas grandes parecen mejores. Los que escribieron hoy también son prioridad.",
        "badResponseAnalysis": "Criterio subjetivo y vago. No asigna un puntaje numérico basado en datos objetivos (presupuesto, urgencia, cargo) ni define una acción inmediata.",
        "agiaPromptTagged": "1. ROL: Director de Ventas (VP of Sales). 2. CONTEXTO: Lista de leads pegada. Criterios: Presupuesto +500k, Urgencia Alta. 3. META: Calificar leads del 1 al 10. 4. RESTRICCIONES: Justificar puntaje. 5. FORMATO: Tabla: [Nombre] | [Puntaje] | [Acción Inmediata].",
        "previewResponse": "| Nombre | Score | Acción |\n| :--- | :--- | :--- |\n| **Pyme X (Juan)** | **9/10** | **Llamar YA.** Cumple presupuesto y tiene urgencia por multa. |\n| **Estudiante Ana** | 3/10 | Enviar email con info genérica (Bajo presupuesto). |",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 76,
        "category": "Diseño & Arte Digital",
        "title": "Kit de Marca: Colores y Tipografía",
        "icon": "lightbulb",
        "badPrompt": "Qué colores me recomiendas para mi nueva marca de tecnología.",
        "badResponsePreview": "Te recomiendo usar azul y gris, porque el azul transmite confianza y el gris se ve profesional y serio para una empresa de tecnología.",
        "badResponseAnalysis": "Recomendación perezosa. El \"azul tech\" está saturado. No ofrece códigos HEX, no sugiere una jerarquía de colores (primario, secundario, acento) ni tipografías que complementen la emoción de la marca.",
        "agiaPromptTagged": "1. ROL: Branding Specialist Senior con experiencia en startups.\n2. CONTEXTO:\n   🎨 ADJUNTO: Logo actual o boceto de mi marca (si existe).\n   Mi negocio: [Ej: App de IA para emprendedores chilenos]\n   Valores de marca: [Ej: Innovación + Cercanía + Accesibilidad]\n   Público objetivo: [Ej: Dueños de Pymes 30-50 años]\n3. META: Crear paleta de colores completa + tipografías sugeridas.\n4. RESTRICCIONES:\n   - Dame códigos HEX exactos para usar en Canva/Figma.\n   - Evita el azul corporativo clásico (muy usado).\n   - Sugiere Google Fonts gratuitas.\n5. FORMATO: Guía de Estilo Visual con 3-4 colores y 2 tipografías.",
        "previewResponse": "\"Paleta: Morado Eléctrico (#6C5CE7) para innovación y Arena (#F7F1E3) para calidez humana. Tipografías: Inter (Sans) para legibilidad en pantalla y Playfair Display para títulos con autoridad.\"",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 77,
        "category": "Operaciones & Procesos",
        "title": "Optimizador Logístico: Rutas Inteligentes",
        "icon": "lightbulb",
        "problem": "Ahorro de combustible y tiempo de conducción en última milla.",
        "badPrompt": "Tengo que ir a Maipú, Las Condes y Santiago Centro. ¿Cuál es el mejor orden?",
        "badResponsePreview": "Podrías ir primero a Santiago Centro porque está al medio, luego a Las Condes y terminar en Maipú.",
        "badResponseAnalysis": "No considera el tráfico de hora punta en Santiago, ni el punto de partida específico, ni la agrupación lógica por zonas (Norte, Oriente, Poniente) para evitar cruzar la ciudad dos veces.",
        "agiaPromptTagged": "1. ROL: Coordinador Logístico. 2. CONTEXTO: Salida Independencia 10:00 AM. Puntos: Maipú, Vitacura, Centro. 3. META: Ruta anti-taco eficiente. 4. RESTRICCIONES: Agrupar por sectores. 5. FORMATO: Lista ordenada con tiempos estimados.",
        "previewResponse": "1. **Centro (10:30):** Aprovecha que ya bajó la hora punta de entrada.\n2. **Vitacura (11:30):** Conecta por Costanera Norte (rápido a esta hora).\n3. **Maipú (13:00):** Cruza la ciudad a la hora de almuerzo (menos autos) y regresas contra el tráfico.",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 78,
        "category": "Operaciones & Procesos",
        "title": "Asistente RRHH: Filtro de CVs",
        "icon": "lightbulb",
        "problem": "Identificación de talento real y reducción de tiempo en entrevistas inútiles.",
        "badPrompt": "Dime cuál de estos 3 currículums es mejor para vendedor.",
        "badResponsePreview": "El candidato 2 se ve bien porque trabajó en Falabella. El candidato 1 tiene poca experiencia.",
        "badResponseAnalysis": "Análisis superficial basado en marcas. No evalúa estabilidad laboral (rotación), logros numéricos concretos (cuánto vendió) ni brechas temporales sospechosas en el CV.",
        "agiaPromptTagged": "1. ROL: Headhunter Senior especializado en ventas.\n2. CONTEXTO:\n   📄 ADJUNTO: Los 3 CVs de los candidatos (PDF o texto copiado).\n   Cargo: Vendedor B2B para [mi rubro].\n   Lo que más me importa: [Ej: Que haya vendido antes y tenga estabilidad laboral]\n3. META: Ranking de candidatos con fortalezas y banderas rojas.\n4. RESTRICCIONES:\n   - Detecta 'Job Hopping' (muchos trabajos en poco tiempo).\n   - Busca logros numéricos concretos (ej: 'superé meta en 15%').\n   - Identifica gaps sospechosos (períodos sin trabajar).\n5. FORMATO: Tabla [Candidato | Fortaleza | Bandera Roja] + Recomendación final.",
        "previewResponse": "| Candidato | Fortaleza | Bandera Roja 🚩 |\n| :--- | :--- | :--- |\n| **Juan** | Experiencia en retail grande. | Ha tenido 4 trabajos en 2 años (Baja lealtad). |\n| **Ana** | **Logro: Superó meta +15% anual.** | Vive lejos (Riesgo atrasos). |\n*Recomendación: Entrevista a Ana. El logro pesa más.*",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 79,
        "category": "Operaciones & Procesos",
        "title": "Planificador de Producción Semanal",
        "icon": "lightbulb",
        "problem": "Cumplimiento de plazos de entrega sin colapsar al equipo el último día.",
        "badPrompt": "Tengo que hacer 100 tortas esta semana, ayúdame a organizarme.",
        "badResponsePreview": "Haz 20 tortas cada día de lunes a viernes y así terminas a tiempo.",
        "badResponseAnalysis": "Planificación lineal irreal. No considera tiempos de enfriado, decoración ni empaquetado. Ignora la capacidad limitada de los hornos y el riesgo de cuellos de botella.",
        "agiaPromptTagged": "1. ROL: Jefe de Producción Industrial experto en Manufactura.\n2. CONTEXTO:\n   📋 ADJUNTO: Lista de pedidos de la semana (Excel o foto de la pizarra).\n   Capacidad: [Ej: 2 hornos, 1 decorador, trabajo de 8 AM a 6 PM]\n   Fecha de entrega: Viernes antes de las 5 PM.\n3. META: Plan de producción por lotes para no colapsar el último día.\n4. RESTRICCIONES:\n   - Considera tiempos de enfriado/secado entre etapas.\n   - Identifica cuellos de botella (dónde se atora todo).\n   - Deja margen para imprevistos.\n5. FORMATO: Cronograma día por día con horarios AM/PM.",
        "previewResponse": "**Lunes:** Horneado masivo (Batch 1 y 2). Solo bizcochos.\n**Martes:** Horneado final y primer relleno.\n**Miércoles:** Decoración Batch 1.\n**Jueves:** Decoración final y Empaquetado total.",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 80,
        "category": "Operaciones & Procesos",
        "title": "Generador de Scripts Excel (Macros)",
        "icon": "lightbulb",
        "problem": "Automatización de tareas repetitivas en hojas de cálculo.",
        "badPrompt": "Cómo hago que en Excel se pinten de rojo las celdas que dicen 'Vencido'.",
        "badResponsePreview": "Usa el formato condicional. Selecciona las celdas, busca 'reglas para resaltar' y pon que sea igual a 'Vencido'.",
        "badResponseAnalysis": "Instrucción vaga para un usuario no experto. No entrega la fórmula exacta ni explica cómo aplicarla a toda una columna automáticamente.",
        "agiaPromptTagged": "1. ROL: Experto Excel Avanzado. 2. CONTEXTO: Pintar facturas vencidas (Fecha < Hoy). 3. META: Fórmula Formato Condicional exacta. 4. RESTRICCIONES: Paso a paso a prueba de tontos. 5. FORMATO: Guía 1-2-3 + Fórmula.",
        "previewResponse": "1. Selecciona columna Fechas. 2. Formato Condicional > Nueva Regla > Fórmula.\n**Pegar esto:** `=Y(A2<HOY(); B2=\"Pendiente\")`\n3. Elegir relleno Rojo.",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 81,
        "category": "Operaciones & Procesos",
        "title": "Auditor de Ciberseguridad: Higiene Digital",
        "icon": "lightbulb",
        "problem": "Prevención de pérdida catastrófica de datos o robo de cuentas bancarias.",
        "badPrompt": "Es segura mi contraseña 'Empresa2024'?",
        "badResponsePreview": "No, es muy insegura. Deberías ponerle mayúsculas, números y símbolos como 'Empresa2024!'.",
        "badResponseAnalysis": "Consejo cosmético. Agregar un signo de exclamación no protege contra ataques modernos. No menciona la autenticación de dos pasos (2FA) ni gestores de contraseñas.",
        "agiaPromptTagged": "1. ROL: Consultor Ciberseguridad Pyme. 2. CONTEXTO: Claves en Excel compartido. 3. META: Plan choque seguridad. 4. RESTRICCIONES: Herramientas gratuitas. 5. FORMATO: Semáforo Riesgos Críticos.",
        "previewResponse": "🔴 **Crítico:** Borra el Excel de claves YA. Instala **Bitwarden** (Gratis).\n🔴 **Crítico:** Activa el 2FA en el Instagram de la empresa (Google Authenticator, no SMS). Es el activo más robado hoy.",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 82,
        "category": "Operaciones & Procesos",
        "title": "Estandarizador de Inventario (SKU)",
        "icon": "lightbulb",
        "problem": "Orden lógico en bodega y reducción de errores de despacho.",
        "badPrompt": "Cómo le pongo nombre a mis productos para que no se me desordene el stock.",
        "badResponsePreview": "Ponle un nombre corto y un número. Por ejemplo: Polera1, Polera2.",
        "badResponseAnalysis": "Sistema no escalable. Cuando tengas 100 poleras, 'Polera99' no te dirá nada sobre la talla, color o modelo, causando caos en bodega.",
        "agiaPromptTagged": "1. ROL: Gestor de Inventarios. 2. CONTEXTO: Ropa bebé (Talla, Color, Tela). 3. META: Sistema códigos SKU lógico. 4. RESTRICCIONES: Legible por humanos. 5. FORMATO: Glosario + Ejemplos.",
        "previewResponse": "**Estructura:** [CATEGORÍA]-[PRENDA]-[TALLA]-[COLOR]\n**Ejemplos:**\n- BEB-BODY-03M-AZU (Body Bebé 3 Meses Azul)\n- NIÑ-POL-04T-ROJ (Polera Niño Talla 4 Roja)",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 83,
        "category": "Liderazgo & Equipos",
        "title": "El Delegador Maestro: Niveles de Autoridad",
        "icon": "lightbulb",
        "problem": "Liberación de tiempo del dueño sin perder el control del negocio.",
        "badPrompt": "Dime cómo decirle a mi asistente que vea mi correo.",
        "badResponsePreview": "Hola, necesito que desde mañana revises mi correo y me avises si hay algo urgente. Gracias.",
        "badResponseAnalysis": "Delegación 'abierta' peligrosa. No define qué es 'urgente', no establece límites de decisión ni crea un sistema de reporte.",
        "agiaPromptTagged": "1. ROL: Experto Liderazgo Situacional. 2. CONTEXTO: Delegar Inbox a junior. 3. META: Instrucción con límites. 4. RESTRICCIONES: Definir Nivel Autoridad (1: Investiga, 2: Propone, 3: Actúa). 5. FORMATO: Protocolo Delegación.",
        "previewResponse": "**Regla de Oro:**\n- Tienes **Nivel 3** en facturas (Envíalas a contabilidad directo).\n- Tienes **Nivel 2** en reclamos (Redacta el borrador, yo lo apruebo antes de enviar).",
        "metadata": {
            "score": 96
        }
    },
    {
        "id": 84,
        "category": "Liderazgo & Equipos",
        "title": "Perfil de Cargo 'Imán de Talento'",
        "icon": "lightbulb",
        "problem": "Atracción de candidatos proactivos alineados con la cultura.",
        "badPrompt": "Escribe un aviso para contratar a un Community Manager.",
        "badResponsePreview": "Busco Community Manager que sepa usar Instagram y TikTok. Pago conversable. Mandar currículum al correo.",
        "badResponseAnalysis": "Aviso plano que atraerá a cualquiera. No vende la visión de la empresa ni desafía al candidato, resultando en postulaciones de baja calidad.",
        "agiaPromptTagged": "1. ROL: Reclutador Senior. 2. CONTEXTO: Pyme educativa innovadora. 3. META: Aviso que filtre a los mediocres. 4. RESTRICCIONES: Incluir 'Misión del Cargo'. 5. FORMATO: Título + Misión + Desafío.",
        "previewResponse": "**Título:** ¿Eres el CM que odia el contenido aburrido?\n**Tu Misión:** No es 'postear fotos', es convertir seguidores en alumnos apasionados usando storytelling. Si buscas un trabajo de 9 a 5 para calentar el asiento, esto no es para ti.",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 85,
        "category": "Liderazgo & Equipos",
        "title": "Feedback Constructivo: Técnica Sandwich Pro",
        "icon": "lightbulb",
        "problem": "Corrección de errores sin dañar la moral del equipo.",
        "badPrompt": "Cómo le digo a mi diseñador que su trabajo quedó feo.",
        "badResponsePreview": "Dile que no te gustó, que se ve poco profesional y que esperabas algo mejor. Sé honesto para que aprenda.",
        "badResponseAnalysis": "Feedback destructivo y subjetivo ('feo'). Genera defensa y desmotivación en el empleado.",
        "agiaPromptTagged": "1. ROL: Coach Alto Rendimiento. 2. CONTEXTO: Logo no cumple identidad. 3. META: Feedback correctivo motivante. 4. RESTRICCIONES: Modelo SBI (Situación-Comportamiento-Impacto). 5. FORMATO: Guion conversación.",
        "previewResponse": "**\"Valoro tu rapidez (Pan). El uso de Comic Sans impacta nuestra percepción de seriedad ante clientes corporativos (Relleno). Sé que puedes ajustarlo a la tipografía del manual (Pan).\"**",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 86,
        "category": "Liderazgo & Equipos",
        "title": "Mediador de Conflictos: Gana-Gana",
        "icon": "lightbulb",
        "problem": "Resolución de problemas operativos derivados de roces personales.",
        "badPrompt": "Mis empleados pelean por la camioneta de reparto. Qué hago.",
        "badResponsePreview": "Haz un calendario donde la usen mitad y mitad. Si siguen peleando, amenaza con despedirlos.",
        "badResponseAnalysis": "Solución parche. No investiga la causa raíz (¿las rutas se solapan?) y el calendario arbitrario puede afectar las ventas.",
        "agiaPromptTagged": "1. ROL: Mediador Laboral. 2. CONTEXTO: Vendedor vs Repartidor por activo. 3. META: Acuerdo operativo justo. 4. RESTRICCIONES: Foco eficiencia negocio. 5. FORMATO: Guion Reunión.",
        "previewResponse": "**\"El objetivo no es quién gana la camioneta, es cómo entregamos más. Solución: Vendedor usa Uber corporativo para visitas cercanas (más barato) y la camioneta queda para cargas pesadas.\"**",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 87,
        "category": "Liderazgo & Equipos",
        "title": "Entrevista de Selección: Preguntas Filtro",
        "icon": "lightbulb",
        "problem": "Detección de mentiras o incompetencias antes de contratar.",
        "badPrompt": "Qué le pregunto a alguien que quiere ser mi asistente.",
        "badResponsePreview": "¿Tienes experiencia? ¿Sabes usar Excel? ¿Dónde vives? ¿Cuánto quieres ganar?",
        "badResponseAnalysis": "Preguntas cerradas o hipotéticas que se responden con un simple 'Sí'. No predicen comportamiento real.",
        "agiaPromptTagged": "1. ROL: Psicólogo Organizacional. 2. CONTEXTO: Asistente. Miedo: Que sea lento o deshonesto. 3. META: 5 preguntas conductuales. 4. RESTRICCIONES: Basadas en hechos pasados. 5. FORMATO: Pregunta | Qué buscar.",
        "previewResponse": "**Pregunta:** \"Cuéntame de la última vez que cometiste un error grave en el trabajo. ¿Cómo lo solucionaste?\"\n**Qué buscar:** Si culpa a otros o si asume responsabilidad y muestra aprendizaje.",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 88,
        "category": "Tecnología & Herramientas",
        "title": "Bots WhatsApp: Ventas 24/7",
        "icon": "lightbulb",
        "problem": "Venta automática y calificación de leads sin intervención humana.",
        "badPrompt": "Escribe un mensaje automático para mi WhatsApp que diga los precios de mis tortas y cómo comprar.",
        "badResponsePreview": "Hola, gracias por escribir. Las tortas de chocolate valen $15.000 y las de manjar $18.000. Puedes pagar por transferencia y enviarme el comprobante por aquí mismo. ¿Cuál quieres?",
        "badResponseAnalysis": "Es una respuesta estática. No califica al cliente, no gestiona la urgencia (fecha de entrega) ni ofrece alternativas si el producto no está disponible, lo que obliga al dueño a intervenir manualmente de todas formas.",
        "agiaPromptTagged": "1. ROL: Integrador de Chatbots de Conversión. 2. CONTEXTO: Negocio de pastelería con alta demanda por WhatsApp. 3. META: Flujo lógico de calificación y cierre. 4. RESTRICCIONES: Cuándo pasar a humano (solo reclamos). 5. FORMATO: Diagrama de texto para configuración de bot.",
        "previewResponse": "**Flujo Lógico del Bot:**\n1. **Saludo:** \"¡Hola! Bienvenido a [Marca]. ¿Para qué fecha necesitas tu torta?\"\n2. **Filtro:** Si es < 48h -> \"Lo siento, estamos a full. Mira nuestras opciones de 'Entrega Inmediata' aquí: [Link]\".\n3. **Calificación:** \"Es para: A) Regalo 🎁 | B) Disfrute personal 🍰\".\n4. **Cierre:** \"Perfecto, elige tu sabor y paga en 30 segundos aquí: [Link de Pago Flow/Transbank]\".",
        "metadata": {
            "score": 95
        }
    },
    {
        "id": 89,
        "category": "Liderazgo & Equipos",
        "title": "Checklist Onboarding: Primer Día Inolvidable",
        "icon": "lightbulb",
        "problem": "Acelera la productividad del nuevo empleado desde el día 1.",
        "badPrompt": "Qué hago con el empleado nuevo el primer día.",
        "badResponsePreview": "Dale las llaves, preséntalo al equipo y pásale los manuales para que lea.",
        "badResponseAnalysis": "Onboarding frío. El empleado pasará el día leyendo sin entender, sintiéndose solo y sin producir valor real.",
        "agiaPromptTagged": "1. ROL: Gerente Cultura. 2. CONTEXTO: Pyme servicios. 3. META: Onboarding 4 horas productividad. 4. RESTRICCIONES: Gesto humano + Configuración técnica. 5. FORMATO: Cronograma Hora a Hora.",
        "previewResponse": "**09:00:** Café bienvenida (No trabajo).\n**10:00:** Entrega \"Kit Supervivencia\" (Claves listas, nada de esperar al informático).\n**12:00:** Primera Victoria: Asignar tarea simple que pueda cerrar con éxito antes de almorzar.",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 90,
        "category": "Liderazgo & Equipos",
        "title": "Facilitador Daily: Reuniones Ágiles",
        "icon": "lightbulb",
        "problem": "Eliminación de reuniones eternas. Foco en desbloqueo.",
        "badPrompt": "Cómo hago una reunión rápida en la mañana.",
        "badResponsePreview": "Junta a todos y que cada uno cuente en qué está. Trata de que no hablen mucho.",
        "badResponseAnalysis": "Sin estructura, las 'Dailys' se convierten en sesiones de quejas interminables.",
        "agiaPromptTagged": "1. ROL: Scrum Master. 2. CONTEXTO: Equipo remoto. 3. META: Daily 15 minutos exactos. 4. RESTRICCIONES: Las 3 Preguntas Clave. Prohibido solucionar problemas ahí. 5. FORMATO: Reglas del Juego.",
        "previewResponse": "**Regla:** Cada uno tiene 2 minutos.\n1. ¿Qué logré ayer?\n2. ¿Qué haré hoy?\n3. **¿Qué me lo impide? (Bloqueo)** -> Aquí el líder actúa.",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 91,
        "category": "Liderazgo & Equipos",
        "title": "Definidor de KPIs (Qué medir)",
        "icon": "lightbulb",
        "problem": "Control de gestión real más allá de la 'sensación' del dueño.",
        "badPrompt": "Cómo sé si mi vendedor está trabajando bien.",
        "badResponsePreview": "Mira cuánto vendió al mes y compáralo con el mes pasado.",
        "badResponseAnalysis": "Indicador tardío (Lagging). Si esperas a fin de mes para saber que no vendió, ya perdiste el mes.",
        "agiaPromptTagged": "1. ROL: Director Operaciones. 2. CONTEXTO: Vendedor B2B. 3. META: 3 KPIs (Actividad, Calidad, Resultado). 4. RESTRICCIONES: Métricas predictivas. 5. FORMATO: Tabla KPIs.",
        "previewResponse": "1. **Actividad:** Llamadas salientes por día (Control diario).\n2. **Calidad:** Tasa de conversión Cita/Venta.\n3. **Resultado:** Margen generado (no solo venta bruta).",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 92,
        "category": "Tecnología & Herramientas",
        "title": "Transcripciones Pro: De Audio a Acta",
        "icon": "lightbulb",
        "badPrompt": "Toma este texto de una reunión grabada y arréglalo para que se lea bien.",
        "badResponsePreview": "Aquí está el texto limpio: Pedro dijo que el proyecto va bien, pero María dice que falta el presupuesto. Acordaron verse el próximo martes a las 10.",
        "badResponseAnalysis": "El resultado pierde el contexto de quién debe ejecutar qué tarea. No elimina las muletillas 'eeh', 'o sea' de forma inteligente y no estructura el acta bajo un formato profesional de compromisos.",
        "agiaPromptTagged": "1. ROL: Especialista en Transcripciones y Actas Ejecutivas.\n2. CONTEXTO:\n   🎙️ ADJUNTO: Audio de la reunión (MP3/M4A) o transcripción automática de Zoom/Meet.\n   Participantes: [Nombres si los conoces]\n   Duración aproximada: [X minutos]\n3. META: Limpiar muletillas y crear acta profesional con compromisos claros.\n4. RESTRICCIONES:\n   - Elimina 'eeh', 'o sea', 'básicamente' y repeticiones.\n   - Mantiene el tono original (no lo hagas sonar robot).\n   - Extrae SOLO los compromisos con responsable y fecha.\n5. FORMATO: Acta de Acuerdos lista para enviar por email.",
        "previewResponse": "**Acta de Reunión 22/12:**\n- **Acuerdo 1:** Pedro envía el Excel de costos antes del Miércoles.\n- **Acuerdo 2:** María contacta a Starken por el retraso.\n- **Bloqueador:** No hay respuesta de Tesorería por el pago de la factura #405.",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 93,
        "category": "Otros / Análisis",
        "title": "Analista de Ventas (BI)",
        "icon": "lightbulb",
        "problem": "Detección de patrones ocultos para aumentar ticket promedio.",
        "badPrompt": "Mira mis ventas de este mes y dime cómo me fue.",
        "badResponsePreview": "Vendiste 5 millones. El producto más vendido fue la polera roja.",
        "badResponseAnalysis": "Reporte descriptivo básico. No cruza variables (hora de compra, productos combinados) para dar insights accionables.",
        "agiaPromptTagged": "1. ROL: Experto en analizar datos de ventas.\n2. CONTEXTO:\n   📊 ADJUNTO: Excel con mis ventas del mes (fecha, producto, monto, cliente).\n   Mi negocio: [Ej: Tienda de ropa online / Pastelería / Servicios]\n3. META: Encontrar patrones ocultos que me ayuden a vender más.\n4. RESTRICCIONES:\n   - ¿Qué productos compran juntos? (para crear combos)\n   - ¿Cuál es la hora/día que más vendo?\n   - ¿Quiénes son mis clientes que más repiten?\n5. FORMATO: 3 Descubrimientos Clave + Acción Inmediata para cada uno.",
        "previewResponse": "**Hallazgo:** El 40% de quienes compran la 'Polera Roja' también llevan 'Calcetines Negros'.\n**Acción:** Crea un Pack 'Urbano' con ambos productos y sube el ticket promedio en un 15%.",
        "metadata": {
            "score": 96
        }
    },
    {
        "id": 94,
        "category": "Otros / Análisis",
        "title": "Detector de Sentimientos (Reviews)",
        "icon": "lightbulb",
        "problem": "Mejora de producto basada en feedback masivo real.",
        "badPrompt": "Resume los comentarios que dejaron los clientes.",
        "badResponsePreview": "A la mayoría le gusta, pero algunos se quejan del envío.",
        "badResponseAnalysis": "Demasiado general. No especifica qué del envío (¿lento? ¿roto? ¿caro?) ni cuantifica la gravedad del problema.",
        "agiaPromptTagged": "1. ROL: Especialista en Customer Experience y Análisis de Sentimientos.\n2. CONTEXTO:\n   💬 ADJUNTO: Copia de los últimos 30-50 comentarios/reviews de clientes (de Google, Instagram, WhatsApp o email).\n   Mi producto/servicio: [Ej: Cursos online / Pastelería / Servicios de diseño]\n3. META: Analizar qué les encanta y qué odian de mi negocio.\n4. RESTRICCIONES:\n   - Identifica dolores recurrentes (lo que se repite).\n   - Busca 'lo que nadie dice pero se nota' (quejas implícitas).\n   - Cuantifica: ¿cuántos mencionan cada problema?\n5. FORMATO: Tabla [Categoría | Sentimiento | Frecuencia] + Top 3 Acciones Urgentes.",
        "previewResponse": "**Dolor Crítico:** 8 clientes mencionan que la caja llega aplastada. Aunque el producto está bien, la experiencia de 'unboxing' es terrible.",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 95,
        "category": "Otros / Análisis",
        "title": "La Regla de Pareto: 80/20 Clientes",
        "icon": "lightbulb",
        "problem": "Optimización extrema de recursos enfocándose en clientes rentables.",
        "badPrompt": "Dime quiénes son mis mejores clientes.",
        "badResponsePreview": "Juan y María han comprado harto.",
        "badResponseAnalysis": "Análisis lineal. No cruza rentabilidad ni riesgo de fuga.",
        "agiaPromptTagged": "1. ROL: Estratega Rentabilidad. 2. CONTEXTO: Lista ventas anuales. 3. META: Identificar el 20% que hace el 80% utilidad. 4. RESTRICCIONES: Estrategia retención VIP. 5. FORMATO: Lista VIP + Acción Mimo.",
        "previewResponse": "**Alerta:** Solo 5 clientes te generan el 75% de tu sueldo.\n**Acción:** A esos 5, envíales un regalo físico a fin de año. Si pierdes a uno, tu negocio tiembla.",
        "metadata": {
            "score": 97
        }
    },
    {
        "id": 96,
        "category": "Otros / Análisis",
        "title": "Análisis de Embudo: Fugas Web",
        "icon": "lightbulb",
        "problem": "Recuperación de ventas perdidas por fricción técnica.",
        "badPrompt": "Mucha gente visita mi web pero nadie compra.",
        "badResponsePreview": "Mejora el diseño y baja los precios.",
        "badResponseAnalysis": "Diagnóstico de escopeta. No analiza métricas para saber DÓNDE se van.",
        "agiaPromptTagged": "1. ROL: Experto CRO. 2. CONTEXTO: 1000 visitas -> 100 carritos -> 2 ventas. 3. META: Diagnóstico fuga. 4. RESTRICCIONES: Fricción checkout. 5. FORMATO: Hipótesis + Solución.",
        "previewResponse": "**Diagnóstico:** Caída del 98% en Checkout.\n**Causa:** Costo de envío sorpresa al final asusta al cliente.\n**Solución:** Pon calculador de envíos en la ficha de producto.",
        "metadata": {
            "score": 95
        }
    },
    {
        "id": 97,
        "category": "Otros / Análisis",
        "title": "Pronóstico de Demanda (Forecasting)",
        "icon": "lightbulb",
        "problem": "Evita quiebres de stock o sobre-stock (dinero parado).",
        "badPrompt": "Cuánto voy a vender el próximo mes.",
        "badResponsePreview": "Seguramente vendas parecido a este mes, unos 4 millones.",
        "badResponseAnalysis": "Proyección estática. No considera tendencia de crecimiento mensual ni estacionalidad.",
        "agiaPromptTagged": "1. ROL: Data Scientist Retail. 2. CONTEXTO: Ventas últimos 6 meses. 3. META: Proyección 3 meses. 4. RESTRICCIONES: Tasa crecimiento promedio. 5. FORMATO: Escenario Conservador vs Optimista.",
        "previewResponse": "**Proyección:** Vienes creciendo al 10% mensual.\n- **Mes 1:** $4.4M\n- **Mes 2:** $4.8M\n*Alerta:* Necesitas comprar un 20% más de stock hoy para no quebrar en Mes 2.",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 98,
        "category": "Otros / Análisis",
        "title": "Auditoría de Ads: ROI Real",
        "icon": "lightbulb",
        "problem": "Evita quemar dinero en publicidad que no es rentable.",
        "badPrompt": "Gasté 100 lucas en Facebook y vendí 300. ¿Está bien?",
        "badResponsePreview": "Sí, triplicaste tu inversión. Sigue así.",
        "badResponseAnalysis": "Falso positivo peligroso. No descuenta costo producto ni impuestos.",
        "agiaPromptTagged": "1. ROL: Performance Manager. 2. CONTEXTO: Inversión $100k, Venta $300k, Costo Prod 50%. 3. META: Utilidad Neta real. 4. RESTRICCIONES: Considerar IVA. 5. FORMATO: Matemática Servilleta.",
        "previewResponse": "**Cálculo Real:**\nVenta $300k - IVA $48k - Costo $150k - Ads $100k = **Utilidad $2.000**.\n*Veredicto:* Trabajaste gratis. Sube precios o apaga la campaña.",
        "metadata": {
            "score": 98
        }
    },
    {
        "id": 99,
        "category": "Estrategia & Lanzamiento",
        "title": "Guion Pitch Elevator: 30s",
        "icon": "lightbulb",
        "badPrompt": "Cómo puedo explicar mi negocio de inteligencia artificial de forma rápida.",
        "badResponsePreview": "Hola, mi negocio se llama Aula GenIA y enseñamos a la gente a usar ChatGPT y otras herramientas para que puedan ser más productivos en sus trabajos y empresas hoy.",
        "badResponseAnalysis": "Aburrido y genérico. No empieza con un problema impactante, no menciona un resultado tangible y no deja a la otra persona con ganas de hacer una pregunta de seguimiento.",
        "agiaPromptTagged": "1. ROL: Coach de Pitch de Inversión. 2. CONTEXTO: Aula GenIA para público que no sabe de tecnología. 3. META: Guion de 30s de alto enganche. 4. RESTRICCIONES: Esquema Gancho-Problema-Solución. 5. FORMATO: Texto fluido para memorizar.",
        "previewResponse": "\"¿Sabías que el 70% de los dueños de Pymes trabaja 12 horas al día pero solo rinde 4? En Aula GenIA revertimos eso usando inteligencia artificial para que el negocio trabaje para el dueño, y no al revés. ¿Te doy mi tarjeta?\"",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 100,
        "category": "Otros / Análisis",
        "title": "Análisis de Canales (Atribución)",
        "icon": "lightbulb",
        "problem": "Enfoque de esfuerzos de marketing donde realmente pagan.",
        "badPrompt": "Qué me trae más clientes: Instagram o Email.",
        "badResponsePreview": "Instagram porque tienes más likes.",
        "badResponseAnalysis": "Confunde métricas de vanidad (likes) con métricas de negocio (ventas).",
        "agiaPromptTagged": "1. ROL: Estratega Digital. 2. CONTEXTO: Origen clientes vs Ventas. 3. META: Ranking rentabilidad. 4. RESTRICCIONES: Calidad del cliente (LTV). 5. FORMATO: Ranking + Acción.",
        "previewResponse": "**Ranking:**\n1. **Email:** Pocos clics, pero compran 2 veces más caro.\n2. **Instagram:** Muchos likes, pero compran productos baratos.\n*Acción:* Mueve esfuerzo de crear Reels a escribir correos.",
        "metadata": {
            "score": 91
        }
    },
    {
        "id": 101,
        "category": "Otros / Análisis",
        "title": "Simulador de Escenarios 'What If'",
        "icon": "lightbulb",
        "problem": "Toma de decisiones financieras sin riesgo real.",
        "badPrompt": "Qué pasa si subo mis precios un 10%.",
        "badResponsePreview": "Ganarás más por unidad, pero quizás vendas menos.",
        "badResponseAnalysis": "Respuesta obvia cualitativa. Necesitamos saber *cuánto* menos podemos vender antes de perder dinero.",
        "agiaPromptTagged": "1. ROL: Modelador Financiero. 2. CONTEXTO: Venta actual 100u a $20k. 3. META: Escenario subida 10% con pérdida 5% clientes. 4. RESTRICCIONES: Comparar utilidad final. 5. FORMATO: A vs B.",
        "previewResponse": "**Escenario Actual:** Utilidad $500k.\n**Escenario Nuevo (+10% precio, -5% ventas):** Utilidad $580k.\n*Conclusión:* Incluso perdiendo clientes, ganas $80k más trabajando menos. Sube el precio.",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 102,
        "category": "Otros / Análisis",
        "title": "Reporte de Salud del Negocio",
        "icon": "lightbulb",
        "problem": "Visión holística del estado de la empresa en una página.",
        "badPrompt": "Cómo va mi pyme este año.",
        "badResponsePreview": "Va bien, vendes harto.",
        "badResponseAnalysis": "Optimismo ciego. No mira la deuda ni el flujo de caja.",
        "agiaPromptTagged": "1. ROL: CEO Interino. 2. CONTEXTO: Ventas, Gastos, Deudas. 3. META: Diagnóstico salud. 4. RESTRICCIONES: Semáforo. 5. FORMATO: Semáforo + Prioridad #1.",
        "previewResponse": "🟢 **Ventas:** Creciendo.\n🔴 **Caja:** Peligro. Tienes muchas facturas por cobrar. Estás vendiendo pero no cobrando.\n**Prioridad:** Llama a cobranza hoy.",
        "metadata": {
            "score": 94
        }
    }
];
export default casesData;