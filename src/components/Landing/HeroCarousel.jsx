import React, { useEffect, useState } from "react";
import IIT from "../../assets/Landing/IIT.jpg";
import Class6 from "../../assets/Landing/Class6.jpg";
import NEET from "../../assets/Landing/NEET.jpg";

const images = [IIT, Class6, NEET];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center w-full max-w-[488px]">
      {/* Image Wrapper */}
      <div className="w-full h-auto aspect-[488/275] overflow-hidden rounded-3xl relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "bg-green-500 scale-125" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
