export default {
  install(Vue:any,options:any){
    Vue.prototype.$util = {
      method1(val:any) {
        console.log('测试util-1函数')
        return val
      },
      method2(val:any) {
        console.log('测试util-2函数')
        return val
      }
    }
  }
}
