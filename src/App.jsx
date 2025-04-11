// App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Work from "./pages/work";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ThankYou from "./pages/thankYou";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const el = document.querySelector(location.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth" });
          }, 0);
        }
      }
    }, [location]);

    return null;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
