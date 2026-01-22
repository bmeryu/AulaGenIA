document.addEventListener("DOMContentLoaded", () => {
  const e = {
    apiKey: "AIzaSyC9sVJwEfFdIN4VmSMooAoQLXYl5Mcu1yM",
    authDomain: "aulagenia.firebaseapp.com",
    projectId: "aulagenia",
    storageBucket: "aulagenia.firebasestorage.app",
    messagingSenderId: "173328075630",
    appId: "1:173328075630:web:825606db4271ea1e66cf7f",
  };
  try {
    firebase.initializeApp(e);
  } catch (e) {
    console.warn("Firebase ya fue inicializado.");
  }
  const a = firebase.auth(),
    t = firebase.firestore(),
    s = firebase.storage(),
    o =
      window.location.origin +
      window.location.pathname.substring(
        0,
        window.location.pathname.lastIndexOf("/"),
      );
  const urlParam = new URLSearchParams(window.location.search).get("course");
  let processed = urlParam ? urlParam.trim().replace(/\s+/g, "-") : "";
  if (processed === "inteligencia-aplicada") processed = "ia-aplicada-esencial";
  const r = processed || "ia-aplicada-esencial";
  const essentialData = {
    title: "IA Aplicada · Esencial",
    hasCertificate: !0,
    modules: [
      {
        title: "Bienvenida al Curso",
        badge: "Alumno Registrado",
        practiceTasks: [
          {
            text: 'Video 1 | El Pacto: Me comprometo a ver a la IA como un "asistente" o "copiloto" para facilitar mi aprendizaje, aunque entienda que es un programa.',
            done: !1,
          },
          {
            text: "Video 2 | Recursos: Descargué las guías de acceso rápido desde la pestaña de materiales de la plataforma.",
            done: !1,
          },
        ],
        lessons: [
          {
            id: "0-1",
            title: "Video de Onboarding: ¡Bienvenido a Aula GenIA!",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/ONBOARDING-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/ONBOARDING-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Link ChatGPT",
                url: "https://chatgpt.com",
                external: !0,
              },
              {
                name: "Guía de Acceso: ChatGPT",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-ChatGPT-para-Novatos.pdf",
                external: !1,
              },
              {
                name: "Link Gemini",
                url: "https://gemini.google.com",
                external: !0,
              },
              {
                name: "Guía de Acceso: Gemini",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Gemini-para-Novatos.pdf",
                external: !1,
              },
              { name: "Link Grok", url: "https://x.com/i/grok", external: !0 },
              {
                name: "Guía de Acceso: Grok",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Grok-para-Novatos.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "0-2",
            title: "Tu recorrido dentro de la plataforma",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/ONBOARDING-VIDEO2.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/ONBOARDING-VIDEO2-caption.srt",
            resources: [],
          },
        ],
      },
      {
        title: "Módulo 1: ¿Qué es la Inteligencia Artificial?",
        badge: "Explorador Conceptual",
        practiceTasks: [
          {
            text: "Video 1 | Desafío de Debate: Ingresé al chat y le planteé a la IA una duda actual o una opinión subjetiva para debatirla juntos, tal como se indicó en el taller.",
            done: !1,
          },
          {
            text: 'Video 2 | Detector de Alucinaciones: Le pedí información sobre un tema que domino al 100% para comprobar si la IA inventaba datos o "alucinaba".',
            done: !1,
          },
          {
            text: "Video 3 | Verificación: Hice una búsqueda crítica de un resultado que me dio la IA para confirmar que la información fuera correcta, actuando como el supervisor del copiloto.",
            done: !1,
          },
        ],
        lessons: [
          {
            id: "1-1",
            title:
              'Qué es la Inteligencia Artificial y por qué es tu nuevo "Copiloto"',
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO1-VIDEO1-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO1-VIDEO1-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 1.1",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M1V1.pdf",
                external: !1,
              },
              {
                name: "Infografía: El rol del Copiloto",
                url: "gs://aulagenia.firebasestorage.app/Copiloto_vs_Programador.pdf",
                external: !1,
              },
              {
                name: "¿Qué hay dentro del Copiloto? 1.0",
                url: "gs://aulagenia.firebasestorage.app/Que-hay-dentro-del-copiloto.pdf",
                external: !1,
              },
              {
                name: "Listado de Verificación del Módulo",
                url: "gs://aulagenia.firebasestorage.app/Listado-Verificacion.pdf",
                external: !1,
              },
              {
                name: "Fuentes de Autoridad 1.0",
                url: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-1.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "1-2",
            title: "Diccionario IA: Hablando con el Genio",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO1-VIDEO2-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO1-VIDEO2-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 1.2",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M1V2.pdf",
                external: !1,
              },
              {
                name: "Guía: 6 Pilares de la IA",
                url: "gs://aulagenia.firebasestorage.app/Guía-Conceptos-Clave-Los-6-Pilares-de-laIA.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "1-3",
            title: "Desarmando los Mitos de la IA",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO1-VIDEO3-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO1-VIDEO3-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 1.3",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M1V3.pdf",
                external: !1,
              },
              {
                name: "Mitos Derribados de la IA",
                url: "gs://aulagenia.firebasestorage.app/Mitos-Derribados-de-la IA.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "q-1",
            title: "Test: Módulo 1",
            type: "quiz",
            questions: [
              {
                text: '¿Qué es el "cerebro" de ChatGPT y otras IAs conversacionales?',
                options: [
                  "Un buscador como Google",
                  "Un modelo que aprendió leyendo millones de textos",
                  "Una base de datos con respuestas fijas",
                  "Un programa que solo traduce",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Es como un estudiante que leyó muchísimos libros y ahora puede conversar sobre cualquier tema.",
              },
              {
                text: "Si la IA te da información falsa pero con mucha confianza, ¿cómo se llama ese problema?",
                options: [
                  "Error de internet",
                  "Alucinación de la IA",
                  "Falta de batería",
                  "Problema de traducción",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: 'Es cuando la IA "inventa" datos que suenan reales pero son completamente falsos.',
              },
              {
                text: '¿Qué significa que una IA pueda "ver" fotos, "leer" texto y "escuchar" audio?',
                options: [
                  "Que trabaja en varios idiomas",
                  "Que es Multimodal (entiende varios tipos de información)",
                  "Que tiene varias versiones",
                  "Que funciona en varios dispositivos",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Como tener varios sentidos: puede procesar imágenes, texto y sonido al mismo tiempo.",
              },
              {
                text: "¿Cómo lee la IA el texto que le escribes?",
                options: [
                  "Letra por letra",
                  'En pedacitos de palabras llamados "tokens"',
                  "Solo palabras completas",
                  "Como una imagen",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "La IA divide el texto en fragmentos pequeños para procesarlo mejor.",
              },
              {
                text: "Si la IA olvida lo que le dijiste al inicio de una conversación muy larga, ¿qué pasó?",
                options: [
                  "Se quedó sin internet",
                  "Alcanzó su límite de memoria (Ventana de Contexto)",
                  "Se quedó sin batería",
                  "Tuvo un error de traducción",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Es como una pizarra: si escribes mucho, tienes que borrar lo viejo para seguir.",
              },
            ],
            resources: [],
          },
        ],
      },
      {
        title: "Módulo 2: La IA para ti, en tu día a día",
        badge: "Asistente IA Personal",
        practiceTasks: [
          {
            text: "Video 2 | Creatividad Visual: Entré a Ideogram (o Midjourney) y generé una imagen o logo para mi proyecto usando IA.",
            done: !1,
          },
          {
            text: "Video 3 | El Diagnóstico: Identifiqué y anoté esa tarea repetitiva que hago todos los días y que me consume al menos 30 minutos.",
            done: !1,
          },
          {
            text: "Video 3 | La Decisión: Elegí cuál de mis tareas identificadas voy a delegar o automatizar primero con IA durante este curso.",
            done: !1,
          },
        ],
        lessons: [
          {
            id: "2-1",
            title: "Del Uso Superficial al Estratégico",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO2-VIDEO1-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO2-VIDEO1-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 2.1",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M2V1.pdf",
                external: !1,
              },
              {
                name: "Guía Maestra de Herramientas",
                url: "gs://aulagenia.firebasestorage.app/Guía-Maestra-Herramientas.pdf",
                external: !1,
              },
              {
                name: "Fuentes de Autoridad 2.0",
                url: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-2.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "2-2",
            title: "El Efecto Real: María, Carlos y Luis",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO2-VIDEO2-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO2-VIDEO2-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 2.2",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M2V2.pdf",
                external: !1,
              },
              {
                name: "El Salto de Principiante a Pro",
                url: "gs://aulagenia.firebasestorage.app/El-Salto-de-Principiante-a Pro.pdf",
                external: !1,
              },
              {
                name: "¿Qué hay dentro del Copiloto? 2.0",
                url: "gs://aulagenia.firebasestorage.app/Que-hay-dentro-del-copiloto-2.pdf",
                external: !1,
              },
              {
                name: "Aprende de los Expertos: Los Caminos de María, Carlos y Luis",
                url: "gs://aulagenia.firebasestorage.app/Aprende-de-los-Expertos-Los-Caminos-de-María-Carlos-y-Luis.pdf",
                external: !1,
              },
              {
                name: "Test de Diagnóstico Avanzado: Tu Ruta",
                url: "gs://aulagenia.firebasestorage.app/Test-de-Diagnóstico-Avanzado-Tu-Ruta.pdf",
                external: !1,
              },
              {
                name: "Guía de Acceso: Ideogram",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Ideogram-para-Novatos.pdf",
                external: !1,
              },
              {
                name: "Guía de Acceso: Midjourney",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Midjourney-para-Novatos.pdf",
                external: !1,
              },
              {
                name: "Guía de Acceso: Gamma",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Gamma-para-Novatos.pdf",
                external: !1,
              },
              {
                name: "Guía de Acceso: DALL-E 3",
                url: "gs://aulagenia.firebasestorage.app/Guía-Acceso-a-DALL-E3-para-Novatos.pdf",
                external: !1,
              },
              {
                name: "Guía de Acceso: Canva",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Canva-para-Novatos.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "2-3",
            title: "Tu Radar de Automatización",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO2-VIDEO3-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO2-VIDEO3-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Herramienta: Checklist de Complejidad",
                url: "gs://aulagenia.firebasestorage.app/Herramienta-Checklist-de-Complejidad.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "2-taller",
            title: "Aplicación: Radar de Automatización",
            type: "taller",
            resources: [],
          },
          {
            id: "q-2",
            title: "Test: Módulo 2",
            type: "quiz",
            questions: [
              {
                text: '¿Cuál es la diferencia entre usar la IA de forma "superficial" vs "estratégica"?',
                options: [
                  "Pagar más dinero por la herramienta",
                  "Usarla con un objetivo claro y repetirlo en tus tareas diarias",
                  "Saber programar",
                  "Tener la última versión",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Lo importante es cómo la integras en tu trabajo, no cuánto pagas por ella.",
              },
              {
                text: "Si quieres hacer presentaciones rápidas y profesionales, ¿qué herramienta te ayuda?",
                options: ["Excel", "Gamma", "WhatsApp", "Photoshop"],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Es una herramienta que transforma tus ideas en slides visuales en minutos.",
              },
              {
                text: "¿Qué tareas deberías automatizar primero con IA?",
                options: [
                  "Todas las tareas sin importar cuánto tiempo tomen",
                  "Las que se repiten mucho y te quitan al menos 30 minutos",
                  "Solo las más difíciles",
                  "Las que haces una vez al año",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: 'Busca el "fruto que cuelga más bajo": lo que se repite mucho y consume tiempo.',
              },
              {
                text: "¿Para qué sirve DALL-E 3?",
                options: [
                  "Para escribir correos",
                  "Para crear imágenes originales con IA",
                  "Para hacer cálculos",
                  "Para traducir idiomas",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Es una herramienta que genera imágenes personalizadas desde cero.",
              },
              {
                text: '¿Qué logró María usando la IA como "asistente mágico"?',
                options: [
                  "Aprendió a programar",
                  "Duplicó su trabajo reduciendo sus horas",
                  "Compró una computadora nueva",
                  "Cambió de profesión",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "La IA le liberó tiempo para enfocarse en estrategia y creatividad.",
              },
            ],
            resources: [],
          },
        ],
      },
      {
        title: "Módulo 3: Preparando tus herramientas",
        badge: "Creativo IA",
        practiceTasks: [
          {
            text: "Video 1 | La Receta Básica: Escribí mi primer prompt estructurado definiendo claramente: 1) El Rol, 2) El Contexto y 3) La Meta (Propósito).",
            done: !1,
          },
          {
            text: 'Video 2 | Nivel Experto: Reescribí el prompt anterior agregando los dos ingredientes faltantes de la "Estructura Maestra": Restricciones (qué NO quiero) y Formato (cómo lo quiero).',
            done: !1,
          },
          {
            text: 'Video 2 | Rotación de Sombrero: Sin cambiar de chat, le pedí a la IA que asuma un nuevo rol (ej. de "Estratega" a "Redactor") para aprovechar el contexto que ya tenía.',
            done: !1,
          },
        ],
        lessons: [
          {
            id: "3-1",
            title: "La Receta WOW: El Arte de Pedir",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO3-VIDEO1-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO3-VIDEO1-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 3.1",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M3V1.pdf",
                external: !1,
              },
              {
                name: "Mi Primer Prompt WOW",
                url: "gs://aulagenia.firebasestorage.app/Mi-Primer-Prompt-WOW.pdf",
                external: !1,
              },
              {
                name: "Infografía: La Receta WOW",
                url: "gs://aulagenia.firebasestorage.app/Infografía-La Receta-WOW.pdf",
                external: !1,
              },
              {
                name: "Plantilla: Rellena tu Prompt WOW",
                url: "gs://aulagenia.firebasestorage.app/Plantilla-Rellena-tu-Prompt-WOW.pdf",
                external: !1,
              },
              {
                name: "Fuentes de Autoridad 3.0",
                url: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-3.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "3-2",
            title: "Fórmula AGIA: Instrucciones Maestras",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO3-VIDEO2-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO3-VIDEO2-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 3.2",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M3V2.pdf",
                external: !1,
              },
              {
                name: "El Arte de la Persuasión",
                url: "gs://aulagenia.firebasestorage.app/El-Arte-de-la-Persuacion.pdf",
                external: !1,
              },
              {
                name: "El Código de las Frases de Poder",
                url: "gs://aulagenia.firebasestorage.app/El-Código-de-las-Frases-de-Poder.pdf",
                external: !1,
              },
              {
                name: "Diccionario de Verbos de Poder",
                url: "gs://aulagenia.firebasestorage.app/Diccionario-de-Verbos-de-Poder.pdf",
                external: !1,
              },
              {
                name: "Ejemplos: Instrucciones de Alta Fidelidad",
                url: "gs://aulagenia.firebasestorage.app/Ejemplos-Instrucciones-de-Alta-Fidelidad.pdf",
                external: !1,
              },
              {
                name: "Guía de Acceso: Gemini Image",
                url: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Gemini-Image-Nano-Banana.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "3-3",
            title: "3 Salvavidas para Prompts en Crisis",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO3-VIDEO3-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO3-VIDEO3-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 3.3",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M3V3.pdf",
                external: !1,
              },
              {
                name: "Kit Maestro: Delegación IA",
                url: "gs://aulagenia.firebasestorage.app/Kit-Maestro-Delegación-IA.pdf",
                external: !1,
              },
              {
                name: "Kit de Primeros Auxilios IA",
                url: "gs://aulagenia.firebasestorage.app/Kit-Primeros-Auxilios-IA.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "q-3",
            title: "Test: Módulo 3",
            type: "quiz",
            questions: [
              {
                text: "Para pedirle algo a la IA de forma efectiva, ¿qué 3 cosas básicas necesitas decirle?",
                options: [
                  "Título, Cuerpo y Conclusión",
                  "Rol (quién es), Contexto (la situación) y Meta (qué quieres)",
                  "Pregunta, Respuesta y Gracias",
                  "Inicio, Desarrollo y Final",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Piensa en: ¿Quién debe actuar? ¿En qué situación? ¿Qué resultado quieres?",
              },
              {
                text: "Si quieres que la IA NO haga algo específico, ¿dónde lo pones en tu pedido?",
                options: [
                  "En el Formato",
                  "En las Restricciones",
                  "En el Rol",
                  "En el Contexto",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Es donde defines los límites o lo que NO quieres que haga.",
              },
              {
                text: "Si la IA corta su respuesta a la mitad, ¿qué es lo más rápido para que continúe?",
                options: [
                  "Empezar de nuevo",
                  'Escribir "Continúa"',
                  "Cerrar y abrir el chat",
                  "Borrar todo",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Una sola palabra es suficiente para que retome donde quedó.",
              },
              {
                text: '¿Qué es la "Estructura Maestra AGIA"?',
                options: [
                  "Un tipo de IA",
                  "La forma completa de pedirle algo a la IA: Rol, Contexto, Meta, Restricciones y Formato",
                  "Un programa de computadora",
                  "Una empresa de tecnología",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Es la receta completa con todos los ingredientes para un prompt perfecto.",
              },
              {
                text: "Si quieres que la IA te dé una respuesta más profunda, ¿qué puedes hacer?",
                options: [
                  "Gritar al micrófono",
                  "Decirle que es importante y crítico para tu trabajo",
                  "Escribir en mayúsculas",
                  "Reiniciar el chat",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Añadir importancia o consecuencias activa las capacidades más avanzadas de la IA.",
              },
            ],
            resources: [],
          },
        ],
      },
      {
        title: "Módulo 4: Arquitectura de Ideas",
        badge: "Maestro de Prompts",
        practiceTasks: [
          {
            text: "Video 1 | El Plano: Elegí un proyecto grande y le pedí a la IA solo el índice o la estructura general, prohibiéndole desarrollar el contenido todavía.",
            done: !1,
          },
          {
            text: "Video 2 | El Ladrillo: Seleccioné un único punto del índice y le pedí a la IA que se concentre exclusivamente en desarrollarlo a fondo.",
            done: !1,
          },
          {
            text: "Video 2 | El Cemento: Le pedí a la IA que transforme ese contenido suelto en un formato ejecutable (como una tabla de planificación semanal o calendario).",
            done: !1,
          },
          {
            text: "Video 2 | Desafío de Estilo: Subí mi logo (o una imagen de referencia) y le pedí 3 variaciones de estilo (cinemático, minimalista, 3D) para entrenar mi criterio visual.",
            done: !1,
          },
        ],
        lessons: [
          {
            id: "4-1",
            title: "Intro al Arquitecto de Ideas",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO4-VIDEO1-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO4-VIDEO1-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 4.1",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M4V1.pdf",
                external: !1,
              },
              {
                name: "Fuentes de Autoridad 4.0",
                url: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-4.pdf",
                external: !1,
              },
              {
                name: "Guía Visual: El Mapa del Arquitecto",
                url: "gs://aulagenia.firebasestorage.app/Guía-Visual-El-Mapa-del-Arquitecto.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "4-2",
            title: "Tú eres el Arquitecto de Ideas",
            type: "video",
            videoUrl:
              "gs://aulagenia.firebasestorage.app/MODULO4-VIDEO2-IA-Aplicada-Programa-Esencial.mp4",
            transcriptionUrl:
              "gs://aulagenia.firebasestorage.app/MODULO4-VIDEO2-IA-Aplicada-Programa-Esencial-caption.srt",
            resources: [
              {
                name: "Glosario 4.2",
                url: "gs://aulagenia.firebasestorage.app/Glosario-M4V2.pdf",
                external: !1,
              },
              {
                name: "Guía Visual: El Mapa del Arquitecto",
                url: "gs://aulagenia.firebasestorage.app/Guía-Visual-El-Mapa-del-Arquitecto.pdf",
                external: !1,
              },
              {
                name: "Herramienta: Checklist de Complejidad",
                url: "gs://aulagenia.firebasestorage.app/Herramienta-Checklist-de-Complejidad.pdf",
                external: !1,
              },
              {
                name: "Caso Práctico: Estrategia 0 a 10k Seguidores",
                url: "gs://aulagenia.firebasestorage.app/Caso-Practico-Estrategia-0-a-10k-Seguidores.pdf",
                external: !1,
              },
            ],
          },
          {
            id: "q-4",
            title: "Test: Módulo 4",
            type: "quiz",
            questions: [
              {
                text: '¿Qué hace diferente a un "Arquitecto de Ideas" de alguien que solo pide cosas a la IA?',
                options: [
                  "Usa mejores palabras",
                  "Planifica y estructura proyectos complejos paso a paso",
                  "Sabe programar",
                  "Paga más por la herramienta",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "No solo pide, sino que organiza la información para que la IA trabaje mejor.",
              },
              {
                text: "Si tu pedido a la IA es muy complejo y se confunde, ¿qué deberías hacer?",
                options: [
                  "Pedirle que vaya más rápido",
                  "Dividirlo en pasos más pequeños y claros",
                  "Cambiar de IA",
                  "Escribir más texto",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "A veces menos es más. Divide tareas grandes en pasos pequeños.",
              },
              {
                text: "¿Por qué T�a eres importante al trabajar con IA?",
                options: [
                  "Porque pagas la suscripción",
                  "Porque tú das la dirección y el criterio que la IA no tiene",
                  "Porque sabes arreglar computadoras",
                  "Porque tienes las contraseñas",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "La IA es la herramienta, pero tú eres quien decide qué hacer y cómo.",
              },
              {
                text: '¿Qué es el "Mapa del Arquitecto"?',
                options: [
                  "Un plano de construcción",
                  "Una herramienta para organizar ideas complejas antes de pedirlas a la IA",
                  "Un tipo de GPS",
                  "Un programa de diseño",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Te ayuda a estructurar proyectos grandes dividiéndolos en partes manejables.",
              },
              {
                text: "Si un proyecto es muy grande, ¿qué es mejor hacer?",
                options: [
                  "Pedirlo todo de una vez",
                  "Dividirlo en pasos pequeños y claros",
                  "Abandonarlo",
                  "Cambiar de IA",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Menos es más: divide tareas complejas en módulos simples.",
              },
            ],
            resources: [],
          },
        ],
      },
      {
        title: "Final del Camino: Certificación",
        badge: "Maestro de IA Aplicada",
        lessons: [
          {
            id: "final-exam",
            title: "Examen Final de Certificación (Módulos 1-4)",
            type: "quiz",
            questions: [
              {
                text: 'CASO INTEGRAL: Recibes un reporte de la IA sobre tendencias de mercado pero sospechas que algunos datos de 2024 son "alucinaciones". Según el curso, ¿cuál es el procedimiento correcto de un Alumno Aula GenIA?',
                options: [
                  "Aceptar el reporte porque los LLM nunca se equivocan en datos numéricos.",
                  'Aplicar el truco de validación: preguntar "¿Estás 100% seguro de estos datos?" y contrastar con fuentes de autoridad.',
                  "Borrar el chat y pedirle que use Google Search únicamente.",
                  "Rechazar el uso de IA para reportes y hacerlo manualmente de nuevo.",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "Recuerda que la IA es tu copiloto, no tu oráculo. El pensamiento crítico y la validación iterativa son tu mayor poder.",
              },
              {
                text: "CASO DE AUTOMATIZACI�N: Tienes 3 tareas acumuladas: A) Responder 50 correos similares al día. B) Decidir la estrategia de expansión de tu empresa a 5 años. C) Revisar la ortografía de un post. Según el Radar de Automatización, ¿cuál deberías delegar a la IA hoy mismo?",
                options: [
                  "La tarea B, porque es la más difícil y la IA piensa mejor.",
                  "La tarea A, porque es mecánica, repetitiva y consume bloques grandes de tiempo.",
                  "Ninguna, todas requieren criterio humano del 100%.",
                  "Solo la tarea C, porque es la más rápida.",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: 'Buscamos tareas que estén en el área de "Tareas Mecánicas" que consuman más de 30 minutos por sesión para liberar tu tiempo estratégico.',
              },
              {
                text: 'INGENIERÍA DE PROMPTS: Deseas que la IA analice el perfil de un cliente ideal para tu negocio. ¿Qué estructura de la "Fórmula AGIA" garantiza el mejor resultado?',
                options: [
                  "Contexto + Formato solamente.",
                  "Rol (Experto en ventas) + Contexto (Datos de tu negocio) + Meta (Perfil del cliente) + Restricciones (Evitar tecnicismos) + Formato (Tabla resumen).",
                  'Pedirle: "Dame un perfil de cliente ideal" de forma directa.',
                  "Usar solamente la Ventana de Contexto sin darle un Rol.",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: 'Una instrucción completa de un "Arquitecto de Ideas" siempre define quién es la IA, qué sabe, qué busca y cómo debe entregar el resultado.',
              },
              {
                text: "CASO DE ARQUITECTURA: Estás diseñando un flujo para automatizar la creación de facturas a partir de fotos de recibos. ¿Qué combinación de capacidades estás uniendo?",
                options: [
                  "Tokenización y LLM básico.",
                  "Multimodalidad (visión) y Extracción de Patrones estratégica.",
                  "Navegación web y Búsqueda semántica.",
                  "Traducción automática y Alucinación controlada.",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: 'La capacidad de "ver" archivos (multimodalidad) y entender la estructura de un documento es una de las aplicaciones más potentes del curso.',
              },
              {
                text: "CONCEPTO ESTRAT�0GICO: Según lo visto en el curso, ¿por qué los humanos que usan IA reemplazarán a los que no la usan?",
                options: [
                  "Porque la suscripción a la IA los hace más ricos.",
                  "Porque pueden procesar información, iterar y ejecutar a una velocidad y escala humanamente imposibles sin ayuda.",
                  "Porque la IA les da siempre la razón en las discusiones de negocio.",
                  "Porque ya no necesitan estudiar ni tener criterio propio.",
                ],
                correctAnswerHash:
                  "4f12c7b863c648b23f3b487f54cece480f0cb675827fb8408405e431a64669e9",
                tip: "La IA no es magia, es un amplificador de tus propias capacidades. Quien tiene un motor corre más que quien va a pie.",
              },
            ],
            resources: [],
          },
        ],
      },
    ],
  };
  // --- AGIA MÓDULO 5 START ---
  const agiaConfig = {
    categories: {
      "Productividad Ninja": { label: "Productividad", color: "teal", icon: "rocket_launch" },
      "Ventas & Persuasión": { label: "Ventas", color: "teal", icon: "campaign" },
      "Contenido & Redes": { label: "Marketing", color: "indigo", icon: "share" },
      "Finanzas Inteligentes": { label: "Finanzas", color: "slate", icon: "payments" },
      "Legal & Formalización": { label: "Legal", color: "slate", icon: "gavel" },
      "Estrategia & Lanzamiento": { label: "Estrategia", color: "indigo", icon: "flag" },
      "Diseño & Arte Digital": { label: "Diseño", color: "teal", icon: "palette" },
      "Operaciones & Procesos": { label: "Operaciones", color: "slate", icon: "settings_suggest" },
      "Liderazgo & Equipos": { label: "Liderazgo", color: "indigo", icon: "groups" },
      "Tecnología & Herramientas": { label: "Tecnología", color: "slate", icon: "terminal" },
      "Otros / Análisis": { label: "Análisis", color: "gray", icon: "analytics" }
    }
  };

  const module5 = {
    title: "Módulo 5: Casos Aplicados",
    badge: "Maestro de Casos",
    lessons: []
  };

  Object.entries(agiaConfig.categories).forEach(([name, cat]) => {
    module5.lessons.push({
      id: 'cat-' + name.replace(/\s+/g, '-').toLowerCase().replace(/[^\w-]/g, ''),
      title: (cat.label || name),
      type: "case_category",
      categoryId: name,
      icon: cat.icon,
      categoryColor: cat.color,
      resources: []
    });
  });

  essentialData.modules.splice(5, 0, module5);

  let casesData = [];
  async function loadPromptsDatabase() {
    try {
      console.log("= Secure Load: Solicitando prompts a Cloud Function...");
      const getPrompts = firebase.functions().httpsCallable("getPromptsData");
      const result = await getPrompts();
      if (result.data.success) {
        casesData = result.data.data;

        // --- AUTO-REFRESH UI IF ON A CASE LESSON ---
        const currentLesson = f(c.currentLessonId);
        if (currentLesson && currentLesson.lesson.type === 'case_category') {
          console.log("  Refreshing current lesson with loaded data...");
          h(c.currentLessonId);
        }
        // -------------------------------------------
        console.log(` Secure Load Success: ${casesData.length} prompts loaded.`);
      } else {
        console.error("Respuesta inválida:", result.data);
      }
    } catch (error) {
      console.error("Secure Load Error:", error);
    }
  }
  loadPromptsDatabase();

  function getEncryptionKey() { return [65, 71, 73, 65, 50, 48, 50, 53].map(e => String.fromCharCode(e)).join("") }
  function decryptPrompt(e) { try { if (!e) return ""; if (!e.startsWith("U2F")) return e; const t = CryptoJS.AES.decrypt(e, getEncryptionKey()); return t.toString(CryptoJS.enc.Utf8) || "Error: Corrupted Data" } catch (e) { return console.error("Decryption failed", e), "Error: Decryption Failed" } }

  window.openCaseDetail = function (caseId) {
    const cCase = casesData.find(c => c.id === caseId);
    if (!cCase) return;
    const container = document.getElementById("lesson-material-container");
    if (container) {
      container.innerHTML = renderCaseDetailHTML(cCase);
      lucide.createIcons();
    }
    if (window.innerWidth >= 1024) {
      const contentContainer = document.getElementById("lesson-content");
      if (contentContainer) {
        contentContainer.scrollTo({ top: 0, behavior: 'auto' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  window.backToCategory = function () {
    b();
  };

  function renderCaseListHTML(categoryId) {
    const filtered = casesData.filter(c => c.category === categoryId);
    if (filtered.length === 0) return '<div class="p-8 text-center text-slate-500">Cargando casos... (o no hay casos para esta categoría)</div>';

    return `
    <div class="max-w-5xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <header class="mb-8">
            <h1 class="text-3xl font-bold text-slate-900 mb-2">${categoryId}</h1>
            <p class="text-slate-500">Selecciona un caso práctico para comenzar.</p>
        </header>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${filtered.map(c => `
        <div onclick="openCaseDetail(${c.id})" class="bg-white p-5 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
             <div class="flex items-center gap-2.5 mb-3">
                <div class="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                    <i data-lucide="${c.locked ? 'lock' : 'zap'}" class="w-4 h-4 ${c.locked ? 'text-slate-400' : 'text-teal-500'}"></i>
                </div>
                <h3 class="font-bold text-slate-800 text-sm leading-tight flex-1">${c.title}</h3>
             </div>
             <p class="text-[11px] text-slate-500 line-clamp-2 bg-slate-50 p-2 rounded-lg border border-slate-100 italic">"${c.problem || c.description}"</p>
             <div class="mt-3 flex items-center justify-between">
                <span class="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">${c.difficulty || 'Básico'}</span>
                <span class="text-[10px] text-slate-400 flex items-center gap-1">Ver Caso <i data-lucide="arrow-right" class="w-3 h-3"></i></span>
             </div>
        </div>
      `).join('')}</div>`;
  }

  function renderCaseDetailHTML(c) {
    // Logic for Navigation
    const categoryCases = casesData.filter(item => item.category === c.category);
    // FIXED: Ensure ID comparison is type-safe
    const currentIndex = categoryCases.findIndex(item => Number(item.id) === Number(c.id));
    const prevCase = currentIndex > 0 ? categoryCases[currentIndex - 1] : null;
    const nextCase = currentIndex !== -1 && currentIndex < categoryCases.length - 1 ? categoryCases[currentIndex + 1] : null;

    // Helper: Robo-Card Navigation Button (Desktop & Mobile Optimized)
    const renderNavBtn = (targetCase, type) => {
      // Empty state (spacer)
      if (!targetCase) {
        return `<div class="hidden md:block flex-1"></div>`;
      }

      const isPrev = type === 'prev';

      // Card Design
      return `
        <button onclick="openCaseDetail(${targetCase.id})" 
          class="group relative w-full flex-1 flex items-stretch ${isPrev ? 'justify-start text-left' : 'justify-end text-right'} 
                 p-5 md:p-6 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg transition-all duration-300
                 active:scale-[0.98]">
           
           ${isPrev ? `
             <div class="mr-5 flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 border border-slate-100 group-hover:border-indigo-100 transition-colors shadow-sm self-center">
                <i data-lucide="arrow-left" class="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors"></i>
             </div>
           ` : ''}

           <div class="flex-1 min-w-0 py-1 flex flex-col justify-center">
             <span class="block text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 group-hover:text-indigo-500 transition-colors">
                ${isPrev ? 'Anterior' : 'Siguiente'}
             </span>
             <span class="block text-sm md:text-lg font-bold text-slate-700 leading-snug group-hover:text-slate-900 line-clamp-2">
                ${targetCase.title}
             </span>
           </div>

           ${!isPrev ? `
             <div class="ml-5 flex-shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-indigo-50 border border-slate-100 group-hover:border-indigo-100 transition-colors shadow-sm self-center">
                <i data-lucide="arrow-right" class="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors"></i>
             </div>
           ` : ''}
           
        </button>
      `;
    };

    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
            
                <!-- Compact Header with Back Button -->
            <header class="mb-8 md:mb-10">
                <button onclick="backToCategory()" class="group inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors text-sm font-medium mb-6">
                    <i data-lucide="chevron-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform"></i>
                    <span>${c.category}</span>
                </button>
                
                <div class="flex flex-wrap items-center gap-3 mb-4">
                    <span class="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-slate-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold uppercase tracking-wider">
                        ${c.difficulty || 'General'}
                    </span>
                </div>
                
                <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    ${c.title}
                </h1>
            </header>

            <!-- Main Content -->
            <div class="space-y-8">
                
                <!-- The Challenge Card -->
                <section class="relative bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 md:p-8 border border-amber-100/80">
                    <div class="flex items-center gap-2.5 mb-3">
                        <div class="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                            <i data-lucide="target" class="w-4 h-4 text-amber-600"></i>
                        </div>
                        <h2 class="text-sm font-bold text-amber-800 uppercase tracking-wide">El Desafío</h2>
                    </div>
                    <p class="text-base md:text-lg text-slate-700 leading-relaxed italic">
                        "${c.problem || c.description}"
                    </p>
                </section>

                <!-- Prompt Master Card -->
                <section class="bg-gradient-to-br from-indigo-50 to-white p-6 md:p-8 rounded-3xl border border-indigo-100 shadow-md relative group">
                     <div class="flex items-center gap-3 mb-4">
                        <span class="p-2 rounded-lg bg-indigo-100 text-indigo-600"><i data-lucide="sparkles" class="w-5 h-5"></i></span>
                        <h3 class="text-sm font-black uppercase tracking-wider text-indigo-500">La Solución (Prompt Maestro)</h3>
                     </div>
                     <div class="bg-white p-5 rounded-2xl border border-indigo-200 shadow-inner">
                        <pre class="text-sm md:text-base font-mono text-slate-700 whitespace-pre-wrap leading-relaxed">${decryptPrompt(c.agiaPromptTagged)}</pre>
                     </div>
                </section>
                
                ${(c.fineTuning && c.fineTuning.length > 0) ? `
                <!-- Fine Tuning / Checklist Card -->
                <section class="bg-gradient-to-br from-emerald-50 to-teal-50/30 p-5 md:p-6 rounded-2xl border border-emerald-100/60 shadow-sm">
                    <div class="flex items-center gap-2.5 mb-4">
                        <div class="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                            <i data-lucide="list-checks" class="w-4 h-4 text-emerald-600"></i>
                        </div>
                        <h3 class="text-sm font-bold text-emerald-800 uppercase tracking-wide">Ajuste Fino & Calidad</h3>
                    </div>
                    <ul class="space-y-3">
                        ${c.fineTuning.map(item => `
                        <li class="flex items-start gap-3 bg-white/80 p-3 rounded-xl border border-emerald-100 shadow-sm">
                            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"></i>
                            <span class="text-xs sm:text-sm text-slate-700 leading-snug">${item}</span>
                        </li>`).join('')}
                    </ul>
                </section>
                ` : ''}

                ${c.suggestedAI ? `
                <!-- AI Tool Recommendation Card -->
                <section class="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm">
                        ${(function () {
          const aiText = (c.suggestedAI || '').toLowerCase();
          const tools = [];

          // SVGs 
          const svgChatGPT = '<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.2819 9.821C22.6198 8.68099 22.6337 7.47092 22.322 6.32229C22.0103 5.17366 21.3848 4.13264 20.517 3.31207C19.5279 2.37392 18.2751 1.75377 16.9269 1.53389C15.5787 1.314 14.1976 1.50472 12.9613 2.08073C12.0502 1.28507 10.9224 0.772503 9.71959 0.609329C8.51677 0.446154 7.29239 0.639909 6.20075 1.16535C5.10911 1.69079 4.19903 2.52461 3.5813 3.56349C2.96356 4.60238 2.66483 5.80054 2.72259 7.00957C1.67668 7.43406 0.772107 8.14186 0.105765 9.05326C-0.560578 9.96466 -0.964268 11.0441 -1.06093 12.1708C-1.15758 13.2975 -0.944169 14.4306 -0.442706 15.4407C0.0587571 16.4508 0.829336 17.3003 1.78459 17.8989C1.44674 19.0389 1.43283 20.249 1.74454 21.3976C2.05624 22.5462 2.68172 23.5872 3.54959 24.4078C4.53865 25.346 5.79148 25.9661 7.13967 26.186C8.48787 26.4059 9.8689 26.2152 11.1053 25.6392C12.0163 26.4348 13.1442 26.9474 14.347 27.1106C15.5498 27.2737 16.7742 27.08 17.8658 26.5546C18.9575 26.0291 19.8676 25.1953 20.4853 24.1564C21.103 23.1175 21.4018 21.9194 21.344 20.7103C22.3899 20.2858 23.2945 19.5781 23.9608 18.6667C24.6272 17.7553 25.0309 16.6758 25.1275 15.5491C25.2242 14.4224 25.0108 13.2893 24.5093 12.2792C24.0079 11.2691 23.2373 10.4196 22.2819 9.821ZM13.6069 25.157C12.5272 25.1583 11.4743 24.8241 10.5901 24.1989L10.7697 24.0969L15.6588 21.2709C15.8107 21.184 15.9375 21.0585 16.0256 20.9075C16.1137 20.7565 16.16 20.5853 16.16 20.4109V12.5689L18.2037 13.7489C18.2164 13.7555 18.2273 13.7651 18.2355 13.7769C18.2436 13.7887 18.2489 13.8024 18.2507 13.8167V20.4759C18.2483 21.716 17.7536 22.9044 16.8745 23.7821C15.9953 24.6599 14.8053 25.1539 13.5638 25.157H13.6069ZM3.84392 20.7103C3.30168 19.7768 3.07792 18.695 3.20392 17.6263L3.38359 17.7283L8.27259 20.5553C8.42317 20.6426 8.59449 20.6886 8.76892 20.6886C8.94336 20.6886 9.11468 20.6426 9.26526 20.5553L15.2266 17.1123V19.4723C15.2275 19.4869 15.2248 19.5016 15.2187 19.5149C15.2127 19.5282 15.2036 19.5397 15.1922 19.5483L10.2386 22.4123C9.15916 23.0321 7.89395 23.2437 6.67208 23.0098C5.45022 22.776 4.34816 22.112 3.54959 21.1342L3.84392 20.7103ZM2.28159 8.87473C2.82101 7.94064 3.64135 7.20267 4.62759 6.76373V13.5317C4.62558 13.7046 4.67026 13.875 4.75709 14.0253C4.84392 14.1755 4.96963 14.3001 5.12059 14.3863L11.0819 17.8253L9.03826 19.0053C9.02474 19.0137 9.00932 19.0189 8.99335 19.0202C8.97739 19.0216 8.96131 19.0192 8.94659 19.0133L3.99292 16.1453C2.91479 15.5237 2.08653 14.5488 1.64696 13.3881C1.20739 12.2274 1.18342 10.9514 1.57892 9.77473C1.76192 9.43107 1.99992 9.12273 2.28159 8.87473ZM19.5222 13.6107L13.5609 10.1717L15.6046 8.99173C15.6181 8.98336 15.6335 8.97829 15.6495 8.97693C15.6655 8.97556 15.6816 8.97794 15.6963 8.98386L20.6499 11.8519C21.4675 12.3205 22.1332 13.0082 22.5748 13.8405C23.0163 14.6729 23.2163 15.6168 23.1514 16.5619C23.0865 17.507 22.7593 18.4139 22.2061 19.1774C21.653 19.9408 20.8962 20.5305 20.0262 20.8809V14.1129C20.0279 13.9401 19.9832 13.7699 19.8965 13.6198C19.8098 13.4697 19.6843 13.3451 19.5336 13.2589L19.5222 13.6107ZM21.5622 10.3347L21.3826 10.2327L16.4936 7.40573C16.343 7.31848 16.1717 7.27251 15.9972 7.27251C15.8228 7.27251 15.6515 7.31848 15.5009 7.40573L9.53959 10.8487V8.48873C9.53867 8.47413 9.54144 8.45955 9.54761 8.44638C9.55378 8.43321 9.56318 8.42183 9.57492 8.41323L14.5286 5.55573C15.3467 5.08767 16.2791 4.86066 17.2194 4.90108C18.1597 4.9415 19.0693 5.24758 19.8446 5.78461C20.62 6.32165 21.2294 7.06871 21.6033 7.93693C21.9771 8.80516 22.1005 9.76007 21.9592 10.6937L21.5622 10.3347ZM8.48326 15.3927L6.43959 14.2127C6.42693 14.2061 6.41599 14.1965 6.40787 14.1847C6.39975 14.1729 6.39475 14.1592 6.39326 14.1449V7.48573C6.39544 6.53756 6.6566 5.60856 7.14799 4.79963C7.63937 3.9907 8.34243 3.33308 9.18172 2.89714C10.021 2.4612 10.965 2.26318 11.9102 2.32402C12.8553 2.38487 13.7663 2.70222 14.5426 3.24073L14.3629 3.34273L9.47392 6.16873C9.32203 6.25568 9.19523 6.38117 9.10714 6.53215C9.01906 6.68314 8.97276 6.85432 8.97292 7.02873L8.48326 15.3927ZM9.53959 13.0209L12.3833 11.3769L15.2266 13.0209V16.3089L12.3833 17.9529L9.53959 16.3089V13.0209Z" fill="#10a37f"/></svg>';
          const svgClaude = '<svg viewBox="0 0 24 24" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3083 3.35334L12.6945 15.0606L15.8174 5.31787C16.0193 4.68709 16.5823 4.25 17.2407 4.25H23.25L17.3083 3.35334Z" fill="#D97757"/><path d="M17.3083 3.35334L12.6945 15.0606L8.08072 3.35334C7.81284 2.93116 7.19986 2.93116 6.93198 3.35334L0.75 15.0606L6.93198 20.8972C7.26683 21.3194 7.94678 21.3194 8.28163 20.8972L12.6945 15.0606L17.1074 20.8972C17.4422 21.3194 18.1222 21.3194 18.457 20.8972L23.25 15.0606L17.3083 3.35334Z" fill="#D97757"/></svg>';
          // Improved Gemini SVG with simpler gradient or solid fill as fallback if gradients fail to load
          const svgGemini = '<svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 12.0001C22.5 17.7501 17.8 22.5001 12 22.5001C6.2 22.5001 1.5 17.7501 1.5 12.0001C1.5 6.2501 6.2 1.5001 12 1.5001C17.8 1.5001 22.5 6.2501 22.5 12.0001Z" fill="#E8EBFA" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0305 4.39709C12.3536 7.64379 14.9287 10.3705 18.2366 10.8711C18.2575 10.8741 18.2618 10.8763 18.2661 10.8806C18.2811 10.9021 18.2811 10.9407 18.2661 10.9622C18.2597 10.9665 18.2532 10.9686 18.2366 10.9717C14.9287 11.4722 12.3536 14.1989 12.0305 17.4456C12.0284 17.4628 12.0263 17.4736 12.0219 17.4779C12.0069 17.4886 11.9833 17.4886 11.9683 17.4779C11.9618 17.4714 11.9597 17.465 11.9576 17.4456C11.6345 14.1989 9.05934 11.4722 5.75139 10.9717C5.72993 10.9696 5.72565 10.9653 5.72136 10.9622C5.70632 10.9407 5.70632 10.9021 5.72136 10.8806C5.72778 10.8763 5.73425 10.8741 5.75139 10.8711C9.05934 10.3705 11.6345 7.64379 11.9576 4.39709C11.9597 4.37996 11.9618 4.36921 11.9683 4.36492C11.9747 4.36063 11.9876 4.36063 11.9962 4.36492C12.0155 4.3735 12.0155 4.38422 12.0305 4.39709Z" fill="url(#paint0_linear_141_2)" /><defs><linearGradient id="paint0_linear_141_2" x1="6.16797" y1="10.923" x2="17.8172" y2="10.923" gradientUnits="userSpaceOnUse"><stop stop-color="#4E7CCF" /><stop offset="1" stop-color="#D5616D" /></linearGradient></defs></svg>';

          // Detector logic
          if (aiText.includes('chatgpt') || aiText.includes('gpt') || aiText.includes('openai')) {
            tools.push({ name: 'ChatGPT', svg: svgChatGPT, url: 'https://chat.openai.com', color: 'bg-[#74aa9c]' });
          }
          if (aiText.includes('claude') || aiText.includes('anthropic')) {
            tools.push({ name: 'Claude', svg: svgClaude, url: 'https://claude.ai', color: 'bg-[#d97757]' });
          }
          if (aiText.includes('gemini') || aiText.includes('google') || aiText.includes('bard')) {
            tools.push({ name: 'Gemini', svg: svgGemini, url: 'https://gemini.google.com', color: 'bg-[#4b77c5]' });
          }

          // Fallback if no specific tool detected
          if (tools.length === 0) {
            tools.push({ name: 'AI Genérica', svg: '<i data-lucide="bot" class="w-8 h-8 text-slate-600"></i>', url: '#', color: 'bg-slate-500' });
          }

          // Render Logic
          return `
                                <div class="bg-gradient-to-br from-slate-50 via-white to-teal-50/30 p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
                                    <div class="flex items-center -space-x-3">
                                        ${tools.map(t => `
                                            <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center p-2.5 overflow-hidden z-10 hover:z-20 hover:scale-105 transition-transform" title="${t.name}">
                                                ${t.svg}
                                            </div>
                                        `).join('')}
                                    </div>
                                    
                                    <div class="flex-1 text-center md:text-left">
                                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Herramienta${tools.length > 1 ? 's' : ''} Recomendada${tools.length > 1 ? 's' : ''}</p>
                                        <div class="text-base md:text-lg font-bold text-slate-800 leading-tight flex flex-wrap justify-center md:justify-start gap-2">
                                            ${tools.map((t, idx) => `
                                                <span>${t.name}${idx < tools.length - 1 ? '<span class="text-slate-300 mx-1">/</span>' : ''}</span>
                                            `).join('')}
                                        </div>
                                        <p class="text-xs text-slate-500 mt-1">Optimizado para mejores resultados con ${tools.length > 1 ? 'estas IAs' : 'esta IA'}</p>
                                    </div>

                                    <div class="flex flex-col sm:flex-row gap-2">
                                        ${tools.map(t => `
                                            <button onclick="copyAndOpenAI(${c.id}, '${t.url}')" class="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
                                                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                                                <span>Abrir ${t.name}</span>
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
        })()}
                    </div>
                </section>
                ` : ''}

                <!-- Insights Grid -->
                <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${c.solutionPlus ? `
                    <div class="sm:col-span-2 bg-gradient-to-br from-indigo-50 to-violet-50/50 rounded-2xl p-6 border border-indigo-100/80">
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <i data-lucide="lightbulb" class="w-4 h-4 text-indigo-600"></i>
                            </div>
                            <div>
                                <h3 class="text-sm font-bold text-indigo-900 mb-2">¿Por qué funciona?</h3>
                                <p class="text-indigo-800/90 leading-relaxed text-sm">${c.solutionPlus}</p>
                            </div>
                        </div>
                    </div>` : ''}

                    <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                <i data-lucide="compass" class="w-4 h-4 text-emerald-600"></i>
                            </div>
                            <div>
                                <h3 class="text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2">Estrategia</h3>
                                <p class="text-slate-600 leading-relaxed text-sm">${c.exampleTip || "Sigue la estructura maestra."}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">Validación</h3>
                                <p class="text-slate-600 leading-relaxed text-sm">${c.validationTip || "Verifica el resultado."}</p>
                            </div>
                        </div>
                    </div>
                </section>

                ${c.verticalMatrix && c.verticalMatrix.length > 0 ? `
                <!-- Adaptation Matrix -->
                <section class="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm">
                    <div class="px-5 py-4 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2">
                        <i data-lucide="git-branch" class="w-4 h-4 text-slate-400"></i>
                        <h3 class="font-semibold text-slate-800 text-sm">Matriz de Adaptación</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead class="bg-slate-50/50">
                                <tr class="text-left text-xs text-slate-500 uppercase tracking-wider">
                                    <th class="px-5 py-3 font-semibold">Rubro</th>
                                    <th class="px-5 py-3 font-semibold">Contexto</th>
                                    <th class="px-5 py-3 font-semibold">Ajuste</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${c.verticalMatrix.map(v => `
                                    <tr class="hover:bg-slate-50/50 transition-colors">
                                        <td class="px-5 py-3.5 font-medium text-slate-900">${v.rubro}</td>
                                        <td class="px-5 py-3.5 text-slate-600">${v.contexto}</td>
                                        <td class="px-5 py-3.5 text-slate-500 italic">${v.ajuste}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </section>
                ` : ''}
            </div>

            <!-- Navigation Footer -->
            <nav class="mt-12 pt-8 border-t border-slate-200/80">
                <p class="text-xs text-slate-400 font-medium mb-5 text-center">Navegar entre casos</p>
                <div class="flex flex-col sm:flex-row items-stretch gap-4 w-full">
                    ${renderNavBtn(prevCase, 'prev')}
                    ${renderNavBtn(nextCase, 'next')}
                </div>
            </nav>

        </div>
    `;
  }

  window.copyPromptText = function (text) {
    navigator.clipboard.writeText(text);
    A("¡Prompt copiado al portapapeles!");
  };

  window.copyAndOpenAI = function (caseId, targetUrl) {
    const cCase = casesData.find(c => c.id === caseId);
    if (!cCase) return;
    const prompt = decryptPrompt(cCase.agiaPromptTagged);
    navigator.clipboard.writeText(prompt);
    A("¡Prompt copiado! Abriendo IA...");

    let url = targetUrl;
    if (!url) {
      // Fallback logic if no specific URL provided (legacy behavior)
      const aiName = (cCase.suggestedAI || '').toLowerCase();
      url = '#';
      if (aiName.includes('chatgpt') || aiName.includes('gpt') || aiName.includes('openai')) url = 'https://chat.openai.com';
      else if (aiName.includes('claude') || aiName.includes('anthropic')) url = 'https://claude.ai';
      else if (aiName.includes('gemini') || aiName.includes('google') || aiName.includes('bard')) url = 'https://gemini.google.com';
    }

    setTimeout(() => window.open(url, '_blank'), 300);
  };

  // --- AGIA MÓDULO 5 END ---
  const n =
    r === "ia-aplicada-starter"
      ? { ...essentialData, title: "IA Aplicada · Starter" }
      : essentialData;
  if (!n) return void console.error("Curso no encontrado");
  const i = n.modules.flatMap((e) => e.lessons);
  let l = null,
    c = {
      completedLessons: [],
      currentLessonId: i.length > 0 ? i[0].id : null,
      unlockedBadges: [],
    },
    d = null,
    u = null,
    p = !1;
  const m = {
    userName: document.getElementById("user-name"),
    userAvatar: document.getElementById("user-avatar"),
    userProfile: document.getElementById("user-profile-container"),
    logoutButton: document.getElementById("logout-button"),
    courseTitle: document.getElementById("course-title"),
    progressBar: document.getElementById("progress-bar"),
    progressText: document.getElementById("progress-text"),
    modulesContainer: document.getElementById("modules-container"),
    lessonTitle: document.getElementById("lesson-title"),
    lessonMaterialContainer: document.getElementById(
      "lesson-material-container",
    ),
    navigationButtons: document.getElementById("navigation-buttons"),
    prevBtn: document.getElementById("prev-lesson-btn"),
    mainActionBtn: document.getElementById("main-action-btn"),
    toast: document.getElementById("toast-notification"),
    toastMessage: document.getElementById("toast-message"),
    badgeToast: document.getElementById("badge-toast"),
    badgeMessage: document.getElementById("badge-message"),
    completionModalOverlay: document.getElementById("completion-modal-overlay"),
    completionModal: document.getElementById("completion-modal"),
    modalUserName: document.getElementById("modal-user-name"),
    modalCourseName: document.getElementById("modal-course-name"),
    certificateLink: document.getElementById("certificate-link"),
    reviewCourseBtn: document.getElementById("review-course-btn"),
    closeModalBtn: document.getElementById("close-modal-btn"),
    learningTabs: document.getElementById("learning-tabs"),
    notesTextarea: document.getElementById("notes-textarea"),
    notesSaveStatus: document.getElementById("notes-save-status"),
    resourceFileInput: document.getElementById("resource-file-input"),
    uploadResourcesBtn: document.getElementById("upload-resources-btn"),
    uploadProgress: document.getElementById("upload-progress"),
    resourcesList: document.getElementById("resources-list"),
    userResourceList: document.getElementById("user-resource-list"),
    taskInput: document.getElementById("task-input"),
    addTaskBtn: document.getElementById("add-task-btn"),
    taskList: document.getElementById("task-list"),
    tabMaterialPanel: document.getElementById("tab-material"),
    integratedResourcesArea: document.getElementById(
      "integrated-resources-container",
    ),
    pdfModalOverlay: document.getElementById("pdf-modal-overlay"),
    pdfModal: document.getElementById("pdf-modal"),
    pdfModalContent: document.getElementById("pdf-modal-content"),
    pdfModalTitle: document.getElementById("pdf-modal-title"),
    pdfModalCloseBtn: document.getElementById("pdf-modal-close-btn"),
    pdfIframe: document.getElementById("pdf-iframe"),
    supportForm: document.getElementById("support-form"),
    supportSubmitBtn: document.getElementById("support-submit-btn"),
    supportBtnText: document.getElementById("support-btn-text"),
    supportSpinner: document.getElementById("support-spinner"),
    supportFormStatus: document.getElementById("support-form-status"),
    sidebar: document.getElementById("course-sidebar"),
    sidebarToggle: document.getElementById("sidebar-toggle-desktop"),
    tabsNavContainer: document.getElementById("tabs-navigation-container"),
  };
  function g() {
    if (0 === i.length) return !1;
    return new Set(c.completedLessons).size >= i.length;
  }
  function f(e) {
    for (let a = 0; a < n.modules.length; a++) {
      const t = n.modules[a],
        s = t.lessons.findIndex((a) => a.id === e);
      if (-1 !== s) return { lesson: t.lessons[s], moduleIndex: a, module: t };
    }
    return null;
  }
  function b() {
    (!c.currentLessonId && i.length > 0 && (c.currentLessonId = i[0].id),
      (m.courseTitle.textContent = n.title),
      (function () {
        if (!m.modulesContainer) return;

        // Preserve sidebar scroll position
        const previousScrollTop = m.modulesContainer.scrollTop;

        // Render Sidebar Content
        m.modulesContainer.innerHTML = n.modules
          .map((e, a) => {
            const t = e.lessons
              .map((e) => {
                const a = c.completedLessons.includes(e.id),
                  t = c.currentLessonId === e.id;
                let s = "text-gray-600 hover:bg-slate-50",
                  o = a
                    ? "check-circle-2"
                    : "quiz" === e.type
                      ? "edit-3"
                      : "video" === e.type
                        ? "play"
                        : "file-text",
                  r = a
                    ? "text-green-500"
                    : "quiz" === e.type
                      ? "text-amber-500"
                      : "video" === e.type
                        ? "text-teal-500"
                        : "text-slate-400";
                t &&
                  ((s = "bg-teal-50 text-teal-700 font-semibold"),
                    (o =
                      "video" === e.type
                        ? "play-circle"
                        : "quiz" === e.type
                          ? "help-circle"
                          : "file-text"),
                    (r = "text-teal-600"));
                const n =
                  { video: "video", resource: "book-open", quiz: "edit-3", case_category: "folder" }[
                  e.type
                  ] || "file";
                return `<li class="lesson-item" data-lesson-id="${e.id}"><a href="#" class="flex items-center px-4 py-2 ml-2 rounded-md transition-colors ${s}"><i data-lucide="${o}" class="h-4 w-4 mr-3 flex-shrink-0 ${r}"></i><span class="flex-1 text-[11px] whitespace-normal leading-tight">${e.title}</span><i data-lucide="${n}" class="h-3.5 w-3.5 ml-2 opacity-30"></i></a></li>`;
              })
              .join(""),
              s = "chevron-down";
            return `<div class="accordion-item"><button class="accordion-header w-full flex justify-between items-center p-3 rounded-md hover:bg-slate-50 text-left"><span class="font-semibold text-xs tracking-wide text-gray-800">${e.title}</span><i data-lucide="${s}" class="h-4 w-4 transition-transform text-gray-400"></i></button><div class="accordion-content open"><ul class="py-1 space-y-0.5">${t}</ul></div></div>`;
          })
          .join("");

        // Restore sidebar scroll position
        m.modulesContainer.scrollTop = previousScrollTop;

        // Attach Listeners
        m.modulesContainer
          .querySelectorAll(".lesson-item a")
          .forEach((e) => {
            e.addEventListener("click", (e) => {
              e.preventDefault();
              const a = e.currentTarget.closest(".lesson-item");
              if (a) {
                h(a.dataset.lessonId);
              }
            });
          });

        m.modulesContainer
          .querySelectorAll(".accordion-item")
          .forEach((e) => {
            const a = e.querySelector(".accordion-header");
            a &&
              a.addEventListener("click", () => {
                const e = a.nextElementSibling,
                  t = a.querySelector("i"),
                  s = e.classList.toggle("open");
                t &&
                  "chevron-down" === t.getAttribute("data-lucide") &&
                  (t.style.transform = s
                    ? "rotate(180deg)"
                    : "rotate(0deg)");
              });
          });
      })());
    const e = f(c.currentLessonId);
    (e &&
      ((m.lessonTitle.textContent = e.lesson.title),
        (function (e) {
          let a = "";
          u && (u.pause(), (u = null));
          if (window.currentQuizHandler) {
            const e = document.getElementById("check-quiz-btn");
            e && e.removeEventListener("click", window.currentQuizHandler);
          }
          m.tabsNavContainer &&
            ("quiz" === e.type || "taller" === e.type
              ? (m.tabsNavContainer.classList.add("hidden"), F("tab-clases"))
              : m.tabsNavContainer.classList.remove("hidden"));
          switch (e.type) {
            case "taller":
              a =
                '\n                        <div class="bg-white p-8 md:p-12 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center min-h-[400px]">\n                            <div class="bg-gradient-to-br from-teal-100 to-blue-100 p-6 rounded-full mb-6 shadow-inner">\n                                <i data-lucide="target" class="h-16 w-16 text-teal-600"></i>\n                            </div>\n                            <h3 class="text-3xl font-bold text-gray-900 mb-3">Radar de Automatización Pro</h3>\n                            <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-6">Herramienta Interactiva</span>\n                            <p class="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">\n                                Accede a nuestra herramienta exclusiva para diagnosticar, priorizar y automatizar tus tareas diarias. \n                                <br class="hidden md:block">Descubre dónde está tu verdadero retorno de inversión (ROI) con IA.\n                            </p>\n                            <a href="radar-automatizacion-pro.html" target="_blank"\n                                class="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3 text-lg group">\n                                <span>Iniciar Aplicación</span>\n                                <i data-lucide="external-link" class="h-5 w-5 group-hover:translate-x-1 transition-transform"></i>\n                            </a>\n                            <p class="text-sm text-slate-400 mt-6 flex items-center gap-2">\n                                <i data-lucide="info" class="h-4 w-4"></i> Se abrirá en una nueva pestaña para no perder tu progreso.\n                            </p>\n                        </div>';
              break;
            case "video":
              a = e.videoUrl
                ? `<div class="flex flex-col gap-4 mt-8">\n                                <div class="video-wrapper-optimized">\n                                    <video id="course-video" controls>\n                                        <source id="course-video-source" data-src="${e.videoUrl || ""}" type="video/mp4">\n                                        ${e.transcriptionUrl ? '<track id="caption-track" kind="subtitles" srclang="es" label="Español" default>' : ""}\n                                        Tu navegador no soporta el elemento de video.\n                                    </video>\n                                </div>\n                                <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-[1200px] mx-auto w-full">\n                                ${e.transcriptionUrl ? '\n                                    <button id="toggle-subtitles-btn" class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-colors">\n                                        <i data-lucide="captions" class="h-5 w-5"></i>\n                                        <span>Desactivar Subtítulos</span>\n                                    </button>\n                                    <button id="transcription-button" class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-colors">\n                                        <i data-lucide="download" class="h-5 w-5"></i>\n                                        <span>Descargar Transcripción</span>\n                                    </button>\n                                ' : '\n                                    <div class="sm:col-span-2">\n                                        <button class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 text-slate-400 rounded-lg font-semibold cursor-not-allowed" disabled>\n                                            <i data-lucide="captions-off" class="h-5 w-5"></i>\n                                            <span>Subtítulos No Disponibles</span>\n                                        </button>\n                                    </div>\n                                '}\n                                </div>\n                            </div>`
                : '<div class="aspect-w-16 aspect-h-9"><div class="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-white"><i data-lucide="play-circle" class="h-20 w-20 text-slate-500"></i><p class="absolute">Contenido del video</p></div></div>';
              break;
            case "resource":
              a =
                '<div class="bg-white p-12 border border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-600 text-center">\n                            <i data-lucide="library-big" class="h-16 w-16 text-teal-500 mb-4"></i>\n                            <h3 class="text-xl font-bold text-gray-900">Lección de Consulta</h3>\n                            <p class="mt-2 text-gray-600 max-w-md">Esta lección se compone de recursos teóricos y enlaces externos que puedes consultar en la pestaña "Materiales".</p>\n                        </div>';
              break;
            case "quiz": {
              if (!e.questions || 0 === e.questions.length) {
                a =
                  '<p class="text-center text-slate-500">Este quiz no tiene preguntas configuradas.</p>';
                break;
              }
              const t = c.completedLessons.includes(e.id);
              let s = e.questions
                .map((a, s) => {
                  const o = a.options
                    .map((o, r) => {
                      if (t) {
                        return `<div class="${r === a.correctAnswer ? "quiz-option correct" : "quiz-option opacity-60"} border-2 p-4 rounded-lg cursor-default">${o}</div>`;
                      }
                      return `<div class="quiz-option border-2 border-slate-300 p-4 rounded-lg cursor-pointer hover:bg-slate-100" data-index="${r}" data-question-id="${`quiz-${e.id}-q-${s}`}">${o}</div>`;
                    })
                    .join(""),
                    r = a.tip
                      ? `\n                                <div class="mt-2">\n                                    <button onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-xs text-teal-600 font-bold flex items-center gap-1 hover:text-teal-700 transition-colors">\n                                        <i data-lucide="lightbulb" class="h-3.5 w-3.5"></i> ¿Necesitas una pista?\n                                    </button>\n                                    <p class="hidden text-[11px] text-slate-500 mt-2 italic bg-teal-50 p-2 rounded-lg border border-teal-100 leading-relaxed shadow-sm">\n                                        ${a.tip}\n                                    </p>\n                                </div>`
                      : "";
                  return `<div class="space-y-4 mb-8 p-4 bg-white rounded-xl border border-slate-200 shadow-sm" ${t ? "" : `id="quiz-${e.id}-q-${s}"`}>\n                                        <h3 class="text-lg font-bold text-slate-800">${s + 1}. ${a.text}</h3>\n                                        <div class="space-y-2.5">${o}</div>\n                                        ${r}\n                                    </div>`;
                })
                .join("");
              if (t) {
                a = `${s}<p class="text-sm text-slate-500 mt-4 font-semibold text-center p-4 bg-slate-100 rounded-md">${"Ya has completado este quiz. Puedes revisar las respuestas correctas."}</p>`;
              } else
                a = `<div id="quiz-container" class="max-w-3xl mx-auto">${s}<div class="flex justify-center mt-6"><button id="check-quiz-btn" class="bg-slate-900 text-white font-bold px-10 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:scale-105">Verificar Respuestas</button></div></div>`;
              break;
            }
            case "case_category":
              const catCases = casesData.filter(item => item.category === e.categoryId);
              // FIXED: Always show list first ("Index of Cases")
              a = renderCaseListHTML(e.categoryId);
              // Adding version badge
              const vBadge = '<div style="position:fixed;bottom:10px;right:10px;background:black;color:white;padding:5px;font-size:10px;opacity:0.6;z-index:9999">v2.0.23-R</div>';
              a += vBadge;
              break;
            default:
              a = "<p>Tipo de lección no reconocido.</p>";
          }
          const t = document.getElementById("lesson-material-container");
          t && (t.innerHTML = a);

          if (window.innerWidth >= 1024) {
            const contentContainer = document.getElementById("lesson-content");
            if (contentContainer) {
              contentContainer.scrollTo({ top: 0, behavior: 'auto' });
            }
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          if (
            ((async function (e) {
              if (!m.resourcesList || !m.integratedResourcesArea) return;
              const a = f(e.id);
              if (!a || !a.module) return;
              const t = a.module.lessons.flatMap((e) => e.resources || []),
                o = Array.from(new Map(t.map((e) => [e.name, e])).values());
              if (o.length > 0) {
                (m.integratedResourcesArea.classList.remove("hidden"),
                  (m.resourcesList.innerHTML =
                    '<div class="col-span-full py-5"><p class="text-gray-500 animate-pulse">Cargando recursos del módulo...</p></div>'));
                const e = await Promise.all(
                  o.map(async (e) => {
                    let a = e.url;
                    if (e.url.startsWith("gs://"))
                      try {
                        a = await X(s, e.url);
                      } catch (a) {
                        console.error("Error resolviendo recurso:", e.name, a);
                      }
                    const t = !e.external && a.toLowerCase().includes(".pdf"),
                      o = e.external
                        ? "link"
                        : t
                          ? "file-text"
                          : "download-cloud",
                      r = t ? "button" : "a";
                    return `<${r} ${t ? `data-pdf-url="${a}" data-pdf-title="${e.name}"` : `href="${a}"`} ${e.external ? 'target="_blank" rel="noopener noreferrer"' : t ? "" : "download"} class="resource-item flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:bg-slate-50 hover:border-teal-500 transition-all duration-200 group text-left">\n                                    <div class="bg-teal-50 p-2 rounded-lg mr-4 group-hover:bg-teal-100 transition-colors"><i data-lucide="${o}" class="h-6 w-6 text-teal-600"></i></div>\n                                    <span class="flex-1 font-medium text-gray-700 group-hover:text-teal-700 truncate">${e.name}</span>\n                                    <i data-lucide="chevron-right" class="h-5 w-5 text-gray-400 group-hover:text-teal-500 transition-transform transform group-hover:translate-x-1"></i>\n                                </${r}>`;
                  }),
                );
                m.resourcesList.innerHTML = e.join("");
              } else m.integratedResourcesArea.classList.add("hidden");
              lucide.createIcons();
            })(e),
              "quiz" === e.type && e.questions && e.questions.length > 0)
          ) {
            if (!c.completedLessons.includes(e.id)) {
              const a = document.getElementById("tab-clases");
              a.querySelectorAll(".quiz-option").forEach((e) => {
                e.addEventListener("click", () => {
                  const t = e.dataset.questionId;
                  (a
                    .querySelectorAll(`.quiz-option[data-question-id="${t}"]`)
                    .forEach((e) => e.classList.remove("selected")),
                    e.classList.add("selected"));
                });
              });
              const t = document.getElementById("check-quiz-btn");
              t &&
                ((window.currentQuizHandler = () =>
                  (async function (e) {
                    const a = e.questions.length;
                    let t = 0,
                      s = !0;
                    for (let a = 0; a < e.questions.length; a++) {
                      const t = `quiz-${e.id}-q-${a}`;
                      if (
                        !document
                          .getElementById(t)
                          .querySelector(".quiz-option.selected")
                      ) {
                        s = !1;
                        break;
                      }
                    }
                    if (!s)
                      return void A("Por favor, responde todas las preguntas.");
                    const o = await Promise.all(
                      e.questions.map(async (a, t) => {
                        const s = `quiz-${e.id}-q-${t}`,
                          o = document.getElementById(s),
                          r = o.querySelector(".quiz-option.selected"),
                          n = parseInt(r.dataset.index);
                        return {
                          questionContainer: o,
                          selectedOption: r,
                          isCorrect: (await y(n)) === a.correctAnswerHash,
                          correctHash: a.correctAnswerHash,
                        };
                      }),
                    );
                    for (const e of o) {
                      const {
                        questionContainer: a,
                        selectedOption: s,
                        isCorrect: o,
                        correctHash: r,
                      } = e;
                      if (
                        (a.querySelectorAll(".quiz-option").forEach((e) => {
                          ((e.style.pointerEvents = "none"),
                            e.classList.remove("selected"));
                        }),
                          o)
                      )
                        (s.classList.add("correct"), t++);
                      else {
                        s.classList.add("incorrect");
                        for (let e = 0; e < 4; e++) {
                          if ((await y(e)) === r) {
                            a.querySelector(`[data-index="${e}"]`)?.classList.add(
                              "correct",
                            );
                            break;
                          }
                        }
                      }
                    }
                    if (t === a)
                      (A("¡Todas las respuestas son correctas!"),
                        c.completedLessons.includes(e.id) ||
                        ((c.completedLessons = [
                          ...new Set([...c.completedLessons, e.id]),
                        ]),
                          await I(),
                          E(e.id),
                          b()),
                        v());
                    else {
                      A(`Revisa tus respuestas. ${t} de ${a} son correctas.`);
                      const e = document.querySelector(".quiz-option.incorrect");
                      if (e) {
                        const a = e.closest(".space-y-4.mb-8");
                        a &&
                          a.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                      }
                      setTimeout(() => {
                        document.querySelectorAll(".quiz-option").forEach((e) => {
                          (e.classList.remove("incorrect", "correct"),
                            (e.style.pointerEvents = "auto"));
                        });
                      }, 5e3);
                    }
                  })(e)),
                  t.addEventListener("click", window.currentQuizHandler));
            }
          }
          const o = document.getElementById("course-video");
          o &&
            ((u = o),
              (o.onended = async () => {
                c.completedLessons.includes(e.id) ||
                  (c.completedLessons.push(e.id),
                    await I(),
                    x(),
                    b(),
                    A("¡Lección completada al ver el video!"));
              }));
          const r = document.getElementById("toggle-subtitles-btn");
          r &&
            o &&
            r.addEventListener("click", () => {
              if (!o.textTracks || 0 === o.textTracks.length) return;
              const e = o.textTracks[0],
                a = r.querySelector("span"),
                t = r.querySelector("i"),
                s = "showing" === e.mode;
              ((e.mode = s ? "hidden" : "showing"),
                "showing" === e.mode
                  ? (a && (a.textContent = "Desactivar Subtítulos"),
                    t && t.setAttribute("data-lucide", "captions"))
                  : (a && (a.textContent = "Activar Subtítulos"),
                    t && t.setAttribute("data-lucide", "captions-off")),
                lucide.createIcons());
            });
          const n = document.getElementById("transcription-button");
          n &&
            e.transcriptionUrl &&
            n.addEventListener("click", () =>
              (async function (e, a) {
                if (!e) return void A("No hay transcripción disponible.");
                const t = document.getElementById("transcription-button"),
                  o = t ? t.querySelector("span") : null,
                  r = o ? o.textContent : "";
                o && (o.textContent = "Preparando...");
                t && (t.disabled = !0);
                try {
                  const t = await X(s, e),
                    o = await fetch(t);
                  if (!o.ok) throw new Error("Respuesta de red no fue OK");
                  const r = (await o.text())
                    .split(/\r?\n/)
                    .filter(
                      (e) => !/^\d+$/.test(e.trim()) && !e.includes("--\x3e"),
                    )
                    .join("\n")
                    .replace(/(\n\s*){2,}/g, "\n\n")
                    .trim(),
                    n = new Blob([r], { type: "text/plain;charset=utf-8" }),
                    i = document.createElement("a");
                  i.href = URL.createObjectURL(n);
                  const l = a.replace(/[^a-z0-9]/gi, "_").toLowerCase();
                  ((i.download = `transcripcion_${l}.txt`),
                    document.body.appendChild(i),
                    i.click(),
                    document.body.removeChild(i),
                    URL.revokeObjectURL(i.href),
                    A("Descarga iniciada."));
                } catch (e) {
                  (console.error("Error al descargar transcripción:", e),
                    A("No se pudo descargar."));
                } finally {
                  (o && (o.textContent = r), t && (t.disabled = !1));
                }
              })(e.transcriptionUrl, e.title),
            );
          (async () => {
            if (o)
              try {
                await (async function ({
                  storage: e,
                  videoEl: a,
                  videoSrc: t,
                  srtOrVttSrc: s,
                }) {
                  const o = a.querySelector("#course-video-source"),
                    r = await X(e, t);
                  o && r && (o.src = r);
                  const n = a.querySelector("#caption-track");
                  if (!n || !s) return void a.load();
                  const i = await X(e, s);
                  if (!i) return void a.load();
                  if (/(\.srt)(\?|$)/i.test(i)) {
                    const e = await fetch(i),
                      a = await e.text();
                    n.src = URL.createObjectURL(
                      new Blob([Y(a)], { type: "text/vtt" }),
                    );
                  } else n.src = i;
                  n.default = !0;
                  const [l] = a.textTracks;
                  l && (l.mode = "showing");
                  a.load();
                })({
                  storage: s,
                  videoEl: o,
                  videoSrc: (e && e.videoUrl) || "",
                  srtOrVttSrc: (e && e.transcriptionUrl) || "",
                });
              } catch (e) {
                console.error("No se pudieron adjuntar medios/subtítulos:", e);
              } finally {
                Z();
              }
          })();
        })(e.lesson),
        m.prevBtn &&
        (m.prevBtn.disabled = 0 === i.findIndex((a) => a.id === e.lesson.id))),
      x(),
      (function () {
        if (!m.navigationButtons || !m.mainActionBtn) return;
        m.navigationButtons.classList.remove("hidden");
        const e = i.find((e) => e.id === c.currentLessonId);
        if (!e) return;
        if (c.completedLessons.includes(e.id))
          return (
            (m.mainActionBtn.textContent = "Lección completada �S"),
            (m.mainActionBtn.disabled = !0),
            m.mainActionBtn.classList.replace("bg-teal-500", "bg-slate-400"),
            void m.mainActionBtn.classList.remove("hover:bg-teal-600")
          );
        ((m.mainActionBtn.disabled = "quiz" === e.type),
          (m.mainActionBtn.textContent = "Marcar como completada"),
          m.mainActionBtn.classList.replace("bg-slate-400", "bg-teal-500"),
          m.mainActionBtn.classList.add("hover:bg-teal-600"));
      })(),
      lucide.createIcons(),
      Z());
  }
  async function v() {
    const e = i.findIndex((e) => e.id === c.currentLessonId);
    e < i.length - 1
      ? (A("¡Excelente! Cargando siguiente lección..."),
        setTimeout(() => {
          h(i[e + 1].id);
        }, 1500))
      : p || (await L(), (p = !0));
  }
  async function y(e) {
    const a = new TextEncoder().encode("AGIA-SEC-" + e),
      t = await crypto.subtle.digest("SHA-256", a);
    return Array.from(new Uint8Array(t))
      .map((e) => e.toString(16).padStart(2, "0"))
      .join("");
  }
  function x() {
    const e = new Set(c.completedLessons).size,
      a = i.length > 0 ? Math.round((e / i.length) * 100) : 0;
    (m.progressBar && (m.progressBar.style.width = `${a}%`),
      m.progressText && (m.progressText.textContent = `${a}%`));
  }
  async function h(e) {
    f(e) && ((c = { ...c, currentLessonId: e }), await I(), b(), Q());
  }
  async function I() {
    if (l)
      try {
        const e = t.collection("userProgress").doc(l.uid);
        await e.set({ [r]: c }, { merge: !0 });
      } catch (e) {
        console.error("Error al guardar el progreso:", e);
      }
  }
  function A(e, a = "generic") {
    const t = "badge" === a ? m.badgeToast : m.toast,
      s = "badge" === a ? m.badgeMessage : m.toastMessage;
    t &&
      s &&
      ((s.textContent = e),
        t.classList.add("show"),
        setTimeout(() => t.classList.remove("show"), 4e3));
  }
  function E(e) {
    const a = f(e);
    if (!a || !a.module.badge) return;
    if (e !== a.module.lessons[a.module.lessons.length - 1].id) return;
    a.module.lessons
      .map((e) => e.id)
      .every((e) => c.completedLessons.includes(e)) &&
      (c.unlockedBadges.includes(a.module.badge) ||
        (c.unlockedBadges.push(a.module.badge),
          I(),
          A(`Has ganado la insignia: "${a.module.badge}"`, "badge")));
  }
  async function L() {
    if (m.completionModal && m.completionModalOverlay) {
      if (
        (m.modalUserName && (m.modalUserName.textContent = l ? l.name : ""),
          m.modalCourseName && (m.modalCourseName.textContent = n.title),
          n.hasCertificate && m.certificateLink)
      ) {
        const e = await (async function () {
          if (!l || !n.hasCertificate) return null;
          const e = `${l.uid}_${r}`,
            a = "undefined" != typeof __app_id ? __app_id : "aulagenia-app",
            s = t
              .collection("artifacts")
              .doc(a)
              .collection("public")
              .doc("data")
              .collection("certificates")
              .doc(e);
          try {
            return (
              (await s.get()).exists ||
              (await s.set({
                userId: l.uid,
                userName: l.name,
                courseId: r,
                courseName: n.title,
                issuedAt: firebase.firestore.FieldValue.serverTimestamp(),
                appId: a,
              })),
              e
            );
          } catch (e) {
            return (
              console.error(
                "Error creating or checking certificate record:",
                e,
              ),
              null
            );
          }
        })();
        e
          ? ((m.certificateLink.href = `./portal-certificacion.html?id=${e}`),
            m.certificateLink.classList.remove("hidden"),
            m.certificateLink.classList.add("flex"))
          : (m.certificateLink.classList.add("hidden"),
            m.certificateLink.classList.remove("flex"));
      } else
        m.certificateLink &&
          (m.certificateLink.classList.add("hidden"),
            m.certificateLink.classList.remove("flex"));
      (m.completionModalOverlay.classList.remove("hidden"),
        m.completionModal.classList.remove("hidden"),
        setTimeout(() => {
          (m.completionModalOverlay.classList.add("opacity-100"),
            m.completionModal.classList.add("show"));
        }, 10));
    }
  }
  (m.sidebarToggle &&
    m.sidebar &&
    m.sidebarToggle.addEventListener("click", () => {
      m.sidebar.classList.toggle("collapsed");
      const e = document.getElementById("toggle-icon");
      (m.sidebar.classList.contains("collapsed")
        ? (e.setAttribute("data-lucide", "panel-left-open"),
          (m.sidebarToggle.title = "Mostrar menú"))
        : (e.setAttribute("data-lucide", "panel-left-close"),
          (m.sidebarToggle.title = "Ocultar menú")),
        lucide.createIcons());
    }),
    m.mainActionBtn &&
    m.mainActionBtn.addEventListener("click", async () => {
      const e = c.currentLessonId;
      if (!c.completedLessons.includes(e)) {
        ((c = {
          ...c,
          completedLessons: [...new Set([...c.completedLessons, e])],
        }),
          await I(),
          E(e),
          b());
        const a = i.findIndex((a) => a.id === e) === i.length - 1;
        g() || a ? p || (await L(), (p = !0)) : v();
      }
    }),
    m.prevBtn &&
    m.prevBtn.addEventListener("click", () => {
      const e = i.findIndex((e) => e.id === c.currentLessonId);
      e > 0 && h(i[e - 1].id);
    }),
    m.closeModalBtn &&
    m.closeModalBtn.addEventListener(
      "click",
      () => (window.location.href = `${o}/campus.html`),
    ),
    m.reviewCourseBtn &&
    m.reviewCourseBtn.addEventListener("click", function () {
      if (!m.completionModal || !m.completionModalOverlay) return;
      (m.completionModalOverlay.classList.remove("opacity-100"),
        m.completionModal.classList.remove("show"));
      const e = m.completionModal.querySelector("div");
      (e && e.classList.add("scale-95", "opacity-0"),
        setTimeout(() => {
          (m.completionModal.classList.add("hidden"),
            m.completionModalOverlay.classList.add("hidden"),
            e && e.classList.remove("scale-95", "opacity-0"));
        }, 300));
    }));
  const w = document.getElementById("profile-modal-overlay"),
    q = document.getElementById("profile-modal"),
    B = document.getElementById("avatar-button"),
    C = document.getElementById("cancel-profile-btn"),
    M = document.getElementById("close-profile-modal-btn"),
    T = document.getElementById("profile-form"),
    k = document.getElementById("profile-name-input"),
    S = document.getElementById("profile-rut-input"),
    O = document.getElementById("profile-email-input"),
    P = document.getElementById("profile-job-input"),
    D = document.getElementById("profile-country-select"),
    U = document.getElementById("profile-gender-select"),
    $ = document.getElementById("profile-birthdate-input"),
    R = document.getElementById("form-status"),
    G = document.getElementById("save-profile-btn"),
    z = document.getElementById("save-btn-text"),
    V = document.getElementById("save-spinner");
  function N() {
    if (!w || !q) return;
    const e = q.querySelector("div.bg-white");
    (e && e.classList.add("scale-95", "opacity-0"),
      setTimeout(() => {
        (w.classList.add("hidden"),
          q.classList.add("hidden"),
          e && e.classList.remove("scale-95", "opacity-0"));
      }, 300));
  }
  function j(e, a, t = "") {
    const s =
      document.getElementById(`profile-${e}-input`) ||
      document.getElementById(`profile-${e}-select`),
      o = document.getElementById(`${e}-error`),
      r = document.getElementById(`${e}-status-icon`);
    s &&
      (s.classList.remove("form-input-error", "form-input-success"),
        o && (o.textContent = ""),
        r && (r.innerHTML = ""),
        "error" === a
          ? (s.classList.add("form-input-error"),
            o && (o.textContent = t),
            r &&
            (r.innerHTML =
              '<i data-lucide="alert-circle" class="h-5 w-5 text-red-500"></i>'))
          : "success" === a &&
          (s.classList.add("form-input-success"),
            r &&
            (r.innerHTML =
              '<i data-lucide="check-circle" class="h-5 w-5 text-green-500"></i>')),
        r &&
        r.innerHTML &&
        lucide.createIcons({ nodes: [r.querySelector("i")] }));
  }
  function H() {
    const e =
      k.value.trim().length < 3 || !k.value.includes(" ")
        ? (j("name", "error", "Ingresa tu nombre y apellido completo."), !1)
        : (j("name", "success"), !0),
      a =
        "" === D.value
          ? (j("country", "error", "Selecciona tu país de residencia."), !1)
          : (j("country", "success"), !0),
      t = (function () {
        if ("CL" === D.value) {
          if (
            !(function (e) {
              const a = (e = e
                .replace(/\./g, "")
                .replace(/-/g, "")
                .trim()
                .toLowerCase()).slice(0, -1);
              let t = e.slice(-1);
              if (!/^[0-9]+[0-9kK]{1}$/.test(e)) return !1;
              let s = 0,
                o = 2;
              for (let e = a.length - 1; e >= 0; e--)
                ((s += a.charAt(e) * o), o < 7 ? o++ : (o = 2));
              const r = 11 - (s % 11);
              return t === (11 === r ? "0" : 10 === r ? "k" : r.toString());
            })(S.value)
          )
            return (j("rut", "error", "El RUT ingresado no es válido."), !1);
          j("rut", "success");
        } else j("rut", "neutral");
        return !0;
      })(),
      s = e && a && ("CL" !== D.value || t);
    G && (G.disabled = !s);
  }
  function F(e) {
    m.learningTabs &&
      (m.learningTabs.querySelectorAll(".ltab").forEach((a) => {
        const t = a.dataset.tab === e;
        (a.classList.toggle("active", t),
          a.classList.toggle("text-teal-600", t),
          a.classList.toggle("border-teal-500", t),
          a.classList.toggle("text-slate-500", !t),
          a.classList.toggle("border-transparent", !t));
      }),
        m.learningTabs
          .querySelectorAll(".ltab-panel")
          .forEach((a) => a.classList.toggle("hidden", a.id !== e)));
  }
  function Q() {
    if (!l) return;
    const e = c.currentLessonId;
    (!(async function (e) {
      if (!l || !m.notesTextarea || !m.notesSaveStatus) return;
      m.notesTextarea.value = "";
      const a = t.collection("userNotes").doc(`${l.uid}_${r}_${e}`);
      try {
        const e = await a.get();
        (e.exists && (m.notesTextarea.value = e.data().content || ""),
          (m.notesSaveStatus.textContent = "Sin cambios"));
      } catch (e) {
        if (e.code === 'permission-denied') {
          console.warn("Notas no inicializadas o acceso restringido (asumiendo vacío due to legacy rules).");
          m.notesSaveStatus.textContent = "Sin cambios";
        } else {
          console.error("Error al cargar las notas:", e);
          m.notesSaveStatus.textContent = "Error al cargar";
        }
      }
    })(e),
      (async function (e) {
        if (!l || !m.userResourceList) return;
        m.userResourceList.innerHTML =
          '<li><p class="p-3 text-sm text-slate-500">Cargando tus archivos...</p></li>';
        try {
          const a = await t
            .collection("userResources")
            .where("uid", "==", l.uid)
            .where("courseId", "==", r)
            .where("lessonId", "==", e)
            .get();
          if (a.empty)
            return void (m.userResourceList.innerHTML =
              '<li><p class="p-3 text-sm text-slate-500 italic">No has subido archivos aún.</p></li>');
          const s = a.docs.sort(
            (e, a) =>
              (a.data().createdAt?.toDate() || 0) -
              (e.data().createdAt?.toDate() || 0),
          );
          ((m.userResourceList.innerHTML = ""), s.forEach((e) => W(e)));
        } catch (e) {
          if (e.code === 'permission-denied') {
            console.warn("Recursos no inicializados o acceso restringido (asumiendo vacío).");
            m.userResourceList.innerHTML = '<li><p class="p-3 text-sm text-slate-500 italic">No has subido archivos aún.</p></li>';
          } else {
            console.error("Error listando recursos:", e);
            m.userResourceList.innerHTML = '<li><p class="p-3 text-sm text-red-500">Error al cargar archivos.</p></li>';
          }
        }
      })(e),
      (async function (e) {
        if (!l || !m.taskList) return;
        const a = `${l.uid}_${r}_${e}`;
        m.taskList.innerHTML = "";
        const s = f(e),
          o = s?.module?.practiceTasks || [];
        try {
          const e = t.collection("userTasks").doc(a),
            s = await e.get();
          let r = [];
          (s.exists && (r = s.data().items || []),
            o.length > 0 && 0 === r.length
              ? (await e.set(
                { uid: l.uid, items: o.map((e) => ({ ...e })) },
                { merge: !0 },
              ),
                o.forEach((a) => K(a, e)))
              : r.length > 0 && r.forEach((a) => K(a, e)));
        } catch (e) {
          if (e.code === 'permission-denied') {
            console.warn("Tareas no inicializadas o acceso restringido (asumiendo vacío).");
          } else {
            console.error("Error cargando tareas:", e);
          }
        }
      })(e),
      F("tab-clases"));
  }
  function _() {
    m.pdfModal &&
      m.pdfModalOverlay &&
      m.pdfModalContent &&
      m.pdfIframe &&
      (m.pdfModalOverlay.classList.remove("opacity-100"),
        m.pdfModalContent.classList.add("scale-95", "opacity-0"),
        setTimeout(() => {
          (m.pdfModal.classList.add("hidden"),
            m.pdfModalOverlay.classList.add("hidden"),
            (m.pdfIframe.src = ""));
        }, 300));
  }
  function W(e) {
    const a = e.data(),
      t = document.createElement("li");
    ((t.className = "px-4 py-3 flex items-center justify-between"),
      (t.innerHTML = `<div class="min-w-0 flex-1"><p class="text-sm font-medium text-slate-900 truncate">${a.name}</p><p class="text-xs text-slate-500 truncate">${a.contentType || ""} - ${Math.round(a.size / 1024)} KB</p></div><div class="flex items-center gap-3"><a href="${a.downloadURL}" target="_blank" class="text-teal-700 text-sm font-semibold hover:underline">Abrir</a><button class="delete-resource-btn text-red-600 text-sm font-semibold hover:underline">Eliminar</button></div>`),
      t
        .querySelector(".delete-resource-btn")
        .addEventListener("click", async () => {
          if (confirm(`¿Seguro que quieres eliminar "${a.name}"?`))
            try {
              (await s.ref(a.storagePath).delete(),
                await e.ref.delete(),
                t.remove(),
                A("Archivo eliminado."));
            } catch (e) {
              (console.error("Error eliminando:", e),
                A("No se pudo eliminar."));
            }
        }),
      m.userResourceList.prepend(t));
  }
  function K(e, a) {
    const t = document.createElement("li");
    ((t.className =
      "bg-white border border-slate-200 rounded-lg p-3 flex items-center justify-between group"),
      (t.innerHTML = `<label class="flex-1 flex items-center gap-3 cursor-pointer"><input type="checkbox" class="task-toggle h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" ${e.done ? "checked" : ""}/><span class="text-sm ${e.done ? "line-through text-slate-400" : "text-slate-800"}">${e.text}</span></label><button class="task-delete text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"><i data-lucide="trash-2" class="h-4 w-4"></i></button>`));
    const s = t.querySelector(".task-toggle");
    (s.addEventListener("change", async () => {
      const o = await a.get(),
        r = (o.exists && o.data().items) || [],
        n = r.findIndex((a) => a.text === e.text);
      n > -1 &&
        ((r[n].done = s.checked), await a.set({ items: r }, { merge: !0 }));
      const i = t.querySelector("span");
      i &&
        (i.classList.toggle("line-through", s.checked),
          i.classList.toggle("text-slate-400", s.checked));
    }),
      t.querySelector(".task-delete").addEventListener("click", async () => {
        const s = ((await a.get()).data().items || []).filter(
          (a) => a.text !== e.text,
        );
        (await a.set({ items: s }, { merge: !0 }), t.remove());
      }),
      m.taskList.append(t),
      lucide.createIcons());
  }
  async function J() {
    if (!l || !m.taskInput) return;
    const e = m.taskInput.value.trim();
    if (!e) return;
    const a = c.currentLessonId,
      s = `${l.uid}_${r}_${a}`,
      o = { text: e, done: !1 };
    try {
      const e = t.collection("userTasks").doc(s);
      (await e.set(
        { uid: l.uid, items: firebase.firestore.FieldValue.arrayUnion(o) },
        { merge: !0 },
      ),
        K(o, e),
        (m.taskInput.value = ""));
    } catch (e) {
      console.error("Error agregando tarea:", e);
    }
  }
  function Y(e) {
    return (
      "WEBVTT\n\n" +
      e
        .replace(/\r+/g, "")
        .replace(/^\s*\d+\s*$/gm, "")
        .replace(/(\d{2}):(\d{2}):(\d{2}),(\d{3})/g, "$1:$2:$3.$4")
        .trim()
    );
  }
  async function X(e, a) {
    if (!a) return null;
    try {
      const t = e.refFromURL(a);
      return await t.getDownloadURL();
    } catch (e) {
      if (/^https?:\/\//i.test(a)) return a;
      throw e;
    }
  }
  function Z() {
    g() &&
      document
        .querySelectorAll(
          'button[id*="encuesta"], .btn-encuesta, a[href*="encuesta"]',
        )
        .forEach((e) =>
          (function (e) {
            if (!e) return;
            (e.setAttribute("aria-disabled", "true"),
              e.setAttribute("tabindex", "-1"),
              e.classList.add("opacity-60", "cursor-not-allowed"),
              "BUTTON" === e.tagName && (e.disabled = !0),
              e.addEventListener(
                "click",
                (e) => (e.preventDefault(), e.stopImmediatePropagation(), !1),
                !0,
              ));
          })(e),
        );
  }
  (B &&
    B.addEventListener("click", () =>
      (async function () {
        if (!(T && O && w && q)) return;
        T.reset();
        const e = a.currentUser;
        if (!e) return;
        O.value = e.email || "";
        const s = t.collection("users").doc(e.uid);
        try {
          const a = await s.get(),
            t = a.exists ? a.data() : {},
            o = !0 === t.profileCompleted;
          (k && (k.value = o ? t.displayName || "" : e.displayName || ""),
            S && (S.value = t.rut || ""),
            P && (P.value = t.jobTitle || ""),
            D && (D.value = t.country || ""),
            U && (U.value = t.gender || ""),
            $ && ($.value = t.birthdate || ""));
        } catch (e) {
          console.error("Error al cargar datos del perfil:", e);
        }
        (H(),
          R.classList.add("hidden"),
          w.classList.remove("hidden"),
          q.classList.remove("hidden"),
          setTimeout(() => {
            const e = q.querySelector("div.bg-white");
            e && e.classList.remove("scale-95", "opacity-0");
          }, 10));
      })(),
    ),
    C && C.addEventListener("click", N),
    M && M.addEventListener("click", N),
    w &&
    w.addEventListener("click", (e) => {
      e.target === w && N();
    }),
    k && k.addEventListener("input", H),
    S && S.addEventListener("input", H),
    D && D.addEventListener("change", H),
    T &&
    T.addEventListener("submit", async (e) => {
      if ((e.preventDefault(), H(), G && G.disabled))
        return void (
          R &&
          ((R.className =
            "text-center p-3 rounded-lg bg-yellow-100 text-yellow-700"),
            (R.textContent = "Por favor, corrige los campos marcados en rojo."),
            R.classList.remove("hidden"))
        );
      (G && (G.disabled = !0),
        z && (z.textContent = "Guardando..."),
        V && V.classList.remove("hidden"),
        R && R.classList.add("hidden"));
      const s = a.currentUser,
        o = k ? k.value.trim() : "",
        r = t.collection("users").doc(s.uid);
      try {
        (o &&
          s &&
          o !== s.displayName &&
          (await s.updateProfile({ displayName: o })),
          await r.set(
            {
              displayName: o,
              email: s.email,
              rut: S ? S.value.trim() : "",
              jobTitle: P ? P.value.trim() : "",
              country: D ? D.value : "",
              gender: U ? U.value : "",
              birthdate: $ ? $.value : "",
              profileCompleted: !0,
            },
            { merge: !0 },
          ),
          m.userName && (m.userName.textContent = o),
          R &&
          ((R.className =
            "text-center p-3 rounded-lg bg-green-100 text-green-700"),
            (R.textContent = "¡Perfil actualizado con éxito!"),
            R.classList.remove("hidden")),
          A("¡Perfil actualizado con éxito!"),
          setTimeout(N, 1500));
      } catch (e) {
        (console.error("Error al guardar perfil:", e),
          R &&
          ((R.className =
            "text-center p-3 rounded-lg bg-red-100 text-red-700"),
            (R.textContent =
              "Hubo un error al guardar. Inténtalo de nuevo."),
            R.classList.remove("hidden")));
      } finally {
        (z && (z.textContent = "Guardar Cambios"),
          V && V.classList.add("hidden"));
      }
    }),
    m.learningTabs &&
    m.learningTabs.addEventListener("click", (e) => {
      const a = e.target.closest(".ltab");
      a && F(a.dataset.tab);
    }),
    m.notesTextarea &&
    m.notesTextarea.addEventListener("input", () => {
      m.notesSaveStatus &&
        ((m.notesSaveStatus.textContent = "Editando..."),
          clearTimeout(d),
          (d = setTimeout(
            () =>
              (async function (e) {
                if (!l || !m.notesTextarea || !m.notesSaveStatus) return;
                m.notesSaveStatus.textContent = "Guardando...";
                const a = t.collection("userNotes").doc(`${l.uid}_${r}_${e}`);
                try {
                  (await a.set(
                    {
                      uid: l.uid,
                      content: m.notesTextarea.value,
                      lastUpdated:
                        firebase.firestore.FieldValue.serverTimestamp(),
                    },
                    { merge: !0 },
                  ),
                    (m.notesSaveStatus.textContent = "Guardado"));
                } catch (e) {
                  (console.error("Error al guardar las notas:", e),
                    (m.notesSaveStatus.textContent = "Error al cargar"));
                } finally {
                  setTimeout(() => {
                    "Guardado" === m.notesSaveStatus.textContent &&
                      (m.notesSaveStatus.textContent = "Sin cambios");
                  }, 2e3);
                }
              })(c.currentLessonId),
            1500,
          )));
    }),
    m.tabMaterialPanel &&
    m.tabMaterialPanel.addEventListener("click", (e) => {
      const a = e.target.closest(".resource-item[data-pdf-url]");
      a &&
        (function (e, a) {
          if (
            !(
              m.pdfModal &&
              m.pdfModalOverlay &&
              m.pdfModalContent &&
              m.pdfIframe
            )
          )
            return;
          m.pdfModalTitle && (m.pdfModalTitle.textContent = a);
          const t = `https://docs.google.com/gview?url=${encodeURIComponent(e)}&embedded=true`;
          ((m.pdfIframe.src = t),
            m.pdfModal.classList.remove("hidden"),
            m.pdfModalOverlay.classList.remove("hidden"),
            setTimeout(() => {
              (m.pdfModalOverlay.classList.add("opacity-100"),
                m.pdfModalContent.classList.remove("scale-95", "opacity-0"));
            }, 10));
        })(a.dataset.pdfUrl, a.dataset.pdfTitle);
    }),
    m.pdfModalCloseBtn && m.pdfModalCloseBtn.addEventListener("click", _),
    m.pdfModalOverlay && m.pdfModalOverlay.addEventListener("click", _),
    m.resourceFileInput &&
    m.resourceFileInput.addEventListener("change", () => {
      m.uploadResourcesBtn &&
        (m.uploadResourcesBtn.disabled =
          0 === m.resourceFileInput.files.length);
    }),
    m.uploadResourcesBtn &&
    m.uploadResourcesBtn.addEventListener("click", async () => {
      const e = m.resourceFileInput ? m.resourceFileInput.files : null;
      if (!e || !e.length || !l) return;
      const a = c.currentLessonId;
      m.uploadProgress.classList.remove("hidden");
      for (const o of e) {
        m.uploadProgress.textContent = `Subiendo ${o.name}...`;
        const e = `user_uploads/${l.uid}/${r}/${a}/${Date.now()}_${o.name}`,
          n = s.ref(e);
        try {
          const s = await n.put(o),
            i = await s.ref.getDownloadURL(),
            c = await t.collection("userResources").add({
              uid: l.uid,
              courseId: r,
              lessonId: a,
              name: o.name,
              size: o.size,
              contentType: o.type,
              storagePath: e,
              downloadURL: i,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            }),
            d = await c.get();
          (m.userResourceList.querySelector("p.text-slate-500") &&
            (m.userResourceList.innerHTML = ""),
            W(d));
        } catch (e) {
          return (
            console.error("Error en subida:", e),
            void (m.uploadProgress.textContent = `Error al subir ${o.name}.`)
          );
        }
      }
      ((m.uploadProgress.textContent = "¡Archivos subidos!"),
        m.resourceFileInput && (m.resourceFileInput.value = ""),
        m.uploadResourcesBtn && (m.uploadResourcesBtn.disabled = !0),
        setTimeout(
          () => m.uploadProgress && m.uploadProgress.classList.add("hidden"),
          3e3,
        ));
    }),
    m.addTaskBtn && m.addTaskBtn.addEventListener("click", J),
    m.taskInput &&
    m.taskInput.addEventListener("keydown", (e) => {
      "Enter" === e.key && (e.preventDefault(), J());
    }),
    m.supportForm &&
    m.supportForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const t = new FormData(m.supportForm),
        s = f(c.currentLessonId),
        o = {
          email: a.currentUser.email,
          curso: n.title,
          fecha: new Date().toLocaleString("es-CL"),
          asunto: t.get("subject"),
          mensaje: t.get("message"),
          leccion: s ? s.lesson.title : "N/A",
          nombreAlumno: l ? l.name : "",
        };
      (m.supportSubmitBtn && (m.supportSubmitBtn.disabled = !0),
        m.supportBtnText && (m.supportBtnText.textContent = "Enviando..."),
        m.supportSpinner && m.supportSpinner.classList.remove("hidden"));
      try {
        if (
          !(
            await fetch("https://muna.auto.hostybee.com/webhook/soporte", {
              method: "POST",
              body: JSON.stringify(o),
              headers: { "Content-Type": "application/json" },
            })
          ).ok
        )
          throw new Error("Error en el envío");
        ((m.supportFormStatus.innerHTML =
          '<p class="text-green-600 font-semibold">¡Consulta enviada!</p>'),
          m.supportForm.reset());
      } catch (e) {
        m.supportFormStatus.innerHTML =
          '<p class="text-red-600 font-semibold">Error al enviar. Intenta más tarde.</p>';
      } finally {
        (m.supportSubmitBtn && (m.supportSubmitBtn.disabled = !1),
          m.supportBtnText &&
          (m.supportBtnText.textContent = "Enviar Consulta"),
          m.supportSpinner && m.supportSpinner.classList.add("hidden"));
      }
    }),
    m.logoutButton &&
    m.logoutButton.addEventListener("click", () =>
      a.signOut().then(() => (window.location.href = `${o}/index.html`)),
    ),
    a.onAuthStateChanged((e) => {
      // --- LOCALHOST BYPASS ---
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "";
      console.log("Auth Check - Hostname:", window.location.hostname, "Protocol:", window.location.protocol, "isLocal:", isLocal);
      if (!e && isLocal) {
        console.warn("⚠️ MODO LOCAL DETECTADO: Usando usuario mock para desarrollo.");
        e = {
          uid: "local_dev_user_123",
          displayName: "Desarrollador Local",
          email: "dev@localhost",
          photoURL: null
        };
      }
      // -------------------------

      e
        ? ((l = { uid: e.uid, name: e.displayName || "Alumno" }),
          m.userName && (m.userName.textContent = l.name),
          m.userAvatar &&
          (m.userAvatar.src =
            e.photoURL ||
            `https://placehold.co/100x100/14b8a6/FFFFFF?text=${l.name.charAt(0).toUpperCase()}`),
          m.userProfile &&
          (m.userProfile.classList.remove("hidden"),
            m.userProfile.classList.add("flex")),
          (async function () {
            const e = t.collection("userProgress").doc(l.uid);
            try {
              const a = await e.get();
              if (a.exists) {
                const e = a.data()[r];
                e &&
                  (c = {
                    completedLessons: Array.isArray(e.completedLessons)
                      ? e.completedLessons
                      : [],
                    currentLessonId: i.some((a) => a.id === e.currentLessonId)
                      ? e.currentLessonId
                      : i[0].id,
                    unlockedBadges: Array.isArray(e.unlockedBadges)
                      ? e.unlockedBadges
                      : [],
                  });
              }
            } catch (e) {
              console.error("Error al cargar el progreso.", e);
            }
            (b(), Q());
          })())
        : (window.location.href = `${o}/acceso.html?redirect=${encodeURIComponent(window.location.href)}`);
    }),
    window.lucide && window.lucide.createIcons());
});
