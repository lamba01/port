import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero({ scrollToProjects }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Create parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-10 bg-[#0e0e0e] text-white overflow-hidden"
    >
      {/* Background gradient moving subtly */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-b from-[#111] via-[#0e0e0e] to-black opacity-80"
      />

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Shaping Ideas{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500"
          >
            into Real Projects
          </motion.span>
          <br />
          that{" "}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500"
          >
            Deliver Results
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-6 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
        >
          I help businesses turn their websites into reliable revenue-generating
          help businesses turn their websites into reliable revenue-generating
          assets. With a focus on performance, user experience, and SEO, I
          create digital solutions that not only look great but also drive real
          results.
        </motion.p>

        <motion.button
          onClick={scrollToProjects}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
