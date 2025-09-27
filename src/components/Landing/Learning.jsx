import React from 'react';
import landingclass1 from "../../assets/Landing/landingclass1.png";
import landingclass2 from "../../assets/Landing/landingclass2.png";
import landingclass3 from "../../assets/Landing/landingclass3.png";

const categories = [
  {
    title: 'JEE',
    image: landingclass1,
  },
  {
    title: 'NEET',
    image: landingclass2,
  },
  {
    title: 'Class 6–10',
    image: landingclass3,
  },
];

export default function Learning() {
  return (
    <div className="bg-[#0F1825] py-12 px-4 text-center pt-20 ">
      {/* Heading */}
      <h2 className="mb-5 text-3xl sm:text-3xl md:text-4xl font-bold text-white">
        Ready to <span className="text-[#2FC18B]">Transform Your Learning?</span>
      </h2>

      {/* Subheading */}
      <p className="mb-10 text-white">
        Choose the perfect path to your academic success:
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-8 bg-[#1b283d] rounded-2xl flex flex-col justify-between items-start text-left shadow-md relative h-[190px] cursor-pointer
              transform transition-transform duration-500 ease-in-out
              hover:scale-105 hover:-translate-y-2 z-0 hover:z-10"
          >
            <h3 className="text-white text-lg font-semibold">{cat.title}</h3>
            <a
              href="#"
              className="text-[#2fc18b] font-medium inline-flex items-center gap-1"
            >
              View →
            </a>

            <img
              src={cat.image}
              alt={cat.title}
              className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-28 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
