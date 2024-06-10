/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      mint: "#cbf4f3",
      blue: "#032b44",
      mintExtreme: "#4BDFEC",
    },
    fontFamily: {
      primary: ["Neue Regrade", "sans-serif"],
      secondary: ["Gantari", "sans-serif"],
    },
  },
  plugins: [],
};
