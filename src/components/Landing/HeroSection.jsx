import React from "react";
import HeroCarousel from "./HeroCarousel";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col lg:flex-row   pt-32  mb-10 lg:mb-20">
      <div className="flex flex-col justify-between sm:items-center lg:items-start text-center lg:text-left lg:ml-24">
        <h5 className="text-xl sm:text-2xl font-medium pb-2">
          Learn with{" "}
          <span className="text-[#2FC18B]">India’s Best Platform for</span>
        </h5>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          JEE, NEET &
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Class 6-10
        </h2>
        <p className="text-base sm:text-lg lg:text-2xl font-medium pt-2 sm:pt-4 lg:pt-9">
          Explore our online platform
        </p>
        <div className="flex flex-wrap  justify-center sm:items-center lg:items-start text-center lg:text-left-2 sm:gap-3 mt-3  gap-2">
          <button
            className="border border-[#2FC18B] px-3 sm:px-6 py-1 sm:py-2 rounded-3xl  cursor-pointer hover:bg-[#2FC18B] hover:text-black"
            onClick={() => navigate("/Jee")}
          >
            JEE
          </button>
          <button
            className="border border-[#2FC18B] px-3 sm:px-6 py-1 sm:py-2 rounded-3xl  cursor-pointer hover:bg-[#2FC18B] hover:text-black"
            onClick={() => navigate("/Neet")}
          >
            NEET
          </button>
          <button
            className="border border-[#2FC18B] px-2 sm:px-5 py-1 sm:py-2 rounded-3xl  cursor-pointer hover:bg-[#2FC18B] hover:text-black"
            onClick={() => navigate("/SixToTen")}
          >
            Class 6-10
          </button>
        </div>
      </div>

      <div className="w-full  lg:w-[40%] mt-6 lg:mt-0 mx-auto">
        <HeroCarousel />
      </div>
    </div>
  );
}
