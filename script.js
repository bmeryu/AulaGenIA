document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("google-signin-btn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userInfo = document.getElementById("userInfo");
  const userName = document.getElementById("userName");

  if (!loginBtn) {
    console.error('No se encontró el botón con id "google-signin-btn"');
    return;
  }

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  // Detectar si ya hay un usuario logueado
  auth.onAuthStateChanged((user) => {
    if (user) {
      userName.textContent = `¡Hola, ${user.displayName}!`;
      userInfo.style.display = "block";
      loginBtn.style.display = "none";
    } else {
      userInfo.style.display = "none";
      loginBtn.style.display = "inline-block";
    }
  });

  // Login
  loginBtn.addEventListener("click", () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        userName.textContent = `¡Hola, ${user.displayName}!`;
        userInfo.style.display = "block";
        loginBtn.style.display = "none";
      })
      .catch((error) => {
        console.error("Error en el login:", error.code, error.message);
        alert("Error al iniciar sesión con Google.");
      });
  });

  // Logout
  logoutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      userInfo.style.display = "none";
      loginBtn.style.display = "inline-block";
    });
  });
});
