import React, {useEffect} from "react";
import "./skills.css";
import AOS from "aos";

export default function Skills() {
  //component name should be start with caps [dude WTF!]
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="bg-gray-900">
      <div
        className="px-48 py-32"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
      >
        <div className="flex space-x-24">
          <div className="grid grid-cols-3 gap-8 w-2/5 px-8 py-8 border-8 border-gray-900 hover:border-pink-700 transform hover:scale-95 transition ease-in-out duration-1000">
            <img src="https://img.icons8.com/color/75/000000/angularjs.png" />
            <img src="https://img.icons8.com/color/75/000000/nodejs.png" />
            <img src="https://img.icons8.com/color/75/000000/react-native.png" />
            <img src="https://img.icons8.com/color/75/000000/typescript.png" />
            <img src="https://img.icons8.com/color/75/000000/firebase.png" />
            <img src="https://img.icons8.com/color/75/000000/mongodb.png" />
            <img src="https://img.icons8.com/color/75/000000/sass.png" />
            <img src="https://img.icons8.com/color/75/000000/bootstrap.png" />
            <img src="https://img.icons8.com/color/75/000000/heroku.png" />
          </div>
          <div className="w-3/5 text-right">
            <h3 className="text-6xl text-pink-800 font-bold py-8 about">
              About Me
            </h3>
            <p>
              Howdy! My name is Pradeep and I love developing website (mainly
              front-end). My interest in web development started back in 2020
              when Wuhan virus engulfed the world in a pandemic and to counter
              my boredom I started learning web dev frameworks like Angular!
              Fast-forward to today, and I've have the privilege of working in a{" "}
              <a
                href="https://www.tcs.com"
                target="_blank"
                className="text-pink-600 transition ease-in-out duration-300"
              >
                huge organization
              </a>
              , intern at a{" "}
              <a
                href="https://www.zoho.com"
                target="_blank"
                className="text-pink-600 transition ease-in-out duration-300"
              >
                unicorn startup
              </a>{" "}
              and pursue my interest in web development. As of now I'm
              freelancing websites building.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
