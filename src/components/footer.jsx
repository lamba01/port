import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black sm:h-60 flex flex-col sm:flex-row items-center justify-between py-[30px] sm:py-[10px] px-[20px] sm:px-[40px] sm:gap-0 gap-10">
      <div className="flex flex-col gap-2 sm:gap-8">
        <h1 className="text-white text-2xl sm:text-5xl">
          Let's build awesome products!
        </h1>
        <a
          href="mailto:moyinooluwafemi2004@gmail.com"
          className="text-xl text-gray-200 hover:text-gray-400"
        >
          moyinooluwafemi2004@gmail.com
        </a>
      </div>
      <aside className="text-center">
        <div className="flex gap-6">
          <div className="h-[40px] w-[40px] rounded-[50%] bg-white/60 hover:bg-white flex items-center justify-center cursor-pointer">
            <a
              href="https://x.com/lambacodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX color="black" />
            </a>
          </div>
          <div className="h-[40px] w-[40px] rounded-[50%] bg-white/60 hover:bg-white flex items-center justify-center cursor-pointer">
            <a
              href="https://frontendmentor.io/profile/lamba01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFrontendmentor color="black" />
            </a>
          </div>
          <div className="h-[40px] w-[40px] rounded-[50%] bg-white/60 hover:bg-white flex items-center justify-center cursor-pointer">
            <a
              href="'https://github.com/lamba01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="black" />
            </a>
          </div>
          <div className="h-[40px] w-[40px] rounded-[50%] bg-white/60 hover:bg-white flex items-center justify-center cursor-pointer">
            <a
              href="https://www.linkedin.com/in/johnmoyinoluwa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="black" />
            </a>
          </div>
        </div>
      </aside>
    </footer>
  );
}
