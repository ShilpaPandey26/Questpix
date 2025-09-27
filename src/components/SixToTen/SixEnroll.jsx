import React from "react";
import { ArrowRight } from 'lucide-react';
import OBJECTS from "../../assets/SixToTen/OBJECTS.png"
export default function SixEnroll() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-white">
            Enroll Your Child in QuestPix{" "}
            <span className="text-[#2FC18B]">Classes 6 - 10</span> Today
          </h2>
          <p className="mt-6 mb-6 text-base sm:text-lg text-[#9EBDEF]">
            Take the first step towards securing your child’s academic future.
          </p>

          <div className="inline-block border-2 border-[#2FC18B] py-1 px-5 rounded-full mt-4">
            <a
              href="#"
              className="flex justify-center items-center gap-2 text-[16px] sm:text-[18px] text-white"
            >
              Explore Courses <ArrowRight className="text-[#2FC18B]" size={19} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={OBJECTS}
            alt="QuestPix Objects"
            className="w-full max-w-[650px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
