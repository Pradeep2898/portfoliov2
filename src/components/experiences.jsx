import React, { useEffect, useState } from "react";
import firebase from "../firebase";

export default function Experience() {
  const [Experience, setExperience] = useState([]);
  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    await firebase
      .collection("portfolioV2")
      .doc("exp")
      .get()
      .then((docs) => {
        const data = docs.data();
        setExperience([...Experience, data]);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  };

  return (
    <div id="experience" className="bg-gray-900">
      <div className="px-6 md:py-20 md:px-48">
        <div className="container flex flex-col items-start md:flex-row my-12">
          <div
            className="flex flex-col w-1/3 sticky"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-bottom"
          >
            <h3 className="text-sm text-pink-800 font-bold intro">
              Experiences
            </h3>
            <p className="text-6xl leading-normal md:leading-relaxed mb-2">
              Where I've Worked
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              In a world, with experiences.
            </p>
          </div>
          <div className="w-2/3 sticky mt-8">
            <div className="w-full h-full">
              <div className="wrap overflow-hidden h-full">
                {
                  //Here we loop trough the exp items
                  Experience[0] &&
                    Object.keys(Experience[0]).map((item, index) => (
                      <div
                        className={
                          "flex" +
                          (index % 2 ? " " : "-row-reverse ") +
                          (index % 2 ? "right" : "left") +
                          "-timeline " +
                          "mb-8 justify-between items-center w-full"
                        }
                        data-aos={"fade-" + (index % 2 ? "right" : "left")}
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-center"
                        key={index}
                      >
                        <div
                          className={
                            "order-1 w-full md:w-9/12 md:ml-40 py-4 text-" +
                            (index % 2 ? "left" : "right")
                          }
                        >
                          {Experience &&
                            Experience.map((exp) => {
                              return (
                                <div className="text-white">
                                  {
                                    // Object.keys(exp).map((key) => {
                                    //   return (
                                    <div>
                                      <p className="mb-3 text-base text-purple-500">
                                        {exp[item].duration}
                                      </p>
                                      <h4 className="mb-3 font-bold text-xl">
                                        {exp[item].designation} @<br />
                                        <p>
                                          <a
                                            href={exp[item].site}
                                            className="text-pink-600"
                                          >
                                            {exp[item].organization}
                                          </a>
                                        </p>
                                      </h4>
                                      <p className="text-sm leading-snug text-gray-400 text-opacity-100">
                                        {exp[item].desc}
                                      </p>
                                    </div>
                                    //   );
                                    // })
                                  }
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
