import { AxiosInstance } from "axios";
import ProductsRepo from "../models/Repos/products";

declare module "vue/types/vue" {
  interface Vue {
    $ProductsRepo: ProductsRepo;
    $HttpService: AxiosInstance;
  }
}
