import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState();

  return (
    <>
      <header className="flex justify-between items-center p-5 w-full">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold flex items-center">
            <IoIosPerson />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Manoj Kumar</h1>
          </div>
        </div>

        <nav className="lg:flex hidden items-center gap-16">
          <Link to="/">
            <h2 className="text-xl font-bold hover:text-violet-800">Home</h2>
          </Link>
          <Link to="/about">
            <h2 className="text-xl font-bold hover:text-violet-800">About</h2>
          </Link>
          <Link to="/skills">
            <h2 className="text-xl font-bold hover:text-violet-800">Skills</h2>
          </Link>
          <Link to="/letstalk">
            <h2 className="text-xl font-bold hover:text-violet-800">Contact</h2>
          </Link>
        </nav>

        <button
          className="lg:hidden text-2xl flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full lg:hidden bg-white flex flex-col items-center gap-5 py-5 ">
            <h2 className="text-xl font-bold hover:text-violet-800" >Home</h2>
            <h2 className="text-xl font-bold hover:text-violet-800">About</h2>
            <h2 className="text-xl font-bold hover:text-violet-800">Skills</h2>
            <h2 className="text-xl font-bold hover:text-violet-800">Contact</h2>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
