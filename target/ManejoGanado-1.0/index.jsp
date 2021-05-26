<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="es" dir="ltr">
<!-- Head -->

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manejo de Ganado</title>

    <!-- Iconos -->
    <link href="icon/favicon.svg" rel="icon" type="icon/svg+xml" sizes="any">
    <link href="icon/fontawesome/css/all.min.css" rel="stylesheet">

    <!-- CSS -->
    <link href="css/masterCSS.css" rel="stylesheet" />
    <link href="css/datosTablas.css" rel="stylesheet" />

    <!-- Javascript -->
    <script src="js/masterJS.js" type="text/javascript"></script>
    <script src="js/prueba.js" type="text/javascript"></script>
    <script src="js/modificarDatos.js" type="text/javascript"></script>

    <!-- Javascript de Graficas -->
    <script src="https://www.gstatic.com/charts/loader.js" type="text/javascript"></script>
    <script src="js/graficasGoogle.js" type="text/javascript"></script>
</head>

<!-- Body -->

<body>
    <!-- Principal - Inicio -->
    <div class="principal">
        <!-- Columna Izquierda -->
        <div class="columna">
            <div class="columna_Categorias">
                <!-- Titulo -->
                <div class="titulo">
                    <i class="fas fa-tractor"></i>
                    <h1>Manejo de Ganado</h1>
                </div>
                <!-- Navegacion por categorias del menu -->
                <nav>
                    <ul class="lista_Menu">
                        <!-- Opcion de Tabla -->
                        <li class="categorias">
                            <a id="tablas" onclick="resaltarBoton(id)" href="#tablas" class="opcion_Categorias active">
                                <i class="iconos_Categorias fas fa-table"></i>
                                <span>Ganado registrado</span>
                            </a>
                        </li>
                        <!-- Opcion de Graficas -->
                        <li class="categorias">
                            <a id="graficas" onclick="resaltarBoton(id)" href="#graficas" class="opcion_Categorias">
                                <i class="iconos_Categorias fas fa-chart-line"></i>
                                <span>Historial de producción</span>
                            </a>
                        </li>
                        <!-- Cerrado de etiquetas -->
                    </ul>
                </nav>
            </div>
        </div>
        <div class="columna">
            <main>
                <!-- Tabla -->
                <div id="tablasOpciones" class="columna_Contenido">
                    <div>
                        <span onclick="mostrarPanel('tablaAgregarDatos')" class="boton botonAgregar">
                            Agregar datos »
                        </span>
                    </div>

                    <div>
                        <table class="tabla">
                            <thead>
                                <tr>
                                    <th>Codigo</th>
                                    <th>Nombre</th>
                                    <th>Edad (Meses)</th>
                                    <th>Produccion promedio de leche</th>
                                    <th>Corral donde se encuentra</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>

                            <tbody id="contenidoTabla"></tbody>
                        </table>
                    </div>
                </div>
                <!-- Graficas -->
                <div id="graficasOpciones" class="columna_Contenido" style="display:none;">
                    <div>
                        <div class="grupoElementos">
                            <i class="fas fa-tag"></i>
                            <h3>Seleccione un nombre</h3>
                        </div>

                        <select class="desplegable">
                            <option value="423122">Juana</option>
                            <option value="7566765">Lucia</option>
                            <option value="2108394">Lola</option>
                        </select>
                    </div>

                    <div id="graficaProduccion" class="grafica"></div>

                    <div class="grupoContenedorDatos">
                        <p class="campoTituloDatos">Codigo</p>
                        <input id="codigoEliminar" type="text" name="name" class="campoTextoDatos" value="" disabled>
                    </div>

                    <div class="grupoContenedorDatos">
                        <p class="campoTituloDatos">Produccion promedio de leche por dia</p>
                        <input id="codigoEliminar" type="text" name="name" class="campoTextoDatos" value="" disabled>
                    </div>

                    <div class="grupoContenedorDatos">
                        <p class="campoTituloDatos">Nombre de la madre</p>
                        <input id="codigoEliminar" type="text" name="name" class="campoTextoDatos" value="" disabled>
                    </div>

                    <div class="grupoContenedorDatos">
                        <p class="campoTituloDatos">Corral en el que se encuentra actualmente</p>
                        <input id="codigoEliminar" type="text" name="name" class="campoTextoDatos" value="" disabled>
                    </div>
                </div>
                <!-- Cerrado de etiquetas -->
            </main>
        </div>
        <!-- Principal - Fin -->

        <!-- Agregar datos a Tabla -->
        <div class="tablaAgregarDatos">
            <table class="panelDatos">
                <thead>
                    <tr>
                        <th>Agregar datos</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <form class="formDatos">
                                <div class="grupoContenedorDatos tablaPrimerElemento">
                                    <input id="nombreAgregar" type="text" name="name" class="campoTextoDatos"
                                        placeholder="Nombre" required>
                                </div>

                                <div class="grupoContenedorDatos">
                                    <input id="edadAgregar" type="text" name="name" class="campoTextoDatos"
                                        placeholder="Edad" required>
                                </div>

                                <div class="grupoContenedorDatos">
                                    <input id="corralAgregar" type="text" name="name" class="campoTextoDatos"
                                        placeholder="Corral" required>
                                </div>

                                <div class="grupoContenedorDatos">
                                    <input id="madreAgregar" type="text" name="name" class="campoTextoDatos"
                                        placeholder="Codigo de la madre">
                                </div>

                                <i onclick="agregarDatos()" class="boton botonGuardar fas fa-save"></i>
                                <i onclick="cerrarPanel('tablaAgregarDatos')"
                                    class="boton botonCerrar fas fa-undo-alt"></i>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Agregar datos a Tabla - Fin -->

        <!-- Editar datos de Tabla -->
        <div class="tablaEditarDatos">
            <table class="panelDatos">
                <thead>
                    <tr>
                        <th>Editar datos</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <form class="formDatos">
                                <div class="grupoContenedorDatos tablaPrimerElemento">
                                    <input id="codigoEditar" type="text" name="name" class="campoTextoDatos" disabled>
                                </div>

                                <div class="grupoContenedorDatos">
                                    <input id="nombreEditar" type="text" name="name" class="campoTextoDatos"
                                        placeholder="Nombre" required>
                                </div>

                                <div class="grupoContenedorDatos">
                                    <input id="corralEditar" type="text" name="name" class="campoTextoDatos"
                                        placeholder="Corral" required>
                                </div>

                                <div class="grupoContenedorDatos">
                                    <input id="codigoMadreEditar" type="text" name="name" class="campoTextoDatos"
                                        placeholder="Codigo de la madre" required>
                                </div>

                                <i onclick="editarDatos()" class="boton botonGuardar fas fa-save"></i>
                                <i onclick="cerrarPanel('tablaEditarDatos')"
                                    class="boton botonCerrar fas fa-undo-alt"></i>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Editar datos de Tabla - Fin -->

        <!-- Eliminar datos de Tabla -->
        <div class="tablaEliminarDatos">
            <table class="panelDatos">
                <thead>
                    <tr>
                        <th>Eliminar datos</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <form class="formDatos">
                                <p class="campoAlertaDatos">¿Estas seguro que deseas continuar?</p>

                                <div class="grupoContenedorDatos tablaPrimerElemento">
                                    <p class="campoTituloDatos">Codigo</p>
                                    <input id="codigoEliminar" type="text" name="name" class="campoTextoDatos" value=""
                                        disabled>
                                </div>

                                <div class="grupoContenedorDatos">
                                    <p class="campoTituloDatos">Nombre</p>
                                    <input id="nombreEliminar" type="text" name="name" class="campoTextoDatos" value=""
                                        disabled>
                                </div>

                                <i onclick="eliminarDatos()" class="boton botonGuardar fas fa-check-square"></i>
                                <i onclick="cerrarPanel('tablaEliminarDatos')"
                                    class="boton botonCerrar fas fa-window-close"></i>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Eliminar datos de Tabla - Fin -->
</body>

</html>