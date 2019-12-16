<style lang="less" scoped>
@import "./error.less";
</style>
<template>
	<div class="error">
		<div class="content">
			<img :src="errorSrc" alt="404" />
			<div class="text">
				<h4>404</h4>
				<h5>Oh~~您的页面好像飞走了~</h5>
			</div>
			<div class="btn-group">
				<Button size="large" type="success" @click="backHome">返回首页</Button>&nbsp;&nbsp;
				<Button size="large" type="warning" @click="backPrev">返回上一页</Button>
			</div>
		</div>
	</div>
</template>
<script>
import error404 from "@/assets/404.svg";
export default {
	name: "error",
	data() {
		return {
			second: 5,
			errorSrc: error404
		};
	},
	methods: {
		backHome() {
			this.$router.replace({
				name: "home"
			});
		},
		backPrev() {
			this.$router.go(-1);
		}
	}
};
</script>
