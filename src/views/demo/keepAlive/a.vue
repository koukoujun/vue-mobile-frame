<template>
  <div class="Keepalivea" >
    <textarea name="" id="" cols="30" rows="10" placeholder="本页面进行keepalive缓存" ></textarea><br>
    <van-button type="primary" size="small" @click="Controller('pageb')">确认b</van-button><br>
    <br>
    <van-button type="primary" size="small" @click="Controller('pagec')">确认c</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Keepalivea extends Vue {
  /* method */
  Controller(name:any){
    switch(name){
      case 'pageb':
        this.$router.push({path:'/demo/keeplive/b'})
      break;
      case 'pagec':
        this.$router.push({path:'/demo/keeplive/c'})
      break;
      default:
      break;
    }
  }
}
</script>
<style lang="scss" scoped>
.Keepalivea{
  padding-top: 50px;
}
</style>
