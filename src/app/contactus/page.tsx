'use client';
import React, { useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Sidebar from '../componets/Sidebar';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: form.name ? '' : 'Please enter your name.',
      mobile: form.mobile ? '' : 'Please enter your mobile number.',
      message: form.message ? '' : 'Kindly describe your requirement.',
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(err => err !== '');
    if (!hasError) {
      console.log('Form submitted', form);
      alert('Form submitted successfully!');
      // Reset form
      setForm({ name: '', mobile: '', message: '' });
    }
  };

  return (
    <>
      <Header />
      <div className="flex  min-h-screen">
        {/* Sidebar */}
        <Sidebar />

      <main className="bg-gray-50 flex-grow  p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10 mt-10 ">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4 bg-gray-100 p-6 rounded-xl shadow-md">
            {/* Left: Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 ">Contact Person:</h3>
              <p className="text-gray-700 mb-6">Amrut Sali</p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Address:</h3>
              <p className="text-gray-700 mb-6">
                Vedant Steel<br />
                Nagar Manmad Road, Nagapur,<br />
                MIDC Area, Ahilyanagar 414111
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us:</h3>
              <p className="text-blue-700 font-bold text-lg mb-4">+918983486863</p>

             
            </div>

            {/* Right: Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3 ">
              <div>
                <label className="block text-black font-medium mb-1">Your Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="+91 Enter your number"
                  className={`text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`text-black w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Describe your requirement</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your requirement in detail"
                  className={`text-black w-full px-4 py-2 border rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold"
              >
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </main>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
