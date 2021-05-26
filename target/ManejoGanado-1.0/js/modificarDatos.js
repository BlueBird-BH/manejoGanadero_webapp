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

// Agregar datos - Inicio
function agregarDatos() {
    obtenerDatosAgregados();
    enviarDatosAgregados();
    cerrarVentana("ventanaAgregar");
}

function obtenerDatosAgregados() {
    let nombre = document.getElementById("agregarNombre");
    let edad = document.getElementById("agregarEdad");
    let corral = document.getElementById("agregarCorral");
    let codigoMadre = document.getElementById("agregarCodigoMadre");

    datosVaca = {
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
    let id = codigo;
    let litrosLeche = "Valor no disponible";
                                        
    contenidoHTML = "<tr>";
    contenidoHTML += `  <td data-label="Codigo">${id}</td>`;
    contenidoHTML += `  <td data-label="Nombre">${datosVaca.nombre}</td>`;
    contenidoHTML += `  <td data-label="Meses de edad">${datosVaca.edad}</td>`;
    contenidoHTML += `  <td data-label="Promedio de leche">${litrosLeche}</td>`;
    contenidoHTML += `  <td data-label="Corral">${datosVaca.corral}</td>`;
    contenidoHTML += `  <td data-label="Opciones"><i class="boton botonInforme fas fa-file-alt" onclick="accesoDirectoInforme()"></i>`;
    contenidoHTML += `  <i class="boton botonEditar fas fa-edit" onclick="abrirVentana('ventanaEditar')"></i>`;
    contenidoHTML += `  <i class="boton botonEliminar fas fa-trash-alt" onclick="abrirVentana('ventanaEliminar')"></i></td>`;
    contenidoHTML += "</tr>";
    
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
// Agregar datos - Final