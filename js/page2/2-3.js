$.get('data/page2/2-3.csv', function(csv) {
	$('#container2-3').highcharts({
		chart:{
			polar:true,	/* グラフの種類を指定します。polarは極座標グラフです。。 */
			type:'line',
			backgroundColor:'#f5f5f5'
		},
		data:{
			csv:csv
		},
		title:{
			text:'グラフ2−3'
		},
		xAxis:{
			categories:[	/*極を指定します*/
				'A',
				'B',
				'C',
				'D',
				'E',
				'F'
			],
			tickmarkPlacement:'on',		/*軸線の位置を指定します*/
			lineWidth:0		/*外周の線を指定します*/
		},
		yAxis: {
			gridLineInterpolation: 'polygon',	/*y軸の線を指定します。polygonで角状、circleで円状になります。*/
			lineWidth: 0,
			min: 0
		},
		tooltip: {
            shared: true	/*マウスオーバーで全ての系列の値を表示します。。*/
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