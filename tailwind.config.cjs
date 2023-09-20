/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-about': "url('/assets/about/building.png')",
        'hero-services': "url('/assets/services/equipment.png')",
        'hero-contact': "url('/assets/contact/office-phone.png')",
        'hero-book': "url('/assets/book/laptop.png')"
      },
      colors: {
        primary: {
          50: '#E4F2F6',
          100: '#4EABC2',
          200: '#D9EDF2',
          300: '#21535F',
          400: '#E8F9F1',
          500: '#143239'
        },
        gray: {
          50: '#F7FBFC',
          150: '#F1F3F3',
          250: '#E6E9EA',
          750: '#93A0A4',
          850: '#485356',
          950: '#1E2324'
        },
        blue: {
          50: '#FBFDFE',
          750: '#0B32FF'
        }
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      }
    },
    screens: {
      xm: { max: '475px' },
      // => @media (max-width: 475px) { ... }
      sml: '475px',
      // => @media (min-width: 475px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: []
};

module.exports = config;
