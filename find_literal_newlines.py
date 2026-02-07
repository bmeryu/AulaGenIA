"""
Buscar casos con \\n literal en toda la base de datos
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

text_fields = ['agiaPromptTagged', 'previewResponse', 'badResponsePreview', 'badResponseAnalysis', 'problem', 'description', 'solutionPlus']

problematic = []
for c in data:
    for field in text_fields:
        if field in c and isinstance(c[field], str):
            # Buscar \\n literal (que se ve como \n en el texto)
            if '\\n' in c[field]:
                problematic.append({
                    'id': c['id'],
                    'field': field,
                    'sample': c[field][:100]
                })

print(f"Casos con \\n literal encontrados: {len(problematic)}")
print()

# Mostrar IDs únicos
ids_affected = list(set(p['id'] for p in problematic))
ids_affected.sort()
print(f"IDs afectados: {ids_affected}")
print(f"Total IDs: {len(ids_affected)}")

# Mostrar detalle
for p in problematic[:10]:  # Solo primeros 10
    print(f"\nID {p['id']} - {p['field']}:")
    print(f"  {p['sample']}...")
