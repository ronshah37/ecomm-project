import "./firebase-authentication.js";

document.addEventListener("DOMContentLoaded", function () {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const login = document.getElementById("login");

    login.addEventListener("click", function () {
        if (email.value && password.value) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(function (data) {
                    const user = firebase.auth().currentUser;
                })
                .catch(function (error) {
                    console.error(error);
                });
        }
    });

    firebase.auth().onAuthStateChanged(function (user) {
        console.log("Firebase current user", firebase.auth().currentUser);
        if (user) {
            window.location = "index.html";
        }
    });
});
