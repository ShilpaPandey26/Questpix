import React from 'react'
import JeeMainPattern from "./JeeMainPattern";
import { paper1, paper2, otherDetails } from "./data.jsx"
export default function Introduction() {
    return (
        <div className="pt-24 max-w-6xl ">
            <div className="mb-14">
                <h2 className="text-3xl sm:text-[38px] font-extrabold mb-6">
                    Introduction
                </h2>
                <p className="text-[15px] text-[#9EBDEF]">The Joint Entrance Examination (JEE) Main is a national-level entrance exam in India for admission to undergraduate engineering and architecture courses in various institutions, including the prestigious Indian Institutes of Technology (IITs). This article provides a comprehensive guide to JEE Main 2025, covering essential aspects such as eligibility criteria, exam pattern, syllabus, and counselling process.</p>
            </div>


            <div className="mb-14">
                <h2 className="text-3xl sm:text-[38px] font-extrabold mb-6">What is <span className="text-[#2FC18B]">JEE Main?</span> </h2>
                <p className="text-[15px] text-[#9EBDEF] mb-2">JEE Main is conducted by the National Testing Agency (NTA) and serves as a gateway for admission to undergraduate engineering programs (B.E./B. Tech), architecture programs (B.Arch), and planning programs (B.Plan) at National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs), and other Government Funded Technical Institutes (GFTIs), and some other State Government and Private Institutes. It also acts as a screening test for JEE Advanced, which is required for admission to IITs.</p>
                <p className="text-[15px] text-[#9EBDEF] mb-4">The official website for JEE Main 2025 is jeemain.nta.nic.in. The exam is scheduled to be held in two sessions:</p>
                <ul className="list-disc px-6">
                    <li className="mb-2 ">Session 1: January 22 to 31, 2025</li>
                    <li>Session 2: April 1 to 8, 2025 (tentative)  </li>
                </ul>
            </div>

            <div className="mb-14">
                <h2 className="text-3xl sm:text-[38px] font-extrabold mb-6">Who Will Conduct <span className="text-[#2FC18B]">JEE Main and Advanced 2025?</span></h2>
                <p className="text-[15px] text-[#9EBDEF] mb-4">While JEE Main is conducted by the NTA, JEE Advanced is organized by one of the IITs on a rotational basis. The specific IIT responsible for conducting JEE Advanced 2025 has not yet been officially announced. Students can apply for the NTA's Joint Entrance Exam (Main) 2025 if they have passed or are taking their Class 12 exams. IIT Kanpur is expected to administer JEE Advanced 2025. Candidates may apply for the JEE Advanced exam if they place in the top 2.5 lakh and pass JEE Main 2025.</p>
            </div>

            <div>
                <h2 className="text-3xl sm:text-[38px] font-extrabold mb-4">Eligibility <span className="text-[#2FC18B]">Criteria</span>  2025</h2>
                <p className="text-[15px] text-[#9EBDEF] mb-4">To appear for JEE Main 2025, candidates must fulfill the following eligibility criteria:</p>
                <ul className="list-disc w-[95%] px-6  mb-12">
                    <li className="text-white mb-2">Year of Appearance in Qualifying Examination:<span className=" text-[#9EBDEF]"> Candidates should have passed their Class 12 or equivalent examination in 2023, 2024, or be appearing for it in 2025.</span>  </li>
                    <li className="text-white mb-2">Age Limit: <span className=" text-[#9EBDEF]">There is no age limit to appear for JEE Main 2025. </span></li>
                    <li className="text-white mb-2">Number of Attempts: <span className=" text-[#9EBDEF]">Candidates who have completed their class 12 in 2023 or 2024, or are appearing for the class 12 exams in 2024, are eligible to participate in JEE Main 2025. They can attempt the JEE Main exam a maximum of six times in three consecutive years.</span> </li>
                    <li className="text-white mb-2">Subjects: <span className=" text-[#9EBDEF]">Candidates must have studied Physics and Mathematics as compulsory subjects in their Class 12 or equivalent examination, along with one of the following: Chemistry, Biotechnology, Biology, or a Technical Vocational subject.</span>  </li>
                    <li className="text-white">Minimum Percentage:<span className=" text-[#9EBDEF]">While there is no longer a minimum percentage requirement to appear for B.E./B. Tech courses in JEE Main 2025, candidates aiming for admission to NITs, IIITs, and GFTIs should have secured at least 75% marks in their Class 12 board exams or be in the top 20 percentile of their respective boards (65% for SC/ST candidates).</span> </li>
                </ul>

                <h2 className="text-3xl sm:text-[38px] font-extrabold mb-4">Application <span className="text-[#2FC18B]">Process </span> </h2>
                <p className="text-[15px] text-[#9EBDEF] mb-2">The application form for JEE Main 2025 was available online on the official website (jeemain.nta.nic.in) from October 28 to November 22, 2024, for Session 1. The registration for Session 2 will start on January 31, 2025. The application fee is ₹650 for General category candidates and ₹325 for SC/ST/PwD candidates (per session).</p>
                <p className="text-[15px] text-[#9EBDEF] mb-16">The form correction window for Session 1 was open from November 26 to 27, 2024.  </p>
            </div>

            <div className="mb-6">
                <h2 className="text-3xl sm:text-[38px] font-extrabold mb-4">Exam <span className="text-[#2FC18B]">Pattern </span> 2025</h2>
                <p className="text-[15px] text-[#9EBDEF] mb-5">JEE Main 2025 will follow a revised exam pattern, reverting to the pre-pandemic format.</p>
                <p className="text-lg font-extrabold">Here are the key highlights of revised exam pattern of JEE Main 2025 Paper 1 (B.E./B.Tech.)</p>
            </div>

            <div className="mb-14">
                <JeeMainPattern data={paper1} />
            </div>

            <div className="mb-14">
                <h2 className="text-lg font-extrabold mb-6">Here are the key highlights of revised exam pattern of JEE Main 2025 Paper 2 (B.Arch. & B.Plan.):</h2>
                <JeeMainPattern data={paper2} />
            </div>

            <div className="mb-14">
                <h2 className="text-lg font-extrabold mb-6">Other significant details:</h2>
                <JeeMainPattern data={otherDetails} />
            </div>

            <div className="mb-8">
                <h2 className="text-3xl sm:text-[38px] font-extrabold mb-6">
                    Syllabus <span className="text-[#2FC18B]">2025</span>
                </h2>
                <p className="text-[15px] text-[#9EBDEF]">The JEE Main 2025 syllabus covers topics from Physics, Chemistry, and Mathematics for Paper 1 (B.E./B. Tech). Paper 2A (B.Arch) includes Mathematics, Aptitude, and Drawing, while Paper 2B (B.Plan) includes Mathematics, Aptitude, and Planning-based questions. The detailed syllabus for each subject can be found on the official JEE Main website (jeemain.nta.nic.in) or other educational websites like Vedantu and Allen.  </p>
            </div>

        </div>
    )
}
