import React from "react";
import choose1 from "../../assets/Landing/choose1.png";
import choose2 from "../../assets/Landing/choose2.png";
import choose3 from "../../assets/Landing/choose3.png";
import choose4 from "../../assets/Landing/choose4.png";
const features = [
  {
    img: choose1,
    title: "Learn from Kota's Elite Faculty",
    description:
      "Gain a competitive edge with our highly experienced faculty, renowned for their in-depth knowledge, proven teaching methodologies perfected over years in Kota's top institutions, and dedication to your success.",
  },
  {
    img: choose2,
    title: "Achieve Top Ranks",
    description:
      "Our faculty's consistent track record of producing top 100 rankers speaks for itself. Benefit from their guidance and strategies to achieve your academic aspirations.",
  },
  {
    img: choose3,
    title: "Master Concepts with Unlimited Resources",
    description:
      "Access a vast and meticulously curated question bank of over 1 lakh fresh and diverse questions across all subjects, ensuring you have ample opportunities to learn, practice, and solidify your understanding.",
  },
  {
    img: choose4,
    title: "Experience Personalized Learning",
    description:
      "Benefit from our small batch sizes, having an optimal teacher-to-student ratio. Enjoy interaction, personalized attention, and real-time doubt resolution through our innovative 2-way interaction system.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="mb-0 lg:mb-10 bg-[#0f1825]  text-white ">
      <h2 className="pb-30 sm:pb-40 text-[38px] font-bold text-center">
        Why Students Choose <span className="text-[#2FC18B]">QuestPix?</span>
      </h2>

      {/* Dynamic Section Cards */}
      <div className="flex justify-center flex-wrap w-full gap-6">
        {features.map((feature, index) => (
          <Section
            key={index}
            img={feature.img}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

// Section Component accepts props
function Section({ img, title, description }) {
  return (
    <div
      className="relative text-left p-5 w-full sm:w-[45%] lg:w-[280px] rounded-2xl mb-16 sm:mb-20"
      style={{
        background: "linear-gradient(to bottom, #18233B, #0f1825)",
      }}
    >
      <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2">
        <img
          src={img}
          alt={title}
          className="max-h-[80px] sm:max-h-[100px] max-w-[100px] sm:max-w-[120px] rounded-full bg-[#0f1825]"
        />
      </div>

      {/* Card Content */}
      <h4 className="font-semibold text-[16px] pt-5 sm:pt-8 pb-2">{title}</h4>
      <p className="text-[#9EBDEF] text-sm">{description}</p>
    </div>
  );
}
