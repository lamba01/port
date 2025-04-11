import React from "react";
import { FiExternalLink } from "react-icons/fi";
import shopease from "../assets/shopease.png";
import taskmanagement from "../assets/TaskM.webp";

const creativeData = [
  {
    id: 1,
    image: shopease,
    description:
      "An online storefront designed for small businesses — features smooth browsing, clean product displays, and a working (simulated) checkout experience.",
    link: "https://commeercee.vercel.app",
  },
  {
    id: 2,
    image: taskmanagement,
    description:
      "A user-friendly task management tool built for teams — includes secure login, real-time task updates, and project tracking.",
    link: "https://task-managementapp-client.vercel.app/",
  },
];

export default function CreativeProjects() {
  return (
    <section className="bg-white py-[40px] sm:py-[50px] px-[20px] sm:px-[40px] w-full text-start">
      <h2>creative projects✨</h2>
      <main className="py-10 sm:py-10 flex flex-col gap-12 sm:gap-0 sm:flex-row justify-between">
        {creativeData.map((data) => (
          <div
            key={data.id}
            className="border-[#f5f5f5] border-2 border-solid rounded-xl w-full sm:w-[48%] p-5 relative group"
            data-aos="fade-up"
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
            <h5 className="mt-3">{data.description}</h5>
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-2 hover:underline text-[rgba(0,0,0,0.6)] hover:text-black"
            >
              View Project <FiExternalLink />
            </a>
          </div>
        ))}
      </main>
    </section>
  );
}
