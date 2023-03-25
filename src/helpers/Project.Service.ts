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

  /**
   * @function getCountryByAwardNo
   * @description: This function is used to get country by award number
   * @param {string} awardNo
   * @returns {Promise<AxiosResponse>}
   * @example: getCountryByAwardNo("APHRC/2019/001")
   */
  async getProjectByExpiryYear(year: string) {
    try {
      const { data } = await Request(
        `projects/?end_date_year=${year}&size=1500`
      );
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @function getDonorList
   * @description: This function is used to get all donors
   * @returns {Promise<array>}
   */
  async getDonorList() {
    try {
      const { data } = await Request("donors/");
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @function getThemeList
   * @description: This function is used to get all themes
   * @returns {Promise<array>}
   */
  async getThemeList(arg?: string) {
    const query = arg ? `themes/?donor=${arg}` : "themes/";
    try {
      const { data } = await Request(query);
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @function getEndYearList
   * @description: This function is used to get all end years
   * @returns {Promise<array>}
   */
  async getEndYearList() {
    try {
      const { data } = await Request("end_years/");
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @function getStartYearList
   * @description: This function is used to get all end years
   * @returns {Promise<array>}
   */
  async getStartYearList(arg1?: string, arg2?: string) {
    const query1 = arg1 ? `?donor=${arg1}` : "";
    const query2 = arg2 === "" || arg2 === "ALL" ? "" : `&theme=${arg2}`;
    const url = `start_years/${query1}${query2}`;
    try {
      const { data } = await Request(url);
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @function getPerformanceData
   * @description: This function is used to get all themes
   * @returns {Promise<array>}
   */
  async getPerformanceData(arg1: string, arg2: string, arg3 = null) {
    if (arg2 === "ALL") {
      arg2 = "";
    }

    const query1 = arg1 ? `donor=${arg1}` : "";
    const query2 = arg2 === "" ? "" : `&theme=${arg2}`;
    const query3 =
      arg3 === null && arg2 !== "" && arg2 !== "ALL"
        ? ""
        : `&start_year=${arg3}`;
    const url = `performance/?${query1}${query2}${query3}`;

    try {
      const { data } = await Request(url);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @function getDonorAndCountryList
   * @description: This function is used to get all donors and countries
   * @returns {Promise<array>}
   */
  async getDonorAndCountryList() {
    try {
      const { data } = await Request("donor_country/?size=1000");
      return data.results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new ProjectService();
