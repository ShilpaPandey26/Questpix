import React from "react";

export default function MarksDistribution() {
  const paper1 = [
    { subject: "Mathematics", sectionA: 20, sectionB: 5, marks: 100 },
    { subject: "Chemistry", sectionA: 20, sectionB: 5, marks: 100 },
    { subject: "Physics", sectionA: 20, sectionB: 5, marks: 100 },
    {
      subject: "Total Marks of JEE Mains 2025",
      sectionA: "75 Questions",
      sectionB: "00",
      marks: "300 Marks",
     
    },
  ];

  const bArch = [
    {
      subject: "Mathematics",
      questions:
        "25 (20+5) 5 questions with answers as a numerical value have to be answered.",
      marks: 100,
    },
    { subject: "Aptitude", questions: "50", marks: 200 },
    { subject: "Drawing Test", questions: "02", marks: 100 },
    {
      subject: "JEE Exam Total Marks & Questions",
      questions: "77 Questions",
      marks: "400 Marks",
     
    },
  ];

  const bPlan = [
    {
      subject: "Mathematics",
      questions:
        "25 (20+5) 5 questions with answers as a numerical value have to be answered.",
      marks: 100,
    },
    { subject: "Aptitude", questions: "50", marks: 200 },
    { subject: "Planning Test", questions: "25", marks: 100 },
    {
      subject: "JEE Exam Total Marks & Questions",
      questions: "100 Questions",
      marks: "400 Marks",
      
    },
  ];

  return (
    <div className="px-4">
      <h2 className="text-lg sm:text-3xl font-extrabold mt-10">
        Subject-Wise Distribution of <span className="text-[#2FC18B]">Marks</span>
      </h2>

      {/* Paper 1 */}
      <Table1 title="JEE Main Paper 1" data={paper1} />

      {/* B.Arch */}
      <Table2 title="JEE Main B.Arch" data={bArch} />

      {/* B.Plan */}
      <Table2 title="JEE Main B.Plan" data={bPlan} />
    </div>
  );
}

function Table1({ title, data }) {
  return (
    <div className="max-w-6xl bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px] mt-8 rounded-lg">
      <h3 className="font-bold mb-4 text-[#9EBDEF] px-4">{title}:</h3>

      <div className="min-w-[500px]">
        {/* Header */}
        <div className="flex text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
          <div className="py-3 px-4 w-1/4">Subjects</div>
          <div className="py-3 px-4 w-1/4">Section A</div>
          <div className="py-3 px-4 w-1/4">Section B</div>
          <div className="py-3 px-4 w-1/4">Marks</div>
        </div>

        {/* Rows */}
        {data.map((row, idx) => (
          <div
            key={idx}
            className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
          >
            <div className="w-1/4 px-4 py-2">{row.subject}</div>
            <div className="w-1/4 px-4 py-2">{row.sectionA}</div>
            <div className="w-1/4 px-4 py-2">{row.sectionB}</div>
            <div className="w-1/4 px-4 py-2">{row.marks}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Table2({ title, data }) {
  return (
    <div className="max-w-6xl bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px] mt-16 rounded-lg">
      <h3 className="font-bold mb-4 text-[#9EBDEF] px-4">{title}:</h3>

      <div className="min-w-[500px]">
        {/* Header */}
        <div className="flex text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
          <div className="py-3 px-4 w-1/3">Subject</div>
          <div className="py-3 px-4 w-1/3">Number of Questions</div>
          <div className="py-3 px-4 w-1/3">Marks</div>
        </div>

        {/* Rows */}
        {data.map((row, idx) => (
          <div
            key={idx}
            className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
          >
            <div className="w-1/3 px-4 py-2">{row.subject}</div>
            <div className="w-1/3 px-4 py-2">{row.questions}</div>
            <div className="w-1/3 px-4 py-2">{row.marks}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
