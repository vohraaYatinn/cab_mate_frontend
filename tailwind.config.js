/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customLightBlue: "#1444BD",
        customDarkBlue: "#0D0A23",
        customWhite: "#e74c3c",
      }
    },
  },
  plugins: [],
}
