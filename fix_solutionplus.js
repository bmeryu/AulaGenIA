const fs = require('fs');
const data = JSON.parse(fs.readFileSync('prompts_db.json', 'utf8'));

const updates = {
    114: {
        solutionPlus: "Scroll-Stopping Visuals. En 0.3 segundos el usuario decide si para o sigue. Este prompt aplica principios de contraste extremo, rostros humanos y colores vibrantes para capturar atención en feeds saturados."
    },
    115: {
        solutionPlus: "Visual Hierarchy + Urgency Triggers. Las ofertas que convierten usan jerarquía visual clara: precio tachado prominente, nuevo precio en color contrastante, beneficios en bullets y elementos de escasez visible."
    },
    116: {
        solutionPlus: "Social Proof Design. Los testimonios visuales efectivos combinan tres elementos: foto real (o avatar), cita textual breve y resultado específico. Este formato genera credibilidad porque parece orgánico, no publicitario."
    },
    117: {
        solutionPlus: "Trend Forecasting Visual. Las tendencias de diseño cambian cada 3-6 meses. Este prompt analiza señales emergentes en plataformas clave para identificar estilos que están ganando tracción antes de que saturen."
    },
    118: {
        solutionPlus: "Viral Prediction Framework. La viralidad tiene patrones predecibles: novedad, emoción, utilidad práctica, controversia suave y timing. Este prompt evalúa tu contenido contra estos criterios ANTES de publicar."
    }
};

Object.keys(updates).forEach(id => {
    const idx = data.findIndex(c => c.id === parseInt(id));
    if (idx !== -1) {
        data[idx].solutionPlus = updates[id].solutionPlus;
        console.log('ID', id, '- solutionPlus actualizado');
    }
});

fs.writeFileSync('prompts_db.json', JSON.stringify(data, null, 4), 'utf8');
console.log('\n✅ solutionPlus estandarizados');
