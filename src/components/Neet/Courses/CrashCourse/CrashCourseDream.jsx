import React from "react";
import IIt from "../../../../assets/jee-images/courses/classXII/IIt.png";

export default function CrashCourseDream() {
  return (
    <div className="container mx-auto pt-20 sm:pt-40 pb-10 flex flex-col md:flex-row items-center md:justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-[50%] flex flex-col text-center md:text-left pt-10 ">
        <h2 className="text-2xl md:text-[40px] font-bold">
          Don’t Give Up. Your AIIMS Dream Is
          <span className=" text-[#2FC18B]"> Still Achievable.</span>
        </h2>

        <p className="text-[#9EBDEF] text-base sm:text-sm mt-6">
          Our crash course provides the personalised mentorship and intensive
          practice you need to succeed.
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
