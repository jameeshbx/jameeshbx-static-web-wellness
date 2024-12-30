"use client"

import Image from "next/image"
import React from "react"
import { useState } from "react"

export default function SearchForm() {
  const [serviceName, setServiceName] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search submitted:", { serviceName, address })
  }

  return (
    <div className="w-full px-4 py-6 md:px-6">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-5xl rounded-full bg-white shadow-lg p-10 sm:p-3"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-full sm:w-40p px-6 py-3  p-5 ">
            <label
              htmlFor="service-name"
              className="block mb-1 font-medium text-primary text-sm sm:text-base"
            >
              Service Name
            </label>
            <div className="relative">
              <input
                id="service-name"
                type="text"
                className="w-full border-b border-secondary bg-transparent text-secondary pb-2 pl-2 pr-10 text-sm sm:text-base placeholder-secondary focus:border-secondary focus:outline-none"
                placeholder="Book your services..."
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
              />
              <Image className="h-4 w-4 absolute right-2 bottom-2 opacity-60" src="search.png" alt="" />
            </div>
          </div>

          <div className="w-full sm:w-40p px-6 py-3  p-5">
            <label
              htmlFor="address"
              className="block mb-1 font-medium text-primary text-sm sm:text-base"
            >
              Address
            </label>
            <div className="relative">
              <input
                id="address"
                type="text"
                className="w-full border-b border-secondary bg-transparent text-secondary pb-2 pl-2 pr-10 text-sm sm:text-base placeholder-secondary focus:border-secondary focus:outline-none"
                placeholder="Where"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <Image className="h-4 w-4 absolute right-2 bottom-2 opacity-60" src="location.png" alt="" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-6  p-5 text-base rounded-full bg-primary text-white font-medium transition-colors hover:primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            Search
            <Image src="Vector.png" alt="" className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

