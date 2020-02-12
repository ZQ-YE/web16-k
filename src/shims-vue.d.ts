import Vue from "vue"
import { AxiosInstance } from "axios"

import VueRouter from "vue-router"
import { Store } from "vuex"


// 申明后缀 .vue 文件处理 ts初始化文件内容
declare module '*.vue' {
  // import Vue from 'vue'
  export default Vue
}

// 模块扩展 vue
declare module "vue/types/vue" {
  interface Vue {
     $axios: AxiosInstance;
  }
}

// 扩展ComponentOptions
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    Store?: Store<any>;
  }
}
