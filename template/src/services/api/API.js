import axiosInstance from './AxiosInstance';

export const api = {
  get: async url => await axiosInstance.get(url),
  post: async (url, payload) => await axiosInstance.post(url, payload.params),
  put: async (url, payload) => await axiosInstance.update(url, payload.params),
  delete: async url => await axiosInstance.delete(url),
};

export default api;
