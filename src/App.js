import React from "react";
import "./App.scss";
import About from "./components/about";
import Skills from "./components/skills";
import Navbar from "./components/navbar";
import Project from "./components/project";
import Contact from "./components/contact";
import Experience from "./components/experiences";

function App() {
  return (
    <main className="text-white">
      <Navbar />
      <About id="about" />
      <Skills id="skills"/>
      <Experience id="experience"/>
      <Project id="project"/>
      <Contact id="contact"/>
    </main>
  );
}

export default App;
