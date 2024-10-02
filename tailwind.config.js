/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ["14px", "20px"],
      base: ["18px", "28px"],
      lg: ["30px", "60px"],
      xl: ["50px", "100px"],
    },
  },
  plugins: [],
};
