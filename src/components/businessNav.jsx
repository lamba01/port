import React from "react";
import test from "../assets/logo.png";
import { Link } from "react-router-dom";

function BusinessNav() {
  return (
    <nav className="flex w-full justify-center items-center px-5 sm:px-10 z-20 fixed backdrop-blur-3xl h-[50px]">
      <Link to="/" className="flex items-center gap-2">
        <img
          className="h-[35px] w-[35px] rounded-xl border-2 border-white shadow-md"
          src={test}
          alt=""
        />
        <h5 className="font-bold">John</h5>
      </Link>
    </nav>
  );
}

export default BusinessNav;
