/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: "#cbf4f3",
        blue: "#032b44",
        mintExtreme: "#4BDFEC",
      },
      padding: {
        "side-space": "2em",
      },
      fontFamily: {
        primary: ["Neue Regrade", "sans-serif"],
        secondary: ["Gantari", "sans-serif"],
      },
      boxShadow:{
        primary: "rgba(76, 200, 211, 0.2) 0px 7px 50px 0px;"
      },
      borderColor:{
        light: "rgba(76, 200, 211, 0.25)"
      }
    },
  },
  plugins: [],
};
