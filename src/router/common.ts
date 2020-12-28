export default [
	//404
	{
	  path: "*",
	  name: "Err404Page",
	  meta: { title: "404", keepAlive: false, auth: false },
	  component: () => import("@/environment/404.vue")
  },
  //500
	{
	  path: "/500",
	  name: "Err500Page",
	  meta: { title: "500", keepAlive: false, auth: false },
	  component: () => import("@/environment/500.vue")
	}
];
