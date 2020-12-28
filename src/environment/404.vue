<template>
  <div class="errPage" >
     <div class="content" >
       <img src="@/assets/img/base/404.png" alt="">
       <van-button plain hairline type="info" size="small" @click="back" >返回首页</van-button>
     </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Err404Page extends Vue {
  /* data */
  msg:any = "404"
  /* methods */
  back(){
    this.$router.push({path:'/'})
  }
}
</script>
<style lang="scss" scoped>
.errPage{
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.errPage .content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: 50%;
    margin-bottom: 50px;
  }
}
</style>
