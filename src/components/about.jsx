import React, { useEffect, useState } from "react";
import "../styles/output.css";
import "./about.css";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { SiQuora } from "react-icons/si";
import AOS from "aos";
import firebase from "../firebase";

export default function About() {
  //component name should be start with caps [dude WTF!]

  const [Project, setProject] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="bg-gray-900">
      <div
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
      >
        <a
          className="text-gray-400 ver flex space-y-10 transition ease-in-out duration-500 hover:text-pink-600"
          href="/"
        >
          spanand2898@gmail.com
        </a>
      </div>
      <li
        className="flex flex-col share space-y-10 z-10"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
      >
        <a href="/">
          <GrGithub className="mx-auto scale-125 transform hover:text-yellow-700 transition ease-in-out duration-300" />
        </a>
        <a href="/">
          <SiQuora className="mx-auto scale-125 transform hover:text-red-700 transition ease-in-out duration-300" />
        </a>
        <a href="/">
          <GrLinkedin className="mx-auto scale-125 transform hover:text-blue-700 transition ease-in-out duration-300" />
        </a>
      </li>
      <div className="flex px-48 ">
        <div className="w-9/12 pt-32 pb-10">
          <h2
            className="text-2xl text-pink-600 intro"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            Hi, my name is
          </h2>
          <br />
          <h1
            className="text-8xl"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            Pradeep
            <br />
            Anand
          </h1>
          <div
            className="w-16 h-2 bg-pink-800 mt-3"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          />
          <button
            className="my-28 px-6 py-4 transition ease-in-out duration-200 uppercase rounded-md hover:bg-pink-800 hover:bg-opacity-30 hover:text-white border-2 border-pink-900 focus:outline-none"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            Get In Touch
          </button>
        </div>
        <div
          className="w-3/12 pt-48"
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <h3 className="text-sm text-pink-800 font-bold intro">
            Introduction
          </h3>
          <h4 className="text-4xl py-4">
            Software Developer by Profession. Web Dev by passion.
          </h4>
          <p>I'm a software engineer from India. I make things for web.</p>
        </div>
      </div>
    </div>
  );
}
