// EJEMPLO: Cómo debe quedar "mitos-derribados-ia" con Opción 2
// Solo para el perfil Negocios & Ventas como demostración

const mitosDerribadosNuevo = {
    meta: {
        type: "infographic",
        title: "Desarmando los Mitos de la IA",
        subtitle: "Dejando atrás los miedos para tomar el volante - Módulo 1: Video 3",
        icon: "shield-off",
        color: "rose",
        module: 1,
        pdfFallback: "gs://..."
    },

    // BASE_HTML: Solo intro de Julia (sin tabla, sin secciones)
    base_html: `
    <article class="space-y-6">
      <section class="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 border border-teal-200">
        <h2 class="text-xl font-bold text-teal-900 mb-2">Mensaje de Julia</h2>
        <p class="text-teal-700 italic">"Para dominar la IA, primero debemos limpiar nuestra mente de ideas falsas..."</p>
      </section>
  `,

    // CADA SEGMENT: Contiene TODO el contenido con ejemplos DEL SECTOR
    segments: {
        "Negocios & Ventas": `
      <!-- TABLA DE MITOS - Con ejemplos de VENTAS -->
      <section>
        <h3 class="text-lg font-bold text-slate-800 mb-4">Los 4 Mitos que Derribamos Hoy</h3>
        <div class="overflow-hidden rounded-xl border border-slate-200">
          <table class="w-full text-sm">
            <thead class="bg-slate-100">
              <tr>
                <th class="text-left p-3 font-semibold text-slate-700 w-1/3">EL MITO</th>
                <th class="text-left p-3 font-semibold text-slate-700">LA REALIDAD PARA VENTAS</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-slate-200">
                <td class="p-4 bg-rose-100 font-medium text-rose-800">1. Solo técnicos pueden usar IA.</td>
                <td class="p-4 bg-green-50 text-green-800"><strong>Falso.</strong> Un vendedor que sabe hacer buenas preguntas obtiene mejores resultados que un programador sin conocimiento comercial.</td>
              </tr>
              <tr class="border-t border-slate-200">
                <td class="p-4 bg-rose-100 font-medium text-rose-800">2. La IA reemplazará los trabajos.</td>
                <td class="p-4 bg-green-50 text-green-800"><strong>Error.</strong> La IA no reemplaza vendedores, los <strong>amplifica</strong>: mismas horas, 3x más prospectos contactados.</td>
              </tr>
              <tr class="border-t border-slate-200">
                <td class="p-4 bg-rose-100 font-medium text-rose-800">3. La IA lo sabe todo.</td>
                <td class="p-4 bg-amber-50 text-amber-800"><strong>Peligro.</strong> La IA puede inventar cifras de mercado. Siempre verifica datos antes de presentar a clientes.</td>
              </tr>
              <tr class="border-t border-slate-200">
                <td class="p-4 bg-rose-100 font-medium text-rose-800">4. Usar IA es complicado.</td>
                <td class="p-4 bg-green-50 text-green-800"><strong>Al contrario.</strong> Generas propuestas, emails de seguimiento y análisis de competencia en minutos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <!-- SECCIÓN ROL - Adaptada a VENTAS -->
      <section>
        <h3 class="text-lg font-bold text-slate-800 mb-4">Tu Nuevo Rol como Vendedor Potenciado</h3>
        <div class="space-y-3">
          <div class="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200">
            <span class="text-emerald-500 text-xl">✓</span>
            <div>
              <h4 class="font-bold text-slate-800">IA como tu Asistente de Ventas 24/7</h4>
              <p class="text-sm text-slate-600">Investiga prospectos, genera emails, prepara objeciones mientras duermes.</p>
            </div>
          </div>
          <!-- ... más items -->
        </div>
      </section>
      
      <!-- PROMPT COPIABLE del sector -->
      <section class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-200">
        <h4 class="font-bold text-blue-900 mb-3">🎯 Prompt para Ventas</h4>
        <div class="bg-slate-800 rounded-lg p-3">
          <button onclick="copyResourcePrompt(this)" class="float-right text-xs bg-teal-500 text-white px-2 py-1 rounded">Copiar</button>
          <p class="text-white text-xs font-mono">Dame 3 argumentos para convencer a un cliente escéptico...</p>
        </div>
      </section>
      
      <!-- CIERRE -->
      <section class="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-center">
        <h4 class="text-teal-100 text-sm uppercase">La Regla de Oro</h4>
        <p class="text-white font-medium text-lg italic">"La IA es tu copiloto de ventas..."</p>
      </section>
    </article>
    `
    }
};

// NOTA: Esto es solo un ejemplo de estructura.
// Para Legal, Gestión y Educación sería similar pero con ejemplos de su sector.
