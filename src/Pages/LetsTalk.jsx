import React from "react";
import {  BsFillSendCheckFill } from "react-icons/bs";

function LetsTalk() {
  return (
    <>
      <div className="mt-20 mx-10">
        <h1 className="md:text-6xl text-3xl font-bold">Let's Talk</h1>
        <h2 className="md:text-2xl text-xl font-semibold mt-3">
          Here, we're all ears and ready to connect with you. Whether you have
          questions, ideas, or just want to say hello, we'd love to hear from
          you. Reach out, and let's start a conversation—your voice matters to
          us!
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
    </>
  );
}

export default LetsTalk;
