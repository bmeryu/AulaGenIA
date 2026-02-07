import json

# Definir los nuevos casos (IDs 228-237)
new_cases = [
    {
        "id": 228,
        "category": "Ventas & Persuasin",
        "title": "Cierra Precios Altos sin Dar Descuentos",
        "description": "Defiende tu precio con elegancia usando la tcnica de Anclaje.",
        "problem": "El cliente te dice 'es muy caro'. Sientes esa presin en el pecho y ests a punto de ofrecer un descuento solo para no perder la venta. Ests regalando tu margen por miedo.",
        "solutionPlus": "Price Anchoring & Value Pivot. Al cambiar la comparacin del precio contra el 'costo de no hacer nada', el descuento se vuelve irrelevante.",
        "exampleTip": "Price Anchoring (Estrategia de Anclaje)",
        "validationTip": "El script defiende el precio sin usar la palabra 'descuento' ni pedir disculpas?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Ventas & Persuasin"
        },
        "verticalMatrix": [
            "Inmobiliaria: Comisin del 2% vs 1.5%",
            "Consultora: Fee mensual vs proyecto cerrado",
            "Servicios: Calidad vs Precio barato",
            "SaaS: Plan Anual vs Mensual",
            "Agencias: Retainer vs Hora hombre"
        ]
    },
    {
        "id": 229,
        "category": "Email & Recuperacin",
        "title": "Reactiva Prospectos 'Muertos' en 48 Horas",
        "description": "El email de 9 palabras que resucita leads antiguos.",
        "problem": "Tienes docenas de cotizaciones enviadas que nunca respondieron. Estn en tu CRM juntando polvo y te sientes pesado insistiendo tanto.",
        "solutionPlus": "9-Word Email de Dean Jackson. La brevedad extrema y una pregunta binaria provocan una respuesta instintiva porque es demasiado fcil contestar.",
        "exampleTip": "Nine-Word Email (El Email de 9 Palabras)",
        "validationTip": "El email tiene menos de 15 palabras y termina en una pregunta simple?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Captacin de Leads"
        },
        "verticalMatrix": [
            "Inmobiliaria: An buscas casa en X?",
            "Cursos: Sigues interesado en aprender X?",
            "B2B: Todava es prioridad el proyecto X?",
            "E-commerce: An quieres este producto?",
            "Coaching: Sigues luchando con X?"
        ]
    },
    {
        "id": 230,
        "category": "Ventas & Persuasin",
        "title": "Script de Cierre WhatsApp en 3 Mensajes",
        "description": "Deja de chatear y empieza a cerrar ventas por WhatsApp.",
        "problem": "Largas conversaciones de texto que terminan en 'gracias, te aviso'. Te conviertes en una fuente de informacin gratuita en lugar de cerrar el trato.",
        "solutionPlus": "Conversational Closing Loop. Transforma el chat de un canal de soporte a uno de compromisos, usando micro-cierres para avanzar.",
        "exampleTip": "Conversational Closing (Cierre Conversacional)",
        "validationTip": "El ltimo mensaje pide una accin concreta (pagar/agendar) en lugar de solo informar?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Ventas & Persuasin"
        },
        "verticalMatrix": [
            "Servicios: Agendar llamada de cierre",
            "Productos: Link de pago directo",
            "Cursos: Inscripcin inmediata",
            "Eventos: Reserva de cupo",
            "Consultora: Firma de propuesta"
        ]
    },
    {
        "id": 231,
        "category": "Ventas & Persuasin",
        "title": "Sube tu Ticket Promedio 30% en el Checkout",
        "description": "La frase exacta para vender ms justo cuando ya compraron.",
        "problem": "El cliente ya sac la billetera, pero dejaste dinero sobre la mesa porque te dio vergenza ofrecer algo ms en ese momento.",
        "solutionPlus": "Order Bump Psychology. Aprovecha el momento de mxima confianza (la compra) donde la resistencia al gasto es mnima.",
        "exampleTip": "Order Bump (Aumento de Pedido)",
        "validationTip": "La oferta adicional se siente lgica y complementaria, no forzada?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Ventas & Persuasin"
        },
        "verticalMatrix": [
            "E-commerce: Garanta extendida o accesorio",
            "Cursos: Masterclass adicional",
            "Servicios: Entrega express",
            "Restaurantes: Bebida o postre agrandado",
            "Software: Mdulo premium"
        ]
    },
    {
        "id": 232,
        "category": "Ventas & Persuasin",
        "title": "Desbloquea la Objecin 'Debo Consultarlo'",
        "description": "Descubre si es una excusa o una verdad y avanza.",
        "problem": "La excusa clsica: 'Tengo que hablarlo con mi socio/esposa'. Te vas de la reunin sin nada y la venta se enfra para siempre.",
        "solutionPlus": "The Isolation Play. Asla la objecin para ver si es real. Si lo es, equipa a tu contacto para que venda por ti internamente.",
        "exampleTip": "Isolation Play (Jugada de Aislamiento)",
        "validationTip": "El script descubre si el 'socio' es una excusa real o solo una tctica dilatoria?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Ventas & Persuasin"
        },
        "verticalMatrix": [
            "B2B: Consultar con el directorio",
            "Inmobiliaria: Consultar con cnyuge",
            "Autos: Consultar con la almohada",
            "Servicios: Ver presupuesto con finanzar",
            "Bodas: Verlo con la pareja"
        ]
    },
    {
        "id": 233,
        "category": "Ventas & Persuasin",
        "title": "Propuestas de 1 Hoja que se Firman Rpido",
        "description": "Simplifica tu oferta para acelerar la decisin.",
        "problem": "Envas PDFs de 20 pginas que nadie lee. El cliente va directo al precio, se asusta y cierra el archivo.",
        "solutionPlus": "One-Page Proposal. Elimina la friccin cognitiva. Muestra Problema ?> Solucin ?> Precio ?> Firma en una sola vista.",
        "exampleTip": "Lean Proposal (Propuesta Eficiente)",
        "validationTip": "Puedes leer la propuesta completa y entender la oferta en menos de 2 minutos?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Ventas & Persuasin"
        },
        "verticalMatrix": [
            "Agencias: Plan de Marketing",
            "Consultora: Proyecto de Optimizacin",
            "Diseo: Branding Kit",
            "Desarrollo: Web Landing Page",
            "Coaching: Programa de 3 meses"
        ]
    },
    {
        "id": 234,
        "category": "Captacin de Leads",
        "title": "Genera 5 Leads B2B Semanales en LinkedIn",
        "description": "Estrategia de Social Selling para cerrar reuniones.",
        "problem": "Publicas contenido pero nadie te compra. Tienes likes, pero tu bandeja de entrada est vaca de clientes potenciales.",
        "solutionPlus": "Authority-to-DM Funnel. Mueve la interaccin de pblica (comentario) a privada (DM) aportando valor especfico, no pidiendo favores.",
        "exampleTip": "Social Selling Funnel (Embudo Social)",
        "validationTip": "El mensaje invita a una conversacin de valor y no a una 'reunin de 15 min'?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Captacin de Leads"
        },
        "verticalMatrix": [
            "SaaS: Demo de software",
            "Consultora: Diagnstico gratuito",
            "Agencias: Auditora de marca",
            "Finanzas: Revisin de cartera",
            "Logstica: Optimizacin de rutas"
        ]
    },
    {
        "id": 235,
        "category": "Atencin al Cliente",
        "title": "Transforma una Queja Furiosa en Recompra",
        "description": "Cmo manejar clientes enojados y volverlos fans.",
        "problem": "Un cliente enojado te est quemando o pidiendo devolucin. El pnico te hace actuar a la defensiva y empeorar todo.",
        "solutionPlus": "Service Recovery Paradox. Un cliente con un problema resuelto de forma excepcional se vuelve ms leal que uno que nunca tuvo problemas.",
        "exampleTip": "Service Recovery (Recuperacin de Servicio)",
        "validationTip": "El script ofrece una solucin que supera la expectativa original del cliente?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Productividad Comercial"
        },
        "verticalMatrix": [
            "E-commerce: Producto daado",
            "Restaurantes: Comida fra",
            "Software: Bug crtico",
            "Servicios: Plazo incumplido",
            "Hotelera: Habitacin sucia"
        ]
    },
    {
        "id": 236,
        "category": "Ventas & Persuasin",
        "title": "Pitch de 30 Segundos que Consigue Tarjetas",
        "description": "La frmula para presentarte sin aburrir.",
        "problem": "Te preguntan 'qu haces?' y sueltas un monlogo confuso. La otra persona mira su reloj buscando cmo escapar.",
        "solutionPlus": "The XYH Formula (Ayudo a X a lograr Y mediante H). Claridad radical que genera curiosidad inmediata.",
        "exampleTip": "Elevator Pitch XYH",
        "validationTip": "El pitch provoca la pregunta 'Y cmo funciona eso?' de forma natural?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Ventas & Persuasin"
        },
        "verticalMatrix": [
            "Marketing: Ayudo a pymes a duplicar leads",
            "Finanzas: Ayudo a familias a retirarse antes",
            "Salud: Ayudo a ejecutivos a perder peso",
            "Tecnologa: Ayudo a empresas a automatizar",
            "Legal: Ayudo a startups a protegerse"
        ]
    },
    {
        "id": 237,
        "category": "Ventas & Persuasin",
        "title": "Diagnstico que Vende sin Vender",
        "description": "Venta consultiva haciendo las preguntas correctas.",
        "problem": "Hablas demasiado en la reunin. Vomitas caractersticas de tu producto esperando que algo pegue, aburriendo al cliente.",
        "solutionPlus": "Socratic Selling (Venta Socrtica). Quien hace las preguntas controla la venta. Haces que el cliente verbalice su propio dolor.",
        "exampleTip": "SPIN Selling Questions",
        "validationTip": "El script contiene ms signos de interrogacin que afirmaciones?",
        "locked": True,
        "prioridadSegmento": {},
        "categoriaSegmento": {
            "Negocios & Estrategia": "Ventas & Persuasin"
        },
        "verticalMatrix": [
            "Consultora: Cunto te cuesta este problema?",
            "Software: Qu pasa si no lo solucionas?",
            "Inmobiliaria: Por qu mudarte ahora?",
            "Seguros: Qu hara tu familia sin esto?",
            "Marketing: Dnde ests perdiendo clientes?"
        ]
    }
]

# Leer base actual
with open('prompts_db.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

# IDs a eliminar
ids_to_remove = [19, 23, 125]

# Filtrar eliminados
db = [case for case in db if case['id'] not in ids_to_remove]

# Adjuntar nuevos
db.extend(new_cases)

# Ordenar por ID
db.sort(key=lambda x: x['id'])

# Guardar
with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(db, f, ensure_ascii=False, indent=2)

print(f"Eliminados {len(ids_to_remove)} casos antiguos.")
print(f"Agregados {len(new_cases)} casos nuevos.")
print(f"Total casos ahora: {len(db)}")
