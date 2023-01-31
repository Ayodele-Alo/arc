/* eslint-disable @typescript-eslint/no-explicit-any */
import Request from "@/utils/Request";
import { DataEntry } from "@/types/DataEntry";

class AuthService {
  /**
   * CREATE DataSet
   * @param {*} data
   * @param {*} url i.e Api-Url
   * @returns response.data only if status is 'OK'
   */
  async submitData(data: DataEntry) {
    try {
      const response = await Request("POST", "posts", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthService();
// import AuthServices from "@/services/auth.service";