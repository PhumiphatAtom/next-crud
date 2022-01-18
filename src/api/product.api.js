import axios from "./api.config";

export async function addProduct(data) {
  const res = await axios.post("/product", data);
  return res.data;
}

export async function getProducts() {
  const res = await axios.get("/product");
  return res.data;
}

export async function getProductById(_id) {
  const res = await axios.get(`/product/${_id}`);
  return res.data;
}
