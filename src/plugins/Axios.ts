import axios from "axios";

const aphrc_Client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 15_000,
});

export default aphrc_Client;
