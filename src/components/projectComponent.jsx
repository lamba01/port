import React from "react";
import { motion } from "motion/react";
import { FiExternalLink } from "react-icons/fi";
import projectsData from "../data/projectsData";

export default function Projects() {
  const featuredProjects = projectsData.slice(0, 4); // show 4 projects only

  return (
    <section className="py-20 bg-[#0a0a0a] text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Featured Projects
        </h2>
        <p className="text-gray-400">
          Websites and systems built for real business impact
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 px-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#111] rounded-2xl overflow-hidden shadow-lg max-w-sm md:max-w-md flex flex-col"
          >
            <div className="relative group">
              {/* Image */}
              <a
                href={project.caseStudyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 sm:object-cover object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            </div>

            {/* Description + Tags */}
            <div className="px-2 py-4 flex flex-col justify-between flex-1">
              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                {project.description}
              </p>
              <a href={project.caseStudyLink}>
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-xl transition-shadow w-fit px-5 py-3 mb-3 rounded-2xl cursor-pointer capitalize">
                  {" "}
                  View case study
                </button>
              </a>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1c1c1c] text-gray-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
