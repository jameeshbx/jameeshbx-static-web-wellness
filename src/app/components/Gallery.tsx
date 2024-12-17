'use client';

import { div } from "motion/react-client";
import Image from "next/image"

export default function BeautyServices() {
  return (
    <div className="bg-lightblue">
        <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="gap-8 font-playfair font-bold text-5xl leading-10 tracking-wide md:text-5xl mb-4">
            We are Experienced in making you <br />
            very Beautiful
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-Manrope text-lg font-normal leading-8">
            Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl overflow-hidden">
            {/* Large image spanning full height */}
            <div className="md:row-span-2 relative h-96 md:h-98">
            <Image
                src="/image1.jpg?height=800&width=600"
                alt="Facial treatment service"
                fill
                className="object-cover rounded-l-2xl"
            />
            </div>
            
            {/* Grid of smaller images */}
            <div className="grid grid-cols-1 gap-4">
            <div className="relative h-52">
                <Image
                src="/image2.jpg?height=400&width=600"
                alt="Hair styling service"
                fill
                className="object-cover"
                />
            </div>
            <div className="relative h-52">
                <Image
                src="/image3.jpg?height=400&width=600"
                alt="Back massage service"
                fill
                className="object-cover"
                />
            </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
            <div className="relative h-52">
                <Image
                src="/image4.png?height=400&width=600"
                alt="Facial relaxation service"
                fill
                className="object-cover rounded-tr-2xl"
                />
            </div>
            <div className="relative h-52">
                <Image
                src="/image5.png?height=400&width=600"
                alt="Skincare treatment service"
                fill
                className="object-cover rounded-br-2xl"
                />
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

