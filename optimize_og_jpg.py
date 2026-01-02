from PIL import Image
import os

def optimize_og_image():
    file_path = 'og-image.jpg'
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        return

    try:
        with Image.open(file_path) as img:
            # Resize if too big (standard OG is 1200x630)
            max_width = 1200
            if img.width > max_width:
                width_percent = (max_width / float(img.width))
                h_size = int((float(img.height) * float(width_percent)))
                img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
            
            # Save as optimized JPG
            img = img.convert("RGB")
            img.save(file_path, "JPEG", quality=85, optimize=True)
            print(f"Optimized {file_path}")

    except Exception as e:
        print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    optimize_og_image()
