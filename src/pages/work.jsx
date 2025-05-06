import React from "react";
import { Helmet } from "react-helmet";
import Experience from "../sections/workExperience";

function Work() {
  return (
    <div>
      <Helmet>
        <title>Work Experience | John Oluwafemi</title>
        <meta
          name="description"
          content="See the professional journey of John Oluwafemi — full-stack developer with experience delivering digital products for startups and businesses."
        />
      </Helmet>

      <Experience />
    </div>
  );
}

export default Work;
