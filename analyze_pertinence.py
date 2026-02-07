import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print("=== ANALISIS DE PERTINENCIA - GESTION & ADM. ===\n")

gestion = []
for c in data:
    ps = c.get('prioridadSegmento', {})
    if any('Gesti' in k for k in ps.keys()):
        gestion.append(c)

# Definir qué ES y qué NO ES Gestión & Adm.
# ES: Operaciones, RRHH, Finanzas internas, Productividad, Procesos, Administración
# NO ES: Ventas/Marketing, Legal puro, Educación, Contenido

print("EVALUACION DE CADA CASO:\n")
print("Criterio: ¿El caso ayuda a ADMINISTRAR/GESTIONAR una empresa?")
print("          ¿O es más de VENTAS, LEGAL PURO, EDUCACION?\n")

for c in sorted(gestion, key=lambda x: x['id']):
    title = c['title']
    desc = c.get('description', 'Sin descripcion')
    problem = c.get('problem', 'Sin problema')[:100]
    cat = c.get('category', 'Sin categoria')
    
    # Flags de posible no pertenencia
    flags = []
    title_lower = title.lower()
    problem_lower = problem.lower()
    
    # Detectar si parece de otro segmento
    if any(x in title_lower for x in ['vend', 'client', 'lead', 'propuesta', 'landing', 'anuncio', 'ad', 'marketing']):
        flags.append("POSIBLE VENTAS")
    if any(x in title_lower for x in ['demanda', 'recurso', 'judicial', 'tribunal', 'querella', 'abogado']):
        flags.append("POSIBLE LEGAL PURO")
    if any(x in title_lower for x in ['clase', 'alumno', 'profesor', 'curricul', 'pedagogic']):
        flags.append("POSIBLE EDUCACION")
    
    # Detectar duplicados con otros segmentos
    otros_seg = [s for s in c.get('prioridadSegmento', {}).keys() if 'Gesti' not in s]
    if otros_seg:
        flags.append(f"DUPLICADO: {', '.join(otros_seg)}")
    
    if flags:
        print(f"[?] ID {c['id']:3}: {title[:55]}")
        print(f"    Categoria: {cat}")
        print(f"    Flags: {'; '.join(flags)}")
        print()
