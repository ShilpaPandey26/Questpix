import React, { useRef, useState } from "react";
import { Star, User } from "lucide-react";
import maxresdefault from "../../../assets/jee-images/TestSeries/maxresdefault.jpg"


const QAITS = [
  {
    title: "Q-AITS (Basic Test Series)",
    features: [
      "12 JEE Main Full Syllabus Tests. (FST)",
      "Experience the real JEE MAIN exam pattern and difficulty.",
      "3 JEE ADV. Full Tests.",
         "Unlimited Attempts at Past Years JEE Main Papers.",
      "Based on Latest Pattern",
      "Crafted by Kota's Most Experience Educators.",
      "200 Topics Covered",
      "3000 Questions"
    ],
    link:"test_series_papersets1",
    students: "5000+ Enrolled",
    rating: "4.8/5",
    oldPrice: "Rs.2800.00",
    price: "Rs.899.00",
  },
  {
    title: "Q-AITS (Standard Test Series)",
    features: [
      "12 JEE Main Full Syllabus Tests. (FST)",
      "Experience the real JEE MAIN exam pattern and difficulty.",
      "10 JEE Main Unit Test (UT)",
      "To master all JEE MAIN topics.",
      "3 JEE ADV. Full Tests and 3 JEE ADV. Unit Tests",
      "Unlimited Attempts at Past Years JEE ADV.Unit Tests.",
      "Based on Latest Pattern",
      "Crafted by Kota's Most Experience Educators.",
      "200 Topics Covered",
      "5000 Questions"
    ],
     link:"test_series_papersets2",
    students: "3000+ Enrolled",
    rating: "4.8/5",
    oldPrice: "Rs.3500.00",
    price: "Rs.1299.00",
  },

  {
    title: "Q-AITS (Plus Test Series)",
    features: [
      "12 JEE Main Full Syllabus Tests. (FST)",
      "Experience the real JEE MAIN exam pattern and difficulty.",
      "10 JEE Main Unit Test (UT)",
      "TO master all JEE MAIN topics.",
      "30 JEE Main Chapterwise Test (CT)",
      "TO strengthen every concept step by step",
      "3 JEE ADV. Full Tests and 3 JEE ADV. Unit Tests",
      "Unlimited custom Tests With 1 lakh+ Errorless Questions. (JEE MAIN + ADV.",
      "Unlimited Attempts at Past Years JEE Main Papers.",
      "Based on Latest Pattern",
      "Crafted by Kota's Most Experience Educators.",
      "190 Topics Covered",
      "3000 Questions"
    ],
     link:"test_series_papersets3",
    students: "3000+ Enrolled",
    rating: "4.8/5",
    oldPrice: "Rs.3800.00",
    price: "Rs.1499.00",
  },

  {
    title: "Q-AITS (Premium Test Series)",
    features: [
     "12 JEE Main Full Syllabus Tests. (FST)",
      "Experience the real JEE MAIN exam pattern and difficulty.",
      "10 JEE Main Unit Test (UT)",
      "TO master all JEE MAIN topics.",
      "30 JEE Main Chapterwise Test (CT)",
      "TO strengthen every concept step by step",
      "3 JEE ADV. Full Tests and 3 JEE ADV. Unit Tests",
      "Unlimited custom Tests With 1 lakh+ Errorless Questions. (JEE MAIN + ADV.",
      "Unlimited Attempts at Past Years JEE Main Papers.",
      "Based on Latest Pattern",
      "Crafted by Kota's Most Experience Educators.",
      "190 Topics Covered",
      "3000 Questions"
    ],
     link:"test_series_papersets4",
    students: "3000+ Enrolled",
    rating: "4.9/5",
    oldPrice: "Rs.3500.00",
    price: "Rs.1299.00",
  },
];



const TestSeriesCard = ({ series }) => (
  <div className="bg-[#1f2f47]  rounded-2xl  pt-6  flex flex-col justify-between cursor-pointer">
    <div className="px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{series.title}</h2>
      <h2 className="font-bold text-lg mb-4 text-[#9ebdef]">Special Features:</h2>
      <ul className="text-[#9ebdef] list-disc text-base  space-y-2 mb-2 px-6">
        {series.features.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>
      <p className="text-[#2fc18b] text-lg">Know More &gt;</p>
    </div>

    <div className="flex items-center justify-between">
      <div className="px-4 w-[60%]">
        <div className="flex items-center text-[#9ebdef] gap-3 mb-4">
          <div className="flex items-center gap-1">
            <Star size={20} className="text-[#9ebdef] fill-[#9ebdef]" />
            <p className="font-semibold text-lg">{series.rating}</p>
          </div>

          <div className="flex items-center gap-1 ">
            <User size={20} className="text-[#9ebdef]" />
            <p className="text-base font-semibold">{series.students}</p>
          </div>
        </div>
        <div className="mb-4">
        <a href={series.link} className="px-4 py-2 bg-white text-black font-semibold rounded-lg cursor-pointer">
          Enroll Now
        </a>
        </div>
        <div className="text-center text-lg border-1 border-[#2fc18b] rounded-lg  bg-[#2fc18b]">
          <span className="line-through text-gray-500">{series.oldPrice}</span>
          <p className="text-white font-bold text-xl">For Just {series.price}</p>
        </div>
      </div>

      <div className="w-[40%]">
        <img
          src="https://dev.questpix.com/assets/images/pramotion/vijay.png"
          alt="Instructor"
          className="w-96"
        />
      </div>
    </div>

  </div>
);

export default function TestSeriesPromotionPage() {

  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlayVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };


  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">

        <div className="text-center py-12 px-4 pt-30">
          <h1 className="text-4xl  font-bold">
            Questpix Top Rated <span className="text-[#2fc18b]">Test Series</span>
          </h1>
          <p className="mt-4 text-[#9ebdef] text-base">
            Our Test Series is an excellent way to excel in your JEE Main Preparation
            <br />
            <span className="text-sm text-[#9ebdef]">
              (Curated by top industry experts from Kota)
            </span>
          </p>
        </div>


        <div className="max-w-xl sm:max-w-5xl mx-auto px-4 mb-10">
          <div className="grid md:grid-cols-2 gap-8">
            {QAITS.map((series, i) => (
              <TestSeriesCard key={i} series={series} />
            ))}
          </div>
        </div>



        {/* Video */}
        <div className=" w-full flex  flex-col justify-center items-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-10 mt-10 text-center">Why Test Series is <span className="text-[#2fc18b]">Important?</span></h2>
          {!playVideo ? (
            <div className="cursor-pointer" onClick={handlePlay}>
              <img
                src={maxresdefault}
                alt="Video Thumbnail"
                className="w-full h-auto max-w-[700px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <video
              className="w-full h-auto max-w-[700px] rounded-lg shadow-lg"
              ref={videoRef}
              controls
            >
              <source
                src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/Partnersdetails.mp4"
                type="video/mp4"
              />

            </video>
          )}
        </div>
      </div>
    </div>
  );
};

