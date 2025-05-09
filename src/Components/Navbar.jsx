import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

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
          <h2 className="text-xl font-bold">Home</h2>
          <h2 className="text-xl font-bold">About</h2>
          <h2 className="text-xl font-bold">Skills</h2>
          <h2 className="text-xl font-bold">Contact</h2>
        </nav>

        <button className="lg:hidden text-2xl flex items-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars /> }
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full lg:hidden flex flex-col items-center gap-5 py-5 ">
          <h2 className="text-xl font-bold">Home</h2>
          <h2 className="text-xl font-bold">About</h2>
          <h2 className="text-xl font-bold">Skills</h2>
          <h2 className="text-xl font-bold">Contact</h2>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
