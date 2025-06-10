import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide AI-powered sustainability tracking, energy optimization, and industry-specific automation solutions.",
    },
    {
        question: "How do I get started?",
        answer: "Click on 'Contact Us' to schedule a free consultation or fill out our inquiry form.",
    },
    {
        question: "Are your services scalable for startups?",
        answer: "Yes, our solutions are modular and work well with both startups and large enterprises.",
    },
    {
        question: "Do you offer custom plans?",
        answer: "Absolutely. We tailor every plan to your industry, goals, and technical requirements.",
    },
    {
        question: "Is my data safe with you?",
        answer: "Yes. We follow industry-standard encryption and comply with global data protection laws.",
    },
    {
        question: "Can I get a demo of your platform?",
        answer: "Yes, just reach out via our contact form and we’ll schedule a demo.",
    },
    {
        question: "What industries do you specialize in?",
        answer: "We focus on manufacturing, logistics, energy, smart cities, and more.",
    },
    {
        question: "Do you provide technical support?",
        answer: "Yes, we provide 24/7 customer and technical support with every plan.",
    },
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen px-4 py-16 max-w-5xl mx-auto">
            {/* Page Heading */}
            <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>
            <p className="text-center text-white mb-12 max-w-xl mx-auto">
                Can’t find what you’re looking for? Browse our most common questions below or reach out to our support team.
            </p>

            {/* FAQ Accordions */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-teal-700"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left p-5 flex justify-between items-center hover:bg-teal-400 transition"
                        >
                            <span className="font-medium text-lg">{faq.question}</span>
                            <span className="text-2xl text-white">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>
                        {openIndex === index && (
                            <div className="p-5 text-white border-t bg-teal-700">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16">
                <p className="text-lg font-semibold mb-4">Still have questions?</p>
                <Link
                    to="/"
                    className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full shadow hover:bg-teal-700 transition"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default FAQPage;
