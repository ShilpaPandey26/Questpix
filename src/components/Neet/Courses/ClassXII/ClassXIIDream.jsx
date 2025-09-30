import React from "react";
import IIt from "../../../../assets/jee-images/courses/classXII/IIt.png";

export default function ClassXIIDream() {
  return (
    <div className="container mx-auto px-4 pt-20 sm:pt-40 pb-20 flex flex-col md:flex-row items-center md:justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-[50%] flex flex-col text-center md:text-left pt-10 px-16">
        <h2 className="text-4xl sm:text-[40px] font-bold">
          Your
          <span className=" text-[#2FC18B] border-1 border-amber-300 rounded-[50%]  m-2 p-2 ">
            AIIMS
          </span>
          Dream,
        </h2>

        <h2 className="text-4xl sm:text-[40px] font-bold text-[#2FC18B] ">
          Our Mission.
        </h2>
        <p className="text-[#9EBDEF] text-base sm:text-sm mt-4">
          Our intensive program for class 12th students provides focused
          preparation to help you make the most of your final year.
        </p>
        <div className="flex gap-2 mx-auto md:mx-0 bg-[#2FC18B] w-fit px-4 py-2 rounded-xl mt-4 mb-6">
          <button className="text-white  cursor-pointer">
            Start Now <br />
            Conquer NEET
          </button>
        </div>
      </div>
      {/* Right Image */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          src={IIt}
          alt="program"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
}
