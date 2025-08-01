// El evento 'DOMContentLoaded' se asegura de que todo el HTML se haya cargado
// antes de que intentemos manipularlo con JavaScript.
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. REFERENCIAS A ELEMENTOS DEL HTML ---
    // Obtenemos todos los elementos con los que vamos a interactuar.
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const loginContainer = document.querySelector('.w-full.max-w-md'); // El contenedor principal del formulario
    const btnGoogleLogin = document.getElementById("google-signin-btn");
    
    // Elementos que se muestran cuando el usuario está logueado
    const userInfoDiv = document.getElementById("userInfo");
    const userNameP = document.getElementById("userName");
    const logoutBtn = document.getElementById("logoutBtn");

    // --- 2. MANEJO DE LA INTERFAZ DE USUARIO ---
    // Función para actualizar la vista dependiendo si el usuario está o no logueado.
    const updateUI = (user) => {
        if (user) {
            // Si hay un usuario:
            // 1. Ocultamos el contenedor del formulario de login/registro.
            loginContainer.style.display = 'none';
            
            // 2. Mostramos el contenedor con la información del usuario.
            userNameP.textContent = `¡Bienvenido, ${user.displayName}!`;
            userInfoDiv.style.display = "block";

        } else {
            // Si no hay usuario:
            // 1. Mostramos el contenedor del formulario.
            loginContainer.style.display = 'block';

            // 2. Ocultamos la información del usuario.
            userInfoDiv.style.display = "none";
        }
    };

    // --- 3. EVENT LISTENERS (ESCUCHADORES DE EVENTOS) ---

    // Evento para el botón "Continuar con Google"
    if (btnGoogleLogin) {
        btnGoogleLogin.addEventListener("click", () => {
            console.log("Botón de Google presionado. Intentando iniciar sesión...");
            auth.signInWithPopup(googleProvider)
                .then((result) => {
                    console.log("¡Éxito! Usuario autenticado:", result.user.displayName);
                    // No es necesario llamar a updateUI aquí, porque onAuthStateChanged se disparará solo.
                })
                .catch((error) => {
                    console.error("Error durante el inicio de sesión con Google:", error);
                    alert("Hubo un problema al intentar iniciar sesión. Por favor, revisa la consola para más detalles.");
                });
        });
    }

    // Evento para el botón "Cerrar sesión"
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            console.log("Cerrando sesión...");
            auth.signOut()
                .then(() => {
                    console.log("Sesión cerrada exitosamente.");
                    // onAuthStateChanged se encargará de actualizar la UI.
                })
                .catch((error) => {
                    console.error("Error al cerrar sesión:", error);
                });
        });
    }

    // --- 4. OBSERVADOR DE ESTADO DE AUTENTICACIÓN ---
    // Esta es la función más importante. Se ejecuta automáticamente:
    // 1. Cuando la página carga.
    // 2. Cuando un usuario inicia sesión.
    // 3. Cuando un usuario cierra sesión.
    // Se encarga de mantener la interfaz siempre actualizada.
    auth.onAuthStateChanged((user) => {
        console.log("Cambio en el estado de autenticación. Usuario:", user ? user.displayName : 'Ninguno');
        updateUI(user);
    });

    // --- Lógica adicional que ya tenías para las pestañas y cookies ---
    // Lógica para cambiar entre pestañas de Login y Registro
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');

    if (registerTab) {
        registerTab.addEventListener('click', () => {
            loginTab.classList.remove('active-tab');
            registerTab.classList.add('active-tab');
            loginFormContainer.classList.add('hidden');
            registerFormContainer.classList.remove('hidden');
        });
    }

    if (loginTab) {
        loginTab.addEventListener('click', () => {
            registerTab.classList.remove('active-tab');
            loginTab.classList.add('active-tab');
            registerFormContainer.classList.add('hidden');
            loginFormContainer.classList.remove('hidden');
        });
    }

    // Renderizar iconos de Lucide
    lucide.createIcons();

    // Inicialización de Cookie Consent
    if (window.cookieconsent) {
        window.cookieconsent.initialise({
            palette: {
                popup: { background: '#1f2937' }, // gray-800
                button: { background: '#14b8a6' }  // brand-teal
            },
            theme: 'classic',
            position: 'bottom',
            type: 'opt-in',
            content: {
                message: 'Usamos cookies para mejorar tu experiencia.',
                dismiss: 'Aceptar',
                deny: 'Rechazar',
                link: 'Más info',
                href: '/politica-cookies.html'
            }
        });
    }
});
