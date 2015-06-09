$.get('data/page1/1-3.csv', function(csv) {
	$('#container1-3').highcharts({
		chart:{
			backgroundColor:'#f5f5f5'
		},
		plotOptions:{
			column:{	/*棒グラフのプロットオプションを指定*/
				dataLabels:{
					enabled:true,
					color:'black',
					style:{
						fontSize:'8px'
					}
				}
			},
			line:{	/*折れ線グラフのプロットオプションを指定*/
				dataLabels:{
					enabled:true,
					color:'black',
					style:{
						fontSize:'8px'
					}
				}
			}
		},
		data:{
			csv:csv
		},
		title:{
			text:'グラフ1−3'
		},
		yAxis:[{	/*y1軸を指定*/
			title:{
				text : '人数(人)'
			}
		},{		/*y2軸を指定*/
			title:{
				text : '比率(%)'
			},
			min : 0,	/*y2軸の最小値を指定*/
			opposite : true		/*y軸が複数であることを指定。*/
		}],
		series : [{		/*どちらの軸かを指定*/
			name : 'A',		/*dataのcategoriesにある要素名を指定*/
			type : 'column',	/*Aのグラフタイプを指定*/
			yAxis : 0,	/*y1軸であることを指定*/
			},{
			name : 'B',
			type : 'column',
			yAxis : 0,
			},{
			name : 'C',
			type : 'line',
			yAxis : 1,	/*y2軸であることを指定*/
		}],
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