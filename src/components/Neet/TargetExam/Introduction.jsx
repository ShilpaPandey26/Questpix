import React from 'react'

export default function Introduction() {

    const Events = [
        {
            event: "NEET UG Exam Date 2025",
            date: "04 May 2025 (Sunday)",
        },
        {
            event: "Duration of Examination",
            date: "180 minutes (03 Hours)",
        },
        {
            event: "Timing of Examination",
            date: "02:00 PM to 05:00 PM (IST)",
        },
    ]

    const Subjects = [
        {
            subject: "Physics",
            question: "45",
            typeofquestion: "180"
        },
        {
            subject: "Chemistry",
            question: "45",
            typeofquestion: "180"
        },
        {
            subject: "Biology(Botany & Zoology)",
            question: "90",
            typeofquestion: "360"
        },
        {
            subject: "Total",
            question: "90",
            typeofquestion: "720"
        },
    ]

    const Response = [
        {
            responsetype: "Correct Answer",
            marksawarded: "+4 Marks",
        },
        {
            responsetype: "Incorrect Answer",
            marksawarded: "-1 Marks",
        },
        {
            responsetype: "Unanswered",
            marksawarded: "0 marks",
        },
        {
            responsetype: "Multiple Correct Answers (if found by NTA)",
            marksawarded: "+4 marks to those who selected any correct option",
        },
        {
            responsetype: "Wrong Question/Dropped Question",
            marksawarded: "+4 marks to all candidates, regardless of attempt",
        },
    ]
    return (
        <div className="lg:max-w-6xl pt-30 ">
            {/* Introduction */}
            <div className="mb-12">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-6">NEET UG Exam 2025 Introduction</h2>
                <div className="text-[#9EBDEF]">
                    <p className="mb-4">The NEET UG exam for 2025 is happening on Sunday, May 4, 2025. You'll take the test using paper and a pen, filling in bubbles on a special sheet. It's all happening on the same day, in just one go.</p>
                    <p className="mb-4">If you want to sign up for the exam, you can do it between February 7 and March 7, 2025. If you make a mistake while signing up, there's a short time from March 9 to March 11, 2025, where you can fix it.</p>
                    <p className="mb-4">There are some new things about the NEET exam in 2025. The way the test is set up and how you apply has changed a bit. It's going back to how it was before the coronavirus. You'll have 180 questions that you have to answer, and you'll have 180 minutes to do it. Before, you had some choices about which questions to answer in each part, but that's not happening this year.</p>
                    <p>Also, if two people get the exact same score, there's a new way to decide who gets a better rank. Instead of the old rules, they'll now pick someone randomly with the help of experts. The other rules for breaking ties are still the same.</p>
                </div>
            </div>

            {/*  Exam Date */}
            <div className="text-white rounded-lg mb-16">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-6">NEET 2025 Exam Date and When It Happens</h2>
                <p className="text-[#9EBDEF] mb-6">The NEET exam in 2025 is on May 4, 2025 (Sunday). You need to be at the exam center and ready to go between 2:00 PM and 5:00 PM. Make sure you get there early, before 1:30 PM, because they'll close the doors then.</p>
                <div className="shadow-xl overflow-x-auto">
                    <div className="flex text-base bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
                        <div className="py-3 px-4 w-[50%]">Events</div>
                        <div className="py-3 px-4 w-[50%]">Date</div>

                    </div>

                    {Events.map((row, idx) => (
                        <div
                            key={idx} className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                        >
                            <div className="w-[50%] px-4 py-4">{row.event}</div>
                            <div className="w-[50%] px-4 py-4 text-[#9EBDEF]">{row.date}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Important Dates */}
            <div className="mb-16">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-6">Signing Up and <span className="text-[#2FC18B]">Important Dates</span></h2>
                <p className="text-[#9EBDEF] mb-4">You could start signing up for the exam on February 7, 2025. The last day to sign up is March 7, 2025, and you need to finish by 11:50 PM on that day. If you made any mistakes when you signed up, you can fix them between March 9 and March 11, 2025</p>
                <p className="text-[#9EBDEF] mb-4">Here are the steps to sign up:</p>
                <ul className="list-decimal text-[#9EBDEF] px-6 mb-6">
                    <li className="mb-2"><span className="text-white">First, you need to register. </span> This is like creating an account.</li>
                    <li className="mb-2"><span className="text-white">Then, you fill out the application form </span>with all your information.</li>
                    <li className="mb-2"><span className="text-white">Next, you pay the fee </span>to complete your application.</li>
                    <li className="text-white " >Finally, you send in your application form.</li>
                </ul>

                <h2 className="text-2xl font-extrabold mb-6">New Rules for Signing Up for NEET 2025</h2>
                <ul className="list-disc text-[#9EBDEF] px-6 mb-6">
                    <li className="mb-2"><span className="text-white font-bold">Using your Aadhaar Card:</span>You need to make sure that your name, birthday, if you're a boy or girl, and your address are exactly the same on your application as they are on your Aadhaar card.</li>
                    <li className="mb-2"><span className="text-white font-bold">Getting a Special ID:</span> Your Aadhaar information will be used to create a special 12-digit ID called APAAR ID. This ID will help keep track of your school records.</li>
                </ul>

                <p className="text-[#9EBDEF] "><span className="text-[#2FC18B] font-bold">Important Note: </span>The people in charge of the test (called the National Testing Agency or NTA) said that getting this APAAR ID, which is also called ABC ID, is not a must for signing up for this exam. You can still sign up even if you don't have one.</p>
            </div>

            {/*Admit Card  */}
            <div className="mb-16">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-6">Your NEET <span className="text-[#2FC18B]">Admit Card</span> for 2025</h2>
                <p className="text-[#9EBDEF] mb-2">The NTA said that you can download your NEET admit card by <span className="text-[#2FC18B]">May 1, 2025.</span> This is before the exam on  <span className="text-[#2FC18B]"> May 4, 2025.</span></p>
                <p className="text-[#9EBDEF] mb-2 px-3">Here's how you can download your admit card from the NTA website:</p>
                <ul className="list-decimal text-[#9EBDEF] mb-4 px-6">
                    <li className="mb-2"><span className="text-white">Go to the website:</span> neet.nta.nic.in.</li>
                    <li className="mb-2"><span className="text-white">Find and click on the link that says </span>"NEET (UG) 2025 Admit Card."</li>
                    <li className="text-white">You'll need to type in your application number, your birthday, and a security code.</li>
                </ul>
                <p className="text-[#9EBDEF] mb-2">After you do that, your admit card will show up on the screen. You should download it and print a few copies just in case.</p>
                <p className="text-[#9EBDEF] mb-2"><span className="text-[#2FC18B]">Also Note:</span> They will also send your admit card to the email address you used when you signed up.</p>
            </div>

            {/* NEET Exam  */}
            <div className="mb-12">
                <h2 className="text-2xl sm:text-[38px] font-extrabold mb-6">Changes to the <span className="text-[#2FC18B]">NEET Exam </span>and How It's Marked</h2>
                <p className="text-[#9EBDEF] mb-2">For the NEET exam in 2025, they are going back to how the test was before the coronavirus. This means you have to answer all <span className="text-[#2FC18B]">180 questions.</span></p>
                <p className="text-[#9EBDEF] mb-2">There won't be any extra questions that you can choose to skip. The part of the test that used to have these optional questions (called Section B) is gone. Now, all the questions are required.</p>
                <p className="text-[#9EBDEF] mb-6">If you are a person with a disability (PwBD), you will get one extra hour to take the test.</p>

                <div className="shadow-xl overflow-x-auto" >
                    <div className="flex text-base bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
                        <div className="py-3 px-4 w-1/3">Subjects</div>
                        <div className="py-3 px-4 w-1/3">No. of Qn</div>
                        <div className="py-3 px-4 w-1/3">Types of Qn</div>

                    </div>

                    {Subjects.map((row, idx) => (
                        <div
                            key={idx} className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                        >
                            <div className="w-1/3 px-4 py-4 text-xs sm:text-[15px]">{row.subject}</div>
                            <div className="w-1/3 px-4 py-4 ">{row.question}</div>
                            <div className="w-1/3 px-4 py-4 text-[#9EBDEF]">{row.typeofquestion}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-12">
                <h4 className="text-[#9EBDEF] mb-2">This is how the test is marked now:</h4>
                <div className="shadow-xl overflow-x-auto">
                    <div className="flex text-base bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
                        <div className="py-3 px-4 w-[50%]">Response Type</div>
                        <div className="py-3 px-4 w-[50%]">Marks Awarded</div>

                    </div>

                    {Response.map((row, idx) => (
                        <div
                            key={idx} className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                        >
                            <div className="w-[50%] px-4 py-4">{row.responsetype}</div>
                            <div className="w-[50%] px-4 py-4 text-[#9EBDEF]">{row.marksawarded}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

