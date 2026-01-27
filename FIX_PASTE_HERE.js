const isLocalDev = window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

let casesData = [];
async function loadPromptsDatabase() {
    try {
        if (isLocalDev) {
            console.log("DEV: Cargando prompts desde archivo local...");
            const response = await fetch('./prompts_db.json');
            if (response.ok) {
                casesData = await response.json();
                console.log("DEV Success: " + casesData.length + " prompts cargados");
            } else {
                console.error("DEV Error: No se pudo cargar prompts_db.json");
            }
        } else {
            console.log("PROD: Solicitando prompts a Cloud Function...");
            const getPrompts = firebase.functions().httpsCallable("getPromptsData");
            const result = await getPrompts();
            if (result.data.success) {
                casesData = result.data.data;
                console.log("PROD Success: " + casesData.length + " prompts loaded.");
            } else {
                console.error("Respuesta invalida:", result.data);
            }
        }
        const currentLesson = f(c.currentLessonId);
        if (currentLesson && currentLesson.lesson.type === 'case_category') {
            h(c.currentLessonId);
        }
    } catch (error) {
        console.error("Load Error:", error);
    }
}
loadPromptsDatabase();
