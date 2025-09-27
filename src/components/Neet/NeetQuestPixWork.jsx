import React from "react";
import Data from "./NeetData";
import { FaCheck } from "react-icons/fa";

export default function NeetQuestPixWork() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-16 pb-20">
      <div className="text-center text-4xl font-bold">
        How Does QuestPix <span className="text-[#2FC18B]">Work?</span> 
      </div>
      {Data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center md:gap-8 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-4">
            <h2 className="text-2xl font-bold">{item.title}</h2>

            {/* Features list (if present) */}
            {item.features && (
              <ul className="list-none text-left">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 pb-3">
                    <FaCheck className="text-[#2b8986] mt-1 flex-shrink-0" />
                    <span className="text-[16px]">
                      <strong>{feature.title}</strong>{" "}
                      <span className="text-[15px] text-[#9EBDEF]">
                        {feature.description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Media Section (Image or Video) */}
          <div className="md:w-1/2  flex justify-center mt-6 md:mt-0">
            {item.video ? (
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-lg max-w-full"
                style={{ width: item.videoWidth || "350px" }} // dynamic width
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-lg"
                style={{ width: item.imageWidth || "350px" }} // dynamic width
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
