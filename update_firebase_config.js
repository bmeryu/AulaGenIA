const fs = require('fs');
const path = require('path');

const firebaseConfigPath = path.join(__dirname, 'firebase.json');

try {
    const firebaseConfig = JSON.parse(fs.readFileSync(firebaseConfigPath, 'utf8'));

    if (!firebaseConfig.hosting) {
        firebaseConfig.hosting = {};
    }

    if (!firebaseConfig.hosting.headers) {
        firebaseConfig.hosting.headers = [];
    }

    // Find the entry for "**" (all files)
    let globalHeader = firebaseConfig.hosting.headers.find(h => h.source === '**');
    if (!globalHeader) {
        globalHeader = { source: '**', headers: [] };
        firebaseConfig.hosting.headers.push(globalHeader);
    }

    if (!globalHeader.headers) {
        globalHeader.headers = [];
    }

    // Add or update CSP
    const cspValue = "default-src * data: blob: 'unsafe-inline' 'unsafe-eval'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; style-src * data: blob: 'unsafe-inline'; frame-src *; font-src * data: blob: 'unsafe-inline';";

    // Remove existing CSP if any
    globalHeader.headers = globalHeader.headers.filter(h => h.key !== 'Content-Security-Policy');

    // Add new CSP
    globalHeader.headers.push({
        key: "Content-Security-Policy",
        value: cspValue
    });

    fs.writeFileSync(firebaseConfigPath, JSON.stringify(firebaseConfig, null, 4));
    console.log('Successfully updated firebase.json with permissive CSP.');

} catch (error) {
    console.error('Error updating firebase.json:', error);
    process.exit(1);
}
