/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        viewport: '#161C24',
        primary: '#FA531B',
        neutral: '#F9F9F9'
      }
    }
  },
  plugins: []
}
