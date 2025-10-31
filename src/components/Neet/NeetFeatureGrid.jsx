import React from "react";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Personalised Practice",
    icon: "https://questpix.com/assets/images/jee_landing/dash1.svg",
  },
  {
    title: "NEET Test Series",
    icon: "https://questpix.com/assets/images/jee_landing/dash2.svg",
  },
  {
    title: "Past Year Papers",
    icon: "https://questpix.com/assets/images/jee_landing/dash3.svg",
  },
  {
    title: "My Virtual Classroom",
    icon: "https://questpix.com/assets/images/jee_landing/dash4.svg",
  },
  {
    title: "Live Classes",
    icon: "https://questpix.com/assets/images/jee_landing/dash5.svg",
  },
  {
    title: "Flash Cards",
    icon: "https://questpix.com/assets/images/jee_landing/dash6.svg",
  },
  {
    title: "Top 500 AIR Club",
    icon: "https://questpix.com/assets/images/jee_landing/dash7.svg",
  },
  {
    title: "Daily Quiz Challenge",
    icon: "https://questpix.com/assets/images/jee_landing/dash8.svg",
  },
];

export default function NeetFeatureGrid() {
  return (
    <div className="px-0 sm:px-12 sm:py-6 flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Let’s <span className="text-[#2FC18B]">Start.</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  gap-6 w-full max-w-7xl">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#1B283D] rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Icon */}
            <div>
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-14 h-14 mb-6"
              />
            </div>

            {/* Title + Button */}
            <div className="flex sm:flex-col md:flex-row md:items-center justify-between">
              <h2 className="text-lg md:text-xl text-left font-bold text-white mb-2 md:w-[50%]">
                {item.title}
              </h2>

              <a
                href={item.link || "#"}
                className="text-[#2FC18B] text-base flex items-center gap-1 font-bold whitespace-nowrap"
              >
                <span>Join</span>
                <ArrowRight size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
