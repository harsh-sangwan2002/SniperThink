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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    if (inView) {
      // Animate cards one by one with staggered timing
      features.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, index * 150); // 150ms delay between each card
      });
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative mt-5 py-16 md:py-24 flex flex-col items-center">
      {/* Center Logo Above */}
      <motion.div
        className="px-6 py-3 shadow-lg z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/logo.jpeg"
          alt="SniperThink"
          className="w-80 h-80 object-contain rounded-[65px]"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-5xl text-teal-500 font-bold mt-3 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Comprehensive Solutions
      </motion.h2>

      <motion.p
        className="text-gray-400 text-center mt-5 mb-10 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        We provide scalable solutions across various domains to help your business grow
      </motion.p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 z-0">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.8
            }}
            animate={
              visibleCards.includes(index)
                ? {
                  opacity: 1,
                  y: 0,
                  scale: 1
                }
                : {}
            }
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            className="group cursor-pointer relative card card-border p-10 bg-gray-800 text-white rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Animated Icon */}
            <motion.div
              className="mb-4"
              animate={
                visibleCards.includes(index)
                  ? { x: [-2, 2, -2], y: [-2, 2, -2] }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5 // Start floating animation after card appears
              }}
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