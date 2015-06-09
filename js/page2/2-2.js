$.get('data/page2/2-2.csv', function(csv) {
	$('#container2-2').highcharts({
		chart:{
			type:'scatter',
			backgroundColor:'#f5f5f5'
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,
					states: {
						hover: {
							enabled: true
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'A:{point.x}, B:{point.y}'
                }
			}
		},
		data:{
		csv:csv
		},
		title:{text:'グラフ2−2'
		},
		xAxis:{
			title:{
				text : 'A'
			}
		},
		yAxis:{
			title:{
				text : 'B'
			}
		},
		legend:{
			borderWidth:1,
			borderRadius:1,
			backgroundColor:'#ffffff'
		},
		credits:{
			enabled:false
		}
	});
});