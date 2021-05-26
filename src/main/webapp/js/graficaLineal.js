var colorVerde = "#30c1a4"
var colorBlanco = "#fff"
var tipoGrafica = "line";

var dias = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6'
];

var litrosLeche = [
    12,
    23,
    33,
    47,
    55,
    61
];

var datosGrafica = {
    labels: dias,
    datasets: [{
        label: 'Litros de leche',
        data: litrosLeche,
        backgroundColor: colorVerde, // Fondo del gráfico
        borderColor: colorVerde, // Lineas que bordean el gráfico
        pointBackgroundColor: colorBlanco, // Punto del gráfico
        pointBorderColor: colorBlanco, // Circunferencia que bordean el punto del gráfico 
    }]
};

var configuracion = {
    type: tipoGrafica,
    data: datosGrafica,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
}
var graficaJavascript = new Chart(
    document.getElementById('graficaJavascript'),
    configuracion
);
