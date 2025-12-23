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
        "agiaPromptTagged": "AzESINvOL17tayTzi93RsA==:WhDxYcNXfJzIFCCyfFRg3oBP6lrVxJtQ02okXNdxKuHCp7jnFhSQosEFjPFhVbiC+oAuQyxg3Zwz7baY9C8X6lYpgL91bchb0vI1SbueZZfAj0KqUHjQVmRw2njKE5gt2oVKM5dPCNKep9dtz8DULtu6HqC2l+oH8WJIEo89RyhIQISsDNxy5T/ZIEa4Thiy18fJLdG0Wst2MZb3ift4RsxtVAMD2dKWzhGf1nQtHrOxAI3DhV2/Xt/GsjklYWxEH/dQQgj9RLqLeUqDcvEiIcRlF5u02N0sXpv9n1iyKo6AVb1kd0Ou7qGff6Z8wM5L3VeWyHIRHMGVMlemeM/PJ76q5TCs03n9hja5FLuApvQjNtc1eYB1HecCB20xAYoMeCtJs9ZTOpwOr/+mOPlIrpAEIYnhyz8Bk9GBRLgtrhmwICbnzsSN+FL5Tz7JD+5JPn4kDqiRhPpK8AU7Sx+eklH4WWPcuQXP0+tQu3c89GVI07kORvkV3jgdA4qlvyll1pX5sXRCP2LzO0YaZTmh/dkLFYeYtyoO/T3xFDu9fOf5Fw+0uHF7YTmbCTBfZr/iGQJTB99yq2uGARd4QifFb2FinZ34BBQXVxqGaxxtm0zdcFwVreuSxHjmW5i0AmSKXdmTDxxt0ZDtDcCg4SgeQ5goupCJnPARtOyHPvHADlXe/1jHLpaPqMASAcG2cd/Onc2+fxvFHpOYzuiFyklGm4UH4iGyEbKD8qmCg/j/0uI9Tjd/yhH/Fk34HH9+8YabuJu7AhTGx1rrmVnYudHQjjmYFWuoWw/VM+7RUDtLmYo=",
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
        "agiaPromptTagged": "rhbcRYlBhGrVvxGloK+TZw==:E2xwLm4UyZkcAt6uhnldOf//9YP7cI1A+GheO0pGpNNoq5v/+xKJLLZQcVPqugSWtDq9lD97r+gNvFWuoEvlBQZl+l9Hu8S1tNFnfboe/SAZ41ow5YXDejAl6vSfvvp6IWc42FcBgbG3sWWHHbv4Oq71umVH2V0ojkg5tlZhBu13cIXUfDK/7tfcNUMF4eFoaXgH3bNS1qDPNsPTFARKF9vWGRkFBpjDVfTtVDeTp+C6Tqo5s88elH/7+WNIOWaosGXtz/OBBWZFzDYdNIg84KQIVcPi6ml+XUbxBk7j97Poqc+sBCfUUyP6FtR8ecrWq/Bca+05kUxt9MNq1VfVzoNL5tI+UwoEpZVkEiibu+AQTXxFKMqcta+ksrWo6SdM",
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
        "agiaPromptTagged": "N3Ol/4ELcv5Jid0BAaGKmg==:fANLR+hnPbhUpEeqGOjPnj1m7JrO5J0plmwF9b1ovq1FNTj4cQmlwcpaXPV9UQsSH8HFHho0aFNvcj+uw/6xvszG1+vgRoSJJqE1gxjy39WIy0ZO2JImCOqwtNIJ9s/8X8PufIDyb045VnWn1z7cUbNyMSAOV14OFn+QJlzLsmAcseOMzTXsuTEp79NNo/qLZo7toYwaQ/qLVBRODMLyZz0Z4eVvZviffFYm72IA6aiHXBF5eKkcD8LADjd8MuJ2C1ajemkSJzpoy6Wgyzf0ZYqlrtz1evynD97tPw3r53Zw0Rns8HsvM1rViQiHuh6W1HAT8/cBPN4+hdLHD8AOemWVhe0qnPeKV/uWijmBrRvNvNHKaEtyTDmFIgIkjrYMdCqNmmnsrGadWzmhIi/n1g==",
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
        "agiaPromptTagged": "iao+JG7LSHdiv05FvBcVKQ==:V53tXQOCrHRlDOajpZgzeHfi6EkeRq9asgv3yY9Izduss1hQyeO6WQuih8EidWEZf2R6xvvqvS4PBZmVSNKguYXGSTaCEq8dvd/WnC7IdU+ts+TsX2+4XbHwSpB0v90jtFYVRRvwClITxp4Bs8bVBzO3R9VHXPkMDnYxqOHszD05TfKZoWU29eMvR7nlNYf0WJbB6AcsMRo39RwTEFokGtJ8mKhj4WokzmWabcc1vNZNESDkLH7R3p/eJU4OLoyL6Lybe9UWeN7bMOmabDTel+uVe0wRo5y+/ovEL04y6gL1orR2CY8SxRzh30b12gcr8PaDYoKG0El0BQjmS9vNIQ==",
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
        "agiaPromptTagged": "GNQELqdI51BCgtDzEfmI7A==:1g4ZWML/PRT/gZfSFTUh7mY0WP2XycuccTIpGpUAjsNSovI0hTansdp68aFQ5LMleqjQED2fCKrUmxJYy1YlLAbWYaDY2i1E7Cm3FdbFlxr475ywYDmyDpcDMfDCNO7O0OAwyQiF0Uw1LmtWKbdwN8VXMV+pI1Foph5gWQH9ydXsBzoOEbU8A68cPNI48XG6tyi/z86UcDNhLGi+15T2kviuMY2iSkLmJKqtzEZ2vFfRTV8weORRzR5xRKwQgzedUx9Gvwoj3Q1VGPv1PN4OF2ARKB4kOuI4Wq0i0D8TF7M=",
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
        "agiaPromptTagged": "n0ACETxL9dmuR0Z2bOVNHw==:DnAsBIzWDVX1Ex1WeiW8+rN8fq9Z3WR7MqBWf23jrU9rOYeEsccaoh0GVRSShYuKq782F9p1kxmjTrr4SvgiSnkVgO4WAFEy/jdcdsRKNHtRuWW6ZBGxsy2k3fz6iqTV/6peqhm7Kp7R6+vpefByqGzyd/XxxZ8LWjBVcpPII4oUd4woq2+4HE20U7YMm1GmHz9iCGn0kgO8XwfkeKSZndr9crdOnRfgOqK4wKEv29ovg79NtynbRlo4wni+Obucc+fmduFRCMAq6O8zm4SppYjt0q56e0DQnxEpUDPXg43x6nPXO3Xh1A36NtNRxTimHirb02et4qQfR/NX8dvwBA==",
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
        "agiaPromptTagged": "ysmHfcTYurgil+fviGfU/w==:s3NIDQTHMvefAIUqjic4oSaKej59quhw287H9qiOBOkizMfG74Za0Dv+5rkIUKSFQpgF+60JDE3OhbGlb2DJyo4uv3y/g13Rlil1fZ4RJR31b9/CobnijCcwqjMMvJ4VNLz7Pv1yosSoagMU2N1odxInDFxruqs3dzaI+YyrQ3gnJujrKUwHEN9m1Q5WXfMl/W6NTCbfU2aYAJ6UPKTdp0wn5IUuAvkwoi24qbrBIg7KXBZ4jeYix6kzmFzVeRPNblLf0ggHmBybnXDRLxtSvtf9IQGGYE7ySFyCgnjD3ZuL4YX72/JB0p47fQCjYHQR",
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
        "agiaPromptTagged": "i4GS5enl3fFarRJgxnJq5w==:03jFT0kj7wg289uS1UdBqS4Xudy71Q2HYCcl87Ua3z9N3oEInecTzeWxjIXFIBSaqROgVyeVMnCC2PiHxEuNYzOkVkMy1EgHzC/DoWUfTJ9C7O1e8p6T/xmIST35nFIT/PvaIfQjhHcl4u6JtE7TWx0gZEAuneREXZggMNQMQ0rhzQEtJPrf/GSHFxjLhbogWvBnxFp21ARoIKo4rln/f1XKwbJFNQM8yq5sfREiGChmhGnNTICnviDctRS9Hx6M/ODIp84Kx+EJBwt+WCIoLyfiqJfpcTEryCLAGnrmWrwCmZeBEpW374QZwqvbTvKm",
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
        "agiaPromptTagged": "aTtiG3PbNVoAe/4b2wiYoQ==:sL0NDhdTHBTWtBdc+wT2UxsJ+LzlqAEYB9qAdHowglrvp8wmDY9YIYNzyFFbYuGIgeE+/AdMt8w86pqSNP4Um081UsiP3zVD1ewgF0Fue8r6S5mdwJiCIFHEb7spN1+KU3ak9RboN+0mh1nKGX+mnVR39dr+ZLxaP/vSrJQ1A+Vvda5g3fJA67Y9TVOj6YiLCLs/1wMvGOU65tFrshevvmf6PPbonHC29eezxok+sWK60wcinAbmaYWs6Zioz5ZJi0YnmWLMA3dDPJpykk2FkA0SjsBj6+acJvLHa1AwpfY=",
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
        "agiaPromptTagged": "LCq1bhPkPQtmG6DCrSyo1w==:vOE0Nkez2v/vBodhLFbli402Q4tn3QPmTbvngxuu9aI6UzH9O9jA57FoWocHqy57cKDiIpG2d44zdX76obdERSDNIvy2xPsXPJijHe5mB8ZyFG51ikMXqHsmB3mAxcmIBUwzOQnJkHH9vREy746a4cvivW8it+uHVuWFwSXxMUD+bixIlkfvlVC61ljpTFs2RTOmaaAE37ExJEByMtjnl55U6QXpLLP+SOsQBk6FHWmIg0CL7KzF/UlKdwLqmHfaRm/LBejUSBWEE5Rq3hBQe6jKXSHsORmYlt4bt4KnE68=",
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
        "agiaPromptTagged": "8swVZvXutF7TIrDI7H4ltQ==:72b7pK2dfYJwkhoujJSPN3cb6oQ8Al5vSyVSeiGD7cZ2z3BG+1uYPtacSvE+f0FbNqX8wslwUMbPguhfw+EPqgI18clf1R8A4qZAutEma0Ll5xRJpFS5baCzMoF1ZCncFPKQmbjpessxFQIj6XpaSteYIGpGgSIaQyTu5P5xtopSP4F0mqbPIQZ4x7b7tHzZB+y3kEPRlekmesylmG8o/KBewXGkzephDH7op9d9zrMW3uE0VcnVvIPalHDcuu6+661dKBGrZsfFKEYl7KNp/w==",
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
        "agiaPromptTagged": "il9iEpkpMPDRLQSl/W/GNg==:ZTA9MtgFb8/63/4k4VvKoVrF0Ec9bm6K3cIAFO5vLIPS7my56ue+MB8u1p28e9FMHdcxFvQQDGF+BpZQVv3BXBnw0QSyTvoCumyHW/0qnIX23GLm7Cd4y3qRZxM+HVWB3/p+jx+3yWmw8NJlndaHsuBAAlsAbLqIRTnjhi6RQaivSwEyoKl2yrvpdb0cjAtvroA18CqnVPXBHK0dWL/gmVgjgzEzbj8lPaZ4WrEcJikHzD8XBf8pHQLMo8zEGPALHnU6wz5X4g0iP1b2oRAsxQ==",
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
        "agiaPromptTagged": "b+LJ50PgM3vsZzLHFHK93A==:CUmSqbMpt/iaojU2GVmQAygCR7nByxPvihpm2mW/RUFQCIbTA5g+4K60LiYwqGAgRoerg4zE1Z8balb2BUQtLUvqTc5ufY1AOxutct0cAQC6XyIlzTl3H9mwrevbwglkvy7AoDJiNN3M8/0/0u/rWAVEYn1wB9gRLZ2scXj/k+OC2Nv6TTd6QjQbnW2bxPhaulKnwEsEacL/s5U+4SQFXQb3rYe7xoZrFMKg1T9C2x3lSuFKry8r4fSeiEczpRRLI/D4BrNvAUWIYIrprpp3hw==",
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
        "agiaPromptTagged": "oOF4/9vwiRId38C0LQUSAw==:nH3R9/hIF0EzbBdUNb2o+JO+wMjA+JG2h0GGFcSFY7VuI+LXTYY9D+atnydLUM+ua9o7v6vgfOd1wiwSK6qafjpl9es/KAavafykAF7PtM6vzIyiMCNne7ftePPapexWEooGEyIM9TNOCDC7Hwb47cDaCrJapPYO6P0qLp3ZXD8FtoiT3sYaebsEYGbX3xfD7V2OpJw8uWQns5Ocxn/hucVRTU2BE4xrL6kQlaMc4PUOGEC8q52FaPwBmlVUsqvbEjJgrIjiJb/915lqMVM6fA==",
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
        "agiaPromptTagged": "W5f1DTfgJQX4RAHUX3Oi4A==:5yU/6NriJw7pkwyGSwnisI/gxpUtB4zOSZzTw0Kc7qpBvPIFp3HzVkpzxzmvUjUlCfiK35clzr/0Vh+fRGh3txxOm/00nuWbBvZVy06uwUx0nVXBYGOKxG0TZgT6DfGOiLDBSliU/C8oJyEl7jGXMcAGw9+lne6NVhKELDCDa5R4AfvJ6F3vCh6/fWXxVMl49FmARxD93Bb+KmySw/ZpMpqcmwIKe6b3xcmUNY1GDWTuybTBBZff//MlIxHluZr+NapRFDClINO8ANqp7pqx1g==",
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
        "agiaPromptTagged": "PFBYyuFoG2Pja78Qzf6TAA==:viJIBZP1vo2kLdSLYxROU9gz40+J41YiqaxdpIQBlEs9stw0FT2Rg6qvptStHCd1Ue3QtNgTCPU7zSl7gK2MeNoz/GcLh54DvRztimQ6BU5vXYj9NTJPVjwp5viZZW68BXNxA5oRBl+x74MgXd86Ral3HtpoGM1QLY+LT2lJHgR4Buxm4Y1UGBoXN8lj3sc0ARQ+rACEgUEjlwjyd5JizSfvIvgAK1s7yTpz9o1GXP+R8sXrABVlJ34v+0hN/1kEVXPbMcPAu7yR2lHTi9p6Pg==",
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
        "agiaPromptTagged": "PMSk3Jck/kBrk4K9DBl6cA==:TBMyxgwUs0wBIRflX2bNcB2UdfZJpG8XNjoVa1v2JfloyOBBhMj5boCk7xwMDzpHK2m1Oeb1qKfrK4cB9ojtDH0TY9Ds+um4PhZgSh70HlXAZZpeVYFqRQQNy154SVVTsyhS1QvXrtAPPVSnbZJrqmRZJQSZV8/FAfKrjKTjY9an0vvMe/4nVWJdliWHKyFG7kCmwXW7yezqaBWfMQRjS7TmyUbqFjwlucQssB+Mhla2e7FCuiPEbMADpLczWA+uoIdSy1ucsgX7tHQF+sWid3qLbnMewQY/KXyp/ERgdf0=",
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
        "agiaPromptTagged": "eEFWuL2Vqov0jj0/s62vlg==:KHsCTtiNhvkkygr5fhDzZKh0bgivZnFzFAX8XGEKBkWm1y4ADxZQNJoZbDxBMroZprEX8RY4fxhNlLRD/PPDoNJv2vd3BY341ubAIsUD2n5jyb68zENLsyVs60JqXRMShRUj7SVexaqcuQXioYoXaFUw1P3ZrSBNAfZh3OUu0ev6SkQ2mEs0CXnLXyM1UJ2Id4qTBdzHDeQPah5DT1gM3UX4ow/C8PYqDHejBFS4YD1g7xHkDxuKgLYxnQ61s2zqEQhVoyS9Sguuv+8euRz1hw==",
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
        "agiaPromptTagged": "0t5FAzACF7BHtvvoc9T1kw==:lw41uwJ+T9US/q88tWM0dtkdMYgHvHp6EOn3wwBiqQFcP5begoWdpDY28tBHrZjjkbGWAtuJhXMcyWucIgL+vdIUs8fR8BpTEtBGyl6zcDEsW6W5Yg7NsChaD8YSm12pqwFnejQLimtt5D/HZxxdNdMyfEIsZYojA6fPHeC4UL6AAJK6dNZg0C9HnQGP9SXb9KiR0B5UVeZhy+7ZiyVIALXTXT92XAut6Th3Dhc5CQ5+v5rHVxPTLtyoln+6l/q7uD9qZBiDcP13nZSi6c17GJF/qzBD1ySpDDt18uVRpTo=",
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
        "agiaPromptTagged": "/SXTk1qYRcmnLX5OUjl7uQ==:X4USGbFzRQ5fVEeO74cOBpHZtnpBSM8hnYMS4+DxWAfHHHRK7+kgdFX9vpVf0z6Cr0VlIP+WmGSHjafvreKjbA3pjhsgsr1t3zTWC2zbr7XVBHbPmQ92FQL4Ax7RcIISrsNNp8u/8hAN/YiErbNwuPFgxC0aJMhUO5glbzGXjueuuse5sjZVGk1+Zzdbi365B9+mB6/g92/TaRjlhvQjSY8HRxwcUMTyY1BCBlN0l8BGC7pa2exGVMFPP7rk4ez8x8++PAgu05P8jO0ebbWnn0KMCcdqE4MC77YW0KsqzS8=",
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
        "agiaPromptTagged": "UffWw7Nz6s++KM4yFy0SdA==:bmOIe2oHGSynoOvWz47/zpkEteqX2MZQ76GG88qzj4qGWvq70myH75QVcsbeMSz/Bldd9bPopfnBXGLLYCxk78lGq/f5RffNIojj+r0dXU1M7h1EuAJ8e8L/le8o+Bl9tJuD5FxxbdRtQyI5YnGwBZWjiD9OtyjFxpKRzKBAn2YaIzG3ZCTr3ELzvLYZYrUxPpqRrVPN4KoR+j9AUGQp+N0w9mhN9BJHoKKMhkApcAbC5C2ZO3pYVkSo8eVhnDNh9dE87QkDKq9q2ql4EjMpTHTibXyP6UgYUCuR9o8lkAp56UsSdNZrfKBdkNSyQlgDtdVEjQe2VoEfTUjYuqtpifSD52FqNboW9U6bgnu0TVM=",
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
        "agiaPromptTagged": "mvQDn3CkaYBLvZB+J7CgHQ==:vPjf2yl1qY0WjUd7HLYTv3PeVlc3P9IvSVZVrVvyd1xuDhNtiVRDkSpnehg7N8YCS0dR7P0TE8/WemdoScxJRb8aXs5AeHtYPKFBr1Yt/fsnemGStjwH68qn6ojgwc8+b61B5b17Zl+vFvbmlCTyrnpsDeT7YNagD+UQyOHgEI6gCcUXzxSN/NyW2ImqKv4WVWqYTtIgfa8S2CB16v3FsHfYEs72eKn0wS7bJ7RvUbIeOvdw32G1I+x74mpugUe+VVmOxBxIhBfHE6bjyZSq3BxdW06NYn4MXT4aFBHHqOVybginCiqwr3/HGxzxQJZ+",
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
        "agiaPromptTagged": "YQN4aoKHqll7kg0lQCD2UA==:6TEchCqVsIXsXEsnP0IRJlupTA3VsVJiL5cLbZrXr2YMUV+DsLP3A1inusqOuquh3F2/VU5Re9ERt0xhL79ICciTfhkm7SryTw4ixGN5bJLTe8iOK6G8QNwS2GtniBaZhZvLDZzYyyY9dqUovMO6HtcIeTqZrggHbv7AiwtjiPodyg0wEIePRrR2j3tZL+iwUgkzYIUOkom3r/yQRti2cSNNGHRq9EIFvNA6NwEWi632yLr0dUAasS3JKtjsUDnTocSy8BgCik5/1wKA5hPfS5OGTGGVnHCLP/lf0gX7X+n7MSVU5zXD0x3d5dBhYofo4yLihil3gXhiKHc90kNfoMH0IEHw679FIXZik5aZfTg=",
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
        "agiaPromptTagged": "KH6doy2iM7JMwi9Ptm9zVw==:gWgvmz+ZLYXiGwtoCLgtEm/Fcl0RLn6O8h8VDa4V62BlfxpU62DZlp564ebNh2ObQorIXiePZzBpOWYh+TmBg/KZsJxg8hEtLE6ZCzP3NM6UPWy7skop+cO8H1lOF0GOM6KQkeN9DN+DfwPiPOPfpvPthCe9XlMjuihvPvUVmL0siIXpMG0QVqUl7QiYFhzqxoJox7GptKXszFrAfMtFFX9jWiznDdkR1FnNgiJNmlTETXMCjPFr+bYEX/rCCBm1kFPU/5uVsOWWJeiWrfNtNxZmd0NSQGmsLXj3E55XNILy2kTimBrklDMfPEIHen7eXVDq76V7PILcIaeJINNWCA==",
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
        "agiaPromptTagged": "19kCCUFjshnDdTT8tsstCA==:OQsvYHPXpLzAeCDODvOA7WnDO+WiFy+xuxcNaP5yz/ZdGlHgptsue9DDVpFvfMrzKCO2fEt4ZzNe4UCOh3Lf9TzVBN5cwJJP8+ZPMmdGfseKiU224Fya0OQrF0pyuyymzsIUYGpCnBlvDZ1OqjcDYHtlH9Ld0mVlWQH8zWQHDOdBdhdUcCeZ+YuLZ76nopS9p8uSdkgroCo203l3fhihcjZxmvIxRwvtoausiZHlZwkmWVV4WqFwcVChIFCAVZxJ0bPrS2E0ekOnWHYMavKKLpRlzSQgYbhE3f77W5BB3p/1Wj7uKuemMLuk5p7K3UFq/TjjwjvZhtYnoQOLL6rwPg==",
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
        "agiaPromptTagged": "MgZOhqlAQ34nnvOsUdx9Gg==:+XAHai/+8OwspAQBiK3fRO02BNRYwZdBdNp9H5o93M34lh62qDxH+aMvhV1Vtz+VpcMr96fjgGJia9UjYkYjrOgjyEm3BgOtPTWuYbg6LOczlzaqi22wU6HFv5U1TqC8fXcQx5ILAPHTvTA+3NykpH7BXR+BMRDRzKdWmLfcF7BIWhei9YW270dTD67p0F/+bepv3yYevzGDz+e9UrnlkFnoUWb+dwB2/VhjYiozvfjyCP7Di4qxsqdlrrQizu/6j04zoaOz2KoE1HGnfEUJ+A==",
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
        "agiaPromptTagged": "lL+s5b/IR/HxqtuSLplC8w==:qPIfXEcl0AyD/9BcInY1F3n0KBRdxAjdbBlIY6J1hckY/genfe8EIa0cdSGoCvxCsXGHThSOrCaaPw6g6pP9ZjMThlTlE7YLExW69XxJHHKzWjT66mPUgVK7KvYr+yHIGZxMvj9o46oHZdj0gXPtFKe2nm+5ceAqsoaG0lKUqHIyNcKrkdU/umIwc/xunHSDuE6nrx04MEdiSRcT/Bx9aOXrI7kDyH4m7B3xquVZeKyNWK20xzZ6hPHGLG/Vce915JXGd9HNcHIa8nhS/bsXyw==",
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
        "agiaPromptTagged": "bs1Wp0VweafVLfmza2MajA==:mbJMEtnPMKYMH33egPkj8D22A47ndl0usDdxBwQPwZYktjOtZUiP3pRgb5GJzVX5vv38loNK4JR//fR6Sg/zrg1qFdeAcWuRi+5ye2hcJSxPZF9AJU8g+X8qDLEM8CL7qvZnYAezvMmfLTk3bbwz2UVocZbX0IBj+VD6qoomuEEU0RmH26NnxulH3vNLMAzjbyMkIenKCYDxES8ffTIu0qgfO6I0NheIxHfykqJbVRfGAsefOke1SzrkBOaC0uqIlGFxcYZ7tH7aaDSSmBiZvh4u99aeUN/jgjeJzmz5o6w=",
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
        "agiaPromptTagged": "56WhDzkXQtUyysRuo9U/HQ==:l5XyzgIlDP2t3oRquj75g+BWPHDMQ2uZuptsOMo6tevXEu4eCFXWzK57dQPevEET3BVRAMWHKuucLdQN1moX/c2pan/ECiKhR8APXRrJUoGQd4dV+HWq5XuBrYui/zMqdnmLZSP4Rfok9w+Ga/5BcAfARk2xzfvBDO0y1vrIzcOKXf0JpKJqhs3E4pORlqZhJXekF2Kj7w7oxR2buq+ZKqDSIp885+yM9VCFWJ1LTqebxKPYgDbxDMeiHfwlNqhLPavNnK0cXYLSU9fd9EjcwyXOzxNjAGExo79s6wAxJbI=",
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
        "agiaPromptTagged": "TbQVVaFZ4sY7mFLE4rf8Vw==:Fn23arDS2U+bFAV3cqE2mi2U5ED5eWpiCjwfVwI30qVnO/cSkE30wZOoDCXw4XBRaOw2mzJi9GGBzbULCsHirsFtV0/vbj4Ef3rtevV0m+HWho26tM4YxN2TpKGeb9QOgwOOklcsPS4HtaPLPM6uTvH7VlMdIqxyLfJ/pl7udIPWcFm0h8TNQvzbhGLUtT85sSOxjr/pbkDdzH+ePCt3y8E5BohtnjVy9chFUYOeAkBGt+alEpHpP5Bok1AW4I/pcQfqYDbEkzkRKQQZD0g9c18/srF92X/h/yM48rJQDTeQLOUJq5GhEBQf//4ZO44SF8/o/XOXtlVAN2ZO0KJ27qFpftP7Mv4Mf3TsEIqyL/RlMWwbI2LQrFEvgx6BNgbY",
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
        "agiaPromptTagged": "mFY/fmLfWAnPLkVp91sunw==:KlVo8l26jn7XItjOQEDCAMpZz5xP36Sv8LuxdS4VGZiSERsSu1nNQJzFfCjH3EY67XTXXgfO5dDuGhgnBSIEhZK7XUHMhRzJKmge29w7VgKw4mCTnZ+pBehIbyHxEHHJQcz7YbV04dTddE8NW/rCts/fUSLaPM+gGJkYo1Agn193NM5SEjVXkXb37d2TJoGkYMTOy3O2oPCpLGvjeqUYedGvJyOwbRa7A4hTVTE0kOEdZrQFZMvhbrI2yL3DaJux",
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
        "agiaPromptTagged": "zfFf3xgaKmwccrN66tbiQw==:sODx9hpm5lwB/SI5JLDrs7buAGjPPcd8n5PnvmQ82tjKZ6pOR2Koj64LrEGAImybuLdJl9wQ/nW5lfLbbQA7krEf+uXEJIvRD+cSjqgsXHXP36i/WPHN3atD0Wi07JOD+xs+AVhA6y9ccBt5N20u3mTUPGidjvtK3SCjEDhA2j28JhQg3Xb7j+gFDvRUyBed6vLpyOrPYEaE3e6JNGn5oN9vOJ8++1c5hLv3vj29kVWygJDKG/v5te4LgqdeDVGCI4y98Q4uuRr0D3pVWlL9vA==",
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
        "agiaPromptTagged": "SCLePWpz+P+XpVCK/bFzAQ==:sxTFvq6goqqL0oQ0FKjm4fryIROiGOrKNL1NU1AhyHCw0C2zGXwg0aPT5cpU4GdOACIId8mf7N9R/dx4+g9SYJFljvJVymr/gmtNYgqRqjza2KK/k2pF+4cGvOGQuGOUgCWImuU4S/01XvafyFpA7e0jdp4/0tVxQjHeM11t99cP6w7TMVH6kO2a2Rc5cV7sa9JjS6pmGvhP2CKh5OkAcJKYIyDBHjG1AWdo9Hjlxti4ljEoc8EV9kFS7v8OC/i76q8/1stYwcc8Mz1eaNTajg==",
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
        "agiaPromptTagged": "TeAA5Q2a41ykxtA0bBCXIg==:fMFHEfTVdIeK6YHWRMowg5ihaTINE3IX0BzH1I7EBv8/1i1Qq6e+XfU30qOtsrkM6eTbUo9+9supthh+fOE4Ymuoei9GPyYlfqRtQpNUF6TuScCZrQ9npgMX7LOoo0+b3wX+CzspH0oXuYT/Enuy5ocXgvufQbjyKLyXeCQqMlShJjxf4UtUKwtw1V7maxxjC8GK1ZflECI11PTugiguDkvvZCg4KG3bz3SpN4GkQtpjw1E/O0Ao++SbTanEc9MN",
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
        "agiaPromptTagged": "je4LbVhrWCXXdBKyZm/z+A==:GzDvu8xp2j2r1WfQREMNWPcycbITKK3LGNOIV11RoV3W9nBa6TAWgbFXognZ/jDVtDpfeViwKY7ozu2jLco7WpEYB8BkEOk3C6DB9OG9jodNo8ZFP6ZIa8M4nOhO/H4Aw6MX92QMpttRT1/EQVYpmq6PfWVl8JINyoLDLTSqSKSLUh99dYLFywTdd+JVYS++xXEzgfW4TwXgjuTyRMAUX8YeSSYA9zDl5nsbhpF/rzaQWCiaOe7I9uEsSkYJ6fPXWUIZXo0k8zgr4Zht9E4SX8rvIGKS5z57/q4eXxBe0Xs=",
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
        "agiaPromptTagged": "IVZM34lRsegvsdyZsUdcBA==:vbmlB+gU1KKNyNISAXgl3IAMnp2OGCW/VHRMxmK9tSQO9vhpjn0totTiHGrKFuWK+EKR85CICGqeMPImon+YzbSXk8dJHc89KvLYKz4g4E3Z/evvso7NtzaoAHTwtzsoFXe1H2lKa79wO+Iz1gWfg0twZmdUNswFdrkUEjAPolzqe0aBHI0bYz6vbXlb7skhf/0zFOz3SznrRjfJHofJjYsUwNheu5ryMP0K4qj7iJ/nV5rYPF/jEfLNQ0sUKiUnhd2eP+Z4aKAlG99JPLkaSHnFapCVgIM6E3C34Nq0H08=",
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
        "agiaPromptTagged": "BEvF3rgJNWctuEg4yC/Ssw==:OJVhLynnR9DTEHjtvPvhMACDDD1Mw+nN6dvFydCz/xdpUE6+0PN2wS5DcspoVMm1n/AVUHOM17DjqjueFKNvu2xzNvWHZZ7/oaxF5bHjNnOTcqdUjtD8DsPW6PfFFFMbabMzE7lDWKBxqUnLEGH3ut0WzFUTeOluE8mefF1gtWb4/ZWzWKc6ESIIARuwDWQ5e9JTm74eoOofzT6eQxmqU8vsiQ6lHaBLF8dlMOiKsDi5uwXkyUU6NOUCYwZwRjCKSKgMM09MiTEk9C6L+Q78GbL2Di9D3tSALB8peWDC42w=",
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
        "agiaPromptTagged": "UXVQ0ZsOPEwZ5GMJwLRjTA==:xxpScSvEmkJ++kZJHHs9qJmGwLNBImgjcT3xmVvuMtSJ3AthF7DlrdfYBWwxHyFyhUCMf0/qWfs6w7fogBrNrg6/Li3yRMXm7Zzp+wL7f2TWg5dOQWT8AVeV5FRAFzZLRyyTsygWo+kuONjoKObYu9+6Z89y+riJXpZLMkJNvL/2BIkwsI1g3pfaaOfkzyLhAchusTbbM4Kf3n6g7wwxU3KAnJrT6wKq4cHPUfUCtDnmnvN7T8d9pX3KlqUB6zbSyllL3oeTOTiOQE46F8Hd8Q==",
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
        "agiaPromptTagged": "6dfolSvuLzx5bk/6wj45WA==:eBRZgtO+FCAhjZ9J2aPWnJ8jIpZryWgPY9ni/icq562Z17rGtI/1JbaRTkKOOHr+AoWyB2FOMcVVw9T9nwFKFVpiBPbhOOMQmfruuz4g8J3wGxxY7w7Z/U8jG+H+5YU04yhSsoTNkXUYbWs+NIwPGXpSOpkz5ybHhl0K6exLyIig6vx4tHoZcNC3W1/zbg5CW9kUc4olxvJHVLzDpsjm4ekA9fPwUrBomstLD+GmOC/8Z5QTSwjVM9A4BXZ6ErTT6bGehHjXCqS2ljZrsulAgw==",
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
        "agiaPromptTagged": "rgdlE3RYL8h+4zD+t7MGHw==:uf/wTlzpr4jNnhIiDqjYaXXwfrKtEw6avIZd6TvZm4gmuHSbRbpxARNMA6N4Bc5llMmybwpg2ISouJCq0JYtzvFN2Mt05xjmZMwRZb6yj6wfP6DGwV7sp8BF2yPykoih0xyKO/JFKuXpDNQYBNrNMrOetbXFRikhDXU87Tni1+ZWnBlzsc9euohv9HYhBudSnVWCT30pIL1zFs4dWdf7IDtWz6y/FikBeYVXTiFqnghdSsjCWwb8Vw+bkTVNV/fFh+VYXrAFtCBAR9EKniqXxQ==",
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
        "agiaPromptTagged": "19+TQINndBObJBu63xm+bA==:Tu9R3PjdZbpIuUddoD1eU01GDwaEWm0nCr+lgLEZ43j3aF20zpQKiM+J1Lf21H6nPFI3wqkFn+TY3JbH+Yh+TAkfc9Akqdj/L4tbg8VwOxw3f3XtWk32JGAsit6ghM2KGbNlBvrY39ZSXrKks4iD6X+jwwWdEJUsLdpRjoT1rvBDHzbX6NSk5BeRSPIll0rLaChOr+ioq0T8nG63OjjMpLtttZ/iHOk41AV6hR3oNavacfaR5a3vRfuupjTNaGQ2nXT870BCdr3L1bocO2X7eMDlrOuSjyFnEiD4qqxbmfMTKApudpP/gIQ2AHmaGyivqaIxGkeuh52fMdbpUhTBzaK+daNyQi2Yc0x5SPMJ5bA=",
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
        "agiaPromptTagged": "x1A3e3rIcMAmfRdUzMV+kQ==:dA12zIyu/HcvSTR3wtTXwuy7aOwwWqoknPF2cEnymDAkhJ5oIq3TFDE0+LoYOuF17mlfv/qLFj1pzwRWLGGJo4N58j6/zDQm0zCW02kvqmjoSvkNRdWD24fq913VR73dW9bZPWQjTbM0BdC/NgGBABuP+Evyl9hCWXM3Vn/JbpBB7tvkOxr/cIlPP/WfIg98xLrXhlC+KUMqyt8KK2/LmagSRP6nvrYQjp8xrNdWeDzFzTZo66/3rGnfR/tGxzK5LdoVqygn55PyRfiggDD9w7z3xyCZ5BepHQ8lv1ETgrj8S158MO7SoMSMkkQ3OKzd+OtFdrL02huCFgfSPoO/Gw==",
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
        "agiaPromptTagged": "md7gbbKQjZX+N4jVy+Hfeg==:qxYot1gh6G6taJwVTTet5tRCHcc+23V4rOBpE9L3NQ7eCJ3ETGJjM8hXUpK7dXazqxQOb7OPkf/bZTZk9n06GBpzA+ReofQ6eg7UWs3pul5Q03GN4eI4WWgSd9g6kANgF2TviK5SgyGP/zI2YMXT3wzdSHNgTmInUbMN6xNxp/G+O6FQ3Tnb5BWggXcvOOPDuCyBTKbF7nCn3cUy2y46DsYPnmJ6ASRHFTPNfP1ZVr43V1IpfYlRSS+Z0sxYhm2nxM4JGQo4hG4c/ziI9Kme/BwCkk4hkALmMEAlwMws4lluj9xCMFByZrxACHovRyMopsKFDdgAy8IuBZyYG61qig==",
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
        "agiaPromptTagged": "sX2vx3XCACli3HB8tjygQg==:UwCNfnT8v3Aq4exOK5zyRZzizKrzlLk756FuinIwrfwdX0b98eEwE1GBkvSGfY89C00j4WcRBKCL19c8v9GyBLVHgwfF+wfXxTRGuuSeDvALk1XnwqrEMzrqzw7bIjxpyVZdal53Zg1bItKFrI6fNoRZ9mA97Op6YdgiNtsqjz6r3vY46ZupIHsmDkvZlLdpPbl3MygOvBCWURcFJW8uwT8pQj5MDGl4DxiFaoAHG+0KQmPBrYGwqw8gAuo9qjNIEFo+k+LczAUWetrFUOSuGsoGtKKI4iS2qzrAybznTRUypVa/pjF9oZw38nefnzkA",
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
        "agiaPromptTagged": "qI6N+2wNVLgnoRAV8vsc2A==:H6rPPxd4+3ezrbCtF62yMfNGdwfcmfPcStl/pAszEyCtnLgILHFLxtJIFFuTbV8f0Jfj0r1t2g+MjQTcBmGH3tVglenPA/ooN9DKLjIab+NsGvTUN7vsMqP8zVDl3cK0/hWaZDq+iF54sBWA8V4g9sroPVKox9092mfAOtgKLFkDYaVBQfXKakcLvp4Vzd9mawQvE1wf+W/TkswyfDXzvLU1hsn5iTV8wI695ONHqA03tbgzakOpb1MnQ6uSQRxeYrjBUdeoSypXRN5zKTNpbgvy8+YdHYFZnatyjDoS3bZbBdhFUv3bsD+m120wEtAtwc1pJvCXa+eqHpgELeEeiA==",
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
        "agiaPromptTagged": "yLvYGsQQLavlxuy1XCZs7g==:7tQztF2dK+JLyHDkQHOc3GVsQ86L83cinFlaG0DF/kRyg+7vTr95Yk6Vd9pFnJq/0Bs6U+S1FJCl1DKdcjLlnJRAdCtbyZvOkWARwpf4AIrGEMIpOtzKLPNKCOw3x0X98GwGZt1AylCPELkMTpUMWjIOhKlKCmGtBgZ/VrT33H/rZEO4BbjyIqKl9rS/SsRz44DibPnw6KpqZuR1KwX/5tH4aR6AUydRVpJhUeHBrA5HUathhYIDK0PPzao6joPb9AzeGq7MIGAiRRyE/IQET7UpeVUZdRAU04tlCQC9L78=",
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
        "agiaPromptTagged": "DmEgPgyV3rko37O+rq/wUA==:zb5nyWFO6b0htVDwfGPeVLxyze9IOFo1cSyXFFWz3v7C3LWQfx+9e95HYtsZBr9zqQZ37cLFYMjvjVJsNSAxGPq+fARlTwWY8QU5ocDkyMSg/fuhH5+hj/aZM5rnGREEPns6B6i2/zC3CCasT+LctwWFIV0Y3VT+Flc1C7CK6TcXPc1gNdsoXji7cKFnlZHWZCUCpNrRa7uB+TgIcexFgwE7yywHxw2f/MbSv9+rq3FFIuvZmQgeAm5bqR6KoYwjFAWFq+6iD8dl3vFd3DujHniGLQqBnR8Ce+iu01yBVt8=",
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
        "agiaPromptTagged": "G3SdPqI0jClKMqVNaCjp1Q==:bxZSu8yS72gGeevrgHWDtHCstzvqEIfj+4bbYrPxD+F55EgG0KsvmDggrxFvLQK64oZfqEn2VsA9boXlWXMer7YZvLCFb8SGjHO97mXNEL9pvE0yX9rW4J9Jpk/HlHOcZdXBorXlOp42dkBW7lZsMqIOlD5KzfmUFvglFZTZZnW6ubBXHO5rsyepa41EB470JGbA4EPyc/zZr04vbGOH+p9r4wtg6LqCE/2mudjMZJbTSwgpV5aIsuvOO2eAepP47k5eUCCjX5dus7x0OJD+BphrAHZiysKyDByY1WZYSNk=",
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
        "agiaPromptTagged": "RC8t3U+j/lQCvIlGrScJEw==:5kaOze6YbZAxflmYVwgxAOWyk8Mj+CzArX/purtg8RlpSozpo7HTOYBItFbhMC20D+SdGM/ha2YYJkCKeDgwykuplCGwriNNQf1Mlnp9FSQlneGzTcQ+OxyDqie4Nb89qM8Ol2TnCnjDkXFHbMa5GsZKiJE7FfAzYYugPN5GBjVmsfephzrrbnJH6GGnNEqXVUBjQqsI7reRnKm5YFbxGbir9OX2WQI/iQoynJZ3hgBcnONKrYIz28huMkcrQqLYvfU26NUTOLDJi953/fg2vQMxUQXk/t+3b+Idzj+vr29zDsAkVNF8SavuLCi0Ti42",
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
        "agiaPromptTagged": "+T43JTYVG6SuX91valVjJw==:kR4qhgWalw7DaLBSjqUrq1bG7HmoYiZF21UJUyIstlm0/U+lA2f3iEzmTpL5lPCEXcmTcpVx+N6ClO/jH52QDbsXriUeBe5TPzP1fqixpteOb0NivfznHOWDZQcJD2CnyvIP9bbKwxF1eNlMrq2MpYhCU36YzYu2JXEL2Kl5oFSpkrbRqrMxuqY6VitlKKSILalj/pEJrbT7N9szaGttLTj0VeDfwFSypDuQsUMKg+pZ3uy9AeVmagf/l25SWzPrJ+n5uJ5Ks67gfNhJPfCo3pqhgeMR7Y9SsrnyXV+kvZRHv6MCV3S3EWUINYanDnDy",
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
        "agiaPromptTagged": "X3IdgzjY0GnUQyV5GkX7lw==:1aKkJlwoOl+DdtHpPF6cEtsr5PsyzMaTSSFtI0cjEgIMCRdURS+Rd10Mwxq21oVwBeaHn6Mwk/hF+jAYB/3cWfXW+MVQbxELKOQQPL5+4I3W6CcZc9XQcmNk6rcYGvk6wMuCTZ9MjP95kHRfzW7bpBl8tkF4fZ0caMK4CVg1sO/h90Fn37ezbqnP105973BHrQAsvvyNYM/kwCjUHTSLnK3W+8xTZVxectPgzJOpZzf4mjCCr9em1k+PRQqSU5ZHvcQLf6x4DUY94KNn4imP+A==",
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
        "agiaPromptTagged": "bHE+UX596iz+czkPqEbqOw==:nExYvvdkkInfpVEHeHfAneWlJUCaeX2pHUQn0vH+avz5zHvI3P7bePO7UW1+a5k8x+pqn0o9OIl8PR4CS7QBBj4V6YjuPDU2+nkrqD3CdIPoVw5GAeLBLHPCFjW4eSJSQDToCJhCtuJxNWSB4qAlhhRRxI+R+qnAVCoN2Idh5KH9l6Z0Aey5G4sWbjYWPe9pJRdLmi6Uju2aBkWK0Tgoc7i1Jd2k99TFl9pP73cCIUo0glT692hk6JuNKH5c8EwZBiAuvZ2PsqEPb5TJBhGemLpXxlVFCNzhEINsJaat8+N+p34r0kxKHxGgpsXPOVkb",
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
        "agiaPromptTagged": "leKfCMlU2cCGtxKLuZFGpw==:DknMJTBJgj6QpCnDSyC6nx69MH04ZH7VHEyRH6SiyHsK1kh67gy105AIgCQ1rSyNKacHQKuZnLNmDBQMstjwHBO69t61Q7sjtmH4EBM8Bl6aFW1am+0fei2q9waYon/+LFNZN2YXVvi6rpEraGQvtGpRnQCM67QrY9c/rJRyvey0XbYgECRQwCI/yoakfgUjC7PCZj2tmj471gr3cRGuFDTKHQwARzvSA6Mry6XNTth6x0LGjT7pwFLc/lKv7qJUoyZ3effW5sXlf+Oi3y38WXSlIJpc6BN/Sq86rzLEhc983VQyH1ej0pz2n0geffr1",
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
        "agiaPromptTagged": "LO77oCgG4sXWfhva8vyNXA==:QU2wSWO8xKafpvNaGdietWchjdPrICz/gSzOiIJAaOn26bc+NuqSKtGvzms4zZ01bHKJH3dKtz1ZUdogv3CntitEeHfaKDyMt7dO1XKjEcCWj4JKUFUZV6g/S4txvGN3g9PM6/i7iXC4CBaJIgGzjW9PhQGTmlZlAX/L65ts16vF4ct9yzpiT/iGyqMGyv1J3Fhl6VnIzHCHGiA0opgSJ1Yo3ZCAcShzesNBUcxhXhfS+YKuPrEx9jJk75qCdOj935X5yNYeZ6qTSI74tJdHkhLJx4yE3jbCgR255LSJ8Io=",
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
        "agiaPromptTagged": "6t3zPP/nHLWG1ypTEtfpJg==:plRtPpV/gNms4IV+vh4zUAD7rCg3ylIK4MY7dS8jdMOrT5wGvRFWU1Jlde6QAEwmMteFp7J5OrpGP1Pipc2bWyTPfAG+BI7JM7YLHczX+XScNt9qamAeFO+2gjleECTi4TSNkgLbOK7zI0rDd4tedHdCKdvsTqUe3XkRonNXYW0OKdCDVfv68XiUE8+JtlwnQq3BeVT0GV3jZ/fnPfthSsf0YIYUZH9LPfYDhE4/2SvvAr9qTUw6xvk12USsQNxU/1uBW0l68mMLxOxaQ35qdfe3X8Dc/kXFvntbKgJgPyRrKLv2ktRdjZaxk1uxgc/W+iBqMdhPYgxIfMVycUFg80QrJS50lRSjVkE0UFcVB3FOnMBIouQy8O3LWrHIJg8Ae37q7blfcOObW0wMvzlzIiQICkZQFJSqdjv7RkB4gzjmrN/ojVF9rJW1zFXh+smsbsONKSNfJIprofRF/3VVvzauCE31gq0enO74keh/7jI=",
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
        "agiaPromptTagged": "9Kd+YHZ6Uhe+jwdiydEsCA==:7MRQBn0otcLr3PhSP+0zWLFnW30Ica8G5r34JhP8Wg6m9iAm5dmrFz5sGNhMU0guY+AjXRpKgeoFF4MKaWOWyH8cUCQsZQugkVgCpgBKJPYzDrBgJzWHDewB+9BxBTsqgHzsO+kgaLLduMr9VG1zcyYO0wOHLAbaBb4mU3BLQT87Ao9N8wUUYoDRc4vvAzmXH5UMVZN3KftYV9kAKSbPDwTHbxBVeCWj3Lnuw1NrkeRJyKwYSRrqhKqFnepIdexi6zxWE5VITJYpJ2Bl9gQgn5iBZe2BFU+Bmm/8qXZhw2Un2AaAevBYpk3DY9BHjNq1PjcgCvHvC8kGXUVoNMWfbZA47HUZ4c42qIwhneldnko=",
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
        "agiaPromptTagged": "o/1J/TFiE7nts+a7ddDpVw==:a94XmLK3RGqclg/N+Y6Td/heO/ciJXPcHQU2i5clej4E7uKkd8RN+Id/UJDULxkLSo/C+jg0Wp5YaR6B3kX3EXw8+Zf1y03Dd6a+ir2sE6monbh8ZzJxoxxVQ4LzVmYnb2/VItWarWMsdN/mVNqlaqxIHgUK8f7XcLWZWrPdGeq0oEF8HBWGwbgN70PoGza2TRyo6nv7cS4JhIGQuvywV0z9n5J31EuJ12nGqA+vxbmDEZJwFNsIKd78ZWyB5RqBN/rfOq3m21CVitgawJJB8AWP2Oo/ne1OY3ktAbL2haoD6ozuPeiKLWEuRJ4RpjDk",
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
        "agiaPromptTagged": "hCqL+fK2/c7heSNvqqklxA==:Iv64hXNb+NZtqqsTL4Xl/wJj4B8rSi8MjoxdQhghbUg5pmBHq9FNIRPX7r1N7VqyuxGgqy9+MtLiwNX+8c0NUGNTo/9+J7HfFZjq+LPWyOaYQ/ZG+HROLxrCyDmQ1NiQAnUFG4zhaMNt31vbr4QhIawL94DG5gC9l004kSjVt8gNDnGkWzj2Z/45YpCNZqegQViKpGhapBKNAjVsNMOa4tlYyGelYr4bqpCJGQPzskzPHlGla9YhvoLX8RaMvGN2ZjzFmV03cSVhr26NtoxHM4Fgmdfs5XySVOyWPPBGZD0=",
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
        "agiaPromptTagged": "VN+K4Mj+Y0R3UDKQKcDbQw==:emljbDlAymkVRjdbgD5ll9RRwmNWkg3wUYB2ddv9xBN4RGa1tGpk6E04xlhogUb8jjKHX3Lx0cibHK1KblidmzR792Os5nx7dePh3+3ZQ1UfRmk+lBA8hIIh2sJBKEF9iGf9nniNYeWyXjLcBIdc1LTAMtPmHNJJ3HrIOckVpRcfDQwap6y4lsYkWOPxREuP7H2qhGD1v96GDRZ7eM6BRJ1fF+b9ZEB47amGfOAO0J+EDSLa2O6Sejf+wcRjNL0nE5uhn04XZ2hlfn1FzjzJPw==",
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
        "agiaPromptTagged": "QdumX8CWoO/GZMl42Uy8Bg==:6lx6UoY2866qpqnbY3YWB+Lztw+F1rdG8M85fURN6eqx4SucO8zmJYHeOxLdXjWd7FODBckOxwJo5XS1ElcOfxME84UWhVv1HIcQLmPqcIflNI1+xYq3qb5B2ClGdMPe6fsRe2sUe+4VmlGZKyvLLBSgFNNYP6XTW432WJR1OdOMX7eo9GXcif+BNDmqiEndEepvRQHbyi9HJG73MIOEWOPERcK0yLEwENPnf/p4r+DRKBpkeKFwwK+/f0eKzrrGgmyMUZdmtkSK4yS8Sy3Lag/GelElKnYiPz+qGlpf64/h3JrzFb83NXkJEJMatMOS8qNasJnW9BJyjtyS6rcq3w==",
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
        "agiaPromptTagged": "ZvoMxyYvcNKAOMWPRArd1w==:hkrQlNsu6rCOW0SbPOD398bBwac1j15G1qQl2TjSHmJD4nZuM6zs2l49WQxAlLV1MLPVdRR03POHA7UViF5C4QIHo1IZ9eal4O6Y9bmDfeh1XRaG5Wr12ecWaPUUmG96vYT7oJAWg80nSxCD6eAYllwWX0EJ3qjz60HWsdF9HcRDS+hUdPDJ9JQk8MlP7zr4fNS3gaifUvDEMh6dz9uz4UH9zesyj7IkZLhCAP3qndIrlyFrbFbAg5KGKYE02C+PBv1sdyrHNJHUsJa6rJJ2PEUjPXyZh74uEpW2GIjQ/OeyZ5fhRAdc6bwYvX0GDv7vkbPMiYXvPOnjf3x2+GVfYw==",
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
        "agiaPromptTagged": "c1sodq0uP2H/OksttJZA2g==:bDPywjKKysR/vhhooeB/Ni3kH5Q6WNBvvQwpjdlfcrnijlyclEV8HCcLOfz/c1NLYN4229SWC114wNp/kDXX9ecgyI1m8DelVRIfmZ5wUNfBGVcTV0MGczGva52IaG0GtZIsEHNDsl9DClMNsiH32vuWclIqCL+gmLkUFPovXZYEHhMWFW++axzyz34KTmUmoo5MsrtF1Crp9VqYm8pFRmOPGf/KOga5MYJp67kLEoaRxfFHExe8yXPIdSZxUxH7M8moti6jMKMkVbfL8MRh6A==",
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
        "agiaPromptTagged": "cgY8T/Kp9qEzivlgGQONeQ==:gSZSEGfKU3IP+rNp8FYvN7kOngb4yYjIAvLZgHO39EsCu9fiTwfwvvoUGVsE8VKGtayGtfIOqf1ChiivAoYNCKe90CSHP0afS0XFX+LwQNrxJocKfaG9H8f3vJPgBvzF5MphNhD+wAmtnhIxgiPMA2EX4Hw3flyAG9uHlZMdVGwSWWQUwo7qedASHRyMFb+nuAr1iypjijhGpF0z47nwRsLpVx17VzQgHc2FMZHj/syimGPrEw+hs+eGRYnxVXRTAXmupXl3A3PUz7Q31fZ+a8YuMYD08xYFsFp8nFanHrIfiRj0OlNBEP11GXRFzA5O",
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
        "agiaPromptTagged": "CRd8wZ98x+rDSm3+cBjoxA==:xfDj0FugA3cuSQrek65A/dfvKpUcrUuVXpEWlCwNeme0NpkAg3FoabR5tYqVkhO7xO8dHahzBZl6rahubzkWVojRzgaFFuILx/i1ce11YU49PXXvImzG+ZMVnd/0PSqneyvqcCQh9Eevzs7hi5oPRYOSq8nkGuIcrQF/6FtOs2iQLvWc4XUO7Je1KHafI/Jc0PFp8d3VlQ7n1icQAi5EjcSZTEpFu7zGkEERw/C852EJTQWUW0vdWUyQ+v8AN7htaLgRRjWyLEhZ8YKeGdNI+1vHAktG5Pz4s5vOFgxmMXtmZfUHA4wG6PGm450ccy2H5pPeiPp6b70Xx5+QexSfqg==",
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
        "agiaPromptTagged": "W31v7jV4oYeGicX14DgtnQ==:YLK4gQnaiq2fSjjpTpD6SMVa6+MgaMQ7b93uMlNpmz9TSVs51EHzqbWLQLw93/ott7XmcgZYw8QIM1QZLVzKC4Zh1RYldsIkGXJ20hz1QZ17LvkSwKdTajLlCehtl6Z3Qtkinp2GKpKsHJb9gDl3L4yNwwmA8XV6P/h82IQiY8btVHP/ZZQ4vKvWJhxePF/7w8ZYXUdlx30NvfU8aQvMkTRsaP1LkfR1rsvqjaXGmfoe6LJVnHQKgEZcU8ESPZrivHGHDQvuRHBPIPIcWLRzJZyE8WFDSHZpRRbIKb2QAaWp8q2iSfZttB6pTwIECC4oo6FDCeflzlkBXTzLTRr3q7A5zV+8kWVTUTfpUs9ekM488vRWwpdlVF4qY5OHWLBt",
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
        "agiaPromptTagged": "kd56ekfc2/xdGSQCBdhX9w==:KVdwyuO9HKvkTvyONwq015q8QLOAt5Dl/2t71k3Q0Hn8/wyuo7Y7Rk8dHKZkfM96v8vtsH7Kpxj/iG/Z3uzkuFyL57NlzrE/vMWLh6ulYnk9XtcfEEjbnIcbcMShYurwBVIiIELTyWVGyL6RKO9WyIiPX6nt4DZq4JyuQ1P4YqcX5C992/odQASiC9PlwrA+LeXK0/ukwO9OTCMttcK8RIACea3TNl4impww6qVAAM2k9zN/SnMp+GTtkIiEEbROBkZGkA7mgRUilzWbHCghoDPC3xNLhoAC+moppE0RH+nyD2hScgyido0EL38Yn9vf",
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
        "agiaPromptTagged": "eS8ZqmMWxMrrSjrhe8Rv0A==:hzQcj4FOA7Mj/EYbLDbIMeCB6gUtuPrGS55elOsfw8IdxKXkLZDVnanUNVwVkocunvOZror4Y+Sn8fMNEYNoy97yoSYjC2pfTtdXvkhm4szJRRFwosKi4IXnh+mWJ4GJr0o7aO9N5ztvm/92Qwh2tb2VTIPXlBXQ17mj4bCWJg00MZmcEJfIoV6POUby9dlRfH4w4tZg96KYZf1fo0SuVLUAmCp3P9E2b23rU9NcSvXrCdeA/ZZK45qTg0H4YmdYIt8DkVtB83BVOULKPsmyztZ/9iPCUBL6u23E5Cs2dY4i7YzM/tRGYzH4knELs37I",
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
        "agiaPromptTagged": "ik64HjVxtONArKnXwAvzWw==:9pi1J3mozlZ63s+pzvUsJIaN/PNJA48pNm1aKUSPxyAJ9O+/w5e6c57zCS14IKgacGiEGE33zTDwxnizZY6gAJk1ltQUiPasUCpFB3NIPRX0G+OSNvWTcM6Wkvr2+AbWxEPX5EgH9vFpYNNVvNpOfpKArL3chf6GH8yqsXJCc3q0rtEv794W7TW3caRlJCQ+ikdSHe3GbM79i/dZBljVWvvcHQsqY1IE5r2Erc0LUjglCZ5/wJxsjHjVueeerRR37n5hE57pxmQc1iTBGJGfqHnFBlK/ghjYNR1/EML+pBY=",
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
        "agiaPromptTagged": "teonS8yueYDc/7WZgH94Fw==:AOnbGDZrkCP+EeFpEyR88H/k23zRkK84ddHKgPxr71wBUdcpGPEm6VntI8lClYUm7hvupV28bg4QLN6x8nmgZBdEKZstBXsJyYx5rKDDHmcP96Wb5R2i1g90/xQvrnR0gHaDOMzVvKDXPfDNuZEIE38V5dbL8F329/Lnu7DnpVItlFw+ir1pUWu3InfOlYCvcPK4Bx8mgFx0eaZamhxd/jFpkn94Hn9auxxr9OQIdHeZohPW8xXUFLz9718hoxp/IVGG4h2Cs8XaXlt70j+7IjfGa0BmQCK3JTHFDHY3FTRmy/RTDSk6lYxsvrScl85TKZvjAM5ZgllHv88xf/Yoag==",
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
        "agiaPromptTagged": "SAU17MX57mWZyzF9OTESSQ==:yNHiD0PPGZalrieIWQ/BeLkWbFxPIlsq+XwchiLXaa6cXkbNmhIsThhdNgAbt2SIe+QnuLA78g2eBAPkmdQws5C9jI/zcVCHVUJuyluSj7orOn2YCdACdh4U95nWwIcCa3QV0ZvNG3LuiKxpqqzNEd3gwK6olcp3NrCNz3MkX/VXRM5VcRjhRVB1lmhFXhARUnqIWA/JF/M/76NuNiwNvXMCFCqYSpw0wm3yyMAPbJ0bOU/lrFIiWQYRYUvOkptWuLIdw4GdUB61H4FZyeF3YerSgnVwEcLOKssJ7Zb2I9uDZtI//79rgb4pgCSrG19xJ6lx4beL6M4Du97FSmPuIhjvQTnneYmZB/Es5hFsWVE=",
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
        "agiaPromptTagged": "mpDhFnsSPHMWHP84Q/G3MA==:MbMJv2xGxEUPbBKehQtD/Vcdt0uiM4JicjbZH7daheQvbmWejyrzyIFRHsngfeDIkhXOKbJGFjF3ZEXjaql7TadzY0UiK92+zQxGLUNoIecSwQevSinYTu7r6Ua4UkU+xTiMSTldkOJP/lkO59iUjuxI2zKRly6bzvri2isTG8xN0ttYJlNNRQsGNwZSKJhXtDFQFGsbr3Btxf1+pa1m6KbiAkQZh11TpiV3NYQQiM3OdPXOltaqkBC9SW8V55yUm499VKtBnx5Tul1SNh6tz9xFC64fYgojpvB4U+tymtfM7V1OPYB2815Rrl2vjo59",
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
        "agiaPromptTagged": "3tyRouTHvn5tqlJ6NQIk5g==:3Z2p4Io8yI5tmyQDDTsVpcb3QiepypGzkL9mOknBIpmwZ/TH2nPGFbmgk/BvwDgYCTtJF6gfPPk2fM+QxQl6QSh/nLT7sxwHkJrna7AUuNunNGquVF8/b0eHADxxOXTqcfrA+uj1Nf5h7u6YkEeLmQQUHKYsnEa3Ox2P5Q8FtxSlKj5tYNOVe1FzyEsDVNdbgFfHYncGw3Y8SjJjKKWlbQQ77dmUBesZAeIQe0RlRqq/3lL0OX+w5i5XMQhwx0kGLyZ1DOHhF4wV8n2vMxLNfc+4LyEp0P5UPHiBL0BRZKsJqoMXe8pdr3kOdI70IdjsBiJOSl9PA6U1yT9rhrc5g5K2j8/RLlFXvM8Lzhkso+A=",
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
        "agiaPromptTagged": "yQ+cPvnfrjVtR8buNEjfSg==:OgQbcDEFZACq4ftjIzglh30HsrTvaeydef2gv3QFeZuvnog65CKnXx/a7CPBhtEf8JskgjGTyf+4+QT2V625WgI1FQfYSCLFkGmsNlwp0V5ix45uirbr5a7OKSj1yiH737gcyvDh/7HM8UYU3oBFJE4UdYDn01hGNpY4OLJKPsLp0U6cvUvCICgdiDUIzC6AUQlIJFquphT+l5kTaLJW2bHvLc1cyMeXnWXykn4cSa5uSNjWuEumgrmS9XliTmnW2x/JgwQ/bvcsTW/6DemqNjSUakHN2C2hzJXeVqtx5XtkEBAKFnACoj2ekSzcvJPY/Ir555XUZbxfw6mq7npzYg==",
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
        "agiaPromptTagged": "DY0xCSesD0XJH01Pfrw8JQ==:OYPmeNJmXo3Z7N7EmPJXHiymxsy3WLLKk0b4euyPOGpBLwZQE3n9rFIcuprs132cS83fu+fSLubZkPCGXM2jQJDhyZWQICkr99mjOTwzbVut0DDvS0D1LVkqPBJ1RhPeL27jfGcFPEPKi0NQEk6Vey5Y+0lbuSx0kqK5BhoY8wpt8Jw4lsHY//dXQiBqgHZ3TA6jf4vsLCKYjaQJOOICarEb25CguhcxH0bKvysNf+X7Z7rJ2YnBaTSQWF7Ds82GdxR24XBrpfVWiAmUibaMhQ==",
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
        "agiaPromptTagged": "f19MhNhRZ/KUS6aKxRQY8g==:8b9cx90WP2WFpGt8fEzLN2PzSi/pCwzJaPCagAYvFHNivOo2ERX16wT8UEfYPLz5sao03OFDPPuxA3Kf1t5GXBzb5j2MwbWfvbY/NLO2e2VtL+XukdNpFeEEn6UkVrah55UyHKvbTvIHa2hRpycSG4vWdCYjmXnVwW2A+HbgCSgj/ljPCRcx1T7MRwMxzxCOCJo3KgROkeHJ9HFwJQEaT9+p+EMwg9N/qoLGbgs8DHH6kyriWziY05jhdPOcgbXwv+rc17/EMwATwkiTwhamuxN38OlVP+fdfkFQFDj7tmI=",
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
        "agiaPromptTagged": "etZVCALNlHO8ctAR8paTBw==:0/68GEll+ltadNSgflK2HMHS/XnDvlrrSzFo4290VXpvC40Wb8E6cBRe015+8PQlY+yRthvsXUXfhzq/IRHw4bMA/20Koy0nm4vBBulk9ZBluQClbemTBXC7G2PiTkf0xf6/4RT+tmWt+i+dfPvwvz4yV2f4mXTS6ZuNYBNTAwz70m7eJAhBo2V+9H6NZu9Whr49sdVrKxlpHNK5yzn0vMN9ISK9DnqFox0vCQM3/+oHvR6XhPg7pOXaB+v/soWc80KdMLEmJBlns9H4KTLgydDbLuoQZVnr5YJrPzWuuoAGvLh/ZoytICRWP1orGfcA",
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
        "agiaPromptTagged": "/DZ0rG8VrcLv9htFsd7UbQ==:2fzl0KqFrQUXLuATZ9EmTdGMXnOnBqkWAw/INk3Em2cH2TDYNH8D/adj/JK/8x9j1HNwm4oknZSUrbyr6Yjjgk6cLsDQpi3daZtLX/thBg2kCvhA5g/HXlsVYcuzmWhpOqLdStVgTeM/kfsItYRQnQYhvNY3TeCED2xrhTr3ZFis83qn0204YTYsYaRA282ku9lbCvmP2488KuRpnDfMxDZvkCi2L/SZUc3LdD4j9pMiRMWZ63zDKt/2ucUMcP1xDhU3ROmTja51F/7ebk2RAA==",
        "previewResponse": "\"Paquete 'Casa Nueva': Limpieza profunda + Sanitizado GRATIS + Seguro 'Si no brilla, no pag: as'. Solo 5 cupos por comuna para asegurar la calidad de las máquinas.\"",
        "metadata": {
            "score": 96
        }
    }
];