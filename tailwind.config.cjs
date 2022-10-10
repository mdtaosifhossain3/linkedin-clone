/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: { max: "1175px" },
      "2lg": { max: "1000px" },
      lg: { max: "933px" },
      "2md": { max: "730px" },
      md: { max: "554px" },
      sm: { max: "395px" },
    },
    extend: {},
  },
  plugins: [],
};
