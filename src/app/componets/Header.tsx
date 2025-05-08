import React, { useState } from 'react';
import Image from 'next/image';
import { FaEnvelope } from 'react-icons/fa';
import { CiCircleCheck, CiLocationOn } from 'react-icons/ci';
import { BsFillTelephoneFill } from 'react-icons/bs';
import InterestModal from '../componets/InterestModel'; // Import the InterestModal component

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="w-full bg-white shadow top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto p-4">
        
        {/* Left Section */}
        <div className="flex items-start space-x-4 w-full md:w-auto">
          {/* Logo */}
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />

          {/* Company Info */}
          <div>
            <h2 className="text-lg font-semibold text-black">Vedant Steel Pvt Ltd</h2>

            <div className="flex items-center text-sm text-black mt-1">
              <CiLocationOn className="text-blue-800 mr-1 text-xl" />
              <span>MIDC, AhilyaNagar, Maharashtra</span>
            </div>

            <div className="flex items-center text-sm text-black mt-1">
              <CiCircleCheck className="text-green-800 mr-1 text-xl" />
              <p>GST No:</p><span className="font-semibold"> 27AOQPB9220H1ZV</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {/* Call Info */}
          <div className="flex items-center border border-blue-500 rounded-md px-3 py-2 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors duration-200">
            <BsFillTelephoneFill className="text-blue-500 mr-2" />
            <div>
              <a
                href="tel:09421560875"
                className="text-blue-500 text-sm font-medium hover:text-blue-600 cursor-pointer transition-colors duration-200"
              >
                Call 09421560875
              </a>
              <p className="text-gray-500 text-xs">62% Response Rate</p>
            </div>
          </div>

          {/* Email Button */}
          <button
            onClick={toggleModal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md flex items-center"
          >
            <FaEnvelope className="mr-2" />
            <span>Send Email</span>
          </button>
        </div>
      </div>

      {/* Display Modal */}
      {isModalOpen && <InterestModal onClose={toggleModal} />}
    </header>
  );
};

export default Header;
