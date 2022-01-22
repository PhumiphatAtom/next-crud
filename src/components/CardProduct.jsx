import NextLink from "next/link";
import React from "react";

function CardProduct({ product }) {
  return (
    <NextLink href={`/products/info/${product._id}`}>
      <div className="card rounded-none cursor-pointer hover:transform hover:scale-110 duration-200">
        <figure>
          <img src={product.img_url} />
        </figure>
        <div className="card-body justify-between p-4">
          <div>
            <h2 className="card-title">
              {product.name}
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p className="line-clamp-2">{product.description}</p>
            <div className="text-secondary font-bold text-md mt-2">
              {product.price.toLocaleString("th-TH", {
                style: "currency",
                currency: "THB",
              })}
            </div>
          </div>
        </div>
      </div>
    </NextLink>
  );
}

export default CardProduct;
