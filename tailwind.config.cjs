/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryDark: '#f063c1',
        secondaryDark: '#f7c1ea',
        navDark: '#0f172a',
        primaryLight: '#B5127F',
        secondaryLight: '#9E0000',
        navLight: '#f1f5f9',
      },
      minHeight: {
        fullScreenMinHeight: 'calc(100vh - 68px)',
        fullScreenLastPage: 'calc(100vh - 148px)',
        fullScreenLastPageDesktop: 'calc(100vh - 80px)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
