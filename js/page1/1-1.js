$.get('data/page1/1-1.csv', function(csv) {	/* csvファイルからデータを取得します。ここではdataフォルダのpage1フォルダにある1-1というcsvファイルのデータを取得しています。 */
	$('#container1-1').highcharts({	/* グラフを描写する部分を指定します。ここではcontainer1-1という部分を指定しています。 */
		chart:{		/* グラフの種類等、グラフ描写を指定します。 */
			type:'column',	/* グラフの種類を指定します。columnは棒グラフです。 */
			backgroundColor: '#f5f5f5'},	/* グラフの背景色を指定します。ここでは#f5f5f5、薄灰色を指定しています。 */
		plotOptions:{	/* グラフ描写のオプションを指定します。 */
			column:{	/* 棒グラフ描写のオプションを指定します。 */
				stacking:"normal",	/* 棒グラフの種類を指定します。stacking:"normal"は積み上げ棒グラフです。 */
				dataLabels:{	/* データラベルのオプションを指定します。 */
					enabled:false,	/* ラベル表示の有無を指定します。falseでラベルなしです。 */
					color:"#ffffff",	/* データラベルの文字色を指定します。ここでは#ffffff、白色を指定しています。ただし、前段でenabled:false、ラベル表示なしと指定しているため、表示されていません。 */
					style:{		/* データラベル文字等のオプションを指定します。 */
						textShadow:'0 0 0 black',	/* データラベル文字の影を指定します。ここでは全てoとしているため、影を発生させていません。 */
						fontSize:"9px"	/* データラベル文字のサイズを指定します。 */
					}
				}
			}
		},
		data:{csv:csv},		/* csvファイルのデータをグラフ描写のデータとして使用する指定をしています。 */
		title:{text:'グラフ1−1'},	/* データタイトルを指定します。 */
		yAxis:{title: {text:'人数(人)'}},	/* y軸のタイトルを指定します。 */
		legend:{	/* 凡例の表示方法等を指定します。 */
			borderWidth:1,	/* 凡例の枠線の太さを指定します。 */
			borderRadius:1,	/* 凡例の枠線の角の丸みを指定します。 */
			backgroundColor:'#ffffff'	/* 凡例の背景色を指定します。ここでは#ffffff、白色を指定しています。 */
		},
		credits:{enabled:false}		/* グラフにHighchars.comとクレジットを表示するかを指定します。trueではグラフ右下に小さくHighchars.comと表示されます。 */
	});
});