import React from "react";

export default function JeeMainPattern({ data }) {
  return (
    <div className="bg-[#0f172a] text-white shadow-lg overflow-x-auto text-[15px]">
      {/* Header (only for md and above) */}
      <div className="hidden sm:flex text-sm bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white">
        <div className="py-3 px-4 w-1/3">Particular</div>
        <div className="py-3 px-4 w-2/3">Details</div>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
        >
          {/* Particular */}
          <div className="px-4 py-3 sm:w-1/3 font-semibold">
            {/* Show label only on mobile */}
            <span className="sm:hidden font-bold block text-[#9EBDEF]">Particular:</span>
            {item.title}
          </div>

          {/* Details */}
          <div className="px-4 py-3 sm:w-2/3">
            <span className="sm:hidden font-bold block text-[#9EBDEF]">Details:</span>
            {item.details}
          </div>
        </div>
      ))}
    </div>
  );
}
