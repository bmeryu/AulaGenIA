// Script para agregar segmentos al Módulo 4
// Ejecutar con: node add_m4_segments.js

const fs = require('fs');

// Leer el archivo
let content = fs.readFileSync('resources_db.js', 'utf8');

// =============================================
// SEGMENTOS PARA glosario-m4v1
// =============================================
const glosarioM4V1Segments = `    segments: {
      "Negocios & Ventas": \`
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
      \`,
      "Legal & Profesional": \`
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
      \`,
      "Gestión & Administración": \`
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
      \`,
      "Educación & Capacitación": \`
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
      \`
    }`;

// Reemplazar segments: {} del glosario-m4v1
content = content.replace(
    /(\"glosario-m4v1\"[\s\S]*?base_html:\s*`[\s\S]*?<\/article>\s*`),\s*segments:\s*\{\}/,
    '$1,\n' + glosarioM4V1Segments
);

// Guardar el archivo
fs.writeFileSync('resources_db.js', content, 'utf8');

console.log('✅ Segmentos de glosario-m4v1 agregados exitosamente');
