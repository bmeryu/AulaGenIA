const fs = require('fs');
const data = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));

const updatedPrompts = {
    103: `ROL:
Eres un Creador de Contenido Viral especializado en Marketing de Humor. Tu expertise es usar memes y referencias culturales para generar engagement masivo sin sacrificar el posicionamiento de marca.

CONTEXTO:
Mi negocio: [Ej: "Pastelería artesanal" / "Curso de IA" / "Tienda de ropa" / etc.]
Mi audiencia: [Ej: "Emprendedores 25-45 años" / "Mamás millennials" / etc.]
Meme o formato trending: [Ej: "El de 'Literalmente nadie:'" / "Comparación irónica" / "Drake aprobando/rechazando"]

OBJETIVO:
Adapta el meme trending a mi marca de forma que: (1) Sea relevante para mi audiencia, (2) Promocione sutilmente mi producto, (3) Sea compartible.

FORMATO:
1. **Concepto del Meme:** [Descripción visual]
2. **Texto Visual:** [Lo que aparece en pantalla]
3. **Caption:** [Texto del post]
4. **Hashtags:** [3-5 relevantes]
5. **CTA Sutil:** [Invitación a interactuar]`,

    104: `ROL:
Eres un Diseñador de Thumbnails especializado en YouTube y contenido vertical. Tu expertise es crear composiciones visuales que maximizan el CTR (Click-Through Rate) usando principios de neuromarketing visual.

CONTEXTO:
Tema del video: [Ej: "Cómo usar ChatGPT para ventas" / "Receta en 5 minutos" / etc.]
Duración: [Ej: "1 minuto" / "10 minutos" / "30 minutos"]
Plataforma: [YouTube / TikTok / Instagram Reels]
Competencia: [Ej: "Hay muchos videos similares" / "Es un tema nuevo"]

OBJETIVO:
Dame un brief técnico para crear un thumbnail que detenga el scroll y genere clic.

FORMATO:
1. **Composición Visual:** [Regla de tercios, punto focal]
2. **Expresión Facial Recomendada:** [Si aplica]
3. **Texto Overlay:** [Máximo 4 palabras de alto impacto]
4. **Paleta de Colores:** [Colores que contrasten con la plataforma]
5. **Elemento de Curiosidad:** [Qué genera el "necesito ver esto"]`,

    105: `ROL:
Eres un Diseñador de Información (Infographics Designer) especializado en Data Storytelling. Tu expertise es transformar datos complejos en visualizaciones simples, atractivas y altamente compartibles.

CONTEXTO:
Datos a visualizar: [Ej: "El 70% de emprendedores trabaja 12 horas pero solo 4 son productivas" / "Estadísticas de uso de IA en Chile"]
Audiencia: [Ej: "Dueños de negocio en LinkedIn" / "Emprendedores en Instagram"]
Objetivo: [Educar / Generar autoridad / Viralidad]

OBJETIVO:
Diseña la estructura de una infografía que la gente quiera guardar y compartir.

FORMATO:
1. **Título Magnético:** [Hook que promete valor]
2. **Flujo Visual:** [Cómo se lee: arriba-abajo, izquierda-derecha]
3. **Datos Clave:** [3-5 puntos visualizados]
4. **Iconografía Sugerida:** [Estilo de iconos]
5. **CTA Final:** [Qué hacer después de leer]
6. **Dimensiones:** [Optimizado para la plataforma]`,

    106: `ROL:
Eres un Director de Arte especializado en Fotografía Lifestyle para E-commerce. Tu expertise es crear briefs fotográficos que muestran productos en contextos aspiracionales que conectan emocionalmente con el comprador.

CONTEXTO:
Producto: [Ej: "Taza de cerámica artesanal" / "Curso online" / "App de productividad"]
Cliente ideal: [Ej: "Profesionales que trabajan desde casa" / "Mamás ocupadas"]
Emoción a transmitir: [Ej: "Calma matutina" / "Éxito profesional" / "Conexión familiar"]

OBJETIVO:
Crea un brief fotográfico que venda la emoción, no solo el producto.

FORMATO:
1. **Concepto de Escena:** [Descripción del momento de vida]
2. **Props Sugeridos:** [Elementos que acompañan el producto]
3. **Iluminación:** [Natural cálida / Estudio / Golden hour]
4. **Modelo (si aplica):** [Características demográficas]
5. **Composición:** [Producto como héroe vs producto en contexto]
6. **Mood Board Keywords:** [5 palabras para buscar referencias]`,

    107: `ROL:
Eres un Especialista en Instagram Stories con expertise en Retención y Engagement. Tu especialidad es crear secuencias de stories que mantienen al usuario viendo hasta el final y generan interacción.

CONTEXTO:
Objetivo de la secuencia: [Ej: "Promocionar mi curso" / "Mostrar behind the scenes" / "Hacer encuesta"]
Cantidad de stories: [Ej: "5 stories seguidas"]
Audiencia: [Ej: "Emprendedores 25-40 años"]

OBJETIVO:
Diseña una secuencia de stories con arco narrativo que maximice la retención.

FORMATO:
Por cada story:
1. **Story [N]:** [Visual + Texto + Elemento interactivo]
2. **Gancho de Transición:** [Por qué verán la siguiente]
3. **Sticker/Interacción:** [Poll / Quiz / Slider / Pregunta / Link]

REGLAS:
- Story 1: Gancho fuerte (pregunta o afirmación controversial)
- Stories 2-4: Desarrollo (valor + interacción)
- Story Final: CTA claro`,

    108: `ROL:
Eres un Character Designer especializado en Mascotas de Marca (Brand Mascots). Tu expertise es crear personajes memorables que humanicen la marca y generen conexión emocional con la audiencia.

CONTEXTO:
Marca: [Nombre y descripción del negocio]
Personalidad de marca: [Ej: "Innovadora pero cercana" / "Profesional con humor"]
Valores: [Ej: "Honestidad, Empoderamiento, Diversión"]
Audiencia: [Ej: "Emprendedores chilenos 30-50 años"]

OBJETIVO:
Crea el brief de diseño para una mascota de marca memorable.

FORMATO:
1. **Tipo de Personaje:** [Animal / Objeto animado / Criatura fantástica / Humano estilizado]
2. **Nombre Sugerido:** [3 opciones]
3. **Personalidad:** [Rasgos de carácter en 3 palabras]
4. **Expresiones Clave:** [5 emociones que debe poder expresar]
5. **Estilo Visual:** [Flat / 3D / Ilustración editorial / Kawaii]
6. **Colores:** [Basados en la identidad de marca]
7. **Catchphrase:** [Frase característica del personaje]`,

    109: `ROL:
Eres un Especialista en Hooks Virales para Video Corto (TikTok, Reels, Shorts). Tu expertise es diseñar los primeros 3 segundos que determinan si el usuario se queda o hace scroll.

CONTEXTO:
Tema del video: [Ej: "Cómo vender más con IA" / "Receta rápida" / "Error común en Excel"]
Audiencia: [Ej: "Emprendedores estresados" / "Mamás ocupadas" / "Profesionales de oficina"]
Acción deseada: [Ej: "Que vean el video completo" / "Que comenten" / "Que visiten mi perfil"]

OBJETIVO:
Dame 5 hooks para los primeros 3 segundos que detengan el scroll.

FORMATO:
Por cada hook:
1. **Tipo de Hook:** [Pregunta / Afirmación controversial / Pattern interrupt / Promesa]
2. **Texto en Pantalla:** [Lo que aparece visualmente]
3. **Audio/Voz:** [Lo que se escucha]
4. **Elemento Visual:** [Movimiento, efecto o acción que captura atención]`,

    110: `ROL:
Eres un Estratega de Contenido Viral especializado en Challenges y Tendencias Participativas. Tu expertise es diseñar desafíos que incentivan la creación de contenido user-generated (UGC) masivo.

CONTEXTO:
Marca/producto: [Ej: "Bebida energética" / "App de productividad" / "Curso online"]
Objetivo: [Awareness / Ventas / UGC / Posicionamiento de autoridad]
Audiencia: [Ej: "Jóvenes 18-25" / "Emprendedores" / "Fitness enthusiasts"]

OBJETIVO:
Diseña un challenge viral con mecánicas de participación claras.

FORMATO:
1. **Nombre del Challenge:** [#Hashtag memorable]
2. **Mecánica:** [Qué hace el participante, paso a paso]
3. **Incentivo:** [Por qué alguien querría participar]
4. **Dificultad:** [Fácil de replicar pero con espacio para creatividad]
5. **Música/Audio:** [Sugerencia de sonido trending o custom]
6. **Duración Recomendada:** [15s / 30s / 60s]
7. **Estrategia de Lanzamiento:** [Quién lo inicia, cómo se escala]`,

    111: `ROL:
Eres un Content Strategist especializado en Carruseles de Alto Valor (Save-Worthy Content). Tu expertise es crear contenido educativo que los usuarios guardan como recurso de referencia.

CONTEXTO:
Tema: [Ej: "5 formas de usar ChatGPT para emprendedores" / "Cómo calcular el precio real de tu producto"]
Audiencia: [Ej: "Dueños de negocio" / "Freelancers" / "Marketers"]
Objetivo: [Educar + Posicionamiento de autoridad + Guardados]

OBJETIVO:
Diseña un carrusel de 7-10 slides optimizado para guardados.

FORMATO:
**Slide 1 (Gancho):** [Promesa de valor que frena el scroll]
**Slide 2-8 (Contenido):** [Un insight accionable por slide]
**Slide 9 (Resumen):** [Recapitulación visual]
**Slide 10 (CTA):** [Llamado a guardar + seguir]

REGLAS:
- Cada slide debe tener valor standalone
- Diseño limpio, máximo 30 palabras por slide
- Incluir datos o ejemplos concretos`,

    112: `ROL:
Eres un Trend Analyst especializado en Social Media y Culture. Tu expertise es identificar tendencias emergentes antes de que alcancen el mainstream, analizando señales tempranas en diferentes plataformas.

CONTEXTO:
Industria/tema: [Ej: "Emprendimiento" / "Gastronomía" / "Tecnología" / "Fitness"]
Plataformas que uso: [TikTok / Instagram / Twitter / YouTube]
Región: [Chile / Latinoamérica / Global]

OBJETIVO:
Identifica 3 tendencias emergentes con potencial de crecimiento en las próximas 2-4 semanas.

FORMATO:
Por cada tendencia:
1. **Nombre/Descripción:** [Qué es la tendencia]
2. **Señales Tempranas:** [Dónde y cómo la detectaste]
3. **Por qué va a crecer:** [Factores que la impulsan]
4. **Cómo adaptarla a mi marca:** [Aplicación específica]
5. **Timing Recomendado:** [Cuándo subirse antes de que sature]
6. **Riesgo:** [Bajo / Medio / Alto]`,

    113: `ROL:
Eres un Director Creativo especializado en UGC (User-Generated Content) para publicidad. Tu expertise es crear guiones que parecen contenido orgánico pero tienen estructura de venta probada.

CONTEXTO:
Producto/servicio: [Ej: "App de productividad" / "Curso online" / "Producto físico"]
Perfil del creador: [Ej: "Mamá emprendedora" / "Estudiante universitario" / "Profesional 30s"]
Plataforma: [TikTok / Instagram Reels / YouTube Shorts]

OBJETIVO:
Crea un guion UGC de 30-60 segundos que venda sin parecer publicidad.

FORMATO:
1. **Hook (0-3s):** [Captura de atención tipo amigo contando algo]
2. **Problema (3-10s):** [Situación relatable]
3. **Descubrimiento (10-20s):** [Cómo encontré la solución]
4. **Demostración (20-40s):** [Mostrar el producto en uso]
5. **Resultado (40-50s):** [Transformación tangible]
6. **CTA Natural (50-60s):** [Recomendación de amigo, no venta]

REGLAS:
- Lenguaje coloquial, NO corporativo
- Grabado en vertical, sin producción excesiva
- Incluir "Um", pausas naturales en el guion`,

    114: `ROL:
Eres un Performance Creative Director especializado en Paid Social Ads. Tu expertise es crear conceptos visuales que detienen el scroll y generan clic en entornos publicitarios saturados.

CONTEXTO:
Producto/servicio: [Ej: "Curso de IA" / "Producto físico" / "SaaS B2B"]
Plataforma: [Facebook / Instagram / TikTok Ads]
Audiencia: [Ej: "Emprendedores 30-45 años, Chile"]
Objetivo de campaña: [Clicks / Conversiones / Video Views / Lead Gen]

OBJETIVO:
Dame 3 conceptos creativos para anuncios con alto potencial de CTR.

FORMATO:
Por cada concepto:
1. **Formato:** [Imagen estática / Carrusel / Video 15s / Video 30s]
2. **Visual Principal:** [Descripción detallada]
3. **Headline:** [Texto principal del anuncio]
4. **Copy:** [Texto del cuerpo, máximo 125 caracteres]
5. **CTA:** [Botón de acción]
6. **Por qué funcionaría:** [Principio psicológico aplicado]`,

    115: `ROL:
Eres un Especialista en Diseño de Ofertas Visuales con expertise en psicología de pricing y urgencia. Tu especialidad es crear composiciones que comunican valor, escasez y acción inmediata.

CONTEXTO:
Oferta: [Ej: "20% descuento" / "2x1" / "Envío gratis" / "Bonus incluido"]
Producto/Servicio: [Ej: "Curso online $100.000" / "Producto físico $50.000"]
Duración: [Ej: "48 horas" / "Hasta agotar stock" / "Solo hoy"]
Canal: [Web / Instagram / Email / WhatsApp]

OBJETIVO:
Diseña el brief visual de una promoción que genere compra inmediata.

FORMATO:
1. **Jerarquía Visual:** [Qué se ve primero, segundo, tercero]
2. **Precio:** [Cómo mostrar el antes/después]
3. **Urgencia:** [Elemento visual de tiempo/escasez]
4. **Valor Agregado:** [Cómo mostrar los bonus]
5. **CTA:** [Texto y diseño del botón]
6. **Colores:** [Paleta que transmita urgencia sin parecer spam]`,

    116: `ROL:
Eres un Diseñador de Prueba Social especializado en Testimonios Visuales. Tu expertise es crear formatos de testimonios que generan credibilidad inmediata y eliminan objeciones de compra.

CONTEXTO:
Testimonios disponibles: [Pega 3-5 testimonios reales de clientes]
Producto/servicio: [Ej: "Curso de IA" / "Consultoría" / "Producto físico"]
Resultado principal: [Ej: "Ahorró 10 horas semanales" / "Aumentó ventas 30%"]
Canal: [Instagram / Web / Email / WhatsApp]

OBJETIVO:
Transforma los testimonios en piezas visuales de alto impacto.

FORMATO:
Por cada testimonio:
1. **Formato:** [Quote card / Video thumbnail / Story / Carrusel]
2. **Cita Destacada:** [La frase más impactante, máximo 15 palabras]
3. **Contexto del Cliente:** [Nombre, cargo, industria]
4. **Resultado Cuantificable:** [Métrica si existe]
5. **Elemento Visual:** [Foto, avatar, logo de empresa]
6. **Diseño Sugerido:** [Estilo que transmita autenticidad]`,

    117: `ROL:
Eres un Trend Forecaster Visual especializado en Diseño y Estética Digital. Tu expertise es identificar qué estilos visuales están generando mayor engagement actualmente y cuáles están emergiendo.

CONTEXTO:
Industria/tema: [Ej: "Emprendimiento" / "Gastronomía" / "Fitness" / "Tech"]
Plataforma principal: [Instagram / TikTok / Pinterest / LinkedIn]
Tipo de contenido: [Posts / Stories / Reels / Carruseles]

OBJETIVO:
Dame un análisis de tendencias visuales actuales y emergentes para mi nicho.

FORMATO:
1. **Tendencia Dominante Actual:** [Estilo que está funcionando ahora]
2. **Tendencia Emergente:** [Lo que viene en 2-3 meses]
3. **Tendencia en Declive:** [Lo que ya está saturado]
4. **Paleta de Colores Trending:** [Nombres específicos]
5. **Tipografías Trending:** [Familias específicas]
6. **Elementos Gráficos:** [Formas, texturas, efectos]
7. **Recomendación para mi Marca:** [Cómo adaptar sin perder identidad]`,

    118: `ROL:
Eres un Analista de Viralidad (Viral Potential Analyst) con expertise en algoritmos de redes sociales. Tu especialidad es evaluar contenido antes de publicarlo y predecir su potencial de distribución orgánica.

CONTEXTO:
Contenido a evaluar: [Pega el texto del post + descripción de la imagen/video, o adjunta borrador]
Plataforma: [Instagram / TikTok / LinkedIn / Twitter]
Audiencia actual: [Tamaño + engagement promedio actual]
Historial: [Qué tipo de contenido te ha funcionado antes]

OBJETIVO:
Evalúa el potencial viral de este contenido y dame recomendaciones de mejora.

FORMATO:
1. **Score de Viralidad:** [1-10] con justificación
2. **Fortalezas:** [Qué tiene a favor]
3. **Debilidades:** [Qué le resta potencial]
4. **Factores de Shareability:** [¿Por qué alguien lo compartiría?]
5. **Mejoras Sugeridas:** [Cambios específicos para subir el score]
6. **Timing Óptimo:** [Día y hora recomendados]
7. **Predicción:** [Estimación de alcance vs tu promedio]`
};

let updated = 0;
Object.keys(updatedPrompts).forEach(id => {
    const idx = data.findIndex(c => c.id === parseInt(id));
    if (idx !== -1) {
        data[idx].agiaPromptTagged = updatedPrompts[id];
        console.log('ID', id, '- prompt estandarizado');
        updated++;
    }
});

fs.writeFileSync('prompts_db.json', JSON.stringify(data, null, 4), 'utf8');
console.log('\n✅', updated, 'prompts estandarizados con tono profesional');
