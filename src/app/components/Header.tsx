'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.png" width={32} height={32} className="h-8" alt="Logo" />
          <span className="self-center text-3xl leading-10 tracking-wider font-normal font-slab whitespace-nowrap dark:text-white text-primary">WELLNESS</span>
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-base font-medium text-secondary hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary rounded md:bg-transparent md:text-secondary md:p-0 md:dark:bg-transparent font-manrope leading-10" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-manrope text-base leading-10">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-manrope text-base leading-10">Contact Us</Link>
            </li>
            <li className="relative">
              <button
                ref={dropdownRef}
                onClick={toggleDropdown}
                className="leading-10 flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent font-manrope"
              >
                EN
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="z-10 absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">FR</Link>
                    </li>
                    <li>
                      <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ES</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="" className="block py-2 px-3 border-2 border-black rounded font-manrope hover:bg-primary hover:text-white transition duration-300">Login</Link>
            </li>
            <li>
              <Link href="" className="block py-2.5 px-3 bg-gray-800 hover:bg-gray-900 text-white hover:text-white rounded transition duration-300 font-manrope">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

