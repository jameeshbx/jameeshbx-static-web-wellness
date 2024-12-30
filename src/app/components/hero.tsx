import React from 'react'
import Searchsection from './Searchsection'


export function Hero() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        <div className="relative w-full lg:w-1/2 z-10 lg:pl-10">
          <div className="absolute max-w-screen-xl py-48  px-14 sm:px-14 lg:py-24 lg:pt-36  lg:-mr-14 lg:-ml-12">
            <div className="flex gap-2 items-center">
              <img className="h-5" src="header-logo.png" alt="Header Logo" />
              <p className="text-xs sm:text-sm font-normal font-manrope text-gray-300">
                HAIR SALON, MASSEUSE, BEAUTY SALON
              </p>
            </div>
            <h1 className="mb-4 text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-snug text-positive font-playfair">
              Find a service<br />
              close to you
            </h1>
            <p className="mb-8 text-sm sm:text-base lg:text-sm font-normal font-manrope text-gray-300 ">
              There are many variations of passages of ipsum available, the
              majority have suffered alteration in some form.
            </p>
            <Searchsection />

          </div>
        </div>
        <div className="relative w-full lg:w-3/4 min-h-screen sm:h-96 lg:h-auto bg-center bg-cover bg-no-repeat bg-[url('/homebg.jpeg')] bg-blend-multiply">

        </div>
        <div className="absolute w-full inset-0 bg-gradient-to-r from-negative  via-negative via-negative to-light"></div>


      </section>
    </div>
  )
}

