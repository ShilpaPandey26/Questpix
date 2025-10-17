import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import SelectExam from "./PersonalisedPractice/SelectExam";
import SelectSubject from "./PersonalisedPractice/SelectSubject";
import SelectTopic from "./PersonalisedPractice/SelectTopic";
import SelectChapter from "./PersonalisedPractice/SelectChapter";
import SelectConcept from "./PersonalisedPractice/SelectConcept";
import FillDetails from "./PersonalisedPractice/FillDetails";

const features = [
  {
    title: "Personalised Practice",
    icon: "https://questpix.com/assets/images/jee_landing/dash1.svg",
    link: "",
  },
  {
    title: "JEE Test Series",
    icon: "https://questpix.com/assets/images/jee_landing/dash2.svg",
    link: "Jee/test_series_promotion",
  },
  {
    title: "Past Year Papers",
    icon: "https://questpix.com/assets/images/jee_landing/dash3.svg",
    link: "",
  },
  {
    title: "My Virtual Classroom",
    icon: "https://questpix.com/assets/images/jee_landing/dash4.svg",
    link: "",
  },
  {
    title: "Live Classes",
    icon: "https://questpix.com/assets/images/jee_landing/dash5.svg",
    link: "",
  },
  {
    title: "Flash Cards",
    icon: "https://questpix.com/assets/images/jee_landing/dash6.svg",
    link: "",
  },
  {
    title: "Top 500 AIR Club",
    icon: "https://questpix.com/assets/images/jee_landing/dash7.svg",
    link: "",
  },
  {
    title: "Daily Quiz Challenge",
    icon: "https://questpix.com/assets/images/jee_landing/dash8.svg",
    link: "Jee/Quiz_details",
  },
];

export default function FeatureGrid() {
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [1, 2, 3, 4, 5, 6];

  const stepComponents = {
    1: <SelectExam />,
    2: <SelectSubject />,
    3: <SelectTopic />,
    4: <SelectChapter />,
    5: <SelectConcept />,
    6: <FillDetails />,
  };

  const handleClick = (item) => {
    if (item.title === "JEE Test Series") {
      window.location.href = item.link;
    } else {
      setShowModal(true);
      setCurrentStep(1);
    }
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div>
      <div className="px-4 sm:px-8 md:px-12 py-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Let’s <span className="text-[#2FC18B]">Start.</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-7xl">
          {features.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item);
              }}
              className="bg-[#1B283D] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-12 h-12 sm:w-14 sm:h-14 mb-5"
              />
              <div className="flex items-center justify-between">
                <h2 className="text-sm sm:text-lg md:text-xl font-bold text-white leading-snug">
                  {item.title}
                </h2>
                <div className="text-[#2FC18B] text-sm sm:text-base flex items-center gap-1 font-bold">
                  <span>Join</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[1000] flex justify-end items-center md:items-stretch">

          <div
            className="fixed inset-0"
            onClick={() => setShowModal(false)}
          ></div>


          <div
            className="relative bg-[#253750] h-full w-full sm:w-[90%] md:w-[60%] lg:max-w-[40rem] 
            p-4 sm:p-6 flex flex-col transform transition-transform duration-300 
            md:rounded-tl-[80px] md:rounded-bl-[80px]"
          >
            {/* header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6 mt-2 sm:mt-3">
              <ArrowLeft
                strokeWidth={2}
                className="h-7 w-7 text-white cursor-pointer hover:text-[#2FC18B]"
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
              />
              <button
                className="text-gray-300 text-2xl font-extrabold cursor-pointer hover:text-white"
                onClick={() => setShowModal(false)}
              >
                ✕
              </button>
            </div>

            {/* steps */}
            <div className=" absolute top-28 right-5 sm:right-10">
              <div className="flex flex-row md:flex-col gap-3 sm:gap-10 relative">
                <div
                  className=" absolute top-1/2 md:top-0   left-0 md:left-1/2   md:transform md:-translate-x-1/2 w-full md:w-[2px] h-[2px] md:h-full bg-white z-0"></div>
                {steps.map((step) => (
                  <div
                    key={step}
                    onClick={() => setCurrentStep(step)}
                    className={`relative z-10 rounded-full p-1 text-black bg-white text-lg w-10 text-center cursor-pointer 
                      ${step === currentStep
                        ? "border-2 border-[#0CD6BE] text-[#0CD6BE] "
                        : "border-2 border-white  "
                      }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto">{stepComponents[currentStep]}</div>


            <div className="sm:mt-auto flex justify-start mb-6">
              <button
                className="text-white bg-[#2FC18B] px-6 sm:px-8 py-2 rounded-lg font-semibold flex gap-2 items-center hover:bg-[#27a577] transition"
                onClick={() =>
                  setCurrentStep((prev) => Math.min(prev + 1, steps.length))
                }
              >
                Next <ArrowRight strokeWidth={2} className="h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
