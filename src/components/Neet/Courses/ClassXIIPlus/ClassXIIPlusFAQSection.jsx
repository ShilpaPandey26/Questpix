import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the NEET UG prep programs?",
    answer:
      "Our comprehensive programs are designed to cover 2 years of preparation for class 11th students, 1 year of preparation for class 12th and repeater students, and 2 months for the crash course",
  },
  
  {
    question: "What is the teaching methodology used in the program?",
    answer:
      "We use a mix of live interactive classes, pre-recorded lectures, personalized study plans, and regular assessments to ensure effective learning.",
  },
  {
    question: "What are the timings of the live classes?",
    answer: "Live class timings are flexible and designed to accommodate different schedules. You can find the detailed schedule on our website or app.",
  },
  {
    question: "Can I access the app on multiple devices?",
    answer: "Yes, you can access your QuestPix account and learning materials on multiple devices, including smartphones, tablets, and laptops",
  },
  {
    question: "Is there a batch size limit for live classes?",
    answer: "Yes, we maintain optimal batch sizes to ensure personalized attention and effective interaction between students and faculty.",
  },
  {
    question: "What if I face technical issues while using the app?",
    answer: "Our dedicated technical support team is available all the time from morning to evening to assist you with any technical difficulties.",
  },
  {
    question: "Can I switch between batches if needed?",
    answer: "Batch changes are subject to availability and can be discussed with our support team.",
  },
  {
    question: "Can I download the study material for offline access?",
    answer: "Yes, you can download pre-recorded lectures and some other study material for offline access.",
  },

   {
    question: "What kind of study material is provided in the program?",
    answer: "We provide comprehensive study material, including practice problems, previous year question papers, and other online resources.",
  },
  {
    question: "What kind of support do mentors provide?",
    answer: "Mentors provide academic guidance, motivational support, and personalized study plans to help you stay on track and achieve your goal.",
  },
  {
    question: "How often are mock tests conducted?",
    answer: "We conduct regular mock tests, including chapter-wise tests, full syllabus tests, and All India Test Series, to assess your progress and prepare you for the real exam.",
  },
  {
    question: "Can I contact the mentors anytime?",
    answer: "Mentors have designated hours for interaction, but you can always reach out through the app or email for assistance.",
  },
  {
    question: "Does the app provide personalized feedback on my performance?",
    answer: "Yes, the app tracks your progress, analyzes your performance in tests, and provides detailed reports to identify strengths and weaknesses.",
  },
  {
    question: "Is there a refund policy?",
    answer: "Yes, we have a transparent refund policy. You can find the details on our website or contact our support team.",
  },
  {
    question: "Are there any scholarships or discounts available?",
    answer: "We offer various discounts based on merit and other criteria. Check our website or app for details.",
  },
  {
    question: "How does the ‘AI-Powered Doubt Resolution’ work?",
    answer: "Simply ask your question to the AI, and receive step-by-step solutions and explanations to the same question or a similar one.",
  },
    {
    question: "What are the technical requirements for accessing the QuestPix app?",
    answer: "The app is compatible with all Android devices with a stable internet connection.",
  },
  {
    question: "Does the app provide study material for other competitive exams besides  NEET?",
    answer: "While our primary focus is  NEET, the skills and concepts you learn will be beneficial for other competitive exams like BITSAT, VITEEE, etc.",
  },
  {
    question: "What are the success stories of past QuestPix students?",
    answer: "You can find testimonials and success stories of our past students on our website and app.",
  },
  {
    question: "How can I get my doubts clarified outside of live classes?",
    answer: "You can use the Find Solutions with a Photo Click feature, post your doubts in the dedicated doubt discussion forum, or reach out to our mentors for personalized guidance",
  },
];

export default function ClassXIIPlusFAQSection() {
  // Split faqs into 2 columns
  const col1 = faqs.filter((_, i) => i % 2 === 0);
  const col2 = faqs.filter((_, i) => i % 2 !== 0);

  const [openCol1, setOpenCol1] = useState(null);
  const [openCol2, setOpenCol2] = useState(null);

  const renderFAQ = (items, openIndex, setOpenIndex) =>
    items.map((faq, index) => (
      <div
        key={index}
        className="border-b border-white pb-2 cursor-pointer"
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
      >
        <div className="flex justify-between items-center font-bold">
          <p className="font-semibold text-base p-[12px]">{faq.question}</p>
          {openIndex === index ? (
            <ChevronUp className="text-[#2FC18B]" />
          ) : (
            <ChevronDown className="text-[#2FC18B]" />
          )}
        </div>
        {openIndex === index && faq.answer && (
          <p className="mt-2 text-[15px] p-[12px]">{faq.answer}</p>
        )}
      </div>
    ));

  return (
    <div className="container  text-white pt-20 p-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        Got Questions? Get Them{" "}
      </h2>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
        {" "}
        <span className="text-[#2FC18B]">Answered</span> Here.
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div>{renderFAQ(col1, openCol1, setOpenCol1)}</div>
        <div>{renderFAQ(col2, openCol2, setOpenCol2)}</div>
      </div>
    </div>
  );
}
