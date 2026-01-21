const fs = require('fs');
const filename = 'campus-curso-ia-v2.js';

try {
    const content = fs.readFileSync(filename, 'utf8');

    // Find where the real code starts
    const index = content.indexOf('document.addEventListener');

    if (index > 0) {
        console.log(`Found garbage characters of length ${index} at the start. Removing...`);
        const cleanContent = content.substring(index);
        fs.writeFileSync(filename, cleanContent, 'utf8');
        console.log('File successfully cleaned.');
    } else if (index === 0) {
        // Special case: check for BOM char code 65279
        if (content.charCodeAt(0) === 65279) {
            console.log('Found BOM at index 0. Removing...');
            fs.writeFileSync(filename, content.substring(1), 'utf8');
        } else {
            console.log('File seems clean (starts with document.addEventListener at 0).');
        }
    } else {
        console.error('Could not find start of code pattern.');
    }
} catch (e) {
    console.error('Error:', e);
}
