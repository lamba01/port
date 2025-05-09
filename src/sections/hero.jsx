// import React from "react";
// import john from "../assets/john-oluwafemi.jpeg";
import test from "../assets/logo.png";

export default function Hero({ scrollToProjects }) {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-[20px] md:px-0 ">
      <img
        src={test}
        alt="John Oluwafemi - Fullstack Developer photo"
        className="absolute top-[35%] sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] md:w-[150px] md:h-[150px] object-cover rounded-full opacity-100 border-8 border-solid border-white z-10 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition transform hover:scale-105 "
      />
      <div className="flex flex-col items-center gap-14 justify-center">
        <h1 className="text-6xl md:text-9xl uppercase" data-aos="fade-left">
          john
        </h1>
        <h1
          className="text-6xl md:text-9xl uppercase mb-3"
          data-aos="fade-right"
        >
          oluwafemi
        </h1>
      </div>
      <p className="text-lg font-medium text-center md:text-xl my-4">
        Helping startups and businesses go digital with custom web solutions.{" "}
        <br /> I turn ideas into responsive, user-friendly web apps that
        converts.
      </p>
      <div className="flex flex-col md:flex-row w-full items-center justify-center mt-10 sm:mt-5 gap-3">
        <a href="#contact" className="sm:w-[250px] flex justify-center">
          <button className="bg-black text-white cursor-pointer py-3 px-8 sm:w-[250px] w-[90vw] hover:bg-[#333333]">
            start a project
          </button>
        </a>
        <button
          onClick={scrollToProjects}
          className="bg-[#f5f5f5] text-black cursor-pointer py-3 px-8 sm:w-[250px] w-[90vw] hover:bg-[#d1d5db]"
          data-aos-delay="300"
        >
          see my work
        </button>
      </div>
    </section>
  );
}
