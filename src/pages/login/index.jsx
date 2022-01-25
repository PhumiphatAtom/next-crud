import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/login.schema";
import * as userApi from "../../api/user.api";
import jwt from "jsonwebtoken";
import { useCookies } from "react-cookie";

function Login() {
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token", "user"]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  async function submitLogin(data) {
    const res = await userApi.login(data);
    if (res.statusCode !== 200) {
      alert(res.message);
    } else {
      const token = res.data.token;
      const decoded = jwt.decode(token);
      setCookie("token", token, { path: "/" });
      setCookie("user", decoded, { path: "/" });
      // console.log(res.data.token);
      router.push("/products");
    }
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex-col justify-center hero-content lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
            <p className="mb-5 w-10/12">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(submitLogin)}>
                <div className="font-semibold text-xl mx-auto">
                  YOUR ACCOUNT FOR
                </div>
                <div className="font-semibold text-xl mx-auto">
                  EVERYTHING ATSHOP
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("username")}
                    type="text"
                    placeholder="username"
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
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <label className="label">
                      <span className="label-text-alt text-error font-bold">
                        {errors.username?.message}
                      </span>
                    </label>
                  )}
                </div>
                <div className="form-control">
                  <button className="btn btn-primary mt-8 mb-2" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-xs">
                <div className="divider">OR</div>
                <span className="text-gray-500 flex justify-center">
                  Not a Member?
                  <NextLink href={"/register"}>
                    <a className="link link-secondary pl-2">Join Us.</a>
                  </NextLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
