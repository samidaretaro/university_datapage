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
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'A:{point.x}, B:{point.y}'
                }
			}
		},
		data:{csv:csv
		},
		title:{text:'グラフ2−2'
		},
		xAxis:{	/*x軸を指定*/
			title:{
				text : 'A'
			}
		},
		yAxis:{	/*y軸を指定*/
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