/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#202733",
        "dark-gray-blue": "#313A48",
        "gray-blue": "#4F5D74",
        cyan: "#CEE3E9",
        "neon-green": "#53FFAA",
      },
      boxShadow: {
        oval: "0px 0px 40px #53FFAA",
      },
    },
  },
  plugins: [],
};
