const configuracionFirebase = {
    apiKey: "AIzaSyBXolYk8LkT3K2qiMFlBetdmXd4oqgX2Mk",
    authDomain: "manejo-de-ganado.firebaseapp.com",
    projectId: "manejo-de-ganado",
    storageBucket: "manejo-de-ganado.appspot.com",
    messagingSenderId: "978999983868",
    appId: "1:978999983868:web:30ddfcd029787628566179"
};

firebase.initializeApp(configuracionFirebase);
const autenticacion = firebase.auth();