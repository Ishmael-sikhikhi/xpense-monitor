var ctx = document.getElementById("myChart").getContext('2d');

var localData  = JSON.parse(localStorage.getItem("expenseMonitor"))

var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["January","February","March","April","May","June"],
		datasets: [{
			label: 'Covid-realated expenses',
			backgroundColor: "crimson",
			data: [0, 1500, 1000, 2000, 2500,localData.covid],
		}, {
			label: 'Normal expenses',
			backgroundColor: "rgb(236, 240, 14)",
			data: [0, 8000, 8200, 7700, 7500,localData.normal],
		}, {
			label: 'Savings',
			backgroundColor: "rgba(45, 190, 16, 0.678)",
			data: [0, 500, 900, 300, 0,localData.savings],
		}],
	},
options: {
    tooltips: {
      displayColors: true,
      callbacks:{
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
		responsive: true,
		maintainAspectRatio: false,
		legend: { position: 'bottom' },
	}
});