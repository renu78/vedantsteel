// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust if your files are elsewhere
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 0.3s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };
  