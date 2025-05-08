'use client';
import React, { useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
import Sidebar from '../componets/Sidebar';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', message: '' });
  const [errors, setErrors] = useState({ name: '', mobile: '', message: '' });
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');
    const newErrors = {
      name: form.name ? '' : 'Please enter your name.',
      mobile: form.mobile ? '' : 'Please enter your mobile number.',
      message: form.message ? '' : 'Kindly describe your requirement.',
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(err => err !== '');
    if (!hasError) {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });

        const data = await res.json();
        if (data.success) {
          toast.success('Message sent successfully! We will get back to you soon.');
          setForm({ name: '', mobile: '', message: '' });
        } else {
          toast.error('Something went wrong. Please try again.');
        }
      } catch (err) {
        toast.error('Failed to send message.');
        console.error(err);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="bg-gray-50 flex-grow p-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold text-center text-gray-800 mb-10 mt-6"
            >
              Get in Touch
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-x-8 gap-y-6 bg-white p-8 rounded-xl shadow-lg"
            >
              <div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Contact Person</h3>
                <p className="text-gray-700 mb-4">Amrut Sali</p>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Address</h3>
                <p className="text-gray-700 mb-4">
                  Vedant Steel<br />
                  Nagar Manmad Road, Nagapur,<br />
                  MIDC Area, Ahilyanagar 414111
                </p>
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">Call Us</h3>
                <p className="text-blue-800 font-bold text-lg">+91 89834 86863</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`text-black w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    className={`text-black w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.mobile ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 12345 67890"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`text-black w-full px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe your requirement"
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md font-semibold"
                >
                  Contact Now
                </button>

                {success && <p className="text-green-600 mt-2">{success}</p>}
              </form>
            </motion.div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
