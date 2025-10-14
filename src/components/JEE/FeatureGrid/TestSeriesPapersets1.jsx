import React from 'react'
import available from "../../../assets/jee-images/avilable.svg";
import ended from "../../../assets/jee-images/Ended.svg";
import question from "../../../assets/jee-images/question.svg";
import time from "../../../assets/jee-images/time.svg";
import calender from "../../../assets/jee-images/calender.svg";

export default function TestSeriesPapersets1() {

    const tests = [
        {
            id: 1,
            name: "Full Test-1 (Main)",
            length:"Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "23 Nov 2025",
            icons: {
                questions: question,
                time:time,
                date: calender,
            },
        },
        {
            id: 2,
            name: "Full Test-2 (Main)",
            length:"Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "26 Nov 2025",
            icons: {
                questions: question,
                time:time,
                date: calender,
            },
        },
        {
            id: 3,
            name: "Full Test-3 (Main)",
            length:"Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "30 Nov 2025",
            icons: {
                questions: question,
                time:time,
                date: calender,
            },
        },
        {
            id: 4,
            name: "Full Test-4 (Main)",
            length:"Full Syllabus Test",
            status: "Available",
            questions: 75,
            time: "180 Minutes",
            date: "07 Dec 2025",
            icons: {
                questions: question,
                time:time,
                date: calender,
            },
        },
        {
            id: 5,
            name: "Full Test (Main)",
            length:"Full Syllabus Test",
            status: "Ended",
           questions: 75,
            time: "180 Minutes",
            date: "07 Dec 2025",
            icons: {
                questions: question,
                time:time,
                date: calender,
            },
        },
        

    ];


    return (
        <div className="w-full overflow-hidden">
            <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">

                <div className="pt-36">
                    <h2 className="text-2xl sm:text-4xl text-center sm:text-left font-extrabold mb-6">Q-AITS (Basic Test Series)</h2>
                    <h3 className="text-xl text-center sm:text-left border-b-1 border-[#2FC18B] cursor-pointer w-fit mx-auto sm:m-0">Full Test</h3>

                    <div className="mt-6 flex flex-col gap-3">
                        {tests.map((test) => (
                            <TestCard key={test.id} test={test} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


 function TestCard({ test }) {
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
                <h3 className="text-[15px] text-[#7B8EAC] font-semibold mt-3">{test.length}</h3>

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

          
            <div className="w-full md:w-[15%]">
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

