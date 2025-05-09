'use client';

import { useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import InterestModal from '../componets/InterestModel';
import ProductCard from '../componets/CourseCard';
import ProductDetailModal from '../componets/ProductDetail';



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

      <Footer />
    </>
  );
}
