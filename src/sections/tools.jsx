import React from "react";
import reactlogo from "../assets/react.png";
import javascript from "../assets/js.png";
import nextjs from "../assets/next.png";
import figma from "../assets/figma.png";
import redux from "../assets/redux.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwindcss-mark.svg";
import express from "../assets/Express.png";
import mysql from "../assets/MySQL.png";
import wordpress from "../assets/wordpress.png";

export default function Tools() {
  return (
    <section className="bg-white py-[50px] px-[30px] sm:px-[50px] w-full text-start">
      <h2>My Tools & Libaries 🔧</h2>
      <main className="flex flex-wrap items-center justify-center gap-10 sm:py-16 py-10">
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={reactlogo} alt="react logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            react
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={javascript} alt="javascript logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            javascript
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={nextjs} alt="nextjs logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            next JS
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src={figma} alt="figma logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            figma
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src={redux} alt="redux logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            redux
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src={node} alt="node js logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            node JS
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <img src={tailwind} alt="tailwind css logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            tailwind CSS
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <img src={express} alt="express js logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            express js
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <img src={mysql} alt="My sql logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            MySQL
          </h5>
        </div>
        <div
          className="flex items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <img src={wordpress} alt="wordpress logo" className="w-[40px]" />
          <h5 className="font-bold text-sm md:text-lg text-black capitalize">
            wordpress
          </h5>
        </div>
      </main>
    </section>
  );
}
