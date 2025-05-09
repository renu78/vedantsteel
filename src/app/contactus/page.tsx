'use client';
import React, { useState } from 'react';
import Header from '../componets/Header';
import Footer from '../componets/Footer';
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
      <div className="flex flex-col min-h-screen bg-gray-100">
        <main className="flex-grow p-6">
          <div className="max-w-4xl mx-auto text-gray-900">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold text-center mb-12"
            >
              Get in Touch
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-semibold text-blue-700"
                >
                  Contact Information
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-700"
                >
                  <strong>Contact Person:</strong> Amrut Sali
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-700"
                >
                  <strong>Address:</strong> Vedant Steel, Nagar Manmad Road, Nagapur, MIDC Area, Ahilyanagar 414111
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-blue-800 font-bold text-lg"
                >
                  <strong>Call Us:</strong> +91 89834 86863
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.mobile ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 12345 67890"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <label className="block text-gray-700 font-medium mb-1">Your Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Describe your requirement"
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md font-semibold w-full"
                >
                  Contact Now
                </motion.button>

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
