// Script para agregar segmentos a los 2 recursos finales del Módulo 4
// Ejecutar con: node add_m4_segments_part3.js

const fs = require('fs');

// Leer el archivo
let content = fs.readFileSync('resources_db.js', 'utf8');

// =============================================
// SEGMENTOS PARA glosario-m4v2
// =============================================
const glosarioM4V2Segments = `    segments: {
      "Negocios & Ventas": \`
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
      \`,
      "Legal & Profesional": \`
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
      \`,
      "Gestión & Administración": \`
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
      \`,
      "Educación & Capacitación": \`
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
      \`
    }`;

// =============================================
// SEGMENTOS PARA caso-practico-0-10k
// =============================================
const casoPractico10kSegments = `    segments: {
      "Negocios & Ventas": \`
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
      \`,
      "Legal & Profesional": \`
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
      \`,
      "Gestión & Administración": \`
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
      \`,
      "Educación & Capacitación": \`
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
      \`
    }`;

// Reemplazar segments para glosario-m4v2
content = content.replace(
    /(\"glosario-m4v2\"[\s\S]*?base_html:\s*`[\s\S]*?<\/article>\s*`),\s*segments:\s*\{\}/,
    '$1,\n' + glosarioM4V2Segments
);

// Reemplazar segments para caso-practico-0-10k
content = content.replace(
    /(\"caso-practico-0-10k\"[\s\S]*?base_html:\s*`[\s\S]*?<\/article>\s*`),\s*segments:\s*\{\}/,
    '$1,\n' + casoPractico10kSegments
);

// Guardar el archivo
fs.writeFileSync('resources_db.js', content, 'utf8');

console.log('✅ Segmentos de glosario-m4v2 y caso-practico-0-10k agregados exitosamente');
console.log('🎉 ¡TODOS LOS RECURSOS DEL MÓDULO 4 COMPLETADOS!');
