import React, { useEffect, useState } from 'react';
import Img1 from '../../assets/jee-images/Jee_Carousel_1.jpg';
import Img2 from '../../assets/jee-images/Jee_Carousel_2.jpg';
import Img3 from '../../assets/jee-images/Jee_Carousel_3.jpg';


// Array of images
const images = [Img1, Img2, Img3];

export default function JeeCarousel () {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-change slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center mt-10  sm:mt-20 mb-10">
     <div className="w-[960px]  lg:h-[275px] flex flex-col items-center">

      <div className="overflow-hidden rounded-3xl relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="object-cover"
            />
          ))}
        </div>
      </div>

      {/* Dots Below */}
      <div className="pt-3 flex gap-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? "bg-green-500 scale-125" : "bg-white"
              }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

