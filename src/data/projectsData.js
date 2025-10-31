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
import sblofa from "../assets/sblofa-logo.webp";

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
    id: 2,
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
    id: 3,
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
    id: 4,
    image: sblofa,
    logo: glamlogo,
    description: `I optimized their Google Business Profile, completed on-site SEO improvements, 
    created multiple local directory listings, and built trusted backlinks to boost local search rankings. 
    This helped the business show up higher on Google and attract more student inquiries.`,
    technologies: [
      "Local Citation",
      "Google Analytics",
      "Keyword Research Tools",
      "Google Business Profile",
      "Google Search Console",
    ],
    links: "https://www.sblofadrivingschool.com",
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

export default projectsData;
