import React from "react";
import details from "../../../../assets/neet-images/courses/neetdetails.png";

export default function CrashCourseProgramDetails() {
  const features = [
     {
      title: "Kota’s Best Faculty",
      desc: "90% of our faculty have an average 15+ years of teaching experience at top coaching institutes.",

      position: "top-0 left-45 ",
    },
    {
      title: "Regular Tests & Analysis",
      desc: "Weekly performance evaluation tests and fortnightly cumulative tests to track your progress and identify areas for improvement.",

      position: "top-40 -right-10",
    },
    {
      title: "Become Pattern-Proof",
      desc: "Develop a deep understanding of concepts and problem-solving strategies that will help you excel in any exam pattern.",

      position: "bottom-1/4 -right-10",
    },
    {
      title: "Interactive Sessions",
      desc: "Small batch sizes with an optimal student-teacher ratio, allowing for personalized attention and doubt clarification.",

      position: "bottom-0 right-50",
    },
    {
      title: "Deep Learning",
      desc: "Personalized study plans and mentorship customised to your individual strengths and weaknesses, ensuring optimal progress.",

      position: "bottom-1/4 left-0",
    },
    {
      title: "Comprehensive Curriculum",
      desc: "1000+ hours of rigorous teachings covering the entire NEET syllabus, including 300+ hours dedicated to concept building and consolidation.",

      position: "left-0 top-40",
    },
  ];

  return (
    <div className="container pt-20 hidden md:block">
      <h2 className="text-[38px] font-bold text-center pb-20">
        Program <span className="text-[#2FC18B]">Details.</span>
      </h2>

      <div
        className="relative bg-contain bg-center bg-no-repeat h-[650px] w-full flex items-center justify-center"
        style={{ backgroundImage: `url(${details})` }}
      >
        {features.map((f, idx) => (
          <div key={idx} className={`absolute w-80 text-center ${f.position}`}>
            <div className=" text-left ">
              <h3 className="font-bold text-xl pb-2">{f.title}</h3>
              <p className="text-sm text-[#9EBDEF]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
