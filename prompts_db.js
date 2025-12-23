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
        "agiaPromptTagged": "1. ROL: Actúa como un Asistente Ejecutivo de Alta Dirección (SDR).\n2. CONTEXTO: \n   Correos: [Pega aquí el texto de tus últimos 10-15 correos]\n   Prioridades: [Pagos de clientes, consultas de soporte, envíos por Starken]\n3. META: Categorizar los correos por urgencia y redactar borradores de respuesta inmediata.\n4. RESTRICCIONES:\n   - Clasifica en: \"Responder Hoy\", \"Delegar\", \"Informativo\".\n   - Tono: Profesional pero cercano (estilo chileno de oficina).\n   - Máximo 3 líneas por respuesta sugerida.\n5. FORMATO: Tabla con 3 columnas: [Remitente] | [Resumen Crítico] | [Acción Sugerida].",
        "previewResponse": "| Remitente | Resumen Crítico | Acción Sugerida |\n| :--- | :--- | :--- |\n| Juan Pérez (Cliente) | Reclamo por retraso en envío Starken. El cliente suena molesto por falta de tracking. | **Responder Hoy:** \"Hola Juan, te pido mil disculpas por el retraso. El envío está en tránsito y aquí tienes el número de seguimiento...\" |\n| Tesorería Municipal | Aviso de pago de patentes comerciales vence este viernes. | **Delegar:** Enviar a Contabilidad para pago inmediato y evitar multas. |\n| Newsletter IA | Resumen de novedades de la semana. | **Informativo:** Archivar para lectura de fin de semana. |",
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
        "agiaPromptTagged": "1. ROL: Eres un Project Manager experto en metodologías Ágiles. 2. CONTEXTO: Transcripción: [Texto notas rápidas]. 3. META: Extraer decisiones y tareas. 4. RESTRICCIONES: Identifica Bloqueadores. Tono ejecutivo. 5. FORMATO: Resumen frase + Lista Decisiones + Tabla Tareas.",
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
        "agiaPromptTagged": "1. ROL: Analista de Inteligencia con síntesis extrema. 2. CONTEXTO: Documento extenso sobre Ley 21.220 Chile. Interés: Costos financieros. 3. META: Extraer esencia accionable. 4. RESTRICCIONES: Formato 'La Carnecita'. Max 300 palabras. 5. FORMATO: Resumen Ejecutivo + Tabla Riesgos/Oportunidades.",
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
        "agiaPromptTagged": "1. ROL: Analista Datos Senior. 2. CONTEXTO: Contactos desordenados de una feria presencial. 3. META: Normalizar para CRM. 4. RESTRICCIONES: Formato chileno +56 9 XXXX XXXX. Separa Nombre y Apellido. 5. FORMATO: Bloque de código CSV.",
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
        "agiaPromptTagged": "1. ROL: Experto Cold Email B2B. 2. CONTEXTO: Software automatización vs errores manuales en F29. 3. META: Vender la REUNIÓN usando PAS. 4. RESTRICCIONES: Max 100 palabras. Asunto minúsculas. 5. FORMATO: [Asunto] + [Cuerpo].",
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
        "agiaPromptTagged": "1. ROL: Experto Neuromarketing. 2. CONTEXTO: Cafetera de lujo para sibaritas del café. 3. META: Beneficios Sensoriales. 4. RESTRICCIONES: Lenguaje de olor/sonido. 5. FORMATO: Título + Descripción Emocional.",
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
        "agiaPromptTagged": "1. ROL: Closer Ventas. 2. CONTEXTO: Objeción por miedo al cambio en implementación de software. 3. META: Aislar la duda real. 4. RESTRICCIONES: No agresivo. Preguntas socráticas. 5. FORMATO: Guion respuesta WhatsApp.",
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
        "agiaPromptTagged": "1. ROL: Editor Viral. 2. CONTEXTO: Transcripción clase 10 min. 3. META: 3 momentos alto impacto (30-60s). 4. RESTRICCIONES: Tiempos exactos y títulos virales. 5. FORMATO: Lista detallada.",
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
        "agiaPromptTagged": "1. ROL: Auditor Financiero Pymes. 2. CONTEXTO: Lista gastos banco. 3. META: Hallar gastos hormiga/duplicados. 4. RESTRICCIONES: Clasifica: Crítico, Necesario, Prescindible. 5. FORMATO: Informe Fugas.",
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
        "badResponseAnalysis": "El resultado es un simple eco de los datos. No desglosa cuánto corresponde a IVA Débito vs Crédito, no menciona el PPM ni explica si existen retenciones de honorarios o multas pendientes.",
        "agiaPromptTagged": "1. ROL: Contador Auditor experto en tributación chilena. 2. CONTEXTO: Reporte Formulario 29 [Texto/Imagen]. 3. META: Explicar cuánto, por qué y fecha límite de pago. 4. RESTRICCIONES: Sin tecnicismos, foco en flujo de caja. 5. FORMATO: Resumen 'A pagar'.",
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
        "agiaPromptTagged": "1. ROL: Analista BI Senior. 2. CONTEXTO: Costos, Precios y Tiempos de entrega de [Producto A] y [Producto B]. 3. META: Rentabilidad por HORA de trabajo. 4. RESTRICCIONES: Identificar cuál eliminar o potenciar. 5. FORMATO: Tabla comparativa.",
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
        "badResponseAnalysis": "Tono informal y carente de sustento técnico. No menciona el ROI de la inversión, la capacidad de repago, el EBITDA ni cómo el crédito impactará positivamente en los estados financieros.",
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
        "badResponseAnalysis": "Sugerencia peligrosa. No considera el IVA por pagar, el PPM, las imposiciones de los empleados ni el fondo de reserva para emergencias, lo que podría llevar a la quiebra técnica en meses de baja venta.",
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
        "badResponseAnalysis": "Análisis superficial y no profesional. No detecta solapamiento de funciones (ej. pagar Google Workspace y Microsoft 365 al mismo tiempo) ni sugiere alternativas Open Source o 'Lifetime deals'.",
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
        "badResponseAnalysis": "Error crítico de cálculo. No considera el 'Costo Empresa' real (gratificación, leyes sociales, SIS, vacaciones), que en Chile es aprox. un 25-30% sobre el sueldo líquido.",
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
        "badResponseAnalysis": "Omite detalles críticos: no explica la diferencia tributaria entre SpA y Ltda, no menciona la importancia del capital inicial mínimo para el banco, ni el paso posterior del RUT en el SII.",
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
        "badResponseAnalysis": "No identifica las 'Clases Niza'. El usuario podría registrar su marca en una categoría que no le pertenece, dejándolo desprotegido legalmente ante competidores del mismo rubro.",
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
        "badResponseAnalysis": "Contrato legalmente débil en Chile. No incluye la cláusula de gratificación legal (Art. 47 o 50), no define la naturaleza de las comisiones ni incluye protección de propiedad intelectual o carteras de clientes.",
        "agiaPromptTagged": "1. ROL: Abogado Laboral Chile. 2. CONTEXTO: Vendedor B2B con manejo de datos sensibles. 3. META: Borrador contrato robusto. 4. RESTRICCIONES: Incluir gratificación legal y confidencialidad. 5. FORMATO: Documento legal estructurado.",
        "previewResponse": "Borrador con cláusulas específicas de gratificación mensual del 25%, jornada 44h (Ley 40h progresiva) y blindaje sobre el robo de base de datos de clientes.",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 66,
        "category": "Legal & Formalización",
        "title": "Términos Web: SERNAC y Garantía",
        "icon": "lightbulb",
        "badPrompt": "Escribe los términos y condiciones para mi tienda de zapatos online.",
        "badResponsePreview": "No aceptamos devoluciones si el producto fue usado. El envío tarda 5 días. Si el zapato falla, tienes 30 días para avisarnos y lo cambiamos si tenemos stock.",
        "badResponseAnalysis": "Ilegal según la normativa actual del SERNAC. En Chile, la garantía legal es de 6 meses (6x6) y el derecho a retracto en compras online es obligatorio a menos que se excluya explícitamente bajo ciertas condiciones.",
        "agiaPromptTagged": "1. ROL: Consultor Derecho Digital Chile. 2. CONTEXTO: Ecommerce de calzado. 3. META: T&C conformes a Ley Pro-Consumidor. 4. RESTRICCIONES: Garantía legal 6 meses. 5. FORMATO: Texto legal claro para usuario.",
        "previewResponse": "\"Tu política ahora cumple: Garantía legal de 6 meses para fallas de fábrica y 10 días de retracto sin preguntas. Esto evita multas millonarias del SERNAC ante reclamos.\"",
        "metadata": {
            "score": 90
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
        "id": 75,
        "category": "Diseño & Arte Digital",
        "title": "Thumbnail Viral YouTube",
        "icon": "lightbulb",
        "badPrompt": "Dame una idea de portada para un video sobre inteligencia artificial.",
        "badResponsePreview": "Una imagen de un robot azul sentado frente a un computador con un fondo de circuitos eléctricos y luces brillantes.",
        "badResponseAnalysis": "Imagen saturada y extremadamente común (cliché de IA). No genera curiosidad, el robot se ve \"falso\" y no deja espacio para el texto de impacto que requiere YouTube para captar atención.",
        "agiaPromptTagged": "1. ROL: Experto en CTR visual de YouTube. 2. CONTEXTO: Video de 5 min sobre cómo la IA reemplaza tareas aburridas. 3. META: Prompt para miniatura de alto impacto. 4. RESTRICCIONES: Colores contrastantes (Amarillo/Negro). 5. FORMATO: Prompt técnico en inglés.",
        "previewResponse": "\"High-impact YouTube thumbnail, extreme close-up of a shocked human face looking at a floating holographic task list being checked by a minimal energy spark, bright yellow and deep black contrast, bokeh background, 3D render style, 8k resolution\"",
        "metadata": {
            "score": 89
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
        "agiaPromptTagged": "1. ROL: Branding Specialist Senior. 2. CONTEXTO: Marca de IA para humanos, valores: Innovación y Cercanía. 3. META: Paleta HEX + Google Fonts. 4. RESTRICCIONES: Evitar el azul corporativo estándar. 5. FORMATO: Guía de Estilo Visual.",
        "previewResponse": "\"Paleta: Morado Eléctrico (#6C5CE7) para innovación y Arena (#F7F1E3) para calidez humana. Tipografías: Inter (Sans) para legibilidad en pantalla y Playfair Display para títulos con autoridad.\"",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 80,
        "category": "Diseño & Arte Digital",
        "title": "Banner Profesional LinkedIn",
        "icon": "lightbulb",
        "badPrompt": "Hazme un fondo para mi perfil de LinkedIn que hable de mi trabajo en marketing.",
        "badResponsePreview": "Una foto de un escritorio con un café, un iPhone y un Macbook abierto con gráficos de barras de colores subiendo.",
        "badResponseAnalysis": "Imagen genérica de stock. No considera que en LinkedIn la foto de perfil tapa el lado izquierdo del banner, por lo que el contenido importante quedaría oculto.",
        "agiaPromptTagged": "1. ROL: Personal Branding Designer. 2. CONTEXTO: Consultor experto en IA. 3. META: Imagen panorámica (aspect ratio 4:1). 4. RESTRICCIONES: Lado izquierdo libre de elementos clave. 5. FORMATO: Prompt técnico en inglés.",
        "previewResponse": "\"Abstract panoramic background for LinkedIn, deep navy blue gradients, geometric data patterns focused on the right side, sleek 3D glass textures, minimal and clean, cinematic lighting, 4:1 aspect ratio --ar 4:1\"",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 82,
        "category": "Diseño & Arte Digital",
        "title": "Iconografía Web: Detalles",
        "icon": "lightbulb",
        "badPrompt": "Necesito unos iconos de una casa, un camión y un reloj para mi página web.",
        "badResponsePreview": "Aquí tienes: 🏠, 🚚, 🕒. Puedes usarlos en tu menú o en la sección de servicios para que se entienda mejor.",
        "badResponseAnalysis": "Entrega emojis o imágenes de estilos diferentes. Para una web profesional, los iconos deben compartir el mismo grosor de línea, color y estilo (Line-art, Solid o Duotone) para no verse como una \"página en construcción\".",
        "agiaPromptTagged": "1. ROL: Icon Designer Senior. 2. CONTEXTO: Marca Aula GenIA (moderna, técnica). 3. META: Set de 5 iconos coherentes. 4. RESTRICCIONES: Estilo Line Art minimalista. 5. FORMATO: Prompt técnico en inglés.",
        "previewResponse": "\"Icon set for technology web, [house, truck, clock, gear, user], consistent thin line-art style, rounded corners, white background, isolated, vector quality, flat design, minimal --no shadows\"",
        "metadata": {
            "score": 87
        }
    },
    {
        "id": 83,
        "category": "Tecnología & Herramientas",
        "title": "CTO Personal: Tu Stack de IA",
        "icon": "lightbulb",
        "problem": "Automatización masiva con herramientas baratas. Eficiencia tecnológica.",
        "badPrompt": "Dime qué programas de inteligencia artificial me recomiendas para mi negocio de ropa.",
        "badResponsePreview": "Te recomiendo usar ChatGPT para escribir textos, Canva para hacer los diseños de Instagram y Midjourney si necesitas fotos de modelos. Son los más conocidos.",
        "badResponseAnalysis": "Recomendación de herramientas aisladas. No explica cómo se conectan entre sí (workflow), no considera el presupuesto ni la curva de aprendizaje del usuario.",
        "agiaPromptTagged": "1. ROL: Consultor CTO (Chief Technology Officer). 2. CONTEXTO: E-commerce de ropa, presupuesto bajo, 1 persona operando. 3. META: Recomendar Stack ideal (3 apps) y su conexión. 4. RESTRICCIONES: Fáciles de usar. 5. FORMATO: Tabla de Ecosistema.",
        "previewResponse": "\"Tu Stack: 1. **ManyChat** (Ventas automáticas en IG), 2. **Canva Pro** (Diseño con IA Magic Media), 3. **ChatGPT Plus** (Tu cerebro estratégico para promociones). Conexión: ManyChat capta el lead -> ChatGPT genera el copy -> Canva lo visualiza.\"",
        "metadata": {
            "score": 96
        }
    },
    {
        "id": 84,
        "category": "Tecnología & Herramientas",
        "title": "Comparador de IAs: Elige Bien",
        "icon": "lightbulb",
        "badPrompt": "Cuál IA es mejor: ¿ChatGPT o Claude?.",
        "badResponsePreview": "Ambas son buenas. ChatGPT es más famosa y tiene más funciones, pero Claude escribe muy bien. Te recomiendo probar las dos y ver cuál te gusta más.",
        "badResponseAnalysis": "Respuesta subjetiva y sin datos. No diferencia por casos de uso específicos (análisis de datos vs. redacción creativa) ni menciona las limitaciones de las versiones gratuitas.",
        "agiaPromptTagged": "1. ROL: Experto en LLMs (Modelos de Lenguaje). 2. CONTEXTO: Necesidad de analizar archivos Excel pesados y redactar correos humanos. 3. META: Mejor modelo según tarea. 4. RESTRICCIONES: Versiones actuales (2024). 5. FORMATO: Veredicto + Truco de uso.",
        "previewResponse": "\"Veredicto: Usa **Claude 3.5 Sonnet** para correos (tono mucho más humano y menos clichés) y **ChatGPT (GPT-4o)** para el Excel (su herramienta de Data Analysis es superior).\"",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 85,
        "category": "Tecnología & Herramientas",
        "title": "Prompt Chaining: Procesos Pro",
        "icon": "lightbulb",
        "badPrompt": "Hazme un curso online completo sobre cómo cocinar pan de masa madre.",
        "badResponsePreview": "Módulo 1: Introducción. Módulo 2: Ingredientes. Módulo 3: Fermentación. Módulo 4: Horneado. (Sigue un texto largo y genérico).",
        "badResponseAnalysis": "Intenta hacer todo en un solo paso. Esto causa que la IA alucine, pierda calidad en los detalles y entregue un contenido superficial que no sirve para un curso real.",
        "agiaPromptTagged": "1. ROL: Ingeniero de Prompts. 2. CONTEXTO: Creación de infoproducto de alta calidad. 3. META: 3 prompts encadenados. 4. RESTRICCIONES: No mezclar tareas. 5. FORMATO: Prompt 1 -> Prompt 2 -> Prompt 3.",
        "previewResponse": "\"Prompt 1: Diseña el temario pedagógico. Prompt 2: Redacta el guion detallado del Módulo 1 basado en el temario aprobado. Prompt 3: Crea el examen de certificación para el Módulo 1.\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 86,
        "category": "Tecnología & Herramientas",
        "title": "Auditoría de Suscripciones Tech",
        "icon": "lightbulb",
        "badPrompt": "Dime qué programas puedo dejar de pagar si ya tengo ChatGPT Plus.",
        "badResponsePreview": "Podrías dejar de pagar traductores online o algunos correctores de texto, porque ChatGPT ya hace esas cosas bastante bien por ti.",
        "badResponseAnalysis": "No analiza el solapamiento de funciones avanzadas (ej: Jasper, Copy.ai, o herramientas de análisis de datos básicas) que ChatGPT Plus ya integra de forma nativa, ahorrando cientos de dólares.",
        "agiaPromptTagged": "1. ROL: Consultor TI (Tecnologías de Información). 2. CONTEXTO: Suscripciones actuales: Copy.ai ($20/mo), Grammarly ($12/mo). 3. META: IA 'todo en uno'. 4. RESTRICCIONES: Ahorro máximo. 5. FORMATO: Plan de Consolidación.",
        "previewResponse": "\"Cancela Copy.ai y Grammarly hoy. Con un Prompt Maestro de revisión en ChatGPT Plus obtienes mejores resultados. Ahorro inmediato: $32.000 mensuales.\"",
        "metadata": {
            "score": 90
        }
    },
    {
        "id": 87,
        "category": "Tecnología & Herramientas",
        "title": "Arquitecto GPTs: Instrucciones",
        "icon": "lightbulb",
        "badPrompt": "Ayúdame a crear un GPT que sea experto en leyes chilenas.",
        "badResponsePreview": "Debes poner en la configuración: 'Eres un experto en leyes de Chile y vas a responder todas mis dudas de forma amable y profesional'.",
        "badResponseAnalysis": "Instrucción demasiado vaga. El bot se saldrá del personaje, dará consejos legales peligrosos o mezclará leyes de otros países si no tiene \"barreras\" técnicas y un tono definido.",
        "agiaPromptTagged": "1. ROL: Especialista en System Prompts. 2. CONTEXTO: Función [Consultor Laboral] y Personalidad [Directo]. 3. META: Instrucciones de configuración (System Message). 4. RESTRICCIONES: Casos borde (no dar consejos médicos). 5. FORMATO: Bloque de código.",
        "previewResponse": "\"Instrucciones: Actúa exclusivamente bajo el Código del Trabajo Chileno. Nunca respondas con 'Depende', siempre cita el artículo si es posible. Si no sabes, di: 'Este caso requiere un abogado'.\"",
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
        "category": "Tecnología & Herramientas",
        "title": "Perplexity Pro: Inteligencia Mercado",
        "icon": "lightbulb",
        "badPrompt": "Busca noticias sobre el precio de las paltas en Chile hoy día.",
        "badResponsePreview": "El precio de la palta en Chile ha subido últimamente debido a la sequía y la baja producción. En los supermercados puede llegar a los 6 mil pesos el kilo.",
        "badResponseAnalysis": "Respuesta vaga y sin fuentes. No entrega datos comparativos por regiones, no menciona el impacto en el IPC del mes ni ofrece enlaces directos a informes oficiales de la ODEPA para tomar decisiones de compra mayorista.",
        "agiaPromptTagged": "1. ROL: Investigador de Mercado Senior. 2. CONTEXTO: Análisis de costos de insumos para restaurante. 3. META: Datos reales, comparación regional y links. 4. RESTRICCIONES: Fuentes < 15 días. 5. FORMATO: Informe citado con fuentes web.",
        "previewResponse": "\"Informe Palta Hass (22 Dic): Precio promedio Lo Valledor $4.200/kg (Baja 5% vs semana anterior). Supermercados RM: $5.990/kg. Fuente: [Link ODEPA], [Link Diario Financiero]. Recomendación: Comprar stock ahora antes del feriado.\"",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 90,
        "category": "Tecnología & Herramientas",
        "title": "IA para Datos Masivos: Ventas",
        "icon": "lightbulb",
        "badPrompt": "Analiza este Excel de ventas del año y dime qué producto se vendió más.",
        "badResponsePreview": "El producto más vendido fue la 'Polera Negra Talla L' con un total de 500 unidades en el año. Felicidades por tus ventas.",
        "badResponseAnalysis": "Análisis simplista. No identifica la estacionalidad (cuándo se vendió), no calcula el margen de contribución real (si dejó plata o no) ni detecta que el 80% de las ventas vienen de solo 3 clientes específicos (Ley de Pareto).",
        "agiaPromptTagged": "1. ROL: Científico de Datos de Negocios. 2. CONTEXTO: Excel de ventas de 12 meses. 3. META: Hallar productos de máximo margen y fuga de clientes. 4. RESTRICCIONES: Lenguaje simple para el dueño. 5. FORMATO: 3 Insights Estratégicos.",
        "previewResponse": "\"Insight 1: Tu producto más vendido (Polera L) tiene el margen más bajo (10%). Estás trabajando mucho para ganar poco. Insight 2: El 60% de tus clientes de Enero no volvió en todo el año (Fuga crítica). Insight 3: Los Jueves a las 21:00 es cuando más te compran por la web.\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 91,
        "category": "Tecnología & Herramientas",
        "title": "Ciberseguridad Pyme: Blindaje",
        "icon": "lightbulb",
        "badPrompt": "Dime cómo puedo proteger mi WhatsApp para que no me lo roben.",
        "badResponsePreview": "Para proteger tu WhatsApp debes poner una contraseña difícil y no compartir tu código de verificación con nadie que te lo pida por mensaje.",
        "badResponseAnalysis": "Consejo básico. No explica cómo activar la 'Verificación en dos pasos' (2FA) de forma técnica, no menciona el riesgo de las estafas por 'Buzoneo' ni ofrece un protocolo de recuperación si el robo ya ocurrió.",
        "agiaPromptTagged": "1. ROL: Experto en Ciberseguridad para Pymes. 2. CONTEXTO: Uso de WhatsApp Business para ventas. 3. META: Protocolo de Higiene Digital. 4. RESTRICCIONES: Herramientas gratuitas. 5. FORMATO: Checklist de Blindaje.",
        "previewResponse": "\"Checklist Crítico: 1. Activar 2FA en Ajustes > Cuenta. 2. Desactivar previsualización de mensajes en pantalla bloqueada. 3. Configurar PIN de correo de recuperación. 4. Instalar Bitwarden para gestionar claves únicas. Hazlo hoy o arriesgas perder tu base de datos de clientes.\"",
        "metadata": {
            "score": 88
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
        "agiaPromptTagged": "1. ROL: Especialista en ASR (Automatic Speech Recognition). 2. CONTEXTO: Transcripción sucia de reunión de equipo. 3. META: Limpiar muletillas y extraer compromisos. 4. RESTRICCIONES: Mantener el tono original. 5. FORMATO: Acta de Acuerdos.",
        "previewResponse": "**Acta de Reunión 22/12:**\n- **Acuerdo 1:** Pedro envía el Excel de costos antes del Miércoles.\n- **Acuerdo 2:** María contacta a Starken por el retraso.\n- **Bloqueador:** No hay respuesta de Tesorería por el pago de la factura #405.",
        "metadata": {
            "score": 89
        }
    },
    {
        "id": 93,
        "category": "Estrategia & Lanzamiento",
        "title": "Validador de Ideas 'Pies en la Tierra'",
        "icon": "lightbulb",
        "problem": "Evita perder millones de pesos en una idea que no tiene mercado real.",
        "badPrompt": "Dime si es buena idea poner un local de comida para perros a domicilio en mi barrio.",
        "badResponsePreview": "Sí, es una buena idea porque mucha gente tiene mascotas hoy en día y valoran la comodidad de recibir la comida en su casa. Deberías hacerlo.",
        "badResponseAnalysis": "Respuesta de 'sí a todo'. No cuestiona la densidad de mascotas, el costo del delivery (bencina), la competencia de supermercados ni el margen real por saco vendido.",
        "agiaPromptTagged": "1. ROL: Consultor Lean Startup. 2. CONTEXTO: Idea de negocio local. Público: Ñuñoa/Providencia. 3. META: Prueba de estrés de rentabilidad. 4. RESTRICCIONES: Identificar 3 fallas fatales. Tono crítico. 5. FORMATO: Semáforo + 2 Experimentos de validación.",
        "previewResponse": "🔴 **Riesgo Fatal:** El costo del despacho matará tu margen si la ruta no está optimizada.\n🟡 **Riesgo Medio:** Fidelización difícil; la gente busca el precio más bajo en marcas grandes.\n**Experimento sugerido:** Crea una Landing Page hoy con $5.000 de Ads. Si nadie deja su correo, la idea no vuela.",
        "metadata": {
            "score": 95
        }
    },
    {
        "id": 94,
        "category": "Estrategia & Lanzamiento",
        "title": "Arquitecto de Avatar: El Cliente Ideal",
        "icon": "lightbulb",
        "badPrompt": "Quién compraría mi curso de repostería saludable.",
        "badResponsePreview": "Tu cliente ideal son mujeres de 25 a 45 años, que viven en ciudades grandes, les gusta comer sano y tienen interés por la cocina y el bienestar.",
        "badResponseAnalysis": "Perfil demográfico vacío. No explica el 'dolor' (ej. la culpa de darle azúcar a sus hijos), no sabe qué cuentas de Instagram sigue ni qué palabras usa para buscar soluciones a su problema.",
        "agiaPromptTagged": "1. ROL: Psicólogo del Consumidor. 2. CONTEXTO: Curso de repostería sin azúcar para diabéticos y niños. 3. META: Perfil psicográfico detallado del Avatar. 4. RESTRICCIONES: Deseos profundos y miedos. 5. FORMATO: Ficha de Personaje.",
        "previewResponse": "\"Perfil: 'Carla, la mamá protectora'. Su mayor miedo es que su hijo se sienta excluido en los cumpleaños por no poder comer la torta. Su deseo no es 'aprender a cocinar', es ver a su hijo feliz sin poner en riesgo su salud.\"",
        "metadata": {
            "score": 92
        }
    },
    {
        "id": 95,
        "category": "Estrategia & Lanzamiento",
        "title": "Naming Maestro: Marcas Pegajosas",
        "icon": "lightbulb",
        "badPrompt": "Dame 10 nombres para mi marca de ropa de yoga.",
        "badResponsePreview": "1. YogaStyle. 2. ZenWear. 3. Respirar Yoga. 4. FlexiRopa. 5. Paz Interior. 6. YogaMundo. 7. Loto Ropa. 8. Equilibrio. 9. Namaste. 10. Om Wear.",
        "badResponseAnalysis": "Nombres genéricos, aburridos y probablemente ya registrados en INAPI. No tienen un concepto de marca detrás ni una sonoridad que los haga memorables o fáciles de pronunciar.",
        "agiaPromptTagged": "1. ROL: Experto en Naming y Branding. 2. CONTEXTO: Ropa de yoga para cuerpos reales (inclusiva). 3. META: 10 nombres originales y potentes. 4. RESTRICCIONES: Evitar palabras trilladas como 'Zen' o 'Yoga'. 5. FORMATO: Lista + Significado + Disponibilidad .cl.",
        "previewResponse": "\"1. **Calma Real:** Evoca honestidad. 2. **Cuerpo Vivo:** Enfocado en el movimiento. 3. **Raíz:** Conexión con la tierra. Nombres cortos, de dos sílabas, fáciles de recordar y con dominios disponibles.\"",
        "metadata": {
            "score": 88
        }
    },
    {
        "id": 96,
        "category": "Estrategia & Lanzamiento",
        "title": "Propuesta Única: Diferenciación",
        "icon": "lightbulb",
        "badPrompt": "Dime por qué los clientes deberían comprarme a mí y no a mi competencia.",
        "badResponsePreview": "Deberían comprarte porque tienes buena calidad, precios competitivos, una excelente atención al cliente y mucha experiencia en lo que haces.",
        "badResponseAnalysis": "La respuesta de todos los negocios del mundo. No identifica un factor diferenciador real (como rapidez, especialización única o una garantía imbatible) que haga que la competencia sea irrelevante.",
        "agiaPromptTagged": "1. ROL: Estratega de Diferenciación de Negocios. 2. CONTEXTO: Servicio de comida para mascotas vs Supermercados. 3. META: Frase de 15 palabras de 'Por qué yo'. 4. RESTRICCIONES: Prohibido usar la palabra 'calidad'. 5. FORMATO: 3 Variaciones de UVP.",
        "previewResponse": "\"Variación 1: 'Programamos los pedidos según el apetito de tu perro: nunca más se quedará sin comida'. Esto resuelve la logística, no solo el hambre. Es una promesa de tranquilidad.\"",
        "metadata": {
            "score": 93
        }
    },
    {
        "id": 97,
        "category": "Estrategia & Lanzamiento",
        "title": "Estructurador MVP: Lanza en 48h",
        "icon": "lightbulb",
        "badPrompt": "Cómo empiezo mi negocio de venta de flores a domicilio paso a paso.",
        "badResponsePreview": "1. Busca un local. 2. Compra muebles. 3. Busca proveedores de flores. 4. Contrata a un repartidor. 5. Crea una página web profesional. 6. Abre tus redes sociales.",
        "badResponseAnalysis": "Plan de alto costo y lento. Propone invertir dinero antes de validar si hay gente dispuesta a comprar, lo que aumenta el riesgo de fracaso total en los primeros 3 meses.",
        "agiaPromptTagged": "1. ROL: Product Manager de Startups. 2. CONTEXTO: Flores a domicilio. Presupuesto: $100.000. 3. META: Versión mínima para vender en 48h. 4. RESTRICCIONES: Sin programar. 5. FORMATO: Plan Día 1 y Día 2.",
        "previewResponse": "\"Día 1: Toma fotos a ramos en el terminal de flores. Súbelas a Instagram con un link de WhatsApp. Día 2: Invierte $10k en Ads para tu barrio. Si vendes, compras las flores y las entregas tú mismo. Valida el mercado antes de comprar el local.\"",
        "metadata": {
            "score": 94
        }
    },
    {
        "id": 98,
        "category": "Estrategia & Lanzamiento",
        "title": "Análisis Competencia 'Detective'",
        "icon": "lightbulb",
        "badPrompt": "Quiénes son mis competidores en el rubro de las joyas de plata en Santiago.",
        "badResponsePreview": "Tus competidores son tiendas como Joyas Barón, Swarovski y muchos emprendedores que venden por Instagram y en ferias artesanales en los malls.",
        "badResponseAnalysis": "Análisis obvio. No analiza qué están quejándose los clientes en las reseñas de esos competidores ni identifica qué 'hueco' de mercado están dejando (ej. falta de tallas grandes o empaques de regalo mediocres).",
        "agiaPromptTagged": "1. ROL: Analista Competitivo. 2. CONTEXTO: Joyas de plata para regalos de última hora. 3. META: Hallar aciertos y fallas ajenas. 4. RESTRICCIONES: Encontrar el 'Espacio Vacío'. 5. FORMATO: Tabla de Oportunidades.",
        "previewResponse": "\"Oportunidad detectada: Nadie ofrece despacho en 2 horas para emergencias de aniversarios. Si logras cubrir ese 'dolor' de última hora, el precio pasa a segundo plano.\"",
        "metadata": {
            "score": 91
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
        "category": "Estrategia & Lanzamiento",
        "title": "Diseñador Oferta Irresistible",
        "icon": "lightbulb",
        "badPrompt": "Escribe una oferta para mi servicio de limpieza de alfombras.",
        "badResponsePreview": "Limpieza de alfombras a domicilio. Solo por esta semana, 20% de descuento en el total de tu boleta. Llámanos ahora y agenda tu visita técnica gratuita.",
        "badResponseAnalysis": "Oferta basada solo en precio (descuento). Es fácil de ignorar y atrae a clientes que solo buscan lo más barato, quienes suelen ser los más difíciles de gestionar.",
        "agiaPromptTagged": "1. ROL: Experto en Arquitectura de Ofertas. 2. CONTEXTO: Servicio de limpieza premium. 3. META: Oferta imposible de rechazar. 4. RESTRICCIONES: Bonos + Garantía + Urgencia. 5. FORMATO: Paquete de Valor.",
        "previewResponse": "\"Paquete 'Casa Nueva': Limpieza profunda + Sanitizado GRATIS + Seguro 'Si no brilla, no pag: as'. Solo 5 cupos por comuna para asegurar la calidad de las máquinas.\"",
        "metadata": {
            "score": 96
        }
    },
    {
        "id": 101,
        "category": "Estrategia & Lanzamiento",
        "title": "Timeline Lanzamiento Día a Día",
        "icon": "lightbulb",
        "badPrompt": "Dime qué pasos debo seguir para lanzar mi curso online en 2 semanas.",
        "badResponsePreview": "Semana 1: Crea el contenido del curso y súbelo a una plataforma. Semana 2: Haz publicidad en Facebook y envía correos a tus conocidos invitándolos a comprar.",
        "badResponseAnalysis": "Falta de estrategia de 'calentamiento'. El lanzamiento fallará porque intenta vender en frío a gente que no conoce el valor del producto ni confía en el instructor aún.",
        "agiaPromptTagged": "1. ROL: Launch Manager Senior. 2. CONTEXTO: Lanzamiento de Aula GenIA en 14 días. 3. META: Acciones diarias detalladas. 4. RESTRICCIONES: Fase de pre-lanzamiento obligatoria. 5. FORMATO: Tabla Cronograma.",
        "previewResponse": "\"Día 1: Encuesta de dolores en Stories. Día 5: Regala una 'victoria rápida' (PDF). Día 10: Abre lista de espera con descuento. Día 14: VENTA abierta por 24 horas. Urgencia real.\"",
        "metadata": {
            "score": 92
        }
    }
];
export default casesData;