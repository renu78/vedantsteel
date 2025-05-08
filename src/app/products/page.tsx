'use client';

import { useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Sidebar from '../componets/Sidebar';
import InterestModal from '../componets/InterestModel';
import ProductCard from '../componets/CourseCard';

const product = {
  title: '10mm Mild Steel Channel',
  price: '₹53,000 / Tonne',
  images: [
    '/images/channel1.jpg',
    '/images/channel2.jpg',
    '/images/channel3.jpg',
  ],
  features: {
    length: '6 Meter',
    material: 'Mild Steel',
    brand: 'G D Metsteel',
    size: '70x35 to 200x75',
    surface: 'Polished',
  },
};

export default function ProductPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Header/>
    <div className="flex">
      
      <Sidebar/>

    <div className="p-8 flex-grow mx-auto bg-white">
      {/* Product Title and Price */}
      
      {/* Product Features */}
      <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-black">Our Products</h1>
     
      <ProductCard />
      
    </main>
     
      {/* Interest Button */}
    

      {showModal && <InterestModal onClose={() => setShowModal(false)} product={product} />}

    </div>
    </div>
    <Footer/>
    </>
  );
}
