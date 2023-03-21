import { Request } from "@/helpers";
import { GenericI } from "@/types";

class ProjectService {
  /**
   * @function getAllActiveProject
   * @description: This function is used to get all active projects
   * @returns {Promise<AxiosResponse>}
   */
  async getAllActiveProject() {
    try {
      const { data } = await Request("projects/?size=1000&blocked=Active");
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @function getCountryByAwardNo
   * @description: This function is used to get country by award number
   * @param {string} awardNo
   * @returns {Promise<AxiosResponse>}
   * @example: getCountryByAwardNo("APHRC/2019/001")
   */
  async getCountryByAwardNo(awardNo: string) {
    try {
      const { data } = await Request(`countries/?award_no=${awardNo}`);
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
   
}

export default new ProjectService();
