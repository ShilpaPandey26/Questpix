import React from "react";
import questPixData from "./questPixData";

export default function HowQuestPixWorks() {
  return (
    <div className="max-w-[1150px] mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6 flex flex-col items-center justify-between gap-10">
      {/* Heading */}
      <div className="text-center mt-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white">
          <span className="text-[#2FC18B]">How QuestPix Works </span>
          for Your School or Institute?
        </h2>
        <p className="text-base sm:text-lg text-gray-300  ">
          Discover how we seamlessly integrate top study material, advanced
          technology, and personalized support into your organisation’s daily
          routine.
        </p>
      </div>

      {/* Sections */}
      <div className="w-full">
        {questPixData.map((section, index) => (
          <div
            id={`section-${index}`} // ✅ Anchor Target
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-8 md:gap-16 scroll-mt-24 mb-12`}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-6 mb-6 md:mb-0">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.points.map((point, idx) => (
                  <li key={idx} className="pl-2 sm:pl-5">
                    <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#2FC18B]">
                      {point.heading}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {point.description}
                    </p>
                    {idx !== section.points.length - 1 && (
                      <div className="border-b border-dotted border-gray-500 mt-5 w-full sm:w-[90%]" />
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-block bg-[#2FC18B] text-white rounded-[10px] px-5 py-2 text-base no-underline hover:bg-[#28a377] transition "
                >
                  Start Now
                </a>
                <a
                  href="#"
                  className="inline-block  text-white border-1 border-[#2FC18B]  rounded-[10px] px-5 py-2 text-base no-underline  transition"
                >
                  Know More
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={section.image}
                alt={section.title}
                className="w-[250px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[350px] md:h-[310px] object-contain rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
