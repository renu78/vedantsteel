'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { CiCircleCheck, CiLocationOn } from 'react-icons/ci';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import InterestModal from '../componets/InterestModel';

const menu = [
  { name: 'Home', path: '/home' },
  { name: 'About Us', path: '/aboutus' },
  { name: 'Contact Us', path: '/contactus' },
  { name: 'Our Products', path: '/products' },
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full bg-white shadow-md top-0 z-50 border-b-4 border-blue-500">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto p-4">
        {/* Left Section */}
        <div className="flex items-start space-x-4 w-full md:w-auto">
          {/* Logo with animation */}
          <div className="transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Vedant Steel Pvt Ltd</h2>

            <div className="flex items-center text-sm text-black mt-2">
              <CiLocationOn className="text-blue-800 mr-2 text-xl" />
              <span>MIDC, AhilyaNagar, Maharashtra</span>
            </div>

            <div className="flex items-center text-sm text-black mt-1">
              <CiCircleCheck className="text-green-800 mr-2 text-xl" />
              <p>GST No:</p><span className="font-semibold"> 27AOQPB9220H1ZV</span>
            </div>
          </div>
        </div>

        {/* Right Section - Navigation */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          {/* Hamburger Menu Icon (for mobile) */}
          <button
            className="md:hidden text-2xl text-blue-600"
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>

          {/* Navigation Bar */}
          <nav className="hidden md:flex space-x-8">
            {menu.map((item) => (
              <li key={item.name} className="list-none">
                <Link
                  href={item.path}
                  className={`px-4 py-2 text-black hover:bg-gray-200 rounded-md transition-all duration-200 ${
                    pathname === item.path ? 'bg-[#F84D26] text-white shadow-md' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </nav>
        </div>
      </div>

      {/* Sidebar (for mobile or when toggled) */}
      {isSidebarOpen && (
        <motion.aside
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="w-64 h-screen bg-white shadow-xl px-6 py-8 border-r border-gray-200 absolute top-0 left-0 md:hidden"
        >
          <nav>
            <ul className="space-y-4">
              {menu.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block px-4 py-2 rounded-md transition-all duration-200 ${
                        isActive
                          ? 'bg-[#F84D26] text-white shadow-md'
                          : 'text-gray-800 hover:bg-gray-100 hover:text-[#F84D26]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </motion.aside>
      )}

      {/* Display Modal */}
      {isModalOpen && <InterestModal onClose={toggleModal} />}
    </header>
  );
};

export default Header;
