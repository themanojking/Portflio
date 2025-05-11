import React from "react";
import { skill, tool } from "../Data";

function Skill() {
  return (
    <>
      <div>
        <div className="flex justify-center">
          <h1 className="md:text-5xl text-3xl font-bold">
            Professional Skillset
          </h1>
        </div>
        <div className="flex flex-wrap justify-center lg:gap-20 gap-10 mt-10">
          {skill.map((prop) => (
            <div
              key={prop.id}
              className="flex flex-col items-center border-2 rounded md:w-[20%] lg:h-[20%] p-5"
            >
              <h1 className={`text-8xl ${prop.color}`}>{prop.icon}</h1>
              <h2 className="text-center mt-2 font-bold">{prop.tittle}</h2>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex justify-center">
            <h1 className="md:text-5xl text-3xl font-bold">Tools I Use</h1>
          </div>
          <div className="flex flex-wrap justify-center lg:gap-20 gap-10 mt-10">
            {tool.map((prop) => (
              <div
                key={prop.id}
                className="flex flex-col items-center border-2 rounded md:w-[20%] lg:h-[20%] p-5"
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
