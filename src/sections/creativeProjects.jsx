import React from "react";
import { FiExternalLink } from "react-icons/fi";
import shopease from "../assets/shopease.png";
import taskmanagement from "../assets/TaskM.webp";

const creativeData = [
  {
    id: 1,
    image: shopease,
    description:
      "Developed this full stack online store with seamless navigation, product displays, and simulated checkout process.",
    link: "https://commeercee.vercel.app",
  },
  {
    id: 2,
    image: taskmanagement,
    description:
      "A full-stack task manager with real-time updates and authentication. Built with MERN stack.",
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
              className="text-blue-600 flex items-center gap-2 mt-2 hover:underline"
            >
              View Project <FiExternalLink />
            </a>
          </div>
        ))}
      </main>
    </section>
  );
}
