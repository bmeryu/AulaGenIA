# Implementación de Checklists de Práctica por Módulo

## Resumen de Cambios

Se han agregado **checklists de práctica predefinidos** para cada módulo del curso "IA Aplicada · Esencial" en `campus-curso-ia.html`. Estos checklists se cargan automáticamente cuando un estudiante accede por primera vez a cualquier lección de un módulo.

## Módulos Actualizados

### ONBOARDING: Bienvenida al Curso
- ✅ Video 1 | El Pacto: Me comprometo a ver a la IA como un "asistente" o "copiloto" para facilitar mi aprendizaje
- ✅ Video 2 | Recursos: Descargué las guías de acceso rápido desde la pestaña de materiales

### MÓDULO 1: Fundamentos y Desmitificación
- ✅ Video 1 | Desafío de Debate: Ingresé al chat y le planteé a la IA una duda actual o una opinión subjetiva
- ✅ Video 2 | Detector de Alucinaciones: Le pedí información sobre un tema que domino al 100%
- ✅ Video 3 | Verificación: Hice una búsqueda crítica de un resultado de la IA

### MÓDULO 2: La IA en tu Día a Día
- ✅ Video 2 | Creatividad Visual: Entré a Ideogram (o Midjourney) y generé una imagen o logo
- ✅ Video 3 | El Diagnóstico: Identifiqué esa tarea repetitiva que me consume al menos 30 minutos
- ✅ Video 3 | La Decisión: Elegí cuál tarea voy a delegar o automatizar primero

### MÓDULO 3: El Arte de las Instrucciones
- ✅ Video 1 | La Receta Básica: Escribí mi primer prompt estructurado (Rol, Contexto, Meta)
- ✅ Video 2 | Nivel Experto: Agregué Restricciones y Formato a mi prompt
- ✅ Video 2 | Rotación de Sombrero: Pedí a la IA que asuma un nuevo rol sin cambiar de chat

### MÓDULO 4: El Arquitecto de Ideas
- ✅ Video 1 | El Plano: Pedí a la IA solo el índice de un proyecto grande
- ✅ Video 2 | El Ladrillo: Desarrollé a fondo un único punto del índice
- ✅ Video 2 | El Cemento: Transformé el contenido en formato ejecutable (tabla/calendario)
- ✅ Video 2 | Desafío de Estilo: Pedí 3 variaciones de estilo de una imagen

## Cambios Técnicos Implementados

### 1. Estructura de Datos (Líneas 768-1130)
Se agregó el campo `practiceTasks` a cada módulo en la estructura `ALL_COURSES_DATA`:

```javascript
{
    title: 'Módulo X: Título',
    badge: 'Badge Name',
    practiceTasks: [
        { text: 'Descripción de la tarea...', done: false },
        // ... más tareas
    ],
    lessons: [ /* ... */ ]
}
```

### 2. Función loadTasks() Mejorada (Líneas 2116-2151)
La función ahora:
1. **Detecta el módulo** de la lección actual
2. **Verifica si hay tareas predefinidas** (`practiceTasks`) en el módulo
3. **Auto-popula las tareas** la primera vez que el estudiante accede a una lección del módulo
4. **Mantiene las tareas personalizadas** que el estudiante agregue posteriormente

```javascript
async function loadTasks(lessonId) {
    // Obtiene las tareas predefinidas del módulo
    const lessonInfo = getLessonInfo(lessonId);
    const modulePracticeTasks = lessonInfo?.module?.practiceTasks || [];
    
    // Si es la primera vez en este módulo, agrega las tareas predefinidas
    if (modulePracticeTasks.length > 0 && existingTasks.length === 0) {
        await docRef.set({ 
            uid: currentUser.uid, 
            items: modulePracticeTasks.map(task => ({ ...task })) 
        }, { merge: true });
    }
}
```

## Comportamiento del Sistema

### Primera Visita a un Módulo
1. El estudiante accede a cualquier lección del módulo
2. El sistema detecta que no hay tareas guardadas para esa lección
3. Automáticamente carga las tareas predefinidas del módulo
4. Las tareas aparecen en la pestaña "Tareas y Archivos"

### Visitas Posteriores
- Las tareas se mantienen con su estado (completadas/pendientes)
- El estudiante puede agregar tareas personalizadas adicionales
- El estudiante puede eliminar tareas si lo desea
- El progreso se guarda en Firestore

### Sincronización por Lección
- Cada lección dentro del mismo módulo comparte las mismas tareas predefinidas
- Las tareas se almacenan por `lessonId`, permitiendo diferentes checklists si es necesario en el futuro

## Base de Datos (Firestore)

Las tareas se guardan en la colección `userTasks` con la siguiente estructura:

```javascript
{
    uid: "user_id",
    items: [
        { text: "Tarea 1", done: false },
        { text: "Tarea 2", done: true },
        // ...
    ]
}
```

**Clave del documento**: `${userId}_${courseId}_${lessonId}`

## Beneficios para los Estudiantes

1. **Claridad**: Saben exactamente qué practicar en cada módulo
2. **Estructura**: Tienen una guía paso a paso de las actividades
3. **Progreso visible**: Pueden marcar tareas como completadas
4. **Flexibilidad**: Pueden agregar sus propias tareas personalizadas
5. **Persistencia**: Su progreso se guarda automáticamente

## Notas de Implementación

- ✅ Compatible con la estructura existente del curso
- ✅ No afecta a estudiantes que ya tienen tareas guardadas
- ✅ Las tareas se cargan solo cuando el estudiante accede a la pestaña
- ✅ Sistema de guardado automático en Firestore
- ✅ Interfaz de usuario existente (checkboxes, eliminar, agregar)

## Próximos Pasos Sugeridos

Si deseas expandir esta funcionalidad:

1. **Módulo 5**: Agregar `practiceTasks` al Módulo 5 cuando esté listo
2. **Indicadores visuales**: Mostrar el progreso del checklist en el sidebar
3. **Reportes**: Dashboard de progreso de práctica para instructores
4. **Recordatorios**: Notificaciones para tareas pendientes
