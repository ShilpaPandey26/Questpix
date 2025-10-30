import React from 'react'
import { ArrowRight } from "lucide-react";
import bgtwo from "../../../assets/Home/bgtwo.svg";
import doubt from "../../../assets/Home/DoubtResolution/doubt.png";
import institutes from "../../../assets/Home/DoubtResolution/institutes.png";
import lectures from "../../../assets/Home/DoubtResolution/lectures.png";
import Institution from "../../../assets/Home/DoubtResolution/Institution.png";
import ConnectSection from '../ConnectSection';
import one from "../../../assets/Home/DoubtResolution/1.png";
import two from "../../../assets/Home/DoubtResolution/2.png";
import three from "../../../assets/Home/DoubtResolution/3.png";
import four from "../../../assets/Home/DoubtResolution/4.png";
import five from "../../../assets/Home/DoubtResolution/5.png";

import video from "../../../assets/Home/DoubtResolution/video.png";
import exam from "../../../assets/Home/DoubtResolution/exam.png";
import topic from "../../../assets/Home/DoubtResolution/topic.png";
import devices from "../../../assets/Home/DoubtResolution/devices.png";
import learning from "../../../assets/Home/DoubtResolution/learning.png";
import book from "../../../assets/Home/DoubtResolution/book.png";


export default function DoubtResolutionSystem() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <Institutes />
      <Features />
      <PartnerWithQuestpix />
      <ConnectSection />
    </div>
  )
}


function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <div className="pt-30 flex flex-col md:flex-row text-center md:text-left justify-between gap-3 mb-18">
        {/* left */}
        <div className=" w-full lg:w-1/2 ">
          <h2 className="text-4xl font-extrabold mb-5">Recorded Lectures &<span className="text-[#2FC18B]">Doubt Resolution</span> System</h2>

          <p className="text-lg mb-5">Our HD recorded video lectures are designed to bring classroom-quality learning directly to students — with expert instruction, in-depth topic coverage, and total flexibility.</p>
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
        <div className="w-full lg:w-[40%]">
          <img src={doubt} alt="doubt" />
        </div>

      </div>
    </div>
  )
}

function Institutes() {
  return (
    <div
      className="pt-28 pb-28 "
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
              A <span className="text-white">Powerful Tool</span>for Schools & Institutes
            </h2>
            <p className="mb-5">Enhance your institution’s offerings with smart, self-paced learning solutions that.</p>

            <ul className="space-y-4 md:w-[80%] mx-auto md:mx-0">
              <li className="border-b border-dotted pb-2">
                Improve your academic outcomes
              </li>
              <li className="border-b border-dotted pb-2">
                Boost your brand value and credibility
              </li>
              <li className="border-b border-dotted pb-2">
                Help you retain existing students
              </li>
              <li className="border-b border-dotted pb-2">
                Attract more admissions with premium content
              </li>
              <li className="border-b border-dotted pb-2">
                Offer a modern digital learning experience under your own name (white-label option available)</li>
            </ul>

          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={institutes}
              alt="institutes"
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
      <h2 className="text-3xl sm:text-[40px] font-extrabold text-center mb-5 mt-10">What Makes Our Lectures Stand Out?</h2>

      <div className="mt-24 w-full md:max-w-5xl mx-auto flex flex-col md:flex-row  gap-6 text-center items-center  justify-center sm:items-start sm:text-left mb-18">
        <div className="flex flex-col gap-3 md:w-[60%] " >
          <h5 className="flex items-center  gap-3 text-xl font-bold">
            <img src={one} className="w-5 h-5" />Expert Faculty from Kota</h5>
          <p>All lectures are delivered by top educators from Kota, India's premier hub for competitive exam preparation.</p>
          <h5 className="flex items-center  gap-3 text-xl font-bold">
            <img src={two} className="w-5 h-5" /> Detailed Explanation for Every Topic</h5>
          <p>Each concept is explained in a simple, step-by-step manner, ensuring clear understanding — no need for external reference books.</p>
          <h5 className="flex items-center  gap-3 text-xl font-bold">
            <img src={three} className="w-5 h-5" /> Covers Classes 6 to 12</h5>
          <p>Comprehensive recorded video content for Classes 6 to 12, mapped to school syllabus and covering key topics for competitive exams like NTSE, Olympiads, JEE, and NEET.</p>
          <h5 className="flex items-center  gap-3 text-xl font-bold">
            <img src={four} className="w-5 h-5" /> Mobile-Friendly Platform</h5>
          <p> Our platform works seamlessly on any Android device, allowing students to study anytime, from anywhere — at home, while traveling, or between classes.</p>
          <h5 className="flex items-center  gap-3 text-xl font-bold">
            <img src={five} className="w-5 h-5" /> No Need for Extra Reference Material</h5>
          <p>Lectures are self-sufficient, eliminating the need for additional books or guides.</p>

        </div>
        <div className="sm:w-1/2 mx-auto" >
          <img src={lectures} alt="lectures" className="w-[30rem] h-[30rem]" />
        </div>
      </div>

      <div className="mb-28">
        <h2 className="text-4xl font-extrabold mb-10 text-center">Why Trust QuestPix?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#1e2b41] border-2 border-[#243856]  flex flex-col items-center gap-6 bg-gradient-to-b from-[#202F47] to-[#3a547e00] p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-center">HD-Quality Recorded  Video Lectures</h3>
            <img src={video} alt="video" className="w-40" />
          </div>
          <div className="bg-[#1e2b41] border-2 border-[#243856]  flex flex-col items-center gap-6 bg-gradient-to-b from-[#202F47] to-[#3a547e00] p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-center">Board & Competitive Exam Aligned</h3>
            <img src={exam} alt="video" className="w-40" />
          </div>
          <div className="bg-[#1e2b41] border-2 border-[#243856]  flex flex-col items-center gap-6 bg-gradient-to-b from-[#202F47] to-[#3a547e00] p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-center">Class Topic-Wise, Structured Curriculum 6-10</h3>
            <img src={topic} alt="topic" className="w-40" />
          </div>
          <div className="bg-[#1e2b41] border-2 border-[#243856]  flex flex-col items-center gap-6 bg-gradient-to-b from-[#202F47] to-[#3a547e00] p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-center">Access on Android & IOS Devices</h3>
            <img src={devices} alt="devices" className="w-40" />
          </div>
          <div className="bg-[#1e2b41] border-2 border-[#243856]  flex flex-col items-center gap-6 bg-gradient-to-b from-[#202F47] to-[#3a547e00] p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-center">Perfect for Revision & Self-Paced Learning</h3>
            <img src={learning} alt="learning" className="w-40" />
          </div>
          <div className="bg-[#1e2b41] border-2 border-[#243856]  flex flex-col items-center gap-6 bg-gradient-to-b from-[#202F47] to-[#3a547e00] p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-center">No Need for External Guides or Reference Books</h3>
            <img src={book} alt="book" className="w-40" />
          </div>
        </div>
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
            <h2 className="text-3xl sm:text-[38px] font-extrabold mb-10">Empower Your Institution with Questpix <span className="text-white">Recorded Lectures</span> </h2>

            <div className=" flex flex-col mx-auto justify-center md:justify-start sm:flex-row gap-6 text-white w-[60%] sm:w-full">
              <a href="#" className="flex justify-evenly gap-3 border-2 border-black bg-[#0F1825] rounded-3xl py-2 px-6 cursor-pointer">Partner with us<ArrowRight /></a>
              <a href="#" className="flex justify-evenly gap-3 border-2 border-black rounded-3xl py-2 px-6 text-black cursor-pointer">Get in Touch <ArrowRight /></a>
            </div>

          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Institution}
              alt="Institution"
              className="w-[25rem]"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
