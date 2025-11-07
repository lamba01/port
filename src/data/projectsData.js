// import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import cepherlogo from "../assets/cepher-logo.jpeg";
// import rwatos from "../assets/rwatos2.png";
// import rwatoslogo from "../assets/rwatoslogo.png";
import mcken from "../assets/mcken.png";
import commercelogo from "../assets/commerce-logo.png";
import { FiExternalLink } from "react-icons/fi";
import glamlogo from "../assets/glamheader-logo.png";
import sblofa from "../assets/sblofa-logo.webp";
import { title } from "framer-motion/client";

const projectsData = [
  {
    id: 1,
    title: "Centre for Population and Health Research Website",
    image: cepherlogo,
    logo: cepherlogo,
    // title: "Centre for Population and Health Research Website",
    description: `Modern nonprofit website to increase credibility and public awareness.`,
    technologies: ["React", "Tailwind CSS", "CMS", "Contentful", "Vite"],
    caseStudyLink: "/case-studies/cepher",
  },
  {
    id: 2,
    image: mcken,
    title: "Mcken Beauty Booking Platform",
    logo: "https://lashesbrowsbeautyy.com.ng/logo.jpg",
    description: `Automated booking system with calendar scheduling to eliminate call overload and prevent appointment conflicts.`,
    technologies: [
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Nodejs",
      "Express",
      "Firebase Auth",
    ],
    caseStudyLink: "/case-studies/mcken-booking",
  },
  {
    id: 3,
    title: "Nigerian Journal of Social Health",
    image: project2,
    logo: commercelogo,
    // title: "Nigerian Journal of Social Health",
    description: `Built a complete online journal system with submission workflow, peer review, and DOI integration.`,
    technologies: ["OJS", "PHP", "JavaScript", "CPanel"],
    caseStudyLink: "/case-studies/njsh",
  },
  {
    id: 4,
    title: "SB Lofa Driving School",
    image: sblofa, // thumbnail / hero image
    logo: glamlogo, // optional small brand logo (can remove if not needed)
    description:
      "Increased visibility & student bookings through Local SEO and Google Business optimization.",
    technologies: [
      "Local Citation",
      "Google Analytics",
      "Keyword Research",
      "Google Business Profile",
      "Search Console",
    ],
    caseStudyLink: "/case-studies/sb-lofa", // internal route
  },
];

export default projectsData;
