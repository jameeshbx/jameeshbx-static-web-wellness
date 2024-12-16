import React from 'react'
import Search from './search'

export function Hero() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

<div className="relative w-full lg:w-1/2 z-10 lg:pl-10">
  <div className="absolute max-w-screen-xl py-48  px-14 sm:px-14 lg:py-24 lg:pt-36">
    <div className="flex gap-2 items-center">
      <img className="h-5" src="header-logo.png" alt="Header Logo" />
      <p className="text-xs sm:text-sm font-normal font-manrope text-gray-300">
        HAIR SALON, MASSEUSE, BEAUTY SALON
      </p>
    </div>
    <h1 className="mb-4 text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-snug text-positive font-playfair">
      Find a service<br/>
       close to you
    </h1>
    <p className="mb-8 text-sm sm:text-base lg:text-sm font-normal font-manrope text-gray-300 ">
      There are many variations of passages of ipsum available, the
      majority have suffered alteration in some form.
    </p>
    <Search/>
  </div>
</div>
<div className="relative w-full lg:w-3/4 min-h-screen sm:h-96 lg:h-auto bg-center bg-cover bg-no-repeat bg-[url('https://s3-alpha-sig.figma.com/img/2c2a/f79a/e0378b7798af588ba9c3ca84208df851?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYIDC31nWSSgIWNbnXt3j8oziGDJzl6jtAATljS7nZ1oFV6C2aK18R4DZAR5ZaabDaYb~E1vaP62aXcr9-C~0vhNyX0kfYGmjI4MeDVmyUfU1OjjtceBwA8mmAU5t5z1Hln1Ml~oZrkwf82TzMe27XS0yJUM22e3e1vdypyJW1mkIBnTJVDpo7Bbu9mLHzuBQv9N298gsn4DFPbKwvW9bgkQ-j9PZLa5cVfyeJm7Cqu3fMTPH82pE3qJfPFQvVY18jsgltrh6vDDDtWS~IlM5pwyHY6AOXfkZbmUo2qfY75exS6S6wd3Q3P2P0jIuWakll3xLQJ-Rn0Sm8XIF89l7A__')] bg-blend-multiply">

</div>
<div className="absolute w-3/4 inset-0 bg-gradient-to-r from-negative via-negative via-negative via-negative to-light"></div>

        <div className="relative w-full lg:w-1/2 z-10 lg:pl-10">
          <div className="absolute max-w-screen-xl py-48  px-14 sm:px-14 lg:py-24 lg:pt-36">
            <div className="flex gap-2 items-center">
              <img className="h-5" src="header-logo.png" alt="Header Logo" />
              <p className="text-xs sm:text-sm font-normal font-manrope text-gray-300">
                HAIR SALON, MASSEUSE, BEAUTY SALON
              </p>
            </div>
            <h1 className="mb-4 text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-snug text-positive font-playfair">
              Find a service close to you
            </h1>
            <p className="mb-8 text-sm sm:text-base lg:text-sm font-normal font-manrope text-gray-300">
              There are many variations of passages of ipsum available, the
              majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className="relative w-full lg:w-3/4 min-h-screen sm:h-96 lg:h-auto bg-center bg-cover bg-no-repeat bg-[url('https://s3-alpha-sig.figma.com/img/2c2a/f79a/e0378b7798af588ba9c3ca84208df851?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JYIDC31nWSSgIWNbnXt3j8oziGDJzl6jtAATljS7nZ1oFV6C2aK18R4DZAR5ZaabDaYb~E1vaP62aXcr9-C~0vhNyX0kfYGmjI4MeDVmyUfU1OjjtceBwA8mmAU5t5z1Hln1Ml~oZrkwf82TzMe27XS0yJUM22e3e1vdypyJW1mkIBnTJVDpo7Bbu9mLHzuBQv9N298gsn4DFPbKwvW9bgkQ-j9PZLa5cVfyeJm7Cqu3fMTPH82pE3qJfPFQvVY18jsgltrh6vDDDtWS~IlM5pwyHY6AOXfkZbmUo2qfY75exS6S6wd3Q3P2P0jIuWakll3xLQJ-Rn0Sm8XIF89l7A__')] bg-blend-multiply">

        </div>
        <div className="absolute w-3/4 inset-0 bg-gradient-to-r from-negative via-negative via-negative via-negative to-light"></div>
      </section>
    </div>
  )
}

