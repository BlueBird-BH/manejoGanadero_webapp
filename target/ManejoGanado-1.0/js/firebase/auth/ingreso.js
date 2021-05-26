const formularioRegistro = document.getElementById("formularioIngreso");

formularioRegistro.addEventListener('submit', respuestaServidor => {
    respuestaServidor.preventDefault();
    const correo = document.getElementById("correo").value;
    const clave = document.getElementById("clave").value;

    autenticacion.signInWithEmailAndPassword(correo, clave)
        .catch(error => {
            var mensajeError = error.message;
            alert(mensajeError);
        });
});

autenticacion.onAuthStateChanged(function (usuarioRegistrado) {
        if (usuarioRegistrado) {
            window.location.replace("ganado.html")
        }
    });
