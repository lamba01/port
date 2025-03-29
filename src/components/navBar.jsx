import React from "react";
import john from "../assets/john-oluwafemi.jpeg";

export default function navBar() {
  return (
    <menu className="flex w-full justify-between items-center px-5 sm:px-10 z-20 fixed backdrop-blur-3xl h-[50px]">
      <div className="flex items-center">
        <img
          className="h-[40px] w-[40px] rounded-xl border-2 border-white shadow-md"
          src={john}
          alt=""
        />
        <h5 className="font-bold">John</h5>
      </div>
      <div className="flex gap-5 md:gap-10 capitalize">
        <a className="text-sm md:text-lg" href="/about">
          about
        </a>
        <a className="text-sm md:text-lg" href="/work">
          work
        </a>
        <a className="text-sm md:text-lg" href="projects">
          projects
        </a>
      </div>
    </menu>
  );
}
