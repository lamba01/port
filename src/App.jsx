// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navBar";

const App = () => {
  return (
    <>
      <Navbar /> {/* Navbar is now persistent */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
