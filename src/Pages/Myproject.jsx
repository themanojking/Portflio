import React from "react";
import { project } from "../Data";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

function Myproject() {
  return (
    <>
      <div className="mt-16">
        <div
          className="text-center space-y-2"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="md:text-5xl text-3xl  font-bold">My Recent Works</h1>
          <h3 className="md:text-2xl text-sm  font-semibold ">
            Here are a few projects I've worked on recently
          </h3>
        </div>

        <div className="mt-10 ">
          <div className="flex flex-wrap justify-center lg:gap-10 gap-7 ">
            {project.map((prop) => (
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-delay="100"
                data-aos-duration="600"
                key={prop.id}
                className="border lg:w-[28rem] md:w-[22rem] w-[20rem] rounded px-3 py-2 shadow-lg shadow-violet-600"
              >
                <img src={prop.img} alt="projects" className=""></img>
                <h1 className="text-3xl text-violet-800 font-bold text-center">
                  {prop.tittle}
                </h1>
                <h3 className="text-md font-semibold mt-2 leading-6">
                  {prop.desc}
                </h3>
                <div className="flex justify-center gap-5 mt-5 p-2">
                  <div>
                    <button className="flex items-center gap-2 bg-violet-800 px-3 py-2 rounded-lg font-bold text-lg text-white">
                      <FaGithub /> GitHub
                    </button>
                  </div>
                  <div>
                    <button className="flex items-center gap-2 bg-violet-800 px-3 py-2 rounded-lg font-bold text-lg text-white">
                      <MdLiveTv /> Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Myproject;
