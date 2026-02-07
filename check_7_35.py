import json

with open('prompts_db.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for c in data:
    if c['id'] in [7, 35]:
        resp = c.get('previewResponse', '')
        # Buscar si tiene backslash literal seguido de n
        has_literal = '\\n' in resp
        print(f"ID {c['id']}: tiene literal backslash-n = {has_literal}")
        
        # Ver primera parte sin emojis
        clean = resp[:150].encode('ascii', 'replace').decode()
        print(f"  Sample: {clean}")
        print()
