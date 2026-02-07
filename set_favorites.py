"""
Script para destacar 25% de casos por segmento.
SELECCIÓN EXPERTA basada en:
1. Score más alto (metadata.score)
2. Aplicabilidad transversal (sirve para muchas industrias)
3. Resultado medible en el título
4. Técnica con nombre propio
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# === NEGOCIOS & ESTRATEGIA: 13 casos (25% de 52) ===
# Seleccionados por: métricas claras, técnicas con nombre, dolor visceral
negocios_destacados = [
    11,   # Cold Emails B2B - técnica específica, métrica clara
    12,   # Anuncios Scroll 0.5 seg - resultado medible
    15,   # Ofertas Irresistibles - dolor universal de vendedores
    16,   # Landing Pages 5 seg - técnica + métrica
    17,   # Google Ads CTR 8% - número concreto superando media
    20,   # Carritos Abandonados 45% - muy aplicable e-commerce
    21,   # Subir Precios 30% - dolor visceral de cobrar barato
    27,   # Ticket Promedio 30% - psicología de precios
    28,   # Escalera de Valor x10 - técnica con nombre reconocido
    30,   # Propuestas $2M ROI - técnica sofisticada B2B
    228,  # Cierra Precios Altos sin Descuentos - nuevo, alta calidad
    229,  # Reactiva Prospectos 48h - métrica clara de tiempo
    237,  # Diagnóstico Socrático - técnica con nombre propio
]

# === LEGAL & PROFESIONAL: 12 casos (25% de 51) ===
# Seleccionados por: Score 96-97, alta aplicabilidad, documentos esenciales
legal_destacados = [
    4,    # Score 96: Entiende 50 Páginas en 5 Min - ultra aplicable
    7,    # Score 94: Detecta Trampas en Contratos - dolor real
    120,  # Score 96: Contrato de Honorarios Blindado - esencial freelancers
    123,  # Score 95: Propuesta de Servicios Corporativos - cierre de ventas
    139,  # Score 96: Due Diligence Legal - técnica profesional
    141,  # Score 96: Respuesta SII - muy específico Chile
    144,  # Score 96: Business Case Directorio - decisiones ejecutivas
    147,  # Score 97: Escritura Compraventa - el más alto score
    191,  # Score 96: Demanda Civil - documento profesional
    193,  # Score 96: Recurso de Protección - acción constitucional
    200,  # Score 96: Dictamen Jurídico - consultoría legal
    219,  # Score 96: Protocolo Compliance - empresarial moderno
]

# === EDUCACIÓN: 12 casos (25% de 51) ===
# Seleccionados por: Score 96, innovación pedagógica, aplicabilidad docente
educacion_destacados = [
    8,    # Score 89: Presentaciones TED - aplicación universal
    47,   # Score 92: Datos en Historias - storytelling educativo
    150,  # Score 96: Generador Pruebas - ahorra tiempo masivo
    155,  # Score 96: Planificación Anual Chile - muy específico
    160,  # Score 96: Revisión Literatura - investigación
    163,  # Score 96: Experiencia Preescolares - nicho específico
    168,  # Score 96: Proyecto ABP - metodología innovadora
    177,  # Score 96: Protocolo Crisis Escolar - esencial directivos
    178,  # Score 96: Evaluación Auténtica - pedagogía moderna
    181,  # Score 96: Clase Invertida - flipped classroom
    185,  # Score 96: Escape Room Educativo - gamificación
    188,  # Score 96: Adaptación PACI - inclusión educativa
]

# Combinar todos los destacados
todos_destacados = set(negocios_destacados + legal_destacados + educacion_destacados)

# Aplicar isFavorite a todos los casos
count_negocios = 0
count_legal = 0
count_edu = 0

for c in data:
    if c['id'] in todos_destacados:
        c['isFavorite'] = True
        # Contar por segmento
        ps = c.get('prioridadSegmento', {})
        if ps.get('Negocios & Estrategia'):
            count_negocios += 1
        elif ps.get('Legal & Profesional'):
            count_legal += 1
        elif any('Educaci' in k for k in ps.keys()):
            count_edu += 1
        print(f"[OK] ID {c['id']:3}: {c['title'][:50]}")
    else:
        c['isFavorite'] = False

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\n=== RESUMEN ===")
print(f"Negocios & Estrategia: {count_negocios}/13 destacados")
print(f"Legal & Profesional: {count_legal}/12 destacados")
print(f"Educación: {count_edu}/12 destacados")
print(f"Gestión & Adm.: PENDIENTE (no modificado)")
print(f"\nTotal: {count_negocios + count_legal + count_edu} casos marcados como isFavorite=true")
