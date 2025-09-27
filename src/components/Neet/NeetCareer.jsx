import React from "react";
import meaing from "../../assets/Career/meaing.png";
import part from "../../assets/Career/part.png";
import grow from "../../assets/Career/grow.png";
import gear from "../../assets/Career/gear.png";
import mission from "../../assets/Career/mission.png";

export default function NeetCareer() {
  const features = [
    {
      icon: meaing,
      title: "Make a meaningful impact",
      desc: "Help students achieve their dreams and reach their full potential.",
      border: "border-[#2fc18b]",
    },
    {
      icon: part,
      title: "Be part of a dynamic team",
      desc: "Collaborate with talented and passionate individuals who are committed to revolutionizing education.",
      border: "border-[#2fc18b]",
    },
    {
      icon: grow,
      title: "Grow and develop",
      desc: "Enjoy opportunities for professional growth and development in a fast-paced and innovative environment.",
      border: "border-[#facc15]",
    },
    {
      icon: gear,
      title: "Work with cutting-edge technology",
      desc: "Contribute to the development of a leading-edge ed-tech platform.",
      border: "border-[#a855f7]",
    },
    {
      icon: mission,
      title: "Be part of a mission-driven company.",
      desc: "Join a company that is dedicated to making quality education accessible to all.",
      border: "border-[#38bdf8]",
    },
  ];
  return (
    <div className="w-full pt-20 sm:pt-30 overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-10 sm:py-12">
        {/* 1 */}

        <div className="max-w-5xl mx-auto text-center mb-16 sm:mb-20">
          {/* Decorative Circles */}
          <div className="max-w-xl mx-auto flex justify-between px-6  mb-6 ">
            <div className="w-4 h-4 rounded-full border-2 border-[#2fc18b]" />
            <div className="w-4 h-4 rounded-full border-2 border-yellow-400" />
          </div>

          {/* Heading */}
          <h2 className=" max-w-2xl mx-auto text-3xl sm:text-4xl lg:text-[58px] font-bold">
            Join the <span className="text-[#2FC18B]">QuestPix</span>{" "}
            Revolution!
          </h2>
          <div className="w-16 sm:w-20 h-[4px] sm:h-[5px] bg-yellow-400 mx-auto my-6"></div>
          <p className="text-[#AFC8FF] text-sm sm:text-base  max-w-3xl mx-auto">
            Are you passionate about education and technology? Do you want to
            make a real difference in the lives of students? If so, we'd love to
            have you on our team!
          </p>

          {/* Subheading */}
          <h3 className="mt-12 sm:mt-16 lg:mt-20 pb-4 text-2xl md:3xl lg:text-[38px] font-bold">
            Why Work at <span className="text-[#2fc18b]">QuestPix?</span>
          </h3>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-3 items-center text-center sm:text-left border border-gray-800 lg:border-0"
              >
                <div
                  className={`w-16 h-16  rounded-full flex items-center justify-center border-2 ${item.border} mb-3`}
                >
                  <img src={item.icon} alt={item.title} className="w-16 h-16" />
                </div>
                <p className="text-base">
                  <span className="font-semibold">{item.title}:</span>{" "}
                  <span className="text-[#AFC8FF]">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2 */}

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] text-center font-bold pb-8">
            Current <span className="text-[#2fc18b]">Openings.</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-gray-700 sm:border-0 rounded-xl p-3 sm:p-6">
            {/* Job Info */}
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                Digital <span className="text-[#2fc18b]">Marketing</span> Expert
                <img
                  src="https://questpix.com/assets/images/career/speaker.png"
                  className="h-8 sm:h-10"
                  alt="Speaker Icon"
                />
              </h3>
              <p className="text-white text-sm sm:text-base mt-2">
                We are looking for digital marketing expert who will take care
                of our social medias
              </p>
            </div>

            {/* Apply Button */}
            <div className="text-center sm:text-right">
              <button className="px-5 py-2 border border-[#2fc18b] text-[#2fc18b] rounded-full hover:bg-[#2fc18b] hover:text-black transition">
                Apply Now
              </button>
            </div>
          </div>

          {/* Suitable Openings Section */}
          <div className="mt-24">
            <div className="max-w-2xl mx-auto flex justify-between px-6  mb-6 ">
              <div className="w-4 h-4 rounded-full border-2 border-[#2fc18b]" />
              <div className="w-4 h-4 rounded-full border-2 border-yellow-400" />
            </div>

            <h3 className="text-3xl md:text-[58px] font-bold text-center mx-auto w-[70%]">
              Don&apos;t see a{" "}
              <span className="text-[#2fc18b]">suitable opening?</span>
            </h3>
            <div className="w-25 h-[5px] bg-yellow-400 mx-auto my-6"></div>
            <p className="text-[#AFC8FF]  text-center text-[16px] ">
              We're always looking for talented individuals to join our team.
              Send your resume and a cover letter to our email address, telling
              us why you'd be a great fit for QuestPix.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
