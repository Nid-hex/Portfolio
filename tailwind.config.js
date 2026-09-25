/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        emerald: {
          DEFAULT: '#047857',
          deep: '#065f46',
          light: '#059669',
        },
        ink: '#09090B',
        charcoal: '#18181B',
        studio: '#FAFAFA',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
