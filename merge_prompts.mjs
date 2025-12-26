
import fs from 'fs';
import path from 'path';
import existingData from './prompts_db.js';

// --- DATA FROM USER ---
const expansion_prompts = [
    {
        id: 66,
        nombre_caso: "Naming Maestro: Marcas Pegajosas",
        categoria: "Estrategia & Lanzamiento",
        score: 89,
        diagnostico: "Oro",
        valor_comercial: "Creación de activos de marca memorables y registrables (ahorro en rebranding futuro).",
        tecnica_ingenieria: "Creative Ideation & Phonetic Semantics.",
        ia_recomendada: "ChatGPT / Claude",
        hh_ahorradas: "5-10h",
        prompt_basico: "Dame 10 nombres para mi marca de ropa de yoga.",
        resultado_basico: "1. YogaStyle. 2. ZenWear. 3. Respirar Yoga. 4. FlexiRopa. 5. Paz Interior. 6. YogaMundo. 7. Loto Ropa. 8. Equilibrio. 9. Namaste. 10. Om Wear.\n\n[ERROR IDENTIFICADO]: Nombres genéricos, aburridos y probablemente ya registrados en INAPI. No tienen un concepto de marca detrás ni una sonoridad que los haga memorables o fáciles de pronunciar.",
        prompt_maestro: `1. ROL: Experto en Naming y Branding. 2. CONTEXTO: Ropa de yoga para cuerpos reales (inclusiva). 3. META: 10 nombres originales y potentes. 4. RESTRICCIONES: Evitar palabras trilladas como 'Zen' o 'Yoga'. 5. FORMATO: Lista + Significado + Disponibilidad .cl.`,
        resultado_maestro: `**1. Calma Real:** Evoca honestidad y pausa.
**2. Cuerpo Vivo:** Enfocado en el movimiento y vitalidad.
**3. Raíz:** Conexión con la tierra. Nombres cortos, de dos sílabas, fáciles de recordar.`,
        validacion: "¿El nombre es corto, suena bien y tiene un dominio web disponible hoy?"
    },
    {
        id: 74,
        nombre_caso: "Arquitecto No-Code: Automatización Zapier",
        categoria: "Operaciones & Procesos",
        score: 93,
        diagnostico: "Platino",
        valor_comercial: "Eliminación de horas hombre en traslado de datos manuales.",
        tecnica_ingenieria: "Logic Workflow Mapping (Mapeo lógico de disparadores y acciones).",
        ia_recomendada: "ChatGPT / Gemini",
        hh_ahorradas: "10-20h/mes",
        prompt_basico: "Cómo conecto mi formulario de Google con mi WhatsApp.",
        resultado_basico: "Puedes usar una aplicación como Zapier. Tienes que crear una cuenta, seleccionar Google Forms como origen y luego buscar una integración con WhatsApp para enviar el mensaje.\n\n[ERROR IDENTIFICADO]: Respuesta genérica. No explica la lógica de los datos (mapeo de campos), no advierte sobre los costos de la API de WhatsApp ni sugiere alternativas más baratas para Pymes (como usar Sheets de intermedio).",
        prompt_maestro: `1. ROL: Ingeniero Automatización No-Code. 2. CONTEXTO: Lead llena formulario -> Quiero alerta en mi celular. 3. META: Diseño de flujo lógico paso a paso. 4. RESTRICCIONES: Mapeo de variables. 5. FORMATO: Trigger -> Filtro -> Acción.`,
        resultado_maestro: `**Workflow Sugerido:**
1. **Trigger:** Nueva respuesta en Google Forms.
2. **Action (Google Sheets):** Crear fila nueva (Respaldo).
3. **Action (Pushbullet/Slack):** Enviar notificación "¡Nuevo Cliente: [Nombre]!" (Es gratis, a diferencia de la API oficial de WhatsApp).`,
        validacion: "¿Tienes el mapa exacto para configurar la automatización sin saber programar?"
    },
    {
        id: 75,
        nombre_caso: "Filtro Inteligente de Prospectos (Scoring)",
        categoria: "Operaciones & Procesos",
        score: 91,
        diagnostico: "Platino",
        valor_comercial: "Focalización del equipo de ventas en clientes con dinero y urgencia.",
        tecnica_ingenieria: "Lead Scoring & Prioritization.",
        ia_recomendada: "ChatGPT / Gemini",
        hh_ahorradas: "1h diaria",
        prompt_basico: "Dime quiénes de estos clientes son mejores para venderles.",
        resultado_basico: "Los que tienen empresas grandes parecen mejores. Los que escribieron hoy también son prioridad.\n\n[ERROR IDENTIFICADO]: Criterio subjetivo y vago. No asigna un puntaje numérico basado en datos objetivos (presupuesto, urgencia, cargo) ni define una acción inmediata.",
        prompt_maestro: `1. ROL: Director de Ventas (VP of Sales). 2. CONTEXTO: Lista de leads pegada. Criterios: Presupuesto +500k, Urgencia Alta. 3. META: Calificar leads del 1 al 10. 4. RESTRICCIONES: Justificar puntaje. 5. FORMATO: Tabla: [Nombre] | [Puntaje] | [Acción Inmediata].`,
        resultado_maestro: `| Nombre | Score | Acción |
| :--- | :--- | :--- |
| **Pyme X (Juan)** | **9/10** | **Llamar YA.** Cumple presupuesto y tiene urgencia por multa. |
| **Estudiante Ana** | 3/10 | Enviar email con info genérica (Bajo presupuesto). |`,
        validacion: "¿Sabes exactamente a qué 3 personas llamar en la próxima hora?"
    },
    {
        id: 77,
        nombre_caso: "Optimizador Logístico: Rutas Inteligentes",
        categoria: "Operaciones & Procesos",
        score: 88,
        diagnostico: "Oro",
        valor_comercial: "Ahorro de combustible y tiempo de conducción en última milla.",
        tecnica_ingenieria: "Geographical Logic Optimization.",
        ia_recomendada: "ChatGPT / Perplexity",
        hh_ahorradas: "60-90m/día",
        prompt_basico: "Tengo que ir a Maipú, Las Condes y Santiago Centro. ¿Cuál es el mejor orden?",
        resultado_basico: "Podrías ir primero a Santiago Centro porque está al medio, luego a Las Condes y terminar en Maipú.\n\n[ERROR IDENTIFICADO]: No considera el tráfico de hora punta en Santiago, ni el punto de partida específico, ni la agrupación lógica por zonas (Norte, Oriente, Poniente) para evitar cruzar la ciudad dos veces.",
        prompt_maestro: `1. ROL: Coordinador Logístico. 2. CONTEXTO: Salida Independencia 10:00 AM. Puntos: Maipú, Vitacura, Centro. 3. META: Ruta anti-taco eficiente. 4. RESTRICCIONES: Agrupar por sectores. 5. FORMATO: Lista ordenada con tiempos estimados.`,
        resultado_maestro: `1. **Centro (10:30):** Aprovecha que ya bajó la hora punta de entrada.
2. **Vitacura (11:30):** Conecta por Costanera Norte (rápido a esta hora).
3. **Maipú (13:00):** Cruza la ciudad a la hora de almuerzo (menos autos) y regresas contra el tráfico.`,
        validacion: "¿La ruta propuesta evita que pases 2 horas detenido en Vespucio?"
    },
    {
        id: 78,
        nombre_caso: "Asistente RRHH: Filtro de CVs",
        categoria: "Operaciones & Procesos",
        score: 92,
        diagnostico: "Platino",
        valor_comercial: "Identificación de talento real y reducción de tiempo en entrevistas inútiles.",
        tecnica_ingenieria: "Applicant Tracking Logic.",
        ia_recomendada: "Claude 3.5 Sonnet",
        hh_ahorradas: "2-4h",
        prompt_basico: "Dime cuál de estos 3 currículums es mejor para vendedor.",
        resultado_basico: "El candidato 2 se ve bien porque trabajó en Falabella. El candidato 1 tiene poca experiencia.\n\n[ERROR IDENTIFICADO]: Análisis superficial basado en marcas. No evalúa estabilidad laboral (rotación), logros numéricos concretos (cuánto vendió) ni brechas temporales sospechosas en el CV.",
        prompt_maestro: `1. ROL: Headhunter Senior. 2. CONTEXTO: Buscamos vendedor agresivo. CVs pegados. 3. META: Ranking de candidatos. 4. RESTRICCIONES: Detectar 'Job Hopping' y logros numéricos. 5. FORMATO: Tabla Fortalezas/Riesgos.`,
        resultado_maestro: `| Candidato | Fortaleza | Bandera Roja 🚩 |
| :--- | :--- | :--- |
| **Juan** | Experiencia en retail grande. | Ha tenido 4 trabajos en 2 años (Baja lealtad). |
| **Ana** | **Logro: Superó meta +15% anual.** | Vive lejos (Riesgo atrasos). |
*Recomendación: Entrevista a Ana. El logro pesa más.*`,
        validacion: "¿Tienes claro quiénes son los 2 únicos candidatos que valen la pena entrevistar?"
    },
    {
        id: 79,
        nombre_caso: "Planificador de Producción Semanal",
        categoria: "Operaciones & Procesos",
        score: 90,
        diagnostico: "Platino",
        valor_comercial: "Cumplimiento de plazos de entrega sin colapsar al equipo el último día.",
        tecnica_ingenieria: "Batch Processing Strategy.",
        ia_recomendada: "ChatGPT / Gemini",
        hh_ahorradas: "3-5h",
        prompt_basico: "Tengo que hacer 100 tortas esta semana, ayúdame a organizarme.",
        resultado_basico: "Haz 20 tortas cada día de lunes a viernes y así terminas a tiempo.\n\n[ERROR IDENTIFICADO]: Planificación lineal irreal. No considera tiempos de enfriado, decoración ni empaquetado. Ignora la capacidad limitada de los hornos y el riesgo de cuellos de botella.",
        prompt_maestro: `1. ROL: Jefe de Producción Industrial. 2. CONTEXTO: 100 tortas. Capacidad: 2 hornos. Entrega viernes. 3. META: Plan de producción por lotes (Batching). 4. RESTRICCIONES: Considerar enfriado. 5. FORMATO: Cronograma AM/PM.`,
        resultado_maestro: `**Lunes:** Horneado masivo (Batch 1 y 2). Solo bizcochos.
**Martes:** Horneado final y primer relleno.
**Miércoles:** Decoración Batch 1.
**Jueves:** Decoración final y Empaquetado total.`,
        validacion: "¿El plan evita que te quedes horneando hasta las 3 AM del viernes?"
    },
    {
        id: 80,
        nombre_caso: "Generador de Scripts Excel (Macros)",
        categoria: "Operaciones & Procesos",
        score: 89,
        diagnostico: "Oro",
        valor_comercial: "Automatización de tareas repetitivas en hojas de cálculo.",
        tecnica_ingenieria: "Process Automation via Formula Engineering.",
        ia_recomendada: "ChatGPT / Gemini",
        hh_ahorradas: "1h",
        prompt_basico: "Cómo hago que en Excel se pinten de rojo las celdas que dicen 'Vencido'.",
        resultado_basico: "Usa el formato condicional. Selecciona las celdas, busca 'reglas para resaltar' y pon que sea igual a 'Vencido'.\n\n[ERROR IDENTIFICADO]: Instrucción vaga para un usuario no experto. No entrega la fórmula exacta ni explica cómo aplicarla a toda una columna automáticamente.",
        prompt_maestro: `1. ROL: Experto Excel Avanzado. 2. CONTEXTO: Pintar facturas vencidas (Fecha < Hoy). 3. META: Fórmula Formato Condicional exacta. 4. RESTRICCIONES: Paso a paso a prueba de tontos. 5. FORMATO: Guía 1-2-3 + Fórmula.`,
        resultado_maestro: `1. Selecciona columna Fechas. 2. Formato Condicional > Nueva Regla > Fórmula.
**Pegar esto:** \`=Y(A2<HOY(); B2="Pendiente")\`
3. Elegir relleno Rojo.`,
        validacion: "¿Lograste automatizar tu Excel copiando y pegando una sola línea?"
    },
    {
        id: 81,
        nombre_caso: "Auditor de Ciberseguridad: Higiene Digital",
        categoria: "Operaciones & Procesos",
        score: 94,
        diagnostico: "Platino",
        valor_comercial: "Prevención de pérdida catastrófica de datos o robo de cuentas bancarias.",
        tecnica_ingenieria: "Cybersecurity Protocol Design.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "Millones en riesgos",
        prompt_basico: "Es segura mi contraseña 'Empresa2024'?",
        resultado_basico: "No, es muy insegura. Deberías ponerle mayúsculas, números y símbolos como 'Empresa2024!'.\n\n[ERROR IDENTIFICADO]: Consejo cosmético. Agregar un signo de exclamación no protege contra ataques modernos. No menciona la autenticación de dos pasos (2FA) ni gestores de contraseñas.",
        prompt_maestro: `1. ROL: Consultor Ciberseguridad Pyme. 2. CONTEXTO: Claves en Excel compartido. 3. META: Plan choque seguridad. 4. RESTRICCIONES: Herramientas gratuitas. 5. FORMATO: Semáforo Riesgos Críticos.`,
        resultado_maestro: `🔴 **Crítico:** Borra el Excel de claves YA. Instala **Bitwarden** (Gratis).
🔴 **Crítico:** Activa el 2FA en el Instagram de la empresa (Google Authenticator, no SMS). Es el activo más robado hoy.`,
        validacion: "¿Tu negocio seguiría vivo si mañana te roban tu celular?"
    },
    {
        id: 82,
        nombre_caso: "Estandarizador de Inventario (SKU)",
        categoria: "Operaciones & Procesos",
        score: 88,
        diagnostico: "Oro",
        valor_comercial: "Orden lógico en bodega y reducción de errores de despacho.",
        tecnica_ingenieria: "SKU Architecture.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "Horas de confusión",
        prompt_basico: "Cómo le pongo nombre a mis productos para que no se me desordene el stock.",
        resultado_basico: "Ponle un nombre corto y un número. Por ejemplo: Polera1, Polera2.\n\n[ERROR IDENTIFICADO]: Sistema no escalable. Cuando tengas 100 poleras, 'Polera99' no te dirá nada sobre la talla, color o modelo, causando caos en bodega.",
        prompt_maestro: `1. ROL: Gestor de Inventarios. 2. CONTEXTO: Ropa bebé (Talla, Color, Tela). 3. META: Sistema códigos SKU lógico. 4. RESTRICCIONES: Legible por humanos. 5. FORMATO: Glosario + Ejemplos.`,
        resultado_maestro: `**Estructura:** [CATEGORÍA]-[PRENDA]-[TALLA]-[COLOR]
**Ejemplos:**
- BEB-BODY-03M-AZU (Body Bebé 3 Meses Azul)
- NIÑ-POL-04T-ROJ (Polera Niño Talla 4 Roja)`,
        validacion: "¿Puedes saber exactamente qué producto es solo leyendo el código?"
    },
    {
        id: 83,
        nombre_caso: "El Delegador Maestro: Niveles de Autoridad",
        categoria: "Liderazgo & Equipos",
        score: 96,
        diagnostico: "Platino",
        valor_comercial: "Liberación de tiempo del dueño sin perder el control del negocio.",
        tecnica_ingenieria: "Levels of Authority Framework.",
        ia_recomendada: "ChatGPT / Claude",
        hh_ahorradas: "15h/semana",
        prompt_basico: "Dime cómo decirle a mi asistente que vea mi correo.",
        resultado_basico: "Hola, necesito que desde mañana revises mi correo y me avises si hay algo urgente. Gracias.\n\n[ERROR IDENTIFICADO]: Delegación 'abierta' peligrosa. No define qué es 'urgente', no establece límites de decisión ni crea un sistema de reporte.",
        prompt_maestro: `1. ROL: Experto Liderazgo Situacional. 2. CONTEXTO: Delegar Inbox a junior. 3. META: Instrucción con límites. 4. RESTRICCIONES: Definir Nivel Autoridad (1: Investiga, 2: Propone, 3: Actúa). 5. FORMATO: Protocolo Delegación.`,
        resultado_maestro: `**Regla de Oro:**
- Tienes **Nivel 3** en facturas (Envíalas a contabilidad directo).
- Tienes **Nivel 2** en reclamos (Redacta el borrador, yo lo apruebo antes de enviar).`,
        validacion: "¿Tu asistente sabe exactamente qué hacer sin preguntarte cada 5 minutos?"
    },
    {
        id: 84,
        nombre_caso: "Perfil de Cargo 'Imán de Talento'",
        categoria: "Liderazgo & Equipos",
        score: 91,
        diagnostico: "Platino",
        valor_comercial: "Atracción de candidatos proactivos alineados con la cultura.",
        tecnica_ingenieria: "Value-Based Recruitment.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "2h",
        prompt_basico: "Escribe un aviso para contratar a un Community Manager.",
        resultado_basico: "Busco Community Manager que sepa usar Instagram y TikTok. Pago conversable. Mandar currículum al correo.\n\n[ERROR IDENTIFICADO]: Aviso plano que atraerá a cualquiera. No vende la visión de la empresa ni desafía al candidato, resultando en postulaciones de baja calidad.",
        prompt_maestro: `1. ROL: Reclutador Senior. 2. CONTEXTO: Pyme educativa innovadora. 3. META: Aviso que filtre a los mediocres. 4. RESTRICCIONES: Incluir 'Misión del Cargo'. 5. FORMATO: Título + Misión + Desafío.`,
        resultado_maestro: `**Título:** ¿Eres el CM que odia el contenido aburrido?
**Tu Misión:** No es 'postear fotos', es convertir seguidores en alumnos apasionados usando storytelling. Si buscas un trabajo de 9 a 5 para calentar el asiento, esto no es para ti.`,
        validacion: "¿El aviso asusta a los vagos y emociona a los cracks?"
    },
    {
        id: 85,
        nombre_caso: "Feedback Constructivo: Técnica Sandwich Pro",
        categoria: "Liderazgo & Equipos",
        score: 90,
        diagnostico: "Oro",
        valor_comercial: "Corrección de errores sin dañar la moral del equipo.",
        tecnica_ingenieria: "Radical Candor & SBI.",
        ia_recomendada: "ChatGPT / Claude",
        hh_ahorradas: "Rotación personal",
        prompt_basico: "Cómo le digo a mi diseñador que su trabajo quedó feo.",
        resultado_basico: "Dile que no te gustó, que se ve poco profesional y que esperabas algo mejor. Sé honesto para que aprenda.\n\n[ERROR IDENTIFICADO]: Feedback destructivo y subjetivo ('feo'). Genera defensa y desmotivación en el empleado.",
        prompt_maestro: `1. ROL: Coach Alto Rendimiento. 2. CONTEXTO: Logo no cumple identidad. 3. META: Feedback correctivo motivante. 4. RESTRICCIONES: Modelo SBI (Situación-Comportamiento-Impacto). 5. FORMATO: Guion conversación.`,
        resultado_maestro: `**"Valoro tu rapidez (Pan). El uso de Comic Sans impacta nuestra percepción de seriedad ante clientes corporativos (Relleno). Sé que puedes ajustarlo a la tipografía del manual (Pan)."**`,
        validacion: "¿El empleado salió de la reunión sabiendo qué corregir y sintiéndose valorado?"
    },
    {
        id: 86,
        nombre_caso: "Mediador de Conflictos: Gana-Gana",
        categoria: "Liderazgo & Equipos",
        score: 92,
        diagnostico: "Platino",
        valor_comercial: "Resolución de problemas operativos derivados de roces personales.",
        tecnica_ingenieria: "Interest-Based Negotiation.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "Clima laboral",
        prompt_basico: "Mis empleados pelean por la camioneta de reparto. Qué hago.",
        resultado_basico: "Haz un calendario donde la usen mitad y mitad. Si siguen peleando, amenaza con despedirlos.\n\n[ERROR IDENTIFICADO]: Solución parche. No investiga la causa raíz (¿las rutas se solapan?) y el calendario arbitrario puede afectar las ventas.",
        prompt_maestro: `1. ROL: Mediador Laboral. 2. CONTEXTO: Vendedor vs Repartidor por activo. 3. META: Acuerdo operativo justo. 4. RESTRICCIONES: Foco eficiencia negocio. 5. FORMATO: Guion Reunión.`,
        resultado_maestro: `**"El objetivo no es quién gana la camioneta, es cómo entregamos más. Solución: Vendedor usa Uber corporativo para visitas cercanas (más barato) y la camioneta queda para cargas pesadas."**`,
        validacion: "¿Resolviste el conflicto mejorando la productividad de la empresa?"
    },
    {
        id: 87,
        nombre_caso: "Entrevista de Selección: Preguntas Filtro",
        categoria: "Liderazgo & Equipos",
        score: 93,
        diagnostico: "Platino",
        valor_comercial: "Detección de mentiras o incompetencias antes de contratar.",
        tecnica_ingenieria: "Behavioral Event Interviewing (BEI).",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "Meses de sueldo",
        prompt_basico: "Qué le pregunto a alguien que quiere ser mi asistente.",
        resultado_basico: "¿Tienes experiencia? ¿Sabes usar Excel? ¿Dónde vives? ¿Cuánto quieres ganar?\n\n[ERROR IDENTIFICADO]: Preguntas cerradas o hipotéticas que se responden con un simple 'Sí'. No predicen comportamiento real.",
        prompt_maestro: `1. ROL: Psicólogo Organizacional. 2. CONTEXTO: Asistente. Miedo: Que sea lento o deshonesto. 3. META: 5 preguntas conductuales. 4. RESTRICCIONES: Basadas en hechos pasados. 5. FORMATO: Pregunta | Qué buscar.`,
        resultado_maestro: `**Pregunta:** "Cuéntame de la última vez que cometiste un error grave en el trabajo. ¿Cómo lo solucionaste?"
**Qué buscar:** Si culpa a otros o si asume responsabilidad y muestra aprendizaje.`,
        validacion: "¿Las preguntas obligan al candidato a contar historias reales o solo a venderse?"
    },
    {
        id: 89,
        nombre_caso: "Checklist Onboarding: Primer Día Inolvidable",
        categoria: "Liderazgo & Equipos",
        score: 91,
        diagnostico: "Platino",
        valor_comercial: "Acelera la productividad del nuevo empleado desde el día 1.",
        tecnica_ingenieria: "Experience Design.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "2 días perdidos",
        prompt_basico: "Qué hago con el empleado nuevo el primer día.",
        resultado_basico: "Dale las llaves, preséntalo al equipo y pásale los manuales para que lea.\n\n[ERROR IDENTIFICADO]: Onboarding frío. El empleado pasará el día leyendo sin entender, sintiéndose solo y sin producir valor real.",
        prompt_maestro: `1. ROL: Gerente Cultura. 2. CONTEXTO: Pyme servicios. 3. META: Onboarding 4 horas productividad. 4. RESTRICCIONES: Gesto humano + Configuración técnica. 5. FORMATO: Cronograma Hora a Hora.`,
        resultado_maestro: `**09:00:** Café bienvenida (No trabajo).
**10:00:** Entrega "Kit Supervivencia" (Claves listas, nada de esperar al informático).
**12:00:** Primera Victoria: Asignar tarea simple que pueda cerrar con éxito antes de almorzar.`,
        validacion: "¿El nuevo integrante se fue a casa pensando que eligió el mejor lugar para trabajar?"
    },
    {
        id: 90,
        nombre_caso: "Facilitador Daily: Reuniones Ágiles",
        categoria: "Liderazgo & Equipos",
        score: 94,
        diagnostico: "Platino",
        valor_comercial: "Eliminación de reuniones eternas. Foco en desbloqueo.",
        tecnica_ingenieria: "Agile Ritual Design.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "5h/semana",
        prompt_basico: "Cómo hago una reunión rápida en la mañana.",
        resultado_basico: "Junta a todos y que cada uno cuente en qué está. Trata de que no hablen mucho.\n\n[ERROR IDENTIFICADO]: Sin estructura, las 'Dailys' se convierten en sesiones de quejas interminables.",
        prompt_maestro: `1. ROL: Scrum Master. 2. CONTEXTO: Equipo remoto. 3. META: Daily 15 minutos exactos. 4. RESTRICCIONES: Las 3 Preguntas Clave. Prohibido solucionar problemas ahí. 5. FORMATO: Reglas del Juego.`,
        resultado_maestro: `**Regla:** Cada uno tiene 2 minutos.
1. ¿Qué logré ayer?
2. ¿Qué haré hoy?
3. **¿Qué me lo impide? (Bloqueo)** -> Aquí el líder actúa.`,
        validacion: "¿Lograste que todo el equipo esté sincronizado antes de las 9:15 AM?"
    },
    {
        id: 91,
        nombre_caso: "Definidor de KPIs (Qué medir)",
        categoria: "Liderazgo & Equipos",
        score: 92,
        diagnostico: "Platino",
        valor_comercial: "Control de gestión real más allá de la 'sensación' del dueño.",
        tecnica_ingenieria: "Performance Metrics Design.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "2h análisis",
        prompt_basico: "Cómo sé si mi vendedor está trabajando bien.",
        resultado_basico: "Mira cuánto vendió al mes y compáralo con el mes pasado.\n\n[ERROR IDENTIFICADO]: Indicador tardío (Lagging). Si esperas a fin de mes para saber que no vendió, ya perdiste el mes.",
        prompt_maestro: `1. ROL: Director Operaciones. 2. CONTEXTO: Vendedor B2B. 3. META: 3 KPIs (Actividad, Calidad, Resultado). 4. RESTRICCIONES: Métricas predictivas. 5. FORMATO: Tabla KPIs.`,
        resultado_maestro: `1. **Actividad:** Llamadas salientes por día (Control diario).
2. **Calidad:** Tasa de conversión Cita/Venta.
3. **Resultado:** Margen generado (no solo venta bruta).`,
        validacion: "¿Mides cosas que puedes controlar hoy o solo lloras sobre la leche derramada a fin de mes?"
    },
    {
        id: 93,
        nombre_caso: "Analista de Ventas (BI)",
        categoria: "Otros / Análisis",
        score: 96,
        diagnostico: "Platino",
        valor_comercial: "Detección de patrones ocultos para aumentar ticket promedio.",
        tecnica_ingenieria: "Pattern Recognition & Data Storytelling.",
        ia_recomendada: "ChatGPT (Data Analysis)",
        hh_ahorradas: "3-5h",
        prompt_basico: "Mira mis ventas de este mes y dime cómo me fue.",
        resultado_basico: "Vendiste 5 millones. El producto más vendido fue la polera roja.\n\n[ERROR IDENTIFICADO]: Reporte descriptivo básico. No cruza variables (hora de compra, productos combinados) para dar insights accionables.",
        prompt_maestro: `1. ROL: Analista BI. 2. CONTEXTO: CSV Ventas mes. 3. META: Patrones ocultos. 4. RESTRICCIONES: ¿Qué compran juntos? ¿Hora peak? 5. FORMATO: 3 Hallazgos de Oro.`,
        resultado_maestro: `**Hallazgo:** El 40% de quienes compran la 'Polera Roja' también llevan 'Calcetines Negros'.
**Acción:** Crea un Pack 'Urbano' con ambos productos y sube el ticket promedio en un 15%.`,
        validacion: "¿La IA te dio un dato que te hizo ganar dinero inmediatamente?"
    },
    {
        id: 94,
        nombre_caso: "Detector de Sentimientos (Reviews)",
        categoria: "Otros / Análisis",
        score: 90,
        diagnostico: "Oro",
        valor_comercial: "Mejora de producto basada en feedback masivo real.",
        tecnica_ingenieria: "Sentiment Analysis.",
        ia_recomendada: "ChatGPT / Claude",
        hh_ahorradas: "2h",
        prompt_basico: "Resume los comentarios que dejaron los clientes.",
        resultado_basico: "A la mayoría le gusta, pero algunos se quejan del envío.\n\n[ERROR IDENTIFICADO]: Demasiado general. No especifica qué del envío (¿lento? ¿roto? ¿caro?) ni cuantifica la gravedad del problema.",
        prompt_maestro: `1. ROL: Especialista CX. 2. CONTEXTO: 50 reviews pegadas. 3. META: Análisis sentimiento profundo. 4. RESTRICCIONES: Dolores recurrentes y 'Lo que nadie dice'. 5. FORMATO: Tabla Categoría/Sentimiento.`,
        resultado_maestro: `**Dolor Crítico:** 8 clientes mencionan que la caja llega aplastada. Aunque el producto está bien, la experiencia de 'unboxing' es terrible.`,
        validacion: "¿Sabes exactamente qué arreglar mañana para subir tus estrellas?"
    },
    {
        id: 95,
        nombre_caso: "La Regla de Pareto: 80/20 Clientes",
        categoria: "Otros / Análisis",
        score: 97,
        diagnostico: "Platino",
        valor_comercial: "Optimización extrema de recursos enfocándose en clientes rentables.",
        tecnica_ingenieria: "Pareto Analysis.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "Horas gestión",
        prompt_basico: "Dime quiénes son mis mejores clientes.",
        resultado_basico: "Juan y María han comprado harto.\n\n[ERROR IDENTIFICADO]: Análisis lineal. No cruza rentabilidad ni riesgo de fuga.",
        prompt_maestro: `1. ROL: Estratega Rentabilidad. 2. CONTEXTO: Lista ventas anuales. 3. META: Identificar el 20% que hace el 80% utilidad. 4. RESTRICCIONES: Estrategia retención VIP. 5. FORMATO: Lista VIP + Acción Mimo.`,
        resultado_maestro: `**Alerta:** Solo 5 clientes te generan el 75% de tu sueldo.
**Acción:** A esos 5, envíales un regalo físico a fin de año. Si pierdes a uno, tu negocio tiembla.`,
        validacion: "¿Sabes los nombres y apellidos de las 5 personas que sostienen tu empresa?"
    },
    {
        id: 96,
        nombre_caso: "Análisis de Embudo: Fugas Web",
        categoria: "Otros / Análisis",
        score: 95,
        diagnostico: "Platino",
        valor_comercial: "Recuperación de ventas perdidas por fricción técnica.",
        tecnica_ingenieria: "Funnel Drop-off Analysis.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "4h",
        prompt_basico: "Mucha gente visita mi web pero nadie compra.",
        resultado_basico: "Mejora el diseño y baja los precios.\n\n[ERROR IDENTIFICADO]: Diagnóstico de escopeta. No analiza métricas para saber DÓNDE se van.",
        prompt_maestro: `1. ROL: Experto CRO. 2. CONTEXTO: 1000 visitas -> 100 carritos -> 2 ventas. 3. META: Diagnóstico fuga. 4. RESTRICCIONES: Fricción checkout. 5. FORMATO: Hipótesis + Solución.`,
        resultado_maestro: `**Diagnóstico:** Caída del 98% en Checkout.
**Causa:** Costo de envío sorpresa al final asusta al cliente.
**Solución:** Pon calculador de envíos en la ficha de producto.`,
        validacion: "¿Sabes en qué clic estás perdiendo a tus clientes?"
    },
    {
        id: 97,
        nombre_caso: "Pronóstico de Demanda (Forecasting)",
        categoria: "Otros / Análisis",
        score: 91,
        diagnostico: "Platino",
        valor_comercial: "Evita quiebres de stock o sobre-stock (dinero parado).",
        tecnica_ingenieria: "Time Series Trend Analysis.",
        ia_recomendada: "ChatGPT / Gemini",
        hh_ahorradas: "2h",
        prompt_basico: "Cuánto voy a vender el próximo mes.",
        resultado_basico: "Seguramente vendas parecido a este mes, unos 4 millones.\n\n[ERROR IDENTIFICADO]: Proyección estática. No considera tendencia de crecimiento mensual ni estacionalidad.",
        prompt_maestro: `1. ROL: Data Scientist Retail. 2. CONTEXTO: Ventas últimos 6 meses. 3. META: Proyección 3 meses. 4. RESTRICCIONES: Tasa crecimiento promedio. 5. FORMATO: Escenario Conservador vs Optimista.`,
        resultado_maestro: `**Proyección:** Vienes creciendo al 10% mensual.
- **Mes 1:** $4.4M
- **Mes 2:** $4.8M
*Alerta:* Necesitas comprar un 20% más de stock hoy para no quebrar en Mes 2.`,
        validacion: "¿Estás comprando mercadería mirando el pasado o el futuro?"
    },
    {
        id: 98,
        nombre_caso: "Auditoría de Ads: ROI Real",
        categoria: "Otros / Análisis",
        score: 98,
        diagnostico: "Platino",
        valor_comercial: "Evita quemar dinero en publicidad que no es rentable.",
        tecnica_ingenieria: "ROAS Analysis.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "Presupuesto mensual",
        prompt_basico: "Gasté 100 lucas en Facebook y vendí 300. ¿Está bien?",
        resultado_basico: "Sí, triplicaste tu inversión. Sigue así.\n\n[ERROR IDENTIFICADO]: Falso positivo peligroso. No descuenta costo producto ni impuestos.",
        prompt_maestro: `1. ROL: Performance Manager. 2. CONTEXTO: Inversión $100k, Venta $300k, Costo Prod 50%. 3. META: Utilidad Neta real. 4. RESTRICCIONES: Considerar IVA. 5. FORMATO: Matemática Servilleta.`,
        resultado_maestro: `**Cálculo Real:**
Venta $300k - IVA $48k - Costo $150k - Ads $100k = **Utilidad $2.000**.
*Veredicto:* Trabajaste gratis. Sube precios o apaga la campaña.`,
        validacion: "¿Tu publicidad te deja dinero o solo mueve flujo?"
    },
    {
        id: 100,
        nombre_caso: "Análisis de Canales (Atribución)",
        categoria: "Otros / Análisis",
        score: 91,
        diagnostico: "Platino",
        valor_comercial: "Enfoque de esfuerzos de marketing donde realmente pagan.",
        tecnica_ingenieria: "Attribution Modeling.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "2h",
        prompt_basico: "Qué me trae más clientes: Instagram o Email.",
        resultado_basico: "Instagram porque tienes más likes.\n\n[ERROR IDENTIFICADO]: Confunde métricas de vanidad (likes) con métricas de negocio (ventas).",
        prompt_maestro: `1. ROL: Estratega Digital. 2. CONTEXTO: Origen clientes vs Ventas. 3. META: Ranking rentabilidad. 4. RESTRICCIONES: Calidad del cliente (LTV). 5. FORMATO: Ranking + Acción.`,
        resultado_maestro: `**Ranking:**
1. **Email:** Pocos clics, pero compran 2 veces más caro.
2. **Instagram:** Muchos likes, pero compran productos baratos.
*Acción:* Mueve esfuerzo de crear Reels a escribir correos.`,
        validacion: "¿Estás alimentando la red social que te da ego o la que te da dinero?"
    },
    {
        id: 101,
        nombre_caso: "Simulador de Escenarios 'What If'",
        categoria: "Otros / Análisis",
        score: 93,
        diagnostico: "Platino",
        valor_comercial: "Toma de decisiones financieras sin riesgo real.",
        tecnica_ingenieria: "Sensitivity Analysis.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "2h",
        prompt_basico: "Qué pasa si subo mis precios un 10%.",
        resultado_basico: "Ganarás más por unidad, pero quizás vendas menos.\n\n[ERROR IDENTIFICADO]: Respuesta obvia cualitativa. Necesitamos saber *cuánto* menos podemos vender antes de perder dinero.",
        prompt_maestro: `1. ROL: Modelador Financiero. 2. CONTEXTO: Venta actual 100u a $20k. 3. META: Escenario subida 10% con pérdida 5% clientes. 4. RESTRICCIONES: Comparar utilidad final. 5. FORMATO: A vs B.`,
        resultado_maestro: `**Escenario Actual:** Utilidad $500k.
**Escenario Nuevo (+10% precio, -5% ventas):** Utilidad $580k.
*Conclusión:* Incluso perdiendo clientes, ganas $80k más trabajando menos. Sube el precio.`,
        validacion: "¿Te atreves a subir precios sabiendo que matemáticamente ganarás más?"
    },
    {
        id: 102,
        nombre_caso: "Reporte de Salud del Negocio",
        categoria: "Otros / Análisis",
        score: 94,
        diagnostico: "Platino",
        valor_comercial: "Visión holística del estado de la empresa en una página.",
        tecnica_ingenieria: "Holistic Business Health Assessment.",
        ia_recomendada: "ChatGPT",
        hh_ahorradas: "Tarde de orden",
        prompt_basico: "Cómo va mi pyme este año.",
        resultado_basico: "Va bien, vendes harto.\n\n[ERROR IDENTIFICADO]: Optimismo ciego. No mira la deuda ni el flujo de caja.",
        prompt_maestro: `1. ROL: CEO Interino. 2. CONTEXTO: Ventas, Gastos, Deudas. 3. META: Diagnóstico salud. 4. RESTRICCIONES: Semáforo. 5. FORMATO: Semáforo + Prioridad #1.`,
        resultado_maestro: `🟢 **Ventas:** Creciendo.
🔴 **Caja:** Peligro. Tienes muchas facturas por cobrar. Estás vendiendo pero no cobrando.
**Prioridad:** Llama a cobranza hoy.`,
        validacion: "¿Tu negocio es rico en ventas pero pobre en dinero en el banco?"
    }
];

// --- HELPER FUNCTIONS ---
function transformCase(c) {
    let badResp = c.resultado_basico || "";
    let analysis = "";
    const separator = "[ERROR IDENTIFICADO]:";
    if (badResp.includes(separator)) {
        const parts = badResp.split(separator);
        badResp = parts[0].trim();
        analysis = parts[1].trim();
    }

    return {
        id: c.id,
        category: c.categoria,
        title: c.nombre_caso,
        icon: "lightbulb",
        problem: c.valor_comercial,
        badPrompt: c.prompt_basico,
        badResponsePreview: badResp,
        badResponseAnalysis: analysis,
        agiaPromptTagged: c.prompt_maestro,
        previewResponse: c.resultado_maestro,
        metadata: { score: c.score }
    };
}

// --- MERGE LOGIC ---
console.log(`Cargando base existente: ${existingData.length} casos.`);
const casesMap = new Map();

// 1. Load existing
existingData.forEach(c => {
    casesMap.set(c.id, c);
});

// 2. Load Expansion (Overwriting duplicates)
let addedCount = 0;
let updatedCount = 0;

expansion_prompts.forEach(rawCase => {
    const transformed = transformCase(rawCase);
    if (casesMap.has(transformed.id)) {
        updatedCount++;
    } else {
        addedCount++;
    }
    casesMap.set(transformed.id, transformed);
});

// 3. Convert back to array & Sort
const mergedCases = Array.from(casesMap.values()).sort((a, b) => a.id - b.id);

console.log(`Resultados de Fusión:`);
console.log(`- Base original: ${existingData.length}`);
console.log(`- Nuevos añadidos: ${addedCount}`);
console.log(`- Actualizados (Sobreescritos): ${updatedCount}`);
console.log(`- TOTAL FINAL: ${mergedCases.length}`);

// 4. Write File
const fileContent = `const casesData = ${JSON.stringify(mergedCases, null, 4)};\nexport default casesData;`;
fs.writeFileSync('prompts_db.js', fileContent);
console.log("Archivo prompts_db.js actualizado exitosamente.");
