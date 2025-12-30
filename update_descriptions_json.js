const fs = require('fs');

try {
    const rawData = fs.readFileSync('prompts_db.json', 'utf8');
    const data = JSON.parse(rawData);

    let updatedCount = 0;

    data.forEach(item => {
        if (!item.description || item.description.trim() === "") {
            if (item.problem) {
                item.description = item.problem;
                updatedCount++;
            } else {
                console.warn(`Warning: ID ${item.id} has no description AND no problem field.`);
            }
        }
    });

    fs.writeFileSync('prompts_db.json', JSON.stringify(data, null, 4), 'utf8');
    console.log(`Successfully updated ${updatedCount} descriptions in prompts_db.json`);

} catch (error) {
    console.error("Error updating prompts_db.json:", error);
}
