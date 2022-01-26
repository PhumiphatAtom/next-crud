import Axios from 'axios';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const axios = Axios.create({
  baseURL: 'http://localhost:4321',
  headers: {
    authorization: `Bearer ${cookies.get('token')}`,
  },
});

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.data.statusCode === 401) {
      if (process.browser) {
        window.location.href = '/login';
      }
    }
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
