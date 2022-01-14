import React from "react";
import NextLink from "next/link";
import CardProduct from "../../components/CardProduct";

function Products() {
  return (
    <div>
      {/* <NextLink href={"/products/add"}>
        <button class="btn btn-outline btn-primary">Add Product</button>
      </NextLink> */}
      <div className="text-center text-5xl pt-4">Products</div>
      <div className="grid grid-cols-5">
        {Array(11)
          .fill(null)
          .map((item, index) => (
            <CardProduct key={index}></CardProduct>
          ))}
      </div>
    </div>
  );
}

export default Products;
