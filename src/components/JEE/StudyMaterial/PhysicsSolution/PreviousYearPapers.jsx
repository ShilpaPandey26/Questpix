import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

const papers = [
    {
        class: "Class 12",
        chapter: "1",
        title: "Electric Charges and Fields",
        link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612467.pdf"

    },
];


export default function PreviousYearPapers() {
    return (
        <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6">Explore Our Extensive  <span className="text-[#2FC18B]">NCERT</span> Physics Solutions Library</h2>
            <div className="flex overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className=" bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white text-left">
                            <th className="py-3 px-4 text-white w-[15%]">Classes</th>
                            <th className="py-3 px-4 text-white  text-sm sm:text-[15px] w-[15%]">Chapter</th>
                            <th className="py-3 px-4 text-white  text-sm sm:text-[15px] w-[45%]">Title</th>
                            <th className="py-3 px-4 text-white  text-sm sm:text-[15px] w-[25%]">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {papers.map((paper, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-700 hover:bg-gray-800 transition"
                            >
                                <td className="py-3 px-4 text-sm sm:text-[15px] w-[15%]">
                                    {paper.class}
                                </td>
                                <td className="py-3 px-4 text-sm sm:text-[15px] w-[15%]">
                                    {paper.chapter}
                                </td>
                                <td className="py-3 px-4 text-sm sm:text-[15px] w-[45%]">
                                    {paper.title}
                                </td>

                                <td className="py-3 px-4 text-center w-[25%]">
                                    <a
                                        href={paper.link}
                                        className="flex items-center text-sm sm:text-[15px]  gap-2 text-[#00D0FF] hover:text-blue-300"
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
