import React from "react";



export default function PreviousYearPapers() {
    return (
        <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6">Explore Our Extensive  <span className="text-[#2FC18B]">NCERT</span> Chemistry Solutions Library</h2>
            <div className="flex overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className=" bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white text-left">
                            <th className="py-3 px-4 text-white w-[30%]">Classes</th>
                            <th className="py-3 px-4 text-white text-center text-sm sm:text-[15px]">Chapter</th>
                            <th className="py-3 px-4 text-white text-center text-sm sm:text-[15px]">Link</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
}
