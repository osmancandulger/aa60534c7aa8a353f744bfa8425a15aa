import Vue from "vue";
import App from "./App.vue";
import axios from "../src/plugins/axios";
Vue.config.productionTip = false;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
window.axios = axios;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
