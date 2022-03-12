import { AxiosResponse } from "axios";
import mainApp from "@/helpers/mainApp";

export async function getProducts(): Promise<AxiosResponse> {
  return await mainApp.$HttpService.get(`[products]`);
}

// import { AxiosResponse } from "axios";

// export default function ({ app }, inject: Function) {
//   inject("ProductsRepo", {
//     /**
//      * @description Get Products from related url
//      * @returns {Promise<AxiosResponse[]>}
//      */
//     async getProducts(): Promise<AxiosResponse> {
//       try {
//         return await app.$HttpService.get(`[products]`);
//       } catch (error) {
//         console.error(error);
//       }
//     },
//   });
// }
