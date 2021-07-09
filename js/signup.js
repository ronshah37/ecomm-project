import "./firebase-authentication.js";

document.addEventListener("DOMContentLoaded", function () {
  // get all elements
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const register = document.getElementById("register");

  //   Load firebase db
  const db = firebase.firestore();

  // Add a new user to firebase db

  function addUser(uid, first, last) {
    db.collection("Users")
      .doc(uid)
      .set({
        firstname: first,
        lastname: last,
        user: uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function () {
        console.log("User added to database!");
        alert("User successfully registered!!");
        window.location.href = "index.html";
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // Create user event

  register.addEventListener("click", function (e) {
    e.preventDefault();
    if (email.value && password.value) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(function (data) {
          const user = firebase.auth().currentUser;

          addUser(user.uid, firstname.value, lastname.value);
        })
        .catch(function (error) {
          alert(error.message);
          console.error(error.message);
        });
    }
  });
});
