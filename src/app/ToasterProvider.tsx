'use client';
import { Toaster } from 'react-hot-toast';

export function ToastProvider() {
  return <Toaster position="top-center" toastOptions={{ style: { zIndex: 9999 } }} />;
}
