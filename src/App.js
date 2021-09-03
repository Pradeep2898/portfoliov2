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
      <About />
      <Skills />
      <Experience/>
      <Project />
      <Contact />
    </main>
  );
}

export default App;
