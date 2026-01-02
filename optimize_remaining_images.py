from PIL import Image
import os

# List of images to optimize
# Tuple format: (filename, quality, max_width)
images_to_optimize = [
    ("CHATGPT-Logo.jpg", 90, 800),
    ("Gemini-Logo.png", 90, 800),
    ("DALLE3-Logo.png", 90, 800),
    ("CANVA-Logo.png", 90, 800),
    ("GAMMA-Logo.jpg", 90, 800),
    ("Logo_SENCE.png", 90, 800),
    ("Logo_SII.png", 90, 800)
]

def optimize_image(filename, quality=85, max_width=1200):
    if not os.path.exists(filename):
        print(f"File not found: {filename}")
        return

    try:
        img = Image.open(filename)
        
        # Calculate new size maintaining aspect ratio
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            print(f"Resized {filename} to {max_width}x{new_height}")
        
        # Save as WebP
        new_filename = os.path.splitext(filename)[0] + ".webp"
        img.save(new_filename, "WEBP", quality=quality, optimize=True)
        
        old_size = os.path.getsize(filename) / (1024 * 1024)
        new_size = os.path.getsize(new_filename) / (1024 * 1024)
        
        print(f"Optimized {filename}: {old_size:.2f}MB -> {new_size:.2f}MB ({new_filename})")
        
    except Exception as e:
        print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    print("Starting optimization of remaining images...")
    for filename, quality, max_width in images_to_optimize:
        optimize_image(filename, quality, max_width)
    print("Done.")
