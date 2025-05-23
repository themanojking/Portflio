import React from "react";
import code1Image from "/assets/codeImage4.png";

function About() {
  return (
    <>
      <div className="lg:mt-20 mx-4">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="text-5xl font-bold">About Me</h1>
        </div>
        <div className=" flex flex-col  lg:flex-row justify-center items-center gap-8 p-2 mt-5 lg:mt-0">
          <div>
            <h1 className="text-3xl text-violet-800 font-bold">WHO I AM?</h1>
            <p className="lg:text-xl md:text-2xl text-lg font-semibold leading-relaxed mt-3">
              Hi, I'm J. Manojkumar, a dedicated Frontend Developer, young
              entrepreneur, and a BCA student at SASTRA University. I specialize
              in crafting clean, responsive, and user-friendly interfaces using
              React.js and Tailwind CSS, and I'm currently expanding my backend
              skills with Spring Boot.I'm also the founder of Delta Info, a
              creative agency offering services such as website development,
              poster design, and other digital solutions tailored for modern
              businesses. Through Delta Info, I combine technical skill with
              design thinking to deliver impactful results for clients.I'm
              passionate about continuous learning, building meaningful digital
              experiences, and growing both as a developer and entrepreneur.
            </p>
          </div>
          <div className="">
            <img src={code1Image} className="w-[250rem] p-5" alt="Code" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
