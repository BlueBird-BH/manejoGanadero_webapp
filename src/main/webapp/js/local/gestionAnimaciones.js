function cambiarCategoria(id) {
    const contenidoTabla = document.getElementById("contenidoTabla");
    const contenidoHistorial = document.getElementById("contenidoHistorial");
    const contenidoSalir = document.getElementById("contenidoSalir");

    let diccionario = new Map();
    diccionario.set("botonTabla", contenidoTabla);
    diccionario.set("botonHistorial", contenidoHistorial);
    diccionario.set("botonSalir", contenidoSalir);

    resaltarBoton(id, "enlacesMenu active");
    buscarContenido(id, diccionario);
}

function cambiarCategoriaHistorial(id) {
    const contenidoGrafica = document.getElementById("contenidoGrafica");
    const contenidoInforme = document.getElementById("contenidoInforme");
    
    let diccionario = new Map();
    diccionario.set("botonGrafica", contenidoGrafica);
    diccionario.set("botonInforme", contenidoInforme);

    resaltarBoton(id, "enlacesHistorial active");
    buscarContenido(id, diccionario);
}

function accesoDirectoInforme(id) {
    cambiarElementoLista(id);
    cambiarCategoriaHistorial("botonInforme");
    cambiarCategoria("botonHistorial");
}

function resaltarBoton(id, categoria) {
    const botonActual = document.getElementsByClassName(categoria)[0];
    const botonElegido = document.getElementById(id);

    botonActual.classList.remove("active");
    botonElegido.classList.add("active");
}

function buscarContenido(id, diccionario) {
    for (let [boton, contenido] of diccionario) {
        contenido.style.display = "none";
        if (id === boton) {
            if (contenido.style.display === "none") {
                mostrarContenido(contenido);
            } else {
                ocultarContenido(contenido);
            }
        }
    }
}

function mostrarContenido(contenido) {
    contenido.style.display = "block";
    contenido.scrollIntoView();
}

function ocultarContenido(contenido) {
    contenido.style.display = "none";
}

function desplazarArriba() {
    window.scrollTo(0,0);
}