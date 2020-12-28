<template>
  <div class="home">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <span>|</span>
      <router-link to="/option">List</router-link>
    </div>
    <Show msg="Welcome to Vue Mobile Frame" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Show from "./component/Show/index.vue"; // @ is an alias to /src
@Component({
  components: {
    Show
  }
})
export default class Home extends Vue {}
</script>
<style lang='scss' scoped>
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  span{
    padding: 0 10px;
  }
}
</style>
