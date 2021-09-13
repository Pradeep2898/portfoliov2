import React from "react";
import About from "./about";
import Skills from "./skills";
import Project from "./project";
import Contact from "./contact";
import Experience from "./experiences";

function Home() {
  return (
    <main className="text-white">
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </main>
  );
}

export default Home;
