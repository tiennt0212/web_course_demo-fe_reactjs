// Ref: https://lightrains.com/blogs/axios-intercepetors-react/

import axios from "axios";
import { API_ENDPOINT } from "./constant";

const API = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

API.interceptors.request.use(
  (config) => {
    //
    // TODO
    // Some config token
    //

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //
    // TODO
    // Handle global error
    //
    Promise.reject(error);
  }
);

export default API;
