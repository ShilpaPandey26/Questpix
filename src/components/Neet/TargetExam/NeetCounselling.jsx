import React from 'react'

export default function NeetCounselling() {
    const Events = [
        {
            event: "NEET 2025 Result Declaration",
            date: "14 June 2025"
        },
        {
            event: "Registration for AIQ Counselling",
            date: "July 2025"
        },
        {
            event: "Choise Filling & Locking",
            date: "July 2025"
        },
        {
            event: "Seat Allotment Result",
            date: "Augest 2025"
        },
        {
            event: "Reporting to the Alloted College",
            date: "Augest 2025"
        },
    ]

    const neetUG2025 = [
        { particular: "Exam Name", detail: "National Eligibility Cum Entrance Test (NEET)" },
        { particular: "Conducting Body", detail: "National Testing Agency (NTA)" },
        { particular: "Exam Level", detail: "Undergraduate (UG) Exam at the National Level" },
        { particular: "Exam Frequency", detail: "Once a Year" },
        { particular: "NEET UG 2025 Exam Mode", detail: "Offline (Paper-Pencil Based Test-PBT)" },
        { particular: "Courses Offered Through NEET UG", detail: "MBBS, BDS, BSc Nursing, BAMS, BVSc & AH" },
        { particular: "Exam Fees", detail: "INR 1700 (General), INR 1600 (OBC), INR 1000 (Reserved category candidates), INR 8500 (Foreign nationals)" },
        { particular: "Exam Duration and Timing", detail: "3 hours (180 minutes); 2:00 PM to 5:00 PM (IST)" },
        { particular: "Number of Subjects and Total Marks", detail: "Physics (180 marks), Chemistry (180 marks), Biology (360 marks) - Total Marks: 720" },
        { particular: "Total Questions", detail: "180 Compulsory Objective MCQ Questions (each in Physics and Chemistry, 90 Questions in Biology)" },
        { particular: "Marking Scheme", detail: "+4 for each correct answer, -1 for each incorrect answer and 0 for unattempted Questions" },
        { particular: "Number of Exam Cities", detail: "557 cities in India, 14 cities abroad" },
        { particular: "Language/Medium of Paper", detail: "13 languages: English, Hindi, Bengali, Urdu, Assamese, Gujarati, Marathi, Odia, Kannada, Tamil, Malayalam, Punjabi, Telugu" },
        { particular: "Accepting Colleges", detail: "1,043 colleges" },
        { particular: "Total Number of Seats", detail: "MBBS - 1,09,170, BDS - 27,868, BAMS - 52,720, BVSC & AH - 603" },
        { particular: "NEET Helpline Numbers", detail: "011-40759000" },
        { particular: "Email", detail: "neetug-nta@nic.in" },
        { particular: "Official Website", detail: "www.neet.nta.nic.in" }
    ];


    return (
        <div className="lg:max-w-6xl">

            {/*NEET 2025 Counselling  */}
            <div className="mb-16">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">NEET 2025 Counselling</h2>
                <p className="mb-2 text-[#9EBDEF]"><span className="text-[#2FC18B]">Counselling in 2025</span> is like the main way students who want to become doctors or study related things get into colleges all over India. It's for courses like MBBS (regular doctor), BDS (dentist), BAMS (Ayurveda doctor), BSMS (Siddha doctor), BUMS (Unani doctor), and BHMS (Homeopathy doctor).</p>
                <p className="mb-2 text-[#9EBDEF]">This process is done by two main groups:</p>
                <ul className="list-disc px-6">
                    <li className="mb-2">The Medical Counselling Committee (MCC) handles the seats that are available across the entire country (called All India Quota seats).</li>
                    <li className="mb-2">The different state governments handle the seats that are specifically for colleges in their own state (called State Quota seats).</li>
                </ul>
                <p className="mb-2 text-[#9EBDEF]">The counselling makes sure that everyone gets a fair chance to get a seat in a college based on how well they did in the NEET exam and also following the rules about which groups of people get special consideration (like reservations). It's like a big matching process to connect students with the right college.</p>
                <p className="mb-6 text-[#9EBDEF]">These are the NEET counselling key dates:</p>


                <div className="shadow-xl overflow-x-auto">
                    <div className="flex text-base bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
                        <div className="py-3 px-4 w-[50%]">Events</div>
                        <div className="py-3 px-4 w-[50%]">Date(Tentative)</div>

                    </div>

                    {Events.map((row, idx) => (
                        <div
                            key={idx} className="text-[15px] flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                        >
                            <div className="w-[50%] px-4 py-4">{row.event}</div>
                            <div className="w-[50%] px-4 py-4">{row.date}</div>
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-[#9EBDEF]">The final dates will be announced on the MCC & AACCC websites.</p>
            </div>

            {/* Complete Summary */}
            <div className="mb-16">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">NEET 2025 Complete Summary</h2>
                <div className="shadow-xl overflow-x-auto">
                    <div className="font-bold flex text-base bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
                        <div className="py-3 px-4 w-[45%]">Particulars</div>
                        <div className="py-3 px-4 w-[55%]">Details</div>
                    </div>

                    {neetUG2025.map((row, idx) => (
                        <div
                            key={idx} className="text-xs sm:text-[15px] flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                        >
                            <div className="w-[45%] px-4 py-3">{row.particular}</div>
                            <div className="w-[55%] px-4 py-3">{row.detail}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* NEET Exam Important */}
            <div className="mb-16">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">Why is the NEET Exam Important?</h2>
                <p className="mb-2 text-[#9EBDEF]">If you want to become a doctor, a dentist, or study other kinds of medicine in India, you usually need to take and pass the NEET exam. The score you get in this exam helps colleges decide who they will admit into their courses. So, it's a really important step if you have dreams of working in healthcare!</p>
                <h3 className="text-xl font-extrabold mb-4">Things to Remember on Exam Day</h3>
                <ul className="list-disc px-6 mb-6">
                    <li className="mb-2"><span className="text-[#9EBDEF]">Get There Early:</span> Make sure you reach your exam center well before the time they tell you to. This way, you won't be rushed or stressed</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Bring Your Admit Card and ID:</span> Don't forget to take your admit card and some form of identification (like your school ID or Aadhaar card) with you.</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Read the Instructions Carefully:</span> Before you start answering, take a few minutes to read all the instructions on your question paper.</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Manage Your Time:</span> You have a set amount of time to answer all the questions, so try to pace yourself and don't spend too long on any one question.</li>
                    <li><span className="text-[#9EBDEF]">Stay Calm:</span> It's normal to feel a bit nervous, but try to stay calm and focused during the exam. Take deep breaths if you need to.</li>
                </ul>

                <h3 className="text-xl font-extrabold mb-4">Where Can You Find More Information?</h3>
                <p className="text-[#9EBDEF]">The best place to get all the official information about the NEET 2025 exam is the QuestPix website and the official website of the National Testing Agency (NTA). You can usually find things like the syllabus (what you need to study), sample question papers, and all the important dates there.</p>
            </div>

            {/* Tips for Getting Ready for the NEET Exam */}
            <div className="mb-16">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">Tips for Getting Ready for the NEET Exam</h2>
                <p className="mb-4 text-[#9EBDEF]">Studying for a big exam like NEET can feel like a lot, but here are some simple tips that can help:</p>
                <ul className="list-disc px-6 mb-6">
                    <li className="mb-2"><span className="text-[#9EBDEF]">Make a Study Plan:</span> Think about all the subjects you need to study (Physics, Chemistry, Biology) and make a schedule for when you'll study each one. Try to stick to it as much as you can</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Understand the Basics:</span>  Don't just try to memorize things. Make sure you really understand the main ideas in each subject.</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Practice Regularly:</span>  Doing practice questions and old exam papers is super helpful. It shows you what kind of questions to expect and helps you get faster.</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Take Breaks:</span>  Studying all the time can actually make you tired. Make sure to take short breaks in between study sessions to relax your brain.</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Stay Healthy:</span>  Get enough sleep, eat good food, and try to get some exercise. Taking care of your body helps your brain work better too!</li>
                    <li className="mb-2"><span className="text-[#9EBDEF]">Don't Be Afraid to Ask for Help:</span>  If you're stuck on something, ask your teachers, parents, or friends who might know the answer.</li>
                </ul>

            </div>

            {/* Conclusion */}
            <div>
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">Conclusion</h2>
                <p className="mb-4 text-[#9EBDEF]">In conclusion, the NEET UG 2025 exam is a significant step for all of you who dream of pursuing a career in the medical field. From understanding the important dates for registration and the exam itself, to knowing the changes in the test pattern and how your scores will be evaluated, being well-informed is a crucial part of your preparation journey. Remember to pay close attention to the eligibility criteria to ensure you can appear for the exam, and plan your travel to your chosen exam center in advance.</p>
                <p className="text-[#9EBDEF]">The availability of the official answer key will allow you to gauge your performance, and the clear tie-breaking rules ensure fairness in the ranking process. Finally, the counselling process is your gateway to securing a seat in your desired medical course. By staying updated with all these details and putting in consistent effort in your studies, you'll be well on your way to achieving your goals. So, stay focused, work hard, and believe in yourself. Your dedication and preparation will pave the path to your future in medicine.</p>
            </div>


        </div>
    )
}
