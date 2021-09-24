import React, { useEffect, useState } from "react";
import "./skills.css";
import firebase from "../firebase";

export default function Skills() {
  //component name should be start with caps [dude WTF!]
  const [About, setAbout] = useState([]);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    await firebase
      .collection("portfolioV2")
      .doc("about")
      .get()
      .then((docs) => {
        const data = docs.data();
        setAbout([...About, data]);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  };

  return (
    <div id="about" className="bg-gray-900">
      <div className="">
        <div className="flex flex-wrap overflow-hidden xl:px-48 md:px-32 pb-24 justify-between">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="grid grid-cols-3 gap-8 lg:w-2/5 md:w-full overflow-hidden px-8 py-8 rounded-md bg-black menu__container">
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
          </div>
          <div
            className="lg:w-3/5 md:w-full pt-20 md:pt-12 overflow-hidden text-right px-4 md:px-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <h3 className="text-6xl text-pink-800 font-bold py-8 about">
              About Me
            </h3>
            {About &&
              About.map((About) => {
                return (
                  <div className="text-white ml-8">
                    <p dangerouslySetInnerHTML={{ __html: About.desc }} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
