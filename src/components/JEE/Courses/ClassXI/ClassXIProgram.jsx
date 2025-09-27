import React from "react";
import top from "../../../../assets/jee-images/courses/top.png";
import phone from "../../../../assets/jee-images/courses/Vector.png";

export default function ClassXIProgram() {
  return (
    <div className="container mx-auto pt-30 flex flex-col md:flex-row items-center md:justify-between">
      
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-2 text-center md:text-left">
        <h3 className="text-xl sm:text-2xl font-bold">
          Crack the <span className="text-[#f1c618]">JEE Code</span> with
        </h3>
        <h2 className="text-2xl sm:text-4xl  font-bold">
          2-Years Program
        </h2>
        <h3 className="text-lg sm:text-2xl  font-bold">
          For <span className="text-[#f1c618]">Class 11th.</span>
        </h3>

        <p className="text-sm sm:text-base  mt-4 text-[#9EBDEF] ">
          20+ years experienced faculties, personalized study plans, and
          rigorous practice will guide you every step of the way for cracking
          <span className="text-white"> JEE Main and Advanced.</span>
        </p>

        {/* Button */}
        <div className="flex gap-2 mx-auto md:mx-0 bg-[#2FC18B] w-fit px-4 py-2 rounded-xl mt-4 cursor-pointer">
          <img src={phone} alt="phone" className="h-5 w-5" />
          <button className="text-white font-semibold">Talk To Us</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2  pt-5 flex justify-center">
        <img src={top} alt="program" className="w-full max-w-md lg:max-w-xl object-contain" />
      </div>
    </div>
  );
}
