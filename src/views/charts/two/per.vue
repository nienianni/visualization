<template>
    <Card :bordered="false" dis-hover>
		<div slot="title">
			<Icon type="ios-glasses" /> 可视化题目二
		</div>
		<div class="per1">
		<Row :gutter="0">
			<Col span="12">
			<div>
				<Icon type="ios-glasses" />11月各部门打卡人数
				<v-check1 style="margin-top:20px "></v-check1>
			</div>
			</col>
			<Col span="12">
			<div>
				<Icon type="ios-glasses" />工作日上下班打卡人数
				<v-check2 style="margin-top:20px "></v-check2>
			</div>
			</col>
		</Row>
		</div>

		<!--<div>
			<ve-histogram :data="chartData" :settings="chartSettings" :events="chartEvents"></ve-histogram>
		</div>-->
	</Card>
</template>

<script>
import check1 from "./check1";
import check2 from "./check2";
export default {
	name: "per",
	components: {
		'v-check1':check1,
		'v-check2':check2,
	},
}
/*
import VeHistogram from "v-charts/lib/histogram.common";

import jsonData from "./per.json";
export default {
	components: { VeHistogram },
	data() {
		return {
			chartSettings: {
				label: {
					formatter: "{b}: {c}"
				}
			},
			chartEvents: {
				click: function(e) {
					// self.name = e.name;
					console.log(e);
				}
			},
			chartData: {
				columns: ["name", "count"],
				rows: jsonData
			}
		};
	}
};
 */
</script>

