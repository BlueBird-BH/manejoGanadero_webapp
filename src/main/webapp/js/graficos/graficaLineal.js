var colorVerde = "#30c1a4"
var colorBlanco = "#fff"
var tipoGrafica = "line";

var listaDias;

var litrosLeche;

var datosGrafica = {
    labels: listaDias,
    datasets: [{
            label: 'Litros de leche',
            data: litrosLeche,
            backgroundColor: colorVerde, // Fondo del gráfico
            borderColor: colorVerde, // Lineas que bordean el gráfico
            pointBackgroundColor: colorBlanco, // Punto del gráfico
            pointBorderColor: colorBlanco // Circunferencia que bordean el punto del gráfico 
        }]
};

var configuracion = {
    type: tipoGrafica,
    data: datosGrafica,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
};

var graficaJavascript = new Chart(
        document.getElementById('graficaJavascript'),
        configuracion
        );

function cargarValoresPrevios(dias, litros) {
    eliminarDatosGrafica();
    for (n = 0; n < litros.lenght; n++) {
        graficaJavascript.data.labels.push(dias[n]);
        graficaJavascript.data.datasets.forEach((dataset) => {
            dataset.data.push(litros[n]);
        });
        graficaJavascript.update();
    }
}

function eliminarDatosGrafica() {
    graficaJavascript.data.labels.pop();
    graficaJavascript.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    graficaJavascript.update();
}

function agregarDatosGrafica(dias, litros) {
    graficaJavascript.data.labels.push(dias);
    graficaJavascript.data.datasets.forEach((dataset) => {
        dataset.data.push(litros);
    });
    graficaJavascript.update();
}