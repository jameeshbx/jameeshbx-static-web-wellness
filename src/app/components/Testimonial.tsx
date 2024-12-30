'use client';

import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';

interface Testimonial {
  name: string;
  location: string;
  title: string;
  quote: string;
  image: string;
}

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial: Testimonial = testimonials[currentTestimonial];

  return (
    <section className="bg-tertionary py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase text-primary tracking-wider">
            TESTIMONIALS
          </p>
          <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-5xl font-bold mt-2 sm:mt-3 text-secondary font-Playfair_Display">
            What our Customers say...
          </h2>
        </div>

        <div className="relative rounded-2xl mx-auto overflow-hidden mb-8 sm:mb-12 md:mb-16 border-rounded">
  <div className="bg-purple  grid grid-cols-1 lg:grid-cols-12 min-h-400 rounded-2xl">
  

          
            <div className="relative  lg:ml-76 lg:mt-75 lg:col-span-5 h-64 sm:h-80 lg:h-full flex items-center justify-center">
            <div className="absolute left-4 sm:left-8 top-6 sm:top-12 flex space-x-2 sm:space-x-4">
            <div className="relative lg:col-span-5 h-64 sm:h-80 lg:h-full flex items-center justify-center">

  <div className="absolute left-4 sm:left-8 top-6 sm:top-12 flex space-x-2 sm:space-x-4">
    <div className="w-3 md:-mt-85 lg:-mt-12 sm:w-6 md:w-12 lg:w-16 h-80 sm:h-160 md:h-180 lg:h-280 bg-white rounded-full" />
    <div className="w-3 lg:-mt-12 md:-mt-85 sm:w-6 md:w-12 lg:w-16 h-100 sm:h-200 md:h-220 lg:h-360 bg-white rounded-full" />
              </div>
              </div>

               
              <div className="absolute xs:-ml-103 lg:mt-10 sm:-m-20 sm:mt-6 sm:-ml-24 md:-mt-62 left-24 sm:left-32 top-8 sm:top-16 w-52 h-52 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white">
    <img
      src={testimonial.image}
      alt={`${testimonial.name}'s profile`}
      className="w-full h-full object-cover"
    />
  </div>
</div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 lg:p-20 text-white">
              <div>
              <img className='sm:-ml-16 md:-ml-33' src="Heading.png" alt="" />
              </div>
              <div className="space-y-4 sm:space-y-6 md:mt-85">
                <div className="space-y-1 sm:space-y-2 ">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-Manrope">
                    {testimonial.name}
                  </h3>
                  <p className="text-tertionary text-base sm:text-lg">
                    {testimonial.location}
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-Playfair_Display leading-tight">
                  {testimonial.title}
                </h2>
                <p className="text-base sm:text-lg leading-relaxed font-Manrope text-tertionary">
                  "{testimonial.quote}"
                </p>
                <div>
                <img className="ml-auto sm:ml-auto md:ml-auto lg:ml-auto" src="Headi.png" alt="" />

                </div>
              </div>
            </div>
          </div>

          
          <div className="flex justify-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-purple bg-white flex items-center justify-center hover:shadow-lg transition-shadow"
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="sm:w-6 sm:h-6"
              >
                <path
                  d="M15 19L8 12L15 5"
                  stroke="#4A2C40"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple flex items-center justify-center hover:shadow-lg transition-shadow"
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="sm:w-6 sm:h-6"
              >
                <path
                  d="M9 5L16 12L9 19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
