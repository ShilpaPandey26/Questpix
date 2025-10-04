import React from "react";

export default function MarkingSchema() {
  const paper1 = [
    {
      srNo: "1",
      questions: "4",
      marks: "12",
      markingscheme:
        ["+3 if ONLY the correct option is chosen",
          "Ofunanswered",
          "1 in all other cases",
        ]

    },
    {
      srNo: "2",
      questions: "3",
      marks: "12",
      markingscheme:
        ["+4 if ALL consect options are chosen",
          "+3 if all four options are correct but ONLY three are chosen",
          "+2 if three or more options are correct but ONLY two are chosen, both correct",
          "if two or more options are correct but ONLY one is chosen, and it is comect",
          "O if none of the options is chosen",
          "-2 in all other cases",
        ]

    },
    {
      srNo: "3",
      questions: "6",
      marks: "24",
      markingscheme:
        ["+4 for the correct answer",
          "O for no attempts",
        ]

    },
    {
      srNo: "4",
      questions: "4",
      marks: "12",
      markingscheme:
        ["+3 if ONLY the correct option is chosen",
          "If none of the options are chosen",
          "1 for wrong attempts",
        ]

    },

  ];

  const paper2 = [
    {
      srNo: "1",
      questions: "4",
      marks: "12",
      markingscheme:
        ["+3 if ONLY the correct option is chosen",
          "Ofunanswered",
          "-1 in all other cases",
        ]

    },
    {
      srNo: "2",
      questions: "3",
      marks: "12",
      markingscheme:
        ["+4 if ALL consect options are chosen",
          "+3 if all four options are correct but ONLY three are chosen",
          "+2 if three or more options are correct but ONLY two are chosen, both correct",
          "if two or more options are correct but ONLY one is chosen, and it is comect",
          "O if none of the options is chosen",
          "-2 in all other cases",
        ]

    },
    {
      srNo: "3",
      questions: "6",
      marks: "24",
      markingscheme:
        ["+3 if ONLY the correct option is chosen",
          "if unanswered no negative marks"
        ]

    },
    {
      srNo: "4",
      questions: "4",
      marks: "12",
      markingscheme:
        ["+3 if ONLY the correct option is chosen",
          "If none of the options are chosen",
          "1 for wrong attempts",
        ]

    },

  ];



  return (
    <div>
      <div className="px-4 max-w-6xl">
        <h3 className="text-3xl sm:text-[38px] font-extrabold mb-4">Marking Scheme</h3>
        <p className="text-[15px] text-[#9EBDEF] mb-2">Each component will have a different marking scheme, and the "Instructions to Candidates" section of the test will contain unique information.</p>
        <p className="text-[15px] text-[#9EBDEF] ">The table below provides specifics about the JEE Advanced exam format and scoring system for every Paper 1 section:</p>
        {/* Paper 1 */}
        <Table title="JEE Advanced 2025 Exam Pattem and Marking Scheme For Paper 1" data={paper1} />

        <p className="text-lg text-[#9EBDEF] mt-8">The JEE Advanced exam pattern and marking scheme for each section of Paper 2 are detailed in the table below:</p>
        {/* Paper 2 */}
        <Table title="JEE Advanced 2025 Exam Pattern And Marking Scheme for Paper 2" data={paper2} />

      </div>

      {/* JEE Advanced Counselling Process */}
      <div className="max-w-6xl mt-10">
        <h2 className="text-3xl sm:text-[38px] font-extrabold mb-4">JEE Advanced Counselling Process 2025</h2>
        <p className="text-[15px] text-[#9EBDEF] mb-4">The Joint Seat Allocation Authority (JoSAA) will conduct the JEE Advanced counselling process in June 2025. The counselling process involves several steps:</p>
        <ul className="list-disc mb-4 px-6">
          <li className="mb-2">Registration:<span className="text-[#9EBDEF]"> Candidates who qualify in JEE Advanced and hold a JEE Main rank must register for JoSAA counselling.</span></li>
          <li className="mb-2">Choice Filling:<span className="text-[#9EBDEF]"> Candidates need to fill in their preferred choices of courses and institutes.</span></li>
          <li className="mb-2">Mock Seat Allocation: <span className="text-[#9EBDEF]"> JoSAA will conduct mock seat allocation rounds to help candidates understand the seat allocation process and make informed choices.</span></li>
          <li className="mb-2">Seat Allocation:<span className="text-[#9EBDEF]"> Based on the candidate's JEE Advanced rank, filled choices, and seat availability, JoSAA will allocate seats in multiple rounds.</span></li>
          <li className="mb-2">Document Verification: <span className="text-[#9EBDEF]"> Candidates who are allotted seats need to verify their documents at designated centers.</span></li>
          <li className="mb-2">Reporting at Allotted Institute: <span className="text-[#9EBDEF]">After seat allotment and document verification, candidates must report to the allotted institute for admission. </span> </li>
        </ul>

        <p className="text-[15px] text-[#9EBDEF] mb-4">Candidates can choose from the following options during each round of seat allocation:</p>
        <ul className="list-disc mb-4 px-6">
          <li className="mb-2">Freeze:<span className="text-[#9EBDEF]"> Accept the allotted seat and do not participate in further rounds.</span></li>
          <li className="mb-2">Float:<span className="text-[#9EBDEF]"> Accept the allotted seat but participate in further rounds for a chance to upgrade to a higher preferred choice. </span></li>
          <li className="mb-2">Slide:<span className="text-[#9EBDEF]"> Accept the allotted seat and participate in further rounds for a chance to get a different course at the same institute.</span></li>

        </ul>
      </div>
    </div>
  );
}


function Table({ title, data }) {
  return (
    <div className="max-w-6xl bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px] mt-8 rounded-lg">
      <h3 className="font-bold mb-6 text-lg">{title}:</h3>

      <div>
        {/* Header */}
        <div className="flex text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
          <div className="py-3 px-4 w-[20%]">Sr.no</div>
          <div className="py-3 px-4 w-[20%]"> Number of Questions</div>
          <div className="py-3 px-4 w-[20%]">Total Marks</div>
          <div className="py-3 px-4 w-[40%]">Marking Scheme</div>
        </div>

        {/* Rows */}
        {data.map((row, idx) => (
          <div
            key={idx}
            className="flex odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
          >
            <div className="w-[20%] px-4 py-2">{row.srNo}</div>
            <div className="w-[20%] px-4 py-2">{row.questions}</div>
            <div className="w-[20%] px-4 py-2">{row.marks}</div>
            <div className="w-[40%] p-2 ">
              <ul className="list-disc pl-5 text-[#9EBDEF]">
                {row.markingscheme.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
