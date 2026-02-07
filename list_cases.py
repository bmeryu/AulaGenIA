import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== LEGAL & PROFESIONAL ===")
for c in data:
    if c.get('prioridadSegmento', {}).get('Legal & Profesional'):
        score = c.get('metadata', {}).get('score', 0)
        title = c['title'][:55]
        print(f"ID {c['id']:3} | Score:{score:2} | {title}")

print()
print("=== EDUCACION ===")
for c in data:
    ps = c.get('prioridadSegmento', {})
    if any('Educaci' in k for k in ps.keys()):
        score = c.get('metadata', {}).get('score', 0)
        title = c['title'][:55]
        print(f"ID {c['id']:3} | Score:{score:2} | {title}")
