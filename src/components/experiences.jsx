import React from "react";

export default function Experience() {
  //in order to use inline style in react
  const styleRight = {
    right: "50%",
    border: "2px solid slateblue",
    borderRadius: "1%",
  };
  const styleLeft = {
    left: "50%",
    border: "2px solid slateblue",
    borderRadius: "1%",
  };
  return (
    <div class="bg-gray-900">
      <div class="py-20 px-48">
        <div class="container mx-auto flex flex-col items-start md:flex-row my-12">
          <div
            class="flex flex-col w-1/3 sticky mt-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <h3 className="text-sm text-pink-800 font-bold intro">
              Experiences
            </h3>
            <p class="text-6xl leading-normal md:leading-relaxed mb-2">
              Where I've Worked
            </p>
            <p class="text-sm md:text-base text-gray-400 mb-4">
              In a world, with experiences.
            </p>
          </div>
          <div class="ml-16 w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden h-full">
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border"
                  style={styleRight}
                ></div>
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border"
                  style={styleLeft}
                ></div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="top-center"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-purple-500">
                      Apr, 2021 - Present
                    </p>
                    <h4 class="mb-3 font-bold text-xl">
                      System Engineer @{" "}
                      <p>
                        <a href="" className="text-pink-600">
                          Tata Consultancy Services
                        </a>
                      </p>
                    </h4>
                    <p class="text-sm leading-snug text-gray-400 text-opacity-100">
                      Working as a JAVA developer, with various technologies
                      like web socket, etc. As a team player, have got
                      appreciatons and recognition for my role to the project.
                    </p>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between items-center w-full right-timeline"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="top-center"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1  w-5/12 px-1 py-4 text-left">
                    <p class="mb-3 text-base text-purple-500">
                      Nov, 2020 - Mar, 2021
                    </p>
                    <h4 class="mb-3 font-bold text-xl">
                      Assistant System Engineer Trainee @{" "}
                      <p>
                        <a href="" className="text-pink-600">
                          Tata Consultancy Services
                        </a>
                      </p>
                    </h4>
                    <p class="text-sm leading-snug text-gray-400 text-opacity-100">
                      Few months into the new organization, was getting familiar
                      with team and project. Five months later got promoted.
                    </p>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-anchor-placement="top-center"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-purple-500">
                      Jun, 2021 - Aug, 2020
                    </p>
                    <h4 class="mb-3 font-bold text-xl">
                      Developer Intern @{" "}
                      <p>
                        <a href="" className="text-pink-600">
                          Zoho Corporation
                        </a>
                      </p>
                    </h4>
                    <p class="text-sm leading-snug text-gray-400 text-opacity-100">
                      Developed webapp for local file access privilege
                      modification using technologies like JNI, Struts along
                      with the SSO authentication and authorization using OAuth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
