import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//  Updated imports from /components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Prevent content from being hidden behind fixed navbar */}
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}
