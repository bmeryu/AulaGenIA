// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCM8UaLuo5DOedu67ApLtxaBbChmym8FNU",
  authDomain: "aulagenia.firebaseapp.com",
  projectId: "aulagenia",
  storageBucket: "aulagenia.appspot.com",
  messagingSenderId: "173328075630",
  appId: "1:173328075630:web:825606db4271ea1e66cf7f",
  measurementId: "G-X500LE6Z8X"
};

firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("google-signin-btn");
  const logoutBtn = document.getElementById("logoutBtn");
  const userInfoDiv = document.getElementById("userInfo");
  const userNameP = document.getElementById("userName");

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  // Iniciar sesión
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          userNameP.textContent = `Hola, ${user.displayName}`;
          userInfoDiv.style.display = "block";
          loginBtn.style.display = "none";
        })
        .catch((error) => {
          console.error("Error en el login:", error);
          alert("Error al iniciar sesión con Google.");
        });
    });
  }

  // Cerrar sesión
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.signOut()
        .then(() => {
          userInfoDiv.style.display = "none";
          loginBtn.style.display = "block";
        })
        .catch((error) => {
          console.error("Error al cerrar sesión:", error);
        });
    });
  }

  // Validar estado de sesión
  auth.onAuthStateChanged((user) => {
    if (user) {
      userNameP.textContent = `Hola, ${user.displayName}`;
      userInfoDiv.style.display = "block";
      loginBtn.style.display = "none";
    } else {
      userInfoDiv.style.display = "none";
      loginBtn.style.display = "block";
    }
  });
});
