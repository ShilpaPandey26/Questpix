import React from 'react'

export default function ImportantDates() {
    const jeeSchedule = [
        {
            srNo: 1,
            activity: "JEE (Main) 2025 (Computer Based Tests by NTA)",
            dateTime: "JEE (Main) 2025 website"
        },
        {
            srNo: 2,
            activity: "Results of (Main 2025) by NTA",
            dateTime: "JEE (Main) 2025 website"
        },
        {
            srNo: 3,
            activity: "Online Registration for JEE (Advanced) 2025",
            dateTime: "Wednesday, April 23, 2025 (10:00 IST) to Friday, May 02, 2025 (23:59 IST)"
        },
        {
            srNo: 4,
            activity: "Last date for fee payment of registered candidates",
            dateTime: "Monday, May 05, 2025 (23:59 IST)"
        },
        {
            srNo: 5,
            activity: "Admit Card available for downloading",
            dateTime: "Sunday, May 11, 2025 (10:00 IST) to Sunday, May 18, 2025 (14:30 IST)"
        },
        {
            srNo: 6,
            activity: "Choosing of scribe by PwC candidates/candidates with less than 40% disability and having difficulty in writing",
            dateTime: "Saturday, May 17, 2025"
        },
        {
            srNo: 7,
            activity: "JEE (Advanced) 2025 Examination",
            dateTime: "Saturday, May 17, 2025"
        },
        {
            srNo: 8,
            activity: "Copy of candidate responses to be available on the JEE (Advanced) 2025 website",
            dateTime: "Thursday, May 22, 2025 (17:00 IST)"
        },
        {
            srNo: 9,
            activity: "Online display of provisional answer keys",
            dateTime: "Monday, May 25, 2025 (10:00 IST)"
        },
        {
            srNo: 10,
            activity: "Feedback and comments on provisional answer keys",
            dateTime: "Monday, May 26, 2025 (10:00 IST) to Tuesday, May 27, 2025 (17:00 IST)"
        },
        {
            srNo: 11,
            activity: "Online declaration of final answer key and Results of JEE (Advanced) 2025",
            dateTime: "Monday, June 02, 2025 (10:00 IST)"
        },
        {
            srNo: 12,
            activity: "Online registration for Architecture Aptitude Test (AAT) 2025",
            dateTime: "Monday, June 02, 2025 (10:00 IST) to Tuesday, June 03, 2025 (17:00 IST)"
        },
        {
            srNo: 13,
            activity: "Tentative Start of Joint Seat Allocation (JoSAA) 2025 Process",
            dateTime: "Tuesday, June 03, 2025 (17:00 IST)"
        },
        {
            srNo: 14,
            activity: "Architecture Aptitude Test (AAT) 2025",
            dateTime: "Thursday, June 05, 2025 (09:00 IST to 12:00 IST)"
        },
        {
            srNo: 15,
            activity: "Declaration of results of AAT 2025",
            dateTime: "Sunday, June 08, 2025 (17:00 IST)"
        }
    ];

    return (
        <div classNae="">
            <div className="max-w-6xl bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px] mt-16 rounded-lg">
                <h3 className="text-3xl sm:text-[38px] font-extrabold mb-6">Important Dates <span className="text-[#2FC18B]">Calendar</span></h3>

                <div className="min-w-[500px]">
                    {/* Header */}
                    <div className="flex text-lg bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
                        <div className="py-3 px-4 w-[20%]">Sr</div>
                        <div className="py-3 px-4 w-[40%]">Activity</div>
                        <div className="py-3 px-4 w-[40%]">Day, Date and Time (IST)</div>
                    </div>

                    {/* Rows */}
                    {jeeSchedule.map((row, idx) => (
                        <div
                            key={idx}
                            className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                        >
                            <div className="w-[20%] px-4 py-2">{row.srNo}</div>
                            <div className="w-[40%] px-4 py-2 text-[#9EBDEF]">{row.activity}</div>
                            <div className="w-[40%] px-4 py-2 text-[#9EBDEF]">{row.dateTime}</div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Conclusion */}
            <div className="max-w-6xl">
                <h3 className="text-3xl sm:text-[38px] font-extrabold mt-16 mb-6">Conclusion</h3>
                <div className="text-[#9EBDEF] text-base mb-6">
                    <p className="mb-6">JEE Main 2025 is a crucial step for students aspiring to pursue undergraduate engineering and architecture courses in India. The exam holds significant importance in the context of higher education in the country, as it provides a pathway to prestigious institutions and opens doors to various career opportunities. The competition is fierce, and candidates need to be well-prepared to secure a good rank.</p>
                    <p className="mb-6">The changes introduced in the exam pattern for 2025, such as the removal of optional questions and the introduction of negative marking for numerical value questions, emphasize the need for a comprehensive understanding of the concepts and greater accuracy in answering. This shift requires students to adopt a more strategic and focused approach to their preparation.</p>
                    <p className="mb-6">To assist students in their preparation, various resources and support systems are available, including coaching classes, online study materials, and previous years' question papers. Candidates are encouraged to refer to past papers available on the official website to familiarize themselves with the exam format and practice their time management skills.</p>
                    <p className="mb-6">By understanding the eligibility criteria, exam pattern, syllabus, and counselling process, and by utilizing the available resources effectively, candidates can increase their chances of success in JEE Main 2025 and secure admission to their desired institutions. It is essential to stay updated with the latest information and notifications from the official JEE Main website and other reliable sources.                      We are a team of passionate faculties, technologists, and innovators, led by the very best Vijay Sharma Sir at the helm, dedicated to revolutionizing JEE, NEET and Foundation preparation by making it more accessible, personalized, and engaging.
                        Us</p>
                </div>
            </div>
        </div>
    );

}

