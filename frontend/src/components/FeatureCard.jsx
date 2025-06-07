import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const FeatureCard = ({ Icon, title, description, index }) => {
    return (
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.25}
            scale={1.05}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="w-[280px] sm:w-[300px]"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                className="rounded-2xl p-6 bg-black relative overflow-hidden border-2 border-white/10 group hover:border-white transition-all duration-300"
            >
                {/* Sparkling border effect */}
                <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:border-[2px] before:border-white/30 before:animate-borderSparkle before:opacity-50 before:blur-sm" />

                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-green-700 mb-4">
                    <Icon className="text-white text-2xl" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/70 text-1xl">{description}</p>
            </motion.div>
        </Tilt>
    );
};

export default FeatureCard;
