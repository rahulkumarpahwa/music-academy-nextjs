"use client";

import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors";

const MeteorsDemo = () => {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="pt-36 min-h-screen h-full bg-gray-900 py-12 w-full max-w-7xl">
      <div className="flex flex-col justify-center items-center z-90">
        <div className="">
          <h2 className="my-7 text-center text-7xl font-bold font-sans">
            Contact Us
          </h2>
          <p className="my-8 text-center max-w-lg text-gray-500">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 ">
          <input
            type="email"
            placeholder="Your email address"
            className="w-[40rem] p-4 bg-black rounded-lg text-neutral-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <textarea
            rows={7}
            className="w-[40rem] p-4 bg-black text-neutral-400 rounded-lg"
            placeholder="Your message"
            onChange={(e) => setMsg(e.target.value)}
          >
            {msg}
          </textarea>
          <button className="mt-5 px-4 py-2 self-start text-white bg-teal-500 rounded-lg">Send Message</button>
        </div>
      </div>
      <Meteors number={40} />
    </div>
  );
};

export default MeteorsDemo;
