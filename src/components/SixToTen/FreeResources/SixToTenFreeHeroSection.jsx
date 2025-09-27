import React from "react";
import gpbtn from "../../../assets/gpbtn.png";
import appstore from "../../../assets/appstore.png";
import clock from "../../../assets/jee-images/clock.png";
import JOIN from "../../../assets/jee-images/JOIN.png";
import closer from "../../../assets/jee-images/closer.png";

export default function SixToTenFreeHeroSection() {
  return (
    <div className="container lg:max-h-[48rem] pt-16 sm:pt-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-snug">
          Your <span className="text-[#2FC18B]">Dream College Is Closer </span>
          <br className="hidden sm:block" /> More Than Ever.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg">
          Interactive flashcards, personalized practice tests, PYQs, rank
          prediction, and daily quizzes all in one powerful app — that too for
          FREE!
        </p>
      </div>

      {/* App Store Buttons */}
      <div className="flex justify-center gap-3 sm:gap-4 mt-6">
        <a
          href="https://play.google.com/store/apps/details?id=com.questpix.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gpbtn} alt="Google Play" className="w-32 sm:w-40" />
        </a>
        <a
          href="https://apps.apple.com/in/app/questpix/id6742243591"
          target="_blank"
          rel="noreferrer"
        >
          <img src={appstore} alt="App Store" className="w-32 sm:w-40" />
        </a>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 mt-10 max-w-5xl mx-auto px-4">
        {/* Left Features */}
        <div className="flex flex-col items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <p className="flex items-center gap-2 text-xl sm:text-2xl font-bold">
              <img src={clock} className="h-8 sm:h-10" alt="Clock" />
              1000 Hours+
            </p>
            <p className="text-[#9EBDEF] text-xs sm:text-sm font-bold">
              of Video Content
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Multiple Top 100</h3>
            <p className="text-[#9EBDEF] text-xs sm:text-sm font-bold">
              Ranker Produced
            </p>
          </div>

          <div className="mt-6">
            <img
              src={JOIN}
              alt="Join"
              className="h-20 sm:h-28 object-contain"
            />
          </div>
        </div>

        {/* Center Image  */}
        <div className="flex justify-center">
          <img
            src={closer}
            alt="App Preview"
            className="max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] object-contain"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col items-center md:items-end gap-8">
          <div className="text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-bold">
              5 Star Rating{" "}
              <span className="block text-sm sm:text-base mt-1">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </span>
            </h3>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-bold">1 Lakh+</h3>
            <p className="text-[#9EBDEF] text-xs sm:text-sm font-bold">
              Practice Questions
            </p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl sm:text-2xl font-bold">20 Years+</h3>
            <p className="text-[#9EBDEF] text-xs sm:text-sm font-bold">
              Experienced <br /> Faculties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
