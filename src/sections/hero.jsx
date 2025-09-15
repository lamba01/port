import React from "react";
import test from "../assets/logo.png";

export default function Hero({ scrollToProjects }) {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-[20px] md:px-0">
      {/* Profile Image */}
      <img
        src={test}
        alt="John Oluwafemi - Fullstack Web Developer"
        className="absolute top-[35%] sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] md:w-[150px] md:h-[150px] object-cover rounded-full opacity-100 border-8 border-solid border-white z-10 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition transform hover:scale-105"
      />

      {/* SEO-Friendly H1 */}
      <h1 className="sr-only">
        John Oluwafemi – Freelance Full-Stack Web Developer (React, Node.js,
        MySQL, Tailwind CSS)
      </h1>

      {/* Visible Name Design */}
      <div className="flex flex-col items-center gap-14 justify-center">
        <span
          className="text-6xl md:text-9xl uppercase font-bold"
          data-aos="fade-left"
        >
          john
        </span>
        <span
          className="text-6xl md:text-9xl uppercase mb-3 font-bold"
          data-aos="fade-right"
        >
          oluwafemi
        </span>
      </div>

      {/* Intro Paragraph */}
      <p className="text-lg font-medium text-center md:text-xl my-4">
        Helping startups and businesses go digital with{" "}
        <strong>custom eCommerce websites</strong>,{" "}
        <strong>booking platforms</strong>, and{" "}
        <strong>web applications</strong>. I craft responsive, user-friendly
        solutions using React, Node.js, MySQL, and Tailwind CSS that drive real
        growth.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row w-full items-center justify-center mt-10 sm:mt-5 gap-3">
        <a href="#contact" className="sm:w-[250px] flex justify-center">
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900
                       text-white cursor-pointer py-3 px-8 sm:w-[250px] w-[90vw] rounded-lg shadow-md transition-all duration-200"
          >
            Start a Project
          </button>
        </a>
        <button
          onClick={scrollToProjects}
          className="bg-[#d1d5db] text-black cursor-pointer py-3 px-8 sm:w-[250px] w-[90vw] hover:bg-[#f5f5f5] rounded-lg shadow-md transition-all duration-200"
          data-aos-delay="300"
        >
          View Portfolio Projects
        </button>
      </div>
    </section>
  );
}
