import {
  MonetizationOnOutlined,
  ShowChart,
  ForumOutlined,
  LayersOutlined,
  AssignmentIndOutlined,
  CalculateOutlined,
  PeopleAltOutlined,
  ViewQuiltOutlined,
  SecurityOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const features = [
  { title: "Billing & Subscription", icon: <MonetizationOnOutlined fontSize="large" /> },
  { title: "User Behavior Heatmaps", icon: <ShowChart fontSize="large" /> },
  { title: "AI Chatbots for B2B", icon: <ForumOutlined fontSize="large" /> },
  { title: "API-first Integration", icon: <LayersOutlined fontSize="large" /> },
  { title: "Customer Onboarding", icon: <AssignmentIndOutlined fontSize="large" /> },
  { title: "Dynamic Pricing Tools", icon: <CalculateOutlined fontSize="large" /> },
  { title: "HR Dashboards", icon: <PeopleAltOutlined fontSize="large" /> },
  { title: "SaaS Architecture", icon: <ViewQuiltOutlined fontSize="large" /> },
  { title: "Security & Compliance", icon: <SecurityOutlined fontSize="large" /> },
  { title: "Real-Time Analytics", icon: <TimelineOutlined fontSize="large" /> },
];

const LogoShowcase = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <section ref={ref} className="relative py-16 md:py-24 flex flex-col items-center">
      {/* Center Logo Above */}
      <div className="absolute -top-10 bg-teal-800 px-6 py-3 rounded-full shadow-lg z-10">
        <img
          src="/images/logo.jpeg"
          alt="SniperThink"
          className="w-28 h-auto object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-3 text-center">Scalable Verticals</h2>
      <p className="text-gray-500 text-center mb-10 max-w-xl">
        We provide scalable solutions across various domains to help your business grow
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 z-0">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="group cursor-pointer relative p-6 bg-teal-800 text-white rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Top-right hover border */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-teal-500 rounded-bl-lg scale-0 group-hover:scale-50 transition-transform duration-300" />

            {/* Animated Icon */}
            <motion.div
              className="mb-4"
              animate={{ x: [-2, 2, -2], y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {item.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-md font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LogoShowcase;
