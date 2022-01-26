import { useRouter } from "next/router";
import React from "react";
// import { useState } from "react";
import { addProduct } from "../../api/product.api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../schemas/product.schema";
import Layout from "../../components/layout";

function AddProduct() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // const [formData, setFormData] = useState({
  //   name: "",
  //   description: "",
  //   price: "",
  //   img_url: "",
  //   quantity: "",
  // });

  // function handleChange(e) {
  //   const value = e.target.value;
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: value,
  //   });
  // }

  async function submit(data) {
    const res = await addProduct(data);
    router.push("/products");
    console.log(res);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-4/12">
        <div className="text-4xl">Add Product</div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Name</span>
            </label>
            <input
              {...register("name")}
              placeholder="Enter Product Name.."
              className="input input-info input-bordered"
              // name="name"
              // onChange={handleChange}
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error font-bold">
                  {errors.name?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea h-24 textarea-bordered textarea-success resize-none"
              placeholder="Enter Description.."
              // name="description"
              // onChange={handleChange}
            ></textarea>
            {errors.description && (
              <label className="label">
                <span className="label-text-alt text-error font-bold">
                {errors.description?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Price</span>
            </label>
            <input
              {...register("price")}
              placeholder="Enter product price.."
              className="input input-warning input-bordered"
              // name="price"
              // onChange={handleChange}
            />
            {errors.price && (
              <label className="label">
                <span className="label-text-alt text-error font-bold">
                {errors.price?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Quantity</span>
            </label>
            <input
              {...register("quantity")}
              placeholder="Enter quantity.."
              className="input input-accent input-bordered"
              // name="quantity"
              // onChange={handleChange}
            />
            {errors.quantity && (
              <label className="label">
                <span className="label-text-alt text-error font-bold">
                {errors.quantity?.message}
                </span>
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Image Url</span>
            </label>
            <input
              {...register("img_url")}
              placeholder="Enter image url.."
              className="input input-error input-bordered"
              // name="img_url"
              // onChange={handleChange}
            />
            {errors.img_url && (
              <label className="label">
                <span className="label-text-alt text-error font-bold">
                {errors.img_url?.message}
                </span>
              </label>
            )}
          </div>

          <button className="btn btn-primary my-8" type="submit">
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
        </form>
      </div>
    </div>
  );
}

AddProduct.getLayout = function getLayout(page) {
  return <Layout checkAuth={true}>{page}</Layout>;
};

export default AddProduct;
