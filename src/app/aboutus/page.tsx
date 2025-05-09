'use client';

import Image from 'next/image';
import Factsheet from '../componets/FaceSheet';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import ImageSlider from '../componets/ImageSlider';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-gray-100 to-white min-h-screen flex justify-center py-10">
        <main className="max-w-4xl mx-auto px-6 sm:px-10 py-8 bg-white rounded-xl shadow-xl space-y-10 transition-transform duration-500 transform hover:scale-[1.02]">
          {/* About Us Header */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4 border-b-4 border-blue-500 inline-block pb-2">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Established in the year <strong>2011</strong> at Ahilyanagar (Maharashtra, India),{' '}
              <strong>Vedant Steel</strong> is a distinguished{' '}
              <strong>Manufacturer and Exporter</strong> of a premium range of{' '}
              <em>
                Agriculture goods, H R plate, Angle channel, Laser Cutting, MS Bar, MS Channel, MS Angle,
                Mild Steel Flats
              </em>{' '}
              and more.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Crafted using top-grade materials and cutting-edge technology, our products embody durability,
              strength, and precision. Each unit undergoes strict quality checks to ensure it meets international
              standards and our clients’ expectations.
            </p>
          </motion.section>

          {/* Factsheet Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Factsheet />
          </motion.section>

          {/* Why Choose Us Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold text-blue-800 mb-6">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
              <li>14+ years of industry expertise and client trust</li>
              <li>Premium raw materials with advanced production facilities</li>
              <li>Uncompromised quality assurance process</li>
              <li>Flexible and customizable solutions</li>
              <li>Timely delivery and proactive customer support</li>
              <li>Ethical, transparent, and client-focused practices</li>
            </ul>
          </motion.section>

          {/* Company Album Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-semibold text-blue-800 mb-6">Company Album</h3>
            <div className="rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl">
              <ImageSlider />
            </div>
          </motion.section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
