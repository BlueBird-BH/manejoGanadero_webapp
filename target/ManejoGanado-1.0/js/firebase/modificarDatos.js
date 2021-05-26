// Funciones universales
function abrirVentana(id) {
    modificarEstadoVentana(id, "activo");
}

function cerrarVentana(id) {
    modificarEstadoVentana(id, "oculto");
}

function modificarEstadoVentana(id, estado) {
    let ventanaSolicitada = document.getElementById(id);

    if (estado === "activo") {
        ventanaSolicitada.style.display = "block";
    } else {
        ventanaSolicitada.style.display = "none";
    }
}

function datosVaquitas(datos) {
    let tabla = document.getElementById("datosTabla");

    for (var codigo in datos) {
        if (datos.hasOwnProperty(codigo)) {
            let elementos = JSON.parse(datos[codigo]);

            tabla.innerHTML += crearTabla(codigo, elementos.nombre, elementos.edad, "x", elementos.corral);
        }
    }
}

function identificacionUsuario() {
    const tokenUsuario = obtenerToken();
    const usuarioActual = String(tokenUsuario);
    return usuarioActual;
}

// Agregar datos - Inicio
function agregarDatos() {
    obtenerDatosAgregados();
    enviarDatosAgregados();
    cerrarVentana("ventanaAgregar");
}

function obtenerDatosAgregados() {
    let usuario = identificacionUsuario();
    let nombre = document.getElementById("agregarNombre");
    let edad = document.getElementById("agregarEdad");
    let corral = document.getElementById("agregarCorral");
    let codigoMadre = document.getElementById("agregarCodigoMadre");

    datosVaca = {
        usuario: usuario,
        nombre: nombre.value,
        edad: edad.value,
        corral: corral.value,
        codigoMadre: codigoMadre.value
    };

    return datosVaca;
}

function enviarDatosAgregados() {
    let datosVaca = obtenerDatosAgregados();
    let url = "ServletAgregarDatos";
    let metodoAjax = {
        method: 'POST',
        body: JSON.stringify(datosVaca)
    };

    fetch(url, metodoAjax)
            .then(response => response.text())
            .then(response => mostrarDatosAgregados(response));
}

function mostrarDatosAgregados(codigo) {
    let tabla = document.getElementById("datosTabla");
    let datosVaca = obtenerDatosAgregados();
    let litrosLeche = "Valor no disponible";

    contenidoHTML = crearTabla(codigo, datosVaca.nombre, datosVaca.edad, litrosLeche, datosVaca.corral);
    limpiarDatosAgregados();
    tabla.innerHTML += contenidoHTML;
}

function limpiarDatosAgregados() {
    let nombre = document.getElementById("agregarNombre");
    let edad = document.getElementById("agregarEdad");
    let corral = document.getElementById("agregarCorral");
    let codigoMadre = document.getElementById("agregarCodigoMadre");

    nombre.value = "";
    edad.value = "";
    corral.value = "";
    codigoMadre.value = "";
}

function añadirElementosLista() {
    let lista = document.getElementById("lista");
    contenidoHTML = "<tr>";
    /*
     * let select_Usuarios = document.getElementById("select_Usuarios");
     select_Usuarios.innerHTML = "";
     
     for (let n = 0; n < lista_Usuarios.length; n++) {
     let opcion = document.createElement("option");
     opcion.value = lista_Usuarios[n].id;
     opcion.innerText = lista_Usuarios[n].name;
     select_Usuarios.add(opcion);
     }
     <div id="lista" class="desplegable" tabindex="1">
     <input id="423122" class="inputDesplegable" name="opcion" type="radio">
     <label for="423122" class="labelDesplegable">Juana</label>
     */
}

function presentarInforme() {
    let informe = document.getElementById("datosInforme");
}

function elementoTabla(codigo, elemento) {
    return codigo + "." + elemento;
}

function crearTabla(codigo, nombre, edad, litrosLeche, corral) {
    contenidoHTML = "<tr>";
    contenidoHTML += `  <td id="${elementoTabla(codigo, 'codigo')}" data-label="Codigo">${codigo}</td>`;
    contenidoHTML += `  <td id="${elementoTabla(codigo, 'nombre')}" data-label="Nombre">${nombre}</td>`;
    contenidoHTML += `  <td id="${elementoTabla(codigo, 'edad')}" data-label="Meses de edad">${edad}</td>`;
    contenidoHTML += `  <td id="${elementoTabla(codigo, 'litrosLeche')}" data-label="Promedio de leche">${litrosLeche}</td>`;
    contenidoHTML += `  <td id="${elementoTabla(codigo, 'corral')}" data-label="Corral">${corral}</td>`;
    contenidoHTML += `  <td data-label="Opciones"><i class="boton botonInforme fas fa-file-alt" onclick="accesoDirectoInforme()"></i>`;
    contenidoHTML += `  <i class="boton botonEditar fas fa-edit" onclick="abrirVentana('ventanaEditar')"></i>`;
    contenidoHTML += `  <i class="boton botonEliminar fas fa-trash-alt" onclick="abrirVentana('ventanaEliminar')"></i></td>`;
    contenidoHTML += "</tr>";

    return contenidoHTML;
}

// Agregar datos - Final