import Vue from "vue";
import App from "./App.vue";
import axios from "../src/plugins/axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.axios = axios;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
