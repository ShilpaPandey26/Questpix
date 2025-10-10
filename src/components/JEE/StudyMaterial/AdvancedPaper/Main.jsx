import React from "react";
import year_wise from "../../../../assets/jee-images/StudyMaterial/year-wise.jpg";
import pyq from "../../../../assets/jee-images/StudyMaterial/pyq.png";
import PreviousYearPapers from "./PreviousYearPapers";
import gpbtn from "../../../../assets/gpbtn.png";

export default function Main() {
  return (
    <div className="sm:pt-20 lg:pt-28">
      <img
        src={year_wise}
        alt="JEE Main Year Wise"
        className="rounded-2xl w-full h-[200px] sm:h-[250px] md:h-[300px] "
      />

      <div className="flex flex-col md:flex-row gap-10 justify-between items-center  mt-16 ">
        <div className="md:w-[50%]">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-6">
            JEE Advanced Papers <span className="text-[#2FC18B]">PDFs</span>{" "}
            (Year - Wise)
          </h2>
          <h3 className="textxl sm:text-2xl font-extrabold mb-4">
            Download JEE Main Previous Year
            <span className="text-[#2FC18B]"> Question Papers </span> (Year -
            Wise) with Solutions (PDFs)
          </h3>
          <p className="text-[#9EBDEF]">
            Crack JEE Advanced with focused practice! This page provides you
            with a comprehensive archive of JEE Advanced previous year question
            papers with solutions, all available for free download in PDF
            format.
          </p>
        </div>
       
          <div className="bg-[#1B283D] text-white px-4 flex flex-col md:flex-row items-center justify-between  rounded-xl shadow-lg max-w-4xl mx-auto">
            {/* Left Section */}
            <div className="flex-1 space-y-4  ">
              <h3 className="text-base font-bold mt-4">Practice Free Chapterwise</h3>
              <h1 className="text-5xl font-extrabold text-[#2FC18B]">PYQs</h1>
              <h2 className="text-2xl font-semibold text-[#AFCBFF]">
                For JEE Advanced Exam
              </h2>

              {/* Google Play Button */}
              <div className="mt-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.questpix.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={gpbtn} alt="Google Play" className="w-32 sm:w-40" />
                </a>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium">Rated:</p>
                <div className="flex text-yellow-400 text-xl">★★★★★</div>
              </div>
            </div>

            {/* Right Section (Mobile Image) */}
            <div className="flex-1 mt-10 md:mt-36  flex justify-end items-end ">
              <img
                src={pyq}
                alt="App Preview"
                className="w-48 rounded-xl shadow-2xl"
              />
            </div>
          </div>
       
      </div>

      <div className="mt-16 max-w-3xl">
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold mb-4">
            JEE Advanced Question Papers with{" "}
            <span className="text-[#2FC18B]">Solutions</span>
          </h2>
          <p className="text-[#9EBDEF]">
            JEE Advanced, the gateway to IITs, demands a mastery of concepts and
            problem-solving skills. Practicing with previous year question
            papers is crucial to understanding the exam's intricate pattern and
            challenging questions. Here, you'll find JEE Advanced question
            papers for all years, including both Paper 1 and Paper 2, along with
            detailed solutions to help you analyze and learn.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Why Solve JEE Advanced Previous Year Papers?
          </h2>
          <ul className="text-[#9EBDEF] list-disc px-4 text-[15px]">
            <li className="mb-2">
              <span className="text-white">Decipher the Exam Pattern:</span>{" "}
              Gain a thorough understanding of the exam structure, marking
              scheme, and the types of questions that appear in JEE Advanced
            </li>
            <li className="mb-2">
              <span className="text-white">Gauge Your Preparation:</span>{" "}
              Evaluate your strengths and weaknesses by attempting past papers
              and analyzing your performance.
            </li>
            <li className="mb-2">
              <span className="text-white">Master Time Management:</span>{" "}
              Develop effective time management strategies essential for
              tackling the lengthy and complex JEE Advanced papers.
            </li>
            <li className="mb-2">
              <span className="text-white">
                Familiarize with Question Styles:
              </span>{" "}
              Get accustomed to the diverse question formats, including
              multiple-choice, numerical answer type, and comprehension-based
              questions.
            </li>
            <li>
              <span className="text-white">
                Enhance Problem-Solving Skills:
              </span>{" "}
              Sharpen your analytical and problem-solving abilities by tackling
              challenging questions from previous years.
            </li>
            <li>
              <span className="text-white">Boost Confidence: </span> Build
              confidence and reduce exam-related stress by practicing with real
              exam papers.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-3xl">
        <PreviousYearPapers />
      </div>

      <div className="mt-20 max-w-3xl ">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
          JEE Advanced Paper{" "}
          <span className="text-[#2FC18B]">Analysis & Difficulty </span>Level
        </h2>
        <p className="text-[#9EBDEF] mb-6">
          JEE Advanced is known for its challenging questions and unique format.
          Analyzing previous year papers reveals trends in question
          distribution, the weightage of different topics, and the overall
          difficulty level. This insight can be invaluable in fine-tuning your
          preparation strategy
        </p>
        <p className="text-2xl  font-extrabold mb-6">
          Tips for Effective Preparation Using Previous Year Papers
        </p>
        <ul className="text-[#9EBDEF] list-disc px-4 text-[15px] mb-6">
          <li className="mb-2">
            <span className="text-white">Simulate Exam Conditions:</span>Solve
            papers in a timed environment to replicate the actual exam
            experience.
          </li>
          <li className="mb-2">
            <span className="text-white">Detailed Analysis:</span> After
            attempting a paper, thoroughly analyze your performance, identify
            errors, and understand the solutions.
          </li>
          <li className="mb-2">
            <span className="text-white">Focus on Conceptual Clarity:</span> JEE
            Advanced emphasizes conceptual understanding. Don't just memorize
            solutions; focus on grasping the underlying principles.
          </li>
          <li className="mb-2">
            <span className="text-white">Practice Regularly:</span> Consistent
            practice with previous year papers is key to improving your speed
            and accuracy.
          </li>
          <li>
            <span className="text-white">Combine with Other Resources:</span>Use
            previous year papers in conjunction with your textbooks, study
            materials, and mock tests for a well-rounded preparation.
          </li>
        </ul>
        <p className="text-[#9EBDEF]">
          By effectively utilizing these JEE Advanced previous year question
          papers, you can improve your preparation, refine your problem-solving
          skills, and increase your chances of securing a top rank in the exam.
          Best of luck!
        </p>
      </div>
    </div>
  );
}
