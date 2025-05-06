import React from "react";
import { Helmet } from "react-helmet";
import AboutSection from "../sections/aboutSection";

function About() {
  return (
    <>
      <Helmet>
        <title>About | John Oluwafemi</title>
        <meta
          name="description"
          content="Learn more about John Oluwafemi, a full-stack web developer helping startups go digital."
        />
      </Helmet>
      <div>
        <AboutSection />
      </div>
    </>
  );
}

export default About;
