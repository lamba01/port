// import React from "react";
import john from "../assets/john-oluwafemi.jpeg";

export default function Hero() {
  return (
    <section className="w-full h-[90vh] flex flex-col justify-center items-center px-[20px] md:px-0">
      <img
        src={john}
        alt="Profile"
        className="absolute top-[43%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[130px] w-[130px] md:w-[180px] md:h-[180px] object-cover rounded-full opacity-100 border-8 border-solid border-white"
      />
      <div className="flex flex-col items-center gap-15 justify-center">
        <h1 className="text-6xl md:text-9xl uppercase">john</h1>
        <h1 className="text-6xl md:text-9xl uppercase mb-3">oluwafemi</h1>
      </div>
      <p className="text-lg font-medium text-center md:text-xl my-4">
        Coding my way through challenges to build something amazing.
      </p>
      <div className="flex flex-col md:flex-row w-full items-center justify-center mt-5 gap-3">
        <button className="primary">lets work</button>
        <button className="secondary">explore</button>
      </div>
    </section>
  );
}
