import React from "react";
import { FaStar } from "react-icons/fa";
import gpbtn from "../../../assets/gpbtn.png";
import appstore from "../../../assets/appstore.png";
import why1 from "../../../assets/jee-images/why1.png";

export default function JeeWhyUs() {
  return (
    <div className="container pt-20 md:pt-25  flex flex-col  justify-evenly items-center gap-6 sm:flex-row">
      {/* Left Side */}
      <div className="md:w-[50%] text-center sm:text-left pt-10">
        <div>
          <p className="text-3xl md:text-5xl font-semibold pb-2">
            JEE, NEET & Foundation Success,
            <span className="text-[#2FC18B]">
              <br />
              Reimagined.
            </span>
          </p>

          <p className="text-[16px] pt-5 pb-5 ">
            Experience a new era of learning
          </p>
          <p className="text-[#9EBDEF] text-[16px] pb-5 ">
            Our platform provides students with the tools, guidance, and support
            they need to excel academically.
          </p>
        </div>

        {/* Store Buttons */}

        <div className="flex justify-center items-center sm:justify-start gap-5 pb-3">
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
        <div className="flex justify-center items-center sm:justify-start space-x-1 mt-3">
          <p className="text-[#9EBDEF]">Rated:</p>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div>
        <img
          src={why1}
          alt="thumbnail why1"
          className="max-w-[300px] sm:max-w-[350px]  object-contain "
        />
      </div>
    </div>
  );
}
