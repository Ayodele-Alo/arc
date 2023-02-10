/* eslint-disable @typescript-eslint/no-explicit-any */
import Request from "@/utils/Request";
import APHRC_Client from "@/plugins/Axios"; 
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
  };
  async connectToRedCap(): Promise<any> {
    const url = "https://redcap.aphrc.org/redcap/api/"
    try {
      const response = await APHRC_Client.get(url, {header: {
token: 'CB1D192F338C0928579B199A38D28A24'
      }});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
}

export default new AuthService();

