import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;

// Add a request interceptor
axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Do something before request is sent
  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error("unauthorised");
        break;

      case 404:
        console.error("/not-found");
        break;

      case 500:
        console.error("/server-error");
        break;
    }
    return Promise.reject(error);
  }
);

export default axios;
