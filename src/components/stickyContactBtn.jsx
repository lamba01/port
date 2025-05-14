import React from "react";

export default function StickyContactButton() {
  return (
    // <div className="fixed bottom-6 right-[10px] -translate-x-1/2 z-50 block sm:hidden">
    <div className="fixed bottom-6 right-4 sm:right-[10px] z-50 block sm:hidden">
      <a
        href="https://johncodes.xyz/#contact"
        rel="noopener noreferrer"
        className="bg-black text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium hover:bg-gray-800 transition-all duration-300"
      >
        📞 Contact Me
      </a>
    </div>
  );
}
