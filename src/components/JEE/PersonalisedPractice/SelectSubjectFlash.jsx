import React, { useState } from "react";
import chem from "../../../assets/jee-images/featureGrid/chem.png";
import phy from "../../../assets/jee-images/featureGrid/phy.png";
import maths from "../../../assets/jee-images/featureGrid/maths.png";


export default function SelectSubjectFlash({ setCurrentStep, setSelectedSubject }) {

    const subjects = [
        { name: "CHEMISTRY", img: chem },
        { name: "PHYSICS", img: phy },
        { name: "MATHEMATICS", img: maths },
    ];

    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject.name);
        setCurrentStep(2);
    };

    return (
       <div className="flex flex-col items-center md:items-start px-2 pt-24 sm:pt-16 md:pt-0">
      <h3 className="text-2xl mt-5 mb-10 font-bold ">Select Subject</h3>
               

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        onClick={() => handleSubjectClick(subject)}
                        className="border border-dashed border-[rgb(72,201,241)] p-4  flex flex-col gap-5 items-center cursor-pointer 
              hover:border-solid hover:border-[rgb(89,221,184)] transition-all duration-300 w-[230px]   rounded-xl  mt-10"
                    >
                        <div className="h-20 w-20 sm:h-24 sm:w-24 bg-white rounded-full flex items-center justify-center -mt-10 sm:-mt-16 ">
                            <img src={subject.img} alt={subject.name} className="w-12 sm:w-16 object-contain" />
                        </div>
                        <p className="font-semibold text-[#ffffff96] text-lg text-center">{subject.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
