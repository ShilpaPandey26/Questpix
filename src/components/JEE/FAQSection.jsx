import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const faqs = [
    {
        question: "Who are the faculty members?",
        answer:
            "Our faculty includes experienced educators with proven track records in JEE coaching, led by Vijay Sharma Sir, who has over 21 years of experience at top Kota institutes.",
    },
    {
        question: "Can I download lectures for offline access?",
        answer: "Yes, you can download pre-recorded lectures and access them later to study anytime, anywhere, even without an internet connection.",
    },
    {
        question: "Is this app suitable for all JEE aspirants?",
        answer: "Yes, our app caters to students of all levels, from beginners to advanced learners, as students can choose their own difficulty level while practicing in QuestPix."
    },
    {
        question: "How do the live classes work?",
        answer: "Live classes are conducted in virtual classrooms where you can interact with faculty in real-time, ask questions, participate in discussions, and engage in quizzes."
    },
    {
        question: "What features are included in the free trial?",
        answer: "The free trial gives you access to personalized practice tests, chapter-wise and year-wise PYQs, interactive flashcards, and a rank predictor tool."
    },
    {
        question: "What if I miss a live class?",
        answer: "All live class sessions are recorded and made available for you to review at your convenience in the next few days."
    },
    {
        question: "How does the ‘AI-Powered Doubt Resolution’ work?",
        answer: "Simply ask your question to the AI, and receive step-by-step solutions and explanations to the same question or a similar one.",
    },
    {
        question: "How can I get my doubts clarified?",
        answer: "You can ask questions during the live classes, use the ‘AI-Powered Doubt Resolution’ feature, or post your doubts in the doubt chat with teachers."

    },
    {
        question: "Can I access the app on multiple devices?",
        answer: "Yes, you can access your account and learning materials on smartphones, tablets, and laptops. However, the app is only workable in Android at the present and the iOS versions will be made available soon."
    },
    {
        question: "Does the app provide performance analytics?",
        answer: "Yes, the app tracks your progress, analyzes your performance in tests, and provides detailed reports to identify strengths and weaknesses."
    },
];

export default function FAQSection() {
  // Split faqs into 2 columns
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
          <p className="font-semibold text-base p-[12px]">{faq.question}</p>
          {openIndex === index ? (
            <ChevronUp className="text-[#2FC18B]" />
          ) : (
            <ChevronDown className="text-[#2FC18B]" />
          )}
        </div>
        {openIndex === index && faq.answer && (
          <p className="mt-2 text-base p-[12px]">{faq.answer}</p>
        )}
      </div>
    ));

  return (
    <div className="container pb-30 text-white pt-30 p-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        Answers To Your Most{" "}
        <span className="text-[#2FC18B]">Burning Questions.</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div>{renderFAQ(col1, openCol1, setOpenCol1)}</div>
        <div>{renderFAQ(col2, openCol2, setOpenCol2)}</div>
      </div>
    </div>
  );
}