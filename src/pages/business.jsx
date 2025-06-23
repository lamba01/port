import React from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Contact from "../sections/contact";
import Blog from "../sections/blogPreview";
import { FaQuoteLeft } from "react-icons/fa6";

export default function BusinessLandingPage() {
  return (
    <>
      <Helmet>
        <title>eCommerce & Booking Website Developer – John Oluwafemi</title>
        <meta
          name="description"
          content="Sell more and book faster with a conversion-optimized website — clean, mobile-ready, and built to grow your business."
        />
        <meta
          name="keywords"
          content="ecommerce website, booking website, business website, online store, appointment website developer"
        />
        <meta name="author" content="John Oluwafemi" />
        <meta
          property="og:title"
          content="eCommerce & Booking Website Developer – John Oluwafemi"
        />
        <meta
          property="og:description"
          content="Conversion-focused websites for eCommerce and appointment-based businesses. Fast delivery, mobile-ready, and easy to manage."
        />
      </Helmet>

      <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center px-4 py-10">
        <div className="max-w-5xl w-full mt-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Websites That Bring You Customers — Not Just Clicks
          </h1>

          <p className="text-lg text-center mb-6 sm:px-24">
            I help small businesses launch professional, stress-free websites
            that show up on Google, build trust fast, and actually turn visitors
            into <strong>paying customers</strong>.
          </p>

          {/* FAST CTA */}
          <div className="text-center mb-14">
            <a
              href="#contact"
              // href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20need%20a%20website%20for%20my%20business"

              className="hover:opacity-80 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              style={{
                backgroundImage: "linear-gradient(to top, #2563eb, #1e3a8a)",
                backgroundColor: "#2563eb", // fallback solid color
              }}
            >
              💬 Start Your Website
            </a>
          </div>

          {/* VALUE BULLETS */}
          <ul className="space-y-5 mb-8 text-base">
            <li>
              🛒 Modern eCommerce or booking system tailored to your business
            </li>
            <li>📱 Mobile-friendly and lightning-fast performance</li>
            <li>
              🧑‍💻 Admin dashboard to manage your products, bookings, or services
            </li>
            <li>
              💬 Built-in WhatsApp chat, contact forms & payment integration
            </li>
            <li>🚀 Delivered and live in 10-15 days</li>
          </ul>

          <div className="text-sm text-gray-500 text-center mb-12">
            ✅ Trusted by growing businesses | 🚀 5+ years experience | 💡
            Focused on results & clarity
          </div>

          {/* TESTIMONIAL */}
          <h2 className="text-2xl font-semibold mb-4">Client Feedback</h2>
          <div
            className="p-4 rounded-md shadow mb-12"
            style={{
              backgroundImage: "linear-gradient(to top left, #2563eb, #1e3a8a)",
              backgroundColor: "#2563eb", // fallback solid color
            }}
          >
            <span className="italic font-semibold text-white text-lg">
              <FaQuoteLeft className="inline mr-2" />
              John did an excellent job developing our website. The site has
              greatly improved our online presence, making it easier for people
              to learn about our work and stay updated. Thanks to his work, our
              visibility on search engines has improved significantly.
            </span>
            <span className="mt-2 font-semibold text-sm text-right block text-white/85">
              — Israel Orubuloye, CEO, CEPHER
            </span>
          </div>

          {/* CONTACT FORM */}
          <Contact />

          <hr className="my-8" />

          {/* PORTFOLIO */}
          <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
          <ul className="space-y-4 mb-8">
            <li>
              <strong>
                <a
                  href="https://commeercee.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  ShopEase
                </a>
              </strong>{" "}
              – Online clothing store with full shopping cart and payment
              integration
            </li>
            <li>
              <strong>
                <a
                  href="https://airbox-asessment.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Glam Beauty Studio
                </a>
              </strong>{" "}
              – Booking platform for small service-based businesses
            </li>
            <li>
              <strong>
                <a
                  href="https://www.cepher.org.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Centre for Population and Health Research
                </a>
              </strong>{" "}
              – Informational website for a health research organization
            </li>
            <li>
              <strong>
                <a
                  href="https://skewings.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Skewings Landing Page
                </a>
              </strong>{" "}
              – Fully responsive, modern travel landing page designed to attract
              and convert visitors interested in vacation planning and tour
              packages.
            </li>
          </ul>

          <hr className="my-8" />

          {/* ABOUT YOU */}
          <div
            className="px-3 py-8 text-white"
            style={{
              backgroundImage: "linear-gradient(to top, #2563eb, #1e3a8a)",
              backgroundColor: "#2563eb", // fallback solid color
            }}
          >
            <h1 className="text-2xl font-semibold mb-4">Why Work With Me?</h1>
            <span className="mb-6 block">
              I’m <strong>John Oluwafemi</strong>, a full-stack web developer
              helping business owners turn visitors into customers. I focus on
              speed, clarity, and making your site do more than just look good —
              I make it work for you.{" "}
              <span className="block mt-2 font-bold">
                ⚡️ Only 2 project slots available this month
              </span>
            </span>

            <div className="text-center">
              <a
                href="https://johncodes.xyz"
                className="bg-white text-black px-6 py-3 rounded-lg hover:bg-white/80 transition"
              >
                View My Portfolio
              </a>
            </div>
          </div>
          <p className="text-center text-lg text-gray-500 mb-6">
            Built with: React • Tailwind CSS
          </p>
          <Blog />
          <h2 className="text-xl font-semibold mb-4">FAQs</h2>
          <ul className="space-y-4 text-base text-gray-700 mb-8">
            <li>
              <strong>How long does it take?</strong> <br />
              Most sites are delivered and live in 10–15 days depending on your
              content readiness.
            </li>
            <li>
              <strong>Can I update the site myself later?</strong> <br />
              Yes — you'll get an admin panel and short training on how to
              update products or content.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
