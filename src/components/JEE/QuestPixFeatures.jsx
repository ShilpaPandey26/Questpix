import React from "react";
import gpbtn from "../../assets/gpbtn.png";
import appstore from "../../assets/appstore.png";

const features = [
  {
    icon: "https://questpix.com/assets/images/jee_landing/praicon.svg",
    title: "Self-Designed Practice",
    description:
      "Design your own custom practice tests with our extensive question bank of 1 Lakh+ questions.",
    bg: "bg-[#2fc18b]",
  },
  {
    icon: "https://questpix.com/assets/images/jee_landing/previcon.svg",
    title: "Previous Years Questions",
    description:
      "Practice with a vast collection of JEE Main & Advanced PYQs, categorized by subject and year.",
    bg: "bg-[#1b283d]",
  },
  {
    icon: "https://questpix.com/assets/images/jee_landing/flashicon.svg",
    title: "Interactive Flashcards",
    description:
      "Learn and memorize essential formulas, definitions, and concepts with interactive flashcards.",
    bg: "bg-[#2fc18b]",
  },
  {
    icon: "https://questpix.com/assets/images/jee_landing/rankicon.svg",
    title: "Rank Prediction Tool",
    description:
      "Use our Rank Prediction Tool to estimate your JEE rank based on your performance.",
    bg: "bg-[#1b283d]",
  },
];

export default function QuestPixFeatures() {
  return (
    <div className="py-10  text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Test Drive QuestPix For <span className="text-[#2FC18B]">FREE.</span>
      </h2>
      <p className=" mt-4 max-w-2xl mx-auto text-sm ">
        Experience the power of new-age JEE prep without spending anything.
      </p>

      {/* Features Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto text-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bg} rounded-2xl flex flex-col items-start text-left shadow-lg p-6 sm:py-10`}
          >
            <div className="mb-5">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
            </div>
            <h3 className="text-lg sm:text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Store Buttons */}
      <div className="flex flex-row justify-center items-center gap-3 mt-5">
       <a
                 href="https://play.google.com/store/apps/details?id=com.questpix.app"
                 target="_blank"
                 rel="noreferrer"
               >
                 <img src={gpbtn} alt="Google Play" className="w-32 sm:w-40" />
               </a>
               <a
                 href="https://apps.apple.com/in/app/questpix/id6742243591"
                 target="_blank"
                 rel="noreferrer"
               >
                 <img src={appstore} alt="App Store" className="w-32 sm:w-40" />
               </a>
      </div>
    </div>
  );
}
