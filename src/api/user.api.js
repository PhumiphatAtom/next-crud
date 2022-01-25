import axios from "./api.config";

export async function register(data) {
  const res = await axios.post("/register", data);
  return res.data;
}

export async function login(data){
  const res = await axios.post("/login", data);
  return res.data;
}