$(function() {
	
	var data_chart1 = [
	    {
	        value: 300,
	        color:"#F7464A",
	        highlight: "#FF5A5E",
	        label: "Red"
	    },
	    {
	        value: 50,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "Green"
	    },
	    {
	        value: 100,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "Yellow"
	    }
	];
	var data_chart2 = [
				{
					value: 9.99,
					color:"#006C8F",
					highlight: "#9900CC",
					label: "Americas"
				},
				{
					value: 5.18,
					color: "#0099CC",
					highlight: "#9900CC",
					label: "EMEA"
				},
				{
					value: 3.33,
					color: "#D9F0F7",
					highlight: "#9900CC",
					label: "Asia Pacific"
				}
			];
			
	var data_chart3 = {
		labels : ["January","February","March"],
		datasets : [
			{
				fillColor : "#0099CC",
				strokeColor : "rgba(220,220,220,0.8)",
				highlightFill: "rgba(220,220,220,0.75)",
				highlightStroke: "rgba(220,220,220,1)",
				data: [65, 59, 80]
			},
			{
				fillColor : "#D9F0F7",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(151,187,205,1)",
				data: [27, 41, 69]
			}
		]
	};
	
			var ctx1 = $("#chart1").get(0).getContext("2d");
			var myPolar = new Chart(ctx1).PolarArea(data_chart1, {
				responsive : true,
				maintainAspectRatio: true
			});
			
			var ctx2 = $("#chart2").get(0).getContext("2d");
			var myPie = new Chart(ctx2).Pie(data_chart2, {
				responsive : true,
				maintainAspectRatio: true,
				segmentShowStroke : false,
				animationEasing : "easeOutQuad"
			});
			
			var ctx3 = $("#chart3").get(0).getContext("2d");
			var myPie = new Chart(ctx3).Bar(data_chart3, {
				responsive : true,
				maintainAspectRatio: true,
				barShowStroke : false
			});
})



