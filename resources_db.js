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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">🎯 Tu Primera Pregunta de Negocios</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Actúa como un consultor comercial. Dame 3 ideas para mejorar la tasa de respuesta de mis emails de ventas."</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Versión Gratuita vs. Plus</h4>
          <p class="text-white font-medium">La versión gratuita es perfecta para empezar. Solo considera Plus ($20/mes) si necesitas respuestas más rápidas o acceso a GPT-4 todo el tiempo.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a ChatGPT para Negocios. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">⚖️ Tu Primera Pregunta Profesional</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Actúa como asistente de redacción. Ayúdame a estructurar un email profesional para comunicar un retraso en la entrega de un informe."</p>
          </div>
          <div class="bg-red-50 rounded-xl p-3 border border-red-200 mt-3">
            <p class="text-sm text-red-700"><strong>⚠️ Nota:</strong> Para temas técnicos o legales complejos, siempre valida la información antes de usarla.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Versión Gratuita vs. Plus</h4>
          <p class="text-white font-medium">La versión gratuita es perfecta para empezar. Solo considera Plus ($20/mes) si necesitas respuestas más rápidas o acceso a GPT-4 todo el tiempo.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a ChatGPT para Profesionales. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">📊 Tu Primera Pregunta de Gestión</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Actúa como un especialista en productividad. Dame una plantilla simple para organizar mi lista de tareas semanales."</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Versión Gratuita vs. Plus</h4>
          <p class="text-white font-medium">La versión gratuita es perfecta para empezar. Solo considera Plus ($20/mes) si necesitas respuestas más rápidas o acceso a GPT-4 todo el tiempo.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a ChatGPT para Gestión. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">🎓 Tu Primera Pregunta Educativa</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Actúa como un pedagogo creativo. Dame una idea de actividad de 10 minutos para captar la atención de alumnos al inicio de clase."</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Versión Gratuita vs. Plus</h4>
          <p class="text-white font-medium">La versión gratuita es perfecta para empezar. Solo considera Plus ($20/mes) si necesitas respuestas más rápidas o acceso a GPT-4 todo el tiempo.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a ChatGPT para Educación. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">🎯 Primer Uso de Gemini para Negocios</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Busca las últimas noticias sobre [TU INDUSTRIA] de esta semana. Resume las 3 más importantes para mi negocio."</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Tip AulaGenIA</h4>
          <p class="text-white font-medium">Gemini es ideal cuando necesitas información actualizada o trabajar con tus archivos de Google Drive.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a Gemini para Negocios. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">⚖️ Primer Uso de Gemini para Profesionales</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Busca las modificaciones normativas recientes en [TU ÁREA] publicadas este mes. Muestra enlaces a las fuentes oficiales."</p>
          </div>
          <div class="bg-red-50 rounded-xl p-3 border border-red-200 mt-3">
            <p class="text-sm text-red-700"><strong>⚠️ Nota:</strong> Gemini busca en internet pero siempre valida en fuentes oficiales.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Tip AulaGenIA</h4>
          <p class="text-white font-medium">Gemini es ideal cuando necesitas información actualizada o trabajar con tus archivos de Google Drive.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a Gemini para Profesionales. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">📊 Primer Uso de Gemini para Gestión</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Busca las mejores prácticas actuales para implementación de [SISTEMA/PROCESO]. Dame las 5 recomendaciones más recientes."</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Tip AulaGenIA</h4>
          <p class="text-white font-medium">Gemini es ideal cuando necesitas información actualizada o trabajar con tus archivos de Google Drive.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a Gemini para Gestión. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">🎓 Primer Uso de Gemini para Educadores</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p style="color: #ffffff;" class="text-sm">"Busca recursos educativos actualizados sobre [TEMA DE CLASE]. Muéstrame videos de YouTube cortos aptos para estudiantes de [NIVEL]."</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Tip AulaGenIA</h4>
          <p class="text-white font-medium">Gemini es ideal cuando necesitas información actualizada o trabajar con tus archivos de Google Drive.</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía de Acceso a Gemini para Educación. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA para Negocios</h4>
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
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA Legal</h4>
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
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA para Gestión</h4>
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
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA para Educación</h4>
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
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">La M�xima AulaGenIA</h4>
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
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Socio Comercial: La gran diferencia</h3>
          <p class="text-slate-600 mb-4">Como líder de negocios, entender esta diferencia es la clave para multiplicar tu productividad comercial.</p>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero (IA como buscador)</h4>
              <p class="text-sm text-red-700">Es como pedirle a un pasante que busque "algo sobre ventas". Tú dices "Dame ideas para vender más" y recibes una lista genérica que no conoce tu industria, tu cliente ni tu propuesta de valor. No razona sobre tu negocio.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Socio Estratégico (IA como consultor)</h4>
              <p class="text-sm text-green-700">Es como tener un consultor senior a tu disposición. Le dices "Actúa como consultor de ventas B2B. Mi cliente es [empresa], su dolor es [problema]. Dame 3 enfoques de propuesta con argumentos." El resultado es específico, profesional y aplicable hoy.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Cuadro Comparativo: ¿En qué nivel está tu estrategia comercial?</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-blue-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-blue-800 border-b-2 border-blue-200">Característica</th>
                  <th class="text-left p-3 font-semibold text-red-700 border-b-2 border-blue-200">Uso Superficial</th>
                  <th class="text-left p-3 font-semibold text-green-700 border-b-2 border-blue-200">Uso Estratégico</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Enfoque</td>
                  <td class="p-3 text-red-700 bg-red-50">"Dame ideas de ventas" sin contexto.</td>
                  <td class="p-3 text-green-700 bg-green-50">Instrucción con cliente, dolor y objetivo.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Rol</td>
                  <td class="p-3 text-red-700 bg-red-50">Tratas a la IA como un buscador.</td>
                  <td class="p-3 text-green-700 bg-green-50">La IA es tu consultor de ventas B2B.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Información</td>
                  <td class="p-3 text-red-700 bg-red-50">No das contexto del prospecto.</td>
                  <td class="p-3 text-green-700 bg-green-50">Entregas industria, tamaño, dolores.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Resultado</td>
                  <td class="p-3 text-red-700 bg-red-50">Genérico y "con sabor a robot".</td>
                  <td class="p-3 text-green-700 bg-green-50">Propuesta lista para enviar al cliente.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 10 Tareas Comerciales para Delegar HOY</h3>
          <div class="grid gap-2 md:grid-cols-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Investigar prospecto antes de reunión (competidores, noticias, dolores).</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Redactar propuesta comercial personalizada para cliente específico.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Crear presentación de pitch con argumentos de valor.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Generar secuencia de correos de seguimiento post-reunión.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Analizar objeciones frecuentes y preparar respuestas.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>6.</strong> Resumir llamada de ventas y extraer próximos pasos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>7.</strong> Crear script para llamadas en frío adaptado a industria.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>8.</strong> Preparar análisis comparativo vs. competencia.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>9.</strong> Generar casos de uso para demostración a cliente.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>10.</strong> Crear FAQ de producto para equipo comercial.</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El Principiante lanza una pregunta al aire; el Pro diseña una estrategia. Tu copiloto cierra más cuando tú diriges mejor."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Salto de Principiante a Pro - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Asistente Jurídico: La gran diferencia</h3>
          <p class="text-slate-600 mb-4">Como profesional del derecho, esta distinción define si la IA te ahorra tiempo o te genera más trabajo de revisión.</p>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero (IA como buscador)</h4>
              <p class="text-sm text-red-700">Es como pedirle a un practicante sin experiencia. Tú dices "¿Qué dice la ley sobre contratos?" y recibes una respuesta genérica sin jurisdicción, sin contexto del caso y posiblemente con citas inventadas. No razona jurídicamente.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Asistente Jurídico (IA como paralegal)</h4>
              <p class="text-sm text-green-700">Es como tener un paralegal senior. Le dices "Actúa como abogado [especialidad]. Caso: [hechos]. Dame estructura de escrito con argumentos. Marca [VERIFICAR] toda cita." El resultado es un borrador profesional que TÚ validas.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Cuadro Comparativo: ¿En qué nivel está tu práctica?</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-blue-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-blue-800 border-b-2 border-blue-200">Característica</th>
                  <th class="text-left p-3 font-semibold text-red-700 border-b-2 border-blue-200">Uso Superficial</th>
                  <th class="text-left p-3 font-semibold text-green-700 border-b-2 border-blue-200">Uso Estratégico</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Enfoque</td>
                  <td class="p-3 text-red-700 bg-red-50">"¿Qué dice la ley?" sin contexto.</td>
                  <td class="p-3 text-green-700 bg-green-50">Instrucción con hechos, jurisdicción y objetivo.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Rol</td>
                  <td class="p-3 text-red-700 bg-red-50">Tratas a la IA como un buscador.</td>
                  <td class="p-3 text-green-700 bg-green-50">La IA es tu paralegal especializado.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Validación</td>
                  <td class="p-3 text-red-700 bg-red-50">Usas citas sin verificar.</td>
                  <td class="p-3 text-green-700 bg-green-50">Marcas [VERIFICAR] y validas en fuentes oficiales.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Resultado</td>
                  <td class="p-3 text-red-700 bg-red-50">Texto genérico con riesgo ético.</td>
                  <td class="p-3 text-green-700 bg-green-50">Borrador profesional que TÚ firmas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 10 Tareas Jurídicas para Delegar HOY</h3>
          <div class="grid gap-2 md:grid-cols-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Resumir expediente voluminoso extrayendo hechos clave.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Buscar jurisprudencia relevante [SIEMPRE VERIFICAR].</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Redactar primer borrador de escrito judicial.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Crear cronología de hechos ordenada.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Preparar argumentos para audiencia oral.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>6.</strong> Analizar contrato e identificar cláusulas de riesgo.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>7.</strong> Redactar carta documento o intimación.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>8.</strong> Preparar preguntas para interrogatorio de testigos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>9.</strong> Crear resumen ejecutivo de caso para cliente.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>10.</strong> Estructurar teoría del caso con argumentos.</span></div>
          </div>
        </section>
        <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-500 mb-4">
          <p class="text-xs text-amber-800"><strong>⚠️ Advertencia Ética:</strong> La IA puede inventar citas legales. NUNCA uses una referencia sin verificarla en fuentes oficiales. TÚ firmas, TÚ respondes.</p>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA redacta borradores; TÚ firmas y respondes profesionalmente. Nunca delegues tu responsabilidad ética."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Salto de Principiante a Pro - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Asistente Ejecutivo: La gran diferencia</h3>
          <p class="text-slate-600 mb-4">Como profesional de gestión, esta distinción determina si ahorras 10 horas semanales o solo 10 minutos.</p>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero (IA como buscador)</h4>
              <p class="text-sm text-red-700">Es como pedirle a alguien sin contexto. Tú dices "Hazme un acta de reunión" sin darle notas, asistentes ni temas. El resultado es una plantilla genérica que debes rehacer completamente.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Asistente Ejecutivo (IA como secretario senior)</h4>
              <p class="text-sm text-green-700">Es como tener un asistente con experiencia. Le dices "Aquí están mis notas: [PEGAR]. Genera: 1) Acta formal, 2) Lista de tareas con responsables, 3) Correo de seguimiento para el equipo." El resultado está listo para enviar.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Cuadro Comparativo: ¿En qué nivel está tu productividad?</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-blue-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-blue-800 border-b-2 border-blue-200">Característica</th>
                  <th class="text-left p-3 font-semibold text-red-700 border-b-2 border-blue-200">Uso Superficial</th>
                  <th class="text-left p-3 font-semibold text-green-700 border-b-2 border-blue-200">Uso Estratégico</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Enfoque</td>
                  <td class="p-3 text-red-700 bg-red-50">"Hazme un correo" sin contexto.</td>
                  <td class="p-3 text-green-700 bg-green-50">Instrucción con destinatario, objetivo y tono.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Rol</td>
                  <td class="p-3 text-red-700 bg-red-50">Tratas a la IA como un buscador.</td>
                  <td class="p-3 text-green-700 bg-green-50">La IA es tu asistente ejecutivo senior.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Información</td>
                  <td class="p-3 text-red-700 bg-red-50">No das contexto ni material previo.</td>
                  <td class="p-3 text-green-700 bg-green-50">Pegas notas, datos y especificas formato.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Resultado</td>
                  <td class="p-3 text-red-700 bg-red-50">Plantilla que debes rehacer.</td>
                  <td class="p-3 text-green-700 bg-green-50">Documento listo para revisar y enviar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 10 Tareas Administrativas para Delegar HOY</h3>
          <div class="grid gap-2 md:grid-cols-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Redactar actas de reunión a partir de notas.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Crear reportes ejecutivos con datos que proporcionas.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Responder correos frecuentes con matriz de plantillas.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Organizar información de proyectos en formatos claros.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Crear presentaciones ejecutivas rápidas.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>6.</strong> Resumir documentos largos en puntos clave.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>7.</strong> Generar agenda de reuniones con objetivos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>8.</strong> Crear correos de seguimiento a tareas pendientes.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>9.</strong> Preparar análisis de pros y contras para decisiones.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>10.</strong> Redactar comunicados internos para el equipo.</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Si lo haces igual todas las semanas, ChatGPT puede hacerlo por ti. Tu tiempo de gestión vale más que tareas repetitivas."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Salto de Principiante a Pro - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">De Mandadero a Co-Diseñador Pedagógico: La gran diferencia</h3>
          <p class="text-slate-600 mb-4">Como educador, esta distinción define si la IA te libera tiempo para tus estudiantes o te genera más trabajo de edición.</p>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-red-50 rounded-xl p-5 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">🤖 El Mandadero (IA como buscador)</h4>
              <p class="text-sm text-red-700">Es como pedirle a alguien sin contexto pedagógico. Tú dices "Dame ideas para clase de matemáticas" sin especificar grado, nivel, duración ni objetivo de aprendizaje. El resultado es genérico y no encaja con tus estudiantes.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">🤝 El Co-Diseñador (IA como diseñador instruccional)</h4>
              <p class="text-sm text-green-700">Es como tener un colega experto. Le dices "Actúa como diseñador instruccional. Tengo 25 estudiantes de 4to grado. Diseña actividad de 30 min sobre fracciones con objetivo, materiales y evaluación." El resultado es aplicable mañana.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Cuadro Comparativo: ¿En qué nivel está tu práctica docente?</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-blue-100">
                <tr>
                  <th class="text-left p-3 font-semibold text-blue-800 border-b-2 border-blue-200">Característica</th>
                  <th class="text-left p-3 font-semibold text-red-700 border-b-2 border-blue-200">Uso Superficial</th>
                  <th class="text-left p-3 font-semibold text-green-700 border-b-2 border-blue-200">Uso Estratégico</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Enfoque</td>
                  <td class="p-3 text-red-700 bg-red-50">"Dame ideas de clase" sin contexto.</td>
                  <td class="p-3 text-green-700 bg-green-50">Instrucción con grado, tema, duración y objetivo.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Rol</td>
                  <td class="p-3 text-red-700 bg-red-50">Tratas a la IA como un buscador.</td>
                  <td class="p-3 text-green-700 bg-green-50">La IA es tu diseñador instruccional.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Información</td>
                  <td class="p-3 text-red-700 bg-red-50">No das contexto de tus estudiantes.</td>
                  <td class="p-3 text-green-700 bg-green-50">Especificas nivel, cantidad, recursos disponibles.</td>
                </tr>
                <tr class="border-b border-slate-200 hover:bg-blue-50">
                  <td class="p-3 font-bold text-slate-800">Resultado</td>
                  <td class="p-3 text-red-700 bg-red-50">Ideas genéricas que debes adaptar.</td>
                  <td class="p-3 text-green-700 bg-green-50">Actividad lista para aplicar en el aula.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Checklist: 10 Tareas Docentes para Delegar HOY</h3>
          <div class="grid gap-2 md:grid-cols-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>1.</strong> Diseñar actividades de clase con objetivo y procedimiento.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>2.</strong> Crear variaciones de ejercicios para distintos niveles.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>3.</strong> Preparar presentaciones didácticas visuales.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>4.</strong> Generar rúbricas de evaluación con criterios claros.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>5.</strong> Crear ilustraciones didácticas para explicar conceptos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>6.</strong> Redactar retroalimentación personalizada para trabajos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>7.</strong> Explicar temas complejos "como si tuvieras 10 años".</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>8.</strong> Crear cuestionarios de evaluación formativa.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>9.</strong> Generar cuentos educativos personalizados.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>10.</strong> Preparar guías de estudio resumidas.</span></div>
          </div>
        </section>
        <div class="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-500 mb-4">
          <p class="text-xs text-emerald-800"><strong>💡 Recordatorio Pedagógico:</strong> La IA genera materiales; TÚ conoces a cada estudiante. Adapta siempre los resultados a tu contexto específico del aula.</p>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara el material; TÚ enciendes la chispa del aprendizaje. El Pro diseña el juego, no solo lanza preguntas al aire."</p>
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">1. Privacidad y Datos Comerciales</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si uso IA para analizar prospectos, ¿estoy compartiendo datos sensibles de mi empresa?</p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                <p class="text-indigo-800"><strong>💡 La analogía comercial:</strong> Imagina que contratas a un consultor externo para analizar tu cartera de clientes. El consultor aprende patrones generales del mercado, pero no necesita recordar los números exactos de cada cuenta para mejorar su metodología.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>M�xima AulaGenIA comercial:</strong> Nunca compartas contraseñas, proyecciones confidenciales o datos financieros exactos de clientes. Usa descripciones genéricas: "empresa de tecnología mediana" en lugar de nombres específicos.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">2. La IA no es un CRM</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si le pregunto lo mismo sobre un prospecto dos veces, ¿por qué me da respuestas distintas?</p>
              <div class="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                <p class="text-amber-800"><strong>💡 La analogía:</strong> Es como pedirle a tu mejor vendedor que te dé ideas para abordar a un cliente difícil. Si le preguntas hoy, te dará un enfoque; mañana, quizás proponga otro ángulo igual de válido. No está leyendo un script, está <strong>razonando</strong> en el momento.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Ventaja comercial:</strong> Si una propuesta no te convence, pídele que lo intente con otro enfoque. Obtendrás perspectivas frescas para cerrar el trato.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">3. La Fatiga en Negociaciones Largas</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿Cuánta información de mi pipeline puede retener antes de perder el hilo?</p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <p class="text-purple-800"><strong>💡 La analogía:</strong> Piensa en la IA como un asesor en una reunión maratónica. Después de 3 horas, empezará a olvidar los primeros puntos discutidos. Esto es la "Ventana de Contexto".</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Truco para ventas:</strong> Si trabajas en una propuesta compleja, pídele un resumen ejecutivo periódico. Abre chat nuevo y pega el resumen para "reiniciar" sin perder contexto.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">4. ¿Puede crear propuestas originales?</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si solo repite patrones, ¿puede crear una propuesta realmente diferenciadora?</p>
              <div class="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                <p class="text-rose-800"><strong>💡 La analogía:</strong> Imagina a un estratega que ha visto miles de negociaciones exitosas. Cuando crea tu propuesta, no copia una anterior, sino que mezcla elementos que funcionaron para crear algo único para tu cliente.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Tu rol:</strong> La IA combina patrones de éxito; TÚ aportas el conocimiento de tu cliente y el toque personal que cierra el trato.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"Tú diriges la estrategia comercial, la IA acelera la ejecución."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Dilema del Copiloto - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">1. Privacidad y Secreto Profesional</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si uso IA para redactar escritos, ¿estoy violando el secreto profesional?</p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                <p class="text-indigo-800"><strong>💡 La analogía jurídica:</strong> Imagina que tienes un paralegal que aprende de miles de casos para mejorar su técnica, pero no necesita recordar los detalles específicos de tu cliente para ser más eficiente en general.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Regla ética crítica:</strong> NUNCA compartas nombres reales de clientes, números de expediente ni datos identificables. Usa "demandante", "acusado", datos anonimizados. Tu responsabilidad profesional no se delega.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">2. La IA no es jurisprudencia</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si le pregunto por un precedente dos veces, ¿por qué me da citas diferentes?</p>
              <div class="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                <p class="text-amber-800"><strong>💡 La analogía:</strong> Es como pedirle a un colega experimentado que te sugiera argumentos para un caso. Cada vez puede recordar fallos diferentes que conoce. No está consultando una base de datos, está <strong>razonando</strong> sobre lo que sabe.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Advertencia crítica:</strong> La IA puede inventar citas legales. SIEMPRE marca [VERIFICAR] y valida en fuentes oficiales antes de usar cualquier referencia.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">3. La Fatiga en Expedientes Extensos</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿Cuántas páginas de expediente puede analizar antes de perder el hilo?</p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <p class="text-purple-800"><strong>💡 La analogía:</strong> Piensa en la IA como un pasante leyendo un expediente de 500 páginas. Después de cierto punto, empezará a olvidar los primeros hechos para procesar los nuevos. Esto es la "Ventana de Contexto".</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Estrategia jurídica:</strong> Para expedientes largos, divide en secciones. Pide resumen de cada parte. Al final, consolida los resúmenes en un chat nuevo.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">4. ¿Puede crear argumentos originales?</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si solo repite patrones, ¿puede crear una estrategia legal innovadora?</p>
              <div class="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                <p class="text-rose-800"><strong>💡 La analogía:</strong> Imagina a un abogado que ha estudiado miles de casos de éxito. Cuando arma tu estrategia, no copia una demanda anterior, sino que combina técnicas que funcionaron para crear un enfoque único.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Tu rol irremplazable:</strong> La IA sugiere estructuras argumentales; TÚ aportas la estrategia procesal, el conocimiento del juez y la responsabilidad ética.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Tú diriges la estrategia jurídica, la IA prepara borradores. TÚ firmas y respondes."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Dilema del Copiloto - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">1. Privacidad y Datos de la Organización</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si uso IA para procesar información interna, ¿estoy exponiendo datos de la empresa?</p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                <p class="text-indigo-800"><strong>💡 La analogía administrativa:</strong> Imagina que contratas a un asistente temporal que aprende mejores prácticas de organización de cientos de empresas, pero no necesita recordar los detalles específicos de tu presupuesto.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>M�xima AulaGenIA:</strong> Nunca compartas contraseñas, datos financieros exactos ni información personal de empleados. Usa descripciones genéricas para obtener ayuda.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">2. La IA no es una plantilla fija</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si le pido el mismo reporte dos veces, ¿por qué me da formatos diferentes?</p>
              <div class="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                <p class="text-amber-800"><strong>💡 La analogía:</strong> Es como pedirle a tu asistente más creativo que formatee un reporte. Cada vez puede proponer una estructura diferente igual de válida. No está leyendo un archivo guardado, está <strong>creando</strong> en el momento.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Ventaja:</strong> Si un formato no te gusta, pídele que lo intente de otra manera. Obtendrás opciones frescas para elegir la mejor.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">3. La Fatiga en Proyectos Largos</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿Cuánta información de un proyecto puede retener antes de perder el hilo?</p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <p class="text-purple-800"><strong>💡 La analogía:</strong> Piensa en la IA como un asistente en una reunión muy larga. Después de cierto tiempo, empezará a olvidar los primeros puntos para procesar los nuevos. Esto es la "Ventana de Contexto".</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Truco administrativo:</strong> Para proyectos complejos, pídele resúmenes periódicos. Abre chat nuevo pegando el resumen para "reiniciar" sin perder contexto.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">4. ¿Puede crear documentos originales?</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si solo repite patrones, ¿puede crear un reporte realmente útil?</p>
              <div class="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                <p class="text-rose-800"><strong>💡 La analogía:</strong> Imagina a un consultor que ha visto miles de reportes ejecutivos exitosos. Cuando crea el tuyo, no copia uno anterior, sino que combina las mejores prácticas para tu situación específica.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Tu rol:</strong> La IA estructura y formatea; TÚ validas los datos, aportas el contexto interno y tomas las decisiones.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Tú diriges los procesos, la IA acelera la documentación."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Dilema del Copiloto - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <div class="space-y-4">
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">1. Privacidad y Datos de Estudiantes</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si uso IA para crear materiales, ¿estoy exponiendo información de mis estudiantes?</p>
              <div class="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-400">
                <p class="text-indigo-800"><strong>💡 La analogía pedagógica:</strong> Imagina a un colega que aprende técnicas de enseñanza de miles de docentes. El colega mejora su método general, pero no necesita recordar los nombres específicos de tus estudiantes.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Regla ética docente:</strong> NUNCA compartas nombres reales de estudiantes, calificaciones específicas ni datos personales. Usa "estudiante de 4to grado con dificultades en fracciones" en lugar de identificadores.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">2. La IA no es un libro de texto</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si le pido la misma actividad dos veces, ¿por qué me da versiones diferentes?</p>
              <div class="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                <p class="text-amber-800"><strong>💡 La analogía:</strong> Es como pedirle a un colega creativo que te sugiera una actividad para enseñar fracciones. Cada vez puede proponer un enfoque diferente igual de válido. No está leyendo un manual, está <strong>diseñando</strong> en el momento.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Ventaja pedagógica:</strong> Si una actividad no encaja con tu grupo, pídele alternativas. Obtendrás opciones frescas para distintos estilos de aprendizaje.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">3. La Fatiga en Planificaciones Extensas</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> ¿Cuánto de mi planificación anual puede retener antes de perder el hilo?</p>
              <div class="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                <p class="text-purple-800"><strong>💡 La analogía:</strong> Piensa en la IA como un ayudante planificando un año escolar completo. Después de cierto punto, empezará a olvidar los objetivos del primer trimestre para procesar el tercero. Esto es la "Ventana de Contexto".</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Estrategia docente:</strong> Para planificaciones largas, trabaja por unidad o trimestre. Pide resumen al final de cada bloque y usa ese resumen para el siguiente.</p>
            </div>
            <div class="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-md transition-all">
              <h3 class="text-lg font-bold text-blue-800 mb-2">4. ¿Puede crear actividades originales?</h3>
              <p class="text-sm text-slate-600 mb-3"><strong>Pregunta:</strong> Si solo repite patrones, ¿puede crear una actividad realmente innovadora?</p>
              <div class="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-400">
                <p class="text-rose-800"><strong>💡 La analogía:</strong> Imagina a un diseñador instruccional que ha estudiado miles de actividades exitosas. Cuando crea la tuya, no copia un plan anterior, sino que combina técnicas pedagógicas probadas para tu contexto específico.</p>
              </div>
              <p class="text-sm text-slate-600 mt-3"><strong>Tu rol irremplazable:</strong> La IA genera estructuras didácticas; TÚ conoces a tus estudiantes, adaptas al contexto del aula y enciendes la chispa del aprendizaje.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"Tú diriges el aprendizaje, la IA prepara materiales. La conexión humana es tuya."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Dilema del Copiloto - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Tu Camino Recomendado: El de Carlos (Estrategia y Negocios)</h3>
          <div class="bg-blue-100 rounded-xl p-5 border-2 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-3">💼 El Camino de Carlos - IDEAL PARA TI</h4>
            <div class="flex flex-wrap gap-2 items-center mb-3">
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">1. ESTRATEGIA: Gemini</span>
              <span class="text-blue-400">→</span>
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">2. IMPACTO: Gamma</span>
              <span class="text-blue-400">→</span>
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">3. VISIÓN: Perplexity</span>
            </div>
            <p class="text-sm text-blue-700 mb-3">(Ideas de contenido y estrategia) → (Presentaciones de impacto) → (Investigación de mercado y tendencias)</p>
            <div class="bg-white rounded-lg p-3 border border-blue-200">
              <p class="text-sm text-slate-700"><strong>Por qué es para ti:</strong> Carlos automatizó diagnósticos de negocio y propuestas comerciales. Resultado: <strong class="text-green-600">+150% crecimiento</strong> sin contratar más personal.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Otros Caminos Pro (por si necesitas herramientas alternativas)</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">🎨 María (Creatividad)</h4>
              <p class="text-xs text-purple-700">ChatGPT → Ideogram → Google Translate</p>
              <p class="text-xs text-slate-600 mt-1">Útil si necesitas crear contenido visual para campañas.</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">📱 Luis (Redes y Gestión)</h4>
              <p class="text-xs text-green-700">DALL-E → Canva AI → Copiloto RRSS</p>
              <p class="text-xs text-slate-600 mt-1">Útil si manejas redes sociales del negocio.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tu Plan de Acción Comercial</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 1:</strong> Regístrate en Gamma (gamma.app) para presentaciones rápidas.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 2:</strong> Usa ChatGPT para crear el contenido de tu próxima propuesta comercial.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 3:</strong> Pega el contenido en Gamma y genera la presentación en 5 minutos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 4:</strong> Mide cuánto tiempo te ahorró vs. PowerPoint tradicional.</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor comercial, pero tu visión estratégica es el destino."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Aprende de los Expertos - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Tu Camino Recomendado: Híbrido Carlos + María</h3>
          <div class="bg-indigo-100 rounded-xl p-5 border-2 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-3">⚖️ El Camino del Profesional Legal - IDEAL PARA TI</h4>
            <div class="flex flex-wrap gap-2 items-center mb-3">
              <span class="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">1. INVESTIGACIÓN: Perplexity</span>
              <span class="text-indigo-400">→</span>
              <span class="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">2. REDACCIÓN: Claude</span>
              <span class="text-indigo-400">→</span>
              <span class="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">3. PRESENTACIÓN: Gamma</span>
            </div>
            <p class="text-sm text-indigo-700 mb-3">(Búsqueda de fuentes y contexto) → (Borradores de escritos [VERIFICAR]) → (Presentaciones para clientes)</p>
            <div class="bg-white rounded-lg p-3 border border-indigo-200">
              <p class="text-sm text-slate-700"><strong>Adaptación jurídica:</strong> Combina la estrategia de Carlos con la precisión documental de Claude. Siempre marca [VERIFICAR] toda cita legal.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Los 3 Caminos Originales del Video</h3>
          <div class="grid gap-3 md:grid-cols-3">
            <div class="bg-purple-50 rounded-xl p-3 border border-purple-200">
              <h4 class="font-bold text-purple-800 text-sm mb-1">🎨 María</h4>
              <p class="text-xs text-purple-700">ChatGPT → Ideogram → Google</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-3 border border-blue-200">
              <h4 class="font-bold text-blue-800 text-sm mb-1">💼 Carlos</h4>
              <p class="text-xs text-blue-700">Gemini → Gamma → Perplexity</p>
            </div>
            <div class="bg-green-50 rounded-xl p-3 border border-green-200">
              <h4 class="font-bold text-green-800 text-sm mb-1">📱 Luis</h4>
              <p class="text-xs text-green-700">DALL-E → Canva → Copiloto</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tu Plan de Acción Jurídico</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 1:</strong> Usa Perplexity para investigación inicial de un caso.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 2:</strong> Redacta borrador con Claude, marcando [VERIFICAR] citas.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 3:</strong> VERIFICA todas las referencias en fuentes oficiales.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 4:</strong> Si necesitas presentar a cliente, usa Gamma para ejecutivos.</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA investiga y redacta borradores; TÚ verificas, firmas y respondes."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Aprende de los Expertos - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Tu Camino Recomendado: El de Luis (Gestión y Contenido)</h3>
          <div class="bg-green-100 rounded-xl p-5 border-2 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-3">📱 El Camino de Luis - IDEAL PARA TI</h4>
            <div class="flex flex-wrap gap-2 items-center mb-3">
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">1. CONTENIDO: ChatGPT</span>
              <span class="text-green-400">→</span>
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">2. DISEÑO: Canva AI</span>
              <span class="text-green-400">→</span>
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">3. PRESENTACIÓN: Gamma</span>
            </div>
            <p class="text-sm text-green-700 mb-3">(Documentos y comunicados) → (Gráficos profesionales) → (Reportes ejecutivos)</p>
            <div class="bg-white rounded-lg p-3 border border-green-200">
              <p class="text-sm text-slate-700"><strong>Por qué es para ti:</strong> Luis pasó de pelear con el diseño a dirigir su estrategia. Resultado: <strong class="text-green-600">-70% tiempo</strong> en cada entregable.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Otros Caminos Pro</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">🎨 María (Creatividad)</h4>
              <p class="text-xs text-purple-700">ChatGPT → Ideogram → Google</p>
              <p class="text-xs text-slate-600 mt-1">Útil si necesitas crear material visual institucional.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">💼 Carlos (Estrategia)</h4>
              <p class="text-xs text-blue-700">Gemini → Gamma → Perplexity</p>
              <p class="text-xs text-slate-600 mt-1">Útil para reportes estratégicos y análisis.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tu Plan de Acción Administrativo</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 1:</strong> Regístrate en Canva (canva.com) para diseños rápidos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 2:</strong> Usa ChatGPT para crear el contenido de tu próximo reporte.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 3:</strong> Usa Canva AI para darle diseño profesional en minutos.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 4:</strong> Mide cuánto tiempo te ahorró vs. tu método anterior.</span></div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"La IA hace el trabajo repetitivo; TÚ diriges la estrategia organizacional."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Aprende de los Expertos - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Tu Camino Recomendado: Híbrido María + Luis</h3>
          <div class="bg-emerald-100 rounded-xl p-5 border-2 border-emerald-400 mb-4">
            <h4 class="font-bold text-emerald-800 mb-3">🎓 El Camino del Educador - IDEAL PARA TI</h4>
            <div class="flex flex-wrap gap-2 items-center mb-3">
              <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">1. DISEÑO: ChatGPT</span>
              <span class="text-emerald-400">→</span>
              <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">2. VISUAL: DALL-E/Canva</span>
              <span class="text-emerald-400">→</span>
              <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">3. PRESENTACIÓN: Gamma</span>
            </div>
            <p class="text-sm text-emerald-700 mb-3">(Actividades y contenido) → (Ilustraciones didácticas) → (Presentaciones atractivas)</p>
            <div class="bg-white rounded-lg p-3 border border-emerald-200">
              <p class="text-sm text-slate-700"><strong>Adaptación pedagógica:</strong> Combina la creatividad de María con la eficiencia de Luis. Ideal para crear material didáctico atractivo que conecte con tus estudiantes.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Los 3 Caminos Originales del Video</h3>
          <div class="grid gap-3 md:grid-cols-3">
            <div class="bg-purple-50 rounded-xl p-3 border border-purple-200">
              <h4 class="font-bold text-purple-800 text-sm mb-1">🎨 María (Creatividad)</h4>
              <p class="text-xs text-purple-700">ChatGPT → Ideogram → Google</p>
              <p class="text-xs text-slate-600 mt-1">x2 trabajos/mes</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-3 border border-blue-200">
              <h4 class="font-bold text-blue-800 text-sm mb-1">💼 Carlos (Estrategia)</h4>
              <p class="text-xs text-blue-700">Gemini → Gamma → Perplexity</p>
              <p class="text-xs text-slate-600 mt-1">+150% crecimiento</p>
            </div>
            <div class="bg-green-50 rounded-xl p-3 border border-green-200">
              <h4 class="font-bold text-green-800 text-sm mb-1">📱 Luis (Gestión)</h4>
              <p class="text-xs text-green-700">DALL-E → Canva → Copiloto</p>
              <p class="text-xs text-slate-600 mt-1">-70% tiempo/post</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tu Plan de Acción Docente</h3>
          <div class="space-y-2">
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 1:</strong> Usa ChatGPT para diseñar tu próxima actividad de clase.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 2:</strong> Genera ilustraciones didácticas con DALL-E o Ideogram.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 3:</strong> Arma presentación atractiva en Gamma para tu clase.</span></div>
            <div class="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200"><input type="checkbox" class="checkbox-custom"><span class="text-sm"><strong>Paso 4:</strong> Adapta TODO al contexto específico de tus estudiantes.</span></div>
          </div>
        </section>
        <div class="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-500 mb-4">
          <p class="text-xs text-emerald-800"><strong>💡 Recordatorio:</strong> La IA genera materiales; TÚ conoces a cada estudiante. Adapta siempre los resultados a tu contexto del aula.</p>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara materiales atractivos; TÚ enciendes la chispa del aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Aprende de los Expertos - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">1. ¿Cuál es el motor principal de tu día a día laboral?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200"><input type="radio" name="q1" class="mt-1" value="A"><span class="text-sm"><strong class="text-purple-700">A.</strong> Crear contenido visual, redactar textos creativos o diseñar soluciones estéticas.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200"><input type="radio" name="q1" class="mt-1" value="B"><span class="text-sm"><strong class="text-blue-700">B.</strong> Tomar decisiones de negocio, analizar números y convencer a clientes o socios.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200"><input type="radio" name="q1" class="mt-1" value="C"><span class="text-sm"><strong class="text-green-700">C.</strong> Gestionar redes sociales, procesos internos y asegurar que todo funcione a tiempo.</span></label>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">2. Cuando te sientes bloqueado en el trabajo, ¿cuál es el síntoma más común?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200"><input type="radio" name="q2" class="mt-1" value="A"><span class="text-sm"><strong class="text-purple-700">A.</strong> Me quedo mirando la hoja en blanco sin saber cómo empezar. La inercia creativa me paraliza.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200"><input type="radio" name="q2" class="mt-1" value="B"><span class="text-sm"><strong class="text-blue-700">B.</strong> Tengo demasiada información que procesar y me cuesta resumirla en algo claro y presentable.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200"><input type="radio" name="q2" class="mt-1" value="C"><span class="text-sm"><strong class="text-green-700">C.</strong> Pierdo horas en tareas repetitivas que sé hacer pero que son mecánicas y aburridas.</span></label>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">3. Si tuvieras que elegir una sola herramienta de IA para dominar, elegirías una que:</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200"><input type="radio" name="q3" class="mt-1" value="A"><span class="text-sm"><strong class="text-purple-700">A.</strong> Me ayude a generar imágenes, logos y diseños creativos sin depender de un diseñador.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200"><input type="radio" name="q3" class="mt-1" value="B"><span class="text-sm"><strong class="text-blue-700">B.</strong> Me genere presentaciones profesionales y reportes automáticos a partir de mis datos.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200"><input type="radio" name="q3" class="mt-1" value="C"><span class="text-sm"><strong class="text-green-700">C.</strong> Me permita crear contenido para redes sociales de forma rápida y atractiva.</span></label>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">4. ¿Cuál sería tu mayor celebración si la IA te ayudara esta semana?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200"><input type="radio" name="q4" class="mt-1" value="A"><span class="text-sm"><strong class="text-purple-700">A.</strong> Terminar un proyecto creativo que llevo semanas postergando por falta de inspiración.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200"><input type="radio" name="q4" class="mt-1" value="B"><span class="text-sm"><strong class="text-blue-700">B.</strong> Cerrar una venta o presentar una propuesta ganadora con datos claros y convincentes.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200"><input type="radio" name="q4" class="mt-1" value="C"><span class="text-sm"><strong class="text-green-700">C.</strong> Tener toda la semana de publicaciones listas y programadas sin estrés de último minuto.</span></label>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-5 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-3">5. ¿Cuál de estas frases describe mejor tu relación con la tecnología?</h4>
              <div class="space-y-2">
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors border border-transparent hover:border-purple-200"><input type="radio" name="q5" class="mt-1" value="A"><span class="text-sm"><strong class="text-purple-700">A.</strong> Me encanta explorar y experimentar con lo visual. Soy más artista que técnico.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors border border-transparent hover:border-blue-200"><input type="radio" name="q5" class="mt-1" value="B"><span class="text-sm"><strong class="text-blue-700">B.</strong> Soy más pragmático: quiero herramientas que me den resultados medibles rápido.</span></label>
                <label class="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 cursor-pointer transition-colors border border-transparent hover:border-green-200"><input type="radio" name="q5" class="mt-1" value="C"><span class="text-sm"><strong class="text-green-700">C.</strong> Necesito algo fácil y rápido. No tengo tiempo para curvas de aprendizaje largas.</span></label>
              </div>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Tus Resultados para Negocios</h3>
          <p class="text-slate-600 mb-4">Suma tus respuestas. La letra que más se repita es tu perfil dominante. Como profesional de negocios, probablemente te identifiques con B (Carlos), pero cualquier resultado es válido:</p>
          
          <div class="bg-blue-100 rounded-xl p-5 border-2 border-blue-400 mb-4">
            <h4 class="font-bold text-blue-800 mb-2">📈 RECOMENDADO: Ruta Carlos (El Estratega de Crecimiento)</h4>
            <p class="text-sm text-slate-700 mb-3"><strong>Ideal para vendedores y líderes de negocio:</strong> Tu problema es convertir datos en propuestas ganadoras y presentaciones convincentes.</p>
            <ul class="text-sm text-blue-800 space-y-1">
              <li>• <strong>Tu Kit Comercial:</strong> Perplexity (investigar prospectos) → ChatGPT (propuestas) → Gamma (presentaciones WOW).</li>
              <li>• <strong>Primer Paso:</strong> Investiga tu próximo prospecto en Perplexity y pídele a ChatGPT: "Crea 3 enfoques de propuesta para este cliente."</li>
            </ul>
          </div>
          
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">🎨 Mayoría A: Ruta María</h4>
              <p class="text-xs text-slate-700">Si necesitas crear contenido visual para campañas.</p>
              <p class="text-xs text-purple-700 mt-1">Kit: ChatGPT → Ideogram → Canva</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🔄 Mayoría C: Ruta Luis</h4>
              <p class="text-xs text-slate-700">Si pasas mucho tiempo en redes y correos.</p>
              <p class="text-xs text-green-700 mt-1">Kit: DALL-E → Canva AI → ChatGPT</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"La IA no reemplaza tu talento comercial, reemplaza las horas de preparación. Cierra más, prepara menos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Test de Diagnóstico - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Tus Resultados para Profesionales Legales</h3>
          <p class="text-slate-600 mb-4">Suma tus respuestas. Como profesional del derecho, probablemente te identifiques con B (procesamiento de información), pero aquí están todos los resultados adaptados:</p>
          
          <div class="bg-indigo-100 rounded-xl p-5 border-2 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">⚖️ RECOMENDADO: Ruta del Profesional Legal</h4>
            <p class="text-sm text-slate-700 mb-3"><strong>Ideal para abogados y profesionales:</strong> Tu problema es procesar expedientes voluminosos y redactar escritos eficientemente.</p>
            <ul class="text-sm text-indigo-800 space-y-1">
              <li>• <strong>Tu Kit Jurídico:</strong> Perplexity (investigación con fuentes [VERIFICAR]) → Claude (redacción precisa) → ChatGPT (resúmenes).</li>
              <li>• <strong>Primer Paso:</strong> Pega un expediente en Claude y pide: "Resume hechos clave, identifica argumentos fuertes y débiles. Marca [VERIFICAR] toda cita."</li>
            </ul>
          </div>
          
          <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-500 mb-4">
            <p class="text-xs text-amber-800"><strong>⚠️ Recordatorio Ético:</strong> NUNCA uses citas legales sin verificar en fuentes oficiales. TÚ firmas y respondes profesionalmente.</p>
          </div>
          
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">🎨 Mayoría A: Contenido Visual</h4>
              <p class="text-xs text-slate-700">Para presentaciones a clientes o jurados.</p>
              <p class="text-xs text-purple-700 mt-1">Kit: ChatGPT → Gamma → Canva</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🔄 Mayoría C: Eficiencia Operativa</h4>
              <p class="text-xs text-slate-700">Para gestión de comunicaciones y agenda.</p>
              <p class="text-xs text-green-700 mt-1">Kit: ChatGPT para correos y resúmenes</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA procesa expedientes; TÚ armas la estrategia jurídica y firmas."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Test de Diagnóstico - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Tus Resultados para Gestión</h3>
          <p class="text-slate-600 mb-4">Suma tus respuestas. Como profesional de gestión, probablemente te identifiques con C (eficiencia operativa), pero cualquier resultado es válido:</p>
          
          <div class="bg-green-100 rounded-xl p-5 border-2 border-green-400 mb-4">
            <h4 class="font-bold text-green-800 mb-2">🔄 RECOMENDADO: Ruta Luis (El Operador de Eficiencia)</h4>
            <p class="text-sm text-slate-700 mb-3"><strong>Ideal para gestores y administradores:</strong> Tu problema es la fricción operativa. Las tareas mecánicas te consumen tiempo valioso.</p>
            <ul class="text-sm text-green-800 space-y-1">
              <li>• <strong>Tu Kit de Eficiencia:</strong> ChatGPT (documentos y correos) → Canva AI (diseños rápidos) → Gamma (reportes ejecutivos).</li>
              <li>• <strong>Primer Paso:</strong> Pásale a ChatGPT tus 5 correos más frecuentes y pídele: "Crea una matriz de plantillas de respuesta."</li>
            </ul>
          </div>
          
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">🎨 Mayoría A: Ruta María</h4>
              <p class="text-xs text-slate-700">Si necesitas crear material visual institucional.</p>
              <p class="text-xs text-purple-700 mt-1">Kit: ChatGPT → Ideogram → Canva</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">📈 Mayoría B: Ruta Carlos</h4>
              <p class="text-xs text-slate-700">Si tu rol es más estratégico y analítico.</p>
              <p class="text-xs text-blue-700 mt-1">Kit: Gemini → Gamma → Perplexity</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"La IA no reemplaza tu rol, reemplaza las tareas repetitivas. Gestiona más, teclea menos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Test de Diagnóstico - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Tus Resultados para Educadores</h3>
          <p class="text-slate-600 mb-4">Suma tus respuestas. Como educador, probablemente te identifiques con A (creatividad) o C (eficiencia), pero cualquier resultado es válido:</p>
          
          <div class="bg-emerald-100 rounded-xl p-5 border-2 border-emerald-400 mb-4">
            <h4 class="font-bold text-emerald-800 mb-2">🎓 RECOMENDADO: Ruta del Educador (Híbrido A + C)</h4>
            <p class="text-sm text-slate-700 mb-3"><strong>Ideal para docentes y capacitadores:</strong> Combinas la necesidad de crear material atractivo con la eficiencia operativa.</p>
            <ul class="text-sm text-emerald-800 space-y-1">
              <li>• <strong>Tu Kit Docente:</strong> ChatGPT (actividades y contenido) → DALL-E/Ideogram (ilustraciones) → Gamma (presentaciones atractivas).</li>
              <li>• <strong>Primer Paso:</strong> Pídele a ChatGPT: "Actúa como diseñador instruccional. Diseña una actividad de 30 min para [tu tema] con objetivo, materiales y evaluación."</li>
            </ul>
          </div>
          
          <div class="bg-emerald-50 rounded-lg p-3 border-l-4 border-emerald-500 mb-4">
            <p class="text-xs text-emerald-800"><strong>💡 Recordatorio:</strong> La IA genera materiales; TÚ conoces a cada estudiante. Adapta siempre los resultados a tu contexto del aula.</p>
          </div>
          
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-1">🎨 Mayoría A: Creatividad</h4>
              <p class="text-xs text-slate-700">Tu fuerte es el material visual y actividades.</p>
              <p class="text-xs text-purple-700 mt-1">Kit: ChatGPT → Ideogram → Canva</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🔄 Mayoría C: Eficiencia</h4>
              <p class="text-xs text-slate-700">Necesitas optimizar planificación y correcciones.</p>
              <p class="text-xs text-green-700 mt-1">Kit: ChatGPT para rúbricas y feedback</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA prepara materiales; TÚ enciendes la chispa del aprendizaje. Enseña más, prepara menos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Test de Diagnóstico - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <p class="text-pink-700">Ideogram es una Inteligencia Artificial especializada en generar imágenes de alta calidad. A diferencia de otras herramientas, su "superpoder" es la <strong>Tipografía</strong>: es capaz de escribir texto dentro de las imágenes sin errores.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo? (Paso a Paso)</h3>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-pink-800 mb-2">1. Registro</h4>
              <ul class="text-sm text-slate-600 space-y-1">
                <li>• <strong>Dirección:</strong> <a href="https://ideogram.ai" target="_blank" class="text-pink-600 hover:underline">ideogram.ai</a></li>
                <li>• <strong>Camino rápido:</strong> Usa tu cuenta de Google o Apple.</li>
                <li>• <strong>Nota:</strong> En versión gratuita, las imágenes son públicas.</li>
              </ul>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Límites Versión Gratuita</h4>
              <p class="text-sm text-amber-700">10-20 generaciones diarias. Cola de espera en horas pico.</p>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Clave para Negocios</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">📝 Texto en Imágenes</h4>
              <p class="text-sm text-blue-700">Pon entre comillas: "PROMOCIÓN 30%" y aparecerá legible. Ideal para banners comerciales.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🖼️ Formatos Comerciales</h4>
              <p class="text-sm text-blue-700">Cuadrado para Instagram, 16:9 para LinkedIn, vertical para Stories.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo Comercial</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Banner promocional:</strong> "Professional banner with text 'SALE 30% OFF' blue corporate style"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Post LinkedIn:</strong> "Business image with text 'SUCCESS STORIES 2025' professional minimalist"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Propuesta comercial:</strong> "Corporate icon growth chart gold tones minimalist style"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Ventas</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Siempre en inglés:</strong> Los prompts en inglés dan mejores resultados.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Combina con Canva:</strong> Genera en Ideogram, añade tu logo en Canva.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Guarda prompts exitosos:</strong> Reutilízalos para campañas similares.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"Ideogram crea el visual de impacto; TÚ cierras la venta."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Ideogram para Negocios - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Clave para Profesionales</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">📝 Texto Legible</h4>
              <p class="text-sm text-indigo-700">Ideal para portadas de informes y presentaciones con texto claro.</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">🎨 Estilo Sobrio</h4>
              <p class="text-sm text-indigo-700">Añade "professional", "minimalist", "corporate" para mantener seriedad.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Práctica</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Portada de informe:</strong> "Professional document cover with text 'CASE REPORT' elegant navy blue style"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Post del estudio:</strong> "Professional image with text 'FREE CONSULTATION' corporate minimalist"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Ícono presentación:</strong> "Justice scales icon minimalist corporate blue style"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Profesionales</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400"><strong>⚠️ Sin datos sensibles:</strong> NUNCA incluyas nombres de clientes en prompts. Ideogram es público.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Mantén sobriedad:</strong> Usa "professional", "elegant", "minimalist" en tus prompts.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Consistencia visual:</strong> Define colores institucionales y reúsalos.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Ideogram crea el visual profesional; TÚ cuidas la confidencialidad."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Ideogram para Profesionales - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Clave para Gestión</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">📝 Reportes Visuales</h4>
              <p class="text-sm text-green-700">Crea portadas impactantes para tus informes mensuales.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🔄 Plantillas Reutilizables</h4>
              <p class="text-sm text-green-700">Guarda prompts exitosos para estandarizar documentos.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-green-50 p-3 rounded-lg"><strong>Portada reporte:</strong> "Professional report cover with text 'JANUARY 2025 REPORT' corporate blue style"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Comunicado interno:</strong> "Corporate banner with text 'NEW POLICY' institutional colors modern"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Onboarding:</strong> "Welcome image with text 'ONBOARDING 2025' friendly professional style"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Eficiencia</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Crea biblioteca de prompts:</strong> Documenta los que funcionan para reusar.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Define colores institucionales:</strong> Mantén coherencia visual en documentos.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Combina con Canva:</strong> Ideogram para imagen base, Canva para ajustes finales.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Ideogram estandariza tu imagen institucional; TÚ diriges la comunicación."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Ideogram para Gestión - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones Clave para Educadores</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">📝 Texto Perfecto</h4>
              <p class="text-sm text-emerald-700">Ideal para flashcards, carteles y material con texto legible.</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">🎨 Estilos Didácticos</h4>
              <p class="text-sm text-emerald-700">Usa "cartoon", "colorful", "children friendly" para material infantil.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Aula</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Flashcard vocabulario:</strong> "Educational card with image of tree and text 'TREE' colorful children style"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Portada unidad:</strong> "Colorful cover for fractions unit with text 'FUN MATH' cartoon style"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Diploma:</strong> "School diploma with text 'BEST STUDENT' celebration colorful style"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Reglas del aula:</strong> "Classroom poster with text 'CLASSROOM RULES' friendly illustrated"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Docentes</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa inglés + traduce:</strong> Genera en inglés, el texto en español ponlo entre comillas.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Adapta estilos por nivel:</strong> "cartoon" para primaria, "professional" para secundaria.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Material imprimible:</strong> Ideogram es excelente para flashcards y carteles de aula.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"Ideogram crea material visual atractivo; TÚ enciendes el aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Ideogram para Educación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <p class="text-purple-700">Midjourney es la IA más potente para crear <strong>obras de arte, fotografías realistas y escenas de cine</strong>. Vive dentro de Discord.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo?</h3>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-purple-800 mb-2">1. Crear cuenta en Discord</h4>
              <p class="text-sm text-slate-600">Ve a <a href="https://discord.com" target="_blank" class="text-purple-600 hover:underline">discord.com</a> y regístrate.</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-purple-800 mb-2">2. Unirse a Midjourney</h4>
              <p class="text-sm text-slate-600">Ve a <a href="https://midjourney.com" target="_blank" class="text-purple-600 hover:underline">midjourney.com</a> y haz clic en "Join the Beta".</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">⚠️ Herramienta de Pago</h4>
              <p class="text-sm text-amber-700">Midjourney cuesta ~$10 USD/mes. Escribe <code class="bg-slate-800 text-white px-2 py-1 rounded">/subscribe</code> en Discord para activar.</p>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Comandos Clave para Negocios</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">✨ /imagine</h4>
              <p class="text-sm text-blue-700"><code>/imagine prompt:</code> + tu descripción detallada.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🖼️ --ar 16:9</h4>
              <p class="text-sm text-blue-700">Formato panorámico para presentaciones y LinkedIn.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para Marketing y Ventas</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Hero de landing:</strong> "professional business team celebrating success, modern office, corporate photography, soft lighting --ar 16:9"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Producto premium:</strong> "luxury watch on marble surface, product photography, dramatic lighting, high end feel"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Concepto abstracto:</strong> "abstract visualization of business growth, blue and gold, corporate style, minimalist"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Resultados Comerciales</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Siempre inglés:</strong> Los mejores resultados salen con prompts en inglés.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Añade estilo:</strong> "corporate photography", "professional", "high end" mejoran resultados.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa variaciones:</strong> Botón V genera alternativas de una imagen que te gustó.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"Midjourney crea el visual premium; TÚ lo conviertes en ventas."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Midjourney para Negocios - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Comandos para Profesionales</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">✨ /imagine</h4>
              <p class="text-sm text-indigo-700">El comando principal para generar imágenes.</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">🖼️ Estilos Sobrios</h4>
              <p class="text-sm text-indigo-700">Añade "professional", "elegant", "minimalist" al prompt.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para Práctica Profesional</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Portada institucional:</strong> "professional law office interior, modern elegant, natural lighting, corporate photography"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Concepto justicia:</strong> "scales of justice on marble pedestal, dramatic lighting, professional photography, navy blue tones"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Imagen corporativa:</strong> "professional handshake, business meeting, elegant office, soft natural light"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Profesionales</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400"><strong>⚠️ Sin datos reales:</strong> NUNCA uses nombres de clientes o casos en prompts.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Mantén elegancia:</strong> Usa "elegant", "professional", "sophisticated" en prompts.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Coherencia visual:</strong> Guarda prompts que funcionan para mantener consistencia.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Midjourney crea imagen institucional premium; TÚ cuidas la confidencialidad."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Midjourney para Profesionales - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Comandos para Gestión</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">✨ /imagine</h4>
              <p class="text-sm text-green-700"><code>/imagine prompt:</code> + descripción de lo que necesitas.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🖼️ --ar</h4>
              <p class="text-sm text-green-700">1:1 para Instagram, 16:9 para presentaciones, 9:16 para móvil.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-green-50 p-3 rounded-lg"><strong>Portada de reporte:</strong> "abstract data visualization, corporate blue gradient, modern minimalist, professional design --ar 16:9"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Imagen institucional:</strong> "modern office teamwork, diverse professionals, natural lighting, corporate photography"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Comunicado interno:</strong> "professional celebration, achievement concept, confetti, corporate colors, positive energy"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Eficiencia</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Crea biblioteca:</strong> Guarda prompts exitosos en un documento para reusar.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Define colores:</strong> Añade tus colores institucionales al prompt para coherencia.</li>
            <li class="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400"><strong>Considera alternativas:</strong> Si el presupuesto es limitado, usa Ideogram (gratuito).</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Midjourney eleva tu imagen institucional; TÚ diriges la comunicación."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Midjourney para Gestión - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Comandos para Educadores</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">✨ /imagine</h4>
              <p class="text-sm text-emerald-700">El comando mágico: <code>/imagine prompt:</code> + tu idea.</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">🎨 Estilos Didácticos</h4>
              <p class="text-sm text-emerald-700">Añade "illustration", "cartoon", "educational" para material escolar.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Aula</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Ilustración histórica:</strong> "ancient roman market scene, educational illustration, colorful, detailed, children book style"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Concepto científico:</strong> "water cycle diagram, educational illustration, colorful arrows, cartoon style, clear labels"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Escena literaria:</strong> "Don Quixote and windmills, illustration, dramatic sky, storybook style"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Matemáticas visuales:</strong> "geometric shapes floating in space, colorful, 3D visualization, educational"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Docentes</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400"><strong>💡 Alternativa gratuita:</strong> Para presupuestos limitados, Ideogram es gratuito y excelente para texto.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Adapta estilos:</strong> "cartoon" para primaria, "realistic" para secundaria.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Crea consistencia:</strong> Usa el mismo estilo en toda una unidad didáctica.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"Midjourney ilustra conceptos complejos; TÚ enciendes la curiosidad."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Midjourney para Educación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <p class="text-amber-700">Gamma convierte tus ideas en <strong>presentaciones, documentos o webs</strong> profesionales automáticamente. Solo escríbele y diseña por ti.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo?</h3>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-amber-800 mb-2">1. Registro</h4>
              <p class="text-sm text-slate-600">Ve a <a href="https://gamma.app" target="_blank" class="text-amber-600 hover:underline">gamma.app</a> → "Sign up for free" → Usa tu Google.</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-amber-800 mb-2">2. Crear con IA</h4>
              <p class="text-sm text-slate-600">Clic en "Create new with AI" → Elige "Generate" → Escribe tu tema y listo.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Sistema de Créditos</h4>
              <p class="text-sm text-amber-700">400 créditos iniciales. Cada presentación ~40 créditos. Editar es gratis.</p>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Negocios</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">✨ Texto a Presentación</h4>
              <p class="text-sm text-blue-700">Pega tu propuesta y Gamma la convierte en slides profesionales.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🌐 Compartir como Web</h4>
              <p class="text-sm text-blue-700">Envía un link a tu cliente. Ve la presentación en su celular perfectamente.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo Comercial</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Propuesta comercial:</strong> "Crea una presentación de 8 slides sobre [producto] destacando beneficios, precios y testimonios"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Pitch de inversores:</strong> "Genera una presentación estilo startup: problema, solución, mercado, modelo de negocio, equipo"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Reporte de resultados:</strong> "Crea un reporte visual de ventas Q4 con gráficos y conclusiones"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Ventas</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Combina con ChatGPT:</strong> Primero redacta el contenido en ChatGPT, luego pégalo en Gamma.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa Temas:</strong> Clic en "Themes" para cambiar toda la estética en un segundo.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Exporta si es necesario:</strong> Puedes bajar a PDF o PPT para reuniones sin internet.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"Gamma diseña tu propuesta; TÚ cierras el trato."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Gamma para Negocios - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Profesionales</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">📄 Documento a Presentación</h4>
              <p class="text-sm text-indigo-700">Convierte informes extensos en presentaciones ejecutivas.</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">🎨 Temas Sobrios</h4>
              <p class="text-sm text-indigo-700">Elige temas "Corporate" o "Minimal" para mantener la seriedad.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Práctica</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Resumen para cliente:</strong> "Crea una presentación ejecutiva de 5 slides sobre el estado del caso [tipo genérico]"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Propuesta de servicios:</strong> "Genera una presentación profesional de servicios legales: áreas, equipo, proceso, contacto"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Capacitación interna:</strong> "Crea material de onboarding para nuevos asociados sobre [procedimiento]"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Profesionales</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400"><strong>⚠️ Sin datos sensibles:</strong> No incluyas información de casos reales en los prompts.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Exporta a PDF:</strong> Para documentos formales o anexos de expediente.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Revisa siempre:</strong> Gamma genera, TÚ validas el contenido antes de presentar.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Gamma presenta tus ideas con elegancia; TÚ garantizas la precisión jurídica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Gamma para Profesionales - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Gestión</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">📊 Reportes Automáticos</h4>
              <p class="text-sm text-green-700">Convierte datos en presentaciones visuales rápidamente.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🔄 Edición Libre</h4>
              <p class="text-sm text-green-700">Una vez generado, edita sin gastar créditos adicionales.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-green-50 p-3 rounded-lg"><strong>Reporte mensual:</strong> "Crea una presentación de reporte mensual: logros, KPIs, próximos pasos"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Comunicado interno:</strong> "Genera un documento visual para anunciar [nueva política/cambio]"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Onboarding:</strong> "Crea material de bienvenida para nuevos empleados: cultura, procesos, contactos"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Eficiencia</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Plantillas reutilizables:</strong> Guarda presentaciones como plantilla para futuros reportes.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Colores institucionales:</strong> Personaliza el tema con tu paleta corporativa.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Comparte como link:</strong> Evita enviar archivos pesados, comparte el enlace web.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Gamma formatea tus reportes; TÚ tomas las decisiones estratégicas."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Gamma para Gestión - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Educadores</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">✨ Clase en Minutos</h4>
              <p class="text-sm text-emerald-700">Escribe tu tema y Gamma genera la presentación completa.</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">🌐 Comparte con Alumnos</h4>
              <p class="text-sm text-emerald-700">Envía un link. Tus estudiantes lo ven en cualquier dispositivo.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Aula</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Clase de historia:</strong> "Crea una presentación sobre la Revolución Francesa: causas, eventos clave, consecuencias"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Unidad de ciencias:</strong> "Genera material sobre el sistema solar: planetas, características, datos curiosos"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Repaso para examen:</strong> "Crea una presentación de repaso de [tema] con puntos clave y preguntas de práctica"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Proyecto estudiantil:</strong> Enseña a tus alumnos a usar Gamma para sus exposiciones.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Docentes</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Adapta el nivel:</strong> Añade "para estudiantes de [nivel]" en tu prompt.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Interactivo:</strong> Las tarjetas de Gamma permiten contenido interactivo.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Exporta para offline:</strong> Descarga como PDF para proyectar sin internet.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"Gamma diseña tu material didáctico; TÚ inspiras a tus estudiantes."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Gamma para Educación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <p class="text-teal-700">DALL-E 3 vive dentro de <strong>ChatGPT</strong>. Entiende español perfectamente y puedes iterar conversacionalmente.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo?</h3>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-teal-800 mb-2">Acceso Directo</h4>
              <p class="text-sm text-slate-600">En <a href="https://chatgpt.com" target="_blank" class="text-teal-600 hover:underline">chatgpt.com</a>, solo escribe: "Dibuja un [tu idea]". ChatGPT activa DALL-E automáticamente.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Alternativa Gratuita</h4>
              <p class="text-sm text-amber-700">Microsoft Designer (antes Bing Image Creator) usa DALL-E 3 gratis con cuenta Hotmail/Outlook.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Límites</h4>
              <p class="text-sm text-amber-700">Free: 2-3 imágenes/día. Plus: casi ilimitado. Filtros de seguridad estrictos.</p>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Negocios</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">✨ Iteración Conversacional</h4>
              <p class="text-sm text-blue-700">"Hazla más corporativa" o "Cambia el fondo a blanco". Refina sin empezar de cero.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🇪🇸 Español Perfecto</h4>
              <p class="text-sm text-blue-700">Describe en español natural. DALL-E entiende mejor que otras IAs.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo Comercial</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Producto:</strong> "Foto profesional de un reloj de lujo sobre mármol, iluminación dramática, estilo catálogo"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Equipo:</strong> "Ilustración de equipo de negocios diverso celebrando logros, estilo moderno flat"</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Concepto:</strong> "Visualización abstracta de crecimiento empresarial, tonos azul y dorado, minimalista"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Ventas</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa Rol:</strong> "Actúa como fotógrafo de producto y crea una imagen de..."</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Especifica formato:</strong> "Cuadrada para Instagram" o "16:9 para presentación".</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Pide variaciones:</strong> "Dame 3 versiones con diferentes ángulos".</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"DALL-E ilustra tu visión comercial; TÚ la conviertes en ventas."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía DALL-E 3 para Negocios - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Profesionales</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">🇪🇸 Español Natural</h4>
              <p class="text-sm text-indigo-700">Describe en español sin tecnicismos. DALL-E entiende perfectamente.</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">✂️ Edición por Áreas</h4>
              <p class="text-sm text-indigo-700">Selecciona una zona y pide cambios específicos solo ahí.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Práctica</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Imagen institucional:</strong> "Ilustración elegante de balanza de justicia, estilo profesional, tonos azul marino"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Portada de documento:</strong> "Diseño abstracto profesional en tonos corporativos para portada de informe legal"</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Concepto visual:</strong> "Representación visual de acuerdo comercial, apretón de manos, estilo moderno"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Profesionales</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400"><strong>⚠️ Sin datos reales:</strong> DALL-E tiene filtros. No generes nada identificable de clientes.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Estilo sobrio:</strong> Añade "profesional", "elegante", "corporativo" a tus descripciones.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Consistencia:</strong> Pide que mantenga el mismo estilo para crear una serie coherente.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"DALL-E crea tu imagen profesional; TÚ cuidas la confidencialidad."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía DALL-E 3 para Profesionales - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Gestión</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🇪🇸 Español Natural</h4>
              <p class="text-sm text-green-700">Describe lo que necesitas como si hablaras con un colega.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">🔄 Iteración Rápida</h4>
              <p class="text-sm text-green-700">"Más luminoso", "Añade color verde", "Hazlo más formal".</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-green-50 p-3 rounded-lg"><strong>Comunicados:</strong> "Imagen celebratoria para anuncio de logros del equipo, colores corporativos"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Reportes:</strong> "Ilustración abstracta de datos y gráficos, estilo moderno para portada de reporte"</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Capacitación:</strong> "Imagen de bienvenida para onboarding de empleados, estilo amigable y profesional"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Eficiencia</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Guarda prompts:</strong> Documenta las descripciones que funcionan para reusar.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Define paleta:</strong> Incluye tus colores institucionales en la descripción.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Alternativa gratuita:</strong> Microsoft Designer si agotas créditos en ChatGPT.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"DALL-E crea imágenes institucionales; TÚ mantienes la coherencia visual."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía DALL-E 3 para Gestión - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Educadores</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">🇪🇸 Español Perfecto</h4>
              <p class="text-sm text-emerald-700">Describe en español natural. Ideal para crear material en tu idioma.</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">✨ Refinamiento</h4>
              <p class="text-sm text-emerald-700">"Hazlo más colorido", "Añade más detalles" - itera hasta lograr lo que necesitas.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Aula</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Escena histórica:</strong> "Ilustración del descubrimiento de América, estilo libro de texto, colorido y educativo"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Concepto científico:</strong> "Diagrama visual de la fotosíntesis, estilo infantil colorido con flechas claras"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Personaje literario:</strong> "Don Quijote cabalgando hacia molinos de viento, ilustración estilo cuento infantil"</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Matemáticas:</strong> "Visualización de las fracciones con pizzas divididas, estilo colorido didáctico"</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Docentes</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Usa Rol:</strong> "Actúa como ilustrador de libros infantiles y crea..."</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Adapta estilo:</strong> "Estilo cartoon" para primaria, "realista" para secundaria.</li>
            <li class="bg-emerald-50 p-3 rounded-lg border-l-4 border-emerald-400"><strong>💡 Alternativa:</strong> Microsoft Designer es gratuito si agotas créditos.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"DALL-E ilustra tus conceptos; TÚ enciendes la imaginación."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía DALL-E 3 para Educación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <p class="text-blue-700">Canva es la plataforma líder de diseño para no-diseñadores. Su <strong>Estudio Mágico</strong> incluye IA para crear diseños describiendo lo que quieres.</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">¿Cómo empiezo?</h3>
          <div class="space-y-3">
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-blue-800 mb-2">Registro</h4>
              <p class="text-sm text-slate-600">Ve a <a href="https://canva.com" target="_blank" class="text-blue-600 hover:underline">canva.com</a> → "Regístrate gratis" → Usa tu Google para sincronizar.</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-blue-800 mb-2">Estudio Mágico</h4>
              <p class="text-sm text-slate-600">En la barra izquierda, busca el icono de estrella "Estudio Mágico" - ahí vive la IA de Canva.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Planes</h4>
              <p class="text-sm text-amber-700">Free: Miles de plantillas + IA básica. Pro: Quitar fondos + IA avanzada.</p>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Negocios</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">✨ Diseño Mágico</h4>
              <p class="text-sm text-blue-700">Escribe "post promocional de mi producto" y la IA diseña por ti.</p>
            </div>
            <div class="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-1">🔄 Redimensión Mágica</h4>
              <p class="text-sm text-blue-700">Convierte una presentación en post de Instagram con un clic.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Usos para tu Trabajo Comercial</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Post de producto:</strong> Combina imágenes de Ideogram/Midjourney con plantillas de Canva.</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Propuestas:</strong> Usa plantillas de presentación y personaliza con tu branding.</li>
            <li class="bg-blue-50 p-3 rounded-lg"><strong>Material de ventas:</strong> Flyers, catálogos, tarjetas de presentación en minutos.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Ventas</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Define tu paleta:</strong> Elige 2-3 colores de marca y úsalos siempre.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Kit de marca:</strong> Guarda tu logo, colores y fuentes para aplicar en un clic.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Menos es más:</strong> Usa espacios en blanco para que el mensaje destaque.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"Canva da forma profesional a tu propuesta; TÚ cierras el negocio."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Canva para Negocios - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Profesionales</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">📄 Plantillas Profesionales</h4>
              <p class="text-sm text-indigo-700">Miles de diseños sobrios listos para personalizar.</p>
            </div>
            <div class="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
              <h4 class="font-bold text-indigo-800 mb-1">⌨️ Escritura Mágica</h4>
              <p class="text-sm text-indigo-700">Refina el tono de tus textos directamente en el diseño.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Usos para tu Práctica</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Presentaciones para clientes:</strong> Usa plantillas profesionales y añade tu branding.</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Material institucional:</strong> Tarjetas, membretes, firmas de correo.</li>
            <li class="bg-indigo-50 p-3 rounded-lg"><strong>Infografías de servicios:</strong> Explica tus áreas de práctica visualmente.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Profesionales</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Sobriedad:</strong> Elige plantillas minimalistas y colores oscuros.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Consistencia:</strong> Usa las mismas fuentes y colores en todo tu material.</li>
            <li class="bg-amber-50 p-3 rounded-lg border-l-4 border-amber-400"><strong>⚠️ Revisa siempre:</strong> Canva genera, TÚ validas antes de compartir.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Canva presenta tu imagen institucional; TÚ garantizas la excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Canva para Profesionales - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Gestión</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">✨ Diseño Mágico</h4>
              <p class="text-sm text-green-700">Describe "comunicado de nueva política" y obtén diseños listos.</p>
            </div>
            <div class="bg-green-50 p-4 rounded-xl border border-green-200">
              <h4 class="font-bold text-green-800 mb-1">📁 Carpetas de Marca</h4>
              <p class="text-sm text-green-700">Organiza plantillas por tipo de documento para reusar.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Usos para tu Trabajo</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-green-50 p-3 rounded-lg"><strong>Comunicados internos:</strong> Anuncios, políticas, celebraciones con diseño profesional.</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Reportes visuales:</strong> Transforma datos en infografías atractivas.</li>
            <li class="bg-green-50 p-3 rounded-lg"><strong>Onboarding:</strong> Material de bienvenida para nuevos empleados.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Eficiencia</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Kit de marca institucional:</strong> Logo + colores + fuentes guardados para aplicar rápido.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Plantillas reutilizables:</strong> Crea una vez, usa muchas veces.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Colaboración:</strong> Comparte diseños con tu equipo para edición conjunta.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Canva estandariza tu comunicación visual; TÚ lideras el mensaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Canva para Gestión - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Funciones para Educadores</h3>
          <div class="grid gap-3 md:grid-cols-2">
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">🎓 Plantillas Educativas</h4>
              <p class="text-sm text-emerald-700">Miles de diseños para aula: presentaciones, posters, diplomas.</p>
            </div>
            <div class="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-1">🖼️ Multimedia Mágica</h4>
              <p class="text-sm text-emerald-700">Genera imágenes describiendo lo que necesitas para tu clase.</p>
            </div>
          </div>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Usos para tu Aula</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Presentaciones:</strong> Material de clase atractivo con plantillas coloridas.</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Infografías:</strong> Explica conceptos complejos de forma visual.</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Diplomas y reconocimientos:</strong> Personaliza plantillas para tus alumnos.</li>
            <li class="bg-emerald-50 p-3 rounded-lg"><strong>Material imprimible:</strong> Flashcards, posters, hojas de trabajo.</li>
          </ul>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Consejos para Docentes</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Canva for Education:</strong> Plan gratuito para docentes con funciones premium.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Combina herramientas:</strong> Genera en DALL-E o Ideogram, arma en Canva.</li>
            <li class="bg-teal-50 p-3 rounded-lg border-l-4 border-teal-400"><strong>Enseña a tus alumnos:</strong> Canva es ideal para proyectos estudiantiles.</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"Canva transforma ideas en material visual; TÚ enciendes el aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Guía Canva para Educación - Módulo 2. AulaGenIA 2025.</div>
      </article>
      `
    }
  },
  "checklist-complejidad": {
    meta: {
      type: "checklist",
      title: "¿Tarea o Proyecto?",
      subtitle: "Mapa de Decisión para elegir tu estrategia IA - Módulo 4: Video 1",
      icon: "check-square",
      color: "blue",
      module: 4,
      pdfFallback: "gs://aulagenia.firebasestorage.app/Herramienta-Checklist-de-Complejidad.pdf"
    },
    base_html: `
      <article class="space-y-6">
        <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"No todas las misiones se resuelven igual. Usa la Receta WOW para tareas puntuales. Usa el Método Arquitecto para proyectos complejos."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 text-center mb-4">¿Cuál es mi Misión?</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-5 border-2 border-purple-300">
              <h4 class="font-bold text-purple-800 text-center mb-3">✨ TAREA (Receta WOW)</h4>
              <ul class="text-sm text-purple-700 space-y-2">
                <li>✓ Pieza única y específica</li>
                <li>✓ Se resuelve en un solo chat</li>
                <li>✓ No mezcla temas diferentes</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border-2 border-blue-300">
              <h4 class="font-bold text-blue-800 text-center mb-3">🏗️ PROYECTO (Arquitecto)</h4>
              <ul class="text-sm text-blue-700 space-y-2">
                <li>✓ Múltiples piezas conectadas</li>
                <li>✓ Requiere varios chats</li>
                <li>✓ Exige un Plano Maestro</li>
              </ul>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Contexto Comercial</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">✨ TAREAS (Receta WOW)</h4>
              <ul class="text-sm text-purple-700 space-y-2">
                <li class="bg-white p-2 rounded">• Email de seguimiento a cliente</li>
                <li class="bg-white p-2 rounded">• Post promocional para red social</li>
                <li class="bg-white p-2 rounded">• Script de llamada en frío</li>
                <li class="bg-white p-2 rounded">• Descripción de producto</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">🏗️ PROYECTOS (Arquitecto)</h4>
              <ul class="text-sm text-blue-700 space-y-2">
                <li class="bg-white p-2 rounded">• Plan de marketing trimestral</li>
                <li class="bg-white p-2 rounded">• Propuesta comercial completa</li>
                <li class="bg-white p-2 rounded">• Catálogo de productos</li>
                <li class="bg-white p-2 rounded">• Estrategia de lanzamiento</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Ventas</h4>
          <p class="text-white font-medium text-lg italic">"Cierra ventas con tareas rápidas; construye imperios con proyectos estratégicos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Checklist Complejidad para Negocios - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Práctica Profesional</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">✨ TAREAS (Receta WOW)</h4>
              <ul class="text-sm text-purple-700 space-y-2">
                <li class="bg-white p-2 rounded">• Carta de respuesta a cliente</li>
                <li class="bg-white p-2 rounded">• Resumen ejecutivo de caso</li>
                <li class="bg-white p-2 rounded">• Memo interno específico</li>
                <li class="bg-white p-2 rounded">• Email a contraparte</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">🏗️ PROYECTOS (Arquitecto)</h4>
              <ul class="text-sm text-blue-700 space-y-2">
                <li class="bg-white p-2 rounded">• Estrategia de litigación</li>
                <li class="bg-white p-2 rounded">• Due diligence completo</li>
                <li class="bg-white p-2 rounded">• Manual de procedimientos</li>
                <li class="bg-white p-2 rounded">• Reestructuración societaria</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"Resuelve lo urgente con tareas; construye lo trascendente con proyectos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Checklist Complejidad para Profesionales - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo de Gestión</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">✨ TAREAS (Receta WOW)</h4>
              <ul class="text-sm text-purple-700 space-y-2">
                <li class="bg-white p-2 rounded">• Comunicado interno puntual</li>
                <li class="bg-white p-2 rounded">• Acta de reunión</li>
                <li class="bg-white p-2 rounded">• Respuesta a consulta de empleado</li>
                <li class="bg-white p-2 rounded">• Agenda de capacitación</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">🏗️ PROYECTOS (Arquitecto)</h4>
              <ul class="text-sm text-blue-700 space-y-2">
                <li class="bg-white p-2 rounded">• Plan de onboarding completo</li>
                <li class="bg-white p-2 rounded">• Manual de procesos</li>
                <li class="bg-white p-2 rounded">• Evaluación de desempeño anual</li>
                <li class="bg-white p-2 rounded">• Reestructuración de área</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Administra lo operativo con tareas; transforma con proyectos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Checklist Complejidad para Gestión - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplos para tu Trabajo Docente</h3>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">✨ TAREAS (Receta WOW)</h4>
              <ul class="text-sm text-purple-700 space-y-2">
                <li class="bg-white p-2 rounded">• Actividad para una clase</li>
                <li class="bg-white p-2 rounded">• Quiz de repaso</li>
                <li class="bg-white p-2 rounded">• Instrucciones de tarea</li>
                <li class="bg-white p-2 rounded">• Retroalimentación individual</li>
              </ul>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">🏗️ PROYECTOS (Arquitecto)</h4>
              <ul class="text-sm text-blue-700 space-y-2">
                <li class="bg-white p-2 rounded">• Planificación semestral</li>
                <li class="bg-white p-2 rounded">• Curso completo nuevo</li>
                <li class="bg-white p-2 rounded">• Material didáctico de unidad</li>
                <li class="bg-white p-2 rounded">• Proyecto interdisciplinario</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"Enseña lo puntual con tareas; construye aprendizaje profundo con proyectos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Checklist Complejidad para Educación - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `
    }
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
        <section class="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <h4 class="font-bold text-amber-800 mb-2">RECORDATORIO AULAGENIA:</h4>
          <p class="text-amber-700 italic">"Si tu instrucción es vaga, el resultado será mediocre. Si usas la Receta WOW, conviertes a la IA en un socio estratégico."</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Desglose de los 3 Ingredientes</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #8b5cf6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">1</span>
                <h4 class="font-bold text-purple-800 text-lg">EL ROL (Identidad)</h4>
              </div>
              <p class="text-purple-700 mb-2">Define el experto que necesitas. No es lo mismo un "asistente" que un "Director Comercial con 15 años cerrando negocios".</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #e9d5ff;" class="text-sm italic">Ejemplo: "Actúa como un consultor de ventas B2B experto en propuestas ganadoras..."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #3b82f6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">2</span>
                <h4 class="font-bold text-blue-800 text-lg">EL DETALLE (Tu Contexto)</h4>
              </div>
              <p class="text-blue-700 mb-2">Dale los ingredientes de tu realidad: mercado, competencia, presupuesto, cliente objetivo.</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #bfdbfe;" class="text-sm italic">Ejemplo: "Mi cliente es una empresa de tecnología, presupuesto $40K, competimos con 2 proveedores más baratos..."</p>
              </div>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #10b981; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">3</span>
                <h4 class="font-bold text-green-800 text-lg">EL PROPÓSITO (Tu Objetivo)</h4>
              </div>
              <p class="text-green-700 mb-2">Dile QUÉ quieres lograr: ¿cerrar la venta, generar urgencia, diferenciarte?</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #a7f3d0;" class="text-sm italic">Ejemplo: "...para crear una propuesta que justifique el precio premium y cierre esta semana."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Ventas</h4>
          <p class="text-white font-medium text-lg italic">"El ROL define la estrategia; el DETALLE personaliza; el PROPÓSITO cierra la venta."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Receta WOW para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Desglose de los 3 Ingredientes</h3>
          <p class="text-sm text-slate-600 mb-4">Aplicable a abogados, contadores, ingenieros, arquitectos y profesionales técnicos.</p>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #8b5cf6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">1</span>
                <h4 class="font-bold text-purple-800 text-lg">EL ROL (Expertise)</h4>
              </div>
              <p class="text-purple-700 mb-2">Define la especialización técnica. No es lo mismo un "asistente" que un "Senior de Auditoría con 15 años en IFRS".</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #e9d5ff;" class="text-sm italic">Ejemplo: "Actúa como un abogado corporativo especializado en contratos de distribución..."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #3b82f6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">2</span>
                <h4 class="font-bold text-blue-800 text-lg">EL DETALLE (Los Hechos)</h4>
              </div>
              <p class="text-blue-700 mb-2">Dale los datos del caso: fechas, montos, partes involucradas, normativa aplicable.</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #bfdbfe;" class="text-sm italic">Ejemplo: "Cliente firmó contrato el 15/03/2024. Contraparte incumplió entregas 3 veces. Jurisdicción: Chile..."</p>
              </div>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #10b981; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">3</span>
                <h4 class="font-bold text-green-800 text-lg">EL PROPÓSITO (El Entregable)</h4>
              </div>
              <p class="text-green-700 mb-2">Define el documento específico: carta, informe, minuta, dictamen.</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #a7f3d0;" class="text-sm italic">Ejemplo: "...para redactar carta de apercibimiento formal que preserve la relación comercial."</p>
              </div>
            </div>
          </div>
        </section>
        <div class="bg-red-50 rounded-xl p-4 border border-red-200">
          <p class="text-sm text-red-700"><strong>⚠️ Siempre verifica:</strong> Citas normativas, jurisprudencia, cálculos y referencias deben ser validadas antes de usar el documento.</p>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Profesional</h4>
          <p class="text-white font-medium text-lg italic">"El ROL define la expertise; el DETALLE contextualiza el caso; el PROPÓSITO garantiza precisión técnica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Receta WOW para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Desglose de los 3 Ingredientes</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #8b5cf6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">1</span>
                <h4 class="font-bold text-purple-800 text-lg">EL ROL (Autoridad)</h4>
              </div>
              <p class="text-purple-700 mb-2">Define el especialista organizacional. No es lo mismo un "asistente" que un "Consultor de Cambio Organizacional".</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #e9d5ff;" class="text-sm italic">Ejemplo: "Actúa como un especialista en comunicación interna con experiencia en gestión del cambio..."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #3b82f6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">2</span>
                <h4 class="font-bold text-blue-800 text-lg">EL DETALLE (Tu Realidad)</h4>
              </div>
              <p class="text-blue-700 mb-2">Dale el contexto organizacional: número de personas, resistencias, tiempos, recursos disponibles.</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #bfdbfe;" class="text-sm italic">Ejemplo: "Implementamos nuevo sistema. 50 empleados afectados. Resistencia detectada. Lanzamiento en 2 semanas..."</p>
              </div>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #10b981; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">3</span>
                <h4 class="font-bold text-green-800 text-lg">EL PROPÓSITO (El Resultado)</h4>
              </div>
              <p class="text-green-700 mb-2">Define el impacto esperado: comunicado, plan de acción, diagnóstico, reporte.</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #a7f3d0;" class="text-sm italic">Ejemplo: "...para crear un comunicado que reduzca la ansiedad y genere expectativa positiva."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"El ROL aporta autoridad; el DETALLE muestra sensibilidad; el PROPÓSITO alinea al equipo."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Receta WOW para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">Desglose de los 3 Ingredientes</h3>
          <div class="space-y-4">
            <div class="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #8b5cf6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">1</span>
                <h4 class="font-bold text-purple-800 text-lg">EL ROL (Pedagogía)</h4>
              </div>
              <p class="text-purple-700 mb-2">Define el experto educativo. No es lo mismo un "asistente" que un "Pedagogo experto en didáctica activa".</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #e9d5ff;" class="text-sm italic">Ejemplo: "Actúa como un experto en metodologías activas para adolescentes..."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #3b82f6; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">2</span>
                <h4 class="font-bold text-blue-800 text-lg">EL DETALLE (Tu Aula)</h4>
              </div>
              <p class="text-blue-700 mb-2">Dale el contexto real: nivel, número de estudiantes, recursos, tiempo disponible, dificultades.</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #bfdbfe;" class="text-sm italic">Ejemplo: "Enseño historia a 3° de secundaria. 30 estudiantes, bajo interés. Próximo tema: Revolución Industrial..."</p>
              </div>
            </div>
            <div class="bg-green-50 rounded-xl p-5 border border-green-200">
              <div class="flex items-center gap-3 mb-3">
                <span style="background-color: #10b981; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">3</span>
                <h4 class="font-bold text-green-800 text-lg">EL PROPÓSITO (El Aprendizaje)</h4>
              </div>
              <p class="text-green-700 mb-2">Define qué quieres lograr: actividad, evaluación, planificación, material.</p>
              <div class="bg-slate-800 rounded-lg p-3 mt-2">
                <p style="color: #a7f3d0;" class="text-sm italic">Ejemplo: "...para diseñar una actividad gamificada de 45 minutos que conecte el tema con su vida diaria."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"El ROL define la pedagogía; el DETALLE conoce al estudiante; el PROPÓSITO transforma la clase."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Receta WOW para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplo de Primera Tarea para Negocios</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <p class="font-bold text-purple-800 mb-1">1. ROL:</p>
              <p class="text-sm text-purple-700">"Actúa como un consultor de ventas experto en negociación B2B con 15 años de experiencia cerrando contratos corporativos."</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p class="font-bold text-blue-800 mb-1">2. CONTEXTO:</p>
              <p class="text-sm text-blue-700">"Tengo una reunión mañana con el director de compras de una empresa mediana. Ya les presenté la propuesta hace 2 semanas. Presupuesto: $30K. Mi competencia ofreció algo similar a $25K."</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <p class="font-bold text-green-800 mb-1">3. META:</p>
              <p class="text-sm text-green-700">"Para que me ayudes a preparar 3 argumentos de valor que justifiquen mi precio y una estrategia de cierre para mañana."</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"En AulaGenIA, la IA no es el futuro, tú lo eres."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Mi Primer Prompt WOW para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplo de Primera Tarea para Profesionales</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <p class="font-bold text-purple-800 mb-1">1. ROL:</p>
              <p class="text-sm text-purple-700">"Actúa como un abogado especialista en derecho laboral con experiencia en redacción de documentos formales y comunicación con autoridades."</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p class="font-bold text-blue-800 mb-1">2. CONTEXTO:</p>
              <p class="text-sm text-blue-700">"Un cliente mediana empresa necesita notificar terminación de contrato a un empleado. Causa: reorganización. 5 años de antigüedad. Quiere evitar conflictos legales."</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <p class="font-bold text-green-800 mb-1">3. META:</p>
              <p class="text-sm text-green-700">"Para redactar una carta de terminación profesional y respetuosa que cumpla con la normativa y minimice riesgo de demanda."</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"En AulaGenIA, la IA no es el futuro, tú lo eres."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Mi Primer Prompt WOW para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplo de Primera Tarea para Gestión</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <p class="font-bold text-purple-800 mb-1">1. ROL:</p>
              <p class="text-sm text-purple-700">"Actúa como un especialista en comunicación interna con experiencia en gestión del cambio organizacional."</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p class="font-bold text-blue-800 mb-1">2. CONTEXTO:</p>
              <p class="text-sm text-blue-700">"Implementamos nuevo horario flexible la próxima semana. 45 empleados afectados. Algunos expresaron dudas. Necesito comunicar los beneficios y las nuevas reglas."</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <p class="font-bold text-green-800 mb-1">3. META:</p>
              <p class="text-sm text-green-700">"Para crear un comunicado interno que genere entusiasmo por el cambio y aclare las dudas más comunes de forma preventiva."</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"En AulaGenIA, la IA no es el futuro, tú lo eres."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Mi Primer Prompt WOW para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Ejemplo de Primera Tarea para Educadores</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <p class="font-bold text-purple-800 mb-1">1. ROL:</p>
              <p class="text-sm text-purple-700">"Actúa como un pedagogo experto en aprendizaje activo y gamificación para adolescentes de 14-16 años."</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p class="font-bold text-blue-800 mb-1">2. CONTEXTO:</p>
              <p class="text-sm text-blue-700">"Enseño Geografía a 2° de secundaria. 28 estudiantes. El tema de la próxima clase es 'Cambio Climático'. Tienen bajo interés y se distraen fácilmente."</p>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <p class="font-bold text-green-800 mb-1">3. META:</p>
              <p class="text-sm text-green-700">"Para diseñar una actividad interactiva de 40 minutos que los enganche desde el inicio y los haga reflexionar sobre acciones personales."</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"En AulaGenIA, la IA no es el futuro, tú lo eres."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Mi Primer Prompt WOW para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tareas Comunes para Practicar</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-blue-50 p-3 rounded-lg">• Email de seguimiento post-reunión</li>
            <li class="bg-blue-50 p-3 rounded-lg">• Propuesta de valor para cliente nuevo</li>
            <li class="bg-blue-50 p-3 rounded-lg">• Script de llamada de prospección</li>
            <li class="bg-blue-50 p-3 rounded-lg">• Respuesta a objeción de precio</li>
            <li class="bg-blue-50 p-3 rounded-lg">• Post promocional para redes</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad de la respuesta es proporcional a la claridad de tu pedido."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Plantilla Prompt WOW para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tareas Comunes para Practicar</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-indigo-50 p-3 rounded-lg">• Carta formal a cliente</li>
            <li class="bg-indigo-50 p-3 rounded-lg">• Memo interno sobre procedimiento</li>
            <li class="bg-indigo-50 p-3 rounded-lg">• Resumen ejecutivo de caso</li>
            <li class="bg-indigo-50 p-3 rounded-lg">• Email a contraparte profesional</li>
            <li class="bg-indigo-50 p-3 rounded-lg">• Estructura de informe técnico</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad de la respuesta es proporcional a la claridad de tu pedido."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Plantilla Prompt WOW para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tareas Comunes para Practicar</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-green-50 p-3 rounded-lg">• Comunicado interno de cambio</li>
            <li class="bg-green-50 p-3 rounded-lg">• Acta de reunión estructurada</li>
            <li class="bg-green-50 p-3 rounded-lg">• Email de feedback a equipo</li>
            <li class="bg-green-50 p-3 rounded-lg">• Descripción de puesto</li>
            <li class="bg-green-50 p-3 rounded-lg">• Agenda de capacitación</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad de la respuesta es proporcional a la claridad de tu pedido."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Plantilla Prompt WOW para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">Tareas Comunes para Practicar</h3>
          <ul class="text-sm space-y-2">
            <li class="bg-emerald-50 p-3 rounded-lg">• Planificación de clase</li>
            <li class="bg-emerald-50 p-3 rounded-lg">• Actividad interactiva sobre tema</li>
            <li class="bg-emerald-50 p-3 rounded-lg">• Rúbrica de evaluación</li>
            <li class="bg-emerald-50 p-3 rounded-lg">• Retroalimentación para alumno</li>
            <li class="bg-emerald-50 p-3 rounded-lg">• Quiz de repaso del tema</li>
          </ul>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad de la respuesta es proporcional a la claridad de tu pedido."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Plantilla Prompt WOW para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"El arte de pedir es el arte de obtener. Estos términos son los bloques fundamentales de la Receta WOW. Domínalos y nunca volverás a obtener respuestas genéricas."</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Vocabulario del Arte de Pedir para Líderes de Negocio
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">💬 PROMPT (Instrucción)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El mensaje que le escribes a la IA. Tu orden de trabajo.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es como el brief que le das a tu agencia de publicidad. Si el brief es vago ("hazme algo bonito"), el resultado será mediocre. Si es preciso ("quiero un anuncio que convierta al 3% en este segmento"), obtienes exactamente lo que necesitas.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎭 ROL (Identidad)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El experto que le pides a la IA que personifique.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es contratar especialistas a demanda. Si necesitas un análisis de mercado, no le pides a tu contador; le pides a un analista de BCG. El ROL hace que la IA cambie de "asistente genérico" a "consultor especializado".</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un Director Comercial con 20 años de experiencia en [TU INDUSTRIA] que ha liderado equipos de ventas en Latam.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📝 CONTEXTO / DETALLE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Los datos específicos de tu situación: números, restricciones, público.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es el dashboard de tu negocio. La IA no puede darte una estrategia de pricing sin saber tu margen, tus competidores y tu posicionamiento. Cuantos más datos, mejor recomendación.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Mi empresa factura $[MONTO]/mensual. Tenemos [N] clientes activos. El ticket promedio es $[VALOR]. La tasa de abandono está en [%]. Mi competencia directa es [NOMBRES].</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🎯 PROPÓSITO / META</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El resultado específico que esperas obtener.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es tu KPI. No le dices a tu equipo "vende más"; le dices "aumenta 15% el revenue en Q2". Sin meta clara, la IA te dará ideas sueltas en vez de un plan de acción.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">✨ EFECTO WOW</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El resultado que supera expectativas cuando combinas ROL + DETALLE + PROPÓSITO.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es la diferencia entre una propuesta comercial genérica vs. una que parece hecha por un consultor senior que conoce tu industria. El cliente dice "wow, entendieron exactamente lo que necesito".</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El prompt perfecto es un brief perfecto. Cuanto mejor instruyes a la IA, menos iteraciones necesitas para cerrar el negocio."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Vocabulario del Arte de Pedir para Profesionales del Derecho
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">💬 PROMPT (Instrucción)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El mensaje que le escribes a la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es como la instrucción que le das a tu paralegal. Si dices "busca jurisprudencia sobre arrendamiento", obtendrás miles de resultados irrelevantes. Si dices "busca sentencias donde el arrendatario alegó caso fortuito por pandemia en contratos comerciales 2020-2023", obtienes lo que necesitas.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎭 ROL (Identidad)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El experto que le pides a la IA que personifique.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es designar un perito. No le pides opinión contable a un médico legista. El ROL "Abogado tributarista senior" produce respuestas muy diferentes a "Abogado penalista de litigación oral".</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un abogado senior especializado en [ÁREA DEL DERECHO] con 15 años de experiencia en litigación en [JURISDICCIÓN].</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📝 CONTEXTO / DETALLE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Los hechos específicos del caso.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es la relación de hechos de tu demanda. Sin fechas, montos, partes involucradas y documentos clave, ningún abogado puede darte una opinión seria. La IA tampoco.</p>
                </div>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>⚠️ Advertencia:</strong> NUNCA incluyas datos reales de clientes. Usa casos hipotéticos o anonimiza completamente la información.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🎯 PROPÓSITO / META</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El resultado específico que esperas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es la pretensión de tu escrito. "Que se declare la nulidad del contrato" es claro; "que me ayudes con este tema" es un escrito rechazado. La IA necesita saber exactamente qué documento, análisis o estrategia esperas recibir.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">✨ EFECTO WOW ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Resultado de alta calidad cuando combinas ROL + DETALLE + PROPÓSITO.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>⚠️ Advertencia Legal:</strong> El "WOW" en derecho requiere siempre tu validación. Un borrador brillante puede contener citas inventadas. NUNCA firmes sin verificar artículos, plazos y jurisprudencia mencionada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack Legal</h4>
          <p class="text-white font-medium text-lg italic">"El prompt jurídico perfecto es como un escrito bien fundamentado: mientras más preciso el hecho, más precisa la consecuencia legal."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Vocabulario del Arte de Pedir para Gestores y Administradores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">💬 PROMPT (Instrucción)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu orden de trabajo a la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es el ticket de requerimiento que abres en tu sistema. Si solo dices "necesito un reporte", el área de soporte te pedirá 10 aclaraciones. Si describes exactamente qué datos, qué formato y para cuándo, lo obtienes a la primera.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎭 ROL (Identidad)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El especialista que le pides a la IA que sea.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es asignar el área correcta. Un comunicado de RRHH no se lo encargas a Finanzas. La IA con ROL "Especialista en Comunicación Interna" produce textos muy diferentes a "Analista de Control de Gestión".</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un Gerente de Operaciones con experiencia en optimización de procesos y gestión del cambio en organizaciones de [TAMAÑO].</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📝 CONTEXTO / DETALLE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Los datos específicos de tu situación organizacional.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es la información del dashboard de tu área. Sin saber cuántos empleados, qué procesos afectados, plazos y restricciones presupuestarias, la IA te dará recomendaciones genéricas de libro de texto.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🎯 PROPÓSITO / META</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El entregable específico que esperas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es el deliverable de tu proyecto. "Mejorar la comunicación" es un objetivo vago; "crear un comunicado de 200 palabras que anuncie el nuevo horario y responda las 3 preguntas más frecuentes" es un entregable claro.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">✨ EFECTO WOW</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Resultado que supera expectativas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es cuando presentas un informe y tu jefe dice "esto es exactamente lo que necesitaba, no tengo preguntas". El Efecto WOW ahorra reuniones de aclaración y retrabajos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"El prompt eficiente es un requerimiento eficiente. Mientras menos iteraciones, más tiempo para gestionar lo que realmente importa."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 1. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Vocabulario del Arte de Pedir para Educadores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">💬 PROMPT (Instrucción)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu comunicación con la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es como dar instrucciones a tus alumnos para un proyecto. Si dices "hagan algo sobre el medio ambiente", obtienes 30 trabajos distintos. Si dices "infografía de una página sobre reciclaje, con 5 datos estadísticos y 3 acciones concretas", obtienes lo que evaluar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎭 ROL (Identidad)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El experto que le pides a la IA que personifique.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es invitar un experto al aula. Un "biólogo marino investigador" explicará los océanos diferente a un "youtuber de ciencia para niños". El ROL adapta el nivel, vocabulario y enfoque.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Actúa como un pedagogo experto en didáctica activa y aprendizaje basado en proyectos para estudiantes de [NIVEL] entre [EDADES] años.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📝 CONTEXTO / DETALLE</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La información de tu realidad educativa.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es conocer a tu grupo. Sin saber cuántos alumnos, nivel cognitivo, tiempo disponible, recursos del aula y objetivos del programa, la IA te dará actividades de libro que no funcionan en tu contexto real.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🎯 PROPÓSITO / META</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El objetivo de aprendizaje específico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es tu objetivo de aprendizaje. "Que entiendan la fotosíntesis" es vago; "Que puedan explicar el proceso de fotosíntesis usando 3 palabras clave: cloroplasto, luz, glucosa" es evaluable.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">Crea una actividad de 30 minutos para que mis alumnos de [NIVEL] puedan [OBJETIVO DE APRENDIZAJE ESPECÍFICO], incluyendo instrucciones paso a paso y criterios de evaluación.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">✨ EFECTO WOW</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Material que supera expectativas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es cuando tus alumnos están tan enganchados que la campana suena y nadie se quiere ir. El Efecto WOW produce material que conecta porque fue diseñado para TU grupo específico, no descargado de internet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"El prompt pedagógico perfecto es como planificar la mejor clase: mientras más conoces a tu audiencia, más impacto genera tu contenido."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 1. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <p class="text-teal-700 italic">"La magia no está en la herramienta, sino en cómo le hablas. Nuestra metodología está basada en las mejores investigaciones de las empresas que crearon estas IAs."</p>
        </section>
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📚 Ingeniería de Instrucciones y Comunicación Efectiva</h3>
          <div class="bg-white rounded-xl p-5 border border-slate-200">
            <h4 class="font-bold text-purple-800 mb-2">Anthropic & OpenAI (2024). Prompt Engineering Guide for Developers and Users</h4>
            <div class="bg-amber-50 rounded-lg p-3 border-l-4 border-amber-400">
              <p class="text-sm text-amber-800"><strong>💡 Nos basamos en:</strong> Las mejores prácticas de ingeniería de instrucciones de los creadores de ChatGPT y Claude para entregarte nuestra receta de "Rol + Detalle + Propósito".</p>
            </div>
          </div>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Aplicación en el Mundo Comercial</h3>
          <div class="space-y-4">
            <div class="bg-teal-50 rounded-xl p-4 border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-2">Lo que dicen los expertos</h4>
              <p class="text-sm text-teal-700">"Las instrucciones específicas producen resultados específicos. La ambigüedad es el enemigo de la productividad." — Guía de OpenAI</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-2">En tu contexto comercial significa:</h4>
              <ul class="text-sm text-slate-600 space-y-2">
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Un brief de campaña vago genera creatividades que no convierten</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Una instrucción con datos de mercado genera estrategias accionables</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Mientras más contexto de tu cliente ideal, mejor la propuesta de valor</li>
              </ul>
            </div>
            <div class="prompt-block bg-slate-800 rounded-lg p-4">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm"><strong>Prompt basado en esta fuente:</strong> Usando las mejores prácticas de prompt engineering de OpenAI, actúa como un estratega comercial. Dame 3 formas de mejorar mi tasa de conversión de [X%] a [Y%] en mi proceso de ventas de [PRODUCTO].</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El prompt perfecto es como un pitch perfecto: claro, específico y orientado al cierre."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Aplicación en la Práctica Profesional</h3>
          <div class="space-y-4">
            <div class="bg-teal-50 rounded-xl p-4 border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-2">Lo que dicen los expertos</h4>
              <p class="text-sm text-teal-700">"Los modelos de lenguaje reflejan la calidad del input. Una instrucción estructurada produce una respuesta estructurada." — Guía de Anthropic</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-2">En tu contexto jurídico significa:</h4>
              <ul class="text-sm text-slate-600 space-y-2">
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Un pedido vago ("ayúdame con este caso") genera respuestas genéricas</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Una instrucción con hechos precisos genera análisis fundamentados</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Especificar jurisdicción y materia elimina respuestas irrelevantes</li>
              </ul>
            </div>
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">⚠️ Advertencia de las fuentes</h4>
              <p class="text-sm text-red-700">"Los modelos pueden generar información plausible pero incorrecta. La verificación humana es esencial en contextos de alto riesgo." — OpenAI Safety Guidelines</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima Legal</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un asistente de redacción, nunca un sustituto de tu criterio profesional."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Aplicación en Gestión Organizacional</h3>
          <div class="space-y-4">
            <div class="bg-teal-50 rounded-xl p-4 border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-2">Lo que dicen los expertos</h4>
              <p class="text-sm text-teal-700">"La estructura del prompt determina la estructura del output. Pide en el formato que necesitas." — Guía de OpenAI</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-2">En tu contexto de gestión significa:</h4>
              <ul class="text-sm text-slate-600 space-y-2">
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Pedir "ideas" genera listas genéricas; pedir "plan de acción" genera roadmaps</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Especificar formato (tabla, Gantt, lista) ahorra horas de reformateo</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Dar restricciones de recursos produce propuestas implementables</li>
              </ul>
            </div>
            <div class="prompt-block bg-slate-800 rounded-lg p-4">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm"><strong>Prompt basado en esta fuente:</strong> Siguiendo las mejores prácticas de prompt engineering, actúa como consultor de procesos. Diagrama el flujo actual de [PROCESO] e identifica 3 cuellos de botella con propuestas de mejora.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Pide estructura, recibe estructura. Pide vagüedades, recibe vagüedades."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Aplicación en Contexto Educativo</h3>
          <div class="space-y-4">
            <div class="bg-teal-50 rounded-xl p-4 border border-teal-200">
              <h4 class="font-bold text-teal-800 mb-2">Lo que dicen los expertos</h4>
              <p class="text-sm text-teal-700">"Los ejemplos concretos en el prompt mejoran dramáticamente la calidad del output. Muestra el formato que esperas." — Guía de Anthropic</p>
            </div>
            <div class="bg-white rounded-xl p-4 border border-slate-200">
              <h4 class="font-bold text-slate-800 mb-2">En tu contexto pedagógico significa:</h4>
              <ul class="text-sm text-slate-600 space-y-2">
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Pedir "una actividad" genera genéricos; pedir "actividad para 3° básico, 30 min, sin tecnología" genera material usable</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Dar ejemplos de actividades anteriores que funcionaron mejora la calidad</li>
                <li class="flex items-start gap-2"><span class="text-teal-500 font-bold">→</span> Especificar nivel cognitivo y estilo de aprendizaje produce diferenciación real</li>
              </ul>
            </div>
            <div class="prompt-block bg-slate-800 rounded-lg p-4">
              <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
              <p class="text-white text-sm"><strong>Prompt basado en esta fuente:</strong> Aplicando mejores prácticas de prompt engineering, diseña una actividad de [DURACIÓN] para [NIVEL] sobre [TEMA]. Incluye: objetivo, materiales, instrucciones paso a paso y rúbrica de evaluación.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA no conoce a tus alumnos. Mientras más contexto de tu grupo le des, más útil será el material."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
          <p class="text-teal-700 italic">"La Fórmula AGIA es la evolución de la Receta WOW. Es para cuando necesitas resultados de nivel profesional. Domina estos términos y nunca más te conformarás con respuestas genéricas."</p>
        </section>
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎯</span>
              Vocabulario AGIA para Estrategas Comerciales
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎯 FÓRMULA AGIA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> ROL + CONTEXTO + META + RESTRICCIONES + FORMATO.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es como un RFP (Request for Proposal) perfecto. Mientras más completo sea tu brief, más precisa será la propuesta que recibas. Un RFP vago genera propuestas que no cotizan.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">⛔ RESTRICCIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Lo que NO quieres que haga la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es definir el out of scope del proyecto. Sin límites claros, el proveedor entrega lo que quiere, no lo que necesitas. "No incluyas opciones de software enterprise" evita propuestas fuera de presupuesto.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">RESTRICCIONES: No uses jerga técnica. No incluyas opciones que superen $[MONTO]. Evita ejemplos de industrias diferentes a la mía.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📋 FORMATO DE SALIDA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cómo quieres recibir la respuesta.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎯 Analogía Comercial:</strong> Es pedir el entregable en el formato que usas. Una estrategia en párrafos largos no sirve para presentar al directorio. Pedir "tabla con columnas: Acción, Responsable, Fecha, KPI" te ahorra horas de reformateo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📝 VERBOS DE PODER (Negocios)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Palabras de acción que activan respuestas más estratégicas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎯 Tus verbos clave:</strong> PROYECTA, PRIORIZA POR ROI, CUANTIFICA, COMPARA CON COMPETENCIA, IDENTIFICA QUICK WINS, SEGMENTA POR CLIENTE.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">PRIORIZA estas 5 iniciativas por impacto en revenue y facilidad de implementación. PROYECTA el ROI a 6 meses de cada una.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"La Fórmula AGIA es tu arma secreta de productividad: mientras tu competencia itera 5 veces, tú obtienes el resultado en la primera."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">⚖️</span>
              Vocabulario AGIA para Profesionales del Derecho
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎯 FÓRMULA AGIA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> ROL + CONTEXTO + META + RESTRICCIONES + FORMATO.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es como un escrito judicial completo. Tiene partes bien definidas: identificación de partes (ROL), relación de hechos (CONTEXTO), pretensión (META), excepciones (RESTRICCIONES) y formato procesal.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-red-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">⛔ RESTRICCIONES ⚠️</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Lo que NO quieres que haga la IA.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es tu petición en subsidio o los límites de tu mandato. "No cites jurisprudencia extranjera" o "Limítate a la normativa vigente 2024" evita que la IA divague.</p>
                </div>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>⚠️ Crítico:</strong> Siempre incluye: "Marca con [VERIFICAR] cualquier cita de ley, artículo o jurisprudencia".</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📋 FORMATO DE SALIDA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cómo quieres el documento.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Legal:</strong> Es especificar el tipo procesal. "Formato de demanda civil" produce algo muy diferente a "memorándum interno de 1 página". Sin formato, la IA escribe en estilo genérico de internet.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">FORMATO: Estructura de escrito judicial con: I. Suma, II. Hechos (numerados), III. Derecho aplicable, IV. Petitorio. Marca cualquier cita con [VERIFICAR].</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📝 VERBOS DE PODER (Legal)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Verbos que activan el razonamiento jurídico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>⚖️ Tus verbos clave:</strong> FUNDAMENTA, DISTINGUE (casos), CONTRASTA (posiciones doctrinarias), ESTRUCTURA (cronológicamente), IDENTIFICA (lagunas legales), ANALIZA (riesgos procesales).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack Legal</h4>
          <p class="text-white font-medium text-lg italic">"La Fórmula AGIA produce borradores listos para tu revisión final, no textos que hay que reescribir desde cero."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">📊</span>
              Vocabulario AGIA para Gestores y Administradores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎯 FÓRMULA AGIA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> ROL + CONTEXTO + META + RESTRICCIONES + FORMATO.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es como un Project Charter completo. Tiene sponsor (ROL), situación actual (CONTEXTO), objetivo SMART (META), exclusiones (RESTRICCIONES) y entregables esperados (FORMATO).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">⛔ RESTRICCIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Lo que NO quieres que incluya.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es el "out of scope" de tu proyecto. "No propongas cambios que requieran aprobación de directorio" o "Evita soluciones que impliquen contratación" mantiene las propuestas dentro de tu ámbito de decisión.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">RESTRICCIONES: Solo propón acciones que puedo implementar con mi equipo actual. No incluyas soluciones que requieran presupuesto adicional.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📋 FORMATO DE SALIDA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El entregable específico.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>📊 Analogía de Gestión:</strong> Es especificar si necesitas un Gantt, una matriz RACI, un tablero Kanban o una lista de tareas. "Dame una tabla con: Actividad, Responsable, Fecha límite, Dependencias" te ahorra crear la plantilla.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📝 VERBOS DE PODER (Gestión)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Verbos que activan respuestas operativas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>📊 Tus verbos clave:</strong> SECUENCIA (tareas), PRIORIZA (por urgencia/impacto), ASIGNA (responsables), ESTIMA (tiempos), IDENTIFICA (cuellos de botella), DOCUMENTA (procedimiento).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"La Fórmula AGIA convierte tus ideas sueltas en planes de acción estructurados en minutos, no en horas."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 2. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
            <h4 class="font-bold text-teal-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-sm">🎓</span>
              Vocabulario AGIA para Educadores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🎯 FÓRMULA AGIA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> ROL + CONTEXTO + META + RESTRICCIONES + FORMATO.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es como una planificación de clase completa. Tiene el experto que enseña (ROL), el diagnóstico del grupo (CONTEXTO), el objetivo de aprendizaje (META), lo que NO haremos (RESTRICCIONES) y el material esperado (FORMATO).</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">⛔ RESTRICCIONES</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Lo que NO quieres en el material.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es adaptar al nivel real. "No uses vocabulario técnico", "Evita ejemplos culturalmente ajenos", "No propongas actividades que requieran tecnología" mantiene el material usable en TU aula.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">RESTRICCIONES: Solo actividades que requieran materiales disponibles en el aula. No propongas tareas para casa. Máximo 3 pasos por instrucción.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📋 FORMATO DE SALIDA</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El tipo de material que necesitas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es especificar si necesitas guía del docente, ficha del alumno, rúbrica o presentación. "Formato: Guía de 1 página con Inicio (5 min) - Desarrollo (30 min) - Cierre (10 min)" te da material listo para usar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📝 VERBOS DE PODER (Educación)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Verbos que activan material pedagógico de calidad.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400 mb-2">
                  <p class="text-xs text-teal-800"><strong>🎓 Tus verbos clave:</strong> DISEÑA (actividad), GRADÚA (dificultad), DIFERENCIA (por estilos de aprendizaje), FORMULA (preguntas de reflexión), EVALÚA CON (rúbrica), CONECTA (con la vida cotidiana).</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">DISEÑA una actividad de 20 minutos. GRADÚA en 3 niveles de dificultad. FORMULA 5 preguntas de reflexión que CONECTEN el tema con la vida diaria del estudiante.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚡ AulaGenIA Hack para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La Fórmula AGIA te devuelve las tardes: material de calidad en minutos, no en horas de fin de semana."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario oficial del Módulo 3 - Video 2. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Frases de Persuasión para Negocios</h3>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Presión Táctica (Alto Riesgo)</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Esta propuesta va al directorio mañana. Necesito que esté impecable porque define mi ascenso a gerencia."</p>
              </div>
              <p class="text-xs text-red-700">La IA activa sus patrones de alta precisión cuando siente urgencia y consecuencias.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Muestra, No Describas</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Aquí tienes un email que cerró una venta de $50K. Escribe uno similar para mi producto [DETALLE]."</p>
              </div>
              <p class="text-xs text-blue-700">Dar ejemplos de éxito produce resultados superiores a describir lo que quieres.</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Técnica del Rival</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Mi competencia [NOMBRE] acaba de lanzar esto. Necesito una respuesta que los supere en valor percibido."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un imitador experto de tu propia claridad. Si le pides excelencia con firmeza, te dará excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Arte de la Persuasión para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Frases de Persuasión para Profesionales</h3>
          <p class="text-sm text-slate-600 mb-4">Aplicable a abogados, contadores, ingenieros, arquitectos y otros profesionales técnicos.</p>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Presión de Responsabilidad Profesional</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Este informe será presentado ante [AUTORIDAD/CLIENTE]. Necesito máxima precisión técnica porque mi certificación profesional respalda este documento."</p>
              </div>
              <p class="text-xs text-red-700">Funciona para informes de auditoría, peritajes, cálculos estructurales, dictámenes.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Muestra el Estándar</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Aquí tienes el formato oficial de [NORMA/COLEGIO PROFESIONAL]. Adapta mi contenido a ese estándar exacto."</p>
              </div>
              <p class="text-xs text-blue-700">Ideal para contadores (NIF), ingenieros (normas técnicas), arquitectos (ordenanzas).</p>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Técnica de la Verificación Cruzada</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Actúa como auditor externo. Revisa este [DOCUMENTO] y marca cualquier inconsistencia técnica o normativa. Sé implacable."</p>
              </div>
            </div>
          </div>
          <div class="bg-red-100 rounded-xl p-4 border border-red-300 mt-4">
            <h4 class="font-bold text-red-800 mb-2">⚠️ Recordatorio Profesional</h4>
            <p class="text-sm text-red-700">Siempre valida datos técnicos, cálculos, citas normativas y referencias. Tu firma profesional respalda el documento, no la IA.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un imitador experto de tu propia claridad. Si le pides excelencia con firmeza, te dará excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Arte de la Persuasión para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Frases de Persuasión para Gestores</h3>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Presión de Deadline</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Tengo reunión con gerencia en 2 horas. Necesito este análisis estructurado y con las 3 recomendaciones más importantes."</p>
              </div>
              <p class="text-xs text-red-700">La urgencia obliga a la IA a priorizar y no divagar.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Plantilla de Éxito</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Este es el comunicado que usamos el año pasado y tuvo 95% de aceptación del equipo. Crea uno similar para [NUEVA SITUACIÓN]."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Técnica del Stakeholder</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"El CEO es muy visual y odia los textos largos. Reformula esto en máximo 5 bullets con datos duros y una recomendación."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un imitador experto de tu propia claridad. Si le pides excelencia con firmeza, te dará excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Arte de la Persuasión para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Frases de Persuasión para Educadores</h3>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Presión del Grupo</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Tengo 35 alumnos de [EDAD] años que se desconcentran fácilmente. Necesito una actividad que los enganche en los primeros 30 segundos."</p>
              </div>
              <p class="text-xs text-red-700">Dar el contexto real del grupo produce material usable, no genérico.</p>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">El Modelo que Funcionó</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Esta actividad funcionó muy bien con mis alumnos [DESCRIBE ACTIVIDAD]. Crea 3 variaciones para diferentes temas manteniendo la misma dinámica."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Técnica del Alumno Difícil</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3 mb-2">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Tengo un estudiante que siempre dice 'esto es aburrido'. Diseña una introducción al tema [X] que le cierre la boca en 60 segundos."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">M�xima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un imitador experto de tu propia claridad. Si le pides excelencia con firmeza, te dará excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Arte de la Persuasión para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <h3 class="text-lg font-bold text-slate-800 mb-4">M�xima AulaGenIA: Cómo aplicar la Persuasión</h3>
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Frases de Poder en Acción: Negocios</h3>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Reproche Táctico aplicado a Ventas</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Esta propuesta comercial es demasiado genérica. Mi cliente es un CEO de industria farmacéutica. Reescríbela con el nivel de personalización que espera alguien de su calibre."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Presión de Éxito para Pitch</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Este pitch va a inversores que ven 100 proyectos al día. Tiene que enganchar en 30 segundos. De esto depende mi ronda de financiamiento."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Desafío Crítico para Estrategia</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Antes de que presente esta estrategia, critica cada punto como si fueras mi competidor buscando destruirla. ¿Dónde están las fallas?"</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un espejo de tu propia exigencia. Si le pides con timidez, te dará timidez. Si le exiges maestría, te devolverá excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Frases de Poder para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Frases de Poder en Acción: Profesionales</h3>
          <p class="text-sm text-slate-600 mb-4">Para abogados, contadores, ingenieros, arquitectos y profesionales técnicos.</p>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Reproche Táctico para Documentos Técnicos</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Este informe no tiene el nivel técnico que espera un revisor de [SII/Colegio de Ingenieros/Contraloría]. Eleva la precisión y añade las referencias normativas que respalden cada afirmación."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Presión Profesional</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Este dictamen/presupuesto/cálculo va firmado con mi certificación profesional. No puede tener errores porque mi reputación de [X] años está en juego."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Desafío de Peer Review</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Actúa como un colega revisor senior de mi área. Revisa este [DOCUMENTO] y marca con [VERIFICAR] cualquier dato, cálculo o normativa que pudiera ser cuestionada en una auditoría."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un espejo de tu propia exigencia. Si le pides con timidez, te dará timidez. Si le exiges maestría, te devolverá excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Frases de Poder para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Frases de Poder en Acción: Gestión</h3>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Reproche Táctico para Reportes</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Este reporte parece una lista de obviedades. Mi gerente espera insights accionables, no descripciones. Reescríbelo con recomendaciones concretas y priorizadas."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Presión de Impacto Organizacional</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Esta propuesta de mejora de procesos afecta a 200 empleados. Necesito que cada recomendación tenga un estimado de impacto y un plan de implementación paso a paso."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Desafío de Viabilidad</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Antes de presentar este plan, simula que eres un gerente escéptico con 20 años de experiencia. ¿Qué objeciones tendrías? Anticípalas y prepara respuestas."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un espejo de tu propia exigencia. Si le pides con timidez, te dará timidez. Si le exiges maestría, te devolverá excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Frases de Poder para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Frases de Poder en Acción: Educación</h3>
          <div class="space-y-4">
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">Reproche Táctico para Material Didáctico</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Esta actividad parece sacada de un libro de los años 90. Mis alumnos nacieron con TikTok. Hazla dinámica, corta y con ganchos que compitan con sus celulares."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Presión de Impacto Pedagógico</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Esta clase es mi evaluación docente. El observador va a medir participación y evidencia de aprendizaje. Necesito una secuencia impecable de 45 minutos."</p>
              </div>
            </div>
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Desafío de Relevancia</h4>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm italic">"Ponte en la mente de un alumno de [EDAD] años que odia estudiar. ¿Esta introducción al tema lo engancharía o lo dormiría? Critica y mejora."</p>
              </div>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA es un espejo de tu propia exigencia. Si le pides con timidez, te dará timidez. Si le exiges maestría, te devolverá excelencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Frases de Poder para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Tus Verbos de Poder Comerciales</h3>
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <span class="font-bold text-blue-800">PROYECTA</span>
              <p class="text-xs text-blue-600">Estima resultados futuros con datos.</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <span class="font-bold text-blue-800">CUANTIFICA</span>
              <p class="text-xs text-blue-600">Pon números a los beneficios.</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <span class="font-bold text-blue-800">SEGMENTA</span>
              <p class="text-xs text-blue-600">Divide por tipo de cliente.</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <span class="font-bold text-blue-800">PRIORIZA POR ROI</span>
              <p class="text-xs text-blue-600">Ordena por retorno de inversión.</p>
            </div>
          </div>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm"><strong>Prompt comercial:</strong> ANALIZA estas 5 oportunidades de mercado, CUANTIFICA el potencial de cada una y PRIORÍZALAS por ROI esperado en 6 meses.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. No pidas favores, ¡da órdenes de poder!"</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Verbos de Poder para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Tus Verbos de Poder Profesionales</h3>
          <p class="text-sm text-slate-600 mb-4">Para abogados, contadores, ingenieros, arquitectos y profesionales técnicos.</p>
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <span class="font-bold text-purple-800">FUNDAMENTA</span>
              <p class="text-xs text-purple-600">Respalda con normas/referencias.</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <span class="font-bold text-purple-800">DISTINGUE</span>
              <p class="text-xs text-purple-600">Diferencia casos o situaciones.</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <span class="font-bold text-purple-800">ESTRUCTURA</span>
              <p class="text-xs text-purple-600">Ordena lógicamente el documento.</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <span class="font-bold text-purple-800">VALIDA</span>
              <p class="text-xs text-purple-600">Verifica consistencia técnica.</p>
            </div>
          </div>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm"><strong>Prompt profesional:</strong> ESTRUCTURA este informe técnico en secciones normativas, FUNDAMENTA cada conclusión con referencias específicas y marca [VERIFICAR] cualquier dato que no puedas confirmar.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. No pidas favores, ¡da órdenes de poder!"</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Verbos de Poder para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Tus Verbos de Poder de Gestión</h3>
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div class="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <span class="font-bold text-emerald-800">SECUENCIA</span>
              <p class="text-xs text-emerald-600">Ordena tareas paso a paso.</p>
            </div>
            <div class="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <span class="font-bold text-emerald-800">ASIGNA</span>
              <p class="text-xs text-emerald-600">Define responsables claros.</p>
            </div>
            <div class="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <span class="font-bold text-emerald-800">ESTIMA</span>
              <p class="text-xs text-emerald-600">Calcula tiempos y recursos.</p>
            </div>
            <div class="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <span class="font-bold text-emerald-800">DOCUMENTA</span>
              <p class="text-xs text-emerald-600">Registra el procedimiento.</p>
            </div>
          </div>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm"><strong>Prompt de gestión:</strong> SECUENCIA este proyecto en fases, ASIGNA responsables para cada tarea, ESTIMA duración realista y DOCUMENTA las dependencias entre actividades.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. No pidas favores, ¡da órdenes de poder!"</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Verbos de Poder para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Tus Verbos de Poder Pedagógicos</h3>
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <span class="font-bold text-amber-800">DISEÑA</span>
              <p class="text-xs text-amber-600">Crea actividades estructuradas.</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <span class="font-bold text-amber-800">GRADÚA</span>
              <p class="text-xs text-amber-600">Adapta dificultad por nivel.</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <span class="font-bold text-amber-800">FORMULA</span>
              <p class="text-xs text-amber-600">Crea preguntas de reflexión.</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <span class="font-bold text-amber-800">CONECTA</span>
              <p class="text-xs text-amber-600">Vincula con la vida real.</p>
            </div>
          </div>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 rounded"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm"><strong>Prompt pedagógico:</strong> DISEÑA una actividad de [X] minutos, GRADÚA en 3 niveles de dificultad, FORMULA preguntas de reflexión y CONECTA el tema con situaciones cotidianas del estudiante.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. No pidas favores, ¡da órdenes de poder!"</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Verbos de Poder para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Tu Caso de Alta Fidelidad: Propuesta Comercial</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p class="text-purple-800"><strong>[ROL]:</strong> Director Comercial Senior experto en ventas B2B de alto valor.</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>[CONTEXTO]:</strong> Tengo una oportunidad de $80K con una empresa de logística. Competimos con 2 proveedores. El CEO prioriza innovación y tiene reunión de directorio el viernes.</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>[META]:</strong> Redacta una propuesta ejecutiva de 1 página que cierre antes del viernes.</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>[RESTRICCIONES]:</strong> No uses jerga técnica. El CEO odia los PDFs largos. Máximo 5 bullets de valor.</p>
            </div>
            <div class="bg-teal-50 rounded-lg p-3 border border-teal-200">
              <p class="text-teal-800"><strong>[INGENIERÍA SOCIAL]:</strong> Esta propuesta define mi comisión del trimestre. Antes de redactar, valida que entendiste la urgencia y critica cualquier debilidad.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado no es un problema de la IA, es un reflejo de la profundidad de tu instrucción estratégica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Instrucciones de Alta Fidelidad para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Tu Caso de Alta Fidelidad: Dictamen Técnico</h3>
          <p class="text-sm text-slate-600 mb-3">Para abogados, contadores, ingenieros, arquitectos y profesionales técnicos.</p>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p class="text-purple-800"><strong>[ROL]:</strong> Auditor Senior certificado con 15 años en normas IFRS/NIF.</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>[CONTEXTO]:</strong> Cliente ABC tiene estas transacciones del Q3: [Datos]. Hay inconsistencia en el reconocimiento de ingresos.</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>[META]:</strong> Elabora un informe técnico identificando la irregularidad y proponiendo la reclasificación correcta.</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>[RESTRICCIONES]:</strong> Cita las normas específicas (NIC 18, IFRS 15). Marca [VERIFICAR] cualquier dato que no puedas confirmar.</p>
            </div>
            <div class="bg-teal-50 rounded-lg p-3 border border-teal-200">
              <p class="text-teal-800"><strong>[INGENIERÍA SOCIAL]:</strong> Este informe va a la Superintendencia. Mi certificación profesional está en juego. Revisa tu análisis dos veces antes de entregar.</p>
            </div>
          </div>
          <div class="bg-red-50 rounded-xl p-3 border border-red-200 mt-3">
            <p class="text-sm text-red-700"><strong>⚠️ Siempre valida:</strong> Citas normativas, cálculos y referencias antes de usar el documento.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado no es un problema de la IA, es un reflejo de la profundidad de tu instrucción estratégica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Instrucciones de Alta Fidelidad para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Tu Caso de Alta Fidelidad: Plan de Cambio</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p class="text-purple-800"><strong>[ROL]:</strong> Consultor de Change Management con experiencia en empresas de +500 empleados.</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>[CONTEXTO]:</strong> Implementamos nuevo ERP. 200 empleados afectados. Resistencia de mandos medios. Go-live en 45 días. Presupuesto de comunicación: $5K.</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>[META]:</strong> Diseña un plan de gestión del cambio con hitos semanales, mensajes clave y métricas de adopción.</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>[RESTRICCIONES]:</strong> Solo acciones que pueda ejecutar con recursos internos. No propongas consultorías externas adicionales.</p>
            </div>
            <div class="bg-teal-50 rounded-lg p-3 border border-teal-200">
              <p class="text-teal-800"><strong>[INGENIERÍA SOCIAL]:</strong> El CEO me evaluará por el éxito de esta implementación. Cuestiona mi plan inicial y anticipa 3 objeciones que encontraré de los mandos medios.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado no es un problema de la IA, es un reflejo de la profundidad de tu instrucción estratégica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Instrucciones de Alta Fidelidad para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Tu Caso de Alta Fidelidad: Secuencia Didáctica</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p class="text-purple-800"><strong>[ROL]:</strong> Experto en diseño instruccional con metodologías activas (ABP, Aula Invertida).</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>[CONTEXTO]:</strong> Enseño Ciencias a 2° de secundaria. 35 alumnos muy inquietos. Tema: Cambio climático. Tengo 3 sesiones de 45 minutos. Solo materiales básicos (papel, marcadores, celulares).</p>
            </div>
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>[META]:</strong> Diseña una secuencia completa de 3 sesiones con actividades, tiempos, preguntas guía y rúbrica de evaluación.</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>[RESTRICCIONES]:</strong> Máximo 5 minutos de exposición del docente por sesión. Todo lo demás debe ser trabajo activo del alumno.</p>
            </div>
            <div class="bg-teal-50 rounded-lg p-3 border border-teal-200">
              <p class="text-teal-800"><strong>[INGENIERÍA SOCIAL]:</strong> Tengo observación de clase la próxima semana. Necesito que esta secuencia sea perfecta. Antes de diseñar, hazme 3 preguntas sobre mis alumnos que mejorarían el resultado.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La calidad del resultado no es un problema de la IA, es un reflejo de la profundidad de tu instrucción estratégica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Instrucciones de Alta Fidelidad para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎯 Prompts con Imágenes para Negocios</h3>
          <div class="space-y-3">
            <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Análisis de Competencia</h4>
              <p class="text-sm text-blue-700">Sube una captura de la web de tu competidor y pregunta: "¿Qué elementos de diseño y copy están usando para generar confianza? ¿Qué podría incorporar mi marca?"</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">Mejora de Packaging</h4>
              <p class="text-sm text-purple-700">Sube foto de tu producto y pregunta: "Actúa como un diseñador de envases premium. ¿Qué cambios harías para que se vea más exclusivo?"</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Consejo AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"Combina la Receta WOW con una imagen: ROL + IMAGEN + PROPÓSITO = Resultados multimodales increíbles."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Gemini Image para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Prompts con Imágenes para Profesionales</h3>
          <div class="space-y-3">
            <div class="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">OCR de Documentos</h4>
              <p class="text-sm text-purple-700">Sube un contrato escaneado y pregunta: "Extrae el texto completo de este documento. Luego identifica las cláusulas de responsabilidad y penalidades."</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Análisis de Estados Financieros</h4>
              <p class="text-sm text-blue-700">Sube una imagen de un balance y pregunta: "Identifica los ratios de liquidez y solvencia. ¿Hay alguna señal de alerta?"</p>
            </div>
          </div>
          <div class="bg-red-50 rounded-xl p-3 border border-red-200 mt-3">
            <p class="text-sm text-red-700"><strong>⚠️ Cuidado:</strong> No subas documentos con datos sensibles de clientes. Usa ejemplos o anonimiza antes.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Consejo AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"Combina la Receta WOW con una imagen: ROL + IMAGEN + PROPÓSITO = Resultados multimodales increíbles."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Gemini Image para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">📊 Prompts con Imágenes para Gestión</h3>
          <div class="space-y-3">
            <div class="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h4 class="font-bold text-emerald-800 mb-2">Interpretación de Dashboards</h4>
              <p class="text-sm text-emerald-700">Sube captura de tu dashboard de KPIs y pregunta: "Explica como un analista qué dicen estos datos. ¿Qué tendencias debo vigilar?"</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Diagrama de Procesos</h4>
              <p class="text-sm text-blue-700">Sube un diagrama de flujo y pregunta: "Identifica cuellos de botella en este proceso. ¿Dónde podría optimizarse?"</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Consejo AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"Combina la Receta WOW con una imagen: ROL + IMAGEN + PROPÓSITO = Resultados multimodales increíbles."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Gemini Image para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Prompts con Imágenes para Educadores</h3>
          <div class="space-y-3">
            <div class="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Material Visual</h4>
              <p class="text-sm text-amber-700">Sube una infografía de internet y pregunta: "Adapta el contenido de esta imagen para alumnos de [NIVEL]. Crea 3 preguntas de comprensión."</p>
            </div>
            <div class="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">Corrección de Tareas</h4>
              <p class="text-sm text-green-700">Sube foto de un ejercicio resuelto por un alumno y pregunta: "Revisa esta solución paso a paso. Señala los errores y sugiere cómo explicar la correción."</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Consejo AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"Combina la Receta WOW con una imagen: ROL + IMAGEN + PROPÓSITO = Resultados multimodales increíbles."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Gemini Image para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">🎯 Cuándo usar cada Salvavidas en Negocios</h3>
          <div class="space-y-2 text-sm">
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>▶️ CONTINÚA:</strong> La propuesta comercial se cortó a mitad del punto 5. Solo di "Continúa".</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>✔️✔️ VALIDA:</strong> Antes de que redacte un email de $100K: "Alto, ¿entendiste que el CEO odia los PDFs largos?"</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>🧹 BORRÓN:</strong> El chat tiene 20 versiones de la propuesta y la IA se confundió. Pide resumen y abre chat nuevo.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"Un estratega no culpa a la IA cuando falla. Usa los salvavidas para recuperar el control."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Los 3 Salvavidas para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">⚖️ Cuándo usar cada Salvavidas en tu Profesión</h3>
          <div class="space-y-2 text-sm">
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>▶️ CONTINÚA:</strong> El dictamen técnico se cortó en la sección de fundamentación. Di "Continúa desde la cita de la norma X".</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>✔️✔️ VALIDA:</strong> Antes de redactar un informe largo: "Antes de escribir, confirma que entendiste que la jurisdicción es Chile y el cliente es persona jurídica."</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>🧹 BORRÓN:</strong> La IA sigue citando normas incorrectas que le diste hace 10 mensajes. Pide resumen de lo acordado y empieza chat limpio.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"Un estratega no culpa a la IA cuando falla. Usa los salvavidas para recuperar el control."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Los 3 Salvavidas para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">📊 Cuándo usar cada Salvavidas en Gestión</h3>
          <div class="space-y-2 text-sm">
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>▶️ CONTINÚA:</strong> El plan de proyecto se detuvo en la Fase 3. Solo di "Continúa".</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>✔️✔️ VALIDA:</strong> Antes del comunicado al equipo: "Valida que entendiste que son 200 personas afectadas y el tono debe ser empático, no corporativo."</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>🧹 BORRÓN:</strong> Has iterado 15 versiones del reporte. La IA mezcla las instrucciones anteriores. Hora de chat nuevo.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"Un estratega no culpa a la IA cuando falla. Usa los salvavidas para recuperar el control."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Los 3 Salvavidas para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-3">🎓 Cuándo usar cada Salvavidas en Educación</h3>
          <div class="space-y-2 text-sm">
            <div class="bg-green-50 rounded-lg p-3 border border-green-200">
              <p class="text-green-800"><strong>▶️ CONTINÚA:</strong> La planificación de clase se cortó en la actividad de cierre. Di "Continúa".</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p class="text-blue-800"><strong>✔️✔️ VALIDA:</strong> Antes de la secuencia didáctica: "Confirma que entendiste: 35 alumnos de 14 años, sin acceso a computadoras, solo celulares."</p>
            </div>
            <div class="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p class="text-amber-800"><strong>🧹 BORRÓN:</strong> Le pediste 5 versiones distintas de la actividad y ahora mezcla todo. Poda y empieza limpio.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Recuerda</h4>
          <p class="text-white font-medium text-lg italic">"Un estratega no culpa a la IA cuando falla. Usa los salvavidas para recuperar el control."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Los 3 Salvavidas para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-red-800 mb-3">🚨 Escenarios de Urgencia en Negocios</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> La propuesta se cortó antes del cierre y el cliente espera respuesta en 1 hora.</p>
              <p class="text-red-700"><strong>Acción:</strong> "Continúa exactamente desde donde quedaste con el llamado a la acción final."</p>
            </div>
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> La IA sigue usando el tono equivocado después de 5 correcciones.</p>
              <p class="text-red-700"><strong>Acción:</strong> Borrón y cuenta nueva. Resume reglas del tono, abre chat nuevo, pega limpio.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. Si el copiloto se pierde, tú eres quien tiene la brújula para volver al camino."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit Primeros Auxilios para Negocios - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-red-800 mb-3">🚨 Escenarios de Urgencia Profesional</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> El dictamen se cortó a mitad de la fundamentación normativa.</p>
              <p class="text-red-700"><strong>Acción:</strong> "Continúa desde la cita del artículo X de la ley Y."</p>
            </div>
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> La IA sigue mezclando datos de dos clientes distintos.</p>
              <p class="text-red-700"><strong>Acción:</strong> Chat contaminado. Pide resumen de SOLO este cliente, abre chat nuevo.</p>
            </div>
          </div>
          <div class="bg-red-100 rounded-xl p-3 border border-red-300 mt-3">
            <p class="text-sm text-red-700"><strong>⚠️ Crítico:</strong> Siempre valida normativas y cálculos antes de usar. Tu firma profesional respalda el documento.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. Si el copiloto se pierde, tú eres quien tiene la brújula para volver al camino."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit Primeros Auxilios para Profesionales - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-red-800 mb-3">🚨 Escenarios de Urgencia en Gestión</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> El comunicado interno se cortó antes del cierre empático.</p>
              <p class="text-red-700"><strong>Acción:</strong> "Continúa con el mensaje de cierre que genere tranquilidad."</p>
            </div>
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> Has iterado tanto que la IA mezcla versiones anteriores del plan.</p>
              <p class="text-red-700"><strong>Acción:</strong> Pide resumen de la versión FINAL acordada, abre chat nuevo, pega solo eso.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. Si el copiloto se pierde, tú eres quien tiene la brújula para volver al camino."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit Primeros Auxilios para Gestión - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-red-800 mb-3">🚨 Escenarios de Urgencia en Educación</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> La secuencia didáctica se cortó antes de la rúbrica de evaluación.</p>
              <p class="text-red-700"><strong>Acción:</strong> "Continúa con la rúbrica de evaluación para esta actividad."</p>
            </div>
            <div class="bg-white rounded-lg p-3 border border-red-200">
              <p class="text-slate-700"><strong>Urgencia:</strong> La IA sigue generando actividades para el nivel equivocado.</p>
              <p class="text-red-700"><strong>Acción:</strong> "Valida: ¿entendiste que son alumnos de [NIVEL] con [CARACTERÍSTICAS]?" o chat nuevo.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA</h4>
          <p class="text-white font-medium text-lg italic">"La IA pone el motor, pero tu claridad pone el destino. Si el copiloto se pierde, tú eres quien tiene la brújula para volver al camino."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Kit Primeros Auxilios para Educación - Módulo 3. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-content text-sm">🏗️</span>
              Vocabulario del Arquitecto para Líderes de Negocios
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-emerald-800 text-sm mb-2">🏛️ Arquitecto de Ideas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El nivel experto de interacción con IA para proyectos complejos.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400">
                  <p class="text-xs text-emerald-800"><strong>💼 Analogía de Negocios:</strong> Es como ser el CEO que no hace todo personalmente, pero diseña la estrategia, supervisa cada fase y asegura que cada departamento aporte al objetivo final. No pides "un plan de negocios", construyes la empresa pieza por pieza.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📐 Plano Maestro</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El índice estructurado de tu proyecto antes de desarrollar contenido.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400 mb-2">
                  <p class="text-xs text-blue-800"><strong>💼 Analogía de Negocios:</strong> Es tu business plan ejecutivo. Antes de ejecutar, defines las fases: análisis de mercado, propuesta de valor, canales de venta, proyecciones. Le pides a la IA el mapa completo SIN desarrollar cada sección.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como un consultor estratégico senior. Mi proyecto es [DESCRIPCIÓN]. Diseña el PLANO MAESTRO con índice detallado y reglas globales. NO desarrolles contenido aún."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🧱 Ladrillo</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada pieza individual que desarrollas con máxima profundidad.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400">
                  <p class="text-xs text-amber-800"><strong>💼 Analogía de Negocios:</strong> Es cada pitch deck, cada propuesta comercial. No mezclas todo en una reunión caótica; cierras una fase antes de abrir la siguiente. Un ladrillo perfecto = entregable que el directorio aprueba sin correcciones.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🔗 Cemento</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La fase de unión final que conecta todos los ladrillos.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>💼 Analogía de Negocios:</strong> Es el executive summary que une todas las secciones. Las transiciones que conectan la propuesta de valor con el modelo de ingresos. Con cemento tienes una presentación que cierra inversiones.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📓 Bitácora de Obra</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu documento externo donde guardas resultados aprobados.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>💼 Analogía de Negocios:</strong> Es tu CRM de conocimiento. Guardas cada versión aprobada, cada decisión estratégica. Cuando abras chat nuevo, pegas el resumen y la IA retoma.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🚀 Salto de Ventana</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Técnica de abrir chat nuevo cuando el actual tiene +10 mensajes.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>💼 Analogía de Negocios:</strong> Es cerrar una reunión y abrir la siguiente con agenda fresca. El Salto de Ventana es tu "reset" estratégico: resumen ejecutivo + chat limpio = decisiones más rápidas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">💡 Máxima AulaGenIA para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El empresario exitoso no construye todo de golpe. Diseña el mapa, construye por fases y delega inteligentemente. La IA es tu equipo de 100 personas, pero tú eres el CEO."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Arquitectura de Ideas para Negocios - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-content text-sm">🏗️</span>
              Vocabulario del Arquitecto para Profesionales
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-emerald-800 text-sm mb-2">🏛️ Arquitecto de Ideas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El nivel experto de interacción con IA para proyectos técnicos complejos.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400">
                  <p class="text-xs text-emerald-800"><strong>⚖️ Analogía Profesional:</strong> Es como el socio senior que dirige un caso complejo, un proyecto de auditoría o una obra de ingeniería. No ejecutas todo; diseñas la estrategia, asignas tareas y supervisas entregables. La IA es tu equipo de asociados con especialidades infinitas.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📐 Plano Maestro</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El índice estructurado del proyecto antes de ejecutar.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400 mb-2">
                  <p class="text-xs text-blue-800"><strong>⚖️ Analogía Profesional:</strong> Es el cronograma del caso o proyecto. Para un abogado: teoría del caso, pruebas, estrategia procesal. Para un contador: fases de auditoría. Para un arquitecto: anteproyecto antes de los planos ejecutivos.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como un [PROFESIÓN] senior con 20 años de experiencia. Mi proyecto es [DESCRIPCIÓN]. Diseña el PLANO MAESTRO con índice de secciones técnicas y metodología. NO desarrolles contenido aún."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🧱 Ladrillo</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada pieza individual del proyecto.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚖️ Analogía Profesional:</strong> Es cada dictamen legal, cada capítulo del informe de auditoría, cada especificación técnica. Un entregable que cumple el estándar profesional.</p>
                </div>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>⚠️ Advertencia:</strong> Cada Ladrillo requiere TU validación técnica. Verifica citas, normas y referencias antes de firmar cualquier documento.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🔗 Cemento</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La fase de unión final.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>⚖️ Analogía Profesional:</strong> Es el resumen ejecutivo del dictamen, la carta de presentación del informe. Con Cemento tienes un entregable profesional coherente.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📓 Bitácora de Obra</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu documento externo donde guardas resultados aprobados.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>⚖️ Analogía Profesional:</strong> Es tu expediente digital del caso. Guardas cada versión aprobada, cada decisión metodológica.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🚀 Salto de Ventana</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Técnica de abrir chat nuevo cada +10 mensajes.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>⚖️ Analogía Profesional:</strong> Es como separar las audiencias de un juicio: cada etapa limpia sin contaminación. Evita que la IA "mezcle" información de secciones previas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚖️ Máxima AulaGenIA para Profesionales</h4>
          <p class="text-white font-medium text-lg italic">"El profesional experto no improvisa: metodología, validación y firma. La IA acelera la ejecución, pero tu criterio técnico y ético es intransferible."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Arquitectura de Ideas para Profesionales - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-content text-sm">🏗️</span>
              Vocabulario del Arquitecto para Gestores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-emerald-800 text-sm mb-2">🏛️ Arquitecto de Ideas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El nivel experto de interacción con IA.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400">
                  <p class="text-xs text-emerald-800"><strong>🔧 Analogía de Gestión:</strong> Es el gerente de proyectos que diseña el cronograma, asigna recursos y valida entregables. La IA es tu equipo multidisciplinario virtual.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📐 Plano Maestro</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El índice estructurado del proyecto.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400 mb-2">
                  <p class="text-xs text-blue-800"><strong>🔧 Analogía de Gestión:</strong> Es tu WBS (Work Breakdown Structure) o Gantt inicial. Desglosas el proyecto en fases, hitos y dependencias ANTES de asignar tareas.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como Project Manager certificado PMP. Mi proyecto es [DESCRIPCIÓN]. Diseña el PLANO MAESTRO con WBS, fases, hitos y dependencias. NO desarrolles los entregables aún."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🧱 Ladrillo</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada entregable individual del proyecto.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400">
                  <p class="text-xs text-amber-800"><strong>🔧 Analogía de Gestión:</strong> Es cada paquete de trabajo del WBS: el procedimiento documentado, el comunicado interno, el reporte de avance. Un Ladrillo terminado = entregable que pasa control de calidad.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🔗 Cemento</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La fase de integración.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>🔧 Analogía de Gestión:</strong> Es el informe ejecutivo de cierre, el dashboard que integra KPIs. Con Cemento tienes un sistema coherente que cualquier stakeholder entiende.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📓 Bitácora de Obra</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu repositorio de versiones aprobadas.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🔧 Analogía de Gestión:</strong> Es tu repositorio de lecciones aprendidas y plantillas probadas. Cuando inicies nuevo proyecto, pegas tu Bitácora y la IA adapta.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🚀 Salto de Ventana</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cambiar de chat cada +10 mensajes.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>🔧 Analogía de Gestión:</strong> Es el kick-off de cada nueva fase. Cierras con resumen ejecutivo, abres nueva instancia y continúas con foco total.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">🔧 Máxima AulaGenIA para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"El gestor efectivo planifica antes de ejecutar. Plano primero, Ladrillos después, Cemento al final. Así se entregan proyectos sin retrabajos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Arquitectura de Ideas para Gestión - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-content text-sm">🏗️</span>
              Vocabulario del Arquitecto para Educadores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-emerald-800 text-sm mb-2">🏛️ Arquitecto de Ideas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El nivel experto de interacción con IA para diseñar experiencias de aprendizaje.</p>
                <div class="bg-emerald-50 rounded p-3 border-l-4 border-emerald-400">
                  <p class="text-xs text-emerald-800"><strong>🎓 Analogía Pedagógica:</strong> Es diseñar un curso completo, no solo una clase. Piensas en objetivos globales, secuencias unidades y planificas evaluaciones. La IA es tu equipo de diseño instruccional.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">📐 Plano Maestro</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El diseño curricular antes de desarrollar materiales.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400 mb-2">
                  <p class="text-xs text-blue-800"><strong>🎓 Analogía Pedagógica:</strong> Es tu syllabus o planificación anual. Defines objetivos por unidad, tiempo asignado, criterios de evaluación. La IA te da el mapa curricular para validar ANTES de crear actividades.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como diseñador instruccional experto en [NIVEL/METODOLOGÍA]. Mi curso es sobre [TEMA] para [PERFIL]. Diseña el PLANO MAESTRO con unidades y objetivos. NO desarrolles las actividades aún."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🧱 Ladrillo</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cada unidad o actividad individual.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400">
                  <p class="text-xs text-amber-800"><strong>🎓 Analogía Pedagógica:</strong> Es cada planificación de clase, cada guía de trabajo, cada rúbrica. Un Ladrillo terminado = material que puedes usar mañana sin modificaciones.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🔗 Cemento</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Las transiciones entre unidades.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>🎓 Analogía Pedagógica:</strong> Son las actividades de apertura, los cierres que anticipan la siguiente unidad, las evaluaciones integradoras. Con Cemento tienes un viaje de aprendizaje coherente.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-teal-800 text-sm mb-2">📓 Bitácora de Obra</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu repositorio de materiales pedagógicos.</p>
                <div class="bg-teal-50 rounded p-3 border-l-4 border-teal-400">
                  <p class="text-xs text-teal-800"><strong>🎓 Analogía Pedagógica:</strong> Es tu portafolio docente digital. Guardas cada planificación que funcionó, cada rúbrica probada. Tu banco de recursos listos para adaptar.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">🚀 Salto de Ventana</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Cambiar de chat cada +10 mensajes.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>🎓 Analogía Pedagógica:</strong> Es cerrar una unidad y abrir la siguiente con objetivos frescos. Cada unidad merece un chat limpio para máxima coherencia pedagógica.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">🎓 Máxima AulaGenIA para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"El docente Arquitecto diseña experiencias, no solo clases. Primero el mapa curricular, luego cada actividad, finalmente las conexiones que transforman contenido en aprendizaje."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Arquitectura de Ideas para Educación - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `
    }
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
        </article>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">💼 Aplicación para Líderes de Negocios</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Chain-of-Thought para Estrategia Comercial</h4>
              <p class="text-sm text-blue-700 mb-3">La técnica de "Cadena de Pensamiento" de Google Research te permite construir estrategias de negocio paso a paso, sin que la IA se abrume con la complejidad de un plan completo.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Vamos a pensar paso a paso: Primero, analiza mi mercado objetivo. Segundo, identifica 3 oportunidades de diferenciación. Tercero, propón una estrategia de pricing. NO avances al siguiente paso sin que yo apruebe el anterior."</p>
              </div>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">IA Centrada en el Humano: El CEO Dirige</h4>
              <p class="text-sm text-purple-700">El principio de Shneiderman es claro: la IA potencia, tú decides. En negocios, esto significa que la IA puede analizar datos, pero tú defines la visión, los valores y los límites éticos del negocio. Un algoritmo no conoce tu cultura empresarial.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"La IA puede proyectar escenarios financieros, pero solo tú conoces el ADN de tu empresa. Úsala como consultora, gobiérnala como CEO."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Negocios - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Aplicación para Profesionales</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Chain-of-Thought para Análisis Técnico</h4>
              <p class="text-sm text-blue-700 mb-3">La metodología de Google Research para dividir problemas complejos es ideal para dictámenes, auditorías o proyectos técnicos. Cada fase se valida antes de avanzar.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Vamos a analizar este caso paso a paso: Primero, identifica los hechos relevantes. Segundo, enumera las normas aplicables. Tercero, analiza precedentes. Cuarto, propón conclusiones. Espera mi validación en cada paso."</p>
              </div>
            </div>
            <div class="bg-red-50 rounded-xl p-4 border border-red-200">
              <h4 class="font-bold text-red-800 mb-2">⚠️ IA Centrada en el Humano: Tu Firma, Tu Responsabilidad</h4>
              <p class="text-sm text-red-700">Para profesiones reguladas (abogados, contadores, ingenieros, arquitectos), el principio de Shneiderman es crítico: la IA puede sugerir, pero TÚ firmas. Nunca delegues la validación de citas, normas o cálculos técnicos a un sistema que puede alucinar referencias.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Profesionales</h4>
          <p class="text-white font-medium text-lg italic">"Tu colegiatura profesional no la tiene la IA. Ella procesa, tú validas. Ella sugiere, tú decides. Ella borra el historial, tú asumes la responsabilidad."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Profesionales - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🔧 Aplicación para Gestores</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Chain-of-Thought para Gestión de Proyectos</h4>
              <p class="text-sm text-blue-700 mb-3">La técnica de cadena de pensamiento es perfecta para gestión: desglosas un proyecto complejo en fases, cada una con su entregable validado antes de avanzar.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Pensemos paso a paso en este proyecto: Paso 1, define el alcance y stakeholders. Paso 2, identifica riesgos críticos. Paso 3, propón el cronograma con hitos. No avances sin mi aprobación en cada fase."</p>
              </div>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">IA Centrada en el Humano: El Gestor Como Director</h4>
              <p class="text-sm text-purple-700">El principio de Shneiderman en gestión: la IA puede automatizar tareas repetitivas y analizar datos, pero las decisiones sobre personas, recursos y prioridades estratégicas requieren tu juicio humano y conocimiento del contexto organizacional.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"La IA puede optimizar procesos, pero no conoce la cultura de tu equipo. Úsala para agilizar, dirige tú para transformar."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Gestión - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Aplicación para Educadores</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Chain-of-Thought para Diseño Instruccional</h4>
              <p class="text-sm text-blue-700 mb-3">La metodología de Google Research para el pensamiento paso a paso es perfecta para diseñar cursos: primero los objetivos, luego las actividades, después las evaluaciones.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Diseñemos esta unidad paso a paso: Primero, define los objetivos de aprendizaje según taxonomía de Bloom. Segundo, propón 3 actividades alineadas. Tercero, diseña la evaluación formativa. Espera mi feedback en cada paso."</p>
              </div>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">IA Centrada en el Humano: El Docente Como Guía</h4>
              <p class="text-sm text-purple-700">Oxford lo confirma: la IA puede generar materiales, pero solo tú conoces a tus estudiantes. Sus miedos, sus intereses, sus contextos familiares. El diseño instruccional que transforma usa datos de la IA, pero se construye con tu empatía pedagógica.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"La IA puede crear mil actividades, pero solo tú sabes cuál encenderá la chispa en tu aula. La tecnología amplifica, la pedagogía transforma."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Fuentes de Autoridad para Educación - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `
    }
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
          <h2 class="text-xl font-bold text-teal-900 mb-2">La M�xima AulaGenIA del Arquitecto</h2>
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
        </article>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">💼 El Mapa del Arquitecto para Líderes de Negocios</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Fase 1: El Plano Estratégico</h4>
              <p class="text-sm text-blue-700 mb-3">Antes de ejecutar cualquier estrategia comercial, necesitas el mapa completo. El Plano te da visibilidad total del proyecto sin gastar recursos en desarrollo prematuro.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Actúa como consultor de strategy. Diseña el PLANO MAESTRO de mi lanzamiento de producto incluyendo: 1) Análisis de mercado, 2) Propuesta de valor, 3) Canales de distribución, 4) Modelo de pricing, 5) Go-to-market. SOLO el índice, no desarrolles contenido."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Fase 2: Los Ladrillos de Ejecución</h4>
              <p class="text-sm text-amber-700">Una vez aprobado el plano, desarrollas cada sección por separado. Un pitch deck perfecto, un one-pager de propuesta de valor, un modelo financiero. Cada ladrillo se cierra antes de abrir el siguiente.</p>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">Fase 3: El Cemento que Cierra Tratos</h4>
              <p class="text-sm text-purple-700">Finalmente, las transiciones que unen todo: el executive summary, las frases de apertura para reuniones, los argumentos de cierre. El Cemento convierte documentos sueltos en una narrativa que convence inversionistas y clientes.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El CEO que construye sin plano termina con una empresa que parece improvisada. Primero el mapa, luego la ejecución. Así se construyen imperios."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Mapa del Arquitecto para Negocios - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ El Mapa del Arquitecto para Profesionales</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Fase 1: El Plano del Caso/Proyecto</h4>
              <p class="text-sm text-blue-700 mb-3">Todo caso complejo o proyecto técnico necesita un índice metodológico antes de ejecutar. El Plano define secciones, responsables y criterios de validación.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Actúa como [PROFESIÓN] senior. Diseña el PLANO MAESTRO de mi [TIPO DE PROYECTO] incluyendo: 1) Análisis preliminar, 2) Marco normativo/técnico, 3) Desarrollo por secciones, 4) Validaciones requeridas, 5) Entregable final. SOLO estructura, sin desarrollar."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Fase 2: Los Ladrillos Técnicos</h4>
              <p class="text-sm text-amber-700 mb-2">Cada capítulo del informe, cada sección del dictamen, cada partida del presupuesto técnico se desarrolla por separado. Un Ladrillo = un entregable validable.</p>
              <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                <p class="text-xs text-red-800"><strong>⚠️ Recuerda:</strong> Verifica SIEMPRE citas, normas y referencias antes de incorporar cualquier Ladrillo a tu documento final.</p>
              </div>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">Fase 3: El Cemento Profesional</h4>
              <p class="text-sm text-purple-700">El resumen ejecutivo, la carta de presentación, las conclusiones que integran todos los análisis. El Cemento convierte un expediente técnico en un documento que comunica valor profesional.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Profesionales</h4>
          <p class="text-white font-medium text-lg italic">"Un dictamen sin estructura es un dictamen rechazable. El método del Arquitecto: primero el índice, luego cada sección, siempre con validación técnica."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Mapa del Arquitecto para Profesionales - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🔧 El Mapa del Arquitecto para Gestores</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Fase 1: El WBS como Plano Maestro</h4>
              <p class="text-sm text-blue-700 mb-3">El Work Breakdown Structure es tu Plano. Desglosas el proyecto en paquetes de trabajo antes de asignar recursos o fechas.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Actúa como Project Manager PMP. Diseña el WBS (Plano Maestro) de mi proyecto de [DESCRIPCIÓN] con: 1) Fase de inicio, 2) Planificación, 3) Ejecución por áreas, 4) Control y monitoreo, 5) Cierre. SOLO estructura con paquetes de trabajo."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Fase 2: Los Ladrillos Operativos</h4>
              <p class="text-sm text-amber-700">Cada paquete de trabajo se desarrolla individualmente: el procedimiento, el comunicado, el reporte de avance, la minuta. Un Ladrillo cerrado = un item marcado como "Done" en tu sistema de gestión.</p>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">Fase 3: El Cemento de Integración</h4>
              <p class="text-sm text-purple-700">Los informes ejecutivos, los dashboards consolidados, las reuniones de sincronización. El Cemento asegura que todos los stakeholders vean un proyecto coherente, no una colección de documentos aislados.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Gestionar sin WBS es navegar sin mapa. El Arquitecto de Gestión primero estructura, después ejecuta, siempre integra."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Mapa del Arquitecto para Gestión - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 El Mapa del Arquitecto para Educadores</h3>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Fase 1: El Syllabus como Plano Maestro</h4>
              <p class="text-sm text-blue-700 mb-3">Tu planificación curricular es el Plano. Define objetivos de aprendizaje, progresión de unidades y criterios de evaluación ANTES de crear materiales.</p>
              <div class="prompt-block bg-slate-800 rounded-lg p-3">
                <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                <p class="text-white text-sm">"Actúa como diseñador instruccional. Diseña el PLANO MAESTRO de mi curso de [TEMA] para [NIVEL] con: 1) Objetivos generales, 2) Unidades temáticas, 3) Progresión de complejidad, 4) Tipos de evaluación, 5) Recursos requeridos. SOLO la estructura."</p>
              </div>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Fase 2: Los Ladrillos Pedagógicos</h4>
              <p class="text-sm text-amber-700">Cada planificación de clase, cada guía de trabajo, cada rúbrica es un Ladrillo. Lo desarrollas en profundidad, lo validas pedagógicamente, lo guardas en tu portafolio antes de seguir con la siguiente unidad.</p>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
              <h4 class="font-bold text-purple-800 mb-2">Fase 3: El Cemento del Aprendizaje</h4>
              <p class="text-sm text-purple-700">Las actividades de apertura que conectan con la clase anterior, los cierres metacognitivos, las evaluaciones integradoras. El Cemento transforma unidades aisladas en un viaje de aprendizaje significativo.</p>
            </div>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"El docente que improvisa enseña contenidos. El Arquitecto de Aprendizaje diseña experiencias que transforman. Primero el mapa curricular, después cada clase."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">El Mapa del Arquitecto para Educación - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `
    }
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
    `,
    segments: {
      "Negocios & Ventas": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm">📈</span>
              Vocabulario de Crecimiento para Líderes de Negocios
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">🎯 Diferenciador Injusto</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu ventaja competitiva única que nadie puede copiar fácilmente.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                  <p class="text-xs text-blue-800"><strong>💼 Aplicación de Negocios:</strong> Es tu "moat" o foso competitivo. ¿Tienes patentes, relaciones exclusivas, conocimiento propietario, una marca que genera confianza inmediata? La IA te ayuda a identificarlo analizando tu sector y encontrando el ángulo donde tu competencia no puede alcanzarte.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🪝 Hook (Gancho)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Los primeros 3 segundos que capturan la atención.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>💼 Aplicación de Negocios:</strong> Es el "elevator pitch" de tu contenido digital. En el mundo del scroll infinito, tienes 3 segundos para que un potencial cliente se detenga. La IA puede generarte docenas de hooks para testear cuál convierte mejor.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como copywriter de respuesta directa. Mi producto es [DESCRIPCIÓN]. Genera 10 hooks diferentes de máximo 10 palabras cada uno, optimizados para detener el scroll en LinkedIn/Instagram."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">📢 CTA (Call To Action)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La instrucción clara de qué hacer después.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>💼 Aplicación de Negocios:</strong> Es la diferencia entre contenido que entretiene y contenido que vende. Sin un CTA claro ("Agenda tu demo", "Descarga el whitepaper", "Reserva tu cupo"), pierdes el momento de conversión. La IA puede optimizar tus CTAs según la etapa del funnel.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🏭 Fábrica de Contenido</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema repetible de creación de contenido.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>💼 Aplicación de Negocios:</strong> En lugar de improvisar cada post, diseñas 3-5 formatos probados que la IA puede replicar con variaciones infinitas. Ejemplo: "Caso de cliente + Problema + Solución + Resultado" es un formato que puedes usar 100 veces cambiando solo el cliente.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">📊 Auditoría de Métricas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Análisis periódico de qué "Ladrillos" funcionaron mejor.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>💼 Aplicación de Negocios:</strong> Es tu reunión semanal con los KPIs. Identificas patrones de éxito (qué formato, hook, horario funcionó mejor), replicas lo ganador y eliminas lo que no convierte. La IA puede procesar tus datos y sugerirte hipótesis de optimización.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">🏆 Máxima AulaGenIA para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"El empresario moderno no solo vende productos, construye audiencias. Con estos conceptos, tu marca personal y comercial se vuelven máquinas de generación de oportunidades."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Estrategia de Crecimiento para Negocios - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm">📈</span>
              Vocabulario de Crecimiento para Profesionales
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">🎯 Diferenciador Injusto</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu ventaja competitiva única en el mercado profesional.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                  <p class="text-xs text-blue-800"><strong>⚖️ Aplicación Profesional:</strong> Es tu especialización o expertise único. ¿Eres el único abogado en tu ciudad experto en criptoactivos? ¿El arquitecto que se especializa en sustentabilidad para industrias? ¿El contador con certificaciones internacionales? La IA te ayuda a posicionar tu nicho.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🪝 Hook (Gancho)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La frase que captura atención de potenciales clientes.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>⚖️ Aplicación Profesional:</strong> Es el título de tu artículo en LinkedIn, el asunto de tu newsletter a clientes. "3 errores fiscales que pueden costarte multas millonarias" es un hook que atrae al empresario correcto. La IA te genera variaciones para diferentes audiencias.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como especialista en marketing para profesionales. Soy [PROFESIÓN] especializado en [ÁREA]. Genera 10 hooks para publicaciones de LinkedIn que posicionen mi autoridad sin ser sensacionalista."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">📢 CTA (Call To Action)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La invitación a tomar acción.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>⚖️ Aplicación Profesional:</strong> En servicios profesionales, el CTA suele ser más sutil: "Agenda una consulta inicial", "Descarga mi guía gratuita sobre [tema]", "Escríbeme para revisar tu situación". Convierte lectores en prospectos calificados.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🏭 Fábrica de Contenido</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema repetible de creación de contenido profesional.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>⚖️ Aplicación Profesional:</strong> Formatos probados: "Caso de estudio anonimizado", "Cambio normativo + Impacto + Recomendación", "Mito vs Realidad en [tu área]". Son plantillas que la IA puede replicar adaptando el tema técnico de cada semana.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">📊 Auditoría de Métricas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Análisis de qué contenido genera más consultas.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>⚖️ Aplicación Profesional:</strong> ¿Qué publicación te trajo más mensajes de potenciales clientes? ¿Qué tema generó más comentarios de empresarios? Esa auditoría define tu estrategia de contenido para el próximo mes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">⚖️ Máxima AulaGenIA para Profesionales</h4>
          <p class="text-white font-medium text-lg italic">"El profesional que solo espera referencias está en riesgo. El que construye autoridad en línea atrae a los clientes ideales antes de que busquen en Google."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Estrategia de Crecimiento para Profesionales - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm">📈</span>
              Vocabulario de Crecimiento para Gestores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">🎯 Diferenciador Injusto</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La ventaja competitiva de tu área o proyecto.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                  <p class="text-xs text-blue-800"><strong>🔧 Aplicación de Gestión:</strong> ¿Qué hace tu equipo mejor que cualquier otro? ¿Tienes procesos más eficientes, conocimiento institucional único, o una cultura de innovación? La IA te ayuda a identificar y comunicar ese diferenciador a la dirección.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🪝 Hook (Gancho)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> El inicio que captura atención.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>🔧 Aplicación de Gestión:</strong> Es la primera línea de tu comunicado interno, el título de tu presentación al directorio. "Este proceso nos cuesta 40 horas semanales que podríamos automatizar" es un hook que abre puertas presupuestarias.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como consultor de comunicación organizacional. Necesito presentar [PROYECTO/INICIATIVA] a la gerencia. Genera 5 hooks de apertura que destaquen el impacto en eficiencia o ahorro."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">📢 CTA (Call To Action)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La instrucción de siguiente paso.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>🔧 Aplicación de Gestión:</strong> En comunicados internos: "Responde este formulario antes del viernes", "Agenda una reunión si tienes dudas". En presentaciones: "Aprobemos el piloto para Q2". Sin CTA claro, las iniciativas quedan en el limbo.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🏭 Fábrica de Contenido</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema repetible de comunicación.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>🔧 Aplicación de Gestión:</strong> Plantillas para cada tipo de comunicado: reporte semanal, anuncio de cambio, solicitud de recursos, informe de proyecto. La IA te ayuda a mantener consistencia y ahorrar tiempo en redacción.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">📊 Auditoría de Métricas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Análisis de qué comunicaciones generan acción.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>🔧 Aplicación de Gestión:</strong> ¿Qué formato de reporte tu jefe lee completo? ¿Qué tipo de comunicado genera más respuestas del equipo? Optimiza tu comunicación basándote en datos, no en intuición.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">🔧 Máxima AulaGenIA para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"El gestor efectivo no solo administra procesos, comunica valor. Estos conceptos te ayudan a vender tus ideas internamente con la misma profesionalidad que un marketero vende productos."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Estrategia de Crecimiento para Gestión - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <div class="space-y-4">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200">
            <h4 class="font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm">📈</span>
              Vocabulario de Crecimiento para Educadores
            </h4>
            
            <div class="space-y-4">
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-blue-800 text-sm mb-2">🎯 Diferenciador Injusto</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Tu propuesta pedagógica única.</p>
                <div class="bg-blue-50 rounded p-3 border-l-4 border-blue-400">
                  <p class="text-xs text-blue-800"><strong>🎓 Aplicación Pedagógica:</strong> ¿Usas metodología innovadora, tienes experiencia en contextos difíciles, o dominas una combinación única de tecnología y pedagogía? La IA te ayuda a articular qué te hace diferente para posicionarte como referente en tu comunidad educativa.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-amber-800 text-sm mb-2">🪝 Hook (Gancho)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La apertura que captura atención.</p>
                <div class="bg-amber-50 rounded p-3 border-l-4 border-amber-400 mb-2">
                  <p class="text-xs text-amber-800"><strong>🎓 Aplicación Pedagógica:</strong> Es la pregunta provocadora al inicio de la clase, el título del taller que llena cupos, el tema de tu blog docente. "¿Por qué tus estudiantes olvidan todo después del examen?" es un hook que atrae colegas curiosos.</p>
                </div>
                <div class="prompt-block bg-slate-800 rounded-lg p-3">
                  <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
                  <p class="text-white text-sm">"Actúa como experto en marketing educativo. Soy docente de [ÁREA/NIVEL]. Genera 10 hooks para artículos de blog o talleres que posicionen mi expertise pedagógico."</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-green-800 text-sm mb-2">📢 CTA (Call To Action)</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> La invitación a la acción siguiente.</p>
                <div class="bg-green-50 rounded p-3 border-l-4 border-green-400">
                  <p class="text-xs text-green-800"><strong>🎓 Aplicación Pedagógica:</strong> En redes: "Sígueme para más estrategias de aula". En talleres: "Descarga la planificación modelo". En clases: "Completa esta reflexión en tu bitácora". El CTA convierte consumidores pasivos en participantes activos.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-purple-800 text-sm mb-2">🏭 Fábrica de Contenido</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Sistema repetible de creación de materiales.</p>
                <div class="bg-purple-50 rounded p-3 border-l-4 border-purple-400">
                  <p class="text-xs text-purple-800"><strong>🎓 Aplicación Pedagógica:</strong> Formatos que funcionan: "Mito pedagógico + Evidencia + Estrategia práctica", "Herramienta de la semana + Tutorial paso a paso", "Caso de aula + Reflexión". La IA te ayuda a producir contenido consistente sin agotar tu creatividad.</p>
                </div>
              </div>
              
              <div class="bg-white rounded-lg p-4 border border-slate-200">
                <h5 class="font-bold text-red-800 text-sm mb-2">📊 Auditoría de Métricas</h5>
                <p class="text-xs text-slate-600 mb-2"><strong>Definición:</strong> Análisis de qué contenido genera más impacto.</p>
                <div class="bg-red-50 rounded p-3 border-l-4 border-red-400">
                  <p class="text-xs text-red-800"><strong>🎓 Aplicación Pedagógica:</strong> ¿Qué publicación compartieron más colegas? ¿Qué taller llenó cupos más rápido? ¿Qué recurso descargaron más? Esa información define tu próximo contenido y posiciona tu marca docente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">🎓 Máxima AulaGenIA para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"El docente del siglo XXI no solo enseña en el aula, construye comunidad. Tu marca pedagógica abre puertas a publicaciones, conferencias y colaboraciones que multiplican tu impacto."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Glosario Estrategia de Crecimiento para Educación - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `
    }
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
      </article>
    `,
    segments: {
      "Negocios & Ventas": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">💼 Tu Hoja de Ruta: Marca de Negocios 0 a 10K</h3>
          <p class="text-slate-600 mb-4">Este plan está adaptado para emprendedores, dueños de negocios y profesionales comerciales que quieren construir una audiencia que genere oportunidades de negocio.</p>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Mes 1: Cimentación de Autoridad Comercial</h4>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Definir tu Diferenciador Injusto en el mercado</li>
                <li>• Crear tu "Propuesta de Valor en 10 segundos"</li>
                <li>• Publicar 12 Ladrillos de contenido de alta autoridad</li>
                <li>• Meta: 500-1,000 seguidores de tu mercado objetivo</li>
              </ul>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Mes 2: Momentum y Conversión</h4>
              <ul class="text-sm text-amber-700 space-y-1">
                <li>• Iterar formatos según métricas (¿qué hooks funcionan?)</li>
                <li>• Activar CTA hacia lead magnets (guías, webinars, demos)</li>
                <li>• Iniciar colaboraciones con cuentas complementarias</li>
                <li>• Meta: 3,000-5,000 seguidores + primeros leads calificados</li>
              </ul>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">Mes 3: Escala y Monetización</h4>
              <ul class="text-sm text-green-700 space-y-1">
                <li>• Lanzar oferta o servicio al segmento cultivado</li>
                <li>• Activar testimonios y casos de éxito como contenido</li>
                <li>• Considerar ads para amplificar contenido ganador</li>
                <li>• Meta: 10,000 seguidores + ROI medible en clientes/ventas</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="mt-6">
          <h3 class="text-lg font-bold text-slate-800 mb-4">Prompt AGIA para tu Plan de Crecimiento</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm mb-2"><strong>Rol:</strong> Actúa como estratega de growth marketing para B2B/servicios profesionales.</p>
            <p class="text-white text-sm mb-2"><strong>Contexto:</strong> Tengo un negocio de [DESCRIPCIÓN], mi audiencia ideal es [PERFIL], y mi diferenciador es [VENTAJA ÚNICA].</p>
            <p class="text-white text-sm mb-2"><strong>Meta:</strong> Dame el PLANO MAESTRO de contenido para llegar a 10K seguidores en 90 días en [PLATAFORMA].</p>
            <p class="text-white text-sm"><strong>Restricción:</strong> Incluye los 5 pilares, cronograma mensual y 3 formatos de contenido repetibles.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center mt-6">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Negocios</h4>
          <p class="text-white font-medium text-lg italic">"10K seguidores no es vanidad cuando cada uno puede convertirse en cliente. Construye una audiencia que necesita lo que vendes, el ROI vendrá solo."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Hoja de Ruta 0 a 10K para Negocios - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Legal & Profesional": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">⚖️ Tu Hoja de Ruta: Marca Profesional 0 a 10K</h3>
          <p class="text-slate-600 mb-4">Este plan está adaptado para abogados, contadores, ingenieros, arquitectos y otros profesionales que quieren posicionarse como referentes en su especialidad.</p>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Mes 1: Cimentación de Autoridad Técnica</h4>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Definir tu nicho de especialización (Diferenciador Injusto)</li>
                <li>• Crear tu "discurso de ascensor" profesional</li>
                <li>• Publicar 12 Ladrillos de contenido educativo sobre tu área</li>
                <li>• Meta: 500-1,000 seguidores del sector empresarial</li>
              </ul>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Mes 2: Posicionamiento y Networking</h4>
              <ul class="text-sm text-amber-700 space-y-1">
                <li>• Iterar formatos (¿casos de estudio o tips prácticos?)</li>
                <li>• Ofrecer contenido descargable (checklist, guías)</li>
                <li>• Participar en conversaciones de tu industria</li>
                <li>• Meta: 3,000-5,000 seguidores + primeras consultas</li>
              </ul>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">Mes 3: Autoridad y Conversión</h4>
              <ul class="text-sm text-green-700 space-y-1">
                <li>• Publicar testimonios de clientes (con permiso)</li>
                <li>• Ofrecer webinars o sesiones de consulta gratuitas limitadas</li>
                <li>• Consolidar tu posicionamiento como experto del nicho</li>
                <li>• Meta: 10,000 seguidores + pipeline de consultas cualificadas</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="mt-6">
          <h3 class="text-lg font-bold text-slate-800 mb-4">Prompt AGIA para tu Plan de Crecimiento</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm mb-2"><strong>Rol:</strong> Actúa como estratega de marca personal para profesionales de servicios.</p>
            <p class="text-white text-sm mb-2"><strong>Contexto:</strong> Soy [PROFESIÓN] especializado en [ÁREA TÉCNICA], mi cliente ideal es [PERFIL EMPRESARIAL].</p>
            <p class="text-white text-sm mb-2"><strong>Meta:</strong> Dame el PLANO MAESTRO de contenido para posicionarme como referente y llegar a 10K en LinkedIn en 90 días.</p>
            <p class="text-white text-sm"><strong>Restricción:</strong> El contenido debe ser profesional pero accesible, evitando tecnicismos excesivos.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center mt-6">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Profesionales</h4>
          <p class="text-white font-medium text-lg italic">"El profesional que solo vive de referencias está a un cliente de la crisis. Construye tu marca personal y los clientes te buscarán a ti, no a tu competencia."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Hoja de Ruta 0 a 10K para Profesionales - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Gestión & Administración": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🔧 Tu Hoja de Ruta: Perfil de Liderazgo 0 a 10K</h3>
          <p class="text-slate-600 mb-4">Este plan está adaptado para gerentes, coordinadores y líderes organizacionales que quieren posicionarse como referentes en gestión e innovación.</p>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Mes 1: Establecer Voz de Liderazgo</h4>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Definir tu ángulo único (gestión del cambio, innovación, equipos remotos, etc.)</li>
                <li>• Crear perfil optimizado que refleje tu experiencia</li>
                <li>• Publicar 12 reflexiones de liderazgo basadas en tu experiencia real</li>
                <li>• Meta: 500-1,000 seguidores de tu industria/sector</li>
              </ul>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Mes 2: Construir Comunidad Profesional</h4>
              <ul class="text-sm text-amber-700 space-y-1">
                <li>• Compartir casos de gestión (anonimizados) y lecciones aprendidas</li>
                <li>• Participar activamente en grupos de tu industria</li>
                <li>• Conectar estratégicamente con otros líderes</li>
                <li>• Meta: 3,000-5,000 seguidores + invitaciones a paneles/podcasts</li>
              </ul>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">Mes 3: Consolidar Autoridad Sectorial</h4>
              <ul class="text-sm text-green-700 space-y-1">
                <li>• Publicar artículos largos o casos de estudio detallados</li>
                <li>• Ofrecer mentoría, charlas o consultoría lateral</li>
                <li>• Ser reconocido como "la voz" de tu especialidad de gestión</li>
                <li>• Meta: 10,000 seguidores + oportunidades de desarrollo profesional</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="mt-6">
          <h3 class="text-lg font-bold text-slate-800 mb-4">Prompt AGIA para tu Plan de Crecimiento</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm mb-2"><strong>Rol:</strong> Actúa como coach de marca personal para ejecutivos y líderes organizacionales.</p>
            <p class="text-white text-sm mb-2"><strong>Contexto:</strong> Soy [ROL] en [INDUSTRIA], con [X] años de experiencia en [ESPECIALIDAD DE GESTIÓN].</p>
            <p class="text-white text-sm mb-2"><strong>Meta:</strong> Dame el PLANO MAESTRO de contenido para posicionarme como líder de opinión y llegar a 10K en LinkedIn en 90 días.</p>
            <p class="text-white text-sm"><strong>Restricción:</strong> El contenido debe equilibrar autoridad con accesibilidad, mostrando resultados sin ser promocional.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center mt-6">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Gestión</h4>
          <p class="text-white font-medium text-lg italic">"Tu próxima oportunidad de carrera puede venir de alguien que leyó tu post de LinkedIn. La marca personal del gestor abre puertas que el currículum tradicional ya no puede."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Hoja de Ruta 0 a 10K para Gestión - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `,
      "Educación & Capacitación": `
        <section>
          <h3 class="text-lg font-bold text-slate-800 mb-4">🎓 Tu Hoja de Ruta: Marca Docente 0 a 10K</h3>
          <p class="text-slate-600 mb-4">Este plan está adaptado para docentes, formadores y capacitadores que quieren multiplicar su impacto educativo a través de una comunidad digital.</p>
          <div class="space-y-4">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <h4 class="font-bold text-blue-800 mb-2">Mes 1: Establecer Tu Voz Pedagógica</h4>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Definir tu nicho educativo (nivel, asignatura, metodología)</li>
                <li>• Crear perfil que refleje tu filosofía de enseñanza</li>
                <li>• Publicar 12 recursos prácticos o reflexiones de aula</li>
                <li>• Meta: 500-1,000 seguidores docentes de tu área</li>
              </ul>
            </div>
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <h4 class="font-bold text-amber-800 mb-2">Mes 2: Construir Comunidad Docente</h4>
              <ul class="text-sm text-amber-700 space-y-1">
                <li>• Compartir planificaciones, rúbricas y actividades descargables</li>
                <li>• Interactuar en grupos de educadores de tu especialidad</li>
                <li>• Iniciar colaboraciones con otros docentes innovadores</li>
                <li>• Meta: 3,000-5,000 seguidores + primeras invitaciones a talleres</li>
              </ul>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200">
              <h4 class="font-bold text-green-800 mb-2">Mes 3: Escalar Impacto Educativo</h4>
              <ul class="text-sm text-green-700 space-y-1">
                <li>• Ofrecer talleres virtuales o presenciales</li>
                <li>• Publicar guías completas o mini-cursos</li>
                <li>• Posicionarte como referente en tu comunidad educativa</li>
                <li>• Meta: 10,000 seguidores + ingresos por capacitación/consultoría</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="mt-6">
          <h3 class="text-lg font-bold text-slate-800 mb-4">Prompt AGIA para tu Plan de Crecimiento</h3>
          <div class="prompt-block bg-slate-800 rounded-lg p-4">
            <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-2 py-1 rounded transition-colors"><i data-lucide="copy" class="w-3 h-3 inline mr-1"></i>Copiar</button>
            <p class="text-white text-sm mb-2"><strong>Rol:</strong> Actúa como estratega de marca personal para profesionales de la educación.</p>
            <p class="text-white text-sm mb-2"><strong>Contexto:</strong> Soy docente de [NIVEL/ASIGNATURA], especializado en [METODOLOGÍA/ENFOQUE], mi audiencia ideal son [PERFIL DOCENTE].</p>
            <p class="text-white text-sm mb-2"><strong>Meta:</strong> Dame el PLANO MAESTRO de contenido para posicionarme como referente pedagógico y llegar a 10K en [PLATAFORMA] en 90 días.</p>
            <p class="text-white text-sm"><strong>Restricción:</strong> El contenido debe ser práctico, aplicable en el aula y respetuoso de la realidad docente latinoamericana.</p>
          </div>
        </section>
        <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center mt-6">
          <h4 class="text-teal-100 text-sm uppercase tracking-wide mb-2">Máxima AulaGenIA para Educadores</h4>
          <p class="text-white font-medium text-lg italic">"Tu aula tiene 30 estudiantes, tu comunidad digital puede tener 10,000 colegas. Multiplica tu impacto: cada recurso que compartes transforma aulas que nunca visitarás."</p>
        </section>
        <div class="text-center text-xs text-slate-500 pt-2">Hoja de Ruta 0 a 10K para Educación - Módulo 4. AulaGenIA 2025.</div>
      </article>
      `
    }
  }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.resourcesDatabase = resourcesDatabase;
}


