import React, { useState } from "react";

const testimonials = [
  {
    text: "My biggest weakness was forgetting formulas. The flashcards in this app are amazing! I can revise them anytime, anywhere, and",
    name: "Aditya",
    location: "Mumbai",
    image: "https://dev.questpix.com/assets/images/jee_landing/aaditya.jpg",
  },
  {
    text: "I was always hesitant to ask doubts in class, but this app's doubt resolution feature is a game-changer. I can just click a",
    name: "Ananya",
    location: "Bangalore",
    image: "https://dev.questpix.com/assets/images/jee_landing/kanishk.jpg",
  },
  {
    text: "I found it hard to stay motivated during long study hours. The live classes of QuestPix are so good. The teachers are amazing, and",
    name: "Rohan",
    location: "Chennai",
    image: "https://dev.questpix.com/assets/images/jee_landing/kanishk.jpg",
  },
  {
    text: "Practice tests helped me reduce exam stress a lot, I feel much more confident now.",
    name: "Sneha",
    location: "Hyderabad",
    image: "https://dev.questpix.com/assets/images/jee_landing/aaditya.jpg",
  },
  // you can keep rest of testimonials...
];

export default function NeetTestimonialScroller() {
  // Split into 3 columns
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <div className="container mx-auto text-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 leading-snug">
        Empowering Students,{" "}
        <span className="text-[#2FC18B]">Transforming</span> Exam Prep.
      </h2>

      {/* Grid responsive: 1 col on small, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto overflow-hidden border-2 border-[#0c1420] shadow-2xl rounded-xl p-4">
        {/* Column 1 */}
        <div className="flex flex-col animate-scroll-slow space-y-6">
          {col1.map((t, i) => (
            <TestCard key={i} {...t} isEven={i % 2 === 0} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col animate-scroll-medium space-y-6">
          {col2.map((t, i) => (
            <TestCard key={i} {...t} isEven={i % 2 === 0} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col animate-scroll-fast space-y-6">
          {col3.map((t, i) => (
            <TestCard key={i} {...t} isEven={i % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestCard({ text, name, location, image, isEven }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardBg = isEven ? "bg-[#2fc18b]" : "bg-[#1b283d]";
  const textColor = isEven ? "text-black" : "text-white";
  const readMoreColor = isEven ? "text-white" : "text-[#2fc18b]";
  const commaColor = isEven ? "" : "invert";
  const nameColor = isEven ? "text-black" : "text-white";

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = text.slice(0, 100) + (text.length > 100 ? "..." : "");

  return (
    <div
      className={`p-5 rounded-xl flex flex-col gap-y-4 text-left ${cardBg} transition-transform duration-300 hover:scale-[1.02]`}
    >
      {/* Opening comma */}
      <div className="flex items-start gap-2">
        <img
          src="https://dev.questpix.com/assets/images/icon/testo1.svg"
          className={`h-6 sm:h-7 ${commaColor}`}
        />
      </div>

      {/* Testimonial Text */}
      <p className={`${textColor} text-sm sm:text-base leading-relaxed`}>
        {isExpanded ? text : shortText}
        {text.length > 80 && (
          <span
            className={`cursor-pointer font-semibold ml-1 ${readMoreColor}`}
            onClick={toggleReadMore}
          >
            {isExpanded ? " Read Less..." : " Read More..."}
          </span>
        )}
      </p>

      {/* Closing comma */}
      <div className="flex justify-end">
        <img
          src="https://dev.questpix.com/assets/images/icon/testo2.svg"
          className={`h-6 sm:h-7 ${commaColor}`}
        />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-2">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
        />
        <div>
          <p className={`font-extrabold text-lg sm:text-xl ${nameColor}`}>
            {name}.
          </p>
          <p className="text-sm sm:text-base text-gray-300">{location}</p>
        </div>
      </div>
    </div>
  );
}
