import React, { useState } from "react";
import calender from "../../../assets/jee-images/calender.svg";
import sub from "../../../assets/jee-images/liveclass/sub.svg";
import pdf from "../../../assets/jee-images/StudyMaterial/pdf.png";
import topic from "../../../assets/jee-images/liveclass/topic.svg";
import time from "../../../assets/jee-images/time.svg";
import { ChevronDown, ChevronUp } from "lucide-react";
import vijaysir from "../../../assets/jee-images/vijay_sir_img.jpg";
import notes from "../../../assets/jee-images/liveclass/notes.svg";
import question from "../../../assets/jee-images/liveclass/question.svg";
import practice from "../../../assets/jee-images/liveclass/practice.svg";

export default function ClassSchedule() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-5">
      <div className="pt-30">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-3">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Schedule Classes</h2>
            <h4 className="text-xl sm:text-2xl font-bold">JEE</h4>
          </div>

          <select className="border border-gray-400 text-black bg-white px-4 py-2 rounded-lg w-[70%] sm:w-auto">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </div>

        {/* Date Header */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <img src={calender} alt="calender" className="h-6" />
            <span className="font-bold text-lg sm:text-xl">July 2025 (Classes 15 - 18)</span>
          </div>

          <ClassCard />
        </div>
      </div>
    </div>
  );
}



function ClassCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1b283d] rounded-xl p-4 flex flex-col">
      <div className="flex justify-between items-center" onClick={() => setIsOpen(!isOpen)} >
        <h2 className="px-4 py-2 rounded-[50%] bg-[#304a73] font-bold ">1</h2>
        <h3 className="sm:w-[85%] font-extrabold text-xl">July 15, 2025 class</h3>
        <span className="p-2 rounded-[50%] text-[#2FC18B] border-2 border-[#2FC18B] cursor-pointer">

          {isOpen ? <ChevronUp size={20} strokeWidth={4} /> : <ChevronDown size={20} strokeWidth={4} />} </span> </div>

      {isOpen && (
        <div className="bg-[#293c5a] mb-3 mt-4 p-3 flex flex-col lg:flex-row justify-between items-center gap-6 rounded-xl">
          {/* 1 */}
          <div className="flex justify-between w-full lg:w-[30%]   ">
            <div className="flex flex-col mx-auto md:mx-0  gap-2 ">
              <div className="flex flex-wrap gap-3 sm:gap-10 font-bold ">
                <h2 className="flex  gap-1 items-center">
                  <img src={sub} alt="subject" className="h-5" />Subjects </h2>
                <h2 className="flex items-center gap-1">MATHEMATICS <img src={pdf} alt="pdf" className="h-5" /> </h2>
              </div>
              <h2 className="flex items-center gap-1 font-bold">
                <img src={topic} alt="topic" className="h-5" />Chapter</h2>
              <p className="text-[#7B8EAC] px-4">COMPOUND ANGLE(General )</p>
              <p className="text-[#7B8EAC] px-4 flex items-center gap-1">
                <img src={time} alt="time" /> 23:19:00 - 23:52:00</p>
            </div>
            <div className="border-1 border-dashed border-[#B5D4FF] hidden lg:block h-[200px]"></div>
          </div>

          {/* 2 */}
          <div className="flex flex-col sm:flex-row justify-between  w-full  gap-6 lg:w-[40%] ">
            <div className="flex flex-col-reverse sm:flex-row gap-5 items-center">
              <div>
                <img src={vijaysir} alt="vijay sir" className="h-36 lg:mt-6 mt-0" />
              </div>
              <div className="flex flex-col  w-[80%]">
                <h2 className="text-center sm:text-left text-lg  font-bold mb-2 ">VIJAY KUMAR SHARMA</h2>
                <p className="text-[#7B8EAC] text-center sm:text-left">Vijay sir takes creative approach to helping students to overcome the intellectual amd emotional challenges in JEE. He has experience of more than 20 Years in teaching for JEE</p>
              </div>
            </div>

            <div className="border-1 border-dashed border-[#B5D4FF] hidden lg:block"></div>
          </div>

          {/* 3 */}
          <div className="flex flex-col md:flex-row  items-center  gap-6 w-full  lg:w-[30%]">
            <div className="w-full flex justify-center md:justify-start ">
              <button className="font-semibold  bg-[#007bff]  px-4 py-2 cursor-pointer rounded-lg hover:bg-[#0056b3] hover:scale-[1.02] transition-all">
                Watch Recorded
              </button>
            </div>



            <div className="grid grid-cols-2 gap-5 w-[70%] " >
              <h2 className="flex flex-col items-center">
                <img src={notes} alt="notes" className="h-8" /> Notes
              </h2>
              <h2 className="flex flex-col items-center">
                <img src={question} alt="question" className="h-8" /> Doubts
              </h2>
              <h2 className="flex flex-col items-center">
                <img src={notes} alt="notes" className="h-8" /> DPP
              </h2>
              <h2 className="flex flex-col items-center">
                <img src={practice} alt="practice" className="h-8" /> Practice
              </h2>
            </div>






          </div>
        </div>
      )}
    </div>
  )
}