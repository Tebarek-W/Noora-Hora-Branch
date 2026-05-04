/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9922e',
          hover: '#b07d1f',
        },
        taupe: {
          50: '#f9f7f4',
          100: '#f0ede8',
          200: '#e5e1da',
        },
        'lux-gray': {
          100: '#f5f5f5',
          400: '#9ca3af',
          800: '#1f2937',
          900: '#111827',
        },
        'med-gray': '#4b5563',
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 10px 30px -10px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
