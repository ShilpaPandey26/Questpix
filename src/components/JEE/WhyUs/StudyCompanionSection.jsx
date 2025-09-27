import React from "react";
import L1 from "../../../assets/jee-images/L1.png";
import L2 from "../../../assets/jee-images/L2.png";
import R1 from "../../../assets/jee-images/R1.png";
import R2 from "../../../assets/jee-images/R2.png";

const leftCards = [
  {
    icon: L1,
    text:
      "QuestPix isn't just another preparation app. We're revolutionizing the way students learn and succeed with personalized tools, expert guidance, and a commitment to your unique journey.",
  },
  {
    icon:L2,
    text:
      "We understand that every JEE/NEET or Foundation student is different, with unique strengths, weaknesses, and learning styles. That's why we've created a platform that has something for each one of YOU, providing the resources and support you need to achieve your goals.",
  },
];

const rightCards = [
  {
    icon: R1,
    text:
      "At QuestPix, we believe every student deserves the opportunity to achieve their academic dreams. Our mission is to provide accessible, personalized, and engaging learning experiences that empower students to reach their full potential.",
  },
  {
    icon: R2,
    text:
      "We envision a future where JEE/NEET or any other exam preparation is no longer a daunting challenge, but an exciting journey of discovery and growth.",
  },
];

function Card({ icon, children }) {
  return (
    <div className="relative flex flex-col justify-start h-full rounded-3xl bg-[#0E2037] backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-8 text-[#C9D9F8]">
      {/* top badge */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <div className="relative">
          <div className="h-12 w-12 rounded-full  shadow-[0_6px_0_#0a5b3a,0_12px_24px_rgba(0,0,0,0.25)] flex items-center justify-center ring-8 ring-[#0B1320]">
            <img src={icon} alt="icon" className="h-12 w-12" />
          </div>
        </div>
      </div>
      <p className="pt-6">{children}</p>
    </div>
  );
}

export default function StudyCompanionSection() {
  return (
    <div className="container text-white py-20 px-6 ">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold">
          More Than An App, It’s A{" "}
          <span className="text-[#2FC18B]">Study Companion.</span>
        </h2>
      </div>

      {/* 3-column layout */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-stretch">
        {/* Left column */}
        <div className="flex flex-col gap-8 h-full">
          {leftCards.map((c, i) => (
            <Card key={i} icon={c.icon}>
              {c.text}
            </Card>
          ))}
        </div>

        {/* Center circular widget (only on large screens) */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src="https://questpix.com/assets/images/whydiffrent/jeecomp.png"
            alt="Study Companion"
            className="w-[220px] lg:w-[280px]"
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8 h-full">
          {rightCards.map((c, i) => (
            <Card key={i} icon={c.icon}>
              {c.text}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
