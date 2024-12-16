"use client"
import { useState } from 'react';
import Image from 'next/image';

export function CategorySection() {
  const icons = [
    { src: '/makeup.png', alt: 'Icon 1', title: 'Makeup-artist' },
    { src: '/wellness center.png', alt: 'Icon 2', title: 'Wellness-center' },
    { src: '/hair cut.png', alt: 'Icon 3', title: 'Barber-salon' },
    { src: '/hair saloon.png', alt: 'Icon 4', title: 'Hair-Salon' },
    { src: '/massage.png', alt: 'Icon 5', title: 'Massage-clinic' },
    { src: '/pedicure.png', alt: 'Icon 6', title: 'Pedicure' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + icons.length) % icons.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
  };

  return (
    <div className="bg-white h-screen py-10">
      {/* Mobile View Carousel */}
      <div className="flex items-center justify-between w-full px-4 sm:hidden">
        <button className="p-2" onClick={handlePrev}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex flex-col items-center text-center rounded-lg">
          <div className="w-30 h-20 relative">
            <Image
              src={icons[currentIndex].src}
              alt={icons[currentIndex].alt}
              width={90}
              height={80}
              className="object-contain"
            />
          </div>
          <h3 className="font-manrope text-primarytext mt-2">
            {icons[currentIndex].title}
          </h3>
        </div>

        <button className="p-2" onClick={handleNext}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Desktop View Grid */}
      <div className="hidden sm:flex items-center justify-between w-full px-10">
        <button className="p-2">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full gap-4">
          {icons.map((icon) => (
            <div
              key={icon.title}
              className="flex flex-col items-center text-center rounded-lg"
            >
              <div className="w-35 h-20 relative">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="font-manrope text-primarytext">{icon.title}</h3>
            </div>
          ))}
        </div>

        <button className="p-2">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

