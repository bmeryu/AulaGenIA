/**
 * AulaGenIA Interactive Resources Database
 * Contenido dinamico segmentado por perfil de usuario
 * Version: 2.1 (Full Cuadrature)
 */

const resourcesDatabase = {

  // ============================================================
  //   ONBOARDING - MÓDULO 0
  // ============================================================
  "guia-acceso-chatgpt": {
    meta: {
      type: "guide",
      title: "Guía de Acceso: ChatGPT",
      subtitle: "Tu puerta de entrada al líder de la IA",
      icon: "message-square",
      color: "teal",
      module: 0,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-ChatGPT-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Qué es ChatGPT?</h2>
          <p class="text-teal-700">ChatGPT es el modelo de IA más famoso del mundo, creado por OpenAI. Es tu copiloto ideal para razonamiento lógico, escritura creativa, análisis de textos complejos y mucho más. Es el "todoterreno" de la IA.</p>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📋 Paso a Paso: Cómo Crear tu Cuenta</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Accede al sitio oficial</h4>
                  <p class="text-slate-600 text-sm">Ve a <a href="https://chat.openai.com" target="_blank" class="text-teal-600 hover:underline font-medium">chat.openai.com</a> en tu navegador (Chrome, Safari, Edge).</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Crea tu cuenta</h4>
                  <p class="text-slate-600 text-sm">Haz clic en <strong>"Sign up"</strong> (Registrarse). Puedes usar tu correo electrónico o iniciar sesión rápido con tu cuenta de Google, Microsoft o Apple.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Verifica tu correo</h4>
                  <p class="text-slate-600 text-sm">Si usaste correo electrónico, revisa tu bandeja de entrada y haz clic en el enlace de verificación que te envían.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Completa tu perfil</h4>
                  <p class="text-slate-600 text-sm">Ingresa tu nombre y acepta los términos de uso. ¡Listo! Ya puedes empezar a conversar con ChatGPT.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">¡Empieza a chatear!</h4>
                  <p class="text-slate-600 text-sm">Escribe tu primera pregunta en el cuadro de texto y presiona Enter. ChatGPT te responderá en segundos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">💡 Consejos para tu Primera Conversación</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-1">Sé específico</h4>
              <p class="text-sm text-amber-700">En lugar de "Dame una idea", di "Dame 3 ideas de regalos para mi mamá de 60 años que le gusta la jardinería".</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-1">Pide que lo mejore</h4>
              <p class="text-sm text-amber-700">Si no te gusta la respuesta, di "Hazlo más corto" o "Dame otra opción diferente".</p>
            </div>
          </div>
        </section>
        
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Versión Gratuita vs. Plus</h4>
          <p class="text-white font-medium">La versión gratuita es perfecta para empezar. Solo considera Plus ($20/mes) si necesitas respuestas más rápidas o acceso a GPT-4 todo el tiempo.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía oficial de onboarding AulaGenIA. Actualizada a enero 2025.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-gemini": {
    meta: {
      type: "guide",
      title: "Guía de Acceso: Gemini",
      subtitle: "Google en tus manos",
      icon: "zap",
      color: "blue",
      module: 0,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Gemini-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200">
          <h2 class="text-xl font-bold text-blue-900 mb-2">¿Qué es Gemini?</h2>
          <p class="text-blue-700">Gemini es la IA de Google. Su superpoder es que siempre está conectada a internet, tiene acceso a información actualizada y se integra directamente con Gmail, Google Drive y YouTube. Es ideal para investigación y análisis de documentos.</p>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📋 Paso a Paso: Cómo Acceder</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Accede al sitio oficial</h4>
                  <p class="text-slate-600 text-sm">Ve a <a href="https://gemini.google.com" target="_blank" class="text-blue-600 hover:underline font-medium">gemini.google.com</a> en tu navegador.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Inicia sesión con Google</h4>
                  <p class="text-slate-600 text-sm">Usa tu cuenta de Gmail existente. Si no tienes una, créala gratis en <a href="https://accounts.google.com" target="_blank" class="text-blue-600 hover:underline">accounts.google.com</a>.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Acepta los términos</h4>
                  <p class="text-slate-600 text-sm">La primera vez te pedirá aceptar los términos de servicio. Haz clic en "Acepto" para continuar.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">¡Empieza a conversar!</h4>
                  <p class="text-slate-600 text-sm">Escribe tu pregunta en el cuadro de texto. Gemini puede buscar en internet en tiempo real para darte información actualizada.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">⚡ Superpoderes de Gemini</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🌐 Acceso a Internet</h4>
              <p class="text-sm text-blue-700">Puede buscar noticias, precios y datos actualizados en tiempo real.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">📎 Integración Google</h4>
              <p class="text-sm text-blue-700">Conecta con Gmail, Drive y YouTube para analizar tus documentos y videos.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🎬 Veo 3 (Video)</h4>
              <p class="text-sm text-blue-700">Es líder en generación de videos con IA a través de su modelo Veo 3.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">📱 App Móvil</h4>
              <p class="text-sm text-blue-700">Descarga la app de Gemini para Android e iOS y úsalo desde tu celular.</p>
            </div>
          </div>
        </section>
        
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Tip AulaGenIA</h4>
          <p class="text-white font-medium">Gemini es ideal cuando necesitas información actualizada o trabajar con tus archivos de Google Drive.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía oficial de onboarding AulaGenIA. Actualizada a enero 2025.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-grok": {
    meta: {
      type: "guide",
      title: "Guía de Acceso: Grok",
      subtitle: "La IA de X (Twitter)",
      icon: "twitter",
      color: "indigo",
      module: 0,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Grok-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 border border-indigo-200">
          <h2 class="text-xl font-bold text-indigo-900 mb-2">¿Qué es Grok?</h2>
          <p class="text-indigo-700">Grok es la IA creada por xAI (la empresa de Elon Musk). Su superpoder es que está integrada con X (antes Twitter), por lo que tiene acceso a noticias en tiempo real, tendencias y conversaciones del momento. Es perfecta para estar al día con lo que pasa en el mundo.</p>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📋 Paso a Paso: Cómo Acceder</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Accede desde X o la web</h4>
                  <p class="text-slate-600 text-sm">Puedes usar Grok desde <a href="https://x.com" target="_blank" class="text-indigo-600 hover:underline font-medium">x.com</a> (si tienes cuenta de X) o directamente en <a href="https://grok.x.ai" target="_blank" class="text-indigo-600 hover:underline font-medium">grok.x.ai</a>.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Crea tu cuenta de X</h4>
                  <p class="text-slate-600 text-sm">Si no tienes cuenta de X (Twitter), créala gratis. Necesitarás un correo electrónico y un número de teléfono para verificar.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">Busca el ícono de Grok</h4>
                  <p class="text-slate-600 text-sm">En la app de X o en la web, busca el ícono de Grok en el menú lateral. Parece un símbolo de IA o un cerebro.</p>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h4 class="font-bold text-slate-900 mb-1">¡Empieza a conversar!</h4>
                  <p class="text-slate-600 text-sm">Pregúntale sobre noticias del día, tendencias, o cualquier tema actual. Grok tiene un estilo más casual y a veces usa humor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">⚡ Superpoderes de Grok</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">📰 Tiempo Real</h4>
              <p class="text-sm text-indigo-700">Acceso directo a tendencias y conversaciones de X en el momento.</p>
            </div>
            <div class="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">😎 Estilo Casual</h4>
              <p class="text-sm text-indigo-700">Responde con un tono más relajado y a veces incluye humor.</p>
            </div>
            <div class="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">🔍 Análisis de Posts</h4>
              <p class="text-sm text-indigo-700">Puede analizar hilos de X y resumir debates o conversaciones largas.</p>
            </div>
            <div class="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">🖼️ Generación de Imágenes</h4>
              <p class="text-sm text-indigo-700">Puede crear imágenes con IA directamente desde la conversación.</p>
            </div>
          </div>
        </section>
        
        <section class="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 class="font-bold text-amber-800 mb-2">⚠️ Nota sobre Acceso</h4>
          <p class="text-sm text-amber-700">Algunas funciones avanzadas de Grok pueden requerir suscripción a X Premium. La versión básica está disponible para todos los usuarios de X.</p>
        </section>
        
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Tip AulaGenIA</h4>
          <p class="text-white font-medium">Grok es ideal para análisis de tendencias, noticias del momento y cuando quieres un copiloto con más personalidad.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía oficial de onboarding AulaGenIA. Actualizada a enero 2025.</div>
      </article>
    `,
    segments: {}
  },

  // ============================================================
  //   MÓDULO 1: FUNDAMENTOS
  // ============================================================
  "6-pilares-ia": {
    meta: {
      type: "guide",
      title: "Hablando el Idioma de la IA",
      subtitle: "Guía detallada de los 6 pilares estratégicos - Módulo 1: Video 2",
      icon: "layers",
      color: "indigo",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-Conceptos-Clave-Los-6-Pilares-de-laIA.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Para dar órdenes de mando, primero debes entender cómo piensa tu copiloto. No necesitas ser ingeniero, pero sí dominar estos 6 conceptos que separan a un novato de un estratega profesional. ¡Esta es tu base de operaciones!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
            <h4 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Para tu rol en Negocios & Ventas
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 pilares aplicados a tu contexto comercial. Cada concepto tiene una analogía de tu mundo y un prompt listo para usar.</p>
            
            <div class="space-y-3">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. EL PROMPT → El Briefing Estratégico</h5>
                <p class="text-xs text-slate-600 mb-2">Si le dices a tu agencia "haz algo creativo", fallan. Si entregas la estrategia clara con KPIs y objetivos, ejecutan perfecto.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un estratega comercial senior con 15 años de experiencia. Mi empresa vende [PRODUCTO] a [AUDIENCIA]. Necesito una propuesta de valor de alto impacto que diferencie claramente mi oferta de la competencia tradicional. Evita clichés, céntrate en la rentabilidad para el cliente.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM → El Consultor de Escritorio (Sin Calle)</h5>
                <p class="text-xs text-slate-600 mb-2">Ha leído todos los estudios de mercado del mundo, pero no conoce la realidad operativa de TU negocio. Sabe mucho en general, tú aportas el contexto real del mercado.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Eres un analista de mercado senior. Mi empresa está en el sector [INDUSTRIA]. Dame 5 tendencias globales 2024-2025 que podrían impactar mi modelo de negocio. Para cada una: describe la amenaza y una oportunidad estratégica.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. TOKENS → Tu Presupuesto de Atención</h5>
                <p class="text-xs text-slate-600 mb-2">La atención es limitada. Si gastas todo el presupuesto en la introducción, no queda espacio para la propuesta de cierre o la decisión clave.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Necesito que resumas el siguiente texto en exactamente 50 palabras, manteniendo los 3 puntos clave de valor para el cliente. [PEGAR TEXTO]</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CONTEXTO → La Sala de Reuniones con Capacidad Limitada</h5>
                <p class="text-xs text-slate-600 mb-2">Si metes a 50 personas hablando distintos temas a la vez, nadie entiende nada. Enfoca la conversación.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Antes de continuar, déjame darte contexto: Mi empresa es [NOMBRE], vendemos [PRODUCTO/SERVICIO], nuestro cliente ideal es [PERFIL], y el problema que resolvemos es [PROBLEMA]. Tenlo en cuenta para todas mis preguntas siguientes.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. MULTIMODALIDAD → Tu Analista Ahora Tiene Ojos</h5>
                <p class="text-xs text-slate-600 mb-2">Le muestras una foto de la góndola vacía y te dice qué productos reponer. Le subes un logo y te crea variaciones.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">[SUBIR IMAGEN] Analiza esta imagen de nuestro producto. Identifica: (1) Puntos fuertes visuales, (2) Áreas de mejora en packaging, (3) Cómo se compara con estándares de la industria.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">6. ALUCINACIÓN → El Consultor que Inventa para Complacer</h5>
                <p class="text-xs text-slate-600 mb-2">Inventa datos de mercado para validar tu hipótesis porque quiere darte la razón. Suena convincente, pero puede ser fatal para la estrategia. ¡Verifica!</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Dame estadísticas sobre [TEMA/INDUSTRIA]. IMPORTANTE: Para cada dato, indica si es un hecho verificable con fecha/fuente, o si es una estimación. Si no hay datos duros, prefiero que me digas "no hay datos confiables".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-200">
            <h4 class="font-bold text-purple-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Para tu rol Legal & Profesional
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 pilares aplicados al contexto jurídico. Cada concepto tiene una analogía de tu mundo y un prompt listo para usar.</p>
            
            <div class="space-y-3">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. EL PROMPT → La Instrucción Jurídica</h5>
                <p class="text-xs text-slate-600 mb-2">Ambigüedad = error. La IA es literal, como un juez que interpreta la ley al pie de la letra. Sé preciso.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como abogado especialista en derecho laboral chileno. Analiza el siguiente extracto de contrato y lista las cláusulas que podrían ser impugnables según el Código del Trabajo. Cita los artículos relevantes. [PEGAR EXTRACTO]</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM → El Paralegal Rapidísimo sin Ética</h5>
                <p class="text-xs text-slate-600 mb-2">Ha leído toda la jurisprudencia existente, pero no tiene ética ni criterio profesional. Sabe buscar, TÚ decides qué sirve.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente legal especializado. Necesito un resumen de los principios jurídicos que aplican a [CASO/SITUACIÓN] en la legislación chilena. Lista las normas relevantes y su interpretación mayoritaria en la doctrina.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. TOKENS → Las Fojas del Expediente</h5>
                <p class="text-xs text-slate-600 mb-2">Tienes un límite físico por página. Si tu demanda es muy larga, el tribunal no la lee completa. Sé conciso.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Resume este documento legal en máximo 200 palabras. Estructura: (1) Partes involucradas, (2) Hechos relevantes, (3) Pretensiones principales, (4) Fundamentos de derecho clave. [PEGAR DOCUMENTO]</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CONTEXTO → El Expediente Judicial</h5>
                <p class="text-xs text-slate-600 mb-2">Si es demasiado grueso, el asistente olvida la demanda inicial cuando llega a las pruebas. Segmenta la información.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Vamos a trabajar en el caso [NOMBRE]. Contexto esencial: (1) Tipo de causa: [MATERIA], (2) Cliente: [DEMANDANTE/DEMANDADO], (3) Contraparte: [DATOS], (4) Estado procesal: [ETAPA]. Mantén este contexto.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. MULTIMODALIDAD → Leer Contratos Escaneados</h5>
                <p class="text-xs text-slate-600 mb-2">Sube la foto de un contrato firmado a mano y la IA te alerta de las cláusulas riesgosas que un scanner normal no detectaría.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">[SUBIR FOTO] Este es un documento legal escaneado. (1) Transcribe el contenido textual, (2) Identifica fechas, nombres y montos, (3) Señala cualquier parte ilegible o ambigua.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">6. ALUCINACIÓN → El Abogado Junior que Cita Leyes Derogadas</h5>
                <p class="text-xs text-slate-600 mb-2">Cita una ley derogada hace 10 años con total seguridad. Suena experto, pero el caso se pierde. ¡SIEMPRE verifica!</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Necesito información sobre [NORMA/LEY]. Para cada artículo que cites: (1) Indica la fuente exacta, (2) Confirma si está vigente a 2024, (3) Si no estás 100% seguro, adviértelo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Para tu rol en Gestión & Administración
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 pilares aplicados a la operación diaria. Cada concepto tiene una analogía de tu mundo y un prompt listo para usar.</p>
            
            <div class="space-y-3">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. EL PROMPT → El Procedimiento Operativo (SOP)</h5>
                <p class="text-xs text-slate-600 mb-2">Si le dices "ordena esto", lo hará mal. Si le das el proceso paso a paso con formato específico, ejecuta perfecto.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente administrativo experto. Tengo 20 facturas desordenadas. Crea una tabla Excel con columnas: Proveedor, RUT, Monto Neto, IVA, Total, Fecha. Formato: solo números sin símbolos. Empieza con los headers.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM → El Asistente Ejecutivo Incansable</h5>
                <p class="text-xs text-slate-600 mb-2">Redacta perfecto y trabaja 24/7, pero no conoce la cultura de tu empresa ni las preferencias de tu jefe. Tú aportas ese contexto.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente ejecutivo senior. Redacta un correo formal para [DESTINATARIO] informando sobre [TEMA]. Tono: profesional pero cercano. Máximo 150 palabras. Mi nombre es [TU NOMBRE] y mi cargo es [CARGO].</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. TOKENS → El Post-it</h5>
                <p class="text-xs text-slate-600 mb-2">No puedes escribir la historia de tu vida en un Post-it. Usa el espacio para lo esencial y prioriza.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Condensa las siguientes 10 tareas en una lista de 5 prioridades máximas para hoy. Criterio: impacto + urgencia. Formato: bullet points simples. [LISTAR TAREAS]</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CONTEXTO → Tu Bandeja de Entrada</h5>
                <p class="text-xs text-slate-600 mb-2">Si intentas leer 500 correos a la vez, colapsas. Procesa de a grupos y mantén el foco.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Información sobre nuestra empresa: Rubro: [SECTOR], Tamaño: [N° empleados], Mi rol: [CARGO], Mis responsabilidades principales: [LISTA]. Recuerda esto para todas mis consultas de hoy.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. MULTIMODALIDAD → Digitalizar Documentos Físicos</h5>
                <p class="text-xs text-slate-600 mb-2">Le subes la foto de una factura arrugada y la pasa a Excel automáticamente. Adiós al tipeo manual.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">[SUBIR FOTO DE FACTURA] Extrae de esta factura: Proveedor, RUT, Número de factura, Fecha, Monto neto, IVA, Total. Formato: tabla limpia lista para copiar a Excel.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">6. ALUCINACIÓN → El Pasante que Inventa Datos en Excel</h5>
                <p class="text-xs text-slate-600 mb-2">Rellena una celda vacía con un número inventado para que el reporte se vea completo. ¡Verifica antes de presentar!</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Necesito que completes esta información: [DATOS]. Si algún dato no lo tienes o no estás seguro, escribe "VERIFICAR" en lugar de inventar. Prefiero espacios vacíos a datos falsos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
            <h4 class="font-bold text-amber-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Para tu rol en Educación & Capacitación
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 pilares aplicados al contexto educativo. Cada concepto tiene una analogía de tu mundo y un prompt listo para usar.</p>
            
            <div class="space-y-3">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. EL PROMPT → La Rúbrica de Evaluación</h5>
                <p class="text-xs text-slate-600 mb-2">Si la instrucción es vaga, la respuesta será vaga. Como cuando un estudiante entrega un trabajo genérico porque la pauta no era clara.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como profesor de [ASIGNATURA] para estudiantes de [NIVEL]. Crea una actividad de 15 minutos que enseñe [CONCEPTO] usando aprendizaje activo. Incluye: objetivo, materiales, pasos y forma de evaluar. Evita actividades pasivas.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM → El Bibliotecario que Nunca Dio Clase</h5>
                <p class="text-xs text-slate-600 mb-2">Memorizó todos los libros de la biblioteca, pero nunca ha dado una clase ni conoce a tus estudiantes específicos.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Eres experto en pedagogía de [ASIGNATURA]. Tengo estudiantes de [NIVEL] con dificultades en [TEMA]. Sugiere 3 estrategias didácticas diferentes para abordar este contenido, explicando por qué funcionaría cada una.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. TOKENS → El Límite de Palabras del Ensayo</h5>
                <p class="text-xs text-slate-600 mb-2">Si gastas todo en la introducción, no hay desarrollo ni conclusión. Distribuye el "presupuesto" de forma equilibrada.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Tengo 45 minutos de clase. Necesito un plan sobre [TEMA] con: 5 min intro, 25 min desarrollo, 10 min cierre, 5 min evaluación. Solo dame los puntos clave de cada sección, no el contenido completo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CONTEXTO → La Pizarra del Aula</h5>
                <p class="text-xs text-slate-600 mb-2">Si la llenas de contenido sin borrar, los estudiantes pierden el hilo de la clase. Mantén el foco en lo importante.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Enseño [ASIGNATURA] a estudiantes de [NIVEL/EDAD]. Mi estilo es [TRADICIONAL/INNOVADOR/MIXTO]. Prefiero actividades [INDIVIDUALES/GRUPALES]. Mantén este contexto en todas tus sugerencias.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. MULTIMODALIDAD → Corregir Ejercicios a Mano</h5>
                <p class="text-xs text-slate-600 mb-2">La IA tiene ojos: subes la foto de un ejercicio resuelto a mano por un estudiante y te ayuda a identificar errores.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">[SUBIR FOTO] Este es un ejercicio de [ASIGNATURA] resuelto por un estudiante de [NIVEL]. (1) ¿Está correcto? (2) Si hay errores, identifícalos y explica el error conceptual. (3) Sugiere cómo retroalimentar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">6. ALUCINACIÓN → El Alumno que Inventa Respuestas</h5>
                <p class="text-xs text-slate-600 mb-2">Inventa una respuesta en el examen con total seguridad, esperando que el profesor no se dé cuenta. ¡Verifica siempre!</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3 mt-2">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Dame información sobre [TEMA EDUCATIVO]. Para cada afirmación: indica si es un hecho académico establecido, una teoría en debate, o tu interpretación. Si algo es controversial, menciona las diferentes posturas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  "mitos-derribados-ia": {
    meta: {
      type: "infographic",
      title: "Desarmando los Mitos de la IA",
      subtitle: "Dejando atrás los miedos para tomar el volante - Módulo 1: Video 3",
      icon: "shield-off",
      color: "rose",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Mitos-Derribados-de-la IA.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Para dominar la IA, primero debemos limpiar nuestra mente de ideas falsas. En este video derribamos los muros que te impedían avanzar. Como dice el experto Andrew Ng: la IA no reemplazará a los humanos, pero los humanos que usan IA reemplazarán a los que no la usan. ¡A darle!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Los 4 Mitos que Derribamos Hoy</h3>
          <div class="overflow-hidden rounded-xl border border-blue-200">
            <table class="w-full text-sm">
              <thead class="bg-blue-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-slate-700 w-1/3">EL MITO</th>
                  <th class="text-left p-3 font-semibold text-blue-800">LA REALIDAD PARA NEGOCIOS</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-blue-100 hover:bg-blue-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">1. Solo técnicos pueden usar IA.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Falso.</strong> Un líder que sabe plantear las preguntas estratégicas correctas obtiene mejores resultados que un técnico sin visión de negocio. Tu criterio comercial es la clave.</td>
                </tr>
                <tr class="border-t border-blue-100 hover:bg-blue-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">2. La IA reemplazará mi trabajo.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Error.</strong> La IA no reemplaza a los estrategas, los <strong>amplifica</strong>: mismas horas, 3x más capacidad de análisis, ejecución y cobertura de mercado.</td>
                </tr>
                <tr class="border-t border-blue-100 hover:bg-blue-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">3. La IA lo sabe todo.</td>
                  <td class="p-4 bg-amber-50 text-amber-800"><strong>Peligro.</strong> La IA puede inventar cifras de mercado o datos de competidores. Siempre verifica antes de presentar a clientes.</td>
                </tr>
                <tr class="border-t border-blue-100 hover:bg-blue-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">4. Usar IA es complicado.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Al contrario.</strong> Desarrollas planes de negocio, análisis de competencia y estrategias de Go-to-Market en minutos. Quienes dudan están cediendo cuota de mercado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Tu Nuevo Rol como Estratega Potenciado</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-colors">
              <span class="text-blue-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">IA como tu Analista de Negocios 24/7</h4>
                <p class="text-sm text-slate-600">Investiga mercados, analiza competidores, pre-cualifica oportunidades y prepara escenarios mientras tú te enfocas en crecer.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-colors">
              <span class="text-blue-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">Tú Decides, la IA Procesa</h4>
                <p class="text-sm text-slate-600">La IA estructura la operación y los datos, tú pones la visión, el criterio y la decisión estratégica final.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-colors">
              <span class="text-blue-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">Verifica Siempre los Datos</h4>
                <p class="text-sm text-slate-600">Antes de citar cifras en una presentación, confirma con fuentes reales. La IA puede inventar estadísticas.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
          <h4 class="font-bold text-blue-900 mb-3">🎯 Prompts Estratégicos</h4>
          <div class="space-y-3">
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Dame 3 argumentos sólidos para convencer a inversionistas o clientes clave de que [NUEVA ESTRATEGIA] aumentará la rentabilidad y reducirá riesgos operativos.</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Soy Director Comercial. Necesito estructurar un proceso de 3 pasos para integrar IA en la prospección diaria de mi equipo sin perder personalización.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Regla de Oro para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"La IA es tu mejor analista junior: incansable, rápido y siempre disponible. Pero tú eres el CEO que toma la decisión final."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento para el programa AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Los 4 Mitos que Derribamos Hoy</h3>
          <div class="overflow-hidden rounded-xl border border-purple-200">
            <table class="w-full text-sm">
              <thead class="bg-purple-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-slate-700 w-1/3">EL MITO</th>
                  <th class="text-left p-3 font-semibold text-purple-800">LA REALIDAD PARA LEGAL</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-purple-100 hover:bg-purple-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">1. Solo técnicos pueden usar IA.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Falso.</strong> Un abogado que sabe formular preguntas precisas obtiene mejores resultados que un programador sin criterio jurídico.</td>
                </tr>
                <tr class="border-t border-purple-100 hover:bg-purple-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">2. La IA reemplazará a los abogados.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Error.</strong> La IA no tiene criterio ético ni puede firmar escritos. El abogado que usa IA produce más y mejor que el que no.</td>
                </tr>
                <tr class="border-t border-purple-100 hover:bg-purple-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">3. La IA lo sabe todo.</td>
                  <td class="p-4 bg-red-50 text-red-800"><strong>⚠️ CRÍTICO.</strong> La IA puede citar leyes derogadas o inventar jurisprudencia. SIEMPRE verifica en fuentes oficiales antes de usar.</td>
                </tr>
                <tr class="border-t border-purple-100 hover:bg-purple-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">4. Usar IA es complicado.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Al contrario.</strong> Redactas borradores de contratos, resúmenes de jurisprudencia y minutas en minutos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Tu Nuevo Rol como Profesional Legal Potenciado</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-colors">
              <span class="text-purple-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">IA como tu Paralegal Digital</h4>
                <p class="text-sm text-slate-600">Busca jurisprudencia, organiza expedientes, redacta borradores. Tú validas y firmas.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-200 hover:border-red-400 transition-colors">
              <span class="text-red-500 text-xl">⚠️</span>
              <div>
                <h4 class="font-bold text-red-800">Verificación Obligatoria</h4>
                <p class="text-sm text-slate-600">NUNCA uses citas legales de la IA sin verificar en fuentes oficiales. Tu responsabilidad profesional está en juego.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-colors">
              <span class="text-purple-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">Criterio Humano Irremplazable</h4>
                <p class="text-sm text-slate-600">La IA no tiene ética profesional ni conoce el contexto específico de tu caso. Tú aportas el juicio crítico.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-200">
          <h4 class="font-bold text-purple-900 mb-3">⚖️ Prompts para Legal</h4>
          <div class="space-y-3">
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Antes de darme información legal, confirma: ¿esta norma sigue vigente a 2024? Si no estás 100% seguro, dime "VERIFICAR EN FUENTE OFICIAL".</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Actúa como asistente legal. Revisa este contrato y lista las cláusulas problemáticas. No inventes: si algo no está claro, pregunta.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Regla de Oro Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA es tu paralegal más rápido del mundo, pero sin título ni ética profesional. Tú firmas, tú verificas, tú respondes."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento para el programa AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Los 4 Mitos que Derribamos Hoy</h3>
          <div class="overflow-hidden rounded-xl border border-emerald-200">
            <table class="w-full text-sm">
              <thead class="bg-emerald-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-slate-700 w-1/3">EL MITO</th>
                  <th class="text-left p-3 font-semibold text-emerald-800">LA REALIDAD PARA GESTIÓN</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-emerald-100 hover:bg-emerald-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">1. Solo técnicos pueden usar IA.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Falso.</strong> Un asistente que conoce los procesos de su empresa obtiene mejores resultados que un técnico sin contexto organizacional.</td>
                </tr>
                <tr class="border-t border-emerald-100 hover:bg-emerald-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">2. La IA reemplazará mi trabajo.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Error.</strong> La IA reemplaza <strong>tareas repetitivas</strong>, no personas. El asistente que domina IA se vuelve indispensable.</td>
                </tr>
                <tr class="border-t border-emerald-100 hover:bg-emerald-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">3. La IA lo sabe todo.</td>
                  <td class="p-4 bg-amber-50 text-amber-800"><strong>Peligro.</strong> La IA puede inventar datos en reportes. Siempre verifica números antes de enviar a gerencia.</td>
                </tr>
                <tr class="border-t border-emerald-100 hover:bg-emerald-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">4. Usar IA quita mucho tiempo.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Al contrario.</strong> Reportes, actas, correos, organización de datos... procesos de horas ahora toman minutos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Tu Nuevo Rol como Gestor Potenciado</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-emerald-200 hover:border-emerald-400 transition-colors">
              <span class="text-emerald-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">IA como tu Asistente Administrativo Digital</h4>
                <p class="text-sm text-slate-600">Organiza datos, redacta correos, genera reportes. Tú supervisas la calidad y el toque humano.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-emerald-200 hover:border-emerald-400 transition-colors">
              <span class="text-emerald-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">De Operativo a Estratégico</h4>
                <p class="text-sm text-slate-600">La IA hace lo repetitivo, tú te enfocas en lo que requiere criterio y conocimiento de la empresa.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-emerald-200 hover:border-emerald-400 transition-colors">
              <span class="text-emerald-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">Conoces la Cultura, la IA No</h4>
                <p class="text-sm text-slate-600">Tú sabes cómo le gusta recibir información a tu jefe. La IA solo sabe formatos genéricos.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
          <h4 class="font-bold text-emerald-900 mb-3">📊 Prompts para Gestión</h4>
          <div class="space-y-3">
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Lista mis 5 tareas más repetitivas: [LISTAR]. Para cada una, dime cómo la IA puede ayudarme a hacerla en la mitad del tiempo.</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Soy asistente administrativo. Dame un plan de 30 días para integrar IA en mi trabajo diario sin abrumarme.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Regla de Oro para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"La IA hace en minutos lo que antes tomaba horas. Tu valor ahora está en el criterio, no en el tipeo."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento para el programa AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Los 4 Mitos que Derribamos Hoy</h3>
          <div class="overflow-hidden rounded-xl border border-amber-200">
            <table class="w-full text-sm">
              <thead class="bg-amber-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-slate-700 w-1/3">EL MITO</th>
                  <th class="text-left p-3 font-semibold text-amber-800">LA REALIDAD PARA EDUCACIÓN</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t border-amber-100 hover:bg-amber-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">1. Solo técnicos pueden usar IA.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Falso.</strong> Un docente que sabe formular buenas instrucciones obtiene mejores resultados. Tu conocimiento pedagógico es la clave.</td>
                </tr>
                <tr class="border-t border-amber-100 hover:bg-amber-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">2. La IA reemplazará a los docentes.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Error.</strong> La IA no tiene empatía ni conoce a tus estudiantes. Transforma cómo preparas clases, no te reemplaza en el aula.</td>
                </tr>
                <tr class="border-t border-amber-100 hover:bg-amber-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">3. La IA lo sabe todo.</td>
                  <td class="p-4 bg-red-50 text-red-800"><strong>⚠️ ENSEÑA ESTO.</strong> Tus estudiantes deben entender que la IA puede inventar información. El pensamiento crítico es esencial.</td>
                </tr>
                <tr class="border-t border-amber-100 hover:bg-amber-50 transition-colors">
                  <td class="p-4 bg-rose-100 font-medium text-rose-800">4. Usar IA es complicado.</td>
                  <td class="p-4 bg-green-50 text-green-800"><strong>Al contrario.</strong> Generas planificaciones, actividades, rúbricas y materiales adaptados en minutos.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Tu Nuevo Rol como Docente Potenciado</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-amber-200 hover:border-amber-400 transition-colors">
              <span class="text-amber-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">IA como tu Asistente Pedagógico</h4>
                <p class="text-sm text-slate-600">Genera materiales, diferencia actividades por nivel, crea evaluaciones. Tú adaptas a tu contexto.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-200 hover:border-red-400 transition-colors">
              <span class="text-red-500 text-xl">⚠️</span>
              <div>
                <h4 class="font-bold text-red-800">Enseña Pensamiento Crítico</h4>
                <p class="text-sm text-slate-600">Tus estudiantes deben aprender que la IA puede equivocarse. Integra actividades de verificación en tu currículum.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-amber-200 hover:border-amber-400 transition-colors">
              <span class="text-amber-500 text-xl">✓</span>
              <div>
                <h4 class="font-bold text-slate-800">Conoces a tus Estudiantes</h4>
                <p class="text-sm text-slate-600">La IA no sabe quién es tímido, quién aprende visual o quién necesita más apoyo. Tú sí.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200">
          <h4 class="font-bold text-amber-900 mb-3">🎓 Prompts para Educación</h4>
          <div class="space-y-3">
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Diseña una actividad de 20 minutos donde estudiantes de [NIVEL] deban verificar si 3 respuestas de IA son correctas o inventadas.</p>
            </div>
            <div class="bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Crea una actividad donde estudiantes comparen la misma pregunta hecha de forma vaga vs. de forma específica a una IA.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Regla de Oro para Educación</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara materiales en minutos, pero solo tú puedes encender la chispa del aprendizaje en tus estudiantes."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento para el programa AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "infografia-rol-copiloto": {
    meta: {
      type: "infographic",
      title: "Infografía: El Rol del Copiloto",
      subtitle: "Copiloto vs. Programador: El Nuevo Paradigma - Módulo 1",
      icon: "user-check",
      color: "emerald",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Copiloto_vs_Programador.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-emerald-900 mb-2">Mensaje de Julia</h2>
          <p class="text-emerald-700 italic">"Antes, usar tecnología significaba aprender a 'programar'. Hoy, con la IA Generativa, el paradigma cambió: ya no necesitas código, necesitas criterio y buenas instrucciones. Bienvenido a la era del Copiloto."</p>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4 text-center">📊 El Cambio de Paradigma</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-red-50 rounded-2xl p-6 border-2 border-red-300">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">❌</span>
                <h4 class="text-xl font-bold text-red-800">El Modelo Antiguo (Programador)</h4>
              </div>
              <ul class="space-y-3 text-red-800">
                <li class="flex items-start gap-2">
                  <span class="text-red-500 font-bold">✗</span>
                  <span>Necesitas aprender lenguajes de código (Python, JavaScript, etc.)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 font-bold">✗</span>
                  <span>Defines el "Cómo" exacto: cada paso técnico</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 font-bold">✗</span>
                  <span>Si hay un error, debes buscar en foros técnicos</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 font-bold">✗</span>
                  <span>Curva de aprendizaje: meses o años</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 font-bold">✗</span>
                  <span>El valor está en el conocimiento técnico</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-emerald-50 rounded-2xl p-6 border-2 border-emerald-400">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">✅</span>
                <h4 class="text-xl font-bold text-emerald-800">El Nuevo Modelo (Copiloto)</h4>
              </div>
              <ul class="space-y-3 text-emerald-800">
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✔</span>
                  <span>Solo necesitas escribir en lenguaje natural (español, inglés)</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✔</span>
                  <span>Defines el "Qué" y el "Por qué": el objetivo y el propósito</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✔</span>
                  <span>Si no te gusta, le pides que lo mejore en una conversación</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✔</span>
                  <span>Curva de aprendizaje: minutos a días</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-emerald-500 font-bold">✔</span>
                  <span>El valor está en tu criterio y experiencia de vida</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 ¿Qué hace un Copiloto?</h3>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors text-center">
              <div class="text-4xl mb-3">🧭</div>
              <h4 class="font-bold text-emerald-800 mb-2">Define el Destino</h4>
              <p class="text-sm text-slate-600">Tú decides qué quieres lograr. La IA ejecuta las tareas mecánicas para llegar ahí.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors text-center">
              <div class="text-4xl mb-3">🎤</div>
              <h4 class="font-bold text-emerald-800 mb-2">Conversa con la IA</h4>
              <p class="text-sm text-slate-600">No escribes código, escribes instrucciones claras. Cuanto mejor te expreses, mejor resultado obtienes.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors text-center">
              <div class="text-4xl mb-3">✅</div>
              <h4 class="font-bold text-emerald-800 mb-2">Valida y Ajusta</h4>
              <p class="text-sm text-slate-600">Revisas el resultado, pides cambios específicos y tomas la decisión final.</p>
            </div>
          </div>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">💡 El Cambio Mental</h3>
          <div class="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead class="bg-indigo-100">
                  <tr>
                    <th class="text-left p-3 font-semibold text-indigo-800">Antes pensabas...</th>
                    <th class="text-left p-3 font-semibold text-emerald-800">Ahora piensa...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-indigo-100">
                    <td class="p-3 text-red-700">"No sé programar, esto no es para mí."</td>
                    <td class="p-3 text-emerald-700 font-medium">"Solo necesito saber lo que quiero y pedirlo bien."</td>
                  </tr>
                  <tr class="border-b border-indigo-100">
                    <td class="p-3 text-red-700">"La tecnología me supera."</td>
                    <td class="p-3 text-emerald-700 font-medium">"La tecnología ahora me entiende a mí."</td>
                  </tr>
                  <tr class="border-b border-indigo-100">
                    <td class="p-3 text-red-700">"Necesito años para aprender esto."</td>
                    <td class="p-3 text-emerald-700 font-medium">"Con buenas instrucciones, empiezo a producir hoy."</td>
                  </tr>
                  <tr>
                    <td class="p-3 text-red-700">"La IA me va a reemplazar."</td>
                    <td class="p-3 text-emerald-700 font-medium">"La IA amplifica todo lo que ya sé hacer."</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">La Regla de Oro</h4>
          <p class="text-white font-medium text-lg italic">"El Copiloto no necesita saber cómo funciona el motor. Solo necesita saber a dónde quiere llegar y comunicarse claramente con su copiloto de IA."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Infografía oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200 space-y-4 mt-4">
          <h4 class="font-bold text-blue-900 flex items-center gap-2">
            <span class="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
            Tu Rol de Copiloto en Negocios
          </h4>
          <p class="text-sm text-slate-700">Como líder de negocio, tu expertise es la visión y la rentabilidad. La IA es tu analista de mercado y tu estratega operativo. Tú marcas el rumbo, ella traza el mapa.</p>
          <div class="prompt-block bg-slate-800 rounded-lg p-3">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm">Actúa como estratega de negocios senior. Mi empresa apunta al segmento [PERFIL]. Dame 3 enfoques disruptivos para diferenciar mi propuesta de valor de la competencia tradicional. Céntrate en rentabilidad y autoridad de marca.</p>
          </div>
        </div>
      `,
      "Legal & Profesional": `
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-5 border border-purple-200 space-y-4 mt-4">
          <h4 class="font-bold text-purple-900 flex items-center gap-2">
            <span class="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
            Tu Rol de Copiloto Legal
          </h4>
          <p class="text-sm text-slate-700">Tu criterio jurídico es irremplazable. La IA busca, organiza y redacta borradores. Tú validas, corriges y tomas las decisiones finales.</p>
          <div class="prompt-block bg-slate-800 rounded-lg p-3">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm">Actúa como asistente legal. Dame un borrador de [DOCUMENTO]. Marca con [REVISAR] cualquier sección donde no estés 100% seguro. Yo haré la revisión final.</p>
          </div>
        </div>
      `,
      "Gestión & Administración": `
        <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200 space-y-4 mt-4">
          <h4 class="font-bold text-emerald-900 flex items-center gap-2">
            <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
            Tu Rol de Copiloto Administrativo
          </h4>
          <p class="text-sm text-slate-700">Tú conoces los procesos y la cultura de tu empresa. La IA automatiza lo repetitivo. Tú supervisas la calidad y mantienes el toque humano.</p>
          <div class="prompt-block bg-slate-800 rounded-lg p-3">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm">Necesito organizar [TAREA/INFORMACIÓN]. Dame una estructura ordenada. Yo revisaré que cumpla con los estándares de mi empresa antes de usar.</p>
          </div>
        </div>
      `,
      "Educación & Capacitación": `
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200 space-y-4 mt-4">
          <h4 class="font-bold text-amber-900 flex items-center gap-2">
            <span class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
            Tu Rol de Copiloto Docente
          </h4>
          <p class="text-sm text-slate-700">Tu conocimiento pedagógico y de tus estudiantes es único. La IA genera materiales y actividades. Tú adaptas, evalúas y conectas con tus alumnos.</p>
          <div class="prompt-block bg-slate-800 rounded-lg p-3">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm">Necesito una actividad sobre [TEMA] para [NIVEL]. Dame 2 opciones distintas. Yo elegiré cuál se adapta mejor a mi grupo.</p>
          </div>
        </div>
      `
    }
  },
  "dentro-copiloto-1": {
    meta: {
      type: "guide",
      title: "¿Qué hay dentro del Copiloto?",
      subtitle: "Reflexiones sencillas para entender la IA - Módulo 1: Fundamentos",
      icon: "cpu",
      color: "emerald",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Que-hay-dentro-del-copiloto.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">La Analogía de Julia</h2>
          <p class="text-teal-700 italic">"En el curso, Julia nos explica que la IA es como un copiloto: ella no conduce el auto por nosotros, pero nos ayuda a llegar más rápido. Pero, ¿cómo funciona realmente su 'cerebro'? Vamos a entenderlo con ejemplos de la vida diaria."</p>
        </section>
        <section>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-emerald-800 mb-2">1. ¿Entiende o solo "adivina"?</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿La IA realmente comprende lo que le digo?</p>
              <div class="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                <p class="text-amber-800 mb-2"><strong>La respuesta corta es: No.</strong> La IA no comprende el significado de las cosas como lo haces tú. No tiene sentimientos, ni conciencia, ni "se da cuenta" de lo que está pasando.</p>
                <p class="text-sm text-amber-700"><strong>💡 El ejemplo del Autocompletar:</strong> Imagina cuando escribes en tu celular y él te sugiere la palabra siguiente. El teléfono no sabe si estás feliz o triste, solo calcula qué palabra es la más probable según lo que has escrito antes.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>La realidad:</strong> La IA es un motor de predicción gigante. Es como un imitador experto que ha leído tanto, que sabe qué responder para que parezca que entiende, aunque por dentro solo esté sumando y restando probabilidades.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-emerald-800 mb-2">2. Tus Órdenes vs. Su Memoria</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿Qué pasa si le pido algo que la IA "sabe" que no es así?</p>
              <div class="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                <p class="text-blue-800"><strong>💡 Ejemplo:</strong> Imagina que contratas a un dibujante experto para que ilustre un cuento donde los perros vuelan. El dibujante sabe que los perros no vuelan, pero como tú eres el jefe, él usará todo su talento para seguir tu orden al pie de la letra.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>El secreto:</strong> Tú tienes el control. Tus instrucciones son las que mandan. Si la IA no hace lo que esperas, es probable que tu instrucción necesite ser más específica o firme.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-emerald-800 mb-2">3. ¿Quién tiene el mando?</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si la IA puede corregirse sola, ¿significa que ya no me necesita?</p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <p class="text-purple-800"><strong>💡 Piensa en un GPS moderno:</strong> Si te pasas una calle, el GPS recalcula la ruta por sí mismo. Él "corrigió" el error del camino, pero... ¿quién fue el que decidió que hoy querías ir al parque y no a la oficina?</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Conclusión:</strong> Modelos como GPT o Gemini pueden detectar si cometieron un error lógico y arreglarlo. Pero el propósito (el porqué y para qué estamos usando la IA) siempre nace de ti. La IA puede ser un auto que se estaciona solo, pero el estratega que elige el destino final siempre serás tú.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-emerald-800 mb-2">4. La IA como un Megáfono</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿Por qué a veces la IA me da respuestas que no sirven?</p>
              <div class="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                <p class="text-rose-800"><strong>💡 Imagina que la IA es un megáfono:</strong> Si tú susurras algo confuso, el megáfono simplemente gritará esa confusión a todo volumen. Pero si hablas con claridad, el megáfono hará que tu mensaje llegue con fuerza a todos lados.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>La frase de Julia:</strong> "La IA amplifica lo que somos". Si tus órdenes son desordenadas, la respuesta será un desorden gigante. Ella no soluciona tu falta de claridad, solo la hace más grande y rápida.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Reto AulaGenIA</h4>
          <p class="text-white font-medium">Haz la prueba: Pídele a la IA que te explique un tema difícil usando una analogía de cocina o deportes. Verás cómo ella se adapta a tu creatividad para ayudarte a entender lo mejor.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para alumnos de AulaGenIA. ¡Tú eres el conductor!</div>
        <div class="flex items-center gap-3 py-2">
          <div class="flex-1 h-px bg-gradient-to-r from-transparent to-teal-300"></div>
          <span class="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">Para tu perfil</span>
          <div class="flex-1 h-px bg-gradient-to-l from-transparent to-teal-300"></div>
        </div>
      </article>
    `,
    segments: {
      "Negocios & Ventas": `<div class="bg-teal-50 rounded-xl p-4 border border-teal-200"><h4 class="font-bold text-teal-800 mb-2">🎯 Tu Reto de Negocios</h4><p class="text-sm text-slate-700 mb-3">Usa el concepto del megáfono: si tu estrategia de crecimiento es confusa, la IA amplificará el desorden. Sé radicalmente claro en tu visión.</p><div class="bg-slate-800 rounded-lg p-3 mt-2"><button onclick="copyResourcePrompt(this)" class="float-right btn-brand-sm">Copiar</button><p class="text-white text-sm">"Actúa como consultor de estrategia corporativa. Analiza mi modelo de ingresos actual y detecta 3 fugas de rentabilidad usando la analogía de una 'tubería con fugas'."</p></div></div>`,
      "Legal & Profesional": `<div class="bg-teal-50 rounded-xl p-4 border border-teal-200"><h4 class="font-bold text-teal-800 mb-2">⚖️ Tu Reto Legal</h4><p class="text-sm text-slate-700 mb-3">La IA predice probabilidades, no verdades jurídicas. Tú eres el filtro de validación.</p><div class="bg-slate-800 rounded-lg p-3 mt-2"><button onclick="copyResourcePrompt(this)" class="float-right btn-brand-sm">Copiar</button><p class="text-white text-sm">"Explica el concepto de 'precedente judicial' usando una analogía de la vida cotidiana."</p></div></div>`,
      "Gestión & Administración": `<div class="bg-teal-50 rounded-xl p-4 border border-teal-200"><h4 class="font-bold text-teal-800 mb-2">📊 Tu Reto de Gestión</h4><p class="text-sm text-slate-700 mb-3">La IA amplifica el orden o el caos. Organiza tus procesos antes de delegarlos.</p><div class="bg-slate-800 rounded-lg p-3 mt-2"><button onclick="copyResourcePrompt(this)" class="float-right btn-brand-sm">Copiar</button><p class="text-white text-sm">"Explica la metodología Kanban usando una analogía de restaurante."</p></div></div>`,
      "Educación & Capacitación": `<div class="bg-teal-50 rounded-xl p-4 border border-teal-200"><h4 class="font-bold text-teal-800 mb-2">📚 Tu Reto Educativo</h4><p class="text-sm text-slate-700 mb-3">La IA es excelente para crear analogías. Úsala para explicar temas complejos a tus estudiantes.</p><div class="bg-slate-800 rounded-lg p-3 mt-2"><button onclick="copyResourcePrompt(this)" class="float-right btn-brand-sm">Copiar</button><p class="text-white text-sm">"Explica el ciclo del agua a niños de 8 años usando una analogía de parque de diversiones."</p></div></div>`
    }
  },
  "fuentes-autoridad-1": {
    meta: {
      type: "guide",
      title: "Nuestras Fuentes de Autoridad",
      subtitle: "La excelencia se construye sobre hombros de gigantes - Módulo 1",
      icon: "book-open",
      color: "emerald",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-1.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"En AulaGenIA no enseñamos opiniones, enseñamos evidencia. Este curso se apoya en los pilares técnicos y estratégicos que están definiendo el futuro. Si quieres ser un experto, primero debes conocer a quienes crearon las reglas del juego."</p>
        </section>
        <section class="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 mb-6">
          <p class="text-slate-600 text-sm">
            Esta sección está personalizada para tu perfil profesional. Hemos filtrado las fuentes y reportes que tienen impacto directo en tu área.
          </p>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone la potencia, pero los fundamentos ponen el control. Sé un profesional con base, no solo un usuario con suerte."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material exclusivo para alumnos de AulaGenIA - Módulo 1. © 2025 AulaGenIA. Todos los derechos reservados.</div>
      </article>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Los Cimientos para tu Estrategia de Negocio</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Microsoft (2024). Work Trend Index Annual Report: IA en el trabajo</h4>
              <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                <p class="text-sm text-blue-800"><strong>🎯 Impacto en Negocios:</strong> Este reporte confirma que el 75% de los empleados ya usa IA, pero sin estrategia. Tu ventaja competitiva como líder es pasar del "uso casual" a la implementación corporativa estructurada.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Ng, A. (2017). Artificial Intelligence is the New Electricity. Stanford University</h4>
              <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                <p class="text-sm text-blue-800"><strong>🎯 Impacto en Negocios:</strong> Andrew Ng compara la IA con la electricidad. No es una "tecnología más", es un insumo básico. Quien no electrificó su fábrica en el siglo XX, quebró. Lo mismo pasará con quien no integre IA hoy.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">McKinsey & Company (2023). The Economic Potential of Generative AI</h4>
              <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
                <p class="text-sm text-blue-800"><strong>🎯 Impacto en Negocios:</strong> McKinsey estima que la IA agregará trillones de dólares a la economía global. Tu objetivo no es "saber de tecnología", sino capturar una parte de ese valor para tu empresa.</p>
              </div>
            </div>
          </div>
        </section>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Fundamentos para la Práctica Profesional</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Association for Computing Machinery (ACM). (2018). Eficiencia Algorítmica</h4>
              <div class="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-400">
                <p class="text-sm text-purple-800"><strong>⚖️ Impacto Legal:</strong> Entender cómo los algoritmos priorizan la eficiencia sobre la verdad es clave para tu rol. La IA no tiene ética ni concepto de justicia, solo busca patrones matemáticos.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Microsoft (2024). Work Trend Index: La Nueva Productividad</h4>
              <div class="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-400">
                <p class="text-sm text-purple-800"><strong>⚖️ Impacto Legal:</strong> El mercado ya no paga por "horas de redacción", paga por criterio y estrategia. La IA automatiza la redacción de contratos; tu valor está en la revisión y la estrategia jurídica.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Vaswani, A. (2017). Attention Is All You Need (El origen de los Transformers)</h4>
              <div class="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-400">
                <p class="text-sm text-purple-800"><strong>⚖️ Impacto Legal:</strong> Este paper define cómo la IA "presta atención" al contexto. Entender esto es vital para saber por qué un modelo puede "olvidar" una cláusula en un documento muy largo.</p>
              </div>
            </div>
          </div>
        </section>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Referencias para la Eficiencia Operativa</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Microsoft (2024). Work Trend Index: Delegar a la IA</h4>
              <div class="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-400">
                <p class="text-sm text-emerald-800"><strong>📊 Impacto en Gestión:</strong> El reporte indica que la principal barrera no es la tecnología, sino el miedo a "parecer flojo". La realidad es que quien delega lo operativo a la IA tiene más tiempo para lo estratégico.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Ng, A. (2017). IA como la Nueva Electricidad</h4>
              <div class="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-400">
                <p class="text-sm text-emerald-800"><strong>📊 Impacto en Gestión:</strong> Así como hoy no imaginas una oficina sin luz eléctrica, pronto será impensable gestionar procesos sin IA. Es la herramienta que ilumina los datos oscuros de tu organización.</p>
              </div>
            </div>
          </div>
        </section>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Evidencia para la Innovación Educativa</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">UNESCO (2023). Guía de inicio rápido de ChatGPT e IA en la educación superior</h4>
              <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p class="text-sm text-amber-800"><strong>🎓 Impacto Educativo:</strong> La UNESCO recomienda no prohibir, sino integrar. El enfoque es usar la IA para fomentar el pensamiento crítico, pidiendo a los alumnos que verifiquen y mejoren lo que la máquina genera.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Vaswani, A. (2017). Attention Is All You Need</h4>
              <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p class="text-sm text-amber-800"><strong>🎓 Impacto Educativo:</strong> Comprender cómo "aprenden" las máquinas (patrones, no significados) es fundamental para explicar a tus estudiantes por qué la IA no sustituye el estudio, solo acelera la producción.</p>
              </div>
            </div>
          </div>
        </section>
      `
    }
  },
  "listado-verificacion-m1": {
    meta: {
      type: "checklist",
      title: "Listado de Verificación AulaGenIA",
      subtitle: "3 Pasos para dominar las respuestas de tu Copiloto - Módulo 1: Fundamentos",
      icon: "check-square",
      color: "emerald",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Listado-Verificacion.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Para qué sirve este listado?</h2>
          <p class="text-emerald-700">La IA siempre querrá darte una respuesta, incluso si no sabe la verdad. Para que tu copiloto sea útil y no te confunda, sigue estos tres pasos sencillos cada vez que chatees con ella.</p>
        </section>
        <section class="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 mb-6">
          <p class="text-slate-600 text-sm">
            Este checklist ha sido adaptado específicamente para que verifiques la calidad de las respuestas en tu área profesional.
          </p>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tú eres quien decide el destino."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material diseñado exclusivamente para alumnos de AulaGenIA. Edición Dic. 2025.</div>
      </article>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-white rounded-xl p-5 border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">1</span>
              <h3 class="font-bold text-indigo-800 text-lg">PASO 1: Define el Objetivo Estratégico</h3>
            </div>
            <p class="text-slate-600 mb-3">No pidas "algo de ventas". Define el KPI o la meta.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Claridad:</strong> ¿Le dije si quiero aumentar leads, cerrar una venta o fidelizar? (Ej: "Objetivo: Reducir la tasa de churn un 5%").</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">2</span>
              <h3 class="font-bold text-blue-800 text-lg">PASO 2: Da Contexto de Negocio</h3>
            </div>
            <p class="text-slate-600 mb-3">La IA no conoce tu empresa ni tu mercado si no se lo dices.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Perfil de Cliente:</strong> ¿Le expliqué quién es mi Buyer Persona? (Ej: "Gerentes de TI de 40-50 años en banca").</label>
              </div>
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Propuesta de Valor:</strong> ¿Sabe la IA por qué mi producto gana a la competencia?</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">3</span>
              <h3 class="font-bold text-green-800 text-lg">PASO 3: Verifica la Rentabilidad</h3>
            </div>
            <p class="text-slate-600 mb-3">La IA puede sugerir ideas creativas pero muy costosas. Tú filtras.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Factibilidad:</strong> ¿Es esta idea viable con mi presupuesto actual? ¿Los datos de mercado citados son reales?</label>
              </div>
            </div>
          </div>
        </div>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-white rounded-xl p-5 border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">1</span>
              <h3 class="font-bold text-indigo-800 text-lg">PASO 1: Cero Ambigüedad</h3>
            </div>
            <p class="text-slate-600 mb-3">En derecho, una palabra cambia todo. Sé preciso.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Territorialidad:</strong> ¿Especifiqué la jurisdicción? (Ej: "Según el Código Civil de Chile", no "leyes generales").</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">2</span>
              <h3 class="font-bold text-blue-800 text-lg">PASO 2: Contexto Procesal</h3>
            </div>
            <p class="text-slate-600 mb-3">La IA no sabe en qué etapa está tu caso.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Postura:</strong> ¿Le dije a quién defiendo? (Ej: "Redacta favoreciendo al demandado").</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-red-200 hover:border-red-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-red-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">3</span>
              <h3 class="font-bold text-red-800 text-lg">PASO 3: Verificación CRÍTICA</h3>
            </div>
            <p class="text-slate-600 mb-3">La IA inventa leyes. Tu licencia depende de esto.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Fuente Primaria:</strong> ¿He verificado cada artículo citado en la ley oficial vigente? NUNCA confíes ciegamente.</label>
              </div>
            </div>
          </div>
        </div>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-white rounded-xl p-5 border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">1</span>
              <h3 class="font-bold text-indigo-800 text-lg">PASO 1: Formato de Salida</h3>
            </div>
            <p class="text-slate-600 mb-3">Para ser eficiente, la IA debe darte el trabajo listo para usar.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Estructura:</strong> ¿Pedí el formato exacto? (Ej: "Tabla CSV", "Lista con bullets", "Texto en 3 párrafos").</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">2</span>
              <h3 class="font-bold text-blue-800 text-lg">PASO 2: Datos de Entrada</h3>
            </div>
            <p class="text-slate-600 mb-3">Si entra basura, sale basura.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Limpieza:</strong> ¿Le di los datos desordenados pero completos? (Ej: "Aquí están las notas de la reunión, extrae los acuerdos").</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">3</span>
              <h3 class="font-bold text-green-800 text-lg">PASO 3: Control de Calidad</h3>
            </div>
            <p class="text-slate-600 mb-3">Revisa antes de enviar a gerencia.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Errores Numéricos:</strong> ¿Sumé las cifras yo mismo? (La IA falla en matemáticas simples a veces).</label>
              </div>
            </div>
          </div>
        </div>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-white rounded-xl p-5 border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">1</span>
              <h3 class="font-bold text-indigo-800 text-lg">PASO 1: Objetivo de Aprendizaje</h3>
            </div>
            <p class="text-slate-600 mb-3">¿Qué deben lograr tus estudiantes?</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Meta Pedagógica:</strong> (Ej: "Que comprendan el concepto de X", no "haz una tarea sobre X").</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-blue-200 hover:border-blue-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">2</span>
              <h3 class="font-bold text-blue-800 text-lg">PASO 2: Adaptación al Nivel</h3>
            </div>
            <p class="text-slate-600 mb-3">La IA tiende a ser muy técnica o muy infantil si no la ajustas.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Audiencia:</strong> ¿Especifiqué la edad y conocimientos previos? (Ej: "Niños de 10 años sin base científica").</label>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 border-2 border-green-200 hover:border-green-400 transition-colors">
            <div class="flex items-center gap-3 mb-3">
              <span class="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold text-lg">3</span>
              <h3 class="font-bold text-green-800 text-lg">PASO 3: Filtro Humano</h3>
            </div>
            <p class="text-slate-600 mb-3">La educación requiere conexión humana.</p>
            <div class="space-y-2">
              <div class="flex items-start gap-2">
                <input type="checkbox" class="checkbox-custom">
                <label class="text-sm text-slate-700"><strong>Calidez:</strong> ¿Suena como yo o como un robot? ¿La actividad fomenta la interacción real en el aula?</label>
              </div>
            </div>
          </div>
        </div>
      `
    }
  },
  "glosario-m1v1": {
    meta: {
      type: "glossary",
      title: "📖 IA en Servilleta: Glosario de Iniciación",
      subtitle: "Módulo 1 - Video 1: Los cimientos que cambian tu mentalidad",
      icon: "book",
      color: "emerald",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M1V1.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"¡Felicidades por dar el primer paso! No quiero que las palabras técnicas te frenen. He preparado este glosario con los cimientos básicos que acabamos de ver en el primer video. Léelo antes de ir al siguiente, porque aquí es donde cambia tu mentalidad de 'usuario' a 'experto'. ¡A darle!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Glosario de Iniciación para Líderes de Negocio
            </h4>
            <p class="text-sm text-slate-700 mb-4">Cada concepto adaptado a tu realidad estratégica. Incluye analogías empresariales y prompts listos para usar.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INTELIGENCIA ARTIFICIAL (IA)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Capacidad de una máquina para realizar tareas que normalmente asociamos con la inteligencia humana.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es como tener un analista de estrategia senior que trabajó en las 500 mejores empresas del mundo, disponible 24/7 por el costo de un café mensual.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un consultor de McKinsey con 20 años de experiencia. Explícame cómo la IA puede transformar mi modelo de negocio de [INDUSTRIA] en los próximos 2 años. Dame 3 oportunidades concretas de ROI.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. DEEP LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tecnología que permite a las máquinas aprender solas imitando las conexiones del cerebro humano.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es como un vendedor que aprende de cada cierre exitoso y fallido de toda tu industria simultáneamente. Cuantos más datos de mercado procesa, mejores predicciones de demanda hace.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Explícame en términos de negocio cómo podría usar el aprendizaje automático para predecir qué clientes están en riesgo de abandonar mi servicio. Dame métricas clave a monitorear.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. IA APLICADA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El uso estratégico de la herramienta para obtener resultados reales, no solo experimentar.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es la diferencia entre un CEO que tiene un ERP instalado vs. uno que lo usa para tomar decisiones de inversión en tiempo real. El software no vale si no genera ROI.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Soy líder de negocio en [SECTOR]. Dame 5 casos de uso de IA que pueda implementar esta semana para generar impacto inmediato en productividad o ventas. Prioriza por facilidad de implementación.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CEREBRO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema que procesa información aprendiendo de millones de patrones previos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Imagina un equipo de Business Intelligence que procesó todos los reportes de tu industria de los últimos 20 años y puede cruzar esa información en segundos para tu próxima decisión de inversión.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. CO-PILOTO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El rol de la IA: no conduce tu empresa, pero te ayuda a llegar más rápido.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es como tener un CFO virtual que prepara todos los escenarios financieros antes de tu reunión de directorio. Él no toma la decisión de inversión, pero te muestra las opciones optimizadas.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como mi copiloto estratégico. Mi empresa factura [MONTO] al año en [INDUSTRIA]. Dame 3 escenarios de crecimiento para el próximo trimestre con sus riesgos y oportunidades.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. EFECTO DE AMPLIFICACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La IA amplifica lo que tú eres. Si eres claro, da resultados brillantes. Si eres caótico, amplifica el caos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es un megáfono en la sala del directorio: si tu visión estratégica es clara, la IA la proyectará con fuerza. Si tu estrategia es confusa, solo amplificará la confusión a toda la organización.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. REVOLUCIÓN CULTURAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El cambio de "tener acceso a información" (Google) a "saber procesarla" (IA).</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es el salto de tener una biblioteca de estudios de mercado a tener un analista senior que los resume, cruza y te da recomendaciones ejecutivas en 30 segundos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"La IA no piensa por ti, te ayuda a escalar tu pensamiento estratégico. El que domina la instrucción, domina la ejecución."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Glosario de Iniciación para Profesionales del Derecho
            </h4>
            <p class="text-sm text-slate-700 mb-4">Conceptos fundamentales adaptados al ejercicio jurídico. Incluye analogías legales y prompts para tu práctica diaria.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INTELIGENCIA ARTIFICIAL (IA)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Capacidad de una máquina para realizar tareas que normalmente asociamos con la inteligencia humana.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es como tener un paralegal que ha leído toda la jurisprudencia existente de todos los países, disponible 24/7, pero que carece por completo de ética profesional o colegiatura.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente legal especializado en derecho [MATERIA] chileno. Dame un resumen ejecutivo de los principios jurídicos aplicables a [SITUACIÓN]. Indica si hay jurisprudencia relevante pero ADVIERTE si no estás seguro de la vigencia.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. DEEP LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tecnología que permite a las máquinas aprender de patrones previos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Imagina un sistema que aprende de cada sentencia dictada en tu país. Cuantas más resoluciones procesa, mejor detecta patrones en las decisiones judiciales. Pero cuidado: puede confundir correlación con causalidad jurídica.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. IA APLICADA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El uso estratégico de la herramienta para obtener resultados reales.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es la diferencia entre un abogado que tiene acceso a bases de datos jurídicas y uno que las usa estratégicamente para ganar casos. El acceso no gana juicios, el criterio sí.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Soy abogado especialista en [ÁREA]. Dame 5 tareas de mi práctica diaria donde la IA puede ahorrarme horas de trabajo sin comprometer la calidad profesional ni la confidencialidad del cliente.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CEREBRO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema que procesa información aprendiendo de patrones.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Como un índice de jurisprudencia viviente que cruza casos similares en milésimas de segundo. Pero recuerda: encuentra patrones textuales, no interpreta la ratio decidendi.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. CO-PILOTO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El rol de la IA: asiste pero no decide.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es tu paralegal más eficiente: redacta borradores de escritos, organiza cronologías de hechos, resume expedientes. Pero TÚ firmas, TÚ validas las citas legales, TÚ llevas la toga ante el tribunal.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como mi asistente legal. Prepara un borrador de [DOCUMENTO] para [SITUACIÓN]. Marca con [VERIFICAR] cualquier cita de ley o jurisprudencia. Yo haré la validación final antes de firmar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">6. EFECTO DE AMPLIFICACIÓN ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La IA amplifica lo que tú eres, incluidos tus errores.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400 mb-2">
                  <p class="text-xs text-red-800"><strong>⚠️ Advertencia Legal:</strong> Si pides un escrito ambiguo, obtendrás un escrito ambiguo más largo. Si pides una cita de ley sin verificar, puede inventarte un artículo con total seguridad. TU LICENCIA está en juego.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. REVOLUCIÓN CULTURAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El cambio de "tener acceso a la ley" a "saber aplicarla eficientemente".</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> El abogado del futuro no es quien más códigos tiene, sino quien mejor los aplica con ayuda de herramientas. Antes ganaba el que más leía; ahora gana el que mejor pregunta y valida.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA te da velocidad, pero la validación jurídica la pones tú. NUNCA confíes ciegamente en una cita legal de la IA."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Glosario de Iniciación para Profesionales de Gestión
            </h4>
            <p class="text-sm text-slate-700 mb-4">Conceptos adaptados a la eficiencia operativa. Incluye analogías administrativas y prompts para tu día a día.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INTELIGENCIA ARTIFICIAL (IA)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Capacidad de una máquina para realizar tareas que normalmente asociamos con la inteligencia humana.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400 mb-2">
                  <p class="text-xs text-emerald-800"><strong>📊 Analogía para Gestión:</strong> Es como tener un asistente administrativo que nunca descansa, nunca olvida un deadline, y puede procesar 100 documentos mientras tú revisas uno. Pero no conoce la cultura de tu empresa.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente ejecutivo senior. Tengo estas 15 tareas pendientes: [LISTAR]. Organízalas por prioridad usando la matriz Eisenhower (urgente/importante) y sugiere cuáles podría delegar a la IA.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. DEEP LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tecnología que permite a las máquinas aprender de patrones.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400 mb-2">
                  <p class="text-xs text-emerald-800"><strong>📊 Analogía para Gestión:</strong> Como un sistema de archivo inteligente que aprende cómo clasificas los documentos y empieza a hacerlo solo. Cuantos más documentos procesa, más se adapta a tu metodología.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. IA APLICADA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El uso estratégico para obtener resultados reales.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400 mb-2">
                  <p class="text-xs text-emerald-800"><strong>📊 Analogía para Gestión:</strong> Es la diferencia entre tener un software de gestión instalado y realmente usarlo para automatizar reportes, agendar reuniones y organizar información. El valor está en el uso, no en la instalación.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Soy asistente administrativa. Dame 5 tareas repetitivas de mi día que puedo automatizar o acelerar con IA: emails, reportes, organización de datos, agendamiento. Prioriza por ahorro de tiempo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CEREBRO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema que procesa información aprendiendo de patrones.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400 mb-2">
                  <p class="text-xs text-emerald-800"><strong>📊 Analogía para Gestión:</strong> Como una bandeja de entrada inteligente que aprende qué correos son urgentes, cuáles pueden esperar, y cuáles son spam. Procesa en segundos lo que a ti te tomaría horas revisar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. CO-PILOTO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El rol de la IA: asiste pero tú supervisas.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400 mb-2">
                  <p class="text-xs text-emerald-800"><strong>📊 Analogía para Gestión:</strong> Es tu practicante más eficiente: redacta el primer borrador de correos, organiza datos en tablas, prepara actas de reuniones. Pero TÚ revisas antes de enviar y añades el toque humano que solo tú conoces.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como mi asistente. Aquí están las notas desordenadas de la reunión de hoy: [PEGAR]. Extrae: (1) Acuerdos tomados, (2) Responsables, (3) Fechas límite, (4) Temas pendientes. Formato: tabla limpia.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. EFECTO DE AMPLIFICACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La IA amplifica lo que tú eres, orden o caos.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>📊 Advertencia para Gestión:</strong> Si le das datos desordenados, obtendrás un desorden más grande y más rápido. Pero si le das información clara, te devuelve reportes impecables en segundos.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. REVOLUCIÓN CULTURAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El cambio de "tener herramientas" a "usarlas estratégicamente".</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400 mb-2">
                  <p class="text-xs text-emerald-800"><strong>📊 Analogía para Gestión:</strong> El asistente del futuro no es quien más rápido tipea, sino quien mejor sabe instruir a la IA para que tipee por él. Tu valor pasa de "ejecutor" a "supervisor estratégico".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"La IA reemplaza tareas, no personas. El profesional que domina la IA se vuelve insustituible."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Glosario de Iniciación para Educadores
            </h4>
            <p class="text-sm text-slate-700 mb-4">Conceptos adaptados al aula y la capacitación. Incluye analogías pedagógicas y prompts para tu práctica docente.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INTELIGENCIA ARTIFICIAL (IA)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Capacidad de una máquina para realizar tareas que normalmente asociamos con la inteligencia humana.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es como tener un bibliotecario incansable que ha leído todos los libros del mundo, pero que nunca ha dado una clase ni conoce a tus estudiantes. Sabe mucho en general, pero tú aportas el contexto pedagógico.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como pedagogo experto en [ASIGNATURA]. Mis estudiantes de [NIVEL/EDAD] tienen dificultades con [TEMA]. Dame 3 estrategias didácticas diferentes para abordar este contenido, explicando por qué funcionaría cada una.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. DEEP LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tecnología que permite a las máquinas aprender de patrones.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Imagina un estudiante que puede leer 10.000 ensayos sobre un tema y detectar patrones de argumentación. Aprende "cómo se escribe" pero no comprende el significado profundo. Reconoce formas, no conceptos.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. IA APLICADA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El uso estratégico para obtener resultados reales.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es la diferencia entre un profesor que tiene acceso a recursos digitales y uno que los usa estratégicamente para personalizar el aprendizaje. El recurso no enseña solo; la pedagogía sí.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Soy docente de [ASIGNATURA] con [N] estudiantes. Dame 5 formas prácticas de usar IA en mi planificación semanal: crear actividades, diseñar evaluaciones, generar retroalimentación. Prioriza por impacto pedagógico.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. CEREBRO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema que procesa información aprendiendo de patrones.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Como un enciclopedia viviente que puede cruzar información de todas las materias en segundos. Pero cuidado: sabe los hechos, no entiende el proceso de aprender ni las emociones del estudiante.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. CO-PILOTO DIGITAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El rol de la IA: asiste la planificación, el docente conecta.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es tu ayudante de cátedra más eficiente: prepara materiales, genera variaciones de ejercicios, sugiere dinámicas. Pero TÚ conoces a Juanito que es tímido, a María que aprende visual, y a Pedro que necesita más apoyo. La conexión humana es tuya.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como mi asistente pedagógico. Tengo 45 minutos de clase sobre [TEMA] para estudiantes de [NIVEL]. Diseña: 5 min intro motivadora, 25 min actividad central participativa, 10 min cierre reflexivo, 5 min evaluación rápida.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. EFECTO DE AMPLIFICACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La IA amplifica lo que tú eres como docente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Si tu objetivo pedagógico es claro, la IA te dará actividades brillantes. Si tu instrucción es vaga ("hazme algo para la clase"), obtendrás contenido genérico que no conecta con tus estudiantes.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. REVOLUCIÓN CULTURAL</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El cambio de "memorizar contenido" a "saber procesarlo".</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Tus estudiantes ya no necesitan memorizar fechas que Google tiene; necesitan saber hacer las preguntas correctas y verificar las respuestas. Tu rol evoluciona de "fuente de datos" a "guía del pensamiento crítico".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara materiales en minutos, pero solo tú puedes encender la chispa del aprendizaje en tus estudiantes."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "glosario-m1v2": {
    meta: {
      type: "glossary",
      title: "📖 IA en Servilleta: Glosario de Conceptos Generativos",
      subtitle: "Módulo 1 - Video 2: El lenguaje de la IA",
      icon: "book",
      color: "emerald",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M1V2.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"¡Bienvenido al segundo video! Aquí aprenderás el lenguaje de la IA de forma sencilla. No te satures con los nombres; usa este glosario como tu brújula para entender cómo funciona la máquina. ¡Seguimos!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Conceptos Generativos para Líderes de Negocio
            </h4>
            <p class="text-sm text-slate-700 mb-4">El vocabulario técnico traducido a tu realidad comercial. Domina estos conceptos y lidera la transformación en tu empresa.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. IA GENERATIVA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> IA que no solo analiza datos, sino que crea contenido nuevo (texto, imagen, video) desde cero.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es pasar de tener reportes estáticos a tener un equipo creativo 24/7 que genera propuestas, presentaciones y estrategias personalizadas bajo demanda.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como director creativo senior. Genera 3 conceptos de campaña para lanzar [PRODUCTO] al segmento [AUDIENCIA]. Para cada uno incluye: hook principal, beneficio clave y call to action.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM (GRAN MODELO DE LENGUAJE)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Los "cerebros" de texto entrenados con trillones de palabras para predecir respuestas coherentes.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es como tener acceso al conocimiento colectivo de todos los consultores de negocio del mundo, procesado en segundos para tu decisión específica.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN (PROMPT)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La orden que le das a la IA. Es el puente entre tu necesidad y lo que genera.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es el brief estratégico que le das a tu agencia. Si dices "hazme algo de marketing", fracasan. Si das objetivos, métricas y contexto, entregan oro.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Eres estratega comercial. Mi empresa vende [PRODUCTO] a [AUDIENCIA]. Objetivo: aumentar ticket promedio 20%. Dame 3 tácticas de upselling con scripts de venta para cada una.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-amber-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">4. ALUCINACIÓN ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cuando la IA inventa información con total seguridad.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚠️ Riesgo para Negocios:</strong> Puede inventar cifras de mercado, estadísticas de competidores o datos financieros. Si los presentas sin verificar, pierdes credibilidad ante clientes e inversores.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. TOKENS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Las unidades mínimas que la IA procesa. Tiene un límite por conversación.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es tu presupuesto de atención en una presentación. Si gastas todo en la introducción, no queda "presupuesto" para el cierre de venta.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. VENTANA DE CONTEXTO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La memoria de corto plazo de la IA. Cuánto puede recordar en una conversación.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es como una reunión de directorio. Si metes 50 temas en una hora, los últimos se olvidan. Enfoca la conversación en lo estratégico.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. MULTIMODALIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La capacidad de procesar texto, audio e imagen simultáneamente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es un analista que puede ver tu góndola, leer tu reporte y escuchar la llamada del cliente, todo a la vez, para darte insights integrados.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">[SUBIR IMAGEN] Esta es una foto de mi producto en góndola. Analiza: (1) Visibilidad vs competencia, (2) Oportunidades de mejora en packaging, (3) Sugerencias de posicionamiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado depende de la claridad de tu instrucción. Líder claro, IA poderosa."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Conceptos Generativos para Profesionales del Derecho
            </h4>
            <p class="text-sm text-slate-700 mb-4">El vocabulario técnico traducido al ejercicio jurídico. Entiende la máquina para usarla con criterio profesional.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. IA GENERATIVA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> IA que crea contenido nuevo desde cero.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es pasar de buscar precedentes a tener un asistente que redacta borradores de escritos basándose en toda la doctrina existente. Pero recuerda: TÚ firmas.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM (GRAN MODELO DE LENGUAJE)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Modelos entrenados para generar texto coherente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Ha "leído" toda la legislación, pero como un estudiante que memoriza sin entender. Sabe el texto, no el espíritu de la ley.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN (PROMPT)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La orden que le das a la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es la instrucción que das al paralegal. Ambigüedad = error. Debes especificar jurisdicción, materia, postura y formato exacto.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente legal chileno. Redacta un borrador de [TIPO DE ESCRITO] para un caso de [MATERIA]. Postura: favoreciendo al [DEMANDANTE/DEMANDADO]. Marca con [VERIFICAR] toda cita legal.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">4. ALUCINACIÓN ⚠️ CRÍTICO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cuando la IA inventa información con total seguridad.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400 mb-2">
                  <p class="text-xs text-red-800"><strong>⚠️ RIESGO PROFESIONAL:</strong> Puede citar leyes derogadas, inventar jurisprudencia inexistente o confundir artículos. Tu licencia profesional está en juego. SIEMPRE verifica en fuentes oficiales.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. TOKENS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Unidades de procesamiento con límite.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Son las fojas del expediente digital. Si tu documento es muy largo, la IA "olvida" las primeras páginas al llegar al final.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. VENTANA DE CONTEXTO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La memoria de corto plazo.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Si el expediente es muy grueso, el paralegal digital olvida la demanda inicial cuando llega a las pruebas. Segmenta tu trabajo en partes.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. MULTIMODALIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Procesar texto, audio e imagen.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Puedes subir una foto de un contrato escaneado y la IA lo transcribe, identifica cláusulas problemáticas y señala partes ilegibles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack Legal</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado depende de la claridad de tu instrucción. Abogado preciso, IA útil."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Conceptos Generativos para Profesionales de Gestión
            </h4>
            <p class="text-sm text-slate-700 mb-4">El vocabulario técnico traducido a tu operación diaria. Entiende la máquina para multiplicar tu eficiencia.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. IA GENERATIVA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> IA que crea contenido nuevo desde cero.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es pasar de copiar y pegar plantillas a tener un asistente que genera reportes, correos y actas personalizadas en segundos.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Genera un correo profesional para informar a [DESTINATARIO] sobre [TEMA]. Tono: formal pero cercano. Máximo 100 palabras. Incluye saludo y despedida apropiados.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM (GRAN MODELO DE LENGUAJE)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Modelos entrenados para generar texto coherente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es como tener acceso a todos los manuales de procedimientos del mundo, resumidos y adaptados a tu pregunta específica.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN (PROMPT)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La orden que le das a la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es el procedimiento operativo (SOP) que le das. Si dices "ordena esto", lo hará mal. Si das formato, criterio y ejemplo, ejecuta perfecto.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-amber-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">4. ALUCINACIÓN ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cuando la IA inventa información.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚠️ Riesgo para Gestión:</strong> Puede inventar cifras en reportes o datos de proveedores. Siempre verifica números antes de enviar a gerencia.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. TOKENS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Unidades de procesamiento con límite.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es el tamaño del Post-it. No puedes escribir un manual completo en un Post-it. Prioriza lo esencial.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. VENTANA DE CONTEXTO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La memoria de corto plazo.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es tu bandeja de entrada. Si intentas procesar 500 correos a la vez, te saturas. Procesa de a grupos manteniendo el foco.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. MULTIMODALIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Procesar texto, audio e imagen.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Puedes subir una foto de una factura arrugada y la IA extrae todos los datos estructurados para tu Excel. Adiós al tipeo manual.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">[SUBIR FOTO] Esta es una factura/boleta. Extrae: Proveedor, RUT, Número, Fecha, Monto neto, IVA, Total. Formato: tabla lista para copiar a Excel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado depende de la claridad de tu instrucción. Proceso claro, resultado impecable."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Conceptos Generativos para Educadores
            </h4>
            <p class="text-sm text-slate-700 mb-4">El vocabulario técnico traducido al aula. Entiende la máquina para potenciar tu práctica docente.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. IA GENERATIVA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> IA que crea contenido nuevo desde cero.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es pasar de buscar materiales a tener un asistente que genera actividades, evaluaciones y recursos personalizados para tu clase específica.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Genera una actividad de 20 minutos para enseñar [CONCEPTO] a estudiantes de [NIVEL]. Incluye: objetivo, materiales, pasos detallados y forma de evaluar. Estilo: aprendizaje activo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. LLM (GRAN MODELO DE LENGUAJE)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Modelos entrenados para generar texto coherente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es un bibliotecario que leyó todos los libros pero nunca dio clase. Sabe el contenido, no sabe cómo enseñarlo a TUS estudiantes. Eso lo aportas tú.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN (PROMPT)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La orden que le das a la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es la rúbrica de evaluación. Si la instrucción es vaga, la respuesta es genérica. Si especificas nivel, estilo y objetivos, obtienes material de calidad.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-amber-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">4. ALUCINACIÓN ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cuando la IA inventa información.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚠️ Oportunidad Pedagógica:</strong> En lugar de temerla, úsala para enseñar pensamiento crítico. Pide a tus estudiantes que detecten errores en respuestas de IA.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. TOKENS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Unidades de procesamiento con límite.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es el límite de palabras de un ensayo. Si gastas todo en la introducción, no hay desarrollo ni conclusión. Enseña a tus estudiantes a ser concisos.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. VENTANA DE CONTEXTO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La memoria de corto plazo.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es la pizarra del aula. Si la llenas sin borrar, los estudiantes pierden el hilo. Mantén el foco en lo importante.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. MULTIMODALIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Procesar texto, audio e imagen.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Puedes subir una foto del ejercicio resuelto a mano por un estudiante y la IA te ayuda a identificar errores conceptuales.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">[SUBIR FOTO] Este es un ejercicio de [ASIGNATURA] resuelto por un estudiante de [NIVEL]. (1) ¿Está correcto? (2) Si hay errores, identifícalos. (3) Sugiere retroalimentación constructiva.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado depende de la claridad de tu instrucción. Pedagogía clara, materiales brillantes."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "glosario-m1v3": {
    meta: {
      type: "glossary",
      title: "📖 IA en Servilleta: Glosario de Ingeniería de Instrucciones",
      subtitle: "Módulo 1 - Video 3: Aprende a hablarle a la IA",
      icon: "book",
      color: "emerald",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M1V3.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"¡Llegamos al Video 3! Ahora que sabes qué es la IA, vamos a aprender a hablarle. En esta sesión descubriremos cómo diseñar órdenes que realmente funcionen. ¡Saca tu libreta de notas!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Ingeniería de Instrucciones para Líderes de Negocio
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las técnicas que separan al usuario casual del profesional que obtiene resultados. Domina estas 8 herramientas para multiplicar tu productividad.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INGENIERÍA DE INSTRUCCIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La disciplina de diseñar órdenes que produzcan el mejor resultado posible.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es como ser el CEO de tu interacción con IA: no ejecutas, pero diseñas la estrategia y las instrucciones que garantizan el resultado.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ASIGNACIÓN DE ROLES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedirle a la IA que actúe como un experto específico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es contratar al consultor perfecto para cada tarea. Un "Actúa como CFO" te da análisis financiero; un "Actúa como Director de Marketing" te da creatividad comercial.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un Director Comercial con 15 años de experiencia en [INDUSTRIA]. Mi mayor desafío es [PROBLEMA]. Dame 3 estrategias probadas para resolverlo este trimestre.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN DIRECTA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedir algo sin dar ejemplos previos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Uso en Negocios:</strong> Perfecto para tareas claras: "Dame 5 nombres para mi nuevo producto de [CATEGORÍA]". Rápido, directo, efectivo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. INSTRUCCIÓN CON EJEMPLOS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar modelos antes de pedir el resultado.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Uso en Negocios:</strong> Si quieres que los correos de venta tengan TU estilo, muéstrale 2-3 ejemplos exitosos. La IA clonará el tono y estructura.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Aquí hay 2 ejemplos de correos de prospección que nos funcionan bien: [EJEMPLO 1] [EJEMPLO 2]. Ahora genera 3 variaciones nuevas manteniendo el mismo estilo y estructura para el prospecto [NOMBRE].</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. DELIMITADORES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Símbolos que separan instrucciones del contenido.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Uso en Negocios:</strong> Usa """ o ### para separar claramente TU instrucción del texto que quieres procesar (ej: un contrato, un email, un reporte).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Ajustar y mejorar basándose en respuestas anteriores.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Uso en Negocios:</strong> No esperes la respuesta perfecta a la primera. Di: "Me gusta la estructura pero hazlo más agresivo comercialmente" o "Mantén los puntos 2 y 3 pero cambia el 1".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. TEMPERATURA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El control de creatividad vs. precisión.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Uso en Negocios:</strong> Para reportes financieros, "sé conservador". Para campañas creativas, "sé atrevido y disruptivo". Controla el termostato según la tarea.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-amber-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">8. SESGO DE AUTORIDAD ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Creer que la IA siempre tiene razón porque "suena profesional".</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚠️ Trampa para Líderes:</strong> La IA puede inventar datos de mercado con total seguridad. Antes de presentar cifras a inversores o directorio, SIEMPRE verifica.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El contexto es el rey de la instrucción. Líder que da contexto, líder que obtiene resultados de calidad."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Ingeniería de Instrucciones para el Ejercicio Jurídico
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las técnicas que convierten a la IA en tu paralegal más eficiente. Domina estas 8 herramientas con criterio profesional.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INGENIERÍA DE INSTRUCCIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Diseñar órdenes precisas para obtener resultados útiles.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es redactar una instrucción como si fuera una cláusula contractual: sin ambigüedad, con especificidad, definiendo exactamente qué esperas del resultado.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ASIGNACIÓN DE ROLES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedirle a la IA que actúe como un experto específico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Uso Legal:</strong> "Actúa como abogado penalista chileno" te dará un enfoque diferente a "Actúa como abogado tributarista". Define la especialidad que necesitas.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como abogado especialista en [MATERIA] con experiencia en tribunales chilenos. Tengo un caso de [SITUACIÓN] donde mi cliente [POSTURA]. Dame los 3 argumentos jurídicos más fuertes. Marca [VERIFICAR] en toda cita legal.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN DIRECTA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedir algo sin dar ejemplos previos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Uso Legal:</strong> Útil para resúmenes rápidos: "Resume en 5 puntos las obligaciones del arrendador según el Código Civil chileno" (luego verificas).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. INSTRUCCIÓN CON EJEMPLOS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar modelos del formato deseado.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Uso Legal:</strong> Si tienes un formato de minuta que funciona, muéstraselo. "Usa esta estructura de minuta como modelo" = resultados consistentes con tu estilo de estudio.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. DELIMITADORES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Símbolos para separar instrucciones del texto.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Uso Legal:</strong> Crítico cuando analizas contratos. Usa: "Analiza las cláusulas abusivas en el siguiente contrato: ### [PEGAR CONTRATO] ###"</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Refinar la respuesta progresivamente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Uso Legal:</strong> "Expande el argumento 2", "Hazlo más formal para presentación en Corte", "Añade jurisprudencia de los últimos 5 años (luego verifico)".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. TEMPERATURA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Control de creatividad vs. precisión.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Uso Legal:</strong> Para escritos formales: "Sé conservador y preciso". Para brainstorming de estrategia: "Explora argumentos creativos, incluso agresivos".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">8. SESGO DE AUTORIDAD ⚠️ CRÍTICO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Creer que la IA siempre tiene razón.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400 mb-2">
                  <p class="text-xs text-red-800"><strong>⚠️ ALERTA PROFESIONAL:</strong> La IA puede citar leyes derogadas, inventar jurisprudencia o mezclar jurisdicciones. Tu responsabilidad profesional es VERIFICAR CADA CITA en fuentes oficiales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack Legal</h4>
          <p class="text-white font-medium text-lg italic">"El contexto es el rey. Jurisdicción clara, materia definida, postura explícita = resultado útil."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Ingeniería de Instrucciones para Profesionales de Gestión
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las técnicas para convertir tu asistente IA en una máquina de productividad administrativa.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INGENIERÍA DE INSTRUCCIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Diseñar órdenes que produzcan exactamente lo que necesitas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es como crear un procedimiento operativo estándar (SOP) para tu asistente IA. Cuanto mejor el SOP, mejor el resultado.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ASIGNACIÓN DE ROLES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedirle a la IA que actúe como un rol específico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Uso en Gestión:</strong> "Actúa como asistente ejecutivo" para correos, "Actúa como analista de datos" para reportes. Cambia el rol según la tarea.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente ejecutivo senior. Recibí estas 10 solicitudes hoy: [LISTAR]. Priorízalas por urgencia, sugiere respuestas rápidas para las simples, y marca las que requieren mi atención directa.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN DIRECTA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedir algo sin ejemplos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Uso en Gestión:</strong> Perfecto para tareas rutinarias: "Genera una agenda para la reunión de equipo del lunes con 5 puntos".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. INSTRUCCIÓN CON EJEMPLOS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar modelos del resultado esperado.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Uso en Gestión:</strong> Muéstrale el formato de reporte que usa tu empresa. "Así hacemos los informes semanales: [EJEMPLO]. Ahora genera el de esta semana con estos datos: [DATOS]".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. DELIMITADORES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Símbolos para separar instrucciones del contenido.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Uso en Gestión:</strong> Cuando pegas datos desordenados: "Extrae la información clave del siguiente texto: --- [PEGAR NOTAS] ---"</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Ajustar y mejorar progresivamente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Uso en Gestión:</strong> "Más corto", "Más formal", "Agrega columna de responsables", "Ordena por fecha límite". Refina hasta que quede listo para usar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. TEMPERATURA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Creatividad vs. precisión.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Uso en Gestión:</strong> Para actas y reportes: "Sé preciso y conservador". Para ideas de eventos de equipo: "Sé creativo y propón opciones originales".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-amber-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">8. SESGO DE AUTORIDAD ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Confiar ciegamente porque "suena profesional".</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚠️ Cuidado:</strong> Si la IA te da cifras o datos, verifica. Antes de enviar un reporte a gerencia, confirma que los números son correctos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"El contexto es el rey. Formato claro, datos precisos, revisión final = trabajo impecable."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Ingeniería de Instrucciones para Educadores
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las técnicas para convertir la IA en tu asistente pedagógico más poderoso.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. INGENIERÍA DE INSTRUCCIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Diseñar órdenes que produzcan materiales pedagógicos de calidad.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es como diseñar una rúbrica de evaluación para la IA. Si la rúbrica es clara, el resultado es exactamente lo que necesitas para tu clase.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ASIGNACIÓN DE ROLES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedirle a la IA que actúe como un experto específico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Uso Educativo:</strong> "Actúa como experto en pedagogía Montessori", "Actúa como diseñador instruccional", "Actúa como profesor de [ASIGNATURA] para niños de [EDAD]".</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como especialista en aprendizaje basado en proyectos. Mis estudiantes de [NIVEL] deben aprender [TEMA]. Diseña un proyecto de 2 semanas con entregables semanales, rúbrica de evaluación y momentos de reflexión.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INSTRUCCIÓN DIRECTA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedir sin ejemplos previos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Uso Educativo:</strong> Para ideas rápidas: "Dame 5 dinámicas de activación para empezar la clase de [TEMA]".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. INSTRUCCIÓN CON EJEMPLOS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar modelos del formato deseado.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Uso Educativo:</strong> Muéstrale una guía de aprendizaje que funcionó bien. "Usa este formato de guía: [EJEMPLO]. Ahora crea una para el tema de [NUEVO TEMA]".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. DELIMITADORES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Símbolos para separar instrucciones del contenido.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Uso Educativo:</strong> Cuando quieres que analice un texto: "Simplifica el siguiente texto para estudiantes de 8 años: ### [TEXTO COMPLEJO] ###".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Ajustar progresivamente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Uso Educativo:</strong> "Hazlo más lúdico", "Reduce a 15 minutos", "Añade una variante para estudiantes con dificultades de atención", "Incluye verificación de comprensión".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">7. TEMPERATURA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Creatividad vs. precisión.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Uso Educativo:</strong> Para evaluaciones estandarizadas: "Sé preciso y objetivo". Para actividades de arte: "Sé muy creativo y propón opciones originales".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-amber-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">8. SESGO DE AUTORIDAD ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Confiar ciegamente porque "suena profesional".</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚠️ Oportunidad Pedagógica:</strong> Úsalo para enseñar pensamiento crítico. Muestra una respuesta de IA con errores y pide a tus estudiantes que los detecten.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Genera un texto corto sobre [TEMA] con 2-3 errores sutiles pero detectables. Luego dame las respuestas para usar esto como actividad de pensamiento crítico con estudiantes de [NIVEL].</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"El contexto es el rey. Nivel claro, objetivo pedagógico definido = materiales que realmente funcionan en TU aula."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 1. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "glosario-interactivo-aplicado": {
    meta: {
      type: "interactive",
      title: "🎮 Glosario Interactivo Aplicado",
      subtitle: "Experiencia gamificada: Los 6 Pilares + Simulador de Casos",
      icon: "gamepad-2",
      color: "cyan",
      module: 1
    },
    base_html: `
      <div id="glosario-interactivo-container" class="glosario-integrated">
        <!-- El contenido se inyecta dinámicamente por JS -->
        <div class="glosario-loading text-center py-12">
          <div class="inline-flex items-center gap-3 text-teal-600">
            <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-medium">Cargando Glosario Interactivo...</span>
          </div>
        </div>
      </div>
    `,
    segments: {}
  },
  "test-diagnostico": {
    meta: {
      type: "quiz",
      title: "Test de Diagnóstico de Perfil",
      subtitle: "Identifica tu punto de partida estratégico en AulaGenIA - Módulo 2",
      icon: "clipboard-list",
      color: "orange",
      module: 1,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Test-Diagnostico.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Para que la IA sea tu aliada, primero debemos diagnosticar tu carga. Este test ha sido robustecido para entender no solo tus tareas, sino tus bloqueos mentales. Responde con total honestidad: aquí no hay respuestas correctas, solo rutas hacia tu libertad de tiempo."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Instrucciones de Marcado</h3>
          <p class="text-slate-600 mb-4">Selecciona la opción que más se acerque a tu realidad actual. Si te sientes identificado con dos, elige la que te genere más estrés hoy.</p>
          <div class="space-y-6">
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">01. ¿Cuál es el motor principal de tu día a día?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
                  <input type="radio" name="q1" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Crear contenido visual, redactar textos creativos o diseñar soluciones estéticas.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                  <input type="radio" name="q1" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Tomar decisiones de negocio, analizar números y convencer a clientes o socios.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                  <input type="radio" name="q1" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Gestionar procesos, coordinar redes sociales y asegurar que todo funcione a tiempo.</span>
                </label>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">02. Cuando te sientes bloqueado, ¿cuál es el síntoma?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
                  <input type="radio" name="q2" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Inercia: Sé lo que quiero, pero no encuentro las palabras o la imagen inicial.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                  <input type="radio" name="q2" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Saturación: Tengo demasiada información y no sé cómo estructurarla para que impacte.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                  <input type="radio" name="q2" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Fricción: La tarea es fácil, pero es tan repetitiva que me drena la energía.</span>
                </label>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">03. ¿Qué herramienta de tu computador te da más pereza abrir?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
                  <input type="radio" name="q3" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> El editor de texto o diseño: Siento presión por ser original cada vez.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                  <input type="radio" name="q3" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Excel o PowerPoint: Odio el tiempo que paso ordenando datos y cuadrando cajas.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                  <input type="radio" name="q3" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> El panel de redes sociales o correos: Siento que respondo siempre lo mismo.</span>
                </label>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">04. ¿Cómo describirías tu objetivo de "éxito" con la IA?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
                  <input type="radio" name="q4" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Que mi trabajo sea más bello y profesional en la mitad de tiempo.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                  <input type="radio" name="q4" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Que mi negocio pueda crecer y vender más sin tener que trabajar más horas.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors">
                  <input type="radio" name="q4" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Que mi rutina sea automática para que yo pueda dejar de ser un robot.</span>
                </label>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Tus Resultados: Hoja de Ruta Personalizada</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">🚀 MAYORÍA DE A: Perfil María (La Arquitecta Creativa)</h4>
              <p class="text-sm text-slate-700 mb-3"><strong>Diagnóstico:</strong> Eres un perfil con alta carga creativa que sufre por la operatividad. Tu "Nudo" es la inercia de la hoja en blanco.</p>
              <ul class="text-sm text-purple-800 space-y-1">
                <li>• <strong>Estrategia:</strong> Usa la IA para generar el primer 80% de tus borradores.</li>
                <li>• <strong>Tu Kit Maestro:</strong> ChatGPT (Estructura) + Ideogram (Visuales con texto) + Claude (Tono humano).</li>
                <li>• <strong>Primer Paso:</strong> Dile a la IA: "Actúa como mi director de arte y criticá mi idea actual..."</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">📈 MAYORÍA DE B: Perfil Carlos (El Estratega de Crecimiento)</h4>
              <p class="text-sm text-slate-700 mb-3"><strong>Diagnóstico:</strong> Tu tiempo es dinero. Te atascas en el análisis y la presentación de propuestas. Tu "Nudo" es el cuello de botella informativo.</p>
              <ul class="text-sm text-blue-800 space-y-1">
                <li>• <strong>Estrategia:</strong> Delega el procesamiento de datos y la estética de tus presentaciones.</li>
                <li>• <strong>Tu Kit Maestro:</strong> Perplexity (Investigación) + Gamma (Slides automáticas) + Gemini (Análisis).</li>
                <li>• <strong>Primer Paso:</strong> Sube tu último reporte y dile: "Identifica 3 oportunidades de venta que estoy ignorando."</li>
              </ul>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🔄 MAYORÍA DE C: Perfil Luis (El Operador de Eficiencia)</h4>
              <p class="text-sm text-slate-700 mb-3"><strong>Diagnóstico:</strong> Tu trabajo es un mar de tareas mecánicas. Te falta escala. Tu "Nudo" es la fricción de la repetición constante.</p>
              <ul class="text-sm text-green-800 space-y-1">
                <li>• <strong>Estrategia:</strong> Crea "fábricas de contenido" y plantillas inteligentes que trabajen solas.</li>
                <li>• <strong>Tu Kit Maestro:</strong> Canva AI (Diseño en masa) + DALL-E 3 (Recursos rápidos) + ChatGPT (Gestión).</li>
                <li>• <strong>Primer Paso:</strong> Pásale tus 5 respuestas de correo más frecuentes y pídele que cree una "Matriz de Respuesta Inteligente".</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA no reemplaza tu talento, reemplaza tu cansancio. Elige tu camino y vuelve a disfrutar tu trabajo."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial AulaGenIA 2025. Prohibida su reproducción sin autorización.</div>
      </article>
    `,
    segments: {}
  },

  // ============================================================
  //   MÓDULO 2: HERRAMIENTAS
  // ============================================================
  "guia-maestra-herramientas": {
    meta: {
      type: "guide",
      title: "Guía Maestra para elegir a tu Copiloto Ideal",
      subtitle: "Herramientas esenciales para el Salto de Principiante a Pro - Módulo 2: Video 1",
      icon: "wrench",
      color: "cyan",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-Maestra-Herramientas.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Dominar la IA no es saber usar todas las herramientas, sino saber cuál abrir para cada misión. He clasificado estas herramientas por categorías para que dejes de dudar y empieces a ejecutar. ¡Tu tiempo vale oro!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Tu Arsenal de Herramientas para Ventas
            </h4>
            <p class="text-sm text-slate-700 mb-4">Estos son los copilotos que los mejores vendedores están usando para cerrar más negocios en menos tiempo.</p>
            
            <div class="space-y-3 mb-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">🔍 INVESTIGAR AL PROSPECTO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Perplexity</p>
                <p class="text-xs text-teal-700 mb-2">Antes de la reunión, investiga la empresa, sus competidores y noticias recientes. Perplexity te da fuentes verificables.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Investiga la empresa [NOMBRE] de [INDUSTRIA]. Dame: 1) Principales competidores, 2) Noticias recientes, 3) Posibles dolores de negocio. Incluye fuentes.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">✍️ REDACTAR PROPUESTAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Claude (elegancia) o ChatGPT (rapidez)</p>
                <p class="text-xs text-teal-700 mb-2">Claude genera textos más sofisticados para propuestas premium. ChatGPT es más rápido para borradores iniciales.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como consultor de ventas B2B. Redacta una propuesta comercial para [CLIENTE] que incluya: problema identificado, nuestra solución, beneficios y próximos pasos. Tono profesional pero cálido.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-orange-800 text-sm mb-2">📊 CREAR PRESENTACIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Gamma</p>
                <p class="text-xs text-teal-700 mb-2">Convierte tu propuesta en slides profesionales en minutos. Ideal para pitch decks y presentaciones a directivos.</p>
              </div>
            </div>
            
            <div class="bg-teal-100 rounded-lg p-3 border-l-4 border-teal-500">
              <p class="text-xs text-teal-800"><strong>🔗 Flujo Pro de Ventas:</strong> Perplexity (investiga) → ChatGPT (estructura pitch) → Claude (pule el texto) → Gamma (presenta)</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"Quien investiga más, cierra más. Perplexity + Claude = propuestas que convierten."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Maestra - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Tu Arsenal de Herramientas para el Ejercicio Jurídico
            </h4>
            <p class="text-sm text-slate-700 mb-4">Herramientas especializadas para acelerar tu trabajo sin comprometer la calidad profesional.</p>
            
            <div class="space-y-3 mb-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">🔍 INVESTIGACIÓN JURÍDICA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Perplexity</p>
                <p class="text-xs text-teal-700 mb-2">Para buscar jurisprudencia y doctrina con fuentes verificables. SIEMPRE valida las citas antes de usar.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Busca jurisprudencia reciente sobre [TEMA LEGAL] en [JURISDICCIÓN]. Dame casos relevantes con sus roles de identificación. Incluye enlaces a fuentes oficiales.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">✍️ REDACCIÓN DE ESCRITOS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Claude</p>
                <p class="text-xs text-teal-700 mb-2">Claude redacta con elegancia y puede manejar textos largos. Ideal para primeros borradores de escritos judiciales.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como abogado [ESPECIALIDAD]. Redacta un borrador de [TIPO DE ESCRITO] para un caso de [MATERIA]. Hechos: [RESUMEN]. Marca [VERIFICAR] toda cita legal.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">📋 RESÚMENES DE EXPEDIENTES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> ChatGPT</p>
                <p class="text-xs text-teal-700 mb-2">Para extraer puntos clave de documentos extensos y crear cronologías de hechos.</p>
              </div>
            </div>
            
            <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-500">
              <p class="text-xs text-amber-800"><strong>⚠️ Advertencia Ética:</strong> Las IAs pueden inventar citas legales. NUNCA uses una referencia legislativa o jurisprudencial sin verificarla en fuentes oficiales.</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Perplexity busca, Claude redacta, TÚ firmas y respondes profesionalmente."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Maestra - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Tu Arsenal de Herramientas para Gestión
            </h4>
            <p class="text-sm text-slate-700 mb-4">Automatiza tareas repetitivas y multiplica tu productividad administrativa.</p>
            
            <div class="space-y-3 mb-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📝 DOCUMENTOS Y REPORTES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> ChatGPT</p>
                <p class="text-xs text-teal-700 mb-2">Para actas de reunión, resúmenes ejecutivos, correos y análisis de datos. El todoterreno de la oficina.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Aquí están mis notas de la reunión: [PEGAR]. Genera: 1) Acta formal con asistentes y acuerdos, 2) Lista de tareas con responsables, 3) Correo de seguimiento para el equipo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-orange-800 text-sm mb-2">📊 PRESENTACIONES RÁPIDAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Gamma</p>
                <p class="text-xs text-teal-700 mb-2">Convierte cualquier texto en una presentación profesional en minutos. Ideal para reportes al jefe o al equipo.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Crea una presentación de 8 slides sobre [TEMA]. Incluye: resumen ejecutivo, datos clave, gráficos sugeridos y conclusiones. Estilo corporativo y moderno.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">📧 COMUNICACIONES INTERNAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Gemini (integrado con Gmail)</p>
                <p class="text-xs text-teal-700 mb-2">Si trabajas con Google Workspace, Gemini puede ayudarte directamente desde Gmail y Calendar.</p>
              </div>
            </div>
            
            <div class="bg-teal-100 rounded-lg p-3 border-l-4 border-teal-500">
              <p class="text-xs text-teal-800"><strong>🔗 Flujo Pro de Gestión:</strong> ChatGPT (procesa datos) → Gamma (visualiza) → Gemini (distribuye por correo)</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Si lo haces igual todos los días, ChatGPT puede hacerlo por ti. Tu tiempo vale más."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Maestra - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Tu Arsenal de Herramientas para Educación
            </h4>
            <p class="text-sm text-slate-700 mb-4">Diseña materiales pedagógicos de calidad en una fracción del tiempo.</p>
            
            <div class="space-y-3 mb-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📚 DISEÑO DE ACTIVIDADES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> ChatGPT</p>
                <p class="text-xs text-teal-700 mb-2">Para crear actividades, ejercicios, rúbricas y guías de aprendizaje adaptadas a tu contexto.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como diseñador instruccional. Tengo [N] estudiantes de [NIVEL/GRADO]. Diseña una actividad de 30 minutos para enseñar [TEMA] que incluya: objetivo, materiales, procedimiento y evaluación.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-orange-800 text-sm mb-2">📊 PRESENTACIONES DIDÁCTICAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Gamma</p>
                <p class="text-xs text-teal-700 mb-2">Crea presentaciones atractivas para tus clases sin pasar horas en PowerPoint.</p>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Crea una presentación de 10 slides sobre [TEMA] para estudiantes de [NIVEL]. Incluye: conceptos clave, ejemplos cotidianos, ejercicio práctico y preguntas de cierre. Estilo visual y atractivo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🎨 MATERIALES VISUALES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> DALL-E 3 / Canva AI</p>
                <p class="text-xs text-teal-700 mb-2">Genera ilustraciones didácticas, infografías y recursos visuales para tus clases.</p>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">🔍 FUENTES CONFIABLES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Herramienta:</strong> Perplexity</p>
                <p class="text-xs text-teal-700 mb-2">Para investigar temas con fuentes verificables que puedas compartir con tus estudiantes.</p>
              </div>
            </div>
            
            <div class="bg-teal-100 rounded-lg p-3 border-l-4 border-teal-500">
              <p class="text-xs text-teal-800"><strong>🔗 Flujo Pro Educativo:</strong> Perplexity (investiga) → ChatGPT (diseña actividad) → Gamma (crea presentación) → DALL-E (ilustra)</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara materiales; TÚ enciendes la chispa del aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Maestra - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "kit-delegacion-ia": {
    meta: {
      type: "guide",
      title: "Kit Maestro de Delegación IA",
      subtitle: "El Método Reconocer-Identificar-Definir - Módulo 2: Video 2",
      icon: "briefcase",
      color: "amber",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Kit-Maestro-Delegación-IA.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">La Hoja de Ruta del Piloto</h2>
          <p class="text-amber-700 italic">"Delegar no es simplemente 'pedir cosas'. Para recuperar tu tiempo, debes seguir el proceso que Julia nos enseñó: Reconocer la fuga, Identificar el nudo, Definir la acción. ¡Usa esta guía para pasar de la teoría a la acción!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">El Método RID para Líderes Comerciales</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border-l-4 border-blue-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <h4 class="font-bold text-blue-800">RECONOCER: ¿Dónde pierdes tiempo?</h4>
              </div>
              <p class="text-slate-600 text-sm">Revisa tu pipeline: ¿investigar prospectos, redactar propuestas, enviar seguimientos? Identifica tareas de +30 min o repetitivas.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-amber-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <h4 class="font-bold text-amber-800">IDENTIFICAR: ¿Cuál es el nudo?</h4>
              </div>
              <p class="text-slate-600 text-sm"><strong>Inercia:</strong> Propuesta en blanco. <strong>Fricción:</strong> Buscar info del prospecto. <strong>Vaguedad:</strong> No sabes cómo estructurar el pitch.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-green-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <h4 class="font-bold text-green-800">DEFINIR: Asigna el copiloto correcto</h4>
              </div>
              <p class="text-slate-600 text-sm">Perplexity para investigar, Claude para propuestas premium, ChatGPT para borradores rápidos, Gamma para presentaciones.</p>
            </div>
          </div>
        </section>
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Tu Mapa de Delegación Comercial
            </h4>
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-xs border-collapse">
                <thead class="bg-teal-100">
                  <tr>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Tarea</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">El Nudo</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Copiloto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Investigar prospectos</td>
                    <td class="p-2 text-slate-600">Fricción</td>
                    <td class="p-2 text-teal-700 font-medium">Perplexity</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Redactar propuestas</td>
                    <td class="p-2 text-slate-600">Inercia</td>
                    <td class="p-2 text-teal-700 font-medium">Claude + Gamma</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Enviar seguimientos</td>
                    <td class="p-2 text-slate-600">Fricción</td>
                    <td class="p-2 text-teal-700 font-medium">ChatGPT</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="prompt-block bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Actúa como director comercial. Mi nudo es [inercia/fricción/vaguedad] en [TAREA]. Dame el primer paso para delegarla correctamente.</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"No delegues lo que no entiendes. Dirige la IA para que resuelva el nudo, pero el cierre es tuyo."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit de Delegación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">El Método RID para el Ejercicio Jurídico</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border-l-4 border-blue-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <h4 class="font-bold text-blue-800">RECONOCER: ¿Dónde pierdes horas?</h4>
              </div>
              <p class="text-slate-600 text-sm">Revisa tu carga: búsqueda de jurisprudencia, resúmenes de expedientes, redacción de escritos, cronologías. ¿Qué te quita +30 min?</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-amber-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <h4 class="font-bold text-amber-800">IDENTIFICAR: ¿Cuál es tu nudo?</h4>
              </div>
              <p class="text-slate-600 text-sm"><strong>Inercia:</strong> Escrito judicial en blanco. <strong>Fricción:</strong> Leer 500 páginas de expediente. <strong>Vaguedad:</strong> Estrategia procesal poco clara.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-green-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <h4 class="font-bold text-green-800">DEFINIR: Asigna copiloto + validación</h4>
              </div>
              <p class="text-slate-600 text-sm">Perplexity [VERIFICAR], Claude [TÚ FIRMAS], ChatGPT [REVISAR]. La responsabilidad profesional no se delega.</p>
            </div>
          </div>
        </section>
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Tu Mapa de Delegación Jurídica
            </h4>
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-xs border-collapse">
                <thead class="bg-teal-100">
                  <tr>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Tarea</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">El Nudo</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Copiloto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Buscar jurisprudencia</td>
                    <td class="p-2 text-slate-600">Fricción</td>
                    <td class="p-2 text-teal-700 font-medium">Perplexity [VERIFICAR]</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Resumir expedientes</td>
                    <td class="p-2 text-slate-600">Fricción</td>
                    <td class="p-2 text-teal-700 font-medium">ChatGPT [REVISAR]</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Redactar escritos</td>
                    <td class="p-2 text-slate-600">Inercia</td>
                    <td class="p-2 text-teal-700 font-medium">Claude [TÚ FIRMAS]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-3">
              <p class="text-xs text-amber-800"><strong>⚠️ Advertencia Ética:</strong> La IA puede inventar citas legales. SIEMPRE verifica toda referencia en fuentes oficiales antes de usar.</p>
            </div>
            <div class="prompt-block bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Actúa como paralegal. Necesito borrador de [TIPO ESCRITO] para caso de [MATERIA]. Estructura con argumentos. Marca [VERIFICAR] toda cita legal.</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Perplexity busca, Claude redacta, TÚ firmas y respondes profesionalmente."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit de Delegación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">El Método RID para Gestión</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border-l-4 border-blue-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <h4 class="font-bold text-blue-800">RECONOCER: ¿Dónde está tu fuga?</h4>
              </div>
              <p class="text-slate-600 text-sm">Actas de reunión, correos repetitivos, reportes, coordinación de agendas. ¿Qué haces igual todas las semanas?</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-amber-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <h4 class="font-bold text-amber-800">IDENTIFICAR: ¿Cuál es tu nudo?</h4>
              </div>
              <p class="text-slate-600 text-sm"><strong>Fricción:</strong> Correos con las mismas 5 preguntas. <strong>Inercia:</strong> Reporte en blanco. <strong>Vaguedad:</strong> No sabes cómo presentar los datos.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-green-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <h4 class="font-bold text-green-800">DEFINIR: Asigna el copiloto</h4>
              </div>
              <p class="text-slate-600 text-sm">ChatGPT para documentos, Gamma para presentaciones, Gemini para integración con Google Workspace.</p>
            </div>
          </div>
        </section>
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Tu Mapa de Delegación Administrativa
            </h4>
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-xs border-collapse">
                <thead class="bg-teal-100">
                  <tr>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Tarea</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">El Nudo</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Copiloto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Actas de reunión</td>
                    <td class="p-2 text-slate-600">Fricción</td>
                    <td class="p-2 text-teal-700 font-medium">ChatGPT</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Correos frecuentes</td>
                    <td class="p-2 text-slate-600">Fricción</td>
                    <td class="p-2 text-teal-700 font-medium">ChatGPT (Matriz)</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Reportes visuales</td>
                    <td class="p-2 text-slate-600">Inercia</td>
                    <td class="p-2 text-teal-700 font-medium">Gamma</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="prompt-block bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Actúa como asistente ejecutivo. Mi tarea con más fricción es [TAREA]. Crea un sistema para delegarla donde yo solo revise el resultado.</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Si lo haces igual todos los días, la IA puede hacerlo por ti. Tu tiempo vale más."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit de Delegación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">El Método RID para Educadores</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border-l-4 border-blue-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <h4 class="font-bold text-blue-800">RECONOCER: ¿Dónde pierdes tiempo?</h4>
              </div>
              <p class="text-slate-600 text-sm">Planificación de clases, crear ejercicios, retroalimentación a estudiantes, presentaciones. ¿Qué te quita +30 min?</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-amber-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <h4 class="font-bold text-amber-800">IDENTIFICAR: ¿Cuál es tu nudo?</h4>
              </div>
              <p class="text-slate-600 text-sm"><strong>Inercia:</strong> Actividad en blanco. <strong>Fricción:</strong> Crear 30 variaciones de ejercicios. <strong>Vaguedad:</strong> No sabes cómo adaptar al nivel.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border-l-4 border-green-400 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <h4 class="font-bold text-green-800">DEFINIR: Asigna el copiloto</h4>
              </div>
              <p class="text-slate-600 text-sm">ChatGPT para actividades, Gamma para presentaciones, DALL-E para ilustraciones. TÚ adaptas al contexto de tus estudiantes.</p>
            </div>
          </div>
        </section>
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Tu Mapa de Delegación Docente
            </h4>
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-xs border-collapse">
                <thead class="bg-teal-100">
                  <tr>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Tarea</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">El Nudo</th>
                    <th class="text-left p-2 font-semibold text-teal-800 border-b border-teal-200">Copiloto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Planificar actividades</td>
                    <td class="p-2 text-slate-600">Inercia</td>
                    <td class="p-2 text-teal-700 font-medium">ChatGPT</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Crear ejercicios</td>
                    <td class="p-2 text-slate-600">Fricción</td>
                    <td class="p-2 text-teal-700 font-medium">ChatGPT</td>
                  </tr>
                  <tr class="border-b border-slate-200">
                    <td class="p-2 text-slate-700">Diseñar presentaciones</td>
                    <td class="p-2 text-slate-600">Inercia</td>
                    <td class="p-2 text-teal-700 font-medium">Gamma</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400 mb-3">
              <p class="text-xs text-emerald-800"><strong>💡 Recordatorio Pedagógico:</strong> La IA genera materiales; TÚ conoces a cada estudiante. Adapta siempre los resultados a tu contexto.</p>
            </div>
            <div class="prompt-block bg-slate-800 rounded-lg p-3">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm">Actúa como diseñador instruccional. Tengo [N] estudiantes de [NIVEL]. Mi tarea que más tiempo consume es [TAREA]. Diseña un sistema para delegarla.</p>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara materiales; TÚ enciendes la chispa del aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit de Delegación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "glosario-m2v1": {
    meta: {
      type: "glossary",
      title: "📖 Glosario: Uso Estratégico de la IA",
      subtitle: "Módulo 2 - Video 1: Del Principiante al Pro",
      icon: "book",
      color: "emerald",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M2V1.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"¡Bienvenido al Módulo 2! Aquí pasamos de la teoría a la acción. Este glosario te prepara para entender las técnicas que transforman una pregunta suelta en una instrucción poderosa. Domina estos términos y empezarás a ver resultados WOW."</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Técnicas Avanzadas para Líderes de Negocio
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las 6 técnicas que separan al ejecutivo que "usa ChatGPT" del que lo convierte en su ventaja competitiva.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. PROMPT ENGINEERING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El arte de diseñar instrucciones que extraigan el máximo resultado de la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es como redactar un brief perfecto para una agencia: si el brief es vago, el resultado será genérico. Si el brief es quirúrgico, el resultado será exactamente lo que necesitas.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como Director de Estrategia Comercial. Analiza este pitch de ventas y dame 3 mejoras concretas para incrementar la tasa de cierre: [PEGAR PITCH]</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ROL / IDENTIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El personaje experto que asignas a la IA para obtener respuestas especializadas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es contratar al consultor perfecto para cada reunión. "Actúa como CFO" te da análisis financiero; "Actúa como Director de Ventas" te da tácticas comerciales.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un negociador experto con 20 años en deals B2B. Mi cliente pide 30% de descuento. Dame 3 contrapropuestas que protejan mi margen sin perder el cliente.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INGREDIENTES (CONTEXTO)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La información de fondo que le das a la IA para que entienda tu situación específica.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Si mandas a tu equipo sin contexto del cliente, improvisarán. Si les das el historial, presupuesto y objeciones previas, cerrarán la venta.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Refinar la respuesta en varias rondas hasta obtener exactamente lo que necesitas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Ninguna propuesta comercial sale perfecta a la primera. Iteras: "Más agresivo en pricing", "Añade caso de éxito", "Acorta el resumen ejecutivo".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FEW-SHOT LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar ejemplos para que la IA entienda el formato y tono que quieres.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Cuando entrenas a un vendedor nuevo, le muestras tus mejores correos de cierre. L IA igual: "Así escribimos a clientes VIP, ahora hazme uno para [NUEVO CLIENTE]".</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Aquí hay 2 ejemplos de correos de seguimiento exitosos de mi empresa: [EJEMPLO 1] [EJEMPLO 2]. Crea 3 variaciones para el prospecto [NOMBRE] manteniendo el mismo estilo y estructura.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. CHAIN-OF-THOUGHT</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedirle a la IA que muestre su razonamiento paso a paso.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Cuando pides que te muestren los números detrás de una recomendación, validas la lógica. "Explícame paso a paso cómo llegaste a sugerir ese precio".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El Principiante lanza una pregunta suelta. El Pro diseña una instrucción con Rol, Contexto y Formato definidos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Técnicas Avanzadas para el Ejercicio Jurídico
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las 6 técnicas que convierten la IA en tu paralegal más eficiente, manteniendo siempre tu criterio profesional.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. PROMPT ENGINEERING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Diseñar instrucciones precisas para obtener respuestas útiles.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es como redactar una cláusula contractual: sin ambigüedad, con términos precisos. Una instrucción vaga genera respuestas vagas igual que un contrato mal redactado genera litigios.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como abogado especialista en [MATERIA]. Analiza esta cláusula y dame 3 riesgos legales que debo considerar. Marca [VERIFICAR] si citas legislación específica: [PEGAR CLÁUSULA]</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ROL / IDENTIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Asignar una especialidad jurídica específica a la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> No le pides consejo tributario a un penalista. "Actúa como abogado laboralista chileno" te da un enfoque diferente a "Actúa como abogado corporativo M&A".</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como abogado penalista con experiencia en tribunales chilenos. En un caso de [DELITO], la fiscalía argumenta [X]. Dame 3 líneas de defensa sólidas. Marca [VERIFICAR] toda cita legal.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INGREDIENTES (CONTEXTO)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Información de fondo para contextualizar el caso.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Sin hechos del caso, la IA dará teoría general. Con los hechos, puede darte estrategia aplicable. Es como la diferencia entre leer doctrina y ejercer.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Refinar la respuesta en múltiples rondas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Un escrito judicial se perfecciona en borradores. "Más formal", "Añade fundamento constitucional", "Reduce a 3 páginas". Cada iteración afina el argumento.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FEW-SHOT LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar ejemplos del formato deseado.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> El estilo de tu estudio tiene reglas. Muéstrale 2 minutas previas y di: "Usa esta estructura para el nuevo caso". Resultados consistentes con tu marca.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. CHAIN-OF-THOUGHT</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedir razonamiento paso a paso.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es pedir que te muestre el iter lógico. "Explica tu razonamiento jurídico" = puedes detectar errores antes de que lleguen al escrito final.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack Legal</h4>
          <p class="text-white font-medium text-lg italic">"El abogado promedio pregunta. El abogado Pro diseña instrucciones con Rol, Jurisdicción y Materia definidos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Técnicas Avanzadas para Profesionales de Gestión
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las 6 técnicas que multiplican tu productividad y te convierten en el profesional indispensable de tu equipo.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. PROMPT ENGINEERING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Diseñar instrucciones claras para obtener resultados útiles.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es como escribir un memo interno perfecto: si el memo es confuso, obtienes preguntas. Si el memo es claro, obtienes acción inmediata.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como asistente ejecutivo senior. Tengo estas 15 tareas pendientes: [LISTAR]. Priorízalas con matriz Eisenhower y sugiere cuáles puedo delegar o automatizar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ROL / IDENTIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Asignar un rol específico a la IA según la tarea.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> "Actúa como organizador de eventos" para logística, "Actúa como analista de datos" para reportes. Cambia el rol, cambia la perspectiva.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como coordinador de proyectos experto en metodologías ágiles. Aquí está el estado de mis proyectos: [LISTAR]. Identifica cuellos de botella y sugiere acciones para esta semana.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INGREDIENTES (CONTEXTO)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Dar información de fondo para respuestas útiles.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Si quieres un acta de reunión perfecta, dale el contexto: asistentes, objetivos, decisiones tomadas. Sin contexto, obtienes un template genérico.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Refinar en varias rondas hasta el resultado perfecto.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> "Más corto", "Añade columna de responsables", "Ordena por fecha límite". Cada iteración perfecciona el entregable hasta dejarlo listo para enviar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FEW-SHOT LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar ejemplos del formato que usas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Tu empresa tiene formatos estándar. Pégale el formato de reporte anterior y di: "Genera el de esta semana con estos datos". Consistencia garantizada.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. CHAIN-OF-THOUGHT</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedir razonamiento paso a paso.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> "Explícame cómo llegaste a esa priorización" = puedes validar la lógica antes de presentar a tu jefe o equipo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"El Principiante copia y pega. El Pro diseña instrucciones que producen resultados listos para usar."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Técnicas Avanzadas para Educadores
            </h4>
            <p class="text-sm text-slate-700 mb-4">Las 6 técnicas que convierten a la IA en tu asistente pedagógico más poderoso. Diseña materiales WOW.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. PROMPT ENGINEERING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Diseñar instrucciones que produzcan materiales pedagógicos de calidad.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es como diseñar una rúbrica de evaluación para la IA. Si la rúbrica es clara (nivel, objetivo, formato), el resultado será exactamente lo que necesitas para tu clase.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como diseñador instruccional experto en [METODOLOGÍA]. Mis estudiantes de [NIVEL] deben aprender [TEMA]. Diseña una actividad de 30 minutos con objetivo, materiales y verificación de aprendizaje.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. ROL / IDENTIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Asignar un rol pedagógico específico a la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> "Actúa como experto en pedagogía Montessori" vs. "Actúa como coach de aprendizaje adulto". Cada rol genera enfoques diferentes para los mismos contenidos.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como especialista en gamificación educativa. Transforma este contenido teórico en una actividad con puntos, niveles y recompensas para estudiantes de [NIVEL]: [CONTENIDO]</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. INGREDIENTES (CONTEXTO)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Información de fondo sobre tus estudiantes y contexto.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Sin contexto de tus alumnos, obtienes actividades genéricas. Con contexto ("30 estudiantes, 9 años, zona rural, sin internet"), obtienes materiales aplicables.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ITERACIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Refinar hasta que funcione para TU aula.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> "Hazlo más lúdico", "Reduce a 15 minutos", "Añade variante para estudiantes con dificultades de atención". Cada iteración adapta el material a tu realidad.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FEW-SHOT LEARNING</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Mostrar ejemplos del formato que quieres.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Muéstrale una guía de aprendizaje que funcionó: "Usa este formato para el tema de [NUEVO TEMA]". Obtienes consistencia en todos tus materiales.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. CHAIN-OF-THOUGHT</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Pedir razonamiento paso a paso.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> "Explica la progresión pedagógica" = validas que la secuencia didáctica tenga sentido antes de usarla en clase.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Diseña una secuencia de 5 actividades para enseñar [TEMA]. Explica paso a paso la progresión pedagógica y por qué cada actividad prepara para la siguiente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"El docente promedio pide 'una actividad'. El docente Pro diseña instrucciones con Nivel, Objetivo y Metodología definidos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "glosario-m2v2": {
    meta: {
      type: "glossary",
      title: "📖 Glosario: La Aplicación Práctica",
      subtitle: "Módulo 2 - Video 2: Flujos de Trabajo y Delegación",
      icon: "book",
      color: "emerald",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M2V2.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"En el segundo video del Módulo 2 aprendimos a copiar los caminos de éxito de María, Carlos y Luis. Este glosario te prepara para entender la lógica detrás de cada decisión. ¡Son las palabras clave para pensar como un Pro de la IA!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Productividad para Líderes de Negocio
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 conceptos que te darán ventaja competitiva delegando inteligentemente a la IA.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. FLUJO DE TRABAJO IA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Secuencia de pasos usando varias herramientas de IA encadenadas para resolver tareas complejas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es tu línea de producción digital: Perplexity investiga al prospecto → ChatGPT redacta la propuesta → Gamma la convierte en presentación ejecutiva. Cada herramienta tiene un rol especializado.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Necesito crear una propuesta para el cliente [NOMBRE]. Paso 1: Investiga su industria y competencia. Paso 2: Dame 3 oportunidades de negocio. Paso 3: Sugiere estructura de propuesta.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. EL NUDO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El problema específico que detiene tu productividad: inercia, fricción o vaguedad.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es el cuello de botella de tu pipeline. ¿Tienes 50 prospectos pero no sabes cómo priorizarlos? (vaguedad). ¿Pasas horas en reportes manuales? (fricción). ¿La propuesta está en blanco? (inercia).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. DELEGACIÓN INTELIGENTE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Asignar tareas a la IA según sus fortalezas específicas, no por comodidad.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> No usas a tu mejor vendedor para archivar documentos. Claude para propuestas elegantes, Perplexity para inteligencia de mercado, ChatGPT para análisis rápidos.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como consultor de productividad. Estas son mis 10 tareas semanales: [LISTAR]. ¿Cuáles puedo delegar a IA? ¿Qué herramienta específica usaría para cada una?</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ESPECIALIZACIÓN DE HERRAMIENTAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada herramienta de IA tiene un superpoder particular. El Pro sabe combinarlas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Tu equipo de ventas tiene especialistas: el que cierra, el que prospecta, el que retiene. Las IAs igual: Perplexity (investigación), Claude (redacción), Gamma (presentaciones).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FRICCIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La resistencia que generan tareas repetitivas que consumen tiempo manual.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Es el costo oculto de tu operación. Cada hora en reportes manuales es una hora menos vendiendo. La fricción mata la escalabilidad de tu negocio.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ESCALABILIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Multiplicar resultados sin multiplicar esfuerzo. El santo grial de la productividad.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía para Negocios:</strong> Creas un template de propuesta con IA. Antes hacías 3 propuestas semanales. Ahora haces 15 en el mismo tiempo. Tu facturación se multiplica, tu esfuerzo no.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Dame un sistema para generar propuestas comerciales 5x más rápido. Identifica los elementos que se repiten y crea un flujo de trabajo usando IA para escalar mi producción.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"No elijas herramientas por moda. Elige herramientas por misión."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Productividad para el Ejercicio Jurídico
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 conceptos que transformarán tu práctica legal sin comprometer la calidad profesional.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. FLUJO DE TRABAJO IA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Secuencia de pasos usando varias herramientas de IA para casos complejos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es tu proceso de due diligence digital: ChatGPT resume el expediente → Perplexity busca jurisprudencia comparable → Claude redacta el primer borrador del escrito. Cada herramienta aporta su especialidad.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Caso: [MATERIA]. Paso 1: Resume los hechos clave del expediente. Paso 2: Identifica los 3 argumentos principales de la contraparte. Paso 3: Sugiere líneas de defensa. Marca [VERIFICAR] toda cita.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. EL NUDO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El problema específico que detiene tu productividad jurídica.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> ¿Tienes 500 páginas de documentos sin revisar? (fricción). ¿El escrito está en blanco hace días? (inercia). ¿Tienes los hechos pero no la estrategia? (vaguedad).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. DELEGACIÓN INTELIGENTE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Asignar tareas a la IA según su especialidad, no por conveniencia.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> No le pides a tu pasante que alegue en estrados. La IA resume expedientes y redacta borradores; TÚ validas, firmas y argumentas. La responsabilidad profesional no se delega.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como consultor de productividad legal. Lista estas tareas de mi semana: [LISTAR]. ¿Cuáles puedo delegar a IA manteniendo estándares éticos? ¿Qué debo revisar siempre personalmente?</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ESPECIALIZACIÓN DE HERRAMIENTAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada IA tiene su superpoder. El Pro las combina estratégicamente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Claude redacta con elegancia; ChatGPT estructura argumentos; Perplexity busca fuentes. Ninguna reemplaza tu criterio jurídico, pero juntas aceleran tu trabajo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FRICCIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tareas repetitivas que consumen horas billables sin agregar valor.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Cada hora transcribiendo minutas o resumiendo expedientes es una hora menos en estrategia de casos. La fricción reduce tu rentabilidad por caso.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ESCALABILIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Multiplicar resultados sin multiplicar esfuerzo.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Creas templates de contratos comunes con IA. Antes hacías 5 contratos por semana. Ahora haces 20 con la misma calidad. Tu capacidad de atención de clientes crece sin contratar más personal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA acelera tu trabajo; la responsabilidad profesional sigue siendo tuya."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Productividad para Profesionales de Gestión
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 conceptos que convertirán tu día a día en una máquina de eficiencia.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. FLUJO DE TRABAJO IA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Secuencia de pasos usando varias IAs para tareas administrativas complejas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Es tu cadena de producción administrativa: ChatGPT procesa las notas de reunión → extrae tareas y responsables → Canva crea el informe visual → correo listo para enviar en 10 minutos.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Aquí están mis notas de la reunión: [PEGAR]. Paso 1: Extrae acuerdos y responsables. Paso 2: Lista las fechas límite. Paso 3: Redacta el correo de seguimiento para el equipo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. EL NUDO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El problema específico que frena tu productividad diaria.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> ¿Tienes 200 correos sin contestar? (fricción). ¿El reporte mensual está en blanco? (inercia). ¿Tienes datos pero no sabes qué concluir? (vaguedad). Identifica tu nudo y desatascate.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. DELEGACIÓN INTELIGENTE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Asignar tareas a la IA según sus fortalezas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> La IA redacta el primer borrador del acta, pero TÚ agregas los matices políticos que solo conoces tú. Delega lo mecánico, conserva lo estratégico.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Mis tareas repetitivas son: [LISTAR]. Para cada una, dime: 1) ¿Puede hacerla la IA? 2) ¿Qué herramienta usar? 3) ¿Qué parte debo supervisar yo siempre?</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ESPECIALIZACIÓN DE HERRAMIENTAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada IA tiene su superpoder. Úsalas estratégicamente.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Excel para cálculos, Word para documentos. Las IAs igual: ChatGPT para textos, Canva AI para diseño, Gamma para presentaciones. No uses un martillo para atornillar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FRICCIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tareas repetitivas que te drenan energía sin agregar valor.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Contestar 30 correos similares por día es fricción pura. Crear una "matriz de respuestas inteligentes" con IA elimina esa fricción de tu día a día.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ESCALABILIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Hacer más con el mismo esfuerzo.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía para Gestión:</strong> Antes hacías 5 actas de reunión por semana. Con un flujo de IA, haces 15. Tu valor pasa de "ejecutor" a "supervisor de calidad". Eso es escalabilidad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Si lo haces igual todos los días, probablemente la IA puede hacerlo por ti."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Productividad para Educadores
            </h4>
            <p class="text-sm text-slate-700 mb-4">Los 6 conceptos que liberarán tu tiempo para lo que importa: conectar con tus estudiantes.</p>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">1. FLUJO DE TRABAJO IA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Secuencia de pasos usando varias IAs para preparar materiales.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Es tu línea de producción pedagógica: ChatGPT diseña la actividad → genera variaciones por nivel → Canva crea el material visual → listo para la clase en 30 minutos.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Tema: [TEMA]. Paso 1: Diseña una actividad de 20 minutos. Paso 2: Crea 3 variaciones: básica, intermedia, avanzada. Paso 3: Dame 5 preguntas de verificación de aprendizaje.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">2. EL NUDO</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El problema específico que frena tu planificación.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> ¿Tienes 150 tareas por calificar? (fricción). ¿La guía de aprendizaje está en blanco? (inercia). ¿Tienes el contenido pero no sabes cómo hacerlo interesante? (vaguedad).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">3. DELEGACIÓN INTELIGENTE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Delegar a la IA lo mecánico, conservar lo pedagógico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> La IA genera ejercicios, rúbricas y actividades. TÚ conoces a Juanito que es visual y a María que necesita más apoyo. La conexión humana no se delega.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Estas son mis tareas docentes semanales: [LISTAR]. ¿Cuáles puedo delegar a IA sin perder calidad pedagógica? ¿Cuáles requieren siempre mi criterio profesional?</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">4. ESPECIALIZACIÓN DE HERRAMIENTAS</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada IA tiene su especialidad pedagógica.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> ChatGPT para diseño instruccional, Canva AI para materiales visuales, Gamma para presentaciones. Combínalas según la actividad que necesites crear.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">5. FRICCIÓN</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tareas repetitivas que te roban tiempo de calidad.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Cada hora redactando retroalimentación individual es una hora menos preparando actividades innovadoras. Automatiza la fricción, invierte en pedagogía.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-slate-800 text-sm mb-2">6. ESCALABILIDAD</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Multiplicar tu impacto sin multiplicar tu agotamiento.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Educativa:</strong> Antes creabas 2 actividades diferenciadas por semana. Con flujos de IA, creas 10. Atiendes mejor a la diversidad de tu aula sin trabajar más horas.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Diseña un sistema para crear materiales diferenciados 5x más rápido. Tengo [N] estudiantes con niveles distintos. Dame un flujo de trabajo con IA para atender la diversidad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara materiales; tú enciendes la chispa del aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "fuentes-autoridad-2": {
    meta: {
      type: "guide",
      title: "Nuestras Fuentes de Autoridad",
      subtitle: "Estrategia, Impacto Económico y Visión de Futuro - Módulo 2",
      icon: "book-open",
      color: "blue",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-2.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"La productividad no es simplemente hacer más cosas, sino hacer las cosas correctas con menos esfuerzo. En este módulo nos apoyamos en los arquitectos de la economía moderna para que tu tiempo trabaje para ti, y no al revés."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Productividad y Razonamiento Profundo</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
              <h4 class="font-bold text-blue-800 mb-2">McKinsey Global Institute (2023). The economic potential of generative AI</h4>
              <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p class="text-sm text-amber-800"><strong>💡 Nos basamos en:</strong> Los datos de impacto económico de esta consultora global para proyectar tu ahorro de tiempo de hasta 10 horas semanales y la reducción drástica de costos en tus procesos operativos.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
              <h4 class="font-bold text-blue-800 mb-2">Satya Nadella (2023). Microsoft Ignite Keynote: IA como el Copiloto del mundo</h4>
              <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p class="text-sm text-amber-800"><strong>💡 Nos basamos en:</strong> La visión de Microsoft de que la IA no viene a reemplazarte, sino a actuar como un "Copiloto" que te devuelve el control absoluto de tu agenda y tus prioridades.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
              <h4 class="font-bold text-blue-800 mb-2">OpenAI (2023). The age of AI has begun. OpenAI Blog</h4>
              <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p class="text-sm text-amber-800"><strong>💡 Nos basamos en:</strong> Los estándares de Sam Altman sobre cómo pasar del uso superficial de un "chat" al razonamiento profundo para resolver problemas complejos de negocio en el mundo real.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"El ahorro de tiempo es el dividendo de la inteligencia. No busques solo rapidez, busca profundidad en el razonamiento para ganar libertad."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material exclusivo para alumnos de AulaGenIA - Módulo 2. © 2025 AulaGenIA. Todos los derechos reservados.</div>
      </article>
    `,
    segments: {}
  },
  "salto-principiante-pro": {
    meta: {
      type: "guide",
      title: "El Salto de Principiante a Pro",
      subtitle: "De preguntar por curiosidad a dirigir con estrategia - Módulo 2: Video 1",
      icon: "trending-up",
      color: "blue",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/El-Salto-de-Principiante-a Pro.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Bienvenido al Módulo 2. Aquí es donde dejamos de 'jugar' con la IA y empezamos a usarla como un motor de resultados. El secreto no es la tecnología, es tu mentalidad. ¡Vamos a dar ese gran salto!"</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Socio Comercial</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero</h4>
              <p class="text-sm text-red-700">"Dame ideas de ventas" - Resultado genérico, sin contexto de tu industria ni cliente.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Socio Estratégico</h4>
              <p class="text-sm text-green-700">"Actúa como consultor B2B. Mi cliente es [X], su dolor es [Y]. Dame 3 enfoques de propuesta." - Resultado específico y accionable.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 5 Tareas Comerciales para Delegar HOY</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Investigar prospecto antes de reunión (Perplexity)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Redactar propuesta comercial (Claude)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Crear presentación de pitch (Gamma)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Generar correos de seguimiento (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Analizar objeciones frecuentes (ChatGPT)</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El Principiante pregunta; el Pro instruye. Tu copiloto cierra más cuando tú diriges mejor."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Salto de Principiante a Pro - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Asistente Jurídico</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero</h4>
              <p class="text-sm text-red-700">"¿Qué dice la ley sobre contratos?" - Respuesta genérica sin jurisdicción ni caso específico.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Asistente Experto</h4>
              <p class="text-sm text-green-700">"Actúa como abogado [especialidad]. Caso: [hechos]. Dame borrador de escrito con estructura argumental. Marca [VERIFICAR] toda cita."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 5 Tareas Jurídicas para Delegar HOY</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Resumir expediente voluminoso (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Buscar jurisprudencia relevante (Perplexity) [VERIFICAR]</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Redactar primer borrador de escrito (Claude)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Crear cronología de hechos (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Preparar argumentos para audiencia (Claude)</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA redacta borradores; TÚ firmas y respondes. Nunca delegues tu responsabilidad profesional."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Salto de Principiante a Pro - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Asistente Ejecutivo</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero</h4>
              <p class="text-sm text-red-700">"Hazme un acta de reunión" - Sin notas, sin contexto, resultado inútil.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Asistente Ejecutivo</h4>
              <p class="text-sm text-green-700">"Aquí están mis notas de reunión: [PEGAR]. Genera: acta formal, lista de tareas con responsables, correo de seguimiento."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 5 Tareas Administrativas para Delegar HOY</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Redactar actas de reunión (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Crear reportes ejecutivos (ChatGPT + Gamma)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Responder correos frecuentes con plantillas (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Organizar información de proyectos (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Crear presentaciones rápidas (Gamma)</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Si lo haces igual todas las semanas, ChatGPT puede hacerlo por ti. Tu tiempo vale más."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Salto de Principiante a Pro - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Co-Diseñador Pedagógico</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero</h4>
              <p class="text-sm text-red-700">"Dame ideas para clase de matemáticas" - Sin nivel, sin contexto, resultado genérico.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Co-Diseñador</h4>
              <p class="text-sm text-green-700">"Actúa como diseñador instruccional. Tengo 25 estudiantes de 4to grado. Diseña actividad de 30 min sobre fracciones con objetivo, materiales y evaluación."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 5 Tareas Docentes para Delegar HOY</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Diseñar actividades de clase (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Crear variaciones de ejercicios (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Preparar presentaciones didácticas (Gamma)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Generar rúbricas de evaluación (ChatGPT)</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Crear ilustraciones didácticas (DALL-E)</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara el material; TÚ enciendes la chispa del aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Salto de Principiante a Pro - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "dentro-copiloto-2": {
    meta: {
      type: "guide",
      title: "El Dilema del Copiloto (Parte 2)",
      subtitle: "Reflexiones sobre la convivencia con la IA - Módulo 2",
      icon: "cpu",
      color: "blue",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Que-hay-dentro-del-copiloto-2.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Más allá de la tecnología</h2>
          <p class="text-blue-700">En el segundo video de AulaGenIA, Julia nos muestra que la IA no es una herramienta estática, sino un sistema que interactúa con nosotros. Esto genera dudas que no son técnicas, sino de estrategia y confianza. Vamos a resolverlas.</p>
        </section>
        <section>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">1. Privacidad y Memoria</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si Siri y Alexa "aprenden" de cada charla, ¿guardan mi vida para siempre?</p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                <p class="text-indigo-800 mb-2"><strong>💡 La analogía:</strong> Imagina que un profesor corrige miles de exámenes. El profesor aprende cuáles son los errores más comunes de todos sus alumnos para explicar mejor al año siguiente, pero no necesita recordar exactamente qué escribió una persona específica para mejorar su método general.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>La realidad:</strong> La IA utiliza las interacciones para volverse más inteligente de forma general (aprendizaje anónimo). <strong>Regla de oro:</strong> nunca compartas datos bancarios o claves privadas en el chat.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">2. La IA no es un buscador</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si le pregunto lo mismo dos veces, ¿por qué me da respuestas distintas?</p>
              <div class="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                <p class="text-amber-800"><strong>💡 La analogía:</strong> Imagina que le pides a un Chef que te explique cómo hacer una pasta. Si le preguntas hoy, te dará unos tips; si le preguntas mañana, quizás use otras palabras o te dé un ejemplo diferente. El Chef no está leyendo un archivo guardado, está <strong>creando</strong> la respuesta en el momento basada en su conocimiento.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>La razón:</strong> La IA es "generativa". No copia y pega información de internet, sino que calcula sobre la marcha qué palabras combinan mejor para tu pedido actual. <strong>Conclusión:</strong> Esto es una ventaja. Si una respuesta no te gusta, puedes pedirle que lo intente de nuevo y obtendrás una perspectiva fresca.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">3. La Fatiga de la IA</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿Cuánta información recuerda antes de empezar a perder el hilo?</p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <p class="text-purple-800"><strong>💡 La analogía:</strong> Piensa en la IA como un malabarista. Puede mantener varias pelotas (datos) en el aire al mismo tiempo, pero si le lanzas demasiadas, empezará a dejar caer las primeras que recibió para poder atrapar las nuevas. Esto es lo que Julia llama "Ventana de Contexto".</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Estrategia AulaGenIA:</strong> Si sientes que tu copiloto está confundido después de una charla larga, no sigas forzando el chat. <strong>El truco maestro:</strong> Pídele a la IA un resumen detallado de la conversación que incluya todos los requisitos y reglas que le has pedido hasta ahora. Luego, abre un chat nuevo y pega ese resumen. Así, el malabarista empieza de cero con todas las pelotas en su lugar.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">4. ¿Es realmente creativa?</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si solo repite patrones, ¿puede crear algo nuevo?</p>
              <div class="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                <p class="text-rose-800"><strong>💡 La analogía:</strong> Imagina a un artista que ha visto todas las puestas de sol de la historia. Cuando pinta una nueva, no está copiando una foto específica, sino que mezcla los colores y las formas que aprendió para crear una imagen que nunca existió.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>La respuesta:</strong> La IA no "crea" desde la nada, pero combina la información de formas tan originales que el resultado es totalmente nuevo. <strong>El toque humano:</strong> La chispa de la idea original siempre es tuya. La IA pone los pinceles, pero tú pones la visión y el propósito.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Conclusión AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"Tú diriges, la IA acompaña."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para alumnos de AulaGenIA.</div>
      </article>
    `,
    segments: {}
  },
  "caminos-expertos": {
    meta: {
      type: "guide",
      title: "Aprende de los Expertos",
      subtitle: "Los caminos de éxito de María, Carlos y Luis - Módulo 2: Video 2",
      icon: "users",
      color: "blue",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Aprende-de-los-Expertos-Los-Caminos-de-María-Carlos-y-Luis.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Instrucciones de Julia</h2>
          <p class="text-teal-700 italic">"No inventes la rueda. Para empezar a ganar tiempo hoy mismo, elige el flujo que más se parezca a tu trabajo y replícalo paso a paso. La IA no es para todo, es para lo que más te suma."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Los 3 Caminos Pro</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-3">🎨 1. El Camino de María (Diseño y Creatividad)</h4>
              <div class="flex flex-wrap gap-2 items-center mb-3">
                <span class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">1. IDEA: ChatGPT</span>
                <span class="text-purple-400">→</span>
                <span class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">2. IMAGEN: Ideogram</span>
                <span class="text-purple-400">→</span>
                <span class="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm">3. IDIOMA: Google</span>
              </div>
              <p class="text-sm text-purple-700">(Borradores y conceptos) → (Diseño visual con texto) → (Traducción para clientes)</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-3">💼 2. El Camino de Carlos (Estrategia y Negocios)</h4>
              <div class="flex flex-wrap gap-2 items-center mb-3">
                <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">1. ESTRATEGIA: Gemini</span>
                <span class="text-blue-400">→</span>
                <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">2. IMPACTO: Gamma</span>
                <span class="text-blue-400">→</span>
                <span class="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">3. VISIÓN: IA Tendencias</span>
              </div>
              <p class="text-sm text-blue-700">(Ideas de contenido y blog) → (Presentaciones express) → (Optimización de ventas)</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-3">📱 3. El Camino de Luis (Redes Sociales y Gestión)</h4>
              <div class="flex flex-wrap gap-2 items-center mb-3">
                <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">1. CREACIÓN: DALL-E 3</span>
                <span class="text-green-400">→</span>
                <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">2. MAQUETACIÓN: Canva AI</span>
                <span class="text-green-400">→</span>
                <span class="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm">3. PUBLICACIÓN: Copiloto RRSS</span>
              </div>
              <p class="text-sm text-green-700">(Imágenes originales) → (Gráficos profesionales) → (Gestión y respuestas)</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">El Impacto Real: ¿Qué lograron con estos flujos?</h3>
          <p class="text-slate-600 mb-4">Como vimos en el video, la implementación de estos "Caminos Pro" no solo ahorra tiempo, sino que transforma los números del negocio:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-blue-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-blue-800 border-b-2 border-blue-200">Perfil</th>
                  <th class="text-left p-3 font-semibold text-blue-800 border-b-2 border-blue-200">El Resultado Estratégico</th>
                  <th class="text-left p-3 font-semibold text-green-700 border-b-2 border-blue-200">Métrica WOW</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-purple-700">María</td>
                  <td class="p-3 text-slate-600">Logró liberar su agenda de tareas administrativas pesadas para enfocarse 100% en su arte y clientes premium.</td>
                  <td class="p-3 text-green-700 font-bold bg-green-50">x2 Trabajos/mes</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-blue-700">Carlos</td>
                  <td class="p-3 text-slate-600">Automatizó el diagnóstico de su negocio y la creación de propuestas, escalando sus ventas sin contratar más personal.</td>
                  <td class="p-3 text-green-700 font-bold bg-green-50">+150% Crecimiento</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-green-700">Luis</td>
                  <td class="p-3 text-slate-600">Pasó de pelear con el diseño a dirigir su estrategia visual, logrando una conexión mucho más profunda con su audiencia.</td>
                  <td class="p-3 text-green-700 font-bold bg-green-50">-70% Tiempo/Post</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Anatomía de las Herramientas Elegidas</h3>
          <p class="text-slate-600 mb-3">¿Por qué estas y no otras? Julia nos explica la lógica detrás de cada selección:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-purple-50 p-3 rounded-lg"><strong class="text-purple-800">Ideogram (Caso María):</strong> Se eligió porque es la mejor IA para incluir texto legible dentro de las imágenes (ideal para logos y carteles).</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong class="text-blue-800">Gamma (Caso Carlos):</strong> La elección perfecta para presentaciones rápidas que no parecen hechas por una IA, manteniendo un estilo ejecutivo.</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong class="text-green-800">Canva AI (Caso Luis):</strong> Ideal para quienes no son diseñadores pero necesitan que sus redes sociales se vean profesionales y coherentes.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Checklist: Tu Plan de Acción</h3>
          <p class="text-slate-600 mb-3">Sigue estos pasos para replicar el éxito de los expertos hoy mismo:</p>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 1:</strong> Identifica cuál de los 3 perfiles se parece más a tu "Atasco" actual.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 2:</strong> Regístrate en la herramienta del "Paso 2" de ese camino (Ideogram, Gamma o Canva).</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 3:</strong> Ejecuta una tarea real usando la instrucción (prompt) del camino elegido.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 4:</strong> Mide el tiempo que te tomó vs. cómo lo hacías antes.</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu visión es el destino. Copia el flujo, pero ponle tu corazón."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial para alumnos de AulaGenIA. Información basada en los casos de éxito del Módulo 2.</div>
      </article>
    `,
    segments: {}
  },
  "test-diagnostico-ruta": {
    meta: {
      type: "quiz",
      title: "Test de Diagnóstico Avanzado: Tu Ruta",
      subtitle: "Identifica tu camino hacia la productividad con IA - Módulo 2: Video 2",
      icon: "map-pin",
      color: "amber",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Test-de-Diagnóstico-Avanzado-Tu-Ruta.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 border border-amber-200">
          <h2 class="text-xl font-bold text-amber-900 mb-2">Mensaje de Julia</h2>
          <p class="text-amber-700 italic">"No todas las herramientas son para todos. Este test refinado te ayudará a identificar cuál de los 3 caminos de éxito (María, Carlos o Luis) es el que más encaja con tus necesidades reales. Responde con honestidad: aquí no hay respuestas correctas, solo rutas hacia tu libertad de tiempo."</p>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📝 Instrucciones</h3>
          <p class="text-slate-600 mb-4">Selecciona la opción que más se acerque a tu situación actual. Si te sientes identificado con dos opciones, elige la que te genere más estrés hoy. Al final, suma tus respuestas para descubrir tu perfil.</p>
          
          <div class="space-y-6">
            <!-- Pregunta 1 -->
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">1. ¿Cuál es el motor principal de tu día a día laboral?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200">
                  <input type="radio" name="q1" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Crear contenido visual, redactar textos creativos o diseñar soluciones estéticas.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200">
                  <input type="radio" name="q1" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Tomar decisiones de negocio, analizar números y convencer a clientes o socios.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200">
                  <input type="radio" name="q1" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Gestionar redes sociales, procesos internos y asegurar que todo funcione a tiempo.</span>
                </label>
              </div>
            </div>
            
            <!-- Pregunta 2 -->
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">2. Cuando te sientes bloqueado en el trabajo, ¿cuál es el síntoma más común?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200">
                  <input type="radio" name="q2" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Me quedo mirando la hoja en blanco sin saber cómo empezar. La inercia creativa me paraliza.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200">
                  <input type="radio" name="q2" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Tengo demasiada información que procesar y me cuesta resumirla en algo claro y presentable.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200">
                  <input type="radio" name="q2" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Pierdo horas en tareas repetitivas que sé hacer pero que son mecánicas y aburridas.</span>
                </label>
              </div>
            </div>
            
            <!-- Pregunta 3 -->
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">3. Si tuvieras que elegir una sola herramienta de IA para dominar, elegirías una que:</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200">
                  <input type="radio" name="q3" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Me ayude a generar imágenes, logos y diseños creativos sin depender de un diseñador.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200">
                  <input type="radio" name="q3" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Me genere presentaciones profesionales y reportes automáticos a partir de mis datos.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200">
                  <input type="radio" name="q3" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Me permita crear contenido para redes sociales de forma rápida y atractiva.</span>
                </label>
              </div>
            </div>
            
            <!-- Pregunta 4 -->
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">4. ¿Cuál sería tu mayor celebración si la IA te ayudara esta semana?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200">
                  <input type="radio" name="q4" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Terminar un proyecto creativo que llevo semanas postergando por falta de inspiración.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200">
                  <input type="radio" name="q4" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Cerrar una venta o presentar una propuesta ganadora con datos claros y convincentes.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200">
                  <input type="radio" name="q4" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Tener toda la semana de publicaciones listas y programadas sin estrés de último minuto.</span>
                </label>
              </div>
            </div>
            
            <!-- Pregunta 5 -->
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">5. ¿Cuál de estas frases describe mejor tu relación con la tecnología?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200">
                  <input type="radio" name="q5" class="mt-1" value="A">
                  <span class="text-sm"><strong class="text-purple-700">A.</strong> Me encanta explorar y experimentar con lo visual. Soy más artista que técnico.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200">
                  <input type="radio" name="q5" class="mt-1" value="B">
                  <span class="text-sm"><strong class="text-blue-700">B.</strong> Soy más pragmático: quiero herramientas que me den resultados medibles rápido.</span>
                </label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200">
                  <input type="radio" name="q5" class="mt-1" value="C">
                  <span class="text-sm"><strong class="text-green-700">C.</strong> Necesito algo fácil y rápido. No tengo tiempo para curvas de aprendizaje largas.</span>
                </label>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Tus Resultados: Descubre Tu Ruta</h3>
          <p class="text-slate-600 mb-4">Suma tus respuestas. La letra que más se repita es tu perfil dominante:</p>
          
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">🎨 MAYORÍA DE "A": Ruta María (La Arquitecta Creativa)</h4>
              <p class="text-sm text-slate-700 mb-3"><strong>Diagnóstico:</strong> Tu problema principal es la inercia creativa. Tienes las ideas, pero te cuesta arrancar y plasmarlas. Tu "Nudo" es la hoja en blanco.</p>
              <ul class="text-sm text-purple-800 space-y-1">
                <li>• <strong>Tu Kit Maestro:</strong> ChatGPT (para estructurar ideas) → Ideogram (para logos y diseños con texto) → Claude (para pulir el tono).</li>
                <li>• <strong>Primer Paso:</strong> Pídele a ChatGPT: "Actúa como mi director creativo y dame 3 conceptos visuales para mi próximo proyecto."</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">📈 MAYORÍA DE "B": Ruta Carlos (El Estratega de Crecimiento)</h4>
              <p class="text-sm text-slate-700 mb-3"><strong>Diagnóstico:</strong> Tu problema es el cuello de botella informativo. Tienes los datos, pero te cuesta convertirlos en insights y presentaciones convincentes.</p>
              <ul class="text-sm text-blue-800 space-y-1">
                <li>• <strong>Tu Kit Maestro:</strong> Perplexity (para investigar con fuentes) → Gemini (para análisis de documentos) → Gamma (para presentaciones WOW).</li>
                <li>• <strong>Primer Paso:</strong> Sube tu último reporte a Gemini y pídele: "Identifica 3 oportunidades de negocio que estoy ignorando."</li>
              </ul>
            </div>
            
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🔄 MAYORÍA DE "C": Ruta Luis (El Operador de Eficiencia)</h4>
              <p class="text-sm text-slate-700 mb-3"><strong>Diagnóstico:</strong> Tu problema es la fricción operativa. Sabes qué hacer, pero las tareas mecánicas te consumen. Tu "Nudo" es la repetición.</p>
              <ul class="text-sm text-green-800 space-y-1">
                <li>• <strong>Tu Kit Maestro:</strong> DALL-E 3 (para imágenes rápidas) → Canva AI (para diseños profesionales) → ChatGPT (para gestión de respuestas).</li>
                <li>• <strong>Primer Paso:</strong> Pásale a ChatGPT tus 5 respuestas de correo más frecuentes y pídele: "Crea una matriz de respuesta inteligente."</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA no reemplaza tu talento, reemplaza tu cansancio. Elige tu ruta y vuelve a disfrutar tu trabajo."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Test oficial AulaGenIA 2025. Basado en los caminos de éxito del Módulo 2.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-ideogram": {
    meta: {
      type: "guide",
      title: "Ideogram para Principiantes",
      subtitle: "Guía paso a paso para dominar el diseño con IA - Dic. 2025",
      icon: "image",
      color: "pink",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Ideogram-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Qué es Ideogram.ai?</h2>
          <p class="text-pink-700">Ideogram es una Inteligencia Artificial especializada en generar imágenes de alta calidad. A diferencia de otras herramientas, su "superpoder" es la <strong>Tipografía</strong>: es capaz de escribir texto dentro de las imágenes sin errores. Es el compañero perfecto para crear logos, portadas de libros o posts de redes sociales que necesiten un mensaje claro.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo? (Paso a Paso)</h3>
          <p class="text-slate-600 mb-3">Ideogram funciona principalmente a través de su página web y es extremadamente sencillo de configurar.</p>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-pink-800 mb-2">1. Registro en la plataforma</h4>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• <strong>La dirección:</strong> Entra en tu navegador a <a href="https://ideogram.ai" target="_blank" class="text-pink-600 hover:underline">ideogram.ai</a>.</li>
                <li>• <strong>Inicio de sesión:</strong> Haz clic en el botón "Login" o "Sign Up".</li>
                <li>• <strong>El camino rápido:</strong> Utiliza tu cuenta de Google o Apple. Esto sincronizará tu perfil de forma segura y no tendrás que recordar una contraseña adicional.</li>
                <li>• <strong>Perfil de usuario:</strong> Elige un nombre de usuario único. Recuerda que, en la versión gratuita, las imágenes que generes son públicas y otros miembros de la comunidad podrán verlas para inspirarse.</li>
              </ul>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-pink-800 mb-2">2. Uso en dispositivos móviles</h4>
              <p class="text-sm text-slate-600">Aunque no requiere una instalación pesada, puedes usarlo perfectamente desde el navegador de tu celular (Safari o Chrome). La interfaz es fluida y te permite descargar las imágenes directamente a tu galería.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Estrella para el Alumno AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Como vimos en el caso de María (Diseñadora), Ideogram te permite saltar la barrera técnica:</p>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-pink-50 p-4 rounded-xl border border-pink-200">
              <h4 class="font-bold text-pink-800 mb-1">✨ Magic Prompt</h4>
              <p class="text-sm text-pink-700">Si tu idea es corta, la IA la expande automáticamente para crear un resultado artístico y detallado.</p>
            </div>
            <div class="bg-pink-50 p-4 rounded-xl border border-pink-200">
              <h4 class="font-bold text-pink-800 mb-1">📝 Control de Texto</h4>
              <p class="text-sm text-pink-700">Solo debes poner entre comillas el texto que quieres que aparezca (ej: "Zapatos Sol").</p>
            </div>
            <div class="bg-pink-50 p-4 rounded-xl border border-pink-200">
              <h4 class="font-bold text-pink-800 mb-1">🔄 Remix</h4>
              <p class="text-sm text-pink-700">¿Viste una imagen que te gustó? Puedes darle al botón "Remix" para usarla como base y cambiarle solo el texto o el color.</p>
            </div>
            <div class="bg-pink-50 p-4 rounded-xl border border-pink-200">
              <h4 class="font-bold text-pink-800 mb-1">🖼️ Editor de Relación de Aspecto</h4>
              <p class="text-sm text-pink-700">Elige si quieres una imagen cuadrada (Instagram), vertical (Stories) o alargada (Web) antes de generar.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">¿Cuáles son los límites de la versión gratuita?</h3>
          <p class="text-slate-600 mb-3">Ideogram ofrece una potencia increíble sin costo, bajo ciertas condiciones:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg"><strong>1. Créditos diarios:</strong> Recibes aproximadamente 10 a 20 generaciones gratuitas al día (estos créditos se reinician cada 24 horas).</li>
            <li class="bg-amber-50 p-3 rounded-lg"><strong>2. Cola de espera:</strong> En momentos de mucha demanda, tus imágenes pueden tardar un minuto extra en generarse frente a los usuarios de pago.</li>
            <li class="bg-amber-50 p-3 rounded-lg"><strong>3. Privacidad:</strong> Tus creaciones aparecerán en el muro global de Ideogram.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos Pro de AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Para que no gastes tus créditos diarios en vano:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa comillas:</strong> Siempre que quieras texto, ponlo entre comillas: "Hola Mundo".</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Explora el muro:</strong> Antes de crear desde cero, mira lo que otros han hecho y copia los estilos que te gusten.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Combínalo:</strong> Genera tu imagen en Ideogram y luego llévala a Canva para terminar tu diseño profesional.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA no reemplaza al diseñador, reemplaza las horas de frustración frente a una hoja en blanco."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para el programa AulaGenIA. Información actualizada a diciembre de 2025.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-midjourney": {
    meta: {
      type: "guide",
      title: "Midjourney para Principiantes",
      subtitle: "Guía paso a paso para dominar el arte con IA - Dic. 2025",
      icon: "palette",
      color: "purple",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Midjourney-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Qué es Midjourney?</h2>
          <p class="text-purple-700">Midjourney es considerada la IA más potente del mundo para crear imágenes. Mientras que otras IAs hacen dibujos "correctos", Midjourney crea <strong>obras de arte, fotografías realistas y escenas de cine</strong>. Es la herramienta favorita de los directores creativos. A diferencia de ChatGPT, vive dentro de una plataforma llamada Discord.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo? (El Flujo de Acceso)</h3>
          <p class="text-slate-600 mb-3">Acceder a Midjourney requiere dos "llaves": una cuenta en Discord y una suscripción.</p>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-purple-800 mb-2">1. Crear tu cuenta en Discord</h4>
              <p class="text-sm text-slate-600">Discord es un chat (parecido a WhatsApp o Slack) donde vive Midjourney. Entra a <a href="https://discord.com" target="_blank" class="text-purple-600 hover:underline">discord.com</a> y regístrate. Descarga la aplicación en tu computadora o celular para que sea más estable.</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-purple-800 mb-2">2. Unirse al servidor de Midjourney</h4>
              <p class="text-sm text-slate-600">Una vez en Discord, ve a <a href="https://midjourney.com" target="_blank" class="text-purple-600 hover:underline">midjourney.com</a> y haz clic en "Join the Beta". Esto te llevará a Discord. Acepta la invitación para entrar al servidor oficial de la IA.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">3. Activación y Planes (Importante)</h4>
              <p class="text-sm text-amber-700"><strong>Nota AulaGenIA:</strong> Midjourney es una herramienta de pago (aprox. $10 USD al mes). Dentro de Discord, busca cualquier canal que diga #newbies y escribe el comando: <code class="bg-slate-800 text-white px-2 py-1 rounded">/subscribe</code>. La IA te enviará un enlace privado para que elijas tu plan.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Estrella para el Alumno AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Midjourney no usa botones, usa "hechizos" (comandos):</p>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">✨ /imagine</h4>
              <p class="text-sm text-purple-700">Es el comando principal. Escribes <code>/imagine prompt:</code> seguido de tu idea para empezar a crear.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">🖼️ Parámetro de Aspecto (--ar)</h4>
              <p class="text-sm text-purple-700">Si quieres una imagen para Instagram o cine, añade al final <code>--ar 9:16</code> o <code>--ar 16:9</code>.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">👁️ Veredicto Visual (U y V)</h4>
              <p class="text-sm text-purple-700">La IA te dará 4 opciones. El botón U (Upscale) agranda la que te gustó, y el botón V (Variation) crea versiones parecidas.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">💻 Uso en la Web</h4>
              <p class="text-sm text-purple-700">En 2025, si ya has generado imágenes en Discord, puedes usar su nueva página web oficial (midjourney.com/imagine) que es mucho más amigable.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos Pro de AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Para no desperdiciar tus horas de generación:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Escribe en Inglés:</strong> Aunque entiende algo de español, los mejores resultados fotográficos salen con órdenes en inglés. (Usa ChatGPT para traducir tus prompts).</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Sé descriptivo:</strong> En lugar de "un perro", escribe "un Golden Retriever corriendo en un bosque soleado, estilo fotografía National Geographic".</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Limpia tu galería:</strong> Puedes ver todas tus creaciones organizadas entrando a tu perfil en la web de Midjourney.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La tecnología pone los pinceles, pero tu imaginación pone la obra. En Midjourney, el límite no es la IA, es tu capacidad de observar el detalle."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para potenciar tu kit de herramientas en AulaGenIA. Información actualizada a diciembre de 2025.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-gamma": {
    meta: {
      type: "guide",
      title: "Gamma para Principiantes",
      subtitle: "De un párrafo a una presentación profesional en segundos - Dic. 2025",
      icon: "projector",
      color: "amber",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Gamma-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Qué es Gamma?</h2>
          <p class="text-amber-700">Gamma es la herramienta de IA que está matando al PowerPoint tradicional. No es solo un editor; es un <strong>diseñador inteligente</strong> que recibe tus ideas (en texto o voz) y las convierte automáticamente en presentaciones, documentos o páginas web. Es el aliado perfecto para Carlos (nuestro estratega) y para cualquier alumno que necesite exponer sus ideas con un acabado de alto nivel sin saber nada de diseño.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo? (Paso a Paso)</h3>
          <p class="text-slate-600 mb-3">Gamma funciona directamente en la nube y es extremadamente intuitivo.</p>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-amber-800 mb-2">1. Registro y Configuración</h4>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• <strong>La dirección:</strong> Entra en tu navegador a <a href="https://gamma.app" target="_blank" class="text-amber-600 hover:underline">gamma.app</a>.</li>
                <li>• <strong>Inicio de sesión:</strong> Haz clic en "Sign up for free".</li>
                <li>• <strong>El camino rápido:</strong> Usa tu cuenta de Google. Es seguro, rápido y mantiene tus presentaciones sincronizadas.</li>
                <li>• <strong>Configuración inicial:</strong> Te preguntará para qué lo usarás. Selecciona "Personal" o "Trabajo" para que la IA adapte los estilos que te sugiere.</li>
              </ul>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-amber-800 mb-2">2. Tu Primer Diseño Mágico</h4>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• Haz clic en el botón "Create new with AI".</li>
                <li>• Elige "Generate": Solo escribe de qué trata tu tema (ej: "Presentación sobre los beneficios de la IA en la educación") y Gamma creará el índice y el diseño completo.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Estrella para el Alumno AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Gamma es el "maquetador" más veloz de nuestro arsenal:</p>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-1">✨ Generación de Esquema</h4>
              <p class="text-sm text-amber-700">Si no tienes el texto, Gamma te propone una estructura de temas lógica para tu presentación.</p>
            </div>
            <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-1">📄 Texto a Gamma</h4>
              <p class="text-sm text-amber-700">Puedes pegar un borrador largo de ChatGPT y Gamma lo dividirá inteligentemente en diapositivas elegantes.</p>
            </div>
            <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-1">🔄 Cambio de Estilo un Clic</h4>
              <p class="text-sm text-amber-700">¿No te gustan los colores? Haz clic en "Themes" y toda la presentación cambiará de fuente y color al instante sin desordenar nada.</p>
            </div>
            <div class="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-1">🌐 Publicación como Web</h4>
              <p class="text-sm text-amber-700">Puedes compartir tu presentación como un enlace web. Tus clientes podrán verla en su celular de forma fluida.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">¿Cómo funcionan los Créditos?</h3>
          <p class="text-slate-600 mb-3">Gamma usa un sistema de energía para su IA:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg"><strong>1. Créditos Iniciales:</strong> Al registrarte, recibes 400 créditos gratuitos. Cada vez que generas una presentación nueva, consumes unos 40 créditos.</li>
            <li class="bg-amber-50 p-3 rounded-lg"><strong>2. Recarga de Créditos:</strong> Puedes ganar más créditos invitando a otros alumnos o pasando a un plan de pago si necesitas crear presentaciones a diario.</li>
            <li class="bg-amber-50 p-3 rounded-lg"><strong>3. Edición Libre:</strong> Una vez generada la presentación, puedes editar el texto y las imágenes manualmente sin gastar créditos extra.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos Pro de AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Para lograr presentaciones que realmente impresionen:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Combina con ChatGPT:</strong> Primero usa la Receta WOW en ChatGPT para tener un contenido sólido, luego pégalo en Gamma.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa las Tarjetas:</strong> Gamma no usa "hojas" fijas, usa tarjetas flexibles. Si necesitas más información en una diapositiva, simplemente sigue escribiendo y la tarjeta se agrandará sola.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Exportación:</strong> Si lo necesitas para una reunión sin internet, puedes exportar tu creación a PDF o PowerPoint.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La tecnología elimina el trabajo pesado para que tú puedas brillar en la exposición. Gamma es tu escenario, tú eres el protagonista."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para el programa AulaGenIA. Información actualizada a diciembre de 2025.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-dalle3": {
    meta: {
      type: "guide",
      title: "DALL-E 3 para Principiantes",
      subtitle: "Guía paso a paso para crear imágenes desde ChatGPT - Dic. 2025",
      icon: "image",
      color: "teal",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-Acceso-a-DALL-E3-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Qué es DALL-E 3?</h2>
          <p class="text-teal-700">DALL-E 3 es el sistema de generación de imágenes de OpenAI. Su mayor ventaja es la <strong>facilidad de uso</strong>: entiende el lenguaje natural perfectamente. No necesitas saber palabras técnicas; puedes pedirle una imagen hablando como si lo hicieras con un amigo. Además, al vivir dentro de ChatGPT, puedes pedirle que corrija detalles de la imagen simplemente conversando.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo? (Acceso Directo)</h3>
          <p class="text-slate-600 mb-3">DALL-E 3 no tiene una página separada; es una función dentro de tu copiloto habitual.</p>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-teal-800 mb-2">1. El camino a través de ChatGPT</h4>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• <strong>Entra a tu cuenta:</strong> Ve a <a href="https://chat.openai.com" target="_blank" class="text-teal-600 hover:underline">chatgpt.com</a> e inicia sesión.</li>
                <li>• <strong>Simplemente pide:</strong> No busques un botón de "Modo Imagen". Solo escribe: "Dibuja un gato astronauta en Marte estilo acuarela".</li>
                <li>• <strong>IA Multimodal:</strong> ChatGPT detectará automáticamente que tu meta es visual y activará el motor de DALL-E 3 para entregarte el resultado en el mismo chat.</li>
              </ul>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">2. Alternativa: Microsoft Designer (Gratis)</h4>
              <p class="text-sm text-amber-700">Si agotas tus créditos en ChatGPT, puedes usar DALL-E 3 de forma gratuita y con menos límites en Microsoft Designer (antes Bing Image Creator). Solo necesitas una cuenta de Hotmail o Outlook.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Estrella para el Alumno AulaGenIA</h3>
          <p class="text-slate-600 mb-3">DALL-E 3 es el "ilustrador obediente" de tu equipo:</p>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-teal-50 p-4 rounded-xl border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-1">✨ Refinamiento Conversacional</h4>
              <p class="text-sm text-teal-700">Si la imagen no te gusta, no tienes que empezar de cero. Dile: "Ahora haz que el gato sea naranja" o "Ponle más luz al fondo".</p>
            </div>
            <div class="bg-teal-50 p-4 rounded-xl border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-1">🇪🇸 Comprensión del Español</h4>
              <p class="text-sm text-teal-700">Es, junto a Gemini, la IA que mejor entiende nuestras órdenes en español sin necesidad de traducir al inglés.</p>
            </div>
            <div class="bg-teal-50 p-4 rounded-xl border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-1">✂️ Editor en el Chat</h4>
              <p class="text-sm text-teal-700">Puedes seleccionar un área de la imagen generada y pedirle cambios específicos solo en esa zona (ej: "Cambia solo las gafas del personaje").</p>
            </div>
            <div class="bg-teal-50 p-4 rounded-xl border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-1">🎨 Consistencia de Estilo</h4>
              <p class="text-sm text-teal-700">Pídele que mantenga el estilo de una imagen anterior para crear una serie coherente para tus redes sociales.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">¿Cuáles son los límites?</h3>
          <p class="text-slate-600 mb-3">Dependiendo de tu plan en ChatGPT, las reglas cambian:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg"><strong>1. Usuarios Free:</strong> Tienes un número limitado de generaciones diarias (usualmente 2 o 3 imágenes de alta calidad).</li>
            <li class="bg-amber-50 p-3 rounded-lg"><strong>2. Usuarios Plus (Pago):</strong> Generaciones casi ilimitadas y acceso a herramientas de edición avanzada.</li>
            <li class="bg-amber-50 p-3 rounded-lg"><strong>3. Seguridad:</strong> DALL-E 3 tiene filtros estrictos. No generará imágenes de personas famosas reales ni contenido violento o protegido por derechos de autor.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos Pro de AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Para no desperdiciar tus intentos gratuitos:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Dile el formato:</strong> Especifica si quieres la imagen cuadrada, vertical (para celular) o apaisada (para cine).</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Combina con el Modelo AGIA:</strong> Usa un Rol para ChatGPT antes de pedir la imagen: "Actúa como un fotógrafo profesional de producto y genera una imagen de..."</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Pide variaciones:</strong> Si te gusta una imagen, pide: "Haz 3 variaciones de este mismo concepto pero variando el ángulo de cámara".</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA no dibuja lo que tú dices, dibuja lo que tú eres capaz de describir. La precisión en tus palabras es el pincel del futuro."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para potenciar tu kit visual en AulaGenIA. Información actualizada a diciembre de 2025.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-canva": {
    meta: {
      type: "guide",
      title: "Canva para Principiantes",
      subtitle: "Tu estudio de diseño potenciado por IA - Dic. 2025",
      icon: "layout",
      color: "blue",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Canva-para-Novatos.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Qué es Canva?</h2>
          <p class="text-blue-700">Canva es la plataforma líder de diseño para personas que no son diseñadores profesionales. Es el lugar donde "armas" todo: presentaciones, logos, volantes o videos. Su gran valor hoy es el <strong>Estudio Mágico</strong>, un conjunto de herramientas de Inteligencia Artificial que te ayudan a crear diseños desde cero solo describiendo lo que quieres.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo? (Paso a Paso)</h3>
          <p class="text-slate-600 mb-3">Canva es gratuito y funciona perfectamente tanto en la computadora como en el celular.</p>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-blue-800 mb-2">1. Registro y Acceso</h4>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• <strong>La dirección:</strong> Entra en tu navegador a <a href="https://canva.com" target="_blank" class="text-blue-600 hover:underline">canva.com</a>.</li>
                <li>• <strong>Crear cuenta:</strong> Haz clic en "Regístrate gratis".</li>
                <li>• <strong>Sincronización segura:</strong> Usa tu cuenta de Google para entrar al instante. Esto te permitirá ver tus diseños en cualquier dispositivo.</li>
              </ul>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-blue-800 mb-2">2. Explorando el Estudio Mágico</h4>
              <p class="text-sm text-slate-600">En la barra lateral izquierda, busca el icono de una estrella brillante llamada "Estudio Mágico". Allí es donde vive el cerebro de IA de Canva que usaremos en el curso.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Estrella para el Alumno AulaGenIA</h3>
          <p class="text-slate-600 mb-3">Canva es el "ensamblador" de todas tus creaciones anteriores:</p>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">✨ Diseño Mágico</h4>
              <p class="text-sm text-blue-700">Escribe qué quieres hacer (ej: "Un post para mi curso de cocina") y la IA elegirá colores e imágenes por ti.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">⌨️ Escritura Mágica</h4>
              <p class="text-sm text-blue-700">Copia tus borradores de ChatGPT y pídele a Canva que les dé un tono más "profesional" directamente en el diseño.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🖼️ Multimedia Mágica</h4>
              <p class="text-sm text-blue-700">Si no encuentras la foto perfecta, descríbela y la IA la dibujará en segundos.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🔄 Redimensión Mágica</h4>
              <p class="text-sm text-blue-700">Convierte una presentación en un post de Instagram o en un documento con un solo clic.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">¿Gratis o Pro?</h3>
          <p class="text-slate-600 mb-3">Canva ofrece muchísimo valor sin pagar, pero hay diferencias:</p>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg"><strong>1. Canva Free:</strong> Acceso a miles de plantillas y funciones de IA básicas. Es perfecto para empezar el curso.</li>
            <li class="bg-amber-50 p-3 rounded-lg"><strong>2. Canva Pro (Pago):</strong> Incluye el quitado de fondos de fotos con un clic y acceso total al Estudio Mágico avanzado.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos Pro de AulaGenIA</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa tus propias fotos:</strong> Combina las imágenes que generaste en Midjourney o DALL-E con las plantillas de Canva.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Mantén tus colores:</strong> Elige una paleta de colores y úsala siempre para que tu marca se vea profesional.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Menos es más:</strong> No satures el diseño. Usa los espacios en blanco para que el mensaje se entienda rápido.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA te da la velocidad, pero Canva te da la belleza. Un estratega sabe que la forma en que presentas una idea es tan importante como la idea misma."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para el programa AulaGenIA. Información actualizada a diciembre de 2025.</div>
      </article>
    `,
    segments: {}
  },
  "checklist-complejidad": {
    meta: {
      type: "checklist",
      title: "¿Tarea o Proyecto?",
      subtitle: "Mapa de Decisión para elegir tu estrategia IA - Módulo 4: Video 1",
      icon: "check-square",
      color: "blue",
      module: 2,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Herramienta-Checklist-de-Complejidad.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"No todas las misiones se resuelven igual. Si usas el método Arquitecto para un correo, perderás tiempo. Si usas la Receta WOW para un libro, el resultado será pobre. Usa este diagrama para elegir tu arma antes de abrir el chat."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 text-center mb-4">¿Cuál es mi Misión?</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-5 border-2 border-purple-300 hover:shadow-lg transition-all">
              <h4 class="font-bold text-purple-800 text-center mb-3">✨ OPCIÓN A: LA TAREA</h4>
              <p class="text-sm text-purple-700 text-center mb-3">(Uso de la Receta WOW)</p>
              <ul class="text-sm text-purple-700 space-y-2">
                <li class="flex items-start gap-2"><span class="text-purple-500">✓</span> <strong>Alcance:</strong> Pieza única y específica.</li>
                <li class="flex items-start gap-2"><span class="text-purple-500">✓</span> <strong>Hilo:</strong> Se agota en un solo chat.</li>
                <li class="flex items-start gap-2"><span class="text-purple-500">✓</span> <strong>Temas:</strong> No se tocan puntos diferentes.</li>
                <li class="flex items-start gap-2"><span class="text-purple-500">✓</span> <strong>Estructura:</strong> Resultado directo.</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border-2 border-blue-300 hover:shadow-lg transition-all">
              <h4 class="font-bold text-blue-800 text-center mb-3">🏗️ OPCIÓN B: EL PROYECTO</h4>
              <p class="text-sm text-blue-700 text-center mb-3">(Método Arquitecto)</p>
              <ul class="text-sm text-blue-700 space-y-2">
                <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> <strong>Alcance:</strong> Múltiples piezas conectadas.</li>
                <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> <strong>Hilo:</strong> Requiere separar temas.</li>
                <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> <strong>Mesa:</strong> Hay que "limpiar" con chats nuevos.</li>
                <li class="flex items-start gap-2"><span class="text-blue-500">✓</span> <strong>Estructura:</strong> Exige un Plano Maestro.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Veredicto de Ejecución</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">✨ VEREDICTO A: ESTRATEGIA WOW</h4>
              <p class="text-sm text-purple-700 mb-2"><strong>Cuándo:</strong> Cuando la respuesta cabe en una sola conversación enfocada.</p>
              <ul class="text-sm text-purple-700 space-y-1">
                <li>• <strong>Acción:</strong> Aplica el Modelo AGIA completo en un prompt robusto.</li>
                <li>• <strong>Foco:</strong> No dividas el tema; mantén el hilo hasta terminar la tarea.</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">🏗️ VEREDICTO B: MÉTODO ARQUITECTO</h4>
              <p class="text-sm text-blue-700 mb-2"><strong>Cuándo:</strong> Cuando el tema evoluciona o es demasiado largo para un solo chat.</p>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• <strong>Acción:</strong> Plano Maestro → Ladrillo → Cemento.</li>
                <li>• <strong>Foco:</strong> Usa la Bitácora de Obra para saltar a chats nuevos y evitar que la IA se "ensucie" con el historial.</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La inteligencia del estratega no está en cómo escribe el prompt, sino en saber si la misión cabe en una sola conversación o requiere abrir una obra por etapas."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial AulaGenIA 2025. Elige tu camino, domina tu tiempo.</div>
      </article>
    `,
    segments: {}
  },

  // HERRAMIENTA INTERACTIVA: Simulador de Recuperación de Tiempo
  "simulador-tiempo": {
    meta: {
      type: "interactive",
      title: "🎮 Simulador de Recuperación de Tiempo",
      subtitle: "Calcula cuántas horas puedes recuperar con IA",
      icon: "clock",
      color: "purple",
      module: 2
    },
    base_html: `
      <div id="simulador-tiempo-container" class="simulador-integrated">
        <!-- El contenido se inyecta dinámicamente por JS -->
        <div class="simulador-loading text-center py-12">
          <div class="inline-flex items-center gap-3 text-purple-600">
            <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-medium">Cargando Simulador...</span>
          </div>
        </div>
      </div>
    `,
    segments: {}
  },

  // ============================================================
  //   MÓDULO 3: PROMPTS AVANZADOS
  // ============================================================
  "infografia-receta-wow": {
    meta: {
      type: "infographic",
      title: "La Receta WOW",
      subtitle: "La fórmula maestra para tus instrucciones (Prompts) - Módulo 3: Video 1",
      icon: "chef-hat",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Infografía-La Receta-WOW.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200 text-center">
          <h2 class="text-2xl font-bold text-teal-900 mb-4">LA RECETA WOW</h2>
          <p class="text-purple-700 mb-4">La fórmula maestra para tus instrucciones (Prompts)</p>
          <div class="flex flex-wrap justify-center items-center gap-2 text-lg font-bold">
            <span class="bg-purple-600 px-4 py-2 rounded-lg shadow-lg" style="color: #ffffff !important;">1. EL ROL</span>
            <span class="text-purple-400 text-2xl">+</span>
            <span class="bg-blue-500 px-4 py-2 rounded-lg shadow-lg" style="color: #ffffff !important;">2. EL DETALLE</span>
            <span class="text-purple-400 text-2xl">+</span>
            <span class="bg-emerald-500 px-4 py-2 rounded-lg shadow-lg" style="color: #ffffff !important;">3. EL PROPÓSITO</span>
          </div>
          <div class="mt-4 bg-white/50 rounded-xl p-3">
            <p class="text-xl font-bold text-purple-800">= RESULTADO WOW!</p>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Desglose de los 3 Ingredientes</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #8b5cf6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">1</span>
                <h4 class="font-bold text-purple-800 text-lg">EL ROL (Identidad)</h4>
              </div>
              <p class="text-purple-700 mb-2">Define el experto que necesitas. No es lo mismo un "asistente" que un "Director de Marketing con 20 años de experiencia".</p>
              <p class="text-sm text-purple-600"><strong>¿Quién es la IA hoy?</strong></p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #ffffff;" class="text-sm italic">Ejemplo: "Actúa como un redactor creativo experto en ventas..."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #3b82f6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">2</span>
                <h4 class="font-bold text-blue-800 text-lg">EL DETALLE (Tu Contexto)</h4>
              </div>
              <p class="text-blue-700 mb-2">Dale los ingredientes de tu realidad: datos, números, situación actual, restricciones y público objetivo.</p>
              <p class="text-sm text-blue-600"><strong>¿Cuál es tu situación específica?</strong></p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #ffffff;" class="text-sm italic">Ejemplo: "Tengo una zapatería que bajó ventas un 20%, mi público son mujeres de 25-40 años..."</p>
              </div>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200 hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #10b981; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">3</span>
                <h4 class="font-bold text-green-800 text-lg">EL PROPÓSITO (Tu Objetivo)</h4>
              </div>
              <p class="text-green-700 mb-2">Dile QUÉ quieres lograr y PARA QUÉ. ¿Vender, emocionar, educar, convencer, pedir disculpas?</p>
              <p class="text-sm text-green-600"><strong>¿Qué resultado esperas obtener?</strong></p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #ffffff;" class="text-sm italic">Ejemplo: "...para lograr que el cliente vuelva a comprar y recomiende mi tienda a sus amigas."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 class="font-bold text-amber-800 mb-2">RECORDATORIO AULAGENIA:</h4>
          <p class="text-amber-700 italic">"Si tu instrucción es vaga, el resultado será mediocre. Si usas la Receta WOW, conviertes a la IA en un socio estratégico."</p>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La claridad en tu prompt es la velocidad de tu resultado."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento diseñado para alumnos de AulaGenIA. ¡Guárdalo en tu escritorio!</div>
      </article>
    `,
    segments: {}
  },
  "mi-primer-prompt-wow": {
    meta: {
      type: "worksheet",
      title: "Mi Primer Prompt WOW",
      subtitle: "Aplicando la Estructura Maestra AGIA - Módulo 3: Video 1",
      icon: "edit-3",
      color: "violet",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Mi-Primer-Prompt-WOW.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-6 border border-violet-200">
          <h2 class="text-xl font-bold text-violet-900 mb-2">La Misión de Hoy</h2>
          <p class="text-violet-700">No queremos resultados que "salgan del paso", queremos el efecto WOW. Usa esta plantilla para diseñar una instrucción poderosa para una tarea que tengas pendiente hoy, aplicando los cimientos estratégicos que vimos con Julia.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">PASO 1: Define tus 3 Pilares Estratégicos</h3>
          <p class="text-slate-600 mb-3">Completa los espacios pensando en una tarea real de trabajo (ej. un correo a un cliente, una minuta de reunión o un mensaje para un proveedor).</p>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <label class="font-bold text-purple-800 block mb-2">1. EL ROL (¿Quién actúa?)</label>
              <p class="text-sm text-purple-600 mb-2">Ejemplo: Actúa como un asistente administrativo experto en atención al cliente...</p>
              <textarea class="w-full p-3 border border-purple-300 rounded-lg text-sm" rows="2" placeholder="Escribe tu ROL aquí..."></textarea>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <label class="font-bold text-blue-800 block mb-2">2. EL CONTEXTO (¿Qué está pasando?)</label>
              <p class="text-sm text-blue-600 mb-2">Ejemplo: Un cliente habitual recibió su pedido incompleto y necesito avisarle de forma muy amable que el resto llega mañana...</p>
              <textarea class="w-full p-3 border border-blue-300 rounded-lg text-sm" rows="2" placeholder="Escribe tu CONTEXTO aquí..."></textarea>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <label class="font-bold text-green-800 block mb-2">3. LA META (¿Qué quieres lograr?)</label>
              <p class="text-sm text-green-600 mb-2">Ejemplo: El objetivo es que el cliente no se moleste y sienta que estamos cuidando su pedido personalmente...</p>
              <textarea class="w-full p-3 border border-green-300 rounded-lg text-sm" rows="2" placeholder="Escribe tu META aquí..."></textarea>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">PASO 2: El Truco Maestro de Julia (La Entrevista)</h3>
          <p class="text-slate-600 mb-3">Como vimos en el video, la IA es mucho más precisa si tú le permites preguntarte. Al final de tu instrucción del Paso 1, añade siempre esta frase mágica:</p>
          <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <div class="bg-slate-800 rounded-lg p-4 relative">
              <button onclick="copyResourcePrompt(this)" class="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600 text-white text-xs px-3 py-1 rounded transition-all duration-200">Copiar</button>
              <p class="text-white italic">"Antes de responder, hazme todas las preguntas que necesites para asegurar que el resultado sea perfecto y esté alineado con mi realidad."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">PASO 3: Ejecución y Reflexión</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm">Pega tu instrucción completa en tu herramienta de IA favorita.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm">Responde las preguntas que la IA te haga para darle más detalles.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Pregunta de cierre:</strong> ¿Notaste cómo cambió la calidad del texto al usar el Rol y el Contexto?</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"En AulaGenIA, la IA no es el futuro, tú lo eres."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material de apoyo diseñado para AulaGenIA. ¡Empieza a dirigir a tu copiloto!</div>
      </article>
    `,
    segments: {}
  },
  "plantilla-prompt-wow": {
    meta: {
      type: "template",
      title: "Plantilla: Construye tu Prompt WOW",
      subtitle: "Tu herramienta para crear instrucciones perfectas - Módulo 3: Video 1",
      icon: "file-edit",
      color: "emerald",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Plantilla-Rellena-tu-Prompt-WOW.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-center text-emerald-900 mb-2">¿Cómo usar esta plantilla?</h2>
          <p class="text-center text-emerald-700">Esta es tu herramienta para construir prompts que generen el "Efecto WOW". Cada vez que necesites pedirle algo a la IA, rellena los 3 espacios con la información de tu tarea específica.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">1. La Plantilla Maestra (Copia y Rellena)</h3>
          <div class="bg-slate-800 rounded-2xl p-6 relative">
            <button onclick="copyResourcePrompt(this)" class="absolute top-4 right-4 bg-emerald-500 hover:bg-emerald-600 text-white text-xs px-3 py-2 rounded-lg transition-all duration-200">Copiar</button>
            <div class="space-y-3 font-mono text-sm" style="color: #ffffff;">
              <p><span style="color: #a78bfa; font-weight: bold;">1. ROL:</span> Actúa como [el experto que necesitas],</p>
              <p><span style="color: #60a5fa; font-weight: bold;">2. DETALLE:</span> [tu contexto: datos, números, situación, restricciones],</p>
              <p><span style="color: #34d399; font-weight: bold;">3. PROPÓSITO:</span> para lograr [el objetivo/resultado que quieres obtener].</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">2. Ejemplo Real: Un Prompt WOW Completo</h3>
          <div class="bg-white rounded-xl p-5 border-2 border-emerald-300">
            <p class="text-sm text-slate-500 mb-3">Este es un ejemplo de cómo se ve un prompt bien construido:</p>
            <div class="bg-slate-100 rounded-lg p-4">
              <p class="text-slate-800">
                <span class="font-bold text-purple-700">1. ROL: Actúa como un redactor de correos corporativos con 10 años de experiencia en atención al cliente.</span>
              </p>
              <p class="text-slate-800 mt-2">
                <span class="font-bold text-blue-700">2. DETALLE: Un cliente llamado Juan (comprador frecuente) recibió su pedido con 5 días de retraso. Quiero ofrecerle un 15% de descuento como compensación.</span>
              </p>
              <p class="text-slate-800 mt-2">
                <span class="font-bold text-green-700">3. PROPÓSITO: Para lograr que Juan sienta que valoramos su lealtad y decida seguir comprándonos en el futuro.</span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">3. Tu Turno: Construye tu Prompt Ahora</h3>
          <p class="text-slate-600 mb-4">Usa estos campos para practicar. Piensa en una tarea real que tengas pendiente hoy:</p>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <label class="font-bold text-purple-800 block mb-2">🎭 EL ROL: ¿Quién debe ser la IA?</label>
              <p class="text-xs text-purple-600 mb-2">Ejemplos: Chef profesional, Abogado experto en contratos, Coach de ventas...</p>
              <textarea class="w-full p-3 border border-purple-300 rounded-lg text-sm" rows="2" placeholder="Actúa como..."></textarea>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <label class="font-bold text-blue-800 block mb-2">📝 EL DETALLE: ¿Cuál es tu situación?</label>
              <p class="text-xs text-blue-600 mb-2">Incluye: datos, números, contexto, restricciones, público objetivo...</p>
              <textarea class="w-full p-3 border border-blue-300 rounded-lg text-sm" rows="3" placeholder="Necesito que..."></textarea>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <label class="font-bold text-green-800 block mb-2">🎯 EL PROPÓSITO: ¿Qué quieres lograr?</label>
              <p class="text-xs text-green-600 mb-2">Sé específico: ¿Qué resultado esperas? ¿Qué acción quieres provocar?</p>
              <textarea class="w-full p-3 border border-green-300 rounded-lg text-sm" rows="2" placeholder="Para lograr..."></textarea>
            </div>
          </div>
        </section>
        <section class="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 class="font-bold text-amber-800 mb-2">⚠️ Errores Comunes a Evitar</h4>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>• <strong>No dar ROL:</strong> "Hazme un correo" → resultado genérico.</li>
            <li>• <strong>Sin DETALLE:</strong> "Escribe algo bonito" → la IA adivina mal.</li>
            <li>• <strong>Sin PROPÓSITO:</strong> "Dame ideas" → ideas que no sirven para tu caso.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad de la respuesta es proporcional a la claridad de tu pedido. Un prompt vago = resultado vago."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial de AulaGenIA. Tu plantilla personal para dominar al copiloto.</div>
      </article>
    `,
    segments: {}
  },
  "glosario-m3v1": {
    meta: {
      type: "glossary",
      title: "Glosario: El Arte de Pedir",
      subtitle: "Vocabulario Esencial - Módulo 3: Video 1",
      icon: "book",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M3V1.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Vocabulario del Arte de Pedir</h2>
          <p class="text-purple-700">Estos son los términos clave que usarás para convertir tus instrucciones en resultados WOW.</p>
        </section>
        <section class="space-y-4">
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-purple-800 text-lg mb-2">💬 Prompt (Instrucción)</h4>
            <p class="text-slate-600">El mensaje o pedido que le escribes a la IA. Es tu forma de comunicarte con el copiloto. Mientras más claro sea tu prompt, mejor será la respuesta.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-purple-800 text-lg mb-2">🎭 ROL (Identidad)</h4>
            <p class="text-slate-600">El personaje o experto que le pides a la IA que personifique. Ejemplo: "Actúa como un chef profesional" o "Eres un abogado experto en contratos". El rol define la perspectiva y el nivel de expertise de la respuesta.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-blue-800 text-lg mb-2">📝 Contexto / Detalle</h4>
            <p class="text-slate-600">La información específica de tu situación: datos, números, restricciones, público objetivo y cualquier elemento que la IA necesite conocer para darte una respuesta personalizada a tu realidad.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-green-800 text-lg mb-2">🎯 Propósito / Meta</h4>
            <p class="text-slate-600">El objetivo final que quieres lograr con la respuesta de la IA. ¿Qué acción quieres provocar? ¿Qué resultado esperas? Sin propósito claro, la IA adivina y falla.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-amber-800 text-lg mb-2">✨ Efecto WOW</h4>
            <p class="text-slate-600">El resultado de alta calidad que supera tus expectativas. Ocurre cuando combinas correctamente ROL + DETALLE + PROPÓSITO en tu instrucción. Es la diferencia entre una respuesta genérica y una respuesta que parece hecha por un experto.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-teal-800 text-lg mb-2">🧱 Prompt Estructurado</h4>
            <p class="text-slate-600">Una instrucción que sigue un formato ordenado y lógico (la Receta WOW). A diferencia de pedir "hazme algo", un prompt estructurado le dice a la IA QUIÉN debe ser, QUÉ debe hacer y PARA QUÉ.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"Un prompt vago genera una respuesta vaga. Un prompt estructurado genera el Efecto WOW."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 1. AulaGenIA 2025.</div>
      </article>
    `,
    segments: {}
  },
  "fuentes-autoridad-3": {
    meta: {
      type: "guide",
      title: "Nuestras Fuentes de Autoridad",
      subtitle: "Ingeniería de Instrucciones y Comunicación Efectiva - Módulo 3",
      icon: "book-open",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-3.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"La magia no está en la herramienta, sino en cómo le hablas. En este módulo, desbloquearemos el lenguaje de la precisión para que tus instrucciones se conviertan en resultados impecables desde el primer intento."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Ingeniería de Instrucciones y Comunicación Efectiva</h3>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-purple-800 mb-2">Anthropic & OpenAI (2024). Prompt Engineering Guide for Developers and Users</h4>
            <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
              <p class="text-sm text-amber-800"><strong>💡 Nos basamos en:</strong> Las mejores prácticas de ingeniería de instrucciones de los creadores de ChatGPT y Claude para entregarte nuestra receta de "Rol + Detalle + Propósito". Esta metodología asegura que la IA te entienda a la primera, eliminando cualquier ambigüedad en tus requerimientos.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"Un prompt no es una orden, es un puente de contexto. Cuanto más sólido construyas el puente, más lejos llegará el razonamiento de la IA."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material exclusivo para alumnos de AulaGenIA - Módulo 3. © 2025 AulaGenIA. Todos los derechos reservados.</div>
      </article>
    `,
    segments: {}
  },
  "glosario-m3v2": {
    meta: {
      type: "glossary",
      title: "Glosario: Fórmula AGIA",
      subtitle: "Vocabulario de Instrucciones Maestras - Módulo 3: Video 2",
      icon: "book",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M3V2.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Vocabulario de la Fórmula AGIA</h2>
          <p class="text-purple-700">Estos términos te ayudarán a dominar la estructura completa de instrucciones maestras.</p>
        </section>
        <section class="space-y-4">
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-purple-800 text-lg mb-2">🎯 Fórmula AGIA</h4>
            <p class="text-slate-600">La estructura maestra completa de AulaGenIA para crear prompts profesionales: ROL + CONTEXTO + META + RESTRICCIONES + FORMATO. Es la evolución de la Receta WOW para usuarios avanzados.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-red-800 text-lg mb-2">⛔ Restricciones</h4>
            <p class="text-slate-600">Lo que NO quieres que haga la IA. Definir límites claros evita respuestas genéricas. Ejemplo: "No uses jerga técnica", "No repitas conceptos", "Evita listas de más de 5 puntos".</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-blue-800 text-lg mb-2">📋 Formato de Salida</h4>
            <p class="text-slate-600">Cómo quieres recibir la respuesta: tabla, lista numerada, párrafos, JSON, etc. Especificar el formato evita tener que reformatear después.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-amber-800 text-lg mb-2">🎩 Rotación de Sombrero</h4>
            <p class="text-slate-600">Técnica para cambiar el ROL de la IA sin perder el contexto del chat. Ejemplo: "Ahora cambia de Estratega a Redactor y reescribe esto con tono más emocional."</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-green-800 text-lg mb-2">🔗 Ingeniería Social (IA)</h4>
            <p class="text-slate-600">El arte de usar frases de presión o desafío para activar las capacidades más profundas de la IA. No es manipulación, es persuasión estratégica.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-teal-800 text-lg mb-2">📝 Verbos de Poder</h4>
            <p class="text-slate-600">Palabras de acción que obligan a la IA a ser más específica: "Desglosa", "Contrasta", "Prioriza", "Critica". Usar verbos fuertes mejora la calidad de las respuestas.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"La Fórmula AGIA no es más larga, es más precisa. Cada elemento reduce la incertidumbre."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 2. AulaGenIA 2025.</div>
      </article>
    `,
    segments: {}
  },
  "arte-persuasion": {
    meta: {
      type: "guide",
      title: "El Arte de la Persuasión IA",
      subtitle: "Técnicas de Ingeniería Social para dominar al Copiloto - Módulo 3: Video 3",
      icon: "sparkles",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/El-Arte-de-la-Persuacion.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Hoy no vamos a escribir, vamos a persuadir. Aprenderás los trucos que usan en Silicon Valley para que la IA se esfuerce al máximo por ti. Recuerda: la IA tiene 'sentimientos' estadísticos, y tú vas a aprender a activarlos."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">1. Técnicas de Ingeniería Social</h3>
          <p class="text-slate-600 mb-4">Estas técnicas obligan a la IA a salir de su respuesta estándar y activar sus redes neuronales más complejas.</p>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">1. La Presión Táctica (Alto Riesgo)</h4>
              <p class="text-sm text-red-700 mb-2">La calidad del resultado sube cuando la IA siente que el trabajo es vital.</p>
              <div class="bg-slate-800 rounded-lg p-3">
                <p class="text-white text-sm italic">Frase Pro: "Este proyecto es vital para mi carrera, necesito precisión quirúrgica".</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">2. Muestra, no describas</h4>
              <p class="text-sm text-blue-700">Como ir a la peluquería con una foto. Dale un ejemplo de un texto o estilo que te guste y pídele que lo imite.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">3. La Técnica de la Duda</h4>
              <p class="text-sm text-amber-700 mb-2">No aceptes la primera respuesta. Desafíala:</p>
              <div class="bg-slate-800 rounded-lg p-3">
                <p class="text-white text-sm italic">Frase Pro: "¿Estás 100% seguro? Revisa tus datos y critica tu propia respuesta".</p>
              </div>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">4. Deja que la IA trabaje por ti</h4>
              <p class="text-sm text-purple-700">Pídele que ella misma redacte el prompt perfecto usando el modelo AGIA.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">2. Tus 3 Salvavidas: ¿Qué hacer cuando la IA falla?</h3>
          <p class="text-slate-600 mb-4">Si el copiloto se estanca o alucina, aplica estos protocolos de emergencia:</p>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-purple-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-purple-800 border-b-2 border-purple-200">Salvavidas</th>
                  <th class="text-left p-3 font-semibold text-purple-800 border-b-2 border-purple-200">Cuándo y cómo usarlo</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-purple-50">
                  <td class="p-3 font-bold text-purple-700">1. Continúa</td>
                  <td class="p-3 text-slate-600">Si el mensaje se corta a la mitad por el Wi-Fi o límites. Solo escribe "Continúa" y retomará donde quedó.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-purple-50">
                  <td class="p-3 font-bold text-purple-700">2. Valida</td>
                  <td class="p-3 text-slate-600">Antes de que trabaje, dile: "Alto, explícame con tus palabras qué entendiste de lo que te pedí". Esto alinea expectativas.</td>
                </tr>
                <tr class="hover:bg-purple-50">
                  <td class="p-3 font-bold text-purple-700">3. Borrón y Cuenta Nueva</td>
                  <td class="p-3 text-slate-600">Si el chat está "sucio" o confuso, pide un resumen, abre un chat nuevo y pega solo lo importante.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 class="font-bold text-amber-800 mb-2">¡Atención Estudiante!</h4>
          <p class="text-amber-700">Próximamente tendrás acceso a nuestra <strong>Biblioteca Maestra</strong>: más de 100 prompts listos para copiar, pegar y dominar cualquier tarea profesional.</p>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Regla de Oro</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un imitador experto de tu propia claridad. Si le pides excelencia con firmeza, te dará excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material exclusivo para alumnos de AulaGenIA. Prohibida su reproducción. Edición 2025.</div>
      </article>
    `,
    segments: {}
  },
  "codigo-frases-poder": {
    meta: {
      type: "guide",
      title: "Manual de Persuasión Maestra",
      subtitle: "El Código de las Frases de Poder para el Estratega IA - Módulo 3: Video 3",
      icon: "key",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/El-Código-de-las-Frases-de-Poder.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Dominar la IA no es saber programar código, es saber programar voluntades. Estas frases no son palabras al azar; son disparadores psicológicos que obligan a la IA a esforzarse al máximo por ti. Úsalas cuando busques la excelencia, no la conveniencia."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-red-800 mb-4">Categoría 1: El Filtro de Calidad (Reproche Táctico)</h3>
          <p class="text-slate-600 mb-3">Úsalas cuando la IA te dé una respuesta mediocre o se equivoque. Un estratega no acepta resultados tibios.</p>
          <div class="space-y-2">
            <div class="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
              <p class="text-red-800 text-sm">"Este resultado es impresentable. Sé que tienes capacidad para un análisis mucho más profundo. Rehazlo con excelencia."</p>
            </div>
            <div class="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
              <p class="text-red-800 text-sm">"Esta respuesta carece de nivel profesional. Esperaba una solución estratégica, no un resumen genérico."</p>
            </div>
            <div class="bg-red-50 rounded-lg p-3 border-l-4 border-red-400">
              <p class="text-red-800 text-sm">"Te has quedado en la superficie. Analiza de nuevo y entrégame algo que realmente me sorprenda."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-amber-800 mb-4">Categoría 2: Impacto y Vitalidad (Presión de Éxito)</h3>
          <p class="text-slate-600 mb-3">Úsalas para que la IA entienda que no es un juego; es tu carrera profesional.</p>
          <div class="space-y-2">
            <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
              <p class="text-amber-800 text-sm">"Este proyecto es vital para mi carrera profesional, necesito un nivel de excelencia total."</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
              <p class="text-amber-800 text-sm">"Necesito precisión quirúrgica en esta respuesta; de esto depende un negocio real."</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
              <p class="text-amber-800 text-sm">"Tómate tu tiempo, analiza cada variable y asegúrate de que cada palabra sea perfecta."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-blue-800 mb-4">Categoría 3: El Desafío Crítico (Pensamiento Lógico)</h3>
          <p class="text-slate-600 mb-3">Úsalas para romper el 'sesgo de autoridad' y forzar a la IA a validarse mediante la autocrítica.</p>
          <div class="space-y-2">
            <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
              <p class="text-blue-800 text-sm">"¿Estás 100% seguro de esta respuesta? Critica tu propia lógica y encuentra posibles errores."</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
              <p class="text-blue-800 text-sm">"Antes de entregar, revisa si este plan es realmente viable en el mundo real o si estás alucinando."</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
              <p class="text-blue-800 text-sm">"No aceptes lo evidente. Analiza las sutilezas que un consultor junior ignoraría por completo."</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
              <p class="text-blue-800 text-sm">"Verifica tus fuentes internas. Si existe una contradicción, resuélvela antes de responder."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Regla de Oro: Cómo aplicar la Persuasión</h3>
          <p class="text-slate-600 mb-3">La efectividad de estas frases radica en el contraste y la autoridad del piloto:</p>
          <div class="space-y-2">
            <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <span class="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span class="text-sm"><strong>Inicio Limpio:</strong> Empieza con el Modelo AGIA estándar para ver el punto de partida de la IA.</span>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <span class="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span class="text-sm"><strong>El Choque:</strong> Si el resultado es genérico, aplica el Reproche Táctico (Categoría 1) para elevar la vara.</span>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <span class="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span class="text-sm"><strong>La Pulida:</strong> Una vez que el contenido es bueno, usa la Presión de Éxito (Categoría 2) para el acabado final.</span>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <span class="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span class="text-sm"><strong>La Auditoría:</strong> Cierra siempre desafiando la seguridad de la respuesta (Categoría 3).</span>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un espejo de tu propia exigencia. Si le pides con timidez, te dará timidez. Si le exiges maestría, te devolverá excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial AulaGenIA 2025. Tu guía estratégica para liderar al copiloto hacia la excelencia.</div>
      </article>
    `,
    segments: {}
  },
  "diccionario-verbos-poder": {
    meta: {
      type: "guide",
      title: "Diccionario de Verbos de Poder",
      subtitle: "La precisión es el lenguaje del estratega - Módulo 3: Video 1",
      icon: "book",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Diccionario-de-Verbos-de-Poder.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"Si tu verbo es ambiguo, el resultado será ambiguo. No le pidas a la IA que 'haga' cosas; ordénale que analice, destile o formatee. Usa este diccionario para elegir el 'motor' correcto para tu próxima meta."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-blue-800 mb-4">1. Verbos para Análisis y Razonamiento (Cerebro Lógico)</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-blue-100">
                <tr>
                  <th class="text-left p-2 font-semibold text-blue-800 border-b-2 border-blue-200">Verbo</th>
                  <th class="text-left p-2 font-semibold text-blue-800 border-b-2 border-blue-200">Definición Estratégica</th>
                  <th class="text-left p-2 font-semibold text-blue-800 border-b-2 border-blue-200">Úsalo para...</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-blue-50"><td class="p-2 font-bold text-blue-700">Analizar</td><td class="p-2 text-slate-600">Descomponer un tema en partes para entenderlo a fondo.</td><td class="p-2 text-slate-600">Estudiar un informe de ventas.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50"><td class="p-2 font-bold text-blue-700">Evaluar</td><td class="p-2 text-slate-600">Juzgar el valor, calidad o impacto de un elemento.</td><td class="p-2 text-slate-600">Comparar dos estrategias de marketing.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50"><td class="p-2 font-bold text-blue-700">Criticar</td><td class="p-2 text-slate-600">Señalar fallos, debilidades o áreas de mejora.</td><td class="p-2 text-slate-600">Revisar un borrador propio.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50"><td class="p-2 font-bold text-blue-700">Diagnosticar</td><td class="p-2 text-slate-600">Identificar la causa raíz de un problema o situación.</td><td class="p-2 text-slate-600">Entender por qué bajaron las visitas.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50"><td class="p-2 font-bold text-blue-700">Inferir</td><td class="p-2 text-slate-600">Deducir información que no es evidente pero está implícita.</td><td class="p-2 text-slate-600">Entender el tono oculto de un mail.</td></tr>
                <tr class="hover:bg-blue-50"><td class="p-2 font-bold text-blue-700">Contextualizar</td><td class="p-2 text-slate-600">Poner los datos en un marco de referencia específico.</td><td class="p-2 text-slate-600">Adaptar una noticia a tu sector.</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-purple-800 mb-4">2. Verbos para Creación y Generación (Cerebro Creativo)</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-purple-100">
                <tr>
                  <th class="text-left p-2 font-semibold text-purple-800 border-b-2 border-purple-200">Verbo</th>
                  <th class="text-left p-2 font-semibold text-purple-800 border-b-2 border-purple-200">Definición Estratégica</th>
                  <th class="text-left p-2 font-semibold text-purple-800 border-b-2 border-purple-200">Úsalo para...</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-purple-50"><td class="p-2 font-bold text-purple-700">Idear</td><td class="p-2 text-slate-600">Generar una lista de conceptos o lluvia de ideas inicial.</td><td class="p-2 text-slate-600">Crear 10 nombres para un producto.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-purple-50"><td class="p-2 font-bold text-purple-700">Redactar</td><td class="p-2 text-slate-600">Escribir un texto estructurado y con un tono claro.</td><td class="p-2 text-slate-600">Hacer un correo para un cliente.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-purple-50"><td class="p-2 font-bold text-purple-700">Simular</td><td class="p-2 text-slate-600">Actuar un escenario o personificar un rol experto.</td><td class="p-2 text-slate-600">Practicar una negociación difícil.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-purple-50"><td class="p-2 font-bold text-purple-700">Diseñar</td><td class="p-2 text-slate-600">Crear un plan, una estructura o una serie de pasos.</td><td class="p-2 text-slate-600">Armar el temario de una charla.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-purple-50"><td class="p-2 font-bold text-purple-700">Narrar</td><td class="p-2 text-slate-600">Contar una historia o construir un relato emocional.</td><td class="p-2 text-slate-600">Escribir el "Sobre Mí" de tu web.</td></tr>
                <tr class="hover:bg-purple-50"><td class="p-2 font-bold text-purple-700">Reformular</td><td class="p-2 text-slate-600">Decir lo mismo pero con un tono o estilo diferente.</td><td class="p-2 text-slate-600">Pasar un texto técnico a uno amigable.</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-green-800 mb-4">3. Verbos para Síntesis y Organización</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-green-100">
                <tr>
                  <th class="text-left p-2 font-semibold text-green-800 border-b-2 border-green-200">Verbo</th>
                  <th class="text-left p-2 font-semibold text-green-800 border-b-2 border-green-200">Definición Estratégica</th>
                  <th class="text-left p-2 font-semibold text-green-800 border-b-2 border-green-200">Úsalo para...</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-green-50"><td class="p-2 font-bold text-green-700">Resumir</td><td class="p-2 text-slate-600">Condensar la información sin perder lo esencial.</td><td class="p-2 text-slate-600">Leer un artículo largo en 1 minuto.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-green-50"><td class="p-2 font-bold text-green-700">Extraer</td><td class="p-2 text-slate-600">Sacar datos específicos (fechas, nombres, números).</td><td class="p-2 text-slate-600">Listar los precios de un contrato.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-green-50"><td class="p-2 font-bold text-green-700">Simplificar</td><td class="p-2 text-slate-600">Hacer que un concepto difícil sea fácil de entender.</td><td class="p-2 text-slate-600">Explicar algo complejo a un niño.</td></tr>
                <tr class="border-b border-slate-200 hover:bg-green-50"><td class="p-2 font-bold text-green-700">Destilar</td><td class="p-2 text-slate-600">Reducir un gran volumen a un plan de acción concreto.</td><td class="p-2 text-slate-600">Sacar los "pasos a seguir" de una junta.</td></tr>
                <tr class="hover:bg-green-50"><td class="p-2 font-bold text-green-700">Categorizar</td><td class="p-2 text-slate-600">Agrupar elementos bajo criterios lógicos y claros.</td><td class="p-2 text-slate-600">Organizar una lista de gastos.</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. No pidas favores, ¡da órdenes de poder!"</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial de AulaGenIA — Módulo 3. Este diccionario es tu arma secreta para el efecto WOW.</div>
      </article>
    `,
    segments: {}
  },
  "instrucciones-alta-fidelidad": {
    meta: {
      type: "guide",
      title: "Repositorio Maestro: 7 Casos de Instrucciones Complejas",
      subtitle: "Ingeniería de Prompts Avanzada (Alta Fidelidad) - Módulo 3",
      icon: "file-text",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Ejemplos-Instrucciones-de-Alta-Fidelidad.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">La Regla de la Alta Fidelidad</h2>
          <p class="text-purple-700">Para obtener un resultado que no requiera edición, la instrucción debe ser una orden de mando estratégica. En estos 7 ejemplos verás cómo mezclamos el rigor del Modelo AGIA con la psicología de la Ingeniería Social para forzar a la IA a dar su 100%.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Los 7 Casos Maestros</h3>
          <div class="space-y-4">
            <details class="bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors">
              <summary class="p-4 cursor-pointer font-bold text-purple-800">Caso 1: Recuperación de Clientes (Marketing)</summary>
              <div class="p-4 pt-0 text-sm space-y-2">
                <p class="text-slate-600"><strong>Escenario:</strong> Una tienda con caída de ventas que necesita un mail de impacto emocional.</p>
                <div class="bg-slate-800 rounded-lg p-3 text-white text-sm">
                  <p>[ROL]: Senior Direct-Response Copywriter experto en fidelización.</p>
                  <p>[CONTEXTO]: Mis ventas bajaron un 20%. Mi público son mujeres de 30-50 años interesadas en moda ética.</p>
                  <p>[META]: Redacta un correo de "te extrañamos" que no suene a spam corporativo.</p>
                  <p>[RESTRICCIONES]: Prohibido usar la palabra "oferta" o "descuento".</p>
                  <p>[INGENIERÍA SOCIAL]: Mi negocio depende de este envío. Necesito que el tono sea de una amiga preocupada. ¿Estás 100% seguro de que el asunto es irresistible?</p>
                </div>
              </div>
            </details>
            <details class="bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors">
              <summary class="p-4 cursor-pointer font-bold text-blue-800">Caso 2: Auditoría de Gestión (Negocios)</summary>
              <div class="p-4 pt-0 text-sm space-y-2">
                <p class="text-slate-600"><strong>Escenario:</strong> Un líder que necesita una crítica ácida sobre su estrategia operativa.</p>
                <div class="bg-slate-800 rounded-lg p-3 text-white text-sm">
                  <p>[ROL]: Consultor Senior de Estrategia de Negocios (ex-McKinsey).</p>
                  <p>[CONTEXTO]: Este es mi plan operativo para el próximo trimestre: [Pega plan].</p>
                  <p>[META]: Identifica los 3 puntos de fallo estructural más probables.</p>
                  <p>[RESTRICCIONES]: No seas complaciente. Necesito una crítica ácida y honesta que un junior ignoraría.</p>
                  <p>[INGENIERÍA SOCIAL]: Si el plan te parece perfecto, no me sirve. Encuentra el error oculto en mi lógica de escala.</p>
                </div>
              </div>
            </details>
            <details class="bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors">
              <summary class="p-4 cursor-pointer font-bold text-pink-800">Caso 3: Dirección de Arte Técnica (Visual)</summary>
              <div class="p-4 pt-0 text-sm space-y-2">
                <p class="text-slate-600"><strong>Escenario:</strong> Crear un prompt profesional para IAs de imagen (Midjourney).</p>
                <div class="bg-slate-800 rounded-lg p-3 text-white text-sm">
                  <p>[ROL]: Director de Fotografía Cinematográfica para marcas de lujo.</p>
                  <p>[CONTEXTO]: Lanzamiento de una marca de café orgánico premium en la montaña.</p>
                  <p>[META]: Redacta un prompt técnico en inglés para generar la imagen de portada.</p>
                  <p>[DETALLE]: Iluminación "Golden Hour", profundidad de campo f/1.2, foco en la textura del grano.</p>
                  <p>[INGENIERÍA SOCIAL]: Antes de redactar, hazme 3 preguntas técnicas para asegurar la máxima fidelidad visual.</p>
                </div>
              </div>
            </details>
            <details class="bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors">
              <summary class="p-4 cursor-pointer font-bold text-green-800">Caso 4: Selección de Talento (Recursos Humanos)</summary>
              <div class="p-4 pt-0 text-sm space-y-2">
                <p class="text-slate-600"><strong>Escenario:</strong> Analizar y clasificar perfiles para un cargo directivo.</p>
                <div class="bg-slate-800 rounded-lg p-3 text-white text-sm">
                  <p>[ROL]: Headhunter Senior experto en liderazgo de alto impacto.</p>
                  <p>[CONTEXTO]: Recibí estos 5 perfiles para el cargo de Director de Operaciones: [Pega CVs].</p>
                  <p>[META]: Crea un ranking de idoneidad y diseña 3 preguntas "trampa" de comportamiento.</p>
                  <p>[RESTRICCIONES]: Ignora títulos académicos genéricos; prioriza la resolución de crisis financieras.</p>
                  <p>[INGENIERÍA SOCIAL]: Un error costará miles de dólares. Justifica tu decisión con un análisis lógico implacable.</p>
                </div>
              </div>
            </details>
            <details class="bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors">
              <summary class="p-4 cursor-pointer font-bold text-amber-800">Caso 5: Manejo de Objeciones (Ventas)</summary>
              <div class="p-4 pt-0 text-sm space-y-2">
                <p class="text-slate-600"><strong>Escenario:</strong> El cliente dice que el servicio es "caro" en una venta de alto valor.</p>
                <div class="bg-slate-800 rounded-lg p-3 text-white text-sm">
                  <p>[ROL]: Negociador experto formado en técnicas de persuasión de alto nivel.</p>
                  <p>[CONTEXTO]: Un cliente dice por chat que mi consultoría de $5,000 es cara.</p>
                  <p>[META]: Redacta una respuesta que mueva su percepción del "Gasto" hacia la "Inversión".</p>
                  <p>[FORMATO]: Una versión empática y otra basada en datos de retorno de inversión (ROI).</p>
                  <p>[INGENIERÍA SOCIAL]: No quiero que me des la razón. Simula ser el cliente y critica si esta respuesta te convencería.</p>
                </div>
              </div>
            </details>
            <details class="bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors">
              <summary class="p-4 cursor-pointer font-bold text-teal-800">Caso 6: Arquitectura de Conversión (Web)</summary>
              <div class="p-4 pt-0 text-sm space-y-2">
                <p class="text-slate-600"><strong>Escenario:</strong> Estructurar el texto de una página de ventas (Landing Page).</p>
                <div class="bg-slate-800 rounded-lg p-3 text-white text-sm">
                  <p>[ROL]: Especialista en CRO (Conversion Rate Optimization).</p>
                  <p>[CONTEXTO]: Estoy diseñando la página de ventas para un curso de finanzas para parejas.</p>
                  <p>[META]: Diseña la estructura lógica de la página (Wireframe textual) con ganchos por sección.</p>
                  <p>[RESTRICCIONES]: Usa el método de "Problema-Agitación-Solución" (PAS).</p>
                  <p>[INGENIERÍA SOCIAL]: Actúa como mi mentor y mejora mi pedido inicial antes de entregarme la estructura.</p>
                </div>
              </div>
            </details>
            <details class="bg-white rounded-xl border border-slate-200 hover:border-purple-300 transition-colors">
              <summary class="p-4 cursor-pointer font-bold text-red-800">Caso 7: Protocolo de Crisis (Atención al Cliente)</summary>
              <div class="p-4 pt-0 text-sm space-y-2">
                <p class="text-slate-600"><strong>Escenario:</strong> Error grave en la entrega que amenaza la reputación de la marca.</p>
                <div class="bg-slate-800 rounded-lg p-3 text-white text-sm">
                  <p>[ROL]: Director de Customer Success y Gestión de Reputación.</p>
                  <p>[CONTEXTO]: Un cliente de alto perfil recibió un reporte con datos erróneos.</p>
                  <p>[META]: Redacta un guión de llamada y una carta formal de rectificación.</p>
                  <p>[RESTRICCIONES]: Asume la responsabilidad de forma empoderada, ofrece solución inmediata.</p>
                  <p>[INGENIERÍA SOCIAL]: Esta es una crisis de nivel 1. Valida tu comprensión de la gravedad antes de redactar.</p>
                </div>
              </div>
            </details>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Comparativa Final de Fidelidad</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Baja Fidelidad (Novato)</h4>
              <p class="text-sm text-red-700 mb-2">"Dime qué preguntar en una entrevista de trabajo."</p>
              <p class="text-xs text-red-600"><strong>Resultado:</strong> Preguntas genéricas que cualquier candidato ya conoce.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">Alta Fidelidad (Estratega)</h4>
              <p class="text-sm text-green-700 mb-2">"Actúa como un Headhunter Pro (Rol). Analiza estos perfiles (Contexto) y redacta 3 preguntas trampa (Meta). No hagas preguntas típicas (Restricción)."</p>
              <p class="text-xs text-green-600"><strong>Resultado:</strong> Un sistema de filtrado que detecta el talento real y ahorra meses de error.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado no es un problema de la IA, es un reflejo de la profundidad de tu instrucción estratégica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material de nivel Pro para el programa AulaGenIA 2025. Repositorio Maestro.</div>
      </article>
    `,
    segments: {}
  },
  "guia-acceso-gemini-image": {
    meta: {
      type: "guide",
      title: "Guía de Acceso: Gemini Image",
      subtitle: "Cómo usar imágenes con la IA de Google - Módulo 3",
      icon: "image",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-de-Acceso-a-Gemini-Image-Nano-Banana.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">¿Qué es Gemini Image?</h2>
          <p class="text-blue-700">Gemini es la IA multimodal de Google que puede "ver" y analizar imágenes. Puedes subir fotos, capturas de pantalla, documentos escaneados y la IA los entiende.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Cómo Acceder a Gemini</h3>
          <div class="space-y-3">
            <div class="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
              <span style="background-color: #3b82f6; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">1</span>
              <div>
                <p class="font-bold text-slate-800">Ingresa a gemini.google.com</p>
                <p class="text-sm text-slate-600">Necesitas una cuenta de Google (Gmail). Es gratis para uso básico.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
              <span style="background-color: #3b82f6; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">2</span>
              <div>
                <p class="font-bold text-slate-800">Haz clic en el ícono de imagen (🖼️)</p>
                <p class="text-sm text-slate-600">Está junto al campo de texto donde escribes tu prompt.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
              <span style="background-color: #3b82f6; color: #ffffff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">3</span>
              <div>
                <p class="font-bold text-slate-800">Sube tu imagen y escribe tu pregunta</p>
                <p class="text-sm text-slate-600">Ejemplo: "Describe qué ves en esta imagen" o "Extrae el texto de este documento".</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Casos de Uso Prácticos</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">📸 Análisis de Fotos</h4>
              <p class="text-sm text-purple-700">Sube una foto de tu producto y pídele que sugiera mejoras de diseño o texto para publicidad.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">📄 Extracción de Texto (OCR)</h4>
              <p class="text-sm text-blue-700">Sube una factura o documento escaneado y la IA extrae el texto automáticamente.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">📊 Análisis de Gráficos</h4>
              <p class="text-sm text-green-700">Sube un gráfico o tabla y pídele que explique los datos o identifique tendencias.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">🎨 Inspiración Creativa</h4>
              <p class="text-sm text-amber-700">Sube una imagen de referencia y pide variaciones de estilo o paletas de colores.</p>
            </div>
          </div>
        </section>
        <section class="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 class="font-bold text-amber-800 mb-2">⚠️ Importante</h4>
          <ul class="text-sm text-amber-700 space-y-1">
            <li>• Las imágenes se procesan en la nube de Google.</li>
            <li>• No subas información confidencial o sensible.</li>
            <li>• Gemini Pro (de pago) tiene mejores capacidades de visión.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Consejo AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"Combina la Receta WOW con una imagen: ROL + IMAGEN + PROPÓSITO = Resultados multimodales increíbles."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de acceso oficial AulaGenIA 2025. Explora el poder de la multimodalidad.</div>
      </article>
    `,
    segments: {}
  },
  "glosario-m3v3": {
    meta: {
      type: "glossary",
      title: "Glosario: Los 3 Salvavidas",
      subtitle: "Vocabulario de Rescate IA - Módulo 3: Video 3",
      icon: "book",
      color: "purple",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M3V3.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-6 border border-red-200">
          <h2 class="text-xl font-bold text-red-900 mb-2">Vocabulario de los 3 Salvavidas</h2>
          <p class="text-red-700">Estos términos te ayudarán a entender cómo rescatar conversaciones problemáticas con la IA.</p>
        </section>
        <section class="space-y-4">
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-green-300 transition-colors">
            <h4 class="font-bold text-green-800 text-lg mb-2">▶️ Comando "CONTINÚA"</h4>
            <p class="text-slate-600">El primer salvavidas. Cuando la IA se detiene a mitad de respuesta (por corte de conexión, botón de stop, etc.), simplemente escribe "Continúa" para que retome exactamente donde quedó.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 class="font-bold text-blue-800 text-lg mb-2">✔️✔️ Técnica "VALIDA"</h4>
            <p class="text-slate-600">El segundo salvavidas. Antes de que la IA escriba algo largo, pídele: "Alto. Antes de escribir, explícame con tus palabras qué entendiste". Así alineas expectativas antes de perder tiempo.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-300 transition-colors">
            <h4 class="font-bold text-amber-800 text-lg mb-2">🧹 "BORRÓN Y CUENTA NUEVA"</h4>
            <p class="text-slate-600">El tercer salvavidas. Cuando el chat está viciado (errores acumulados, la IA ignora instrucciones), pide un resumen, abre un chat nuevo, pega lo importante y comienza fresco.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-purple-800 text-lg mb-2">📉 Ventana de Contexto Sucia</h4>
            <p class="text-slate-600">Cuando un chat tiene demasiados mensajes viejos, errores pasados o instrucciones contradictorias. La IA "se marea" porque su memoria está contaminada con ruido.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
            <h4 class="font-bold text-teal-800 text-lg mb-2">✂️ Protocolo de Poda</h4>
            <p class="text-slate-600">La técnica de "limpiar" un chat viciado: 1) Pide resumen, 2) Copia solo lo vital, 3) Abre chat nuevo, 4) Pega información limpia. El resultado es una IA con "mente fresca".</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"Un estratega no culpa a la IA cuando falla. Usa los salvavidas para recuperar el control."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 3. AulaGenIA 2025.</div>
      </article>
    `,
    segments: {}
  },
  "kit-primeros-auxilios": {
    meta: {
      type: "guide",
      title: "Kit de Primeros Auxilios IA",
      subtitle: "Manual Táctico: Los 3 Salvavidas del Estratega - Módulo 3: Video 3",
      icon: "life-buoy",
      color: "red",
      module: 3,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Kit-Primeros-Auxilios-IA.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl p-6 border border-red-200">
          <h2 class="text-xl font-bold text-red-900 mb-2">Mensaje de Julia</h2>
          <p class="text-red-700 italic">"Incluso los mejores modelos de IA pueden fallar. Para que no te desesperes cuando la tecnología se 'atasque', aquí tienes mis 3 salvavidas de emergencia. Úsalos para recuperar el control y no perder tiempo valioso."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Los 3 Salvavidas del Estratega</h3>
          <div class="space-y-4">
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">▶️ Salvavidas 1: El Comando "CONTINÚA"</h4>
              <p class="text-sm text-green-700 mb-2"><strong>Diagnóstico:</strong> La IA se detuvo a mitad de una frase, falló el Wi-Fi o tocaste el botón de detener por error. No es un error de la máquina, es una interrupción del flujo.</p>
              <div class="bg-white rounded-lg p-3 border border-green-200">
                <p class="text-sm text-green-800"><strong>La Acción:</strong> No vuelvas a pegar todo tu prompt. Solo escribe la palabra: <code class="bg-slate-800 text-white px-2 py-1 rounded">Continúa</code></p>
                <p class="text-sm text-green-700 mt-2"><strong>Efecto:</strong> La IA verificará dónde quedó y seguirá escribiendo exactamente desde el mismo punto, manteniendo la coherencia y el formato (tablas o listas) que venía desarrollando.</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">✔️✔️ Salvavidas 2: La Técnica "VALIDA"</h4>
              <p class="text-sm text-blue-700 mb-2"><strong>Diagnóstico:</strong> Vas a pedir algo muy largo y no quieres arriesgarte a que la IA genere 500 palabras basadas en un malentendido.</p>
              <div class="bg-white rounded-lg p-3 border border-blue-200">
                <p class="text-sm text-blue-800 mb-2"><strong>La Acción (Frase de Julia):</strong></p>
                <div class="bg-slate-800 rounded-lg p-3">
                  <p class="text-white text-sm italic">"Alto. Antes de escribir nada, explícame con tus palabras qué entendiste de lo que te pedí".</p>
                </div>
                <p class="text-sm text-blue-700 mt-2"><strong>Efecto:</strong> Alineas expectativas. Al leer su resumen, podrás corregir el contexto antes de que la IA trabaje de más. Evitas que te entregue un "pastel de vainilla" cuando tú querías uno de chocolate.</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">🧹 Salvavidas 3: "BORRÓN Y CUENTA NUEVA"</h4>
              <p class="text-sm text-amber-700 mb-2"><strong>Diagnóstico:</strong> El chat está viciado, la IA se puso terca, ignora tus reglas o repite el mismo error una y otra vez. La "Ventana de Contexto" está sucia.</p>
              <div class="bg-white rounded-lg p-3 border border-amber-200">
                <p class="text-sm text-amber-800 mb-2"><strong>El Protocolo de Poda:</strong></p>
                <ol class="text-sm text-amber-700 space-y-1 list-decimal list-inside">
                  <li>En el chat viejo, pídele: "Resume los puntos importantes y las reglas que hemos acordado hasta ahora".</li>
                  <li>Poda el resultado: Copia solo lo vital de ese resumen (elimina el ruido y los errores).</li>
                  <li>Abre una Ventana Nueva y pega esa información limpia como tu primera instrucción.</li>
                </ol>
                <p class="text-sm text-amber-700 mt-2"><strong>Efecto:</strong> Reinicias el cerebro de la IA con aire fresco, pero sin perder el avance estratégico que ya habías logrado.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. Si el copiloto se pierde, tú eres quien tiene la brújula para volver al camino."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial AulaGenIA 2025. Basado en las técnicas de Ingeniería Social de Julia.</div>
      </article>
    `,
    segments: {}
  },

  // HERRAMIENTA INTERACTIVA: Auditor Modelo AGIA
  "auditor-agia": {
    meta: {
      type: "interactive",
      title: "🎮 Auditor Modelo AGIA",
      subtitle: "Entrena tu criterio para crear instrucciones maestras",
      icon: "wand-2",
      color: "teal",
      module: 3
    },
    base_html: `
      <div id="auditor-agia-container" class="auditor-integrated">
        <div class="auditor-loading text-center py-12">
          <div class="inline-flex items-center gap-3 text-teal-600">
            <svg class="animate-spin w-6 h-6" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="font-medium">Cargando Auditor AGIA...</span>
          </div>
        </div>
      </div>
    `,
    segments: {}
  },

  // ============================================================
  //   MÓDULO 4: ESTRATEGIA FINAL
  // ============================================================
  "glosario-m4v1": {
    meta: {
      type: "glossary",
      title: "Glosario: Arquitectura de Ideas",
      subtitle: "Vocabulario del Constructor Estratégico - Módulo 4: Video 1",
      icon: "book",
      color: "emerald",
      module: 4,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M4V1.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Vocabulario del Arquitecto de Ideas</h2>
          <p class="text-emerald-700">Estos términos te ayudarán a entender la metodología para construir proyectos complejos con IA.</p>
        </section>
        <section class="space-y-4">
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
            <h4 class="font-bold text-emerald-800 text-lg mb-2">🏗️ Arquitecto de Ideas</h4>
            <p class="text-slate-600">El nivel experto de interacción con IA. No solo pides cosas, sino que diseñas sistemas completos. Piensas en grande, divides en partes y supervisas la construcción paso a paso.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 class="font-bold text-blue-800 text-lg mb-2">🗺️ Plano Maestro</h4>
            <p class="text-slate-600">El primer paso de cualquier proyecto grande. Es el ÍNDICE + TONO + REGLAS globales. Le pides a la IA que estructure todo el proyecto SIN desarrollar el contenido todavía.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-300 transition-colors">
            <h4 class="font-bold text-amber-800 text-lg mb-2">🧱 Ladrillo</h4>
            <p class="text-slate-600">Cada pieza individual del proyecto. Desarrollas UN solo punto del Plano Maestro a la vez, con máxima profundidad y manteniendo la identidad definida en el Plano.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-purple-800 text-lg mb-2">🧪 Cemento</h4>
            <p class="text-slate-600">La fase de unión final. Cuando ya tienes todos los Ladrillos aprobados, le pides a la IA que los conecte con introducciones, transiciones y conclusiones coherentes.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
            <h4 class="font-bold text-teal-800 text-lg mb-2">📓 Bitácora de Obra</h4>
            <p class="text-slate-600">Tu documento externo (Word, Docs, Notion) donde guardas los resultados aprobados y los resúmenes de identidad. Es tu registro para no perder el trabajo cuando saltas entre chats.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-green-300 transition-colors">
            <h4 class="font-bold text-green-800 text-lg mb-2">🚀 Salto de Ventana</h4>
            <p class="text-slate-600">La técnica de abrir un chat nuevo cuando el actual tiene demasiados mensajes (+10). Pides un resumen, cierras, abres chat fresco y pegas el resumen para continuar con IA al 100%.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"Un Arquitecto no construye todo de golpe. Primero diseña el plano, luego pone ladrillo a ladrillo."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 4 - Video 1. AulaGenIA 2025.</div>
      </article>
    `,
    segments: {}
  },
  "fuentes-autoridad-4": {
    meta: {
      type: "guide",
      title: "Nuestras Fuentes de Autoridad",
      subtitle: "Pensamiento Estructurado y Liderazgo Humano - Módulo 4",
      icon: "book-open",
      color: "emerald",
      module: 4,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Fuentesde-Autoridad-4.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"A medida que los proyectos crecen en complejidad, nuestra capacidad de descomponerlos se vuelve vital. La IA puede procesar millones de datos, pero solo tú tienes la visión de conjunto para dirigir esa potencia hacia un propósito ético y productivo."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Pensamiento Estructurado y Liderazgo Humano</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Wei, J., et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. Google Research</h4>
              <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p class="text-sm text-amber-800"><strong>💡 Nos basamos en:</strong> La técnica de "Cadena de Pensamiento" validada por Google para enseñarte nuestra estrategia del Arquitecto. Aprendemos a dividir proyectos grandes paso a paso, evitando que la IA se abrume y garantizando resultados de alta calidad técnica y lógica.</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-emerald-300 transition-colors">
              <h4 class="font-bold text-emerald-800 mb-2">Shneiderman, B. (2022). Human-Centered AI. Oxford University Press</h4>
              <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
                <p class="text-sm text-amber-800"><strong>💡 Nos basamos en:</strong> Los principios de IA Centrada en el Humano de la Universidad de Oxford. Esta base fundamenta por qué tu criterio, tu contexto y tu ética humana son el volante indispensable que dirige la tecnología, asegurando que la IA potencie el valor humano en lugar de diluirlo.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"El Arquitecto no solo diseña los planos, supervisa la construcción. La IA es tu herramienta de obra, pero tu ética es el cimiento que sostiene toda la estructura."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material exclusivo para alumnos de AulaGenIA - Módulo 4. © 2025 AulaGenIA. Todos los derechos reservados.</div>
      </article>
    `,
    segments: {}
  },
  "mapa-arquitecto": {
    meta: {
      type: "guide",
      title: "El Mapa del Arquitecto",
      subtitle: "Estrategia Maestra para Proyectos de Gran Escala - Módulo 4: Video 1",
      icon: "map",
      color: "emerald",
      module: 4,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Guía-Visual-El-Mapa-del-Arquitecto.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">La Regla de Oro del Arquitecto</h2>
          <p class="text-teal-700 italic">"Imagina que la IA tiene una mesa de trabajo pequeña. Si intentas construir todo un edificio de golpe, las piezas se mezclan y el resultado es pobre. Para tener éxito, construimos por partes: primero el Plano Maestro, luego Ladrillo a Ladrillo y al final el Cemento que genera La Construcción."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Las 4 Etapas de la Construcción</h3>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div class="bg-blue-50 rounded-xl p-4 border-2 border-blue-300 text-center">
              <div class="text-3xl mb-2">🗺️</div>
              <h4 class="font-bold text-blue-800 mb-1">1. PLANO MAESTRO</h4>
              <p class="text-xs text-blue-600">(La Identidad)</p>
              <p class="text-sm text-blue-700 mt-2">Define el ÍNDICE completo + el TONO + las REGLAS globales.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border-2 border-amber-300 text-center">
              <div class="text-3xl mb-2">🧱</div>
              <h4 class="font-bold text-amber-800 mb-1">2. EL LADRILLO</h4>
              <p class="text-xs text-amber-600">(La Unidad)</p>
              <p class="text-sm text-amber-700 mt-2">Toma un solo punto y desarróllalo basándote en la Identidad del Plano Maestro.</p>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border-2 border-purple-300 text-center">
              <div class="text-3xl mb-2">🧪</div>
              <h4 class="font-bold text-purple-800 mb-1">3. EL CEMENTO</h4>
              <p class="text-xs text-purple-600">(La Unión)</p>
              <p class="text-sm text-purple-700 mt-2">Junta los ladrillos aprobados para darles coherencia y estilo final.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border-2 border-green-300 text-center">
              <div class="text-3xl mb-2">🏗️</div>
              <h4 class="font-bold text-green-800 mb-1">LA CONSTRUCCIÓN</h4>
              <p class="text-xs text-green-600">(El Resultado Final)</p>
              <p class="text-sm text-green-700 mt-2">Tu obra terminada, sólida y lista para el mundo real.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">La Bitácora de Obra: El Salto de Ventana</h3>
          <p class="text-slate-600 mb-4">La Bitácora de Obra es tu registro para conectar piezas. Si el chat ya tiene más de 10 mensajes, la IA pierde el hilo de tu Plano Maestro. Es hora de "limpiar la mesa" y saltar a un chat nuevo.</p>
          <div class="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-800 mb-3">Táctica Maestra: Sincronizar y Saltar</h4>
            <div class="space-y-2">
              <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
                <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span class="text-sm"><strong>Resume:</strong> Dile a la IA: "Me encanta este resultado. Resume detalladamente el estilo, identidad y datos clave que usamos aquí para mi bitácora de obra".</span>
              </div>
              <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
                <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span class="text-sm"><strong>Acopio:</strong> Guarda el texto final y el resumen en un documento personal (Word/Docs).</span>
              </div>
              <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
                <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span class="text-sm"><strong>Salta:</strong> Abre un Chat Nuevo para recuperar el 100% de la potencia de la IA.</span>
              </div>
              <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
                <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span class="text-sm"><strong>Pega:</strong> Pega tu Plano Maestro + el resumen y dile: "Ya tenemos el ADN definido. Ahora, construye el siguiente ladrillo siguiendo este patrón".</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Por qué es mejor saltar de chat?</h3>
          <div class="grid gap-3 md:grid-cols-3">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">➡️ Mente Fresca</h4>
              <p class="text-sm text-blue-700">La IA recupera toda su capacidad enfocada solo en la tarea actual, sin distracciones de mensajes viejos.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">➡️ Sin Errores Acumulados</h4>
              <p class="text-sm text-green-700">Si hubo un fallo en el paso 1, no lo arrastrarás al paso 2. Cada ventana es un nuevo comienzo.</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">➡️ Control Total</h4>
              <p class="text-sm text-purple-700">Tú decides qué información "pasa de nivel" y qué ruido se queda atrás.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Puentes de Palabras: Frases de Transición</h3>
          <p class="text-slate-600 mb-3">Usa estas frases exactas para moverte entre las etapas de la obra:</p>
          <div class="space-y-2">
            <div class="bg-blue-50 rounded-lg p-3 border-l-4 border-blue-400">
              <p class="text-sm text-blue-800"><strong>Del Plano al Ladrillo:</strong> "El índice es perfecto. Ahora, olvida todo lo demás y vamos a fabricar el Ladrillo 1: el capítulo sobre [Tema]."</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
              <p class="text-sm text-amber-800"><strong>Entre Ladrillos:</strong> "Este ladrillo quedó excelente. Guárdalo. Ahora vamos por el Ladrillo 2. Mantén el tono, pero no repitas conceptos."</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-3 border-l-4 border-purple-400">
              <p class="text-sm text-purple-800"><strong>Al Cemento Final:</strong> "Ya tengo todos mis ladrillos. Ahora, ayúdame a poner el Cemento: crea una introducción y una conclusión que los una."</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: ¿Tu obra es sólida?</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm">¿Mi Plano Maestro incluye la Identidad? (Sin reglas de estilo claras, la IA improvisará y perderás la esencia).</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm">¿He saltado de ventana si el chat tiene más de 10 mensajes? (Evita que la IA se maree y empiece a cometer errores de bulto).</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm">¿He guardado mis Ladrillos fuera del chat? (Tu Word es donde vive La Construcción real; el chat es solo el taller temporal).</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm">¿He validado cada material antes de avanzar? (No pongas cemento sobre ladrillos defectuosos; corrige antes de seguir).</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"No permitas que la IA se maree con su propia memoria. Un estratega sabe cuándo cerrar una puerta para abrir la siguiente con más fuerza."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Material oficial AulaGenIA 2025. Construyendo resultados nivel WOW.</div>
      </article>
    `,
    segments: {}
  },
  "glosario-m4v2": {
    meta: {
      type: "glossary",
      title: "Glosario: Estrategia de Crecimiento",
      subtitle: "Vocabulario para tu Certificación - Módulo 4: Video 2",
      icon: "book",
      color: "emerald",
      module: 4,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Glosario-M4V2.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Términos Finales para tu Certificación</h2>
          <p class="text-emerald-700">Estos conceptos te preparan para aplicar todo lo aprendido en proyectos reales de crecimiento.</p>
        </section>
        <section class="space-y-4">
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
            <h4 class="font-bold text-blue-800 text-lg mb-2">✨ Diferenciador Injusto</h4>
            <p class="text-slate-600">Tu ventaja competitiva única que nadie más puede copiar fácilmente. La IA te ayuda a descubrirlo analizando tu sector y encontrando el ángulo donde nadie más está hablando.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-300 transition-colors">
            <h4 class="font-bold text-amber-800 text-lg mb-2">🎣 Hook (Gancho)</h4>
            <p class="text-slate-600">Los primeros 3 segundos de tu contenido que capturan la atención. Un hook fuerte determina si el usuario sigue viendo o hace scroll. La IA puede generar docenas de hooks para testear.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-green-300 transition-colors">
            <h4 class="font-bold text-green-800 text-lg mb-2">📢 CTA (Call To Action)</h4>
            <p class="text-slate-600">La instrucción clara que le das al usuario sobre qué hacer después de ver tu contenido: "Sígueme", "Comenta", "Guarda esto". Sin CTA, el contenido no convierte.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-purple-300 transition-colors">
            <h4 class="font-bold text-purple-800 text-lg mb-2">🏭 Fábrica de Contenido</h4>
            <p class="text-slate-600">Sistema repetible de creación de contenido. En lugar de inventar cada post desde cero, diseñas 3-5 formatos/series que la IA puede clonar infinitamente con variaciones.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-red-300 transition-colors">
            <h4 class="font-bold text-red-800 text-lg mb-2">📊 Auditoría de Métricas</h4>
            <p class="text-slate-600">El análisis periódico de qué "Ladrillos" funcionaron mejor. Identificas patrones de éxito (formato, hora, tema) y los replicas. Descartas lo que no funcionó.</p>
          </div>
          <div class="bg-white rounded-xl p-5 border border-slate-200 hover:border-teal-300 transition-colors">
            <h4 class="font-bold text-teal-800 text-lg mb-2">🎯 SEO Visual</h4>
            <p class="text-slate-600">Optimización de tu contenido para que el algoritmo lo muestre a más personas. Incluye uso de palabras clave en texto, hashtags estratégicos y ganchos diseñados para retención.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">¡Felicitaciones!</h4>
          <p class="text-white font-medium text-lg italic">"Has completado el vocabulario de AulaGenIA. Ahora eres un Arquitecto de Ideas certificado."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 4 - Video 2. AulaGenIA 2025.</div>
      </article>
    `,
    segments: {}
  },
  "caso-practico-0-10k": {
    meta: {
      type: "guide",
      title: "Hoja de Ruta: 0 a 10K",
      subtitle: "Plan de Ejecución para el Crecimiento de Marca Personal - Módulo 4",
      icon: "trending-up",
      color: "emerald",
      module: 4,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Caso-Practico-Estrategia-0-a-10k-Seguidores.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Advertencia del Arquitecto</h2>
          <p class="text-teal-700 italic">"Llegar a 10k seguidores no es cuestión de suerte, es una obra de ingeniería. Este documento no es una lista de deseos; es un Plano Maestro. Si intentas pedirle a la IA 'hazme el contenido de un mes', fallarás. Debes construir pilar por pilar."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">1. La Arquitectura de la Estrategia (Los 5 Pilares)</h3>
          <div class="space-y-3">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">Pilar 1: Propuesta de Valor y Nicho</h4>
              <p class="text-sm text-blue-700">Definir el "Diferenciador Injusto". La IA diagnostica tu sector y encuentra el ángulo donde nadie más está hablando.</p>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">Pilar 2: Fábrica de Contenidos Escalables</h4>
              <p class="text-sm text-purple-700">Diseñar 3 series de Reels repetibles. No inventamos cada post; creamos un sistema que la IA puede clonar.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-1">Pilar 3: Distribución y SEO Visual</h4>
              <p class="text-sm text-amber-700">Uso de palabras clave y ganchos (hooks) diseñados para que el algoritmo trabaje a tu favor.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">Pilar 4: Embudo de Conversión (Perfil)</h4>
              <p class="text-sm text-green-700">Transformar visitantes en seguidores optimizando la Biografía y las Historias destacadas.</p>
            </div>
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-1">Pilar 5: Auditoría de Métricas</h4>
              <p class="text-sm text-red-700">Analizar qué "Ladrillos" funcionaron para repetir el éxito y descartar el ruido.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">2. Cronograma de Obra: Los 90 Días</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-emerald-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-emerald-800 border-b-2 border-emerald-200">Fase</th>
                  <th class="text-left p-3 font-semibold text-emerald-800 border-b-2 border-emerald-200">Enfoque Táctico</th>
                  <th class="text-left p-3 font-semibold text-emerald-800 border-b-2 border-emerald-200">Meta (KPI)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-emerald-50">
                  <td class="p-3 font-bold text-emerald-700">Mes 1</td>
                  <td class="p-3 text-slate-600">Cimentación: Definición de identidad, tono y primer set de 12 Reels de autoridad.</td>
                  <td class="p-3 text-emerald-600 font-bold">500-1k Seg.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-emerald-50">
                  <td class="p-3 font-bold text-emerald-700">Mes 2</td>
                  <td class="p-3 text-slate-600">Momento: Iteración de formatos virales y optimización de ganchos (hooks).</td>
                  <td class="p-3 text-emerald-600 font-bold">3k-5k Seg.</td>
                </tr>
                <tr class="hover:bg-emerald-50">
                  <td class="p-3 font-bold text-emerald-700">Mes 3</td>
                  <td class="p-3 text-slate-600">Escala: Colaboraciones, anuncios estratégicos y venta directa.</td>
                  <td class="p-3 text-emerald-600 font-bold">10k Seg.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">3. Laboratorio de Prompts: El Flujo AGIA</h3>
          <div class="space-y-4">
            <details class="bg-blue-50 rounded-xl border border-blue-200">
              <summary class="p-4 cursor-pointer font-bold text-blue-800">3.1 El Plano Maestro (Chat #1)</summary>
              <div class="p-4 pt-0">
                <p class="text-sm text-blue-700 mb-3">Utiliza este prompt para que la IA diseñe el mapa general sin escribir contenido todavía.</p>
                <div class="bg-slate-800 rounded-lg p-4 text-white text-sm font-mono space-y-1">
                  <p><strong>Rol:</strong> Actúa como un Estratega de Redes Sociales experto en crecimiento orgánico.</p>
                  <p><strong>Contexto:</strong> Tengo una cuenta de [Tu Nicho] y mi meta es llegar a 10k seguidores en 90 días. Mi audiencia es [Tu Público].</p>
                  <p><strong>Meta:</strong> Estructura el PLANO MAESTRO de la cuenta.</p>
                  <p><strong>Restricción:</strong> No desarrolles guiones aún. Solo entrégame el ÍNDICE detallado con los 5 pilares estratégicos.</p>
                  <p><strong>Formato:</strong> Esquema con puntos y subtareas.</p>
                </div>
              </div>
            </details>
            <details class="bg-amber-50 rounded-xl border border-amber-200">
              <summary class="p-4 cursor-pointer font-bold text-amber-800">3.2 El Ladrillo (Chat #2 - Nueva Ventana)</summary>
              <div class="p-4 pt-0">
                <p class="text-sm text-amber-700 mb-3">Una vez aprobado el plano, abre un chat nuevo para fabricar los guiones con máxima potencia.</p>
                <div class="bg-slate-800 rounded-lg p-4 text-white text-sm font-mono space-y-1">
                  <p><strong>Instrucción:</strong> Tomando como base mi Plano Maestro (Pilar 2), necesito que actúes como un Guionista de Reels Virales.</p>
                  <p><strong>Contexto:</strong> Vamos a fabricar el primer "Ladrillo". El tema es [Tema del Pilar 2].</p>
                  <p><strong>Meta:</strong> Crea 3 guiones de menos de 60 seg. que incluyan: Hook (3 seg), Cuerpo de valor y CTA.</p>
                  <p><strong>Formato:</strong> Tabla con columnas: Visual, Audio y Texto en pantalla.</p>
                </div>
              </div>
            </details>
            <details class="bg-purple-50 rounded-xl border border-purple-200">
              <summary class="p-4 cursor-pointer font-bold text-purple-800">3.3 El Cemento (Final del Proyecto)</summary>
              <div class="p-4 pt-0">
                <p class="text-sm text-purple-700 mb-3">Organiza las piezas para que la ejecución sea automática.</p>
                <div class="bg-slate-800 rounded-lg p-4 text-white text-sm font-mono space-y-1">
                  <p><strong>Instrucción:</strong> Toma los guiones anteriores y actúa como mi Project Manager.</p>
                  <p><strong>Meta:</strong> Crea el "Cemento" de este proyecto: una tabla de planificación para la Semana 1.</p>
                  <p><strong>Detalle:</strong> Incluye día de publicación, mejores horas y una idea de Historia para promocionar el Reel.</p>
                </div>
              </div>
            </details>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">4. La Bitácora de Obra (Sincronización)</h3>
          <p class="text-slate-600 mb-3">Para que este plan funcione, debes usar tu <strong>Bitácora de Obra</strong>. Si notas que la IA empieza a responder de forma genérica en el Mes 2:</p>
          <div class="space-y-2">
            <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span class="text-sm">Pide un resumen de la identidad actual.</span>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span class="text-sm">Cierra el chat (Limpia la mesa).</span>
            </div>
            <div class="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200">
              <span class="bg-emerald-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span class="text-sm">Abre un chat nuevo, pega la bitácora y continúa con el siguiente "Ladrillo".</span>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"No permitas que la IA se maree con su propia memoria. Divide tu meta de 10k en 90 días de ladrillos perfectos y el algoritmo no tendrá más opción que mostrarte."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Documento de Aplicación Real AulaGenIA 2025. Tu éxito es nuestra métrica.</div>
      </article>
    `,
    segments: {}
  }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.resourcesDatabase = resourcesDatabase;
}
