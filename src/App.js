import React from "react";
import "./App.scss";
import Home from "./components/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className="text-white">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
