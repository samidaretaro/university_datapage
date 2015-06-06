$.get('data/page2/2-4.csv', function(csv) {
	$('#container2-4').highcharts({
		chart:{
			type:'bubble',
			backgroundColor:'#f5f5f5'
		},
		data:{
			csv:csv
		},
		title:{
			text:'グラフ2−4'
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
		plotOptions:{
			bubble:{
				tooltip: {
					headerFormat: '<b>{series.name}</b><br>',
					pointFormat: 'A:{point.x}, B:{point.y},C:{point.z}'
				}
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