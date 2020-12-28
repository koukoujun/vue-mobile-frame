<template>
    <div class="Unit" >
      {{ count }}
      <van-button type="primary" size="small" @click="increment">自增</van-button>
    </div>
</template>
<script lang='ts' >
import { Component, Vue } from "vue-property-decorator";
@Component({

})
export default class Unit extends Vue {
  /* data */
  count:any = 0
  /* methods */
  increment(){
    this.count++
  }
}
</script>
<style lang="scss" scoped>
.Unit{
  padding-top :20px
}
</style>