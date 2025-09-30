import React from "react";
import bc from "../../../../assets/SixToTen/courses/bc.png";

import pro1 from "../../../../assets/SixToTen/courses/pro1.png";
import pro2 from "../../../../assets/SixToTen/courses/pro2.png";
import pro3 from "../../../../assets/SixToTen/courses/pro3.png";

export default function ClassProgramHighlights() {
    return (
       <div
  className="pt-30 pb-30 bg-center lg:bg-contain bg-cover"
  style={{ backgroundImage: `url(${bc})` }}
>

            {/* Heading */}
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-center mb-10 px-4">
                Program <span className="text-[#2FC18B]">Highlights</span>
            </h2>

            {/* Grid */}
            <div className="container max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12">
                {/* Card 1 */}
                <div className="flex flex-col items-center bg-gradient-to-b from-[#202F47] to-[#3a547e00] rounded-2xl p-6 text-center shadow-lg">
                    <img src={pro1} className="w-24 sm:w-28 md:w-32 lg:w-40 mb-4" />
                    <h3 className="text-sm sm:text-base md:text-lg font-medium">
                        LIVE Classes for Advanced Physics, Chemistry, Biology & Maths
                    </h3>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center bg-gradient-to-b from-[#2FC18B] to-[#7be4c100] rounded-2xl p-6 text-center shadow-lg">
                    <img src={pro2} className="w-24 sm:w-28 md:w-32 lg:w-40 mb-4" />
                    <h3 className="text-sm sm:text-base md:text-lg font-medium">
                        Ranks Comprehensive Video Lectures for all NCERT Subjects
                    </h3>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center bg-gradient-to-b from-[#202F47] to-[#3a547e00] rounded-2xl p-6 text-center shadow-lg">
                    <img src={pro3} className="w-24 sm:w-28 md:w-32 lg:w-40 mb-4" />
                    <h3 className="text-sm sm:text-base md:text-lg font-medium">
                        Regular Tests to Track Foundation Strength
                    </h3>
                </div>
            </div>
        </div>
    );
}
