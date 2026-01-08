const fs = require('fs');
const path = 'C:/Users/Mole-PC/Documents/GitHub/AulaGenIA/campus-curso-ia.html';
const content = fs.readFileSync(path, 'utf8');

// Find the last script tag content
const lastScriptStart = content.lastIndexOf('<script');
const codeStart = content.indexOf('>', lastScriptStart) + 1;
const codeEnd = content.lastIndexOf('</script>');

if (lastScriptStart !== -1 && codeEnd !== -1) {
    const jsCode = content.substring(codeStart, codeEnd);
    fs.writeFileSync('temp_debug_script.js', jsCode);
    console.log("Extracted JS to temp_debug_script.js");
} else {
    console.error("Could not find script block");
}
