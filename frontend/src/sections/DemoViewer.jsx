import { useParams } from "react-router-dom";

const demos = [
    {
        title: "Carbon Tracking Dashboard",
        image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EID-Dashboard-Jan-2023-800x450px",
        slug: "carbon-tracking",
        description: "Track and visualize carbon emissions in real time.",
    },
    {
        title: "Energy Optimization Tool",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDSOr8T_YAnZSfvZfn1xVvNNG9NqS2dWWrA&s",
        slug: "energy-optimization",
        description: "Optimize your energy usage with AI-driven insights.",
    },
    {
        title: "Sustainability Report Viewer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRangLZH-Lta6I1pYSrSdxIeBJkNmXXEBwnzA&s",
        slug: "report-viewer",
        description: "Visualize and interact with sustainability reports.",
    },
    {
        title: "Real-time Emissions Monitor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_T9kvExqCTUr7qemzvP7QJdxePq0IWCfhCQ&s",
        slug: "emissions-monitor",
        description: "Monitor emissions across regions in real time.",
    },
    {
        title: "Smart Recommendations System",
        image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/02020319/recommendation-system-Banner.png",
        slug: "recommendations",
        description: "Get smart insights and actionables with ML.",
    },
];

const DemoViewer = () => {
    const { id } = useParams(); // change to match your route param
    const demo = demos.find((demo) => demo.slug === id);

    if (!id) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
                <div className="text-center text-red-600 text-xl font-semibold">
                    Demo not found.
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
            <div className="max-w-xl w-full bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-64 object-cover"
                />
                <div className="p-8">
                    <h1 className="text-3xl text-center font-bold text-white mb-4">
                        {demo.title}
                    </h1>
                    <p className="text-white text-center text-lg leading-relaxed">
                        {demo.description}
                    </p>
                    {/* Add more content or an iframe, charts, etc. here if needed */}
                </div>
            </div>
        </div>
    );
};

export default DemoViewer;
