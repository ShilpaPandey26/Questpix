import React from "react";
import heart from "../../assets/About/heart.svg"
import inovation from "../../assets/About/inovation.svg"
import accessibility from "../../assets/About/accessibility.svg"
import passion from "../../assets/About/passion.svg"
const features = [
  {
    title: "A Visionary's Insight",
    desc: "Imagine an ambitious educator witnessing firsthand the transformative power of quality JEE coaching. He sees bright minds ignited, dreams taking shape, and futures being created.",
    bgColor: "",
    gradient: "linear-gradient(to top, #1e293b 0%, #0F1825 100%)",
    rounded: "rounded-tl-[60px]",
    position: "top-0 left-10",
  },
  {
    title: "Recognizing the Need for Change",
    desc: "But he also sees limitations - barriers to access, a lack of personalisation, and a gap between traditional methods and the evolving needs of students. Vijay Sharma Sir, with over two decades of experience at the helm of India's top coaching institutions like Bansal Classes, FIITJEE, ALLEN, and Unacademy, knew there had to be a better way.",
    bgColor: "bg-[#ffd118]",
    rounded: "rounded-br-[60px]",
    position: "top-20 right-5",
  },
  {
    title: "A Mission to Revolutionise JEE Prep",
    desc: "Driven by a burning passion for education and a deep-rooted belief in every student's potential, Vijay Sir began on a mission to revolutionize JEE, NEET, and Foundation preparation. He envisioned a platform that would overcome geographical boundaries, take care of individual learning styles, and enable students to take control of their preparation journey.",
    bgColor: " bg-[#2FC18B]",
    rounded: "rounded-tl-[60px]",
    position: "top-[230px] left-0",
  },
  {
    title: "QuestPix is Born",
    desc: "This vision materialized as QuestPix - a revolutionary app that seamlessly blends Vijay Sir's vast experience with cutting-edge technology. He assembled a team of like-minded faculties, technology experts, and creative minds, each driven by the same passion for student success.",
    bgColor: "",
    gradient: "linear-gradient(to top, #1e293b 0%, #0F1825 100%)",
    rounded: "rounded-br-[60px]",
    position: "top-[350px] right-10",
  },
];

const values = [
  {
    icon: heart,
    title: "Student-Centric Approach",
    desc: "We put students at the heart of everything we do. Our platform is designed to take care of individual learning styles and needs, ensuring that every student feels supported and properly mentored.",
  },
  {
    icon: inovation,
    title: "Innovation at the Core",
    desc: "We are committed to continuous improvement and innovation. We constantly work to enhance our platform with the latest technology and teaching methodologies to provide the best possible learning experience.",
  },
  {
    icon: accessibility,
    title: "Accessibility and Affordability",
    desc: "We believe that quality JEE, NEET or Foundation preparation should be accessible to all. We are committed to making our platform affordable and accessible to students from all backgrounds, and that’s why many of our top features are completely free.",
  },
  {
    icon: passion,
    title: "Passion for Education",
    desc: "We are passionate about education and believe in its power to transform lives. We are dedicated to helping students reach their peak and pursue their dreams.",
  },
];
export default function NeetWhoWeare() {
  return (
    <div className="w-full pt-30 overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        {/* 1 */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-8">
            Your Academic Dreams,{" "}
            <span className="text-[#2FC18B]">Our Priority.</span>
          </h2>
          <p className="text-base text-[#9EBDEF] mb-8">
            QuestPix was born from a simple yet powerful belief: every student
            deserves the opportunity to achieve their JEE, NEET or other
            academic dreams.
          </p>
          <p className="text-base text-[#9EBDEF] mb-20">
            We are a team of passionate faculties, technologists, and
            innovators, led by the very best Vijay Sharma Sir at the helm,
            dedicated to revolutionizing JEE, NEET and Foundation preparation by
            making it more accessible, personalized, and engaging.
          </p>
        </div>

        {/* 2 */}
        <div className="relative overflow-hidden">
          <h2 className="text-4xl sm:text-[43px] font-bold text-white text-center pb-5">
            Our<span className="text-[#2FC18B]"> Story</span>
          </h2>

          {/* Desktop view */}
          <div className="relative h-[700px] mx-auto hidden lg:block">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`px-8 border-[#060e1a] h-[250px] absolute w-[48%] ${feature.bgColor} ${feature.rounded} ${feature.position} flex flex-col justify-center text-left`}
                style={{ background: feature.gradient || undefined }}
              >
                <p
                  className={`font-bold text-[24px] pb-3 ${
                    feature.bgColor === "bg-[#1b283d]" || feature.gradient
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {feature.title}
                </p>
                <p
                  className={`text-base w-[95%] ${
                    feature.bgColor === "bg-[#1b283d]" || feature.gradient
                      ? "text-[#9EBDEF]"
                      : "text-black"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile view  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden mb-15">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`px-6 py-6 rounded-2xl ${feature.bgColor} flex flex-col text-left`}
                style={{ background: feature.gradient || undefined }}
              >
                <p
                  className={`font-bold text-xl pb-2 ${
                    feature.bgColor === "bg-[#1b283d]" || feature.gradient
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {feature.title}
                </p>
                <p
                  className={`text-sm ${
                    feature.bgColor === "bg-[#1b283d]" || feature.gradient
                      ? "text-[#9EBDEF]"
                      : "text-black"
                  }`}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 */}
        <div>
          <h2 className="pb-10 text-3xl sm:text-[43px] font-bold text-center text-white">
            Our Values <span className="text-[#2FC18B]">& Mission.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#1e293b] to-[#0F1825] p-6 rounded-xl shadow-md flex flex-col gap-3 items-start"
              >
                {/* Icon as Image */}
                <div className="bg-[#2FC18B] p-3 rounded-full flex items-center justify-center w-20 h-20">
                  <img src={item.icon} alt={item.title} />
                </div>

                {/* Text */}
                <div>
                  <p className="text-white  text-sm mb-2">
                    {item.title}:
                    <span className="text-[#9EBDEF]"> {item.desc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 */}
        <div className="text-center pt-15">
          <h2 className="text-3xl sm:text-[39px] font-bold mb-8">
            Our <span className="text-[#2FC18B]">Team.</span>
          </h2>
          <p className="text-lg text-[#9EBDEF] mb-10">
            QuestPix is powered by a team of dedicated individuals who share a
            passion for education and a commitment to student success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mx-auto">
            <div>
              <img
                src="https://questpix.com/assets/images/about/CEO.png"
                className="max-w-[300px]"
              ></img>
              <p className="text-[20px] font-bold mt-5">Mr.Vijay Sir</p>
              <p className="text-[16px] text-[#2FC18B]">(CEO)</p>
            </div>
            <div>
              <img
                src="https://questpix.com/assets/images/about/CTO.png"
                className="max-w-[300px]"
              ></img>
              <p className="text-[20px] font-bold mt-5">Mr.Sunny Sir</p>
              <p className="text-[16px]  text-[#2FC18B]">(CTO)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
