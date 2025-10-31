import React from "react";

export default function SelectTopicFlash({ selectedSubject, setCurrentStep, setSelectedTopic }) {
    // console.log("topic",selectedSubject);
    const subjectTopics = {
        chemistry: [
            "ORGANIC CHEMISTRY",
            "INORGANIC CHEMISTRY",
            "PHYSICAL CHEMISTRY",
        ],
        physics: [
            "UNIT & DIMENSION, CALCULUS BASIC MATHS & VECTORS",
            "MECHANICS",
            "GRAVITATION",
            "SHM AND WAVES",
            "PROPERTIES OF SOLIDS AND FLUIDS",
            "THERMAL PHYSICS",
            "ELECTROMAGNETISM",
            "ERROR AND PRACTICAL PHYSICS",
            "MODERN PHYSICS",
            "SEMICONDUCTORS",
            "OPTICS",
        ],
        mathematics: ["ALGEBRA", "CALCULUS", "CO-ORDINATE GEOMETRY", "TRIGONOMETRY"],
    };

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic)
        setCurrentStep(3);

    };
    const topics = subjectTopics[selectedSubject?.toLowerCase()] || [];

    return (
        <div className="flex flex-col items-center md:items-start px-2 pt-24 sm:pt-16 md:pt-0">
            <h3 className="text-3xl lg:text-2xl mt-5 mb-10 font-bold">Select Topic</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-8 mr-14">
                {topics.map((topic, index) => (
                    <div
                        key={index}
                        onClick={() => handleTopicClick(topic)}
                        className="border border-dashed border-[rgb(72,201,241)] p-3 rounded-lg text-center text-[#ffffffb0] font-medium cursor-pointer 
          hover:border-solid hover:border-[rgb(89,221,184)] hover:text-white transition-all duration-300 w-[230px]  "
                    >
                        {topic}
                    </div>
                ))}
            </div>
        </div>
    );
}
