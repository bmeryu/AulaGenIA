"""
Corregir: Solo 13 destacados (25% de 52)
Remover isStarPrompt de: 241, 244, 251 (sobrantes)
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# IDs que deben quedar como destacados (13 exactos)
gestion_destacados = [53, 102, 129, 131, 132, 163, 164, 221, 222, 224, 227, 240, 242]

# IDs a remover de destacados
remover = [241, 244, 251]

for c in data:
    if c['id'] in remover:
        c['isStarPrompt'] = False
        print(f"Removido star de ID {c['id']}: {c['title'][:40]}")

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

# Verificar
count = 0
for c in data:
    is_gestion = any('Gesti' in k for k in c.get('prioridadSegmento', {}).keys())
    if is_gestion and c.get('isStarPrompt'):
        count += 1

print(f"\nTotal destacados en Gestion ahora: {count}/13")
