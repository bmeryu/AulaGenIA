import os

file_path = r"c:\Users\Mole-PC\Documents\GitHub\AulaGenIA\campus-curso-ia-v2.js"

try:
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    # Define the block to move (1-indexed lines 3102 to 3394)
    # 0-indexed: 3101 to 3393 (inclusive)
    # Python slice: [3101:3394]
    start_line = 3102
    end_line = 3394
    
    start_idx = start_line - 1
    end_idx = end_line # Slice excludes this index, so it captures up to end_line - 1
    
    print(f"Total lines: {len(lines)}")
    print(f"Moving lines {start_line} to {end_line}")
    
    block = lines[start_idx:end_idx]
    
    # Validation: Check if block starts with expected comment
    if "SMART RESOURCE VIEWER FUNCTIONS" not in block[1]:
        print("Warning: Block start does not match expected content. Aborting.")
        # Print first few lines of block for debugging
        print("First 3 lines of block:")
        for i in range(3):
            print(block[i])
        exit(1)

    # Remove the block
    del lines[start_idx:end_idx]
    
    # Insert after line 1 (index 0). So at index 1.
    lines[1:1] = block
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.writelines(lines)
        
    print("Successfully moved code block.")

except Exception as e:
    print(f"Error: {e}")
