// import React from "react";
// import { BsTwitterX } from "react-icons/bs";
// import { SiFrontendmentor } from "react-icons/si";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-black sm:h-60 flex flex-col sm:flex-row items-center justify-between py-[30px] sm:py-[10px] px-[20px] sm:px-[40px] sm:gap-0 gap-10">
//       <div className="flex flex-col gap-2 sm:gap-8">
//         <h1 className="text-white text-2xl sm:text-5xl">
//           Let's build awesome products!
//         </h1>
//         <a
//           href="mailto:moyinooluwafemi2004@gmail.com"
//           className="text-xl text-gray-200 hover:text-gray-400"
//         >
//           moyinooluwafemi2004@gmail.com
//         </a>
//       </div>
//       <aside className="text-center">
//         <div className="flex gap-6 shadow-lg bg-white border-[#F0F0F0] border-2 px-6 py-3 rounded-4xl">
//           <h2 className="text-lg font-semibold capitalize">follow</h2>
//           <div className="flex gap-2 items-center justify-center">
//             <a
//               href="https://twitter.com/lambacodes"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to top left, #2563eb, #1e3a8a)",
//                 backgroundColor: "#2563eb", // fallback solid color
//               }}
//             >
//               <BsTwitterX size={20} />
//             </a>
//             <a
//               href="https://frontendmentor.io/profile/lamba01"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to top left, #2563eb, #1e3a8a)",
//                 backgroundColor: "#2563eb", // fallback solid color
//               }}
//             >
//               <SiFrontendmentor size={20} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/johnmoyinoluwa/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to top left, #2563eb, #1e3a8a)",
//                 backgroundColor: "#2563eb", // fallback solid color
//               }}
//             >
//               <FaLinkedin size={20} />
//             </a>
//             <a
//               href="https://github.com/lamba01"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-8 h-8 flex items-center justify-center rounded-full  hover:opacity-70 text-white shadow-lg transition-transform transform"
//               style={{
//                 backgroundImage:
//                   "linear-gradient(to top left, #2563eb, #1e3a8a)",
//                 backgroundColor: "#2563eb", // fallback solid color
//               }}
//             >
//               <FaGithub size={20} />
//             </a>
//           </div>
//         </div>
//       </aside>
//     </footer>
//   );
// }

import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="sm:h-60 flex flex-col sm:flex-row items-center justify-between py-[40px] sm:py-[20px] px-[25px] sm:px-[60px] sm:gap-0 gap-10 text-white"
      style={{
        backgroundImage: "linear-gradient(to top left, #2563eb, #1e3a8a)",
        backgroundColor: "#2563eb", // fallback
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-3 sm:gap-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-4xl font-semibold leading-snug">
          Let's build awesome products!
        </h1>
        <a
          href="mailto:moyinooluwafemi2004@gmail.com"
          className="text-lg sm:text-xl text-gray-200 hover:text-gray-300 transition-all duration-200"
        >
          moyinooluwafemi2004@gmail.com
        </a>
      </div>

      {/* Right Section */}
      <aside className="text-center">
        <div className="flex flex-row sm:flex-row items-center gap-4 bg-white/10 border border-white/20 px-6 py-4 rounded-3xl backdrop-blur-lg shadow-lg">
          <h2 className="text-lg font-semibold capitalize">follow</h2>
          <div className="flex gap-4 items-center justify-center">
            {/* Twitter */}
            <a
              href="https://twitter.com/lambacodes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <BsTwitterX size={18} />
            </a>
            {/* Frontend Mentor */}
            <a
              href="https://frontendmentor.io/profile/lamba01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <SiFrontendmentor size={18} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/johnmoyinoluwa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <FaLinkedin size={18} />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/lamba01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white shadow-lg transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      </aside>
    </footer>
  );
}
