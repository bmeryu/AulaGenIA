document.addEventListener("DOMContentLoaded", () => {
  // ==============================================================
  // DEV SEGMENT SELECTOR (Solo visible en localhost)
  // ==============================================================
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const devPanel = document.createElement('div');
    devPanel.id = 'dev-segment-selector';
    devPanel.innerHTML = `
      <div style="position:fixed;bottom:20px;right:20px;z-index:9999;background:#1e293b;padding:12px 16px;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,0.5);border:1px solid #334155;font-family:system-ui;">
        <div style="color:#94a3b8;font-size:11px;margin-bottom:6px;font-weight:600;">🧪 DEV: Segmento</div>
        <select id="dev-segment-select" style="background:#0f172a;color:#f1f5f9;border:1px solid #475569;padding:8px 12px;border-radius:8px;font-size:13px;cursor:pointer;min-width:180px;">
          <option value="Negocios & Ventas">Negocios & Ventas</option>
          <option value="Legal & Profesional">Legal & Profesional</option>
          <option value="Gestión & Administración">Gestión & Administración</option>
          <option value="Educación & Capacitación">Educación & Capacitación</option>
        </select>
      </div>
    `;
    document.body.appendChild(devPanel);

    const select = document.getElementById('dev-segment-select');
    select.value = localStorage.getItem('userSegment') || 'Negocios & Ventas';
    select.addEventListener('change', (e) => {
      localStorage.setItem('userSegment', e.target.value);
      location.reload();
    });
  }

  // ==============================================================
  // SMART RESOURCE VIEWER FUNCTIONS (INLINE MODE - Option B)
  // ==============================================================

  // Store original lesson content to restore later
  let originalLessonContent = null;
  let originalLessonTitle = null;

  // Helper function to get rendered resource HTML combining base + segment
  window.getRenderedResource = function (resourceId, userProfile) {
    if (!window.resourcesDatabase || !window.resourcesDatabase[resourceId]) {
      return null;
    }

    const resource = window.resourcesDatabase[resourceId];

    // Normalize profile name to match segment keys (handle & vs &amp;)
    const normalizedProfile = userProfile.replace(/&amp;/g, '&');

    // Debug logging
    console.log('getRenderedResource called with:', { resourceId, userProfile, normalizedProfile });
    console.log('Available segments:', Object.keys(resource.segments || {}));

    const segmentHtml = resource.segments && resource.segments[normalizedProfile]
      ? resource.segments[normalizedProfile]
      : '';

    console.log('Segment found:', segmentHtml ? 'YES' : 'NO');
    console.log('base_html exists:', !!resource.base_html, 'length:', (resource.base_html || '').length);

    return {
      meta: resource.meta,
      html: resource.base_html + segmentHtml
    };
  };

  // Helper function to copy prompt text to clipboard (Enhanced with animations)
  window.copyResourcePrompt = function (button) {
    // Improved selector: find the <p> element in the same container (works with or without .prompt-block)
    const container = button.closest('.prompt-block') || button.parentElement;
    if (!container) return;

    const textElement = container.querySelector('p');
    if (!textElement) return;

    const text = textElement.textContent;

    // Add click animation (subtle scale)
    button.style.transform = 'scale(0.95)';
    setTimeout(() => button.style.transform = '', 150);

    navigator.clipboard.writeText(text).then(() => {
      const originalHtml = button.innerHTML;
      const originalClasses = button.className;

      // Success state with glow animation
      button.innerHTML = '<i data-lucide="check" class="w-3 h-3"></i> <span>¡Copiado!</span>';
      button.classList.remove('bg-teal-500', 'bg-amber-500', 'bg-emerald-500');
      button.classList.add('bg-green-600');
      button.style.boxShadow = '0 0 12px rgba(34, 197, 94, 0.5)';

      if (window.lucide) lucide.createIcons();

      // Restore original state after 2 seconds
      setTimeout(() => {
        button.innerHTML = originalHtml;
        button.className = originalClasses;
        button.style.boxShadow = '';
        if (window.lucide) lucide.createIcons();
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar:', err);
      // Show error feedback
      const originalBg = button.className;
      button.classList.add('bg-red-500');
      setTimeout(() => button.className = originalBg, 1000);
    });
  };


  // Open Resource Viewer - INLINE MODE
  window.openResourceViewer = async function (resourceId) {
    if (!window.resourcesDatabase || !window.resourcesDatabase[resourceId]) {
      console.warn('Resource not found:', resourceId);
      return;
    }

    const userProfile = localStorage.getItem('userSegment') || 'Negocios & Ventas';
    const resource = window.getRenderedResource(resourceId, userProfile);

    if (!resource) {
      console.error('Could not render resource:', resourceId);
      return;
    }

    // --- NAVIGATION LOGIC ---
    const currentModule = resource.meta.module;
    const moduleResources = Object.entries(window.resourcesDatabase)
      .filter(([id, r]) => r.meta && r.meta.module === currentModule) // Get resources of same module
      .map(([id, r]) => ({ id, title: r.meta.title }));

    const currentIndex = moduleResources.findIndex(r => r.id === resourceId);
    const prevResource = currentIndex > 0 ? moduleResources[currentIndex - 1] : null;
    const nextResource = currentIndex < moduleResources.length - 1 ? moduleResources[currentIndex + 1] : null;

    const navButtonsHTML = (isFooter = false) => `
      <div class="flex items-center gap-2 ${isFooter ? 'w-full justify-between' : ''}">
        ${prevResource ? `
          <button onclick="window.openResourceViewer('${prevResource.id}')" 
            class="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100" 
            title="Anterior: ${prevResource.title}">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
            <span class="${isFooter ? '' : 'hidden sm:inline'}">Anterior</span>
          </button>
        ` : `<div class="w-20"></div>`}
        
        ${isFooter ? `
            <button onclick="window.closeResourceViewer()" class="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors">
                Volver al listado
            </button>
        ` : ''}

        ${nextResource ? `
          <button onclick="window.openResourceViewer('${nextResource.id}')" 
            class="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors px-3 py-2 rounded-lg hover:bg-slate-100"
            title="Siguiente: ${nextResource.title}">
            <span class="${isFooter ? '' : 'hidden sm:inline'}">Siguiente</span>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </button>
        ` : `<div class="w-20"></div>`}
      </div>
    `;
    // ------------------------

    // Get Inline Elements
    const listView = document.getElementById('resources-list-view');
    const detailView = document.getElementById('resource-detail-view');

    if (!listView || !detailView) {
      console.error('Inline viewer elements missing');
      return;
    }

    // Build Detail HTML with Back Button and Navigation
    const detailHTML = `
      <div class="border-b border-slate-100 p-4 flex items-center justify-between bg-slate-50/95 backdrop-blur sticky top-0 z-10 shadow-sm">
        <button onclick="window.closeResourceViewer()" class="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">
          <i data-lucide="arrow-left" class="w-4 h-4"></i>
          <span class="hidden sm:inline">Volver</span>
        </button>
        
        <!-- Top Navigation -->
        ${navButtonsHTML(false)}
      </div>

      <div class="max-w-4xl mx-auto p-6 md:p-10">
        <div class="flex flex-col md:flex-row md:items-center gap-6 mb-8 pb-8 border-b border-slate-100">
          <div class="w-16 h-16 rounded-2xl bg-${resource.meta.color || 'teal'}-100 flex items-center justify-center flex-shrink-0 shadow-sm">
            <i data-lucide="${resource.meta.icon || 'book-open'}" class="w-8 h-8 text-${resource.meta.color || 'teal'}-600"></i>
          </div>
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">${resource.meta.title}</h2>
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                Segmento: ${userProfile}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Content -->
        <div class="prose prose-slate prose-lg max-w-none">
          ${resource.html}
        </div>
        
        <!-- Footer Navigation -->
        <div class="mt-12 pt-8 border-t border-slate-100">
             ${navButtonsHTML(true)}
        </div>
      </div>
    `;

    // Inject content
    detailView.innerHTML = detailHTML;

    // Toggle Views with smooth transition
    listView.classList.add('resource-view-exit');

    setTimeout(() => {
      listView.classList.add('hidden');
      listView.classList.remove('resource-view-exit');

      detailView.classList.remove('hidden');
      detailView.classList.add('resource-view-enter');

      // Scroll to top of detail view
      detailView.parentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Remove animation class after it completes
      setTimeout(() => {
        detailView.classList.remove('resource-view-enter');
      }, 350);
    }, 250);

    // Re-initialize Lucide icons and init carousel
    if (window.lucide) {
      setTimeout(() => {
        lucide.createIcons();
        // Transform glossary tables to carousels
        if (window.initGlossaryCarousel) {
          window.initGlossaryCarousel();
        }
        // Initialize Glosario Interactivo if container exists (Módulo 1)
        if (document.getElementById('glosario-interactivo-container') && window.initGlosarioInteractivo) {
          window.initGlosarioInteractivo();
        }
        // Initialize Simulador de Tiempo if container exists (Módulo 2)
        if (document.getElementById('simulador-tiempo-container') && window.initSimuladorTiempo) {
          window.initSimuladorTiempo();
        }
        // Initialize Auditor AGIA if container exists (Módulo 3)
        if (document.getElementById('auditor-agia-container') && window.initAuditorAGIA) {
          window.initAuditorAGIA();
        }
      }, 300);
    }
  };

  // Close Resource Viewer - INLINE MODE
  window.closeResourceViewer = function () {
    const listView = document.getElementById('resources-list-view');
    const detailView = document.getElementById('resource-detail-view');

    if (listView && detailView) {
      // Animate out the detail view
      detailView.classList.add('resource-view-exit');

      setTimeout(() => {
        detailView.classList.add('hidden');
        detailView.classList.remove('resource-view-exit');
        detailView.innerHTML = ''; // Clear to stop media/etc

        listView.classList.remove('hidden');
        listView.classList.add('resource-list-enter');

        // Remove animation class after it completes
        setTimeout(() => {
          listView.classList.remove('resource-list-enter');
        }, 300);

        // Scroll back strictly to the container top
        const container = document.getElementById('interactive-resources-section');
        if (container) {
          container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);
    }
  };

  // Check if a resource has an interactive version
  window.hasInteractiveResource = function (resourceName) {
    const slugMap = {
      // ONBOARDING
      'Guía de Acceso: ChatGPT': 'guia-acceso-chatgpt',
      'Guía de Acceso: Gemini': 'guia-acceso-gemini',
      'Guía de Acceso: Grok': 'guia-acceso-grok',

      // MÓDULO 1
      'Glosario 1.1': 'glosario-m1v1',
      'Infografía: El rol del Copiloto': 'infografia-rol-copiloto',
      '¿Qué hay dentro del Copiloto? 1.0': 'dentro-copiloto-1',
      'Listado de Verificación del Módulo': 'listado-verificacion-m1',
      'Fuentes de Autoridad 1.0': 'fuentes-autoridad-1',
      'Glosario 1.2': 'glosario-m1v2',
      'Guía: 6 Pilares de la IA': '6-pilares-ia',
      'Glosario 1.3': 'glosario-m1v3',
      'Mitos Derribados de la IA': 'mitos-derribados-ia',
      '🎮 Glosario Interactivo Aplicado': 'glosario-interactivo-aplicado',

      // MÓDULO 2
      'Glosario 2.1': 'glosario-m2v1',
      'Guía Maestra de Herramientas': 'guia-maestra-herramientas',
      'Fuentes de Autoridad 2.0': 'fuentes-autoridad-2',
      'Glosario 2.2': 'glosario-m2v2',
      'El Salto de Principiante a Pro': 'salto-principiante-pro',
      '¿Qué hay dentro del Copiloto? 2.0': 'dentro-copiloto-2',
      'Aprende de los Expertos: Los Caminos de María, Carlos y Luis': 'caminos-expertos',
      'Test de Diagnóstico Avanzado: Tu Ruta': 'test-diagnostico-ruta',
      'Guía de Acceso: Ideogram': 'guia-acceso-ideogram',
      'Guía de Acceso: Midjourney': 'guia-acceso-midjourney',
      'Guía de Acceso: Gamma': 'guia-acceso-gamma',
      'Guía de Acceso: DALL-E 3': 'guia-acceso-dalle3',
      'Guía de Acceso: Canva': 'guia-acceso-canva',
      'Herramienta: Checklist de Complejidad': 'checklist-complejidad',

      // MÓDULO 3
      'Glosario 3.1': 'glosario-m3v1',
      'Mi Primer Prompt WOW': 'mi-primer-prompt-wow',
      'Infografía: La Receta WOW': 'infografia-receta-wow',
      'Plantilla: Rellena tu Prompt WOW': 'plantilla-prompt-wow',
      'Fuentes de Autoridad 3.0': 'fuentes-autoridad-3',
      'Glosario 3.2': 'glosario-m3v2',
      'El Arte de la Persuasión': 'arte-persuasion',
      'El Código de las Frases de Poder': 'codigo-frases-poder',
      'Diccionario de Verbos de Poder': 'diccionario-verbos-poder',
      'Ejemplos: Instrucciones de Alta Fidelidad': 'instrucciones-alta-fidelidad',
      'Guía de Acceso: Gemini Image': 'guia-acceso-gemini-image',
      'Glosario 3.3': 'glosario-m3v3',
      'Kit Maestro: Delegación IA': 'kit-delegacion-ia',
      'Kit de Primeros Auxilios IA': 'kit-primeros-auxilios',

      // MÓDULO 4
      'Glosario 4.1': 'glosario-m4v1',
      'Fuentes de Autoridad 4.0': 'fuentes-autoridad-4',
      'Guía Visual: El Mapa del Arquitecto': 'mapa-arquitecto',
      'Glosario 4.2': 'glosario-m4v2',
      'Caso Práctico: Estrategia 0 a 10k Seguidores': 'caso-practico-0-10k'
    };
    return slugMap[resourceName] || null;
  };

  // Render interactive resources for a specific module
  window.renderInteractiveResources = function (moduleIndex) {
    const container = document.getElementById('interactive-resources-section');
    if (!container || !window.resourcesDatabase) {
      if (container) container.classList.add('hidden');
      return;
    }

    // Filter resources by module
    const allResources = Object.entries(window.resourcesDatabase);

    const moduleResources = allResources
      .filter(([id, resource]) => {
        const match = resource.meta && resource.meta.module === moduleIndex;
        return match;
      })
      .map(([id, resource]) => ({ id, ...resource }));

    if (moduleResources.length === 0) {
      container.classList.add('hidden');
      container.innerHTML = '';
      return;
    }

    // Get color class based on resource color
    const getColorClasses = (color) => {
      const colors = {
        teal: { bg: 'bg-teal-100', border: 'border-teal-400', icon: 'text-teal-600' },
        emerald: { bg: 'bg-emerald-100', border: 'border-emerald-400', icon: 'text-emerald-600' },
        amber: { bg: 'bg-amber-100', border: 'border-amber-400', icon: 'text-amber-600' },
        indigo: { bg: 'bg-indigo-100', border: 'border-indigo-400', icon: 'text-indigo-600' },
        purple: { bg: 'bg-purple-100', border: 'border-purple-400', icon: 'text-purple-600' },
        blue: { bg: 'bg-blue-100', border: 'border-blue-400', icon: 'text-blue-600' },
        cyan: { bg: 'bg-cyan-100', border: 'border-cyan-400', icon: 'text-cyan-600' },
        red: { bg: 'bg-red-100', border: 'border-red-400', icon: 'text-red-600' }
      };
      return colors[color] || colors.teal;
    };

    // Generate HTML for resource buttons
    const resourceButtons = moduleResources.map(resource => {
      const colors = getColorClasses(resource.meta.color);
      return `
        <button onclick="window.openResourceViewer('${resource.id}')"
          class="group flex items-center gap-3 p-4 bg-white rounded-xl border-2 border-teal-100 hover:${colors.border} hover:shadow-lg transition-all text-left w-full">
          <div class="w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
            <i data-lucide="${resource.meta.icon || 'book-open'}" class="w-5 h-5 ${colors.icon}"></i>
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-sm">${resource.meta.title}</h4>
            <p class="text-xs text-gray-500">${resource.meta.subtitle || ''}</p>
          </div>
        </button>
      `;
    }).join('');

    // Set container HTML with List and Detail views
    container.innerHTML = `
      <div id="resources-list-view" class="transition-all duration-300">
        <div class="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-200">
          <h3 class="text-lg font-bold text-teal-900 mb-2 flex items-center gap-2">
            <i data-lucide="sparkles" class="h-5 w-5 text-teal-500"></i>
            ✨ Recursos Interactivos
            <span class="text-xs font-bold bg-teal-500 text-white px-2 py-0.5 rounded-full">NUEVO</span>
          </h3>
          <p class="text-sm text-teal-700 mb-4">Contenido adaptado a tu perfil profesional con prompts copiables.</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${resourceButtons}
          </div>
        </div>
      </div>
      
      <!-- Inline Detail View (Hidden by default) -->
      <div id="resource-detail-view" class="hidden bg-white rounded-2xl border-2 border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
        <!-- Content injected dynamically -->
      </div>
    `;

    container.classList.remove('hidden');

    // Re-initialize Lucide icons
    if (window.lucide) {
      setTimeout(() => lucide.createIcons(), 50);
    }
  };

  // Initialize Glossary Carousel - transforms tables into interactive carousels
  window.initGlossaryCarousel = function () {
    // Find all glossary tables in the current detail view
    const detailView = document.getElementById('resource-detail-view');
    if (!detailView) return;

    const tables = detailView.querySelectorAll('table');

    tables.forEach((table, tableIndex) => {
      // Check if this looks like a glossary table (has Término/Definición columns)
      const headers = table.querySelectorAll('th');
      const isGlossary = Array.from(headers).some(th =>
        th.textContent.includes('Término') || th.textContent.includes('Definición')
      );

      if (!isGlossary) return;

      // Extract data from table rows
      const rows = table.querySelectorAll('tbody tr');
      if (rows.length < 2) return; // Need at least 2 items for carousel

      const terms = Array.from(rows).map((row, index) => {
        const cells = row.querySelectorAll('td');
        return {
          number: index + 1,
          term: cells[0]?.textContent?.trim() || '',
          definition: cells[1]?.textContent?.trim() || '',
          analogy: cells[2]?.textContent?.trim() || ''
        };
      });

      // Generate carousel HTML
      const carouselId = `glossary-carousel-${tableIndex}`;
      const carouselHTML = `
        <div class="glossary-carousel" id="${carouselId}" data-current="0" data-total="${terms.length}">
          <!-- Navigation Arrows -->
          <button class="carousel-nav-btn carousel-nav-prev" onclick="window.carouselNavigate('${carouselId}', -1)" aria-label="Anterior" disabled>
            <i data-lucide="chevron-left" class="w-5 h-5"></i>
          </button>
          <button class="carousel-nav-btn carousel-nav-next" onclick="window.carouselNavigate('${carouselId}', 1)" aria-label="Siguiente">
            <i data-lucide="chevron-right" class="w-5 h-5"></i>
          </button>
          
          <!-- Carousel Wrapper (overflow hidden) -->
          <div class="glossary-carousel-wrapper">
            <!-- Carousel Track -->
            <div class="glossary-carousel-track">
              ${terms.map((term, i) => `
                <div class="glossary-card">
                  <div class="glossary-card-inner">
                    <div class="glossary-term">
                      <span class="glossary-term-number">${term.number}</span>
                      <span>${term.term}</span>
                    </div>
                    <p class="glossary-definition">${term.definition}</p>
                    ${term.analogy ? `
                      <div class="glossary-analogy">
                        <p class="glossary-analogy-label">💡 Analogía WOW</p>
                        <p class="glossary-analogy-text">${term.analogy}</p>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Dots Indicator -->
          <div class="carousel-dots">
            ${terms.map((_, i) => `
              <button class="carousel-dot ${i === 0 ? 'active' : ''}" 
                      onclick="window.carouselGoTo('${carouselId}', ${i})" 
                      aria-label="Ir al término ${i + 1}"></button>
            `).join('')}
          </div>
          
          <!-- Counter -->
          <div class="carousel-counter">
            <span class="carousel-counter-current">1</span> de ${terms.length} conceptos
          </div>
        </div>
      `;

      // Replace table with carousel
      const wrapper = table.closest('.overflow-x-auto') || table.parentElement;
      wrapper.innerHTML = carouselHTML;

      // Re-init Lucide icons for arrows
      if (window.lucide) {
        setTimeout(() => lucide.createIcons(), 50);
      }
    });
  };

  // Carousel navigation function
  window.carouselNavigate = function (carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const current = parseInt(carousel.dataset.current) || 0;
    const total = parseInt(carousel.dataset.total) || 1;
    const newIndex = Math.max(0, Math.min(total - 1, current + direction));

    window.carouselGoTo(carouselId, newIndex);
  };

  // Carousel go to specific slide
  window.carouselGoTo = function (carouselId, index) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const total = parseInt(carousel.dataset.total) || 1;
    const clampedIndex = Math.max(0, Math.min(total - 1, index));

    carousel.dataset.current = clampedIndex;

    // Move track - each card is 100% width, so move by 100% per slide
    const track = carousel.querySelector('.glossary-carousel-track');
    if (track) {
      track.style.transform = `translateX(-${clampedIndex * 100}%)`;
    }

    // Update dots
    const dots = carousel.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === clampedIndex);
    });

    // Update counter
    const counter = carousel.querySelector('.carousel-counter-current');
    if (counter) {
      counter.textContent = clampedIndex + 1;
    }

    // Update nav button states
    const prevBtn = carousel.querySelector('.carousel-nav-prev');
    const nextBtn = carousel.querySelector('.carousel-nav-next');
    if (prevBtn) prevBtn.disabled = clampedIndex === 0;
    if (nextBtn) nextBtn.disabled = clampedIndex === total - 1;
  };

  // ===================================================================
  // GLOSARIO INTERACTIVO INTEGRADO
  // ===================================================================

  window.initGlosarioInteractivo = function () {
    const container = document.getElementById('glosario-interactivo-container');
    if (!container) return;

    // --- DATOS ---
    const generalConcepts = {
      prompt: {
        title: "1. EL PROMPT",
        subtitle: "(La Instrucción)",
        icon: "terminal-square",
        def: "Es el punto de partida. La llave que activa la inteligencia. No es hablar por hablar, es saber pedir.",
        analogy: "La Receta del Chef: Si solo dices 'tengo hambre', te dará cualquier cosa. Si das la receta exacta, el plato será perfecto."
      },
      llm: {
        title: "2. LLM",
        subtitle: "(El Cerebro)",
        icon: "brain-circuit",
        def: "Large Language Model. Un sistema de probabilidades que ha leído casi todo internet. No piensa, predice.",
        analogy: "Una Biblioteca Infinita: Todos los libros están conectados por hilos invisibles que la IA teje para crear tu respuesta."
      },
      tokens: {
        title: "3. TOKENS",
        subtitle: "(Las Piezas)",
        icon: "puzzle",
        def: "La unidad de medida. La IA no lee palabras, lee fragmentos. Tiene un límite de piezas para construir cada respuesta.",
        analogy: "Piezas de Lego: La IA tiene un balde limitado. Si se acaba el balde a mitad de la construcción, la respuesta se corta."
      },
      context: {
        title: "4. CONTEXTO",
        subtitle: "(La Memoria)",
        icon: "maximize",
        def: "Ventana de Contexto. Es la memoria de corto plazo. Determina cuánto puede recordar dentro de una misma conversación.",
        analogy: "La Pizarra de Oficina: Si escribes demasiado, tienes que borrar lo de arriba (el inicio) para seguir anotando abajo."
      },
      multimodal: {
        title: "5. MULTIMODALIDAD",
        subtitle: "(Los Sentidos)",
        icon: "eye",
        def: "La capacidad de procesar diferentes tipos de información simultáneamente (texto, imagen, audio).",
        analogy: "Súper Sentidos: Ahora puedes mostrarle una foto de tu refrigerador y la IA 'verá' los ingredientes."
      },
      hallucination: {
        title: "6. ALUCINACIÓN",
        subtitle: "(El Error)",
        icon: "ghost",
        def: "Cuando la IA inventa información falsa con total seguridad para completar el patrón probabilístico.",
        analogy: "El Guía Turístico Novato: No conoce el camino, pero inventa las direcciones con una sonrisa para no quedar mal frente a ti."
      }
    };

    const contentDB = {
      business: {
        label: "Negocios & Ventas",
        concepts: {
          llm: "Imagina un Consultor Senior que ha leído todos los estudios de mercado, pero nunca ha visitado a un cliente real.",
          tokens: "Piensa en un Presupuesto de Campaña. Cada sílaba cuesta. Si gastas todo en la intro, no queda dinero para el cierre.",
          context: "Como una Sala de Reuniones. Si metes a 50 personas hablando a la vez, nadie entiende.",
          hallucination: "Un Vendedor Desesperado que inventa cifras de crecimiento solo para que el directorio le sonría.",
          multimodal: "Tu analista tiene Ojos. Le muestras una foto de la góndola vacía y te dice qué productos reponer.",
          prompt: "El Briefing. Si le dices a la agencia 'haz algo creativo', fallan. Si das la estrategia clara, ejecutan perfecto."
        },
        scenarios: [
          {
            id: 1, title: "El Reporte Anual de 600 Páginas", challenge: "Tienes los reportes de ventas de los últimos 5 años. Necesitas identificar por qué cayeron las ventas en Q3 2024.",
            optionA: { label: "Subir todos los PDFs de una vez al chat.", feedback: "Error", text: "¡Saturación! La IA olvidó los datos del 2020." },
            optionB: { label: "Subir solo el Q3 2024 y pedir análisis puntual.", feedback: "Acierto", text: "Perfecto. Gestionaste la memoria (Contexto)." },
            relatedConcept: "context"
          },
          {
            id: 2, title: "Correo de Venta en Frío", challenge: "Quieres que la IA escriba un correo para vender tu consultoría.",
            optionA: { label: "Prompt: 'Escribe un correo para vender mis servicios'.", feedback: "Error", text: "Resultado genérico y robótico." },
            optionB: { label: "Prompt: 'Actúa como experto en B2B. Escribe un correo corto...'", feedback: "Acierto", text: "¡Bien! Definiste el Rol y la Receta (Prompt)." },
            relatedConcept: "prompt"
          },
          {
            id: 3, title: "Datos de Mercado 2025", challenge: "Necesitas la cuota de mercado exacta de tu competidor.",
            optionA: { label: "Preguntar directo: '¿Cuál es la cuota de X?'", feedback: "Error", text: "¡Peligro! La IA inventó una cifra (Alucinación)." },
            optionB: { label: "Pedir: 'Busca en la web reportes oficiales y cita fuentes'.", feedback: "Acierto", text: "Correcto. Conectaste a internet para validar." },
            relatedConcept: "hallucination"
          }
        ]
      },
      legal: {
        label: "Legal & Profesional",
        concepts: {
          llm: "Un Paralegal rapidísimo que leyó toda la jurisprudencia, pero no tiene ética ni criterio.",
          tokens: "Como una Foja Judicial. Tienes un límite físico por página.",
          context: "El Expediente. Si es demasiado grueso, el asistente olvida la demanda inicial.",
          hallucination: "Un Abogado Junior citando una ley derogada con total seguridad.",
          multimodal: "Puedes subir la Foto de un Contrato firmado y la IA te alerta de las cláusulas riesgosas.",
          prompt: "La Instrucción Jurídica. La IA es literal: si hay ambigüedad, habrá error."
        },
        scenarios: [
          {
            id: 1, title: "Revisión de Contrato M&A", challenge: "Revisar un contrato de 150 páginas buscando cláusulas de 'Cambio de Control'.",
            optionA: { label: "Pedir: 'Lee esto y dime si está bien'.", feedback: "Error", text: "Demasiado vago. Resumen genérico inútil." },
            optionB: { label: "Pedir: 'Extrae textualmente las cláusulas de Cambio de Control'.", feedback: "Acierto", text: "Excelente. Limitaste la tarea (Prompt)." },
            relatedConcept: "prompt"
          },
          {
            id: 2, title: "Jurisprudencia Reciente", challenge: "Necesitas citar 3 fallos de la Corte Suprema de este año.",
            optionA: { label: "Pedir: 'Dame 3 fallos recientes'.", feedback: "Error", text: "¡Alerta! La IA inventó roles y fechas (Alucinación)." },
            optionB: { label: "Pedir: 'Busca en el poder judicial y dame el link'.", feedback: "Acierto", text: "Bien. Pediste evidencia." },
            relatedConcept: "hallucination"
          },
          {
            id: 3, title: "Resumen de Expediente", challenge: "Tienes un juicio de 5 años con miles de fojas.",
            optionA: { label: "Copiar y pegar todo el texto del juicio.", feedback: "Error", text: "La IA colapsó. Los Tokens se acabaron." },
            optionB: { label: "Subir por etapas (Año 1, Año 2...) y pedir resúmenes parciales.", feedback: "Acierto", text: "Gestionaste el Contexto." },
            relatedConcept: "tokens"
          }
        ]
      },
      admin: {
        label: "Gestión & Adm.",
        concepts: {
          llm: "Un Asistente Ejecutivo incansable que redacta perfecto, pero no conoce la cultura de tu empresa.",
          tokens: "Un Post-it. No puedes escribir la historia de tu vida ahí.",
          context: "Tu Bandeja de Entrada. Si intentas leer 500 correos a la vez, colapsas.",
          hallucination: "Un Pasante que rellena una celda de Excel con un número inventado.",
          multimodal: "Le subes la Foto de una Factura arrugada y la pasa a Excel automáticamente.",
          prompt: "El Procedimiento (SOP). Si le dices 'ordena esto', lo hará mal."
        },
        scenarios: [
          {
            id: 1, title: "Digitalizar Facturas", challenge: "Tienes 50 facturas en fotos desordenadas.",
            optionA: { label: "Subir las 50 fotos juntas y pedir 'Haz la tabla'.", feedback: "Error", text: "Caos. La IA alucinó montos." },
            optionB: { label: "Subir de a 5 y pedir 'Extrae RUT y Monto'.", feedback: "Acierto", text: "Correcto. Usaste la Multimodalidad con control." },
            relatedConcept: "multimodal"
          },
          {
            id: 2, title: "Acta de Reunión", challenge: "Tienes la grabación de una reunión de 3 horas.",
            optionA: { label: "Pedir: 'Transcribe todo literal'.", feedback: "Error", text: "Se acabaron los Tokens." },
            optionB: { label: "Pedir: 'Resume los acuerdos y tareas por persona'.", feedback: "Acierto", text: "Bien. Pediste síntesis (Prompt)." },
            relatedConcept: "tokens"
          },
          {
            id: 3, title: "Correo de Cobranza", challenge: "Debes cobrarle suavemente a un cliente importante.",
            optionA: { label: "Prompt: 'Escribe un correo de cobranza'.", feedback: "Error", text: "Salió agresivo. La IA no conoce la relación." },
            optionB: { label: "Prompt: 'Actúa como asistente amable. El cliente es amigo...'", feedback: "Acierto", text: "Perfecto. El Tono ajustó la respuesta." },
            relatedConcept: "llm"
          }
        ]
      },
      education: {
        label: "Educación",
        concepts: {
          llm: "Un Bibliotecario que memorizó todos los libros, pero nunca dio una clase.",
          tokens: "El Límite de Palabras en un ensayo. Si gastas todo en la intro, no hay conclusión.",
          context: "La Pizarra. Si la llenas de texto, tienes que borrar lo de arriba.",
          hallucination: "Ese Alumno que inventa una respuesta con total seguridad.",
          multimodal: "La IA tiene ojos: subes la Foto de un Ejercicio a mano y te explica cómo resolverlo.",
          prompt: "La Rúbrica. Si la instrucción es vaga, la respuesta será vaga."
        },
        scenarios: [
          {
            id: 1, title: "Planificación Anual", challenge: "Quieres planificar todo el año escolar con detalle día a día.",
            optionA: { label: "Pedir: 'Haz la planificación completa ahora'.", feedback: "Error", text: "La IA perdió el detalle a mitad de año (Contexto)." },
            optionB: { label: "Pedir: 'Planifica solo la Unidad 1 con objetivos'.", feedback: "Acierto", text: "Bien. Segmentar es la clave." },
            relatedConcept: "context"
          },
          {
            id: 2, title: "Bibliografía para Tesis", challenge: "Un alumno pide ayuda para encontrar papers académicos.",
            optionA: { label: "Preguntar a la IA por '5 papers clave'.", feedback: "Error", text: "Inventó títulos y autores (Alucinación)." },
            optionB: { label: "Usar una IA con acceso a bases académicas reales.", feedback: "Acierto", text: "Entendiste que el LLM base no es confiable." },
            relatedConcept: "hallucination"
          },
          {
            id: 3, title: "Feedback a Alumnos", challenge: "Quieres corregir 30 ensayos dándole feedback personalizado.",
            optionA: { label: "Pegar los 30 ensayos juntos.", feedback: "Error", text: "Mezcló los nombres. Pizarra llena." },
            optionB: { label: "Pegar uno a uno junto con la Rúbrica.", feedback: "Acierto", text: "Rúbrica (Prompt) + Un caso a la vez = Calidad." },
            relatedConcept: "prompt"
          }
        ]
      }
    };

    // --- ESTADO ---
    const glosarioState = {
      step: 0,
      selectedSegment: null,
      activeCard: 0,
      simResult: null,
      currentScenario: null
    };

    // --- ESTILOS ULTRA-PREMIUM ---
    const injectStyles = () => {
      if (document.getElementById('glosario-integrated-styles')) return;
      const style = document.createElement('style');
      style.id = 'glosario-integrated-styles';
      style.textContent = `
        /* ============================================
           DARK PREMIUM THEME - AulaGenIA Tool
           ============================================ */

        /* Container - Dark premium base */
        .glosario-integrated {
          position: relative;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          border-radius: 1.5rem;
          padding: 1.5rem;
          overflow: hidden;
        }
        
        /* Animated aurora blobs */
        .glosario-integrated::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -25%;
          width: 80%;
          height: 80%;
          background: radial-gradient(ellipse, rgba(20, 184, 166, 0.25) 0%, transparent 70%);
          filter: blur(60px);
          animation: giAurora1 12s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .glosario-integrated::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -20%;
          width: 70%;
          height: 70%;
          background: radial-gradient(ellipse, rgba(99, 102, 241, 0.25) 0%, transparent 70%);
          filter: blur(60px);
          animation: giAurora2 15s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes giAurora1 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.3; }
          100% { transform: translate(50px, 30px) rotate(10deg); opacity: 0.5; }
        }
        @keyframes giAurora2 {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0.25; }
          100% { transform: translate(-40px, -20px) rotate(-10deg); opacity: 0.45; }
        }

        /* Grid overlay for tech feel */
        .glosario-integrated .gi-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
          border-radius: inherit;
        }

        /* Main card - Frosted glass dark */
        .glosario-integrated .gi-card {
          position: relative;
          z-index: 1;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-radius: 1.5rem;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 0 1px rgba(255,255,255,0.05) inset,
            0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 100px -20px rgba(20, 184, 166, 0.15);
        }

        /* Text colors for dark mode */
        .glosario-integrated .gi-card { color: #e2e8f0; }
        .glosario-integrated h1, .glosario-integrated h2 {
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%, #14b8a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .glosario-integrated h3 { color: #f1f5f9; }
        .glosario-integrated p { color: #94a3b8; }
        .glosario-integrated .text-slate-800 { color: #f1f5f9 !important; }
        .glosario-integrated .text-slate-600 { color: #cbd5e1 !important; }
        .glosario-integrated .text-slate-500 { color: #94a3b8 !important; }

        /* Role cards - Glowing borders */
        .glosario-integrated .gi-role-card {
          cursor: pointer;
          padding: 1.75rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(30, 41, 59, 0.5);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .glosario-integrated .gi-role-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(20, 184, 166, 0) 0%, rgba(20, 184, 166, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .glosario-integrated .gi-role-card:hover {
          border-color: rgba(20, 184, 166, 0.5);
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 0 30px -5px rgba(20, 184, 166, 0.4),
            0 20px 40px -15px rgba(0, 0, 0, 0.4);
        }
        .glosario-integrated .gi-role-card:hover::before { opacity: 1; }

        /* Icon containers in role cards */
        .glosario-integrated .gi-role-card .bg-teal-50 {
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%) !important;
          border: 1px solid rgba(20, 184, 166, 0.3);
        }
        .glosario-integrated .gi-role-card .text-teal-600 {
          color: #5eead4 !important;
        }

        /* Strategy buttons - Premium interactive */
        .glosario-integrated .gi-strategy-btn {
          cursor: pointer;
          padding: 2rem;
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(30, 41, 59, 0.4);
          backdrop-filter: blur(10px);
          text-align: left;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .glosario-integrated .gi-strategy-btn:hover {
          border-color: rgba(20, 184, 166, 0.4);
          background: rgba(20, 184, 166, 0.1);
          transform: translateY(-4px);
          box-shadow: 
            0 0 40px -10px rgba(20, 184, 166, 0.3),
            0 20px 40px -15px rgba(0, 0, 0, 0.3);
        }
        .glosario-integrated .gi-strategy-btn .bg-slate-100 {
          background: rgba(51, 65, 85, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glosario-integrated .gi-strategy-btn:hover .group-hover\\:bg-rose-100 {
          background: rgba(244, 63, 94, 0.2) !important;
          border-color: rgba(244, 63, 94, 0.4);
        }
        .glosario-integrated .gi-strategy-btn:hover .group-hover\\:bg-emerald-100 {
          background: rgba(16, 185, 129, 0.2) !important;
          border-color: rgba(16, 185, 129, 0.4);
        }

        /* Quote box - Gradient glass with glow */
        .glosario-integrated .gi-quote-box {
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%);
          border-left: 3px solid;
          border-image: linear-gradient(180deg, #14b8a6 0%, #6366f1 100%) 1;
          border-radius: 0 1rem 1rem 0;
          padding: 1.75rem;
          backdrop-filter: blur(10px);
          box-shadow: 
            0 0 30px -10px rgba(20, 184, 166, 0.2),
            inset 0 0 30px rgba(20, 184, 166, 0.05);
        }
        .glosario-integrated .gi-quote-box .text-teal-600 {
          color: #5eead4 !important;
        }

        /* Icon box - Dynamic gradient with pulse */
        .glosario-integrated .gi-icon-box {
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
          border-radius: 1.5rem;
          min-height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 60px -20px rgba(20, 184, 166, 0.3),
            inset 0 0 40px rgba(20, 184, 166, 0.05);
          position: relative;
          overflow: hidden;
        }
        .glosario-integrated .gi-icon-box::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: conic-gradient(from 0deg, transparent, rgba(20, 184, 166, 0.1), transparent, rgba(99, 102, 241, 0.1), transparent);
          animation: giRotate 10s linear infinite;
        }
        .glosario-integrated .gi-icon-box::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 100%);
          border-radius: inherit;
        }
        @keyframes giRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .glosario-integrated .gi-icon-box i {
          position: relative;
          z-index: 1;
          color: #5eead4 !important;
          filter: drop-shadow(0 0 30px rgba(20, 184, 166, 0.6));
          animation: giPulse 3s ease-in-out infinite;
        }
        @keyframes giPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 30px rgba(20, 184, 166, 0.6)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 50px rgba(20, 184, 166, 0.8)); }
        }
        .glosario-integrated .gi-icon-box .text-teal-300 {
          color: #5eead4 !important;
        }

        /* Progress dots - Glowing trail */
        .glosario-integrated .gi-dot {
          height: 10px;
          border-radius: 999px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glosario-integrated .gi-dot.active { 
          width: 3rem; 
          background: linear-gradient(90deg, #14b8a6 0%, #06b6d4 100%);
          box-shadow: 
            0 0 20px rgba(20, 184, 166, 0.6),
            0 0 40px rgba(20, 184, 166, 0.3);
        }
        .glosario-integrated .gi-dot.inactive { 
          width: 10px; 
          background: rgba(71, 85, 105, 0.6);
          box-shadow: 0 0 10px rgba(20, 184, 166, 0.1);
        }

        /* Fade in animation - Enhanced */
        .glosario-integrated .fade-in {
          animation: giFadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes giFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Premium buttons - Glowing gradient */
        .glosario-integrated .btn-brand {
          background: linear-gradient(135deg, #0d9488 0%, #6366f1 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 
            0 0 30px -5px rgba(99, 102, 241, 0.5),
            0 10px 30px -10px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .glosario-integrated .btn-brand::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .glosario-integrated .btn-brand:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 0 50px -5px rgba(99, 102, 241, 0.6),
            0 15px 40px -10px rgba(0, 0, 0, 0.4);
        }
        .glosario-integrated .btn-brand:hover::before { opacity: 1; }

        /* Badge styles */
        .glosario-integrated .bg-teal-50 {
          background: rgba(20, 184, 166, 0.15) !important;
          border: 1px solid rgba(20, 184, 166, 0.3) !important;
        }
        .glosario-integrated .text-teal-600 {
          color: #5eead4 !important;
        }
        .glosario-integrated .border-teal-200 {
          border-color: rgba(20, 184, 166, 0.3) !important;
        }
        .glosario-integrated .bg-indigo-50 {
          background: rgba(99, 102, 241, 0.15) !important;
          border: 1px solid rgba(99, 102, 241, 0.3) !important;
        }
        .glosario-integrated .text-indigo-600 {
          color: #a5b4fc !important;
        }

        /* Success state - Glowing green */
        .glosario-integrated .bg-emerald-50 {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(52, 211, 153, 0.1) 100%) !important;
          border: 1px solid rgba(16, 185, 129, 0.3) !important;
          box-shadow: 0 0 30px -10px rgba(16, 185, 129, 0.3);
        }
        .glosario-integrated .text-emerald-600 { color: #6ee7b7 !important; }
        .glosario-integrated .border-emerald-300 { border-color: rgba(16, 185, 129, 0.4) !important; }

        /* Error state - Glowing red */
        .glosario-integrated .bg-rose-50 {
          background: linear-gradient(135deg, rgba(244, 63, 94, 0.15) 0%, rgba(251, 113, 133, 0.1) 100%) !important;
          border: 1px solid rgba(244, 63, 94, 0.3) !important;
          box-shadow: 0 0 30px -10px rgba(244, 63, 94, 0.3);
        }
        .glosario-integrated .text-rose-600 { color: #fda4af !important; }
        .glosario-integrated .border-rose-300 { border-color: rgba(244, 63, 94, 0.4) !important; }

        /* Result feedback white containers */
        .glosario-integrated .bg-white {
          background: rgba(30, 41, 59, 0.6) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
        }

        /* Conclusion dark box */
        .glosario-integrated .bg-slate-800 {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%) !important;
          border: 1px solid rgba(20, 184, 166, 0.2) !important;
          box-shadow: 0 0 30px -10px rgba(20, 184, 166, 0.2);
        }

        /* Outline buttons */
        .glosario-integrated .border-slate-300 {
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        .glosario-integrated .border-teal-400 {
          border-color: rgba(20, 184, 166, 0.5) !important;
        }
        .glosario-integrated .hover\\:bg-teal-50:hover {
          background: rgba(20, 184, 166, 0.1) !important;
        }
      `;
      document.head.appendChild(style);
    };
    injectStyles();

    // --- RENDER ---
    function render() {
      let content = '';
      switch (glosarioState.step) {
        case 0: content = renderActivation(); break;
        case 1: content = renderSegmentation(); break;
        case 2: content = renderGlossary(); break;
        case 3: content = renderSimulator(); break;
        case 4: content = renderConclusion(); break;
      }
      container.innerHTML = `<div class="gi-card fade-in">${content}</div>`;
      if (window.lucide) lucide.createIcons();
    }

    function renderActivation() {
      return `
        <div class="text-center space-y-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-600">
            <i data-lucide="book-open-check" class="w-8 h-8"></i>
          </div>
          <h1 class="text-xl md:text-3xl font-extrabold text-slate-800">Glosario Interactivo</h1>
          <p class="text-teal-600">Entiende la herramienta. Domina la estrategia.</p>
          <div class="gi-quote-box max-w-xl mx-auto text-left py-3 px-4">
            <p class="text-slate-600 italic text-sm">"Aquí aprenderás los 6 pilares clave para dar órdenes efectivas a tu copiloto IA."</p>
            <p class="text-teal-600 font-bold mt-2 text-xs text-right">— Julia, Aula GenIA</p>
          </div>
          <button onclick="window.glosarioNextStep()" class="btn-brand px-6 py-2 text-white rounded-xl font-bold shadow-lg inline-flex items-center gap-2">
            Iniciar <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    }

    function renderSegmentation() {
      // Obtener segmento guardado del usuario
      const savedSegment = localStorage.getItem('userSegment') || 'Negocios & Ventas';
      const segmentMap = {
        'Negocios & Ventas': 'business',
        'Legal & Profesional': 'legal',
        'Gestión & Administración': 'admin',
        'Educación & Capacitación': 'education'
      };
      const userSegmentId = segmentMap[savedSegment] || 'business';

      return `
        <div class="space-y-4 text-center">
          <h2 class="text-xl md:text-2xl font-bold text-slate-800">Tu Perfil: ${savedSegment}</h2>
          <p class="text-slate-500 text-sm">El glosario está adaptado a tu área profesional.</p>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            ${renderRoleCard('business', 'briefcase', 'Negocios', userSegmentId === 'business')}
            ${renderRoleCard('legal', 'scale', 'Legal', userSegmentId === 'legal')}
            ${renderRoleCard('admin', 'clipboard-list', 'Gestión', userSegmentId === 'admin')}
            ${renderRoleCard('education', 'graduation-cap', 'Educación', userSegmentId === 'education')}
          </div>
          <button onclick="window.glosarioSelectSegment('${userSegmentId}')" class="btn-brand px-8 py-3 text-white rounded-xl font-bold shadow-lg inline-flex items-center gap-2 mt-4 animate-pulse">
            Continuar con mi Perfil <i data-lucide="arrow-right" class="w-5 h-5"></i>
          </button>
        </div>
      `;
    }

    function renderRoleCard(id, icon, title, isSelected) {
      const selectedClass = isSelected ? 'ring-2 ring-teal-400 bg-teal-900/30' : 'opacity-50';
      const checkmark = isSelected ? '<i data-lucide="check-circle-2" class="w-5 h-5 text-teal-400 absolute top-2 right-2"></i>' : '';
      return `
        <div class="gi-role-card ${selectedClass} relative cursor-default" style="pointer-events: none;">
          ${checkmark}
          <div class="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-2">
            <i data-lucide="${icon}" class="w-5 h-5"></i>
          </div>
          <h3 class="text-sm font-bold text-slate-800">${title}</h3>
        </div>
      `;
    }

    function renderGlossary() {
      const segment = contentDB[glosarioState.selectedSegment];
      const keys = ['prompt', 'llm', 'tokens', 'context', 'multimodal', 'hallucination'];
      const key = keys[glosarioState.activeCard];
      const general = generalConcepts[key];
      const profiled = segment.concepts[key];
      const dots = keys.map((_, idx) => `<div class="gi-dot ${idx === glosarioState.activeCard ? 'active' : 'inactive'}"></div>`).join('');

      return `
        <div class="grid lg:grid-cols-5 gap-4 items-start">
          <div class="lg:col-span-3 space-y-3">
            <div class="flex items-center gap-2 text-teal-600 font-bold uppercase tracking-widest text-xs">
              <span class="px-2 py-0.5 bg-teal-50 rounded border border-teal-200 text-[10px]">Pilar 0${glosarioState.activeCard + 1}</span>
              <span>Fundamentos</span>
            </div>
            <h2 class="text-xl md:text-2xl font-bold text-slate-800">${general.title}</h2>
            <p class="text-slate-500 text-sm">${general.subtitle}</p>
            <p class="text-slate-700 text-sm leading-relaxed">"${general.def}"</p>
            <div class="flex items-start gap-2 text-xs text-indigo-600 italic bg-indigo-50 p-2 rounded-lg">
              <i data-lucide="lightbulb" class="w-3 h-3 mt-0.5 flex-shrink-0"></i>
              <span>${general.analogy}</span>
            </div>
            <div class="gi-quote-box py-2 px-3">
              <h4 class="text-[10px] font-bold text-teal-600 uppercase tracking-wider mb-1">En tu mundo (${segment.label}):</h4>
              <p class="text-slate-600 text-sm">"${profiled}"</p>
            </div>
            <div class="flex gap-1.5 pt-2">${dots}</div>
          </div>
          <div class="lg:col-span-2 gi-icon-box hidden lg:flex">
            <i data-lucide="${general.icon}" class="w-16 h-16 text-teal-300"></i>
          </div>
        </div>
        <div class="flex justify-between mt-4 pt-3 border-t border-slate-700/30">
          <button onclick="window.glosarioPrevCard()" class="px-3 py-1.5 text-slate-500 hover:text-slate-300 text-sm font-medium flex items-center gap-1 ${glosarioState.activeCard === 0 ? 'invisible' : ''}">
            <i data-lucide="chevron-left" class="w-3 h-3"></i> Anterior
          </button>
          <button onclick="window.glosarioNextCard()" class="btn-brand px-5 py-1.5 text-white rounded-lg font-bold text-sm flex items-center gap-1">
            ${glosarioState.activeCard === 5 ? 'Práctica' : 'Siguiente'} <i data-lucide="${glosarioState.activeCard === 5 ? 'swords' : 'arrow-right'}" class="w-3 h-3"></i>
          </button>
        </div>
      `;
    }

    function loadNextCase() {
      const segmentData = contentDB[glosarioState.selectedSegment];
      let currentIndex = glosarioState.currentScenario ? segmentData.scenarios.findIndex(s => s.id === glosarioState.currentScenario.id) : -1;
      let nextIndex = (currentIndex + 1) % segmentData.scenarios.length;
      glosarioState.currentScenario = segmentData.scenarios[nextIndex];
      glosarioState.simResult = null;
      render();
    }

    function renderSimulator() {
      if (!glosarioState.currentScenario) {
        glosarioState.currentScenario = contentDB[glosarioState.selectedSegment].scenarios[0];
      }
      const sim = glosarioState.currentScenario;
      const relatedKey = sim.relatedConcept;
      const generalConcept = generalConcepts[relatedKey];

      if (glosarioState.simResult) {
        const isSuccess = glosarioState.simResult === 'success';
        const resultData = isSuccess ? sim.optionB : sim.optionA;
        const colorBg = isSuccess ? 'bg-emerald-50' : 'bg-rose-50';
        const colorBorder = isSuccess ? 'border-emerald-300' : 'border-rose-300';
        const colorText = isSuccess ? 'text-emerald-600' : 'text-rose-600';

        return `
          <div class="space-y-6 text-center max-w-3xl mx-auto">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full ${colorBg} ${colorText} border ${colorBorder} font-bold uppercase text-sm">
              <i data-lucide="${isSuccess ? 'check-circle-2' : 'alert-circle'}" class="w-4 h-4"></i>
              ${isSuccess ? '¡Criterio Estratégico!' : 'Diagnóstico: Error de Concepto'}
            </div>
            <div class="${colorBg} p-6 rounded-xl border ${colorBorder}">
              <p class="text-xl text-slate-800 font-medium mb-4">"${resultData.text}"</p>
              <div class="bg-white rounded-lg p-4 text-left border ${colorBorder}">
                <h4 class="text-xs font-bold text-slate-500 uppercase">Repasa: <span class="text-teal-600">${generalConcept.title}</span></h4>
                <p class="text-slate-600 text-sm mt-1">${generalConcept.def}</p>
                <p class="text-sm mt-3 pt-3 border-t border-slate-100"><span class="${colorText} font-bold">Diagnóstico:</span> ${isSuccess ? 'Aplicaste bien el criterio.' : 'Fallaste porque ignoraste este pilar.'}</p>
              </div>
            </div>
            <div class="flex justify-center gap-4">
              ${!isSuccess ? `<button onclick="window.glosarioResetSimulator()" class="px-6 py-2 rounded-full border-2 border-slate-300 text-slate-600 hover:border-slate-400">Intentar de nuevo</button>` : ''}
              ${isSuccess ? `
                <button onclick="window.glosarioLoadNextCase()" class="px-6 py-2 rounded-full border-2 border-teal-400 text-teal-600 hover:bg-teal-50 flex items-center gap-2"><i data-lucide="refresh-cw" class="w-4 h-4"></i> Otro Caso</button>
                <button onclick="window.glosarioFinish()" class="btn-brand px-8 py-2 text-white rounded-full font-bold">Finalizar</button>
              ` : ''}
            </div>
          </div>
        `;
      }

      return `
        <div class="space-y-6">
          <div class="text-center">
            <span class="inline-block px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-xs font-bold uppercase">Clínica Práctica</span>
            <h2 class="text-2xl font-bold text-slate-800 mt-3">Caso: ${sim.title}</h2>
            <p class="text-slate-600 mt-2"><span class="font-medium text-slate-800">Situación:</span> ${sim.challenge}</p>
            <p class="text-slate-500 mt-2">¿Qué instrucción le das a tu Copiloto?</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <button onclick="window.glosarioEvaluate('fail')" class="gi-strategy-btn group">
              <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mb-3 group-hover:bg-rose-100 group-hover:text-rose-500"><span class="font-bold">A</span></div>
              <h3 class="font-bold text-slate-800 mb-1">Estrategia Directa</h3>
              <p class="text-slate-600 text-sm">${sim.optionA.label}</p>
            </button>
            <button onclick="window.glosarioEvaluate('success')" class="gi-strategy-btn group">
              <div class="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mb-3 group-hover:bg-emerald-100 group-hover:text-emerald-500"><span class="font-bold">B</span></div>
              <h3 class="font-bold text-slate-800 mb-1">Estrategia Estructurada</h3>
              <p class="text-slate-600 text-sm">${sim.optionB.label}</p>
            </button>
          </div>
        </div>
      `;
    }

    function renderConclusion() {
      return `
        <div class="text-center space-y-6">
          <span class="inline-block px-4 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-bold uppercase">Regla de Oro</span>
          <h2 class="text-xl md:text-3xl font-bold text-slate-800 max-w-2xl mx-auto">
            "La IA es tu copiloto, no tu oráculo.<br><span class="text-teal-600">Tú pones el criterio.</span>"
          </h2>
          <div class="gi-quote-box max-w-xl mx-auto text-left">
            <div class="flex items-start gap-4">
              <div class="p-3 bg-teal-100 rounded-lg text-teal-600"><i data-lucide="shield-question" class="w-6 h-6"></i></div>
              <div>
                <h3 class="font-bold text-slate-800">El Desafío Final</h3>
                <p class="text-slate-600 text-sm mt-1">Si dudas de algo, pregunta:</p>
                <p class="bg-slate-800 text-white p-3 rounded-lg mt-2 font-mono text-sm">"¿Estás 100% seguro de esta respuesta?"</p>
              </div>
            </div>
          </div>
          <p class="text-lg text-indigo-600 italic max-w-md mx-auto">"¡Nos vemos muy pronto... y recuerda: en Aula GenIA, la IA no es el futuro... <span class="font-bold text-teal-600">TÚ lo eres!</span>"</p>
          <button onclick="window.glosarioRestart()" class="px-6 py-2 rounded-full border-2 border-slate-300 text-slate-500 hover:border-slate-400 text-sm">Volver al inicio</button>
        </div>
      `;
    }

    // --- FUNCIONES DE CONTROL (globales) ---
    window.glosarioNextStep = () => { glosarioState.step++; if (glosarioState.step === 3) { glosarioState.currentScenario = null; glosarioState.simResult = null; } render(); };
    window.glosarioSelectSegment = (id) => { glosarioState.selectedSegment = id; glosarioState.activeCard = 0; window.glosarioNextStep(); };
    window.glosarioNextCard = () => { if (glosarioState.activeCard < 5) { glosarioState.activeCard++; render(); } else { window.glosarioNextStep(); } };
    window.glosarioPrevCard = () => { if (glosarioState.activeCard > 0) { glosarioState.activeCard--; render(); } };
    window.glosarioEvaluate = (result) => {
      glosarioState.simResult = result;
      if (result === 'success' && window.confetti) {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#14b8a6', '#4f46e5', '#ffffff'] });
      }
      render();
    };
    window.glosarioResetSimulator = () => { glosarioState.simResult = null; render(); };
    window.glosarioLoadNextCase = () => { loadNextCase(); };
    window.glosarioFinish = () => { glosarioState.step = 4; render(); };
    window.glosarioRestart = () => { glosarioState.step = 0; glosarioState.selectedSegment = null; glosarioState.activeCard = 0; glosarioState.simResult = null; glosarioState.currentScenario = null; render(); };

    // Inicializar
    render();
  };

  // ===================================================================
  // FIN GLOSARIO INTERACTIVO
  // ===================================================================

  // ===================================================================
  // SIMULADOR DE RECUPERACIÓN DE TIEMPO INTEGRADO
  // ===================================================================

  window.initSimuladorTiempo = function () {
    const container = document.getElementById('simulador-tiempo-container');
    if (!container) return;

    // --- DATOS ---
    const CATEGORIES = {
      'Carpintería': { rate: 0.85, label: 'Carpintería (85% Delegable)' },
      'Investigación': { rate: 0.60, label: 'Investigación (60% Delegable)' },
      'Redacción': { rate: 0.70, label: 'Redacción (70% Delegable)' },
      'Análisis': { rate: 0.65, label: 'Análisis (65% Delegable)' },
      'Estrategia': { rate: 0.50, label: 'Estrategia (50% Delegable)' }
    };

    const ROLES_TEMPLATES = {
      business: {
        label: "Negocios & Ventas",
        sublabel: "Marketing, Consultoría",
        icon: "briefcase",
        tasks: [
          { id: 'n1', name: "Limpieza y cruce de datos", hours: 10, category: "Carpintería" },
          { id: 'n2', name: "Investigación y Benchmarks", hours: 8, category: "Investigación" },
          { id: 'n3', name: "Creación de Contenidos", hours: 12, category: "Estrategia" }
        ]
      },
      legal: {
        label: "Legal & Profesional",
        sublabel: "Abogados, Auditores",
        icon: "scale",
        tasks: [
          { id: 'l1', name: "Revisión de Documentos", hours: 10, category: "Análisis" },
          { id: 'l2', name: "Redacción de Escritos", hours: 8, category: "Redacción" },
          { id: 'l3', name: "Auditoría de Normativa", hours: 6, category: "Investigación" }
        ]
      },
      admin: {
        label: "Gestión & Adm.",
        sublabel: "Operaciones, RRHH",
        icon: "clipboard-list",
        tasks: [
          { id: 'g1', name: "Filtrado de CVs", hours: 8, category: "Investigación" },
          { id: 'g2', name: "Gestión de Comunicaciones", hours: 10, category: "Redacción" },
          { id: 'g3', name: "Procesos Operativos", hours: 6, category: "Carpintería" }
        ]
      },
      education: {
        label: "Educación",
        sublabel: "Docentes, Capacitación",
        icon: "graduation-cap",
        tasks: [
          { id: 'e1', name: "Planificación y Guiones", hours: 8, category: "Estrategia" },
          { id: 'e2', name: "Corrección y Feedback", hours: 12, category: "Análisis" },
          { id: 'e3', name: "Material Didáctico", hours: 10, category: "Carpintería" }
        ]
      }
    };

    // Estado
    const simState = {
      step: 0,
      role: 'business',
      currentTasks: []
    };

    // Obtener segmento del usuario
    const savedSegment = localStorage.getItem('userSegment') || 'Negocios & Ventas';
    const segmentMap = {
      'Negocios & Ventas': 'business',
      'Legal & Profesional': 'legal',
      'Gestión & Administración': 'admin',
      'Educación & Capacitación': 'education'
    };
    const userRole = segmentMap[savedSegment] || 'business';

    function initRoleInputs(roleKey) {
      simState.role = roleKey;
      simState.currentTasks = ROLES_TEMPLATES[roleKey].tasks.map(t => ({ ...t }));
      render();
    }

    function updateTask(index, field, value) {
      if (field === 'hours') value = parseFloat(value) || 0;
      simState.currentTasks[index][field] = value;
      if (field === 'category') render();
    }

    function addTask() {
      simState.currentTasks.push({
        id: Date.now(),
        name: "Nueva Tarea...",
        hours: 5,
        category: "Carpintería"
      });
      render();
    }

    function removeTask(index) {
      simState.currentTasks.splice(index, 1);
      render();
    }

    function calculateResults() {
      let totalManual = 0;
      let totalSaved = 0;
      const taskBreakdown = [];

      simState.currentTasks.forEach(task => {
        const savingsRate = CATEGORIES[task.category].rate;
        const saved = task.hours * savingsRate;
        totalManual += task.hours;
        totalSaved += saved;
        taskBreakdown.push({
          name: task.name,
          manual: task.hours,
          saved: saved,
          humanTime: task.hours - saved,
          category: task.category,
          delegationPercent: Math.round(savingsRate * 100)
        });
      });
      return { totalManual, totalSaved, taskBreakdown };
    }

    // --- ESTILOS PREMIUM ---
    const injectStyles = () => {
      if (document.getElementById('simulador-integrated-styles')) return;
      const style = document.createElement('style');
      style.id = 'simulador-integrated-styles';
      style.textContent = `
        .simulador-integrated {
          position: relative;
          background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          border-radius: 1.5rem;
          padding: 1.5rem;
          overflow: hidden;
        }
        .simulador-integrated::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -25%;
          width: 80%;
          height: 80%;
          background: radial-gradient(ellipse, rgba(168, 85, 247, 0.2) 0%, transparent 70%);
          filter: blur(60px);
          animation: simAurora1 12s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .simulador-integrated::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -20%;
          width: 70%;
          height: 70%;
          background: radial-gradient(ellipse, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          filter: blur(60px);
          animation: simAurora2 15s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes simAurora1 {
          0% { transform: translate(0, 0); opacity: 0.3; }
          100% { transform: translate(50px, 30px); opacity: 0.5; }
        }
        @keyframes simAurora2 {
          0% { transform: translate(0, 0); opacity: 0.25; }
          100% { transform: translate(-40px, -20px); opacity: 0.45; }
        }
        .simulador-integrated .sim-card {
          position: relative;
          z-index: 1;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(24px);
          border-radius: 1.5rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }
        .simulador-integrated h1, .simulador-integrated h2, .simulador-integrated h3 {
          color: #f1f5f9;
        }
        .simulador-integrated p { color: #94a3b8; }
        .simulador-integrated .sim-role-btn {
          cursor: pointer;
          padding: 1rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(30, 41, 59, 0.5);
          transition: all 0.3s ease;
          text-align: center;
        }
        .simulador-integrated .sim-role-btn:hover {
          border-color: rgba(168, 85, 247, 0.5);
          background: rgba(168, 85, 247, 0.1);
        }
        .simulador-integrated .sim-role-btn.active {
          border-color: #a855f7;
          background: rgba(168, 85, 247, 0.2);
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
        }
        .simulador-integrated .sim-task-row {
          background: rgba(30, 41, 59, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          padding: 1rem;
          transition: all 0.3s ease;
        }
        .simulador-integrated .sim-task-row:hover {
          border-color: rgba(168, 85, 247, 0.3);
        }
        .simulador-integrated .sim-input {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: #f1f5f9;
          outline: none;
          transition: all 0.3s ease;
        }
        .simulador-integrated .sim-input:focus {
          border-bottom-color: #a855f7;
        }
        .simulador-integrated select {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #5eead4;
          border-radius: 4px;
          padding: 4px 8px;
          cursor: pointer;
        }
        .simulador-integrated select option {
          background: #0f172a;
          color: white;
        }
        .simulador-integrated .btn-sim {
          background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 30px -5px rgba(168, 85, 247, 0.5);
          transition: all 0.3s ease;
        }
        .simulador-integrated .btn-sim:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 50px -5px rgba(168, 85, 247, 0.6);
        }
        .simulador-integrated .progress-bar {
          background: rgba(71, 85, 105, 0.5);
          border-radius: 999px;
          overflow: hidden;
        }
        .simulador-integrated .progress-bar-fill {
          background: linear-gradient(90deg, #a855f7 0%, #14b8a6 100%);
          height: 100%;
          transition: all 0.5s ease;
        }
        .simulador-integrated .fade-in {
          animation: simFadeIn 0.5s ease-out forwards;
        }
        @keyframes simFadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .simulador-integrated .result-panel {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(168, 85, 247, 0.2);
        }
        .simulador-integrated .big-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #f1f5f9 0%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `;
      document.head.appendChild(style);
    };
    injectStyles();

    // --- RENDER ---
    function render() {
      let content = '';
      switch (simState.step) {
        case 0: content = renderIntro(); break;
        case 1: content = renderTaskInput(); break;
        case 2: content = renderResults(); break;
      }
      container.innerHTML = `<div class="sim-card fade-in">${content}</div>`;
      if (window.lucide) lucide.createIcons();
    }

    function renderIntro() {
      return `
        <div class="text-center space-y-4">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400">
            <i data-lucide="clock" class="w-8 h-8"></i>
          </div>
          <h1 class="text-xl md:text-2xl font-extrabold">Simulador de Recuperación de Tiempo</h1>
          <p class="text-purple-400">Descubre cuántas horas puedes delegar a la IA</p>
          <div class="max-w-lg mx-auto text-left bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
            <p class="text-sm italic">"Deja de adivinar. Dime en qué se te van las horas y te diré qué parte es carpintería delegable."</p>
            <p class="text-purple-400 font-bold mt-2 text-xs text-right">— Julia, Aula GenIA</p>
          </div>
          <button onclick="window.simSetStep(1)" class="btn-sim px-6 py-2 text-white rounded-xl font-bold inline-flex items-center gap-2 animate-pulse">
            Comenzar Auditoría <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    }

    function renderTaskInput() {
      const roleButtons = Object.entries(ROLES_TEMPLATES).map(([key, data]) => {
        const isActive = simState.role === key;
        const isUserRole = key === userRole;
        return `
          <div class="sim-role-btn ${isActive ? 'active' : ''} ${isUserRole ? 'ring-2 ring-teal-400' : 'opacity-60'}" 
               ${isUserRole ? `onclick="window.simInitRole('${key}')"` : 'style="pointer-events: none;"'}>
            <i data-lucide="${data.icon}" class="w-5 h-5 mx-auto mb-1 ${isActive ? 'text-purple-400' : 'text-slate-400'}"></i>
            <div class="text-xs font-bold ${isActive ? 'text-white' : 'text-slate-400'}">${data.label.split(' ')[0]}</div>
            ${isUserRole ? '<i data-lucide="check-circle-2" class="w-4 h-4 text-teal-400 mx-auto mt-1"></i>' : ''}
          </div>
        `;
      }).join('');

      const taskRows = simState.currentTasks.map((task, index) => {
        const savingsPercent = Math.round(CATEGORIES[task.category].rate * 100);
        const options = Object.entries(CATEGORIES).map(([catName, catData]) =>
          `<option value="${catName}" ${task.category === catName ? 'selected' : ''}>${catData.label}</option>`
        ).join('');

        return `
          <div class="sim-task-row flex flex-col gap-2">
            <div class="flex items-start gap-3">
              <button onclick="window.simRemoveTask(${index})" class="text-slate-500 hover:text-red-400 p-1 transition-colors mt-1">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
              <div class="flex-1">
                <input type="text" value="${task.name}" 
                  oninput="window.simUpdateTask(${index}, 'name', this.value)"
                  class="sim-input w-full font-bold text-sm" placeholder="Nombre de la tarea...">
                <div class="flex items-center gap-2 mt-2">
                  <span class="text-[10px] uppercase text-slate-500">Categoría:</span>
                  <select onchange="window.simUpdateTask(${index}, 'category', this.value)" class="text-xs">
                    ${options}
                  </select>
                </div>
              </div>
              <div class="text-right">
                <label class="block text-[10px] text-purple-400 font-bold uppercase">Hrs/Mes</label>
                <input type="number" min="0" max="100" value="${task.hours}"
                  onchange="window.simUpdateTask(${index}, 'hours', this.value)"
                  class="sim-input text-white font-bold text-lg w-14 text-right">
              </div>
            </div>
            <div class="flex items-center gap-2 pl-8">
              <span class="text-[10px] text-slate-500">Delegable:</span>
              <div class="flex-1 progress-bar h-1.5">
                <div class="progress-bar-fill" style="width: ${savingsPercent}%"></div>
              </div>
              <span class="text-xs font-bold text-teal-400">${savingsPercent}%</span>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">1</span>
            <h2 class="text-lg font-bold">Tu Perfil: ${ROLES_TEMPLATES[simState.role].label}</h2>
          </div>
          <div class="grid grid-cols-4 gap-2">${roleButtons}</div>
          
          <div class="space-y-2 max-h-[280px] overflow-y-auto pr-2">
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wide sticky top-0 bg-[#0f172a] py-1 z-10">Tus Tareas Mensuales</h3>
            ${taskRows}
            <button onclick="window.simAddTask()" class="w-full py-2 border border-dashed border-slate-700 rounded-lg text-slate-500 hover:text-white hover:border-slate-500 transition-all flex items-center justify-center gap-2 text-sm">
              <i data-lucide="plus" class="w-4 h-4"></i> Agregar Tarea
            </button>
          </div>
          
          <div class="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 flex gap-2 text-xs">
            <i data-lucide="info" class="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5"></i>
            <p class="text-slate-400">Clasifica bien la categoría. "Carpintería" (muy delegable) vs "Estrategia" (tú eres clave).</p>
          </div>
          
          <button onclick="window.simSetStep(2)" class="btn-sim w-full py-2 text-white rounded-xl font-bold">
            Calcular Impacto Real
          </button>
        </div>
      `;
    }

    function renderResults() {
      const data = calculateResults();
      const strategicHours = data.totalManual - data.totalSaved;
      const efficiencyPercent = Math.round((data.totalSaved / data.totalManual || 0) * 100);

      const rows = data.taskBreakdown.map(t => `
        <div class="grid grid-cols-12 gap-1 text-xs py-2 border-b border-slate-700/50 items-center">
          <div class="col-span-5 font-medium text-slate-300 truncate" title="${t.name}">${t.name}</div>
          <div class="col-span-2 text-center text-slate-500">${t.manual}h</div>
          <div class="col-span-3 text-center font-bold text-teal-400">-${t.saved.toFixed(1)}h</div>
          <div class="col-span-2 text-right">
            <span class="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-white font-bold">${t.humanTime.toFixed(1)}h</span>
          </div>
        </div>
      `).join('');

      // Trigger confetti
      if (window.confetti) {
        setTimeout(() => {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#a855f7', '#3b82f6', '#14b8a6'] });
        }, 300);
      }

      return `
        <div class="grid md:grid-cols-5 gap-4">
          <div class="md:col-span-2 result-panel rounded-xl p-4 space-y-4">
            <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tiempo Recuperable</h3>
            <div class="big-number">${data.totalSaved.toFixed(1)}h</div>
            <p class="text-teal-400 text-sm font-medium">Ahorradas al mes</p>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between border-b border-slate-700 pb-2">
                <span class="text-slate-500">Carga Manual Total</span>
                <span class="text-white font-medium">${data.totalManual}h</span>
              </div>
              <div class="bg-purple-500/10 p-2 rounded-lg border border-purple-500/20">
                <div class="text-[10px] text-purple-400 font-bold uppercase">Tu Rol Estratégico</div>
                <div class="flex justify-between items-baseline mt-1">
                  <span class="text-[10px] text-slate-500">Criterio insustituible</span>
                  <span class="text-white font-bold text-lg">${strategicHours.toFixed(1)}h</span>
                </div>
              </div>
            </div>
            <div class="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30 mt-4">
              <p class="text-[10px] text-slate-400 italic">"No es magia. Es delegar la carpintería para quedarte con la estrategia."</p>
            </div>
          </div>
          
          <div class="md:col-span-3 space-y-3">
            <div class="flex justify-between items-center">
              <h3 class="font-bold text-white">Detalle de Auditoría</h3>
              <button onclick="window.simSetStep(1)" class="text-[10px] text-purple-400 hover:text-white flex items-center gap-1">
                <i data-lucide="edit-2" class="w-3 h-3"></i> Editar
              </button>
            </div>
            <div class="grid grid-cols-12 gap-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              <div class="col-span-5">Tarea</div>
              <div class="col-span-2 text-center">Hoy</div>
              <div class="col-span-3 text-center">Ahorro IA</div>
              <div class="col-span-2 text-right">Tu Rol</div>
            </div>
            <div class="max-h-[200px] overflow-y-auto pr-1">${rows}</div>
            <div class="bg-gradient-to-r from-slate-800 to-slate-900 rounded-lg p-3 border border-slate-700 flex items-center justify-between gap-3">
              <div>
                <h4 class="font-bold text-white text-xs">¿Cómo lograr este ${efficiencyPercent}%?</h4>
                <p class="text-[10px] text-slate-500">En AulaGenIA te enseñamos el método.</p>
              </div>
              <button class="bg-white text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-slate-200 transition-colors whitespace-nowrap">
                Ver Método
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // --- FUNCIONES GLOBALES ---
    window.simSetStep = (step) => { simState.step = step; render(); };
    window.simInitRole = (roleKey) => { initRoleInputs(roleKey); };
    window.simUpdateTask = (index, field, value) => { updateTask(index, field, value); };
    window.simAddTask = () => { addTask(); };
    window.simRemoveTask = (index) => { removeTask(index); };

    // Inicializar con el rol del usuario
    initRoleInputs(userRole);
    simState.step = 0;
    render();
  };

  // ===================================================================
  // FIN SIMULADOR DE TIEMPO
  // ===================================================================

  // ===================================================================
  // AUDITOR MODELO AGIA INTEGRADO
  // ===================================================================

  window.initAuditorAGIA = function () {
    const container = document.getElementById('auditor-agia-container');
    if (!container) return;

    // Segmentos con datos
    const segments = {
      "business": { name: "Negocios & Ventas", icon: "trending-up", badPrompt: "Escribe una propuesta para vender mis servicios.", hint: "Incluye a quién le vendes y qué tono usar." },
      "legal": { name: "Legal & Profesional", icon: "scale", badPrompt: "Resume este contrato y dime si hay algo malo.", hint: "Define la meta: ¿cláusulas abusivas o resumen ejecutivo?" },
      "admin": { name: "Gestión & Adm.", icon: "clipboard-list", badPrompt: "Responde este correo diciendo que no puedo ir.", hint: "Incluye restricciones como 'máximo 3 párrafos'." },
      "education": { name: "Educación", icon: "graduation-cap", badPrompt: "Dame una idea de clase para mis alumnos.", hint: "Dile el nivel exacto y recursos disponibles." }
    };

    // Estado
    const audState = { step: 0, role: 'business', input: '', validation: { rol: false, contexto: false, meta: false, restricciones: false, formato: false } };

    // Obtener segmento del usuario
    const savedSegment = localStorage.getItem('userSegment') || 'Negocios & Ventas';
    const segmentMap = { 'Negocios & Ventas': 'business', 'Legal & Profesional': 'legal', 'Gestión & Administración': 'admin', 'Educación & Capacitación': 'education' };
    audState.role = segmentMap[savedSegment] || 'business';

    // Validación
    function runValidation() {
      const text = audState.input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      audState.validation.rol = /(actua|eres|como|experto|especialista|rol)(?:\s+\S+){2,}/i.test(text);
      audState.validation.contexto = /(contexto|situacion|tengo|empresa|cliente|soy|estoy)(?:\s+\S+){3,}/i.test(text) || text.length > 80;
      audState.validation.meta = /(meta|objetivo|quiero|lograr|necesito|crea|genera|redacta|escribe)(?:\s+\S+){2,}/i.test(text);
      audState.validation.restricciones = /(evita|no uses|maximo|minimo|restriccion|sin|prohibido|solo)(?:\s+\S+){1,}/i.test(text);
      audState.validation.formato = /(formato|salida|estructura|tabla|lista|json|parrafos|excel)(?:\s+\S+){0,}/i.test(text);
    }

    // Estilos
    const injectStyles = () => {
      if (document.getElementById('auditor-integrated-styles')) return;
      const style = document.createElement('style');
      style.id = 'auditor-integrated-styles';
      style.textContent = `
        .auditor-integrated { position: relative; background: linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%); border-radius: 1.5rem; padding: 1.5rem; overflow: hidden; }
        .auditor-integrated::before { content: ''; position: absolute; top: -40%; left: -20%; width: 60%; height: 60%; background: radial-gradient(ellipse, rgba(45, 212, 191, 0.15) 0%, transparent 70%); filter: blur(60px); pointer-events: none; animation: audAurora1 15s ease-in-out infinite alternate; }
        .auditor-integrated::after { content: ''; position: absolute; bottom: -30%; right: -15%; width: 50%; height: 50%; background: radial-gradient(ellipse, rgba(99, 102, 241, 0.15) 0%, transparent 70%); filter: blur(60px); pointer-events: none; animation: audAurora2 12s ease-in-out infinite alternate; }
        @keyframes audAurora1 { 0% { transform: translate(0,0); } 100% { transform: translate(40px,20px); } }
        @keyframes audAurora2 { 0% { transform: translate(0,0); } 100% { transform: translate(-30px,-15px); } }
        .auditor-integrated .aud-card { position: relative; z-index: 1; background: rgba(15,23,42,0.7); backdrop-filter: blur(24px); border-radius: 1.5rem; padding: 1.5rem; border: 1px solid rgba(255,255,255,0.08); color: #e2e8f0; }
        .auditor-integrated h1, .auditor-integrated h2, .auditor-integrated h3 { color: #f1f5f9; }
        .auditor-integrated .btn-aud { background: linear-gradient(135deg, #2dd4bf 0%, #6366f1 100%); border: none; box-shadow: 0 0 25px -5px rgba(45,212,191,0.4); transition: all 0.3s; }
        .auditor-integrated .btn-aud:hover { transform: translateY(-2px); box-shadow: 0 0 40px -5px rgba(45,212,191,0.5); }
        .auditor-integrated .aud-check { display: flex; align-items: center; justify-content: space-between; padding: 0.5rem; border-radius: 0.5rem; border: 1px solid transparent; transition: all 0.3s; }
        .auditor-integrated .aud-check.active { border-color: rgba(45,212,191,0.5); background: rgba(45,212,191,0.1); }
        .auditor-integrated .aud-textarea { background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 1rem; padding: 1rem; color: #f1f5f9; resize: none; outline: none; transition: all 0.3s; }
        .auditor-integrated .aud-textarea:focus { border-color: rgba(45,212,191,0.5); box-shadow: 0 0 20px -5px rgba(45,212,191,0.3); }
        .auditor-integrated .power-bar { background: rgba(71,85,105,0.5); border-radius: 999px; overflow: hidden; height: 6px; }
        .auditor-integrated .power-bar-fill { height: 100%; transition: all 0.5s; }
        .auditor-integrated .fade-in { animation: audFadeIn 0.4s ease-out; }
        @keyframes audFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `;
      document.head.appendChild(style);
    };
    injectStyles();

    // Render
    function render() {
      let content = '';
      switch (audState.step) {
        case 0: content = renderIntro(); break;
        case 1: content = renderFramework(); break;
        case 2: content = renderSimulator(); break;
        case 3: content = renderResults(); break;
      }
      container.innerHTML = `<div class="aud-card fade-in">${content}</div>`;
      if (window.lucide) lucide.createIcons();
    }

    // Toast notification
    function showAudToast(message, type = 'warning') {
      const existing = container.querySelector('.aud-toast');
      if (existing) existing.remove();

      const colors = {
        success: 'bg-teal-500/20 border-teal-500/50 text-teal-300',
        warning: 'bg-amber-500/20 border-amber-500/50 text-amber-300',
        error: 'bg-red-500/20 border-red-500/50 text-red-300'
      };

      const icons = { success: 'check-circle', warning: 'alert-triangle', error: 'x-circle' };

      const toast = document.createElement('div');
      toast.className = `aud-toast fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-xl border ${colors[type]} flex items-center gap-3 shadow-lg animate-pulse`;
      toast.innerHTML = `<i data-lucide="${icons[type]}" class="w-5 h-5"></i><span class="text-sm font-medium">${message}</span>`;
      container.appendChild(toast);
      if (window.lucide) lucide.createIcons();

      setTimeout(() => toast.remove(), 3500);
    }

    function renderIntro() {
      return `
        <div class="text-center space-y-4">
          <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-indigo-500/20 border border-teal-500/30 text-teal-400">
            <i data-lucide="wand-2" class="w-7 h-7"></i>
          </div>
          <h1 class="text-xl md:text-2xl font-black bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">Auditor Modelo AGIA</h1>
          <p class="text-slate-400 text-sm">Entrena tu criterio para crear instrucciones maestras</p>
          <div class="max-w-md mx-auto text-left bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <p class="text-sm text-slate-300 italic">"Si el resultado de la IA es mediocre, el error está en tu instrucción."</p>
            <p class="text-teal-400 font-bold mt-2 text-xs text-right">— Julia, Aula GenIA</p>
          </div>
          <button onclick="window.audSetStep(1)" class="btn-aud px-8 py-3 text-white rounded-xl font-bold inline-flex items-center gap-2 animate-pulse">
            Comenzar <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    }

    function renderFramework() {
      const items = [
        { l: 'R', t: 'Rol', d: 'Identidad experta', color: 'purple' },
        { l: 'C', t: 'Contexto', d: 'Tu escenario', color: 'blue' },
        { l: 'M', t: 'Meta', d: 'Qué entregar', color: 'teal' },
        { l: 'R', t: 'Restricciones', d: 'Límites', color: 'amber' },
        { l: 'F', t: 'Formato', d: 'Tipo salida', color: 'indigo' }
      ];
      return `
        <div class="space-y-5">
          <div class="text-center">
            <h2 class="text-lg font-bold text-white">Framework <span class="text-teal-400">AGIA</span></h2>
            <p class="text-slate-500 text-xs">5 elementos para instrucciones infalibles</p>
          </div>
          
          <div class="flex justify-center gap-2 flex-wrap">
            ${items.map(i => `
              <div class="flex items-center gap-2 px-3 py-2 bg-${i.color}-500/10 border border-${i.color}-500/30 rounded-full">
                <span class="w-6 h-6 bg-${i.color}-500/30 rounded-full flex items-center justify-center text-${i.color}-400 font-black text-xs">${i.l}</span>
                <span class="text-xs font-bold text-${i.color}-300">${i.t}</span>
              </div>
            `).join('')}
          </div>
          
          <div class="grid grid-cols-2 gap-3">
            <div class="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
              <div class="flex items-center gap-2 mb-2">
                <i data-lucide="x-circle" class="w-4 h-4 text-red-400"></i>
                <span class="text-[10px] font-bold text-red-400 uppercase">Prompt Vago</span>
              </div>
              <p class="text-xs text-slate-500 italic">"Hazme un resumen de esto."</p>
              <p class="text-[10px] text-red-400/60 mt-2">→ Resultado genérico</p>
            </div>
            <div class="p-4 bg-teal-500/5 border border-teal-500/20 rounded-xl">
              <div class="flex items-center gap-2 mb-2">
                <i data-lucide="sparkles" class="w-4 h-4 text-teal-400"></i>
                <span class="text-[10px] font-bold text-teal-400 uppercase">Instrucción AGIA</span>
              </div>
              <p class="text-xs text-slate-400 italic">"Actúa como [R], dado [C], logra [M], evita [R], en [F]."</p>
              <p class="text-[10px] text-teal-400/60 mt-2">→ Resultado preciso</p>
            </div>
          </div>
          
          <button onclick="window.audSetStep(2)" class="btn-aud w-full py-3 text-white rounded-xl font-bold flex items-center justify-center gap-2">
            Practicar Ahora <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    }

    function renderSimulator() {
      runValidation();
      const scenario = segments[audState.role];
      const completed = Object.values(audState.validation).filter(v => v).length;
      const power = (completed / 5) * 100;
      const powerColor = power < 40 ? 'from-red-500 to-red-600' : power < 80 ? 'from-amber-500 to-yellow-500' : 'from-teal-500 to-emerald-500';

      return `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i data-lucide="edit-3" class="w-4 h-4 text-teal-400"></i>
              <h2 class="text-base font-bold text-white">Editor de Instrucción</h2>
            </div>
            <span class="text-xs text-slate-600 font-mono">${audState.input.length} chars</span>
          </div>
          
          <div class="p-3 bg-red-500/5 border border-red-500/20 rounded-lg flex items-start gap-3">
            <i data-lucide="alert-circle" class="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"></i>
            <div>
              <div class="text-[10px] text-red-400 font-bold uppercase">Ejemplo de prompt débil</div>
              <p class="text-slate-500 text-xs italic mt-1">"${scenario.badPrompt}"</p>
            </div>
          </div>
          
          <div class="relative">
            <textarea id="aud-textarea" class="aud-textarea w-full h-32 text-sm" placeholder="Escribe tu instrucción aquí usando los 5 elementos AGIA..." oninput="window.audUpdateInput(this.value)">${audState.input}</textarea>
            <div class="absolute bottom-3 right-3 text-[10px] text-slate-600">
              <span class="text-teal-400 font-bold">Tip:</span> ${scenario.hint}
            </div>
          </div>
          
          <div class="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
            <div class="flex justify-between items-center mb-3">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Análisis AGIA</span>
              <span class="text-xs font-bold ${power >= 80 ? 'text-teal-400' : power >= 40 ? 'text-amber-400' : 'text-red-400'}">${completed}/5 elementos</span>
            </div>
            
            <div class="h-2 bg-slate-700/50 rounded-full overflow-hidden mb-4">
              <div class="h-full bg-gradient-to-r ${powerColor} transition-all duration-500" style="width:${power}%"></div>
            </div>
            
            <div class="flex flex-wrap gap-2 justify-center">
              ${Object.entries(audState.validation).map(([k, v]) => {
        const labels = { rol: 'Rol', contexto: 'Contexto', meta: 'Meta', restricciones: 'Restricciones', formato: 'Formato' };
        return `
                <div class="aud-check flex items-center gap-2 px-3 py-1.5 rounded-full ${v ? 'bg-teal-500/20 border border-teal-500/40' : 'bg-slate-800/50 border border-slate-700/50'}">
                  <i data-lucide="${v ? 'check-circle-2' : 'circle'}" class="w-3.5 h-3.5 ${v ? 'text-teal-400' : 'text-slate-600'}"></i>
                  <span class="text-[10px] font-bold ${v ? 'text-teal-400' : 'text-slate-500'}">${labels[k] || k}</span>
                </div>
              `}).join('')}
            </div>
          </div>
          
          <button onclick="window.audValidate()" class="btn-aud w-full py-3 text-white rounded-xl font-bold flex items-center justify-center gap-2">
            <i data-lucide="zap" class="w-4 h-4"></i> Evaluar Mi Instrucción
          </button>
        </div>
      `;
    }

    function renderResults() {
      const completed = Object.values(audState.validation).filter(v => v).length;
      const dominio = (completed / 5) * 100;
      const level = dominio >= 80 ? 'Avanzado' : dominio >= 60 ? 'Intermedio' : 'En Progreso';
      const levelColor = dominio >= 80 ? 'text-teal-400' : dominio >= 60 ? 'text-amber-400' : 'text-slate-400';

      if (dominio >= 80 && window.confetti) {
        confetti({ particleCount: 100, spread: 60, origin: { y: 0.7 }, colors: ['#2dd4bf', '#6366f1'] });
      }

      return `
        <div class="text-center space-y-5">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${dominio >= 80 ? 'from-teal-500/20 to-emerald-500/20 border-teal-500/30' : 'from-amber-500/20 to-orange-500/20 border-amber-500/30'} border">
            <i data-lucide="${dominio >= 80 ? 'trophy' : 'target'}" class="w-8 h-8 ${dominio >= 80 ? 'text-teal-400' : 'text-amber-400'}"></i>
          </div>
          
          <div>
            <h2 class="text-xl font-black text-white mb-1">${dominio >= 80 ? '¡Excelente Trabajo!' : 'Buen Intento'}</h2>
            <p class="text-slate-500 text-sm">${dominio >= 80 ? 'Tu instrucción cumple con el modelo AGIA' : 'Sigue practicando para dominar el modelo AGIA'}</p>
          </div>
          
          <div class="max-w-xs mx-auto">
            <div class="flex justify-between text-xs mb-2">
              <span class="text-slate-500">Dominio AGIA</span>
              <span class="${levelColor} font-bold">${dominio.toFixed(0)}%</span>
            </div>
            <div class="h-3 bg-slate-800 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r ${dominio >= 80 ? 'from-teal-500 to-emerald-500' : 'from-amber-500 to-orange-500'}" style="width:${dominio}%"></div>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            <div class="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div class="text-[10px] text-slate-500 uppercase mb-1">Elementos</div>
              <div class="text-lg font-black text-white">${completed}<span class="text-slate-600">/5</span></div>
            </div>
            <div class="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div class="text-[10px] text-slate-500 uppercase mb-1">Nivel</div>
              <div class="text-sm font-bold ${levelColor}">${level}</div>
            </div>
          </div>
          
          ${dominio < 100 ? `
            <div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-left max-w-sm mx-auto">
              <div class="flex items-start gap-2">
                <i data-lucide="lightbulb" class="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0"></i>
                <p class="text-xs text-amber-300/80">Intenta incluir los 5 elementos: Rol, Contexto, Meta, Restricciones y Formato para lograr el 100%.</p>
              </div>
            </div>
          ` : ''}
          
          <div class="flex gap-3 justify-center pt-2">
            <button onclick="window.audSetStep(2)" class="px-5 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-400 hover:text-white hover:border-slate-600 transition-all flex items-center gap-2">
              <i data-lucide="edit-2" class="w-4 h-4"></i> Editar
            </button>
            <button onclick="window.audRestart()" class="btn-aud px-5 py-2 text-white rounded-xl text-sm font-bold flex items-center gap-2">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Nuevo Intento
            </button>
          </div>
        </div>
      `;
    }

    // Funciones globales
    window.audSetStep = (s) => { audState.step = s; render(); };
    window.audUpdateInput = (v) => {
      audState.input = v;
      runValidation();
      updateValidationUI();
    };

    function updateValidationUI() {
      const completed = Object.values(audState.validation).filter(v => v).length;
      const power = (completed / 5) * 100;
      const powerColor = power < 40 ? 'from-red-500 to-red-600' : power < 80 ? 'from-amber-500 to-yellow-500' : 'from-teal-500 to-emerald-500';

      const powerBar = container.querySelector('.h-2.bg-slate-700\\/50 > div');
      if (powerBar) {
        powerBar.style.width = power + '%';
        powerBar.className = `h-full bg-gradient-to-r ${powerColor} transition-all duration-500`;
      }

      const elemText = container.querySelector('.text-xs.font-bold.text-teal-400, .text-xs.font-bold.text-amber-400, .text-xs.font-bold.text-red-400');
      if (elemText) {
        elemText.textContent = `${completed}/5 elementos`;
        elemText.className = `text-xs font-bold ${power >= 80 ? 'text-teal-400' : power >= 40 ? 'text-amber-400' : 'text-red-400'}`;
      }

      const charCount = container.querySelector('.font-mono');
      if (charCount) charCount.textContent = audState.input.length + ' chars';

      const labels = { rol: 'Rol', contexto: 'Contexto', meta: 'Meta', restricciones: 'Restricciones', formato: 'Formato' };
      const checks = container.querySelectorAll('.aud-check');

      Object.entries(audState.validation).forEach(([key, val]) => {
        checks.forEach(check => {
          const label = check.querySelector('span');
          if (label && label.textContent.trim() === labels[key]) {
            const icon = check.querySelector('svg, i');
            if (val) {
              check.className = 'aud-check flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/40';
              if (icon) {
                icon.outerHTML = '<i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-teal-400"></i>';
              }
              label.className = 'text-[10px] font-bold text-teal-400';
            } else {
              check.className = 'aud-check flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50';
              if (icon) {
                icon.outerHTML = '<i data-lucide="circle" class="w-3.5 h-3.5 text-slate-600"></i>';
              }
              label.className = 'text-[10px] font-bold text-slate-500';
            }
          }
        });
      });

      if (window.lucide) lucide.createIcons();
    }

    window.audValidate = () => {
      runValidation();
      const completed = Object.values(audState.validation).filter(v => v).length;
      if (audState.input.length < 50) {
        showAudToast('Instrucción muy breve. Agrega más detalle.', 'warning');
        return;
      }
      if (completed >= 3) {
        audState.step = 3;
        render();
      } else {
        showAudToast(`Te faltan ${5 - completed} elementos AGIA. Revisa el checklist.`, 'warning');
      }
    };
    window.audRestart = () => { audState.step = 0; audState.input = ''; audState.validation = { rol: false, contexto: false, meta: false, restricciones: false, formato: false }; render(); };

    render();
  };

  // ===================================================================
  // FIN AUDITOR AGIA
  // ===================================================================

  // ===================================================================
  // RADAR DE AUTOMATIZACIÓN PRO - ESTILO DARK INTEGRADO
  // ===================================================================

  window.initRadarAutomatizacion = function () {
    const container = document.getElementById('radar-automatizacion-container');
    if (!container) return;

    // Estado
    const radarState = {
      step: 0, // 0: intro, 1: input, 2: results
      tasks: [{ name: '', minutes: 30 }],
      results: null
    };

    // Ejemplos de tareas por categoría
    const taskExamples = [
      { icon: '📧', text: 'Clasificar y responder correos' },
      { icon: '📊', text: 'Generar reportes semanales' },
      { icon: '📝', text: 'Crear contenido para redes' },
      { icon: '📑', text: 'Organizar documentos' },
      { icon: '💼', text: 'Actualizar hojas de cálculo' },
      { icon: '🎨', text: 'Diseñar imágenes' }
    ];

    // Inyectar estilos
    const injectRadarStyles = () => {
      if (document.getElementById('radar-integrated-styles')) return;
      const style = document.createElement('style');
      style.id = 'radar-integrated-styles';
      style.textContent = `
        .radar-integrated { position: relative; background: linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%); border-radius: 1.5rem; padding: 1.5rem; overflow: hidden; }
        .radar-integrated::before { content: ''; position: absolute; top: -40%; left: -20%; width: 60%; height: 60%; background: radial-gradient(ellipse, rgba(245, 158, 11, 0.12) 0%, transparent 70%); filter: blur(60px); pointer-events: none; animation: radarAurora1 15s ease-in-out infinite alternate; }
        .radar-integrated::after { content: ''; position: absolute; bottom: -30%; right: -15%; width: 50%; height: 50%; background: radial-gradient(ellipse, rgba(239, 68, 68, 0.1) 0%, transparent 70%); filter: blur(60px); pointer-events: none; animation: radarAurora2 12s ease-in-out infinite alternate; }
        @keyframes radarAurora1 { 0% { transform: translate(0,0); } 100% { transform: translate(40px,20px); } }
        @keyframes radarAurora2 { 0% { transform: translate(0,0); } 100% { transform: translate(-30px,-15px); } }
        .radar-integrated .radar-card { position: relative; z-index: 1; background: rgba(15,23,42,0.7); backdrop-filter: blur(24px); border-radius: 1.5rem; padding: 1.5rem; border: 1px solid rgba(255,255,255,0.08); color: #e2e8f0; }
        .radar-integrated h1, .radar-integrated h2, .radar-integrated h3 { color: #f1f5f9; }
        .radar-integrated .btn-radar { background: linear-gradient(135deg, #f59e0b 0%, #ef4444 100%); border: none; box-shadow: 0 0 25px -5px rgba(245,158,11,0.4); transition: all 0.3s; }
        .radar-integrated .btn-radar:hover { transform: translateY(-2px); box-shadow: 0 0 40px -5px rgba(245,158,11,0.5); }
        .radar-integrated input[type="text"], .radar-integrated input[type="number"] { background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.1); color: #f1f5f9; }
        .radar-integrated input[type="text"]:focus, .radar-integrated input[type="number"]:focus { border-color: rgba(245,158,11,0.5); box-shadow: 0 0 20px -5px rgba(245,158,11,0.3); }
        .radar-integrated .fade-in { animation: radarFadeIn 0.4s ease-out; }
        @keyframes radarFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `;
      document.head.appendChild(style);
    };
    injectRadarStyles();

    // Categorizar tareas
    function categorizeTasks(tasks) {
      return tasks.map(task => {
        const name = task.name.toLowerCase();
        const weeklyMinutes = task.minutes * 5;

        const isRepetitive = ['correo', 'email', 'reporte', 'datos', 'excel', 'factura', 'actualizar'].some(k => name.includes(k));
        const isCognitive = ['escribir', 'redactar', 'crear', 'diseñar', 'analizar', 'contenido'].some(k => name.includes(k));
        const isLowValue = ['revisar redes', 'chequear'].some(k => name.includes(k));

        let category;
        if (weeklyMinutes >= 150 && isRepetitive) category = 'immediate';
        else if (isCognitive || (weeklyMinutes >= 100 && weeklyMinutes < 150)) category = 'delegate';
        else if (isLowValue || weeklyMinutes < 50) category = 'eliminate';
        else category = 'optimize';

        return { ...task, category, weeklyMinutes };
      });
    }

    // Calcular libertad
    function calculateFreedom(tasks) {
      const automatable = tasks.filter(t => t.category === 'immediate' || t.category === 'delegate');
      const hours = automatable.reduce((sum, t) => sum + t.weeklyMinutes, 0) * 52 / 60;
      return { hours: Math.round(hours), days: Math.round(hours / 8 * 10) / 10 };
    }

    // Render principal
    function render() {
      let content = '';
      switch (radarState.step) {
        case 0: content = renderIntro(); break;
        case 1: content = renderInput(); break;
        case 2: content = renderResults(); break;
      }
      container.innerHTML = `<div class="radar-card fade-in">${content}</div>`;
      if (window.lucide) lucide.createIcons();
    }

    function renderIntro() {
      return `
        <div class="text-center space-y-5">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400">
            <i data-lucide="radar" class="w-8 h-8"></i>
          </div>
          <h1 class="text-xl md:text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Radar de Automatización Pro</h1>
          <p class="text-slate-400 text-sm">Descubre qué tareas automatizar primero</p>
          
          <div class="max-w-md mx-auto text-left bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <p class="text-sm text-slate-300 italic">"Analiza tu día y recupera hasta <span class="text-amber-400 font-bold">400+ horas al año</span>. La diferencia entre el agotado y el estratega es saber qué delegar."</p>
            <p class="text-amber-400 font-bold mt-2 text-xs text-right">— Julia, Aula GenIA</p>
          </div>
          
          <div class="grid grid-cols-3 gap-2 max-w-sm mx-auto">
            ${taskExamples.slice(0, 6).map(ex => `
              <div class="p-2 bg-slate-800/30 rounded-lg border border-slate-700/50 text-center">
                <span class="text-lg">${ex.icon}</span>
                <p class="text-[9px] text-slate-500 mt-1">${ex.text}</p>
              </div>
            `).join('')}
          </div>
          
          <button onclick="window.radarSetStep(1)" class="btn-radar px-8 py-3 text-white rounded-xl font-bold inline-flex items-center gap-2 animate-pulse">
            Empezar Análisis <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      `;
    }

    function renderInput() {
      return `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i data-lucide="list-checks" class="w-4 h-4 text-amber-400"></i>
              <h2 class="text-base font-bold text-white">Ingresa tus Tareas</h2>
            </div>
            <span class="text-xs text-slate-600">${radarState.tasks.length}/5 tareas</span>
          </div>
          
          <p class="text-xs text-slate-500">Ingresa las tareas repetitivas que te consumen tiempo cada día.</p>
          
          <div class="space-y-3" id="radar-tasks-list">
            ${radarState.tasks.map((task, i) => `
              <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div class="flex items-center gap-3 mb-3">
                  <span class="w-7 h-7 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center text-xs font-bold">${i + 1}</span>
                  <input type="text" value="${task.name}" placeholder="Ej: Responder correos diarios..."
                    onchange="window.radarUpdateTask(${i}, 'name', this.value)"
                    class="flex-1 bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-amber-500/50 focus:outline-none">
                  ${radarState.tasks.length > 1 ? `
                    <button onclick="window.radarRemoveTask(${i})" class="text-slate-600 hover:text-red-400 transition-colors">
                      <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                  ` : ''}
                </div>
                <div class="flex items-center gap-3 ml-10">
                  <span class="text-xs text-slate-500">Tiempo diario:</span>
                  <input type="number" value="${task.minutes}" min="5" max="480"
                    onchange="window.radarUpdateTask(${i}, 'minutes', parseInt(this.value))"
                    class="w-16 bg-slate-900/50 border border-slate-700 rounded-lg px-2 py-1 text-sm text-white text-center focus:border-amber-500/50 focus:outline-none">
                  <span class="text-xs text-slate-500">minutos</span>
                </div>
              </div>
            `).join('')}
          </div>
          
          ${radarState.tasks.length < 5 ? `
            <button onclick="window.radarAddTask()" class="w-full py-2 border border-dashed border-slate-700 rounded-xl text-slate-500 text-sm hover:border-amber-500/50 hover:text-amber-400 transition-all flex items-center justify-center gap-2">
              <i data-lucide="plus" class="w-4 h-4"></i> Agregar otra tarea
            </button>
          ` : ''}
          
          <button onclick="window.radarAnalyze()" class="btn-radar w-full py-3 text-white rounded-xl font-bold flex items-center justify-center gap-2">
            <i data-lucide="zap" class="w-4 h-4"></i> Analizar Tareas
          </button>
        </div>
      `;
    }

    function renderResults() {
      const categorized = categorizeTasks(radarState.tasks.filter(t => t.name.trim()));
      const freedom = calculateFreedom(categorized);

      const categories = {
        immediate: { label: 'Automatización Inmediata', icon: '🔴', color: 'red', desc: 'Alto impacto, alta repetición' },
        delegate: { label: 'Delegación IA', icon: '🟠', color: 'orange', desc: 'Asistible con IA' },
        optimize: { label: 'Optimización Manual', icon: '🟡', color: 'yellow', desc: 'Mejorar sin automatizar' },
        eliminate: { label: 'Revisar/Eliminar', icon: '⚪', color: 'slate', desc: 'Bajo valor, considerar quitar' }
      };

      if (freedom.hours >= 100 && window.confetti) {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 }, colors: ['#f59e0b', '#ef4444'] });
      }

      return `
        <div class="space-y-5">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-3">
              <i data-lucide="gem" class="w-7 h-7 text-emerald-400"></i>
            </div>
            <h2 class="text-lg font-black text-white">Calculadora de Libertad</h2>
            <p class="text-slate-500 text-xs">Tiempo que puedes recuperar este año</p>
          </div>
          
          <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center">
            <div class="text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">${freedom.hours}</div>
            <div class="text-emerald-400 font-bold text-sm mt-1">horas al año</div>
            <div class="text-slate-500 text-xs mt-2">≈ ${freedom.days} días completos de libertad</div>
          </div>
          
          <div class="grid grid-cols-2 gap-3">
            ${Object.entries(categories).map(([key, cat]) => {
        const items = categorized.filter(t => t.category === key);
        return `
                <div class="p-3 bg-${cat.color}-500/5 border border-${cat.color}-500/20 rounded-xl">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-lg">${cat.icon}</span>
                    <span class="text-[10px] font-bold text-${cat.color}-400 uppercase">${cat.label}</span>
                  </div>
                  ${items.length > 0 ? items.map(t => `
                    <div class="text-xs text-slate-400 truncate mb-1">• ${t.name}</div>
                  `).join('') : '<div class="text-xs text-slate-600 italic">Sin tareas</div>'}
                </div>
              `;
      }).join('')}
          </div>
          
          ${categorized.filter(t => t.category === 'immediate').length > 0 ? `
            <div class="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <div class="flex items-start gap-3">
                <i data-lucide="lightbulb" class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0"></i>
                <div>
                  <p class="text-xs text-amber-300/80 font-bold mb-1">Siguiente Paso</p>
                  <p class="text-xs text-slate-400">Usa ChatGPT o Gemini para crear un GPT personalizado que maneje tus tareas de "Automatización Inmediata". Empieza por la que más tiempo consume.</p>
                </div>
              </div>
            </div>
          ` : ''}
          
          <div class="flex gap-3 justify-center pt-2">
            <button onclick="window.radarSetStep(1)" class="px-5 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-400 hover:text-white hover:border-slate-600 transition-all flex items-center gap-2">
              <i data-lucide="edit-2" class="w-4 h-4"></i> Editar
            </button>
            <button onclick="window.radarRestart()" class="btn-radar px-5 py-2 text-white rounded-xl text-sm font-bold flex items-center gap-2">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Nuevo Análisis
            </button>
          </div>
        </div>
      `;
    }

    // Toast
    function showRadarToast(message, type = 'warning') {
      const existing = container.querySelector('.radar-toast');
      if (existing) existing.remove();

      const colors = {
        success: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300',
        warning: 'bg-amber-500/20 border-amber-500/50 text-amber-300',
        error: 'bg-red-500/20 border-red-500/50 text-red-300'
      };

      const toast = document.createElement('div');
      toast.className = `radar-toast fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-3 rounded-xl border ${colors[type]} flex items-center gap-3 shadow-lg animate-pulse`;
      toast.innerHTML = `<i data-lucide="alert-triangle" class="w-5 h-5"></i><span class="text-sm font-medium">${message}</span>`;
      container.appendChild(toast);
      if (window.lucide) lucide.createIcons();
      setTimeout(() => toast.remove(), 3500);
    }

    // Funciones globales
    window.radarSetStep = (s) => { radarState.step = s; render(); };
    window.radarUpdateTask = (i, field, value) => { radarState.tasks[i][field] = value; };
    window.radarAddTask = () => { if (radarState.tasks.length < 5) { radarState.tasks.push({ name: '', minutes: 30 }); render(); } };
    window.radarRemoveTask = (i) => { radarState.tasks.splice(i, 1); render(); };
    window.radarAnalyze = () => {
      const validTasks = radarState.tasks.filter(t => t.name.trim());
      if (validTasks.length === 0) { showRadarToast('Ingresa al menos una tarea para analizar.', 'warning'); return; }
      radarState.step = 2;
      render();
    };
    window.radarRestart = () => { radarState.step = 0; radarState.tasks = [{ name: '', minutes: 30 }]; render(); };

    render();
  };

  // FIN RADAR DE AUTOMATIZACIÓN
  // ===================================================================

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

  // --- SEGMENTACIÓN POR PERFIL DE USUARIO ---
  const segmentConfig = {
    "Negocios & Ventas": {
      icon: "trending_up",
      color: "indigo",
      badge: "🏢",
      description: "Emprendedores, vendedores, dueños de negocio"
    },
    "Legal & Profesional": {
      icon: "gavel",
      color: "slate",
      badge: "⚖️",
      description: "Abogados, contadores, consultores"
    },
    "Gestión & Adm.": {
      icon: "settings",
      color: "teal",
      badge: "📊",
      description: "Gerentes, asistentes, coordinadores"
    },
    "Educación": {
      icon: "school",
      color: "emerald",
      badge: "🎓",
      description: "Docentes, capacitadores, diseñadores instruccionales"
    }
  };

  let currentUserSegment = localStorage.getItem('userSegment') || null;
  let currentViewTab = 'forYou'; // 'forYou' o 'explore'

  function showProfileSelectorModal() {
    const existingModal = document.getElementById('profile-selector-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'profile-selector-modal';
    modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300';
    modal.innerHTML = `
      <div class="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 animate-in zoom-in-95 duration-300">
        <div class="text-center mb-8">
          <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center">
            <i data-lucide="user-check" class="w-8 h-8 text-white"></i>
          </div>
          <h2 class="text-2xl font-extrabold text-slate-900 mb-2">¿Cuál es tu perfil?</h2>
          <p class="text-slate-500">Personalizaremos los casos según tu área de trabajo</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          ${Object.entries(segmentConfig).map(([name, cfg]) => `
            <button onclick="selectUserSegment('${name}')" 
              class="group p-6 rounded-2xl border-2 border-slate-200 hover:border-${cfg.color}-400 hover:bg-${cfg.color}-50 transition-all text-left">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-${cfg.color}-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span class="text-2xl">${cfg.badge}</span>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900">${name}</h3>
                  <p class="text-xs text-slate-500">${cfg.description}</p>
                </div>
              </div>
            </button>
          `).join('')}
        </div>
        ${currentUserSegment ? `
          <button onclick="closeProfileModal()" class="w-full mt-6 py-3 text-slate-500 hover:text-slate-700 font-medium">
            Cancelar
          </button>
        ` : ''}
      </div>
    `;
    document.body.appendChild(modal);
    lucide.createIcons();
  }

  function closeProfileModal() {
    const modal = document.getElementById('profile-selector-modal');
    if (modal) modal.remove();
  }

  window.selectUserSegment = async function (segment) {
    currentUserSegment = segment;
    localStorage.setItem('userSegment', segment);

    // Close both modals (JS-created and HTML)
    closeProfileModal();
    const htmlModal = document.getElementById('segment-selection-modal');
    if (htmlModal) htmlModal.classList.add('hidden');

    // Save to Firestore if user is logged in
    if (l && l.uid) {
      try {
        await t.collection("userProgress").doc(l.uid).set({
          userSegment: segment,
          segmentSelectedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        console.log("Segment saved to Firestore:", segment);
      } catch (err) {
        console.error("Error saving segment to Firestore:", err);
      }
    }

    // Refresh current view if in Module 5
    const currentLesson = f(c.currentLessonId);
    if (currentLesson && currentLesson.lesson.type === 'case_category') {
      h(c.currentLessonId);
    }

    // Show toast
    A(`¡Perfil actualizado a ${segment}!`);
  };

  window.showProfileSelectorModal = showProfileSelectorModal;
  window.closeProfileModal = closeProfileModal;

  const module5 = {
    title: "Módulo 5: Casos Aplicados",
    badge: "Maestro de Casos",
    lessons: []
  };

  Object.entries(segmentConfig).forEach(([name, cfg]) => {
    module5.lessons.push({
      id: 'seg-' + name.replace(/\s+/g, '-').toLowerCase().replace(/[^\w-]/g, ''),
      title: name,
      type: "segment_category",
      segmentId: name,
      icon: cfg.icon,
      badge: cfg.badge,
      categoryColor: cfg.color,
      resources: []
    });
  });

  essentialData.modules.splice(5, 0, module5);

  const isLocalDev = window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  let casesData = [];
  async function loadPromptsDatabase() {
    try {
      if (isLocalDev) {
        console.log("DEV: Cargando prompts desde archivo local...");
        const response = await fetch('./prompts_db.json');
        if (response.ok) {
          casesData = await response.json();
          console.log("DEV Success: " + casesData.length + " prompts cargados");
        } else {
          console.error("DEV Error: No se pudo cargar prompts_db.json");
        }
      } else {
        console.log("PROD: Solicitando prompts a Cloud Function...");
        const getPrompts = firebase.functions().httpsCallable("getPromptsData");
        const result = await getPrompts();
        if (result.data.success) {
          casesData = result.data.data;
          console.log("PROD Success: " + casesData.length + " prompts loaded.");
        } else {
          console.error("Respuesta invalida:", result.data);
        }
      }
      const currentLesson = f(c.currentLessonId);
      if (currentLesson && currentLesson.lesson.type === 'case_category') {
        h(c.currentLessonId);
      }
    } catch (error) {
      console.error("Load Error:", error);
    }
  }
  loadPromptsDatabase();


  function getEncryptionKey() { return [65, 71, 73, 65, 50, 48, 50, 53].map(e => String.fromCharCode(e)).join("") }
  function decryptPrompt(e) { try { if (!e) return ""; if (!e.startsWith("U2F")) return e; const t = CryptoJS.AES.decrypt(e, getEncryptionKey()); return t.toString(CryptoJS.enc.Utf8) || "Error: Corrupted Data" } catch (e) { return console.error("Decryption failed", e), "Error: Decryption Failed" } }

  window.copyToClipboard = function (btnElement) {
    // Find the text content in the sibling or parent container
    // Assuming button is inside a container with the prompt text in a specific div
    const container = btnElement.parentElement;
    const textElement = container.querySelector('.font-mono'); // Our prompt text container class

    if (textElement) {
      const text = textElement.innerText;
      navigator.clipboard.writeText(text).then(() => {
        const originalHTML = btnElement.innerHTML;
        btnElement.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> Copiado!';
        btnElement.classList.add('text-green-600');
        btnElement.classList.remove('text-indigo-600', 'text-slate-600', 'text-teal-600', 'text-emerald-600');
        lucide.createIcons();

        setTimeout(() => {
          btnElement.innerHTML = originalHTML;
          btnElement.classList.remove('text-green-600');
          // We would need to restore original color class, but let's just leave generic or re-add specific if logic allows. 
          // For simplicity, just reset to original classes found in HTML string? No, simpler to just remove green.
        }, 2000);
      });
    }
  };

  // Track current segment for hash routing
  let currentViewingSegment = null;

  window.openCaseDetail = function (caseId) {
    const cCase = casesData.find(c => c.id === caseId);
    if (!cCase) return;
    // Update URL hash for deep linking
    window.location.hash = `caso/${caseId}`;
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
    // Restore segment hash when going back
    if (currentViewingSegment) {
      window.location.hash = `segmento/${encodeURIComponent(currentViewingSegment)}`;
    } else {
      window.location.hash = '';
    }
    b();
  };

  // Open segment view with hash
  window.openSegmentView = function (segmentName) {
    currentViewingSegment = segmentName;
    window.location.hash = `segmento/${encodeURIComponent(segmentName)}`;
  };

  // Copy case URL to clipboard
  window.copyCaseUrl = function (caseId) {
    const url = `${window.location.origin}${window.location.pathname}#caso/${caseId}`;
    navigator.clipboard.writeText(url).then(() => {
      // Show toast notification
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-bottom-4';
      toast.innerHTML = '<i data-lucide="check" class="inline w-4 h-4 mr-2"></i>URL copiada';
      document.body.appendChild(toast);
      lucide.createIcons();
      setTimeout(() => toast.remove(), 2000);
    });
  };

  // Print case
  window.printCase = function () {
    window.print();
  };

  // Handle hash routing on page load and hash change
  window.addEventListener('hashchange', function () {
    const hash = window.location.hash;
    if (hash.startsWith('#caso/')) {
      const caseId = parseInt(hash.replace('#caso/', ''));
      if (caseId) window.openCaseDetail(caseId);
    } else if (hash.startsWith('#segmento/')) {
      const segmentName = decodeURIComponent(hash.replace('#segmento/', ''));
      currentViewingSegment = segmentName;
      // Trigger segment view refresh if needed
    }
  });


  function renderCaseListHTML(categoryId, segmentId = null) {
    // Si viene un segmentId, usarlo; sino usar segmento actual del usuario
    const segment = segmentId || currentUserSegment;
    const segCfg = segment ? segmentConfig[segment] : null;
    const isSegmentView = !!segmentId;

    // Filtrar casos según el tipo de vista
    let filtered;
    if (isSegmentView) {
      // Vista por segmento: mostrar todos los casos con prioridad para este segmento
      filtered = casesData.filter(c => c.prioridadSegmento && c.prioridadSegmento[segment]);
      // Ordenar por prioridad
      filtered.sort((a, b) => {
        const prioA = a.prioridadSegmento?.[segment] || 99;
        const prioB = b.prioridadSegmento?.[segment] || 99;
        if (prioA !== prioB) return prioA - prioB;
        if (a.isStarPrompt && !b.isStarPrompt) return -1;
        if (!a.isStarPrompt && b.isStarPrompt) return 1;
        return 0;
      });
    } else {
      // Vista por categoría antigua (fallback)
      filtered = casesData.filter(c => c.category === categoryId);
    }

    if (filtered.length === 0) return '<div class="p-8 text-center text-slate-500">Cargando casos... (o no hay casos para este perfil)</div>';

    // El ordenamiento ya se hace arriba en el bloque isSegmentView

    const renderCaseCard = (c) => {
      const isStarPrompt = c.isStarPrompt === true;

      return `
        <div onclick="openCaseDetail(${c.id})" class="bg-white p-5 rounded-2xl border ${isStarPrompt ? 'border-amber-200 bg-gradient-to-br from-amber-50/50 to-white' : 'border-slate-200'} hover:border-teal-400 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group relative">
           ${isStarPrompt ? '<span class="absolute -top-2 -right-2 text-lg drop-shadow-sm">⭐</span>' : ''}
           <h3 class="font-bold text-slate-800 text-sm leading-snug mb-2 group-hover:text-teal-700 transition-colors">${c.title}</h3>
           <p class="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">"${c.problem || c.description}"</p>
           <div class="mt-3 flex items-center justify-end">
              <span class="text-[11px] text-teal-600 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver caso <i data-lucide="arrow-right" class="w-3 h-3"></i>
              </span>
           </div>
        </div>
      `;
    };

    // Título del header: usar segmento si es vista por segmento
    const headerTitle = isSegmentView ? segment : categoryId;
    const totalCasesCount = filtered.length;

    // Mapeo de imágenes por segmento
    const segmentImages = {
      'Negocios & Ventas': './images/segment_negocios.png',
      'Legal & Profesional': './images/segment_legal.png',
      'Gestión & Adm.': './images/segment_gestion.png',
      'Educación': './images/segment_educacion.png'
    };
    const headerImage = isSegmentView && segmentImages[segment] ? segmentImages[segment] : null;

    // Colores de gradiente por segmento
    const segmentGradients = {
      'Negocios & Ventas': 'from-indigo-500/10 via-teal-500/5 to-white',
      'Legal & Profesional': 'from-slate-500/10 via-blue-500/5 to-white',
      'Gestión & Adm.': 'from-teal-500/10 via-coral-500/5 to-white',
      'Educación': 'from-emerald-500/10 via-yellow-500/5 to-white'
    };
    const headerGradient = isSegmentView ? (segmentGradients[segment] || 'from-slate-100 to-white') : 'from-slate-100 to-white';

    return `
    <div class="max-w-5xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <!-- HERO HEADER PREMIUM - BALANCED LAYOUT -->
        <header class="mb-8 bg-gradient-to-r ${headerGradient} rounded-2xl p-6 border border-slate-200/60 shadow-sm">
            <div class="flex items-start gap-8">
                ${headerImage ? `
                <div class="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md border border-slate-100">
                    <img src="${headerImage}" alt="${headerTitle}" class="w-full h-full object-cover" />
                </div>
                ` : `
                <div class="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-md">
                    <span class="text-3xl">${segCfg?.badge || '📚'}</span>
                </div>
                `}
                
                <div class="flex-1 min-w-0">
                    <h1 class="text-2xl md:text-3xl font-bold text-slate-900 mb-1">${headerTitle}</h1>
                    <p class="text-slate-500 text-sm mb-3">
                        ${isSegmentView
        ? segCfg?.description || 'Casos especializados para tu perfil'
        : 'Selecciona un caso práctico para comenzar.'}
                    </p>
                    ${isSegmentView ? `
                    <div class="flex items-center gap-4 text-sm text-slate-600">
                        <span class="flex items-center gap-1.5">
                            <i data-lucide="folder" class="w-4 h-4 text-teal-500"></i>
                            <strong>${totalCasesCount}</strong> casos
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="text-amber-500">⭐</span>
                            <strong>${filtered.filter(c => c.isStarPrompt).length}</strong> destacados
                        </span>
                    </div>
                    ` : ''}
                </div>
            </div>
        </header>
        
        ${filtered.length === 0 ? `
          <div class="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
              <i data-lucide="filter-x" class="w-8 h-8 text-slate-400"></i>
            </div>
            <h3 class="font-bold text-slate-700 mb-2">Sin casos para tu perfil</h3>
            <p class="text-sm text-slate-500 mb-4">No hay casos prioritarios en esta categoría para ${segment}</p>
            <button onclick="switchViewTab('explore')" class="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-medium hover:bg-indigo-200 transition-colors">
              Ver todos los casos
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${filtered.map(renderCaseCard).join('')}
          </div>
        `}
    </div>`;
  }

  window.switchViewTab = function (tab) {
    currentViewTab = tab;
    const currentLesson = f(c.currentLessonId);
    if (currentLesson && currentLesson.lesson.type === 'case_category') {
      h(c.currentLessonId);
    }
  };


  function renderCaseDetailHTML(c) {
    // Logic for Navigation
    const categoryCases = casesData.filter(item => item.category === c.category);
    // FIXED: Ensure ID comparison is type-safe
    const currentIndex = categoryCases.findIndex(item => Number(item.id) === Number(c.id));
    const prevCase = currentIndex > 0 ? categoryCases[currentIndex - 1] : null;
    const nextCase = currentIndex !== -1 && currentIndex < categoryCases.length - 1 ? categoryCases[currentIndex + 1] : null;

    // Helper: Compact Navigation Button
    const renderNavBtn = (targetCase, type) => {
      if (!targetCase) {
        return `<div class="hidden md:block flex-1"></div>`;
      }
      const isPrev = type === 'prev';
      return `
        <button onclick="openCaseDetail(${targetCase.id})" 
          class="group flex-1 flex items-center ${isPrev ? 'justify-start text-left' : 'justify-end text-right'} 
                 p-3 md:p-4 rounded-xl border border-slate-200 bg-white hover:border-teal-300 hover:shadow-md transition-all">
           
           ${isPrev ? `
             <div class="mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                <i data-lucide="chevron-left" class="w-4 h-4 text-slate-400 group-hover:text-teal-600"></i>
             </div>
           ` : ''}

           <div class="flex-1 min-w-0">
             <span class="block text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5 group-hover:text-teal-500">
                ${isPrev ? 'Anterior' : 'Siguiente'}
             </span>
             <span class="block text-xs md:text-sm font-semibold text-slate-700 leading-snug group-hover:text-slate-900 line-clamp-1">
                ${targetCase.title}
             </span>
           </div>

           ${!isPrev ? `
             <div class="ml-3 flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:text-teal-600"></i>
             </div>
           ` : ''}
           
        </button>
      `;
    };

    // Mapeo de segmentos a imágenes (detectar segmento desde prioridadSegmento)
    const detectedSegment = c.prioridadSegmento ? Object.keys(c.prioridadSegmento)[0] : null;
    const segmentImageMap = {
      'Negocios & Ventas': './images/segment_negocios.png',
      'Legal & Profesional': './images/segment_legal.png',
      'Gestión & Adm.': './images/segment_gestion.png',
      'Educación': './images/segment_educacion.png'
    };
    const headerImage = detectedSegment ? segmentImageMap[detectedSegment] : null;

    return `
        <div class="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
            
            <!-- HEADER PREMIUM CON IMAGEN DEL SEGMENTO -->
            <header class="mb-8 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-white rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                <div class="flex items-center justify-between mb-5">
                    <button onclick="backToCategory()" class="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-colors text-sm font-medium">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        <span>Volver al listado</span>
                    </button>
                    
                    <!-- Action Buttons -->
                    <div class="flex items-center gap-2">
                        ${prevCase ? `<button onclick="openCaseDetail(${prevCase.id})" class="p-2 rounded-lg bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors" title="Caso anterior"><i data-lucide="chevron-left" class="w-4 h-4 text-slate-600"></i></button>` : ''}
                        ${nextCase ? `<button onclick="openCaseDetail(${nextCase.id})" class="p-2 rounded-lg bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors" title="Caso siguiente"><i data-lucide="chevron-right" class="w-4 h-4 text-slate-600"></i></button>` : ''}
                        <button onclick="copyCaseUrl(${c.id})" class="p-2 rounded-lg bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors" title="Copiar URL">
                            <i data-lucide="link" class="w-4 h-4 text-slate-600"></i>
                        </button>
                        <button onclick="printCase()" class="p-2 rounded-lg bg-white border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors" title="Imprimir">
                            <i data-lucide="printer" class="w-4 h-4 text-slate-600"></i>
                        </button>
                    </div>
                </div>
                
                <div class="flex items-start gap-8">
                    ${headerImage ? `
                    <div class="hidden sm:block w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-white shadow-md border border-slate-100">
                        <img src="${headerImage}" alt="${detectedSegment}" class="w-full h-full object-cover" />
                    </div>
                    ` : ''}
                    
                    <div class="flex-1 min-w-0">
                        <h1 class="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight">${c.title}</h1>
                        <p class="text-slate-500 text-sm mb-3">${detectedSegment || c.category}</p>
                        
                        <div class="flex items-center gap-4 text-sm">
                            ${c.isStarPrompt ? `
                            <span class="flex items-center gap-1.5 text-amber-600 font-medium">
                                ⭐ Prompt Destacado
                            </span>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </header>

            <!-- Main Content -->
            <div class="space-y-6">
                
                <!-- El Desafío - SIMPLIFIED -->
                <section class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h2 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <i data-lucide="target" class="w-4 h-4 text-amber-500"></i>
                        El Desafío
                    </h2>
                    <p class="text-slate-700 leading-relaxed">
                        "${c.problem || c.description}"
                    </p>
                </section>

                <!-- Prompt Maestro - SIMPLIFIED -->
                <section class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-sm font-bold text-slate-500 uppercase tracking-wide flex items-center gap-2">
                            <i data-lucide="sparkles" class="w-4 h-4 text-teal-500"></i>
                            La Solución (Prompt Maestro)
                        </h2>
                        <button onclick="copyPromptText(\`${decryptPrompt(c.agiaPromptTagged).replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`)" class="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-teal-100 text-slate-600 hover:text-teal-700 text-xs font-medium rounded-lg transition-colors">
                            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                            Copiar Prompt
                        </button>
                    </div>
                    <div class="bg-slate-50 p-5 rounded-xl border border-slate-100">
                        <pre class="text-sm font-mono text-slate-700 whitespace-pre-wrap leading-relaxed">${decryptPrompt(c.agiaPromptTagged)}</pre>
                    </div>
                </section>
                
                ${(c.fineTuning && c.fineTuning.length > 0) ? `
                <!-- Ajuste Fino - SIMPLIFIED -->
                <section class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h2 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <i data-lucide="list-checks" class="w-4 h-4 text-emerald-500"></i>
                        Ajuste Fino & Calidad
                    </h2>
                    <ul class="space-y-2">
                        ${c.fineTuning.map(item => `
                        <li class="flex items-start gap-3 py-2 border-b border-slate-100 last:border-0">
                            <i data-lucide="check" class="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"></i>
                            <span class="text-sm text-slate-700">${item}</span>
                        </li>`).join('')}
                    </ul>
                </section>
                ` : ''}

                ${c.suggestedAI ? `
                <!-- Herramientas IA - SIMPLIFIED -->
                <section class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h2 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <i data-lucide="bot" class="w-4 h-4 text-indigo-500"></i>
                        Herramientas Recomendadas
                    </h2>
                    ${(function () {
          const aiText = (c.suggestedAI || '').toLowerCase();
          const tools = [];
          // Small SVG icons for each AI
          const icons = {
            ChatGPT: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="#10a37f"><path d="M22.28 9.82c.34-1.14.35-2.35.04-3.5a6.35 6.35 0 0 0-2.77-3.01 6.4 6.4 0 0 0-7.56.77 6.32 6.32 0 0 0-7.56.77A6.36 6.36 0 0 0 2.72 7c-1.05.42-1.95 1.13-2.62 2.04a6.4 6.4 0 0 0 1.34 8.48 6.4 6.4 0 0 0-.04 3.5 6.35 6.35 0 0 0 2.77 3.01 6.4 6.4 0 0 0 7.56-.77 6.4 6.4 0 0 0 7.56-.77A6.36 6.36 0 0 0 21.34 20c1.05-.42 1.95-1.13 2.62-2.04a6.4 6.4 0 0 0-1.34-8.48l-.34.34z"/></svg>',
            Claude: '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="#d97757"><path d="M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z"/></svg>',
            Gemini: '<svg class="w-4 h-4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#e8ebfa"/><path d="M12 4.4c.32 3.25 2.9 5.97 6.2 6.47-.02.03-.02.07 0 .1-3.3.5-5.88 3.23-6.2 6.48-.02-.03-.05-.03-.07 0-.32-3.25-2.9-5.97-6.2-6.47.02-.03.02-.07 0-.1 3.3-.5 5.88-3.23 6.2-6.48.01.01.04.01.07 0z" fill="url(#gemGrad)"/><defs><linearGradient id="gemGrad" x1="6" x2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#4E7CCF"/><stop offset="1" stop-color="#D5616D"/></linearGradient></defs></svg>'
          };
          if (aiText.includes('chatgpt') || aiText.includes('gpt') || aiText.includes('openai')) {
            tools.push({ name: 'ChatGPT', url: 'https://chat.openai.com', icon: icons.ChatGPT });
          }
          if (aiText.includes('claude') || aiText.includes('anthropic')) {
            tools.push({ name: 'Claude', url: 'https://claude.ai', icon: icons.Claude });
          }
          if (aiText.includes('gemini') || aiText.includes('google') || aiText.includes('bard')) {
            tools.push({ name: 'Gemini', url: 'https://gemini.google.com', icon: icons.Gemini });
          }
          if (tools.length === 0) {
            tools.push({ name: 'ChatGPT', url: 'https://chat.openai.com', icon: icons.ChatGPT });
          }
          return `
            <div class="flex flex-wrap gap-2">
                ${tools.map(t => `
                <button onclick="copyAndOpenAI(${c.id}, '${t.url}')" class="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-colors">
                    ${t.icon}
                    Abrir ${t.name}
                </button>
                `).join('')}
            </div>
          `;
        })()}
                </section>
                ` : ''}

                <!-- Insights - SIMPLIFIED -->
                <section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    ${c.solutionPlus ? `
                    <div class="sm:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <i data-lucide="lightbulb" class="w-4 h-4 text-amber-500"></i>
                            ¿Por qué funciona?
                        </h3>
                        <p class="text-slate-700 leading-relaxed">${c.solutionPlus}</p>
                    </div>` : ''}

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <i data-lucide="compass" class="w-4 h-4 text-teal-500"></i>
                            Estrategia
                        </h3>
                        <p class="text-slate-600 text-sm">${c.exampleTip || "Sigue la estructura maestra."}</p>
                    </div>

                    <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
                        <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <i data-lucide="check-circle" class="w-4 h-4 text-blue-500"></i>
                            Validación
                        </h3>
                        <p class="text-slate-600 text-sm">${c.validationTip || "Verifica el resultado."}</p>
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
              a = `
                <div id="radar-automatizacion-container" class="radar-integrated">
                  <div class="radar-card">
                    <div class="text-center py-8">
                      <div class="animate-pulse text-slate-500">Cargando Radar de Automatización...</div>
                    </div>
                  </div>
                </div>
              `;
              setTimeout(() => {
                if (window.initRadarAutomatizacion) {
                  window.initRadarAutomatizacion();
                }
              }, 100);
              break;
            case "video":
              a = e.videoUrl
                ? `<div class="flex flex-col gap-4 mt-8">\n                                <div class="video-wrapper-optimized">\n                                    <video id="course-video" controls>\n                                        <source id="course-video-source" data-src="${e.videoUrl || ""}" type="video/mp4">\n                                        ${e.transcriptionUrl ? '<track id="caption-track" kind="subtitles" srclang="es" label="Español" default>' : ""}\n                                        Tu navegador no soporta el elemento de video.\n                                    </video>\n                                </div>\n                                <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-[1200px] mx-auto w-full">\n                                ${e.transcriptionUrl ? '\n                                    <button id="toggle-subtitles-btn" class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-colors">\n                                        <i data-lucide="captions" class="h-5 w-5"></i>\n                                        <span>Desactivar Subtítulos</span>\n                                    </button>\n                                    <button id="transcription-button" class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 text-slate-800 rounded-lg font-semibold hover:bg-slate-300 transition-colors">\n                                        <i data-lucide="download" class="h-5 w-5"></i>\n                                        <span>Descargar Transcripción</span>\n                                    </button>\n                                ' : '\n                                    <div class="sm:col-span-2">\n                                        <button class="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-200 text-slate-400 rounded-lg font-semibold cursor-not-allowed" disabled>\n                                            <i data-lucide="captions-off" class="h-5 w-5"></i>\n                                            <span>Subtítulos No Disponibles</span>\n                                        </button>\n                                    </div>\n                                '}\n                                </div>\n                            </div>`
                : '<div class="aspect-w-16 aspect-h-9"><div class="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-white"><i data-lucide="play-circle" class="h-20 w-20 text-slate-500"></i><p class="absolute">Contenido del video</p></div></div>';
              break;
            case "resource":
              // Dynamic resource rendering from resources_db.js
              if (e.resourceId && window.resourcesDatabase && window.resourcesDatabase[e.resourceId]) {
                const userProfile = localStorage.getItem('userSegment') || 'Negocios & Ventas';
                const resourceData = window.getRenderedResource(e.resourceId, userProfile);
                if (resourceData) {
                  a = `
                  <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-t-2xl p-4 border border-b-0 border-teal-200 flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                          <i data-lucide="${resourceData.meta.icon || 'book-open'}" class="w-5 h-5 text-teal-600"></i>
                        </div>
                        <div>
                          <h3 class="font-bold text-teal-900">${resourceData.meta.title}</h3>
                          <p class="text-xs text-teal-600">Contenido para: ${userProfile}</p>
                        </div>
                      </div>
                      ${resourceData.pdfFallback ? `
                        <a href="${resourceData.pdfFallback}" target="_blank" class="text-xs text-teal-600 hover:text-teal-800 font-medium px-3 py-1.5 rounded-lg border border-teal-200 hover:bg-teal-100 transition-colors">
                          <i data-lucide="download" class="w-3 h-3 inline mr-1"></i>PDF
                        </a>
                      ` : ''}
                    </div>
                    <div class="bg-white p-6 md:p-8 border border-teal-200 rounded-b-2xl shadow-sm">
                      ${resourceData.html}
                    </div>
                  </div>`;
                } else {
                  a = '<div class="bg-white p-12 border border-slate-200 rounded-xl text-center text-slate-500"><i data-lucide="alert-circle" class="h-12 w-12 mx-auto mb-4 text-amber-500"></i><p>No se pudo cargar el recurso.</p></div>';
                }
              } else {
                a =
                  '<div class="bg-white p-12 border border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-600 text-center">\n                            <i data-lucide="library-big" class="h-16 w-16 text-teal-500 mb-4"></i>\n                            <h3 class="text-xl font-bold text-gray-900">Lección de Consulta</h3>\n                            <p class="mt-2 text-gray-600 max-w-md">Esta lección se compone de recursos teóricos que puedes consultar en la pestaña "Materiales".</p>\n                        </div>';
              }
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
            case "segment_category":
              // Nueva vista por segmentos (4 perfiles principales)
              a = renderCaseListHTML(null, e.segmentId);
              // Adding version badge
              const segBadge = '<div style="position:fixed;bottom:10px;right:10px;background:black;color:white;padding:5px;font-size:10px;opacity:0.6;z-index:9999">v2.0.31-SEG</div>';
              a += segBadge;
              break;
            case "case_category":
              const catCases = casesData.filter(item => item.category === e.categoryId);
              // FIXED: Always show list first ("Index of Cases")
              a = renderCaseListHTML(e.categoryId);
              // Adding version badge
              const vBadge = '<div style="position:fixed;bottom:10px;right:10px;background:black;color:white;padding:5px;font-size:10px;opacity:0.6;z-index:9999">v2.0.30-R</div>';
              a += vBadge;
              break;
            default:
              a = "<p>Tipo de lección no reconocido.</p>";
          }
          const t = document.getElementById("lesson-material-container");
          t && (t.innerHTML = a);

          if (e.type !== 'case_category') {
            if (window.innerWidth >= 1024) {
              const contentContainer = document.getElementById("lesson-content");
              if (contentContainer) {
                contentContainer.scrollTo({ top: 0, behavior: 'auto' });
              }
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }
          if (
            ((async function (e) {
              if (!m.resourcesList || !m.integratedResourcesArea) return;
              const a = f(e.id);
              if (!a || !a.module) return;

              // Render interactive resources for this module
              if (window.renderInteractiveResources) {
                window.renderInteractiveResources(a.moduleIndex);
              }
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

            // Load user segment from Firestore
            try {
              const userDoc = await t.collection("userProgress").doc(l.uid).get();
              if (userDoc.exists && userDoc.data().userSegment) {
                currentUserSegment = userDoc.data().userSegment;
                localStorage.setItem('userSegment', currentUserSegment);
                console.log("Segment loaded from Firestore:", currentUserSegment);
              } else if (!localStorage.getItem('userSegment')) {
                // No segment saved, show selection modal after a short delay
                setTimeout(() => {
                  const modal = document.getElementById('segment-selection-modal');
                  if (modal) {
                    modal.classList.remove('hidden');
                    lucide.createIcons();
                  }
                }, 1500);
              }
            } catch (segErr) {
              console.error("Error loading segment:", segErr);
            }

            (b(), Q());
            // Check for hash routing on load
            setTimeout(() => {
              const hash = window.location.hash;
              if (hash.startsWith('#caso/')) {
                const caseId = parseInt(hash.replace('#caso/', ''));
                if (caseId) window.openCaseDetail(caseId);
              }
            }, 100);
          })())
        : (window.location.href = `${o}/acceso.html?redirect=${encodeURIComponent(window.location.href)}`);
    }),
    window.lucide && window.lucide.createIcons());

});
