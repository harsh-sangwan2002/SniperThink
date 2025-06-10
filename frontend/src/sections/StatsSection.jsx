import { useEffect, useState } from "react";
import { FaUsers, FaGlobe, FaBolt, FaChartLine, FaHandshake } from "react-icons/fa";

const stats = [
    { icon: <FaUsers size={36} className="text-teal-600" />, label: "Users", end: 1500 },
    { icon: <FaGlobe size={36} className="text-teal-600" />, label: "Countries Served", end: 35 },
    { icon: <FaBolt size={36} className="text-teal-600" />, label: "Energy Saved (MWh)", end: 1000 },
    { icon: <FaChartLine size={36} className="text-teal-600" />, label: "CO₂ Reduced (tons)", end: 980 },
    { icon: <FaHandshake size={36} className="text-teal-600" />, label: "Partners", end: 120 },
];

const AnimatedCounter = ({ end }) => {
    const [count, setCount] = useState(0);
    const duration = 1000;

    useEffect(() => {
        let start = 0;
        const stepTime = Math.max(duration / end, 2);
        const interval = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(interval);
        }, stepTime);
        return () => clearInterval(interval);
    }, [end]);

    return <span className="text-3xl font-bold">{count.toLocaleString()}</span>;
};

const StatsSection = () => {
    return (
        <div className="w-full flex justify-center items-start px-1 py-16 mt-10">
            <section className="bg-[#111] rounded-xl p-10 flex-row items-center justify-between max-w-7xl w-full gap-6">
                <h2 className="text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-purple-800 rounded-lg shadow p-6 flex flex-col items-center">
                            {stat.icon}
                            <AnimatedCounter end={stat.end} />
                            <p className="text-white mt-2 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section >
        </div >
    );
};

export default StatsSection;
