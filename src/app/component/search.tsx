"use client"


import { useState } from "react"

export default function Search() {
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
        className="mx-auto max-w-5xl rounded-full bg-white p-12  shadow-lg flex flex-col md:flex-row items-end gap-4 px-16 pt-3 py-10 pb-5"
      >
        <div className="w-full flex flex-col md:flex-row gap-6 flex-1">
          
          <div className="w-full md:w-1/2">
            <label 
              htmlFor="service-name"
              className="block mb-2  font-semibold text-primary text-lg"
            >
              Service Name
            </label>
            <div className="relative">
              <input
                id="service-name"
                type="text"
                className="w-full border-b-2 border-secondary bg-transparent pb-2 pl-2 pr-10 text-sm text-secondary placeholder-secondary transition-colors focus:border-rose-400 focus:outline-none"
                placeholder="Book your services..."
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
              />
               <img className="h-5 w-5 text-gray-400 absolute right-2 bottom-2" src="search.png" alt="" />
            </div>
          </div>

        
          <div className="w-full md:w-1/2">
            <label 
              htmlFor="address"
              className="block mb-2  font-semibold text-primary text-lg"
            >
              Address
            </label>
            <div className="relative">
              <input
                id="address"
                type="text"
                className="w-full border-b-2 border-secondary bg-transparent pb-2 pl-2 pr-10 text-sm text-secondary placeholder-secondary transition-colors focus:border-rose-400 focus:outline-none"
                placeholder="Where"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <img  className="h-5 w-5 text-gray-400 absolute right-2 bottom-2 "  src="location.png" alt="" />
            </div>
          </div>
        </div>

       
        <button
          type="submit"
          className=" pt-6 text-2xl gap-6 -mr-1.5 pr-20 md:w-auto whitespace-nowrap rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center justify-center gap-2"
        >
          Search
          <img className="h-5 w-5"
           src="vector.png" alt="" />
        </button>
      </form>
    </div>
  )
}

