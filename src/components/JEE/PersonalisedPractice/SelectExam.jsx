import React from "react";
import jeemain from "../../../assets/jee-images/jeemain.png";
import jeeadv from "../../../assets/jee-images/jeeadv.png";


export default function SelectExam() {
    return (
        <div className="flex flex-col items-center md:items-start px-2 pt-24 sm:pt-16 md:pt-0">
            <h3 className="text-3xl lg:text-2xl mt-5 mb-20 font-bold ">Select Exam</h3>
            <div className="w-[80%] lg:w-[50%] ">

                <div className="border-1  border-dashed border-[rgb(72,201,241)] p-3 flex flex-col gap-7 items-center cursor-pointer mb-20  hover:border-solid hover:border-[rgb(89,221,184)]">
                    <img src={jeeadv} className="w-24 bg-white rounded-[50%] relative -mt-16 " />
                    <p className="font-semibold text-[#ffffff96] text-lg lg:pb-3">JEE ADVANCED</p>
                </div>

                <div className="border-1 border-dashed border-[rgb(72,201,241)] p-3 flex flex-col gap-7 items-center cursor-pointer hover:border-solid hover:border-[rgb(89,221,184)] mb-6">
                    <img src={jeemain} className="w-32 bg-white rounded-[50%] relative -mt-16" />
                    <p className="font-semibold text-[#ffffff96] text-lg lg:pb-3">JEE MAIN</p>
                </div>
            </div>
        </div>
    );
}
