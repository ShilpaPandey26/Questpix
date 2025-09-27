import React from "react";
import first from "../../../../assets/jee-images/courses/first.png";
import phone from "../../../../assets/jee-images/courses/Vector.png";

export default function CrashCourseFirstStep() {
  return (
    <div className="container mx-auto lg:h-[480px]  pt-20 flex flex-col  md:flex-row items-center md:justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col  text-center md:text-left ">
        <h3 className="text-2xl sm:text-[40px] font-bold">
          Take The <span className="text-[#2FC18B]">First Step</span>
        </h3>
        <h2 className="text-2xl sm:text-[40px]  font-bold">Towards IIT.</h2>

        <p className="text-sm sm:text-base  mt-4 text-[#9EBDEF] ">
          JEE is tough, but you're tougher. Discover your true potential and
          achieve your IIT dreams with QuestPix.
        </p>

        {/* Button */}
        <div className="flex gap-2 mx-auto md:mx-0 bg-[#2FC18B] w-fit px-4 py-2 rounded-xl mt-4 cursor-pointer">
          <img src={phone} alt="phone" className="h-5 w-5" />
          <button className="text-white font-semibold">Talk To Us</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center pt-10 ">
        <img
          src={first}
          alt="program"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
}
