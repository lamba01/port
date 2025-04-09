import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Your message has been sent. I’ll get back to you as soon as possible.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
