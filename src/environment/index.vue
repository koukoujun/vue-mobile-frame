<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  /* methods */
  // 判断是ios还是android
  getIsEnvironment() {
    let u: any = navigator.userAgent,
        app: any = navigator.appVersion;
    let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isIOS) {
      //执行ios...
    }
    if (isAndroid) {
      //执行android...
    }
  }
  // 判断是否是微信环境
  getIsWxClient() {
    let ua: any = navigator.userAgent.toLowerCase();
    //微信环境
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      //do some thing
    }
    //非微信环境
    else {
      //do some thing
    }
  }
  /* created */
  created() {
   this.getIsEnvironment() 
  }
}
</script>
