import React from "react";
import top from "../../../../assets/jee-images/courses/crashcourses/top.png";
import phone from "../../../../assets/jee-images/courses/vector.png";
import { FaStar } from "react-icons/fa";

export default function CrashCourseProgram() {
  return (
    <div className="container mx-auto  pt-30 flex flex-col md:flex-row items-center md:justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-2 text-center md:text-left ">
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
          Maximise Your JEE Score In{" "}
          <span className="text-[#2FC18B]">Record Time.</span>
        </h3>

        <p className="text-sm   mt-6 text-white ">
          Limited time, maximum impact. Make the most of your final weeks with
          our
          <span className="text-[#9EBDEF]">
            {" "}
            2-month intensive crash course
          </span>{" "}
          designed to boost your score in
          <span className="text-[#9EBDEF]"> Jee Main and Advanced.</span>
        </p>

        {/* Button */}
        <div className="flex gap-2 mx-auto md:mx-0 bg-[#2FC18B] w-fit px-4 py-2 rounded-xl mt-4 cursor-pointer">
          <img src={phone} alt="phone" className="h-5 w-5" />
          <button className="text-white font-semibold">Talk To Us</button>
        </div>
        <div className="flex justify-center md:justify-start items-center  mt-2">
          <p className="text-white">Rated:</p>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[#9EBDEF]" />
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2  flex justify-center">
        <img
          src={top}
          alt="program"
          className="w-full max-w-md lg:max-w-xl object-contain"
        />
      </div>
    </div>
  );
}
