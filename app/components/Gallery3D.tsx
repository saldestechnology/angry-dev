'use client';

import Image from "next/image";

export default function Gallery3D() {
  const images = [
    { src: "/images/angry_dev.jpg", alt: "Angry Dev" },
    { src: "/images/angry_devil_and_angel.jpg", alt: "Devil and Angel Angry" },
    { src: "/images/angry_disappointed.jpg", alt: "Disappointed Angry" },
    { src: "/images/angry_feelings.jpg", alt: "Angry Feelings" },
    { src: "/images/angry_volcano.jpg", alt: "Angry Volcano" },
    { src: "/images/borrow_money_from_mum_and_dad_to_dev.jpg", alt: "Borrowing Money to Dev" },
    { src: "/images/2025-08-06 01.11.43.jpg", alt: "Hair-Pulling Market Crash" },
    { src: "/images/2025-08-06 01.11.51.jpg", alt: "Crying Over Empty Wallet" },
    { src: "/images/2025-08-06 01.11.58.jpg", alt: "Laser-Eyed Breakdown" },
    { src: "/images/2025-08-06 10.49.56.jpg", alt: "Chart Watching Depression" },
    { src: "/images/2025-08-06 10.50.04.jpg", alt: "Business Suit Defeat" },
    { src: "/images/2025-08-06 10.50.11.jpg", alt: "Couch Rage Mode" },
    { src: "/images/2025-08-06 10.50.17.jpg", alt: "Late-Night Coding Fury" },
  ];

  return (
    <div className="gallery-section mb-16 w-full">
      <div className="mosaic-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              mosaic-item relative rounded-2xl overflow-hidden shadow-2xl shadow-red-500/40 
              transition-all duration-300 border-4 border-red-500 
              hover:scale-105 hover:shadow-red-500/80 hover:z-10
              aspect-square
              ${index === 0 ? 'md:col-span-2 md:row-span-2 md:aspect-square' : ''}
              ${index === 2 ? 'lg:col-span-2 lg:aspect-[2/1]' : ''}
              ${index === 4 ? 'md:col-span-2 md:aspect-[2/1]' : ''}
              ${index === 6 ? 'lg:col-span-2 lg:aspect-[2/1]' : ''}
              ${index === 9 ? 'md:col-span-2 md:aspect-[2/1]' : ''}
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover filter saturate-125 contrast-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-500/20 pointer-events-none" />
            
            {/* Angry emoji overlay */}
            <div className="absolute top-2 right-2 text-2xl animate-bounce opacity-0 hover:opacity-100 transition-opacity">
              😡
            </div>
            
            {/* Image title overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-bold text-sm md:text-base">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}