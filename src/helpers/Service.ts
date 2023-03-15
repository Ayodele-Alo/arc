import { Request } from "@/helpers";
import { DataEntry } from "@/types";

class AuthService {
  /**
   * CREATE DataSet
   * @param {*} data
   * @param {*} url i.e Api-Url
   * @returns response.data only if status is 'OK'
   */
  async submitData(data: DataEntry) {
    try {
      const response = await Request("posts", "POST", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthService();
