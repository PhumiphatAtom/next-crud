import React from "react";
import NextLink from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [cookies, , removeCookie] = useCookies(["token", "user"]);
  const handleLogout = () => {
    removeCookie("token");
    removeCookie("user");
    router.replace("/login");
  };

  return (
    <div className="mb-2 shadow-lg bg-neutral text-neutral-content fixed w-screen z-50">
      <div className="navbar max-w-4xl mx-auto">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-3xl font-bold text-secondary">
            AT<span className="text-2xl text-white">SHOP</span>
          </span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            <NextLink href={"/products"}>
              <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
            </NextLink>
            <NextLink href={"/products/add"}>
              <a className="btn btn-ghost btn-sm rounded-btn">Add Products</a>
            </NextLink>
            <a className="btn btn-ghost btn-sm rounded-btn">About</a>
            <a
              className="btn btn-ghost btn-sm rounded-btn"
              onClick={() => {
                const footerElement = document.getElementById("footer");
                footerElement.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          {cookies.user ? (
            <>
              {/* <div className="avatar">
                <div className="rounded-full h-10 w-10">
                  <img src="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
                </div>
              </div> */}
              <button className="dropdown dropdown-hover">
                <div tabindex="0" className="m-1 btn w-max">
                  <div className="avatar">
                    <div className="rounded-full h-10 w-10">
                      <img src="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
                    </div>
                  </div>
                </div>
                <ul
                  tabindex="0"
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
                >
                  <div className="text-black font-bold cursor-default flex ml-5">
                    {cookies.user.username}
                  </div>
                  <div className="divider my-0"></div>
                  <li>
                    <a>
                      <div className="text-black font-medium">Profile</div>
                    </a>
                  </li>
                  {/* <div className="divider my-0"></div> */}
                  <li>
                    <a onClick={handleLogout}>
                      <div className="text-black font-medium">Sign out</div>
                    </a>
                  </li>
                </ul>
              </button>
            </>
          ) : (
            <NextLink href={"/login"}>
              <button>Sign In</button>
            </NextLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
