import React from "react";
import gpbtn from "../../../assets/gpbtn.png";
import appstore from "../../../assets/appstore.png";
import why2 from "../../../assets/jee-images/why2.png";
import ready from "../../../assets/jee-images/ready.png";

export default function QuestPixDifference() {
  return (
    <div className="mt-20 max-w-full px-4">
      <div className="relative">
        <img
          src={why2}
          alt="leaf why2"
          className="w-30 lg:w-40  rounded-lg absolute -top-10 md:top-10 lg:top-20 left-1/2 md:left-5 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="container text-white flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Experience
              <br />
              the
              <span className="text-[#FFD118]">
                {" "}
                QuestPix <br />
                Difference?
              </span>
            </h2>

            <p className="mt-5 text-[#9EBDEF]">
              Don't settle for a basic JEE, NEET or Foundation preparation.
              Download QuestPix today and make your exam prep extra-ordinary.
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="flex justify-center md:justify-start mt-5 space-x-4">
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

        {/* Right Image */}
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <img
            src={ready}
            alt="ready"
            className="max-w-[450px] md:max-w-[450px] mr-25 md:mr-0 xl:max-w-[600px] h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
