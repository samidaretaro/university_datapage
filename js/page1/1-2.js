$.get('data/page1/1-2.csv', function(csv) {
	$('#container1-2').highcharts({
		chart:{
			type:'line',	/* グラフの種類を指定します。lineは折れ線グラフです。 */
			backgroundColor: '#f5f5f5'},
		plotOptions: {
			series: {
				dataLabels: {
					enabled: true	/* ラベル表示の有無を指定します。trueでラベルありです。 */
				}
			}
		},
		data:{csv:csv},
		title:{text:'グラフ1−2'},
		yAxis:{title: {text:'比率(%)'}},
		legend:{
			borderWidth:1,
			borderRadius:1,
			backgroundColor:'#ffffff'
		},
		credits:{enabled:false}
	});
});