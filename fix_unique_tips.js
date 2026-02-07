/**
 * Corregir exampleTip y validationTip con contenido ÚNICO para cada caso
 */

const fs = require('fs');
const casesData = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));

// Contenido único por ID de caso
const contenidoUnico = {
    // OPERACIONES
    74: {
        exampleTip: "Automatización sin código + Zapier/Make. Conecta apps para flujos automáticos.",
        validationTip: "¿El flujo automatizado funciona de principio a fin sin intervención manual?"
    },
    77: {
        exampleTip: "Logística inteligente + Optimización de rutas. Algoritmos para minimizar km y tiempo.",
        validationTip: "¿La ruta propuesta reduce distancia y tiempo respecto a la actual?"
    },
    78: {
        exampleTip: "Screening de CV + Criterios objetivos. Filtrado por competencias y experiencia.",
        validationTip: "¿Los candidatos filtrados cumplen todos los requisitos mínimos del cargo?"
    },
    79: {
        exampleTip: "Mapeo de procesos + Identificación de cuellos de botella. Análisis de tiempos.",
        validationTip: "¿El proceso optimizado elimina las demoras identificadas?"
    },
    81: {
        exampleTip: "Ciberseguridad básica + Checklist de vulnerabilidades. Protección de datos.",
        validationTip: "¿El negocio queda protegido contra las amenazas más comunes?"
    },
    102: {
        exampleTip: "Diagnóstico empresarial + Indicadores clave. Semáforo rojo/amarillo/verde.",
        validationTip: "¿El diagnóstico identifica claramente las áreas críticas a atender?"
    },

    // EDUCACIÓN
    173: {
        exampleTip: "Acta formal MINEDUC + Registro de acuerdos. Estructura oficial para consejo.",
        validationTip: "¿El acta cumple con el formato requerido por MINEDUC?"
    },
    174: {
        exampleTip: "Informe PIE + Derivación fundamentada. Evidencias para especialista.",
        validationTip: "¿El informe incluye todas las evaluaciones y observaciones requeridas?"
    },
    175: {
        exampleTip: "Bitácora de observación + Indicadores de desempeño docente. Registro sistemático.",
        validationTip: "¿La bitácora permite retroalimentación constructiva al docente observado?"
    },
    176: {
        exampleTip: "Carta de recomendación + Evidencias de logros. Perfil para postulación.",
        validationTip: "¿La carta destaca fortalezas específicas y verificables del alumno?"
    },
    177: {
        exampleTip: "Protocolo de crisis + Convivencia escolar. Pasos claros ante emergencias.",
        validationTip: "¿El protocolo cubre todos los escenarios críticos y tiene responsables asignados?"
    },
    178: {
        exampleTip: "Evaluación auténtica + Rúbricas de desempeño. Más allá de la prueba escrita.",
        validationTip: "¿La evaluación mide competencias reales aplicables fuera del aula?"
    },
    179: {
        exampleTip: "Taller para padres + Ciudadanía digital. Contenido práctico y accesible.",
        validationTip: "¿Los padres podrán aplicar lo aprendido para proteger a sus hijos online?"
    },
    180: {
        exampleTip: "Microaprendizaje docente + Formato 3-5 minutos. Contenido accionable.",
        validationTip: "¿La cápsula entrega un aprendizaje concreto aplicable en la próxima clase?"
    },
    181: {
        exampleTip: "Flipped Classroom + Material previo y actividad presencial. Inversión efectiva.",
        validationTip: "¿El diseño maximiza el tiempo presencial para práctica y discusión?"
    },
    182: {
        exampleTip: "Análisis de resultados + Decisiones pedagógicas. De datos a acciones.",
        validationTip: "¿El análisis identifica patrones y propone intervenciones específicas?"
    },
    183: {
        exampleTip: "Planificación DUA + Accesibilidad universal. Diseño para todos los estudiantes.",
        validationTip: "¿La unidad ofrece múltiples formas de representación, acción y compromiso?"
    },
    184: {
        exampleTip: "Retroalimentación formativa + Comentarios que generan mejora. No solo notas.",
        validationTip: "¿El alumno sabrá exactamente qué mejorar y cómo hacerlo?"
    },
    185: {
        exampleTip: "Escape Room educativo + Gamificación curricular. Desafíos con contenido.",
        validationTip: "¿El juego integra los objetivos de aprendizaje de forma entretenida?"
    },
    186: {
        exampleTip: "Guía de autoestudio + Instrucciones claras. Autonomía del estudiante.",
        validationTip: "¿El alumno puede avanzar sin ayuda del profesor siguiendo la guía?"
    },
    187: {
        exampleTip: "Mediación escolar + Resolución pacífica. Protocolo paso a paso.",
        validationTip: "¿El proceso permite que ambas partes lleguen a un acuerdo satisfactorio?"
    },
    188: {
        exampleTip: "PACI + Adaptación curricular individual. Necesidades educativas especiales.",
        validationTip: "¿Las adaptaciones son específicas, medibles y alcanzables para el alumno?"
    },
    189: {
        exampleTip: "Newsletter escolar + Comunicación efectiva. Información clara para familias.",
        validationTip: "¿Los padres entienden las actividades del mes y cómo participar?"
    },
    190: {
        exampleTip: "Aprendizaje-Servicio + Impacto comunitario. Proyecto con sentido social.",
        validationTip: "¿El proyecto beneficia a la comunidad y genera aprendizaje significativo?"
    },

    // LEGAL & PROFESIONAL
    191: {
        exampleTip: "Demanda civil + Estructura procesal chilena. Fundamentos de hecho y derecho.",
        validationTip: "¿La demanda cumple con todos los requisitos del Art. 254 CPC?"
    },
    192: {
        exampleTip: "Contestación + Excepciones dilatorias y perentorias. Defensa estructurada.",
        validationTip: "¿Se controvierten todos los hechos y se oponen excepciones fundadas?"
    },
    193: {
        exampleTip: "Recurso de protección + Derechos constitucionales. Acción cautelar urgente.",
        validationTip: "¿Se identifica claramente el derecho vulnerado y la acción u omisión ilegal?"
    },
    194: {
        exampleTip: "Querella criminal + Formalización MP. Hechos típicos y antijurídicos.",
        validationTip: "¿La querella cumple requisitos del Art. 113 CPP y permite formalización?"
    },
    195: {
        exampleTip: "Planificación tributaria + Optimización legal. Estrategia con respaldo normativo.",
        validationTip: "¿Las recomendaciones están dentro del marco legal y ahorran impuestos?"
    },
    196: {
        exampleTip: "F22 + Declaración de renta. Cálculo correcto de impuestos y devoluciones.",
        validationTip: "¿La declaración está correcta y maximiza devoluciones/minimiza pago?"
    },
    197: {
        exampleTip: "Escritura de sociedad + Constitución SpA/SRL. Cláusulas estatutarias.",
        validationTip: "¿La escritura cumple con todos los requisitos legales para inscripción?"
    },
    198: {
        exampleTip: "Testamento abierto + Cláusulas especiales. Voluntad del testador.",
        validationTip: "¿El testamento es válido y refleja fielmente la voluntad del otorgante?"
    },
    199: {
        exampleTip: "Informe pericial + Formato judicial. Metodología y conclusiones fundadas.",
        validationTip: "¿El informe resiste el examen cruzado y fundamenta sus conclusiones?"
    },
    200: {
        exampleTip: "Dictamen jurídico + Análisis corporativo. Recomendación legal fundamentada.",
        validationTip: "¿El dictamen responde la consulta con fundamento legal sólido?"
    },
    201: {
        exampleTip: "Informe psicológico forense + Evaluación pericial. Metodología validada.",
        validationTip: "¿El informe usa instrumentos validados y conclusiones defendibles?"
    },
    202: {
        exampleTip: "Presupuesto arquitectónico + Itemizado completo. Costos reales de mercado.",
        validationTip: "¿El presupuesto cubre todas las partidas y tiene precios actualizados?"
    },
    203: {
        exampleTip: "EETT + Especificaciones técnicas de obra. Normas y estándares chilenos.",
        validationTip: "¿Las especificaciones permiten cotizar y ejecutar la obra sin ambigüedades?"
    },
    204: {
        exampleTip: "Informe médico + Licencia/COMPIN. Diagnóstico y pronóstico fundamentado.",
        validationTip: "¿El informe justifica la licencia y cumple requisitos de COMPIN?"
    },
    205: {
        exampleTip: "Consentimiento informado + Procedimientos médicos. Riesgos y alternativas.",
        validationTip: "¿El paciente comprende los riesgos y beneficios del procedimiento?"
    },
    206: {
        exampleTip: "Apelación civil + Estrategia impugnatoria. Agravios y petitorio claro.",
        validationTip: "¿El recurso identifica errores de la sentencia y solicita modificación?"
    },
    207: {
        exampleTip: "Transacción extrajudicial + Término de conflicto. Acuerdo vinculante.",
        validationTip: "¿El acuerdo es ejecutable y protege los intereses del cliente?"
    },
    208: {
        exampleTip: "Acta de directorio + Sociedades anónimas. Quórum y acuerdos válidos.",
        validationTip: "¿El acta cumple con los requisitos legales y estatutarios?"
    },
    209: {
        exampleTip: "Defensa laboral + Inspección del Trabajo. Descargos y pruebas.",
        validationTip: "¿La defensa desvirtúa las infracciones o atenúa las multas?"
    },
    210: {
        exampleTip: "Finiquito laboral + Cláusulas de protección. Términos claros y legales.",
        validationTip: "¿El finiquito cumple Art. 177 Código del Trabajo y protege al empleador?"
    },
    211: {
        exampleTip: "Estados financieros IFRS + Notas explicativas. Normas internacionales.",
        validationTip: "¿Los estados financieros cumplen con IFRS y son auditables?"
    },
    212: {
        exampleTip: "Carta de gerencia + Post-auditoría. Observaciones y recomendaciones.",
        validationTip: "¿La carta identifica debilidades de control y propone mejoras?"
    },
    213: {
        exampleTip: "Propuesta de consultoría + Scope of Work. Alcance y entregables claros.",
        validationTip: "¿El cliente entiende exactamente qué recibirá, cuándo y a qué costo?"
    },
    214: {
        exampleTip: "Acta de mediación familiar + Formato tribunales. Acuerdos validables.",
        validationTip: "¿El acta cumple requisitos para ser homologada por el tribunal?"
    },
    215: {
        exampleTip: "Demanda de alimentos + Tribunal de Familia. Necesidades y capacidad.",
        validationTip: "¿La demanda acredita necesidades del alimentario y capacidad del demandado?"
    },
    216: {
        exampleTip: "Certificación notarial + Autenticación de documentos. Fe pública.",
        validationTip: "¿La certificación cumple con las formalidades legales requeridas?"
    },
    217: {
        exampleTip: "Tasación inmobiliaria + Formato bancario. Metodología de valorización.",
        validationTip: "¿La tasación es aceptable por bancos y refleja valor de mercado?"
    },
    218: {
        exampleTip: "Reclamo SERNAC/Superintendencia + Defensa del consumidor. Derechos.",
        validationTip: "¿El reclamo tiene fundamento legal y exige solución concreta?"
    },
    219: {
        exampleTip: "Compliance empresarial + Protocolo de cumplimiento. Prevención de delitos.",
        validationTip: "¿El protocolo cumple con Ley 20.393 y previene responsabilidad penal?"
    },
    220: {
        exampleTip: "Peritaje caligráfico + Autenticidad de firma. Metodología grafológica.",
        validationTip: "¿El peritaje sigue metodología reconocida y conclusiones son defendibles?"
    },

    // GESTIÓN & ADM.
    221: {
        exampleTip: "Informe de gestión + KPIs ejecutivos. Resumen para toma de decisiones.",
        validationTip: "¿La gerencia puede tomar decisiones informadas con este informe?"
    },
    222: {
        exampleTip: "Flujo de caja + Proyección 12 meses. Ingresos, egresos y saldos.",
        validationTip: "¿La proyección es realista y permite anticipar necesidades de liquidez?"
    },
    223: {
        exampleTip: "Política RRHH + Vacaciones y permisos. Normas claras y equitativas.",
        validationTip: "¿La política es clara, legal y aplicable a todos los colaboradores?"
    },
    224: {
        exampleTip: "Evaluación de desempeño + Competencias y metas. Feedback estructurado.",
        validationTip: "¿La evaluación es objetiva y permite plan de desarrollo del colaborador?"
    },
    225: {
        exampleTip: "Contrato arriendo comercial + Cláusulas de protección. Términos claros.",
        validationTip: "¿El contrato protege al arrendatario/arrendador y es ejecutable?"
    },
    226: {
        exampleTip: "RIOHS + Reglamento interno. Normativa laboral chilena vigente.",
        validationTip: "¿El reglamento cumple con el Código del Trabajo y normas de seguridad?"
    },
    227: {
        exampleTip: "Plan de capacitación + DNC y presupuesto. Desarrollo de competencias.",
        validationTip: "¿El plan cierra brechas identificadas y tiene presupuesto asignado?"
    }
};

let modificados = 0;

casesData.forEach(caso => {
    if (contenidoUnico[caso.id]) {
        const antes = {
            exampleTip: caso.exampleTip?.substring(0, 30),
            validationTip: caso.validationTip?.substring(0, 30)
        };

        caso.exampleTip = contenidoUnico[caso.id].exampleTip;
        caso.validationTip = contenidoUnico[caso.id].validationTip;

        console.log(`✅ ID ${caso.id}: ${caso.title.substring(0, 40)}`);
        modificados++;
    }
});

console.log(`\n📊 Total modificados: ${modificados}`);

fs.writeFileSync('prompts_db.json', JSON.stringify(casesData, null, 2), 'utf8');
console.log('💾 Guardado correctamente');
