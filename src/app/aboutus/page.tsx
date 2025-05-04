"use client";

import Image from "next/image";
import Factsheet from "../componets/FaceSheet";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
import ImageSlider from "../componets/ImageSlider";
import Sidebar from "../componets/Sidebar";

const AboutUs = () => {
  return (
<>
    <Header />
    <div className="flex">
       
       <Sidebar/>

 
    <div className="max-w-5xl mx-auto px-10 py-10 bg-white shadow-lg ">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">About Us</h2>
      <p className="mb-4 text-gray-700">
        Established in the year <strong>2011</strong> at Ahilyanagar (Maharashtra, India),{" "}
        <strong>Vedant Steel.</strong> is a prominent{" "}
        <strong>Manufacturer and Exporter</strong> of a superior quality array of{" "}
        <em>Agriculture goods, H R plate, Angle channel, Leaser Cutting,  Ms Bar, Ms Channel, Ms Angle, Mild Steel Flats</em>, etc. and more.
        Our offerings are designed and fabricated with high-grade raw materials and modern machinery to ensure durability, strength, and dimensional accuracy.
      </p>
      <p className="mb-8 text-gray-700">
        We adhere strictly to industry standards, ensuring every product is thoroughly tested before delivery.
        Our products are widely appreciated for their robustness, corrosion resistance, reliability, and long service life.
       
      </p>
    
      <Factsheet/>

      <h3 className="text-2xl font-semibold text-blue-800 mb-4 py-4">Why Us?</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
        <li>Over 14 years of experience and market trust</li>
        <li>Top-grade raw materials and modern production</li>
        <li>Strict quality control processes</li>
        <li>Customizable product options</li>
        <li>Prompt delivery and reliable support</li>
        <li>Client-centric, ethical business approach</li>
      </ul>

    

      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Company Album</h3>
     <ImageSlider/>
     
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
