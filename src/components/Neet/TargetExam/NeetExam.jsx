import React from 'react'

export default function NeetExam() {
  const Events = [
    {
      event: "NEET 2025 Exam Date",
      date: "04 May 2025"
    },
    {
      event: "Provisional Answer Key Release",
      date: "2nd Week of May 2025"
    },
    {
      event: "Answer Key Challenge Window",
      date: "2-3 Days After Release"
    },
    {
      event: "Final Answer Key",
      date: "June 2025"
    },
    {
      event: "NEET 2025 Result",
      date: "By June 14, 2025"
    },
  ]

  const cutoff = [
    {
      category: "General",
      percentile: "50th Percentile",
      expectedcutoff: "715-117"
    },
    {
      category: "OBC",
       percentile: "40th Percentile",
      expectedcutoff: "116-93"
    },
    {
      category: "SC",
       percentile: "40th Percentile",
      expectedcutoff: "116-93"
    },
    {
      category: "ST",
       percentile: "40th Percentile",
      expectedcutoff: "116-93"
    },
    {
      category: "General-PwD",
      percentile: "45th Percentile",
      expectedcutoff: "116-105"
    },
    {
      category: "SC/ST/OBC-PwD",
       percentile: "40th Percentile",
      expectedcutoff: "104-93"
    },
  ]
  return (
    <div className="lg:max-w-6xl">

      {/* Who Can Take the NEET Exam  */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-[38px] font-extrabold mb-6">Who Can Take the <span className="text-[#2FC18B]"> NEET Exam </span> in 2025?</h2>
        <p className="text-[#9EBDEF] mb-4">These are the eligibility criteria for appearing in the NEET exam:</p>
        <ul className="text-[#9EBDEF] list-disc px-6">
          <li className="mb-2"><span className="text-white">Age:</span> You need to be at least 17 years old by the end of the year, specifically by December 31, 2025.</li>
          <li className="mb-2">
            <span className="text-white">Schooling:</span>  You should have finished or be in your last year of high school (that's like the 12th grade). You need to have studied Physics, Chemistry, Biology (or Biotechnology), and English.
            <ul className="text-white list-disc px-4 mt-4">
              <p className="mb-2 text-[#9EBDEF]"><span className="text-white">Minimum Marks: </span> You need to get a certain percentage of marks in Physics, Chemistry, and Biology (or Biotechnology) combined:</p>
              <li className="mb-2">If you are in the General category or Economically Weaker Section (EWS), you need at least 50%.</li>
              <li className="mb-2">If you belong to Scheduled Castes (SC), Scheduled Tribes (ST), or Other Backward Classes (OBC - Non-Creamy Layer), you need at least 40%.</li>
              <li className="mb-2">If you are a Person with Benchmark Disabilities (PwBD) and belong to the General category or EWS, you need at least 45%.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/*Where Can You Take the NEET Exam  */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-[38px] font-extrabold mb-6">Where Can You Take the NEET Exam in 2025?</h2>
        <p className="text-[#9EBDEF] mb-4">The people in charge of the NEET exam (NTA) will hold it in many different cities all over India and in some other countries too. When you are filling out the application online, you need to pick the cities where you would prefer to take the exam. So, think carefully before you choose!</p>
        <h2 className="text-2xl  font-extrabold mb-4">How to Pick Your NEET 2025 Exam Center?</h2>
        <p className="text-[#9EBDEF] mb-2">When you're signing up, you'll get to choose three cities where you'd like to take the exam. You can choose based on:</p>
        <ul className=" list-disc px-6">
          <li className="mb-2">The state where your permanent home address is, OR</li>
          <li className="mb-2">The state where you are living right now (the address you put on your application).</li>
        </ul>
        <p className="text-[#9EBDEF] mb-2">It's a good idea to pick a city that's close to where you live so you don't have to travel too far.</p>
        <p className="text-[#9EBDEF] mb-4"><span className="text-[#2FC18B]">Important Note:</span>If not enough people choose a certain city, the NTA might close down the exam centers in that city and move those students to another city.</p>

      </div>

      {/* NEET Answer Key */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">NEET 2025 Answer Key</h2>
        <div className="mb-6 text-[#9EBDEF]">
          <p className="mb-2">A few days after you take the NEET exam in 2025, the official answer key will be put on the NTA website. Think of the answer key as the sheet that shows the correct answer for every question.</p>
          <p className="mb-2">You can download this answer key and use it to check if the answers you marked on your test were correct. If you think any of the answers in the key are wrong, you can even tell the NTA about it.</p>
          <p className="mb-4 ">Along with the answer key, they will also show you a copy of your OMR sheet. This is the paper where you filled in the bubbles for your answers. They will also show you a record of the answers you chose on the computer. This way, you can double-check everything.</p>
          <p>This is the expected answer key release timeline:</p>
        </div>

        <div className="shadow-xl overflow-x-auto">
          <div className="text-[15px] flex text-base bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
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
      </div>

      {/* NEET 2025 Result */}
      <div className="mb-14">
        <h2 className="mt-10 text-2xl sm:text-[38px] font-extrabold mb-4">NEET 2025 Result</h2>
        <div className="mb-6  text-[#9EBDEF]">
          <p className="mb-2">The people who conduct the NEET exam (NTA) think they will announce the results around June 14, 2025.</p>
          <p className="mb-2">You'll be able to see your result on the official NTA website. To check it, you'll need to put in your application number and your birthday</p>
          <p>Along with your individual result, the NTA will also share some general information, like how many students signed up for the exam, how many actually took it, and how many passed.</p>
        </div>
      </div>

      {/*What Happens  */}
      <div className="mb-14">
        <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">What Happens if People Get the Same Score in NEET 2025?</h2>
        <p className="mb-4 text-[#9EBDEF]">Sometimes, more than one student gets the exact same score on the NEET exam. When this happens, they have rules to decide who gets a better rank. Here's the order they will look at:</p>
        <ul className="list-disc px-6">
          <li className="mb-2">First, they will see who got higher marks in B</li>
          <li className="mb-2">If the scores are still the same, they will then look at who got higher marks in Chemistry.</li>
          <li className="mb-2">If there's still a tie, they will look at who got higher marks in Physics.</li>
        </ul>
        <p className="mb-2 text-[#9EBDEF]">There's a big change this year! They will no longer use age or your application number to break ties.</p>
        <p className="mb-2 text-[#9EBDEF]">Before, if two people had the same score, the older person or the person who signed up earlier would get a better rank. But that's not happening anymore.</p>
        <p className="mb-2 text-[#9EBDEF]">This year, if they still can't decide after looking at the marks in Biology, Chemistry, and Physics, the NTA will pick someone randomly. They will have a group of experts help them with this random selection to make sure it's fair for everyone.</p>
      </div>


      {/* NEET 2025 Cutoff */}
      <div className="mb-14">
        <h2 className="text-2xl sm:text-[38px] font-extrabold mb-4">NEET 2025 Cutoff</h2>
        <p className="mb-2 text-[#9EBDEF]">The NEET 2025 cutoff is like the lowest score you need to get if you want to study to become a doctor (MBBS), dentist (BDS), or take other similar courses like AYUSH in India. It's like a minimum passing score to get into these types of colleges.</p>
        <p className="mb-2 text-[#9EBDEF]">The cutoff score can be different each year. It depends on a few things, like:</p>
        <ul className="list-disc px-6">
          <li className="mb-2">How hard the exam was that year.</li>
          <li className="mb-2">How many students took the exam.</li>
          <li className="mb-2">How many seats are available in the different medical colleges (both government and private).</li>
        </ul>
        <p className="mb-6 text-[#9EBDEF]">This can be the expected cutoff calculated by QuestPix based on previous trends, which may change:</p>
        <div className="shadow-xl overflow-x-auto">
          <div className="text-[15px] flex text-base bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
            <div className="py-3 px-4 w-1/3">Category</div>
            <div className="py-3 px-4 w-1/3">Minimum Percentile</div>
             <div className="py-3 px-4 w-1/3">Expected Cutoff Marks</div>

          </div>

          {cutoff.map((row, idx) => (
            <div
              key={idx} className="text-[15px] flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
            >
              <div className="w-1/3 px-4 py-4">{row.category}</div>
              <div className="w-1/3 px-4 py-4 ">{row.percentile}</div>
              <div className="w-1/3 px-4 py-4 text-[#9EBDEF]">{row.expectedcutoff}</div>
            </div>
          ))}
        </div>
      </div>

   </div>
  )
}
