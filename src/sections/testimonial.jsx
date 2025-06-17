import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import njshImage from "../assets/project2.png";
import cepherImage from "../assets/project1.png";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonialData = [
  {
    id: 1,
    testimony: `John was hired to develop a website for the Nigerian Journal of
             Social Sciences, aside from the fact that he delivered to time lag,
             the website is professional and responsive to the request of
             intending authors. Publishing with the Journal is easier as
             procedures for uploading a manuscript for consideration for
             publication is made self explanatory by the responsive website
             developed by John. Without any reservation, I recommend for those
             that will require his services now and in the future`,
    name: "Prof Femi Tinuola",
    organization: "Editor-in-Chief, NJSH",
    image: njshImage,
  },
  {
    id: 2,
    testimony: `John did an excellent job developing our website. The site has greatly improved our online presence,
     making it easier for people to learn about our work and stay updated on our activities.
     Thanks to his work, we now reach a wider audience, and our visibility on search engines has improved
     significantly. The website has been a valuable tool in helping us share our research and connect with
     more people. I highly recommend John for anyone looking for a well-built and effective website.`,
    name: "Prof Israel Orubuloye",
    organization: "CEO, CEPHER",
    image: cepherImage,
  },
];

export default function Testimonial() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className=" py-[50px] px-[20px] sm:px-[40px] w-full text-start overflow-hidden">
      <h2 className="text-2xl" data-aos="fade-up">
        Highly Rated ⭐
      </h2>
      <p data-aos="fade-up">Expect nothing but perfection working with me</p>
      <main
        className="w-full flex flex-col sm:flex-row items-center justify-between py-16 sm:py-10 gap-10 sm:gap-0"
        data-aos="flip-right"
        data-aos-delay="700"
      >
        {testimonialData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative w-[100%] sm:w-[48%] rounded-xl text-start flex flex-col items-center px-5 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
              backgroundImage: "linear-gradient(to top, #2563eb, #1e3a8a)",
              backgroundColor: "#2563eb", // fallback solid color
            }}
            onMouseEnter={() => setHoveredId(testimonial.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <IoPersonCircle size={"4em"} color="white" />
            <span className="italic text-white text-xl py-3 leading-relaxed">
              <FaQuoteLeft className="inline mr-2" />
              {testimonial.testimony}
            </span>
            <div className="text-center mt-2">
              <span className="font-semibold text-white">
                {testimonial.name}
              </span>
              <p className="text-sm text-white/50">
                {testimonial.organization}
              </p>
            </div>

            {hoveredId === testimonial.id && (
              <img
                src={testimonial.image}
                alt="Testimonial Website Preview"
                className="absolute top-[-40px] right-[-40px] w-80 h-40 object-cover rounded-lg shadow-md rotate-6 transition-transform duration-300"
              />
            )}
          </div>
        ))}
      </main>
    </section>
  );
}
