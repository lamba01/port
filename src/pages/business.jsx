import React from "react";
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import Contact from "../sections/contact";
import Blog from "../sections/blogPreview";
import { FaQuoteLeft } from "react-icons/fa6";
import BusinessNav from "../components/businessNav";

export default function BusinessLandingPage() {
  return (
    <>
      <BusinessNav />
      <Helmet>
        <title>eCommerce & Booking Website Developer – John Oluwafemi</title>
        <meta
          name="description"
          content="Sell more and book faster with a conversion-optimized website — clean, mobile-ready, and built to grow your business."
        />
        <meta
          name="keywords"
          content="ecommerce website, booking website, business website, online store, appointment website developer website design, fast ecommerce websites, affordable booking websites, small business web design, web developer, free website consultation, professional website design, custom ecommerce solutions, booking system integration, mobile-friendly websites, SEO optimized websites, business landing page fullstack developer, full-stack web development, online booking system, eCommerce solutions, business websites, web design for small businesses, fast delivery websites, professional web design services"
        />
        <meta name="author" content="John Oluwafemi" />
        <meta
          property="og:title"
          content="eCommerce & Booking Website Developer – John Oluwafemi"
        />
        <meta
          property="og:description"
          content="Websites for businesses. Fast delivery, mobile-ready, and easy to manage."
        />
      </Helmet>

      <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center px-2 sm:px-4 py-10">
        <div className="max-w-5xl w-full mt-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Websites That Bring You Customers — Not Just Clicks
          </h1>

          <p className="text-lg text-center mb-6 sm:px-24">
            I help businesses launch professional, stress-free websites that
            show up on Google, build trust fast, and actually turn visitors into{" "}
            <strong>paying customers</strong>.
          </p>

          {/* FAST CTA */}
          <div className="text-center mb-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              // href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20need%20a%20website%20for%20my%20business"

              className="hover:opacity-80 text-white px-10 py-3 rounded-lg text-lg font-semibold transition"
              style={{
                backgroundImage: "linear-gradient(to top, #2563eb, #1e3a8a)",
                backgroundColor: "#2563eb", // fallback solid color
              }}
            >
              Start Your Website
            </a>
            <a
              href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20need%20a%20website%20for%20my%20business"
              className="hover:opacity-80 border border-blue-700 text-blue-700 px-10 py-3 rounded-lg text-lg font-semibold transition"
              // style={{
              //   backgroundImage: "linear-gradient(to top, #2563eb, #1e3a8a)",
              //   backgroundColor: "#2563eb", // fallback solid color
              // }}
            >
              💬 Chat on whatsapp
            </a>
          </div>

          {/* VALUE BULLETS */}
          <ul className="space-y-5 mb-8 text-base font-semibold">
            <li>
              🛒 Modern eCommerce/Online store or booking system tailored to
              your business
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

          <div className="text-sm text-gray-500 text-center mb-12 font-semibold">
            ✅ Trusted by growing businesses in UK | 🚀 5+ years experience | 💡
            Focused on results & clarity
          </div>
          {/* TESTIMONIALS */}
          <h2 className="text-2xl font-semibold mb-4">
            what business owners say
          </h2>
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {/* CEPHER */}
            <div
              className="p-4 rounded-md shadow text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #2563eb, #1e3a8a)",
              }}
              data-aos="flip-right"
              data-aos-delay="500"
            >
              <span className="italic font-medium text-lg text-white/85">
                <FaQuoteLeft className="inline mr-2" />
                John did an excellent job developing our website. The site has
                greatly improved our online presence, making it easier for
                people to learn about our work and stay updated.
              </span>
              <span className="mt-2 font-semibold text-sm block text-white/60">
                — Israel Orubuloye, CEO, CEPHER
              </span>
            </div>

            {/* RWATOS */}
            <div
              className="p-4 rounded-md shadow text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #2563eb, #1e3a8a)",
              }}
              data-aos="flip-right"
              data-aos-delay="500"
            >
              <span className="italic font-medium text-lg text-white/85">
                <FaQuoteLeft className="inline mr-2" />
                Working with John was a smooth experience. He understood our
                business needs and built a site that looks professional and
                converts well. We've seen more inquiries since launch.
              </span>
              <span className="mt-2 font-semibold text-sm block text-white/60">
                — Francis, Director, Rwatos Ltd
              </span>
            </div>

            {/* MCKEN BEAUTY */}
            <div
              className="p-4 rounded-md shadow text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to top left, #2563eb, #1e3a8a)",
              }}
              data-aos="flip-right"
              data-aos-delay="500"
            >
              <span className="italic font-medium text-lg text-white/85">
                <FaQuoteLeft className="inline mr-2" />
                The booking system John built for us has made appointment
                management so much easier. It's clean, easy to use, and our
                clients love it. Highly recommended!
              </span>
              <span className="mt-2 font-semibold text-sm block text-white/60">
                — Kehinde, Founder, Mcken Beauty
              </span>
            </div>
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
                  href="https://rwatosltd.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Rwatos Ltd
                </a>
              </strong>{" "}
              – 🇬🇧 UK-based furniture and lighting wholesale business website
              built to showcase services and attract clients.
            </li>
            <li>
              <strong>
                <a
                  href="https://www.bluebirdconsultltd.com" // Replace with actual link if different
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Bluebird Consult Ltd
                </a>
              </strong>{" "}
              – 🇬🇧 UK-based IT consulting company website designed to present
              their services and establish a professional online presence.
            </li>
            <li>
              <strong>
                <a
                  href="https://lashesbrowsbeautyy.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  Mcken Beauty
                </a>
              </strong>{" "}
              – Appointment-based website designed for a beauty studio to manage
              bookings easily.
            </li>
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
              integration.
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
              – Informational website for a health research organization.
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
            data-aos="flip-right"
            data-aos-delay="700"
          >
            <h1 className="text-2xl font-semibold mb-4">Why Work With Me?</h1>
            <span className="mb-6 block">
              I’m <strong>John</strong>, a full-stack web developer helping
              business owners turn visitors into customers. I focus on speed,
              clarity, and making your site do more than just look good — I make
              it work for you.{" "}
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
          <p className="text-center text-lg text-gray-500 my-6 font-semibold">
            Join 20+ businesses already growing online in the UK
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
            <li>
              <strong>How much does it cost?</strong> <br />
              Pricing varies based on your project requirements. I offer
              competitive rates and will provide a detailed quote after our
              initial consultation.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
