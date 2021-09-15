import React, { useEffect } from "react";
import "./App.scss";
import Home from "./components/home";
import Navbar from "./components/navbar";

const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");

function App() {
  useEffect(() => {
    showLoader();
    addClass();
    // setTimeout(
    //   function () {
    //     //Start the timer
    //     showLoader();
    //     addClass(); //After 1 second, set render to true
    //   }.bind(this),
    //   1000
    // );
  }, []);
  return (
    <main className="text-white">
      <Navbar />
      <Home />
    </main>
  );
}

export default App;
