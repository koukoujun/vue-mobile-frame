export default [
  //主页
  {
    path: "/",
    name: "Home",
    meta: { title: "主页", keepAlive: false, auth: false },
    component: () => import("@/views/demo/Home.vue")
  },
  //登录
  {
    path: "/login",
    name: "Login",
    mata: { title: "登录", keepAlive: false, auth: false },
    component: () => import("@/views/demo/Login.vue")
  },
  //列表页面
  {
    path: "/option",
    name: "Option",
    meta: { title: "项目列表", keepAlive: false, auth: true, clearAlive: true },
    component: () => import("@/views/demo/Option.vue")
  },
  //单元测试-自增
  {
    path: "/unit/add",
    name: "UnitAdd",
    meta: { title: "单元测试-自增", keepAlive: false, auth: true },
    component: () => import("@/views/demo/page/UnitTest.vue")
  },
  //keepalive测试-a
  {
    path: "/demo/keeplive/a",
    name: "Keepalivea",
    meta: { title: "keepalive测试a", keepAlive: true, auth: true },
    component: () => import("@/views/demo/keepAlive/a.vue")
  },
  //keepalive测试-b
  {
    path: "/demo/keeplive/b",
    name: "Keepaliveb",
    meta: { title: "keepalive测试b", keepAlive: false, auth: true },
    component: () => import("@/views/demo/keepAlive/b.vue")
  },
  //keepalive测试-c
  {
    path: "/demo/keeplive/c",
    name: "Keepalivec",
    meta: { title: "keepalive测试c", keepAlive: false, auth: true },
    component: () => import("@/views/demo/keepAlive/c.vue")
  },
  //监听返回
  {
    path: "/demo/backListen",
    name: "BackListen",
    meta: { title: "返回监听", keepAlive: false, auth: true },
    component: () => import("@/views/demo/page/backListen.vue")
  },
	//预渲染
	{
	  path: "/demo/preRendered",
	  name: "PreRendered",
	  meta: { title: "预渲染", keepAlive: false, auth: true },
	  component: () => import("@/views/demo/page/PreRendered.vue")
	}
];
