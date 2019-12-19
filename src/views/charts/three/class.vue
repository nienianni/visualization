<template>
	<Card :bordered="false" dis-hover>
		<div slot="title">
			<Icon type="ios-glasses" /> 标题-可视化
		</div>
		<div>
			<ve-ring :data="chartData"></ve-ring>
		</div>
	</Card>
</template>

<script>
import VeRing from "v-charts/lib/ring.common";
import jsonData from "./class.json";
export default {
	components: { VeRing },
	data() {
		return {
			chartData: {
				columns: ["name", "count"],
				rows: jsonData
			}
		};
	}
};
</script>