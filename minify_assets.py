import os
import subprocess
import glob

def minify_assets():
    # Minifiers paths
    html_minifier = os.path.join('node_modules', 'html-minifier-terser', 'cli.js')
    terser = os.path.join('node_modules', 'terser', 'bin', 'terser')

    # HTML Files
    html_files = glob.glob('*.html')
    for html_file in html_files:
        print(f"Minifying {html_file}...")
        cmd = [
            'node', html_minifier,
            '--collapse-whitespace',
            '--remove-comments',
            '--minify-css', 'true',
            '--minify-js', 'true',
            '-o', html_file,
            html_file
        ]
        try:
            subprocess.run(cmd, check=True, shell=True) # shell=True to handle path resolution in some envs
        except subprocess.CalledProcessError as e:
            print(f"Error minifying {html_file}: {e}")

    # JS Files (Client-side specific)
    js_files = ['script.js', 'currency-converter.js']
    for js_file in js_files:
        if os.path.exists(js_file):
            print(f"Minifying {js_file}...")
            # Terser usage: terser input.js -c -m -o output.js
            cmd = [
                'node', terser,
                js_file,
                '-c', # compress
                '-m', # mangle
                '-o', js_file
            ]
            try:
                subprocess.run(cmd, check=True, shell=True)
            except subprocess.CalledProcessError as e:
                print(f"Error minifying {js_file}: {e}")

if __name__ == "__main__":
    minify_assets()
