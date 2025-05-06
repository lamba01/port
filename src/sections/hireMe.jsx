import React from "react";

export default function HireMe() {
  return (
    <section className="w-full py-20 px-6 sm:px-12 bg-[#f5f5f5] flex flex-col justify-center items-center gap-10">
      <div>
        {" "}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black">
          Why work with Me
        </h2>
        <p className="text-center">
          I only take 2 projects per month — secure your spot!
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto text-black">
        <div>
          <h4 className="text-xl font-medium mb-2">
            ✅ Business-Focused Solutions
          </h4>
          <p>
            I build websites that do more than just look good — they help your
            business grow. Whether it’s eCommerce, appointment systems, or
            company portfolios, I focus on functionality and results.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-2">
            ✅ End-to-End Development
          </h4>
          <p>
            From front-end design to back-end logic and database integration, I
            handle the full stack so you don’t need to hire multiple developers.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-2">
            ✅ Fast & Mobile-Friendly
          </h4>
          <p>
            Your site will be fast, mobile-optimized, and user-friendly — giving
            your customers a great experience on any device.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-2">
            ✅ Easy to Update & Manage
          </h4>
          <p>
            Need to make content changes or upload new products? I can integrate
            a CMS or admin dashboard so you can manage your site without needing
            a developer every time.
          </p>
        </div>
      </div>
      <a href="#contact" className="sm:w-[250px] flex justify-center">
        <button
          className="bg-black text-white cursor-pointer py-3 px-8 sm:w-[250px] w-[90vw] hover:bg-[#333333]"
          data-aos="fade-up"
        >
          Book a Free Chat
        </button>
      </a>
    </section>
  );
}
