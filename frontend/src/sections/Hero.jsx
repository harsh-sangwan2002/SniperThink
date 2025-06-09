import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

import AutoModeIcon from "@mui/icons-material/AutoMode";
import StorageIcon from "@mui/icons-material/Storage";
import LayersIcon from "@mui/icons-material/Layers";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap.to("#floating-card", {
      y: -80,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(".scroll-dot", {
      y: 24,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });

    gsap.to(".bounce-icon", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      {/* Hero Layout */}
      <div className="hero-layout flex flex-col md:flex-row justify-between items-center z-20 relative md:px-20 px-5 py-10">
        {/* LEFT */}
        <header className="flex flex-col justify-center md:w-1/2 w-full gap-7">
          <div className="hero-text">
            <h1>
              Transform
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt="icon"
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>
              into <span className="text-teal-400">Business Intelligence</span>
            </h1>
            <h1>that Deliver Results</h1>
          </div>

          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Enterprise-grade analytics made accessible and affordable for all businesses.
          </p>

          <Button
            text="Explore More"
            className="md:w-80 md:h-16 w-60 h-12"
            id="counter"
          />
        </header>

        {/* RIGHT: Floating Card */}
        <figure className="md:w-1/2 w-full flex justify-center items-center relative mt-10 md:mt-0">
          <div
            id="floating-card"
            className="relative rounded-2xl bg-pink-800 shadow-xl p-15 max-w-sm text-center"
          >
            {/* Inner Border */}
            <div className="absolute inset-2 border-2 border-white/20 rounded-2xl pointer-events-none z-0" />

            <div className="relative z-10">
              <div className="bg-teal-600 p-3 rounded-full inline-block mb-4">
                <AutoModeIcon />
              </div>
              <h2 className="font-bold text-3xl mb-2 text-white">
                Intelligent Automation
              </h2>
              <p className="text-gray-100 mb-4">
                Streamline operations, reduce costs, and drive growth with our AI-powered solutions
              </p>
              <div className="flex justify-center gap-6 text-white text-3xl mt-4">
                <StorageIcon className="bounce-icon" />
                <LayersIcon className="bounce-icon" />
                <EmojiObjectsIcon className="bounce-icon" />
              </div>
            </div>
          </div>

          {/* Scroll Mouse Animation */}
          <div className="absolute bottom-[-70px] flex flex-col items-center">
            <div className="scroll-mouse w-6 h-12 border-2 border-pink-600 rounded-full flex justify-start items-start relative overflow-hidden">
              <div className="scroll-dot w-1 h-2 bg-pink-600 rounded-full mt-1 ml-2 absolute" />
            </div>
            <p className="text-sm text-pink-600 mt-1">Scroll</p>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
