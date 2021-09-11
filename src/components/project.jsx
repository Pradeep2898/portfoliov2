import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import "./project.css";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import img1 from "../images/IlluminatION.png";
import img2 from "../images/Beginning.png";
import img3 from "../images/Pradeep-Anand-The-Lazy-Coder-.png";

export default function Project() {
  //component name should be start with caps [dude WTF!]

  const [FeaturedProject, setFeaturedProject] = useState([]);
  const [NonFeaturedProject, setNonFeaturedProject] = useState([]);

  useEffect(() => {
    fetchFeaturedProject();
    fetchNonFeaturedProject();
  }, []);

  const fetchFeaturedProject = async () => {
    await firebase
      .collection("portfolioV2")
      .doc("project")
      .collection("featured")
      .get()
      .then((querySnapshot) => {
        const tempDoc = [];
        querySnapshot.forEach((doc) => {
          tempDoc.push(doc.data());
        });
        setFeaturedProject(tempDoc);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  };

  const fetchNonFeaturedProject = async () => {
    await firebase
      .collection("portfolioV2")
      .doc("project")
      .collection("non-featured")
      .get()
      .then((querySnapshot) => {
        const tempDoc = [];
        querySnapshot.forEach((doc) => {
          tempDoc.push(doc.data());
        });
        setNonFeaturedProject(tempDoc);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  };

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
        {FeaturedProject &&
          FeaturedProject.map((fpr, i) => {
            return (
              <div className="grid grid-cols-12 md:items-center w-full p-4">
                <div
                  className={
                    "col-span-12 md:col-span-auto max-w-screen-sm md:row-start-1 md:row-end-1 " +
                    (i % 2
                      ? "md:col-start-6 md:col-end"
                      : "md:col-start-1 md:col-end-10")
                  }
                >
                  <a className="" href={fpr.link} title="Image Link">
                    <picture
                      className="relative block w-full h-0 pb bg-gray-900 overflow-hidden shadow-lg crap"
                      style={{ paddingTop: "75%" }}
                    >
                      <img
                        className="absolute inset-0 w-full h-full object-cover border-0 rounded-lg"
                        src={fpr.img}
                        alt="A random image from Unsplash"
                      />
                    </picture>
                  </a>
                </div>
                <div
                  className={
                    "col-span-12 md:col-span-auto md:row-start-1 md:row-end-1 -mt-8 md:mt-0 relative z-10 px-4 md:px-0 " +
                    (i % 2
                      ? "md:md:col-start md:col-end-7"
                      : "md:col-start-7 text-right md:col-end")
                  }
                >
                  <div className="p-4 md:p-8 bg-gray-800 shadow-lg rounded-md">
                    <p className="mb-2 text-lg leading-none font-medium">
                      <a
                        className="text-pink-700"
                        href={fpr.link}
                        title="Heading Link"
                      >
                        {fpr.title}
                      </a>
                    </p>
                    <p className="mb-2 text-md text-gray-400">{fpr.desc}</p>
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
                    {fpr.topics &&
                      fpr.topics.map((tag) => {
                        return <p>{tag}</p>;
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-center"
        >
          <p className="text-center text-4xl py-8 underline">
            Some other works
          </p>
          <div className="flex flex-wrap p-4 w-full overflow-hidden justify-center">
            {NonFeaturedProject &&
              NonFeaturedProject.map((nfpr) => {
                return (
                  <article className="card bg-gray-800 rounded-md transform hover:translate-y-4 hover:shadow-2xl m-4">
                    <a href={nfpr.link} className="card__link">
                      {/* Icon */}
                      <div className="card__icon p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="48"
                          height="48"
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
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#ffffff">
                              <path d="M86,14.33333c-9.159,0 -19.02795,14.05383 -24.46745,35.83333h48.93489c-5.4395,-21.7795 -15.30844,-35.83333 -24.46744,-35.83333zM57.76725,20.14225c-14.21867,6.12033 -26.02239,16.73741 -33.73372,30.02441h22.63379c2.55133,-11.739 6.34127,-21.94041 11.09993,-30.02441zM114.23275,20.14225c4.7515,8.084 8.5486,18.28541 11.09993,30.02441h22.63379c-7.71133,-13.287 -19.51506,-23.90408 -33.73372,-30.02441zM17.63672,64.5c-2.13567,6.794 -3.30339,14.01083 -3.30339,21.5c0,7.48917 1.16772,14.706 3.30339,21.5h26.66504c-0.817,-6.84417 -1.30176,-14.00367 -1.30176,-21.5c0,-7.49633 0.48476,-14.65583 1.30176,-21.5zM58.77507,64.5c-0.9245,6.7295 -1.44173,13.93917 -1.44173,21.5c0,7.56083 0.51723,14.7705 1.44173,21.5h54.44987c0.91733,-6.7295 1.44173,-13.93917 1.44173,-21.5c0,-7.56083 -0.51723,-14.7705 -1.44173,-21.5zM127.69824,64.5c0.817,6.84417 1.30176,14.00367 1.30176,21.5c0,7.49633 -0.48476,14.65583 -1.30176,21.5h26.66504c2.14284,-6.794 3.30339,-14.01083 3.30339,-21.5c0,-7.48917 -1.16056,-14.706 -3.30339,-21.5zM24.03353,121.83333c7.71133,13.287 19.51506,23.90408 33.73372,30.02441c-4.7515,-8.084 -8.5486,-18.28541 -11.09993,-30.02441zM61.53255,121.83333c5.4395,21.7795 15.30845,35.83333 24.46745,35.83333c9.159,0 19.02795,-14.05383 24.46744,-35.83333zM125.33268,121.83333c-2.55133,11.739 -6.34127,21.94041 -11.09993,30.02441c14.21867,-6.12033 26.02239,-16.73741 33.73372,-30.02441z"></path>
                            </g>
                          </g>
                        </svg>
                      </div>

                      {/* Media  */}
                      <div className="card__media text-md p-3 rounded-md">
                        <p>{nfpr.desc}</p>
                      </div>

                      {/* Header */}
                      <div className="card__header p-3">
                        <h3 className="card__header-title text-white">
                          {nfpr.title}
                        </h3>
                        <p className="card__header-meta text-sm text-purple-700">
                          {nfpr.tag}
                        </p>
                        <div className="card__header-icon mx-2">
                          <svg viewbox="0 0 28 25">
                            <path
                              fill="#d92676"
                              d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
