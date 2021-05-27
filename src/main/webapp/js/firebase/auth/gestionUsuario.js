var datosUsuario;
var sesionActiva = false;

function cargarUsuario() {
    autenticacion.onAuthStateChanged(function (usuarioRegistrado) {
        if (usuarioRegistrado) {
            sesionActiva = true;
            
            usuario = autenticacion.currentUser;
            datosUsuario = { correo: usuario.email, id: usuario.uid };
            obtenerDatosUsuario();
        } else {
            if (!sesionActiva) {
                alert("Debes ingresar para poder continuar");
            }
            volverInicio();
            sesionActiva = false;
        }
    });
}

function obtenerToken() {
    return datosUsuario.id;
}

function obtenerDatosUsuario() {
    let usuario = { id: obtenerToken() };
    let url = "ServletObtenerDatos";
    let metodoAjax = {
        method: 'POST',
        body: JSON.stringify(usuario)
    };

    fetch(url, metodoAjax)
            .then(datos => datos.text())
            .then(datos => JSON.parse(datos))
            .then(datos => mostrarDatosUsuario(datos));
}

function cerrarSesion() {
    autenticacion.signOut()
            .then(volverInicio())
            .catch((error) => mostrarError(error));
}

function mostrarError(error) {
    let mensajeError = error.message;
    console.log(mensajeError);
}

function volverInicio() {
    window.location.replace("ingreso.html");
}

window.addEventListener('load', cargarUsuario());