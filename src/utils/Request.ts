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
    if (err.response) {
      throw err.response;
    } else if (err.request) {
      console.error("err.request:", err.request);
      throw err.request;
    } else {
      console.error("Error:", err.message);
      throw err.message;
    }
  }
};

export default Request;
