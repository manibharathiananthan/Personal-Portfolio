import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";

import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import AddProject from "./Components/AddProject";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
     
    </Router>
  );
}

export default App;
