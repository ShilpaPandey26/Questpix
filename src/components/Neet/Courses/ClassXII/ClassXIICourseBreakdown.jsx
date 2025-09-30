import React from "react";
import green from "../../../../assets/jee-images/courses/green.png";
import white from "../../../../assets/jee-images/courses/white.png";
import blue from "../../../../assets/jee-images/courses/blue.png";
import violet from "../../../../assets/jee-images/courses/violet.png";
import orange from "../../../../assets/jee-images/courses/orange.png";
import white2 from "../../../../assets/jee-images/courses/white2.png";

export default function ClassXIICourseBreakdown() {
  const sections = [
    {
      title: "Live Classes & Comprehensive Doubt Resolution",
      points: [
        "6–8 live classes weekly, totaling 12–16 hours of interaction",
        "1.5–2 hour sessions with integrated practice & 20-minutes doubt solving.",
        "Post-class support via 'Photo Click' and a dedicated forum.",
      ],
      color: "bg-[#2FC18B] text-black",
      image: green,
    },
    {
      title: "Rigorous Assessments & Performance Analysis",
      points: [
        "30+ review tests simulating the NEET UG exam experience.",
        "Detailed performance reports pinpointing strengths and weaknesses.",
        "Participation in All India Test Series for national benchmarking.",
      ],
      color: "bg-[#fff] text-black",
      image: white,
    },
    {
      title: "Extensive Study Material & Learning Resources",
      points: [
        "Comprehensive study materials including notes, DPPs, and assignments.",
        "Digital access via the QuestPix app with some offline download capability.",
        "Extensive practice resources including 1 Lakh+ question bank and PYQs.",
      ],
      color: "bg-[#57D8F3] text-black",
      image: blue,
    },
    {
      title: "Dedicated Mentorship & Personalized Guidance",
      points: [
        "Assigned mentors for continuous support throughout the program.",
        "Personalized self-study plans tailored to individual learning preferences.",
        "Regular mentor check-ins for progress tracking and guidance.",
      ],
      color: "bg-[#1B2A3F] text-white",
      image: violet,
    },
    {
      title: "Focus on Well-being & Collaborative Learning",
      points: [
        "Motivational sessions to build confidence and manage stress.",
        "Peer learning environment encourages healthy competition & collaboration.",
        "Holistic development focusing on time management and well-being.",
      ],
      color: "bg-[#ffd118] text-black",
      image: orange,
    },
    {
      title: "Advanced Technology, Expert Faculty & Curriculum",
      points: [
        "Mobile-friendly platform and HD video lectures for convenient learning.",
        "Expert faculties (90% IIT alumni) with 15+ years of average experience.",
        "Concise, focused curriculum designed for efficient JEE preparation.",
      ],
      color: "bg-[#ffffff] text-black",
      image: white2,
    },
  ];

  return (
    <div className="pt-10 px-4 ">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
        Detailed <span className="text-[#2FC18B]">Course</span>
      </h1>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8">
        Breakdown.
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`${section.color}  rounded-2xl flex flex-col h-full`}
          >
            <div className="p-6 flex flex-col lg:flex-row items-center  gap-4">
              {/* Text Section */}
              <div className="flex flex-col flex-1">
                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  {section.title}
                </h2>
                <ul className="list-disc px-4 space-y-2 text-sm sm:text-base ">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Image */}
             <img
                src={section.image}
                alt={section.title}
                className="w-[120px] sm:w-[150px] lg:w-[180px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


