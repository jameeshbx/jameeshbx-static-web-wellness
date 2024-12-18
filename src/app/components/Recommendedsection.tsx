"use client"
import { useState, useEffect } from "react";
import { cardData } from "../data/recommendeddata"; 

export function RecommendedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);

  
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setVisibleCardsCount(1);
      } else if (screenWidth < 1024) {
        setVisibleCardsCount(2);
      } else {
        setVisibleCardsCount(4);
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 
  const visibleCards = [
    ...cardData.slice(currentIndex, currentIndex + visibleCardsCount),
    ...cardData.slice(0, Math.max(0, currentIndex + visibleCardsCount - cardData.length)),
  ];

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  return (
    <section className="flex flex-col items-center gap-y-6 py-10 px-4">
      <h2 className="font-manrope text-primary font-semibold text-sm tracking-[0.1em] text-center">
        OUR SERVICE
      </h2>
      <h1 className="font-playfair font-bold text-3xl md:text-5xl text-center">
        Recommended
      </h1>
      <p className="font-manrope font-normal text-lg md:text-xl text-center max-w-3xl">
        Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
      </p>

      <div className="relative flex flex-col items-center w-full lg:max-w-[1200px]">
       
        {visibleCardsCount < 4 && (
          <button
            onClick={goToPreviousCard}
            aria-label="Previous card"
            disabled={visibleCardsCount === 1}
            className={`absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 text-foreground lg:left-[-50px] sm:block ${
              visibleCardsCount === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow transition-transform duration-300"
            >
              <img
                className="rounded-t-lg object-cover w-full h-[200px] sm:h-[200px] lg:h-[250px]"
                src={card.image}
                alt={card.name}
                width={384}
                height={200}
              />
              <div className="p-4 sm:p-3">
                <div className="flex items-center justify-between mb-2 sm:mb-1">
                  <div className="flex items-center gap-1">
                    <svg
                      className="text-[#BA7894]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"
                      />
                    </svg>
                    <span className="font-manrope font-semibold text-sm text-primary">{card.rating}</span>
                  </div>
                  <span className="font-playfair font-bold text-xs sm:text-sm">{card.reviews} reviews</span>
                </div>
                <h3 className="font-playfair font-bold text-base sm:text-sm text-gray-800">{card.name}</h3>
                <div className="flex items-center gap-2 mt-2 sm:mt-1">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3z" />
                  </svg>
                  <span className="font-manrope text-xs sm:text-sm text-gray-600">{card.location}</span>
                </div>
                <button className="mt-4 w-full h-10 sm:h-8 text-xs sm:text-sm font-playfair font-medium text-primary bg-white border border-primary rounded-lg hover:bg-primary hover:text-white focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

       
        {visibleCardsCount < 4 && (
          <button
            onClick={goToNextCard}
            aria-label="Next card"
            disabled={visibleCardsCount === 1}
            className={`absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 text-foreground lg:right-[-50px] sm:block ${
              visibleCardsCount === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24"
              height="24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}

