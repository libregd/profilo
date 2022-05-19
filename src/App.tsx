import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// impirt pages
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Works from "./pages/works/Works";
// import components
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";
import SingleIllu from "./pages/works/SingleIllu";
import SingleLogo from "./pages/works/SingleLogo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/illustrations/:id" element={<SingleIllu />} />
        <Route path="/logos/:id" element={<SingleLogo />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
