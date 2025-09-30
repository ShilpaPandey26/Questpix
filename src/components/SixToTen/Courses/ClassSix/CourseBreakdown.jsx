import React from "react";

import gc from "../../../../assets/SixToTen/courses/gc.png";
import icon1 from "../../../../assets/SixToTen/courses/icon1.png";
import icon2 from "../../../../assets/SixToTen/courses/icon2.png";
import icon3 from "../../../../assets/SixToTen/courses/icon3.png";
import icon4 from "../../../../assets/SixToTen/courses/icon4.png";
import icon5 from "../../../../assets/SixToTen/courses/icon5.png";
import icon6 from "../../../../assets/SixToTen/courses/icon6.png";
import girl from "../../../../assets/SixToTen/courses/girl.png";
import arrow from "../../../../assets/SixToTen/courses/arrow.png";

export default function CourseBreakdown() {
  const sections = [
    {
      icon: icon1,
      title: "Live Classes & Comprehensive Doubt Resolution",
      points: [
        "6–8 live classes weekly, totaling 12–16 hours of instruction",
        "1.5–2 hour sessions with integrated practice & doubt solving",
        "Post-class support via ‘Doubt Clinic’ and dedicated forum",
      ],
    },
    {
      icon: icon2,
      title: "Rigorous Assessments & Performance Analysis",
      points: [
        "10+ sample tests simulating the real exam experience",
        "Detailed performance analytics for student improvement",
        "Participation in regular custom quizzes and practice sessions",
      ],
    },
    {
      icon: icon3,
      title: "Extensive Study Material & Learning Resources",
      points: [
        "Comprehensive study materials including notes, DPPs, and assignments",
        "Digital access via the QuestPix app with some offline download capability",
        "Extensive practice resources including 30K+ question bank and sample papers",
      ],
    },
    {
      icon: icon4,
      title: "Dedicated Mentorship & Personalized Guidance",
      points: [
        "Assigned mentors for continuous support throughout the program",
        "Personalized self-study plans tailored to individual learning preferences",
        "Regular mentor check-ins for progress tracking and guidance",
      ],
    },
    {
      icon: icon5,
      title: "Focus on Well-being & Collaborative Learning",
      points: [
        "Motivational sessions to build confidence and manage stress",
        "Peer learning environment encourages healthy competition & collaboration",
        "Holistic development focusing on time management and well-being",
      ],
    },
    {
      icon: icon6,
      title: "Advanced Technology, Expert Faculty & Curriculum",
      points: [
        "Mobile-friendly platform with interactive video lessons & practice",
        "Classes conducted by experienced subject experts",
        "Engaging curriculum aligned to different school & board exam prep",
      ],
    },
  ];

  return (
        <div
      className="pt-30 pb-30 bg-center lg:bg-contain bg-cover"
      style={{ backgroundImage: `url(${gc})` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-10 text-center sm:text-left">
          <span className="text-[#45474B]">Detailed</span>{" "}
          <span className="text-black">Course Breakdown</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1 space-y-8">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
              >
                {/* Icon */}
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-[100px] h-[90px]"
                />

                {/* Content */}
                <div className="ml-5">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {section.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm sm:text-base ">
                    {section.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end w-full lg:w-1/3">
            <img src={girl} alt="Student" className="h-[400px] lg:w-[440px] lg:h-[815px] " />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 sm:mt-12">
        <img src={arrow} className="h-5 relative top-10 -left-3"/>
        <button className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md font-medium hover:bg-gray-200 transition text-sm sm:text-base">
          Explore Now
        </button>
      </div>
    </div>
  );
}
