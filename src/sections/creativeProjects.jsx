import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
// import rps from "../assets/rps.jpg";
import skewing from "../assets/skewings.png";
import shopease from "../assets/shopease.png";

const creativeData = [
  {
    id: 1,
    image: skewing,
    description:
      "Fully responsive, modern travel landing page designed to attract and convert visitors interested in vacation planning and tour packages. Built with smooth animations and a clean UI.",
    link: "https://skewings.vercel.app/",
  },
  // {
  //   id: 2,
  //   image: rps,
  //   description:
  //     "A fun and interactive Rock, Paper, Scissors game with score tracking and responsive design — built with clean UI and smooth animations.",
  //   link: "https://rpsgamers.netlify.app/",
  // },
  {
    id: 2,
    image: shopease,
    // logo: commercelogo,
    description: `Developed a complete online shopping site, including user login, 
      product listings, cart system, and checkout simulation. Designed to be simple, clean, and 
      functional for both customers and business owners. Includes Paystack payment and order tracking.`,
    // technologies: ["React", "Nodejs", "MySQL", "Express", "Ejs"],
    link: "https://commeercee.vercel.app",
  },
];

export default function CreativeProjects() {
  return (
    <section
      id="fun-builds"
      className="bg-[#0a0a0a] text-white py-[80px] sm:py-[100px] px-[20px] sm:px-[40px] w-full"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-14">
        Fun Builds ✨
      </h2>

      <main className="flex flex-col sm:flex-row justify-between items-stretch gap-10 sm:gap-8">
        {creativeData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative w-full sm:w-[48%] bg-[#111] rounded-2xl overflow-hidden border border-[#1f1f1f] hover:border-[#2563eb] transition-all duration-300 group"
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
                className="h-[250px] sm:h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-white/80 text-[15px] leading-relaxed mb-4">
                  {data.description}
                </p>
                <div className="flex items-center gap-2 text-blue-400 hover:underline">
                  View Project <FiExternalLink />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </main>
    </section>
  );
}
