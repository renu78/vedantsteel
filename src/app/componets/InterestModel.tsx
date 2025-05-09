// components/InterestModal.tsx

'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface InterestModalProps {
  onClose: () => void;
  productTitle: string;
}

export default function InterestModal({ onClose, productTitle }: InterestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    mobileNo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastId = toast.loading('Sending inquiry...');

    try {
      const res = await fetch('/api/sendinquriy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productTitle }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Thank you for your inquiry!', { id: toastId });
        onClose();
      } else {
        toast.error('Failed to send inquiry.', { id: toastId });
      }
    } catch (err) {
      toast.error('Something went wrong.', { id: toastId });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Share your details with the supplier
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'company', 'website', 'mobileNo'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              placeholder={
                {
                  name: 'Full Name',
                  email: 'Email Address',
                  company: 'Company / Business Name',
                  website: 'Website URL',
                  mobileNo: 'Mobile Number',
                }[field]
              }
              required={field === 'name' || field === 'email'}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            />
          ))}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
