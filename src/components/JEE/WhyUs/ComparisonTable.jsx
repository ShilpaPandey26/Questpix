import React from "react";
import { Check, X } from "lucide-react"; 


const features = [
  { name: "Live classes with expert Faculty", questpix: true, others: true },
  { name: "Pre- Recorded Lectures", questpix: true, others: true },
  { name: "Year – wise PTQs", questpix: true, others: true },
  { name: "Rank Prediction Tool", questpix: true, others: true },
  { name: "Interactive Flashcards", questpix: true, others: false },
  {
    name: "Self Designed Practice Tests (Customize by exam, Subject, Chapter, Concept, Time, Difficulty)",
    questpix: true,
    others: false,
  },
  { name: "Chapter Wise PYQs", questpix: true, others: false },
  { name: "Real JEE-Replicating Test Series", questpix: true, others: false },
  { name: "Instant Doubt- Resolution with photo Click", questpix: true, others: false },
  { name: "Detailed Performance analytics", questpix: true, others: false },
];

export default function ComparisonTable() {
  return (
    <div className="container text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-center mb-3">
        See Why QuestPix is the{" "}
        <span className="text-[#2FC18B]">Smarter Choice.</span>
      </h2>
      <p className="text-center text-sm sm:text-base text-[#9EBDEF] mb-8 max-w-2xl mx-auto">
        QuestPix stands out from the crowd with its unique blend of personalized
        learning tools, expert guidance, and comprehensive resources.
      </p>

      {/* Responsive Table */}
      <div className="max-w-6xl mx-auto overflow-x-auto rounded-xl shadow-lg ">
        {/* Header */}
        <div className="grid grid-cols-3 min-w-[500px] text-sm sm:text-lg bg-gradient-to-r from-[rgba(15,24,37,0)] via-[rgba(47,193,139,1)] to-[rgba(15,24,37,0)] text-white font-semibold">
          <div className="py-3 px-4">Features</div>
          <div className="py-3 px-4 text-center">QuestPix</div>
          <div className="py-3 px-4 text-center">Others</div>
        </div>

        {/* Rows */}
        {features.map((f, i) => (
          <div
            key={i}
            className="grid grid-cols-3 min-w-[500px] text-xs sm:text-base odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
          >
            <div className="py-3 px-4 text-left text-gray-200">{f.name}</div>
            <div className="py-3 px-4 flex justify-center">
              {f.questpix ? (
                <Check className="text-green-400" size={20} />
              ) : (
                <X className="text-red-500" size={20} />
              )}
            </div>
            <div className="py-3 px-4 flex justify-center">
              {f.others ? (
                <Check className="text-green-400" size={20} />
              ) : (
                <X className="text-red-500" size={20} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
