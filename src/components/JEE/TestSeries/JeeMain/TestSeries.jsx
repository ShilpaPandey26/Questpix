import React, { useRef, useState } from "react";
import { Star, User } from "lucide-react";
import maxresdefault from "../../../../assets/jee-images/TestSeries/maxresdefault.jpg"


const advancedSeries = [
    {
        title: "Adv. Premium Test Series",
        features: [
            "> 11 Full Syllabus + 100 Chapter-wise Mock Tests.",
            "> Detailed Solutions & Performance Analysis.",
            "> Unlimited Re-Attempts + Past Years' Papers.",
            "> Unlimited Custom Tests with 1 Lakh+ Questions.",
            "200 Topics Covered",
            "4000 Questions",
        ],
        students: "1371+ Enrolled",
        rating: "4.9/5",
        oldPrice: "Rs.6000.00",
        price: "Rs.1799.00",
    },
    {
        title: "Adv. Plus Test Series",
        features: [
            "> 11 Full Syllabus Tests for Complete Preparation.",
            "> Detailed Solutions & Performance Analysis.",
            "> Unlimited Re-Attempts + Past Years' Papers.",
            "> Unlimited Custom Tests with 1 Lakh+ Questions.",
            "200 Topics Covered",
            "4000 Questions",
        ],
        students: "1123+ Enrolled",
        rating: "4.9/5",
        oldPrice: "Rs.5000.00",
        price: "Rs.1499.00",
    },
];

const mainSeries = [
    {
        title: "Main Basic Test Series",
        features: [
            "> 20 JEE Main Full Syllabus Tests for Focused Practice.",
            "> Unlimited Attempts at Past JEE Main Papers.",
            "> Unlimited Custom Tests with 1 Lakh+ Questions.",
            "> Most Affordable JEE Main Test Series Available.",
            "200 Topics Covered",
            "3000 Questions",
        ],
        students: "4000+ Enrolled",
        rating: "4.8/5",
        oldPrice: "Rs.1798.00",
        price: "Rs.899.00",
    },
    {
        title: "Main Standard Test Series",
        features: [
            "> 20 JEE Main Full Syllabus Tests for Focused Practice.",
            "> 6 JEE Main Part Tests To Master All Topics.",
            "> Chapter-Wise JEE Main Tests for PCM + PYQs.",
            "> Unlimited Custom Tests with 1 Lakh+ Questions.",
            "200 Topics Covered",
            "3500 Questions",
        ],
        students: "2000+ Enrolled",
        rating: "4.8/5",
        oldPrice: "Rs.3500.00",
        price: "Rs.1299.00",
    },
    {
        title: "Main Plus Test Series",
        features: [
            "> 20 JEE Main FSTs + 5 JEE Advanced FSTs.",
            "> 6 JEE Main Part Tests + 6 JEE Advanced Part Tests.",
            "> Chapter-Wise JEE Main Tests for PCM + PYQs.",
            "> Unlimited Custom Tests with 1 Lakh+ Questions.",
            "200 Topics Covered",
            "3000 Questions",
        ],
        students: "2000+ Enrolled",
        rating: "4.8/5",
        oldPrice: "Rs.3800.00",
        price: "Rs.1499.00",
    },
    {
        title: "Main Premium Test Series",
        features: [
            "> 40 JEE Main FSTs + 5 JEE Advanced FSTs.",
            "> 6 JEE Main Part Tests + 6 JEE Advanced Part Tests.",
            "> Chapter-Wise JEE Main Tests for PCM + PYQs.",
            "> Unlimited Custom Tests with 1 Lakh+ Questions.",
            "200 Topics Covered",
            "4000 Questions",
        ],
        students: "2000+ Enrolled",
        rating: "4.9/5",
        oldPrice: "Rs.5000.00",
        price: "Rs.1799.00",
    },
];

const TestSeriesCard = ({ series }) => (
    <div className="bg-[#1f2f47]  rounded-2xl  pt-6 shadow-lg hover:shadow-[#1f2f47] transition flex flex-col justify-between">
        <div className="px-6">
            <h2 className="text-2xl font-semibold mb-4">{series.title}</h2>
            <ul className="text-[#9ebdef] text-sm space-y-2 mb-4">
                {series.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                ))}
            </ul>
            <p className="text-[#2fc18b] text-sm cursor-pointer">Know More &gt;</p>
        </div>

        <div className="flex items-center justify-between">
            <div className="px-6 w-[60%]">
                <div className="flex items-center text-[#9ebdef] gap-3 mb-4">
                    <div className="flex items-center gap-2">
                        <Star size={20} className="text-[#9ebdef] fill-[#9ebdef]" />
                        <p className="font-semibold">{series.rating}</p>
                    </div>

                    <div className="flex items-center gap-2 ">
                        <User size={30} className="text-[#9ebdef]" />
                        <p className="text-sm">{series.students}</p>
                    </div>
                </div>
                <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg mb-3">
                    Enroll Now
                </button>
                <div className="text-center text-lg border-1 border-[#2fc18b] rounded-lg  bg-[#2fc18b]">
                    <span className="line-through text-gray-500">{series.oldPrice}</span>
                    <p className="text-white font-bold">For Just {series.price}</p>
                </div>
            </div>

            <div className="w-[40%]">
                <img
                    src="https://dev.questpix.com/assets/images/pramotion/vijay.png"
                    alt="Instructor"
                    className=" w-96 "
                />
            </div>
        </div>

    </div>
);

export default function TestSeries  () {

    const [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setPlayVideo(true);
        setTimeout(() => {
            videoRef.current?.play();
        }, 100);
    };


    return (
        <div className="container text-white pt-14">
           
            <div className="text-center py-12 px-4">
                <h1 className="text-4xl  font-bold">
                    Questpix Top Rated <span className="text-[#2fc18b]">Test Series</span>
                </h1>
                <p className="mt-4 text-[#9ebdef]">
                    Our Test Series is an excellent way to excel in your JEE Main Preparation
                    <br />
                    <span className="text-sm text-[#9ebdef]">
                        (Curated by top industry experts from Kota)
                    </span>
                </p>
            </div>

           
            <section className="max-w-4xl mx-auto px-4 mb-10">
                {/* <h2 className="text-3xl font-semibold mb-8 text-center">Advanced Series</h2> */}
                <div className="grid md:grid-cols-2 gap-8">
                    {advancedSeries.map((series, i) => (
                        <TestSeriesCard key={i} series={series} />
                    ))}
                </div>
            </section>

          
            <section className="max-w-4xl mx-auto px-4 mb-10">
                {/* <h2 className="text-3xl font-semibold mb-8 text-center">Main Test Series</h2> */}
                <div className="grid md:grid-cols-2 gap-8">
                    {mainSeries.map((series, i) => (
                        <TestSeriesCard key={i} series={series} />
                    ))}
                </div>
            </section>

            {/* Video */}
           <div className=" w-full flex  flex-col justify-center items-center">
                <h2 className="text-2xl sm:text-4xl font-extrabold mb-10 mt-10 text-center">Why Test Series is <span className="text-[#2fc18b]">Important?</span></h2>
                {!playVideo ? (
                    <div className="cursor-pointer" onClick={handlePlay}>
                        <img
                            src={maxresdefault}
                            alt="Video Thumbnail"
                            className="w-full h-auto max-w-[600px] object-cover rounded-lg shadow-lg"
                        />
                    </div>
                ) : (
                    <video
                        className="w-full h-auto max-w-[600px] rounded-lg shadow-lg"
                        ref={videoRef}
                        controls
                    >
                        <source
                            src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/Partnersdetails.mp4"
                            type="video/mp4"
                        />

                    </video>
                )}
            </div>
        </div>
    );
};


