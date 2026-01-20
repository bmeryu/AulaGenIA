const fs = require('fs');
const filename = 'campus-curso-ia-v2.js';

try {
    const content = fs.readFileSync(filename, 'utf8');

    // Check for common mojibake
    const snippet = content.match(/MÃ³dulo/);
    if (snippet) {
        console.log('Detected bad encoding pattern: MÃ³dulo');

        // Attempt fix: Treat current UTF-8 string bits as binary (latin1) bytes, then decode as UTF-8
        // This reverses: UTF-8 Bytes -> Interpreted as Latin1 Chars -> Saved as UTF-8
        const fixed = Buffer.from(content, 'binary').toString('utf8');

        if (fixed.includes('Módulo')) {
            console.log('Fix verification successful: Found "Módulo"');
            fs.writeFileSync(filename, fixed, 'utf8');
            console.log('File written successfully.');
        } else {
            console.log('Fix failed. "Módulo" not found in fixed version.');
            // Try alternative: encoding might be different.
            // If cmd > file used CP1252
        }
    } else {
        console.log('Pattern not found. File might be already fixed or different corruption.');
        // Check for other pattern
        const snippet2 = content.match(/Â¡/); // ¡
        if (snippet2) console.log('Found Â¡ - confirming encoding issue.');
    }
} catch (e) {
    console.error('Error:', e);
}
