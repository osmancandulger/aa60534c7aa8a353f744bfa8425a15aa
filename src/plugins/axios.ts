import Vue from "vue";
import axios from "axios";
import mainApp from "@/helpers/mainApp";

const axiosInstance = axios.create();
mainApp.$HttpService = axiosInstance;

// {
//     baseURL: "https://jsonplaceholder.typicode.com/"
//   }

Vue.prototype.$HttpService = axiosInstance;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
mainApp.$HttpService.interceptors.request.use((config: any) => {
  const apiUrl = window.location.origin;
  if (config.url.includes("[products]")) {
    config.url = config.url.replace("[products]", `${apiUrl}/api/products`);
  }
  return config;
});
export default axios;
