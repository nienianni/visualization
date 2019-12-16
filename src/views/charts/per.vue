<template>
    <Card :bordered="false" dis-hover>
		<div slot="title">
			<Icon type="ios-glasses" /> 标题-可视化
		</div>
		<div>
			<ve-histogram :data="chartData" :settings="chartSettings" :events="chartEvents"></ve-histogram>
		</div>
	</Card>
</template>

<script>
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
</script>