import React from "react";
import { Helmet } from "react-helmet";
import ProjectComponent from "../components/projectComponent";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | John Oluwafemi</title>
        <meta
          name="description"
          content="Explore real-world web development projects by John Oluwafemi. SaaS tools, eCommerce apps, business websites — built with React, Node.js, and more."
        />
      </Helmet>
      <div className="py-[50px]">
        <ProjectComponent />
      </div>
    </>
  );
}

export default Projects;
