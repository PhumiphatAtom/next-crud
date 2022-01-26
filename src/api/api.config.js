import Axios from 'axios';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();
const axios = Axios.create({
  baseURL: 'http://localhost:4321',
  headers: {
    authorization: `Bearer ${cookies.get('token')}`,
  },
});

export default axios;
