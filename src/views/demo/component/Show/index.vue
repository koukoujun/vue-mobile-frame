<template>
  <div class="Show">
    <!-- head -->
    <div class="fd-homepage-head">
      <div class="box">
        <div class="row-one">
          <div>VUE</div>
        </div>
        <div class="row-two">运行速度快/部署快/性能强</div>
        <div class="row-three">· vue-cli4结构</div>
        <div class="row-three">· vue-ui视图</div>
        <div class="row-three">· webpack视图化监测</div>
        <div class="row-four">邮箱：1060827900@qq.com</div>
      </div>
    </div>
    <!-- body -->
    <div class="fd-homepage-body">
      <div class="box-one">
        <div>
          <img src="./img/01.png" />
        </div>
        <div>
          <img src="./img/02.png" />
        </div>
        <div>
          <img src="./img/03.png" />
        </div>
      </div>
      <div class="box-two">
        <div class="div-one">
          <span>超强*性能-简单四步快速开始</span>
        </div>
        <div class="flex flex-row flex-aro flex-item-center div-two">
          <div>
            <img src="./img/main_icon2.png" v-bind:class="{img_gray:imgList.a}" />
          </div>
          <div>
            <img src="./img/main_icon_tip.png" v-bind:class="{img_gray:imgList.b}" />
          </div>
          <div>
            <img src="./img/main_icon1.png" v-bind:class="{img_gray:imgList.c}" />
          </div>
          <div>
            <img src="./img/main_icon_tip.png" v-bind:class="{img_gray:imgList.d}" />
          </div>
          <div>
            <img src="./img/main_icon4.png" v-bind:class="{img_gray:imgList.e}" />
          </div>
          <div>
            <img src="./img/main_icon_tip.png" v-bind:class="{img_gray:imgList.f}" />
          </div>
          <div>
            <img src="./img/main_icon3.png" v-bind:class="{img_gray:imgList.g}" />
          </div>
        </div>
        <div class="flex flex-row flex-aro flex-item-center div-three">
          <div v-bind:class="{img_gray:textList.a}">环境搭建</div>
          <div></div>
          <div v-bind:class="{img_gray:textList.b}">安装cli</div>
          <div></div>
          <div v-bind:class="{img_gray:textList.c}">插件安装</div>
          <div></div>
          <div v-bind:class="{img_gray:textList.d}">起步运行</div>
        </div>
      </div>
    </div>
    <!-- foot -->
    <div class="fd-homepage-foot">
      <div>
        <span>
          点击“立即开始”即代表您同意
          <span @click="controller('person_message')">《vue启动授权协议》</span>
        </span>
      </div>
      <div>
        <button @click="controller('run')" v-bind:class="{img_gray:btnStatus}">{{btnText}}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({

})
export default class Show extends Vue {
  /* data */
  imgList = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false
  };
  textList = { a: false, b: false, c: false, d: false };
  btnStatus:any = false;
  btnText:string|number = "立即开始";
  /* methods */
  getData() {
    const params:object = {
      loansId: "product004",
      token:"MXZVaUpMZnVoY2JWbGxmWWZrRXZEa1JkVkV2MHJQZzAzWlVVdGN5K1pMVEcrRHE0THVlb3g2MWxLTDlqdUZNNQ==",
      caseId: "QYD20200318173516925",
      projectId: "2"
    };
    this.$Request
      .requestGet(params, this.$api.app.nodeRoute)
      .then((res:any) => {
        console.log(res);
      })
      .catch((err:any) => {
        console.log(err);
      });
  }
  controller(name:string) {
    switch (name) {
      case "run":
        this.$toast('serving...');
        break;
      default:
        break;
    }
  }
}
</script>
<style lang="scss" scoped>
/* ----------vue主页---------- */
@mixin flex-aro {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
// head
.fd-homepage-head {
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 252px;
  min-width: 100%;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background: url(./img/bg01.png) no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  background-position: center 0;
}
.fd-homepage-head .box {
  padding: 30px 0 0 20px;
  .row-one {
    font-size: 30px;
    text-align: left;
  }
  .row-two {
    padding: 5px 10px;
    background-color: #362e2b;
    width: 190px;
    color: #ffffff;
    font-size: 14px;
  }
  .row-three {
    padding: 0 10px;
    font-size: 14px;
    margin-top: 14px;
    color: #666666;
    text-align: left;
  }
  .row-four {
    padding: 5px 10px;
    font-size: 14px;
    border: 2px solid #666666;
    border-radius: 20px;
    width: 190px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    color: #666666;
  }
  .row-six {
    img {
      width: 10px;
      padding-right: 5px;
    }
  }
}
// body
.fd-homepage-body {
  position: absolute;
  top: 240px;
  left: 4%;
  right: 4%;
  width: 92%;
  height: 120px;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background: url(./img/bg02.png) no-repeat;
  background-size: 100% 240px;
  -moz-background-size: 100% 240px;
  background-position: center 0;
}
.fd-homepage-body {
  .box-one {
    height: 130px;
    padding-top: 10px;
    @include flex-aro;
    div {
      img {
        width: 62px;
      }
    }
  }
  .box-two {
    .div-one {
      margin-top: 25px;
      margin-bottom: 20px;
      padding-left: 15px;
      span {
        font-size: 15px;
        font-weight: 900;
      }
    }
    .div-two {
      margin: 0 15px;
      @include flex-aro;
    }
  }
}
.fd-homepage-body {
  .box-two {
    .div-two div:nth-child(1) img {
      width: 25px;
    }
    .div-two div:nth-child(2) img {
      width: 13px;
    }
    .div-two div:nth-child(3) img {
      width: 32px;
    }
    .div-two div:nth-child(4) img {
      width: 13px;
    }
    .div-two div:nth-child(5) img {
      width: 26px;
    }
    .div-two div:nth-child(6) img {
      width: 13px;
    }
    .div-two div:nth-child(7) img {
      width: 28px;
    }
    .div-three {
      @include flex-aro;
      margin: 0 10px;
      div {
        font-size: 13px;
        color: #33cccc;
      }
    }
  }
}
//foot
.fd-homepage-foot {
  position: absolute;
  top: 550px;
  margin-top: 10px;
}
.fd-homepage-foot div:nth-child(1) {
  padding: 0 35px;
  span {
    color: #666666;
    span {
      color: #3399ff;
    }
  }
}
.fd-homepage-foot div:nth-child(2) {
  padding: 10px 7px;
  button {
    width: 360px;
    height: 44px;
    background-color: #39c2bf;
    border-radius: 20px;
    color: #ffffff;
    font-size: 16px;
    outline-style: none;
    border: none;
  }
}
</style>
