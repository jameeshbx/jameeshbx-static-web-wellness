import React from "react";
import { ABOUT_SECTION_DATA } from "../data/about";
import Image from "next/image";

const AboutSection = () => {
  const { image, text } = ABOUT_SECTION_DATA;

  return (
    <section className="bg-positive py-12 sm:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <div className="w-full lg:w-1/2 relative z-20">
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full max-w-md mx-auto lg:max-w-none"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-negative p-8 sm:p-12 text-white relative z-10 mt-8 lg:mt-0 lg:-ml-12">
            <p className="font-manrope text-background uppercase tracking-widest text-base leading-6 sm:text-base mb-4">
              {text.heading}
            </p>
            <h2 className="font-playfair text-background text-2xl sm:text-4xl md:text-4xl font-bold leading-tight mb-6">
              {text.title}
            </h2>
            <p className="font-manrope text-background text-lg sm:text-sm leading-8 tracking-widest">
              {text.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
