import { AxiosResponse } from "axios";

export default interface ReportsRepo {
  /**
   * @description Get Products from related endpoint
   * @returns {Promise<AxiosResponse[]>}
   */
  getProducts(): Promise<AxiosResponse>;
}
