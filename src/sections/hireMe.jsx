import React from "react";

export default function HireMe() {
  return (
    <section
      className="w-full py-20 px-6 sm:px-12 text-white bg-linear-to-tl from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-800 flex flex-col justify-center items-center gap-10"
      style={{
        backgroundImage: "linear-gradient(to top , #1D4ED8, #1e3a8a)",
        backgroundColor: "#2563eb", // fallback solid color
      }}
    >
      <div>
        {" "}
        <h4 className="text-2xl sm:text-3xl font-semibold text-center">
          Why work with Me
        </h4>
        <span className="text-center">
          I only take 2 projects per month — secure your spot!
        </span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto ">
        <div>
          <h4 className="text-xl font-medium mb-4">
            ✅ Business-Focused Solutions
          </h4>
          <span className="text-white/80">
            I build websites that do more than just look good — they help your
            business grow. Whether it’s eCommerce, appointment systems, or
            company portfolios, I focus on functionality and results.
          </span>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-2">
            ✅ End-to-End Development
          </h4>
          <span className="text-white/80">
            From front-end design to back-end logic and database integration, I
            handle the full stack so you don’t need to hire multiple developers.
          </span>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-2">
            ✅ Fast & Mobile-Friendly
          </h4>
          <span className="text-white/80">
            Your site will be fast, mobile-optimized, and user-friendly — giving
            your customers a great experience on any device.
          </span>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-2">
            ✅ Easy to Update & Manage
          </h4>
          <span className="text-white/80">
            Need to make content changes or upload new products? I can integrate
            a CMS or admin dashboard so you can manage your site without needing
            a developer every time.
          </span>
        </div>
      </div>
      <a href="#contact" className="sm:w-[250px] flex justify-center">
        <button className="bg-white text-black cursor-pointer py-3 px-8 sm:w-[250px] w-[90vw] hover:bg-[#f5f5f5]">
          Book a Free Chat
        </button>
      </a>
    </section>
  );
}
