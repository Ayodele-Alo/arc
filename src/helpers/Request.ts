import APHRC_Client from "@/plugins/Axios";
import { AxiosResponse } from "axios";
import { MethodType } from "@/types";

/**
 * @function: Request
 * @description: This generic function is used to make requests to the API
 * @param {string} url
 * @param {MethodType} method
 * @param {FormData | object} data
 * @param {string} contentType
 * @returns {Promise<AxiosResponse>}
 */

const Request = async (
  url: string,
  method: MethodType = "GET",
  data?: FormData | object,
  contentType?: string
): Promise<AxiosResponse> => {
  try {
    return await APHRC_Client({
      method,
      url,
      data,
      headers: {
        "Content-Type": contentType || "application/json",
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Error:", err.message);
    throw err.message;
  }
};

export default Request;
