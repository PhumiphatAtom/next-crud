import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { delProductBy_id, editProductBy_id, getProductById } from "../../../api/product.api";

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

  function handleChange(e) {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  }

  async function handleSubmitDel() {
    const res = await delProductBy_id(router.query._id);
    router.push("/products")
    console.log("handleSubmitDel : ", res.statusCode);
  }

  async function handleSubmitEdit() {
    const res = await editProductBy_id(router.query._id, formData);
    setProduct(res.data);
    // console.log("handleSubmitEdit" , res);
  }

  async function fetchProduct() {
    const res = await getProductById(router.query._id);
    setProduct(res.data);
    setFormData(res.data);
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
      <div className="card lg:card-side card-bordered w-8/12 mx-auto my-40">
        <figure>
          <img src={product.img_url} />
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
            <label htmlFor="my-modal" className="btn btn-primary modal-button">
              Edit
            </label>
            <button className="btn btn-ghost" onClick={handleSubmitDel}>
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* ***************** Modal ****************** */}

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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
                {/* <label className="label">
              <span className="label-text-alt">Data is incorrect</span>
            </label> */}
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor="my-modal"
                className="btn btn-primary"
                onClick={() => {
                  handleSubmitEdit();
                }}
              >
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
