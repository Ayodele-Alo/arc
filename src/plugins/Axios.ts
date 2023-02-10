import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  exclude: {
    methods: ['put', 'patch', 'delete']
  }
})

const APHRC_Client = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 15_000,
  adapter: cache.adapter,
});

export default APHRC_Client;