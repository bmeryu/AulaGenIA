from PIL import Image
import os

files = [
    "ETIA.png",
    "cuentos.png", 
    "sitio_web_muna.png"
]

MAX_WIDTH = 1200 

def optimize_image(filename):
    if not os.path.exists(filename):
        print(f"File not found: {filename}")
        return

    try:
        img = Image.open(filename)
        
        # Calculate new size maintaining aspect ratio
        if img.width > MAX_WIDTH:
            ratio = MAX_WIDTH / img.width
            new_height = int(img.height * ratio)
            img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
            print(f"Resized {filename} to {MAX_WIDTH}x{new_height}")
        
        # Save as WebP
        new_filename = os.path.splitext(filename)[0] + ".webp"
        img.save(new_filename, "WEBP", quality=80, optimize=True)
        
        old_size = os.path.getsize(filename) / (1024 * 1024)
        new_size = os.path.getsize(new_filename) / (1024 * 1024)
        
        print(f"Optimized {filename}: {old_size:.2f}MB -> {new_size:.2f}MB ({new_filename})")
        
    except Exception as e:
        print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    print("Starting optimization...")
    for f in files:
        optimize_image(f)
    print("Done.")
