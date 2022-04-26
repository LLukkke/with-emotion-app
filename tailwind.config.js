const plugin = require("tailwindcss/plugin");
const blue = {
  light: "#bbdefb",
  standard: "#2196F3",
  dark: "#1976d2",
};
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gray: {
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#E0E0E0",
          400: "#CCCCCC",
          500: "#949494",
          600: "#707070",
          700: "#333333",
          800: "#101010",
        },
        green: {
          light: "#E2FFDB",
          standard: "#54A300",
          dark: "#458500",
        },
        orange: {
          light: "#FBF1EA",
          standard: "#F38A00",
          dark: "#D47500",
        },
        red: {
          light: "#ffcdd2",
          standard: "#f44336",
          dark: "#D32F2F",
        },
        yellow: {
          light: "#FFF9C4",
          standard: "#FFEA00",
          dark: "#8A6702",
        },
        blue: {
          light: "#D6EAFF",
          standard: "#2196F3",
          dark: "#126CC5",
        },
        lemon: {
          light: "#FFF5C2",
          standard: "#FFEF9A",
          dark: "#FFD644",
        },
        mango: {
          light: "#ffe6b0",
          standard: "#feca57",
          dark: "#ff9f43",
        },
        charcoal: "#222f3e",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".outlined-disabled": {
          color: "#f5f5f5 !important",
          backgroundColor: "#ccc !important",
        },
        ".dark-blue": {
          color: blue.dark,
        },
      });
    }),
  ],
};
