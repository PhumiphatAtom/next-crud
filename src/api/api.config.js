import Axios from "axios";
const axios = Axios.create({
  baseURL: "http://localhost:4321",
});

export default axios;
