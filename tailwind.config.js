/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0065fc',
        primaryDark: '#003c96',
        muted: '#f2f2f2',
        text: '#000',
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 3px 15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

