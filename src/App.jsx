// App.jsx
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
