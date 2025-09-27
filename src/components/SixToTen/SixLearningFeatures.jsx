import React from "react";
import greencircle from "../../assets/SixToTen/greencircle.png";
import yellow from "../../assets/SixToTen/yellow.png";
import Illustration from "../../assets/SixToTen/Illustration.png";
import purple from "../../assets/SixToTen/purple.png";
import grey from "../../assets/SixToTen/grey.png";
import green from "../../assets/SixToTen/green.png";
import bc from "../../assets/SixToTen/bc.png";

const features = [
  {
    title: "Engaging Live Classes for Active Learning",
    description:
      "Imagine your child participating in real-time classes led by experienced teachers. Your child can ask questions, engage in discussions, and learn collaboratively with other students.",
    img: greencircle,
  },
  {
    title: "Flexible Learning with On-Demand Videos",
    description:
      "Access high-quality pre-recorded lectures anytime, anywhere—perfect for revisiting concepts or learning at their own pace.",
    img: yellow,
  },
  {
    title: "Comprehensive Support & Study Resources",
    description:
      "Access structured e-books, notes, and study materials. All doubts clarified via class sessions and doubt-chat with teachers.",
    img: Illustration,
  },
  {
    title: "Reinforce Learning with Practice & Quizzes",
    description:
      "Daily quizzes and practice materials help reinforce learning and test understanding in a fun way.",
    img: purple,
  },
  {
    title: "Effective Exam Prep with Sample Papers",
    description:
      "Prepare with sample papers to understand the exam pattern and familiarize yourself with expected questions.",
    img: grey,
  },
  {
    title: "Quick Revision with Handy Flashcards",
    description:
      "Revise key concepts, formulas, and definitions quickly with easy-to-use flashcards for last-minute prep.",
    img: green,
  },
];

export default function SixLearningFeatures() {
  return (
    <div
      className=" mt-30 pt-40 pb-40"
      style={{
        backgroundImage: `url(${bc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <h2 className="text-center mx-auto text-2xl sm:text-3xl md:text-[38px] font-bold px-6 max-w-4xl">
        Explore the Powerful Features of{" "}
        <span className="text-[#2FC18B]"> QuestPix Classes 6 - 10</span>
      </h2>

      <p className="text-center mx-auto text-base sm:text-lg font-bold pt-5 pb-12 px-6 max-w-3xl text-[#9EBDEF]">
        At QuestPix, we've packed our Classes 6–10 courses with features
        designed to make learning effective, engaging, and convenient. Here's
        what you can expect:
      </p>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <div className="flex justify-center sm:justify-start mb-4 w-full">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full max-w-[200px]  h-auto object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-lg sm:text-[20px] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#9EBDEF] text-sm sm:text-[16px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
