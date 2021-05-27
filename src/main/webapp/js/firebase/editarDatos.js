function obtenerDatosActualizados(listaDatos) {
    var datosVaca = {
        usuario: identificacionUsuario(),
        codigo: listaDatos[0],
        nombre: listaDatos[1],
        edad: listaDatos[2],
        listaDias: listaDatos[3],
        listaLeche: listaDatos[4],
        promedioLeche: listaDatos[5],
        corral: listaDatos[6],
        codigoMadre: listaDatos[7]
    };
    return datosVaca;
}

function enviarDatosEditados(codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre) {
    var url = "ServletEditarDatos";
    var listaDatos = [codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre];
    var datosVaca = obtenerDatosActualizados(listaDatos);
    var metodoAjax = {method: 'POST', body: JSON.stringify(datosVaca)};

    fetch(url, metodoAjax)
            .then(response => response.text());
}