$.get('data/page2/2-1.csv', function(csv) {
	$('#container2-1').highcharts({
		chart:{
			type:'scatter',		/* グラフの種類を指定します。scatterは散布図です。 */
			backgroundColor:'#f5f5f5'
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 5,		/* 散布図のプロットの半径を指定します。 */
					states: {
						hover: {
							enabled: true
						}
					}
				},
				tooltip: {	/* マウスオーバー時の表示方法を指定します。 */
					headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'A:{point.x}, B:{point.y}'
                }
			}
		},
		data:{
			csv:csv
		},
		title:{
			text:'グラフ2−1'
		},
		xAxis:{
			title:{
				text : 'A'
			},
			min:0,	/*x軸の最小値を指定します。*/
			max:5	/*x軸の最大値を指定します。*/
		},
		yAxis:{
			title:{
				text : 'B'
			},
			min:0,	/*y軸の最小値を指定します。*/
			max:5	/*y軸の最小値を指定します。*/
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