<template>
  <div class="Login" >
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="btn-box">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({

})
export default class Login extends Vue {
  /* data */
  username:any = "";
  password:any = "";
  /* methods */
  onSubmit(values: string): void {
    console.log("submit", values);
    const userInfo: any = {
      name: this.username,
      password: this.password
    };
    sessionStorage.setItem("userInfo", userInfo);
    this.$toast("登录成功");
    setTimeout(() => {
      this.$router.push("/");
    }, 500);
  }
}
</script>
<style lang="scss" scoped>
.Login{
  padding-top: 20px;
}
.btn-box {
  margin: 16px;
}
</style>
