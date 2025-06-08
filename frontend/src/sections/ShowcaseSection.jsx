import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useRef } from "react";

const HeroCarousel = () => {
  const sliderRef = useRef(null);

  const slides = [
    {
      quote: "Empowering innovation through intelligent data.",
      headline: "Unlock Smart Solutions",
      buttonText: "Get Started",
      image: "/images/business.jpg",
    },
    {
      quote: "Automate and elevate your workflows.",
      headline: "Build for the Future",
      buttonText: "View Demo",
      image: "/images/automation.jpeg",
    },
    {
      quote: "Harness analytics to lead with confidence.",
      headline: "Data-Driven Decisions",
      buttonText: "Learn More",
      image: "/images/analytics.jpeg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000, // Play every 5 seconds
    pauseOnHover: false,
  };

  return (
    <div className="w-full bg-black text-white">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[90vh] w-[90vw] py-30 px-30">
            <img
              src={slide.image}
              alt={slide.headline}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-lg md:text-xl italic mb-4 text-teal-300">
                {slide.quote}
              </p>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {slide.headline}
              </h1>
              <a
                href="#contact"
                className="bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-full transition font-semibold"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
