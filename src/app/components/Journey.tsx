import React from "react";
import { journeySectionData } from "../data/about";
import Image from "next/image";

export default function JourneySection() {
  const {
    title,
    subtitle,
    description,
    methodology,
    videoThumbnail,
    tickIcon,
  } = journeySectionData;

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl lg:ml-36">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="space-y-8 px-4">
            <div>
              <p className="font-manrope text-primary uppercase tracking-widest text-sm sm:text-base mb-4">
                {subtitle}
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-primarytext">
                {title}
              </h2>
              <p className="font-manrope text-primarytext text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-playfair text-xl font-bold">
                {methodology.heading}
              </h3>
              <div className="space-y-6">
                {methodology.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-1">
                      <Image
                        src={tickIcon}
                        alt="Tick"
                        className="w-8 h-8 text-primary"
                      />
                    </div>
                    <div>
                      <h4 className="font-playfair font-semibold text-lg mb-2">
                        {step.title}
                      </h4>
                      <p className="font-manrope text-grey text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Video Section */}
          <div className="flex items-end justify-end lg:w-full lg:aspect-video lg:h-full overflow-hidden mt-8 lg:mt-0 lg:ml-20">
            <Image
              src={videoThumbnail.src}
              alt={videoThumbnail.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
