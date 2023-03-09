import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import Cookies from "js-cookie";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  exclude: {
    methods: ["put", "patch", "delete"],
  },
});

const APHRC_Client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 15_000,
  adapter: cache.adapter,
});

// Add a request interceptor
APHRC_Client.interceptors.request.use(
  (config) => {
    const access = Cookies.get("aphrc_user") ?? null;
    const user = access ? JSON.parse(access) : null;

    // Set authorization token
    if (access && user.token) {
      config.headers.Authorization = `Bearer ${user}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
APHRC_Client.interceptors.response.use(
  (response) => {
    // Handle response data
    return response;
  },
  (error) => {
    // Handle response error
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

export default APHRC_Client;
