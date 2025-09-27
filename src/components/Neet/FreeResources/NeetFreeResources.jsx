import React from "react";
import { FaStar } from "react-icons/fa";
import gpbtn from "../../../assets/gpbtn.png";
import appstore from "../../../assets/appstore.png";
import success from "../../../assets/jee-images/success.png";

export default function NeetFreeResources() {
  return (
    <div className="container px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <div className=" flex flex-col md:flex-row   justify-center mb-14 ">
        {/* Left Side */}
        <div className="w-full md:w-[45%] text-center md:text-left pt-30">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-5 leading-snug">
            Your <span className="text-[#2FC18B]">Academic Success</span> Starts
            Here,
            <br />{" "}
            <span className="border-3 border-yellow-300 rounded-[80%] text-[28px] p-2">
              FREE
            </span>{" "}
            with QuestPix.
          </p>

          <p className="text-[#9EBDEF] text-base pb-5">
            Master concepts, practice with PYQs, customize tests, and predict
            your rank – all for FREE!
          </p>

          {/* Store Buttons */}

          <div className="flex justify-center md:justify-start items-center gap-5 ">
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

          {/* Rating */}
          <div className="flex items-center justify-center md:justify-start space-x-1 mt-3">
            <p className="text-[#9EBDEF]">Rated:</p>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
        </div>

        {/* Right Side */}

        <div className="w-full md:w-1/2 flex justify-center md:pt-5">
          <img
            src={success}
            alt="Thumbnail"
            className="max-w-md lg:max-w-lg object-contain rounded-2xl mr-20 md:mr-0"
          />
        </div>
      </div>
    </div>
  );
}
