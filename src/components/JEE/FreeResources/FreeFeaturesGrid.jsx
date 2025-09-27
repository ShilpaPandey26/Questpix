import React from "react";

import jee from "../../../assets/jee-images/jee.png";
import design from "../../../assets/jee-images/design.png";
import fine from "../../../assets/jee-images/fine.png";
import master from "../../../assets/jee-images/master.png";
import practice from "../../../assets/jee-images/practice.png";
import predict from "../../../assets/jee-images/predict.png";
import improve from "../../../assets/jee-images/improve.png";
import win from "../../../assets/jee-images/win.png";

const features = [
  {
    icon: jee,
    title: "Memorise the Concepts with Interactive Flashcards",
    description:
      "Interactive flashcards offer an engaging way to memorize essential formulas, definitions, and concepts, making learning more enjoyable and facilitating efficient last-minute revision of key information before the exam.",
    color: "bg-[#1B283D]",
    radius: "rounded-2xl rounded-br-[60px]",
    titleColor: "text-white",
    desColor: "text-[#9EBDEF]",
  },
  {
    icon: design,
    title: "Design Tests That Suit Your Preparation Level",
    description:
      "The platform allows for highly customizable test creation, enabling users to target specific subjects (PCMB), chapters, and even concepts to address weaknesses and customize practice for JEE & NEET exams.",
    color: "bg-[#FFD118]",
    radius: "rounded-2xl rounded-bl-[60px] rounded-br-[60px]",
    titleColor: "text-black",
    desColor: "text-[#175941]",
  },
  {
    icon:fine,
    title: "Fine-Tune Your Self-Designed Practice",
    description:
      "Users can fine-tune their practice sessions by controlling time limits, number of questions, and difficulty level to match their preparation and simulate real exam conditions.",
    color: "bg-[#1B283D]",
    radius: "rounded-2xl rounded-bl-[60px] rounded-br-[60px]",
    titleColor: "text-white",
    desColor: "text-[#9EBDEF]",
  },
  {
    icon: master,
    title: "Master All the Concepts with Chapter-wise PYQs",
    description:
      "Practicing chapter-wise past papers allows students to focus on individual concepts, identify recurring themes, and develop strategies to overcome challenges associated with each chapter.",
    color: "bg-[#2FC18B]",
    radius: "rounded-2xl rounded-bl-[60px]",
    titleColor: "text-black",
    desColor: "text-[#175941]",
  },
  {
    icon: practice,
    title: "Practice for Your Exams with Year-Wise PYQs",
    description:
      "Year-wise PYQ practice helps students analyze trends, understand exam structure, and improve time management by practicing full sets of PYQs within the time limit.",
    color: "bg-[#57D8F3]",
    radius: "rounded-tr-[60px] rounded-2xl",
    titleColor: "text-black",
    desColor: "text-[#175941]",
  },
  {
    icon: predict,
    title: "Predict Your Rank, Plan Your Strategy",
    description:
      "The platform provides a rank prediction feature, helping students estimate standing, track progress, and develop a personalized, data-driven study plan.",
    color: "bg-[#1B283D]",
    radius: "rounded-2xl rounded-tr-[60px] rounded-tl-[60px]",
    titleColor: "text-white",
    desColor: "text-[#9EBDEF]",
  },
  {
    icon: improve,
    title: "Improve with Detailed Performance Analytics",
    description:
      "Performance analytics gives in-depth analysis of user performance, strengths, weaknesses, and tracks progress over time for data-driven improvements.",
    color: "bg-[#9134D8]",
    radius: "rounded-2xl rounded-tr-[60px] rounded-tl-[60px]",
    titleColor: "text-white",
    desColor: "text-[#E8C9FF]",
  },
  {
    icon:win,
    title: "Win Rewards with the Daily Quiz Challenge",
    description:
      "The daily quiz challenge offers 10-question practice sets for PCMB subjects. Users can earn rewards for scoring 90%+ across quizzes.",
    color: "bg-[#1B283D]",
    radius: "rounded-2xl rounded-tl-[60px]",
    titleColor: "text-white",
    desColor: "text-[#9EBDEF]",
  },
];

export default function FreeFeaturesGrid() {
  return (
    <div className="container flex flex-col items-center p-6">
      <p className="text-3xl sm:text-[38px] font-bold pb-10 text-center">
        QuestPix Gives You The Edge{" "}
        <span className="text-[#2FC18B]">You Need To Succeed.</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} ${feature.radius} p-5 shadow-lg flex flex-col gap-4`}
          >
            <img src={feature.icon} className="h-15 w-15" alt={feature.title} />
            <h3 className={`text-[17px]  ${feature.titleColor}`}>
              {feature.title}
            </h3>
            <p className={`text-[16px] ${feature.desColor}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
