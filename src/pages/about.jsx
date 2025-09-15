import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../sections/aboutSection";

function About() {
  return (
    <>
      <Helmet>
        <title>About John Oluwafemi – Freelance Full-Stack Web Developer</title>
        <meta
          name="description"
          content="I build eCommerce stores, booking platforms & custom websites using React & Node.js."
        />
      </Helmet>
      <div>
        <AboutSection />
      </div>
    </>
  );
}

export default About;
