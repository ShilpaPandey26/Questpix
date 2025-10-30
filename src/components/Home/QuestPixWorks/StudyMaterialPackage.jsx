import React, { useRef, useState } from 'react'
import { ArrowRight } from "lucide-react";
import SMP_Thumbnail from "../../../assets/Home/SMP_Thumbnail.png";
import bg from "../../../assets/Home/bg.svg";
import books from "../../../assets/Home/books.png";
import Unique from "../../../assets/Home/Unique.png";
import benifits from "../../../assets/Home/benifits.png";
import bgtwo from "../../../assets/Home/bgtwo.svg";
import partner from "../../../assets/Home/partner.png";
import ConnectSection from '../ConnectSection';

export default function StudyMaterialPackage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <InstituteSection />
      <Opportunity />
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
      <div className="pt-30 flex flex-col md:flex-row text-center md:text-left justify-between gap-3 mb-18">
        {/* left */}
        <div className=" w-full lg:w-1/2 ">
          <h2 className="text-4xl font-extrabold">Study <span className="text-[#2FC18B]">Material</span></h2>
          <h2 className="text-4xl text-[#2FC18B] font-extrabold mb-5">Package</h2>
          <p className="text-lg mb-5">Our Study Material Package delivers <span className="text-[#2FC18B]">high-quality resources directly to your students,</span>branded with your organisation's identity.</p>
          <div className="flex flex-wrap gap-2 mb-5">
            <p className="border-l-2 border-[#2FC18B] pl-1">For Class 6 - 12</p>
            <p className="border-l-2 border-[#2FC18B] pl-1">JEE Main</p>
            <p className="border-l-2 border-[#2FC18B] pl-2">JEE Advanced</p>
            <p className="border-l-2 border-[#2FC18B] pl-2">NEET UG</p>
            <p className="border-l-2 border-[#2FC18B] pl-2">NTSE</p>
            <p className="border-l-2 border-[#2FC18B] pl-2">KVPY</p>
            <p className="border-l-2 border-[#2FC18B] pl-2">Olympiads </p>
          </div>
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
        <div className="w-full lg:w-[45%]">
          {!playVideo ? (
            <div className="cursor-pointer" onClick={handlePlay}>
              <img src={SMP_Thumbnail}
                className="w-full h-auto max-w-[600px] object-cover rounded-lg shadow-lg"
                alt="video thumbnail" />
            </div>
          ) : (
            <video
              ref={videoRef}
              className="w-full h-auto max-w-[600px] object-cover rounded-lg shadow-lg"
              controls>
              <source src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/SMP_Video.mp4" type="video/mp4" />
            </video>

          )}

        </div>

      </div>
    </div>
  )
}

function InstituteSection() {
  return (
    <div
      className="pt-28 md:pt-58 pb-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        {/* SECTION 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-black mb-12">
          {/* left */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold mb-5">Our books are:</h2>
            <ul className="space-y-3 md:space-y-4 w-full md:w-[80%] mx-auto md:mx-0">
              <li className="border-b border-dotted pb-2">
                <span className="text-white">Self-explanatory</span> and easy to understand
              </li>
              <li className="border-b border-dotted pb-2">
                <span className="text-white">Carefully reviewed </span> to ensure they are nearly error-free
              </li>
              <li className="border-b border-dotted pb-2">
                <span className="text-white">Affordable,</span> making quality education accessible to all
              </li>
            </ul>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={books}
              alt="books"
              className="w-40 sm:w-56 md:w-64 lg:w-72 object-contain"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 text-black">
          {/* left */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-lg sm:text-2xl font-semibold mb-5 md:w-[80%]">
              Schools and institutions can partner with us to provide these materials to their students as a{" "}
              <span className="text-white">value-added academic resource.</span> We offer:
            </h2>
            <ul className="space-y-4 md:w-[80%] mx-auto md:mx-0">
              <li className="border-b border-dotted pb-2">
                <span className="text-white">Co-branded books</span> with both the{" "}
                <span className="text-white">QuestPix logo and your institution's logo.</span>
              </li>
              <li className="border-b border-dotted pb-2">
                <span className="text-white">White-labeled study material</span> that carries only your school or institute's branding.
              </li>
            </ul>
          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Unique}
              alt="books"
              className="w-56 sm:w-72 md:w-[25rem] object-contain"
            />
          </div>
        </div>

        <p className="text-black mt-10">Whether you're a <span className="text-white">day school, residential school, or coaching institute,</span> Questpix is your trusted partner for customized, cost-effective learning solutions.</p>
      </div>
    </div>
  );
}

function Opportunity() {
  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 mt-10">Opportunity for</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 text-lg gap-5 text-center max-w-[80%] sm:max-w-5xl mx-auto">
        <div className="bg-[#2fc18b] border-2 border-[#60FFC4] p-3 rounded-xl text-black">All Schools (Day & Residential) who are interested to add value to current operations</div>
        <div className="bg-[#29374D] border-2 border-[#455A7B] p-3 rounded-xl">Coaching or Educational Institutes looking to enhance their expertise in competitive exam preparations</div>
        <div className="bg-[#2fc18b] border-2 border-[#60FFC4] p-3 rounded-xl text-black">Expertly designed theory and question banks for Class 6 - 10 with complete JEE, NEET, Pre-Foundation, and Foundation content.</div>
      </div>

      <div className="mt-24 w-full md:max-w-5xl mx-auto flex flex-col sm:flex-row  gap-6 text-center items-center  justify-center sm:items-start sm:text-left">
        <div className="sm:w-1/2" >
          <h2 className="text-[40px] font-bold mb-5">Key Benefits for Your Organisation</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>Top-Quality Content by Experts</li>
            <li>Proven Improvement in Results</li>
            <li>Preparation for Multiple Exams</li>
            <li>Error-Free and Quality Checked</li>
            <li>Easy-to-Understand Solutions</li>
          </ul>

        </div>
        <div className="sm:w-1/2" >
          <img src={benifits} alt="benifits" className="w-[25rem]" />
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Partner With Questpix</h2>
            <p>We cordially invite Authors, Distributors, Book Sellers, Institutes & Schools to get associated with us. </p>
            <div className="border-2 border-black rounded-3xl w-1/2 py-2 mt-5">
              <a href="#" className="flex justify-evenly">Become an Affiliate Today! <ArrowRight /></a>
            </div>

          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={partner}
              alt="partner"
              className="w-[25rem]  "
            />
          </div>
        </div>
      </div>

    </div>
  )
}