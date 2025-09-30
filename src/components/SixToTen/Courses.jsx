import React, { useState } from "react";
import girlimg from "../../assets/SixToTen/girl.png"
const courses = [
    {
     class: "Class 6",
      title: "JEE & NEET Foundation Online Course",
      description:
        "Lay the groundwork for future success in JEE and NEET right from Class 6. This course combines advanced concepts with the core NCERT syllabus.",
      features: [
        "LIVE Classes for Advanced Physics, Chemistry, Biology & Maths",
        "Comprehensive Video Lectures for all NCERT Subjects",
        "Regular Tests to Track Foundation Strength",
      ],
     
    },
    {
        class: "Class 6",
      title: "Olympiad Achiever (Maths & Science) Online Course",
      description:
        "Prepare to conquer Science and Maths Olympiads with specialized LIVE classes and comprehensive resources.",
      features: [
        "LIVE Classes Focused on Advanced Olympiad-Level Maths & Science",
        "Video Lectures Covering Olympiad Concepts Across All Subjects",
        "Regular Mock Tests Based on the Olympiad Pattern",
      ],
      
    },
    {
        class: "Class 6",
      title: "NCERT Mastery (All Subjects) Online Course",
      description:
        "Master the NCERT syllabus for all subjects and build a strong conceptual understanding for future academic growth.",
      features: [
        "Interactive LIVE Classes for All Subjects",
        "Comprehensive Video Lectures for All NCERT Topics",
        "Regular Tests to Reinforce Learning",
      ],
     
    },
    {
        class: "Class 6",
      title: "CBSE Board & Olympiad Booster (Maths & Science) Online Course",
      description:
        "Excel in your CBSE Maths and Science while simultaneously preparing for challenging Olympiads.",
      features: [
        "LIVE Classes Covering Both CBSE and Olympiad-Level Maths & Science",
        "Regular Mock Tests Designed on the Olympiad Pattern",
        "Focus on Conceptual Clarity and Application",
      ],
      
    },
    {
        class: "Class 10",
      title: "ICSE Board & Olympiad Booster (Maths & Science) Online Course",
      description:
        "Strengthen your ICSE Maths and Science foundation and gain an edge in Olympiad competitions.",
      features: [
        "LIVE Classes Covering Both ICSE and Olympiad-Level Maths & Science",
        "Regular Mock Tests Designed on the Olympiad Pattern",
        "Emphasis on Problem-Solving Skills",
      ],
      
    },
    {
        class: "Class 9",
      title: "NCERT & Olympiad (All Subjects) Combo Online Course",
      description:
        "Explore the exciting world of Olympiads across multiple subjects and build a strong academic foundation with NCERT.",
      features: [
        "LIVE Classes for Olympiad Maths, Science & Mental Ability",
        "Video Lectures for Olympiad English & Social Studies",
        "Comprehensive NCERT Video Lectures for All Subjects",
      ],
      
    },
    {
        class: "Class 7",
      title: "Maths Accelerator Online Course",
      description:
        "Dedicated LIVE classes to help CBSE Class 6 students master the core concepts of Mathematics.",
      features: [
        "Interactive LIVE Classes Covering the Entire CBSE Maths Syllabus",
        "Printed Study Material Delivered at Home",
        "Regular Objective Tests to Track Progress",
      ],
   
    },
    {
        class: "Class 6",
      title: "Science Accelerator Online Course",
      description:
        "Build a strong and lasting understanding of fundamental Science concepts (Physics, Chemistry, Biology) in Class 6.",
      features: [
        "Interactive LIVE Classes for Science",
        "Printed Study Material Delivered at Home",
        "Regular Objective Tests to Assess Understanding",
      ],
      
    },
  ];


export default function Courses() {
  const [selectedClass, setSelectedClass] = useState("Class 6");
  const classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Explore Our{" "}
          <span className="text-[#2FC18B]">Comprehensive Curriculums</span>
        </h2>
        <p className="mt-4 text-sm text-white">
          Our meticulously crafted curriculum, aligned with CBSE, ICSE, and State Boards,
          ensures a strong understanding of core concepts and prepares students for academic success.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-5 py-2 rounded-full border-2 transition ${
                selectedClass === cls
                  ? "border-[#2FC18B] bg-[#2FC18B] text-black"
                  : "border-[#2FC18B] text-white"
              }`}
            >
              {cls}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 max-w-6xl mx-auto">
        {courses
          .filter((c) => c.class === selectedClass)
          .map((course, index) => {
            const isEven = index % 2 === 0;
            const boxColor = isEven
              ? "bg-[#2fc18b] text-black"
              : "bg-[#0a0e1a] text-white";
            const textColor = isEven ? "text-black" : "text-white";

            return (
              <div
                key={index}
                className={`${boxColor} border-2 border-[#2fc18b] rounded-xl shadow-lg p-5 w-full max-w-[280px] flex flex-col justify-between mx-auto`}
              >
                <div>
                  <h3 className="text-lg  font-bold">{course.title}</h3>
                  <p className="text-sm  pb-4">{course.description}</p>

                  <h2 className={`${textColor} text-lg  font-bold`}>Key Features</h2>
                  <ul className="list-disc space-y-1 text-sm sm:text-base p-2">
                    {course.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <button className="flex items-center justify-center gap-2 bg-[#0a0e1a] border-2 border-[#2fc18b] px-4 py-2 rounded-full text-white w-full hover:bg-[#2FC18B] hover:text-black transition">
                    Know More →
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* Bottom Image */}
      <div className="mt-12 flex justify-center">
        <img
          src={girlimg}
          alt="Decorative"
          
        />
      </div>
    </div>
  );
}