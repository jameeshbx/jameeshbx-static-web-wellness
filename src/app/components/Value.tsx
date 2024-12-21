import React from "react";
import Image from "next/image";
import { valueSectionData } from "../data/about";

const ValueSection = () => {
  const { title, subtitle, values } = valueSectionData;

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-Manrope text-primary uppercase tracking-wide text-sm sm:text-base leading-6 tracking-widest mb-4">
          {subtitle}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair leading-tight sm:leading-10 tracking-tight text-center mb-8 sm:mb-12 md:mb-16">
          {title}
        </h2>

        <div className="space-y-8 max-w-xl mx-4 sm:mx-auto md:mx-20 lg:mx-40 xl:mx-80">
          {values.map((value, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                <div className="p-4 rounded-lg w-24 sm:w-32 h-24 sm:h-32 relative sm:-mt-5">
                  <Image
                    src={value.image.src}
                    alt={value.image.alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-playfair text-lg sm:text-xl font-bold leading-6 mb-2">
                    {value.title}
                  </h3>
                  <p className="font-Manrope text-grey leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </div>
              </div>
              {index < values.length - 1 && <hr className="border-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
