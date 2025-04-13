import React, { useRef, useEffect } from "react";
import Hero from "../sections/hero";
import HireMe from "../sections/hireMe";
import Projects from "../components/projectComponent";
import Testimonial from "../sections/testimonial";
import CreativeProjects from "../sections/creativeProjects";
import Tools from "../sections/tools";
import Contact from "../sections/contact";

function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <Hero scrollToProjects={scrollToProjects} />
      <HireMe />
      <div ref={projectsRef}>
        <Projects limit={2} />
      </div>
      <Testimonial />
      <CreativeProjects />
      <Contact />
      <Tools />
    </div>
  );
}

export default Home;
