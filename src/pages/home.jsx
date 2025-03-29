import React from "react";
import Navbar from "../components/navBar";
import Hero from "../sections/hero";
import Projects from "../sections/projects";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default Home;
