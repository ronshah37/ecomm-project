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
            alert(error.message);
            // console.log('Sign-out error', error);
            // An error happened.
        });
    window.location = "index.html";
});
