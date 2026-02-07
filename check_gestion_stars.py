import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

gestion_stars = []
for c in data:
    is_gestion = any('Gesti' in k for k in c.get('prioridadSegmento', {}).keys())
    if is_gestion and c.get('isStarPrompt'):
        gestion_stars.append(c['id'])
        print(f"ID {c['id']}: {c['title'][:50]}")

print(f"\nTotal destacados en Gestion: {len(gestion_stars)}")
print(f"IDs: {gestion_stars}")
