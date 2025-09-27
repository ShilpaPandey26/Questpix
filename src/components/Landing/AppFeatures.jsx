import React from 'react';
import landinglive from "../../assets/Landing/landinglive.png";
import landingper from "../../assets/Landing/landingper.png";
import landingphoto from "../../assets/Landing/landingphoto.png";
import landingquiz from "../../assets/Landing/landingquiz.png";

const features = [
  {
    title: 'Online Live Classes, Pre-Recorded Lectures & Flashcards',
    icon: landinglive,
    bgColor: '',
    gradient: 'linear-gradient(to top, #1e293b 0%, #0F1825 100%)',
    rounded: 'rounded-tl-[60px]',
    lgStyle: { top: '0', left: '15%' },
  },
  {
    title: 'Test Series with Performance Analytics & Rank Prediction',
    icon: landingper,
    bgColor: 'bg-[#2FC18B]',
    rounded: 'rounded-br-[60px]',
    lgStyle: { top: '9.5rem', right: '17%' },
  },
  {
    title: 'Instant Photo Click Solutions & Doubt Chat with Teachers',
    icon: landingphoto,
    bgColor: 'bg-[#FFD324]',
    rounded: 'rounded-tl-[60px]',
    lgStyle: { top: '12rem', left: '4%' },
  },
  {
    title: 'Daily Quizzes, Custom Practice & Previous Year Questions',
    icon: landingquiz,
    bgColor: '',
    gradient: 'linear-gradient(to top, #1e293b 0%, #0F1825 100%)',
    rounded: 'rounded-br-[60px]',
    lgStyle: { top: '22rem', right: '20%' },
  },
];

export default function AppFeatures() {
  return (
    <div className="text-center overflow-hidden px-4 sm:px-2">
      <h2 className="mb-20 flex flex-col items-center text-4xl font-bold text-white">
        Take Your Preparation to the Next Level
        <span className="text-[#2FC18B]"> QuestPix App</span>
      </h2>

      {/* Mobile stacked layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 w-full flex flex-col items-center justify-center text-center ${feature.bgColor} rounded-md md:${feature.rounded}`}
            style={{ background: feature.gradient || undefined }}
          >
            <img src={feature.icon} alt="icon" className="h-20 mb-4" />
            <p
              className={`font-medium text-xl ${
                feature.bgColor === 'bg-[#1b283d]' || feature.gradient
                  ? 'text-white'
                  : 'text-black'
              }`}
            >
              {feature.title}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop absolute layout */}
      <div className="hidden lg:block relative h-[600px] mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 border-[#060e1a] w-[38%] flex flex-col items-center justify-center text-center ${feature.bgColor} ${feature.rounded} absolute`}
            style={{
              background: feature.gradient || undefined,
              ...feature.lgStyle,
            }}
          >
            <img src={feature.icon} alt="icon" className="h-20 mt-2" />
            <p
              className={`font-medium text-xl ${
                feature.bgColor === 'bg-[#1b283d]' || feature.gradient
                  ? 'text-white'
                  : 'text-black'
              }`}
            >
              {feature.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
