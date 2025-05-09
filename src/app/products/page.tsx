'use client';

import { useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
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
      <Header />

      <div className="flex bg-gradient-to-br from-gray-100 to-white min-h-screen">
        <main className="flex-grow p-6 lg:p-10 animate-fade-in">
          {/* Section Heading */}
          <section className="mb-8 transition-opacity duration-500 ease-in  animate-slide-up animate-on-visible">
            <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
              Explore Our Steel Products
            </h1>
            <p className="text-lg text-gray-700">
              Find premium-grade materials trusted across infrastructure, construction, and manufacturing sectors.
            </p>
          </section>

          {/* Product Grid */}
          <section className="animate-fade-in-slow animate-on-visible">
            <ProductCard />
          </section>
        </main>
      </div>

      {showModal && (
        <InterestModal onClose={() => setShowModal(false)} product={product} />
      )}

      <Footer />
    </>
  );
}
