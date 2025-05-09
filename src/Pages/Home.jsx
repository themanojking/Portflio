import React from "react";
import codeImage from "../assets/code2.png";
import code1Image from "../assets/code1.png";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsPersonLinesFill, BsFillSendCheckFill } from "react-icons/bs";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { skill } from "../Data";

function Home() {
  return (
    <>
      <div className="md:mx-10">
        <div className="flex flex-wrap justify-center items-center gap-10 p-4 flex-col md:flex-row mt-10">
          <div>
            <div className="text-center">
              <h1 className="md:text-6xl  text-3xl  font-bold">
                Hi, I'm <span>Manoj Kumar</span>
              </h1>
              <h1 className="md:text-6xl text-3xl  font-bold">
                Web Designer &
              </h1>
              <h1 className="md:text-6xl text-3xl font-bold">Developer</h1>
            </div>

            <div className="flex justify-center lg:justify-normal  gap-5 md:mt-10 mt-5">
              <h1 className="text-blue-500 text-4xl">
                <FaLinkedin />
              </h1>
              <h1 className="text-black text-4xl">
                <FaGithub />
              </h1>
              <h1 className="text-green-500 text-4xl">
                <IoLogoWhatsapp />
              </h1>
              <h1 className="text-pink-500 text-4xl">
                <FaInstagramSquare />
              </h1>
            </div>

            <div className="flex justify-center lg:justify-normal gap-8 md:mt-8 mt-6">
              <div>
                <button className="flex items-center gap-2 bg-red-400 px-3 py-2 rounded md:text-2xl font-bold">
                  Contact Me{" "}
                  <BsPersonLinesFill className="flex items-center mt-1" />
                </button>
              </div>
              <div>
                <button className="flex items-center gap-2 bg-red-400 px-3 py-2 rounded md:text-2xl font-bold">
                  Get Resume{" "}
                  <RiDownloadCloud2Fill className="flex items-center mt-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img src={codeImage} className="w-[35rem] mt-2" alt="Code" />
          </div>
        </div>

        <div className="lg:mt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold">About Me</h1>
          </div>
          <div className=" flex flex-col  lg:flex-row justify-center items-center gap-8 p-6 ">
            <div>
              <h1 className="text-3xl font-bold">WHO I AM?</h1>
              <p className="lg:text-xl md:text-2xl text-lg font-semibold leading-relaxed mt-3">
                Hi, I'm J. Manojkumar, a dedicated Frontend Developer, young
                entrepreneur, and a BCA student at SASTRA University. I
                specialize in crafting clean, responsive, and user-friendly
                interfaces using React.js and Tailwind CSS, and I'm currently
                expanding my backend skills with Spring Boot.I'm also the
                founder of Delta Info, a creative agency offering services such
                as website development, poster design, and other digital
                solutions tailored for modern businesses. Through Delta Info, I
                combine technical skill with design thinking to deliver
                impactful results for clients.I'm passionate about continuous
                learning, building meaningful digital experiences, and growing
                both as a developer and entrepreneur.
              </p>
            </div>
            <div className="">
              <img src={code1Image} className="w-[250rem]" alt="Code" />
            </div>
          </div>
        </div>

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
        </div>

        <div className="mt-20 mx-10">
          <h1 className="md:text-6xl text-3xl font-bold">Let's Talk</h1>
          <h2 className="md:text-2xl text-xl font-semibold mt-3">
            Here, we're all ears and ready to connect with you. Whether you have
            questions, ideas, or just want 
            to say hello, we'd love to hear from you. Reach out, and let's start
            a conversation—your voice matters to us!
          </h2>
          <div className="mt-10">
            <form>
              <div className="flex flex-wrap md:flex-nowrap md:gap-16">
                <div>
                  <label className="block text-2xl font-bold">Name</label>
                  <input
                    placeholder="Name"
                    type="text"
                    className="border-2 p-1 placeholder:p-1 text-xl font-semibold focus:outline-none rounded mt-3 lg::w-[30rem] md:w-[20rem] h-[3rem]"
                    required
                  />
                </div>
                <div className="mt-4 md:mt-0">
                  <label className="block text-2xl font-bold">Email</label>
                  <input
                    placeholder="Email"
                    type="email"
                    className="border-2 p-1 placeholder:p-1 text-xl font-semibold focus:outline-none rounded mt-3 lg:w-[30rem] md:w-[20rem] h-[3rem]"
                    required
                  />
                </div>
              </div>
              <div className="md:mt-16 mt-5">
                <div className="flex flex-wrap md:flex-nowrap  md:gap-16">
                  <div>
                    <label className="block text-2xl font-bold">Phone</label>
                    <input
                      placeholder="Type The Number"
                      type="Number"
                      className="border-2 p-1 placeholder:p-1 text-xl font-semibold focus:outline-none rounded mt-3 lg:w-[30rem] md:w-[20rem] h-[3rem]"
                      required
                    />
                  </div>
                  <div className="mt-4 md:mt-0 ">
                    <label className="block text-2xl font-bold">Message</label>
                    <input
                      placeholder="Tell About Your Project"
                      type="text"
                      className="border-2 p-1 placeholder:text-xl font-semibold  focus:outline-none rounded mt-3 lg:w-[30rem] md:w-[20rem] w-[20rem] h-[6rem]"
                      required
                    />
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-2xl font-bold bg-red-500 text-white px-3 py-2 rounded mt-5">
                Send <BsFillSendCheckFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
