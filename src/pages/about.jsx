import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../sections/aboutSection";

function About() {
  return (
    <>
      <Helmet>
        <title>About John – Freelance Full-Stack Web Developer in Lagos</title>
        <meta
          name="description"
          content="Learn more about John, a full-stack web developer in Lagos, Nigeria. I build eCommerce stores, booking platforms & custom websites using React & Node.js."
        />
      </Helmet>
      <div>
        <AboutSection />
      </div>
    </>
  );
}

export default About;
