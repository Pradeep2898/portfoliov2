import React from "react";
import "../styles/output.css";
import logo from "../assets/noun_Dragonfly.svg";
import { Link } from "react-scroll";

export default function Navbar() {
  //component name should be start with caps [dude WTF!]
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      <nav className="bg-gray-900 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            <div className="w-full justify-between flex items-center">
              <a
                className="flex-shrink-0"
                href="/#"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                <img
                  className="h-20 w-20 mt-4"
                  src={logo}
                  alt="Pradeep Anand"
                />
              </a>
              <div
                className={
                  "hidden sm:block" + (navbarOpen ? " flex" : " hidden")
                }
              >
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="about"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-gray-300 cursor-pointer hover:text-pink-600 dark:hover:text-white px-3 py-2 text-sm font-medium duration-300"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-center"
                  >
                    About
                  </Link>
                  <Link
                    to="experience"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-gray-300 cursor-pointer hover:text-pink-600 dark:hover:text-white px-3 py-2 text-sm font-medium duration-300"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-center"
                  >
                    Experience
                  </Link>
                  <Link
                    to="project"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-gray-300 cursor-pointer hover:text-pink-600 dark:hover:text-white px-3 py-2 text-sm font-medium duration-300"
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    Project
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-gray-300 cursor-pointer hover:text-pink-600 dark:hover:text-white px-3 py-2 text-sm font-medium duration-300"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-center"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex sm:hidden">
              <button
                className="z-20 inline-flex items-center justify-center focus:outline-none"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 172 172"
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
                    style={{ mixBlendMode: "normal" }}
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#d92676">
                      <path
                        d={
                          "" +
                          (navbarOpen
                            ? "M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"
                            : "M10.75,21.5v10.75h139.75v-10.75zM10.75,75.25v10.75h139.75v-10.75zM10.75,129v10.75h139.75v-10.75z")
                        }
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            "sm:hidden bg-gray-900 z-10 text-center justify-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          style={{
            height: "100vh",
            padding: "50px 10px",
            width: "min(75vw, 400px)",
            right: "0",
            alignItems: "center",
            position: "fixed",
            top: "0",
            bottom: "0",
            boxShadow: "30px 0 100px 30px #158",
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-10 sm:px-3">
            <Link
              to="about"
              smooth={true}
              offset={-50}
              duration={500}
              className="text-gray-300 cursor-pointer hover:text-pink-600 block px-3 py-2 text-base font-medium"
              onClick={() =>
                setTimeout(
                  function () {
                    setNavbarOpen(!navbarOpen);
                  }.bind(),
                  500
                )
              }
            >
              About
            </Link>
            <Link
              to="experience"
              smooth={true}
              offset={-50}
              duration={500}
              className="text-gray-300 cursor-pointer hover:text-pink-600 block px-3 py-2 text-base font-medium"
              onClick={() =>
                setTimeout(
                  function () {
                    setNavbarOpen(!navbarOpen);
                  }.bind(),
                  500
                )
              }
            >
              Experience
            </Link>
            <Link
              to="project"
              smooth={true}
              offset={-50}
              duration={500}
              className="text-gray-300 cursor-pointer hover:text-pink-600 block px-3 py-2 text-base font-medium"
              onClick={() =>
                setTimeout(
                  function () {
                    setNavbarOpen(!navbarOpen);
                  }.bind(),
                  500
                )
              }
            >
              Project
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
              className="text-gray-300 cursor-pointer hover:text-pink-600 block px-3 py-2 text-base font-medium"
              onClick={() =>
                setTimeout(
                  function () {
                    setNavbarOpen(!navbarOpen);
                  }.bind(),
                  500
                )
              }
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
