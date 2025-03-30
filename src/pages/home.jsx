import React from "react";
import Hero from "../sections/hero";
import Projects from "../components/projectComponent";
import Testimonial from "../sections/testimonial";
import CreativeProjects from "../sections/creativeProjects";
import Tools from "../sections/tools";

function Home() {
  return (
    <div>
      <Hero />
      <Projects limit={1} />
      <Testimonial />
      <CreativeProjects />
      <Tools />
    </div>
  );
}

export default Home;
