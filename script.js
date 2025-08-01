/*
  Archivo JavaScript para Aula Gen IA
*/

console.log("¡Bienvenido a Aula Gen IA! El sitio está listo para la acción."); XD

// Firebase Auth con Google
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById('google-signin-btn');

  if (!loginBtn) return;

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  loginBtn.addEventListener('click', () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log('Usuario autenticado:', user.displayName);
        alert(`¡Bienvenido/a ${user.displayName}!`);
        // Aquí podrías redirigir a otra página, mostrar el nombre, etc.
        // Por ejemplo: window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error('Error en el login:', error);
        alert("Ocurrió un error al iniciar sesión con Google.");
      });
  });
});
