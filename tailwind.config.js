/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FDFBF7',
          dark: '#0A0A0A'
        },
        primary: '#E8571A',
        secondary: '#D4A017',
        surface: {
          light: '#FFFFFF',
          dark: '#141414'
        },
        surfaceAlt: {
          light: '#F4F1EB',
          dark: '#1F1F1F'
        },
        borderc: {
          light: 'rgba(0,0,0,0.08)',
          dark: 'rgba(255,255,255,0.06)'
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}