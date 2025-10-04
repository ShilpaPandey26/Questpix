import React from 'react';

export default function MarkingSchema() {
    const Paper1 = [
        {
            title: "Marking Scheme:",
            topics: [
                "+4 marks for every correct response.",
                "-1 mark for every incorrect response",
                "No deduction for unattempted questions",
            ],
        },
        {
            title: "Section-wise Distribution:",
            topics: [
                "Mathematics, Physics, and Chemistry sections each contribute a maximum of 100 marks for 25 questions per section.",
                "Total: 75 questions (75 × 4 = 300 marks).",
            ],
        },
    ];

    const Paper2 = [
        {
            title: "Marking Scheme:",
            topics: [
                "+4 marks for every correct response.",
                "-1 mark for every incorrect response",
                "No deduction for unattempted questions",
            ],
        },
        {
            title: "Section-wise Distribution:",
            topics: [
                "Mathematics, Physics, and Chemistry sections each contribute a maximum of 100 marks for 25 questions per section.",
                "Total: 75 questions (75 × 4 = 300 marks).",
            ],
        },
    ];

    return (
        <div className=" mt-16">
            <div>
                <h2 className="text-2xl sm:text-4xl font-extrabold  mb-6">
                    Marking <span className="text-[#2FC18B]">Schema</span>
                </h2>
                <p className=" text-lg font-medium mb-8">
                    Below is the marking scheme for all papers in the JEE Main examination:
                </p>

                <Marking title="Paper 1 (B.E./B.Tech)" marks="300" data={Paper1} />
                <Marking title="Paper 2 (B.Arch/B.Planning)" marks="800" data={Paper2} />
            </div>

            <div className="mt-16">
                <MarkingPart2 />
            </div>


            <div className="mt-16">
                <JEECounsellingProcess />
            </div>

        </div>
    );
}

function Marking({ title, marks, data }) {
    return (
        <div className="max-w-6xl  mb-12">
            <h3 className="text-lg font-extrabold mb-4">{title}:</h3>

            <div className="flex flex-col sm:flex-row text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white rounded-md overflow-hidden mb-4">
                <div className="py-2 sm:py-3 px-4 w-full sm:w-2/3">
                    Total Marks: {marks}.
                </div>
            </div>

            {/* Rows */}
            {data.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:even:bg-gradient-to-r sm:from-[#1e293b] sm:via-[#24354f] sm:to-[#1e293b] mb-2 sm:mb-0"
                >
                    <div className="w-full sm:w-1/3 p-2 font-semibold ">
                        {item.title}
                    </div>
                    <div className="w-full sm:w-2/3 p-2 ">
                        <ul className="list-disc pl-5 text-[#9EBDEF]">
                            {item.topics.map((topic, idx) => (
                                <li key={idx}>{topic}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

function MarkingPart2() {
    const papers = [
        {
            title: "Paper 2A (B.Arch)",
            sections: [
                { name: "Drawing Section", details: "2 questions, 50 marks each (total: 100 marks)" },
                { name: "Mathematics Section", details: "25 questions, 4 marks each (total: 100 marks)" },
                { name: "Aptitude Section", details: "50 questions, 4 marks each (total: 200 marks)" },
            ],
        },
        {
            title: "Paper 2B (B.Planning)",
            sections: [
                { name: "Planning Section", details: "25 questions, 4 marks each (total: 100 marks)" },
                { name: "Mathematics Section", details: "25 questions, 4 marks each (total: 100 marks)" },
                { name: "Aptitude Section", details: "50 questions, 4 marks each (total: 200 marks)" },
            ],
        },
    ];

    return (
        <div className="max-w-6xl ">
            {papers.map((paper, idx) => (
                <div key={idx}>
                    <h2 className="text-lg  font-bold mb-4 mt-16">{paper.title}:</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[300px] border border-gray-700 rounded overflow-hidden text-[15px]">
                            <tbody>
                                {paper.sections.map((section, i) => (
                                    <tr key={i} className="odd:bg-gray-800">
                                        <td className="p-4 sm:p-5 font-semibold w-1/3">{section.name}</td>
                                        <td className="p-4 sm:p-5 w-2/3">
                                            <ul className="list-disc text-[#9EBDEF] pl-5">
                                                <li>{section.details}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}

function JEECounsellingProcess() {
    return (
        <div className="max-w-6xl">
            <h2 className="text-3xl sm:text-[38px] font-extrabold mb-6">JEE Counselling <span className="text-[#2FC18B]">Process 2025</span></h2>
            <p className="text-base text-[#9EBDEF] mb-4">The JEE Main Counselling process is conducted by the Joint Seat Allocation Authority (JoSAA) for admission to NITs, IIITs, and GFTIs. Here's a step-by-step overview of the process:</p>
            <ul className="list-disc text-base text-[#9EBDEF] px-4">
                <li className="mb-2"><span className="text-white ">Registration:</span> Candidates who qualify for JEE Main need to register on the JoSAA website (josaa.nic.in).</li>
                <li className="mb-2"><span className="text-white">Choice Filling:</span> After registration, candidates can fill in their preferred choices of courses and institutes.</li>
                <li className="mb-2"><span className="text-white">Mock Allotment:</span> JoSAA releases mock allotment results to help candidates understand their chances of getting a seat based on their rank and preferences.</li>
                <li className="mb-2"><span className="text-white">Seat Allotment:</span> Based on the candidates' merit, choices, and seat availability, JoSAA conducts multiple rounds of seat allotment.
                </li>
                <li><span className="text-white">Reporting to Allotted Institute: </span>Candidates who are allotted a seat need to report to the respective institute for admission.</li>
            </ul>
        </div>
    )
}
