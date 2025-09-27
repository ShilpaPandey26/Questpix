import React from "react";
import { FaCheck } from "react-icons/fa";
import gpbtn from "../../assets/gpbtn.png";
import appstore from "../../assets/appstore.png";
import checkout from "../../assets/checkout.png";

export default function JeeQuestPixSection() {
  return (
    <div className="container text-white flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Left Image */}
      <div className="flex-1 flex justify-center">
        <img
          src={checkout}
          alt="Person using laptop"
          className="max-w-[400px] w-full relative top-6"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 pt-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">
          <span className="text-[#2FC18B]">Don't Wait, </span> Start Now.
        </h2>
        <p className="mt-4 text-xl font-bold">
          Checkout the Free QuestPix <br />
          features right now.
        </p>

        {/* Features List */}
        <ul className="mt-6 text-center ">
          {[
            "Self-Designed Practice",
            "Previous Years Questions",
            "Interactive Flashcards",
            "Rank Prediction Tool",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-[16px] text-[#9EBDEF]"
            >
              <FaCheck className="text-[#2b8986] mt-1 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Store Buttons */}
        <div className="flex gap-4 mt-6">
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
    </div>
  );
}
