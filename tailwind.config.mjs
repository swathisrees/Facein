/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {

        primary: {
          50: '#fff7f3',
          100: '#ffe7db',
          200: '#ffccad',
          300: '#ffb07e',
          400: '#ff9051',
          500: '#FF6108', // Primary Orange
          600: '#d94f06',
          700: '#b33f05',
          800: '#8c3103',
          900: '#6e2702',
          950: '#451801',
        },
        secondary: {
          50: '#f8f8f8',
          100: '#f1f1f1',
          200: '#e2e2e2',
          300: '#c4c4c4',
          400: '#a8a8a8',
          500: '#8c8c8c',
          600: '#6e6e6e',
          700: '#525252',
          800: '#3b3b3b',
          900: '#262626', // Dark Gray / Black
          950: '#0f0f0f',
        },
        accent: {
          50: '#fff6f0',
          100: '#ffdcc4',
          200: '#ffbe92',
          300: '#ff9e60',
          400: '#ff8235',
          500: '#FF6108', // Adjusted to match your orange
          600: '#d94f06',
          700: '#b33f05',
          800: '#8c3103',
          900: '#6e2702',
          950: '#451801',
        },
        warning: {
          50: '#fff5f3',
          100: '#ffd7cb',
          200: '#ffb99f',
          300: '#ff9a72',
          400: '#ff7b45',
          500: '#FF6108', // Adjusted to match your palette
          600: '#d94f06',
          700: '#b33f05',
          800: '#8c3103',
          900: '#6e2702',
          950: '#451801',
        },
        black: "#000000",
        white: "#FFFFFF",
        neonOrange: '#FF9100',
        transparentOrange: {
          50: 'rgba(255, 97, 8, 0.05)',
          100: 'rgba(255, 97, 8, 0.10)',
          200: 'rgba(255, 97, 8, 0.20)',
          300: 'rgba(255, 97, 8, 0.30)',
          400: 'rgba(255, 97, 8, 0.40)',
          500: 'rgba(255, 97, 8, 0.50)', // Transparent Orange at 50%
          600: 'rgba(255, 97, 8, 0.60)',
          700: 'rgba(255, 97, 8, 0.70)',
          800: 'rgba(255, 97, 8, 0.80)',
          900: 'rgba(255, 97, 8, 0.90)',
          950: 'rgba(255, 97, 8, 0.95)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
