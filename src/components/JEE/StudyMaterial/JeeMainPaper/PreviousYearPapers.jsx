import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

const papers = [
  { title: "JEE Main 2024 (09 April, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282403.pdf" },
  { title: "JEE Main 2024 (09 April, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282391.pdf" },
  { title: "JEE Main 2024 (08 April, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282378.pdf" },
  { title: "JEE Main 2024 (08 April, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282366.pdf" },
  { title: "JEE Main 2024 (06 April, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282351.pdf" },
  { title: "JEE Main 2024 (06 April, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282337.pdf" },
  { title: "JEE Main 2024 (05 April, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282324.pdf" },
  { title: "JEE Main 2024 (05 April, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282310.pdf" },
  { title: "JEE Main 2024 (04 April, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282261.pdf" },
  { title: "JEE Main 2024 (04 April, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739282247.pdf" },
  { title: "JEE Main 2024 (31 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280722.pdf" },
  { title: "JEE Main 2024 (31 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280604.pdf" },
  { title: "JEE Main 2024 (30 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280591.pdf" },
  { title: "JEE Main 2024 (30 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280575.pdf" },
  { title: "JEE Main 2024 (29 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280560.pdf" },
  { title: "JEE Main 2024 (29 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280543.pdf" },
  { title: "JEE Main 2024 (27 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280529.pdf" },
  { title: "JEE Main 2024 (27 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280513.pdf" },
  { title: "JEE Main 2024 (01 Feb, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280495.pdf" },
  { title: "JEE Main 2024 (01 Feb, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739280481.pdf" },
];


export default function PreviousYearPapers() {
    return (
        <div className="mt-12">

            <h2 className="text-xl sm:text-2xl font-extrabold mb-4">Download JEE Main <span className="text-[#2FC18B]">Question Papers</span> (Year-wise)</h2>
            <h2 className="text-xl font-extrabold mb-6">2024 Feb Session PDFs</h2>

            <div className="flex overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className=" bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white text-left">
                            <th className="py-3 px-4 text-white w-[60%]">Paper</th>
                            <th className="py-3 px-4 text-white text-center text-sm sm:text-[15px] w-[40%]">Download Link</th>
                        </tr>
                    </thead>

                    <tbody>
                        {papers.map((paper, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-700 hover:bg-gray-800 transition"
                            >
                                <td className="py-3 px-4 text-xs sm:text-[15px]  w-[60%]">
                                    {paper.title} Previous Year Paper
                                </td>
                                <td className="py-3 px-4 text-center  w-[40%]">
                                    <a
                                        href={paper.link}
                                        className="flex items-center text-xs sm:text-[15px] justify-center gap-2 text-[#00D0FF] hover:text-blue-300"
                                    >
                                        <img src={pdf} className="w-5 h-5 text-red-500" />
                                        Download PDF
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
