import Axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

import store from '../store';

import Urls from '@config/urls';

const http: AxiosInstance = Axios.create({
  baseURL: Urls.baseUrl,
  withCredentials: true,
});

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    store.commit('common/SET_LOADING_STATE');

    return config;
  },
  (error) => {
    store.commit('common/SET_LOADING_STATE');

    Promise.reject(error);
  },
);

http.interceptors.response.use(
  (response: AxiosResponse) => {
    store.commit('common/SET_LOADING_STATE');

    return response;
  },
  (error: AxiosResponse<AxiosError>) => {
    store.commit('common/SET_LOADING_STATE');

    return Promise.reject(error);
  },
);

export default http;
