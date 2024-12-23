'use client';
import Image from "next/image"
import { gallerySectionData } from "../data/gallery"

export default function BeautyServices() {
  const { title, description, images } = gallerySectionData;

  return (
    <div className="bg-lightblue">
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gap-8 font-playfair font-bold text-5xl leading-10 tracking-wide md:text-5xl mb-4">
            {title.split(',').map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-Manrope text-lg font-normal leading-8">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-2xl overflow-hidden">
          {/* Large image spanning full height */}
          <div className="md:row-span-2 relative h-96 md:h-98">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover rounded-l-2xl"
            />
          </div>

          {/* Grid of smaller images */}
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-52">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-52">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-52">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover rounded-tr-2xl"
              />
            </div>
            <div className="relative h-52">
              <Image
                src={images[4].src}
                alt={images[4].alt}
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

