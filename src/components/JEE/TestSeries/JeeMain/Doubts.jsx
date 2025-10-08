import React from "react";
import IIt from "../../../../assets/jee-images/courses/IIt.png";
import Data from "./Data";

export default function Doubts() {
  return (
    <div>
    <div className="pt-20">
      {/* Heading */}
      <div className="text-center text-3xl md:text-4xl font-bold pb-20">
        Got  <span className="text-[#2FC18B]">Doubts?</span>Let's Clear Them Up.
      </div>

      {/* Loop over Data */}
      {Data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-extrabold  mb-4 ">
              {item.title}
            </h2>

            {/* Description List */}
            {item.description && (
              <ul className="list-disc  text-left px-6">
                {item.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-base text-[#9EBDEF] mb-2"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 mb-6 md:mt-0 px-2">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg shadow-lg w-full h-auto object-contain"
              style={{ width: item.imageWidth || "350px" }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="pt-10 flex flex-col md:flex-row items-center md:justify-between">
      {/* Left Content */}
      <div className="w-full lg:w-[60%] flex flex-col text-center md:text-left pt-10">
        <h2 className="text-3xl sm:text-[40px] font-bold">Ready To  <span className=" text-[#2FC18B]">
         Crack JEE Main?
        </span></h2>
        
        <p className="text-[#9EBDEF] text-base mt-6">
          Join QuestPix today and experience the difference between ordinary practice and our extraordinary approach.
        </p>
        <div className="flex gap-2 mx-auto md:mx-0 bg-[#2FC18B] w-fit px-4 py-2 rounded-xl mt-4 ">
          <button className="text-white cursor-pointer ">
            Start Your Journey to Sucess
          </button>
        </div>
      </div>
      {/* Right Image */}
      <div className="w-full lg:w-[40%] flex justify-center">
        <img
          src={IIt}
          alt="program"
          className="w-full max-w-96 object-contain"
        />
      </div>
    </div>
    </div>
  );
}
