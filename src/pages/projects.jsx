import React from "react";
import { Helmet } from "react-helmet";
import ProjectComponent from "../components/projectComponent";
import CreativeProjects from "../sections/creativeProjects";

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
      <div className="py-[0px]">
        <ProjectComponent />
        <CreativeProjects />
      </div>
    </>
  );
}

export default Projects;
