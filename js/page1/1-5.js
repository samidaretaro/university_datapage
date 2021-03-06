$.get('data/page1/1-5.csv', function(csv) {	
	$('#container1-5').highcharts({
		chart:{
			type:'pie',	/* グラフの種類を指定します。pieは円グラフです。 */
			backgroundColor: '#f5f5f5'
		},
		plotOptions:{
			pie:{
				dataLabels: {
					enabled: false
				}
			}
		},
		data:{
			csv:csv
		},
		title:{
			text:'グラフ1−5'
		},
		yAxis:{
			title: {
				text:'人数(人)'
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