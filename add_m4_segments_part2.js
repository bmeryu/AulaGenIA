// Script para agregar segmentos a los 4 recursos restantes del Módulo 4
// Ejecutar con: node add_m4_segments_part2.js

const fs = require('fs');

// Leer el archivo
let content = fs.readFileSync('resources_db.js', 'utf8');

// =============================================
// SEGMENTOS PARA fuentes-autoridad-4
// =============================================
const fuentesAutoridad4Segments = `    segments: {
      "Negocios & Ventas": \`
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
      \`,
      "Legal & Profesional": \`
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
      \`,
      "Gestión & Administración": \`
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
      \`,
      "Educación & Capacitación": \`
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
      \`
    }`;

// =============================================
// SEGMENTOS PARA mapa-arquitecto
// =============================================
const mapaArquitectoSegments = `    segments: {
      "Negocios & Ventas": \`
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
      \`,
      "Legal & Profesional": \`
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
      \`,
      "Gestión & Administración": \`
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
      \`,
      "Educación & Capacitación": \`
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
      \`
    }`;

// Reemplazar segments para fuentes-autoridad-4
content = content.replace(
    /(\"fuentes-autoridad-4\"[\s\S]*?base_html:\s*`[\s\S]*?<\/article>\s*`),\s*segments:\s*\{\}/,
    '$1,\n' + fuentesAutoridad4Segments
);

// Reemplazar segments para mapa-arquitecto
content = content.replace(
    /(\"mapa-arquitecto\"[\s\S]*?base_html:\s*`[\s\S]*?<\/article>\s*`),\s*segments:\s*\{\}/,
    '$1,\n' + mapaArquitectoSegments
);

// Guardar el archivo
fs.writeFileSync('resources_db.js', content, 'utf8');

console.log('✅ Segmentos de fuentes-autoridad-4 y mapa-arquitecto agregados exitosamente');
