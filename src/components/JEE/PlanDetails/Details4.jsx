import React, { useState, useRef } from "react";
import mathematics from "../../../assets/jee-images/mathematics.svg";
import physics from "../../../assets/jee-images/physics.svg";
import chemistry from "../../../assets/jee-images/chemistry.svg";
import calendersvg from "../../../assets/jee-images/calendersvg.svg";
import maxresdefault from "../../../assets/jee-images/TestSeries/maxresdefault.jpg";

export default function Details4() {
    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setPlayVideo(true);
        setTimeout(() => {
            videoRef.current?.play();
        }, 100);
    };

    return (
        <div className="w-full overflow-hidden  text-white">
            <div className="container mx-auto px-6 sm:px-14 lg:px-16 py-8 sm:py-10">

                <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 pt-20 sm:pt-30">

                    <div className="lg:w-[65%]">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
                            What you get in this Test Series
                        </h2>

                        <ul className="text-[#9EBDEF] mb-6 space-y-3 text-sm sm:text-base list-disc px-4">
                            <li>
                                <span className="font-bold"> All-Inclusive JEE Prep:</span>
                                Many tests for JEE Main & Advanced for holistic JEE preparation.
                            </li>
                            <li>
                                <span className="font-bold">JEE Main Unit Tests (10):  </span> Build strong concepts with focused part tests for JEE Main exam.
                            </li>
                            <li>
                                <span className="font-bold">Bonus Advanced Unit Tests (3): </span> Enhance problem-solving with extra JEE Advanced part tests.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Extensive JEE Main FSTs (12):
                                </span> Master the complete JEE Main syllabus with 12 full syllabus tests.
                            </li>
                            <li>
                                <span className="font-bold">JEE Advanced Pattern FSTs (3):</span>Simulate advanced exam with 3 pattern-mimicking full tests.
                            </li>
                            <li>
                                <span className="font-bold">
                                    Chapter-Wise Tests (PCM):
                                </span>Strengthen basics with chapter tests for JEE Main PCM (30 each).
                            </li>
                            <li>
                                <span className="font-bold">Unlimited Self-Practice (1 Lakh+ Qs):</span>Customize practice for JEE Main + Adv. with vast question bank for tailored study.
                            </li>
                            <li>
                                <span className="font-bold"> Past JEE Main Papers (Unlimited): </span>
                                Improve time management with unlimited past paper attempts.
                            </li>
                        </ul>


                        <div className=" mb-6">
                            <div className="text-lg sm:text-xl font-bold mb-2">Subject</div>
                            <div className="flex flex-wrap text-[#9EBDEF] gap-6">
                                <div className="flex gap-1"> <img src={mathematics} className="w-5" />
                                    <p>MATHEMATICS</p>
                                </div>
                                <div className="flex gap-1">
                                    <img src={physics} className="w-5" />
                                    <p>PHYSICS</p> </div>
                                <div className="flex gap-1">
                                    <img src={chemistry} className="w-5" />
                                    <p>CHEMISTRY</p>
                                </div>
                            </div>
                        </div>


                        <div className="mb-8">
                            <p className="text-lg sm:text-xl font-bold mb-2">Starting From</p>
                            <div className="text-[#9EBDEF] flex items-center gap-2 text-sm sm:text-base">
                                <img src={calendersvg} className="w-5" />
                                <p>24 Sep, 2025</p>
                            </div>
                        </div>


                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
                            <a
                                href="test_series_papersets4"
                                className="bg-[#2FC18B] font-semibold px-8 sm:px-10 py-3 rounded-xl hover:bg-[#36e2a3] transition text-center text-sm sm:text-base"
                            >
                                Enroll Now
                            </a>

                            <a
                                href="#"
                                className="border border-[#2FC18B] font-semibold px-8 sm:px-10 py-3 rounded-xl bg-white text-black text-center text-sm sm:text-base"
                            >
                                Get Schedule
                            </a>
                        </div>
                    </div>


                    <div className="lg:w-[35%] bg-[#1b283d] flex flex-col gap-6 p-5 rounded-2xl">

                        <div>
                            <div className="text-xl sm:text-2xl font-extrabold mb-2">Subject</div>
                            <div className="flex flex-col text-[#9EBDEF] gap-5 border-1 p-3 rounded-lg">
                                <div className="flex gap-1">
                                    <img src={mathematics} className="w-5" />
                                    <p>MATHEMATICS</p> </div> <div className="flex gap-1">
                                    <img src={physics} className="w-5" /> <p>PHYSICS</p>
                                </div>
                                <div className="flex gap-1">
                                    <img src={chemistry} className="w-5" />
                                    <p>CHEMISTRY</p>
                                </div>

                            </div>
                        </div>


                        <div className="flex flex-col sm:flex-row items-center gap-3 border border-gray-700 p-3 rounded-lg">
                            <input
                                type="text"
                                placeholder="Apply Coupon Code"
                                className="bg-white w-full p-3 text-black rounded-lg outline-none text-sm sm:text-base"
                            />
                            <a
                                href="#"
                                className="bg-[#2FC18B] font-semibold px-6 py-2 rounded-xl hover:bg-[#36e2a3] transition text-sm sm:text-base w-full sm:w-auto text-center"
                            >
                                Apply
                            </a>
                        </div>


                        <div>
                            <h3 className="text-lg sm:text-xl font-extrabold mb-2">
                                Test Series Fee
                            </h3>
                            <div className="border border-gray-700 p-3 rounded-lg">
                                <ul className="text-[#9EBDEF] space-y-2 text-sm sm:text-base">
                                    <li className="flex items-center gap-2">
                                        Starting From: <img src={calendersvg} className="w-5" /> 24
                                        Sep, 2025
                                    </li>
                                    <li>
                                        Fee :{" "}
                                        <span className="line-through text-[#9EBDEF]">
                                            Rs. 5000.00
                                        </span>{" "}
                                        <span className="text-white font-semibold">Rs. 1799.00</span>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div>
                            <h3 className="text-[22px] sm:text-[26px] font-bold mb-3">
                                <span className="line-through text-[#9EBDEF] text-lg sm:text-xl">
                                    Rs. 5000.00
                                </span>{" "}
                                Rs. 1799.00
                            </h3>
                            <a
                                href="#"
                                className="bg-[#2FC18B] font-semibold w-full block px-10 py-3 rounded-xl hover:bg-[#36e2a3] transition text-center text-sm sm:text-base"
                            >
                                Buy Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="w-full flex flex-col justify-center items-center mt-12">
                    {!playVideo ? (
                        <div className="cursor-pointer" onClick={handlePlay}>
                            <img
                                src={maxresdefault}
                                alt="Video Thumbnail"
                                className="w-full h-auto max-w-[700px] object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ) : (
                        <video
                            className="w-full h-auto max-w-[700px] rounded-lg shadow-lg"
                            ref={videoRef}
                            controls
                        >
                            <source
                                src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/Partnersdetails.mp4"
                                type="video/mp4"
                            />
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
}
