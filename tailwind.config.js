/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e5ede5',
          200: '#c9d9c8',
          300: '#a0bd9f',
          400: '#739b72',
          500: '#537e52',
          600: '#406340',
          700: '#344f33',
          800: '#2b3f2b',
          900: '#243524',
        },
        warm: {
          50:  '#faf8f5',
          100: '#f3ede3',
          200: '#e8dbc8',
          300: '#d9c4a4',
          400: '#c8a97e',
          500: '#b8915e',
          600: '#a07a4d',
          700: '#856340',
          800: '#6d5136',
          900: '#59432e',
        },
        cream: '#faf8f5',
        stone: '#6b7280',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
