const formularioRegistro = document.getElementById("formularioRegistro");

formularioRegistro.addEventListener('submit', respuestaServidor => {
    respuestaServidor.preventDefault();
    const correo = document.getElementById("correo").value;
    const clave = document.getElementById("clave").value;

    autenticacion.createUserWithEmailAndPassword(correo, clave)
        .then(credencialesUsuario => {
            var usuario = credencialesUsuario.user;
            console.log(usuario);
        })
        .catch(error => {
            var mensajeError = error.message;
            alert(mensajeError);
        });
});

