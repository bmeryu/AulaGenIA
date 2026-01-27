const fs = require('fs');
const data = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));
const lastId = Math.max(...data.map(c => c.id));
let nextId = lastId + 1;

const nuevos = [
    {
        id: nextId++,
        category: "Gestión & Adm.",
        title: "Email Profesional en 30 Segundos (Plantillas Inteligentes)",
        isStarPrompt: true,
        problem: "Pasas 20 minutos redactando cada email porque quieres que suene profesional. Tienes 50 emails por responder y el día se te va en eso.",
        badPrompt: "Escribe un email a mi jefe.",
        badResponseAnalysis: "Sin saber el propósito, el tono, el contexto ni la relación, el email será genérico e inapropiado.",
        agiaPromptTagged: `ROL:\nEres una Asistente Ejecutiva Senior con 15 años de experiencia. Redactas emails profesionales impecables en segundos.\n\nCONTEXTO:\nDestinatario: [Ej: "Gerente General" / "Proveedor" / "Cliente VIP"]\nPropósito: [Ej: "Confirmar reunión" / "Solicitar información" / "Disculparse por retraso" / "Agradecer"]\nTono: [Formal / Semiformal / Cercano pero profesional]\nDetalles clave: [Fecha, hora, nombres, datos específicos]\nUrgencia: [Normal / Urgente / Muy urgente]\n\nOBJETIVO:\nRedacta un email profesional que:\n1. Vaya directo al punto (2-3 párrafos máximo)\n2. Tenga el tono apropiado para el destinatario\n3. Incluya un llamado a acción claro\n4. Sea impecable en ortografía y formato\n\nFORMATO:\nAsunto + Cuerpo del email + Firma sugerida`,
        previewResponse: `**ASUNTO:** Confirmación reunión 15 de enero - [Tema]\n\n**EMAIL:**\n\nEstimado [Nombre],\n\nLe escribo para confirmar nuestra reunión programada para el miércoles 15 de enero a las 10:00 hrs en [lugar/Zoom].\n\nLa pauta incluirá:\n• [Tema 1]\n• [Tema 2]\n\nPor favor confirme su asistencia respondiendo este correo. Si requiere reagendar, quedo disponible para coordinar una nueva fecha.\n\nSaludos cordiales,\n\n[Tu nombre]\nAsistente de Gerencia\n[Teléfono]`,
        solutionPlus: "Professional Email Templates. Estructura: Contexto breve + Información clave + Call to action. Elimina la parálisis del email perfecto.",
        exampleTip: "Professional Email Templates (Plantillas de email ejecutivo).",
        metadata: { score: 94, technique: "Professional Email Templates" },
        suggestedAI: "ChatGPT / Claude",
        verticalMatrix: [
            { rubro: "Interno", contexto: "Comunicación con jefes", ajuste: "Tono respetuoso pero directo" },
            { rubro: "Externo", contexto: "Proveedores", ajuste: "Formalidad media, claro en requerimientos" },
            { rubro: "Clientes", contexto: "Servicio al cliente", ajuste: "Cordialidad y solución" },
            { rubro: "Institucional", contexto: "Gobierno/Bancos", ajuste: "Muy formal, referencia a normativa" },
            { rubro: "Internacional", contexto: "En inglés", ajuste: "Formato anglosajón" }
        ],
        fineTuning: [
            "Tono: ¿Muy formal? Dile: 'Hazlo más cercano, es alguien que conozco bien.'",
            "Largo: ¿Muy extenso? Dile: 'Máximo 5 líneas.'",
            "Urgencia: ¿Es delicado? Dile: 'Es un tema sensible, sé muy cuidadosa.'",
            "Seguimiento: Dile: 'Es segundo email, el primero no respondieron.'"
        ],
        validationTip: "¿El destinatario entiende exactamente qué necesitas y qué debe hacer?",
        prioridadSegmento: { "Gestión & Adm.": 1 },
        categoriaSegmento: { "Gestión & Adm.": "Productividad" }
    },
    {
        id: nextId++,
        category: "Gestión & Adm.",
        title: "Minuta de Reunión Lista en 5 Minutos",
        isStarPrompt: true,
        problem: "Tomas notas en la reunión pero después la minuta te toma 1 hora. Tu jefe la necesita hoy y tienes otras 10 cosas pendientes.",
        badPrompt: "Haz una minuta de reunión.",
        badResponseAnalysis: "Sin los participantes, temas tratados, acuerdos ni compromisos, la minuta será un documento vacío.",
        agiaPromptTagged: `ROL:\nEres una Secretaria Ejecutiva experta en documentación de reuniones corporativas.\n\nCONTEXTO:\nTipo de reunión: [Ej: "Comité ejecutivo" / "Reunión de proyecto" / "Coordinación semanal"]\nFecha y hora: [X]\nParticipantes: [Lista con cargos]\nNotas de la reunión: [Pega tus notas aunque estén desordenadas]\nPróxima reunión: [Si se agendó]\n\nOBJETIVO:\nMinuta profesional que:\n1. Ordene los temas tratados\n2. Destaque los acuerdos con responsable y fecha\n3. Liste las tareas pendientes\n4. Sea lista para enviar\n\nFORMATO:\nMinuta con encabezado, desarrollo por tema, acuerdos y cierre`,
        previewResponse: `**MINUTA DE REUNIÓN**\n\n**Reunión:** Comité de Gerencia\n**Fecha:** [X] | **Hora:** 10:00-11:30\n**Lugar:** Sala de reuniones / Zoom\n\n**ASISTENTES:**\n✓ [Nombre] - Gerente General (Preside)\n✓ [Nombre] - Gerente Comercial\n✓ [Nombre] - Gerente de Operaciones\n\n**TEMAS TRATADOS:**\n\n**1. [Tema 1]**\nSe revisó [resumen de la discusión].\n\n**2. [Tema 2]**\n[Resumen]\n\n**ACUERDOS:**\n| N° | Acuerdo | Responsable | Plazo |\n|----|---------|-------------|-------|\n| 1 | [Acción concreta] | [Nombre] | [Fecha] |\n| 2 | [Acción] | [Nombre] | [Fecha] |\n\n**PRÓXIMA REUNIÓN:** [Fecha y hora]\n\n**Elaboró:** [Tu nombre]\n**Fecha de envío:** [Hoy]`,
        solutionPlus: "Meeting Minutes Structure. Transforma notas caóticas en documento profesional: Asistencia + Temas + Acuerdos + Tareas + Próximos pasos.",
        exampleTip: "Meeting Minutes Structure (Estructura estándar de minuta).",
        metadata: { score: 95, technique: "Meeting Minutes Structure" },
        suggestedAI: "ChatGPT / Claude",
        verticalMatrix: [
            { rubro: "Directorio", contexto: "Reuniones de directorio", ajuste: "Formato legal, numeración de acuerdos" },
            { rubro: "Proyecto", contexto: "Reuniones de equipo", ajuste: "Foco en tareas y deadlines" },
            { rubro: "Clientes", contexto: "Reuniones comerciales", ajuste: "Compromisos bilaterales claros" },
            { rubro: "Capacitación", contexto: "Reuniones de inducción", ajuste: "Temas cubiertos y dudas" },
            { rubro: "Virtual", contexto: "Reuniones Zoom/Teams", ajuste: "Incluir link de grabación" }
        ],
        fineTuning: [
            "Formato: ¿Muy formal? Dile: 'Es reunión interna, más simple.'",
            "Notas: ¿Están desordenadas? Dile: 'Ordena y estructura estas notas.'",
            "Confidencial: Dile: 'Agregar marca de confidencialidad.'",
            "Idioma: Dile: 'También en inglés para enviar a matriz.'"
        ],
        validationTip: "¿Alguien que no asistió entiende qué se decidió y qué debe hacer?",
        prioridadSegmento: { "Gestión & Adm.": 1 },
        categoriaSegmento: { "Gestión & Adm.": "Productividad" }
    },
    {
        id: nextId++,
        category: "Gestión & Adm.",
        title: "Carta Formal para Cualquier Ocasión (Banco, Gobierno, Proveedores)",
        isStarPrompt: true,
        problem: "Necesitas escribir una carta formal al banco/gobierno/proveedor y no sabes el formato. Buscas en Google pero cada plantilla es diferente.",
        badPrompt: "Hazme una carta para el banco.",
        badResponseAnalysis: "Sin saber el propósito específico, el destinatario exacto ni los datos requeridos, la carta será genérica y probablemente rechazada.",
        agiaPromptTagged: `ROL:\nEres una Asistente Administrativa experta en correspondencia formal chilena.\n\nCONTEXTO:\nDestinatario: [Ej: "Banco Estado" / "SII" / "Municipalidad" / "Proveedor X"]\nPropósito: [Ej: "Solicitar certificado" / "Reclamar" / "Autorizar" / "Informar"]\nDatos de la empresa: [Razón social, RUT, dirección, representante legal]\nDatos específicos: [N° de cuenta, folio, referencia, etc.]\nAdjuntos: [Qué documentos acompañan]\n\nOBJETIVO:\nCarta formal que:\n1. Tenga el formato correcto para el destinatario\n2. Sea clara en lo que solicita\n3. Incluya todos los datos requeridos\n4. Esté lista para firma\n\nFORMATO:\nCarta con membrete, fecha, destinatario, cuerpo, despedida y firma`,
        previewResponse: `**[MEMBRETE EMPRESA]**\n\n[Ciudad], [Fecha]\n\n**Señores**\n**[Nombre Institución]**\n**[Dirección o Sucursal]**\n**Presente**\n\n**REF:** [Asunto específico]\n**N° Cuenta/Folio:** [Si aplica]\n\nDe nuestra consideración:\n\nPor medio de la presente, [Empresa], RUT [X], representada legalmente por [Nombre], viene en solicitar [descripción clara de lo que se pide].\n\nLo anterior, en razón de [justificación breve si aplica].\n\nPara tales efectos, se adjuntan los siguientes documentos:\n1. [Documento 1]\n2. [Documento 2]\n\nAgradeciendo de antemano su gestión, saluda atentamente a usted,\n\n\n___________________________\n[Nombre Representante Legal]\nRUT: [X]\nCargo: [X]\n[Empresa]`,
        solutionPlus: "Chilean Formal Letter Format. Estructura que cumple con convenciones de correspondencia formal en Chile: membrete, referencia, cuerpo, adjuntos, firma.",
        exampleTip: "Chilean Formal Letter Format (Carta formal chilena).",
        metadata: { score: 93, technique: "Chilean Formal Letter Format" },
        suggestedAI: "ChatGPT / Claude",
        verticalMatrix: [
            { rubro: "Bancos", contexto: "Trámites bancarios", ajuste: "N° cuenta, mandatos, poderes" },
            { rubro: "SII", contexto: "Trámites tributarios", ajuste: "RUT, giro, domicilio tributario" },
            { rubro: "Municipalidad", contexto: "Patentes y permisos", ajuste: "Rol de patente, dirección comercial" },
            { rubro: "Proveedores", contexto: "Comercial", ajuste: "N° de OC, factura, contrato" },
            { rubro: "Notaría", contexto: "Trámites legales", ajuste: "Referencias a escrituras" }
        ],
        fineTuning: [
            "Urgencia: ¿Es reclamo? Dile: 'Tono firme pero correcto.'",
            "Poder: ¿Actúo en representación? Dile: 'Incluir mención a poder notarial.'",
            "Respuesta: ¿Necesitas respuesta? Dile: 'Solicita acuse de recibo.'",
            "Copia: Dile: 'Agregar cc: a [otras personas].'"
        ],
        validationTip: "¿La institución procesará esta carta sin pedir aclaraciones?",
        prioridadSegmento: { "Gestión & Adm.": 1 },
        categoriaSegmento: { "Gestión & Adm.": "Productividad" }
    },
    {
        id: nextId++,
        category: "Gestión & Adm.",
        title: "Organización de Agenda y Coordinación de Reuniones",
        isStarPrompt: true,
        problem: "Tu jefe tiene 15 reuniones esta semana y tú coordinas todas. Se te cruzan horarios, olvidas confirmar asistencias y el día es un caos.",
        badPrompt: "Organiza las reuniones de mi jefe.",
        badResponseAnalysis: "Sin las reuniones actuales, tiempos de traslado, prioridades ni preferencias, la organización será un desorden.",
        agiaPromptTagged: `ROL:\nEres una Asistente Ejecutiva experta en gestión de agenda de alto nivel.\n\nCONTEXTO:\nReuniones pendientes: [Lista con: tema, participantes, duración, preferencia de horario]\nDisponibilidad: [Días y horarios disponibles]\nRestricciones: [Ej: "No antes de 9am" / "Almuerzo 13-14" / "Viernes solo mañana"]\nTiempos de traslado: [Si hay reuniones presenciales]\nPrioridades: [Qué reuniones son más importantes]\n\nOBJETIVO:\n1. Propuesta de agenda semanal optimizada\n2. Emails de coordinación para cada reunión\n3. Checklist de confirmaciones pendientes\n\nFORMATO:\nCalendario semanal + Emails de invitación + Lista de tareas`,
        previewResponse: `**PROPUESTA DE AGENDA - Semana del [X]**\n\n**LUNES [Fecha]**\n| Hora | Reunión | Participantes | Lugar |\n|------|---------|---------------|-------|\n| 09:00-10:00 | [Reunión A] | [Lista] | Sala 1 |\n| 10:30-11:30 | [Reunión B] | [Lista] | Zoom |\n| [Buffer traslado] |\n| 15:00-16:00 | [Reunión C] | [Lista] | Oficina cliente |\n\n**EMAIL DE INVITACIÓN (Reunión A):**\nAsunto: Invitación reunión [tema] - [fecha]\n[Cuerpo del email con propuesta de horario]\n\n**CHECKLIST DE CONFIRMACIONES:**\n☐ Confirmar asistencia [Nombre] a Reunión A\n☐ Reservar sala para Reunión B\n☐ Enviar recordatorio Reunión C\n☐ Preparar carpeta con documentos`,
        solutionPlus: "Executive Calendar Management. Bloquea tiempos de preparación y traslado, agrupa reuniones por ubicación, protege espacios de trabajo profundo.",
        exampleTip: "Executive Calendar Management (Gestión de agenda ejecutiva).",
        metadata: { score: 94, technique: "Executive Calendar Management" },
        suggestedAI: "ChatGPT / Claude",
        verticalMatrix: [
            { rubro: "Gerente", contexto: "Agenda de gerente", ajuste: "Proteger tiempo de decisiones estratégicas" },
            { rubro: "Ventas", contexto: "Ejecutivo comercial", ajuste: "Optimizar rutas de visitas" },
            { rubro: "Director", contexto: "Nivel directorio", ajuste: "Coordinación con otras empresas" },
            { rubro: "Consultor", contexto: "Múltiples clientes", ajuste: "Agrupar por cliente" },
            { rubro: "Médico", contexto: "Consultas", ajuste: "Tiempo entre pacientes" }
        ],
        fineTuning: [
            "Conflicto: ¿Dos reuniones se cruzan? Dile: 'Prioriza [X] sobre [Y].'",
            "Viaje: ¿Hay viaje esta semana? Dile: 'El martes viaja a [ciudad].'",
            "Reagendar: Dile: 'La reunión [X] debe moverse, propón alternativas.'",
            "Recurrente: Dile: 'Esta reunión es semanal, fíjala.'"
        ],
        validationTip: "¿Tu jefe puede confiar en que la agenda está completa y confirmada?",
        prioridadSegmento: { "Gestión & Adm.": 1 },
        categoriaSegmento: { "Gestión & Adm.": "Productividad" }
    },
    {
        id: nextId++,
        category: "Gestión & Adm.",
        title: "Control de Documentos y Archivo Inteligente",
        isStarPrompt: true,
        problem: "Tienes carpetas con 500 archivos sin orden. Cuando te piden un documento, buscas 20 minutos y a veces no lo encuentras.",
        badPrompt: "Organiza mis archivos.",
        badResponseAnalysis: "Sin conocer los tipos de documentos, la estructura del área ni los criterios de búsqueda frecuentes, la organización será arbitraria.",
        agiaPromptTagged: `ROL:\nEres una Especialista en Gestión Documental y Archivística.\n\nCONTEXTO:\nTipos de documentos: [Ej: "Contratos, facturas, cotizaciones, correspondencia, informes"]\nVolumen: [Ej: "500 archivos en una carpeta"]\nCriterios de búsqueda frecuentes: [Ej: "Por cliente" / "Por fecha" / "Por tipo"]\nPersonas que acceden: [Solo tú / Equipo / Toda la empresa]\nSistema actual: [Carpetas locales / Drive / Sharepoint / Otro]\n\nOBJETIVO:\n1. Estructura de carpetas lógica y escalable\n2. Convención de nombres de archivos\n3. Protocolo de archivo de documentos nuevos\n4. Lista de documentos a depurar\n\nFORMATO:\nArbol de carpetas + Reglas de nombrado + Procedimiento`,
        previewResponse: `**ESTRUCTURA DE CARPETAS PROPUESTA**\n\n📁 [ÁREA]\n├── 📁 01_CLIENTES\n│   ├── 📁 Cliente A\n│   │   ├── 📁 Contratos\n│   │   ├── 📁 Cotizaciones\n│   │   └── 📁 Correspondencia\n│   └── 📁 Cliente B\n├── 📁 02_PROVEEDORES\n├── 📁 03_INTERNOS\n│   ├── 📁 Informes\n│   └── 📁 Actas\n└── 📁 04_ARCHIVO_HISTÓRICO (antes de 2023)\n\n**CONVENCIÓN DE NOMBRES:**\n[AAAA-MM-DD]_[Tipo]_[Descripción]_[Versión]\nEjemplo: 2025-01-15_Contrato_ClienteABC_v2.pdf\n\n**PROTOCOLO DE ARCHIVO:**\n1. Todo documento nuevo → Nombrar según convención\n2. Guardar en carpeta del cliente/tema\n3. Si tiene versiones → Agregar _v1, _v2\n4. Documentos de +2 años → Mover a Archivo Histórico\n\n**PARA DEPURAR:**\n- Duplicados: [lista]\n- Sin fecha identificable: [lista]\n- Obsoletos: [lista]`,
        solutionPlus: "Document Management System. Estructura jerárquica + convención de nombres + protocolo de archivo = nunca más buscar 20 minutos.",
        exampleTip: "Document Management System (Sistema de gestión documental).",
        metadata: { score: 93, technique: "Document Management System" },
        suggestedAI: "ChatGPT / Claude",
        verticalMatrix: [
            { rubro: "Legal", contexto: "Documentos legales", ajuste: "Por causa/cliente + numeración" },
            { rubro: "Contable", contexto: "Documentos tributarios", ajuste: "Por período fiscal + tipo" },
            { rubro: "RRHH", contexto: "Carpetas de personal", ajuste: "Por trabajador + tipo documento" },
            { rubro: "Proyectos", contexto: "Gestión de proyectos", ajuste: "Por proyecto + fase" },
            { rubro: "Comercial", contexto: "Ventas", ajuste: "Por cliente + estado (activo/cerrado)" }
        ],
        fineTuning: [
            "Sistema: ¿Drive? Dile: 'Optimiza para búsqueda en Google Drive.'",
            "Múltiples usuarios: Dile: 'Permisos por carpeta.'",
            "Histórico: ¿Hay archivos muy viejos? Dile: 'Criterio de retención y purga.'",
            "Tags: Dile: 'Además de carpetas, sugiere sistema de etiquetas.'"
        ],
        validationTip: "¿Cualquier persona del equipo puede encontrar un documento en menos de 1 minuto?",
        prioridadSegmento: { "Gestión & Adm.": 1 },
        categoriaSegmento: { "Gestión & Adm.": "Operaciones & Procesos" }
    }
];

data.push(...nuevos);
fs.writeFileSync('prompts_db.json', JSON.stringify(data, null, 4), 'utf8');
console.log('✅ Agregados ' + nuevos.length + ' prompts para Secretarias/Asistentes');
console.log('IDs:', nuevos.map(p => p.id).join(', '));
console.log('Total prompts:', data.length);
