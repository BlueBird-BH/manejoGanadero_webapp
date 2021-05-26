// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBXolYk8LkT3K2qiMFlBetdmXd4oqgX2Mk",
    authDomain: "manejo-de-ganado.firebaseapp.com",
    projectId: "manejo-de-ganado",
    storageBucket: "manejo-de-ganado.appspot.com",
    messagingSenderId: "978999983868",
    appId: "1:978999983868:web:30ddfcd029787628566179"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);