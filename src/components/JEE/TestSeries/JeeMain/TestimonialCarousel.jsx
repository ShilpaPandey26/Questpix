import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: 1, src: "/Videos/Aditya-feed.mp4" },
  { id: 2, src: "/Videos/Ajay-feed.mp4" },
  { id: 3, src: "/Videos/Anshika-feed.mp4" },
  { id: 4, src: "/Videos/Smarth-feed.mp4" },
  { id: 5, src: "/Videos/Aditya-feed.mp4" },
  { id: 6, src: "/Videos/Ajay-feed.mp4" },
  { id: 7, src: "/Videos/Anshika-feed.mp4" },
  { id: 8, src: "/Videos/Smarth-feed.mp4" },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1); // mobile
      else if (window.innerWidth < 1024) setVisibleCount(2); // tablet
      else setVisibleCount(3); // desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrent((prev) =>
      prev >= videos.length - visibleCount ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? videos.length - visibleCount : prev - 1
    );
  };

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  return (
    <section className=" text-white py-16 px-4 text-center">
      <h2 className="text-2xl sm:text-[38px] font-bold mb-2">
        Witness The <span className="text-[#2FC18B]">Difference.</span>
      </h2>
      <p className="mb-10 text-gray-300">
        Hear From Those Who’ve{" "}
        <span className="text-[#2FC18B]">Experienced It.</span>
      </p>

      <div className="relative max-w-5xl mx-auto flex items-center justify-center">
        {/* Left button */}
        <button
          onClick={prev}
          className="absolute -left-20 z-10 p-3 rounded-full border border-[#2FC18B] hover:bg-[#2FC18B]/20 transition"
        >
          <ChevronLeft size={20} className="text-white font-extrabold" />
        </button>

        {/* Carousel track */}
        <div className="overflow-hidden w-full flex justify-center">
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`,
              width: `${(videos.length * 100) / visibleCount}%`,
            }}
          >
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="flex-shrink-0 bg-gray-800 rounded-2xl overflow-hidden shadow-lg mx-auto"
                style={{
                  flexBasis: `${100 / visibleCount}%`,
                  maxWidth: "320px",
                }}
              >
                <video
                  src={vid.src}
                  controls
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right button */}
        <button
          onClick={next}
          className="absolute -right-20 z-10 p-3 rounded-full border border-[#2FC18B] hover:bg-[#2FC18B]/20 transition"
        >
          <ChevronRight size={20} className="text-white font-extrabold" />
        </button>
      </div>
    </section>
  );
}
