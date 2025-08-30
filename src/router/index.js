import { createRouter, createWebHistory } from "vue-router";

const routes = [
    // Admin
	// {
	// 	path: "/admin",
	// 	component: () => import("../components/Admin/Dashboard/index.vue"),
	// 	meta: { layout: "admin" },
	// },
	// Client
	{
		path: "/",
		component: () => import("../components/Client/TrangChu/index.vue"),
		meta: { layout: "client" },
	},
	// {
	// 	path: "/mua-acc",
	// 	component: () => import("../components/Client/MuaAcc/index.vue"),
	// 	meta: { layout: "client" },
	// },
	// {
	// 	path: "/chon-acc",
	// 	component: () => import("../components/Client/ChonAcc/index.vue"),
	// 	meta: { layout: "client" },
	// },
	// {
	// 	path: "/nap-tien",
	// 	component: () => import("../components/Client/NapTien/index.vue"),
	// 	meta: { layout: "client" },
	// },
	// // Mobile
	// {
	// 	path: "/service",
	// 	component: () => import("../components/Client/DichVu/index.vue"),
	// 	meta: { layout: "client" },
	// },
	// {
	// 	path: "/minigame",
	// 	component: () => import("../components/Client/MiniGame/index.vue"),
	// 	meta: { layout: "client" },
	// },
	// {
	// 	path: "/profile",
	// 	component: () => import("../components/Client/Profile/index.vue"),
	// 	meta: { layout: "client" },
	// },
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;