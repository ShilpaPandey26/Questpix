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
        <div className="md:w-[55%]">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-6">
            NCERT <span className="text-[#2FC18B]">Exemplar Solutions</span>{" "}
            Class - Wise
          </h2>
          <h3 className="textxl sm:text-2xl font-extrabold mb-4">
            Download NCERT  <span className="text-[#2FC18B]"> Exemplar </span> (Class - Wise)
            Question Papers (PDFs)
          </h3>
          <p className="text-[#9EBDEF]">
            Ready to take your NCERT learning to the next level? QuestPix presents a comprehensive collection of NCERT Exemplar Problems with Solutions, designed to challenge your understanding and sharpen your problem-solving skills across Physics, Chemistry, and Maths.
          </p>
        </div>

        <div className=" flex justify-end items-end rounded-xl shadow-lg max-w-4xl  mx-auto">
          <img
            src={jeestudy}
            alt="App Preview"
            className="w-56 rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <div className="mt-10 max-w-3xl">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Why are NCERT<span className="text-[#2FC18B]"> Exemplar Problems </span>Important? </h2>
          <p className="text-[#9EBDEF] mb-4">NCERT Exemplar Problems are a valuable resource for students aiming to excel in their academics. They:</p>
          <ul className="text-[#9EBDEF] list-disc px-4 text-[15px]">
            <li className="mb-2">
              <span className="text-white">Go beyond Textbook Exercises:</span>{" "}
              Exemplar problems go deeper into concepts, presenting higher-order thinking questions that challenge your understanding and application of knowledge.
            </li>

            <li className="mb-2">
              <span className="text-white">Enhance Problem-Solving Skills:</span>{" "}
              These problems are designed to develop critical thinking, analytical reasoning, and problem-solving abilities, crucial for academic success and competitive exams.
            </li>
            <li className="mb-2">
              <span className="text-white">Provide Exposure to Diverse Question Types: </span>{" "}
              Exemplar problems expose you to a wide range of question formats, including multiple-choice, short answer, and long answer questions, preparing you for various assessment styles.
            </li>
            <li className="mb-2">
              <span className="text-white">Boost Exam Preparedness:</span>{" "}
              By practicing exemplar problems, you gain a deeper understanding of concepts, improve your problem-solving speed and accuracy, and build confidence for facing challenging exam questions.
            </li>

          </ul>
        </div>
      </div>

      <div className="mt-10 max-w-3xl">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">
            Why are NCERT<span className="text-[#2FC18B]"> Exemplar Problems </span>Important? </h2>

          <ul className="text-[#9EBDEF] list-disc px-4 text-[15px]">
            <li className="mb-2">
              <span className="text-white">Class-wise and Subject-wise Organization: </span>{" "}
              We offer a well-structured platform where you can easily access exemplar problems and solutions categorized by class (6 to 12) and subject (Physics, Chemistry, Maths).
            </li>

            <li className="mb-2">
              <span className="text-white">Detailed Solutions with Explanations:</span>{" "}
              Our solutions are not just about providing answers; they guide you through the problem-solving process with step-by-step explanations, ensuring clarity and fostering a deeper understanding of concepts.
            </li>

            <li className="mb-2">
              <span className="text-white">Expertly Curated by Subject Specialists:</span>{" "}
              Our solutions are crafted by experienced educators who are passionate about their subjects. They bring clarity, accuracy, and depth to every solution, ensuring a valuable learning experience.
            </li>

            <li className="mb-2">
              <span className="text-white">Free and Accessible to All:</span>{" "}
              We believe that quality educational resources should be available to everyone. Our entire collection of NCERT Exemplar Problems and Solutions is accessible completely free of charge.
            </li>

            <li className="mb-2">
              <span className="text-white">User-Friendly Interface for Easy Navigation: </span>{" "}
              Our website is designed with your convenience in mind. Easily browse through different classes, subjects, and chapters with our intuitive and user-friendly interface.
            </li>

            <li className="mb-2">
              <span className="text-white">Mobile Compatibility for Learning on the Go: </span>{" "}
              Access our solutions anytime, anywhere, from your smartphone or tablet. Learn at your own pace and convenience, whether you're at home or on the move.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-3xl">
        <PreviousYearPapers />
      </div>

    
    </div>
  );
}
