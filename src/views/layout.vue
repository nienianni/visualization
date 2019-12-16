<style  lang="less" scoped>
@import "./layout.less";
</style>
<template>
	<div class="layout">
		<div class="layout-header">
			<Menu mode="horizontal" :active-name="$route.name">
				<div class="layout-header-nav">
					<div class="layout-header-nav-list">
                        <!-- 以下导航，配合 router.js 修改 -->
						<MenuItem name="home" to="/">
						<Icon type="ios-paper" />
						网站首页
						</MenuItem>
						<MenuItem name="charts-one" to="/charts/one">
						<Icon type="logo-buffer" />
						可视化一
						</MenuItem>
						<MenuItem name="charts-per" to="/charts/per">
						<Icon type="md-bicycle" />人员报表</MenuItem>
						<MenuItem name="charts-class" to="/charts/class">
						<Icon type="md-battery-full" />类型报表</MenuItem>
						<MenuItem name="charts-region" to="/charts/region">
						<Icon type="md-body" />区域报表</MenuItem>
						<!-- 若要使用展开菜单 取消以下注释  注意 和上面三个选择一种 -->
						<!-- <Submenu name="setting">
							<template slot="title">
								<Icon type="md-pulse" />
								报表中心
							</template>
							<MenuItem name="charts-per" to="/charts/per">人员报表</MenuItem>
							<MenuItem name="charts-class" to="/charts/class">类型报表</MenuItem>
							<MenuItem name="charts-region" to="/charts/region">区域报表</MenuItem>
						</Submenu> -->
					</div>
				</div>
			</Menu>
		</div>
		<div class="layout-container">
			<router-view></router-view>
			<BackTop :height="100" :bottom="100">
			</BackTop>
		</div>
		<div class="layout-footer">
			<p>© Copyright 2019 by 版权</p>
		</div>
	</div>
</template>
<script>
export default {};
</script>