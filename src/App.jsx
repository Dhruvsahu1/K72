import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import Navbar from "./pages/components/Navigation/Navbar";
import FullNavigationPage from "./pages/components/Navigation/FullNavigationPage";


const App = () => {
 
  return (
    <div className="overflow-x-hidden">
       <Navbar/>
      <FullNavigationPage/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
