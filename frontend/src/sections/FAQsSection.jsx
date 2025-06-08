import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We offer tailored solutions including sustainability analysis, automation insights, and smart industry consulting.",
    },
    {
        question: "How can I get started?",
        answer: "Click the 'Contact Us' button below or fill out our form. Our team will reach out to you shortly.",
    },
    {
        question: "Do you work with startups or only large companies?",
        answer: "We collaborate with businesses of all sizes — from startups to enterprises.",
    },
    {
        question: "What industries do you specialize in?",
        answer: "Our expertise spans manufacturing, logistics, energy, and emerging tech sectors.",
    },
    {
        question: "Is there a trial or consultation available?",
        answer: "Yes, we offer free consultations to understand your needs before proposing solutions.",
    },
];

const FAQsSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
                    >
                        <button
                            onClick={() => toggleIndex(index)}
                            className="w-full text-left p-4 bg-black hover:bg-teal-700 flex justify-between items-center"
                        >
                            <span className="font-medium">{faq.question}</span>
                            <span className="text-xl color-black">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-white bg-teal-700">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
                <Link
                    to="#contact"
                    className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-teal-700 transition"
                >
                    Contact Us
                </Link>

                <Link
                    to="/faqs"
                    className="ml-4 inline-block text-teal-600 hover:underline font-medium"
                >
                    View All FAQs
                </Link>
            </div>
        </section>
    );
};

export default FAQsSection;
