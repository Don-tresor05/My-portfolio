/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#1E40AF",
        brandYellow: "#F59E0B",
      }
    },
  },
  plugins: [],
}
