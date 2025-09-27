import React from "react";
import IIt from "../../../../assets/jee-images/courses/IIt.png";

export default function ClassXIDream() {
  return (
    <div className="container mx-auto px-4 pt-10 flex flex-col md:flex-row items-center md:justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-[60%] flex flex-col text-center md:text-left pt-10">
        <h2 className="text-3xl sm:text-[40px] font-bold">Dream IIT,</h2>
        <h2 className="text-3xl sm:text-[40px] text-[#2FC18B] font-bold">
          Achieve IIT.
        </h2>
        <p className="text-[#9EBDEF] text-base mt-6">
          Turn your IIT aspirations into reality. Enrol in QuestPix courses and
          let's get started.
        </p>
        <div className="flex gap-2 mx-auto md:mx-0 bg-[#2FC18B] w-fit px-4 py-2 rounded-xl mt-4 ">
          <button className="text-white cursor-pointer ">
            Start Now <br />
            Conquer Jee
          </button>
        </div>
      </div>
      {/* Right Image */}
      <div className="w-full lg:w-[40%] flex justify-center">
        <img
          src={IIt}
          alt="program"
          className="w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </div>
  );
}


