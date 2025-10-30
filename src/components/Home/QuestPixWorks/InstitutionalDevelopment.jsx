import React from 'react'
import { ArrowRight } from "lucide-react";
import bgtwo from "../../../assets/Home/bgtwo.svg";
import development from "../../../assets/Home/development.png";
import organisation from "../../../assets/Home/organisation.png";
import ConnectSection from '../ConnectSection';



export default function InstitutionalDevelopment() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <AppFeatures />
      <PartnerWithQuestpix />
      <ConnectSection />
    </div>
  )
}


function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
      <div className="pt-30 flex flex-col md:flex-row text-center md:text-left justify-between items-center gap-3 mb-18">
        {/* left */}
        <div className=" w-full md:w-1/2">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-5 ">Holistic Student & <span className="text-[#2FC18B]">Institutional Development</span></h2>

          <p className="mb-5">Focus on overall student growth and improve your organisation's standing. Our program supports both student's excellence and your organisation's overall visibility & perception.</p>
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
        <div className="md:w-1/2">
          <img src={development} alt="development" className="w-[25rem]" />
        </div>

      </div>
    </div>
  )
}



function AppFeatures() {
  const data = [
    {
      title: 'Key Benefits for Your Organisation',
      bgColor: '',
      feature: [
        "Develop top-ranking talent within your school.",
        "Provide students with strategic career pathways.",
        "Amplify your school's visibility in the community.",
        "Attract more ambitious students and families.",
      ],
      gradient: 'linear-gradient(to top, #1e293b 0%, #0F1825 100%)',
      rounded: 'rounded-tl-[60px]',
      lgStyle: { top: '0', left: '28%' },
    },
    {
      title: 'Key Features',
      bgColor: 'bg-[#2FC18B]',
      feature: [
        "Rank enhancement program 'Top 500 AIR Club' for top JEE/NEET students.",
        "Expert career counselling for professional guidance on future planning.",
        "Strategic marketing assistance for content creation and promotional events.",
        "Holistic development focus beyond academics, shaping future leaders.",
      ],
      rounded: 'rounded-br-[60px]',
      lgStyle: { top: '10rem', right: '8%' },
    },
    {
      title: "How It's Unique",
      feature: [
        "Top 500 Air Club provides advanced problem-solving and guidance.",
        "Psychometric tests in career counselling help students find the perfect path.",
        "Marketing support helps your organisation enhance visibility and perception.",
        "Focus on both student success and institutional growth.",
      ],
      bgColor: 'bg-[#FFD324]',
      rounded: 'rounded-tl-[60px]',
      lgStyle: { top: '11rem', left: '13%' },
    },
  ];


  return (
    <div className="text-center overflow-hidden px-4 sm:px-2 ">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 lg:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-6 w-full flex flex-col items-center justify-center text-center ${item.bgColor} rounded-md md:${item.rounded}`}
            style={{ background: item.gradient || undefined }}
          >

            <p
              className={`font-medium text-xl ${item.bgColor === 'bg-[#1b283d]' || item.gradient
                ? 'text-white'
                : 'text-black'
                }`}
            >
              {item.title}
            </p>
            <ul className={`text-left list-disc ${item.gradient ? 'text-gray-300' : 'text-black'}`}>
              {item.feature.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="hidden lg:block relative h-[600px] mx-auto max-w-7xl">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-8 border-[#060e1a] w-[38%] flex flex-col    ${item.bgColor} ${item.rounded} absolute`}
            style={{
              background: item.gradient || undefined,
              ...item.lgStyle,
            }}
          >
    
            <p
              className={`font-medium text-left mb-3 text-xl ${item.bgColor === 'bg-[#1b283d]' || item.gradient
                ? 'text-white'
                : 'text-black'
                }`}
            >
              {item.title}
            </p>
            <ul className={`text-left text-[15px] list-disc ${item.gradient ? 'text-gray-300' : 'text-black'}`}>
              {item.feature.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnerWithQuestpix() {
  return (
    <div className="pt-18"
      style={{
        backgroundImage: `url(${bgtwo})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-black mb-12">
          {/* left */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-[38px] font-extrabold mb-10">Ready to nurture exceptional students and <span className="text-white">enhance your organisation's standing?</span> </h2>

            <div className="border-2 border-black bg-[#0F1825] text-white rounded-3xl w-1/3 py-2 px-6 cursor-pointer mx-auto sm:mx-0">
              <a href="#" className="flex justify-evenly">Start Today <ArrowRight /></a>
            </div>


          </div>

          {/* right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={organisation}
              alt="organisation"
              className="w-[25rem]"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
