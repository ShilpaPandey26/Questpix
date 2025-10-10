import React from "react";
import year_wise from "../../../../assets/jee-images/StudyMaterial/year-wise.jpg";
import jeestudy from "../../../../assets/jee-images/StudyMaterial/jeestudy.jpg";
import PreviousYearPapers from "./PreviousYearPapers";


export default function Main() {
  return (
    <div>
               <img
                   src={year_wise}
                   alt="JEE Main Year Wise"
                   className="rounded-xl w-full h-auto object-cover sm:mt-28"
               />
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt-12 lg:mt-16 ">
        <div className="md:w-[50%]">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-6">
            NCERT <span className="text-[#2FC18B]">Physics Solutions</span>{" "}
            Class - Wise
          </h2>
          <h3 className="textxl sm:text-2xl font-extrabold mb-4">
            Download NCERT Physics (Class - Wise)
            <span className="text-[#2FC18B]"> Question Papers </span>
            (PDFs)
          </h3>
          <p className="text-[#9EBDEF] mb-6">
           The world of Physics is full of fascinating phenomena, from the smallest subatomic particles to the vast expanse of the universe. But unraveling its mysteries can be a daunting task without the right guidance. QuestPix is here to illuminate your path to understanding NCERT Physics, making the subject engaging, and accessible.
          </p>

          <p className="text-[#9EBDEF]">QuestPix is your comprehensive online companion for mastering NCERT Maths, from Class 6 to 12. We provide meticulously crafted solutions, designed by experienced educators, to help you conquer every mathematical challenge with confidence.</p>
        </div>

        <div className=" flex justify-end items-end rounded-xl shadow-lg max-w-4xl  mx-auto">
          <img
            src={jeestudy}
            alt="App Preview"
            className="w-56 rounded-xl shadow-2xl"
          />

        </div>

      </div>

      <div className="mt-16 max-w-3xl">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Why Choose <span className="text-[#2FC18B]">QuestPix </span>  as Your Physics Journey?
          </h2>
          <ul className="text-[#9EBDEF] list-disc px-4 text-[15px]">
            <li className="mb-2">
              <span className="text-white">Comprehensive Class-wise Solutions: </span>{" "}
             We provide in-depth solutions for all NCERT Physics textbooks, from Class 6 to Class 12. Whether you're exploring basic concepts like motion and energy or delving into complex topics like electromagnetism and quantum mechanics, QuestPix has you covered.
            </li>
            <li className="mb-2">
              <span className="text-white">Expertly Crafted by Physics Enthusiasts:</span>{" "}
             Our solutions are curated by experienced Physics educators who are passionate about simplifying complex concepts. They bring clarity and depth to every solution, ensuring a strong foundation in Physics principles.
            </li>
            <li className="mb-2">
              <span className="text-white">Step-by-Step Explanations for Enhanced Understanding:</span>{" "}
             We believe in learning by doing. Our solutions feature detailed step-by-step explanations, guiding you through each problem-solving process. This approach fosters active learning and helps you develop critical thinking skills.
            </li>
            <li className="mb-2">
              <span className="text-white">
               Focus on Conceptual Clarity and Application: 
              </span>{" "}
              We go beyond rote memorization. Our solutions emphasize building a strong conceptual understanding of Physics principles and their real-world applications. This ensures that you not only solve problems correctly but also appreciate the relevance of Physics in everyday life.
            </li>
            <li>
              <span className="text-white">
                Exam-Oriented Approach for Success:
              </span>{" "}
            We understand the demands of academic assessments. Our solutions incorporate exam-oriented strategies, providing tips and tricks to help you tackle exam questions effectively and achieve your academic goals.
            </li>

          </ul>
        </div>
      </div>

      <div className="max-w-3xl">
        <PreviousYearPapers />
      </div>

      <div className="mt-20 max-w-3xl ">
        <h2 className="text-2xl font-extrabold mb-4">
          Experience the QuestPix
          <span className="text-[#2FC18B]"> Advantage</span></h2>

        <ul className="text-[#9EBDEF] list-disc px-4 text-[15px] mb-6">
          <li className="mb-2">
            <span className="text-white">Completely Free Access:</span>We believe that quality education should be accessible to all. Our entire library of NCERT solutions is available completely free of charge.
          </li>
          <li className="mb-2">
            <span className="text-white">Intuitive and User-Friendly Interface: </span>
            Our website is designed with you in mind. Navigate effortlessly through different classes and chapters with our clean and intuitive interface.
          </li>
          <li className="mb-2">
            <span className="text-white">Mobile-Friendly Design for Learning on the Go: </span>
            Access our solutions anytime, anywhere, from your smartphone or tablet. Learn at your own pace and convenience.
          </li>
          <li className="mb-2">
            <span className="text-white">Regular Updates to Stay Current:</span> We ensure our solutions are always aligned with the latest NCERT syllabus and guidelines, providing you with the most accurate and relevant information.
          </li>
        </ul>
      </div>
    </div>
  );
}
