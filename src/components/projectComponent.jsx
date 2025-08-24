import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import cepherlogo from "../assets/cepher-logo.jpeg";
// import rwatos from "../assets/rwatos2.png";
// import rwatoslogo from "../assets/rwatoslogo.png";
import mcken from "../assets/mcken.png";
import commercelogo from "../assets/commerce-logo.png";
import { FiExternalLink } from "react-icons/fi";
import shopease from "../assets/shopease.png";
import taskmanagement from "../assets/TaskM.webp";
import tasklogo from "../assets/logo-dark.svg";
import imagehub from "../assets/imagehubb.png";
import imagehublogo from "../assets/imagehub-logo.svg";
import glamhome from "../assets/glam-home.jpg";
import glamlogo from "../assets/glamheader-logo.png";

const projectsData = [
  {
    id: 1,
    image: project1,
    logo: cepherlogo,
    // title: "Centre for Population and Health Research Website",
    description: `I designed and developed the Centre for Population and Health Research website 
      to help them share updates, publish reports, and reach a wider audience. 
      It's easy to update and works smoothly on all devices.`,
    technologies: ["React", "Tailwind CSS", "CMS", "Contentful", "Vite"],
    links: "https://www.cepher.org.ng",
  },
  {
    id: 3,
    image: mcken,
    logo: "https://lashesbrowsbeautyy.com.ng/logo.jpg",
    description: `This is a complete booking platform for a beauty brand in Lagos. 
      Clients can easily book appointments, while the admin dashboard helps the business 
      owner manage bookings and track income. Built with Firebase Auth and MongoDB.`,
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Nodejs",
      "Express",
      "Firebase Auth",
    ],
    links: "https://lashesbrowsbeautyy.com.ng",
  },
  {
    id: 4,
    image: project2,
    logo: commercelogo,
    // title: "Nigerian Journal of Social Health",
    description: `Created an academic publishing site for the Nigerian Journal of Social Health using
      Open Journal Systems (OJS). It helps researchers easily submit and publish papers online,
      with tools for editors and reviewers to manage the process.`,
    technologies: ["OJS", "PHP", "JavaScript", "CPanel"],
    links: "https://njsh.org.ng/index.php/njsh-journal",
  },
  {
    id: 5,
    image: shopease,
    logo: commercelogo,
    description: `Developed a complete online shopping site, including user login, 
    product listings, cart system, and checkout simulation. Designed to be simple, clean, and 
    functional for both customers and business owners. Includes Paystack payment and order tracking.`,
    technologies: ["React", "Nodejs", "MySQL", "Express", "Ejs"],
    links: "https://commeercee.vercel.app",
  },
  {
    id: 6,
    image: taskmanagement,
    logo: tasklogo,
    description: `A responsive task management tool that lets users create, assign, and track tasks. 
    Features include real-time updates and user auth. 
    Great for teams looking to stay productive and organized.`,
    technologies: ["React", "CSS", "Nodejs", "MongoDB", "Express"],
    links: "https://task-managementapp-client.vercel.app",
  },
  {
    id: 7,
    image: imagehub,
    logo: imagehublogo,
    description: `Developed a sleek and responsive image search website powered by the Unsplash API. 
     Users can browse and download high-quality photos from the Unsplash database.
     It’s fast, mobile-friendly, and visually engaging.`,
    technologies: ["React", "Jest", "CSS", "Unsplash API", "Axios"],
    links: "https://imagehubb.vercel.app",
  },
  {
    id: 8,
    image: glamhome,
    logo: glamlogo,
    description: `Implemented a streamlined appointment booking platform that allows users to schedule appointments 
    seamlessly. The system includes a homepage for clients to book appointments and an admin dashboard where 
    business owners can manage, accept, or reject bookings in real time. It ensures
     a smooth scheduling process while keeping businesses in control.`,
    technologies: [
      "Nextjs",
      "Tailwind CSS",
      "MongoDB",
      "Nodejs",
      "Express",
      "Firebase Auth",
    ],
    links: "https://github.com/lamba01/Airbox-Asessment",
  },
];

export default function Projects({ limit }) {
  return (
    <section className="bg-[#f5f5f5] py-[70px] px-[20px] sm:px-[40px] text-center overflow-hidden">
      <h2>{limit ? "Projects" : "Explore my work👀"}</h2>
      <p>Some of the noteworthy projects I have built</p>
      <main className="flex flex-wrap justify-center gap-20 my-6 text-start">
        {projectsData.slice(0, limit).map((project, index) => (
          <div
            key={project.id}
            className="w-full sm:w-full sm:h-full flex flex-col sm:flex-row gap-6 items-center p-5 bg-white shadow-xl"
            // data-aos="fade-up"
            data-aos={index % 2 === 0 ? "fade-up-right" : "fade-up-left"}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full sm:w-[40%] h-64 rounded-xl"
            />
            <div className="flex flex-col justify-around w-full h-full">
              <img
                src={project.logo}
                alt="Project logo"
                className="w-24 h-12"
              />
              <p className="text-sm font-bold py-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 py-2">
                {project.technologies.map((tech, index) => (
                  <p key={index} className="px-4 py-1 bg-gray-200 rounded-md">
                    {tech}
                  </p>
                ))}
              </div>
              <a
                className="flex flex-row items-center gap-2 py-2 text-blue-600"
                href={project.links}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
        {limit && (
          <Link to={`/projects`}>
            <button
              className="bg-gradient-to-tr from-blue-700 to-blue-900 text-white cursor-pointer py-3 px-8 sm:w-[250px] w-[90vw] hover:bg-[#333333]"
              style={{
                backgroundImage:
                  "linear-gradient(to top right, #2563eb, #1e3a8a)",
                backgroundColor: "#2563eb", // fallback solid color
              }}
            >
              view all projects{" "}
            </button>
          </Link>
        )}
      </main>
    </section>
  );
}
