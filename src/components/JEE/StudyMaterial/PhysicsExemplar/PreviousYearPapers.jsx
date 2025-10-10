import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

export default function PreviousYearPapers() {
const papers = [
  // ===== CLASS 12 PHYSICS =====
  {
    class: "Class 12",
    chapter: "1",
    title: "Electric Charges and Fields",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612648.pdf"
  },
  {
    class: "Class 12",
    chapter: "2",
    title: "Electrostatic Potential and Capacitance",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612648.pdf"
  },
  {
    class: "Class 12",
    chapter: "3",
    title: "Current Electricity",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612665.pdf"
  },
  {
    class: "Class 12",
    chapter: "4",
    title: "Moving Charges and Magnetism",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612680.pdf"
  },
  {
    class: "Class 12",
    chapter: "5",
    title: "Magnetism and Matter",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612695.pdf"
  },
  {
    class: "Class 12",
    chapter: "6",
    title: "Electromagnetic Induction",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612709.pdf"
  },
  {
    class: "Class 12",
    chapter: "7",
    title: "Alternating Current",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612725.pdf"
  },
  {
    class: "Class 12",
    chapter: "8",
    title: "Electromagnetic Waves",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612737.pdf"
  },
  {
    class: "Class 12",
    chapter: "9",
    title: "Ray Optics and Optical Instruments",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612750.pdf"
  },
  {
    class: "Class 12",
    chapter: "10",
    title: "Wave Optics",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612763.pdf"
  },
  {
    class: "Class 12",
    chapter: "11",
    title: "Dual Nature of Radiation and Matter",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612775.pdf"
  },
  {
    class: "Class 12",
    chapter: "12",
    title: "Atoms",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612815.pdf"
  },
  {
    class: "Class 12",
    chapter: "13",
    title: "Nuclei",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612833.pdf"
  },
  {
    class: "Class 12",
    chapter: "14",
    title: "Semiconductor Electronics",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612847.pdf"
  },

  // ===== CLASS 11 PHYSICS =====
  {
    class: "Class 11",
    chapter: "1",
    title: "Units and Measurements",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309429.pdf"
  },
  {
    class: "Class 11",
    chapter: "2",
    title: "Motion in a Straight Line",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309573.pdf"
  },
  {
    class: "Class 11",
    chapter: "3",
    title: "Motion In A Plane",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309601.pdf"
  },
  {
    class: "Class 11",
    chapter: "4",
    title: "Laws of Motion",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309633.pdf"
  },
  {
    class: "Class 11",
    chapter: "5",
    title: "Work, Energy, and Power",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309657.pdf"
  },
  {
    class: "Class 11",
    chapter: "6",
    title: "System of Particles and Rotational Motion",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309675.pdf"
  },
  {
    class: "Class 11",
    chapter: "7",
    title: "Gravitation",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309693.pdf"
  },
  {
    class: "Class 11",
    chapter: "8",
    title: "Mechanical Properties of Solids",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309710.pdf"
  },
  {
    class: "Class 11",
    chapter: "9",
    title: "Mechanical Properties of Fluid",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309728.pdf"
  },
  {
    class: "Class 11",
    chapter: "10",
    title: "Thermal Properties of Matter",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309745.pdf"
  },
  {
    class: "Class 11",
    chapter: "11",
    title: "Thermodynamics",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309764.pdf"
  },
  {
    class: "Class 11",
    chapter: "12",
    title: "Kinetic Theory",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309898.pdf"
  },
  {
    class: "Class 11",
    chapter: "13",
    title: "Oscillations",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309980.pdf"
  },
  {
    class: "Class 11",
    chapter: "14",
    title: "Waves",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740309998.pdf"
  }
];


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
