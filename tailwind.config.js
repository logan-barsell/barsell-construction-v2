/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Scan the App Directory
    './src/components/**/*.{js,ts,jsx,tsx}', // Scan components
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px', // Define your custom xs breakpoint (adjust the pixel value as needed)
      },
      containers: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: 'orange', // orange color
        secondary: '#000000', // black color
        neutral: '#F8F8F8', // light gray for backgrounds, if needed
        nav: 'rgba(0, 0, 0, 0.7)',
        heroWhite: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white for hero section
        lightWhite: 'rgba(255, 255, 255, 0.2)',
        heroPrimary: 'rgba(255, 165, 0, 0.7)',
      },
      fontFamily: {
        primary: ['Alegreya SC', 'serif'], // For headings
        body: ['Roboto', 'sans-serif'], // A clean and modern font for normal text
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px (default size)
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
        12: '48px',
        14: '56px',
        16: '64px',
        20: '80px',
        24: '96px',
        28: '112px',
        32: '128px',
      },
      maxWidth: {
        xs: '20rem', // 320px
        sm: '24rem', // 384px
        md: '32rem', // 512px
        lg: '40rem', // 640px
        xl: '48rem', // 768px
        '2xl': '64rem', // 1024px
        '3xl': '80rem', // 1280px
        full: '100%',
      },
      boxShadow: {
        default: '0 2px 4px rgba(0, 0, 0, 0.1)', // Basic shadow
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)', // Lighter shadow
        md: '0 4px 6px rgba(0, 0, 0, 0.1)', // Medium shadow
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)', // Larger shadow
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)', // Extra large shadow
      },
      textShadow: {
        md: '2px 2px 8px rgba(0, 0, 0, 0.6)', // Adding custom shadow effect
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};
