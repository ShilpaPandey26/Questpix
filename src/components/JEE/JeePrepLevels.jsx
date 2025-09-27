import React from "react";

export default function JeePrepLevels() {
  const items = [
    {
      color: "bg-red-500",
      title: "Build An Unshakeable Foundation",
      description:
        "Master the fundamentals early on, so you can confidently tackle complex problems in JEE and other competitive exams.",
      side: "left",
      border: "border-orange-400",
    },
    {
      color: "bg-yellow-500",
      title: "Supercharge Your Mind",
      description:
        "Develop critical thinking, analytical reasoning, and creative problem-solving skills that will benefit you far beyond exams.",
      side: "right",
      border: "border-yellow-400",
    },
    {
      color: "bg-green-500",
      title: "Transform Weaknesses Into Strengths",
      description:
        "Identify your academic shortcomings and receive personalized guidance to overcome them, turning your weaknesses into strengths.",
      side: "left",
      border: "border-green-400",
    },
    {
      color: "bg-teal-500",
      title: "Become Pattern-Proof",
      description:
        "Develop a deep understanding of concepts and problem-solving strategies that will help you excel in any exam pattern.",
      side: "right",
      border: "border-teal-400",
    },
    {
      color: "bg-blue-500",
      title: "Reach Your Peak Performance",
      description:
        "Gain the confidence and skills to achieve your highest potential in your targeted exams and beyond.",
      side: "left",
      border: "border-sky-400",
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto pt-14 md:mb-10 px-4">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white pb-10">
        Take Your JEE Prep To The{" "}
        <span className="text-[#2FC18B]">Next Level.</span>
      </h2>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between  gap-10 md:gap-0 p-4 lg:w-6xl">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-12 mb-32 mb:sm-0 lg:gap-20">
          {items
            .filter((item) => item.side === "left")
            .map((item, i) => (
              <div key={i}>
                <h3
                  className={`text-xl font-semibold text-white border-b-2 inline-block mb-2 ${item.border}`}
                >
                  {item.title}
                </h3>
                <p className="text-[#9EBDEF] text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
        </div>

        {/* Image Column */}
        <div className="md:flex justify-center flex-1 my-4 sm:my-0 hidden">
          <img
            src="https://questpix.com/assets/images/jee_landing/step.png"
            alt="JEE Steps"
            className="w-48 object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-12 lg:gap-20 relative -top-20">
          {items
            .filter((item) => item.side === "right")
            .map((item, i) => (
              <div key={i}>
                <h3
                  className={`text-xl font-semibold text-white border-b-2 inline-block mb-2 ${item.border}`}
                >
                  {item.title}
                </h3>
                <p className="text-[#9EBDEF] text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
