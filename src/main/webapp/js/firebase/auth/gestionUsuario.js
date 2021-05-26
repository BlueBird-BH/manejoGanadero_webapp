var datosUsuario;

function cargarUsuario() {
    autenticacion.onAuthStateChanged(function (usuarioRegistrado) {
        if (usuarioRegistrado) {
            usuario = autenticacion.currentUser;
            datosUsuario = {
                correo: usuario.email,
                id: usuario.uid
            };
        } else {
            datosUsuario = 'null';
        }
    }, function (error) {
        console.log(error);
    });
}

function obtenerToken() {
    return datosUsuario.id;
}

window.addEventListener('load', cargarUsuario());