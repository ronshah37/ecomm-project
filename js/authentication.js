import "./firebase-authentication.js";

document.addEventListener("DOMContentLoaded", function () {
    const auth = document.getElementById("auth");
    const noAuth = document.getElementById("no-auth");

    firebase.auth().onAuthStateChanged(function (user) {
        // console.log("Firebase current user", firebase.auth().currentUser);
        if (firebase.auth().currentUser) {
            auth.style.display = "block";
            noAuth.style.display = "none";
        } else {
            auth.style.display = "none";
            noAuth.style.display = "block";
        }
    });
});

const logoutBtn = document.querySelector("#logout");
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    firebase
        .auth()
        .signOut()
        .then(() => {
            // console.log('Sign-out successful.');
        })
        .catch((error) => {
            // console.log('Sign-out error', error);
            // An error happened.
        });
    window.location = "index.html";
});
