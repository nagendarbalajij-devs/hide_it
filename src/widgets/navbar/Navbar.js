import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { AppColors } from "../../utils/colors";
import { AccentButton } from "../button/accent_button";

const Navbar = (props) => {
  const navbarItem = "w-auto px-6 cursor-pointer";
  return (
    <div className="flex flex-row items-center justify-between pt-2">
      <div className={`flex flex-row items-center justify-start ${navbarItem}`}>
        <div className={` py-4 text-4xl font-bold subpixel-antialiased`}>
          Hide It
        </div>
        <div
          className={`ml-1 py-4 text-4xl font-bold text-red-500 subpixel-antialiased`}
        >
          .
        </div>
      </div>

      <div className="hidden flex-row items-center justify-end sm:flex">
        <div className={`${navbarItem} font-semibold hover:text-red-600`}>
          <Link to="/view">View</Link>
        </div>
        <div className={`${navbarItem} font-semibold hover:text-red-600`}>
          <Link to="/auth">{props.loggedIn ? `Log Out` : `Sign In`}</Link>
        </div>
        <div className={navbarItem}>
          <AccentButton>
            <Link to="/new">Create New</Link>{" "}
          </AccentButton>{" "}
        </div>
      </div>
      <div className="flex flex-row items-center justify-end sm:hidden">
        <div
          className={`mr-6 py-4 text-4xl font-bold text-red-500 subpixel-antialiased`}
        >
          {` >`}
        </div>
      </div>
    </div>
  );
};

export { Navbar };
