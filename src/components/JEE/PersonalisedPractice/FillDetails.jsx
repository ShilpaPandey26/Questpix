import React from 'react'

export default function FillDetails() {
  return (
    <div className="flex flex-col items-center md:items-start px-2 pt-24 sm:pt-16 md:pt-0">
      <h3 className="text-3xl lg:text-2xl mt-5 mb-10 font-bold text-white">
        Fill the details Below
      </h3>

      <form className="w-full max-w-sm text-white relative">
        <fieldset className="border border-white rounded-lg p-1 mb-8 ">
          <legend className="px-2 text-base font-semibold">
            Time Duration (minutes)
          </legend>
          <select className="w-full bg-[#253750] px-3  py-2 rounded-md focus:outline-none focus:border-[#2FC18B]">
            <option value=""></option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
          </select>
        </fieldset>

         <fieldset className="border border-white rounded-lg p-1 mb-8">
          <legend className="px-2 text-base font-semibold">
           Select no. of Question?
          </legend>
          <select className="w-full bg-[#253750] px-3  py-2 rounded-md focus:outline-none focus:border-[#2FC18B]">
            <option value=""></option>
            <option value="15">5</option>
            <option value="30">10</option>
            <option value="45">18</option>
            <option value="60">25</option>
          </select>
        </fieldset>

         <fieldset className="border border-white rounded-lg p-1 mb-6">
          <legend className="px-2 text-base font-semibold">
            Select Difficulty level?
          </legend>
          <select className="w-full bg-[#253750] px-3  py-2 rounded-md focus:outline-none focus:border-[#2FC18B]">
            <option value=""></option>
            <option value="15">Adaptive</option>
            <option value="30">Tough</option>
            <option value="45">Moderate</option>
            <option value="60">Easy</option>
          </select>
        </fieldset>




      </form>
    </div>
  )
}
