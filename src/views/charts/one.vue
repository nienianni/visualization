<template>
	<Card :bordered="false" dis-hover>
		<div slot="title">
			<Icon type="ios-glasses" /> 标题-词云
		</div>
		<div>
			<!--<ve-wordcloud :data="chartData"></ve-wordcloud>-->
			<v-wc1></v-wc1>
		</div>
		<div>
			<v-wc2></v-wc2>
		</div>
	</Card>
</template>

<script>
	import wordclouds from "./wordcloud/wordclouds";
	import wordcloudr from "./wordcloud/wordcloudr";
	export default {
		name: "one",
		components: {
			'v-wc1':wordclouds,
			'v-wc2':wordcloudr,
		},
	}
// 引入组件
/*import VeWordcloud from "v-charts/lib/wordcloud";
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
 */

</script>
