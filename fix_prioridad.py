import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Los IDs nuevos que necesitan prioridadSegmento
new_ids = [228, 229, 230, 231, 232, 233, 234, 235, 236, 237]
count = 0

for case in data:
    if case['id'] in new_ids:
        # Agregar prioridadSegmento con valor 1 para Negocios & Estrategia
        case['prioridadSegmento'] = {'Negocios & Estrategia': 1}
        count += 1
        print(f"Fixed ID {case['id']}: {case['title']}")

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"\n{count} casos corregidos con prioridadSegmento.")
