import React from "react";
import codeImage from "/assets/codeImage3.png";
import { FaLinkedin, FaGithub, FaInstagramSquare,FaAngleDoubleDown } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsPersonLinesFill } from "react-icons/bs";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import About from "./About";
import Skill from "./Skill";
import LetsTalk from "./LetsTalk";
import Myproject from "./Myproject";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Navbar />
      <section id="Home" className="pt-5">
        <div className="flex flex-wrap justify-center items-center gap-10 p-4 flex-col md:flex-row mt-16 md:mt-20 lg:mt-10">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="md:text-6xl  text-3xl  font-bold">
                Hi, I'm <span className="text-violet-800">Manoj Kumar</span>
              </h1>
              <h1 className="md:text-6xl text-3xl  font-bold">
                Web Designer &
              </h1>
              <h1 className="md:text-6xl text-3xl font-bold">Developer</h1>
            </div>

            <div className="flex justify-center lg:justify-normal  gap-5 md:mt-10 mt-5">
              <a
                href="https://www.linkedin.com/in/manojkumar2005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-blue-500 text-4xl">
                  <FaLinkedin />
                </h1>
              </a>
              <a
                href="https://github.com/themanojking"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-black text-4xl">
                  <FaGithub />
                </h1>
              </a>
              <a
                href="https://wa.me/919344245993"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-green-500 text-4xl">
                  <IoLogoWhatsapp />
                </h1>
              </a>
              <a
                href="https://www.instagram.com/the_manoj_king_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1 className="text-pink-500 text-4xl">
                  <FaInstagramSquare />
                </h1>
              </a>
            </div>

            <div className="flex justify-center lg:justify-normal gap-8 md:mt-8 mt-6">
              <div>
                <a href="#Letstalk">
                <button className="flex items-center gap-2 bg-violet-800 text-white px-3 py-2 rounded md:text-2xl font-bold">
                  Contact Me{" "}
                  <BsPersonLinesFill className="flex items-center mt-1" />
                </button>
                </a>
              </div>
              <div>
                <a href="\Manojkumar Jaganathan_res.pdf.pdf" download="Manojresume.pdf">
                  <button className="flex items-center gap-2 bg-violet-800 text-white px-3 py-2 rounded md:text-2xl font-bold">
                    Get Resume{" "}
                    <RiDownloadCloud2Fill className="flex items-center mt-1" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={codeImage}
              className="w-[35rem] mt-2 p-2"
              alt="Code"
            />
          </div>
        </div>
        <div className="flex justify-center text-3xl text-violet-800 animate-bounce z-50">
            <FaAngleDoubleDown />
          </div>
      </section>
      <section id="About" className="pt-10">
        <About />
      </section>
      <section id="Skills" className="pt-20">
        <Skill />
      </section>
      <section id="Letstalk" className="pt-10">
        <LetsTalk />
      </section>
      <section id="Myproject" className="pt-10">
        <Myproject />
      </section>
        <Footer />
      
    </>
  );
}

export default Home;
