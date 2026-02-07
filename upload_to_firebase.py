from google.cloud import storage
import os

# Configurar credenciales (usa las del gcloud CLI)
os.environ['GOOGLE_CLOUD_PROJECT'] = 'aulagenia'

# Crear cliente
client = storage.Client()

# Acceder al bucket
bucket = client.bucket('aulagenia.firebasestorage.app')

# Subir archivo
blob = bucket.blob('private/prompts_db.json')
blob.upload_from_filename('prompts_db_editado.json', content_type='application/json')

print(f"Archivo subido exitosamente!")
print(f"Tamaño: {blob.size} bytes")
print(f"Actualizado: {blob.updated}")
