import React from "react";
import { GrLinkedin, GrGithub } from "react-icons/gr";
import { SiQuora } from "react-icons/si";

export default function Contact() {
  //component name should be start with caps [dude WTF!]
  return (
    <div class="w-full flex items-center justify-center bg-gray-900">
      <div
        class="md:w-2/3 w-full px-4 text-white flex flex-col py-8"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-bottom"
      >
        <div class="w-full text-7xl font-bold">
          <h1 class="w-full md:w-2/3">Get In Touch.</h1>
        </div>
        <div class="flex mt-8 flex-col md:flex-row md:justify-between">
          <p class="w-full md:w-2/3 text-gray-400">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
          <div class="w-44 pt-6 md:pt-0">
            <a
              class="bg-pink-800 transition ease-in-out hover:bg-purple-800 transform hover:scale-95 duration-300 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
              href="/"
            >
              Howdy👋
            </a>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex mt-24 mb-12 flex-row justify-between">
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase">
              About
            </a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase">
              Experience
            </a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase">
              Project
            </a>
            <a class="hidden md:block cursor-pointer text-gray-600 hover:text-white duration-300 uppercase">
              Home
            </a>
            <div class="flex flex-row space-x-8 items-center justify-between">
              <a href="/">
                <GrGithub className="mx-auto scale-125 transform hover:scale-150 transition ease-in-out duration-200" />
              </a>
              <a href="/">
                <SiQuora className="mx-auto scale-125 transform hover:scale-150 transition ease-in-out duration-200" />
              </a>
              <a href="/">
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
