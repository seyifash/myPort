import React from "react";
import "./index.css";
import Layout from'./components/Layout';
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/project";
import Contact from "./components/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </>
  )
}

export default App;
