import React, { useRef } from "react";
import Hero from "../sections/hero";
import Projects from "../components/projectComponent";
import Testimonial from "../sections/testimonial";
import CreativeProjects from "../sections/creativeProjects";
import Tools from "../sections/tools";

function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero scrollToProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <Projects limit={2} />
      </div>
      <Testimonial />
      <CreativeProjects />
      <Tools />
    </div>
  );
}

export default Home;
