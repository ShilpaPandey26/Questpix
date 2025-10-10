import React from "react";
import year_wise from "../../../../assets/jee-images/StudyMaterial/year-wise.jpg";
import jeestudy from "../../../../assets/jee-images/StudyMaterial/jeestudy.jpg";
import PreviousYearPapers from "./PreviousYearPapers";


export default function Main() {
  return (
    <div className="sm:pt-20 lg:pt-28">
      <img
        src={year_wise}
        alt="JEE Main Year Wise"
        className="rounded-2xl w-full h-[200px] sm:h-[250px] md:h-[300px] "
      />

      <div className="flex flex-col md:flex-row gap-10 justify-between items-center mt-16 ">
        <div className="md:w-[50%]">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-6">
            NCERT <span className="text-[#2FC18B]">Maths Solutions</span>{" "}
            Class - Wise
          </h2>
          <h3 className="textxl sm:text-2xl font-extrabold mb-4">
            Download NCERT Maths (Class - Wise)
            <span className="text-[#2FC18B]"> Question Papers </span>
            (PDFs)
          </h3>
          <p className="text-[#9EBDEF] mb-6">
            Navigating the world of NCERT Maths can be challenging. Complex theorems, intricate equations, and abstract concepts can often leave students feeling overwhelmed and discouraged. But what if there was a way to simplify this journey, to make learning Maths an engaging and rewarding experience? Enter QuestPix!
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
            Why Choose <span className="text-[#2FC18B]">QuestPix </span>  as Your Maths Guide?
          </h2>
          <ul className="text-[#9EBDEF] list-disc px-4 text-[15px]">
            <li className="mb-2">
              <span className="text-white">Comprehensive Class-wise Solutions: </span>{" "}
              We cover the entire NCERT Maths syllabus, offering detailed solutions for every chapter and exercise across all classes. Whether you're grappling with basic algebra in Class 6 or diving into calculus in Class 12, we've got you covered.
            </li>
            <li className="mb-2">
              <span className="text-white">Expertly Designed by Seasoned Educators: </span>{" "}
              Our solutions are not just about providing answers; they're about fostering deep understanding. Developed by experienced Maths teachers who are passionate about education, our solutions break down complex concepts into digestible pieces, ensuring clarity and building a strong foundation.
            </li>
            <li className="mb-2">
              <span className="text-white">Step-by-Step Explanations for Enhanced Learning:</span>{" "}
              We believe in demystifying Maths. Our solutions feature step-by-step explanations, guiding you through each problem-solving process. This approach promotes active learning, allowing you to grasp the underlying logic and develop your own problem-solving skills.
            </li>
            <li className="mb-2">
              <span className="text-white">
                Focus on Conceptual Clarity:
              </span>{" "}
              We go beyond rote memorization. Our solutions emphasize building a strong conceptual understanding of mathematical principles. This ensures that you not only solve problems correctly but also truly comprehend the "why" behind the solutions.
            </li>
            <li>
              <span className="text-white">
                Exam-Oriented Approach for Success:
              </span>{" "}
              We understand the importance of exam preparation. Our solutions incorporate exam-oriented strategies, providing tips and tricks to help you tackle exam questions effectively and boost your performance
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
