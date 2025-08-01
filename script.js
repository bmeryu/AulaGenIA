// El evento 'DOMContentLoaded' se asegura de que todo el HTML se haya cargado
// antes de que intentemos manipularlo con JavaScript.
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. REFERENCIAS A ELEMENTOS DEL HTML ---
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    // Referencias a todos los elementos del formulario que necesitamos ocultar/mostrar
    const formTitle = document.querySelector('.w-full.max-w-md h2');
    const btnGoogleLogin = document.getElementById("google-signin-btn");
    const divider = document.querySelector('.my-6.flex.items-center');
    const tabContainer = document.querySelector('.mb-8.flex');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    
    // Elementos que se muestran cuando el usuario está logueado
    const userInfoDiv = document.getElementById("userInfo");
    const userNameP = document.getElementById("userName");
    const logoutBtn = document.getElementById("logoutBtn");

    // --- 2. MANEJO DE LA INTERFAZ DE USUARIO (LA PARTE CORREGIDA) ---
    const updateUI = (user) => {
        if (user) {
            // SI HAY UN USUARIO: Ocultamos las partes del formulario y mostramos la bienvenida.
            
            // Ocultamos cada parte del formulario una por una
            if(formTitle) formTitle.style.display = 'none';
            if(btnGoogleLogin) btnGoogleLogin.style.display = 'none';
            if(divider) divider.style.display = 'none';
            if(tabContainer) tabContainer.style.display = 'none';
            if(loginFormContainer) loginFormContainer.style.display = 'none';
            if(registerFormContainer) registerFormContainer.style.display = 'none';
            
            // Mostramos el div con la información del usuario
            userNameP.textContent = `¡Bienvenido, ${user.displayName}!`;
            userInfoDiv.style.display = "block";

        } else {
            // SI NO HAY USUARIO: Hacemos lo contrario, mostramos el formulario.

            // Mostramos cada parte del formulario
            if(formTitle) formTitle.style.display = 'block';
            if(btnGoogleLogin) btnGoogleLogin.style.display = 'flex'; // 'flex' porque usa clases de flexbox
            if(divider) divider.style.display = 'flex';
            if(tabContainer) tabContainer.style.display = 'flex';
            
            // La lógica de las pestañas ya se encarga de cuál formulario mostrar.
            // Por defecto, mostramos el de login al cerrar sesión.
            if(loginFormContainer) loginFormContainer.style.display = 'block';
            if(registerFormContainer) registerFormContainer.style.display = 'none';
            
            // Ocultamos el div de bienvenida
            userInfoDiv.style.display = "none";
        }
    };

    // --- 3. EVENT LISTENERS (ESCUCHADORES DE EVENTOS) ---

    // Evento para el botón "Continuar con Google"
    if (btnGoogleLogin) {
        btnGoogleLogin.addEventListener("click", () => {
            console.log("Botón de Google presionado. Intentando iniciar sesión...");
            auth.signInWithPopup(googleProvider)
                .catch((error) => {
                    console.error("Error durante el inicio de sesión con Google:", error);
                    alert("Hubo un problema al intentar iniciar sesión. Por favor, revisa la consola para más detalles.");
                });
        });
    }

    // Evento para el botón "Cerrar sesión"
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            auth.signOut();
        });
    }

    // --- 4. OBSERVADOR DE ESTADO DE AUTENTICACIÓN ---
    // Esta función se ejecuta sola cuando la página carga y cada vez que el estado de login cambia.
    auth.onAuthStateChanged((user) => {
        console.log("Cambio de estado de Auth detectado. Usuario:", user ? user.displayName : 'Ninguno');
        updateUI(user);
    });

    // --- Lógica adicional que ya tenías para las pestañas y cookies ---
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');

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
                popup: { background: '#1f2937' },
                button: { background: '#14b8a6' }
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
