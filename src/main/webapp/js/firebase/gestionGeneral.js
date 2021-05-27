function identificacionUsuario() {
    var tokenUsuario = obtenerToken();
    var usuarioActual = String(tokenUsuario);
    return usuarioActual;
}

function buscarVaca(codigo) {
    var datosVaca;
    for (n = 0; n < vacas.length; n++) {
        var codigoRequerido = (vacas[n].codigo === codigo);

        if (codigoRequerido) { datosVaca = vacas[n];  }
    }
    return datosVaca;
}

function buscarNombre(codigo) {
    var vacaRequerida = buscarVaca(codigo);
    var nombreVaca = vacaRequerida.nombre;
    return nombreVaca;
}


function buscarMadre(codigoMadre) {
    var nombreMadre = "-";
    if (codigoMadre !== "-") {
        var datosMadre = buscarVaca(codigoMadre);
        var nombreMadre = datosMadre.nombre;
    }
    return nombreMadre;
}

function agregarJSON(codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre) {
    for (n = 0; n < arguments.length; n++) {
        var valorInvalido = (!arguments[n]);
        var valoresNumericosVacios = (listaDias === "-" && listaDias === "-" && promedioLeche === "-");
        
        if (valorInvalido) {
            arguments[n] = "-";

            if (valoresNumericosVacios) {
                listaDias = 0;
                listaLeche = 0;
                promedioLeche = 0;
            }
        }
    }

    vacas.push({
        codigo: codigo,
        nombre: nombre,
        edad: edad,
        listaDias: listaDias,
        listaLeche: listaLeche,
        promedioLeche: promedioLeche,
        corral: corral,
        codigoMadre: codigoMadre
    });
}

function editarJSON(listaDatos) {
    var codigo = buscarVaca(listaDatos[0]);
    delete vacas[codigo];
    
    vacas.push({
        codigo: listaDatos[0],
        nombre: listaDatos[1],
        edad: listaDatos[2],
        listaDias: listaDatos[3],
        listaLeche: listaDatos[4],
        promedioLeche: listaDatos[5],
        corral: listaDatos[6],
        codigoMadre: listaDatos[7]
    });
}

function adjuntarDatos(codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre) {
    var contenidoHTML = crearTabla(codigo, nombre, edad, promedioLeche, corral);
    agregarJSON(codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre);
    añadirElementosLista(codigo, nombre);

    return contenidoHTML;
}

function mostrarError(error) {
    alert("Ha ocurrido un error inesperado");
    console.error(error);
}
