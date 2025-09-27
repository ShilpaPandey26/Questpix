import React from "react";
import missout from "../../assets/Home/miss-out.png"

export default function StartToday() {
  return (
    <div className="w-full ">
      <div className="border-b border-dotted border-gray-400 mb-5 w-full h-[1px]" />

      {/* SVG cloud shape */}
      <div className="bg-[#2fc18b]">
        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 p-5 flex flex-col sm:flex-row items-center sm:justify-between">
          {/* Left Side */}
          <div className="md:w-1/2 space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-[38px] font-extrabold text-black">
              Don't <span className="text-white">Miss Out.</span>
            </h1>
            <p className="text-base md:text-lg text-black">
              Transform Your Organisation's Future Now!
            </p>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center items-center md:mt-0 mt-8">
            <img
              src={missout}
              alt="Illustration"
              className="w-[70%] max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
