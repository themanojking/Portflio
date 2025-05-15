import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <header className="container mx-auto md:mx-8 lg:mx-0 flex justify-between items-center p-5 w-full bg-white shadow-md shadow-violet-800 rounded-b-2xl fixed top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold flex items-center">
            <IoIosPerson />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Manoj Kumar</h1>
          </div>
        </div>

        <nav className="lg:flex hidden items-center gap-16 scroll-smooth">
          <a href="#Home">
            <h2 className="text-xl font-bold hover:text-violet-800">Home</h2>
          </a>
          <a href="#About">
            <h2 className="text-xl font-bold hover:text-violet-800">About</h2>
          </a>
          <a href="#Skills">
            <h2 className="text-xl font-bold hover:text-violet-800">Skills</h2>
          </a>
          <a href="#Myproject">
            <h2 className="text-xl font-bold hover:text-violet-800">
              Projects
            </h2>
          </a>
          <a href="#Letstalk">
            <h2 className="text-xl font-bold hover:text-violet-800">Contact</h2>
          </a>
        </nav>

        <button
          className="lg:hidden text-2xl flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full lg:hidden bg-white flex flex-col items-center gap-5 py-5 ">
            <a href="#Home" onClick={() => setIsOpen(false)}>
              <h2 className="text-xl font-bold hover:text-violet-800">Home</h2>
            </a>
            <a href="#About" onClick={() => setIsOpen(false)}>
              <h2 className="text-xl font-bold hover:text-violet-800">About</h2>
            </a>
            <a href="#Skills" onClick={() => setIsOpen(false)}>
              <h2 className="text-xl font-bold hover:text-violet-800">
                Skills
              </h2>
            </a>
            <a href="#Myproject" onClick={() => setIsOpen(false)}>
              <h2 className="text-xl font-bold hover:text-violet-800">
                Projects
              </h2>
            </a>
            <a href="#Letstalk" onClick={() => setIsOpen(false)}>
              <h2 className="text-xl font-bold hover:text-violet-800">
                Contact
              </h2>
            </a>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
