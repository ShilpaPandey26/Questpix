import React from "react";
import gpbtn from "../../assets/gpbtn.png";
import appstore from "../../assets/appstore.png";
import Lastimg from "../../assets/Landing/Lastimg.png";

export default function AppDownloadSection() {
  return (
    <div className="container lg:h-[400px] lg:pt-10 custom-xl-row bg-[#0F1825]  text-white flex flex-col xl:flex-row items-center justify-evenly">
      {/* Left Content */}
      <div className=" flex-1 text-center xl:text-left ">
        <h2 className="text-2xl md:text-[54px] xl:w-[60%] font-bold leading-tight pb-3">
          Download the
          <span className="text-[#2FC18B]">
            {" "}
            QuestPix <br /> App
          </span>{" "}
          Today
        </h2>
        <p className="text-[16px] pb-6">
          Start Your Journey to <span className="text-[#2FC18B]">Success</span>
        </p>

        {/* Store Buttons */}
        <div className="flex items-center justify-center xl:justify-start gap-4">
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
      </div>

      {/* Right Content (Mobile App Images) */}
      <div className="flex-1 relative  md:top-20">
        <img
          src={Lastimg}
          alt="Phone 1"
          className="w-[400px] mx-auto"
        />
      </div>
    </div>
  );
}
