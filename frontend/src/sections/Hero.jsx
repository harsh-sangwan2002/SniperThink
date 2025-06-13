import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import AnimatedCounter from "../components/AnimatedCounter";
import { words } from "../constants";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    quote: "Innovative tech unlocks smarter, faster, and more efficient solutions daily.",
    headline: "Unlock Smart Solutions",
    buttonText: "Get Started",
    image: "/images/business.jpg",
  },
  {
    quote: "Streamline tasks, boost productivity, and optimize processes with smart automation.",
    headline: "Build for the Future",
    buttonText: "View Demo",
    image: "/images/automation.jpeg",
  },
  {
    quote: "Analytics empower decisions, driving strategic leadership with data-backed confidence.",
    headline: "Data-Driven Decisions",
    buttonText: "Learn More",
    image: "/images/analytics.jpeg",
  },
];

const Hero = () => {
  const sliderRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    gsap.to(".scroll-dot", {
      y: 24,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout flex flex-col md:flex-row justify-between items-center z-20 relative md:px-20 px-5 py-10">
        {/* LEFT */}
        <header className="flex flex-col justify-center md:w-1/2 w-full gap-7">
          <div className="hero-text">
            <h1>
              Transform
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                      <img
                        src={word.imgPath}
                        alt="icon"
                        className="xl:size-14 md:size-12 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1>
              into <span className="text-teal-600">Business Intelligence</span>
            </h1>
            <h1>that Deliver Results</h1>
          </div>

          <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
            Enterprise-grade analytics made accessible and affordable for all businesses.
          </p>
        </header>

        {/* RIGHT: Carousel */}
        <figure className="md:w-1/2 w-full flex justify-center items-center relative mt-10 md:mt-0">
          {/* LEFT ARROW BUTTON */}
          <button
            className="absolute left-4 md:left-[125px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-sm shadow"
            onClick={() => sliderRef.current.slickPrev()}
          >
            ←
          </button>

          {/* RIGHT ARROW BUTTON */}
          <button
            className="absolute right-4 md:right-[130px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-sm shadow"
            onClick={() => sliderRef.current.slickNext()}
          >
            →
          </button>

          {/* Carousel */}

          <div className="w-full max-w-md" id="floating-card">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-500 to-gray-800 rounded-2xl shadow-xl p-8 text-center"
                >
                  <div className="absolute inset-2 border-2 border-white/20 rounded-2xl pointer-events-none z-0" />
                  <div className="relative z-10 px-1 py-5">
                    <div className="p-3 rounded-full inline-block mb-4">
                      <img
                        src={slide.image}
                        alt={slide.headline}
                        className="w-40 h-40 object-cover rounded"
                      />
                    </div>
                    <h2 className="font-bold text-2xl mb-2 text-white">
                      {slide.headline}
                    </h2>
                    <p className="text-gray-100 mb-4">{slide.quote}</p>
                    <a
                      href="#contact"
                      className="bg-teal-600 hover:bg-teal-800 text-white px-6 py-2 rounded-full transition"
                    >
                      {slide.buttonText}
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Scroll Mouse */}
          <div className="absolute bottom-[-85px] flex flex-col items-center">
            <div className="scroll-mouse w-6 h-12 border-2 border-gray-400 rounded-full flex justify-start items-start relative overflow-hidden">
              <div className="scroll-dot w-1 h-2 bg-gray-400 rounded-full mt-1 ml-2 absolute" />
            </div>
            <p className="text-sm text-gray-400 mt-1">Scroll</p>
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
