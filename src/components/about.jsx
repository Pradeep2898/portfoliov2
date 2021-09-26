import React, { useEffect, useState } from "react";
import "../styles/output.css";
import "./about.css";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { SiQuora } from "react-icons/si";
import AOS from "aos";

export default function About() {
  //component name should be start with caps [dude WTF!]

  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <div className="bg-gray-900">
      <a
        className="text-pink-600 ver md:flex space-y-10 hover:text-purple-700 hidden z-10"
        href="mailto:spanand2898@gmail.com"
      >
        spanand2898@gmail.com
      </a>
      <li
        className="md:flex flex-col share space-y-10 z-10 hidden"
        data-aos="fade-right"
        data-aos-delay="1000"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
      >
        <a href="https://github.com/Pradeep2898">
          <GrGithub className="mx-auto scale-125 transform hover:text-yellow-700 transition ease-in-out duration-300" />
        </a>
        <a href="https://www.quora.com/profile/Pradeep-Anand-9">
          <SiQuora className="mx-auto scale-125 transform hover:text-red-700 transition ease-in-out duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/pradeep-anand-375865157/">
          <GrLinkedin className="mx-auto scale-125 transform hover:text-blue-700 transition ease-in-out duration-300" />
        </a>
      </li>
      <div className="flex flex-wrap overflow-hidden px-7 sm:px-20 md:px-32 xl:px-48">
        <div className="lg:w-9/12 overflow-hidden md:w-full pt-32">
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
            className="text-6xl md:text-8xl"
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
          <a href="mailto:spanand2898@gmail.com">
            <button
              className="my-20 md:my-32 px-6 py-4 transition ease-in-out duration-200 uppercase rounded-md hover:bg-pink-800 hover:bg-opacity-30 hover:text-white border-2 border-pink-900 focus:outline-none"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              Get In Touch
            </button>
          </a>
        </div>
        <div
          className="lg:w-3/12 overflow-hidden md:px-3 md:w-full lg:pt-48 md:pt-8 md:pb-14"
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <h3 className="text-sm text-pink-800 font-bold intro">
            Introduction
          </h3>
          <h4 className="text-4xl py-4 text-purple-300">
            Software Developer by Profession. Web Dev by Passion.
          </h4>
          <p>I'm a software engineer from India. I make things for web.</p>
        </div>
      </div>
    </div>
  );
}
