const demos = [
    {
        title: "Carbon Tracking Dashboard",
        image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/EID-Dashboard-Jan-2023-800x450px?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&qlt=100&fit=constrain",
        link: "/demo/carbon-tracking",
    },
    {
        title: "Energy Optimization Tool",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDSOr8T_YAnZSfvZfn1xVvNNG9NqS2dWWrA&s",
        link: "/demo/energy-optimization",
    },
    {
        title: "Sustainability Report Viewer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRangLZH-Lta6I1pYSrSdxIeBJkNmXXEBwnzA&s",
        link: "/demo/report-viewer",
    },
    {
        title: "Real-time Emissions Monitor",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_T9kvExqCTUr7qemzvP7QJdxePq0IWCfhCQ&s",
        link: "/demo/emissions-monitor",
    },
    {
        title: "Smart Recommendations System",
        image: "https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2023/04/02020319/recommendation-system-Banner.png",
        link: "/demo/recommendations",
    },
];

const DemoSection = () => {
    return (
        <div className="w-full flex justify-center items-start px-4 py-16 mt-10">
            <section className="bg-teal-800 rounded-xl p-10 max-w-7xl w-full">
                <h2 className="text-4xl font-bold text-white text-center mb-10">
                    Explore Our Demos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {demos.map((demo, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={demo.image}
                                alt={demo.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-lg font-semibold mb-2 text-center px-2">
                                    {demo.title}
                                </h3>
                                <a
                                    href={demo.link}
                                    target="_blank"
                                    className="bg-purple-800 hover:bg-purple-900 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
                                >
                                    View Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DemoSection;
