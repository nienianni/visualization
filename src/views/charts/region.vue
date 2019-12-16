<template>
	<Card :bordered="false" dis-hover>
		<div slot="title">
			<Icon type="ios-glasses" /> 标题-可视化
		</div>
		<div>
			<ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
		</div>
	</Card>
</template>

<script>
import VePie from "v-charts/lib/pie.common";
import jsonData from "./region.json";
export default {
	components: { VePie },
	data() {
		return {
			chartSettings: {
				label: {
					formatter: "{b}: {c}"
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