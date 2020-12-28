import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible";

// vant-ui
import { Toast, Button, Cell, Form, Field, Dialog } from "vant";
Vue.use(Toast)
  .use(Button)
  .use(Cell)
  .use(Form)
  .use(Field)
  .use(Dialog);

// axios
import Request from "@/server/http";
import api from "@/server/api";
Vue.prototype.$Request = Request;
Vue.prototype.$api = api;

//util 全局组件
import utils from "@/util/util";
Vue.use(utils);

//路由钩子
router.beforeEach((to, from, next) => {
  // 对组件进行动态缓存
  if (to.meta.keepAlive === true) {
    store.commit("iskeepAlive", to.name);
    next();
  } else if (from.meta.keepAlive === true && to.meta.clearAlive == true) {
    store.commit("noKeepAlive", from.name);
    next();
  }

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  /* 匹配路由权限 */
  const userInfo = sessionStorage.getItem("userInfo") || null; //获取登录信息
  if (!userInfo && to.meta.auth) {
    next("/login");
  } else {
    next();
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");
