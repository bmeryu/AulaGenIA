import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Contar por segmento
negocios = [c for c in data if c.get('prioridadSegmento', {}).get('Negocios & Estrategia')]
legal = [c for c in data if c.get('prioridadSegmento', {}).get('Legal & Profesional')]
educacion = [c for c in data if c.get('prioridadSegmento', {}).get('Educacion & Formacion') or c.get('prioridadSegmento', {}).get('Educación & Formación')]
gestion = [c for c in data if c.get('prioridadSegmento', {}).get('Gestion & Adm.') or c.get('prioridadSegmento', {}).get('Gestión & Adm.')]

print(f"Negocios & Estrategia: {len(negocios)} casos -> 25% = {int(len(negocios)*0.25)} destacados")
print(f"Legal & Profesional: {len(legal)} casos -> 25% = {int(len(legal)*0.25)} destacados")
print(f"Educacion & Formacion: {len(educacion)} casos -> 25% = {int(len(educacion)*0.25)} destacados")
print(f"Gestion & Adm.: {len(gestion)} casos (pendiente)")

# Verificar campo de favoritos en primer caso
sample = data[0] if data else {}
print(f"\nCampos disponibles: {list(sample.keys())}")
if 'isFavorite' in sample:
    print("Campo usado: isFavorite")
elif 'favorite' in sample:
    print("Campo usado: favorite")
else:
    print("No hay campo de favoritos, buscar alternativa")

# Mostrar IDs de cada segmento para seleccionar
print("\n=== NEGOCIOS (para seleccionar 25% destacados) ===")
for c in negocios[:20]:
    print(f"ID {c['id']}: {c['title'][:60]}")
