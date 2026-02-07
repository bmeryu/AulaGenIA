import json

# Mapeo de correccin
correcciones = {
    228: "Cierre de Ventas",          # Precios
    229: "Email & Recuperacin",       # Reactivacion
    230: "Cierre de Ventas",          # WhatsApp
    231: "Cierre de Ventas",          # Upsell
    232: "Cierre de Ventas",          # Objecin Socio
    233: "Cierre de Ventas",          # Propuestas
    234: "Captacin de Leads",         # LinkedIn
    235: "Persuasin & Copy",          # Queja (Recuperacin)
    236: "Persuasin & Copy",          # Pitch
    237: "Cierre de Ventas"           # Spin Selling
}

# Typos replacement map (para asegurar tildes en nombres de categoras)
typos = {
    "Captacin de Leads": "Captación de Leads",
    "Persuasin & Copy": "Persuasión & Copy",
    "Email & Recuperacin": "Email & Recuperación",
    "Gestin & Adm.": "Gestión & Adm."
}

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

count = 0
for case in data:
    cid = case['id']
    
    # 1. Aplicar mapeo a los nuevos casos
    if cid in correcciones:
        nueva_cat = correcciones[cid]
        # Corregir tildes en la nueva categora si es necesario
        if nueva_cat in typos:
            nueva_cat = typos[nueva_cat]
            
        case['categoriaSegmento']['Negocios & Estrategia'] = nueva_cat
        count += 1
    
    # 2. Barrido general de tildes en categoriaSegmento (para todos los casos)
    if 'categoriaSegmento' in case:
        for seg, cat in case['categoriaSegmento'].items():
            if cat in typos:
                case['categoriaSegmento'][seg] = typos[cat]

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f"Corregidas subcategoras para {count} casos nuevos.")
