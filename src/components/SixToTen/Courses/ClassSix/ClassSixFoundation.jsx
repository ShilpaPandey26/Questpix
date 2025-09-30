import React from "react";
import boy from "../../../../assets/SixToTen/courses/boy.png";
import { ArrowRight } from "lucide-react";

export default function ClassSixFoundation() {
    return (
        <div className="w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-2 text-center md:text-left pt-30 lg:pt-0">
                        <h3 className="text-2xl  sm:text-3xl md:text-[40px]  font-extrabold">
                            JEE & NEET Foundation
                        </h3>
                        <h2 className="text-2xl sm:text-3xl md:text-[40px]  font-extrabold">
                            Online Course for <span className="text-[#2FC18B]">Class 6</span>
                        </h2>


                        <p className="text-[15px] mt-4 mb-4  text-[#9EBDEF]">
                            Lay the groundwork for future success in JEE and NEET right from Class 6. This course combines advanced concepts with the core NCERT syllabus.
                        </p>
                        <h3 className="text-[15px]  text-[#9EBDEF] mb-4">Starting Date: <span className="text-[#2FC18B]">9 April 2025</span></h3>

                        <div className="border-2 border-[#2FC18B] flex gap-2 mx-auto md:mx-0  w-fit px-4 py-2 rounded-2xl cursor-pointer">
                            <a
                                href="#"
                                className="flex items-center justify-center gap-2 text-sm text-white"
                            >
                                Explore Now
                                <ArrowRight className="text-[#2FC18B]" size={19} />
                            </a>
                        </div>


                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2  pt-10 flex justify-center">
                        <img src={boy} alt="program" className="w-full max-w-[600px] object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}
