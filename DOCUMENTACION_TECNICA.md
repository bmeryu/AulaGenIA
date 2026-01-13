# Documentación Técnica: Maestro Prompts App (AulaGenIA)
**Fecha:** 26 de Diciembre de 2025
**Estado:** Producción / Estable (v3.0 Rediseño UX)
**Repositorio:** [GitHub/AuLaGenIA]

## 1. Resumen Ejecutivo
"Maestro Prompts App" es una herramienta educativa interactiva tipo SPA (Single Page Application) diseñada para enseñar ingeniería de prompts avanzada. Permite a los usuarios comparar "Prompts Básicos" (ineficientes) con "Prompts Maestros" (optimizados), demostrando el valor tangible de la metodología AGIA mediante ejemplos del mundo real.

El proyecto destaca por su base de datos de 84+ casos prácticos, funcionalidad de encriptación de contenido premium y una interfaz de usuario altamente pulida orientada a la conversión y retención.

## 2. Stack Tecnológico
El proyecto utiliza un enfoque **"Vanilla Moderno"** para maximizar la velocidad de carga, facilitar el despliegue y eliminar dependencias de compilación complejas.

*   **Frontend Core:** HTML5 Semántico + JavaScript ES6+.
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (v3.x vía CDN para desarrollo rápido, optimizable a build).
*   **Iconografía:** Google Material Symbols Rounded.
*   **Base de Datos:** Archivo local `prompts_db.js` (Array de objetos JSON exportado como módulo ES6).
*   **Backend / Auth:** Google Firebase (Authentication & Firestore) para gestión de usuarios y protección de rutas.
*   **Cifrado:** `CryptoJS` (AES) para protección de contenido "Maestro" en el cliente.

## 3. Arquitectura del Sistema

### 3.1. Estructura de Archivos Clave
- `maestro-prompts-app.html`: **Punto de entrada principal**. Contiene toda la lógica de UI, enrutamiento virtual (vía visibilidad de componentes) y controladores de eventos.
- `prompts_db.js`: Fuente de verdad de los datos. Contiene el array `casesData` con los 84 casos. **Importante:** Este archivo debe terminar con `export default casesData;` para compatibilidad de carga.
- `rebuild_db.js` / `merge_metadata_fix.js`: Scripts de Node.js de mantenimiento. Se usan para regenerar la base de datos desde fuentes en texto plano (`100casosrefinado.txt`) o inyectar metadata perdida.
- `style.css`: Estilos personalizados mínimos que Tailwind no cubre (scrollbars, animaciones personalizadas como `smoke-effect`).

### 3.2. Modelo de Datos (`prompts_db.js`)
Cada caso (`case`) es un objeto con la siguiente estructura crítica:
```javascript
{
    id: 102,
    category: "Otros / Análisis", // Categoría de filtro principal
    title: "Reporte de Salud del Negocio",
    problem: "Descripción del dolor que resuelve...",
    badPrompt: "El prompt ineficiente...",
    badResponseAnalysis: "Explicación pedagógica de por qué falla...",
    
    // Contenido Premium (Encriptado o Texto Plano según estado)
    agiaPromptTagged: "TEXTO_ENCRIPTADO_AES...", 
    
    // Metadata Enriquecida (Recuperada en v3.0)
    suggestedAI: "ChatGPT / Gemini", // Modelo recomendado
    exampleTip: "Chain of Thought...", // Estrategia usada
    validationTip: "¿Puedes verificar X en 10s?", // Pregunta de Check
    
    metadata: { score: 94, technique: "..." } // Datos técnicos extra
}
```

## 4. Funcionalidades Clave Implementadas

### 4.1. Visualización Dual (Básico vs Maestro)
- **Modo Básico:** Muestra el error común. Renderiza alertas visuales (Rojo/Ámbar) explicando el fallo.
- **Modo Maestro:** Desbloquea el prompt optimizado.
    - **UX:** Incluye un efecto de "blur" si el usuario no tiene acceso.
    - **Social Proof:** Contador dinámico simulado ("342 usuarios están usando esto") para urgencia.

### 4.2. Seguridad & Paywall
- El contenido del prompt maestro (`agiaPromptTagged`) viaja encriptado.
- El cliente intenta desencriptar usando una clave derivada.
- Si el usuario no está autenticado o no tiene permisos (lógica simulada por ahora con `locked: true` en DB), se muestra un "Teaser" borroso y un modal de Paywall.

### 4.3. Motor de Búsqueda y Filtrado
- Búsqueda en tiempo real (`filterCases()`) sobre Título, Problema y Categoría.
- Filtrado por Categoría con carrusel de navegación horizontal (flechas de desplazamiento).
- **Highlighting:** Resaltado de términos coincidentes en los resultados.

## 5. Cambios Recientes (v3.0 UX Overhaul) - Diciembre 2025
Se realizó una reingeniería visual completa bajo estándares de diseño "Senior UX":

1.  **Integración de Metadata:**
    - *Antes:* Tarjetas tipo "Grid" separadas que generaban ruido visual y desalineación.
    - *Ahora:* **Footer Integrado**. La información de Modelo, Estrategia y Validación ahora vive dentro del contenedor del Prompt, en una barra inferior (`bg-slate-50`). Esto garantiza alineación perfecta píxel a píxel y reduce la carga cognitiva.

2.  **Estética "Glass" & Premium:**
    - Uso refinado de sombras (`shadow-sm`, `ring-1`) para dar profundidad sin "peso".
    - Eliminación de colores saturados en fondos; uso de tintes sutiles (`slate-50`, `indigo-50` solo en hover).
    - Unificación de tipografías y espaciados (tracking, leading) para lectura profesional.

3.  **Recuperación de Datos:**
    - Se ejecutó un script (`merge_metadata_fix.js`) para rescatar campos perdidos (`validationTip`, `technique`) desde el archivo `100casosrefinado.txt`. La DB ahora está 100% poblada.

## 6. Guía de Mantenimiento para Ingeniero

### A. Cómo editar la Base de Datos
**NO EDITAR `prompts_db.js` MANUALMENTE** si se busca integridad estructural.
1.  Editar fuente raw `100casosrefinado.txt` (si aplica) o crear un script de migración.
2.  Si se edita manual: Cuidar la sintaxis JSON y **siempre** mantener la línea final `export default casesData;`.

### B. Despliegue
1.  `git add .`
2.  `git commit -m "Mensaje"`
3.  `git push`
4.  El sitio se sirve estáticamente. Asegurar que el servidor web soporte tipos MIME `.js` correctos para ES Modules si se usa `<script type="module">` (actualmente se carga como script normal diferido o al final del body).

### C. Troubleshooting Común
- **Error "DATA_ERROR" / Conexión:** Verificar que `prompts_db.js` tenga `export default`.
- **Flechas del Carrusel no se ven:** Revisar z-index en `maestro-prompts-app.html` (Clases `z-40`, `z-50`).
- **Cambios no se ven:** Forzar recarga de cache (Ctrl + F5) ya que Tailwind CDN y archivos JS pueden cachearse agresivamente.

---
**Firmado:** Antigravity Agent (Google Deepmind)
**Para:** Equipo de Ingeniería AulaGenIA

## 7. Actualizaciones de Flujo de Acceso (Enero 2026)

Se realizaron correcciones críticas para estabilizar el flujo de onboarding, pago y acceso post-compra.

### 7.1. Estrategia de Dominios y Acceso
Se estableció una distinción clara para evitar problemas de autenticación y redirección:
*   **Acceso / Login / Campus:** `https://aulagenia.web.app/acceso.html` (Dominio técnico de Firebase para asegurar auth correcta).
*   **App de Herramientas (Pública/Marketing):** `https://aulagenia.cl/maestro-prompts-app.html`.

### 7.2. Correo de Bienvenida
La plantilla de correo (en `functions/index.js`) fue actualizada para unificar todo el tráfico en el dominio seguro:
*   El botón "Crear Contraseña" apunta a `aulagenia.web.app/acceso.html`.
*   Los enlaces a la "App de Prompts" también redirigen a `aulagenia.web.app/maestro-prompts-app.html` para evitar confusiones de dominio/sesión.

### 7.3. Correcciones de Infraestructura
1.  **CSP (Content Security Policy):** Se inyectó una política permisiva (`unsafe-inline`) en `firebase.json` para permitir la ejecución de scripts de terceros (Flow, Analytics) que bloqueaban el pago.
2.  **Redirección Post-Pago:** Se actualizó `createFlowPayment` para que el `urlReturn` dirija a la página de éxito en el dominio `web.app`, cerrando el ciclo de compra correctamente.
3.  **Robustez:** Se protegieron las llamadas a Analytics/Pixel en `landing-nuevo.html` con bloques `try-catch` para evitar que bloqueadores de anuncios rompan el flujo de pago.


## 8. Optimización de Landing Page & Pricing (Enero 2026 - Sprint 2)

Se implementaron mejoras críticas en la estrategia de precios y diseño de conversión en `landing-nuevo.html`.

### 8.1. Estrategia de Precios Dinámicos (Anchoring)
Se reestructuró la visualización de precios para maximizar la percepción de valor:
- **Pack Starter:** Precio ancla de `~~$29.900~~` tachado (gris, estilizado) junto al precio final de `$8.900`.
- **Order Bump (Pack Pro):** Precio ancla dinámico de `~~$45.000~~` que se activa visualmente al seleccionar el upgrade.
- **Implementación:** Lógica JS en `toggleBump()` que actualiza en tiempo real los elementos `#breakdown-ref-price` y `#breakdown-total-price`.

### 8.2. Rediseño del Order Bump
Se transformó el bloque de "Upgrade" para aumentar el AOV (Average Order Value):
- **Estética:** Se eliminó el texto rojo alarmista. Se usa ahora un **Badge "¡OFERTA ÚNICA!"** con fondo `teal-800` y borde amarillo sutil.
- **Copy:** Título actualizado a "Convierte tu Kit en PRO (Acceso Vitalicio)".
- **Lista de Valor:** Se detallan explícitamente los entregables: LinkedIn Pro, Taller Visual IA y Guía Rápida.

### 8.3. Refuerzo de Confianza (Trust Elements)
Correcciones de UX para reducir la fricción en el checkout:
1.  **Logos de Pago (Transbank/Webpay):**
    - **Problema:** Los logos desaparecían o se superponían al estar fuera del contenedor principal.
    - **Solución:** Se integró el bloque SVG de logos **DENTRO** del formulario de pago (`inline-checkout-form`). Esto garantiza que sean parte del flujo visual crítico y siempre visibles.
    - **Diseño:** Se replica el estilo de botón oficial de Transbank (Azul degradado + Webpay Amarillo).
2.  **Sello de Garantía:** Se añadió un badge de "Garantía 7 Días de Satisfacción" con icono de escudo, ubicado visiblemente bajo el precio final.

### 8.4. UX y Compacidad
- Se compactó el diseño de la tarjeta "Pack Starter" eliminando títulos redundantes ("El Acelerador") y reduciendo márgenes/padding para que la oferta sea visible "Above the Fold" en más dispositivos.

