import { motion } from "framer-motion";

const services = [
    {
        title: "Website & Web App Development",
        desc: "We craft lightning-fast websites and progressive web apps tailored to maximize lead generation.",
        icon: "🌐",
    },
    {
        title: "Custom CRM Solutions",
        desc: "End-to-end CRM platforms with pipeline tracking, client lifecycle automation, and real-time analytics.",
        icon: "💼",
    },
    {
        title: "AI-Powered Business Automation",
        desc: "Automate internal workflows, client onboarding, and report generation with intelligent AI agents.",
        icon: "🤖",
    },
    {
        title: "Document Intelligence Systems",
        desc: "Turn unstructured data into structured, actionable insights using NLP + OCR + LLM technology.",
        icon: "📄",
    },
    {
        title: "Email Marketing Automation",
        desc: "Behavior-triggered email flows, follow-up sequences, and newsletters with CRM integration.",
        icon: "✉️",
    },
    {
        title: "E-Commerce Automation",
        desc: "Manage inventory, orders, vendors, and customer experience with AI-backed dashboards and APIs.",
        icon: "🛒",
    },
];

// Variants for animation
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-black text-white py-16 px-20"
            id="services"
        >
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white">
                    Our Services
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
                    Comprehensive automation solutions to help your business scale efficiently
                </p>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                variants={containerVariants}
            >
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        className="bg-gradient-to-br from-gray-500 to-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between transition-transform hover:scale-[1.02]"
                    >
                        <div>
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-100">{service.desc}</p>
                        </div>
                        <div className="mt-4 flex items-center text-sm font-medium cursor-pointer">
                            <span>Learn more</span>
                            <motion.span
                                className="ml-2 inline-block"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ repeat: Infinity, duration: 1.2 }}
                            >
                                →
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
