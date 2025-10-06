import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../sections/hero";
// import HireMe from "../sections/hireMe";
import Stats from "../sections/Stats";
import Projects from "../components/projectComponent";
import Testimonial from "../sections/testimonial";
import CreativeProjects from "../sections/creativeProjects";
import Tools from "../sections/tools";
import Contact from "../sections/contact";
// import BlogPreview from "../sections/blogPreview";

function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          John Oluwafemi | Full-Stack Web Developer in Lagos, Nigeria
        </title>
        <meta name="description" content="" />
        I’m John Oluwafemi, a full-stack web developer based in Lagos, Nigeria.
        I help startups and businesses build responsive websites, eCommerce
        stores, and booking platforms that convert.
      </Helmet>

      <div>
        <Hero scrollToProjects={scrollToProjects} />
        <Stats />
        {/* <HireMe /> */}
        <div ref={projectsRef}>
          <Projects limit={2} />
        </div>
        <Testimonial />
        {/* <BlogPreview /> */}
        <CreativeProjects />
        <Contact />
        <Tools />
      </div>
    </>
  );
}

export default Home;


