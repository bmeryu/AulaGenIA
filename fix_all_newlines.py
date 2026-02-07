"""
Corregir todos los casos con \\n literal - búsqueda completa
"""

import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

text_fields = ['agiaPromptTagged', 'previewResponse', 'badResponsePreview', 'badResponseAnalysis', 'problem', 'description', 'solutionPlus', 'badPrompt']

fixed_cases = set()
for c in data:
    for field in text_fields:
        if field in c and isinstance(c[field], str):
            original = c[field]
            fixed = original.replace('\\n', '\n')
            if fixed != original:
                c[field] = fixed
                fixed_cases.add(c['id'])

print(f"Casos corregidos: {sorted(fixed_cases)}")
print(f"Total: {len(fixed_cases)}")

with open('prompts_db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Guardado.")
