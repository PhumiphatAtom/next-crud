import React from "react";
import NextLink from "next/link";

function Header() {
  return (
    <div className="mb-2 shadow-lg bg-neutral text-neutral-content fixed w-screen z-50">
      <div className="navbar max-w-4xl mx-auto">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold text-secondary">
            AT<span className="text-base text-white">SHOP</span>
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
