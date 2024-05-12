import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBd69UI9bAna_NVO9LnQUvg8ibOy93Yv28",
  authDomain: "fir-class1-424c0.firebaseapp.com",
  projectId: "fir-class1-424c0",
  storageBucket: "fir-class1-424c0.appspot.com",
  messagingSenderId: "643394619425",
  appId: "1:643394619425:web:8638ad5808bd39405bfb60",
  measurementId: "G-QE5RQX7YKW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let getBtn = document.querySelector("#btn");

if (getBtn) {
  getBtn.addEventListener('click', () => {
    let userAuth = () => {
      let getEmail = document.querySelector("#semail").value;
      let getPass = document.querySelector("#spass").value;

      createUserWithEmailAndPassword(auth, getEmail, getPass)
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
    };
    userAuth()
  });
}


let getLBtn = document.querySelector("#lbtn")
if (getLBtn) {
  getLBtn.addEventListener('click', () => {

    let email = document.querySelector("#lemail").value
    let password = document.querySelector("#lpass").value

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        location.href = "dashboard.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });


  })
}


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

let getCheckBtn = document.querySelector("#check")
if (getCheckBtn) {
  getCheckBtn.addEventListener('click', () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("User Signed In!!");
        // ...
      } else {
        // User is signed out
        // ...
        console.log("User Signed out!!");
        
      }
    });

    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     // User Signed In 
    //     console.log("User Signed In!!");
    //   } else {
    //     // User is signed out 
    //     console.log("User Signed out!!");
    //     // ... 
    //   }
    // });

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