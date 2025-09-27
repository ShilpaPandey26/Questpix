import React from "react";
import frustated from "../../../../assets/jee-images/courses/frustated.png";
import worry from "../../../../assets/jee-images/courses/worry.png";
import doubt from "../../../../assets/jee-images/courses/doubt.png";
import rotation from "../../../../assets/jee-images/courses/rotation.png";
import price from "../../../../assets/jee-images/courses/price.png";
import boring from "../../../../assets/jee-images/courses/boring.png";

import faculty from "../../../../assets/jee-images/courses/faculty.png";
import study from "../../../../assets/jee-images/courses/study.png";
import connection from "../../../../assets/jee-images/courses/connection.png";

export default function CrashCourseFeaturesSection() {
  const sections = [
    {
      title: "Frustrated with",
      highlight: "Tech Issues?",
      points: [
        {
          label: "Seamless Learning",
          text: "Our intuitive platform and dedicated tech support ensure a smooth and frustration-free learning experience. No more dropped connections or lost progress.",
        },
        {
          label: "Mobile-First Design",
          text: "Study anytime, anywhere, on any Android device. Our platform is optimized for mobile learning, so you can make the most of your time.",
        },
        {
          label: "Interactive & Engaging",
          text: "Interactive tools and features keep you motivated and involved. From live quizzes to collaborative study groups, we make learning fun and effective.",
        },
      ],
      image: frustated,
    },
    {
      title: "Worried About",
      highlight: "Missing Live Classes?",
      points: [
        {
          label: "Never Miss a Lesson",
          text: "All live classes are recorded and available for you to access anytime, anywhere. Catch up at your own speed and revisit concepts whenever you need to.",
        },
        {
          label: "Flexible Learning",
          text: "Life happens. Our program offers the flexibility to learn on your own schedule, so you can balance your studies with other commitments.",
        },
        {
          label: "Maximize Your Time",
          text: "Recorded sessions allow you to review concepts, clarify doubts, and stay on track, even if you can’t attend a live class.",
        },
      ],
      image: worry,
    },
    {
      title: "Concerned About",
      highlight: "Doubt Resolution?",
      points: [
        {
          label: "Instant Answers",
          text: "Get your questions answered instantly with our 24/7 doubt resolution feature by chatting with the AI. No more waiting for responses or feeling stuck.",
        },
        {
          label: "Collaborative Learning",
          text: "Connect with expert faculty and fellow students in a dedicated doubt forum. Discuss challenging problems, share insights, and learn together.",
        },
        {
          label: "Interactive & Engaging",
          text: "During each class, you can practice on the same concept and ask your doubts at the same time. You can also select the difficulty level of your practice.",
        },
      ],
      image: doubt,
    },
    {
      title: "Teacher Rotation",
      highlight: "a Concern?",
      points: [
        {
          label: "Consistent Mentorship",
          text: "Build a lasting relationship with your mentors. Our dedicated faculty team stays with you throughout your JEE journey, providing consistent support and guidance.",
        },
        {
          label: "Expert Faculty",
          text: "Learn from the best. Our faculty comprises experienced IITians and subject matter experts who are passionate about teaching.",
        },
        {
          label: "No More Disruptions",
          text: "Enjoy a consistent learning experience with our dedicated faculty team. No more adjusting to new teaching styles or personalities every few weeks.",
        },
      ],
      image: rotation,
    },
    {
      title: "Is the",
      highlight: "Price Holding You Back?",
      points: [
        {
          label: "Affordable & Accessible",
          text: "QuestPix offers competitive pricing and flexible payment options to make quality JEE prep accessible to everyone.",
        },
        {
          label: "Value for Your Investment",
          text: "Get the most out of your investment. Our comprehensive program includes everything you need to succeed in JEE.",
        },
        {
          label: "Transparent Fee Structure",
          text: "No hidden costs or surprises. Our fee structure is transparent and straightforward, so you know exactly what you’re paying for.",
        },
      ],
      image: price,
    },
    {
      title: "Afraid of",
      highlight: "Boring Classes?",
      points: [
        {
          label: "Engaging & Effective",
          text: "Say goodbye to boring lectures. Our classes are designed to be interactive, engaging, and packed with valuable information.",
        },
        {
          label: "Structured for Success",
          text: "Our curriculum is carefully structured to ensure you cover all the essential topics and concepts.",
        },
        {
          label: "Master Your Time",
          text: "Learn how to manage your time effectively with our built-in time management and performance analysis tools.",
        },
      ],
      image: boring,
    },

   {
    title: "Doubtful About",
    highlight: "Faculty Quality?",
    points: [
      {
        label: "Affordable & Accessible",
        text: "QuestPix offers competitive pricing and flexible payment options to make quality JEE prep accessible to everyone.",
      },
      {
        label: "Value for Your Investment",
        text: "Get the most out of your investment. Our comprehensive program includes everything you need to succeed in JEE.",
      },
      {
        label: "Transparent Fee Structure",
        text: "No hidden costs or surprises. Our fee structure is transparent and straightforward, so you know exactly what you're paying for.",
      },
    ],
    image: faculty, 
  },
  {
    title: "What If the",
    highlight: "Study Material Isn't Enough?",
    points: [
      {
        label: "Extensive Resources",
        text: "We provide extensive study material, including 1 Lakh+ practice problems, class tests, assignments, DPPs, and many additional exercises.",
      },
      {
        label: "Up-to-Date Content",
        text: "Our study material is regularly updated to align with the latest JEE syllabus and exam patterns.",
      },
      {
        label: "Personalized Mentorship",
        text: "We offer personalized mentorship and study plans to ensure you have the resources you need to succeed.",
      },
    ],
    image: study, 
  },
  {
    title: "Don't Have a",
    highlight: "Good Internet Connection?",
    points: [
      {
        label: "Downloadable Content",
        text: "Download pre-recorded lectures and study material for offline access. Study anytime, anywhere, even without an internet connection.",
      },
      {
        label: "Flexible Learning",
        text: "Learn at your own pace and catch up on missed sessions whenever you have a stable connection.",
      },
      {
        label: "Dedicated Support",
        text: "Our support team is always available to answer your questions and guide you through any challenges you may face.",
      },
    ],
    image: connection, 
  },
];;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl sm:text-4xl text-center font-bold">
        QuestPix Is Designed To Be{" "}
        <span className="text-[#2FC18B]">Different</span>
      </h2>
      <p className="text-center mt-6 pb-20  mx-auto">
        Choosing the right online JEE coaching can be tough. Understand how
        we've designed our program to address the common pitfalls of online
        coaching and provide you with the tools and support you need to thrive.
      </p>

      <div className="space-y-12 sm:space-y-0">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 ${
              idx % 2 === 0
                ? ""
                : "lg:flex-row-reverse bg-[#1b2a3f] rounded-xl p-2 "
            }`}
          >
            {/* Text */}
            <div className="lg:w-1/2 space-y-5 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-bold">
                {sec.title}{" "}
                <span className="text-[#2FC18B]">{sec.highlight}</span>
              </h2>
              <ul className="list-disc   space-y-3  text-sm  text-left ">
                {sec.points.map((point, i) => (
                  <li key={i} className="break-words">
                    <span className="text-white font-semibold">
                      {point.label}:
                    </span>{" "}
                    <span className="text-[#9EBDEF]">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={sec.image}
                alt="feature"
                className="rounded-xl max-h-[450px]  w-full max-w-md object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
