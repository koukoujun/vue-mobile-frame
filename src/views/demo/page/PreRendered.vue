<template>
    <div class="preRendered" >

    </div>
</template>
<script lang='ts' >
import { Component, Vue } from "vue-property-decorator";
@Component({

})
export default class PreRendered extends Vue {
  /* data */
  count:any = 0
  /* methods */
  increment(){
    this.count++
  }
}
</script>
<style lang="scss" scoped>
.preRendered{
  padding-top :20px
}
</style>