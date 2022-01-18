import NextLink from "next/link";
import React from "react";

function CardProduct({ product }) {
  return (
    <NextLink href={`/products/info/${product._id}`}>
      <div className="card card-bordered shadow-lg">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
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
