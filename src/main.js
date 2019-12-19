import Vue from "vue";
import iView from "iview";
import App from "./app.vue";
import Routers from "./router.js";
import VueRouter from "vue-router";
import "iview/dist/styles/iview.css";
import echarts from 'echarts';
import VCharts from 'v-charts';
Vue.prototype.$echarts=echarts;

//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;
Vue.use(VCharts);
Vue.use(iView, {
	transfer: true
	// size: "large"
});
// fix bug
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);
// 路由配置
const RouterConfig = {
	mode: "hash", //history
	routes: Routers
};

// iview 界面库使用文档
// http://v3.iviewui.com/components/alert


// charts 可视化使用文档
// 使用文档 https://v-charts.js.org/#/


const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	iView.LoadingBar.start();
    let title = to.meta.title || "loading";
	window.document.title = title;
	next();
	iView.LoadingBar.finish();
});

router.afterEach(to => {
	iView.LoadingBar.finish();
	window.scrollTo(0, 0);
});
new Vue({
	el: "#app",
	router: router,
	render: h => h(App)
});
