import axios from 'axios';
import Config from '../../config';

// import Selector from '../../redux/selectors';

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  // timeout: 3000,
});

export const handleError = ({message, data, status}) => {
  return Promise.reject({message, data, status});
};

axiosInstance.interceptors.request.use(
  config => {
    // if (Selector.token) {
    //   config.headers = {
    //     Authorization: `Bearer Token`,
    //   };
    // }
    return config;
  },
  ({message, response: {data, status}}) => {
    return handleError({message, data, status});
  },
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  ({message, response: {data, status}}) => {
    return handleError({message, data, status});
  },
);

export default axiosInstance;
