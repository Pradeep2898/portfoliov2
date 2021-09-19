import React from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { SiQuora } from "react-icons/si";
import { Link } from "react-scroll";

export default function Contact() {
  //component name should be start with caps [dude WTF!]
  return (
    <div
      id="contact"
      class="w-full flex items-center justify-center bg-gray-900"
    >
      <div
        class="sm:w-2/3 md:w-2/3 sm:text-center lg:text-left w-full px-4 text-white flex flex-col py-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="w-full sm:text-6xl text-7xl font-bold">
          <h1 class="lg:w-full">Get In Touch.</h1>
        </div>
        <div class="flex mt-8 flex-col md:flex-row md:justify-between">
          <p class="w-full md:w-2/3 text-gray-400">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <div class="w-44 pt-6 md:pt-0 sm:self-center">
            <a
              class="bg-pink-800 transition ease-in-out hover:bg-purple-800 transform hover:scale-95 duration-300 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
              href="mailto:spanand2898@gmail.com"
            >
              Howdy👋
            </a>
          </div>
        </div>
        <div class="flex flex-col sm:none">
          <div class="flex mt-24 mb-12 flex-row justify-between">
            <Link
              to="about"
              smooth={true}
              offset={-50}
              duration={500}
              class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase"
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              offset={-50}
              duration={500}
              class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase"
            >
              Experience
            </Link>
            <Link
              to="project"
              smooth={true}
              offset={-50}
              duration={500}
              class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase"
            >
              Project
            </Link>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase" href="/#">
              Home
            </a>
            <div class="flex flex-row space-x-8 items-center justify-between">
              <a href="https://github.com/Pradeep2898">
                <GrGithub className="mx-auto scale-125 transform hover:scale-150 transition ease-in-out duration-200" />
              </a>
              <a href="https://www.quora.com/profile/Pradeep-Anand-9">
                <SiQuora className="mx-auto scale-125 transform hover:scale-150 transition ease-in-out duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/pradeep-anand-375865157/">
                <GrLinkedin className="mx-auto scale-125 transform hover:scale-150 transition ease-in-out duration-200" />
              </a>
            </div>
          </div>
          <hr class="border-gray-600" />
          <p class="w-full text-center mt-12 text-pink-600">
            Copyright © 2021 Pradeep Anand
          </p>
        </div>
      </div>
    </div>
  );
}
