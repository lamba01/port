import React from "react";
import img1 from "../assets/img1.jpeg";
// import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/IMG_7612.jpeg";

export default function AboutSection() {
  return (
    <section className="w-full py-[100px] px-[20px] sm:px-[60px] flex flex-col items-center gap-20 bg-[#0a0a0a] text-gray-200">
      {/* Intro */}
      <div
        className="flex flex-col justify-center gap-5 w-full sm:w-4/5 text-center sm:text-left"
        data-aos="fade-up"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold text-white bg-clip-text text-center">
          About John Oluwafemi
        </h1>

        <h4 className="text-base sm:text-xl leading-relaxed text-gray-300">
          I'm a Full-Stack Developer based in Lagos, passionate about building
          clean, easy-to-use web applications. I primarily work with React,
          Node.js, and Tailwind CSS to create websites that look great and
          perform seamlessly.
        </h4>

        <h4 className="text-base sm:text-xl leading-relaxed text-gray-300">
          Currently, I’m focused on helping businesses go digital with eCommerce
          stores and booking platforms. I also serve as a moderator for the{" "}
          <span className="font-semibold text-[#3b82f6]">
            <a
              href="https://njsh.org.ng/index.php/njsh-journal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nigerian Journal of Social Health
            </a>
          </span>
          , a platform I built using PHP-based software to simplify online
          research publishing.
        </h4>

        <h4 className="text-base sm:text-xl leading-relaxed text-gray-300">
          When I’m not coding, I’m exploring new tools or improving my skills to
          stay sharp and inspired.
        </h4>

        <h4 className="text-base sm:text-xl font-bold text-gray-100">
          If you’re looking for someone who can bring your idea to life — from
          online stores to booking systems — let’s connect!
        </h4>
      </div>

      {/* Workspace */}
      <div className="w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10  text-white bg-clip-text">
          My Workspace ✨
        </h2>

        <main className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            src={img1}
            className="sm:w-[30%] rounded-2xl shadow-lg shadow-blue-900/40"
            alt="Workspace image 1"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src={img4}
            className="sm:w-[30%] rounded-2xl shadow-lg shadow-blue-900/40"
            alt="Workspace image 2"
          />
          <img
            data-aos="fade-up"
            data-aos-delay="300"
            src={img3}
            className="sm:w-[30%] rounded-2xl shadow-lg shadow-blue-900/40"
            alt="Workspace image 3"
          />
        </main>
      </div>
    </section>
  );
}
