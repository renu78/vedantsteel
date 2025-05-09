import Image from "next/image";
import { X } from "lucide-react";

export default function ProductDetailModal({
  product,
  onClose,
  onInterest,
}: {
  product: any;
  onClose: () => void;
  onInterest: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-none p-4 transition-opacity animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-y-auto max-h-[90vh] opacity-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{product.title}</h2>

          {/* Image */}
          <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Features */}
          {product.features && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Features:</h3>
              <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                {Array.isArray(product.features)
                  ? product.features.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))
                  : Object.entries(product.features).map(([key, value], i) => (
                      <li key={i}>
                        <strong>{key}:</strong> {String(value)}
                      </li>
                    ))}
              </ul>
            </div>
          )}

          {/* Description */}
          <p className="mb-6 text-sm text-gray-700">
            We are offering a wide range of <strong>{product.title}</strong> to our clients.
          </p>

          {/* Applications */}
          {product.applications && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Applications:</h3>
              <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
                {product.applications.map((a: string, i: number) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Interest Button */}
          <div className="text-center">
            <button
              onClick={onInterest}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-2 rounded-full transition-all"
            >
              Yes, I’m Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
