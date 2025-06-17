import React from "react";
import { FiExternalLink } from "react-icons/fi";
// import digitalbanking from "../assets/project3.jpg";
import rps from "../assets/rps.jpg";
import skewing from "../assets/skewings.png";

const creativeData = [
  {
    id: 1,
    image: skewing,
    description:
      "Fully responsive, modern travel landing page designed to attract and convert visitors interested in vacation planning and tour packages. The site emphasizes clean UI, smooth animations, and mobile-first responsiveness ",
    link: "https://skewings.vercel.app/",
  },
  {
    id: 2,
    image: rps,
    description:
      "A fun and interactive Rock, Paper, Scissors game with score tracking and responsive design — built with clean UI and smooth animations.",
    link: "https://rpsgamers.netlify.app/",
  },
];

export default function CreativeProjects() {
  return (
    <section className="bg-white py-[40px] sm:py-[50px] px-[20px] sm:px-[40px] w-full text-start">
      <h2>fun builds✨</h2>
      <main className="py-10 sm:py-10 flex flex-col gap-12 sm:gap-0 sm:flex-row justify-between">
        {creativeData.map((data) => (
          <div
            key={data.id}
            className="border-[#f5f5f5] border-2 border-solid rounded-xl w-full sm:w-[48%] p-5 relative group"
            data-aos="fade-up"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #2563eb, #1e3a8a)",
              backgroundColor: "#2563eb", // fallback solid color
            }}
          >
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={data.image}
                alt="Project screenshot"
                className="sm:h-[300px] w-full h-[250px] rounded-xl transition-transform group-hover:scale-105"
              />
            </a>
            <h5 className="mt-3 text-white">{data.description}</h5>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 hover:underline text-white/80 hover:opacity-80"
            >
              View Project <FiExternalLink />
            </a>
          </div>
        ))}
      </main>
    </section>
  );
}
