'use client'

import React, { useState } from 'react'
import { testimonials} from '../data/testimonials'

interface Testimonial {
  name: string;
  location: string;
  title: string;
  quote: string;
  image: string;
}

const TestimonialSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const testimonial: Testimonial = testimonials[currentTestimonial]

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

        <div className="relative rounded-32 mx-auto overflow-hidden mb-8 sm:mb-12 md:mb-16">
          <div className="bg-purple grid grid-cols-1 lg:grid-cols-12 min-h-400">
          
            <div className="relative lg:col-span-5 h-64 sm:h-80 md:h-96 lg:h-full sm:m-8 md:m-12 lg:m-16 pl-16 mt-11 m-8 sm:m-16">
              <div className="absolute left-4 sm:left-8 top-6 sm:top-12 flex space-x-2 sm:space-x-4 md:z-0">
                <div className="w-3 sm:w-6 md:w-12 lg:w-16 h-80 sm:h-160 md:h-[180px] lg:h-280 bg-white rounded-full" />
                <div className="w-3 sm:w-6 md:w-12 lg:w-16 h-100 sm:h-200 md:h-[220px] lg:h-360 bg-white rounded-full" />
              </div>

              <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-36 lg:translate-x-0 md:left-1/2 md:-translate-x-1/2">
                <div className="w-52 h-52 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white mb-8 sm:mb-14 mr-8 sm:mr-16">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s profile`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 lg:p-20 relative lg:-ml-28 m-5 sm:m-8 lg:-ml-6 -mt-9">
              <img 
                src="Heading.png"  
                alt="Opening quote" 
                className="absolute top-4 sm:top-8 md:top-16 left-4 sm:left-8 md:left-16 w-8 sm:w-12 h-8 sm:h-12" 
              />

              <div className="mt-12 sm:mt-16 md:mt-24 space-y-4 sm:space-y-6 text-white max-w-2xl">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-Manrope">{testimonial.name}</h3>
                  <p className="text-tertionary text-base sm:text-lg">{testimonial.location}</p>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-Playfair_Display leading-tight">
                  {testimonial.title}
                </h2>

                <p className="text-base sm:text-lg leading-relaxed font-Manrope text-tertionary">
                  "{testimonial.quote}"
                </p>
              </div>

              <img 
                src="Headi.png" 
                alt="Closing quote" 
                className="absolute bottom-4 sm:bottom-8 md:bottom-16 right-4 sm:right-8 md:right-16 w-8 sm:w-12 h-8 sm:h-12" 
              />
            </div>
          </div>
        </div>
     
        <div className="flex justify-center gap-4 mt-6 sm:mt-8">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-purple bg-white flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path d="M15 19L8 12L15 5" stroke="#4A2C40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple flex items-center justify-center hover:shadow-lg transition-shadow"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

