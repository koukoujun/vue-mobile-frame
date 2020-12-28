<template>
  <div>
    <h1>a页面测试跳转</h1>
    <p :class="{a_show:a_class,b_show:b_class}" >Reversed message: "{{ fullname }}"</p>
    <van-button @click="change" >set点击</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Keepalivec extends Vue {
  // data
  firstname = 'get'
  lastname = 'computed'
  a_class = true
  b_class = true
  // method
  change(){
    this.fullname =''
  }
  // computed
  get fullname () { 
    console.log('get')
    return this.firstname + this.lastname
  }
  set fullname(newValue) {
    console.log('set')
    this.firstname = 'set'
    this.lastname = 'computed'
  }
}
</script>
<style lang="scss" scoped>
.a_show{
  color: red;
}
.b_show{
  font-size: 26px;
}
</style>
