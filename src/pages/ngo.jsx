import React from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Contact from "../sections/contact";

export default function NGOLandingPage() {
  return (
    <>
      <Helmet>
        <title>NGO & Academic Journal Website Developer</title>
        <meta
          name="description"
          content="Get a clean, mobile-friendly, professional website for your NGO or academic journal — fast, affordable, and built to inspire trust."
        />
        <meta
          name="keywords"
          content="NGO website, journal website, non-profit web design, fast NGO websites, affordable nonprofit websites, academic journal developer web developer, professional NGO website, custom journal solutions, mobile-friendly NGO sites, SEO optimized nonprofit websites, NGO landing page, journal landing page"
        />
        <meta name="author" content="John Oluwafemi" />
        <meta property="og:title" content="NGO & Journal Website Developer" />
        <meta
          property="og:description"
          content="Clean, modern websites for NGOs and academic journals. Fast delivery, mobile-ready, and easy to manage."
        />
      </Helmet>

      <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center px-4 py-10">
        <div className="max-w-5xl w-full mt-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Credible, Affordable Websites for NGOs — In Just 10 Days
          </h1>

          <p className="text-lg text-center mb-6">
            You don’t just need a pretty site. You need one that earns trust,
            works on every device, and grows with your mission — without the
            stress of DIY builders.
          </p>

          {/* FAST CTA */}
          <div className="text-center mb-10">
            <a
              href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20need%20an%20NGO%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-[#333333] text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              💬 Start Your Website on WhatsApp
            </a>
          </div>

          {/* VALUE BULLETS */}
          <ul className="space-y-3 mb-8 text-base">
            <li>
              🧩 Clean, modern design tailored to NGOs or academic journals
            </li>
            <li>📱 Mobile-friendly and easy to manage</li>
            <li>📰 Add blog/news updates without a developer</li>
            <li>💬 Includes contact forms, WhatsApp chat & donation tools</li>
            <li>🚀 Delivered and live in 5–10 days</li>
          </ul>

          <div className="text-sm text-gray-500 text-center mb-12">
            ✅ Trusted by mission-driven teams | 🚀 5+ years experience | 💡
            Focused on clarity & impact
          </div>

          {/* TESTIMONIAL */}
          <h2 className="text-2xl font-semibold mb-4">Client Feedback</h2>
          <div className="bg-gray-50 p-4 rounded-md shadow mb-10">
            <p className="italic text-gray-700">
              “John did an excellent job developing our website. The site has
              greatly improved our online presence, making it easier for people
              to learn about our work and stay updated. Thanks to his work, our
              visibility on search engines has improved significantly.”
            </p>
            <p className="mt-2 font-semibold text-sm text-right">
              — Israel Orubuloye, CEO, CEPHER
            </p>
          </div>

          {/* CONTACT FORM */}
          <Contact />

          <div className="text-center my-6 text-gray-500">— or —</div>

          <div className="text-center mb-10">
            <a
              href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20need%20an%20NGO%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-[#333333] text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              🚀 Start Your Project on WhatsApp
            </a>
          </div>

          <hr className="my-8" />

          {/* PORTFOLIO */}
          <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
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
              – Peer-reviewed academic journal website
            </li>
          </ul>

          <hr className="my-8" />

          {/* ABOUT YOU */}
          <h2 className="text-2xl font-semibold mb-4">Why Work With Me?</h2>
          <p className="mb-6">
            I’m <strong>John Oluwafemi</strong>, a web developer helping
            nonprofits and academic teams build websites that are fast,
            functional, and professional. I care about clarity, usability, and
            making your mission look as impactful as it truly is.
          </p>

          <div className="text-center">
            <a
              href="https://johncodes.xyz"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              View My Portfolio
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
