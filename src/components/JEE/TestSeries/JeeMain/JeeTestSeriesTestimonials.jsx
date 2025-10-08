import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Conquer from "../../../../assets/jee-images/Conquer.png"
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

export default function JeeTestSeriesTestimonials() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const scrollAmount = 300; // pixels
        const intervalTime = 1000; // ms

        const scroll = () => {
            if (!scrollContainer) return;

            // If at end, scroll to start
            if (
                scrollContainer.scrollLeft + scrollContainer.clientWidth >=
                scrollContainer.scrollWidth
            ) {
                scrollContainer.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                scrollContainer.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth",
                });
            }
        };

        const interval = setInterval(scroll, intervalTime);

        return () => clearInterval(interval);
    }, []);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -200 : 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            <div className="container px-4 py-12   flex flex-col  items-center justify-between gap-10">
                <div className=" w-full  sm:max-w-[950px] mx-auto relative sm:pt-15">
                    <h2 className="text-xl sm:text-[38px]  font-extrabold text-center mb-4">
                        More <span className="text-[#2FC18B]"> Proof  </span> Is Here.
                    </h2>
                    <p className="text-lg text-center mb-14">Many successful students, One common thing: Questpix</p>

                    {/* Arrows */}
                    <button
                        onClick={() => handleScroll("left")}
                        className="absolute -left-5  top-[350px] transform -translate-y-1/2 -translate-x-full bg-[#0f1825] border-2 border-[#2FC18B] p-2 rounded-full z-[5] h-[48px] w-[48px] cursor-pointer"
                    >
                        <ChevronLeft className="text-white relative left-1" />
                    </button>

                    <button
                        onClick={() => handleScroll("right")}
                        className="absolute -right-5 top-[350px] transform -translate-y-1/2 translate-x-full bg-[#0f1825] border-2 border-[#2FC18B] p-2 rounded-full z-[5] h-[48px] w-[48px] cursor-pointer"
                    >
                        <ChevronRight className="text-white relative -right-1 " />
                    </button>

                    {/* Scrollable Cards */}
                    <div
                        ref={scrollRef}
                        className="flex gap-6   overflow-x-auto no-scrollbar scroll-smooth"
                    >
                        {TestData.map((data, index) => {
                            const isEven = index % 2 === 1;

                            return <TestCard key={index} {...data} isEven={isEven} />;
                        })}
                    </div>
                </div>
            </div>

            <div>
                <ChooseYourPlan />
            </div>
        </div>
    );
}

function TestCard({ text, name, location, image, isEven }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const cardBg = isEven ? "bg-[#1b283d]" : "bg-[#2fc18b]";
    const textColor = isEven ? "text-white" : "text-black";
    const readMoreColor = isEven ? "text-[#2fc18b]" : "text-white";
    const commaColor = isEven ? "invert" : "";
    const nameColor = isEven ? "text-white" : "text-black";

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const shortText = text.slice(0, 100) + (text.length > 100 ? "..." : "");

    return (
        <div
            className={`p-8 mb-10  min-w-[300px] h-[300px] rounded-xl flex flex-col text-left ${cardBg}`}
        >
            {/* Opening comma */}
            <div className="flex items-start gap-2">
                <img
                    src="https://dev.questpix.com/assets/images/icon/testo1.svg"
                    className={`h-7 ${commaColor}`}
                />
            </div>
            {/* Testimonial Text */}
            <p className={`mb-4 leading-relaxed ${textColor}`}>
                {isExpanded ? text : shortText}
                {text.length > 80 && (
                    <span
                        className={`cursor-pointer font-semibold ml-1 ${readMoreColor}`}
                        onClick={toggleReadMore}
                    >
                        {isExpanded ? " Read Less..." : " Read More..."}
                    </span>
                )}
            </p>

            {/* Closing comma */}
            <div className="flex justify-end">
                <img
                    src="https://dev.questpix.com/assets/images/icon/testo2.svg"
                    className={`h-7 ${commaColor}`}
                />
            </div>
            {/* User Info */}
            <div className="flex items-center gap-3 ">
                <img
                    src={image}
                    alt={name}
                    className="w-15 h-15 rounded-full object-cover"
                />
                <div>
                    <p className={`font-extrabold text-[20px] ${nameColor}`}>{name}.</p>
                    <p className="text-[16px] text-white">{location}</p>
                </div>
            </div>
        </div>
    );
}


function ChooseYourPlan() {
    return (
        <div className="bg-[#1b283d] flex flex-col lg:flex-row justify-center items-center p-5 sm:p-10">
            <div className="flex flex-col gap-4 w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-extrabold">Don't Just Prepare. <span className="text-[#2FC18B]">Conquer.</span></h2>
                <p className="text-[#9EBDEF] mb-6">Experience the most effective and realistic JEE Main test series by QuestPix.</p>
                <div className="w-full lg:w-1/2 mb-6 flex justify-center lg:justify-start">
                    <a
                        href="#"                       
                        className="bg-[#2FC18B] font-semibold px-8 py-3 rounded-xl hover:bg-[#00c376] transition text-center"
                    >
                        Choose Your Plan
                    </a>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <img src={Conquer} />
            </div>

        </div>
    )
}
