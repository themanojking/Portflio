import React from "react";
import { skill, tool } from "../Data";

function Skill() {
  return (
    <>
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex justify-center"
        >
          <h1 className="md:text-5xl text-3xl font-bold">
            Professional Skillset
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-16">
          {skill.map((prop) => (
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-delay="100"
              data-aos-duration="500"
              key={prop.id}
              className="flex flex-col items-center border-2 rounded md:w-[20%] lg:h-[20%] p-5 shadow-lg shadow-violet-600 transition-transform duration-300 hover:scale-110"
            >
              <h1 className={`text-8xl ${prop.color}`}>{prop.icon}</h1>
              <h2 className="text-center mt-2 font-bold">{prop.tittle}</h2>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex justify-center"
          >
            <h1 className="md:text-5xl text-3xl font-bold">Tools I Use</h1>
          </div>
          <div className="flex flex-wrap justify-center lg:gap-20 gap-10 mt-10 ">
            {tool.map((prop) => (
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-delay="100"
                data-aos-duration="600"
                key={prop.id}
                className="flex flex-col items-center border-2 rounded md:w-[20%] lg:h-[20%] p-5 shadow-lg shadow-violet-600 transition-transform duration-300 hover:scale-110"
              >
                <h1 className={`text-8xl ${prop.color}`}>{prop.icon}</h1>
                <h2 className="text-center mt-2 font-bold">{prop.tittle}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
