import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBd69UI9bAna_NVO9LnQUvg8ibOy93Yv28",
  authDomain: "fir-class1-424c0.firebaseapp.com",
  projectId: "fir-class1-424c0",
  storageBucket: "fir-class1-424c0.appspot.com",
  messagingSenderId: "643394619425",
  appId: "1:643394619425:web:8638ad5808bd39405bfb60",
  measurementId: "G-QE5RQX7YKW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getBtn = document.querySelector("#btn");
getBtn.addEventListener('click',() => {
  let userAuth = () => {
    let getEmail = document.querySelector("#semail").value;
    let getPass = document.querySelector("#spass").value;

    createUserWithEmailAndPassword(auth, getEmail, getPass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };
  userAuth()
});