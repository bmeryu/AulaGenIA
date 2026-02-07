"""
Marcar 13 casos de Gestión como destacados (25% de 52)
Criterios: Score alto, aplicabilidad, resultado medible
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# IDs seleccionados para destacar en Gestión
# Basado en score, aplicabilidad transversal y resultado medible
gestion_destacados = [
    53,   # Score 95: Detecta Fugas de Dinero - Dolor visceral
    102,  # Score 94: Semáforo del Negocio - Muy visual
    129,  # Score 95: Acta Directorio - Formalidad legal
    131,  # Score 96: Carta de Despido - Alto riesgo
    132,  # Score 94: Presupuesto Anual - Esencial
    163,  # Score 94: Email 30 Segundos - Productividad (ya estaba)
    164,  # Score 95: Minuta 5 Minutos - Ahorro tiempo
    221,  # Score 95: Informe Gestión - Gerencia
    222,  # Score 96: Flujo de Caja - Finanzas
    224,  # Score 95: Evaluación Desempeño - RRHH
    227,  # Score 95: Plan Capacitación - RRHH
    240,  # Score 96: Matriz Eisenhower - NUEVO, técnica con nombre
    242,  # Score 95: Checklist Cierre - NUEVO, esencial
]

# Aplicar isStarPrompt
count = 0
for c in data:
    # Solo casos de Gestión
    is_gestion = any('Gesti' in k for k in c.get('prioridadSegmento', {}).keys())
    
    if c['id'] in gestion_destacados and is_gestion:
        c['isStarPrompt'] = True
        count += 1
        print(f"[*] ID {c['id']:3}: {c['title'][:50]}")

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\nTotal destacados en Gestion: {count}/13")

# Verificar total de isStarPrompt en toda la BD
total_star = sum(1 for c in data if c.get('isStarPrompt'))
print(f"Total isStarPrompt en toda la BD: {total_star}")
