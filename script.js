/*
  Archivo JavaScript para Aula Gen IA
  
  Aquí puedes añadir la interactividad futura del sitio web.
  Por ejemplo:
  - Validaciones de formularios.
  - Animaciones al hacer scroll.
  - Funcionalidad para un menú móvil.
*/

console.log("¡Bienvenido a Aula Gen IA! El sitio está listo para la acción."); XD

// === Firebase Auth con Google ===

// Referencias al DOM
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfo = document.getElementById('userInfo');
const userName = document.getElementById('userName');

// Firebase Auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Login
loginBtn.addEventListener('click', () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      userName.textContent = `Hola, ${user.displayName}`;
      userInfo.style.display = 'block';
      loginBtn.style.display = 'none';
    })
    .catch((error) => {
      console.error('Error de login:', error);
    });
});

// Logout
logoutBtn.addEventListener('click', () => {
  auth.signOut().then(() => {
    userInfo.style.display = 'none';
    loginBtn.style.display = 'inline-block';
  });
});
