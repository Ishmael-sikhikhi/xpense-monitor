var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: ["January","February","March","April","May","June"],
		datasets: [{
			label: 'Income',
			backgroundColor: "#caf270",
			data: [1000, 500, 200, 0, 0,800],
		}, {
			label: 'Normal expenses',
			backgroundColor: "#45c490",
			data: [8000, 8000, 8800, 8000, 7500,7000],
		}, {
			label: 'Covid-realated expenses',
			backgroundColor: "#b80f0a",
			data: [1000, 1500, 1000, 2000, 2500,2200],
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