function agregarDatos() {
    enviarDatosAgregados();
    cerrarVentana("ventanaAgregar");
}

function enviarDatosAgregados() {
    var url = "ServletAgregarDatos";
    var datosVaca = obtenerDatosAgregados();
    var metodoAjax = {method: 'POST', body: JSON.stringify(datosVaca)};

    fetch(url, metodoAjax)
            .then(response => response.text())
            .then(response => mostrarDatosAgregados(response));
}

function obtenerDatosAgregados() {
    var nombre = document.getElementById("agregarNombre");
    var edad = document.getElementById("agregarEdad");
    var corral = document.getElementById("agregarCorral");
    var codigoMadre = document.getElementById("agregarCodigoMadre");

    var datosVaca = {
        usuario: identificacionUsuario(),
        nombre: nombre.value,
        edad: edad.value,
        listaDias: "0",
        listaLeche: "0",
        promedioLeche: "0",
        corral: corral.value,
        codigoMadre: codigoMadre.value
    };
    return datosVaca;
}

function mostrarDatosAgregados(codigo) {
    var tabla = document.getElementById("datosTabla");
    var datosVaca = obtenerDatosAgregados();

    try {
        contenidoHTML = adjuntarDatos(
                codigo,
                datosVaca.nombre,
                datosVaca.edad,
                datosVaca.listaDias,
                datosVaca.listaLeche,
                datosVaca.promedioLeche,
                datosVaca.corral,
                datosVaca.codigoMadre
                );
        limpiarDatosAgregados();
        tabla.innerHTML += contenidoHTML;
    } catch (error) {
        mostrarError(error);
    }
}

function limpiarDatosAgregados() {
    var nombre = document.getElementById("agregarNombre");
    var edad = document.getElementById("agregarEdad");
    var corral = document.getElementById("agregarCorral");
    var codigoMadre = document.getElementById("agregarCodigoMadre");

    nombre.value = "";
    edad.value = "";
    corral.value = "";
    codigoMadre.value = "";
}
