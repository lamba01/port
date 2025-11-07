// App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ThankYou from "./pages/thankYou";
import Blog from "./pages/blog";
import StickyContactButton from "./components/stickyContactBtn";
import NGOLandingPage from "./pages/ngo";
import BusinessLandingPage from "./pages/business";
import ScrollToTop from "./components/scrolltotop";
import LandingPageClothing from "./pages/landingPageClothing";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPageSalon from "./pages/LandingPageSalon";
import SbLofa from "./pages/casestudies/sbLofa";
import MckenBooking from "./pages/casestudies/mckenBooking";
import NJSHCaseStudy from "./pages/casestudies/njsh";
import CepherCaseStudy from "./pages/casestudies/cepher";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const location = useLocation();
  const hideNavbarPaths = ["/business", "/clothing-site", "beauty-booking"];

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
      <ScrollToTop />
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "John Oluwafemi",
            "url": "https://johncodes.xyz",
            "image": "https://johncodes.xyz/john-oluwafemi.jpeg",
            "sameAs": [
              "https://www.linkedin.com/in/johnmoyinoluwa/",
              "https://github.com/lamba01/"
            ],
            "email": "mailto:moyinooluwafemi2004@gmail.com",
            "jobTitle": "Full-Stack Web Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "knowsAbout": ["React", "Node.js", "Tailwind CSS", "SEO", "business websites", 
            "landing pages", "web applications", "web design", "UI/UX design", "digital marketing", "NGO websites",
            "SaaS", "eCommerce", "web development", "frontend development", "Best web developer in Lagos",
            "backend development", "full-stack development", "software engineering", "web developer", "developer"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            }
          }
          `}
        </script>
      </Helmet>
      {/* <Navbar /> */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      {/* <StickyContactButton /> */}
      {/* Only show StickyContactButton if not on /business */}
      {location.pathname !== "/business" && <StickyContactButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<Projects />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ngo" element={<NGOLandingPage />} />
        <Route path="/business" element={<BusinessLandingPage />} />
        <Route path="/clothing-site" element={<LandingPageClothing />} />
        <Route path="/beauty-booking" element={<LandingPageSalon />} />
        <Route path="/case-studies/sb-lofa" element={<SbLofa />} />
        <Route path="/case-studies/mcken-booking" element={<MckenBooking />} />
        <Route path="/case-studies/njsh" element={<NJSHCaseStudy />} />
        <Route path="/case-studies/cepher" element={<CepherCaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
