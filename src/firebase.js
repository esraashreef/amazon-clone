
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBdzbtC2qf_knsAvQ38au1GLjM6L_UgFHE",
    authDomain: "clone-dc71c.firebaseapp.com",
    projectId: "clone-dc71c",
    storageBucket: "clone-dc71c.appspot.com",
    messagingSenderId: "1013379071869",
    appId: "1:1013379071869:web:cb9191efadfaca076a5614",
    measurementId: "G-CHGXDD2V5Q"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig);
   const db =firebaseapp.firestore();
   const auth = firebase.auth();
   export{db , auth };


