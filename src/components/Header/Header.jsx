import React from "react";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost pl-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="lexend font-normal text-[#150b2bb3]">Home</a>
            </li>
            <li>
              <a className="lexend font-normal text-[#150b2bb3]">Recipes</a>
            </li>
            <li>
              <a className="lexend font-normal text-[#150b2bb3]">About</a>
            </li>
            <li>
              <a className="lexend font-normal text-[#150b2bb3]">Search</a>
            </li>
          </ul>
        </div>
        <a className="lexend text-xl font-bold text-[#150b2b] lg:text-4xl">
          Chefs
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="lexend font-normal text-[#150b2bb3]">Home</a>
          </li>
          <li>
            <a className="lexend font-normal text-[#150b2bb3]">Recipes</a>
          </li>
          <li>
            <a className="lexend font-normal text-[#150b2bb3]">About</a>
          </li>
          <li>
            <a className="lexend font-normal text-[#150b2bb3]">Search</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-4">
        <label className="input bg-[#150b2b0d] font-normal text-[#150b2bb3] focus-within:border-none border-none focus-within:outline-none">
          <svg
            className="h-[1.7em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="./src/images/cooking.jpg" />
          </div>
        </div>
        {/* <div className="rounded-full bg-[#0be58a] p-2 text-3xl">
          <CgProfile />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
