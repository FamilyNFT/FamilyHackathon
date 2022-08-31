module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: "#F0EDDF",
        blackish: "#242424",
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
        rubik: "'Rubik Mono One', sans-serif",
        barlow: "'Barlow', sans-serif",
      },
      backgroundImage: {
        desktop: "url('/assets/images/bg.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
