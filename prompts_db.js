<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bóveda de Prompts AGIA 2.0 | Estructura Maestra</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f3f4f6; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        /* Custom Scrollbar */
        .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        /* Animations */
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
        
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .toast-enter { animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* --- COLORES ESTRUCTURA MAESTRA --- */
        .hl-tag { cursor: help; transition: all 0.2s; position: relative; z-index: 1; display: inline-block; }
        .hl-tag:hover { transform: scale(1.05); z-index: 10; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        
        /* 1. ROL (Azul) */
        .hl-rol { background-color: #bfdbfe; color: #1e3a8a; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #60a5fa; } 
        /* 2. CONTEXTO (Verde) */
        .hl-contexto { background-color: #a7f3d0; color: #064e3b; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #34d399; } 
        /* 3. META (Amarillo/Ambar) */
        .hl-meta { background-color: #fde68a; color: #78350f; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #fbbf24; } 
        /* 4. RESTRICCIONES (Rojo) */
        .hl-restricciones { background-color: #fecaca; color: #7f1d1d; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #f87171; } 
        /* 5. FORMATO (Morado) */
        .hl-formato { background-color: #e9d5ff; color: #581c87; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px solid #a855f7; } 

        /* Tips Extra */
        .hl-ejemplos, .hl-validacion { background-color: #f1f5f9; color: #475569; padding: 2px 6px; border-radius: 4px; font-weight: 500; border: 1px dashed #cbd5e1; font-style: italic; font-size: 0.75rem; margin-left: 4px; }

        /* Legend Active States */
        .legend-active { transform: scale(1.1); box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-color: currentColor; background-color: white; }

        .prose-sm p { margin-bottom: 0.8em; line-height: 1.6; }
        .prose-sm ul, .prose-sm ol { margin-left: 1.2em; margin-bottom: 0.8em; }
        .prose-sm li { margin-bottom: 0.4em; }

        /* Blur Teaser Effect */
        .blur-content { filter: blur(5px); user-select: none; pointer-events: none; opacity: 0.6; }
        .premium-overlay { 
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            background: rgba(15, 23, 42, 0.05); z-index: 20;
            backdrop-filter: blur(2px);
        }

        /* Tips Animation */
        .tip-content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
        .tip-open { max-height: 200px; }
    </style>
</head>
<body class="h-screen flex flex-col overflow-hidden text-slate-800 bg-slate-100">

    <!-- Header "Brand" Style (Nuevo Diseño Azul) -->
    <header class="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg z-30 flex-none relative text-white">
        <div class="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
            <!-- Top Row: Logo & CTA -->
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-4">
                    <!-- Logo Placeholder (AGIA) -->
                    <div class="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center text-white font-black text-xl border border-white/30">
                        A
                    </div>
                    <div class="border-l border-white/20 pl-4 hidden sm:block">
                        <h1 class="text-lg font-bold tracking-tight leading-tight text-white">Bóveda de Prompts AGIA 2.0</h1>
                        <p class="text-[11px] text-indigo-100 font-medium opacity-90">Framework Maestro de Ingeniería de Prompts</p>
                    </div>
                </div>
                
                <div class="flex gap-3">
                    <button onclick="showWelcome()" class="text-indigo-200 hover:text-white transition-colors">
                        <span class="material-symbols-outlined">help</span>
                    </button>
                    <!-- Botón Compra Amarillo (Alto Contraste) -->
                    <button onclick="openPaywall()" class="hidden md:flex bg-yellow-400 hover:bg-yellow-300 text-indigo-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg shadow-indigo-900/20 transition-all items-center gap-2 transform hover:scale-105">
                        <span class="material-symbols-outlined text-sm">lock_open</span>
                        DESBLOQUEAR TODO
                    </button>
                </div>
            </div>

            <!-- Category Navigation (Pills Translucidas) -->
            <div class="overflow-x-auto custom-scroll pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                <div class="flex space-x-3 min-w-max" id="category-nav">
                    <!-- Injected by JS -->
                </div>
            </div>
        </div>
    </header>

    <!-- Main Layout -->
    <div class="flex flex-1 overflow-hidden max-w-[1920px] mx-auto w-full relative">
        
        <!-- Sidebar -->
        <aside class="w-full md:w-80 flex flex-col bg-white border-r border-slate-200 flex-none z-20 transition-all duration-300 absolute md:relative h-full transform -translate-x-full md:translate-x-0 shadow-2xl md:shadow-none" id="sidebar">
            <div class="p-4 border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur z-10">
                <div class="relative group">
                    <span class="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 group-focus-within:text-indigo-500 transition-colors">search</span>
                    <input type="text" id="searchInput" placeholder="Buscar caso de uso..." 
                        class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                        onkeyup="filterCases()">
                </div>
            </div>
            <div class="flex-1 overflow-y-auto custom-scroll p-2 space-y-1" id="case-list">
                <!-- Cases JS -->
            </div>
            <!-- TOTAL STRATEGIES COUNTER -->
            <div class="p-3 border-t border-slate-100 text-[10px] text-center text-slate-400 bg-slate-50 flex justify-between px-6">
                <span>Viendo: <strong id="count-display" class="text-slate-600">0</strong></span>
                <span>Total Bóveda: <strong id="total-display" class="text-indigo-600">0</strong></span>
            </div>
        </aside>

        <!-- Mobile Toggle -->
        <button onclick="toggleSidebar()" class="md:hidden absolute bottom-6 left-6 z-40 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">
            <span class="material-symbols-outlined">menu_open</span>
        </button>

        <!-- Main Content -->
        <main class="flex-1 flex flex-col bg-slate-50 overflow-hidden relative w-full">
            <div id="case-detail" class="flex-1 overflow-y-auto custom-scroll p-4 md:p-8 pb-32">
                <div class="max-w-6xl mx-auto fade-in">
                    
                    <!-- Header Case -->
                    <div class="flex flex-col md:flex-row md:items-center gap-4 mb-8 border-b border-slate-200 pb-6">
                        <div id="detail-icon-bg" class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-white border border-slate-100 flex-none">
                            <span id="detail-icon" class="material-symbols-outlined text-3xl"></span>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                                <span id="detail-category-badge" class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border">Categoría</span>
                                <span id="detail-verified-badge" class="hidden md:flex text-[10px] font-medium text-slate-500 items-center gap-1 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">
                                    <span class="material-symbols-outlined text-[10px] text-green-500">verified</span> Estructura Maestra 5 Pasos
                                </span>
                            </div>
                            <h2 id="detail-title" class="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">Título del Caso</h2>
                            <p id="detail-problem" class="text-sm text-slate-500 mt-1"></p>
                        </div>
                    </div>

                    <!-- Interactive Legend (The 5 Pillars) -->
                    <div id="agia-legend" class="mb-6 flex flex-wrap gap-2 justify-center md:justify-start">
                        <!-- Legend items injected by JS -->
                    </div>

                    <!-- THE PROMPT BOX (The Asset) -->
                    <div id="main-box" class="bg-white rounded-2xl shadow-sm border border-slate-200 mb-4 overflow-hidden transition-all duration-300 hover:shadow-md relative">
                        <div class="bg-slate-50/50 px-6 py-3 flex justify-between items-center border-b border-slate-100">
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                <span class="text-xs font-bold text-slate-600 uppercase tracking-wider">Prompt Maestro</span>
                            </div>
                            <div class="flex items-center gap-3">
                                <div id="ai-badge-container"></div>
                                <!-- Botón Copiar Azul Indigo -->
                                <button id="copy-btn" onclick="copyPrompt()" class="flex items-center gap-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg font-bold shadow-md shadow-indigo-200 transition-all group">
                                    <span class="material-symbols-outlined text-sm">content_copy</span> 
                                    <span>COPIAR</span>
                                </button>
                            </div>
                        </div>

                        <div id="box-content-area" class="relative bg-white min-h-[150px]">
                            <!-- Content injected here -->
                            <div id="detail-prompt-rendered" class="p-6 md:p-8 font-mono text-sm leading-relaxed text-slate-700 whitespace-pre-wrap select-all"></div>
                        </div>
                    </div>

                    <!-- INTERACTIVE TIPS (Separated from Model) -->
                    <div id="tips-container" class="grid md:grid-cols-2 gap-4 mb-8">
                        <!-- Tip: Example -->
                        <div id="tip-example-box" class="bg-yellow-50 border border-yellow-100 rounded-xl overflow-hidden transition-all">
                            <button onclick="toggleTip('example')" class="w-full px-4 py-3 flex items-center justify-between text-yellow-800 hover:bg-yellow-100/50 transition-colors">
                                <div class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-yellow-600">lightbulb</span>
                                    <span class="text-xs font-bold uppercase tracking-wide">Tip: Ejemplo (Few-Shot)</span>
                                </div>
                                <span id="icon-tip-example" class="material-symbols-outlined text-sm transition-transform">expand_more</span>
                            </button>
                            <div id="content-tip-example" class="tip-content bg-white/50 px-4">
                                <div class="py-3 text-xs text-slate-600 italic border-t border-yellow-100">
                                    <p class="mb-1 font-bold not-italic text-yellow-700">Agrega esto al prompt para mayor precisión:</p>
                                    <p id="detail-example-tip">...</p>
                                </div>
                            </div>
                        </div>

                        <!-- Tip: Validation -->
                        <div id="tip-validation-box" class="bg-green-50 border border-green-100 rounded-xl overflow-hidden transition-all">
                            <button onclick="toggleTip('validation')" class="w-full px-4 py-3 flex items-center justify-between text-green-800 hover:bg-green-100/50 transition-colors">
                                <div class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-green-600">fact_check</span>
                                    <span class="text-xs font-bold uppercase tracking-wide">Tip: Criterio de Validación</span>
                                </div>
                                <span id="icon-tip-validation" class="material-symbols-outlined text-sm transition-transform">expand_more</span>
                            </button>
                            <div id="content-tip-validation" class="tip-content bg-white/50 px-4">
                                <div class="py-3 text-xs text-slate-600 border-t border-green-100">
                                    <p class="mb-1 font-bold text-green-700">Verifica el resultado con esto:</p>
                                    <p id="detail-validation-tip">...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- COMPARISON GRID -->
                    <div id="comparison-container" class="grid md:grid-cols-2 gap-6">
                        <!-- Bad -->
                        <div class="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <h3 class="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2">
                                <span class="material-symbols-outlined text-lg">cancel</span> Lo que hace la mayoría
                            </h3>
                            <div class="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-400 italic font-mono mb-4 shadow-sm">
                                <p id="detail-bad-prompt">"..."</p>
                            </div>
                            <div class="text-xs text-slate-500">
                                <span class="font-bold">Resultado Típico:</span> <span id="detail-bad-result">...</span>
                            </div>
                        </div>

                        <!-- Good (Result Preview) -->
                        <div class="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm relative overflow-hidden group hover:border-indigo-300 transition-colors">
                            <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span class="material-symbols-outlined text-8xl text-indigo-600">auto_awesome</span>
                            </div>
                            <h3 class="text-xs font-bold text-indigo-600 uppercase mb-3 flex items-center gap-2 relative z-10">
                                <span class="material-symbols-outlined text-lg">check_circle</span> Resultado AGIA
                            </h3>
                            <div id="preview-response" class="text-xs text-slate-700 prose-sm h-full relative z-10">
                                <!-- Preview -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>

    <!-- TOAST NOTIFICATION -->
    <div id="toast" class="fixed bottom-6 right-6 z-50 transform translate-x-full transition-transform duration-300">
        <div class="bg-slate-800 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 border border-slate-700">
            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-slate-900 animate-bounce">
                <span class="material-symbols-outlined">thumb_up</span>
            </div>
            <div>
                <h4 class="font-bold text-sm">¡Copiado al portapapeles!</h4>
                <p class="text-xs text-slate-300 mt-0.5" id="toast-message">Listo para pegar en ChatGPT</p>
            </div>
        </div>
    </div>

    <!-- WELCOME MODAL -->
    <div id="welcome-modal" class="fixed inset-0 z-[70] hidden flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onclick="closeWelcome()"></div>
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden relative max-w-3xl w-full animate-in zoom-in fade-in duration-300 z-10 flex flex-col md:flex-row">
            
            <!-- Left: Visual -->
            <div class="bg-slate-900 p-8 md:w-1/3 flex flex-col justify-center text-center relative overflow-hidden">
                <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white text-3xl font-black shadow-xl mx-auto mb-4 relative z-10 border border-white/30 backdrop-blur">A</div>
                <h2 class="text-white font-bold text-2xl relative z-10">Método AGIA</h2>
                <p class="text-indigo-200 text-sm mt-2 relative z-10">La fórmula de 5 pasos para dominar la IA.</p>
            </div>

            <!-- Right: Steps -->
            <div class="p-8 md:w-2/3">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="font-bold text-slate-800 text-lg">Estructura Maestra del Prompt</h3>
                    <button onclick="closeWelcome()" class="text-slate-400 hover:text-slate-600">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>

                <div class="space-y-3 mb-8">
                    <!-- Updated colors in welcome modal to match the new palette -->
                    <div class="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
                        <div class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs border border-blue-200">1</div>
                        <div><p class="text-xs font-bold text-slate-700 uppercase">Rol</p><p class="text-[10px] text-slate-500">¿Quién actúa? (Experto)</p></div>
                    </div>
                    <div class="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
                        <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs border border-emerald-200">2</div>
                        <div><p class="text-xs font-bold text-slate-700 uppercase">Contexto</p><p class="text-[10px] text-slate-500">¿Qué sucede? (Datos)</p></div>
                    </div>
                    <div class="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
                        <div class="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs border border-amber-200">3</div>
                        <div><p class="text-xs font-bold text-slate-700 uppercase">Meta</p><p class="text-[10px] text-slate-500">¿Qué lograr? (Objetivo)</p></div>
                    </div>
                    <div class="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
                        <div class="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs border border-red-200">4</div>
                        <div><p class="text-xs font-bold text-slate-700 uppercase">Restricciones</p><p class="text-[10px] text-slate-500">¿Qué evitar? (Reglas)</p></div>
                    </div>
                    <div class="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
                        <div class="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs border border-purple-200">5</div>
                        <div><p class="text-xs font-bold text-slate-700 uppercase">Formato</p><p class="text-[10px] text-slate-500">¿Cómo entregar? (Salida)</p></div>
                    </div>
                </div>

                <button onclick="closeWelcome()" class="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg text-sm">
                    ENTENDIDO, VAMOS A LA BÓVEDA
                </button>
            </div>
        </div>
    </div>

    <!-- PAYWALL MODAL -->
    <div id="paywall-modal" class="fixed inset-0 z-[60] hidden">
        <div class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" onclick="closePaywall()"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4">
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300">
                <button onclick="closePaywall()" class="absolute top-3 right-3 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1 z-10">
                    <span class="material-symbols-outlined">close</span>
                </button>
                
                <div class="bg-gradient-to-br from-indigo-600 to-purple-800 p-8 text-center relative overflow-hidden">
                    <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <span class="material-symbols-outlined text-5xl text-yellow-300 mb-3 relative z-10 drop-shadow-md">workspace_premium</span>
                    <h3 class="text-white font-black text-2xl relative z-10 tracking-tight">Acceso VIP</h3>
                    <p class="text-indigo-100 text-sm relative z-10 mt-1">Desbloquea la fórmula detrás de este resultado.</p>
                </div>
                
                <div class="p-6">
                    <div class="text-center mb-6">
                         <p class="text-xs text-slate-400 line-through mb-1">$19.990</p>
                         <p class="text-3xl font-black text-slate-800">$9.990 <span class="text-xs font-normal text-slate-500 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full ml-2">50% OFF</span></p>
                    </div>
                    <a href="#" class="block w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transform hover:-translate-y-1 transition-all shadow-xl flex items-center justify-center gap-2">
                        <span>DESBLOQUEAR BÓVEDA</span>
                    </a>
                    <p class="text-[10px] text-center text-slate-400 mt-3">Pago único y seguro.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Script Principal -->
    <script src="prompts_db.js"></script>
    <script>
        // Configuración de Categorías (Debe coincidir con DB)
        const config = {
            categories: {
                productivity: { label: "🚀 Productividad 10x", color: "emerald", icon: "rocket_launch" },
                finance: { label: "💰 Finanzas & Inversión", color: "amber", icon: "monetization_on" }, 
                sales: { label: "🔥 Ventas & Copy", color: "pink", icon: "campaign" },
                art: { label: "🎨 Arte Digital", color: "fuchsia", icon: "palette" },
                life: { label: "🧘 Vida Balanceada", color: "orange", icon: "self_improvement" },
                tech: { label: "🧠 Cerebro Digital", color: "violet", icon: "memory" },
                education: { label: "🎓 Educación", color: "cyan", icon: "school" },
                engineering: { label: "🛠️ Ingeniería Prompt", color: "slate", icon: "construction" }
            },
            legend: [
                { k: 'r', l: '1. Rol', c: 'hl-rol' },
                { k: 'c', l: '2. Contexto', c: 'hl-contexto' },
                { k: 'm', l: '3. Meta', c: 'hl-meta' },
                { k: 'l', l: '4. Restricciones', c: 'hl-restricciones' },
                { k: 'f', l: '5. Formato', c: 'hl-formato' }
            ]
        };

        let currentCategory = 'productivity';

        function init() {
            renderCategories();
            renderLegend();
            renderCaseList();
            updateTotalCounter();
            
            if (!localStorage.getItem('agia_welcome_seen_v2')) {
                showWelcome();
            }

            // Seleccionar el primer caso disponible de la categoría actual
            const firstCase = allCases.find(c => c.category === currentCategory);
            if (firstCase) selectCase(firstCase.id);
            
            setupLegendInteractions();
        }

        // --- UI FUNCTIONS ---

        function showWelcome() { document.getElementById('welcome-modal').classList.remove('hidden'); }
        function closeWelcome() {
            document.getElementById('welcome-modal').classList.add('hidden');
            localStorage.setItem('agia_welcome_seen_v2', 'true');
        }
        function openPaywall() { document.getElementById('paywall-modal').classList.remove('hidden'); }
        function closePaywall() { document.getElementById('paywall-modal').classList.add('hidden'); }
        function toggleSidebar() { document.getElementById('sidebar').classList.toggle('-translate-x-full'); }

        function toggleTip(type) {
            const content = document.getElementById(`content-tip-${type}`);
            const icon = document.getElementById(`icon-tip-${type}`);
            
            if (content.classList.contains('tip-open')) {
                content.classList.remove('tip-open');
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.classList.add('tip-open');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        function renderCategories() {
            const nav = document.getElementById('category-nav');
            if(!nav) return;
            nav.innerHTML = Object.keys(config.categories).map(key => {
                const conf = config.categories[key];
                const active = currentCategory === key;
                const activeClass = active 
                    ? `bg-white text-indigo-700 shadow-md font-bold` 
                    : `bg-white/10 text-white hover:bg-white/20`;

                return `<button onclick="setCategory('${key}')" class="${activeClass} px-4 py-2 rounded-full text-xs transition-all whitespace-nowrap flex items-center gap-2 border border-white/10 backdrop-blur-sm">
                    <span class="material-symbols-outlined text-base">${conf.icon}</span> ${conf.label}
                </button>`;
            }).join('');
        }

        function renderLegend() {
            const el = document.getElementById('agia-legend');
            if(!el) return;
            el.innerHTML = config.legend.map(item => `
                <div class="legend-item flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all cursor-help select-none text-[10px]" data-type="${item.k}">
                    <div class="w-3 h-3 rounded bg-[${item.c}] ${item.c.replace('hl-', 'bg-').replace('rol', 'blue-200').replace('contexto', 'emerald-200').replace('meta', 'amber-200').replace('restricciones', 'red-200').replace('formato', 'purple-200')}"></div>
                    <span class="font-bold text-slate-600 uppercase tracking-tight">${item.l}</span>
                </div>
            `).join('');
        }

        function renderCaseList() {
            const list = document.getElementById('case-list');
            if(!list) return;
            
            const searchInput = document.getElementById('searchInput');
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

            // Filter logic
            const filtered = allCases.filter(c => {
                const matchesCategory = currentCategory ? c.category === currentCategory : true;
                const matchesSearch = c.title.toLowerCase().includes(searchTerm) || c.problem.toLowerCase().includes(searchTerm);
                return matchesCategory && matchesSearch;
            });
            
            document.getElementById('count-display').innerText = filtered.length;

            if(filtered.length === 0) {
                list.innerHTML = `<div class="p-4 text-center text-slate-400 text-xs mt-10">No hay resultados en esta categoría.</div>`;
                return;
            }

            list.innerHTML = filtered.map(c => {
                const isLocked = c.locked;
                return `<div onclick="selectCase(${c.id}); if(window.innerWidth < 768) toggleSidebar()" class="group p-3 rounded-lg cursor-pointer hover:bg-indigo-50 transition-all border border-transparent hover:border-indigo-100 relative">
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded bg-white border border-slate-100 flex items-center justify-center shadow-sm flex-none group-hover:scale-110 transition-transform">
                            <span class="material-symbols-outlined text-lg ${isLocked ? 'text-slate-300' : 'text-indigo-600'}">${isLocked ? 'lock' : c.icon}</span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h4 class="text-sm font-bold text-slate-700 truncate group-hover:text-indigo-700">${c.title}</h4>
                            <p class="text-[11px] text-slate-400 truncate">${c.problem}</p>
                        </div>
                        ${isLocked ? '<span class="text-[9px] bg-slate-100 text-slate-500 px-1.5 rounded border">PRO</span>' : ''}
                    </div>
                </div>`
            }).join('');
        }

        function selectCase(id) {
            const c = allCases.find(x => x.id === id);
            if(!c) return;

            // Update Header
            document.getElementById('detail-title').innerText = c.title;
            document.getElementById('detail-problem').innerText = c.problem;
            document.getElementById('detail-icon').innerText = c.icon;
            
            const catConf = config.categories[c.category];
            const badge = document.getElementById('detail-category-badge');
            badge.innerText = catConf.label;
            badge.className = `text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-${catConf.color}-50 text-${catConf.color}-700 border-${catConf.color}-200`;
            
            const iconBg = document.getElementById('detail-icon-bg');
            iconBg.className = `w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm bg-${catConf.color}-50 border border-${catConf.color}-100 flex-none text-${catConf.color}-600`;

            // Tips
            document.getElementById('detail-example-tip').innerText = c.exampleTip || "No se requiere ejemplo específico.";
            document.getElementById('detail-validation-tip').innerText = c.validationTip || "Verifica que el output cumpla la meta.";
            
            // Reset UI states
            document.querySelectorAll('.tip-content').forEach(el => el.classList.remove('tip-open'));
            document.querySelectorAll('[id^="icon-tip-"]').forEach(el => el.style.transform = 'rotate(0deg)');

            // Content Filling
            document.getElementById('detail-bad-prompt').innerText = `"${c.badPrompt}"`;
            document.getElementById('detail-bad-result').innerHTML = c.badResponsePreview;
            document.getElementById('preview-response').innerHTML = c.previewResponse;

            const contentArea = document.getElementById('box-content-area');
            const copyBtn = document.getElementById('copy-btn');
            
            if (c.locked) {
                // TEASER MODE
                copyBtn.classList.add('hidden');
                document.getElementById('tips-container').classList.add('hidden');
                
                contentArea.innerHTML = `
                    <div class="relative w-full overflow-hidden">
                        <div class="p-8 blur-content bg-slate-50 h-64 select-none">
                             <span class="hl-tag hl-rol">Actúa como experto...</span> <span class="hl-tag hl-contexto">Contexto detallado...</span>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                             <br><br>
                             <span class="hl-tag hl-meta">Instrucción clave...</span> Duis aute irure dolor.
                        </div>
                        <div class="premium-overlay">
                            <div class="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 text-center max-w-sm animate-in zoom-in duration-300">
                                <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span class="material-symbols-outlined text-yellow-600 text-2xl">lock</span>
                                </div>
                                <h3 class="font-bold text-slate-800 text-lg">Contenido Premium</h3>
                                <p class="text-xs text-slate-500 mb-4 px-4">Desbloquea la fórmula secreta detrás de este resultado.</p>
                                <button onclick="openPaywall()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg font-bold text-xs transition-colors shadow-lg flex items-center justify-center gap-2">
                                    <span class="material-symbols-outlined text-sm">key</span> REVELAR FÓRMULA
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                // UNLOCKED MODE
                copyBtn.classList.remove('hidden');
                document.getElementById('tips-container').classList.remove('hidden');
                contentArea.innerHTML = `<div id="detail-prompt-rendered" class="p-6 md:p-8 font-mono text-sm leading-relaxed text-slate-700 whitespace-pre-wrap select-all transition-colors duration-300">` 
                    + parseAGIA(c.agiaPromptTagged) + 
                    `</div>`;
            }
        }

        // --- UTILS ---

        function parseAGIA(text) {
            let html = text
                .replace(/{r}(.*?){\/r}/g, '<span class="hl-tag hl-rol" data-type="r">$1</span>')
                .replace(/{c}(.*?){\/c}/g, '<span class="hl-tag hl-contexto" data-type="c">$1</span>')
                .replace(/{m}(.*?){\/m}/g, '<span class="hl-tag hl-meta" data-type="m">$1</span>')
                .replace(/{l}(.*?){\/l}/g, '<span class="hl-tag hl-restricciones" data-type="l">$1</span>')
                .replace(/{f}(.*?){\/f}/g, '<span class="hl-tag hl-formato" data-type="f">$1</span>')
                .replace(/\n/g, '<br>');
            return html;
        }

        function setupLegendInteractions() {
            document.querySelectorAll('.legend-item').forEach(item => {
                item.addEventListener('mouseenter', () => {
                    const type = item.getAttribute('data-type');
                    document.querySelectorAll(`.hl-tag[data-type="${type}"]`).forEach(el => {
                        el.classList.add('ring-2', 'ring-offset-1', 'ring-slate-400', 'scale-105');
                    });
                });
                item.addEventListener('mouseleave', () => {
                    const type = item.getAttribute('data-type');
                    document.querySelectorAll(`.hl-tag[data-type="${type}"]`).forEach(el => {
                        el.classList.remove('ring-2', 'ring-offset-1', 'ring-slate-400', 'scale-105');
                    });
                });
            });
        }

        function copyPrompt() {
            const title = document.getElementById('detail-title').innerText;
            const c = allCases.find(x => x.title === title);
            if(!c) return;

            // Remove tags for clean copy
            const rawText = c.agiaPromptTagged
                .replace(/{[rcmlf]}/g, '')
                .replace(/{\/[rcmlf]}/g, '')
                .replace(/<br\s*\/?>/gi, '\n');

            navigator.clipboard.writeText(rawText);

            const toast = document.getElementById('toast');
            
            // Logic for Time Saved based on Difficulty
            const SAVED_TIME_MAP = {
                'beginner': '10-15',
                'intermediate': '30-45',
                'advanced': '90+'
            };
            const savedTime = SAVED_TIME_MAP[c.difficulty] || '15-20';
            
            document.getElementById('toast-message').innerHTML = `Ahorraste aprox. <strong>${savedTime} minutos</strong> de trabajo.`;
            toast.classList.remove('translate-x-full');
            setTimeout(() => { toast.classList.add('translate-x-full'); }, 3000);
        }

        function setCategory(cat) {
            currentCategory = cat;
            // Clear search when changing category
            const searchInput = document.getElementById('searchInput');
            if(searchInput) searchInput.value = '';
            
            renderCategories();
            renderCaseList();
        }

        function filterCases() {
            renderCaseList();
        }

        function updateTotalCounter() {
            const totalEl = document.getElementById('total-display');
            if(totalEl) totalEl.innerText = allCases.length;
        }

        // Start App
        init();
    </script>
</body>
</html>
