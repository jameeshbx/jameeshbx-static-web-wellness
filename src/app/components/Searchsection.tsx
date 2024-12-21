'use client'

import { useState } from "react"


export default function SearchForm() {
  const [serviceName, setServiceName] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search submitted:", { serviceName, address })
  }

  return (
   
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-900 bg-white lg:rounded-full  shadow-lg p-4 sm:p-8 md:p-8 lg:m-32 lg:p-4 "
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
        <div className="w-full md:w-40 lg:w-60 relative lg:ml-5">
          <label
            htmlFor="service-name"
            className="block mb-2 text-xl font-medium text-primary lg:mb-4"
          >
            Service Name
          </label>
          <div className="relative flex items-center h-full">
            <input
              id="service-name"
              type="text"
              className="w-full bg-transparent text-grey py-2 pl-2 pr-10 text-sm placeholder-secondary focus:outline-none  "
              placeholder="Book your services..."
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              required
            />
            <img 
              className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 opacity-60" 
              src="search.png" 
              alt="" 
            />
          </div>
        </div>

        <div className="w-full md:w-40 lg:w-60 relative">
          <label
            htmlFor="address"
            className="block mb-2 text-xl font-medium text-primary lg:mb-4"
          >
            Address
          </label>
          <div className="relative flex items-center h-full">
            <input
              id="address"
              type="text"
              className="w-full bg-transparent text-grey py-2 pl-2 pr-10 text-sm placeholder-secondary focus:outline-none"
              placeholder="Where"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <img 
              className="h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2 opacity-60" 
              src="location.png" 
              alt="" 
            />
          </div>
        </div>
     
          <div className="w-full md:w-auto mt-4 md:mt-0 lg:-ml-24">
          <button
            type="submit"
            className=" w-full md:w-auto px-6 py-3 lg:px-10 lg:py-6 text-sm font-medium rounded-full bg-primary text-white transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2 md:self-end"
          >
              Search
            <img src="Vector.png" alt="" />
            </button>
          </div>
        </div>
      </form>

  )
}

