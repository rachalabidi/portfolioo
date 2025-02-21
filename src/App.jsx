import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Projects from "./pages/Projects";
import ProjectRespo from "./pages/ProjectRespo";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/ShootingStarsAndStarsBackgroundDemo";
import Websites from "./pages/Websites";
import Designs from "./pages/Designs";
import Uiux from "./pages/Uiux";


const App = () => {
  return (
    <Router  future={{
      v7_startTransition: true,
    }}>
      <div className="App">
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<ProjectRespo />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/ui-ux" element={<Uiux />} />
            <Route path="/graphic-design" element={<Designs />} />



          </Routes>
        </div>
   
    </Router>
  );
};

export default App;
