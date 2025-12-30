const fs = require('fs');

try {
    const rawData = fs.readFileSync('prompts_db.json', 'utf8');
    const data = JSON.parse(rawData);

    let updatedCount = 0;

    data.forEach(item => {
        if (!item.description || item.description.trim() === "") {
            if (item.title) {
                // Generate a concise description from the title
                // Remove special characters and create a clean description
                let desc = item.title
                    .replace(/:/g, ' -') // Replace colons with dashes
                    .replace(/\s+/g, ' ') // Normalize whitespace
                    .trim();

                item.description = desc;
                updatedCount++;
                console.log(`Updated ID ${item.id}: "${desc}"`);
            } else {
                console.warn(`Warning: ID ${item.id} has no title to generate description from.`);
            }
        }
    });

    fs.writeFileSync('prompts_db.json', JSON.stringify(data, null, 4), 'utf8');
    console.log(`\n✓ Successfully updated ${updatedCount} descriptions from titles in prompts_db.json`);

} catch (error) {
    console.error("Error updating prompts_db.json:", error);
}
