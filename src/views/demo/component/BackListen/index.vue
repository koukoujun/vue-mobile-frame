<template>
  <div>
    <!-- 在未使用keepalive的页面使用 -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Dialog } from "vant";

@Component({
  components: {},
})
export default class Home extends Vue {
  //
  back = true;
  //监听物理返回键\
  backListen() {
    // doing
    Dialog.confirm({
      title: "监听返回",
      message: "确定离开吗",
    })
      .then(() => {
        this.$router.go(-2);
      })
      .catch(() => {
        console.log("cancel");
      });
    (function () {
      window.history.pushState({ title: "title", url: "#" }, "title", "#");
    })();
    this.back = false;
  }
  backNotice() {
    if (this.back == false) {
      return false;
    }
    console.log(this.$route.meta);
    (function () {
      window.history.pushState({ title: "title", url: "#" }, "title", "#");
    })();
    window.addEventListener("popstate", this.backListen, false);
  }
  /* created */
  created() {
    this.backNotice();
    console.log("created");
  }
  /* destoryed */
  destroyed() {
    console.log("destoryed");
    window.removeEventListener("popstate", this.backListen, false);
  }
}
</script>
