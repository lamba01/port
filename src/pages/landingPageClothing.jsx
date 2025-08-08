// LandingPageClothing.jsx
import React from "react";
import rwatosimg from "../assets/rwatos.png";
import BusinessNav from "../components/businessNav";

export default function LandingPageClothing() {
  return (
    <>
      <BusinessNav />
      <div className="min-h-screen p-6 pt-20 max-w-3xl mx-auto font-sans">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Launch Your Clothing Brand Online in 7 Days
          </h1>
          <p className="text-gray-600">
            Get a clean, mobile-friendly fashion store with payment and delivery
            setup — no tech stress.
          </p>
          <a
            href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20run%20a%20clothing%20brand%20and%20I%20need%20a%20website."
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700"
          >
            Get Started on WhatsApp
          </a>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            You're selling through DMs or word-of-mouth... but customers want to
            buy now, pay easily, and trust you instantly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What You’ll Get</h2>
          <ul className="list-disc list-inside">
            <li>Paystack/Flutterwave payment integration</li>
            <li>WhatsApp chat built-in</li>
            <li>Instagram & TikTok links</li>
            <li>Clean mobile-first design</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            <li>🛒 Online shopping cart</li>
            <li>💳 Payment integration</li>
            <li>🚚 Delivery options</li>
            <li>📱 Mobile-first design</li>
            <li>🧾 Order confirmations</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <ol className="list-decimal list-inside">
            <li>Chat with me about your brand</li>
            <li>Send product photos & prices</li>
            <li>Approve the design</li>
            <li>Go live in 7 days or less</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <p className="mb-2">
            Built for a UK-based wholesale brand. Yours can be even simpler.
          </p>
          <img
            src={rwatosimg}
            alt="Rwatos Demo"
            className="rounded-xl shadow-md"
          />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Testimonial</h2>
          <blockquote className="italic border-l-4 pl-4 border-green-500">
            “We now receive online orders every day and our site gives customers
            confidence. Simple process, smooth delivery.” — Rwatos UK
          </blockquote>
        </section>

        <section className="text-center mt-8">
          <h2 className="text-xl font-bold mb-4">
            Ready to start selling online?
          </h2>
          <a
            href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20run%20a%20clothing%20brand%20and%20I%20need%20a%20website."
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700"
          >
            Chat with Me Now
          </a>
        </section>
      </div>
    </>
  );
}
