/* eslint-disable @typescript-eslint/no-explicit-any */
import APHRC_Client from "@/plugins/Axios";
import { AxiosResponse } from "axios";

const Request = async (
  url: string,
  method = "GET",
  data?: FormData | object,
  contentType = "application/json",
): Promise<AxiosResponse> => {
  try {
    const response = await APHRC_Client({
      method,
      url,
      data,
      headers: {
        "Content-Type": contentType,
      },
    });
    return response;
  } catch (err: any) {
      console.error("Error:", err.message);
      throw err.message;
  }
};

export default Request;
