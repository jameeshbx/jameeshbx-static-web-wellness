"use client"
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
        className="mx-auto max-w-5xl rounded-full bg-white shadow-lg flex flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:gap-6"
      >
        <div className="flex flex-wrap gap-4 md:flex-nowrap">
          <div className="flex-1 min-w-0">
         <label
              htmlFor="service-name"
              className="block mb-1 font-medium text-primary text-lg"
            >
              Service Name
            </label>
            <div className="relative">
              <input
                id="service-name"
                type="text"
                className="w-full border-b border-secondary bg-transparent text-secondary pb-2 pl-2 pr-10 text-sm placeholder-secondary focus:border-secondary focus:outline-none"
                placeholder="Book your services..."
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
              />
             <img  className="h-4 w-4 absolute right-2 bottom-2 opacity-60" src="search.png" alt="" />
            </div>
          </div>


          <div className="flex-1 min-w-0">
            <label
              htmlFor="address"
              className="block mb-1 font-medium text-primary text-lg"
            >
              Address
            </label>
            <div className="relative">
              <input
                id="address"
                type="text"
                className="w-full text-secondary border-b border-secondary bg-transparent pb-2 pl-2 pr-10 text-sm placeholder-secondary focus:border-secondary focus:outline-none"
                placeholder="Where"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            <img  className='h-4 w-4 absolute right-2 bottom-2 opacity-60' src="location.png" alt="" />
            </div>
          </div>

          <button
            type="submit"
          
            className="w-48 h-12 md:w-52 md:h-16 text-lg rounded-full bg-primary px-6 md:px-8 text-white font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            Search
            <img src="Vector.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  )
}

