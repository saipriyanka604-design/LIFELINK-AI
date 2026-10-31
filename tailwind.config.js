/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        healthcare: {
          blue: '#0066FF',
          darkBlue: '#0040B8',
          red: '#FF3B3B',
          darkRed: '#D00000'
        }
      }
    },
  },
  plugins: [],
}
