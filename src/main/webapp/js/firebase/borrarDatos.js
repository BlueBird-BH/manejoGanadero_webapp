function eliminarDatos() {
    enviarDatosEliminar(codigoSeleccionadoLista);
    eliminarTabla(codigoSeleccionadoLista);
    cerrarVentana("ventanaEliminar");
}

function obtenerCodigoEliminar(codigo) {
    var datosVaca = {
        usuario: identificacionUsuario(),
        codigo: codigo
    };
    return datosVaca;
}

function enviarDatosEliminar(codigo) {
    var url = "ServletEliminarDatos";
    var datosVaca = obtenerCodigoEliminar(codigo);
    var metodoAjax = {method: 'POST', body: JSON.stringify(datosVaca)};

    fetch(url, metodoAjax);
}
