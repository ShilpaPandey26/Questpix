import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import lastimg from "../../assets/SixToTen/lastimg.png"
const faqs = [
  {
    question: "What are the qualifications and experience of the Teacher?",
    answer:
      "Our teachers are highly qualified and experienced educators, many with a strong background in teaching at reputed institutions. They hold relevant degrees and possess a deep understanding of the Classes 6-10 curriculum. We also have educators with experience in the competitive academic environment of Kota.",
  },
  {
    question: "What kind of study material is provided?",
    answer:
      "Students get access to comprehensive e-books, well-structured notes, practice exercises, and assignments. We also provide access to previous year's question papers for effective exam preparation.",
  },
  {
    question:
      "What subjects are covered in the QuestPix Classes 6-10 courses?",
    answer:
      "We offer comprehensive courses covering all core subjects, including Mathematics, Science (Physics, Chemistry, Biology), Social Science (History, Civics, Geography, Economics), English, and Mental Ability for Classes 6 to 10, aligned with CBSE, ICSE, and State Boards",
  },
  {
    question: "How are the tests conducted, and how is performance tracked?",
    answer:
      "We conduct regular online tests and mock exams designed to assess student understanding and preparation. Students receive detailed performance reports with analytics, highlighting their strengths and areas for improvement.",
  },
  {
    question: "How do the live online classes work?",
    answer:
      "Our live classes are interactive sessions conducted in a virtual classroom environment. Students can see and hear the teacher, ask questions in real-time via chat or audio, participate in polls and quizzes, and engage in discussions with other students.",
  },
  {
    question: "Is there any personalized attention provided to students?",
    answer:
      "Yes, we believe in personalized learning. Our small batch sizes ensure that teachers can give individual attention to students, understand their learning needs, and provide tailored guidance. Our platform also offers custom practice based on individual performance.",
  },
  {
    question: "What if my child misses a live class?",
    answer:
      "Don't worry! All our live classes are recorded and made available to students so they can catch up on missed sessions or revisit concepts at their convenience.",
  },
  {
    question: "How can I enroll my child in QuestPix Classes 6-10?",
    answer:
      "Enrolling is easy! You can connect with us through a call directly or you can register for a callback request. Our counselors will connect with you and explain everything in detail.",
  },
  {
    question: "Can I access the app on multiple devices?",
    answer:
      "Yes, you can access your account and learning materials on smartphones, tablets, and laptops. However, the app is only workable in Android at the present and the iOS versions will be made available soon.",
  },
  {
    question: "How does the doubt-solving mechanism work?",
    answer:
      "We offer multiple ways to get your doubts cleared. You can use our instant photo click solution to get quick answers, or you can connect with teachers through our dedicated doubt chat feature during and after classes. We also conduct regular doubt-clearing sessions.",
  },
];

export default function SixFAQSection() {
  const col1 = faqs.filter((_, i) => i % 2 === 0);
  const col2 = faqs.filter((_, i) => i % 2 !== 0);

  const [openCol1, setOpenCol1] = useState(null);
  const [openCol2, setOpenCol2] = useState(null);

  const renderFAQ = (items, openIndex, setOpenIndex) =>
    items.map((faq, index) => (
      <div
        key={index}
        className="border-b border-gray-700 pb-2 cursor-pointer"
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[16px] p-2">{faq.question}</p>
          {openIndex === index ? (
            <ChevronUp className="text-black" />
          ) : (
            <ChevronDown className="text-black" />
          )}
        </div>
        {openIndex === index && faq.answer && (
          <p className="mt-2 text-[16px] p-2">{faq.answer}</p>
        )}
      </div>
    ));

  return (
    <div className="bg-[#2fc18b] text-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold pb-3">
          <span className="text-[#415D53]">Answers To Your </span>
          Most Burning Questions
        </h2>
        <p className="text-base sm:text-lg mx-auto">
          Our meticulously crafted curriculum, aligned with CBSE, ICSE, and State Boards, ensures a strong understanding of core
          concepts and prepares students for academic success.
        </p>
      </div>

      {/* FAQs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div>{renderFAQ(col1, openCol1, setOpenCol1)}</div>
        <div>{renderFAQ(col2, openCol2, setOpenCol2)}</div>
      </div>

      {/* Enroll Section */}
      <div className="mt-16 flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Enroll Now & Unlock Your Child's Full Potential
        </h2>
        <p className="mb-6 text-base sm:text-lg">
          Get access to expert faculty, interactive classes, and vast resources.
        </p>
        <div className="w-full max-w-[250px] bg-[#0f1825] text-white py-2 px-4 rounded-full mb-10">
          <a
            href="#"
            className="flex justify-center items-center gap-2 text-[16px] sm:text-[18px]"
          >
            Explore Courses <ArrowRight className="text-white" size={19} />
          </a>
        </div>

        {/* Bottom Image */}
        <div className="w-full max-w-[700px]">
          <img
            src={lastimg}
            alt="QuestPix Bottom"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
