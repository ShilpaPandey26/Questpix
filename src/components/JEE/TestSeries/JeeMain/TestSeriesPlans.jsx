import React from "react";
import { Check, X } from "lucide-react";

export default function TestSeriesPlans() {
    const plans = [
        {
            title: <>QuestPix <span className="text-[#2FC18B]">Basic</span> Test Series:</>,
            features: [
                { text: "12 JEE Main Full Syllabus Tests + 3 JEE Adv. Full Tests", included: true },
                { text: "10 JEE Main Unit Tests", included: true },
                { text: "3 JEE Adv. Unit Tests", included: false },
                { text: "30 JEE Main Chapter-wise Tests", included: false },
                { text: "Unlimited Attempts on Past Papers", included: true },
                { text: "Unlimited Custom Tests", included: false },
                { text: "Detailed Performance Analytics", included: true },
                { text: "Created by Kota's Best Teachers, Based on Latest Pattern", included: true },
            ],
            oldPrice: "₹1798",
            newPrice: "₹899",
            discount: "50% Discount Already Applied. 39/100 Discount Slots Remaining.",
            buttonText: "Enroll Now",
        },
        {
            title: <>QuestPix <span className="text-[#2FC18B]">Standard</span> Test Series:</>,
            features: [
                { text: "12 JEE Main Full Syllabus Tests + 3 JEE Adv. Full Tests", included: true },
                { text: "10 JEE Main Unit Tests", included: true },
                { text: "3 JEE Adv. Unit Tests", included: true },
                { text: "30 JEE Main Chapter-wise Tests", included: false },
                { text: "Unlimited Attempts on Past Papers", included: true },
                { text: "Unlimited Custom Tests", included: false },
                { text: "Detailed Performance Analytics", included: true },
                { text: "Created by Kota's Best Teachers, Based on Latest Pattern", included: true },
            ],
            oldPrice: "₹2598",
            newPrice: "₹1299",
            discount: "50% Discount Already Applied. 78/100 Discount Slots Remaining.",
            buttonText: "Enroll Now",
        },
        {
            title: <>QuestPix <span className="text-[#2FC18B]"> Plus</span> Test Series:</>,
            features: [
                { text: "12 JEE Main Full Syllabus Tests + 3 JEE Adv. Full Tests", included: true },
                { text: "10 JEE Main Unit Tests", included: true },
                { text: "3 JEE Adv. Unit Tests", included: true },
                { text: "30 JEE Main Chapter-wise Tests", included: true },
                { text: "Unlimited Attempts on Past Papers", included: true },
                { text: "Unlimited Custom Tests for JEE Main", included: true },
                { text: "Detailed Performance Analytics", included: true },
                { text: "Created by Kota's Best Teachers, Based on Latest Pattern", included: true },
            ],
            oldPrice: "₹2998",
            newPrice: "₹1499",
            discount: "50% Discount Already Applied. 84/100 Discount Slots Remaining.",
            buttonText: "Enroll Now",
        },
        {
            title: <>QuestPix <span className="text-white">Premium</span> Test Series (Best Value)</>,
            features: [
                { text: "12 JEE Main Full Syllabus Tests + 3 JEE Adv. Full Tests", included: true },
                { text: "10 JEE Main Unit Tests", included: true },
                { text: "3 JEE Adv. Unit Tests", included: true },
                { text: "30 JEE Main Chapter-wise Tests", included: true },
                { text: "Unlimited Attempts on Past Papers", included: true },
                { text: "Unlimited Custom Tests for JEE Main & Adv.", included: true },
                { text: "Detailed Performance Analytics", included: true },
                { text: "Created by Kota's Best Teachers, Based on Latest Pattern", included: true },
            ],
            oldPrice: "₹5000",
            newPrice: "₹1799",
            discount: "50% Discount Already Applied. 89/100 Discount Slots Remaining.",
            buttonText: "Enroll Now",
            highlight: true,
        },
    ];

    return (
        <div className="text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border ${plan.highlight
                            ? "bg-[#2fc18b] text-black border-none"
                            : " border-[#2fc18b]"
                            } p-6 flex flex-col justify-between shadow-md`}
                    >
                        <div>
                            <h3
                                className={`text-xl font-extrabold mb-5 ${plan.highlight ? "text-black" : "text-white"
                                    }`}
                            >
                                {plan.title}
                            </h3>
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 text-[15px] mb-4 "
                                    >
                                        {feature.included ? (
                                            <Check
                                                size={20}
                                                className={`${plan.highlight ? "text-black" : "text-[#2fc18b]"
                                                    } mt-1 flex-shrink-0`}
                                            />
                                        ) : (
                                            <X
                                                size={20}
                                                className={`${plan.highlight ? "text-red-600" : "text-red-500"
                                                    } mt-1 flex-shrink-0`}
                                            />
                                        )}
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center">
                            <p
                                className={`line-through font-extrabold text-xl text-[#9EBDEF] ${plan.highlight && "text-gray-700"
                                    }`}
                            >
                                {plan.oldPrice}/-
                            </p>
                            <p className="text-3xl font-extrabold  mb-2">{plan.newPrice}/-</p>
                            <p
                                className={`text-sm mb-6 ${plan.highlight ? "text-black" : "text-white"
                                    }`}
                            >
                                {plan.discount}
                            </p>
                            <button
                                className={`w-full py-2 rounded-md cursor-pointer font-semibold ${plan.highlight
                                    ? "bg-white text-black hover:bg-gray-100"
                                    : "bg-[#2fc18b] text-black hover:bg-[#28a678]"
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
