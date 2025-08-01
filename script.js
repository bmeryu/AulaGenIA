document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById('google-signin-btn');

  if (!loginBtn) {
    console.error('No se encontró el botón con id "google-signin-btn"');
    return;
  }

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  loginBtn.addEventListener('click', () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        alert(`¡Bienvenido/a ${user.displayName}!`);
      })
      .catch((error) => {
        console.error('Error en el login:', error);
        alert("Error al iniciar sesión con Google.");
      });
  });
});
