<template>
  <div id="app">
    <!-- keepAlive动态缓存 -->
    <keep-alive :include="cached" max='5' >
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Component, Vue ,Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  cached = this.$store.state.catchArr
  @Watch('$route')
  getRoute(val:any){
    this.cached = this.$store.state.catchArr;
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
}
</style>
