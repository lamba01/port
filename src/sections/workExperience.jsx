import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const experiences = [
  {
    company: "Nigerian Journal of Social Health",
    date: "2024 - Present",
    title: "Website Moderator",
    description:
      "Regularly update and maintain the website, ensuring security, stability, and compliance with academic publishing standards.",
  },
  {
    company: "SB Lofa Driving School",
    date: "10/2025",
    title: "SEO Optmization",
    description:
      "Optimized the Google Business Profile and implemented local SEO strategies to improve search rankings and increase student inquiries.",
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

const testimonials = [
  {
    quote:
      "John has been instrumental in maintaining the stability and efficiency of our journal’s online platform. He ensures that our website runs smoothly and all technical issues are resolved before they disrupt our publishing workflow.",
    name: "Prof Femi Tinuola",
    role: "Editor-in-Chief, NJSH",
  },
  {
    quote:
      "I’m very impressed with the work done. He went above and beyond optimizing our Google Business Profile, improving our SEO, and helping the school show up online. The difference is noticeable. Excellent job.",
    name: "Sahr Bundor",
    role: "Owner, SB Lofa",
  },
  {
    quote:
      "John did an excellent job developing our website. We now reach a wider audience and have improved visibility on search engines.",
    name: "Dr Helen Anthony Ekpe",
    role: "Managing Editor, NJSH",
  },
  {
    quote:
      "John quickly set up our public site and made it easy for the team to update content. Very reliable and thoughtful developer.",
    name: "Prof Israel Orubuloye",
    role: "CEO, CEPHER",
  },
  {
    quote:
      "John brought fresh design ideas and solid front-end implementation to our first site — great attention to detail.",
    name: "Vatsal Mishra",
    role: "Team Lead, Engaj Media",
  },
];

const companyLogos = {
  // "Nigerian Journal of Social Health": require("../assets/njsh-logo.png"),
  // "Centre for Population and Health Research": require("../assets/cepher-logo.jpeg"),
  // "Engaj Media": require("../assets/engaj-logo.png"),
};

function getInitials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const ExperienceItem = ({ exp, testimonial, fromLeft, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.45 });
  const initialX = fromLeft ? -80 : 80;
  const logo = companyLogos[exp.company];

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative flex flex-col sm:flex-row sm:items-center gap-6 mb-20 w-full"
    >
      {/* Center Logo / initials */}
      <motion.div
        animate={{
          scale: isInView ? [1, 1.35, 1] : 1,
          boxShadow: isInView
            ? [
                "0 0 8px rgba(99,102,241,0.15)",
                "0 0 20px rgba(139,92,246,0.18)",
                "0 0 8px rgba(99,102,241,0.12)",
              ]
            : "0 0 0px rgba(0,0,0,0)",
        }}
        transition={{
          duration: 1.2,
          repeat: isInView ? Infinity : 0,
          repeatType: "mirror",
        }}
        className="absolute left-4 top-1 sm:left-[calc(50%-28px)] sm:top-0 z-10"
        style={{ width: 48, height: 48 }}
      >
        {logo ? (
          <img
            src={logo}
            alt={`${exp.company} logo`}
            className="w-12 h-12 rounded-full object-contain border border-white/10 shadow-md"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{
              background: "linear-gradient(90deg,#2563eb,#8b5cf6)",
            }}
          >
            {getInitials(exp.company)}
          </div>
        )}
      </motion.div>

      {/* Work Card */}
      <div
        className={`w-full sm:w-1/2 ${
          fromLeft ? "pl-20 sm:pl-8 sm:order-2" : "pl-20 sm:pr-8 sm:order-1"
        }`}
      >
        <div className="bg-[#141414] p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/60 transition-all duration-300 shadow-lg">
          <h4 className="font-bold text-xl text-white mb-1">{exp.company}</h4>
          <p className="text-sm text-gray-400 mb-3">{exp.date}</p>
          <h5 className="text-lg font-semibold text-indigo-400 mb-3">
            {exp.title}
          </h5>
          <p className="text-gray-300">{exp.description}</p>
        </div>
      </div>

      {/* Testimonial Card */}
      <div
        className={`w-full sm:w-1/2 ${
          fromLeft ? "sm:order-1 sm:pr-8" : "sm:order-2 sm:pl-8"
        }`}
      >
        <motion.div
          className="bg-gradient-to-br from-[#071028] to-[#0b1220] p-6 rounded-2xl border border-gray-800 transition-all duration-300 shadow-lg h-full flex flex-col justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 hidden rounded-full bg-white/5 sm:flex items-center justify-center text-sm font-semibold text-white shrink-0">
              {testimonial?.name
                ? testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")
                : "A"}
            </div>
            <div>
              <p className="text-gray-300 italic leading-relaxed">
                <FaQuoteLeft className="inline mr-2 text-indigo-400" />
                {testimonial?.quote ||
                  "No testimonial available for this item."}
              </p>
              <div className="mt-3">
                <div className="font-semibold text-white">
                  {testimonial?.name || exp.company}
                </div>
                <div className="text-sm text-gray-400">
                  {testimonial?.role || ""}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-right">
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm transition"
            >
              Work with me ↗
            </a>
          </div>
        </motion.div>
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
      className="relative w-full py-[100px] px-[20px] sm:px-[40px] bg-[#0d0d0d] text-white flex flex-col items-center overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 capitalize">
          Professional work experience
        </h2>
        <p className="text-gray-400 text-lg">Work shown with client feedback</p>
      </div>

      <div className="relative w-full sm:w-4/5">
        {/* Visible on all screens now */}
        <div className="absolute left-[28px] sm:left-[50%] top-0 -translate-x-1/2 sm:translate-x-0 w-[2px] h-full bg-gray-800" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[28px] sm:left-[50%] top-0 -translate-x-1/2 sm:translate-x-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top"
        />

        {/* Experience items */}
        {experiences.map((exp, idx) => (
          <ExperienceItem
            key={idx}
            exp={exp}
            testimonial={testimonials[idx]}
            fromLeft={idx % 2 === 0}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}

