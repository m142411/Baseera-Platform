/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Tajawal', 'sans-serif'],
      },
      colors: {
        green: {
          900: '#0A1207', // Dark royal green
          800: '#2E7D32',
          700: '#388E3C',
        },
        yellow: {
          400: '#FFD700', // Gold
          500: '#FFC107',
          600: '#FF8F00',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};