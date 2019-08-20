<template>
		<div class="mui-content">
			<div class="mui-content-padded">
				
			</div>
			<div class="mui-content-padded">
				<h5>体温统计</h5>
				<div class="chart" id="lineChart"></div>
				<h5>身高统计</h5>
				<div class="chart" id="barChart"></div>
				<h5>体重统计</h5>
				<div class="chart" id="barChart2"></div>
				<h5>图像比对</h5>
				<div class="chart" id="pieChart"></div>
			</div>
		</div>
</template>

<script>
let echarts = require('echarts/lib/echarts')

export default {
	data(){
        return {
           msg:'it`s echarts'
        }
	},
	mounted(){
		this.drawLine();
  	},
    
    methods:{
		drawLine(){
		 
			var byId = function(id) {
				return document.getElementById(id);
			};
			var barChart = echarts.init(byId('barChart'));
			barChart.setOption({
					legend: {
						data: ['身高']
					},
					grid: {
						x: 35,
						x2: 10,
						y: 20,
						y2: 25
					},
					toolbox: {
						show: false,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: false,
					xAxis: [{
						type: 'category',
						data: ['9.01', '9.02', '9.03', '9.04', '9.05', '9.06', '9.07', '9.08', '9.09', '9.10', '9.11', '9.12']
					}],
					yAxis: [{
						type: 'value',
						splitArea: {
							show: true
						},
						min:50,
					
					}],
					series: [{
						name: '身高',
						type: 'bar',
						data: [113.4, 113.4, 113.5, 113.7,113.6,113.9, 113.9, 114.0, 113.9, 113.9, 114.0,114.1],
						itemStyle: {
							normal: {
								label: {
									show: false, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 8,
									}
								}
							}
						},
					},
					{
						name: '体重',
						type: 'bar',
						
					}]
				});
			
			var barChart2 = echarts.init(byId('barChart2'));
			barChart2.setOption({
					legend: {
						data: ['体重']
					},
					grid: {
						x: 35,
						x2: 10,
						y: 20,
						y2: 25
					},
					toolbox: {
						show: false,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: false,
					xAxis: [{
						type: 'category',
						data: ['9.01', '9.02', '9.03', '9.04', '9.05', '9.06', '9.07', '9.08', '9.09', '9.10', '9.11', '9.12']
					}],
					yAxis: [{
						type: 'value',
						splitArea: {
							show: true
						},
		
				
					}],
					series: [{
						name: '体重',
						type: 'bar',
						data: [25.5,26.1,26.4,26.7,27.0,26.5,26.8,27.3,27.8,28.0,27.5,28.1],
						itemStyle: {
							normal: {
								label: {
									show: false, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 8,
									}
								}
							}
						},
					}, 
					{
						name: '身高',
						type: 'bar',
						
					}]
				});
			
			
			var lineChart = echarts.init(byId('lineChart'));
			lineChart.setOption({
					legend: {
						data: ['体温变化']
					},
					grid: {
						x: 35,
						x2: 10,
						y: 20,
						y2: 25
					},
					toolbox: {
						show: false,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: false,
					xAxis: [{
						type: 'category',
						data: ['9.01', '9.02', '9.03', '9.04', '9.05', '9.06', '9.07', '9.08', '9.09', '9.10', '9.11', '9.12']
					}],
					yAxis: [{
						type: 'value',
						splitArea: {
							show: true
						},
						min:34,
						max:40,
					}],
					series: [{
						name: '体温变化',
						type: 'line',
						data: [36.5,36.6,37.4,36.8,35.8,36.9,35.7,35.8,36.3,36.7,36.8,37.5],
						itemStyle: {
							normal: {
								label: {
									show: true, //开启显示
									position: 'top', //在上方显示
									textStyle: { //数值样式
										color: 'black',
										fontSize: 8,
									}
								}
							}
						},
					}]
				});
			var pieChart = echarts.init(byId('pieChart'));
			pieChart.setOption({
					calculable: false,
					series: [{
						name: '图片分析',
						type: 'pie',
						radius: '65%',
						center: ['50%', '50%'],
						data: [{
							value: 335,
							name: '图像正常'
						}, {
							value: 310,
							name: '手部斑点'
						}, {
							value: 234,
							name: '舌部斑点'
						}, {
							value: 135,
							name: '异常情况'
						}, {
							value: 1548,
							name: '图像分析正常'
						}]
					}]
				});
			// byId("echarts").addEventListener('tap',function(){
			// 	var url = this.getAttribute('data-url');
			// 	plus.runtime.openURL(url);
			// },false);
			
			
		}
	} 
}  
</script>

<style lang="scss" scoped>
	.chart {
		height: 200px;
		margin: 0px;
		padding: 0px;
	}
	h5 {
		margin-top: 30px;
		font-weight: bold;
	}
	h5:first-child {
		margin-top: -8px;
	}


</style>