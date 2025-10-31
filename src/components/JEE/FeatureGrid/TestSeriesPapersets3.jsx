import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import available from "../../../assets/jee-images/avilable.svg";
import ended from "../../../assets/jee-images/Ended.svg";
import question from "../../../assets/jee-images/question.svg";
import time from "../../../assets/jee-images/time.svg";
import calender from "../../../assets/jee-images/calender.svg";
import star_grey from "../../../assets/jee-images/star-grey.svg";


function TestCard({ test, type }) {
    const [isOpen, setIsOpen] = useState(false);
    if (type == "chapter") {
        return (
            <div className="bg-[#1b283d] p-4 sm:px-8 py-6 rounded-lg max-w-5xl mx-auto">

                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex  flex-col sm:flex-row text-center  sm:text-left justify-between items-center cursor-pointer gap-10"
                >
                    <h3 className="text-lg sm:text-xl font-extrabold text-white bg-[#304a73] rounded-full px-3 py-1 flex items-center justify-center">
                        {test.id}
                    </h3>
                    <h3 className="text-xl sm:text-xl font-extrabold text-white w-full">
                        {test.name}
                    </h3>
                    <span className="p-3  rounded-[50%] text-[#2FC18B] border-2 border-[#2FC18B] hidden sm:block">
                        {isOpen ? <ChevronUp size={20} strokeWidth={4} /> : <ChevronDown size={20} strokeWidth={4} />}
                    </span>
                </div>


                {isOpen && (
                    <div className="flex text-center sm:text-left flex-col md:flex-row justify-between items-center ml-0 md:ml-20" >
                        <div>  <h3 className="text-[15px] text-[#7B8EAC] font-semibold mt-3">{test.name}</h3>
                            <div className="text-[#7B8EAC] pt-3 flex flex-wrap justify-center md:justify-start gap-4">

                                <span className="flex items-center gap-1">
                                    <img
                                        src={test.icons.questions}
                                        alt="questions"
                                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                                    />
                                    {test.questions} Questions
                                </span>
                                <span className="flex items-center gap-1">
                                    <img
                                        src={test.icons.time}
                                        alt="time"
                                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                                    />
                                    {test.time}
                                </span>
                                <span className="flex items-center gap-1">
                                    <img
                                        src={test.icons.date}
                                        alt="date"
                                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                                    />
                                    {test.date}
                                </span>
                            </div>
                        </div>

                        <div className="w-full md:w-[25%] mt-5 text-center ">
                            {test.status === "Available" ? (
                                <button className="cursor-pointer border-1 border-[#2fc18b] bg-[#2fc18b] px-4 py-1 rounded-lg font-bold">
                                    Attempt Now
                                </button>
                            ) : (
                                <button className="cursor-pointer text-white  border-1 border-[#868686] bg-[#868686] px-8 py-1 rounded-lg font-bold">
                                    Ended
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="bg-[#1b283d] p-6 sm:py-8 flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">

            <h3 className="text-[20px] sm:text-[22px] text-center sm:text-left font-extrabold text-[#7B8EAC] md:pr-10">
                {test.id}
            </h3>


            <div className="flex flex-col sm:w-[70%] items-center md:items-start">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <h3 className="text-lg md:text-xl font-semibold">{test.name}</h3>
                    <div>
                        {test.status === "Available" ? (
                            <span>
                                <img src={available} alt="Ended" />
                            </span>
                        ) : (
                            <span>
                                <img src={ended} alt="Ended" />
                            </span>
                        )}
                    </div>

                </div>
                <h3 className="text-[15px] text-[#7B8EAC] font-semibold mt-4 mb-3">{test.length}</h3>

                {/* Questions, Time, Date */}
                <div className="text-[#7B8EAC] pt-3 md:pt-5 text-[15px] sm:text-[16px] flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="flex items-center gap-1">
                        <img
                            src={test.icons.questions}
                            alt="questions"
                            className="w-4 h-4 md:w-5 md:h-5 object-contain"
                        />
                        {test.questions} Questions
                    </span>
                    <span className="flex items-center gap-1">
                        <img
                            src={test.icons.time}
                            alt="time"
                            className="w-4 h-4 md:w-5 md:h-5 object-contain"
                        />
                        {test.time}
                    </span>
                    <span className="flex items-center gap-1">
                        <img
                            src={test.icons.date}
                            alt="date"
                            className="w-4 h-4 md:w-5 md:h-5 object-contain"
                        />
                        {test.date}
                    </span>
                </div>
            </div>


            <div className="w-full md:w-[30%]">
                {test.status === "Available" ? (
                    <button className="cursor-pointer border-1 border-[#2fc18b] bg-[#2fc18b] px-6 py-2 rounded-lg font-bold">
                        Attempt Now
                    </button>
                ) : (
                    <button className="cursor-pointer text-white  border-1 border-[#868686] bg-[#868686] px-12 py-2 rounded-lg font-bold">
                        Ended
                    </button>
                )}
            </div>
        </div>
    );

}


export default function TestSeriesPapersets3() {
    const [activeMainTab, setActiveMainTab] = useState("chapterWise");
    const [activesubject, setActiveSubject] = useState("mathematics");

    const mainTabs = [
        { id: "chapterWise", label: "Chapter Wise" },
        { id: "unitTest", label: "Unit Test" },
        { id: "fullTest", label: "Full Test" },
    ];

    const subjects = [
        { id: "mathematics", label: "MATHEMATICS" },
        { id: "physics", label: "PHYSICS" },
        { id: "chemistry", label: "CHEMISTRY" },
    ];

    const questionIconSet = { questions: question, time, date: calender };



    const chapterWise = {
        mathematics: [
            {
                id: 1,
                name: "Fundamental of Mathematics",
                questions: 25,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
            {
                id: 2,
                name: "Logarithm",
                questions: 25,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },

            {
                id: 3,
                name: "Quadratic Equation",
                questions: 25,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
        ],
        physics: [
            {
                id: 1,
                name: "Unit Dimension and Error",
                questions: 20,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
            {
                id: 2,
                name: "Vector",
                questions: 20,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
            {
                id: 3,
                name: "Kinematics-1D",
                questions: 20,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
        ],
        chemistry: [
            {
                id: 1,
                name: "Mole Concept",
                questions: 25,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
            {
                id: 2,
                name: "Atomic Structure",
                questions: 25,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
            {
                id: 3,
                name: "Periodic Table",
                questions: 25,
                time: "60 Minutes",
                date: "15 Sep 2025",
                status: "Available",
                icons: questionIconSet,
            },
        ],
    };

    const unitTest = [
        {
            id: 1,
            name: "Unit Test–1",
            status: "Available",
            length: (
                <>
                    <p className="text-[#27ae60] mb-2 italic">
                        MATHEMATICS:{" "}
                        <span className="text-white not-italic">
                            FUNDAMENTAL OF MATHEMATICS, LOGRITHAM, QUADRATIC EQUATION
                        </span>
                    </p>
                    <p className="text-[#27ae60] mb-2">
                        PHYSICS:{" "}
                        <span className="text-white not-italic">
                            UNIT DIMENSION AND ERROR, VECTOR, KINEMATICS I (MOTION IN 1-D),
                            KINEMATICS II (PROJECTILE MOTION)
                        </span>
                    </p>
                    <p className="text-[#27ae60]">
                        CHEMISTRY:{" "}
                        <span className="text-white not-italic">MOLE CONCEPT, ATOMIC STRUCTURE</span>
                    </p>
                </>
            ),
            questions: 75,
            time: "180 Minutes",
            date: "24 Sep 2025",
            icons: questionIconSet,
        },
        {
            id: 2,
            name: "Unit Test–2",
            status: "Available",
            length: (
                <>
                    <p className="text-[#27ae60] mb-2 italic">
                        MATHEMATICS:{" "}
                        <span className="text-white not-italic">
                            COMPOUND ANGLE, SEQUENCE & SERIES, DETERMINANT
                        </span>
                    </p>
                    <p className="text-[#27ae60] mb-2 italic">
                        PHYSICS:{" "}
                        <span className="text-white not-italic">
                            Laws of Motion and Friction, Work, Energy and Power, Circular Motion
                        </span>
                    </p>
                    <p className="text-[#27ae60] italic">
                        CHEMISTRY:{" "}
                        <span className="text-white not-italic">
                            Periodic Table, Chemical Bonding–1 & 2
                        </span>
                    </p>
                </>
            ),
            questions: 75,
            time: "180 Minutes",
            date: "27 Sep 2025",
            icons: questionIconSet,
        },
        {
            id: 3,
            name: "Unit Test–3",
            status: "Available",
            length: (
                <>
                    <p className="text-[#27ae60] mb-2 italic">
                        MATHEMATICS:{" "}
                        <span className="text-white not-italic">
                            STATISTICS, BINOMIAL THEOREM, PERMUTATION & COMBINATION
                        </span>
                    </p>
                    <p className="text-[#27ae60] mb-2 italic">
                        PHYSICS:{" "}
                        <span className="text-white not-italic">
                            CENTRE OF MASS, COLLISION, ROTATIONAL MOTION, GRAVITATION
                        </span>
                    </p>
                    <p className="text-[#27ae60] italic">
                        CHEMISTRY:{" "}
                        <span className="text-white not-italic">
                            THERMODYNAMICS, THERMOCHEMISTRY AND SALT ANALYSIS
                        </span>
                    </p>
                </>
            ),
            questions: 75,
            time: "180 Minutes",
            date: "30 Sep 2025",
            icons: questionIconSet,
        },
    ];


    const fullTest = [
        {
            id: 1,
            name: "Full Test-1 (Main)",
            length: "Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "23 Nov 2025",
            icons: questionIconSet,

        },
        {
            id: 2,
            name: "Full Test-2 (Main)",
            length: "Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "26 Nov 2025",
            icons: questionIconSet,
        },
        {
            id: 3,
            name: "Full Test-3 (Main)",
            length: "Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "30 Nov 2025",
            icons: questionIconSet,
        },
        {
            id: 4,
            name: "Full Test-4 (Main)",
            length: "Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "07 Dec 2025",
            icons: questionIconSet,
        },
        {
            id: 5,
            name: "Full Test (Main)",
            length: "Full Syllabus Test",
            status: "Ended",
            questions: 75,
            time: "180 Minutes",
            date: "07 Dec 2025",
            icons: questionIconSet,
        },


    ];

    const currentTests =
        activeMainTab === "chapterWise"
            ? chapterWise[activesubject] || []
            : (activeMainTab === "unitTest" ? unitTest : fullTest)


    return (
        <div className="w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-6">

                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left font-extrabold mb-8 sm:mb-10 pt-30">
                    Q-AITS (Standard Test Series)
                </h2>


                <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 mb-6 sm:mb-10">
                    {
                        mainTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveMainTab(tab.id);
                                    setActiveSubject("mathematics");
                                }}
                                className={`text-base sm:text-lg md:text-xl transition-colors duration-200 ${activeMainTab === tab.id
                                    ? "border-b-2 border-[#2FC18B] text-white"
                                    : "text-[#4A6A99] hover:text-white"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                </div>


                {activeMainTab === "chapterWise" && (
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 mb-8">
                        {subjects.map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => setActiveSubject(sub.id)}
                                className={`flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium  ${activesubject === sub.id
                                    ? "rounded-lg border-t border-l border-r border-[#2FC18B] text-white p-2 sm:px-6 sm:py-2 cursor-pointer"
                                    : "text-[#4A6A99] "
                                    }`}
                            >
                                <img src={star_grey} className="h-4 w-4 sm:h-5 sm:w-5" alt="star" />
                                {sub.label}
                            </button>
                        ))}
                    </div>
                )}


                <div className="space-y-6 mt-6 sm:mt-10">
                    {currentTests.map((test) => (
                        <TestCard
                            key={test.id}
                            test={test}
                            type={
                                activeMainTab === "chapterWise"
                                    ? "chapter"
                                    : activeMainTab === "unitTest"
                                        ? "unit"
                                        : "full"
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}






