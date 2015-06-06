$.get('data/page2/2-3.csv', function(csv) {
	$('#container2-3').highcharts({
		chart:{
			polar:true,
			type:'line',
			backgroundColor:'#f5f5f5'
		},
		data:{
			csv:csv
		},
		title:{
			text:'グラフ2−3'
		},
		xAxis:{	/*x軸を指定*/
			categories:[
				'A',
				'B',
				'C',
				'D',
				'E',
				'F'
			],
			tickmarkPlacement:'on',
			lineWidth:0
		},
		yAxis: {
			gridLineInterpolation: 'polygon',
			lineWidth: 0,
			min: 0
		},
		tooltip: {
            shared: true
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