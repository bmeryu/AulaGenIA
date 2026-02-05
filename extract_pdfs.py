# -*- coding: utf-8 -*-
import pdfplumber
import os
import sys

# Force UTF-8 output
sys.stdout.reconfigure(encoding='utf-8')

pdf_dir = 'subidos'
output_dir = 'pdf_text'

# Create output directory
os.makedirs(output_dir, exist_ok=True)

# List of key PDFs to extract first (pilot resources)
pilot_pdfs = [
    'Guía-de-Acceso-a-ChatGPT-para-Novatos.pdf',
    'Infografía-La Receta-WOW.pdf',
    'Mi-Primer-Prompt-WOW.pdf',
    'Plantilla-Rellena-tu-Prompt-WOW.pdf',
    'Guía-de-Acceso-a-Gemini-para-Novatos.pdf',
    'Guía-de-Acceso-a-Grok-para-Novatos.pdf',
]

for pdf_name in pilot_pdfs:
    pdf_path = os.path.join(pdf_dir, pdf_name)
    if os.path.exists(pdf_path):
        try:
            pdf = pdfplumber.open(pdf_path)
            text = '\n\n--- PAGE ---\n\n'.join([p.extract_text() or '' for p in pdf.pages])
            
            # Save to text file
            txt_name = pdf_name.replace('.pdf', '.txt')
            with open(os.path.join(output_dir, txt_name), 'w', encoding='utf-8') as f:
                f.write(text)
            print(f"✓ Extracted: {pdf_name}")
        except Exception as e:
            print(f"✗ Error with {pdf_name}: {e}")
    else:
        print(f"✗ Not found: {pdf_name}")

print("\nDone! Check the 'pdf_text' folder.")
