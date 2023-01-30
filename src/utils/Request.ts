import aphrc_Client from "@/plugins/Axios";
import { AxiosResponse } from "axios";

type MethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

const Request = async (
  method: MethodType = "GET",
  url: string,
  contentType = "application/json",
  data?: any
): Promise<AxiosResponse> => {
  try {
    const response = await aphrc_Client({
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
