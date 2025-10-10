import React from 'react'
import year_wise from "../../../../assets/jee-images/StudyMaterial/year-wise.jpg"
import JanSession2025 from './JanSession2025'
import PreviousYearPapers from './PreviousYearPapers'
export default function Main() {
    return (
        <div className="lg:pt-28">
            <img
                src={year_wise}
                alt="JEE Main Year Wise"
                className="rounded-2xl w-full h-[200px] sm:h-[250px] md:h-[300px] "
            />


            <div className="flex flex-col md:flex-row gap-10 justify-between items-center  mt-16 lg:mt-28 ">
                <div className="lg:w-[60%]">
                    <h2 className="text-2xl sm:text-4xl font-extrabold mb-6">JEE Main Papers <span className="text-[#2FC18B]">PDFs</span> (Year - Wise)</h2>
                    <h3 className="textxl sm:text-2xl font-extrabold mb-4">Download JEE Main Previous Year Question Papers (Year - Wise) with Solutions (PDFs)</h3>
                    <p className="text-[#9EBDEF]">Ace your JEE Main exam with rigorous practice! This page provides a comprehensive collection of JEE Main previous year question papers with solutions, all available for free download in PDF format.</p>
                </div>
                <div className="w-full lg:w-[40%] sticky top-50 bg-[#1B283D] py-6 px-5 md:py-10 md:px-8 rounded-2xl shadow-lg">
                    <h2 className="text-xl sm:text-[22px] font-extrabold mb-4">Past Year Exam PDF Downloads</h2>
                    <ul className="list-disc text-[#9EBDEF] px-4">
                        <li className="mb-3"><a href="">2024 Feb Session PDFs</a></li>
                        <li><a href="">2025 Jan Session PDFs</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 lg:mt-20 max-w-3xl">
                <div className="mb-10">
                    <h2 className="text-2xl font-extrabold mb-4">JEE Main Question Papers with <span className="text-[#2FC18B]">Solutions</span></h2>
                    <p className="text-[#9EBDEF]">Ace your JEE Main exam with rigorous practice! This page provides a comprehensive collection of JEE Main previous year question papers with solutions, all available for free download in PDF format.</p>
                </div>

                <div>
                    <h2 className="text-2xl font-extrabold mb-4">Importance of Solving Previous Year Papers</h2>
                    <ul className="text-[#9EBDEF] list-disc px-4 text-[15px]">
                        <li className="mb-2"><span className="text-white">Understand the Exam Pattern:</span> Familiarize yourself with the structure, marking scheme, and types of questions asked in the JEE Main exam.</li>
                        <li className="mb-2"><span className="text-white">Identify Strengths & Weaknesses:</span>  Pinpoint your strong and weak areas by analyzing your performance on previous year papers.</li>
                        <li className="mb-2"><span className="text-white">Improve Time Management:</span>  Develop effective time management strategy by solving papers under timed conditions.</li>
                        <li className="mb-2"><span className="text-white">Gain Familiarity with Marking Scheme:</span>  Understand how marks are awarded and deducted for different types of questions.</li>
                        <li><span className="text-white">Boost Confidence:</span>  Build confidence and reduce exam anxiety by practicing with real exam papers.</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-3xl">
                <PreviousYearPapers />
                <JanSession2025 />
            </div>


            <div className="mt-20 max-w-3xl ">
                <h2 className="text-2xl sm:text-4xl font-extrabold mb-6">JEE Main Paper <span className="text-[#2FC18B]">Analysis & Difficulty </span>Level</h2>
                <p className="text-[#9EBDEF] mb-6">Over the years, the JEE Main exam has seen some variations in difficulty levels and question patterns. While the core syllabus reMain consistent, analyzing past papers reveals trends in question distribution, emphasis on specific topics, and the overall complexity of the exam. This knowledge can be valuable in strategizing your preparation.</p>
                <p className="text-xl  font-extrabold mb-6">Tips for Effective Preparation Using Previous Year Papers</p>
                <ul className="text-[#9EBDEF] list-disc px-4 text-[15px] mb-6">
                    <li className="mb-2"><span className="text-white">Replicate Exam Conditions:</span>Solve papers in a timed environment to get accustomed to the exam pressure.</li>
                    <li className="mb-2"><span className="text-white">Analyze Your Performance:</span> After completing each paper, thoroughly analyze your answers, identify mistakes, and understand the reasoning behind correct solutions.</li>
                    <li className="mb-2"><span className="text-white">Focus on Weak Areas: </span> Devote extra time and effort to revise topics where you face challenges.</li>
                    <li className="mb-2"><span className="text-white">Understand Concepts: </span> Don't just memorize solutions, try to understand the underlying concepts and principles.</li>
                    <li><span className="text-white">Use with Other Study Materials: </span>Combine practice with previous year papers with your textbooks, study guides, and mock tests for a comprehensive preparation strategy.</li>
                </ul>
                <p className="text-[#9EBDEF]">By utilizing these JEE Main previous year question papers effectively, you can significantly enhance your preparation, improve your performance, and increase your chances of success in the exam. Good luck!</p>
            </div>


        </div>
    )
}
