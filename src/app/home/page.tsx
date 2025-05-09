'use client';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import InterestModal from '../componets/InterestModel';
import { motion } from 'framer-motion';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row bg-gray-50">
        {/* Main Content Area */}
        <div className="flex-grow px-4 md:px-10 py-6">
          {/* Products Section */}
          <section className="py-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center text-gray-800 mb-10"
            >
              Our Products
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Product Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-xl bg-white"
              >
                <img
                  src="images/Agriculture goods.jpeg"
                  alt="Agriculture goods"
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-60 text-white text-center p-4">
                  <div className="text-lg font-semibold">Agriculture Goods</div>
                  <motion.button
                    onClick={toggleModal}
                    whileHover={{ scale: 1.05 }}
                    className="mt-3 bg-yellow-400 text-black font-medium py-1 px-5 rounded hover:bg-yellow-500 transition"
                  >
                    Get Quote
                  </motion.button>
                </div>
              </motion.div>

              {/* Small Product Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[ 
                  { img: 'images/HRPlate.jpeg', label: 'H R Plate' },
                  { img: '/images/AngleChannel.jpeg', label: 'Angle Channel' },
                  { img: '/images/M s Flat.jpeg', label: 'M S Flat' },
                  { img: '/images/Ms roundbar.png', label: 'Ms Round Bar' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="relative group overflow-hidden rounded-xl shadow-md bg-white"
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-60 text-white text-center py-2">
                      <div className="text-sm font-medium">{item.label}</div>
                      <button
                        onClick={toggleModal}
                        className="mt-2 bg-yellow-400 text-black text-sm py-1 px-3 rounded hover:bg-yellow-500 transition"
                      >
                        Get Quote
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {isModalOpen && <InterestModal onClose={toggleModal} />}
          </section>

          {/* About Us */}
          <section className="py-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              About Us
            </motion.h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We <strong>"Vedant Steel"</strong> are an <strong>engineering company</strong> and trader of{' '}
              <strong>Mild Steel Angle, Mild Steel Beam, Mild Steel Flat Bar, Round Bar, Square Bar</strong>, etc.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
              {[ 
                ['fas fa-industry', 'Nature of Business', 'Manufacturer, Engineering Workshop'],
                ['fas fa-users', 'Total Employees', '51 to 100 People'],
                ['fas fa-calendar-alt', 'GST Registration Date', '01-07-2017'],
                ['fas fa-balance-scale', 'Legal Status of Firm', 'Proprietory'],
                ['fas fa-chart-line', 'Annual Turnover', '50-100cr'],
                ['fas fa-file-invoice', 'GST No.', '27AOQPB9220H1ZV'],
                ['fas fa-id-badge', 'UDYAM No.', 'UDYAM-MH-01-0086551'],
              ].map(([icon, title, desc], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <i className={`${icon} text-2xl text-blue-600`}></i>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="contactus" className="inline-block">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                  Contact Us &gt;
                </button>
              </a>
            </div>
          </section>

          {/* Contact Form / Map */}
          <section className="bg-gray-800 text-white py-10">
            <div className="w-full mx-auto text-center">
              <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <iframe
                  title="Vedant Steel Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1524182776598!2d74.70958257373859!3d19.14480434981181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcbbf28d222e1b%3A0x507161046ba4847!2sVedant%20Steel!5e0!3m2!1sen!2sin!4v1746723466449!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
