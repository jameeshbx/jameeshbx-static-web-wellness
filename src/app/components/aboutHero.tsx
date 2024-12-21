import React from "react";
import { HERO_SECTION_DATA } from "../data/about";

const HeroSection = () => {
  const { backgroundImage, text } = HERO_SECTION_DATA;

  return (
    <section
      className="text-center py-12 sm:py-20 px-4"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
    >
      <p className="font-Manrope leading-6 tracking-widest text-sm sm:text-base text-pink-200 mb-4 decoration-slice">
        {text.subtitle}
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-10 tracking-tight font-playfair text-positive mb-6 sm:mb-8 max-w-2xl mx-auto">
        {text.title}
      </h1>
      <button className="bg-primary font-Manrope hover:bg-pink-400 w-full sm:w-44 h-12 sm:h-16 text-background px-4 py-2 text-sm leading-4 tracking-widest">
        {text.button}
      </button>
    </section>
  );
};

export default HeroSection;
