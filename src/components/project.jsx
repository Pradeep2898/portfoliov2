import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import "./project.css";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";

export default function Project() {
  //component name should be start with caps [dude WTF!]

  const [FeaturedProject, setFeaturedProject] = useState([]);
  const [NonFeaturedProject, setNonFeaturedProject] = useState([]);
  const web =
    "M86,14.33333c-9.159,0 -19.02795,14.05383 -24.46745,35.83333h48.93489c-5.4395,-21.7795 -15.30844,-35.83333 -24.46744,-35.83333zM57.76725,20.14225c-14.21867,6.12033 -26.02239,16.73741 -33.73372,30.02441h22.63379c2.55133,-11.739 6.34127,-21.94041 11.09993,-30.02441zM114.23275,20.14225c4.7515,8.084 8.5486,18.28541 11.09993,30.02441h22.63379c-7.71133,-13.287 -19.51506,-23.90408 -33.73372,-30.02441zM17.63672,64.5c-2.13567,6.794 -3.30339,14.01083 -3.30339,21.5c0,7.48917 1.16772,14.706 3.30339,21.5h26.66504c-0.817,-6.84417 -1.30176,-14.00367 -1.30176,-21.5c0,-7.49633 0.48476,-14.65583 1.30176,-21.5zM58.77507,64.5c-0.9245,6.7295 -1.44173,13.93917 -1.44173,21.5c0,7.56083 0.51723,14.7705 1.44173,21.5h54.44987c0.91733,-6.7295 1.44173,-13.93917 1.44173,-21.5c0,-7.56083 -0.51723,-14.7705 -1.44173,-21.5zM127.69824,64.5c0.817,6.84417 1.30176,14.00367 1.30176,21.5c0,7.49633 -0.48476,14.65583 -1.30176,21.5h26.66504c2.14284,-6.794 3.30339,-14.01083 3.30339,-21.5c0,-7.48917 -1.16056,-14.706 -3.30339,-21.5zM24.03353,121.83333c7.71133,13.287 19.51506,23.90408 33.73372,30.02441c-4.7515,-8.084 -8.5486,-18.28541 -11.09993,-30.02441zM61.53255,121.83333c5.4395,21.7795 15.30845,35.83333 24.46745,35.83333c9.159,0 19.02795,-14.05383 24.46744,-35.83333zM125.33268,121.83333c-2.55133,11.739 -6.34127,21.94041 -11.09993,30.02441c14.21867,-6.12033 26.02239,-16.73741 33.73372,-30.02441z";
  const android =
    "M55.48568,8.68958c-1.05991,0.02437 -2.01984,0.63167 -2.49585,1.57899c-0.476,0.94732 -0.39036,2.08 0.22267,2.94497l8.47683,12.25052c-8.13902,6.23724 -13.83962,15.50298 -15.36354,26.13594h79.34844c-1.52392,-10.63295 -7.22453,-19.8987 -15.36354,-26.13594l8.47683,-12.25052c0.62196,-0.8781 0.69985,-2.03053 0.2017,-2.98433c-0.49815,-0.9538 -1.48844,-1.54835 -2.56446,-1.53963c-0.94443,0.0087 -1.82399,0.48198 -2.35157,1.26536l-8.54401,12.3625c-5.77919,-3.23846 -12.42675,-5.11745 -19.52917,-5.11745c-7.10242,0 -13.74998,1.87899 -19.52917,5.11745l-8.54401,-12.3625c-0.54518,-0.80993 -1.46506,-1.28675 -2.44115,-1.26536zM68.8,28.66667c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM103.2,28.66667c3.1648,0 5.73333,2.56853 5.73333,5.73333c0,3.1648 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.56853 -5.73333,-5.73333c0,-3.1648 2.56853,-5.73333 5.73333,-5.73333zM28.66667,63.06667c-3.1648,0 -5.73333,2.56853 -5.73333,5.73333v45.86667c0,3.1648 2.56853,5.73333 5.73333,5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-45.86667c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333zM45.86667,63.06667v57.33333c0,6.33533 5.13133,11.46667 11.46667,11.46667v20.06667c0,4.7472 3.8528,8.6 8.6,8.6c4.7472,0 8.6,-3.8528 8.6,-8.6v-20.06667h22.93333v20.06667c0,4.7472 3.8528,8.6 8.6,8.6c4.7472,0 8.6,-3.8528 8.6,-8.6v-20.06667c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-57.33333zM143.33333,63.06667c-3.1648,0 -5.73333,2.56853 -5.73333,5.73333v45.86667c0,3.1648 2.56853,5.73333 5.73333,5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-45.86667c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z";

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
    <div id="project" className="bg-gray-900">
      <div
        className="md:px-48 md:py-24"
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
                      className="relative block w-full h-0 pb bg-gray-900 overflow-hidden shadow-lg image"
                      style={{ paddingTop: "75%" }}
                    >
                      <img
                        className="absolute inset-0 w-full h-full object-cover border-0 rounded-lg"
                        src={fpr.img}
                        alt="Project"
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
                    <p className="mb-2 font-bold text-lg">
                      <a
                        className="text-pink-700"
                        href={fpr.link}
                      >
                        {fpr.title}
                      </a>
                    </p>
                    <p className="mb-2 text-md text-gray-400">{fpr.desc}</p>
                    <div className="text-xs text-gray-400 flex space-x-6 pt-6">
                      <a href={fpr.gitlink}>
                        <FiGithub className="mx-auto scale-125 transform hover:text-yellow-700 transition ease-in-out duration-300" />
                      </a>
                      <a href={fpr.link}>
                        <BiLinkExternal className="mx-auto scale-150 transform hover:text-blue-700 transition ease-in-out duration-300" />
                      </a>
                    </div>
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
                  <a
                    href={nfpr.link}
                    className="card bg-gray-800 rounded-md transform hover:translate-y-4 hover:shadow-2xl m-4"
                  >
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
                          <g fill="#c70c5f">
                            <path
                              d={"" + (nfpr.tag == "Android" ? android : web)}
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>

                    {/* Media  */}
                    <div className="card__media text-md p-6 text-gray-400">
                      <p>{nfpr.desc}</p>
                    </div>

                    {/* Header */}
                    <div
                      className="card__header p-3 w-full rounded-md"
                      style={{ bottom: "0", position: "absolute" }}
                    >
                      <h3 className="card__header-title text-white">
                        {nfpr.title}
                      </h3>
                      <p className="card__header-meta text-sm text-purple-700">
                        {nfpr.tag}
                      </p>
                      <div
                        className="card__header-icon mx-2"
                        style={{ right: "0" }}
                      >
                        <svg viewbox="0 0 28 25">
                          <path
                            fill="#d92676"
                            d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
