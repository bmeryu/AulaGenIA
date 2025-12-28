const crypto = require('crypto');
const fs = require('fs');

// Read the prompts_db.js file
const fileContent = fs.readFileSync('./prompts_db.js', 'utf8');

// Encryption key (same as in the app)
const ENCRYPTION_KEY = 'AGIA2025';

// Function to encrypt text using Node's built-in crypto (AES-256-CBC compatible with CryptoJS)
function encryptPrompt(plaintext) {
    if (!plaintext || plaintext.startsWith('U2F')) {
        return plaintext; // Already encrypted or empty
    }

    // Create a key from the password (same as CryptoJS does)
    const key = crypto.createHash('sha256').update(ENCRYPTION_KEY).digest();
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(plaintext, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    // Combine IV and encrypted data (CryptoJS format)
    const combined = Buffer.concat([
        Buffer.from('Salted__'),
        iv,
        Buffer.from(encrypted, 'base64')
    ]).toString('base64');

    return 'U2F' + combined;
}

// Find all agiaPromptTagged entries that are NOT encrypted
const regex = /"agiaPromptTagged":\s*"((?:[^"\\]|\\.)*)"/g;
let match;
let newContent = fileContent;
let encryptedCount = 0;

while ((match = regex.exec(fileContent)) !== null) {
    const originalValue = match[1];
    // Unescape the JSON string
    const unescaped = originalValue.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');

    // Check if it's already encrypted
    if (!unescaped.startsWith('U2F')) {
        const encrypted = encryptPrompt(unescaped);
        // Re-escape for JSON
        const escapedEncrypted = encrypted.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');

        // Replace in content
        newContent = newContent.replace(
            `"agiaPromptTagged": "${originalValue}"`,
            `"agiaPromptTagged": "${escapedEncrypted}"`
        );
        encryptedCount++;
        console.log(`✓ Encrypted prompt ${encryptedCount} (length: ${unescaped.length} chars)`);
    }
}

// Write back to file
fs.writeFileSync('./prompts_db.js', newContent, 'utf8');
console.log(`\n✅ Encryption complete! ${encryptedCount} prompts encrypted.`);
