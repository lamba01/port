import React from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Contact from "../sections/contact";
import Testimonial from "../sections/testimonial";

export default function NGOLandingPage() {
  return (
    <>
      <Helmet>
        <title>NGO & Journal Website Developer – John Oluwafemi</title>
        <meta
          name="description"
          content="Professional, mobile-friendly websites for NGOs and academic journals. Built fast, affordably, and tailored to your mission."
        />
        <meta
          name="keywords"
          content="NGO website, journal website, non-profit website, affordable NGO websites, academic journal web design, fast NGO web development"
        />
        <meta name="author" content="John Oluwafemi" />
        <meta
          property="og:title"
          content="NGO & Journal Website Developer – John Oluwafemi"
        />
        <meta
          property="og:description"
          content="Professional, mobile-friendly websites for NGOs and academic journals. Built fast, affordably, and tailored to your mission."
        />
      </Helmet>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center px-4 py-10">
        <div className="max-w-5xl w-full mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            Websites that Make Non-profits Look Credible — Without Breaking the
            Bank
          </h1>

          <p className="text-lg text-center mb-8">
            You need more than just a pretty website — you need one that makes
            your organization look credible, works on all devices, and is easy
            to update.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">
              ✅ Clean, modern design tailored to NGOs or academic journals
            </li>
            <li className="flex items-start gap-2">
              ✅ Mobile-friendly & easy to manage
            </li>
            <li className="flex items-start gap-2">
              ✅ Add blog/news posts without needing a developer
            </li>
            <li className="flex items-start gap-2">
              ✅ Contact forms, WhatsApp chat, donation options
            </li>
            <li className="flex items-start gap-2">
              ✅ Up and running in 5–10 days
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">What Clients Say</h2>
          <div className="bg-gray-50 p-4 rounded-md shadow mb-6">
            <p className="italic text-gray-700">
              “John did an excellent job developing our website. The site has
              greatly improved our online presence, making it easier for people
              to learn about our work and stay updated. Thanks to his work, our
              visibility on search engines has improved significantly. I highly
              recommend John for anyone looking for a well-built and effective
              website.”
            </p>
            <p className="mt-2 font-semibold text-sm text-right">
              — Israel Orubuloye, CEO, CEPHER
            </p>
          </div>

          <Contact />

          <div className="text-center my-6 text-gray-500">— or —</div>

          <div className="text-center mb-10">
            <a
              href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20need%20an%20NGO%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-[#333333] text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Recent Work</h2>
          <ul className="space-y-4 mb-8">
            <li>
              <strong>
                <a
                  href="http://cepher.org.ng"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Centre for Population and Health Research
                </a>
              </strong>{" "}
              – NGO focused on population and health research
            </li>
            <li>
              <strong>
                <a
                  href="http://njsh.org.ng"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Nigerian Journal of Social Health
                </a>
              </strong>{" "}
              – Peer-reviewed academic journal
            </li>
            <li>
              <strong>
                <a
                  href="https://commeercee.vercel.app/"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  E-Commerce App
                </a>
              </strong>{" "}
              – Full-stack e-commerce application built with JavaScript and
              Tailwind CSS
            </li>
          </ul>

          <hr className="my-8" />

          <h2 className="text-2xl font-semibold mb-4">Why Work With Me?</h2>
          <p className="mb-6">
            I’m <strong>a developer</strong> who helps nonprofits, research
            groups, and academic journals build websites that work. I care about
            simplicity, clarity, and helping mission-driven teams do more online
            — with less stress.
          </p>

          <div className="text-center">
            <a
              href="https://johncodes.xyz"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Visit My Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
