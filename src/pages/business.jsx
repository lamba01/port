import React from "react";

export default function BusinessLandingPage() {
  return (
    <main className="bg-white text-black min-h-screen ">
      <section className="text-center py-24 px-6 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          High-Converting Websites for Small Businesses
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Whether you run an online store or manage bookings, I help you get
          more customers with fast, mobile-friendly websites built to convert
          customers.
        </p>
      </section>

      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Who This Is For
        </h2>
        <ul className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2 text-left list-disc pl-6">
          <li>
            Salon owners who want clients to easily book appointments online
          </li>
          <li>
            Retailers or brand owners looking to sell through an eCommerce site
          </li>
          <li>
            Coaches or professionals who need a streamlined booking system
          </li>
          <li>
            Service-based businesses wanting a simple way to get inquiries
          </li>
        </ul>
      </section>

      <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What You’ll Get
        </h2>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-bold mb-2">Mobile-Optimized Design</h3>
            <p>
              Look great and work fast on all devices—phones, tablets, and
              desktops.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-bold mb-2">Fast Loading Speed</h3>
            <p>Blazing-fast performance so visitors don’t drop off.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-bold mb-2">Contact or Booking Forms</h3>
            <p>
              Easy-to-use forms that convert visitors into leads or bookings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border">
            <h3 className="text-xl font-bold mb-2">
              Admin Dashboard (Optional)
            </h3>
            <p>Manage products, services, bookings, and inquiries easily.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-8">Contact Me</h2>
        <form
          action="https://formspree.io/f/your-id"
          method="POST"
          className="max-w-xl mx-auto grid gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="border border-black rounded-md p-3 w-full"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="border border-black rounded-md p-3 w-full"
          />
          <select
            name="service"
            required
            className="border border-black rounded-md p-3 w-full"
          >
            <option value="">What do you need?</option>
            <option value="ecommerce">eCommerce Website</option>
            <option value="booking">Booking Website</option>
            <option value="redesign">Redesign Existing Website</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Tell me what you're looking for..."
            className="border border-black rounded-md p-3 w-full"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </section>

      <section className="py-12 px-6 text-center">
        <p className="text-lg">
          Want to see examples?{" "}
          <a
            href="https://johncodes.xyz/#projects"
            className="text-blue-600 underline hover:text-blue-800"
          >
            View my portfolio
          </a>
        </p>
      </section>
    </main>
  );
}
