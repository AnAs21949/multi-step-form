/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "hsl(213, 96%, 18%)",
        mainWhite: "hsl(217, 100%, 97%)",
        grayMain: "hsl(231, 11%, 63%)",
        borderColor: "hsl(229, 24%, 87%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        cd: "hsl(231, 11%, 63%)",
        mangolia: "hsl(231, 100%, 99%)",
        nextButtonBlue: "hsl(213, 96%, 18%)",
      },
      fontFamily: {
        body: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
