import React from "react";
// import john from "../assets/john-oluwafemi.jpeg";
import test from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function navBar() {
  return (
    <nav className="flex w-full justify-between items-center px-5 sm:px-10 z-20 fixed backdrop-blur-2xl bg-[#0f172a]/70 border-b border-white/10 h-[60px] text-white shadow-md">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="h-[35px] w-[35px] rounded-xl border-2 border-white shadow-md"
            src={test}
            alt=""
          />
          <h5 className="font-bold text-white/80 hover:text-white">John</h5>
        </Link>
      </div>
      <div className="flex gap-5 md:gap-10 capitalize">
        <a
          className="text-sm md:text-lg text-white/80 hover:text-white"
          href="/about"
        >
          about
        </a>
        <a
          className="text-sm md:text-lg text-white/80 hover:text-white"
          href="/case-studies"
        >
          projects
        </a>
        <a
          className="text-sm md:text-lg text-white/80 hover:text-white hidden sm:block"
          href="/#contact"
          rel="noopener noreferrer"
        >
          contact
        </a>
        {/* <a
          className="text-sm md:text-lg text-white/80 hover:text-white"
          href="/blog"
          rel="noopener noreferrer"
        >
          blog
        </a> */}
      </div>
    </nav>
  );
}
