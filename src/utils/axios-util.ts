import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

const axiosUtil = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosUtil.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosUtil.interceptors.response.use(
  (response: AxiosResponse) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosUtil;
