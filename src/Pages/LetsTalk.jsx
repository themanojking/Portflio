import React, { useRef } from "react";
import { BsFillSendCheckFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";

function LetsTalk() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const handlesend = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const message = messageRef.current.value.trim();

    const fullMessage = `👋 Hello, I'm ${name}.\n📧 Email: ${email}\n📱 Phone: ${phone}\n💬 Message: ${message}`;

    const whatsappURL = `https://wa.me/9344245993?text=${encodeURIComponent(
      fullMessage
    )}`;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all fields !.");
      return;
    }

    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailpattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (phone.length < 10) {
      toast.error("Please enter 10 digits number");
      return;
    }

    if(phone.length > 10 )
    {
      toast.error("Only 10 digits allowed");
      return;
    }

    window.open(whatsappURL, "_blank");

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    messageRef.current.value = "";

    toast.success("Message Sent!");
  };
  return (
    <>
      <div className="mt-20 mx-2 lg:mx-5">
        <h1 className="md:text-6xl text-3xl text-violet-800 font-bold">
          Let's Talk
        </h1>
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
                <label className="block text-2xl text-violet-800 font-bold">
                  Name
                </label>
                <input
                  ref={nameRef}
                  placeholder="Name"
                  type="text"
                  className="border-2 p-1 placeholder:p-1 text-xl font-semibold focus:outline-none rounded mt-3 lg::w-[30rem] md:w-[20rem] h-[3rem]"
                  required
                />
              </div>
              <div className="mt-4 md:mt-0">
                <label className="block text-2xl text-violet-800 font-bold">
                  Email
                </label>
                <input
                  ref={emailRef}
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
                  <label className="block text-2xl text-violet-800 font-bold">
                    Phone
                  </label>
                  <input
                    ref={phoneRef}
                    placeholder="Type The Number"
                    type="Number"
                    className="border-2 p-1 placeholder:p-1 text-xl font-semibold focus:outline-none rounded mt-3 lg:w-[30rem] md:w-[20rem] h-[3rem]"
                    required
                  />
                </div>
                <div className="mt-4 md:mt-0 ">
                  <label className="block text-2xl text-violet-800 font-bold">
                    Message
                  </label>
                  <textarea
                    ref={messageRef}
                    placeholder="Tell About Your Project"
                    type="text"
                    className="border-2 p-1 placeholder:text-xl font-semibold  focus:outline-none rounded mt-3 lg:w-[30rem] md:w-[20rem] w-[20rem] h-[6rem]"
                    required
                  />
                </div>
              </div>
            </div>
            <ToastContainer position="bottom-left" autoClose={4000} />
            <button
              className="flex items-center gap-2 text-2xl font-bold bg-violet-800 text-white px-3 py-2 rounded mt-5"
              onClick={handlesend}
              type="submit"
            >
              Send <BsFillSendCheckFill />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LetsTalk;
