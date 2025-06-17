import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

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
        <div className="flex gap-6 shadow-lg bg-white border-[#F0F0F0] border-2 px-6 py-3 rounded-4xl">
          <h2 className="text-lg font-semibold capitalize">follow</h2>
          <div className="flex gap-2 items-center justify-center">
            <a
              href="https://twitter.com/lambacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #2563eb, #1e3a8a)",
                backgroundColor: "#2563eb", // fallback solid color
              }}
            >
              <BsTwitterX size={20} />
            </a>
            <a
              href="https://frontendmentor.io/profile/lamba01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #2563eb, #1e3a8a)",
                backgroundColor: "#2563eb", // fallback solid color
              }}
            >
              <SiFrontendmentor size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/johnmoyinoluwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #2563eb, #1e3a8a)",
                backgroundColor: "#2563eb", // fallback solid color
              }}
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/lamba01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #2563eb, #1e3a8a)",
                backgroundColor: "#2563eb", // fallback solid color
              }}
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </aside>
    </footer>
  );
}
