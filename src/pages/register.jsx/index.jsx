import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import * as userApi from "../../api/user.api";
import { schema } from "../../schemas/register.schema";
import NextLink from "next/link";

function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function submit(data) {
    const res = await userApi.register(data);
    router.push("/login");
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="font-bold text-2xl mx-auto">Register</div>
            <form onSubmit={handleSubmit(submit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  {...register("username")}
                  type="text"
                  placeholder="Enter your username"
                  className="input input-bordered"
                />
                {errors.username && (
                  <label className="label">
                    <span className="label-text-alt text-error font-bold">
                      {errors.username?.message}
                    </span>
                  </label>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error font-bold">
                      {errors.password?.message}
                    </span>
                  </label>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm password</span>
                </label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Please confirm your password"
                  className="input input-bordered"
                />
                {errors.confirmPassword && (
                  <label className="label">
                    <span className="label-text-alt text-error font-bold">
                      {errors.confirmPassword?.message}
                    </span>
                  </label>
                )}
              </div>
              <div className="form-control">
                <button className="btn btn-primary my-8" type="submit">
                  Join us
                </button>
              </div>
              <div className="text-xs">
                <span className="text-gray-500 flex justify-center">
                  Already a Member?
                  <NextLink href={"/login"}>
                    <a className="link link-secondary pl-2">Sign In</a>
                  </NextLink>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
