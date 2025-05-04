// components/ImageSlider.tsx
'use client';

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const slides = [
  { title: 'Bending Machine', image: '/images/image1.jpeg' },
  { title: 'Sharing Machine', image: '/images/image2.jpeg' },
  { title: 'Our Warehouse', image: '/images/ourwarehouse.jpeg' },
  { title: 'Our Machinery', image: '/images/image3.jpeg' },
];

export default function ImageSlider() {
  

  return (
    <div className="my-8 px-4">
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {slides.map((slide, index) => (
        <div key={index} className="flex flex-col items-center shadow-lg rounded-lg overflow-hidden">
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-48 object-cover"
          />
          <p className="mt-2 font-semibold text-center p-2 text-black">{slide.title}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
