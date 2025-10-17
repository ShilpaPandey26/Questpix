import React from "react";
import { FaStar } from "react-icons/fa";
import jee_main_thumbnail from "../../../../assets/jee-images/jee_main_thumbnail.png";
import { X } from "lucide-react";

export default function JeeMainTestSeries() {
    const points = [
        "Tests that don't replicate the actual JEE Main exam, leaving you unprepared for the real thing.",
        "Inaccurate rank predictions that hinder effective progress tracking and targeted improvement.",
        "Wasting time on recycled questions that don't reflect current JEE trends, diminishing study efficiency.",
        "Performance analysis that lacks clear insights on speed, accuracy, and time management.",
        "Tests with unnecessarily complex questions and language unlike the actual JEE Main exam.",
        "Questions picked from International Olympiads which surpass the difficulty level of the real exam.",
        "Tests with a single boring pattern, failing to expose you to the variety of questions you'll face on exam day.",
        "Tests with a small test-taker pool, providing an inaccurate representation of your All India Rank.",
    ];


    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-between pt-30">
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mt-10 ">
                    <h1 className="text-2xl sm:text-4xl  font-bold">
                        Crack JEE Main with the{" "}
                        <span className="text-[#2FC18B]">Most Realistic</span> Test Series Ever.
                    </h1>

                    <p className="text-[#9EBDEF] text-base ">
                        Unmatched Accuracy, Realistic Difficulty, and a Perfect Match to JEE
                        Main Standards.
                    </p>

                    {/* Details */}
                    <div className="grid  grid-cols-3 gap-4  mt-8">
                        <div>
                            <h3 className="text-[#9EBDEF] font-medium text-base">Start Date:</h3>
                            <p className="text-[#2FC18B] font-semibold text-base">
                                September 24, 2025
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#9EBDEF] font-medium text-base">Subjects</h3>
                            <p className="text-[#2FC18B] font-semibold text-base ">PCM</p>
                        </div>
                        <div>
                            <h3 className="text-[#9EBDEF] font-medium text-base">Price</h3>
                            <p className="text-[#2FC18B] font-semibold text-base ">₹899/- Onwards</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row justify-center md:justify-start gap-4 mt-8 ">
                        <a
                            href="#"
                            className="bg-[#2FC18B] font-semibold px-8 py-3 rounded-xl hover:bg-[#00c376] transition text-center"
                        >
                            Buy Now
                        </a>

                        <a
                            href="#"
                            className="border border-[#2FC18B]  font-semibold px-8 py-3 rounded-xl hover:bg-[#00E78F] "
                        >
                            Get Schedule
                        </a>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center md:justify-start gap-2 pt-3 pb-6">
                        <span className="text-[#9EBDEF] font-medium text-xl sm:text-lg">Rated:</span>
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={jee_main_thumbnail}
                        alt="JEE Main Test Series"
                        className="rounded-lg shadow-lg "
                    />
                </div>
            </div>

            <div>
                <WhoIsThisFor points={points} />
                <p className="text-[#9EBDEF] text-base text-center pt-6">If you want to get the exact JEE Main experience you need to succeed, then this is for you.</p>
            </div>

        </div>
    );
}



function WhoIsThisFor({ points }) {
    return (
        <div className=" text-white pt-20">
            <div className="max-w-6xl   mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                    Who Is <span className="text-[#2FC18B]">This For?</span>
                </h2>
                <p className=" mb-10">
                    This is for you if you're a <span className="text-[#2FC18B]">JEE Main aspirant</span> tired of:
                </p>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {points.map((text, index) => (
                        <div
                            key={index}
                            className="bg-[#253750] rounded-xl p-5 flex items-start gap-4 shadow-md text-sm sm:text-base"
                        >
                            <X className="text-[#ff3939] mt-1 flex-shrink-0 " size={28} />
                            <p className=" text-left ">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}