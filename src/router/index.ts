import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Demo from './demo'
import Common from './common'

Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  base : process.env.BASE_URL,
  routes : [
    ...Demo,
    ...Common
  ]
})

// 处理vue-router.esm.js?8c4f:2089 Uncaught (in promise) 的发生
const originalPush:any = VueRouter.prototype.push
VueRouter.prototype.push = function push(location:any) {
 return originalPush.call(this, location).catch((err:any) => err)
}

export default router;
