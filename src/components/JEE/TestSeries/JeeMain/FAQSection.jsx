import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const faqs = [
  {
    question: "What if I'm struggling with a particular topic? How can QuestPix help me focus on that?",
    answer:
      "QuestPix lets you create custom practice sessions. You can choose to practice only the questions from the topics you're finding difficult. This helps you get better faster by focusing your energy where it's needed most.",
  },
  {
    question: "How does QuestPix make sure the tests are actually like the real JEE Main?",
    answer:
      "Our team of 20+ experienced faculties studies the past JEE Main papers very carefully. They use this information to create tests that match the real exam in difficulty, question types, and even the way the questions are worded.",
  },

  {
    question: "How does QuestPix help me improve my speed during the exam?",
    answer:
      " Every test on QuestPix has a timer, just like the real JEE Main. After each test, we show you exactly how long you spent on each question. This helps you see where you're taking too much time and practice getting faster.",
  },
  {
    question: "Does QuestPix only give me a score, or does it tell me more about how I did?",
    answer:
      "We give you way more than just a score. You'll get detailed reports that show your overall score, your performance in each subject and topic, how long you spent on each question, and how your performance compares to other students. This helps you pinpoint your strengths and weaknesses and create a targeted study plan.",
  },

  {
    question: "What subjects are covered in the QuestPix test series?",
    answer:
      "We cover all three main subjects: Physics, Chemistry, and Mathematics, just like in the actual JEE Main exam.",
  },
  {
    question: "Is QuestPix suitable for students who are just starting their JEE Main preparation?’ work?",
    answer:
      "Yes, QuestPix is designed to be helpful at all stages of preparation. The chapter-wise tests are great for building a strong foundation, while the part tests and full-length mocks are ideal for practicing and refining your exam strategy as you progress.",
  },
  {
    question: "If I have a technical problem with the website or a question about how something works, who can I contact?",
    answer:
      "We have a dedicated support team ready to help you. You can reach our team by WhatsApp or by calling on +91-9509842965.",
  },
  {
    question: "How secure is my data on QuestPix?",
    answer:
      " We take data security very seriously. We use industry-standard encryption and security measures to protect your personal information and test results.",
  },

  {
    question: "How often are new questions added to QuestPix?",
    answer:
      "We regularly update our test bank with new questions and full-length tests. This ensures you're always practicing with relevant and up-to-date material, reflecting the latest trends in the JEE Main exam.",

  },
  {
    question: "Can I access QuestPix from multiple devices?",
    answer:
      "Yes, you can access your QuestPix account from multiple devices, such as your laptop, desktop, tablet, or smartphone, as long as you have a stable internet connection.",

  },
  {
    question: "I've heard some test series use old, repeated questions. Does QuestPix do that?",
    answer:
      "Nope. We create brand-new questions for every test, based on the latest JEE Main pattern. You'll never see the same question twice, so you're always getting fresh practice.",
  },
  {
    question: "How is the difficulty level of the QuestPix tests determined?",
    answer:
      "Our team of experts carefully analyzes previous JEE Main papers and current syllabus trends to create tests that accurately reflect the exam's difficulty. We aim for a challenging yet realistic experience that prepares you for the actual exam.",

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
    <div>
      <div className="pb-20 text-white pt-20 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Got More Questions?
          <span className="text-[#2FC18B]">We've Got Answers.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div>{renderFAQ(col1, openCol1, setOpenCol1)}</div>
          <div>{renderFAQ(col2, openCol2, setOpenCol2)}</div>
        </div>
      </div>

      <div className="text-center pb-6">
        <h2 className="text-2xl sm:text-[38px] font-extrabold mb-3">Don't <span className="text-[#2FC18B]">Miss Out.</span></h2>
        <p className="mb-6">Enroll in the most accurate JEE Main test series today.</p>
        <a
          href="#"
          className="bg-[#2FC18B] font-semibold px-8 py-3 rounded-xl hover:bg-[#00c376] transition text-center"
        >
          Start Now        </a>
      </div>
    </div>
  );
}