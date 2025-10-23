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
          900: '#283f20ff', // Dark royal green
          800: '#2E7D32',
          700: '#388E3C',
        },
        yellow: {
          400: 'rgba(105, 132, 109, 1)', // Gold
          500: '#7d9f7dff',
          600: '#426642ff',
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