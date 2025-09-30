import React from "react";
import IIt from "../../../../assets/jee-images/courses/classXII/IIt.png";

export default function ClassXIIPlusDream() {
  return (
    <div className="container mx-auto pt-20 sm:pt-40 pb-20 flex flex-col md:flex-row items-center md:justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-[40%] flex flex-col text-center md:text-left pt-10 ">
        <h2 className="text-4xl sm:text-[40px] font-bold">
          Your{" "}
          <span className=" text-[#2FC18B] border-1 border-amber-300 rounded-[50%]  m-2 p-2 ">
            AIIMS
          </span>
          Dream,Is Still Alive.
        </h2>

       
        <p className="text-[#9EBDEF] text-base sm:text-sm mt-4">
          Don’t let the last opportunity pass. Begin your NEET prep with QuestPix and
rewrite your success story.
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
