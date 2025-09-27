import React from "react";
import gc from "../../assets/SixToTen/gc.png";
import one from "../../assets/SixToTen/1.png";
import two from "../../assets/SixToTen/2.png";
import three from "../../assets/SixToTen/3.png";
import four from "../../assets/SixToTen/4.png";
import five from "../../assets/SixToTen/5.png";


export default function SixWhyChooseQuestPix() {
  const features = [
    {
      title: "Fundamentals & Basics Mastery",
      description:
        "Our dedicated teachers make complex concepts simple and engaging, ensuring your child excels now and is prepared for future studies.",
      img: one,
    },
    {
      title: "Learning That Sparks Curiosity",
      description:
        "Our interactive live classes encourage active participation, deep thinking, and a true love for learning—far from boring lectures!",
      img: two,
    },
    {
      title: "Curriculum Designed for Success",
      description:
        "Aligned with CBSE, ICSE, and State Boards, our curriculum not only covers the syllabus but builds strong problem-solving skills.",
      img: three,
    },
    {
      title: "Personalized Attention for Every Learner",
      description:
        "Small batch sizes allow teachers to focus individually, catering to the unique learning pace and doubts of each student.",
      img: four,
    },
    {
      title: "Varied & Unlimited Practice",
      description:
        "Unlimited access to quizzes, practice papers, and study materials helps reinforce concepts and boosts exam confidence.",
      img: five,
    },
  ];

  return (
    <div
      className=" mt-30 pt-40 pb-32"
      style={{
        backgroundImage: `url(${gc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] lg:w-[60%] mx-auto font-bold text-black pt-10">
          Why Choose <span className="text-black">QuestPix</span>{" "}
          <span className="text-[#415D53]">
            for a Strong Academic Foundation?
          </span>
        </h2>
        <p className="text-black text-base sm:text-lg max-w-3xl mx-auto mt-3 mb-12 ">
          Laying a strong academic foundation in Classes 6–10 is crucial for
          future success. At QuestPix, we understand this, and that&apos;s why
          we&apos;ve designed a comprehensive learning experience tailored
          specifically for this age group.
        </p>

        {/* Features */}
        {features.map((feature, index) => {
          const isOdd = index % 2 !== 0;

          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center"
            >
              {/* Text */}
              <div
                className={`${
                  isOdd ? "md:order-1" : "md:order-2"
                } flex flex-col justify-center text-center md:text-left`}
              >
                <h3 className="text-xl sm:text-2xl lg:text-[24px] text-[#0F1825] font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#1A4B39] text-sm sm:text-base lg:text-[16px] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`${
                  isOdd ? "md:order-2" : "md:order-1"
                } flex justify-center`}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full max-w-[400px] h-auto rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
