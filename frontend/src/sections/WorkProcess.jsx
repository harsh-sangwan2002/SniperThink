import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", desc: "Understand your goals and pain points." },
  { title: "Strategy", desc: "Define a clear plan tailored to your needs." },
  { title: "Execution", desc: "Implement with precision and agility." },
  { title: "Optimization", desc: "Continuously refine for maximum ROI." },
  { title: "Support", desc: "Ongoing help to ensure long-term success." },
];

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const floatIcon = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const WorkProcess = () => {
  return (
    <section className="py-20 px-6 text-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl text-green-600 font-bold mb-4">Work Process</h2>
        <p className="text-white text-xl mb-12">
          Turning Ideas Into Scalable Success
        </p>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stepVariants}
              whileHover={{
                rotateX: -5,
                rotateY: 5,
                scale: 1.03,
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
              className="flex flex-col items-center text-center max-w-xs bg-teal-800 border border-gray-800 rounded-2xl hover:bg-green-900 px-10 py-10"
              style={{ perspective: 1000 }}
            >
              <motion.div
                variants={floatIcon}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="bg-green-800 text-white text-xl font-bold h-16 w-16 rounded-full flex items-center justify-center mb-4 shadow-lg cursor-pointer"
              >
                {i + 1}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
