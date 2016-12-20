Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.animation.easing = 'easeInOutQuad';

var ctx = document.getElementById("chart");
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        title: "Lala",
        labels: ["2000", "2004", "2008", "2012", "2016"],
        datasets: [
            {
                label: "Česká republika",
                data: [33.64, 29.62, 40.3, 36.89, 34.57],
                backgroundColor: "#A970A4"
            },
            {
                label: "Liberecký kraj",
                data: [33.07, 30.83, 38.08, 38.55, 35.91],
                backgroundColor: "#C33A7D"
            }
            ],
            borderWidth: 1
    },
    options: {
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function(tooltipItems, data) {
                    return tooltipItems.yLabel + ' %';
                }
            }
        },
        title: {
            text: "Vývoj volební účasti od roku 2000",
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Volební účast (v %)'
                }
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Volební rok'
                }
            }]
        }
    }
});