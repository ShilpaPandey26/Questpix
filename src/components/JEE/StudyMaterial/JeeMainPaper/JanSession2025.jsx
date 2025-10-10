import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png"


const papers = [
  { title: "JEE Main 2025 (29 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279892.pdf" },
  { title: "JEE Main 2025 (29 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279880.pdf" },
  { title: "JEE Main 2025 (28 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279868.pdf" },
  { title: "JEE Main 2025 (28 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279854.pdf" },
  { title: "JEE Main 2025 (24 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279842.pdf" },
  { title: "JEE Main 2025 (24 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279828.pdf" },
  { title: "JEE Main 2025 (23 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279810.pdf" },
  { title: "JEE Main 2025 (23 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279793.pdf" },
  { title: "JEE Main 2025 (22 Jan, Shift 2)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279778.pdf" },
  { title: "JEE Main 2025 (22 Jan, Shift 1)", link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1739279758.pdf" },
];


export default function JanSession2025() {
    return (
        <div className="mt-20">

            <h2 className="text-xl font-extrabold mb-6">
                2025 Jan Session PDFs
            </h2>

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
                                    {paper.title}  Previous Year Paper
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
