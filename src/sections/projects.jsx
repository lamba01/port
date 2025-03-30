import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import cepherlogo from "../assets/cepher-logo.jpeg";
import commercelogo from "../assets/commerce-logo.png";
import { FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    image: project1,
    logo: cepherlogo,
    title: "Centre for Population and Health Research Website",
    description:
      "Independently developed the Centre for Population and Health Research website. A React and Contentful-powered website featuring a modern UI that helps the organization reach a wider audience and keep visitors informed about its activities.",
    technologies: ["React", "Tailwind CSS", "CMS", "Contentful", "Vite"],
    links: "https://www.cepher.org.ng",
  },
  {
    id: 2,
    image: project2,
    logo: commercelogo,
    title: "Nigerian Journal of Social Health",
    description:
      "Developed the official website for the Nigerian Journal of Social Health (NJSH) using Open Journal Systems (OJS). This platform streamlines the submission, review, and publication process for research articles, providing a seamless experience for authors, editors, and reviewers.",
    technologies: ["OJS", "PHP", "JavaScript", "CPanel"],
    links: "https://njsh.org.ng/index.php/njsh-journal",
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f5f5f5] py-[50px] px-[20px] sm:px-[40px] w-full text-start">
      <h2>Projects</h2>
      <p>Some of the noteworthy projects I have built</p>
      <main className="flex flex-wrap justify-center gap-10 my-6 text-start">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-4/5 sm:h-80 flex flex-col sm:flex-row gap-6 items-center p-5 bg-white shadow-xl"
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
                className="w-24 h-10"
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
        <button className="primary">view all projects</button>
      </main>
    </section>
  );
}
