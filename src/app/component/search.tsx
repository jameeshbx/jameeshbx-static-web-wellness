"use client";

import React, { useState } from "react";

const Search: React.FC = () => {
  const [serviceName, setServiceName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", { serviceName, address });
  };

  return (
    <div className="flex items-center justify-center h-100 w-full pl-6 ">
      <form 
        onSubmit={handleSubmit} 
        className="flex justify-center items-center bg-tertionary rounded-full py-6 w-949 h-20 gap-46 px-6 -ml-80 pr-1 -mr-96 pr-2.5 "
      >
        <div className="flex justify-center items-center grid md:grid-cols-2 md:gap-6 pt-4">
          <div className="relative z-0 mb-15 ml-2 group">
            <label className="text-primary font-=inter .text-lg w-700 font-size:18 line-height: 21.78 font-semibold">Service Name</label>
            <div className="relative flex items-center pb-5">
              <input
                className="placeholder-black block w-full pr-8 py-1 px-0 text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-secondary dark:border-gray-600 dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder="Book your services..."
                required
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
              />
              <img className="color-black" src="search.png" alt="" />
            </div>  
          </div>
          <div className="relative z-0 mb-15 group pb-5">
            <label className="text-primary font-inter text-lg w-700 font-size:18 line-height: 21.78 font-semibold">Address</label>
            <div className="relative flex items-center">
              <input
                className="placeholder-black block w-full pr-8 py-1 px-0 text-sm text-secondary bg-transparent border-0 border-b-2 border-secondary appearance-none dark:text-secondary dark:border-secondary dark:focus:border-secondary focus:outline-none focus:ring-0 focus:border-secondary peer"
                placeholder="Where"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <img   src="location.png" alt="" />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className=" text-2xl font-Manrope  ml-8 w-211 h-33 w-81 flex items-center justify-center px-10 py-4 bg-primary text-white font-medium rounded-full shadow hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary font-size:24 line-height: 32.78  w-600"
        >
          Search
          <img className="w-21.97 h-21.97 top-1.6  left-1.6 .text-white pl-10  "
           src="vector.png" alt="" />
        </button>
      </form>
    </div>
  ); 
};

export default Search;