import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animated, setAnimated] = useState(false);

  const stats = [
    { label: "Years of Experience", value: 4 },
    { label: "Completed Projects", value: 20 },
    { label: "Happy Clients", value: 20 },
    { label: "Technologies Mastered", value: 10 },
  ];

  // Handle count-up logic
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 1500;
        const stepTime = 20;
        const increment = (end / duration) * stepTime;

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = Math.floor(start);
            return newCounts;
          });
        }, stepTime);
      });
    }
  }, [isInView, animated]);

  return (
    <section
      ref={ref}
      className="py-10 flex flex-col items-center justify-center bg-[#0e0e0e] text-white px-6 sm:px-10"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Building{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Real Results
        </span>{" "}
        Through Experience
      </motion.h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-16 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.5 }}
          >
            <h3 className="text-5xl sm:text-6xl font-extrabold text-indigo-400 mb-2">
              {counts[i]}+
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
