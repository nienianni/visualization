<style lang="less" scoped>
</style>
<template>
	<Card :bordered="false" dis-hover >
		<div slot="title">
			<Icon type="ios-glasses" /> 可视化题目一
		</div>
		<div class="p1">
			<Row>
				<Col span="12">

				<Card :bordered="false" dis-hover>
						<Icon type="ios-glasses" /> 人员结构图
					<ve-tree :data="chartData" :extend="chartExtend" :tooltip-formatter="tooltipFormatter" :settings="chartSettings"></ve-tree>
				</Card>

				</Col>

				<Col span="12">
					<div class="p2">
				<Row>
					<Col span="24">
					<Card :bordered="false" dis-hover>
							<Icon type="ios-glasses" />发送词云图
						<ve-wordcloud :data="sendChartData" height="200px"></ve-wordcloud>
					</Card>
					</Col>
				</Row>
				<Row>
					<Col span="24">
						<div class="p3">
					<Card :bordered="false" dis-hover>
							<Icon type="ios-glasses" />收到词云图
						<ve-wordcloud :data="recChartData" height="200px"></ve-wordcloud>
					</Card>
						</div>
					</Col>
				</Row>
					</div>
				</Col>
			</Row>
		</div>
	</Card>
</template>

<script>
import VeTree from "v-charts/lib/tree.common";
import VeWordcloud from "v-charts/lib/wordcloud";
import jsonData from "./person.json";
// 词云信息
import jsonEemail from "./person.email.json";
export default {
	components: { VeTree, VeWordcloud },
	data() {
		return {
			// tree
			chartSettings: {
				seriesMap: {
					tree1: { layout: "radial" }
				},
			},
			chartExtend: {
				tooltip: { alwaysShowContent: true }
			},
			chartData: {
				columns: ["name", "value", "type"],
				rows: [
					{
						name: "tree1",
						value: [jsonData]
					}
				]
			},

			// 词云 send
			sendChartData: {
				columns: ["name", "value"],
				rows: []
			},
			// 词云 rec
			recChartData: {
				columns: ["name", "value"],
				rows: []
			}
		};
	},
	methods: {
		tooltipFormatter(v) {
			this.createSend(v.data.type);
			this.createRec(v.data.type);
			return `${v.data.type}`;
        },
        // 发送的数据
		createSend(key) {
			this.sendChartData.rows = jsonEemail[key]["send"];
        },
        // 收到的数据
		createRec(key) {
			this.recChartData.rows = jsonEemail[key]["rec"];
		}
	},
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.p1 {
		border: #ccc 1px solid;}
	.p2 {
		border-left: #ccc 1px solid;
	}
	.p3 {
		border-top: #ccc 1px solid;
		}
</style>
