import React from "react";

export default function HireMe() {
  return (
    <section className="w-full py-20 px-6 sm:px-12 bg-[#f5f5f5]  dark:bg-zinc-900">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-black dark:text-white">
        Why You Should Hire Me
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto text-black dark:text-white">
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
    </section>
  );
}
