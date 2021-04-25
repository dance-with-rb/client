import Axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import Urls from '@config/urls';

const http: AxiosInstance = Axios.create({
  baseURL: Urls.baseUrl,
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error: AxiosResponse<AxiosError>) => {
    return Promise.reject(error);
  },
);

export default http;
