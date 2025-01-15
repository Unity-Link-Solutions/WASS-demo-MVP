import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ensure this import is correct
import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
