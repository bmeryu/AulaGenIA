
const fs = require('fs');
const path = 'resources_db.js';

try {
    let content = fs.readFileSync(path, 'utf8');

    // Reemplazar Gestión & Adm. por Gestión & Administración
    // Usamos regex flexible para tildes
    content = content.replace(/"Gesti.n & Adm\.":/g, '"Gestión & Administración":');

    // Reemplazar "Educación": por "Educación & Capacitación":
    // Cuidado de no reemplazar si ya es correcto
    content = content.replace(/"Educaci.n":/g, '"Educación & Capacitación":');

    // Escribir archivo
    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully updated segment keys in resources_db.js');

} catch (e) {
    console.error('Error:', e);
    process.exit(1);
}
