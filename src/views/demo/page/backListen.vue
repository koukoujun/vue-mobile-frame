<template>
  <div class="BackListen">
    <h2>监听返回</h2>
    <Back-listen/>
  </div>
</template>
<script lang='ts' >
import { Component, Vue } from "vue-property-decorator";
import { Dialog } from "vant";
const ComponentBackListen = ()=>import("../component/BackListen/index.vue");
@Component({
  components: {
    "Back-listen": ComponentBackListen
  }
})
export default class BackListen extends Vue {
  
}
</script>
<style lang="scss" scoped>
.BackListen {
  padding-top: 20px;
}
</style>