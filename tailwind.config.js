/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F2F7F4',
          100: '#E1EDE6',
          200: '#C1DBCB',
          300: '#96BFAB',
          400: '#5F997E',
          500: '#2A6B4F',
          600: '#1E533D',
          700: '#163E2D',
          800: '#113023',
          900: '#0C2319',
          950: '#06130E',
          DEFAULT: '#163E2D',
        },
        gold: {
          50: '#FDFBF5',
          100: '#F9F4E5',
          200: '#F1E4BF',
          300: '#E7D095',
          400: '#DCBC68',
          500: '#D4A359',
          600: '#B88636',
          700: '#8E6221',
          800: '#674415',
          900: '#472E0D',
          DEFAULT: '#D4A359',
        },
        cream: {
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#FAF5EB',
          300: '#F5ECE0',
          400: '#EDE0CE',
          500: '#E2D0BA',
          DEFAULT: '#FAF5EB',
        },
        charcoal: {
          50: '#F6F6F6',
          100: '#E7E7E7',
          200: '#D1D1D1',
          300: '#B0B0B0',
          400: '#888888',
          500: '#636363',
          600: '#464646',
          700: '#323232',
          800: '#202221',
          900: '#141615',
          950: '#0B0C0C',
          DEFAULT: '#141615',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        accent: ['"Cinzel"', 'serif'],
      },
      backgroundImage: {
        'pattern-subtle': "radial-gradient(rgba(212, 163, 89, 0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(22, 62, 45, 0.08), 0 1px 4px -1px rgba(212, 163, 89, 0.06)',
        'warm-md': '0 8px 24px -4px rgba(22, 62, 45, 0.10), 0 4px 12px -2px rgba(212, 163, 89, 0.08)',
        'warm-lg': '0 16px 36px -6px rgba(22, 62, 45, 0.14), 0 8px 18px -4px rgba(212, 163, 89, 0.12)',
        'gold-glow': '0 0 25px rgba(212, 163, 89, 0.35)',
        'dark-card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
