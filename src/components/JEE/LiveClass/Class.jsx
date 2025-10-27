import React, { useState } from 'react'
import { ArrowRight } from "lucide-react";
import program from "../../../assets/jee-images/liveclass/program.png"

export default function Class11() {
  const [selectedClass, setSelectedClass] = useState("Class 11th");


  const courseData = {
    "Class 11th": [
      {
        title: "JEE 11th Online Full Course",
        target: "Target 2027 (Main & Advanced)",
        features: [
          "India's best online 1-year PCM course for Class 11th.",
          "Recordings & live classes from Kota’s top faculties.",
          "Extensive study material, doubt-clearing & more.",
          "Regular tests, all India test series & deep analysis.",
        ],
      },
    ],

    "Class 12th": [
      {
        title: "JEE 12th Online Full Course",
        target: "Target 2026 (Main & Advanced)",
        features: [
          "India's best online 1-year PCM course for Class 12th.",
          "Recordings & live classes from Kota’s top faculties.",
          "Extensive study material, doubt-clearing & more.",
          "Regular tests, all India test series & deep analysis.",
        ],
      },
      {
        title: "JEE 12th Maths Course",
        target: "Target 2026 (Main & Advanced)",
        features: [
         "India's best online 1-year PCM course for Class 12th.",
          "Recordings & live classes from Kota’s top faculties.",
          "Extensive study material, doubt-clearing & more.",
          "Regular tests, all India test series & deep analysis.",
        ],
      },
      {
        title: "JEE 12th Physics Course",
        target: "Target 2026 (Main & Advanced)",
        features: [
          "India's best online 1-year PCM course for Class 12th.",
          "Recordings & live classes from Kota’s top faculties.",
          "Extensive study material, doubt-clearing & more.",
          "Regular tests, all India test series & deep analysis.",
        ],
      },
      {
        title: "JEE 12th Chemistry Course",
        target: "Target 2026 (Main & Advanced)",
        features: [
         "India's best online 1-year PCM course for Class 12th.",
          "Recordings & live classes from Kota’s top faculties.",
          "Extensive study material, doubt-clearing & more.",
          "Regular tests, all India test series & deep analysis.",
        ],
      },
    ],

    "Class 12th pass(Repeater)": [
      {
        title: "JEE Repeater Full Course",
        target: "Target 2026 (Main & Advanced)",
        features: [
          "Best 1-year dropper course for JEE aspirants.",
          "Focused approach with intensive problem-solving.",
          "Access to all recorded + live sessions.",
          "Personal mentoring, regular tests & detailed feedback.",
        ],
      },
    ],
  };


  const selectedCourses = courseData[selectedClass];


  return (
    <div className="container px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <div className="pt-28  text-center sm:text-left">

        <h2 className="text-4xl font-extrabold mb-4 ">Live Classes <span className="text-[#2fc18b]">Program</span></h2>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold mb-3 ">JEE MAIN & ADVANCED</h3>
            <p className="text-base ">This program focuses on JEE preparation.</p>
          </div>
          <img src={program} alt="program" className="h-28" />
        </div>

        <div className="border border-[#B5D4FF] mb-6"></div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-6 text-center sm:text-left">
            Select Your Class
          </h2>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mb-8">
            {[
              "Class 11th",
              "Class 12th",
              "Class 12th pass(Repeater)",
            ].map((cls, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedClass(cls)}
                className={`rounded-3xl px-4 sm:px-6 py-2 text-sm sm:text-base cursor-pointer font-bold transition-all
                  ${selectedClass === cls
                    ? "bg-[#2FC18B] text-white border-1 border-[#2FC18B]"
                    : "border-1 border-[#2FC18B] text-white "
                  }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCourses.map((course, index) => (
            <a href="/Jee/liveclass_schedule" key={index}>
              <div className=" bg-[#1f2f47] p-4 sm:p-8 rounded-3xl space-y-3">
                <h2 className="text-[22px] font-bold">{course.title}</h2>
                <h3 className="text-[#2fc18b] font-bold">{course.target}</h3>
                <ul className="text-[#9ebdef] list-disc  text-left px-4 space-y-1">
                  {course.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Purchased</h2>
                  <h2 className="text-[#2fc18b] text-2xl flex items-center font-bold">open <ArrowRight size={28} strokeWidth={3} /></h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}
