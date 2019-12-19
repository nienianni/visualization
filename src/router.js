import Layout from "@/views/layout.vue";
import person from "./views/charts/one/person";
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
				path: "/charts/one/person",
				name: "charts-person",
				meta: { title: "person"},
				component:person,
			},
			{
				path: "/charts/two/per",
				name: "charts-per",
				meta: { title: "人员报表" },
				component: () => import("@/views/charts/two/per.vue")
			},
			{
				path: "/charts/three/class",
				name: "charts-class",
				meta: { title: "人员报表" },
				component: () => import("@/views/charts/three/class.vue")
			},
			{
				path: "/charts/region",
				name: "charts-region",
				meta: { title: "区域报表" },
				component: () => import("@/views/charts/region.vue")
			},

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
