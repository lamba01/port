import React from "react";
import Navbar from "../components/navBar";
import Hero from "../sections/hero";
import Projects from "../sections/projects";
import Testimonial from "../sections/testimonial";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Testimonial />
    </div>
  );
}

export default Home;
