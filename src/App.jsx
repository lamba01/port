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
import BlogPost1 from "./pages/blogPost1";
import StickyContactButton from "./components/stickyContactBtn";
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
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "John Moyinoluwa Oluwafemi",
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
            "knowsAbout": ["React", "Node.js", "Tailwind CSS", "SEO", "SaaS", "eCommerce"],
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
      <StickyContactButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<Work />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post-1" element={<BlogPost1 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
