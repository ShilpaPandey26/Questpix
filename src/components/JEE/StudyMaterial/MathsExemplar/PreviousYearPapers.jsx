import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

export default function PreviousYearPapers() {
  const papers = [
  // ===== CLASS 12 MATHS =====
  {
    class: 12,
    chapter: 1,
    title: "Relations and Functions",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099705.pdf"
  },
  {
    class: 12,
    chapter: 2,
    title: "Inverse Trigonometric Functions",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099720.pdf"
  },
  {
    class: 12,
    chapter: 3,
    title: "Matrices",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099749.pdf"
  },
  {
    class: 12,
    chapter: 4,
    title: "Determinants",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099763.pdf"
  },
  {
    class: 12,
    chapter: 5,
    title: "Continuity and Differentiability",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099778.pdf"
  },
  {
    class: 12,
    chapter: 6,
    title: "Applications of Derivatives",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099795.pdf"
  },
  {
    class: 12,
    chapter: 7,
    title: "Integrals",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099809.pdf"
  },
  {
    class: 12,
    chapter: 8,
    title: "Application of Integrals",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099835.pdf"
  },
  {
    class: 12,
    chapter: 9,
    title: "Differential Equations",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099849.pdf"
  },
  {
    class: 12,
    chapter: 10,
    title: "Vector Algebra",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099862.pdf"
  },
  {
    class: 12,
    chapter: 11,
    title: "Three Dimensional Geometry",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741099877.pdf"
  },
  {
    class: 12,
    chapter: 12,
    title: "Linear Programming",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741179439.pdf"
  },
  {
    class: 12,
    chapter: 13,
    title: "Probability",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741179465.pdf"
  },

  // ===== CLASS 11 MATHS =====
  {
    class: 11,
    chapter: 1,
    title: "Sets",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010314.pdf"
  },
  {
    class: 11,
    chapter: 2,
    title: "Relations and Functions",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010380.pdf"
  },
  {
    class: 11,
    chapter: 3,
    title: "Trigonometric Functions",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010397.pdf"
  },
  {
    class: 11,
    chapter: 4,
    title: "Principle of Mathematical Induction",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010412.pdf"
  },
  {
    class: 11,
    chapter: 5,
    title: "Complex Numbers and Quadratic Equations",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010428.pdf"
  },
  {
    class: 11,
    chapter: 6,
    title: "Linear Inequalities",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010456.pdf"
  },
  {
    class: 11,
    chapter: 7,
    title: "Permutations and Combinations",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010472.pdf"
  },
  {
    class: 11,
    chapter: 8,
    title: "Binomial Theorem",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010488.pdf"
  },
  {
    class: 11,
    chapter: 9,
    title: "Sequence and Series",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010504.pdf"
  },
  {
    class: 11,
    chapter: 10,
    title: "Straight Lines",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010520.pdf"
  },
  {
    class: 11,
    chapter: 11,
    title: "Conic Sections",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010572.pdf"
  },
  {
    class: 11,
    chapter: 12,
    title: "Introduction to Three Dimensional Geometry",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010587.pdf"
  },
  {
    class: 11,
    chapter: 13,
    title: "Limits and Derivatives",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010600.pdf"
  },
  {
    class: 11,
    chapter: 14,
    title: "Mathematical Reasoning",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010615.pdf"
  },
  {
    class: 11,
    chapter: 15,
    title: "Statistics",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010631.pdf"
  },
  {
    class: 11,
    chapter: 16,
    title: "Probability",
    link: "https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741010646.pdf"
  }
];




    return (
        <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6">Explore Our Extensive  <span className="text-[#2FC18B]">NCERT</span> Maths Solutions Library</h2>
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
