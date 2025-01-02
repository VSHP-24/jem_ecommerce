const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FEFCE8",
          100: "#FFFBC2",
          200: "#FFF487",
          300: "#FFE643",
          400: "#FFD20A",
          500: "#EFBA03",
          600: "#CE9000",
          700: "#A46604",
        },
      },
      screens: {
        mobile: "20em", //320 - 543
        tablet: "34em", // 544 - 656
        laptopS: "41em", // 657 - 865
        laptopL: "54em", // 866 -1200
        desktop: "75em", // 1201 - 1440},
      },
      fontFamily: {
        serif: ['"Dosis"', ...defaultTheme.fontFamily.serif],
      },
      fontWeight: {
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};
