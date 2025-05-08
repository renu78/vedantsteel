"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import ProductDetailModal from "../componets/ProductDetail"
import InterestModal from"../componets/InterestModel";
interface Product {
  title: string;
  image: string;
  price: string;
  features: string[];
  applications: string[];
}

export default function ProductCard() {
  const [showDetail, setShowDetail] = useState(false);
  const [showInterest, setShowInterest] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const product = [
    {
    title: "Agriculture goods",
    image: "/images/Agriculture goods.jpeg",
   Price: "₹53,000 / Tonne",
   features: {
    length: '6 Meter',
    material: 'H R Plate',
    brand: 'Vedant Steel',
    size: '0.5mm to 200x75',
    surface: 'Polished',
    Country : "India",
  },
    applications: [
      "Pharmaceutical mixing",
      "Food processing",
      "Chemical blending",
    ],
  },
  {
    title: "MS Angle",
    image: "/images/Ms angle.png",
   Price: "₹53,000 / Tonne",
    features: {
      length:"5mm to 12mm",
      size: '25x25x5mm to 100x100x12mm',
      material:'Mild Steel',
      brand: 'G D Metsteel',
      surface:'Finished Polished',
      Country : "India",

    },
    applications: [
      "Used For manufacturing of truck-trailers",
      "EOT cranes and Gantry",
      "escalators and elevators",
      "communication and transmission towers",
      " construction of bridges",
    ],
    
  },
   {
     title: "Ms Channel",
    image: "/images/Ms channel.png",
   Price: "₹53,000 / Tonne",
   features: {
    length: '6 Meter',
    material: 'Mild Steel',
    brand: 'G D Metsteel',
    size: '70x35 to 200x75',
    surface: 'Polished',
    country:'India'
  },
    applications: [
      "Generators Frames",
      " Ship Building",
      "Mechanised Parking System",
    ],
  },
  {
    title: "Ms Flats",
   image: "/images/M s FLAT.jpeg",
  Price: "₹53,000 / Tonne",
  features: {
   length: '6 Meter',
   material: 'Mild Steel',
   brand: 'Mahendra Sponge & Power Limited.',
   size: '65x14mm to 220x14mm',
   surface: 'Polished',
   country:'India'
 },
   applications: [
     "Generators Frames",
     " Ship Building",
     "Mechanised Parking System",
   ],
 },
 {
  title: "H R Plate",
 image: "/images/HRPlate.jpeg",
Price: "₹53,000 / Tonne",
features: {
 length: '24 Meter(Max)',
 material: 'Mild Steel',
 brand: 'Jindal Steel & Power Limited',

 surface: 'Polished',
 country:'India'
},
 applications: [
   "Used for manufacturing of agricultural implements",
   " Online ultrasonic testing machines",
   "Vicker, Rockwell and Brinell hardness testing machine",
 ],
},
{
  title: "Ms Round Bar",
 image: "/images/Ms roundbar.png",
Price: "₹53,000 / Tonne",
features: {
 diameter: '10mm to 34mm ',
 material: 'Mild Steel',
 brand: 'G D Metsteel',
 length: '6 Meter',
 surface: 'Polished',
 country:'India'
},
 applications: [
   " Forging Industries",
   " Auto-ancillaries",
   "foundation and  bolts and many more engineering",
 ],
},
  ]

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-5 lg:gap-y-10 gap-y-4 mt-6">
    {product.map((product, index) => (
      <div key={index} className="bg-white shadow-md rounded-xl p-4">
        <div className="relative h-48 w-full rounded-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h3 className="mt-4 text-md font-semibold text-black">{product.title}</h3>
        <p className="text-sm text-gray-700 mt-1">{product.Price}</p>

        <button
          onClick={() => {
            setSelectedProduct(product);
            setShowDetail(true);
          }}
          className="mt-4 bg-[#F84D26] hover:bg-[#e24621] text-white px-4 py-2 rounded-md text-sm"
        >
          Know More
        </button>
      </div>
    ))}

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

    {showInterest && selectedProduct && (
      <InterestModal
        product={selectedProduct}
        onClose={() => setShowInterest(false)}
      />
    )}
  </div>
);
  
}
