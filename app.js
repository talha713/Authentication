import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCeKjVz8nqLhqXNsbahHFRNTt--017uVmc",
  authDomain: "fir-class1-39732.firebaseapp.com",
  projectId: "fir-class1-39732",
  storageBucket: "fir-class1-39732.appspot.com",
  messagingSenderId: "339897450240",
  appId: "1:339897450240:web:5130407c1f487deb16bde5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getBtn = document.querySelector("#btn");

if(getBtn) {
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
}


let getLBtn = document.querySelector("#lbtn")
if (getLBtn){
getLBtn.addEventListener('click',() => {

let email = document.querySelector("#lemail").value
let password = document.querySelector("#lpass").value

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    location.href = "signin.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });

  
})
}

// const provider = new GoogleAuthProvider();

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//     // console.log(result);
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     // console.log(error);
//   });