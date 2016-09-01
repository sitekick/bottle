'use strict';

function buildCharts(data) {

	Chart.defaults.global.defaultFontColor = '#EEE';
	Chart.defaults.global.defaultFontFamily = 'Lato, sans-serif';
	Chart.defaults.global.defaultFontSize = 14;

	/* Investors Chart 1: Profit Margin */

	var can1 = document.getElementById('chart1');
	can1.height = 200;
	var ctx1 = can1.getContext('2d');

	var myLine = new Chart(ctx1, {
		type: 'line',
		data: data.investor.profitMargin,
		options: {
			responsive: false,
			tooltips: {
				callbacks: {
					title: function title() {
						return '';
					},
					label: function label(tooltipItem, data) {
						return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
					}
				}
			},
			legend: {
				display: false
			}
		}
	});

	/* Investors Chart 2: Annual Revenue */

	var can2 = document.getElementById('chart2');
	can2.height = 200;
	var ctx2 = can2.getContext('2d');

	var myPie = new Chart(ctx2, {
		type: 'doughnut',
		data: data.investor.annualRevenue,
		options: {
			responsive: false,
			tooltips: {
				callbacks: {
					title: function title() {
						return 'FY 2015';
					},
					label: function label(tooltipItem, data) {
						return data.labels[tooltipItem.index] + ': $' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' B';
					}
				}
			},
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxWidth: 15
				}
			}
		}
	});

	/* Investors Chart 3: PS Ratio */

	var can3 = document.getElementById('chart3');
	can3.height = 200;
	var ctx3 = can3.getContext('2d');

	var myBar = new Chart(ctx3, {
		type: 'bar',
		data: data.investor.psRatio,
		options: {
			responsive: false,
			legend: {
				display: false
			}
		}
	});
}