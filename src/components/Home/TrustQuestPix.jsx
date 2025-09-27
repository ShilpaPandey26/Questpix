import React from "react";
import six from "../../assets/Home/6.svg"
import five from "../../assets/Home/5.svg"
import four from "../../assets/Home/4.svg"
import three from "../../assets/Home/3.svg"
import two from "../../assets/Home/2.svg"
import one from "../../assets/Home/1.svg"
const programs = [
  {
    title: "Kota's Academic Excellence, On-Campus",
    description:
      "We integrate <span class='text-[#2FC18B]'>Kota's proven methodology and faculty expertise</span>, bringing top-tier competitive exam success directly to your school or institute.",
    gradient: "linear-gradient(to bottom, #202F47, #3a547e00)",
    image: six,
  },
  {
    title: "Your Ultimate Test Creation Tool",
    description:
      "Our  <span class='text-[#2FC18B]'>powerful Test Generator</span> allows precise customization of online/offline tests by exam, subject, chapter, concept, and more including <span class='text-[#2FC18B]'>school branding </span> on print-ready papers.",
    gradient: "linear-gradient(to bottom, #2FC18B, #7be4c100)",
    image: one,
  },
  {
    title: "Instant AI-Powered Doubt Resolution",
    description:
      "Students get <span class='text-[#2FC18B]'> immediate, step-by-step solutions </span> to any problem via the <span class='text-[#2FC18B]'>QuestPix App's AI-Powered Doubt Resolution,</span> ensuring proper learning and constant progress from Class 6 to 12.",
    gradient: "linear-gradient(to bottom, #202F47, #3a547e00)",
    image:five,
  },
  {
    title: "Flexible Learning & Practice Tools",
    description:
      "The <span class='text-[#2FC18B]'> QuestPix App offers custom tests </span>from 1 lakh+ questions,<span class='text-[#2FC18B]'> interactive flashcards, and on-demand pre-recorded lectures </span> for extensive learning anytime, anywhere.",
    gradient: "linear-gradient(to bottom, #2FC18B, #7be4c100)",
    image: three,
  },
  {
    title: "National Performance Benchmarking",
    description:
      "Engage students with our <span class='text-[#2FC18B]'>All-India Test Series</span> for JEE/NEET.<span class='text-[#2FC18B]'> Detailed performance analytics </span> on the QuestPix App pinpoint strengths and areas for improvement.",
    gradient: "linear-gradient(to bottom, #202F47, #3a547e00)",
    image: four,
  },
  {
    title: "Elite Student & Career Nurturing",
    description:
      "Our Top <span class='text-[#2FC18B]'>500 AIR Club </span> provides advanced guidance for securing under 500 ranks. Students also receive <span class='text-[#2FC18B]'>expert career counselling </span> to shape their academic and professional future.",
    gradient: "linear-gradient(to bottom, #2FC18B, #7be4c100)",
    image: two,
  },
];

export default function TrustQuestPix() {
  return (
    <div className="container px-4 py-12  flex flex-col  items-center justify-between gap-10">
      <h2 className="text-3xl md:text-4xl font-extrabold  mt-5">
        Why Trust <span className="text-[#2FC18B]">QuestPix?</span>
      </h2>

      <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-left">
        {programs.map((program, index) => (
          <div
            key={index}
            className="rounded-3xl p-8 shadow-lg flex flex-col gap-y-3"
            style={{ background: program.gradient }}
          >
            <div>
              <img
                src={program.image}
                alt={`${program.title} icon`}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-xl font-bold">{program.title}</h3>

            {/* Handle HTML or plain text description */}
            {program.description.includes("<span") ? (
              <p
                className="text-sm text-gray-300 mb-6"
                dangerouslySetInnerHTML={{ __html: program.description }}
              />
            ) : (
              <p className="text-sm text-gray-300 mb-6">
                {program.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
