import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== CASOS NUEVOS CREADOS (IDs 238-252) ===\n")

for c in data:
    if 238 <= c['id'] <= 252:
        star = "[STAR]" if c.get('isStarPrompt') else ""
        print(f"ID {c['id']:3}: {c['title'][:55]} {star}")

print("\n=== TODOS LOS DESTACADOS DE GESTION ===\n")

count = 0
for c in data:
    is_gestion = any('Gesti' in k for k in c.get('prioridadSegmento', {}).keys())
    if is_gestion and c.get('isStarPrompt'):
        count += 1
        nuevo = "[NUEVO]" if 238 <= c['id'] <= 252 else ""
        print(f"ID {c['id']:3}: {c['title'][:50]} {nuevo}")

print(f"\nTotal destacados Gestion: {count}")
