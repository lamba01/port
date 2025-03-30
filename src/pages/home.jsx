import React from "react";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Testimonial from "../sections/testimonial";
import CreativeProjects from "../sections/creativeProjects";
import Tools from "../sections/tools";

function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Testimonial />
      <CreativeProjects />
      <Tools />
    </div>
  );
}

export default Home;
