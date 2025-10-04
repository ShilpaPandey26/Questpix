import React from "react";

export default function JeeAdvancedPattern() {

  const jeeAdvancedPapers = [
  {
    particular: "Conducted By",
    paper1: "IITs (Indian Institute of Technology)",
    paper2: "IITs (Indian Institute of Technology)"
  },
  {
    particular: "Sessions",
    paper1: "Once a year",
    paper2: "Once a year"
  },
  {
    particular: "Exam Mode",
    paper1: "CBT (Online)",
    paper2: "CBT (Online)"
  },
  {
    particular: "Types of Questions",
    paper1: "MCQs and Numerical Type Questions",
    paper2: "MCQs and Numerical Type Questions"
  },
  {
    particular: "Medium of Exam",
    paper1: "English and Hindi",
    paper2: "English and Hindi"
  },
  {
    particular: "Duration of Exam",
    paper1: "3 Hours",
    paper2: "3 Hours"
  },
  {
    particular: "Total Marks",
    paper1: "Differ Every Year",
    paper2: "Differ Every Year"
  },
  {
    particular: "Marking Scheme",
    paper1: "Differ Every Year",
    paper2: "Differ Every Year"
  }
];

  return (
    <div className="max-w-6xl bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px] mt-16 rounded-lg">
      <h3 className="text-lg font-extrabold mb-4">JEE Adanced Exam Pattern</h3>

      <div className="min-w-[500px]">
        {/* Header */}
        <div className="flex text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
          <div className="py-3 px-4 w-1/3">Particulars</div>
          <div className="py-3 px-4 w-1/3 ">Paper 1</div>
          <div className="py-3 px-4 w-1/3">Paper 2</div>
        </div>

        {/* Rows */}
        {jeeAdvancedPapers.map((row, idx) => (
          <div
            key={idx}
            className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
          >
            <div className="w-1/3 px-4 py-2">{row.particular}</div>
            <div className="w-1/3 px-4 py-2 text-[#9EBDEF]">{row.paper1}</div>
            <div className="w-1/3 px-4 py-2 text-[#9EBDEF]">{row.paper2}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
