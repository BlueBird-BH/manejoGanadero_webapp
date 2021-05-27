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
    var nombreVaca = "-";
    var vacaRequerida = buscarVaca(codigo);

    if (vacaRequerida) { nombreVaca = vacaRequerida.nombre; }
    return nombreVaca;
}

function agregarJSON(codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre) {
    var nombreMadre = buscarNombre(codigoMadre);

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
        codigoMadre: codigoMadre,
        nombreMadre: nombreMadre
    });
}

function adjuntarDatos(codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre) {
    var contenidoHTML = crearTabla(codigo, nombre, edad, promedioLeche, corral);
    agregarJSON(codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre);
    añadirElementosLista(codigo, nombre);

    return contenidoHTML;
}