import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $Request: any,
    $util: any,
    $api:any
  }
}