import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== GESTION & ADM. - DIAGNOSTICO ===\n")

gestion = []
for c in data:
    ps = c.get('prioridadSegmento', {})
    if any('Gesti' in k for k in ps.keys()):
        gestion.append(c)

print(f"Total casos: {len(gestion)}")
print(f"Objetivo: 52 casos")
print(f"Faltan: {52 - len(gestion)} casos nuevos\n")

print("=" * 80)
print(f"{'ID':>4} | {'Score':>5} | {'Star':>4} | {'Titulo':<55}")
print("=" * 80)

for c in sorted(gestion, key=lambda x: x['id']):
    score = c.get('metadata', {}).get('score', 0)
    star = "SI" if c.get('isStarPrompt') else "NO"
    title = c['title'][:55]
    cat = c.get('categoriaSegmento', {})
    subcat = cat.get('Gestión & Adm.', cat.get('Gestion & Adm.', 'N/A'))
    print(f"{c['id']:>4} | {score:>5} | {star:>4} | {title}")

print("\n" + "=" * 80)
print("SUBCATEGORIAS USADAS:")
subcats = {}
for c in gestion:
    cat = c.get('categoriaSegmento', {})
    subcat = cat.get('Gestión & Adm.', cat.get('Gestion & Adm.', 'Sin subcat'))
    subcats[subcat] = subcats.get(subcat, 0) + 1

for s, count in sorted(subcats.items(), key=lambda x: -x[1]):
    print(f"  {s}: {count} casos")
