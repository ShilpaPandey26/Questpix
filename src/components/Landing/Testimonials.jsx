import React, { useEffect, useRef,useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestData = [
  {
    text: "My biggest weakness was forgetting formulas. The flashcards in this app are amazing! I can revise them anytime, anywhere, and",
    name: "Aditya",
    location: "Mumbai",
    image: "https://dev.questpix.com/assets/images/jee_landing/aaditya.jpg",
    bgColor: "bg-[#2fc18b]",
  },
  {
    text: "I was always hesitant to ask doubts in class, but this app's doubt resolution feature is a game-changer. I can just click a",
    name: "Ananya",
    location: "Bangalore",
    image: "https://dev.questpix.com/assets/images/jee_landing/kanishk.jpg",
    bgColor: "bg-[#1b283d]",
  },
  {
    text: "My biggest weakness was forgetting formulas. The flashcards in this app are amazing! I can revise them anytime, anywhere, and",
    name: "Aditya",
    location: "Mumbai",
    image: "https://dev.questpix.com/assets/images/jee_landing/aaditya.jpg",
    bgColor: "bg-[#2fc18b]",
  },
  {
    text: "My biggest weakness was forgetting formulas. The flashcards in this app are amazing! I can revise them anytime, anywhere, and",
    name: "Aditya",
    location: "Mumbai",
    image: "https://dev.questpix.com/assets/images/jee_landing/aaditya.jpg",
    bgColor: "bg-[#1b283d]",
  },
  {
    text: "My biggest weakness was forgetting formulas. The flashcards in this app are amazing! I can revise them anytime, anywhere, and",
    name: "Aditya",
    location: "Mumbai",
    image: "https://dev.questpix.com/assets/images/jee_landing/aaditya.jpg",
    bgColor: "bg-[#2fc18b]",
  },
  {
    text: "I found it hard to stay motivated during long study hours. The live classes of QuestPix are so good. The teachers are amazing, and",
    name: "Rohan",
    location: "Chennai",
    image: "https://dev.questpix.com/assets/images/jee_landing/kanishk.jpg",
    bgColor: "bg-[#1b283d]",
  },
    {
    text: "I found it hard to stay motivated during long study hours. The live classes of QuestPix are so good. The teachers are amazing, and",
    name: "Rohan",
    location: "Chennai",
    image: "https://dev.questpix.com/assets/images/jee_landing/kanishk.jpg",
    bgColor: "bg-[#2FC18B]",
  },
];


export default function Testimonials() {
  const scrollRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(350);

  useEffect(() => {
    // Update scroll amount based on screen width
    const updateScrollAmount = () => {
      if (window.innerWidth < 200) setScrollAmount(window.innerWidth - 40); // show one card
      else setScrollAmount(350); // default scroll
    };

    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);
    return () => window.removeEventListener('resize', updateScrollAmount);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const intervalTime = 2000; // ms

    const scroll = () => {
      if (!scrollContainer) return;
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scroll, intervalTime);
    return () => clearInterval(interval);
  }, [scrollAmount]);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="max-w-full lg:max-w-[1250px] mx-auto relative mb-20 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-[38px]  mb-12 font-bold text-center">See What Our
        <span className="text-[#2FC18B]"> Students  </span> Say
      </h2>

      {/* Arrows */}
      <button
        onClick={() => handleScroll('left')}
        className="absolute -left-5 sm:left-0 lg:-left-10 top-1/2 transform -translate-y-1/2 bg-[#0f1825] border-2 border-[#2FC18B] p-2 rounded-full z-10 h-[48px] w-[48px] cursor-pointer"
      >
        <ChevronLeft className="text-white relative left-1" />
      </button>

      <button
        onClick={() => handleScroll('right')}
        className="absolute -right-8 sm:right-0 lg:-right-10 top-1/2 transform -translate-y-1/2 bg-[#0f1825] border-2 border-[#2FC18B] p-2 rounded-full z-10 h-[48px] w-[48px] cursor-pointer"
      >
        <ChevronRight className="text-white relative -right-1" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {TestData.map((data, index) => {
          const isEven = index % 2 === 1;
          return <TestCard key={index} {...data} isEven={isEven} />;
        })}
      </div>
    </div>
  );
}

function TestCard({ text, name, location, image, isEven }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardBg = isEven ? 'bg-[#1b283d]' : 'bg-[#2fc18b]';
  const textColor = isEven ? 'text-white' : 'text-black';
  const readMoreColor = isEven ? 'text-[#2fc18b]' : 'text-white';
  const commaColor = isEven ? 'invert' : '';
  const nameColor = isEven ? 'text-white' : 'text-black';

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const shortText = text.slice(0, 100) + (text.length > 100 ? '...' : '');

  return (
    <div className={`p-8 mb-10 min-w-[200px] sm:min-w-[320px]  h-[450px]  sm:h-[350px] md:h-[350px] lg:h-[350px] rounded-xl flex flex-col gap-y-4 text-left ${cardBg}`}>
      {/* Opening comma */}
      <div className="flex items-start gap-2">
        <img src="https://dev.questpix.com/assets/images/icon/testo1.svg" className={`h-7 ${commaColor}`} />
      </div>

      {/* Testimonial Text */}
      <p className={`mb-4 leading-relaxed ${textColor}`}>
        {isExpanded ? text : shortText}
        {text.length > 80 && (
          <span className={`cursor-pointer font-semibold ml-1 ${readMoreColor}`} onClick={toggleReadMore}>
            {isExpanded ? ' Read Less...' : ' Read More...'}
          </span>
        )}
      </p>

      {/* Closing comma */}
      <div className="flex justify-end">
        <img src="https://dev.questpix.com/assets/images/icon/testo2.svg" className={`h-7 ${commaColor}`} />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="w-12 h-12 sm:w-15 sm:h-15 rounded-full object-cover" />
        <div>
          <p className={`font-extrabold text-[18px] sm:text-[20px] ${nameColor}`}>{name}.</p>
          <p className="text-[14px] sm:text-[16px] text-white">{location}</p>
        </div>
      </div>
    </div>
  );
}