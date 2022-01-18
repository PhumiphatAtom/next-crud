import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getProductById } from "../../../api/product.api";

function ProductInfo() {
  const router = useRouter();

  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    img_url: "",
    quantity: "",
  });

  async function fetchProduct() {
    const res = await getProductById(router.query._id);
    setProduct(res.data);
    // console.log(res.data);
  }
  useEffect(() => {
    if (router.query._id) {
      fetchProduct();
      
    }

    return () => {};
  }, [router.query._id]);

  return (
    <div>
      <div className="card lg:card-side card-bordered">
        <figure>
          <img src="https://picsum.photos/id/1005/400/250" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product.name}
            <div className="badge mx-2">NEW</div>
          </h2>
          <p>{product.description}</p>
          <div className="text-secondary font-bold text-md mt-2">
            {product.price?.toLocaleString("th-TH", {
              style: "currency",
              currency: "THB",
            })}
          </div>
          <div className="card-actions">
            <label for="my-modal" class="btn btn-primary modal-button">
              Edit
            </label>
            <button className="btn btn-ghost">Delete</button>
          </div>
        </div>
      </div>

      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Name</span>
                </label>
                <input
                  value={formData.name}
                  type="text"
                  placeholder="Enter Product Name.."
                  className="input input-info input-bordered"
                  name="name"
                  // onChange={handleChange}
                />
                {/* <label className="label">
              <span className="label-text-alt">Please enter data</span>
            </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Description</span>
                </label>
                <textarea
                  value={formData.description}
                  className="textarea h-24 textarea-bordered textarea-success resize-none"
                  placeholder="Enter Description.."
                  name="description"
                  // onChange={handleChange}
                ></textarea>
                {/* <label className="label">
              <span className="label-text-alt">Data is valid</span>
            </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Price</span>
                </label>
                <input
                  value={formData.price}
                  type="text"
                  placeholder="Enter product price.."
                  className="input input-warning input-bordered"
                  name="price"
                  // onChange={handleChange}
                />
                {/* <label className="label">
              <span className="label-text-alt">
                Data must be more than 3 characters
              </span>
            </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Quantity</span>
                </label>
                <input
                  value={formData.quantity}
                  type="text"
                  placeholder="Enter quantity.."
                  className="input input-accent input-bordered"
                  name="quantity"
                  // onChange={handleChange}
                />
                {/* <label className="label">
              <span className="label-text-alt">Data is incorrect</span>
            </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Image Url</span>
                </label>
                <input
                  value={formData.img_url}
                  type="text"
                  placeholder="Enter image url.."
                  className="input input-error input-bordered"
                  name="img_url"
                  // onChange={handleChange}
                />
                {/* <label className="label">
              <span className="label-text-alt">Data is incorrect</span>
            </label> */}
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn btn-primary">
                Accept
              </label>
              <label htmlFor="my-modal" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
