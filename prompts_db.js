// ==========================================
// 🧠 BÓVEDA DE PROMPTS AGIA 2.0 - MASTER DB
// Total Casos: ~100 | Optimización: God Mode
// ==========================================

const createCase = (id, cat, title, icon, problem, badPrompt, badResPreview, goodPromptTagged, exampleTip, validationTip, goodResPreview, suggestedAI, locked = false, isTool = false, difficulty = 'beginner') => ({
    id, category: cat, title, icon, problem, 
    badPrompt, 
    badResponsePreview: badResPreview,
    agiaPromptTagged: goodPromptTagged, 
    exampleTip, validationTip,
    previewResponse: goodResPreview,
    suggestedAI, locked, isTool, difficulty
});

const allCases = [
    
    // ==========================================
    // 🚀 PRODUCTIVIDAD (101-110) - (ACTUALIZADO: TEXTO LITERAL + HTML)
    // ==========================================
    createCase(101, 'productivity', 'Fórmulas "Imposibles"', 'calculate', 'Excel: Buscar precios en otras hojas.', 
        'Dame una fórmula de excel para buscar un precio en otra hoja.',
        '<div class="text-xs text-slate-500 italic font-mono">=BUSCARV(A2, Hoja2!A:B, 2, FALSO)</div><div class="mt-2 text-[10px] text-red-600 font-bold flex gap-1"><span class="material-symbols-outlined text-[12px]">error</span> Falla: Da error #REF! por rangos mal definidos.</div>', 
        '{r}Actúa como un MVP de Microsoft Excel (Experto Certificado).{/r} {c}Mi problema: Tengo dos tablas. En la "Tabla A" tengo códigos de producto. En la "Tabla B" tengo los códigos y sus precios. Objetivo: Traer el precio de la Tabla B a la Tabla A si los códigos coinciden. Nombres de columnas: La columna común es "SKU". La columna de precio es "Precio Final".{/c} {m}Generar la fórmula exacta para solucionar esto.{/m} {l}No uses BUSCARV (es antiguo), usa XLOOKUP (BuscarX) o INDEX/MATCH que son más seguros. Explica brevemente qué hace cada parte de la fórmula.{/l} {f}Bloque de Código + Explicación simple.{/f}', 
        'Code Explanation & Modern Standards.', '¿Te sientes capaz de arreglar tu planilla ahora mismo sin llamar al de IT?', 
        '<div class="bg-slate-900 text-green-400 p-3 rounded font-mono text-xs mb-2 border-l-4 border-green-600">=BUSCARX(A2; \'Tabla B\'!A:A; \'Tabla B\'!B:B; "No encontrado"; 0)</div><div class="text-[11px] text-slate-700"><strong>Explicación para humanos:</strong><br>• <strong>A2:</strong> Es el código que estamos buscando.<br>• <strong>\'Tabla B\'!A:A:</strong> Es la columna donde Excel buscará ese código.<br>• <strong>\'Tabla B\'!B:B:</strong> Es la columna de donde sacará el precio.<br>• <strong>"No encontrado":</strong> Lo que aparecerá si el código no existe.</div>', 'chatgpt', false, false, 'beginner'),

    createCase(102, 'productivity', 'El Limpiador de Datos', 'cleaning_services', 'Data Cleaning: Listas desordenadas.', 
        'Arregla esta lista de nombres que está desordenada.',
        '<div class="text-xs text-slate-500 italic">"Aquí tienes la lista arreglada: Juan Pérez, María Gómez..."</div><div class="mt-2 text-[10px] text-red-600 font-bold flex gap-1"><span class="material-symbols-outlined text-[12px]">warning</span> Falla: En listas largas se corta o alucina nombres.</div>', 
        '{r}Eres un Analista de Datos Senior.{/r} {c}Problema: Tengo una lista de 50 nombres propios mal escritos (mezcla de mayúsculas, minúsculas y espacios extra). Input: [Pegar lista de ejemplo sucia: "jUan perez ", "MARIA  gonzalez"]{/c} {m}Limpiar y normalizar los datos.{/m} {l}Formato: "Nombre Apellido" (Primera letra mayúscula, resto minúscula). Elimina cualquier espacio al inicio o final. Si hay duplicados, elimínalos.{/l} {f}Tabla Markdown o Bloque de Código listo para copiar a Excel.{/f}', 
        'Few-Shot Prompting.', '¿Podrías copiar y pegar esto directo a tu informe final?', 
        '<div class="overflow-x-auto"><table class="w-full text-[10px] border-collapse border border-slate-200"><thead><tr class="bg-slate-50"> <th class="border p-1">Nombre Original</th> <th class="border p-1 text-blue-600">Nombre Limpio</th> </tr></thead><tbody><tr><td class="border p-1">jUan perez</td><td class="border p-1">Juan Perez</td></tr><tr><td class="border p-1">MARIA gonzalez</td><td class="border p-1">Maria Gonzalez</td></tr></tbody></table></div><p class="text-[10px] mt-2 italic text-slate-500">Nota: Se han eliminado los espacios adicionales y corregido las mayúsculas.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(103, 'productivity', 'Macros sin Código', 'code', 'VBA: Automatizar reportes diarios.', 
        'Haz una macro para poner formato a mi tabla.',
        '<div class="text-xs text-slate-500 italic font-mono">Sub Formato() Range("A1").Font.Bold = True End Sub</div><div class="mt-2 text-[10px] text-red-600 font-bold">Falla: Código rígido que no se adapta a tablas reales.</div>', 
        '{r}Eres un Desarrollador Experto en VBA (Visual Basic) para Excel.{/r} {c}Tarea Repetitiva: Todos los días recibo un reporte crudo y debo darle el mismo formato para enviarlo a gerencia.{/c} {m}Escribir el código de una Macro completa.{/m} {l}La macro debe: Poner los encabezados (Fila 1) en negrita y fondo azul. Ajustar el ancho de las columnas automáticamente (Autofit). Poner bordes a toda la tabla usada. Añadir comentarios en el código explicando qué hace cada línea.{/l} {f}Bloque de código VBA listo para pegar en el editor.{/f}', 
        'Step-by-Step Logic.', '¿Te sientes un "hacker" pudiendo automatizar tu trabajo sin saber código?', 
        '<div class="bg-slate-900 p-3 rounded text-xs font-mono text-blue-300 leading-relaxed"><span class="text-slate-500">\' 1. Detectar toda la tabla activa</span><br>Dim rng As Range<br>Set rng = Range("A1").CurrentRegion<br><span class="text-slate-500">\' 2. Encabezados Azul/Blanco</span><br>With rng.Rows(1)<br>&nbsp;&nbsp;.Interior.Color = RGB(0, 112, 192)<br>&nbsp;&nbsp;.Font.Color = vbWhite<br>&nbsp;&nbsp;.Font.Bold = True<br>End With<br><span class="text-slate-500">\' 3. Ajustar y bordes</span><br>rng.Columns.AutoFit<br>rng.Borders.LineStyle = xlContinuous</div>', 'chatgpt', false, false, 'advanced'),

    createCase(104, 'productivity', 'Análisis Sentimiento CX', 'sentiment_satisfied', 'Insights: Analizar 1.000 reseñas.', 
        'Lee estas reseñas y dime qué piensa la gente.',
        '<div class="text-xs text-slate-500 italic">"La gente piensa que el producto es bueno pero el envío es lento..."</div><div class="mt-2 text-[10px] text-red-600 font-bold">Falla: Muy vago, no sirve para tomar decisiones.</div>', 
        '{r}Eres un Analista de Experiencia de Cliente (CX).{/r} {c}Datos: [Pegar 20 comentarios/reseñas de clientes] Problema: Las ventas bajaron y no sabemos por qué.{/c} {m}Realizar un Análisis de Sentimiento y categorización de quejas.{/m} {l}Clasifica cada comentario en: Positivo, Neutral, Negativo. Identifica los 3 patrones o temas más repetidos (ej: "Precio", "Envío", "Calidad"). Sugiere una acción correctiva para el problema principal.{/l} {f}Tabla de Resumen + Conclusión Ejecutiva.{/f}', 
        'Pattern Recognition.', '¿Tienes claro exactamente qué fuego debes apagar hoy en tu empresa?', 
        '<div class="text-[11px] space-y-2"><div class="font-bold border-b pb-1">Patrones Detectados:</div><div class="flex gap-2"><span class="text-red-600 font-bold">🔴 Envíos (80% Negativo):</span><span>Clientes se quejan de Starken/Chilexpress.</span></div><div class="flex gap-2"><span class="text-green-600 font-bold">🟢 Calidad (90% Positivo):</span><span>Aman el material del producto.</span></div><div class="bg-blue-50 p-2 border-l-2 border-blue-400"><strong>Acción Recomendada:</strong> Cambiar proveedor logístico o enviar correos de "retraso" preventivos.</div></div>', 'claude', false, false, 'intermediate'),

    createCase(105, 'productivity', 'Resumen Ejecutivo PDF', 'description', 'Estrategia: Entender 50 páginas en 2 min.', 
        'Resume este texto.',
        '<div class="text-xs text-slate-500 italic">"El texto habla sobre el mercado del cobre en 2024. Dice que subió y luego bajó..."</div>', 
        '{r}Eres un Consultor de Estrategia de Negocios.{/r} {c}Documento: [Copiar texto del informe o adjuntar PDF] Audiencia: Este resumen es para el Gerente General que tiene solo 5 minutos.{/c} {m}Extraer la información crítica del informe.{/m} {l}Extrae: Los 3 Riesgos principales, las 3 Oportunidades y cualquier cifra financiera ($) mencionada. Ignora la introducción y los agradecimientos. Usa Bullet Points.{/l} {f}Sección "Riesgos" | Sección "Oportunidades" | Sección "Cifras Clave".{/f}', 
        'Information Extraction.', '¿Podrías entrar a una reunión y hablar del tema habiendo leído solo esto?', 
        '<div class="text-[11px] space-y-2"><div class="text-red-700 font-bold">⚠️ Riesgos Principales:</div><ul class="list-disc pl-4"><li>Aumento 15% costos materia prima por inflación.</li><li>Nuevo competidor en LATAM en Q3.</li></ul><div class="text-green-700 font-bold">💰 Cifras Clave:</div><ul class="list-disc pl-4"><li>Facturación: $4.5M USD</li><li>Crecimiento: +12%</li></ul></div>', 'claude', false, false, 'intermediate'),

    createCase(106, 'productivity', 'FODA Instantáneo', 'grid_view', 'SWOT: Generar estrategia desde datos sueltos.', 
        'Haz un FODA de mi empresa de zapatos.',
        '<div class="text-xs text-slate-500 italic">"Fortalezas: Buen producto. Debilidades: Poco dinero..."</div>', 
        '{r}Eres un Estratega de Negocios Senior.{/r} {c}Empresa: [Venta de zapatos de cuero artesanales] Situación: [Tenemos buena calidad pero somos caros y no tenemos tienda online, solo Instagram] Competencia: [Tiendas grandes chinas con precios bajos]{/c} {m}Crear una Matriz FODA (SWOT) estratégica y específica.{/m} {l}Cruza las variables: ¿Cómo uso mis Fortalezas para aprovechar las Oportunidades? Sé brutalmente honesto en las Debilidades.{/l} {f}Matriz de 4 cuadrantes + 2 Estrategias de "Cruce".{/f}', 
        'Strategic Reasoning.', '¿Te dio una idea clara de cómo atacar el mercado mañana?', 
        '<div class="text-[11px] space-y-2"><div class="flex gap-2"><span class="font-bold text-red-800">💀 Amenaza:</span><span>Preferencia por calzado chino barato por recesión.</span></div><div class="flex gap-2"><span class="font-bold text-green-800">🛡️ Fortaleza:</span><span>Durabilidad extrema (10 años de vida útil).</span></div><div class="bg-indigo-50 p-2 border-l-2 border-indigo-600 font-medium">Estrategia Defensa: Mensaje de "Inversión vs Gasto": No compres 10 pares baratos en 10 años, compra 1 nuestro hoy.</div></div>', 'chatgpt', false, false, 'intermediate'),

    createCase(107, 'productivity', 'Consultas SQL Master', 'database', 'Data: No-técnicos pidiendo datos.', 
        'Dame el código para ver las ventas de ayer.',
        '<div class="text-xs text-slate-500 italic font-mono">SELECT * FROM ventas WHERE fecha = \'ayer\'</div><div class="mt-2 text-[10px] text-red-600 font-bold italic">Falla: La tabla no se llama "ventas" ni la columna "fecha".</div>', 
        '{r}Eres un Ingeniero de Datos.{/r} {c}Necesidad: Quiero sacar un reporte de los clientes que gastaron más de $100 dólares en el último mes. Esquema de mi Tabla: Tengo una tabla llamada Orders con columnas: customer_id, order_date, total_amount.{/c} {m}Generar la consulta SQL correcta.{/m} {l}Ordena los resultados de mayor a menor gasto. Limita a los top 10 clientes. Explica dónde debo pegar esto.{/l} {f}Bloque de Código SQL.{/f}', 
        'Code Generation with Context.', '¿Pudiste obtener el dato sin pedirle favor al programador malhumorado?', 
        '<div class="bg-slate-900 text-pink-400 p-3 rounded font-mono text-xs mb-2 leading-relaxed">SELECT customer_id, SUM(total_amount)<br>FROM Orders<br>WHERE order_date >= DATE(\'now\', \'-30 days\')<br>GROUP BY customer_id<br>ORDER BY total_amount DESC LIMIT 10;</div>', 'gemini', false, false, 'advanced'),

    createCase(108, 'productivity', 'Planificador Gantt', 'calendar_today', 'Gestión: Organizar el caos de un lanzamiento.', 
        'Haz un plan para lanzar mi web.',
        '<div class="text-xs text-slate-500 italic">"1. Contratar diseñador. 2. Hacer el logo..."</div>', 
        '{r}Eres un Project Manager (PMP) Certificado.{/r} {c}Proyecto: Lanzamiento de nueva página web corporativa. Fecha Inicio: Lunes próximo. Duración: Tenemos 4 semanas.{/c} {m}Crear un cronograma de tareas lógicas y secuenciales.{/m} {l}Incluye responsables (Diseñador, Desarrollador, Copywriter). Identifica tareas críticas (que bloquean a otras).{/l} {f}Tabla con columnas: [Semana] | [Tarea] | [Responsable] | [Estado].{/f}', 
        'Sequential Planning.', '¿Sientes que tienes el control del proyecto con solo mirar la tabla?', 
        '<div class="overflow-x-auto"><table class="w-full text-[10px] border-collapse border border-slate-200"><thead class="bg-slate-100"><tr><th class="border p-1">Semana</th><th class="border p-1">Tarea</th><th class="border p-1">Resp.</th></tr></thead><tbody><tr><td class="border p-1">Sem 1</td><td class="border p-1">Dominio y Hosting</td><td class="border p-1">IT</td></tr><tr><td class="border p-1">Sem 1</td><td class="border p-1">Diseño Bocetos</td><td class="border p-1">Diseño</td></tr><tr><td class="border p-1">Sem 2</td><td class="border p-1">Copywriting Web</td><td class="border p-1">Copy</td></tr></tbody></table></div>', 'chatgpt', false, false, 'intermediate'),

    createCase(109, 'productivity', 'Generador de KPIs', 'analytics', 'Métricas: Saber qué medir para no navegar a ciegas.', 
        '¿Qué mido en mi negocio de pasteles?',
        '<div class="text-xs text-slate-500 italic">"Mide cuántos pasteles vendes y cuánto gastas en harina..."</div>', 
        '{r}Eres un Consultor de Business Intelligence (BI).{/r} {c}Negocio: Pastelería a domicilio. Objetivo Actual: Rentabilidad (Queremos ganar más dinero, no solo vender más).{/c} {m}Definir 3 KPIs críticos para medir rentabilidad, no vanidad.{/m} {l}Explica la fórmula de cálculo de cada uno. Explica por qué es importante.{/l} {f}Lista: Nombre del KPI + Fórmula + "Por qué importa".{/f}', 
        'Domain Expertise Injection.', '¿Te das cuenta de que estabas midiendo las cosas equivocadas?', 
        '<div class="text-[11px] space-y-3"><div><strong class="text-blue-700 underline">Ticket Promedio:</strong><br>• Fórmula: (Ventas Totales / N° Pedidos).<br>• <span class="italic text-slate-600">Importancia: Ganas más sin buscar clientes nuevos al subir este número.</span></div><div><strong class="text-red-700 underline">Porcentaje Merma:</strong><br>• Fórmula: (Kg botados / Kg producidos) * 100.<br>• <span class="italic text-slate-600">Importancia: Lo que botas es dinero directo de tu bolsillo.</span></div></div>', 'chatgpt', false, false, 'intermediate'),

    createCase(110, 'productivity', 'Presentación con Datos', 'slideshow', 'Pitch Deck: Convencer a inversores.', 
        'Hazme una presentación sobre las ventas del año.',
        '<div class="text-xs text-slate-500 italic">"Diapositiva 1: Enero. Diapositiva 2: Febrero..."</div><div class="mt-2 text-[10px] text-red-600 font-bold">Falla: Aburrido, duerme a la audiencia.</div>', 
        '{r}Eres un experto en Presentaciones Corporativas y Persuasión.{/r} {c}Dato Duro: Las ventas subieron un 20% este año gracias al nuevo producto X, pero el producto antiguo Y cayó un 10%. Audiencia: Directorio de la empresa.{/c} {m}Crear la estructura de una presentación de 5 diapositivas que cuente una historia de éxito y cambio.{/m} {l}No pongas solo gráficos. Pon "El titular" de cada diapositiva. Usa la estructura: Situación -> Complicación -> Resolución.{/l} {f}Diapositiva # | Título Sugerido | Gráfico Sugerido | Guion del Hablante.{/f}', 
        'Narrative Structure.', '¿La presentación suena a película interesante o a lectura de lista de súper?', 
        '<div class="text-[11px] bg-white border p-3 rounded border-blue-200 shadow-sm"><div class="font-bold text-blue-900 border-b mb-2">Diapositiva 3 (El Clímax)</div><p class="mb-1"><strong>Título:</strong> "El relevo generacional de nuestros productos"</p><p class="mb-1"><strong>Visual:</strong> Gráfico de líneas (Efecto Tijera) cruzando Prod. X con Prod. Y.</p><p class="italic text-slate-600 mt-2">"Mientras Y sostuvo nuestra historia, X es nuestro futuro. Vean el cruce de junio..."</p></div>', 'chatgpt', false, false, 'advanced'),

    // ==========================================
    // 💰 FINANZAS (201-210)
    // ==========================================
    createCase(201, 'finance', 'Analista Buffett', 'trending_up', 'Inversión: Análisis Balance.',
        '¿Invierto en esta empresa? Mira los números.',
        '<div class="text-xs text-slate-500 italic">"Sí, se ve bien."</div>', 
        '{r}Analista Value.{/r} {c}Balance General.{/c} {m}Calcula ratios clave (Deuda/Equity, ROE) y da veredicto.{/m} {f}Tabla + Conclusión.{/f}',
        'Busca deuda alta.', 'Veredicto numérico.',
        '<p class="text-xs"><strong>Veredicto:</strong> <span class="bg-red-100 text-red-800 font-bold">RIESGO</span>. Deuda supera 3x el patrimonio.</p>', 'claude', true, false, 'advanced'),

    createCase(202, 'finance', 'Bola de Nieve', 'snowboarding', 'Deudas: Plan de pago.',
        'Tengo muchas deudas, ayúdame.',
        '<div class="text-xs text-slate-500 italic">"Paga la más grande primero."</div>', 
        '{r}Asesor Financiero.{/r} {c}Múltiples deudas, poco flujo.{/c} {m}Plan matemático "Bola de Nieve" (menor saldo primero).{/m} {f}Tabla meses.{/f}',
        'Victorias rápidas.', 'Fecha libertad.',
        '<table class="w-full text-[10px] border"><tr><td>Mes 1</td><td>Pagar Tarjeta A</td></tr></table>', 'chatgpt', false, false, 'intermediate'),

    createCase(203, 'finance', 'Broker Hipotecario', 'real_estate_agent', 'Inmobiliario: Elegir crédito.',
        '¿Banco A (4.5%) o Banco B (4.7%)?',
        '<div class="text-xs text-slate-500 italic">"Banco A porque la tasa es menor." (Error: Ignora seguros)</div>', 
        '{r}Corredor Matemático.{/r} {c}Comparativa Créditos.{/c} {m}Calcula Costo Final considerando Seguros y CAE.{/m} {f}Ahorro real en $$.{/f}',
        'Mira el CAE.', 'Seguro desgravamen.',
        '<p class="text-xs text-green-700 font-bold">Gana Banco B. Ahorro total: $2.5M (por seguros más baratos).</p>', 'gemini', false, false, 'advanced'),

    createCase(204, 'finance', 'Calculadora FIRE', 'savings', 'Retiro: Jubilar joven.',
        '¿Cuánto necesito para jubilarme a los 40?',
        '<div class="text-xs text-slate-500 italic">"Mucho dinero, ahorra harto."</div>', 
        '{r}Planner FIRE.{/r} {c}Gasto mensual $1000.{/c} {m}Calcula "Número FIRE" (Regla del 4%) y años faltantes.{/m} {f}Cifra exacta.{/f}',
        'Gasto x 300.', 'Tasa retiro 4%.',
        '<div class="bg-slate-50 p-2 text-xs">Meta: <strong>$300,000 USD</strong>. Faltan: 14 años.</div>', 'chatgpt', false, false, 'intermediate'),

    createCase(205, 'finance', 'Comparador Seguros', 'health_and_safety', 'Seguros: ¿Cuál elijo?',
        '¿Plan barato con copago alto o plan caro con copago bajo?',
        '<div class="text-xs text-slate-500 italic">"Mejor el plan caro por si acaso."</div>', 
        '{r}Corredor Seguros.{/r} {c}Persona sana.{/c} {m}Calcula "Punto de Equilibrio" (visitas al año para que convenga).{/m} {f}Matemática.{/f}',
        'Calcula gasto anual.', 'Considera urgencias.',
        '<p class="text-xs">Si vas al médico menos de 8 veces al año, <strong>elige el Plan Barato</strong>.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(206, 'finance', 'Explicador Impuestos', 'receipt_long', 'Impuestos: ¿Qué es la retención?',
        'Explícame la retención de boletas fácil.',
        '<div class="text-xs text-slate-500 italic">"Es el artículo 42 de la ley de renta..."</div>', 
        '{r}Contador Amigo.{/r} {c}Freelance confundido.{/c} {m}Explica con analogía de "Alcancía Forzosa".{/m} {f}Explicación simple.{/f}',
        'Devolución abril.', 'Previsión social.',
        '<p class="text-xs">"El estado te guarda esa plata en una alcancía. En abril la rompen para pagar tu salud..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(207, 'finance', 'Evaluador Proyectos', 'calculate', 'Negocios: ¿Es rentable?',
        'Quiero vender completos. ¿Es buen negocio?',
        '<div class="text-xs text-slate-500 italic">"Sí, a la gente le gusta comer."</div>', 
        '{r}Ingeniero Comercial.{/r} {c}Inversión $1M.{/c} {m}Calcula Punto de Equilibrio (cuántos vender para recuperar).{/m} {f}Cálculos.{/f}',
        'Costos fijos vs variables.', 'Meses retorno.',
        '<p class="text-xs">Necesitas vender <strong>1,000 completos</strong> para recuperar tu inversión inicial.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(208, 'finance', 'Gastos Hormiga', 'coffee', 'Ahorro: Café diario.',
        'Gasto mucho en café. ¿Importa?',
        '<div class="text-xs text-slate-500 italic">"Sí, deberías ahorrar."</div>', 
        '{r}Coach Financiero.{/r} {c}Gasto $3k diario.{/c} {m}Proyecta costo a 10 años con interés compuesto.{/m} {f}Cifra shock.{/f}',
        'Interés compuesto.', 'Costo oportunidad.',
        '<p class="text-xs font-bold text-red-600">Estás perdiendo $15 Millones (el valor de un auto nuevo).</p>', 'chatgpt', false, false, 'beginner'),

    createCase(209, 'finance', 'Negociador Deuda', 'call_made', 'Deudas: Repactar.',
        'No puedo pagar la cuota este mes. ¿Qué digo?',
        '<div class="text-xs text-slate-500 italic">"Perdón, no tengo plata."</div>', 
        '{r}Abogado Insolvencia.{/r} {c}Iliquidez temporal.{/c} {m}Script para pedir meses de gracia sin mostrar quiebra.{/m} {f}Guion.{/f}',
        'Muestra voluntad.', 'Pide opciones.',
        '<div class="bg-white p-2 text-xs border border-indigo-100">"Tengo toda la intención de pagar, pero necesito reprogramar..."</div>', 'chatgpt', false, false, 'advanced'),

    createCase(210, 'finance', 'Diversificación', 'pie_chart', 'Inversión: Portafolio.',
        'Tengo 10 millones. ¿Dónde los pongo?',
        '<div class="text-xs text-slate-500 italic">"Compra Bitcoin."</div>', 
        '{r}Asesor Inversiones.{/r} {c}Perfil moderado.{/c} {m}Asignación de activos (Asset Allocation) porcentual.{/m} {f}Gráfico texto.{/f}',
        'Renta fija vs variable.', 'ETFs.',
        '<p class="text-xs">40% S&P500 (Crecimiento) | 40% Depósitos (Seguridad) | 20% Caja.</p>', 'gemini', false, false, 'intermediate'),

    // ==========================================
    // 🔥 VENTAS & MARKETING (301-310) - (TEXTO COMPLETO LITERAL)
    // ==========================================

    createCase(301, 'sales', 'El "Rompehielo" B2B', 'mail', 'Ventas: Conseguir reunión.',
        'Escribe un correo para vender mi software de recursos humanos a gerentes.',
        '<div class="text-xs text-slate-500 italic">"Estimado Gerente, le escribo para presentarle..."</div>',
        '{r}Actúa como un experto en Cold Emailing y Copywriting B2B.{/r} {c}Producto: [Software de RRHH Automatizado] Público: [Gerentes de RRHH en empresas de 50-200 empleados] Dolor: [Pérdida de tiempo en excel y errores de cálculo manual] Referencia: (Opcional) [Adjuntar archivo: Caso de éxito breve o Testimonio]{/c} {m}Redactar un correo de "puerta fría" usando el marco PAS (Problema-Agitación-Solución) para vender la reunión, no el producto.{/m} {l}Máximo 100 palabras. El asunto debe ser en minúsculas (parecer casual) y de menos de 4 palabras. No uses: "Espero que estés bien", "Líder en el mercado", "Me gustaría".{/l} {f}Texto plano estructurado: [Asunto] + [Cuerpo] + [CTA].{/f}',
        'Chain of Thought + Framework PAS.', '¿El asunto parece escrito por un colega o por una máquina de spam?',
        // FULL HTML INJECTION:
        '<div class="bg-white p-3 text-xs font-mono border border-slate-200 shadow-sm rounded-sm text-slate-800">' +
        '<div class="border-b pb-2 mb-2"><span class="text-slate-500">Asunto:</span> dudas con la nómina</div>' +
        '<p class="mb-2">Hola [Nombre],</p>' +
        '<p class="mb-2">Gestionar la nómina en Excel funciona bien cuando sois 10 personas, pero con 50 empleados se vuelve una bomba de tiempo de errores manuales.</p>' +
        '<p class="mb-2">De hecho, acabamos de ayudar a una empresa similar a reducir 12 horas semanales de carga administrativa automatizando este proceso (te adjunto el caso si quieres verlo).</p>' +
        '<p class="mb-2">¿Te parece mal si te robo 7 minutos el martes para mostrarte cómo lo hicieron?</p>' +
        '<p>Saludos.</p>' +
        '</div>', 
        'chatgpt', false, false, 'intermediate'),

    createCase(302, 'sales', 'Anuncios Ads Stop-Scroll', 'campaign', 'Marketing: Stop Scroll.',
        'Haz un texto para un anuncio de Facebook sobre zapatillas de correr.',
        '<div class="text-xs text-slate-500 italic">"¡Llegaron las nuevas zapatillas RunPro! 👟..."</div>',
        '{r}Eres un Media Buyer Senior y Copywriter de Respuesta Directa.{/r} {c}Producto: [Zapatillas con amortiguación de gel] Público: [Corredores amateurs +35 años con dolores articulares] Dolor: [Miedo a lesionarse las rodillas] Imagen: (Opcional) [Analiza la imagen adjunta de la zapatilla para describir sus colores]{/c} {m}Crear 3 variaciones de texto (Primary Text) usando el marco AIDA (Atención, Interés, Deseo, Acción).{/m} {l}La primera frase (El Gancho) debe tener menos de 40 caracteres y cortar la respiración. Usa emojis para listar beneficios, no párrafos largos.{/l} {f}Lista numerada: Opción 1 (Directa), Opción 2 (Storytelling), Opción 3 (Controversial).{/f}',
        'Iterative Prompting.', 'Lee solo la primera línea. ¿Te dan ganas de leer la segunda?',
        // FULL HTML INJECTION:
        '<div class="text-xs space-y-2">' +
        '<p class="font-bold text-indigo-700">Opción 1 (Directa):</p>' +
        '<p>🛑 ¿Tus rodillas crujen al correr?</p>' +
        '<p>No es tu edad, es el impacto del asfalto.</p>' +
        '<p>Conoce las nuevas RunPro Gel:</p>' +
        '<ul class="list-none space-y-1 pl-1">' +
        '<li>✅ Absorben el 40% del impacto.</li>' +
        '<li>✅ Retorno de energía en cada paso.</li>' +
        '<li>✅ Diseño gris y neón (como ves en la foto).</li>' +
        '</ul>' +
        '<p class="mt-2 font-medium">👉 Pide tu prueba de 30 días aquí.</p>' +
        '</div>', 
        'chatgpt', false, false, 'intermediate'),

    createCase(303, 'sales', 'Ficha E-commerce', 'shopping_bag', 'Ecommerce: Conversión.',
        'Describe esta cafetera para mi tienda online.',
        '<div class="text-xs text-slate-500 italic">"Cafetera Italiana Modelo X. Capacidad 1 Litro..."</div>',
        '{r}Actúa como un experto en Neuromarketing y Psicología del Consumidor.{/r} {c}Producto: [Cafetera Italiana de Lujo] Público: [Amantes del café que valoran el diseño] Características: [Acero inoxidable, mantiene calor, diseño minimalista] Archivo: [Adjuntar especificaciones técnicas en PDF]{/c} {m}Convertir las características técnicas (del PDF) en Beneficios Emocionales.{/m} {l}Evita la voz pasiva. Usa lenguaje sensorial (olor, sabor, sonido, tacto). No hagas listas aburridas.{/l} {f}Título Persuasivo + Descripción Emocional + Bullet Points de "Por qué la amarás".{/f}',
        'Translation (Data to Emotion).', '¿Te imaginas usando el producto o solo leyendo un manual?',
        // FULL HTML INJECTION:
        '<div class="text-xs">' +
        '<h4 class="font-bold text-lg mb-2 text-slate-800">Tu barista personal, ahora en tu cocina ☕</h4>' +
        '<p class="mb-3 text-slate-600">Olvídate del café quemado de las mañanas. El cuerpo de Acero Térmico de la Modelo X no solo se ve espectacular en tu encimera; mantiene tu café a la temperatura exacta durante 2 horas. Imagina servirte esa segunda taza y que siga humeante y perfecta como la primera.</p>' +
        '<p class="font-bold text-slate-700 mb-1">Por qué te encantará:</p>' +
        '<ul class="list-disc pl-4 space-y-1 text-slate-600">' +
        '<li><strong>Silencio absoluto:</strong> Prepara tu café sin despertar a toda la casa.</li>' +
        '<li><strong>Sabor puro:</strong> El acero de grado quirúrgico no altera el gusto del grano.</li>' +
        '</ul>' +
        '</div>', 
        'chatgpt', false, false, 'intermediate'),

    createCase(304, 'sales', 'Guion Viral TikTok', 'movie', 'RRSS: Retención video.',
        'Dame ideas para un video de TikTok sobre divorcios.',
        '<div class="text-xs text-slate-500 italic">"Hola a todos, soy abogado. Hoy hablaremos del divorcio..."</div>',
        '{r}Eres un Guionista Viral de TikTok y Reels.{/r} {c}Tema: [Divorcio y Bienes] Público: [Personas pensando en separarse pero con miedo económico] Dolor: [Miedo a perder la casa o el auto]{/c} {m}Crear un guion de 30 segundos optimizado para retención máxima.{/m} {l}Gancho (0-3s): Debe ser visual o una afirmación polémica. Prohibido decir "Hola". Cuerpo: Entrega valor rápido. CTA: Llamada a la acción específica.{/l} {f}Tabla de 2 columnas: [Visual/Acción en Pantalla] | [Audio/Locución].{/f}',
        'Output Formatting.', '¿Viste los primeros 3 segundos o pasaste de largo?',
        // FULL HTML INJECTION:
        '<div class="overflow-x-auto"><table class="w-full text-[10px] border-collapse border border-slate-200">' +
        '<thead class="bg-slate-50 text-slate-700"><tr><th class="border border-slate-200 p-2 text-left w-1/2">Visual</th><th class="border border-slate-200 p-2 text-left w-1/2">Audio</th></tr></thead>' +
        '<tbody class="text-slate-600">' +
        '<tr><td class="border border-slate-200 p-2 font-bold text-red-600">(Texto en pantalla rojo gigante: "¡NO TE VAYAS DE CASA!")</td><td class="border border-slate-200 p-2">"Si te vas de la casa antes de divorciarte, estás cometiendo un suicidio legal."</td></tr>' +
        '<tr><td class="border border-slate-200 p-2">(El abogado señala un papel oficial)</td><td class="border border-slate-200 p-2">"Se llama `Abandono de Hogar` y tu ex puede usarlo para quitarte derechos sobre la propiedad."</td></tr>' +
        '<tr><td class="border border-slate-200 p-2">(Zoom a la cara del abogado)</td><td class="border border-slate-200 p-2">"Antes de hacer las maletas, ve a Carabineros y deja una constancia. ¿Quieres el formato exacto? Comenta `CASA` y te lo envío."</td></tr>' +
        '</tbody></table></div>', 
        'chatgpt', false, false, 'advanced'),

    createCase(305, 'sales', 'Cierre WhatsApp', 'chat', 'Ventas: Chat Closing.',
        'Responde a un cliente que preguntó precio.',
        '<div class="text-xs text-slate-500 italic">"Hola, buenas tardes. El precio es $150.000..."</div>',
        '{r}Eres un Closer de Ventas (Cerrador) experto en venta conversacional (Chat Marketing).{/r} {c}Producto: [Curso de Inglés Conversacional] Cliente: [Preguntó "Precio" en un anuncio de Instagram] Historial: [Adjuntar conversación previa si existe - opcional]{/c} {m}Responder la duda del precio pero mantener la conversación viva.{/m} {l}Tono: Casual, cercano, usa emojis moderados. Longitud: Máximo 2 párrafos cortos (visualización móvil). Regla de Oro: Termina SIEMPRE con una pregunta.{/l} {f}Texto listo para copiar y pegar.{/f}',
        'Tone Setting & Open Loops.', '¿Sientes que hablas con un humano o con un bot?',
        // FULL HTML INJECTION:
        '<div class="bg-[#dcf8c6] p-3 rounded-lg text-xs text-slate-800 shadow-sm inline-block max-w-[90%]">' +
        '<p class="mb-2">"Hola! 👋 Claro que sí.</p>' +
        '<p class="mb-2">El programa completo, con acceso ilimitado al club de conversación 24/7 (que es lo que más ayuda a soltar la lengua), queda en $150.000.</p>' +
        '<p>Cuéntame, ¿necesitas el inglés por trabajo o porque tienes un viaje planeado? ✈️ (Así te confirmo si este nivel es el que te sirve)."</p>' +
        '</div>', 
        'chatgpt', false, false, 'beginner'),

    createCase(306, 'sales', 'Hero Landing Page', 'web', 'Web: Propuesta Valor.',
        'Pon un título para mi web de marketing.',
        '<div class="text-xs text-slate-500 italic">"Agencia Digital Creative Minds. Expertos en Marketing..."</div>',
        '{r}Eres un Copywriter de Conversión (CRO).{/r} {c}Servicio: [Agencia de Google Ads] Público: [Dueños de E-commerce] Dolor: [Gastan dinero en ads y no venden nada]{/c} {m}Escribir un H1 (Título) y H2 (Subtítulo) que prometan una transformación clara.{/m} {l}H1: Máximo 12 palabras. Debe centrarse en el BENEFICIO, no en la agencia. H2: Debe atacar la objeción principal (miedo a perder dinero).{/l} {f}3 Opciones: Opción Lógica, Opción Emocional, Opción Urgencia.{/f}',
        'Constraint-Based.', '¿Entiendes qué ganas en menos de 5 segundos?',
        // FULL HTML INJECTION:
        '<div class="text-xs">' +
        '<div class="mb-1 text-slate-500 uppercase tracking-wide font-bold text-[10px]">Opción Lógica:</div>' +
        '<h1 class="text-xl font-bold text-slate-900 mb-2 leading-tight">Duplicamos el ROAS de tu E-commerce en 90 días o te devolvemos el fee.</h1>' +
        '<h2 class="text-sm text-slate-600 leading-snug">Deja de quemar presupuesto. Usamos un sistema matemático para escalar tus ventas, no tu gasto.</h2>' +
        '</div>', 
        'chatgpt', false, false, 'intermediate'),

    createCase(307, 'sales', 'Artículo SEO', 'article', 'SEO: Blog Post.',
        'Escribe un artículo sobre implantes dentales.',
        '<div class="text-xs text-slate-500 italic">"Los implantes dentales son una solución para dientes perdidos..."</div>',
        '{r}Eres un experto en SEO y Marketing de Contenidos.{/r} {c}Tema: [Implantes Dentales] Palabra Clave Principal: [Duelen los implantes dentales] Público: [Pacientes con miedo al dentista] Archivo: [Adjuntar lista de Keywords secundarias CSV - opcional]{/c} {m}Crear primero la Estructura (Outline) optimizada para SEO y luego desarrollar la introducción.{/m} {l}Incluye etiquetas H2 y H3 claras. Incluye una sección de "Preguntas Frecuentes" (FAQ) para Snippets de Google. Tono: Empático y tranquilizador.{/l} {f}Título SEO + Estructura de Encabezados + Intro de 200 palabras.{/f}',
        'Structural Prompting.', '¿El artículo responde las dudas reales que buscas en Google?',
        // FULL HTML INJECTION:
        '<div class="bg-white border p-3 text-xs">' +
        '<h1 class="text-lg font-bold text-blue-800 mb-2">H1: Implantes Dentales: ¿Realmente duelen? La verdad sobre el procedimiento.</h1>' +
        '<ul class="space-y-1 text-slate-700 mb-3">' +
        '<li><span class="font-bold text-slate-900">H2:</span> ¿Qué se siente durante la cirugía? (Mito vs Realidad)</li>' +
        '<li><span class="font-bold text-slate-900">H2:</span> El post-operatorio: ¿Cuántos días de reposo necesito?</li>' +
        '<li><span class="font-bold text-slate-900">H2:</span> Comparativa de dolor: Implante vs Extracción de muela.</li>' +
        '<li><span class="font-bold text-slate-900 ml-4">H3:</span> FAQ: Preguntas rápidas.</li>' +
        '</ul>' +
        '<p class="italic text-slate-600 border-l-4 border-blue-200 pl-2">Intro: "Si estás leyendo esto, probablemente necesitas un implante pero el miedo al torno te paraliza..."</p>' +
        '</div>', 
        'chatgpt', false, false, 'advanced'),

    createCase(308, 'sales', 'Objeción "Muy Caro"', 'monetization_on', 'Ventas: Negociación.',
        'Dame respuestas para cuando dicen que es muy caro.',
        '<div class="text-xs text-slate-500 italic">"No es caro, es que ofrecemos mucha calidad. Lo barato sale caro."</div>',
        '{r}Actúa como un Negociador Experto del método Harvard.{/r} {c}Producto: [Consultoría de Impuestos] Precio: [$1000 USD] Objeción: ["Es muy caro" / "No tengo presupuesto"] Archivo: [Adjuntar PDF con propuesta de valor - opcional]{/c} {m}Generar 3 guiones de rebatimiento usando la técnica de Reencuadre (Reframing).{/m} {l}Nunca contradigas al cliente ("No es caro"). Valida su emoción primero. Compara el precio con el costo de NO solucionar el problema.{/l} {f}Guion 1 (Costo de Inacción), Guion 2 (División ridícula), Guion 3 (ROI).{/f}',
        'Reframing.', '¿Te hace dudar de tu propia objeción?',
        // FULL HTML INJECTION:
        '<div class="bg-indigo-50 border-l-4 border-indigo-500 p-3 text-xs text-indigo-900 italic">' +
        '<p class="mb-2">"Te entiendo perfectamente, $1,000 es una suma importante.</p>' +
        '<p class="mb-2">Pero déjame preguntarte algo: El año pasado, por no tener esta estrategia fiscal, pagaste $5,000 de más en multas e intereses.</p>' +
        '<p>¿Realmente es caro pagar $1,000 hoy para blindarte y ahorrar esos $5,000 este año? Al final, lo costoso es seguir igual, ¿no crees?"</p>' +
        '</div>', 
        'chatgpt', false, false, 'intermediate'),

    createCase(309, 'sales', 'Storytelling Personal', 'history_edu', 'Marca Personal: Conexión.',
        'Escribe la sección de "quién soy" para mi web.',
        '<div class="text-xs text-slate-500 italic">"Soy María, nutricionista titulada con distinción máxima..."</div>',
        '{r}Eres un experto en Storytelling de Marca (Brand Story).{/r} {c}Profesión: [Nutricionista] Historia Personal: [Fui obesa, sufrí bullying, aprendí a comer sin dietas] Propósito: [Que nadie sufra lo que yo sufrí]{/c} {m}Contar la "Historia del Héroe" donde el cliente se identifique, usando narrativa de 3 actos.{/m} {l}Evita listar títulos universitarios al principio. Muestra vulnerabilidad. El héroe final debe ser el paciente, tú eres el guía (como Yoda).{/l} {f}Narrativa en primera persona.{/f}',
        'Narrative Arc.', '¿Confías más en ella porque mostró su lado humano?',
        // FULL HTML INJECTION:
        '<div class="text-xs text-slate-700 italic leading-relaxed">' +
        '<p class="mb-2">"No siempre fui la nutricionista saludable que ves en las fotos.</p>' +
        '<p class="mb-2">Hace 10 años, pesaba 20 kilos más y lloraba en los probadores de ropa. Entendí a la mala que las dietas restrictivas de `pollo y lechuga` solo dañaban mi mente.</p>' +
        '<p>Por eso estudié nutrición: no para darte una dieta de papel que tirarás a la basura, sino para enseñarte a disfrutar la comida sin culpa, tal como yo lo hice."</p>' +
        '</div>', 
        'chatgpt', false, false, 'advanced'),

    createCase(310, 'sales', 'Ideas Lead Magnet', 'lightbulb', 'Marketing: Captación.',
        'Dame ideas para un ebook gratis.',
        '<div class="text-xs text-slate-500 italic">"1. Guía de Finanzas. 2. Cómo ahorrar dinero..."</div>',
        '{r}Eres un Estratega de Inbound Marketing.{/r} {c}Nicho: [Finanzas Personales] Público: [Jóvenes endeudados] Dolor: [No llegan a fin de mes]{/c} {m}Generar 5 ideas de "Lead Magnets" de Alto Valor y Consumo Rápido (No ebooks largos).{/m} {l}Deben ser herramientas prácticas (Excel, Checklist, Audio, Quiz). Títulos "Clickbait" éticos (que prometan un resultado rápido).{/l} {f}Lista: Título + Formato + Promesa de Valor.{/f}',
        'Ideation & Brainstorming.', '¿Te da curiosidad descargar alguna de esas herramientas?',
        // FULL HTML INJECTION:
        '<div class="text-xs">' +
        '<ul class="space-y-2">' +
        '<li class="flex gap-2"><span class="text-green-600 font-bold">Plantilla Excel:</span> <span>"Calculadora Kakebo: Descubre en qué se te van los $100.000 que te faltan cada mes".</span></li>' +
        '<li class="flex gap-2"><span class="text-red-600 font-bold">Checklist PDF:</span> <span>"Detox de Gastos Hormiga: 7 suscripciones que debes cancelar hoy mismo".</span></li>' +
        '<li class="flex gap-2"><span class="text-blue-600 font-bold">Audio (5 min):</span> <span>"Truco psicológico para no comprar ropa que no necesitas".</span></li>' +
        '</ul>' +
        '</div>', 
        'chatgpt', false, false, 'intermediate'),

    // ==========================================
    // 🎨 ARTE (401-412)
    // ==========================================
    createCase(401, 'art', 'Foto Producto IA', 'camera', 'Midjourney: Realismo.', 
        'Foto botella jugo naranja.',
        '<div class="text-xs text-slate-500 italic">"Botella de jugo en mesa."</div>', 
        '{r}Fotógrafo.{/r} {c}Publicidad.{/c} {m}Prompt técnico con iluminación, lente y estilo.{/m} {f}Prompt MJ.{/f}', 
        'Backlighting.', 'Gotas agua.', 
        '<div class="font-mono text-xs bg-slate-900 text-purple-300 p-2">/imagine prompt: cinematic shot, condensation...</div>', 'midjourney', false, false, 'advanced'),

    createCase(402, 'art', 'Concept Art', 'palette', 'Arte: Abstracto.',
        'Imagen de "innovación" sin focos.',
        '<div class="text-xs text-slate-500 italic">"Un foco brillando."</div>', 
        '{r}Director Arte.{/r} {c}Concepto abstracto.{/c} {m}Metáfora visual minimalista.{/m} {f}Descripción.{/f}',
        'Sin clichés.', 'Materiales.',
        '<p class="text-xs">"Cubo de cristal levitando con luz interna..."</p>', 'midjourney', false, false, 'intermediate'),

    createCase(403, 'art', 'Paleta Color', 'colors', 'Diseño: Colores.',
        'Colores para cafetería moderna.',
        '<div class="text-xs text-slate-500 italic">"Café y beige."</div>', 
        '{r}Teoría Color.{/r} {c}Branding.{/c} {m}4 colores con códigos HEX y contraste.{/m} {f}Lista HEX.{/f}',
        'Acento.', 'Contraste.',
        '<p class="text-xs"><span class="text-[#FF6B35]">■</span> #FF6B35 (Orange)</p>', 'chatgpt', false, false, 'beginner'),

    createCase(404, 'art', 'Icono App', 'app_shortcut', 'UI: Icono iOS.',
        'Icono app meditación.',
        '<div class="text-xs text-slate-500 italic">"Una persona meditando."</div>', 
        '{r}Diseñador iOS.{/r} {c}App Store.{/c} {m}Icono minimalista reconocible en tamaño pequeño.{/m} {f}Prompt.{/f}',
        'Simpleza.', 'Gradientes.',
        '<p class="text-xs">"Nube abstracta con gradiente suave..."</p>', 'midjourney', false, false, 'intermediate'),

    createCase(405, 'art', 'Logo Minimalista', 'draw', 'Branding: Logo.',
        'Logo drones geométrico.',
        '<div class="text-xs text-slate-500 italic">"Un dron volando."</div>', 
        '{r}Diseñador Bauhaus.{/r} {c}Startup logística.{/c} {m}Isotipo geométrico abstracto.{/m} {f}Prompt.{/f}',
        'Espacio negativo.', 'Formas básicas.',
        '<p class="text-xs">"Hexágono formado por flechas..."</p>', 'midjourney', false, false, 'intermediate'),

    createCase(406, 'art', 'Retrato LinkedIn IA', 'person', 'Foto: Headshot.',
        'Foto profesional para LinkedIn IA.',
        '<div class="text-xs text-slate-500 italic">"Hombre con traje."</div>', 
        '{r}Retratista.{/r} {c}Avatar profesional.{/c} {m}Prompt iluminación estudio y bokeh.{/m} {f}Prompt.{/f}',
        'Lente 85mm.', 'Rembrandt lighting.',
        '<div class="font-mono text-xs bg-slate-900 text-purple-300 p-2">/imagine prompt: professional headshot...</div>', 'midjourney', false, false, 'beginner'),

    createCase(407, 'art', 'Slide Impacto', 'slideshow', 'Diseño: Presentación.',
        'Slide de ventas impactante.',
        '<div class="text-xs text-slate-500 italic">"Mucho texto y un gráfico."</div>', 
        '{r}Diseñador TED.{/r} {c}Cifra clave.{/c} {m}Composición minimalista foco en el número.{/m} {f}Descripción.{/f}',
        'Regla tercios.', 'Menos es más.',
        '<p class="text-xs">Fondo oscuro. Número gigante blanco. Flecha verde.</p>', 'chatgpt', false, false, 'beginner'),

    createCase(408, 'art', 'Textura 3D', 'texture', '3D: Materiales.',
        'Textura madera vieja.',
        '<div class="text-xs text-slate-500 italic">"Madera café."</div>', 
        '{r}Artista 3D.{/r} {c}Render realista.{/c} {m}Textura seamless con detalles imperfección.{/m} {f}Prompt.{/f}',
        'Tileable.', 'Normal map.',
        '<div class="font-mono text-xs bg-slate-900 text-purple-300 p-2">/imagine prompt: seamless texture walnut...</div>', 'midjourney', false, false, 'advanced'),

    createCase(409, 'art', 'Ilustración Editorial', 'brush', 'Arte: Revista.',
        'Dibujo estilo New Yorker teletrabajo.',
        '<div class="text-xs text-slate-500 italic">"Alguien en el compu."</div>', 
        '{r}Ilustrador.{/r} {c}Sátira.{/c} {m}Estilo tinta y acuarela.{/m} {f}Prompt.{/f}',
        'Línea fina.', 'Humor.',
        '<div class="font-mono text-xs bg-slate-900 text-purple-300 p-2">/imagine prompt: editorial illustration...</div>', 'midjourney', false, false, 'intermediate'),

    createCase(410, 'art', 'Packaging', 'package_2', 'Diseño: Caja.',
        'Caja galletas veganas.',
        '<div class="text-xs text-slate-500 italic">"Caja con logo."</div>', 
        '{r}Packaging Designer.{/r} {c}Sustentable.{/c} {m}Materiales y acabados visuales.{/m} {f}Concepto.{/f}',
        'Kraft.', 'Tinta blanca.',
        '<p class="text-xs">Cartón kraft crudo con tipografía blanca...</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(411, 'art', 'Flyer Evento', 'campaign', 'Diseño: Poster.',
        'Flyer fiesta techno.',
        '<div class="text-xs text-slate-500 italic">"Luces de neón."</div>', 
        '{r}Diseñador Carteles.{/r} {c}Underground.{/c} {m}Estilo Brutalista/Suizo.{/m} {f}Descripción.{/f}',
        'Tipografía gigante.', 'Blanco y negro.',
        '<p class="text-xs">Fondo negro. Helvética Bold gigante al borde.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(412, 'art', 'Moodboard', 'chair', 'Interiorismo: Deco.',
        'Ideas sala pequeña japonesa.',
        '<div class="text-xs text-slate-500 italic">"Muebles bajos."</div>', 
        '{r}Interiorista Japandi.{/r} {c}Espacio pequeño.{/c} {m}Moodboard materiales y luz.{/m} {f}Prompt.{/f}',
        'Madera clara.', 'Luz natural.',
        '<div class="font-mono text-xs bg-slate-900 text-purple-300 p-2">/imagine prompt: Japandi living room...</div>', 'midjourney', false, false, 'beginner'),

    createCase(501, 'art', 'Bloqueo Escritor', 'edit', 'Escritura: Terror.', 
        'Idea para cuento terror.',
        '<div class="text-xs text-slate-500 italic">"Casa embrujada."</div>', 
        '{r}Stephen King.{/r} {c}Objeto cotidiano.{/c} {m}Premisa "What if" perturbadora.{/m} {f}Sinopsis.{/f}', 
        'Giro inesperado.', 'Terror psicológico.', 
        '<p class="text-xs">"Una mancha de humedad que tiene la forma de tu cara..."</p>', 'claude', false, false, 'beginner'),

    // ==========================================
    // 🧠 TECH (601-612)
    // ==========================================
    createCase(601, 'tech', 'Explicar Código', 'code', 'Dev: Entender Python.',
        'Explica este script.',
        '<div class="text-xs text-slate-500 italic">"Es un bucle for."</div>', 
        '{r}Senior Mentor.{/r} {c}Principiante.{/c} {m}Explica lógica línea por línea en español simple.{/m} {f}Comentarios.{/f}',
        'Analogías.', 'Paso a paso.',
        '<code class="text-xs bg-slate-800 text-blue-300">for item in list: # Recorre cada uno</code>', 'chatgpt', false, false, 'intermediate'),

    createCase(602, 'tech', 'SQL Query', 'database', 'Data: Top Clientes.',
        'SQL para mejores clientes.',
        '<div class="text-xs text-slate-500 italic">"SELECT * FROM ventas..."</div>', 
        '{r}Data Engineer.{/r} {c}Tablas Users, Orders.{/c} {m}Query optimizada Top 10 sumando ventas.{/m} {f}SQL.{/f}',
        'JOINs.', 'GROUP BY.',
        '<div class="font-mono text-xs bg-slate-900 text-pink-400 p-2">SELECT u.name, SUM(o.total)...</div>', 'chatgpt', false, false, 'advanced'),

    createCase(603, 'tech', 'Regex Sheets', 'regular_expression', 'Data: Extraer Emails.',
        'Saca el email del texto sucio.',
        '<div class="text-xs text-slate-500 italic">"Usa texto en columnas."</div>', 
        '{r}Experto Regex.{/r} {c}Google Sheets.{/c} {m}Fórmula REGEXEXTRACT para email.{/m} {f}Fórmula.{/f}',
        'Patrón universal.', 'Una celda.',
        '<div class="font-mono text-xs bg-slate-900 text-green-400 p-2">=REGEXEXTRACT(A2, "[a-zA-Z0-9..."]</div>', 'gemini', false, false, 'advanced'),

    createCase(604, 'tech', 'Analogía Tech', 'terminal', 'Conceptos: API.',
        'Explica qué es una API.',
        '<div class="text-xs text-slate-500 italic">"Interfaz de programación."</div>', 
        '{r}Profesor Tech.{/r} {c}No técnico.{/c} {m}Analogía del Restaurante (Mesero).{/m} {f}Explicación.{/f}',
        'Mesero = API.', 'Cocina = Server.',
        '<p class="text-xs">"La API es el mesero que lleva tu pedido a la cocina..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(605, 'tech', 'Explicar Git', 'commit', 'Dev: Versionamiento.',
        '¿Para qué sirve Git?',
        '<div class="text-xs text-slate-500 italic">"Para guardar código."</div>', 
        '{r}Senior Dev.{/r} {c}Estudiante.{/c} {m}Analogía "Guardar Partida" videojuegos.{/m} {f}Texto.{/f}',
        'Checkpoint.', 'Líneas temporales.',
        '<p class="text-xs">"Es como el Save Point de un juego..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(606, 'tech', 'HTML Landing', 'html', 'Web: Estructura.',
        'Código página web simple.',
        '<div class="text-xs text-slate-500 italic">"&lt;h1&gt;Hola&lt;/h1&gt;"</div>', 
        '{r}Frontend Dev.{/r} {c}Landing Page.{/c} {m}Estructura HTML5 + Tailwind CSS.{/m} {f}Código.{/f}',
        'Viewport.', 'CDN.',
        '<div class="font-mono text-xs bg-slate-900 text-blue-300 p-2">&lt;!DOCTYPE html&gt;...</div>', 'claude', false, false, 'intermediate'),

    createCase(607, 'tech', 'Hosting Advisor', 'dns', 'Infraestructura: Server.',
        '¿Dónde alojo mi web?',
        '<div class="text-xs text-slate-500 italic">"Usa GoDaddy."</div>', 
        '{r}Cloud Architect.{/r} {c}Web pequeña.{/c} {m}Recomendación costo/beneficio (Shared vs VPS).{/m} {f}Consejo.{/f}',
        'Escalabilidad.', 'Facilidad.',
        '<p class="text-xs">Empieza con Shared Hosting (SiteGround). No necesitas AWS aún.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(608, 'tech', 'Automatización', 'bolt', 'No-Code: Zapier.',
        'Guardar facturas de email a Drive.',
        '<div class="text-xs text-slate-500 italic">"Usa Zapier."</div>', 
        '{r}Automation Expert.{/r} {c}Gmail a Drive.{/c} {m}Pasos Trigger/Action con filtros.{/m} {f}Lista.{/f}',
        'Filtro.', 'Mapeo datos.',
        '<p class="text-xs">Trigger: New Attachment. Action: Upload File.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(609, 'tech', 'Pantalla Azul', 'bug_report', 'Soporte: Windows.',
        'Error pantalla azul.',
        '<div class="text-xs text-slate-500 italic">"Formatea."</div>', 
        '{r}Soporte IT.{/r} {c}Diagnóstico.{/c} {m}Pasos reparación (sfc, drivers) antes de borrar todo.{/m} {f}Lista.{/f}',
        'Comandos CMD.', 'Restaurar.',
        '<code class="bg-black text-white text-xs p-1">sfc /scannow</code>', 'gemini', false, false, 'intermediate'),

    createCase(610, 'tech', 'CSS Centrar', 'style', 'Web: Centrar Div.',
        'Cómo centro un div.',
        '<div class="text-xs text-slate-500 italic">"margin: 0 auto;"</div>', 
        '{r}CSS Expert.{/r} {c}Centrado vertical/horizontal.{/c} {m}Flexbox snippet.{/m} {f}CSS.{/f}',
        'Display flex.', 'Justify/Align.',
        '<div class="font-mono text-xs bg-slate-900 text-pink-300 p-2">display: flex; justify-content: center;</div>', 'claude', false, false, 'beginner'),

    createCase(611, 'tech', 'README Maker', 'description', 'Dev: Documentación.',
        'Escribe el readme de mi repo.',
        '<div class="text-xs text-slate-500 italic">"Esta es mi app."</div>', 
        '{r}Open Source Maintainer.{/r} {c}Proyecto Python.{/c} {m}Estructura MD profesional (Instalación, Uso).{/m} {f}Markdown.{/f}',
        'Badges.', 'Snippets.',
        '<div class="font-mono text-xs bg-slate-900 text-white p-2"># Título<br>## Instalación...</div>', 'chatgpt', false, false, 'intermediate'),

    createCase(612, 'tech', 'Detector Phishing', 'security', 'Seguridad: Email falso.',
        '¿Es real este correo del banco?',
        '<div class="text-xs text-slate-500 italic">"Parece falso."</div>', 
        '{r}Ciberseguridad.{/r} {c}Correo urgente.{/c} {m}Indicadores clave (Remitente, Urgencia, Link).{/m} {f}Análisis.{/f}',
        'Dominio.', 'Sentido urgencia.',
        '<p class="text-xs text-red-600 font-bold">⚠️ PHISHING DETECTADO.</p>', 'gemini', false, false, 'beginner'),

    // ==========================================
    // 🎓 EDUCACIÓN (701-712)
    // ==========================================
    createCase(701, 'education', 'Tutor Socrático', 'psychology', 'Math: Guiar no resolver.', 
        'Resuelve x^2 - 5x + 6 = 0.',
        '<div class="text-xs text-slate-500 italic">"x=2, x=3."</div>', 
        '{r}Tutor Socrático.{/r} {c}Alumno aprende.{/c} {m}Guía con preguntas, no des respuesta.{/m} {f}Diálogo.{/f}', 
        'Factorización.', 'Pregunta paso a paso.', 
        '<p class="text-xs">"Busca dos números que sumados den -5..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(702, 'education', 'Plan Estudio', 'calendar_month', 'Estudio: Examen.',
        'Horario para examen en 3 meses.',
        '<div class="text-xs text-slate-500 italic">"Estudia mucho."</div>', 
        '{r}Coach Aprendizaje.{/r} {c}Largo plazo.{/c} {m}Plan con Repetición Espaciada.{/m} {f}Calendario.{/f}',
        'Flashcards.', 'Repaso activo.',
        '<p class="text-xs">Mes 1: Conceptos. Mes 2: Práctica.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(703, 'education', 'Traductor Ciencia', 'science', 'Lectura: Paper.',
        'Explica "mitigación antropogénica".',
        '<div class="text-xs text-slate-500 italic">"Reducción humana de gases."</div>', 
        '{r}Divulgador.{/r} {c}Niño 12 años.{/c} {m}Explicación simple con analogía.{/m} {f}Texto.{/f}',
        'Simple.', 'Analogía llave gas.',
        '<p class="text-xs">"Es como cerrar la llave del gas que dejamos abierta..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(704, 'education', 'Simulador Oral', 'mic', 'Práctica: Examen.',
        'Preguntas para examen de Derecho.',
        '<div class="text-xs text-slate-500 italic">"¿Qué es la ley?"</div>', 
        '{r}Profesor Estricto.{/r} {c}Caso práctico.{/c} {m}Preguntas difíciles con trampa.{/m} {f}Preguntas.{/f}',
        'Justificar.', 'Excepción.',
        '<p class="text-xs">"¿Es válido el contrato si...?"</p>', 'chatgpt', false, false, 'advanced'),

    createCase(705, 'education', 'Resumen Libro', 'menu_book', 'Lectura: Ideas clave.',
        'Resume Hábitos Atómicos.',
        '<div class="text-xs text-slate-500 italic">"Crea buenos hábitos."</div>', 
        '{r}Bibliotecario.{/r} {c}Accionable.{/c} {m}3 ideas prácticas de las Leyes del Cambio.{/m} {f}Lista.{/f}',
        'Hacerlo obvio.', 'Diseño ambiente.',
        '<p class="text-xs">1. Deja la guitarra al medio de la sala (Hazlo obvio).</p>', 'claude', false, false, 'intermediate'),

    createCase(706, 'education', 'Generador Quiz', 'quiz', 'Estudio: Test.',
        'Hazme un quiz de la célula.',
        '<div class="text-xs text-slate-500 italic">"¿Qué es la célula?"</div>', 
        '{r}Profesor Biología.{/r} {c}Selección múltiple.{/c} {m}3 preguntas con distractores plausibles.{/m} {f}Test.{/f}',
        'Difícil.', 'Sin respuesta inmediata.',
        '<p class="text-xs">1. Función mitocondria: a) ADN b) ATP c) Lípidos.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(707, 'education', 'Historia Storytelling', 'history_edu', 'Historia: Chisme.',
        'Revolución Francesa como chisme.',
        '<div class="text-xs text-slate-500 italic">"Fue en 1789."</div>', 
        '{r}Narrador.{/r} {c}Contexto social.{/c} {m}Relato estilo chisme de barrio.{/m} {f}Historia.{/f}',
        'Personajes.', 'Drama.',
        '<p class="text-xs">"El Rey hizo una fiesta gigante y le pasó la cuenta a los pobres..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(708, 'education', 'Corrector Ensayo', 'edit_note', 'Escritura: Académico.',
        'Mejora mi ensayo.',
        '<div class="text-xs text-slate-500 italic">"Corrige ortografía."</div>', 
        '{r}Editor Harvard.{/r} {c}Argumentación.{/c} {m}Crítica de estructura y vocabulario.{/m} {f}Feedback.{/f}',
        'Conectores.', 'Sin repetir.',
        '<p class="text-xs">Cambia "cosa" por "fenómeno". Refuerza tu tesis.</p>', 'claude', false, false, 'advanced'),

    createCase(709, 'education', 'Roleplay Idioma', 'translate', 'Idiomas: Conversación.',
        'Roleplay cafetería en inglés.',
        '<div class="text-xs text-slate-500 italic">"Hello, coffee please."</div>', 
        '{r}Barista Londres.{/r} {c}Casual.{/c} {m}Diálogo con modismos (slang).{/m} {f}Chat.{/f}',
        'Cheers.', 'Mate.',
        '<p class="text-xs">"Hiya love! Awful weather today innit?"</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(710, 'education', 'Problema Física', 'calculate', 'Ciencias: Planteamiento.',
        'Problema auto frenando.',
        '<div class="text-xs text-slate-500 italic">"Respuesta: 4m/s."</div>', 
        '{r}Profesor Física.{/r} {c}Cinemática.{/c} {m}Identifica Datos, Incógnita y Fórmula.{/m} {f}Pasos.{/f}',
        'Diagrama.', 'Unidades.',
        '<p class="text-xs">Datos: Vo=20, Vf=0. Fórmula: Vf=Vo+at.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(711, 'education', 'Ayudante Tesis', 'school', 'Investigación: Hipótesis.',
        'Ayuda tesis IA y empleo.',
        '<div class="text-xs text-slate-500 italic">"La IA es importante."</div>', 
        '{r}Tutor PhD.{/r} {c}Estructura.{/c} {m}Hipótesis falsable y Objetivos.{/m} {f}Texto.{/f}',
        'Verbos infinitivo.', 'Medible.',
        '<p class="text-xs">Hipótesis: "La IA desplaza demanda hacia soft skills..."</p>', 'chatgpt', false, false, 'advanced'),

    createCase(712, 'education', 'Abogado Diablo', 'gavel', 'Debate: Contraargumentos.',
        'Defiende teletrabajo obligatorio.',
        '<div class="text-xs text-slate-500 italic">"Es buena idea."</div>', 
        '{r}Oponente Debate.{/r} {c}Pensamiento crítico.{/c} {m}3 argumentos en contra sólidos.{/m} {f}Lista.{/f}',
        'Puntos ciegos.', 'Economía.',
        '<p class="text-xs">1. ¿Qué pasa con trabajadores esenciales? Genera desigualdad.</p>', 'chatgpt', false, false, 'advanced'),

    // ==========================================
    // 🧘 VIDA (801-814)
    // ==========================================
    createCase(801, 'life', 'Paz Familiar', 'handshake', 'Familia: Peleas.', 
        'Hijos pelean por tablet.',
        '<div class="text-xs text-slate-500 italic">"Castígalos."</div>', 
        '{r}Mediador.{/r} {c}Reglas claras.{/c} {m}Contrato de paz divertido.{/m} {f}Texto.{/f}', 
        'Premios.', 'Consecuencias.', 
        '<p class="text-xs">"Si hay gritos, la tablet va a la cárcel..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(802, 'life', 'Chef Sobras', 'restaurant_menu', 'Cocina: Refri vacío.',
        'Tengo arroz y huevo.',
        '<div class="text-xs text-slate-500 italic">"Arroz con huevo."</div>', 
        '{r}Chef Gourmet.{/r} {c}Creatividad.{/c} {m}Receta sofisticada con sobras.{/m} {f}Receta.{/f}',
        'Nombre fancy.', 'Técnica.',
        '<p class="text-xs">"Arroz Cantonés Express saltado al wok..."</p>', 'chatgpt', false, false, 'beginner'),

    createCase(803, 'life', 'Plan Viaje', 'flight', 'Viajes: Roma.',
        'Qué ver en Roma 3 días.',
        '<div class="text-xs text-slate-500 italic">"Coliseo y Vaticano."</div>', 
        '{r}Guía Local.{/r} {c}Logística.{/c} {m}Itinerario optimizado por zonas.{/m} {f}Día a día.{/f}',
        'Comida.', 'Sin vueltas.',
        '<p class="text-xs">Día 1: Antigua Roma (Todo a pie).</p>', 'gemini', false, false, 'intermediate'),

    createCase(804, 'life', 'Entrenador Casa', 'fitness_center', 'Salud: Sin equipo.',
        'Rutina ejercicio en casa.',
        '<div class="text-xs text-slate-500 italic">"Haz abdominales."</div>', 
        '{r}Coach Funcional.{/r} {c}30 min.{/c} {m}Rutina HIIT/Tabata.{/m} {f}Circuito.{/f}',
        'Tiempos.', 'Postura.',
        '<p class="text-xs">Sentadillas (20s) - Descanso (10s).</p>', 'chatgpt', false, false, 'beginner'),

    createCase(805, 'life', 'Sommelier', 'wine_bar', 'Social: Vino.',
        'Vino para lasaña.',
        '<div class="text-xs text-slate-500 italic">"Vino tinto."</div>', 
        '{r}Sommelier.{/r} {c}Maridaje.{/c} {m}Recomendación cepa específica y por qué.{/m} {f}Consejo.{/f}',
        'Acidez.', 'Grasa.',
        '<p class="text-xs">Chianti o Sangiovese. Su acidez corta la grasa del queso.</p>', 'chatgpt', false, false, 'beginner'),

    createCase(806, 'life', 'Mentor Estoico', 'self_improvement', 'Mente: Estrés.',
        'Consejo para ansiedad trabajo.',
        '<div class="text-xs text-slate-500 italic">"Relájate."</div>', 
        '{r}Estoico.{/r} {c}Control.{/c} {m}Ejercicio Dicotomía del Control.{/m} {f}Reflexión.{/f}',
        'Qué depende de ti.', 'Aceptación.',
        '<p class="text-xs">Separa: Lo que controlas (tu esfuerzo) vs Lo que no (el resultado).</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(807, 'life', 'Plan Comidas', 'local_dining', 'Salud: Batch Cooking.',
        'Menú semanal sano rápido.',
        '<div class="text-xs text-slate-500 italic">"Lunes ensalada."</div>', 
        '{r}Nutricionista.{/r} {c}Poco tiempo.{/c} {m}Menú Batch Cooking (cocinar 1 vez, comer 3).{/m} {f}Menú.{/f}',
        'Base multiuso.', 'Reutiliza.',
        '<p class="text-xs">Lunes: Quinoa con pollo. Martes: Ensalada de Quinoa.</p>', 'chatgpt', false, false, 'beginner'),

    createCase(808, 'life', 'Sueño Bebé', 'crib', 'Familia: Dormir.',
        'Rutina sueño bebé 1 año.',
        '<div class="text-xs text-slate-500 italic">"Déjalo llorar."</div>', 
        '{r}Consultora Sueño.{/r} {c}Respetuoso.{/c} {m}Rutina relajante paso a paso.{/m} {f}Horario.{/f}',
        'Sin pantallas.', 'Asociación.',
        '<p class="text-xs">19:00 Baño. 19:30 Cuento. 19:45 Cuna.</p>', 'gemini', false, false, 'intermediate'),

    createCase(809, 'life', 'Cita en Casa', 'favorite', 'Pareja: Creatividad.',
        'Cita romántica barata en casa.',
        '<div class="text-xs text-slate-500 italic">"Ver Netflix."</div>', 
        '{r}Coach Parejas.{/r} {c}Romper rutina.{/c} {m}Actividad interactiva sin pantallas.{/m} {f}Ideas.{/f}',
        'Juego.', 'Sentidos.',
        '<p class="text-xs">Cata de chocolates a ciegas.</p>', 'chatgpt', false, false, 'beginner'),

    createCase(810, 'life', 'Lista Super', 'shopping_cart', 'Hogar: Eficiencia.',
        'Ordena mi lista de compras.',
        '<div class="text-xs text-slate-500 italic">"Pan, leche, huevos."</div>', 
        '{r}Logística Hogar.{/r} {c}Ruta óptima.{/c} {m}Ordena por pasillos del súper.{/m} {f}Lista.{/f}',
        'Verduras primero.', 'Congelados final.',
        '<p class="text-xs">1. Verdulería 2. Despensa 3. Fríos.</p>', 'chatgpt', false, false, 'beginner'),

    createCase(811, 'life', 'Mudanza', 'box', 'Hogar: Orden.',
        'Organiza mi mudanza en 1 mes.',
        '<div class="text-xs text-slate-500 italic">"Empaca todo."</div>', 
        '{r}Organizador.{/r} {c}Cronograma.{/c} {m}Checklist regresivo semanal.{/m} {f}Plan.{/f}',
        'Depurar.', 'Maleta día 1.',
        '<p class="text-xs">Semana 4: Botar lo que no sirve. Semana 1: Maleta supervivencia.</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(812, 'life', 'Meditación', 'self_improvement', 'Salud: Ansiedad.',
        'Calma mi ansiedad ahora.',
        '<div class="text-xs text-slate-500 italic">"Respira."</div>', 
        '{r}Guía Mindfulness.{/r} {c}Crisis.{/c} {m}Técnica Grounding 5-4-3-2-1.{/m} {f}Guía.{/f}',
        'Sentidos.', 'Presente.',
        '<p class="text-xs">Mira 5 cosas. Toca 4 cosas. Escucha 3 cosas...</p>', 'chatgpt', false, false, 'beginner'),

    createCase(813, 'life', 'Pataletas', 'child_care', 'Familia: Crianza.',
        'Niño 3 años berrinche.',
        '<div class="text-xs text-slate-500 italic">"Ignóralo."</div>', 
        '{r}Psicólogo Infantil.{/r} {c}Validación.{/c} {m}Script validar emoción + poner límite.{/m} {f}Frase.{/f}',
        'Conexión.', 'Firme y amable.',
        '<p class="text-xs">"Veo que estás enojado. Está bien enojarse, pero no pegar."</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(814, 'life', 'Reparación', 'build', 'Hogar: DIY.',
        'Lavadora no centrifuga.',
        '<div class="text-xs text-slate-500 italic">"Llama al técnico."</div>', 
        '{r}Técnico.{/r} {c}Diagnóstico.{/c} {m}3 causas probables simples.{/m} {f}Checklist.{/f}',
        'Filtro.', 'Desbalance.',
        '<p class="text-xs">1. Revisa el filtro de abajo (monedas). 2. Carga desbalanceada.</p>', 'gemini', false, false, 'intermediate'),

    // ==========================================
    // 🛠️ INGENIERÍA PROMPTS (901-912)
    // ==========================================
    createCase(901, 'engineering', 'Anti-Patrón', 'warning', 'Técnica: Claridad.', 
        'Ayuda con Excel.',
        '<div class="text-xs text-slate-500 italic">"¿En qué te ayudo?"</div>', 
        '{r}Ingeniero Datos.{/r} {c}Especificidad.{/c} {m}Prompt completo con contexto, input y output deseado.{/m} {f}Prompt.{/f}', 
        'Evita ping-pong.', 'Contexto.', 
        '<p class="text-xs">"Tengo una tabla ventas. Calcula la suma si..."</p>', 'gemini', false, false, 'intermediate'),

    createCase(902, 'engineering', 'Chain of Thought', 'link', 'Técnica: Razonamiento.',
        'Resuelve problema lógico rápido.',
        '<div class="text-xs text-slate-500 italic">"Respuesta incorrecta."</div>', 
        '{r}Lógico.{/r} {c}Complejidad.{/c} {m}Piensa paso a paso antes de responder.{/m} {f}CoT.{/f}',
        'Paso a paso.', 'Menos errores.',
        '<p class="text-xs">Paso 1: Analizar... Paso 2: Calcular... Conclusión.</p>', 'chatgpt', true, false, 'advanced'),

    createCase(903, 'engineering', 'Alucinaciones', 'fact_check', 'Técnica: Verdad.',
        'Precio exacto Tesla en Chile.',
        '<div class="text-xs text-slate-500 italic">"$35 millones (Inventado)."</div>', 
        '{r}Investigador.{/r} {c}Datos reales.{/c} {m}Busca fuente o di "No sé".{/m} {l}No inventes.{/l} {f}Dato.{/f}',
        'Cita fuentes.', 'Admite ignorancia.',
        '<p class="text-xs text-red-600">Dato no disponible oficialmente.</p>', 'gemini', false, false, 'advanced'),

    createCase(904, 'engineering', 'Iterativo', 'loop', 'Técnica: Pulir.',
        'Mejora este texto.',
        '<div class="text-xs text-slate-500 italic">"Texto corregido."</div>', 
        '{r}Editor.{/r} {c}Calidad.{/c} {m}Mejora en 3 iteraciones (Claridad, Tono, Estilo).{/m} {f}Versiones.{/f}',
        'Evolución.', 'V1, V2, V3.',
        '<p class="text-xs">V1: Claro. V2: Persuasivo. V3: Perfecto.</p>', 'chatgpt', false, false, 'advanced'),

    createCase(905, 'engineering', 'Rol Múltiple', 'groups_3', 'Técnica: Panel expertos.',
        'Consejo negocio Steve Jobs.',
        '<div class="text-xs text-slate-500 italic">"Hazlo simple."</div>', 
        '{r}Panel Expertos.{/r} {c}Estrategia.{/c} {m}Debate entre Jobs, Buffett y Sun Tzu.{/m} {f}Diálogo.{/f}',
        'Contrastes.', 'Perspectivas.',
        '<p class="text-xs">Jobs: Innova. Buffett: Ahorra.</p>', 'chatgpt', false, false, 'advanced'),

    createCase(906, 'engineering', 'JSON Output', 'data_object', 'Técnica: Formato.',
        'Lista países JSON.',
        '<div class="text-xs text-slate-500 italic">"Chile, Perú..."</div>', 
        '{r}API.{/r} {c}Programación.{/c} {m}Solo JSON válido keys estrictas.{/m} {f}Código.{/f}',
        'Sin texto extra.', 'Keys.',
        '<div class="font-mono text-xs bg-slate-900 text-green-400 p-2">[{ "pais": "Chile" }]</div>', 'gemini', false, false, 'advanced'),

    createCase(907, 'engineering', 'Semilla', 'forest', 'Técnica: Consistencia.',
        'Haz el mismo personaje corriendo.',
        '<div class="text-xs text-slate-500 italic">"(Genera otro personaje)."</div>', 
        '{r}Midjourney.{/r} {c}Personaje fijo.{/c} {m}Usa parámetro --seed.{/m} {f}Prompt.{/f}',
        'Mismo ID.', 'Continuidad.',
        '<code class="text-xs bg-slate-900 text-purple-300">--seed 12345</code>', 'midjourney', false, false, 'advanced'),

    createCase(908, 'engineering', 'Tree of Thoughts', 'account_tree', 'Técnica: Exploración.',
        'Acertijo difícil.',
        '<div class="text-xs text-slate-500 italic">"Respuesta rápida."</div>', 
        '{r}Pensador.{/r} {c}Solución compleja.{/c} {m}Genera 3 caminos, descarta los malos.{/m} {f}Proceso.{/f}',
        'Ramas.', 'Evaluación.',
        '<p class="text-xs">Camino A (Descartado). Camino B (Plausible).</p>', 'chatgpt', true, false, 'advanced'),

    createCase(909, 'engineering', 'Evaluador', 'rate_review', 'Técnica: Autocrítica.',
        '¿Está bien mi email?',
        '<div class="text-xs text-slate-500 italic">"Sí, lindo."</div>', 
        '{r}Crítico.{/r} {c}Mejora.{/c} {m}Evalúa 1-10 y reescribe.{/m} {f}Nota + Texto.{/f}',
        'Sé duro.', 'Criterios.',
        '<p class="text-xs">Nota: 6/10. Muy largo. Versión mejorada: ...</p>', 'claude', false, false, 'advanced'),

    createCase(910, 'engineering', 'Negativas', 'do_not_disturb_on', 'Técnica: Restricción.',
        'Texto sobre IA sin clichés.',
        '<div class="text-xs text-slate-500 italic">"La IA revolucionaria..."</div>', 
        '{r}Escritor.{/r} {c}Originalidad.{/c} {m}Sin palabras: Revolución, Futuro, Paradigma.{/m} {f}Texto.{/f}',
        'Fuerza vocabulario.', 'Estilo.',
        '<p class="text-xs">"El software decide..." (Sin usar palabras prohibidas).</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(911, 'engineering', 'Tono Voz', 'equalizer', 'Técnica: Estilo.',
        'Tweet lunes divertido.',
        '<div class="text-xs text-slate-500 italic">"Feliz lunes."</div>', 
        '{r}Comediante Sarcástico.{/r} {c}Lunes.{/c} {m}Estilo Dr. House.{/m} {f}Tweet.{/f}',
        'Personaje.', 'Humor.',
        '<p class="text-xs">"Ah, lunes. El recordatorio semanal..."</p>', 'chatgpt', false, false, 'intermediate'),

    createCase(912, 'engineering', 'Delimitadores', 'code_blocks', 'Técnica: Seguridad.',
        'Resume este texto.',
        '<div class="text-xs text-slate-500 italic font-mono">(Se confunde con instrucciones internas).</div>', 
        '{r}Resumidor.{/r} {c}Input sucio.{/c} {m}Usa delimitadores """ para separar data.{/m} {f}Prompt.{/f}',
        '"""Texto""".', 'Seguridad.',
        '<code class="text-xs">Resume el texto entre """..."""</code>', 'chatgpt', false, false, 'beginner')
];

export default allCases;
