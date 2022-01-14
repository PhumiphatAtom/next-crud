import axios from "./api.config";

export async function addProduct(data) {
  const res = await axios.post("/product", data);
  return res.data
}

export async function getProducts(data) {
    
}
