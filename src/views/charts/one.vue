<template>
	<Card :bordered="false" dis-hover>
		<div slot="title">
			<Icon type="ios-glasses" /> 标题-词云
		</div>
		<div>
			<ve-wordcloud :data="chartData"></ve-wordcloud>
		</div>
	</Card>
</template>

<script>
// 引入组件
import VeWordcloud from "v-charts/lib/wordcloud";
import jsonData from "./one.json"
export default {
	components: { VeWordcloud },
	data() {
		return {
			chartData: {
				columns: ["word", "count"],
				rows: jsonData
			}
		};
	}
};

</script>