import React from "react";
import { FaRegCopyright,FaLinkedin,FaGithub,FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="flex flex-wrap justify-center md:gap-5 lg:gap-28 items-center mt-10 space-y-1 md:space-y-0 text-violet-800 p-2 ">
        <div>
          <h2 className="text-lg font-bold">Designed and Developed by Manoj </h2>
        </div>
        <div className="flex items-center gap-2 text-xl font-bold">
          <FaRegCopyright className="text-black" />
          <h2 className="">Copyright 2025@MK</h2>
        </div>
        <div className="flex justify-center lg:justify-normal gap-5 mt-3 md:mt-0 ml-5 lg:ml-0">
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
      </div>
    </>
  );
}

export default Footer;
