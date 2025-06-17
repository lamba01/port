// App.jsx
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Work from "./pages/work";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import ThankYou from "./pages/thankYou";
import Blog from "./pages/blog";
import StickyContactButton from "./components/stickyContactBtn";
import NGOLandingPage from "./pages/ngo";
import BusinessLandingPage from "./pages/business";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const location = useLocation();

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
            "SaaS", "eCommerce", "web development", "frontend development", 
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
      <Navbar />
      {/* <StickyContactButton /> */}
      {/* Only show StickyContactButton if not on /business */}
      {location.pathname !== "/business" && <StickyContactButton />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ngo" element={<NGOLandingPage />} />
        <Route path="/business" element={<BusinessLandingPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
