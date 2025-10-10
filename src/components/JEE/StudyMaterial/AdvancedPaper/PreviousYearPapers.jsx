import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

const papers = [
  {
    year: 2014,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738677608.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738677611.pdf",
    ],
  },
  {
    year: 2015,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738677102.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738677105.pdf",
    ],
  },
  {
    year: 2016,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738676217.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738676220.pdf",
    ],
  },
  {
    year: 2017,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738675798.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738675801.pdf",
    ],
  },
  {
    year: 2018,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738675267.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738675270.pdf",
    ],
  },
  {
    year: 2019,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738674686.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738674690.pdf",
    ],
  },
  {
    year: 2020,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738594052.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738594055.pdf",
    ],
  },
  {
    year: 2021,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738590194.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738590197.pdf",
    ],
  },
  {
    year: 2022,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738589238.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738589241.pdf",
    ],
  },
  {
    year: 2023,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738592339.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738592342.pdf",
    ],
  },
  {
    year: 2024,
    links: [
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738589179.pdf",
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1738589182.pdf",
    ],
  },
];

export default function PreviousYearPapers() {
    return (
        <div className="mt-12">

            <h2 className="text-xl sm:text-2xl font-extrabold mb-4">Download <span className="text-[#2FC18B]">JEE Advanced</span> Question Papers (Year-Wise)</h2>
            <h2 className="text-lg mb-6">Access and download JEE Advanced previous year question papers with solutions in PDF format for free. Click on the links below to download the papers for your desired year:</h2>

            <div className="flex overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className=" bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white text-left">
                            <th className="py-3 px-4 text-white w-[30%]">Year</th>
                            <th className="py-3 px-4 text-white  text-sm sm:text-[15px] w-[40%]">Paper 1</th>
                            <th className="py-3 px-4 text-white  text-sm sm:text-[15px] w-[40%]">Paper 2</th>
                        </tr>
                    </thead>

                    <tbody>
                        {papers.map((paper, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-700 hover:bg-gray-800 transition"
                            >
                                <td className="py-3 px-4 text-sm sm:text-[15px] w-[30%]">
                                    {paper.year}
                                </td>
                                <td className="py-3 px-4  w-[40%]">
                                    <a
                                        href={paper.links[0]}
                                        className="flex items-center text-xs sm:text-[15px]  gap-2 text-[#00D0FF] hover:text-blue-300"
                                    >
                                        <img src={pdf} className="w-5 h-5 text-red-500" />
                                        Download PDF
                                    </a>
                                </td>
                                <td className="py-3 px-4 text-center w-[40%]">
                                    <a
                                        href={paper.links[1]}
                                        className="flex items-center text-xs sm:text-[15px] gap-2 text-[#00D0FF] hover:text-blue-300"
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
