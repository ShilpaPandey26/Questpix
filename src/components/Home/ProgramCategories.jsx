import React from "react";
import prefoundation from "../../assets/Home/pre-foundation.png"
import foundation from "../../assets/Home/foundation.png"
import jeeneet from "../../assets/Home/jee-neet.png"

const programs = [
  {
    title: "Pre-Foundation",
    description:
      "Building core concepts and laying the essential groundwork for future academic challenges.",
    classes: "Class 6 - 8",
    gradient: "linear-gradient(to bottom, #202F47, #3a547e00)",
    icon:prefoundation,
    iconBg: "bg-[#28b8ff]",
  },
  {
    title: "Foundation",
    description:
      "Comprehensive groundwork for Olympiads, NTSE, and early JEE/NEET preparedness.",
    classes: "Class 9 - 10",
    gradient: "linear-gradient(to bottom, #2FC18B, #7be4c100)",
    icon: foundation,
    iconBg: "bg-[#b3ffee]",
  },
  {
    title: "JEE/NEET",
    description:
      "Targeted, intensive programs for securing admission into India's premier engineering and medical colleges.",
    classes: "Class 10 - 12",
    gradient: "linear-gradient(to bottom, #202F47, #3a547e00)",
    icon: jeeneet,
    iconBg: "bg-[#ffd700]",
  },
];

export default function ProgramCategories() {
  return (
    <div className="container px-4 py-12 pt-10  flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="max-w-[1100px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          The <span className="text-[#2FC18B]">Right Preparation</span> , For
          Every Class
        </h2>
        <p className="text-lg mb-20 ">
          QuestPix integrates a powerful learning ecosystem tailored to meet the
          distinct needs of students aiming for top competitive exams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="rounded-xl p-6 flex flex-col items-center text-center shadow-lg"
              style={{ background: program.gradient }}
            >
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-md mb-6 ${program.iconBg}`}
              >
                <img
                  src={program.icon}
                  alt={`${program.title} icon`}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {program.description}
              </p>
              <span className="text-[#2fc18b]  text-[19px] ">
                ({program.classes})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
