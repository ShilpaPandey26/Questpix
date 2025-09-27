import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import coachingv from "../../assets/Home/coachingv.png"


export default function KotaCoachingPromo() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlayVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="container px-6 py-12 pt-28 lg:pt-40 flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-snug text-white">
          Bring{" "}
          <span className="text-[#2FC18B]">
            Kota-Level <br className="hidden sm:block" /> Coaching
          </span>
          , Right in Your Organisation
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Redefine your school/institute as the premier destination for
          ambitious students, equipping them with everything they need for JEE,
          NEET & Foundation success.
        </p>
        <div className="w-[180px] mx-auto lg:mx-0 bg-transparent border-2 border-[#2FC18B] py-2 rounded-full hover:bg-[#2FC18B] hover:text-white transition">
          <a
            href="#"
            className="flex justify-center items-center gap-2 text-[16px] sm:text-[18px]"
          >
            Start Today <ArrowRight className="text-[#2FC18B]" size={19} />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {!playVideo ? (
          <div className="cursor-pointer" onClick={handlePlay}>
            <img
              src={coachingv}
              alt="Video Thumbnail"
              className="w-full h-auto max-w-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
        ) : (
          <video
            className="w-full h-auto max-w-[500px] rounded-lg shadow-lg"
            ref={videoRef}
            controls
          >
            <source
              src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/Partnersdetails.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
