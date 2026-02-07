"""
Corregir: Reemplazar \\n literales por saltos de línea reales
en los campos de texto de los casos nuevos (IDs 238-252)
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Campos que pueden tener saltos de línea
text_fields = ['agiaPromptTagged', 'previewResponse', 'badResponsePreview', 'badResponseAnalysis', 'problem', 'description']

fixed_count = 0
for c in data:
    if 238 <= c['id'] <= 252:
        for field in text_fields:
            if field in c and isinstance(c[field], str):
                original = c[field]
                # Reemplazar \\n literal por salto de línea real
                fixed = original.replace('\\n', '\n')
                if fixed != original:
                    c[field] = fixed
                    fixed_count += 1

print(f"Campos corregidos: {fixed_count}")

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Guardado.")

# Verificar un caso
for c in data:
    if c['id'] == 250:
        print(f"\nVerificacion ID 250 (primeras 200 chars de agiaPromptTagged):")
        print(c['agiaPromptTagged'][:200])
