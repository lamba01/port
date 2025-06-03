import React from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Contact from "../sections/contact";

export default function NGOLandingPage() {
  return (
    <>
      <Helmet>
        <title>NGO Website Developer – John Oluwafemi</title>
        <meta
          name="description"
          content="Affordable, fast, mobile-friendly websites for NGOs. Let's build your organization's site today."
        />
        <meta
          name="keywords"
          content="NGO website, non-profit website, affordable NGO websites, mobile-friendly NGO sites, fast NGO web development"
        />
        <meta name="author" content="John Oluwafemi" />
        <meta
          property="og:title"
          content="NGO Website Developer – John Oluwafemi"
        />
        <meta
          property="og:description"
          content="Affordable, fast, mobile-friendly websites for NGOs. Let's build your organization's site today."
        />
      </Helmet>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center px-4 py-10">
        <div className="max-w-3xl w-full mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            👋 Need a Website for Your Organization?
          </h1>
          <p className="text-lg text-center mb-8">
            I build clean, mobile-friendly websites for NGOs and small
            organizations — fast, affordable, and tailored to your mission.
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2">✅ Real NGO experience</li>
            <li className="flex items-start gap-2">
              ✅ 3–5 pages + contact form + news/blog section
            </li>
            <li className="flex items-start gap-2">
              ✅ Free consultation to get started
            </li>
          </ul>

          <Contact />
          {/* OR divider */}
          <div className="text-center my-6 text-gray-500">— or —</div>

          <div className="text-center mb-10">
            <a
              href="https://wa.me/234XXXXXXXXXX?text=Hi%20John%2C%20I%20need%20an%20NGO%20website"
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

          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="mb-6">
            Hi, I’m <strong>John Oluwafemi</strong> — a student developer
            passionate about helping mission-driven organizations get online.
            I’ve worked with real NGOs to build fast, responsive websites that
            look good and perform even better.
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
