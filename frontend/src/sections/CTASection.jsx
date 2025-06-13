const CTASection = () => {
    return (
        <div className="w-full flex justify-center items-start px-15 py-16">
            <section className="bg-gradient-to-br from-gray-500 to-gray-800 rounded-xl p-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-6">
                <img
                    src="https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg"
                    alt="Team"
                    className="w-full max-w-sm object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-white">
                        "Your journey to a better future starts here."
                    </h2>
                    <p className="text-lg ml-5 text-center md:text-left text-gray-400">
                        Let’s build something great together — our team is ready when you are.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CTASection;
