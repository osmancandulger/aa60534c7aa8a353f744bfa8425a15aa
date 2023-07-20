import Vue from "vue";
import axios from "axios";
import mainApp from "@/helpers/mainApp";

const axiosInstance = axios.create({
  baseURL: "",
});
mainApp.$HttpService = axiosInstance;

Vue.prototype.$HttpService = axiosInstance;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
mainApp.$HttpService.interceptors.request.use((config: any) => {
  if (config.url.includes("[products]")) {
    config.headers["X-Access-Token"] = "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";
  }
  return config;
});
export default axios;
