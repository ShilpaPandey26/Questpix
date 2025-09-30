import React from "react";
import get1 from "../../../../assets/SixToTen/courses/get1.png";
import get2 from "../../../../assets/SixToTen/courses/get2.png";
import get3 from "../../../../assets/SixToTen/courses/get3.png";
import get4 from "../../../../assets/SixToTen/courses/get4.png";

export default function CourseFeatures() {
  const features = [
    {
      title: "Live Classes & Pre-Recorded Lectures",
      points: [
        "Live classes are like real online classrooms where students interact with a teacher.",
        "Students can ask questions in real-time during live classes.",
        "Pre-recorded lectures are video lessons available for students to watch anytime.",
      ],
      image: get1,
    },
    {
      title: "Self-Designed Practice & Quizzes",
      points: [
        "Students can create their own study methods and practice problems.",
        "They can design their own tests to check their understanding.",
        "Pre-recorded lectures are available anytime for revision.",
      ],
      image: get2,
    },
    {
      title: "Interactive Flashcards",
      points: [
        "Flashcards contain tricks, tips, formulas, or concept explanations.",
        "Useful for quick memorization of important details.",
        "Students use them for last-minute exam reviews.",
      ],
      image: get3,
    },
    {
      title: "Sample Papers",
      points: [
        "Practice tests that mimic the format of real exams.",
        "Help students become familiar with different question types.",
        "Useful for assessing knowledge levels before exams.",
      ],
      image: get4,
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <div className="px-4 md:px-10 lg:px-4 py-12">
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-4xl font-extrabold mb-12">
            What You Will <span className="text-[#2FC18B]">Get In The Course?</span>
          </h2>

          {/* Grid Section */}
          <div className="grid gap-12 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center lg:justify-between ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-[300px] md:max-w-[350px]  flex-shrink-0 mb-6 lg:mb-0"
                />

                {/* Text */}
                <div className="w-full max-w-xl ">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3  ">
                    {feature.title}
                  </h3>
                  <ul className="list-disc  space-y-2 text-sm sm:text-base">
                    {feature.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
