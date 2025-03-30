import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

export default function AboutSection() {
  return (
    <section className="py-[100px] w-full flex flex-col gap-20 items-center justify-center px-[20px] sm:px-[40px]">
      <div className="flex flex-col justify-center gap-3 w-full sm:w-4/5">
        <h4 className="text-sm sm:text-xl text-black">
          I'm a <span className="font-semibold">Full-Stack Developer</span>{" "}
          passionate about building scalable and intuitive web applications.
          With expertise in{" "}
          <span className="font-semibold">
            React, Node.js, and Tailwind CSS,
          </span>{" "}
          I craft smooth user experiences and powerful backend systems.
        </h4>
        <h4 className="text-sm sm:text-xl text-black">
          Right now, I&apos;m focused on{" "}
          <span className="font-semibold">
            building SaaS products and AI-powered solutions
          </span>{" "}
          , while also helping businesses improve their online presence through
          eCommerce and appointment-based platforms .{" "}
          <span className="font-semibold">
            I also serve as a moderator for the Nigerian Journal of Social
            Health website,
          </span>{" "}
          a platform I built myself using Open Journal Systems (OJS) to
          streamline research publication and accessibility.
        </h4>
        <h4 className="text-sm sm:text-xl text-black">
          When I&apos;m not coding, I&apos;m exploring new technologies and
          refining my skills in Web development to push the boundaries of
          what&apos;s possible. 🚀
        </h4>
      </div>
      <main className="flex flex-col sm:flex-row gap-5 justify-center w-full">
        <img
          data-aos="fade-up"
          data-aos-delay="100"
          src={img1}
          className="sm:w-[30%] rounded-xl "
          alt="workspace"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="200"
          src={img4}
          className="sm:w-[30%] rounded-xl "
          alt="twitter profile"
        />
        <img
          data-aos="fade-up"
          data-aos-delay="300"
          src={img3}
          className="sm:w-[30%] rounded-xl"
          alt="workspace"
        />
      </main>
      <aside>
        <img
          data-aos="fade-up"
          src={img2}
          className="h-auto md:h-screen"
          alt="linkedin"
        />
      </aside>
    </section>
  );
}
