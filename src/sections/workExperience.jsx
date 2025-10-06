import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const experiences = [
  {
    company: "Nigerian Journal of Social Health",
    date: "2024 - Present",
    title: "Website Moderator",
    description:
      "Regularly update and maintain the website, ensuring security, stability, and compliance with academic publishing standards.",
  },
  {
    company: "Nigerian Journal of Social Health",
    date: "2024 - 2025",
    title: "Lead Developer",
    description:
      "Developed the NJSH journal submission website to streamline academic publishing and improve online visibility.",
  },
  {
    company: "Centre for Population and Health Research",
    date: "06/2024 - 12/2024",
    title: "Frontend Engineer",
    description:
      "First hire to develop CEPHER's first official website, establishing its online presence to enhance visibility and accessibility for a wider audience.",
  },
  {
    company: "Engaj Media",
    date: "07/2023 - 10/2023",
    title: "Web Design Intern",
    description:
      "Led the design of Engaj Media’s first official website, working with a cross-functional team to create a modern, 3D-enhanced user experience.",
  },
];

const ExperienceItem = ({ exp, fromLeft, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.4 });

  return (
    <motion.div
      ref={itemRef}
      initial={{
        opacity: 0,
        x: fromLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="relative flex flex-col sm:flex-row sm:items-center gap-6 mb-20"
    >
      {/* Dot with glow */}
      <motion.div
        animate={{
          scale: isInView ? [1, 1.4, 1] : 1,
          boxShadow: isInView
            ? ["0 0 10px #6366f1", "0 0 20px #8b5cf6", "0 0 10px #6366f1"]
            : "0 0 0px transparent",
        }}
        transition={{
          duration: 1.2,
          repeat: isInView ? Infinity : 0,
          repeatType: "mirror",
        }}
        className="absolute left-4 sm:left-[calc(50%-8px)] w-4 h-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full z-10 shadow-lg"
      ></motion.div>

      {/* Card */}
      <div
        className={`w-full sm:w-[45%] ${
          fromLeft ? "sm:ml-auto" : "sm:mr-auto"
        } bg-[#141414] p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/60 transition-all duration-300`}
      >
        <h4 className="font-bold text-xl text-white">{exp.company}</h4>
        <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
        <h5 className="text-lg font-semibold text-indigo-400">{exp.title}</h5>
        <p className="text-gray-300">{exp.description}</p>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative w-full py-[120px] px-[20px] sm:px-[40px] bg-[#0d0d0d] text-white flex flex-col items-center overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-3">
          3 Years of Building Greatness ⚡️
        </h2>
        <p className="text-gray-400 text-lg">A few brands I've worked with</p>
      </div>

      <div className="relative w-full sm:w-4/5 flex flex-col">
        {/* Static line background */}
        <div className="absolute left-6 sm:left-1/2 top-0 h-full w-[2px] bg-gray-800" />

        {/* Animated scroll line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 sm:left-1/2 top-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top"
        />

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            exp={exp}
            index={index}
            fromLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}
