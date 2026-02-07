import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Buscar todos los campos únicos en todos los casos
all_keys = set()
for c in data:
    all_keys.update(c.keys())

print("Todos los campos existentes en prompts_db.json:")
for k in sorted(all_keys):
    print(f"  - {k}")

# Verificar isFavorite
with_fav = [c for c in data if c.get('isFavorite') == True]
print(f"\nCasos con isFavorite=True: {len(with_fav)}")

# Ver los primeros 5
print("\nPrimeros 5 marcados como favoritos:")
for c in with_fav[:5]:
    print(f"  ID {c['id']}: {c['title'][:50]}")
