import Layout from "@/views/layout.vue";
const appRouters = [
	{
		path: "/",
		name: "index",
		redirect: "/home"
	},
	{
		path: "/charts",
		name: "charts",
		meta: { title: "可视化" },
		component: Layout,
		children: [
			{
				path: "/home",
				meta: { title: "可视化主页" },
				name: "home",
				component: () => import("@/views/home/home.vue")
			},
            // 以下路由根据需要适当修改或者添加
            // 同时需要修改 layout.vue 
			{
				path: "one",
				meta: { title: "可视化图表 one" },
				name: "charts-one",
				component: () => import("@/views/charts/one.vue")
			},
			{
				path: "/charts/per",
				name: "charts-per",
				meta: { title: "人员报表" },
				component: () => import("@/views/charts/per.vue")
			},
			{
				path: "/charts/class",
				name: "charts-class",
				meta: { title: "类型报表" },
				component: () => import("@/views/charts/class.vue")
			},
			{
				path: "/charts/region",
				name: "charts-region",
				meta: { title: "区域报表" },
				component: () => import("@/views/charts/region.vue")
			}
		]
	},
	{
		path: "/*",
		name: "err404",
		meta: { title: "404-没发现" },
		component: () => import("@/views/error.vue")
	}
];
export default appRouters;
