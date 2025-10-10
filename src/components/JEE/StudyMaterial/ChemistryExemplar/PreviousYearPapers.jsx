import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

export default function PreviousYearPapers() {
 const papers = [
  // ===== CLASS 12 CHEMISTRY =====
  {
    class: "Class 12",
    chapter: "1",
    title: "Solid State",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741094642.pdf"
  },
  {
    class: "Class 12",
    chapter: "2",
    title: "Solutions",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741094662.pdf"
  },
  {
    class: "Class 12",
    chapter: "3",
    title: "Electrochemistry",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741094679.pdf"
  },
  {
    class: "Class 12",
    chapter: "4",
    title: "Chemical Kinetics",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741094697.pdf"
  },
  {
    class: "Class 12",
    chapter: "5",
    title: "Surface Chemistry",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741094715.pdf"
  },
  {
    class: "Class 12",
    chapter: "6",
    title: "General Principles and Processes of Isolation of Elements",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741094731.pdf"
  },
  {
    class: "Class 12",
    chapter: "7",
    title: "The p-Block Elements",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741094749.pdf"
  },
  {
    class: "Class 12",
    chapter: "8",
    title: "The d- and f- Block Elements",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095160.pdf"
  },
  {
    class: "Class 12",
    chapter: "9",
    title: "Coordination Compounds",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095174.pdf"
  },
  {
    class: "Class 12",
    chapter: "10",
    title: "Haloalkanes and Haloarenes",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095190.pdf"
  },
  {
    class: "Class 12",
    chapter: "11",
    title: "Alcohol, Phenols and Ethers",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095210.pdf"
  },
  {
    class: "Class 12",
    chapter: "12",
    title: "Aldehydes, Ketones and Carboxylic Acids",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095241.pdf"
  },
  {
    class: "Class 12",
    chapter: "13",
    title: "Amines",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095257.pdf"
  },
  {
    class: "Class 12",
    chapter: "14",
    title: "Biomolecules",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095282.pdf"
  },
  {
    class: "Class 12",
    chapter: "15",
    title: "Polymers",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095300.pdf"
  },
  {
    class: "Class 12",
    chapter: "16",
    title: "Chemistry in Everyday Life",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741095315.pdf"
  },

  // ===== CLASS 11 CHEMISTRY =====
  {
    class: "Class 11",
    chapter: "1",
    title: "Some Basic Concepts in Chemistry",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314119.pdf"
  },
  {
    class: "Class 11",
    chapter: "2",
    title: "Structure of Atom",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314145.pdf"
  },
  {
    class: "Class 11",
    chapter: "3",
    title: "Classification of Elements and Periodicity in Properties",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314166.pdf"
  },
  {
    class: "Class 11",
    chapter: "4",
    title: "Chemical Bonding and Molecular Structure",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314187.pdf"
  },
  {
    class: "Class 11",
    chapter: "5",
    title: "States of Matter",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314208.pdf"
  },
  {
    class: "Class 11",
    chapter: "6",
    title: "Thermodynamics",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314226.pdf"
  },
  {
    class: "Class 11",
    chapter: "7",
    title: "Equilibrium",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314242.pdf"
  },
  {
    class: "Class 11",
    chapter: "8",
    title: "Redox Reactions",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314264.pdf"
  },
  {
    class: "Class 11",
    chapter: "9",
    title: "Hydrogen",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314287.pdf"
  },
  {
    class: "Class 11",
    chapter: "10",
    title: "The s-Block Elements",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314305.pdf"
  },
  {
    class: "Class 11",
    chapter: "11",
    title: "The p- Block Elements",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314326.pdf"
  },
  {
    class: "Class 11",
    chapter: "12",
    title: "Organic Chemistry Some Basic Principles and Techniques",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314348.pdf"
  },
  {
    class: "Class 11",
    chapter: "13",
    title: "Hydrocarbons",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314367.pdf"
  },
  {
    class: "Class 11",
    chapter: "14",
    title: "Environmental Chemistry",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1740314385.pdf"
  }
];





    return (
        <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6">Explore Our Extensive  <span className="text-[#2FC18B]">NCERT</span> Chemistry Solutions Library</h2>
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
