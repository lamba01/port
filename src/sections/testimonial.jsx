import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";
import njshImage from "../assets/project2.png";
import cepherImage from "../assets/project1.png";

const testimonials = [
  {
    id: 1,
    quote: `John was hired to develop a website for the Nigerian Journal of
    Social Sciences. The website is professional, responsive, and makes publishing easier.
    I recommend John without any reservation.`,
    name: "Prof Femi Tinuola",
    organization: "Editor-in-Chief, NJSH",
    image: njshImage,
  },
  {
    id: 2,
    quote: `John did an excellent job developing our website. The site has improved our visibility,
    reach, and communication with our audience. Highly recommended.`,
    name: "Prof Israel Orubuloye",
    organization: "CEO, CEPHER",
    image: cepherImage,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-24 px-6 sm:px-16 bg-gradient-to-b from-black via-neutral-900 to-black text-gray-200 overflow-hidden"
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Highly Rated ⭐
        </motion.h2>
        <motion.p
          className="text-gray-400 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Expect nothing but perfection working with me
        </motion.p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="relative flex-1 rounded-2xl p-8 bg-neutral-900 border border-neutral-800 shadow-xl hover:shadow-2xl transition-all duration-500"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.02, borderColor: "#3b82f6" }}
          >
            <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
              {t.quote}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border border-neutral-700"
              />
              <div>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.organization}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
