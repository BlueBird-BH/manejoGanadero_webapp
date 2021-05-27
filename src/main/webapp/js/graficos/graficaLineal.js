var colorVerde = "#30c1a4"
var colorBlanco = "#fff"
var tipoGrafica = "line";

var dias;

var litrosLeche;

var datosGrafica = {
    labels: dias,
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