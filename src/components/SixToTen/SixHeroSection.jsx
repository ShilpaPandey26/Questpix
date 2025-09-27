import React from "react";
import { ArrowRight } from "lucide-react";
import bimg from "../../assets/SixToTen/bimg.png"
export default function SixHeroSection() {
  return (
    <div className="container flex flex-col lg:flex-row items-center lg:max-h-[510px]">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col  text-center lg:text-left pt-20 ">
        <p className="text-white text-xl font-bold">
          Build a Rock-Solid Foundation for Success with
        </p>

        <h5 className="text-2xl md:text-3xl font-bold mt-3 lg:w-[40%] ">
          Online Courses For Class{" "}
          <span className="text-[#2FC18B]">6 - 10</span>
          <span className="text-[#2FC18B] text-lg md:text-2xl font-bold block mt-2">
            By QuestPix Junior
          </span>
        </h5>

        <p className="text-sm md:text-base text-[#9EBDEF] mt-4 mb-6">
          Empower your child with engaging online learning, expert guidance,
          and a comprehensive curriculum designed to excel in school,
          olympiads, and beyond.
        </p>

        <div className="w-fit border-2 border-[#2FC18B] py-1 px-6 rounded-full mx-auto lg:mx-0">
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-lg text-white"
          >
            Explore Courses
            <ArrowRight className="text-[#2FC18B]" size={19} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:mt-20 ">
        <img
          src={bimg}
          alt="Courses illustration"
          className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] h-auto"
        />
      </div>
    </div>
  );
}
