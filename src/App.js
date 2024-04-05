import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Navbar from './components/Navbar'




function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/work" element = {<Work/>} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>

        


     
    </div>
  );
}

export default App;
