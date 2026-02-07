import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Casos a revisar manualmente
ids_revisar = [55, 56, 58, 61, 65, 67, 83, 84, 91, 92, 222, 226]

print("=== REVISION MANUAL DE CASOS SOSPECHOSOS ===\n")

for c in data:
    if c['id'] in ids_revisar:
        print("=" * 80)
        print(f"ID: {c['id']}")
        print(f"TITULO: {c['title']}")
        print(f"CATEGORIA: {c.get('category', 'N/A')}")
        print(f"DESCRIPCION: {c.get('description', 'Sin descripcion')[:150]}")
        print(f"PROBLEMA: {c.get('problem', 'Sin problema')[:150]}")
        
        # Ver en qué segmentos está
        segs = list(c.get('prioridadSegmento', {}).keys())
        print(f"SEGMENTOS: {segs}")
        
        # Mi evaluación
        title = c['title'].lower()
        if c['id'] in [67, 83, 84, 92]:
            print(">>> VEREDICTO: DUPLICADO CON LEGAL - Considerar mover")
        elif 'sii' in title or 'impuesto' in title or 'contador' in title:
            print(">>> VEREDICTO: FINANZAS/CONTABLE - PERTENECE A GESTION")
        elif 'rrhh' in title or 'contrat' in title or 'cargo' in title or 'kpi' in title:
            print(">>> VEREDICTO: RRHH/OPERACIONES - PERTENECE A GESTION")
        elif 'reglamento' in title or 'flujo' in title or 'caja' in title:
            print(">>> VEREDICTO: ADMIN/FINANZAS - PERTENECE A GESTION")
        else:
            print(">>> VEREDICTO: REVISAR MANUALMENTE")
        print()
