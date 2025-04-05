// import React from "react";
import john from "../assets/john-oluwafemi.jpeg";

export default function Hero({ scrollToProjects }) {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-[20px] md:px-0">
      <img
        src={john}
        alt="Profile"
        className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[130px] w-[130px] md:w-[180px] md:h-[180px] object-cover rounded-full opacity-100 border-8 border-solid border-white z-10 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition transform hover:scale-105 "
      />
      <div className="flex flex-col items-center gap-15 justify-center">
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
        Coding my way through challenges to build something amazing.
      </p>
      <div className="flex flex-col md:flex-row w-full items-center justify-center mt-10 sm:mt-5 gap-3">
        <a href="mailto:moyinooluwafemi2004@gmail.com">
          <button className="primary" data-aos="fade-up">
            lets work
          </button>
        </a>
        <button
          onClick={scrollToProjects}
          className="secondary"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          explore
        </button>
      </div>
    </section>
  );
}
