const FeatureCards = () => (
  <div className="w-full flex justify-center items-center px-4 py-16">
    <div className="bg-[#111] rounded-xl p-10 flex flex-col md:flex-row items-center justify-between max-w-5xl w-full gap-6">

      {/* Left Content */}
      <div className="flex-1">
        <div className="h-12 w-12 bg-green-400 rounded-full flex items-center justify-center mb-4">
          <img src="/images/time.png" alt="icon" className="h-6 w-6" />
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
          Ready to get Started?
        </h1>
        <p className="text-gray-400 text-xl max-w-lg">
          Transform your business with data-driven insights. Schedule a demo to see how SniperThink can help you achieve your goals.
        </p>
      </div>

      {/* Right Box */}
      <a href="#appointment" className="bg-pink-600 rounded-lg p-6 shadow-lg cursor-pointer hover:scale-105 hover:bg-pink-800 transition-transform duration-300">
        <a className="text-white font-semibold text-lg">Schedule Demo</a>
      </a>

    </div>
  </div>
);

export default FeatureCards;
