from PIL import Image
import os

files = [
    "Logo_AGIA_big.png",
    "Logo_AGIA_dark.png",
    "Logo_AGIA.png",
    "Midjourney-Logo.png"
]

# For logos, we might not want to resize if they are needed in high res, 
# but usually for web 800-1000px width is plenty for a logo unless it's a huge hero logo.
# Logo_AGIA_big is 500kb, so it's likely large in dimensions or just uncompressed.
MAX_WIDTH = 800 

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
        
        # Save as WebP with higher quality for logos to prevent artifacts
        new_filename = os.path.splitext(filename)[0] + ".webp"
        img.save(new_filename, "WEBP", quality=90, optimize=True)
        
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
