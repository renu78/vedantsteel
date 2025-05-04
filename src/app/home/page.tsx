'use client';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Sidebar from '../componets/Sidebar';

const Home = () => {
  return (
    <>
    <Header />
    <div className="flex">
      
      <Sidebar/>
   
    <div className=" bg-white mx-auto  flex-grow ">
    <section className="bg-white py-12 px-4 md:px-16">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Main Product - Large Card */}
    <div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-lg p-5 bg-gray-500">
      <img
        src="images/Agriculture goods.jpeg"
        alt="Agriculture goods"
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-center text-white py-3">
        <div className="text-lg font-semibold">Agriculture Goods</div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
          <button className="bg-yellow-400 text-black py-1 px-4 rounded hover:bg-yellow-500 transition-colors">
            Get Quote
          </button>
        </div>
      </div>
    </div>

    {/* Small Product Cards */}
    <div className="grid grid-cols-2 gap-4">
      {[
        {
          img: 'images/HRPlate.jpeg',
          label: 'H R Plate',
        },
        {
          img: '/images/AngleChannel.jpeg',
          label: 'Angle Channel',
        },
        {
          img: '/images/M s Flat.jpeg',
          label: 'M S Flat',
        },
        {
          img: '/images/channel10mm.jpg',
          label: '10mm Mild Steel Channel',
        },
      ].map((item, idx) => (
        <div key={idx} className="relative group overflow-hidden rounded-xl shadow-md p-2 bg-gray-500">
          <img
            src={item.img}
            alt={item.label}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center py-2">
            <div className="text-sm font-medium">{item.label}</div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
              <button className="bg-yellow-400 text-black text-sm py-1 px-3 rounded hover:bg-yellow-500 transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





<section className="bg-white py-12 px-4 md:px-16">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
  <p className="text-lg text-gray-700 mb-6">
    We <strong>"Vedant steel."</strong> are a <strong>Engineering company</strong> of <strong> Agri Steel And trader of Mild Steel Angle, Mild Steel Beam, Mild Steel Flat Bar, Mild Steel Round Bar, Mild Steel Square Bar</strong>,etc.
</p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
    <div className="flex items-start gap-4">
      <i className="fas fa-industry text-2xl text-blue-600"></i>
      <div>
        <p className="font-semibold">Nature of Business</p>
        <p>Manufacturer, Engineering Workshop </p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <i className="fas fa-users text-2xl text-blue-600"></i>
      <div>
        <p className="font-semibold">Total Number of Employees</p>
        <p>51 to 100 People</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <i className="fas fa-calendar-alt text-2xl text-blue-600"></i>
      <div>
        <p className="font-semibold">GST Registration Date</p>
        <p>01-07-2017</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <i className="fas fa-balance-scale text-2xl text-blue-600"></i>
      <div>
        <p className="font-semibold">Legal Status of Firm</p>
        <p>Proprietory</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <i className="fas fa-chart-line text-2xl text-blue-600"></i>
      <div>
        <p className="font-semibold">Annual Turnover</p>
        <p>50-100cr</p>
      </div>
    </div>

   

    <div className="flex items-start gap-4">
      <i className="fas fa-file-invoice text-2xl text-blue-600"></i>
      <div>
        <p className="font-semibold">GST No.</p>
        <p>27AOQPB9220H1ZV</p>
      </div>
    </div>

    <div className="flex items-start gap-4">
      <i className="fas fa-id-badge text-2xl text-blue-600"></i>
      <div>
        <p className="font-semibold">UDYAM No.</p>
        <p>UDYAM-MH-01-0086551</p>
      </div>
    </div>
  </div>

  <div className="mt-10 text-center">
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
      Contact Us &gt;
    </button>
  </div>
</section>
<section className="bg-gray-800 text-white py-12 px-4">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    <form className="bg-white p-6 rounded shadow-md text-gray">
      <textarea
        className="w-full border border-gray-300 rounded p-4 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={5}
        placeholder="Describe your requirement in detail"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>

    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
