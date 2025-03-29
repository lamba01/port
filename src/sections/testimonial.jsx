import React, { useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import njshImage from "../assets/project2.png";
import cepherImage from "../assets/project1.png";

const testimonialData = [
  {
    id: 1,
    testimony: `"John was hired to develop a website for the Nigerian Journal of
             Social Sciences, aside from the fact that he delivered to time lag,
             the website is professional and responsive to the request of
             intending authors. Publishing with the Journal is easier as
             procedures for uploading a manuscript for consideration for
             publication is made self explanatory by the responsive website
             developed by John. Without any reservation, I recommend for those
             that will require his services now and in the future"`,
    name: "Prof Femi Tinuola",
    organization: "Editor-in-Chief, NJSH",
    image: njshImage,
  },
  {
    id: 2,
    testimony: `"John did an excellent job developing our website. The site has greatly improved our online presence,
     making it easier for people to learn about our work and stay updated on our activities.
     Thanks to his work, we now reach a wider audience, and our visibility on search engines has improved
     significantly. The website has been a valuable tool in helping us share our research and connect with
     more people. I highly recommend John for anyone looking for a well-built and effective website."`,
    name: "Prof Israel Orubuloye",
    organization: "CEO, CEPHER",
    image: cepherImage,
  },
];

export default function Testimonial() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="bg-[#f5f5f5] py-[50px] px-[20px] w-full text-start overflow-hidden">
      <h2 className="text-2xl">Highly Rated ⭐</h2>
      <p>Expect nothing but perfection working with me</p>
      <main className="w-full flex flex-col sm:flex-row items-center justify-between py-16 sm:py-10 gap-10 sm:gap-0">
        {testimonialData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative w-[100%] sm:w-[48%] bg-white rounded-xl text-start flex flex-col items-center px-5 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            onMouseEnter={() => setHoveredId(testimonial.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <IoPersonCircle size={"4em"} />
            <p className="font-medium py-3">{testimonial.testimony}</p>
            <div className="text-center">
              <p className="font-bold capitalize">{testimonial.name}</p>
              <p className="capitalize">{testimonial.organization}</p>
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
