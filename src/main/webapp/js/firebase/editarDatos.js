function editarDatos(codigo) {
    var vaca = buscarVaca(codigo);
    var nombre = document.getElementById("editarNombre").value;
    var corral = document.getElementById("editarCorral").value;
    var codigoMadre = document.getElementById("editarCodigoMadre").value;
    
    enviarDatosEditados(codigo, nombre, vaca.edad, vaca.listaDias, vaca.listaLeche, vaca.promedioLeche, corral, codigoMadre);
    cerrarVentana("ventanaAgregar");
}

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

function enviarDatosEditados(lista) {
    var listaDatos = lista;
    var url = "ServletEditarDatos";
    var datosVaca = obtenerDatosActualizados(listaDatos);
    var metodoAjax = {method: 'POST', body: JSON.stringify(datosVaca)};
    editarJSON(listaDatos);

    fetch(url, metodoAjax);
}