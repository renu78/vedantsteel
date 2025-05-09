'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import ProductDetailModal from '../componets/ProductDetail';
import InterestModal from '../componets/InterestModel';

interface Product {
  title: string;
  image: string;

  features: {
    length?: string;
    material: string;
    brand: string;
    size?: string;
    surface: string;
    country?: string;
    diameter?: string;
  };
  applications: string[];
}

export default function ProductCard() {
  const [showDetail, setShowDetail] = useState(false);
  const [showInterest, setShowInterest] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      title: 'Agriculture goods',
      image: '/images/Agriculture goods.jpeg',
      
      features: {
        length: '6 Meter',
        material: 'H R Plate',
        brand: 'Vedant Steel',
        size: '0.5mm to 200x75',
        surface: 'Polished',
        country: 'India',
      },
      applications: ['Pharmaceutical mixing', 'Food processing', 'Chemical blending'],
    },
    {
      title: 'MS Angle',
      image: '/images/Ms angle.png',
     
      features: {
        length: '5mm to 12mm',
        size: '25x25x5mm to 100x100x12mm',
        material: 'Mild Steel',
        brand: 'G D Metsteel',
        surface: 'Finished Polished',
        country: 'India',
      },
      applications: [
        'Manufacturing of truck-trailers',
        'EOT cranes and Gantry',
        'Escalators and elevators',
        'Communication and transmission towers',
        'Construction of bridges',
      ],
    },
    {
      title: 'MS Channel',
      image: '/images/Ms channel.png',
      
      features: {
        length: '6 Meter',
        material: 'Mild Steel',
        brand: 'G D Metsteel',
        size: '70x35 to 200x75',
        surface: 'Polished',
        country: 'India',
      },
      applications: ['Generators Frames', 'Ship Building', 'Mechanised Parking System'],
    },
    {
      title: 'MS Flats',
      image: '/images/M s FLAT.jpeg',
      
      features: {
        length: '6 Meter',
        material: 'Mild Steel',
        brand: 'Mahendra Sponge & Power Limited.',
        size: '65x14mm to 220x14mm',
        surface: 'Polished',
        country: 'India',
      },
      applications: ['Generators Frames', 'Ship Building', 'Mechanised Parking System'],
    },
    {
      title: 'H R Plate',
      image: '/images/HRPlate.jpeg',
      
      features: {
        length: '24 Meter (Max)',
        material: 'Mild Steel',
        brand: 'Jindal Steel & Power Limited',
        surface: 'Polished',
        country: 'India',
      },
      applications: [
        'Manufacturing of agricultural implements',
        'Online ultrasonic testing machines',
        'Hardness testing (Vicker, Rockwell, Brinell)',
      ],
    },
    {
      title: 'MS Round Bar',
      image: '/images/Ms roundbar.png',
   
      features: {
        diameter: '10mm to 34mm',
        material: 'Mild Steel',
        brand: 'G D Metsteel',
        length: '6 Meter',
        surface: 'Polished',
        country: 'India',
      },
      applications: ['Forging Industries', 'Auto-ancillaries', 'Foundation bolts & more'],
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 animate-fade-in">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 transform transition duration-300 hover:scale-[1.02] hover:shadow-xl animate-slide-up"
        >
          {/* Image */}
          <div className="relative h-48 w-full rounded-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-700 ease-in-out"
            />
          </div>

          {/* Title and Price */}
          <div className="mt-4">
            <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
          
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              setSelectedProduct(product);
              setShowDetail(true);
            }}
            className="mt-4 bg-[#F84D26] hover:bg-[#e24621] text-white px-4 py-2 rounded-md text-sm transition-all"
          >
            Know More
          </button>
        </div>
      ))}

      {/* Product Detail Modal */}
      {showDetail && selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setShowDetail(false)}
          onInterest={() => {
            setShowDetail(false);
            setShowInterest(true);
          }}
        />
      )}

      {/* Interest Modal */}
      {showInterest && selectedProduct && (
        <InterestModal productTitle={selectedProduct.title} onClose={() => setShowInterest(false)} />
      )}
    </div>
  );
}
