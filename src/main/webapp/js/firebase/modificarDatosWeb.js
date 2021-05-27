var codigoSeleccionadoLista;

// Funciones generales
function abrirVentana(id) {
    modificarEstadoVentana(id, "activo");
}

function cerrarVentana(id) {
    modificarEstadoVentana(id, "oculto");
}

function modificarEstadoVentana(id, estado) {
    var ventanaSolicitada = document.getElementById(id);

    if (estado === "activo") {
        ventanaSolicitada.style.display = "block";
    } else {
        ventanaSolicitada.style.display = "none";
    }
}

function mostrarError(error) {
    alert("Ha ocurrido un error inesperado");
    console.error(error);
}


function generarIdElementos(identificador, elemento) {
    return identificador + "." + elemento;
}

function extraerId(id) {
    var codigos = id.split(".");
    return codigos[1];
}

// Funciones referentes a los datos del usuario
function mostrarDatosUsuario(datos) {
    var tabla = document.getElementById("datosTabla");

    for (var codigo in datos) {
        if (datos.hasOwnProperty(codigo)) {
            var elementos = JSON.parse(datos[codigo]);

            tabla.innerHTML += adjuntarDatos(
                    codigo,
                    elementos.nombre,
                    elementos.edad,
                    elementos.listaDias,
                    elementos.listaLeche,
                    elementos.promedioLeche,
                    elementos.corral,
                    elementos.codigoMadre
                    );
        }
    }
}

// Funciones para agregar datos de produccion
function agregarDatosLeche() {
    var valorLitros = document.getElementById("inputProduccion");
    var litros = parseFloat(valorLitros.value);
    gestionarDatosLeche(codigoSeleccionadoLista, litros);
    valorLitros.value = "";
    cerrarVentana("ventanaProduccion");
}

function gestionarDatosLeche(codigo, litros) {
    var vaca = buscarVaca(codigo);
    var listaLeche = new Array(vaca.listaLeche);
    var listaDias = new Array(vaca.listaDias);
    var dia = fecha.getDate() + "-" + fecha.getMonth();
   
    var produccionNula = (listaLeche[0] === "0");
    if (produccionNula) {
        listaLeche[0] = litros;
        listaDias[0] = dia;
    } else {
        listaLeche.push(litros);
        listaDias.push(dia);
    }
    
    enviarDatosEditados(
            codigo,
            vaca.nombre,
            vaca.edad,
            listaDias.toString(),
            listaLeche.toString(),
            calcularPromedio(listaLeche).toString(),
            vaca.corral,
            vaca.codigoMadre
            );
    
    agregarJSON(
            codigo,
            vaca.nombre,
            vaca.edad,
            listaDias.toString(),
            listaLeche.toString(),
            calcularPromedio(listaLeche).toString(),
            vaca.corral,
            vaca.codigoMadre
            );
    
    agregarDatosGrafica(dia, litros);
}

function presentarGrafica(codigo) {
    mostrarNombreProduccion(codigo);
}

function mostrarNombreProduccion(codigo) {
    var produccionNombre = document.getElementById("produccionNombre");
    var nombre = buscarNombre(codigo);

    contenidoNombre = `<input type="text" name="name" class="textoVentanaAccion ingresoTexto" value="${nombre}" disabled>`;
    produccionNombre.innerHTML = contenidoNombre;
}

function calcularPromedio(litrosVaca) {
    var cantidadNumeros = litrosVaca.length;
    var suma = 0;
    for (n = 0; n < cantidadNumeros; n++) {
        suma += parseFloat(litrosVaca[n]);
    }

    var promedio = suma / cantidadNumeros;
    return promedio;
}

// Funciones para agregar datos
function añadirElementosLista(id, nombre) {
    var lista = document.getElementById("lista");
    var codigoInput = generarIdElementos("input", id);
    var codigoLabel = generarIdElementos("label", id);

    try {
        contenidoInput = `<input id="${codigoInput}" class="inputDesplegable" name="opcion" type="radio">`;
        contenidoLabel = `<label for="${codigoInput}" id="${codigoLabel}" onclick="seleccionarVaca(id)" class="labelDesplegable">${nombre}</label>`;

        lista.innerHTML += contenidoInput;
        lista.innerHTML += contenidoLabel;
    } catch (error) {
        mostrarError(error);
    }
}

function cambiarElementoLista(id) {
    var codigo = extraerId(id);
    var idElemento = generarIdElementos("input", codigo);
    var elementoLista = document.getElementById(idElemento);
    elementoLista.checked = true;
    actualizarHistorial(codigo);
}

function seleccionarVaca(id) {
    var codigo = extraerId(id);
    actualizarHistorial(codigo);
}

function actualizarHistorial(codigo) {
    codigoSeleccionadoLista = codigo;
    presentarGrafica(codigo);
    presentarInforme(codigo);
}

function presentarInforme(codigoSeleccionado) {
    var informeCodigo = document.getElementById("informeCodigo");
    var informeNombre = document.getElementById("informeNombre");
    var informeEdad = document.getElementById("informeEdad");
    var informeLeche = document.getElementById("informeLeche");
    var informeCorral = document.getElementById("informeCorral");
    var informeCodigoMadre = document.getElementById("informeCodigoMadre");
    var informeNombreMadre = document.getElementById("informeNombreMadre");

    try {
        var datosVaca = buscarVaca(codigoSeleccionado);
        informeCodigo.innerHTML = codigoSeleccionado;
        informeNombre.innerHTML = datosVaca.nombre;
        informeEdad.innerHTML = datosVaca.edad;
        informeLeche.innerHTML = datosVaca.leche;
        informeCorral.innerHTML = datosVaca.corral;
        informeCodigoMadre.innerHTML = datosVaca.codigoMadre;
        informeNombreMadre.innerHTML = datosVaca.nombreMadre;
    } catch (error) {
        mostrarError(error);
    }
}



function crearTabla(codigo, nombre, edad, promedioLeche, corral) {
    var contenidoHTML;
    try {
        contenidoHTML = "<tr>";
        contenidoHTML += `  <td id="${generarIdElementos('codigo', codigo)}" data-label="Codigo">${codigo}</td>`;
        contenidoHTML += `  <td id="${generarIdElementos('nombre', codigo)}" data-label="Nombre">${nombre}</td>`;
        contenidoHTML += `  <td id="${generarIdElementos('edad', codigo)}" data-label="Meses de edad">${edad}</td>`;
        contenidoHTML += `  <td id="${generarIdElementos('leche', codigo)}" data-label="Promedio de leche">${promedioLeche}</td>`;
        contenidoHTML += `  <td id="${generarIdElementos('corral', codigo)}" data-label="Corral">${corral}</td>`;
        contenidoHTML += `  <td data-label="Opciones"><i id="${generarIdElementos('opciones', codigo)}" class="boton botonInforme fas fa-file-alt" onclick="accesoDirectoInforme(id)"></i>`;
        contenidoHTML += `  <i class="boton botonEditar fas fa-edit" onclick="abrirVentana('ventanaEditar')"></i>`;
        contenidoHTML += `  <i class="boton botonEliminar fas fa-trash-alt" onclick="abrirVentana('ventanaEliminar')"></i></td>`;
        contenidoHTML += "</tr>";
    } catch (error) {
        mostrarError(error);
    }

    return contenidoHTML;
}

// Agregar datos - Final