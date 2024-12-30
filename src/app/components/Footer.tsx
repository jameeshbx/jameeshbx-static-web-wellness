import Link from 'next/link';
import React from 'react';
import { links, contactDetails, socialMedia } from '../data/footer';
import { UrlObject } from 'url';
import Image from 'next/image';

interface ExploreLink {
  href: string | UrlObject;
  label: React.ReactNode;
}

function Footer() {
  return (
    <div>
      <footer className="bg-black text-gray-300">
        <div className="container mx-auto px-4 pt-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 md:gap-24 lg:gap-48">
            <div className="flex items-center gap-2 p-2 sm:p-4 lg:mx-2 md:mx-4 lg:px-4 md:px-6">
              <Image
                className="h-8 sm:h-10 ml-4 sm:ml-6 md:ml-8 lg:ml-12"
                src="header-logo.png"
                alt="Header Logo"
              />
              <h2 className="text-white text-sm sm:text-base md:text-lg font-semibold">
                SERVICEMARKET
              </h2>
            </div>

            <div className="flex items-center justify-center sm:ml-auto gap-4 sm:gap-6 md:gap-4 p-2 sm:p-4 lg:pr-16 flex-wrap">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-2 border-lightpink text-white flex items-center justify-center"
                >
                  <Image
                    src={social.icon}
                    alt="social icon"
                    className=" object-contain"
                  />
                </a>
              ))}
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 p-4">
            <div className="p-4 md:p-6 lg:p-4 lg:pl-14">
              <h3 className="text-white text-lg font-playfair font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                {links.explore.map((link: ExploreLink, index: number) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-white transition-colors duration-300">

                      {link.label}

                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 md:p-6 lg:p-4 lg:pl-16">
              <h3 className="text-white text-lg font-playfair font-semibold mb-4">Utility Pages</h3>
              <ul className="space-y-2">
                <li className="hover:text-white transition-colors duration-300">Privacy Policy</li>
                <li className="hover:text-white transition-colors duration-300">Terms of Use</li>
              </ul>
            </div>

            <div className="p-4 md:p-6 lg:p-4 lg:pl-16">
              <h3 className="text-white text-lg font-playfair font-semibold mb-4">Keep in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <p className="text-white text-lg font-semibold">Address:</p>
                  <span className="text-gray-300">{contactDetails.address}</span>
                </li>
                <li className="flex items-start gap-4">
                  <p className="text-white text-lg font-semibold">Mail:</p>
                  <a href={`mailto:${contactDetails.email}`} className="text-gray-300 hover:text-white">
                    {contactDetails.email}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <p className="text-white text-lg font-semibold">Phone:</p>
                  <a href={`tel:${contactDetails.phone}`} className="text-gray-300 hover:text-white">
                    {contactDetails.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 py-6 text-center">
            <p>© 2023, ServiceMarket.dk | All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
