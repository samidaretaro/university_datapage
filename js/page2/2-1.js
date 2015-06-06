$.get('data/page2/2-1.csv', function(csv) {
	$('#container2-1').highcharts({
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
		title:{text:'グラフ2−1'
		},
		xAxis:{	/*x軸を指定*/
			title:{
				text : 'A'
			},
			min:0,
			max:5
		},
		yAxis:{	/*y軸を指定*/
			title:{
				text : 'B'
			},
			min:0,
			max:5
		},
		legend:{
			borderWidth:1,
			borderRadius:1,
			backgroundColor:'#ffffff'
		},
		credits:{enabled:false}
	});
});