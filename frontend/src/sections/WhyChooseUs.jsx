import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import Image from "next/image"; // optional if using Next.js
import sampleImage from "../../public/images/logo.jpeg"; // replace with your actual image path

const points = [
  "Tailored solutions for your business",
  "Built-in intelligence & automation",
  "Real-time analytics & reporting",
  "Dedicated support & scalability",
];

const cardHoverEffect = {
  whileHover: {
    rotateX: -4,
    rotateY: 4,
    scale: 1.02,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-5xl text-center text-white font-bold mb-10">Work Process</h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <motion.div
          className="flex-1 bg-gray-800 rounded-2xl p-10 shadow-xl"
          {...cardHoverEffect}
        >
          <h2 className="text-4xl font-bold mb-4 text-teal-500">Why Choose SniperThink?</h2>
          <p className="text-gray-300 text-lg mb-6">
            Empower your business with unmatched automation, insights, and speed.
          </p>
          <ul className="mb-8 space-y-3">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start text-white text-sm">
                <CheckCircleIcon className="text-white mr-2 mt-[2px]" />
                {point}
              </li>
            ))}
          </ul>
          <button className="bg-teal-800 hover:bg-teal-800 cursor-pointer transition px-6 py-3 rounded-lg text-white font-semibold shadow-md">
            Get Started Now
          </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 rounded-2xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={sampleImage}
            alt="Why Choose Us"
            className="object-cover"
            width={1000}
            height={1000}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
