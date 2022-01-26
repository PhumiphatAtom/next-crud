import React, { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';
import { getProducts } from '../../api/product.api';
import Layout from '../../components/layout';

function Products() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const res = await getProducts();
    setProducts(res.data);
  }
  useEffect(() => {
    fetchProducts();
    return () => {};
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      {/* <NextLink href={"/products/add"}>
        <button class="btn btn-outline btn-primary">Add Product</button>
      </NextLink> */}
      <div className="text-center text-4xl pt-4 font-bold">Products</div>
      <div className="grid grid-cols-4 gap-8 m-8">
        {products.map((item, index) => (
          <CardProduct key={index} product={item}></CardProduct>
        ))}
      </div>
    </div>
  );
}
Products.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Products;
