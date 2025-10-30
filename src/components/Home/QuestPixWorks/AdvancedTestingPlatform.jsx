import React, { useRef, useState } from 'react'
import { ArrowRight } from "lucide-react";
import Test_Generator_Thumbnail from "../../../assets/Home/Test_Generator_Thumbnail.png"
import generator from "../../../assets/Home/generator.png"
import features from "../../../assets/Home/features.png";
import work from "../../../assets/Home/work.png";
import bgtwo from "../../../assets/Home/bgtwo.svg";
import study from "../../../assets/Home/study.png";
import ConnectSection from '../ConnectSection';
import one from "../../../assets/Home/AdvancedTestingPlatform/1.png";
import two from "../../../assets/Home/AdvancedTestingPlatform/2.png";
import three from "../../../assets/Home/AdvancedTestingPlatform/3.png";
import four from "../../../assets/Home/AdvancedTestingPlatform/4.png";
import five from "../../../assets/Home/AdvancedTestingPlatform/5.png";
import six from "../../../assets/Home/AdvancedTestingPlatform/6.png";

export default function AdvancedTestingPlatform() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <QuestpixTestGenerator />
      <Features />
      <PartnerWithQuestpix />
      <ConnectSection />
    </div>
  )
}


function HeroSection() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlayVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100)
  }
  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <div className="pt-30 flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-3 mb-18">
        {/* left */}
        <div className=" w-full md:w-1/2 mb-6">
          <h2 className="text-4xl font-extrabold">Advanced  <span className="text-[#2FC18B]">Testing</span></h2>
          <h2 className="text-4xl text-[#2FC18B] font-extrabold mb-5">Platform</h2>
          <p className="text-lg mb-5">Questpix Test Generator is a powerful tool that helps  <span className="text-[#2FC18B]"> teachers and educators </span> create question papers in <span className="text-[#2FC18B]">just minutes </span>— without the usual hassle and time investment.
          </p>
          <div className="w-[180px] mx-auto md:mx-0 mb-10 ">
            <a
              href="#"
              className="flex justify-center items-center gap-2 text-[16px] sm:text-[18px] bg-transparent border-2 border-[#2FC18B] py-2 rounded-full hover:bg-[#2FC18B] hover:text-white transition"
            >
              Start Today <ArrowRight className="text-[#2FC18B]" size={19} />
            </a>
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-[45%]">
          {!playVideo ? (
            <div className="cursor-pointer" onClick={handlePlay}>
              <img src={Test_Generator_Thumbnail}
                className="w-full h-auto max-w-[600px] object-cover rounded-lg shadow-lg"
                alt="video thumbnail" />
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full h-auto max-w-[600px] object-cover rounded-lg shadow-lg"
              controls>
              <source src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/TestGeneratorFinalVideo.mp4" type="video/mp4" />
            </video>

          )}

        </div>

      </div>
    </div>
  )
}

function QuestpixTestGenerator() {
  return (
    <div
      className="pt-28 pb-28"
      style={{
        backgroundImage: `url(${bgtwo})`,
        backgroundSize: "cover"

      }}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 text-black">
          {/* left */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 md:w-[80%]">
              Why Choose <span className="text-white"> Questpix Test Generator?</span></h2>

            <h3 className="text-xl sm:text-2xl font-extrabold mb-5">Quick Paper Creation</h3>
            <p className="font-semibold mb-5">Teachers can <span className="text-white">Generate question papers in minutes, </span>not hours. Just select the subject, topics, difficulty level, and format — and you're ready to go.</p>
            <p className="text-2xl font-extrabold mb-3">Covers All Exam Levels</p>
            <p className="mb-5">Access a wide database of questions for:</p>

            <ul className="space-y-4 md:w-[80%] mx-auto md:mx-0">
              <li className="border-b border-dotted pb-2">
                School-level assessments
              </li>
              <li className="border-b border-dotted pb-2">
                Board exams
              </li>
              <li className="border-b border-dotted pb-2">
                Competitive exams like Olympiads, NTSE, JEE, NEET
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-5">Time-Saving & Efficient</h2>
            <p className="mt-5">Say goodbye to manual formatting and repetitive editing. Our smart engine ensures paper creation is <strong>fast, accurate, and stress-free.</strong></p>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={generator}
              alt="books"
              className="w-56 sm:w-72 md:w-[34rem] object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <h2 className="text-3xl sm:text-[40px] font-extrabold text-center mb-5 mt-10">Features You'll Love</h2>
      <p className="text-center">Questpix Test Generator is designed to simplify every step of the test creation process. Here's what makes it a must-have tool for educators:</p>

      <div className="mt-24 w-full md:max-w-5xl mx-auto flex flex-col md:flex-row  gap-6 text-center items-center  justify-center sm:items-start sm:text-left mb-18">
        <div className="flex flex-col gap-3 md:w-[60%]" >
          <h5 className="flex items-center  gap-3 text-xl font-bold">
            <img src={one} className="w-5 h-5" /> User-Friendly Dashboard </h5>
          <p> Simple, intuitive interface that anyone can use — no technical skills required.</p>
          <h5 className="flex gap-3 items-center  text-xl font-bold">
            <img src={two} className="w-5 h-5" /> Printable & Shareable Formats (PDF/DOC)</h5>
          <p>  Instantly download, print, or share your question papers in standard formats.</p>
          <h5 className="flex gap-3 items-center  text-xl font-bold">
            <img src={three} className="w-5 h-5" /> Significantly Reduces Teacher Workload</h5>
          <p>  Save hours of manual work — generate papers with just a few clicks.</p>
          <h5 className="flex gap-3 items-center  text-xl font-bold">
            <img src={four} className="w-5 h-5" /> Includes Answer Keys & Marking Schemes</h5>
          <p> Automatically generate answer sheets and marking rubrics for faster evaluation.</p>
          <h5 className="flex gap-3 items-center text-xl font-bold">
            <img src={five} className="w-5 h-5" /> Perfect for Schools, Tutors & Coaching Institutes</h5>
          <p>  Designed to meet the needs of all types of educational settings.</p>
          <h5 className="flex gap-3 items-center  text-xl font-bold">
            <img src={six} className="w-5 h-5" /> No Need for Operators or Manual Checking</h5>
          <p>  The system auto-generates papers and keys — no additional staff required.</p>


        </div>
        <div className="sm:w-1/2 mx-auto" >
          <img src={features} alt="features" className="w-[30rem] h-[30rem]" />
        </div>
      </div>

      <div>
        <h2 className="text-3xl sm:text-[40px] font-extrabold text-center mb-10">How It Works</h2>
        <img src={work} alt="work" className="w-[24rem] mx-auto mb-10" />
      </div>

    </div>
  )
}


function PartnerWithQuestpix() {
  return (
    <div className="pt-38"
      style={{
        backgroundImage: `url(${bgtwo})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-black mb-12">
          {/* left */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-[38px] font-extrabold mb-8">Ready to provide your <span className="text-white">students with study materials </span> that set them apart? </h2>

            <div className="border-2 border-black bg-[#0F1825] text-white rounded-3xl w-1/3 py-2 cursor-pointer">
              <a href="#" className="flex justify-evenly">Start Today <ArrowRight /></a>
            </div>

          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={study}
              alt="study"
              className="w-[25rem]"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
