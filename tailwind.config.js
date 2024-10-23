/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Pacifico", "cursive"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
