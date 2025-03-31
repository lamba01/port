import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import cepherlogo from "../assets/cepher-logo.jpeg";
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
    description:
      "Independently developed the Centre for Population and Health Research website. A React and Contentful-powered website featuring a modern UI that helps the organization reach a wider audience and keep visitors informed about its activities.",
    technologies: ["React", "Tailwind CSS", "CMS", "Contentful", "Vite"],
    links: "https://www.cepher.org.ng",
  },
  {
    id: 2,
    image: project2,
    logo: commercelogo,
    // title: "Nigerian Journal of Social Health",
    description:
      "Developed the official website for the Nigerian Journal of Social Health (NJSH) using Open Journal Systems (OJS). This platform streamlines the submission, review, and publication process for research articles, providing a seamless experience for authors, editors, and reviewers.",
    technologies: ["OJS", "PHP", "JavaScript", "CPanel"],
    links: "https://njsh.org.ng/index.php/njsh-journal",
  },
  {
    id: 3,
    image: shopease,
    logo: commercelogo,
    description: `Designed and developed a full-stack eCommerce platform with a seamless shopping experience. 
    The site features user authentication, product management, cart functionality, and a simulated checkout 
    process. Built with Javascript and its libraries, it ensures smooth navigation, 
    secure transactions, and an intuitive UI for both customers and administrators.`,
    technologies: ["React", "Nodejs", "MySQL", "Express", "Ejs"],
    links: "https://commeercee.vercel.app",
  },
  {
    id: 4,
    image: taskmanagement,
    logo: tasklogo,
    description: `Built a full-stack task management application with real-time updates, user authentication, 
    and intuitive task organization. This app allows users to create, assign, and track tasks efficiently, 
    ensuring better productivity and collaboration. Developed using the MERN stack, it offers a seamless and 
    responsive experience across devices.`,
    technologies: ["React", "CSS", "Nodejs", "MongoDB", "Express"],
    links: "https://task-managementapp-client.vercel.app",
  },
  {
    id: 5,
    image: imagehub,
    logo: imagehublogo,
    description: `Developed a sleek and responsive image search website powered by the Unsplash API. 
    Users can search for high-quality images, preview results, and download their favorites seamlessly. 
    Designed with a clean UI and fast performance to enhance the browsing experience.`,
    technologies: ["React", "Jest", "CSS", "Unsplash API", "Axios"],
    links: "https://imagehubb.vercel.app",
  },
  {
    id: 6,
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
    <section className="bg-[#f5f5f5] py-[50px] px-[20px] sm:px-[40px] w-full text-start">
      <h2>{limit ? "Projects" : "Explore my work👀"}</h2>
      <p>Some of the noteworthy projects I have built</p>
      <main className="flex flex-wrap justify-center gap-10 my-6 text-start">
        {projectsData.slice(0, limit).map((project, index) => (
          <div
            key={project.id}
            className="w-full sm:w-4/5 sm:h-80 flex flex-col sm:flex-row gap-6 items-center p-5 bg-white shadow-xl"
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
                className="w-30 h-10"
              />
              <p className="text-sm font-bold">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <p key={index} className="px-4 py-1 bg-gray-200 rounded-md">
                    {tech}
                  </p>
                ))}
              </div>
              <a href={project.links} target="_blank" rel="noopener noreferrer">
                <FiExternalLink />
              </a>
            </div>
          </div>
        ))}
        {limit && (
          <Link to={`/projects`}>
            <button className="primary">view all projects </button>
          </Link>
        )}
      </main>
    </section>
  );
}
