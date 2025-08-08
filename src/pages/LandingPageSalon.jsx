// LandingPageSalon.jsx
import React from "react";
import mckenimg from "../assets/mcken.png";
import BusinessNav from "../components/businessNav";

export default function LandingPageSalon() {
  return (
    <>
      <BusinessNav />
      <div className="min-h-screen p-6 pt-20 max-w-3xl mx-auto font-sans">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Let Clients Book Your Salon Online — Even While You’re Working
          </h1>
          <p className="text-gray-600">
            I’ll build you a beautiful booking website that handles appointments
            24/7.
          </p>
          <a
            href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20own%20a%20salon%20and%20want%20a%20booking%20website."
            className="inline-block mt-4 px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700"
          >
            Get Your Booking Website Now
          </a>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">The Problem</h2>
          <p>
            Missed calls. Forgotten appointments. Booking in DMs. It's time to
            make your salon smarter.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What You’ll Get</h2>
          <ul className="list-disc list-inside">
            <li>Clients pick service, date, time</li>
            <li>Instant WhatsApp confirmation</li>
            <li>Admin dashboard for you</li>
            <li>Mobile-friendly booking form</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside">
            <li>📅 Appointment calendar</li>
            <li>🧍 Service & staff selection</li>
            <li>📱 Mobile-ready interface</li>
            <li>🔐 Private admin dashboard</li>
            <li>🧾 WhatsApp confirmations</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <ol className="list-decimal list-inside">
            <li>Tell me your services & schedule</li>
            <li>I build the system in 7 days</li>
            <li>Start receiving bookings online</li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Example</h2>
          <p className="mb-2">
            See how Mcken Beauty Place takes bookings without calls or DMs.
          </p>
          <img
            src={mckenimg}
            alt="Mcken Demo"
            className="rounded-xl shadow-md"
          />
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Testimonial</h2>
          <blockquote className="italic border-l-4 pl-4 border-purple-500">
            “Now I just open my dashboard and see my bookings. I don’t need to
            reply 20 chats per day anymore.” — Mcken Beauty Place
          </blockquote>
        </section>

        <section className="text-center mt-8">
          <h2 className="text-xl font-bold mb-4">
            Let’s make your beauty business work smarter
          </h2>
          <a
            href="https://wa.me/2348166009368?text=Hi%20John%2C%20I%20own%20a%20salon%20and%20want%20a%20booking%20website."
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700"
          >
            Chat with Me Now
          </a>
        </section>
      </div>
    </>
  );
}
