import React from "react";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Personalised Practice",
    icon: "https://questpix.com/assets/images/jee_landing/dash1.svg",
    free: "https://questpix.com/assets/images/icon/freeicon.svg",
  },
  {
    title: "Live Classes",
    icon: "https://questpix.com/assets/images/jee_landing/dash2.svg",
    free: "",
  },
  {
    title: "Flash Card",
    icon: "https://questpix.com/assets/images/jee_landing/dash3.svg",
    free: "https://questpix.com/assets/images/icon/freeicon.svg",
  },
  {
    title: "Sample Paper",
    icon: "https://questpix.com/assets/images/jee_landing/dash4.svg",
    free: "",
  },
];

export default function SixFeatureGrid() {
  return (
    <div className="container flex flex-col items-center justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-6 w-full max-w-xl xl:max-w-7xl">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#1B283D] w-full sm:w-[260px] md:w-[280px] h-auto min-h-[160px] rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* FREE image */}
            {item.free && (
              <img
                src={item.free}
                alt="Free icon"
                className="absolute top-0 left-0 w-[60px] sm:w-[70px] h-auto"
              />
            )}

            {/* Icon */}
            <div className="flex items-center justify-start mt-2">
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
              />
            </div>

            {/* Title + Join */}
            <div className="flex items-center justify-between mt-4">
              <h2 className="text-base lg:text-lg font-bold text-white w-[60%] sm:w-[40%]">
                {item.title}
              </h2>
              <a
                href="#"
                className="text-[#2FC18B] text-sm sm:text-[16px] flex items-center gap-1 font-bold"
              >
                Join
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
