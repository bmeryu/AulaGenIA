const fs = require('fs');
const data = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));

let updated = 0;
data.forEach(c => {
    const et = c.exampleTip || '';
    const sp = c.solutionPlus || '';

    if (!et || !sp) return;

    // Extraer nombre de técnica de exampleTip (antes del paréntesis o punto)
    const techName = et.split('(')[0].split('.')[0].trim();

    // Extraer explicación de solutionPlus (después del primer punto)
    const spParts = sp.split('.');
    const explanation = spParts.slice(1).join('.').trim();

    if (techName && explanation) {
        // Reconstruir solutionPlus con técnica de exampleTip + explicación original
        const newSp = techName + '. ' + explanation;

        // Solo actualizar si cambió
        if (c.solutionPlus !== newSp) {
            c.solutionPlus = newSp;
            updated++;
            if (updated <= 5) {
                console.log('ID', c.id, '- Actualizado:', techName.substring(0, 40) + '...');
            }
        }
    }
});

fs.writeFileSync('prompts_db.json', JSON.stringify(data, null, 4), 'utf8');
console.log('\n✅ Total actualizados:', updated);
