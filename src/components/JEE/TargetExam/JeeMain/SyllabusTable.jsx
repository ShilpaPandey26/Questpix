import React from 'react'

export default function SyllabusTable() {
    const data = [
        {
            subject: "Physics",
            topics: [
                "Mechanics",
                "Heat and Thermodynamics",
                "Waves and Optics",
                "Electricity and Magnetism",
                "Modern Physics",
            ],
        },
        {
            subject: "Chemistry",
            topics: ["Physical Chemistry", "Inorganic Chemistry", "Organic Chemistry"],
        },
        {
            subject: "Mathematics",
            topics: [
                "Algebra",
                "Calculus",
                "Coordinate Geometry",
                "Trigonometry",
                "Vectors",
                "Statistics and Probability",
            ],
        },
        {
            subject: "Aptitude (for B.Arch and B.Plan)",
            topics: [
                "Awareness of persons, buildings, and materials",
                "Three-dimensional perception",
                "Thinking skills",
            ],
        },
        {
            subject: "Drawing (for B.Arch)",
            topics: [
                "Geometrical Drawing",
                "Freehand Drawing",
                "Perspective Drawing",
                "Architectural Drawing",
            ],
        },
        {
            subject: "Planning (for B.Plan)",
            topics: ["General Awareness", "Social Sciences"],
        },
    ];


    const examPapers = [
        {
            paper: "Physics",
            subjects: "Physics, Chemistry, Mathematics",
            questions: [
                "Objective Type - Multiple Choice Questions (MCQs)",
                "Numerical value questions"
            ]
        },
        {
            paper: "Paper 2A : B Arch",
            subjects: [
                "Part-1: Mathematics",
                "Part-2: Aptitude Test",
                "Part-3: Drawing Test"
            ],
            questions: [
                "Objective Type - Multiple Choice Questions (MCQs)",
                "Numerical value questions",
                "Objective Type - Multiple Choice Questions (MCQs)",
                "Questions to test drawing aptitude"
            ]
        },
        {
            paper: "Paper 2B : B Arch",
            subjects: [
                "Part-1: Mathematics",
                "Part-2: Aptitude Test",
                "Part-3: Planning-Based Questions"
            ],
            questions: [
                "Objective Type - Multiple Choice Questions (MCQs)",
                "Numerical value questions",
                "Objective Type - Multiple Choice Questions (MCQs)",
                "Objective Type - Multiple Choice Questions (MCQs)"
            ]
        }
    ];
    return (
        <div>
            {/* Subject Table */}
            <div className="max-w-5xl bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px] ">
                <h2 className="text-lg font-extrabold mb-6 px-4 pt-4">
                    Here's a brief overview of the key topics covered in each subject:
                </h2>

                <div className="min-w-[500px]">
                    {/* Header */}
                    <div className="flex text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white ">
                        <div className="py-3 px-4 w-1/3">Subjects</div>
                        <div className="py-3 px-4 w-2/3">Key Topics</div>
                    </div>

                    {/* Rows */}
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className=" flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                        >
                            <div className="w-1/3 px-4 py-3 font-semibold">
                                {item.subject}
                            </div>
                            <div className="w-2/3 px-4 py-3">
                                <ul className="list-disc pl-5 text-[#9EBDEF]">
                                    {item.topics.map((topic, idx) => (
                                        <li key={idx}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Exam Papers Table */}
            <div>
                <ExamTable examPapers={examPapers} />
            </div>
        </div>
    );
}

function ExamTable({ examPapers }) {
    return (
        <div className="max-w-6xl bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px] mt-16 ">
            <div className="min-w-[600px]">
                {/* Header */}
                <div className="flex text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
                    <div className="py-3 px-4 w-1/4">Paper</div>
                    <div className="py-3 px-4 w-1/3">Subjects</div>
                    <div className="py-3 px-4 w-2/5">Types of Questions</div>
                </div>

                {/* Rows */}
                {examPapers.map((item, index) => (
                    <div
                        key={index}
                        className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                    >
                        <div className="w-1/4 px-4 py-3 font-semibold">
                            {item.paper}
                        </div>

                        <div className="w-1/3 px-4 py-3">
                            {Array.isArray(item.subjects) ? (
                                <ul className="list-disc pl-5">
                                    {item.subjects.map((sub, idx) => (
                                        <li key={idx}>{sub}</li>
                                    ))}
                                </ul>
                            ) : (
                                <span>{item.subjects}</span>
                            )}
                        </div>

                        <div className="w-2/5 px-4 py-3">
                            <ul className="list-disc pl-5 text-[#9EBDEF]">
                                {item.questions.map((q, idx) => (
                                    <li key={idx}>{q}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
