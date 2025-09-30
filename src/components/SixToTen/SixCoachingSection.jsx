import React from "react";
import vijaysir from "../../assets/vijaysir.png";
import free from "../../assets/SixToTen/free.png"
import boyimg from "../../assets/SixToTen/boy.png"

export default function SixCoachingSection() {
  return (
    <div className="container">
      <div className="container mx-auto px-4 pt-10  text-white flex flex-col lg:flex-row items-center md:justify-between gap-10">
        {/* left */}
        <div className="lg:w-1/2 text-center md:text-left ">
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold ">
            Learn From The Legend Who <br />
            <span className="text-[#2FC18B]">Shaped JEE Coaching.</span>
          </h2>

          <p className="mt-6 text-[#9EBDEF] text-sm text-left sm:text-base">
            Imagine learning from the very best, a teacher who has not only
            witnessed the evolution of JEE coaching but has been instrumental in
            shaping it.
          </p>

          <p className="mt-8 text-[#9EBDEF] text-sm text-left sm:text-base">
            With over 21 years of experience at the forefront of India's
            renowned coaching institutions, Vijay Sharma Sir and his team bring
            unparalleled expertise to QuestPix.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-row gap-3 mt-6 justify-center md:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.questpix.app"
              target="_blank"
            >
              <img
                src={free}
                alt="Google Play"
                className="w-55"
              />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={vijaysir}
            alt="Vijay Sharma Sir"
            className="w-96 md:w-96 rounded-lg"
          />
        </div>
      </div>

     <div>
        <img
          src={boyimg}
          alt="Decorative"
         
        />
      </div>
    </div>
  );
}
