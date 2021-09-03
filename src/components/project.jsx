import React from "react";
import "./project.css";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import img1 from "../images/IlluminatION.png";
import img2 from "../images/Beginning.png";
import img3 from "../images/Pradeep-Anand-The-Lazy-Coder-.png";
import img4 from "../images/Apex-Solution.png";
import img5 from "../images/Prince-Educational-Group.png";
import img6 from "../images/Quora-Clone.png";

export default function Project() {
  //component name should be start with caps [dude WTF!]
  return (
    <div className="bg-gray-900">
      <div
        className="px-48 py-24"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
      >
        <h3 className="text-sm text-pink-800 font-bold project text-center py-4">
          Projects
        </h3>
        <p className="text-6xl text-center p-4">Things, I've made</p>
        <div className="grid grid-cols-12 md:items-center w-full p-4">
          <div className="col-span-12 md:col-span-auto md:col-start-1 max-w-screen-sm md:col-end-10 md:row-start-1 md:row-end-1">
            <a className="" href="#" title="Image Link">
              <picture
                className="relative block w-full h-0 pb bg-gray-900 overflow-hidden shadow-lg crap"
                style={{ paddingTop: "75%" }}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover border-0 rounded-lg"
                  src={img1}
                  alt="A random image from Unsplash"
                />
              </picture>
            </a>
          </div>
          <div className="col-span-12 md:col-span-auto md:col-start-7 text-right md:col-end md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
            <div className="p-4 md:p-8 bg-gray-800 shadow-lg rounded-md">
              <p className="mb-2 text-lg leading-none font-medium">
                <a className="text-pink-700" href="#" title="Heading Link">
                  iBuilder - A construction organization
                </a>
              </p>
              <p className="mb-2 text-sm text-gray-400">
                A website template made with Angular and Bootstrap along with
                jquery. This site is also a PWA and deployed on Netlify.
              </p>
              <p className="text-xs text-gray-400 flex space-x-6 pt-6">
                <a href="/">
                  <FiGithub className="mx-auto scale-150 transform hover:text-yellow-700 transition ease-in-out duration-300" />
                </a>
                <a href="/">
                  <BiLinkExternal className="mx-auto scale-150 transform hover:text-blue-700 transition ease-in-out duration-300" />
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-around text-sm pt-2 sub">
              <p>Angular</p>
              <p>Bootstrap</p>
              <p>jQuery</p>
              <p>Heroku</p>
              <p>PWA</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:items-center w-full p-4">
          <div className="col-span-12 md:col-span-auto md:col-start-6 max-w-screen-sm md:col-end md:row-start-1 md:row-end-1">
            <a className="" href="#" title="Image Link">
              <picture
                className="relative block w-full h-0 pb bg-gray-900 overflow-hidden shadow-lg crap"
                style={{ paddingTop: "75%" }}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover border-0 rounded-lg"
                  src={img2}
                  alt="A random image from Unsplash"
                />
              </picture>
            </a>
          </div>
          <div className="col-span-12 md:col-span-auto md:col-start md:col-end-7 md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
            <div className="p-4 md:p-8 bg-gray-800 shadow-lg rounded-md">
              <p className="mb-2 text-lg leading-none font-medium">
                <a className="text-pink-700" href="#" title="Heading Link">
                  Howdy.com
                </a>
              </p>
              <p className="mb-2 text-md text-gray-400">
                A dummy website for web development startup organisation.
              </p>
              <p className="text-xs text-gray-400 flex space-x-6 pt-6">
                <a href="/">
                  <FiGithub className="mx-auto scale-150 transform hover:text-yellow-700 transition ease-in-out duration-300" />
                </a>
                <a href="/">
                  <BiLinkExternal className="mx-auto scale-150 transform hover:text-blue-700 transition ease-in-out duration-300" />
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-around text-sm pt-2 sub">
              <p>Angular</p>
              <p>Bootstrap</p>
              <p>jQuery</p>
              <p>Heroku</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 md:items-center w-full p-4">
          <div className="col-span-12 md:col-span-auto md:col-start-1 max-w-screen-sm md:col-end-10 md:row-start-1 md:row-end-1">
            <a className="" href="#" title="Image Link">
              <picture
                className="relative block w-full h-0 pb bg-gray-900 overflow-hidden shadow-lg crap"
                style={{ paddingTop: "75%" }}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover border-0 rounded-lg"
                  src={img3}
                  alt="A random image from Unsplash"
                />
              </picture>
            </a>
          </div>
          <div className="col-span-12 md:col-span-auto text-right md:col-start-7 md:col-end md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0">
            <div className="p-4 md:p-8 bg-gray-800 shadow-lg rounded-md">
              <p className="mb-2 text-lg leading-none font-medium">
                <a className="text-pink-700" href="#" title="Heading Link">
                  Portfolio
                </a>
              </p>
              <p className="mb-2 text-md text-gray-400">
                A website template made with Angular and Bootstrap along with
                jquery. This site is also a PWA and deployed on Netlify.
              </p>
              <p className="text-xs text-gray-400 flex space-x-6 pt-6">
                <a href="/">
                  <FiGithub className="mx-auto scale-150 transform hover:text-yellow-700 transition ease-in-out duration-300" />
                </a>
                <a href="/">
                  <BiLinkExternal className="mx-auto scale-150 transform hover:text-blue-700 transition ease-in-out duration-300" />
                </a>
              </p>
            </div>
            <div className="flex flex-wrap justify-around text-sm pt-2 sub">
              <p>Angular</p>
              <p>Bootstrap</p>
              <p>Firebase</p>
              <p>Heroku</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <p className="text-center text-4xl py-8 underline">
            Some other works
          </p>
          <div class="flex flex-wrap p-4 w-full overflow-hidden justify-center">
            <a
              href="#"
              class="relative flex flex-col items-center justify-around p-4 m-5 w-80 h-80 rounded-2xl"
              style={{ transform: "translate(0px, 0px)", opacity: "1" }}
            >
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-700 rounded-xl -rotate-2"
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-400 rounded-xl rotate-2"
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-gray-900 border border-purple-800 rounded-xl transition ease-in-out duration-300 hover:scale-105"
                style={{ zIndex: "-1" }}
              ></div>
              <h3
                class="z-10 p-2 text-2xl font-semibold text-purple-700"
                style={{ zIndex: "-1" }}
              >
                Quora Clone
              </h3>
              <div class="z-10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixblendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path d="M10.41406,10.41406v23.51563h43.67188v-23.51562zM57.44531,10.41406v23.51563h104.14063v-10.07812h-68.86719c-0.92786,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75183,-1.67969 1.67969,-1.67969h68.86719v-10.07812zM18.8125,18.8125h6.71875v6.71875h-6.71875zM28.89063,18.8125h6.71875v6.71875h-6.71875zM38.96875,18.8125h6.71875v6.71875h-6.71875zM10.41406,37.28906v124.29688h151.17188v-107.5h-119.25781c-0.92752,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969h119.25781v-13.4375zM22.17188,50.72656h6.71875c0.92752,0 1.67969,0.75216 1.67969,1.67969c0,0.92752 -0.75216,1.67969 -1.67969,1.67969h-6.71875c-0.92752,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969zM32.25,70.88281h107.5c0.92786,0 1.67969,0.75216 1.67969,1.67969v70.54688c0,0.92786 -0.75183,1.67969 -1.67969,1.67969h-107.5c-0.92752,0 -1.67969,-0.75183 -1.67969,-1.67969v-70.54687c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969zM33.92969,74.24219v67.1875h104.14063v-67.1875zM121.56148,82.64063l4.75102,4.75102l-4.75102,4.75102l-4.75102,-4.75102zM86.48029,87.67969c0.17943,0 0.35864,0.02851 0.53081,0.08595l30.71466,10.23822c0.02318,0.00773 0.04442,0.02014 0.06693,0.02887c0.03729,0.01411 0.07331,0.02913 0.10892,0.04593c0.05912,0.02755 0.11552,0.05892 0.16994,0.09251c0.02956,0.01814 0.0597,0.03464 0.08792,0.05446c0.06987,0.04905 0.13439,0.10329 0.19553,0.16141c0.00941,0.00941 0.02143,0.01684 0.03084,0.02624c0.06887,0.06954 0.13057,0.14576 0.18634,0.22571c0.01747,0.0252 0.03177,0.05253 0.0479,0.07873c0.03595,0.05812 0.06921,0.11763 0.09776,0.17978c0.01545,0.03326 0.02889,0.06678 0.04199,0.10104c0.02419,0.06316 0.04357,0.12803 0.06036,0.19421c0.00773,0.03292 0.01757,0.06417 0.02362,0.09776c0.01881,0.10011 0.03084,0.20194 0.03084,0.30641v13.6514h-0.00066c0,0.92786 -0.75183,1.67969 -1.67969,1.67969c-0.92786,0 -1.67969,-0.75183 -1.67969,-1.67969v-11.32083l-6.87884,2.29317v19.69237c0,0.7525 -0.50071,1.41312 -1.22499,1.6167l-20.47644,5.75884c-0.04031,0.01142 -0.08106,0.01753 -0.12204,0.02559c-0.02721,0.00571 -0.05415,0.01303 -0.08136,0.01706c-0.08365,0.01277 -0.16699,0.02034 -0.25064,0.02034c-0.08365,0 -0.16799,-0.00724 -0.2513,-0.02034c-0.02721,-0.00403 -0.05383,-0.01135 -0.0807,-0.01706c-0.04132,-0.00806 -0.0827,-0.01417 -0.12335,-0.02559l-20.47644,-5.75884c-0.72462,-0.20358 -1.22433,-0.8642 -1.22433,-1.6167v-19.69237l-9.08934,-3.03c-0.68598,-0.22877 -1.14888,-0.87014 -1.14888,-1.59308c0,-0.72294 0.46289,-1.3653 1.14888,-1.59373l30.71401,-10.23822c0.17234,-0.05745 0.35203,-0.08595 0.53146,-0.08595zM86.48029,91.13026l-25.40265,8.46733l5.45702,1.81944l1.29454,0.43107l18.65109,6.21681l12.70067,-4.234l7.24431,-2.41389l0.00066,-0.00066l5.45702,-1.81879zM67.68353,105.34068v17.29947l17.11707,4.81401v-16.40779l-0.92449,-0.30838zM105.27638,105.34068l-15.67096,5.22343l-1.44545,0.48226v16.40779l17.11641,-4.81401zM50.43852,112.875l4.75036,4.75102l-4.75036,4.75036l-4.75102,-4.75036zM124.34477,123.5292l4.75102,4.75102l-4.75102,4.75102l-4.75102,-4.75102z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="z-10 p-2 text-sm text-center text-gray-400 ">
                Well this one is interesting one. Not a complex Angular Project
                or something, but the fact this whole project is developed and
                implemented using Termux on an Android Smartphone. Beatae minima
                ut delectus numquam accusamus.
              </div>
            </a>
            <a
              href="#"
              class="relative flex flex-col items-center justify-around p-4 m-5 w-80 h-80 rounded-2xl "
              style={{ transform: "translate(0px, 0px)", opacity: "1" }}
            >
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-700 rounded-xl -rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-400 rounded-xl rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-gray-900 border border-purple-800 rounded-xl transition ease-in-out duration-300 hover:scale-105"
                style={{ zIndex: "-1" }}
              ></div>
              <h3 class="z-10 p-2 text-2xl font-semibold text-purple-700">
                A solutions
              </h3>
              <div class="z-10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixblendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path d="M10.41406,10.41406v23.51563h43.67188v-23.51562zM57.44531,10.41406v23.51563h104.14063v-10.07812h-68.86719c-0.92786,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75183,-1.67969 1.67969,-1.67969h68.86719v-10.07812zM18.8125,18.8125h6.71875v6.71875h-6.71875zM28.89063,18.8125h6.71875v6.71875h-6.71875zM38.96875,18.8125h6.71875v6.71875h-6.71875zM10.41406,37.28906v124.29688h151.17188v-107.5h-119.25781c-0.92752,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969h119.25781v-13.4375zM22.17188,50.72656h6.71875c0.92752,0 1.67969,0.75216 1.67969,1.67969c0,0.92752 -0.75216,1.67969 -1.67969,1.67969h-6.71875c-0.92752,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969zM32.25,70.88281h107.5c0.92786,0 1.67969,0.75216 1.67969,1.67969v70.54688c0,0.92786 -0.75183,1.67969 -1.67969,1.67969h-107.5c-0.92752,0 -1.67969,-0.75183 -1.67969,-1.67969v-70.54687c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969zM33.92969,74.24219v67.1875h104.14063v-67.1875zM121.56148,82.64063l4.75102,4.75102l-4.75102,4.75102l-4.75102,-4.75102zM86.48029,87.67969c0.17943,0 0.35864,0.02851 0.53081,0.08595l30.71466,10.23822c0.02318,0.00773 0.04442,0.02014 0.06693,0.02887c0.03729,0.01411 0.07331,0.02913 0.10892,0.04593c0.05912,0.02755 0.11552,0.05892 0.16994,0.09251c0.02956,0.01814 0.0597,0.03464 0.08792,0.05446c0.06987,0.04905 0.13439,0.10329 0.19553,0.16141c0.00941,0.00941 0.02143,0.01684 0.03084,0.02624c0.06887,0.06954 0.13057,0.14576 0.18634,0.22571c0.01747,0.0252 0.03177,0.05253 0.0479,0.07873c0.03595,0.05812 0.06921,0.11763 0.09776,0.17978c0.01545,0.03326 0.02889,0.06678 0.04199,0.10104c0.02419,0.06316 0.04357,0.12803 0.06036,0.19421c0.00773,0.03292 0.01757,0.06417 0.02362,0.09776c0.01881,0.10011 0.03084,0.20194 0.03084,0.30641v13.6514h-0.00066c0,0.92786 -0.75183,1.67969 -1.67969,1.67969c-0.92786,0 -1.67969,-0.75183 -1.67969,-1.67969v-11.32083l-6.87884,2.29317v19.69237c0,0.7525 -0.50071,1.41312 -1.22499,1.6167l-20.47644,5.75884c-0.04031,0.01142 -0.08106,0.01753 -0.12204,0.02559c-0.02721,0.00571 -0.05415,0.01303 -0.08136,0.01706c-0.08365,0.01277 -0.16699,0.02034 -0.25064,0.02034c-0.08365,0 -0.16799,-0.00724 -0.2513,-0.02034c-0.02721,-0.00403 -0.05383,-0.01135 -0.0807,-0.01706c-0.04132,-0.00806 -0.0827,-0.01417 -0.12335,-0.02559l-20.47644,-5.75884c-0.72462,-0.20358 -1.22433,-0.8642 -1.22433,-1.6167v-19.69237l-9.08934,-3.03c-0.68598,-0.22877 -1.14888,-0.87014 -1.14888,-1.59308c0,-0.72294 0.46289,-1.3653 1.14888,-1.59373l30.71401,-10.23822c0.17234,-0.05745 0.35203,-0.08595 0.53146,-0.08595zM86.48029,91.13026l-25.40265,8.46733l5.45702,1.81944l1.29454,0.43107l18.65109,6.21681l12.70067,-4.234l7.24431,-2.41389l0.00066,-0.00066l5.45702,-1.81879zM67.68353,105.34068v17.29947l17.11707,4.81401v-16.40779l-0.92449,-0.30838zM105.27638,105.34068l-15.67096,5.22343l-1.44545,0.48226v16.40779l17.11641,-4.81401zM50.43852,112.875l4.75036,4.75102l-4.75036,4.75036l-4.75102,-4.75036zM124.34477,123.5292l4.75102,4.75102l-4.75102,4.75102l-4.75102,-4.75102z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="z-10 p-2 text-sm text-center text-gray-400 ">
                An Angular website developed for a startup with non relational
                database FireStore for the product display and MailThis API for
                communicating with the site service provider.
              </div>
            </a>
            <a
              href="#"
              class="relative flex flex-col items-center justify-around p-4 m-5 w-80 h-80 rounded-2xl "
              style={{ transform: "translate(0px, 0px)", opacity: "1" }}
            >
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-700 rounded-xl -rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-400 rounded-xl rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-gray-900 border border-purple-800 rounded-xl transition ease-in-out duration-300 hover:scale-105"
                style={{ zIndex: "-1" }}
              ></div>
              <h3 class="z-10 p-2 text-2xl font-semibold text-purple-700">
                College Website
              </h3>
              <div class="z-10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixblendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path d="M10.41406,10.41406v23.51563h43.67188v-23.51562zM57.44531,10.41406v23.51563h104.14063v-10.07812h-68.86719c-0.92786,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75183,-1.67969 1.67969,-1.67969h68.86719v-10.07812zM18.8125,18.8125h6.71875v6.71875h-6.71875zM28.89063,18.8125h6.71875v6.71875h-6.71875zM38.96875,18.8125h6.71875v6.71875h-6.71875zM10.41406,37.28906v124.29688h151.17188v-107.5h-119.25781c-0.92752,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969h119.25781v-13.4375zM22.17188,50.72656h6.71875c0.92752,0 1.67969,0.75216 1.67969,1.67969c0,0.92752 -0.75216,1.67969 -1.67969,1.67969h-6.71875c-0.92752,0 -1.67969,-0.75216 -1.67969,-1.67969c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969zM32.25,70.88281h107.5c0.92786,0 1.67969,0.75216 1.67969,1.67969v70.54688c0,0.92786 -0.75183,1.67969 -1.67969,1.67969h-107.5c-0.92752,0 -1.67969,-0.75183 -1.67969,-1.67969v-70.54687c0,-0.92752 0.75216,-1.67969 1.67969,-1.67969zM33.92969,74.24219v67.1875h104.14063v-67.1875zM121.56148,82.64063l4.75102,4.75102l-4.75102,4.75102l-4.75102,-4.75102zM86.48029,87.67969c0.17943,0 0.35864,0.02851 0.53081,0.08595l30.71466,10.23822c0.02318,0.00773 0.04442,0.02014 0.06693,0.02887c0.03729,0.01411 0.07331,0.02913 0.10892,0.04593c0.05912,0.02755 0.11552,0.05892 0.16994,0.09251c0.02956,0.01814 0.0597,0.03464 0.08792,0.05446c0.06987,0.04905 0.13439,0.10329 0.19553,0.16141c0.00941,0.00941 0.02143,0.01684 0.03084,0.02624c0.06887,0.06954 0.13057,0.14576 0.18634,0.22571c0.01747,0.0252 0.03177,0.05253 0.0479,0.07873c0.03595,0.05812 0.06921,0.11763 0.09776,0.17978c0.01545,0.03326 0.02889,0.06678 0.04199,0.10104c0.02419,0.06316 0.04357,0.12803 0.06036,0.19421c0.00773,0.03292 0.01757,0.06417 0.02362,0.09776c0.01881,0.10011 0.03084,0.20194 0.03084,0.30641v13.6514h-0.00066c0,0.92786 -0.75183,1.67969 -1.67969,1.67969c-0.92786,0 -1.67969,-0.75183 -1.67969,-1.67969v-11.32083l-6.87884,2.29317v19.69237c0,0.7525 -0.50071,1.41312 -1.22499,1.6167l-20.47644,5.75884c-0.04031,0.01142 -0.08106,0.01753 -0.12204,0.02559c-0.02721,0.00571 -0.05415,0.01303 -0.08136,0.01706c-0.08365,0.01277 -0.16699,0.02034 -0.25064,0.02034c-0.08365,0 -0.16799,-0.00724 -0.2513,-0.02034c-0.02721,-0.00403 -0.05383,-0.01135 -0.0807,-0.01706c-0.04132,-0.00806 -0.0827,-0.01417 -0.12335,-0.02559l-20.47644,-5.75884c-0.72462,-0.20358 -1.22433,-0.8642 -1.22433,-1.6167v-19.69237l-9.08934,-3.03c-0.68598,-0.22877 -1.14888,-0.87014 -1.14888,-1.59308c0,-0.72294 0.46289,-1.3653 1.14888,-1.59373l30.71401,-10.23822c0.17234,-0.05745 0.35203,-0.08595 0.53146,-0.08595zM86.48029,91.13026l-25.40265,8.46733l5.45702,1.81944l1.29454,0.43107l18.65109,6.21681l12.70067,-4.234l7.24431,-2.41389l0.00066,-0.00066l5.45702,-1.81879zM67.68353,105.34068v17.29947l17.11707,4.81401v-16.40779l-0.92449,-0.30838zM105.27638,105.34068l-15.67096,5.22343l-1.44545,0.48226v16.40779l17.11641,-4.81401zM50.43852,112.875l4.75036,4.75102l-4.75036,4.75036l-4.75102,-4.75036zM124.34477,123.5292l4.75102,4.75102l-4.75102,4.75102l-4.75102,-4.75102z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="z-10 p-2 text-sm text-center text-gray-400 ">
                My first ReactJs project for college. The website features a
                firestore database and an admin control to add and modify the
                existing dB data.
              </div>
            </a>
            <a
              href="#"
              class="relative flex flex-col items-center justify-around p-4 m-5 w-80 h-80 rounded-2xl "
              style={{ transform: "translate(0px, 0px)", opacity: "1" }}
            >
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-700 rounded-xl -rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-400 rounded-xl rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-gray-900 border border-purple-800 rounded-xl transition ease-in-out duration-300 hover:scale-105"
                style={{ zIndex: "-1" }}
              ></div>
              <h3 class="z-10 p-2 text-2xl font-semibold text-purple-700">
                Cubeics
              </h3>
              <div class="z-10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixblendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path d="M56.0075,0.1075c-0.44344,0.08062 -0.90031,0.16125 -1.29,0.43c-1.57219,1.06156 -1.92156,3.26531 -0.86,4.8375l7.4175,11.0725c-11.46219,6.07375 -20.00844,16.16531 -22.79,28.2725h95.03c-2.78156,-12.10719 -11.32781,-22.19875 -22.79,-28.2725l7.4175,-11.0725c1.06156,-1.57219 0.71219,-3.77594 -0.86,-4.8375c-1.58562,-1.06156 -3.77594,-0.60469 -4.8375,0.9675l-8.17,12.04c-5.67062,-2.06937 -11.825,-3.225 -18.275,-3.225c-6.45,0 -12.60437,1.15563 -18.275,3.225l-8.17,-12.04c-0.79281,-1.1825 -2.23062,-1.65281 -3.5475,-1.3975zM67.08,27.52c2.84875,0 5.16,2.31125 5.16,5.16c0,2.86219 -2.31125,5.16 -5.16,5.16c-2.86219,0 -5.16,-2.29781 -5.16,-5.16c0,-2.84875 2.29781,-5.16 5.16,-5.16zM104.92,27.52c2.86219,0 5.16,2.31125 5.16,5.16c0,2.86219 -2.29781,5.16 -5.16,5.16c-2.84875,0 -5.16,-2.29781 -5.16,-5.16c0,-2.84875 2.31125,-5.16 5.16,-5.16zM27.52,51.6c-5.6975,0 -10.32,4.6225 -10.32,10.32v48.16c0,5.6975 4.6225,10.32 10.32,10.32c1.20938,0 2.365,-0.25531 3.44,-0.645v-67.51c-1.075,-0.38969 -2.23062,-0.645 -3.44,-0.645zM37.84,51.6v75.68c0,5.68406 4.63594,10.32 10.32,10.32h75.68c5.68406,0 10.32,-4.63594 10.32,-10.32v-75.68zM144.48,51.6c-1.20937,0 -2.365,0.25531 -3.44,0.645v67.51c1.075,0.37625 2.23063,0.645 3.44,0.645c5.6975,0 10.32,-4.6225 10.32,-10.32v-48.16c0,-5.6975 -4.6225,-10.32 -10.32,-10.32zM51.6,144.48v13.76c0,7.59219 6.16781,13.76 13.76,13.76c7.59219,0 13.76,-6.16781 13.76,-13.76v-13.76zM92.88,144.48v13.76c0,7.59219 6.16781,13.76 13.76,13.76c7.59219,0 13.76,-6.16781 13.76,-13.76v-13.76z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="z-10 p-2 text-sm text-center text-gray-400 ">
                My first ever experiment in game development. Lot of thanks to
                various YouTube vidoes and online stuffs. This project was
                developed in Unity Game Engine.
              </div>
            </a>
            <a
              href="#"
              class="relative flex flex-col items-center justify-around p-4 m-5 w-80 h-80 rounded-2xl "
              style={{ transform: "translate(0px, 0px)", opacity: "1" }}
            >
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-700 rounded-xl -rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-purple-400 rounded-xl rotate-2 "
                style={{ zIndex: "-1" }}
              ></div>
              <div
                class="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-gray-900 border border-purple-800 rounded-xl transition ease-in-out duration-300 hover:scale-105"
                style={{ zIndex: "-1" }}
              ></div>
              <h3 class="z-10 p-2 text-2xl font-semibold text-purple-700">
                Dandelion
              </h3>
              <div class="z-10 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 172 172"
                  style={{ fill: "#000000" }}
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style={{ mixblendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path d="M56.0075,0.1075c-0.44344,0.08062 -0.90031,0.16125 -1.29,0.43c-1.57219,1.06156 -1.92156,3.26531 -0.86,4.8375l7.4175,11.0725c-11.46219,6.07375 -20.00844,16.16531 -22.79,28.2725h95.03c-2.78156,-12.10719 -11.32781,-22.19875 -22.79,-28.2725l7.4175,-11.0725c1.06156,-1.57219 0.71219,-3.77594 -0.86,-4.8375c-1.58562,-1.06156 -3.77594,-0.60469 -4.8375,0.9675l-8.17,12.04c-5.67062,-2.06937 -11.825,-3.225 -18.275,-3.225c-6.45,0 -12.60437,1.15563 -18.275,3.225l-8.17,-12.04c-0.79281,-1.1825 -2.23062,-1.65281 -3.5475,-1.3975zM67.08,27.52c2.84875,0 5.16,2.31125 5.16,5.16c0,2.86219 -2.31125,5.16 -5.16,5.16c-2.86219,0 -5.16,-2.29781 -5.16,-5.16c0,-2.84875 2.29781,-5.16 5.16,-5.16zM104.92,27.52c2.86219,0 5.16,2.31125 5.16,5.16c0,2.86219 -2.29781,5.16 -5.16,5.16c-2.84875,0 -5.16,-2.29781 -5.16,-5.16c0,-2.84875 2.31125,-5.16 5.16,-5.16zM27.52,51.6c-5.6975,0 -10.32,4.6225 -10.32,10.32v48.16c0,5.6975 4.6225,10.32 10.32,10.32c1.20938,0 2.365,-0.25531 3.44,-0.645v-67.51c-1.075,-0.38969 -2.23062,-0.645 -3.44,-0.645zM37.84,51.6v75.68c0,5.68406 4.63594,10.32 10.32,10.32h75.68c5.68406,0 10.32,-4.63594 10.32,-10.32v-75.68zM144.48,51.6c-1.20937,0 -2.365,0.25531 -3.44,0.645v67.51c1.075,0.37625 2.23063,0.645 3.44,0.645c5.6975,0 10.32,-4.6225 10.32,-10.32v-48.16c0,-5.6975 -4.6225,-10.32 -10.32,-10.32zM51.6,144.48v13.76c0,7.59219 6.16781,13.76 13.76,13.76c7.59219,0 13.76,-6.16781 13.76,-13.76v-13.76zM92.88,144.48v13.76c0,7.59219 6.16781,13.76 13.76,13.76c7.59219,0 13.76,-6.16781 13.76,-13.76v-13.76z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="z-10 p-2 text-sm text-center text-gray-400 ">
                Again after so much time to kill and boredom made me to work on
                this project. This project took lesser time as compared to
                previous one, obviously learned from mistake.
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
