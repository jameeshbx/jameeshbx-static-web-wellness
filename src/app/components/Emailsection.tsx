'use client'
import Image from "next/image"
import React from "react"
export default function Emailsection() {
  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-full ">
            <Image
              src="Mask group.png"
              alt=" salon scene"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="lg:pl-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-secondary font-playfair">
              Subscribe to newsletter
            </h2>
            <p className="text-grey mb-8 lg:text-lg font-manrope">
              Sign up for our newsletter to stay up-to-date on the latest promotions,
              discounts, and new features releases.
            </p>
            <div className="w-full max-w-xl">
              <form className="relative w-543">
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Image className=" text-info" src="emails.png" alt="" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your mail"
                    className="w-full pl-16 pr-32 py-3 placeholder-darkblue rounded-full border border-grey focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-secondary"
                  />
                </div>
                <button
                  type="submit"
                  className="absolute right-2 top-1/2  p-2.5 pl-8 pr-7 m-3 mt-0 transform -translate-y-1/2 px-6  bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

