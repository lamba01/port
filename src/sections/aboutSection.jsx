import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

export default function AboutSection() {
  return (
    <section className="py-[100px] w-full flex flex-col gap-20 items-center justify-center px-[20px] sm:px-[40px]">
      <div className="flex flex-col justify-center gap-3 w-full sm:w-4/5">
        <h1 className="text-2xl text-center">About John Oluwafemi</h1>
        <h4 className="text-sm sm:text-xl text-black">
          I'm a <span className="font-semibold">Full-Stack Developer</span> who
          enjoys building clean, easy-to-use web applications. I work mostly
          with{" "}
          <span className="font-semibold">
            React, Node.js, and Tailwind CSS,
          </span>{" "}
          and I build websites that not only look good but work smoothly behind
          the scenes.
        </h4>
        <h4 className="text-sm sm:text-xl text-black">
          Right now, I&apos;m focused on{" "}
          <span className="font-semibold">
            helping businesses get online with eCommerce stores and booking
            platforms.
          </span>{" "}
          <span className="font-semibold">
            I also serve as a moderator for the Nigerian Journal of Social
            Health website,
          </span>{" "}
          a platform I built myself using Open Journal Systems (OJS) to make it
          easier for researchers to submit and publish their work online.
        </h4>
        <h4 className="text-sm sm:text-xl text-black">
          When I&apos;m not coding, I&apos;m usually messing around with new
          tech or brushing up on web dev stuff to keep getting better.
        </h4>
        <h4 className="text-sm sm:text-xl text-black font-bold">
          If you're looking for someone who can bring your idea to life —
          whether it's an online store, a booking system, or a custom website —
          let's connect!
        </h4>
      </div>
      <h2>my workspace</h2>
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
