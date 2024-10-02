/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /text-(sm|lg|base|xl)/,
    },
    {
      pattern:
        /^(text|bg)-(blue|red|gray)-(100|200|300|400|500|600|700|800|900)$/,
    },
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#f0f2fc",
          200: "#e8ecfa",
          300: "#cfd7f4",
          400: "#647edd",
          500: "#5a71c7",
          600: "#5065b1",
        },
        gray: {
          100: "#f7f7f8",
          200: "#eeeef0",
          300: "#dadadd",
          400: "#b9bac0",
          500: "#93949d",
          600: "#767781",
          700: "#5f5f6a",
          800: "#434349",
          900: "#171719",
        },
        red: {
          100: "#fce6e7",
          200: "#fadadb",
          300: "#f5b2b6",
          400: "#e00512",
          500: "#ca0510",
          600: "#b3040e",
          700: "#a8040e",
          800: "#86030b",
          900: "#650208",
        },
      },
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["18px", "28px"],
      lg: ["30px", "60px"],
      xl: ["50px", "100px"],
    },
  },
  plugins: [],
};
