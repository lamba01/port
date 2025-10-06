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
        <p className="text-gray-400">A few of my most recent works</p>
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
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <a
                  href={project.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm md:text-base font-medium hover:text-blue-400"
                >
                  View Project <FiExternalLink />
                </a>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                {project.description}
              </p>

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
