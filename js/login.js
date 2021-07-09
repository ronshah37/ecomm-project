import "./firebase-authentication.js";

document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const login = document.getElementById("login");

  // Authenticate user and log in
  login.addEventListener("click", function () {
    if (email.value && password.value) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(function (data) {
          const user = firebase.auth().currentUser;
        })
        .catch(function (error) {
          alert(error.message);
          console.error(error.message);
        });
    }
  });

  // Check if user is logged in and route to homepage

  firebase.auth().onAuthStateChanged(function (user) {
    console.log("Firebase current user", firebase.auth().currentUser);
    if (user) {
      window.location = "index.html";
    }
  });
});
