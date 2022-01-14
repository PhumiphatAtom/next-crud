import React from "react";
import { useState } from "react";
import { addProduct } from "../../api/product.api";

function AddProduct() {
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

  async function handleSubmit() {
    const res = await addProduct(formData);
    console.log(res);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-4/12">
        <div className="text-4xl">Add Product</div>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Name</span>
            </label>
            <input
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

          <button className="btn btn-primary my-8" onClick={handleSubmit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
